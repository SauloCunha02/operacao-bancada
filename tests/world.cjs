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
  w.ResizeObserver=class{constructor(cb){this.cb=cb;w.__resize=cb;}observe(){this.cb();}};
  w.HTMLElement.prototype.setPointerCapture=function(id){this._captured??=new Set();this._captured.add(id);};
  w.HTMLElement.prototype.hasPointerCapture=function(id){return !!this._captured?.has(id);};
  w.HTMLElement.prototype.releasePointerCapture=function(id){this._captured?.delete(id);};
  w.HTMLCanvasElement.prototype.getContext=()=>({fillRect(){},fillText(){}});
  let width=1050,height=600;
  Object.defineProperty(w.document.querySelector('#world'),'clientWidth',{get:()=>width});Object.defineProperty(w.document.querySelector('#world'),'clientHeight',{get:()=>height});
  w.HTMLDialogElement.prototype.showModal=function(){this.setAttribute('open','');};w.HTMLDialogElement.prototype.close=function(){this.removeAttribute('open');this.dispatchEvent(new w.Event('close'));};
  w.eval(outputFiles[0].text);
  function tick(n=1){for(let i=0;i<n;i++){now+=1000/60;assert.ok(nextFrame,'Loop de animação não iniciado');nextFrame(now);}}
  function click(selector){const el=w.document.querySelector(selector);assert.ok(el,selector);el.click();}
  tick();assert.ok(!w.document.querySelector('#world-fallback'),'Mundo deve inicializar com o renderer de teste');
  assert.ok(w.__scene.children.length>=3);const player=w.__scene.getObjectByName('student-avatar');assert.ok(player);assert.equal(player.position.z,7);
  assert.ok(w.__camera.isPerspectiveCamera,'A câmera precisa usar perspectiva em terceira pessoa');
  for(const id of [1,2,3,4,5,1,5,2,4,3]){
    click(`[data-travel="${id}"]`);let frames=0;while(!w.document.querySelector('#panel').open&&frames<1500){tick();frames++;}
    assert.ok(w.document.querySelector('#panel').open,`Avatar não chegou à estação ${id}: x=${player.position.x}, z=${player.position.z}`);
    assert.match(w.document.querySelector('#panel-kicker').textContent,new RegExp('ESTAÇÃO 0'+id));
    click('#close-panel');
  }
  click('#camera-reset');tick();const before=player.position.clone();
  w.dispatchEvent(new w.KeyboardEvent('keydown',{key:'d',bubbles:true,cancelable:true}));tick(30);w.dispatchEvent(new w.KeyboardEvent('keyup',{key:'d',bubbles:true}));tick();assert.ok(player.position.distanceTo(before)>.5,'Teclado deve mover o avatar');
  assert.ok(w.__camera.position.distanceTo(player.position)<16,'A câmera precisa acompanhar o avatar de perto');
  click('#map-button');click('[data-mentor]');assert.equal(errors.length,0,errors.map(e=>e?.stack).join('\n'));assert.ok(!w.document.querySelector('#panel').open,'Mapa precisa fechar antes da caminhada at? Lia');let frames=0;while(!w.document.querySelector('#panel').open&&frames<1500){tick();frames++;}assert.ok(w.document.querySelector('#panel').open,`Mentora inacess?vel: ${player.position.x}, ${player.position.z}`);assert.match(w.document.querySelector('#panel-kicker').textContent,/MENTORA LIA/);click('#close-panel');
  click('#camera-reset');tick();w.dispatchEvent(new w.KeyboardEvent('keydown',{key:'s',bubbles:true,cancelable:true}));tick(500);w.dispatchEvent(new w.KeyboardEvent('keyup',{key:'s',bubbles:true}));assert.ok(Math.abs(player.position.x)<=17.2&&Math.abs(player.position.z)<=14.2,'Avatar deve respeitar os limites');
  // Integração dos controles de celular: movimento e olhar com dedos independentes.
  click('#camera-reset');tick();width=390;height=600;w.__resize();tick();assert.equal(w.__camera.aspect,.65);assert.equal(w.__camera.fov,68);
  const canvas=w.document.querySelector('#world canvas'),stick=w.document.querySelector('#joystick');stick.getBoundingClientRect=()=>({left:0,top:0,width:98,height:98});
  function pointer(el,type,id,x,y){const e=new w.MouseEvent(type,{clientX:x,clientY:y,button:0,bubbles:true,cancelable:true});Object.defineProperty(e,'pointerId',{value:id});el.dispatchEvent(e);}
  const start=player.position.clone();pointer(stick,'pointerdown',10,49,17);pointer(canvas,'pointerdown',20,200,180);pointer(canvas,'pointermove',20,260,180);tick(30);assert.ok(player.position.distanceTo(start)>.5,'Joystick precisa funcionar durante a rotação');assert.ok(player.position.x>start.x+.1&&player.position.z<start.z,'Movimento precisa acompanhar a orientação da câmera');
  const viewDirection=w.__camera.position.clone().sub(player.position);pointer(stick,'pointerup',10,49,17);pointer(canvas,'pointermove',20,300,180);tick();const newViewDirection=w.__camera.position.clone().sub(player.position);assert.ok(viewDirection.angleTo(newViewDirection)>.1,'Soltar o joystick não pode cancelar o outro dedo que gira a câmera');pointer(canvas,'pointerup',20,300,180);
  const stop=player.position.clone();tick(10);assert.ok(Math.hypot(player.position.x-stop.x,player.position.z-stop.z)<.001,'Soltar o joystick deve parar o avatar');
  click('#camera-center');tick();assert.ok(!w.document.querySelector('#panel').open,'Arrastar a câmera não deve abrir uma missão');
  assert.equal(errors.length,0,errors.map(e=>e?.stack).join('\n'));assert.ok(Number.isFinite(w.__camera.position.x));
  dom.window.close();console.log('OK: cena Three.js, 10 rotas, teclado, limites, mentora, perspectiva próxima, formato de celular, joystick e rotação simultâneos. Renderer substituído: não valida aparência ou desempenho WebGL.');
})();
