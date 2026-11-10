import * as THREE from 'three';
import sharp from 'sharp';

// Renderização de revisão sem navegador: geometria real, projeção real e depth buffer.
// Iluminação difusa simplificada; não reproduz texturas, sombras ou reflexos WebGL.
export async function renderGeometry(scene,camera,width,height){
  scene.updateMatrixWorld(true);camera.updateMatrixWorld(true);
  const pixels=Buffer.alloc(width*height*4),depth=new Float32Array(width*height).fill(Infinity);
  const bg=scene.background?.isColor?scene.background:new THREE.Color('#e7ede1');
  const srgb=v=>Math.round(255*THREE.MathUtils.clamp(v<=.0031308?v*12.92:1.055*Math.pow(v,1/2.4)-.055,0,1));
  const background=[srgb(bg.r),srgb(bg.g),srgb(bg.b),255];for(let i=0;i<pixels.length;i+=4){pixels[i]=background[0];pixels[i+1]=background[1];pixels[i+2]=background[2];pixels[i+3]=255;}
  const vp=new THREE.Matrix4().multiplyMatrices(camera.projectionMatrix,camera.matrixWorldInverse);
  const light=new THREE.Vector3(-.4,.8,.55).normalize();
  const planes=[v=>v.w+v.x,v=>v.w-v.x,v=>v.w+v.y,v=>v.w-v.y,v=>v.w+v.z,v=>v.w-v.z];
  function clip(vertices){for(const plane of planes){const output=[];for(let i=0;i<vertices.length;i++){const a=vertices[i],b=vertices[(i+1)%vertices.length],da=plane(a),db=plane(b);if(da>=0)output.push(a);if((da>=0)!==(db>=0))output.push(a.clone().lerp(b,da/(da-db)));}vertices=output;if(vertices.length<3)break;}return vertices;}
  const edge=(a,b,x,y)=>(x-a.x)*(b.y-a.y)-(y-a.y)*(b.x-a.x);
  function raster(a,b,c,color){
    const v=[a,b,c].map(p=>({x:(p.x/p.w*.5+.5)*width,y:(.5-p.y/p.w*.5)*height,z:p.z/p.w}));
    [a,b,c]=v;const area=edge(a,b,c.x,c.y);if(Math.abs(area)<1e-6)return;
    const minX=Math.max(0,Math.floor(Math.min(a.x,b.x,c.x))),maxX=Math.min(width-1,Math.ceil(Math.max(a.x,b.x,c.x)));
    const minY=Math.max(0,Math.floor(Math.min(a.y,b.y,c.y))),maxY=Math.min(height-1,Math.ceil(Math.max(a.y,b.y,c.y)));
    for(let y=minY;y<=maxY;y++)for(let x=minX;x<=maxX;x++){
      const u=edge(b,c,x+.5,y+.5)/area,v=edge(c,a,x+.5,y+.5)/area,w=1-u-v;if(u<-.0001||v<-.0001||w<-.0001)continue;
      const z=u*a.z+v*b.z+w*c.z,index=y*width+x;if(z>=depth[index])continue;depth[index]=z;const at=index*4;pixels[at]=color[0];pixels[at+1]=color[1];pixels[at+2]=color[2];
    }
  }
  scene.traverseVisible(mesh=>{
    if(!mesh.isMesh)return;const material=Array.isArray(mesh.material)?mesh.material[0]:mesh.material;if(!material?.color||material.opacity<.5)return;
    const geometry=mesh.geometry,positions=geometry.attributes.position,normals=geometry.attributes.normal,indices=geometry.index;
    if(!positions)return;const mvp=new THREE.Matrix4().multiplyMatrices(vp,mesh.matrixWorld),normalMatrix=new THREE.Matrix3().getNormalMatrix(mesh.matrixWorld);
    const vertices=[],worldNormals=[];
    for(let i=0;i<positions.count;i++){vertices.push(new THREE.Vector4(positions.getX(i),positions.getY(i),positions.getZ(i),1).applyMatrix4(mvp));if(normals)worldNormals.push(new THREE.Vector3().fromBufferAttribute(normals,i).applyMatrix3(normalMatrix).normalize());}
    const count=indices?indices.count:positions.count;
    for(let i=0;i<count;i+=3){const ids=[0,1,2].map(j=>indices?indices.getX(i+j):i+j),triangle=clip(ids.map(n=>vertices[n]));if(triangle.length<3)continue;
      const normal=normals?worldNormals[ids[0]].clone().add(worldNormals[ids[1]]).add(worldNormals[ids[2]]).normalize():new THREE.Vector3(0,1,0);
      const illumination=material.isMeshBasicMaterial?1:.65+.35*Math.max(0,normal.dot(light));
      const color=[srgb(material.color.r*illumination),srgb(material.color.g*illumination),srgb(material.color.b*illumination)];
      for(let t=1;t<triangle.length-1;t++)raster(triangle[0],triangle[t],triangle[t+1],color);
    }
  });
  return sharp(pixels,{raw:{width,height,channels:4}}).png().toBuffer();
}
