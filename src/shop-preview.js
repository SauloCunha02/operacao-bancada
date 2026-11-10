import * as THREE from 'three';
import {createBlockAvatar} from './avatar.js';
import {setAccessories,animateAccessories} from './shop-visuals.js';
export function createShopPreview(container,{shirt,equipped,dark=false,low=false}){
  let renderer;
  try{renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'low-power'});}catch{return null;}
  renderer.setPixelRatio(Math.min(devicePixelRatio,low?1:1.5));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(38,1,.1,30);camera.position.set(0,1.9,6.2);camera.lookAt(0,1.45,0);
  scene.add(new THREE.HemisphereLight('#efffff','#43515e',2.4));const key=new THREE.DirectionalLight('#ffffff',3);key.position.set(-3,5,4);scene.add(key);
  const avatar=createBlockAvatar(shirt);scene.add(avatar.group);let gear=setAccessories(avatar,equipped),yaw=-.3,auto=true,drag=null,alive=true,frameId;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const pedestal=new THREE.Mesh(new THREE.CylinderGeometry(1.35,1.5,.12,40),new THREE.MeshStandardMaterial({color:dark?'#344f48':'#d6e3c8',roughness:.75}));pedestal.position.y=-.075;scene.add(pedestal);
  renderer.domElement.setAttribute('aria-label','Prévia 3D do seu avatar. Arraste para girar.');container.append(renderer.domElement);container.classList.add('preview-ready');
  function resize(){const w=Math.max(container.clientWidth,240),h=Math.max(container.clientHeight,290);renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();}
  const observer=new ResizeObserver(resize);observer.observe(container);resize();
  renderer.domElement.addEventListener('pointerdown',e=>{drag={id:e.pointerId,x:e.clientX};renderer.domElement.setPointerCapture?.(e.pointerId);auto=false;});
  renderer.domElement.addEventListener('pointermove',e=>{if(drag?.id!==e.pointerId)return;yaw+=(e.clientX-drag.x)*.013;drag.x=e.clientX;});
  for(const type of ['pointerup','pointercancel','lostpointercapture'])renderer.domElement.addEventListener(type,()=>drag=null);
  let previous=performance.now(),elapsed=0;
  function frame(now){if(!alive)return;const dt=Math.min((now-previous)/1000,.05);previous=now;elapsed+=dt;if(auto&&!reduced)yaw+=dt*.3;avatar.group.rotation.y=yaw;animateAccessories(gear,elapsed,reduced);renderer.render(scene,camera);frameId=requestAnimationFrame(frame);}
  frameId=requestAnimationFrame(frame);
  return {update(shirt,equipped){avatar.shirtMeshes.forEach(o=>o.material.color.set(shirt));gear=setAccessories(avatar,equipped);},toggle(){auto=!auto;return auto;},dispose(){alive=false;cancelAnimationFrame(frameId);observer.disconnect();const geometries=new Set(),materials=new Set();scene.traverse(o=>{if(o.geometry&&!o.geometry.userData.sharedAvatar)geometries.add(o.geometry);if(o.material)materials.add(o.material);});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());renderer.dispose();renderer.domElement.remove();}};
}
