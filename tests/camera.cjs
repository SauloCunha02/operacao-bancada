const assert=require('node:assert/strict');
const {JSDOM}=require('jsdom');
(async()=>{
  const THREE=await import('three');
  const {ThirdPersonCamera,bindCameraGestures}=await import('../src/camera.js');
  const close=(a,b,tolerance=.001)=>assert.ok(Math.abs(a-b)<tolerance,`${a} deve estar perto de ${b}`);
  const position=new THREE.Vector3(0,.12,0),camera=new THREE.PerspectiveCamera(60,1,.1,140),orbit=new ThirdPersonCamera(camera);
  orbit.update(position,0,{snap:true});assert.ok(camera.isPerspectiveCamera);close(orbit.target.y,1.47);close(camera.position.distanceTo(orbit.target),8);assert.ok(camera.position.z>position.z);
  let direction=orbit.movement(0,-1);close(direction.x,0);close(direction.z,-1);
  orbit.yaw=Math.PI/2;direction=orbit.movement(0,-1);close(direction.x,-1);close(direction.z,0);direction=orbit.movement(1,0);close(direction.x,0);close(direction.z,-1);
  orbit.recenter(Math.PI);position.set(6,.12,-3);for(let i=0;i<120;i++)orbit.update(position,1/60);close(orbit.target.x,6);close(orbit.target.z,-3);close(position.y,.12);
  const projected=orbit.target.clone().project(camera);close(projected.x,0);close(projected.y,0);
  orbit.rotate(30000,-100000);close(orbit.pitch,.16);assert.ok(Math.abs(orbit.yaw)<=Math.PI);orbit.rotate(0,100000);close(orbit.pitch,1.08);
  orbit.zoom(.0001);close(orbit.distance,4);orbit.zoom(100000);close(orbit.distance,15);orbit.zoom(NaN);close(orbit.distance,15);
  orbit.recenter(0);close(orbit.yaw,-Math.PI);close(orbit.pitch,.4);
  // Parede entre personagem e câmera: contrair imediatamente, expandir suavemente.
  const wall=new THREE.Mesh(new THREE.BoxGeometry(6,6,.2),new THREE.MeshBasicMaterial());wall.position.set(0,3,4);wall.updateMatrixWorld(true);
  const protectedOrbit=new ThirdPersonCamera(camera,[wall]);position.set(0,.12,0);protectedOrbit.update(position,0,{snap:true});assert.ok(protectedOrbit.actualDistance<4,'A câmera precisa parar antes da parede');
  assert.ok(camera.position.z<3.9,'A câmera não pode atravessar a parede');wall.position.x=100;wall.updateMatrixWorld(true);protectedOrbit.update(position,1/60);assert.ok(protectedOrbit.actualDistance<8,'A volta à distância anterior deve ser suave');for(let i=0;i<180;i++)protectedOrbit.update(position,1/60);close(protectedOrbit.actualDistance,8);
  // Obstáculo fora do raio central: os raios laterais protegem os cantos da câmera.
  const edge=new THREE.Mesh(new THREE.BoxGeometry(.12,6,.2),new THREE.MeshBasicMaterial());edge.position.set(.29,3,4);edge.updateMatrixWorld(true);const edgeOrbit=new ThirdPersonCamera(camera,[edge]);edgeOrbit.update(position,0,{snap:true});assert.ok(edgeOrbit.actualDistance<4,'A proteção lateral deve detectar o obstáculo');
  protectedOrbit.update(new THREE.Vector3(-8,.12,7),0,{snap:true});close(protectedOrbit.target.x,-8);close(protectedOrbit.target.z,7);
  protectedOrbit.update(new THREE.Vector3(8,.12,-7),1/60,{reducedMotion:true});close(protectedOrbit.target.x,8);close(protectedOrbit.target.z,-7);
  // Gestos de mouse/toque: arrastar não seleciona, pinça não gira e cancelamento não dispara toque.
  const dom=new JSDOM('<canvas></canvas>');const canvas=dom.window.document.querySelector('canvas');let taps=0,blocked=false;
  const gestures=new ThirdPersonCamera(camera);const binding=bindCameraGestures(canvas,gestures,{onTap:()=>taps++,blocked:()=>blocked});
  function pointer(type,id,x,y,button=0){const e=new dom.window.MouseEvent(type,{clientX:x,clientY:y,button,bubbles:true,cancelable:true});Object.defineProperty(e,'pointerId',{value:id});canvas.dispatchEvent(e);return e;}
  pointer('pointerdown',1,50,50);pointer('pointerup',1,51,51);assert.equal(taps,1);
  pointer('pointerdown',1,50,50);pointer('pointermove',1,100,75);pointer('pointerup',1,100,75);assert.equal(taps,1);assert.ok(gestures.yaw<0);assert.ok(gestures.pitch>.4);
  const oldYaw=gestures.yaw;pointer('pointerdown',2,50,50,2);pointer('pointermove',2,90,50,2);pointer('pointerup',2,90,50,2);assert.ok(gestures.yaw<oldYaw);assert.equal(taps,1);
  const wheel=new dom.window.WheelEvent('wheel',{deltaY:100,cancelable:true});const distance=gestures.distance;canvas.dispatchEvent(wheel);assert.ok(wheel.defaultPrevented);assert.ok(gestures.distance>distance);
  const beforePinch=gestures.distance,yaw=gestures.yaw;pointer('pointerdown',3,100,100);pointer('pointerdown',4,200,100);pointer('pointermove',4,250,100);assert.ok(gestures.distance<beforePinch);close(gestures.yaw,yaw);pointer('pointerup',4,250,100);pointer('pointerup',3,100,100);assert.equal(taps,1);
  pointer('pointerdown',5,80,80);pointer('pointercancel',5,80,80);pointer('pointerup',5,80,80);assert.equal(taps,1);
  pointer('pointerdown',6,80,80);binding.cancel();pointer('pointermove',6,200,80);close(gestures.yaw,yaw);
  blocked=true;pointer('pointerdown',7,80,80);pointer('pointermove',7,200,80);pointer('pointerup',7,200,80);assert.equal(taps,1);close(gestures.yaw,yaw);
  dom.window.close();console.log('OK: perspectiva, acompanhamento, movimento relativo, limites de rotação/zoom, colisão central e lateral, suavização, chegada instantânea, movimento reduzido, mouse, pinça e cancelamento de gestos.');
})();
