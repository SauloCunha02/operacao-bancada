import * as THREE from 'three';
import {RoundedBoxGeometry} from 'three/addons/geometries/RoundedBoxGeometry.js';

// Escala própria inspirada na silhueta clássica: cabeça menor, tronco largo e membros inteiros.
export const AVATAR={height:2.84,torsoWidth:1.04,torsoHeight:1.04,armWidth:.48,armHeight:1.02,legWidth:.48,legHeight:1,headWidth:.76,headHeight:.68,footBottom:0};
const geometries=new Map();
export function createBlockAvatar(shirt='#527f65',skin='#d3a077',hair='#44372d',material=null){
  const mat=material||((color)=>new THREE.MeshStandardMaterial({color,roughness:.58,metalness:0}));
  const group=new THREE.Group(),limbs=[],shirtMeshes=[];
  function block(name,w,h,d,color,x,y,z,parent=group,radius=.035){
    const key=[w,h,d,radius].join(',');if(!geometries.has(key)){const geometry=new RoundedBoxGeometry(w,h,d,1,radius);geometry.userData.sharedAvatar=true;geometries.set(key,geometry);}
    const mesh=new THREE.Mesh(geometries.get(key),mat(color));mesh.name=name;mesh.position.set(x,y,z);mesh.castShadow=true;mesh.receiveShadow=true;parent.add(mesh);return mesh;
  }
  const torso=block('avatar-torso',1.04,1.04,.56,shirt,0,1.52,0);shirtMeshes.push(torso);
  const neck=new THREE.Mesh(new THREE.CylinderGeometry(.17,.17,.12,12),mat(skin));neck.position.y=2.08;neck.castShadow=true;group.add(neck);
  const head=new THREE.Mesh(new THREE.CylinderGeometry(.38,.38,.68,16),mat(skin));head.name='avatar-head';head.position.set(0,2.44,0);head.castShadow=true;head.receiveShadow=true;group.add(head);
  // Cabelo com volume pequeno: não altera a relação cabeça/tronco.
  block('avatar-hair',.79,.14,.73,hair,0,2.77,-.025,group,.06);
  block('avatar-hair-back',.72,.27,.17,hair,0,2.63,-.30,group,.03);
  block('avatar-hair-fringe',.39,.11,.12,hair,-.15,2.70,.31,group,.025);
  for(const side of [-1,1]){
    const arm=new THREE.Group();arm.name=side<0?'avatar-arm-left':'avatar-arm-right';arm.position.set(side*.78,2.03,0);group.add(arm);
    shirtMeshes.push(block('avatar-sleeve',.48,.72,.56,shirt,0,-.36,0,arm));
    block('avatar-hand',.46,.30,.54,skin,0,-.87,0,arm);
    const leg=new THREE.Group();leg.name=side<0?'avatar-leg-left':'avatar-leg-right';leg.position.set(side*.265,1,0);group.add(leg);
    block('avatar-trouser',.48,.91,.54,'#304b62',0,-.455,0,leg);
    block('avatar-shoe',.50,.16,.64,'#f4f2e8',0,-.92,.045,leg,.025);
    block('avatar-shoe-sole',.51,.045,.65,'#c9cec4',0,-.9775,.045,leg,.012);
    limbs.push(arm,leg);
  }
  // Olhos em pontos e sorriso simples, com a mesma leitura de longe e no celular.
  for(const side of [-1,1]){const eye=new THREE.Mesh(new THREE.SphereGeometry(.043,8,6),mat('#292c2c'));eye.scale.set(1,1.2,.35);eye.position.set(side*.13,2.47,.36);group.add(eye);}
  const smileCurve=new THREE.QuadraticBezierCurve3(new THREE.Vector3(-.14,2.34,.36),new THREE.Vector3(0,2.23,.39),new THREE.Vector3(.14,2.34,.36));
  const smile=new THREE.Mesh(new THREE.TubeGeometry(smileCurve,12,.012,5,false),mat('#694634'));group.add(smile);
  block('avatar-pocket',.25,.25,.025,'#b9d4ab',.245,1.68,.293,group,.016);
  block('avatar-badge',.15,.065,.014,'#f1f5dc',.245,1.72,.313,group,.006);
  block('avatar-back-mark',.32,.055,.018,'#c1dcc4',0,1.81,-.292,group,.008);
  block('avatar-back-mark-small',.19,.035,.018,'#9cc4ae',0,1.71,-.292,group,.006);
  block('avatar-shirt-seam',.015,.68,.012,'#719479',0,1.54,.285,group,.004);
  const shadow=new THREE.Mesh(new THREE.CircleGeometry(.74,24),new THREE.MeshBasicMaterial({color:'#53694a',transparent:true,opacity:.16,depthWrite:false}));shadow.rotation.x=-Math.PI/2;shadow.position.y=.012;group.add(shadow);
  group.userData.bodyHeight=AVATAR.height;
  return {group,torso,limbs,shirtMeshes};
}
