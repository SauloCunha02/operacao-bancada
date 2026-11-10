const assert=require('node:assert/strict');
const fs=require('node:fs');
const {JSDOM,VirtualConsole}=require('jsdom');
const {build}=require('esbuild');
(async()=>{
  const threeModule=require.resolve('three').replace(/three\.cjs$/,'three.module.js');
  const {outputFiles}=await build({entryPoints:['src/game.js'],bundle:true,format:'iife',write:false,target:'es2022',plugins:[{
    name:'headless-scene-test',setup(b){b.onResolve({filter:/^three$/},()=>({path:'three-test',namespace:'world-test'}));b.onLoad({filter:/.*/,namespace:'world-test'},()=>({resolveDir:process.cwd(),contents:`export * from ${JSON.stringify(threeModule)}; export class WebGLRenderer { constructor(){this.domElement=document.createElement('canvas');this.shadowMap={};}setPixelRatio(){}setClearColor(){}setSize(){}render(scene,camera){globalThis.__scene=scene;globalThis.__camera=camera;}}`}));}
  }]});
  const dom=new JSDOM(fs.readFileSync('src/index.html','utf8'),{url:'http://localhost/',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()});
  const w=dom.window;let nextFrame,now=w.performance.now();const errors=[];
  w.addEventListener('error',e=>errors.push(e.error));
  w.matchMedia=()=>({matches:false});w.setTimeout=()=>0;w.clearTimeout=()=>{};w.requestAnimationFrame=cb=>{nextFrame=cb;};
  w.ResizeObserver=class{constructor(cb){this.cb=cb;}observe(){this.cb();}};
  w.HTMLCanvasElement.prototype.getContext=()=>({fillRect(){},fillText(){}});
  Object.defineProperty(w.document.querySelector('#world'),'clientWidth',{value:1050});Object.defineProperty(w.document.querySelector('#world'),'clientHeight',{value:600});
  w.HTMLDialogElement.prototype.showModal=function(){this.setAttribute('open','');};w.HTMLDialogElement.prototype.close=function(){this.removeAttribute('open');this.dispatchEvent(new w.Event('close'));};
  w.eval(outputFiles[0].text);
  function tick(n=1){for(let i=0;i<n;i++){now+=1000/60;assert.ok(nextFrame,'Loop de animação não iniciado');nextFrame(now);}}
  function click(selector){const el=w.document.querySelector(selector);assert.ok(el,selector);el.click();}
  tick();assert.ok(!w.document.querySelector('#world-fallback'),'Mundo deve inicializar com o renderer de teste');
  assert.ok(w.__scene.children.length>=3);const player=w.__scene.getObjectByName('student-avatar');assert.ok(player);assert.equal(player.position.z,7);
  for(const id of [1,2,3,4,5,1,5,2,4,3]){
    click(`[data-travel="${id}"]`);let frames=0;while(!w.document.querySelector('#panel').open&&frames<1500){tick();frames++;}
    assert.ok(w.document.querySelector('#panel').open,`Avatar não chegou à estação ${id}: x=${player.position.x}, z=${player.position.z}`);
    assert.match(w.document.querySelector('#panel-kicker').textContent,new RegExp('ESTAÇÃO 0'+id));
    click('#close-panel');
  }
  click('#camera-reset');tick();const before=player.position.clone();
  w.dispatchEvent(new w.KeyboardEvent('keydown',{key:'d',bubbles:true,cancelable:true}));tick(30);w.dispatchEvent(new w.KeyboardEvent('keyup',{key:'d',bubbles:true}));tick();assert.ok(player.position.distanceTo(before)>.5,'Teclado deve mover o avatar');
  click('#map-button');click('[data-mentor]');assert.equal(errors.length,0,errors.map(e=>e?.stack).join('\n'));assert.ok(!w.document.querySelector('#panel').open,'Mapa precisa fechar antes da caminhada at? Lia');let frames=0;while(!w.document.querySelector('#panel').open&&frames<1500){tick();frames++;}assert.ok(w.document.querySelector('#panel').open,`Mentora inacess?vel: ${player.position.x}, ${player.position.z}`);assert.match(w.document.querySelector('#panel-kicker').textContent,/MENTORA LIA/);click('#close-panel');
  click('#camera-reset');tick();w.dispatchEvent(new w.KeyboardEvent('keydown',{key:'s',bubbles:true,cancelable:true}));tick(500);w.dispatchEvent(new w.KeyboardEvent('keyup',{key:'s',bubbles:true}));assert.ok(Math.abs(player.position.x)<=17.2&&Math.abs(player.position.z)<=14.2,'Avatar deve respeitar os limites');
  assert.equal(errors.length,0,errors.map(e=>e?.stack).join('\n'));assert.ok(Number.isFinite(w.__camera.position.x));
  dom.window.close();console.log('OK: cena Three.js, 10 rotas entre as cinco estações com colisões, teclado, limites, câmera e caminho até a mentora. Renderer substituído: não valida aparência ou desempenho WebGL.');
})();
