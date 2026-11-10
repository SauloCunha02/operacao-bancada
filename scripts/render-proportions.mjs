import {readFileSync,mkdirSync,writeFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import {build} from 'esbuild';
import {JSDOM,VirtualConsole} from 'jsdom';
import sharp from 'sharp';
import * as THREE from 'three';
import {SVGRenderer} from 'three/addons/renderers/SVGRenderer.js';
const require=createRequire(import.meta.url),label=process.argv[2]||'current';
const threeModule=require.resolve('three').replace(/three\.cjs$/,'three.module.js');
const {outputFiles}=await build({entryPoints:['src/game.js'],bundle:true,format:'iife',write:false,plugins:[{name:'geometry-review',setup(b){b.onResolve({filter:/^three$/},()=>({path:'three-review',namespace:'review'}));b.onLoad({filter:/.*/,namespace:'review'},()=>({resolveDir:process.cwd(),contents:`export * from ${JSON.stringify(threeModule)};export class WebGLRenderer{constructor(){this.domElement=document.createElement('canvas');this.shadowMap={};}setPixelRatio(){}setClearColor(){}setSize(){}render(scene,camera){globalThis.__scene=scene;globalThis.__camera=camera;}}`}));}}]});
const dom=new JSDOM(readFileSync('src/index.html','utf8'),{url:'http://localhost/',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()});
const w=dom.window;let nextFrame,now=w.performance.now(),width=1000,height=600;
w.matchMedia=()=>({matches:false});w.setTimeout=()=>0;w.clearTimeout=()=>{};w.requestAnimationFrame=cb=>nextFrame=cb;
w.ResizeObserver=class{constructor(cb){w.__resize=cb;}observe(){w.__resize();}};
w.HTMLCanvasElement.prototype.getContext=()=>({fillRect(){},fillText(){}});
Object.defineProperty(w.document.querySelector('#world'),'clientWidth',{get:()=>width});Object.defineProperty(w.document.querySelector('#world'),'clientHeight',{get:()=>height});
w.HTMLDialogElement.prototype.showModal=function(){this.setAttribute('open','');};w.HTMLDialogElement.prototype.close=function(){this.removeAttribute('open');this.dispatchEvent(new w.Event('close'));};
w.eval(outputFiles[0].text);function tick(n=1){for(let i=0;i<n;i++){now+=1000/60;nextFrame(now);}}
tick(90);if(!w.__scene)throw Error('Cena não inicializada.');
globalThis.document=w.document;
const scene=w.__scene,player=scene.getObjectByName('student-avatar');
// O SVGRenderer não reproduz mapas de sombra, texturas nem a luz hemisférica do WebGL.
// A luz ambiente complementar serve apenas para ler a geometria e as cores nesta prancha.
scene.add(new THREE.AmbientLight('#ffffff',.60));
scene.traverse(o=>{if(o.isDirectionalLight)o.intensity=.55;});
function svg(scene,camera,wid,hei){scene.updateMatrixWorld(true);const r=new SVGRenderer();r.setQuality('high');r.setSize(wid,hei);r.render(scene,camera);return r.domElement.outerHTML.replace('<svg ',`<svg x="0" y="0" `);}
function cameraCopy(){const c=w.__camera;return new THREE.PerspectiveCamera(c.fov,c.aspect,c.near,c.far).copy(c);}
const avatarScene=new THREE.Scene();avatarScene.background=new THREE.Color('#e7ede1');avatarScene.add(new THREE.AmbientLight('#ffffff',.75));const key=new THREE.DirectionalLight('#fff1d8',.65);key.position.set(-3,5,6);avatarScene.add(key);const model=player.clone();model.rotation.set(0,0,0);model.position.set(0,0,0);avatarScene.add(model);
for(const child of model.children){if(child.geometry?.type==='ConeGeometry'||child.geometry?.type==='CircleGeometry')child.visible=false;}
const front=new THREE.OrthographicCamera(-1.65,1.65,3.1,-.2,.1,50);front.position.set(0,0,9);front.lookAt(0,0,0);front.updateMatrixWorld();
const angled=front.clone();angled.position.set(6,1.7,9);angled.lookAt(0,1.4,0);angled.top=1.7;angled.bottom=-1.6;angled.updateProjectionMatrix();angled.updateMatrixWorld();
const first=svg(avatarScene,front,350,350),second=svg(avatarScene,angled,350,350);
const home=svg(scene,cameraCopy(),820,350);
w.document.querySelector('#missions-nav').click();w.document.querySelector('[data-case="1"]').click();tick(90);const desktop=svg(scene,cameraCopy(),950,530);
width=390;height=600;w.__resize();tick(90);const mobile=svg(scene,cameraCopy(),344,530);
const embed=(content,x,y,ww,hh)=>`<svg x="${x}" y="${y}" width="${ww}" height="${hh}" viewBox="${content.match(/viewBox="([^"]+)"/)[1]}">${content.replace(/^<svg[^>]*>/,'').replace(/<\/svg>$/,'')}</svg>`;
const board=`<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1090"><rect width="1600" height="1090" fill="#f5f6f2"/><g font-family="Arial,sans-serif" fill="#274334"><text x="28" y="35" font-size="23" font-weight="bold">Operação Bancada · ${label}</text><text x="28" y="59" font-size="13">Revisão da geometria real · renderização SVG sem interface, texturas ou sombras WebGL</text><text x="28" y="93" font-size="15">Avatar · frente</text><text x="408" y="93" font-size="15">Avatar · volume</text><text x="788" y="93" font-size="15">Praça · câmera inicial</text><text x="28" y="491" font-size="15">Bancada · perspectiva do jogador</text><text x="1060" y="491" font-size="15">Celular · perspectiva do jogador</text></g>${embed(first,28,108,350,350)}${embed(second,408,108,350,350)}${embed(home,788,108,784,350)}${embed(desktop,28,510,990,552)}${embed(mobile,1060,510,358,552)}</svg>`;
mkdirSync('reviews',{recursive:true});writeFileSync(`reviews/${label}.svg`,board);await sharp(Buffer.from(board)).png().toFile(`reviews/${label}.png`);
const geometry=new THREE.Box3().setFromObject(model);const size=geometry.getSize(new THREE.Vector3());writeFileSync(`reviews/${label}.json`,JSON.stringify({label,avatarBounds:{x:size.x,y:size.y,z:size.z},note:'Geometria real; renderização SVG sem interface, texturas ou sombras WebGL.'},null,2));
console.log(`reviews/${label}.png`);dom.window.close();
