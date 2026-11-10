import * as THREE from 'three';
import {mkdir} from 'node:fs/promises';
import sharp from 'sharp';
import {createBlockAvatar} from '../src/avatar.js';
import {catalog,looks} from '../src/shop-data.js';
import {outfits} from '../src/rules.js';
import {setAccessories} from '../src/shop-visuals.js';
import {renderGeometry} from './software-render.mjs';
await mkdir('dist/shop',{recursive:true});
for(const item of [...catalog,...looks,...outfits.map((o,i)=>({...o,id:'uniform-'+i,category:'uniform'}))]){
  const scene=new THREE.Scene();scene.background=new THREE.Color('#e7ede3');const avatar=createBlockAvatar(item.category==='uniform'?item.color:outfits[item.skin||0].color);avatar.group.rotation.y=item.category==='back'?Math.PI+.45:-.35;scene.add(avatar.group);
  if(item.category==='looks')setAccessories(avatar,Object.fromEntries(item.items.map(id=>[catalog.find(i=>i.id===id).category,id])));
  else if(item.category!=='uniform')setAccessories(avatar,{[item.category]:item.id});
  const camera=new THREE.PerspectiveCamera(40,1,.1,20);camera.position.set(0,1.8,5.7);camera.lookAt(0,1.5,0);
  const png=await renderGeometry(scene,camera,350,350);await sharp(png).webp({quality:85}).toFile('dist/shop/'+item.id+'.webp');
}
