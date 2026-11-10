import * as THREE from 'three';
import {catalog} from './shop-data.js';
export function accessoryModel(item){
  const group=new THREE.Group();group.name='gear-'+item.id;
  const material=new THREE.MeshStandardMaterial({color:item.color,roughness:.45,metalness:.12});
  const dark=new THREE.MeshStandardMaterial({color:'#304251',roughness:.6});
  const glow=new THREE.MeshStandardMaterial({color:item.color,emissive:item.color,emissiveIntensity:.7,roughness:.3});
  const mesh=(geometry,mat,x,y,z)=>{const o=new THREE.Mesh(geometry,mat);o.position.set(x,y,z);o.castShadow=true;group.add(o);return o;};
  const box=(w,h,d,mat,x,y,z)=>mesh(new THREE.BoxGeometry(w,h,d),mat,x,y,z);
  if(item.kind==='visor'){
    box(.83,.22,.09,material,0,2.52,.37);box(.65,.12,.025,dark,0,2.52,.425);box(.12,.025,.03,glow,-.2,2.55,.445);
  }else if(item.kind==='cap'||item.kind==='hardhat'){
    mesh(new THREE.SphereGeometry(.43,16,8,0,Math.PI*2,0,Math.PI/2),material,0,2.75,0);
    if(item.kind==='cap')box(.74,.07,.36,material,0,2.77,.38);
    else{mesh(new THREE.CylinderGeometry(.49,.49,.08,16),material,0,2.78,0);box(.10,.23,.80,material,0,2.96,0);}
  }else if(item.kind==='headphones'){
    const band=mesh(new THREE.TorusGeometry(.46,.055,6,20,Math.PI),dark,0,2.53,0);band.rotation.y=Math.PI/2;
    for(const side of [-1,1])box(.14,.36,.31,material,side*.43,2.46,0);
  }else if(item.category==='back'){
    for(const side of [-1,1])box(.06,.82,.035,dark,side*.31,1.56,.30);
    if(item.kind==='jetpack'){
      box(.53,.66,.20,dark,0,1.61,-.42);
      for(const side of [-1,1]){mesh(new THREE.CylinderGeometry(.16,.14,.80,10),material,side*.32,1.62,-.48);mesh(new THREE.ConeGeometry(.13,.24,10),glow,side*.32,1.13,-.48).rotation.z=Math.PI;}
    }else{box(.78,.88,.32,material,0,1.55,-.47);box(.56,.26,.12,dark,0,1.29,-.68);box(.10,.10,.02,glow,.19,1.68,-.64);if(item.kind==='toolpack'){box(.08,.42,.08,dark,-.18,2.07,-.46);box(.24,.09,.09,material,-.18,2.24,-.46);}}
  }else{
    const ring=mesh(new THREE.TorusGeometry(.98,.035,6,48),glow,0,.08,0);ring.rotation.x=-Math.PI/2;
    const count=item.kind==='cosmic'?8:6;
    for(let i=0;i<count;i++){const angle=i*Math.PI*2/count,r=item.kind==='orbit'?1:1.08,o=mesh(item.kind==='cosmic'?new THREE.OctahedronGeometry(.075):new THREE.BoxGeometry(.085,.085,.085),glow,Math.cos(angle)*r,.25+(i%3)*.16,Math.sin(angle)*r);o.rotation.z=angle;}
    group.userData.animated=true;
  }
  return group;
}
export function setAccessories(avatar,equipped={}){
  const old=avatar.group.getObjectByName('shop-accessories');if(old){avatar.group.remove(old);const geometries=new Set(),materials=new Set();old.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)materials.add(o.material);});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());}
  const group=new THREE.Group();group.name='shop-accessories';
  for(const id of Object.values(equipped)){const item=catalog.find(i=>i.id===id);if(item)group.add(accessoryModel(item));}
  avatar.group.add(group);return group;
}
export function animateAccessories(group,time,reduced=false){if(!group)return;for(const child of group.children)if(child.userData.animated)child.rotation.y=reduced?0:time*.7;}
