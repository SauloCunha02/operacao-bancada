const assert=require('node:assert/strict');
const path=require('node:path');
const fs=require('node:fs');
let playwright;try{playwright=require('playwright');}catch{playwright=require(process.env.AMC_PLAYWRIGHT_PATH||path.join(process.env.USERPROFILE,'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright'));}
const {chromium}=playwright;
async function run(){
 const browser=await chromium.launch({headless:true,channel:'msedge'});
 try{
 const context=await browser.newContext({viewport:{width:1440,height:1000}});
 await context.addInitScript(()=>{
  class Utterance{constructor(text){this.text=text;}}
  const harness={calls:[],cancels:0,paused:false};
  const synth=new EventTarget();
  synth.getVoices=()=>[{name:'Voz local de teste',voiceURI:'test-pt',lang:'pt-BR',localService:true}];
  synth.speak=u=>{harness.calls.push(u);u.onstart?.();};
  synth.pause=()=>harness.paused=true;synth.resume=()=>harness.paused=false;synth.cancel=()=>harness.cancels++;
  Object.defineProperty(window,'speechSynthesis',{value:synth});window.SpeechSynthesisUtterance=Utterance;window.__speechTest=harness;
 });
 const p=await context.newPage();const errors=[],external=[];p.on('pageerror',e=>errors.push(e.message));p.on('request',r=>{if(!r.url().startsWith('http://127.0.0.1:4173')&&!r.url().startsWith('data:'))external.push(r.url());});
 await p.goto('http://127.0.0.1:4173/index.html');
 await p.locator('#a11y-launcher').click();assert.equal(await p.locator('#a11y-panel').isVisible(),true);
 for(const preset of ['protanopia','deuteranopia','tritanopia','achromatopsia']){await p.locator('#a11y-palette').selectOption(preset);assert.equal(await p.locator('html').getAttribute('data-a11y-palette'),preset);}
 await p.locator('#a11y-contrast').selectOption('dark');
 assert.equal(await p.locator('body').evaluate(e=>getComputedStyle(e).backgroundColor),'rgb(17, 17, 17)');
 for(const key of ['spacing','readable','links','titles','focus','ruler','motion','quiet','images','cursor'])await p.locator('#a11y-'+key).check();
 await p.locator('#a11y-size').press('End');assert.equal(await p.locator('#a11y-size').inputValue(),'200');
 assert.equal(await p.locator('#a11y-size-value').innerText(),'200%');
 await p.locator('#a11y-close').click();
 assert.equal(await p.locator('#a11y-launcher').evaluate(e=>e===document.activeElement),true);
 assert.equal(await p.locator('.bench-art').isVisible(),false);
 await p.reload();assert.equal(await p.locator('html').getAttribute('data-a11y-contrast'),'dark');
 assert.equal(await p.locator('html').evaluate(e=>e.classList.contains('a11y-large')),true);
 // All combined adjustments remain operable at 200% text and 320px width.
 await p.setViewportSize({width:320,height:900});
 await p.locator('#a11y-launcher').click();
 assert.equal(await p.locator('#a11y-panel').evaluate(e=>e.scrollWidth<=e.clientWidth),true);
 await p.screenshot({path:'verification-artifacts/acessibilidade-200-mobile.png'});
 await p.locator('#a11y-close').click();
 for(const name of ['index.html','biblioteca.html','identidade.html']){
  await p.goto('http://127.0.0.1:4173/'+name);await p.waitForSelector('#a11y-launcher');
  assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,'Refluxo a 200% em '+name);
 }
 await p.goto('http://127.0.0.1:4173/index.html');await p.locator('#a11y-launcher').click();
 await p.locator('#a11y-reset').click();await p.locator('#a11y-close').click();
 await p.setViewportSize({width:1440,height:1000});
 // Create real progress, then prove that restoring accessibility does not erase it.
 await p.locator('.navigation [data-view="missions"]').click();await p.locator('.mission-grid [data-mission="1"]').click();
 await p.locator('[data-answer="0"]').click();const progress=await p.evaluate(()=>localStorage.getItem('amc-educatech-v2'));
 await p.locator('#a11y-launcher').click();assert.equal(await p.locator('#a11y-panel').isVisible(),true);
 await p.locator('#a11y-reset').click();assert.equal(await p.evaluate(()=>localStorage.getItem('amc-educatech-v2')),progress);
 // Speech must read the active case, never the settings or hidden content.
 await p.locator('#a11y-voice').selectOption('test-pt');await p.locator('#a11y-rate').selectOption('0.75');
 await p.locator('#a11y-read').click();
 await p.waitForFunction(()=>window.__speechTest.calls.length>0);
 const first=await p.evaluate(()=>{const u=window.__speechTest.calls[0];return {text:u.text,lang:u.lang,rate:u.rate,voice:u.voice?.voiceURI};});
 assert.match(first.text,/OS 01|Computador não liga/);assert.doesNotMatch(first.text,/DO SEU JEITO|Aumentar espaço|const KEY/);assert.equal(first.lang,'pt-BR');assert.equal(first.rate,.75);assert.equal(first.voice,'test-pt');
 await p.locator('#a11y-dock-pause').click();assert.equal(await p.evaluate(()=>window.__speechTest.paused),true);
 await p.locator('#a11y-dock-pause').click();assert.equal(await p.evaluate(()=>window.__speechTest.paused),false);
 await p.locator('#a11y-dock-stop').click();assert.equal(await p.locator('#a11y-dock').isVisible(),false);
 // Re-read and change the lesson: stale narration must stop.
 await p.locator('#a11y-launcher').click();await p.locator('#a11y-read').click();
 await p.locator('[data-test="0"]').click();await p.waitForFunction(()=>document.getElementById('a11y-dock').hidden);
 await p.getByRole('button',{name:'Fechar chamado e salvar'}).click();
 await p.locator('.navigation [data-view="home"]').click();
 await p.evaluate(()=>{const range=document.createRange();range.selectNodeContents(document.querySelector('.lead'));const sel=getSelection();sel.removeAllRanges();sel.addRange(range);});
 await p.keyboard.press('Alt+Shift+A');await p.locator('#a11y-read-selection').click();
 assert.match(await p.evaluate(()=>window.__speechTest.calls.at(-1).text),/laboratório da escola/);await p.locator('#a11y-dock-stop').click();
 await p.locator('#a11y-launcher').click();await p.locator('#a11y-palette').selectOption('protanopia');await p.locator('#a11y-close').click();
 await p.goto('http://127.0.0.1:4173/biblioteca.html');assert.equal(await p.locator('html').getAttribute('data-a11y-palette'),'protanopia');
 await p.goto('http://127.0.0.1:4173/identidade.html');assert.equal(await p.locator('html').getAttribute('data-a11y-palette'),'protanopia');
 assert.deepEqual(external,[]);
 // No network is attempted for VLibras while offline.
 await context.setOffline(true);await p.locator('#a11y-launcher').click();await p.locator('#a11y-libras').click();assert.match(await p.locator('#a11y-libras-status').innerText(),/sem internet/);await context.setOffline(false);
 // Provider failures are recoverable and leave the local accessibility controls usable.
 await p.route('https://vlibras.gov.br/app/vlibras-plugin.js',route=>route.abort());await p.locator('#a11y-libras').click();await p.waitForFunction(()=>document.getElementById('a11y-libras').disabled===false);assert.match(await p.locator('#a11y-libras-status').innerText(),/não respondeu/);
 await p.locator('#a11y-reset').click();await p.locator('#a11y-close').click();
 // The optional settings are embedded in every offline version.
 for(const file of ['AMC-50-casos.html','AMC-biblioteca.html','AMC-identidade.html']){
  await p.goto(require('node:url').pathToFileURL(path.resolve(file)).href);await p.locator('#a11y-launcher').click();await p.locator('#a11y-palette').selectOption('tritanopia');assert.equal(await p.locator('html').getAttribute('data-a11y-palette'),'tritanopia');await p.locator('#a11y-close').click();
 }
 assert.deepEqual(errors,[]);
 console.log('PASS: paletas, contraste, dez ajustes, persistência, painel em chamado modal, foco, texto 200%, seleção, voz/velocidade/pausa/parada, interrupção ao mudar conteúdo, progresso preservado, três páginas e três HTMLs offline, sem rede antes de ativar Libras, falhas de rede recuperáveis. Voz testada com simulador da API; o áudio real depende do dispositivo.');
 }finally{await browser.close();}
}
run().catch(e=>{console.error(e);process.exitCode=1;});
