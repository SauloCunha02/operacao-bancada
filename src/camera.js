import * as THREE from 'three';

// Câmera orbital em terceira pessoa. O eixo horizontal do movimento acompanha a visão.
export class ThirdPersonCamera {
  constructor(camera,obstacles=[]){
    this.camera=camera;this.obstacles=obstacles;
    this.yaw=0;this.pitch=.4;this.distance=8;this.actualDistance=8;
    this.target=new THREE.Vector3();this.initialized=false;
    this.ray=new THREE.Raycaster();this.ray.near=0;
    this.offset=new THREE.Vector3();this.direction=new THREE.Vector3();
    this.origin=new THREE.Vector3();this.right=new THREE.Vector3();this.up=new THREE.Vector3();
    this.focus=new THREE.Vector3();this.sampleOffsets=[[0,0],[.26,.2],[-.26,.2],[.26,-.2],[-.26,-.2]];
  }
  rotate(dx,dy){
    this.yaw=THREE.MathUtils.euclideanModulo(this.yaw-dx*.006+Math.PI,Math.PI*2)-Math.PI;
    this.pitch=THREE.MathUtils.clamp(this.pitch+dy*.004,.16,1.08);
  }
  zoom(factor){if(Number.isFinite(factor)&&factor>0)this.distance=THREE.MathUtils.clamp(this.distance*factor,4,15);}
  recenter(heading=Math.PI){this.yaw=heading-Math.PI;this.pitch=.4;}
  movement(x,y){
    const cos=Math.cos(this.yaw),sin=Math.sin(this.yaw);
    return {x:x*cos+y*sin,z:-x*sin+y*cos};
  }
  update(playerPosition,dt,{snap=false,reducedMotion=false}={}){
    this.focus.copy(playerPosition);this.focus.y+=1.35;
    if(snap||!this.initialized||reducedMotion)this.target.copy(this.focus);
    else this.target.lerp(this.focus,1-Math.exp(-14*dt));
    this.initialized=true;
    const sin=Math.sin(this.yaw),cos=Math.cos(this.yaw),elevation=Math.sin(this.pitch),horizontal=Math.cos(this.pitch);
    this.direction.set(sin*horizontal,elevation,cos*horizontal);
    this.right.set(cos,0,-sin);this.up.set(-sin*elevation,horizontal,-cos*elevation);
    let safeDistance=this.distance;
    // Cinco raios protegem o centro e os cantos próximos da câmera contra paredes e objetos.
    for(const [x,y]of this.sampleOffsets){
      this.origin.copy(this.target).addScaledVector(this.right,x).addScaledVector(this.up,y);
      this.ray.set(this.origin,this.direction);this.ray.far=this.distance+.35;
      const hit=this.ray.intersectObjects(this.obstacles,false)[0];
      if(hit)safeDistance=Math.min(safeDistance,Math.max(.6,hit.distance-.4));
    }
    if(snap||safeDistance<this.actualDistance||reducedMotion)this.actualDistance=safeDistance;
    else this.actualDistance=THREE.MathUtils.lerp(this.actualDistance,safeDistance,1-Math.exp(-5*dt));
    this.offset.copy(this.direction).multiplyScalar(this.actualDistance);
    this.camera.position.copy(this.target).add(this.offset);
    this.camera.lookAt(this.target);this.camera.updateMatrixWorld();
  }
}

// Um arraste controla a câmera; um toque/clique curto continua selecionando a bancada.
// Cada ponteiro é acompanhado separadamente para aceitar joystick + olhar simultâneos.
export function bindCameraGestures(canvas,orbit,{onTap=()=>{},blocked=()=>false}={}){
  const pointers=new Map();let pinchDistance=0;
  const distance=()=>{const [a,b]=[...pointers.values()];return a&&b?Math.hypot(a.x-b.x,a.y-b.y):0;};
  const down=e=>{
    if(blocked()||e.button===1)return;
    e.preventDefault();pointers.set(e.pointerId,{x:e.clientX,y:e.clientY,startX:e.clientX,startY:e.clientY,button:e.button,moved:false});
    canvas.setPointerCapture?.(e.pointerId);
    if(pointers.size>1){pointers.forEach(p=>p.moved=true);pinchDistance=distance();}
  };
  const move=e=>{
    const p=pointers.get(e.pointerId);if(!p||blocked())return;
    e.preventDefault();const dx=e.clientX-p.x,dy=e.clientY-p.y;p.x=e.clientX;p.y=e.clientY;
    if(pointers.size>1){const next=distance();if(pinchDistance>0&&next>0)orbit.zoom(pinchDistance/next);pinchDistance=next;return;}
    if(!p.moved&&Math.hypot(p.x-p.startX,p.y-p.startY)>5){p.moved=true;orbit.rotate(p.x-p.startX,p.y-p.startY);}
    else if(p.moved)orbit.rotate(dx,dy);
  };
  const end=e=>{
    const p=pointers.get(e.pointerId);if(!p)return;
    pointers.delete(e.pointerId);pinchDistance=0;
    // pointerup pode chegar sem pointermove depois de uma interação cancelada pelo sistema.
    const moved=p.moved||Math.hypot(e.clientX-p.startX,e.clientY-p.startY)>5;
    if(e.type==='pointerup'&&!moved&&p.button===0&&!blocked())onTap(e.clientX,e.clientY);
    if(canvas.hasPointerCapture?.(e.pointerId))canvas.releasePointerCapture(e.pointerId);
  };
  const wheel=e=>{if(blocked())return;e.preventDefault();orbit.zoom(Math.exp(THREE.MathUtils.clamp(e.deltaY,-200,200)*.0015));};
  const context=e=>e.preventDefault();
  const cancel=()=>{pointers.clear();pinchDistance=0;};
  canvas.addEventListener('pointerdown',down);canvas.addEventListener('pointermove',move);
  for(const type of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(type,end);
  canvas.addEventListener('wheel',wheel,{passive:false});canvas.addEventListener('contextmenu',context);
  return {cancel};
}
