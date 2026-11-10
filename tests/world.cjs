const assert=require('node:assert/strict');
const fs=require('node:fs');
const {JSDOM,VirtualConsole}=require('jsdom');
const {build}=require('esbuild');
(async()=>{
  const threeModule=require.resolve('three').replace(/three\.cjs$/,'three.module.js');
  const {outputFiles}=await build({entryPoints:['src/game.js'],bundle:true,format:'iife',write:false,target:'es2022',plugins:[{
    name:'headless-scene-test',setup(b){b.onResolve({filter:/^three$/},()=>({path:'three-test',namespace:'world-test'}));b.onLoad({filter:/.*/,namespace:'world-test'},()=>({resolveDir:process.cwd(),contents:`export * from ${JSON.stringify(threeModule)}; export class WebGLRenderer { constructor(){this.domElement=document.createElement('canvas');this.shadowMap={};}setPixelRatio(){}setClearColor(){}setSize(){}dispose(){globalThis.__disposed=(globalThis.__disposed||0)+1;}render(scene,camera){if(scene.getObjectByName('student-avatar')){globalThis.__scene=scene;globalThis.__camera=camera;}else globalThis.__preview=scene;}}`}));}
  }]});
  const dom=new JSDOM(fs.readFileSync('src/index.html','utf8'),{url:'http://localhost/',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()});
  const w=dom.window;let now=w.performance.now(),nextId=0;const animationFrames=new Map(),errors=[];
  w.addEventListener('error',e=>errors.push(e.error));
  w.matchMedia=()=>({matches:false});w.setTimeout=()=>0;w.clearTimeout=()=>{};w.requestAnimationFrame=cb=>{animationFrames.set(++nextId,cb);return nextId;};w.cancelAnimationFrame=id=>animationFrames.delete(id);
  w.ResizeObserver=class{constructor(cb){this.cb=cb;if(!w.__resize)w.__resize=cb;}observe(){this.cb();}disconnect(){}};
  w.HTMLElement.prototype.setPointerCapture=function(id){this._captured??=new Set();this._captured.add(id);};
  w.HTMLElement.prototype.hasPointerCapture=function(id){return !!this._captured?.has(id);};
  w.HTMLElement.prototype.releasePointerCapture=function(id){this._captured?.delete(id);};
  w.HTMLCanvasElement.prototype.getContext=()=>({fillRect(){},fillText(){}});
  let width=1050,height=600;
  Object.defineProperty(w.document.querySelector('#world'),'clientWidth',{get:()=>width});Object.defineProperty(w.document.querySelector('#world'),'clientHeight',{get:()=>height});
  w.HTMLDialogElement.prototype.showModal=function(){this.setAttribute('open','');};w.HTMLDialogElement.prototype.close=function(){this.removeAttribute('open');this.dispatchEvent(new w.Event('close'));};
  w.eval(outputFiles[0].text);
  function tick(n=1){for(let i=0;i<n;i++){now+=1000/60;assert.ok(animationFrames.size,'Loop de animação não iniciado');const callbacks=[...animationFrames.values()];animationFrames.clear();callbacks.forEach(cb=>cb(now));}}
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
  click('#camera-reset');tick();width=390;height=600;w.__resize();tick();assert.equal(w.__camera.aspect,.65);assert.equal(w.__camera.fov,70);
  const canvas=w.document.querySelector('#world canvas'),stick=w.document.querySelector('#joystick');stick.getBoundingClientRect=()=>({left:0,top:0,width:98,height:98});
  function pointer(el,type,id,x,y){const e=new w.MouseEvent(type,{clientX:x,clientY:y,button:0,bubbles:true,cancelable:true});Object.defineProperty(e,'pointerId',{value:id});el.dispatchEvent(e);}
  const start=player.position.clone();pointer(stick,'pointerdown',10,49,17);pointer(canvas,'pointerdown',20,200,180);pointer(canvas,'pointermove',20,260,180);tick(30);assert.ok(player.position.distanceTo(start)>.5,'Joystick precisa funcionar durante a rotação');assert.ok(player.position.x>start.x+.1&&player.position.z<start.z,'Movimento precisa acompanhar a orientação da câmera');
  const viewDirection=w.__camera.position.clone().sub(player.position);pointer(stick,'pointerup',10,49,17);pointer(canvas,'pointermove',20,300,180);tick();const newViewDirection=w.__camera.position.clone().sub(player.position);assert.ok(viewDirection.angleTo(newViewDirection)>.1,'Soltar o joystick não pode cancelar o outro dedo que gira a câmera');pointer(canvas,'pointerup',20,300,180);
  const stop=player.position.clone();tick(10);assert.ok(Math.hypot(player.position.x-stop.x,player.position.z-stop.z)<.001,'Soltar o joystick deve parar o avatar');
  click('#camera-center');tick();assert.ok(!w.document.querySelector('#panel').open,'Arrastar a câmera não deve abrir uma missão');
  click('#missions-nav');click('[data-case="1"]');tick();assert.ok(Math.abs(player.position.z-(-5+.95))<.001,'Posição de atendimento deve ficar próxima da bancada');assert.ok(player.position.y>=.39&&player.position.y<.41,'Pés devem apoiar no piso da estação');
  const top=player.position.clone();top.y+=2.84;const bottom=player.position.clone();top.project(w.__camera);bottom.project(w.__camera);const coverage=Math.abs(top.y-bottom.y)/2;assert.ok(coverage>=.25&&coverage<=.45,`Avatar deve ocupar de 25 a 45% da altura útil em celular: ${coverage}`);assert.ok(top.z<1&&bottom.z<1,'Avatar deve ficar diante da câmera');click('#close-panel');
  const beforeTheme=w.__camera.position.clone();click('#theme-toggle');assert.equal(w.__scene.background.getHexString(),'16293d');assert.ok(w.__camera.position.equals(beforeTheme),'Trocar o tema não pode reposicionar a câmera');click('#theme-toggle');assert.equal(w.__scene.background.getHexString(),'cae7f2');
  click('#map-button');click('[data-shop-travel]');let shopFrames=0;while(!w.document.querySelector('#panel').open&&shopFrames<1800){tick();shopFrames++;}assert.match(w.document.querySelector('#panel-kicker').textContent,/GALERIA SHOP/);tick(3);assert.ok(w.__preview,'Provador 3D precisa renderizar');click('#shop-action');assert.ok(player.getObjectByName('gear-visor-lime'),'Compra deve equipar o avatar do campus');click('#close-panel');tick(3);assert.ok(w.__disposed>=1,'Fechar deve liberar o renderer do provador');assert.equal(animationFrames.size,1,'Apenas o loop do campus deve continuar após fechar a loja');
  click('#map-button');click('[data-merit-travel]');let meritFrames=0;while(!w.document.querySelector('#panel').open&&meritFrames<1800){tick();meritFrames++;}assert.match(w.document.querySelector('#panel-kicker').textContent,/MÉRITOS/);click('#close-panel');
  click('#missions-nav');click('[data-case="1"]');click('[data-test="0"]');click('[data-stage-next]');click('[data-choice="0"]');click('[data-stage-next]');click('[data-confirm-repair]');click('[data-stage-next]');click('#merit-nav');click('[data-merit-select="first-fix"]');click('#merit-feature');assert.ok(player.getObjectByName('avatar-merit'),'Mérito em destaque deve aparecer no uniforme');click('#merit-unfeature');assert.ok(!player.getObjectByName('avatar-merit'),'Retirar destaque deve retirar a insígnia do uniforme');click('#close-panel');
  assert.equal(errors.length,0,errors.map(e=>e?.stack).join('\n'));assert.ok(Number.isFinite(w.__camera.position.x));
  dom.window.close();console.log('OK: cena Three.js, 10 rotas, teclado, limites, mentora, perspectiva próxima, formato de celular, joystick e rotação simultâneos. Renderer substituído: não valida aparência ou desempenho WebGL.');
})();
