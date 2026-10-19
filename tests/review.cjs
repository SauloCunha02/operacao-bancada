const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const {once}=require('node:events');
const {createServer}=require('../server.cjs');
let playwright;try{playwright=require('playwright');}catch{playwright=require(process.env.AMC_PLAYWRIGHT_PATH||path.join(process.env.USERPROFILE,'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright'));}
function unitState(){
 const nodes=new Map();const node=k=>{if(!nodes.has(k))nodes.set(k,{textContent:'',innerHTML:'',hidden:true,addEventListener(){},focus(){}});return nodes.get(k);};
 const env={document:{querySelector:node,querySelectorAll:()=>[],addEventListener(){}},localStorage:{getItem:()=>null},setTimeout:()=>0,clearTimeout(){},window:{scrollTo(){}}};vm.createContext(env);
 vm.runInContext(fs.readFileSync('dist/cases.js','utf8')+'\n'+fs.readFileSync('dist/journey.js','utf8'),env);
 const payload={version:2,role:0,diagnostic:null,records:{1:{stage:1,tested:[],errors:0,hints:0,log:[{stage:0,choice:0,ok:true}],self:0}},boss:{draft:{},attempts:[null,{},[],false]}};env.payload=payload;
 assert.equal(vm.runInContext('restore(payload).records[1].stage',env),1);
 assert.equal(vm.runInContext('restore(payload).boss.attempts.length',env),0);
 const malformed=[null,{},[],1,{version:2},{...payload,diagnostic:{answers:[0]}},{...payload,records:null}];
 for(const value of malformed){env.payload=value;assert.doesNotThrow(()=>vm.runInContext('restore(payload)',env));assert.throws(()=>vm.runInContext('parseBackup(payload)',env));}
 env.payload={...payload,format:'amc-educatech',boss:{draft:{priority:''},attempts:[]}};
 assert.equal(vm.runInContext('parseBackup(payload).records[1].stage',env),1);
 env.payload.records[1].stage=6;
 assert.equal(vm.runInContext('restore(payload).records[1].status',env),'needs_review');
 assert.throws(()=>vm.runInContext('parseBackup(payload)',env));
 assert.equal(vm.runInContext(`(()=>{const log=[{stage:0,choice:0,ok:true},...Array.from({length:1000},()=>({stage:1,choice:1,ok:false}))];const kept=trimLog(log);return kept.length===500&&kept[0].ok;})()`,env),true);
 env.payload={...payload,format:'amc-educatech',records:{},boss:{draft:{},attempts:[{criteria:[true,true,true,true,true],draft:{priority:'1',safety:'1',handoff:'1',causeA:'1',fixA:'1',validateA:'1',causeB:'1',fixB:'1',validateB:'1',causeC:'1',fixC:'1',validateC:'1'}}]}};
 assert.equal(vm.runInContext('parseBackup(payload).boss.status',env),'needs_review');
 console.log('PASS: recuperação parcial, importação estrita, critérios recalculados, evidências obrigatórias e histórico longo.');
}
async function httpChecks(){
 const server=createServer();server.listen(0,'127.0.0.1');await once(server,'listening');const base='http://127.0.0.1:'+server.address().port;
 try{for(const [route,status]of [['/',200],['/%00',400],['/%ZZ',400],['/does-not-exist',404]])assert.equal((await fetch(base+route)).status,status,route);
  assert.notEqual((await fetch(base+'/%2e%2e%5cREADME.md')).status,200);
  assert.equal((await fetch(base+'/',{method:'POST'})).status,405);
  const head=await fetch(base+'/',{method:'HEAD'});assert.equal(head.status,200);assert.equal((await head.text()).length,0);assert.ok(Number(head.headers.get('content-length'))>0);
  assert.equal((await fetch(base+'/assets/brand/simbolo.svg')).headers.get('content-type'),'image/svg+xml');
  assert.equal((await fetch(base+'/')).status,200);
 }finally{await new Promise(resolve=>server.close(resolve));}
 console.log('PASS: caminhos inválidos não derrubam o servidor; métodos, HEAD, MIME e contenção de caminhos.');
}
async function browserChecks(){
 const b=await playwright.chromium.launch({headless:true,channel:'msedge'});
 try{const p=await b.newPage({viewport:{width:1280,height:900}});const errors=[];p.on('pageerror',e=>errors.push(e.message));
  await p.addInitScript(()=>{const synth=new EventTarget();synth.getVoices=()=>[];synth.cancel=()=>{};synth.pause=()=>{};synth.resume=()=>{};synth.speak=u=>u.onstart?.();Object.defineProperty(window,'speechSynthesis',{value:synth});window.SpeechSynthesisUtterance=class{constructor(text){this.text=text;}};});
  await p.goto('http://127.0.0.1:4173');await p.locator('.navigation [data-view="missions"]').click();await p.locator('#mission-category').focus();await p.locator('#mission-category').selectOption('Energia');
  assert.equal(await p.locator('#mission-category').evaluate(e=>e===document.activeElement),true);
  await p.locator('[data-filter="1"]').click();assert.equal(await p.locator('[data-filter="1"]').evaluate(e=>e===document.activeElement),true);
  const seed={version:2,role:0,diagnostic:null,records:{1:{stage:1,tested:[],errors:0,hints:0,log:[{stage:0,choice:0,ok:true}],self:0}},boss:{draft:{},attempts:[null]}};
  await p.evaluate(s=>localStorage.setItem('amc-educatech-v2',JSON.stringify(s)),seed);await p.reload();assert.match(await p.locator('.stats').innerText(),/10/);
  await p.locator('.navigation [data-view="portfolio"]').click();const before=await p.evaluate(()=>localStorage.getItem('amc-educatech-v2'));
  await p.locator('#import-file').setInputFiles({name:'invalid.json',mimeType:'application/json',buffer:Buffer.from('{"format":"amc-educatech","version":2}')});
  await p.waitForFunction(()=>document.getElementById('announcement').textContent.includes('mantido'));assert.equal(await p.evaluate(()=>localStorage.getItem('amc-educatech-v2')),before);
  await p.locator('.navigation [data-view="boss"]').click();await p.locator('#boss-self').check();await p.locator('#boss-peer').check();await p.locator('[data-reference="46"]').click();await p.getByRole('button',{name:'Fechar roteiro'}).click();assert.equal(await p.locator('#boss-self').isChecked(),true);assert.equal(await p.locator('#boss-peer').isChecked(),true);
  for(const field of await p.locator('[data-boss-field]').all())await field.selectOption('0');for(const k of ['causeB','fixB'])await p.locator(`[data-boss-field="${k}"]`).selectOption('1');
  assert.equal(await p.locator('#boss-self').isChecked(),false);await p.locator('#boss-self').check();await p.locator('#boss-form button[type="submit"]').click();
  await p.locator('[data-boss-field="priority"]').selectOption('1');assert.equal(await p.locator('#boss-draft-note').isVisible(),true);
  const d=p.waitForEvent('download');await p.locator('[data-export="md"]').click();const file=await d;const text=fs.readFileSync(await file.path(),'utf8');assert.match(text,/Prioridade: A/);assert.match(text,/Protocolo de segurança:/);assert.match(text,/Comunicação:/);assert.match(text,/Discussão com par.*declarada/);
  // Keeping only the last 100 entries must not recycle the version numbers.
  await p.evaluate(()=>{const example=structuredClone(state.boss.attempts[0]);state.boss.attempts=Array.from({length:100},(_,i)=>({...structuredClone(example),version:i+1}));save();});
  await p.locator('[data-boss-field="priority"]').selectOption('0');await p.locator('#boss-self').check();await p.locator('#boss-form button[type="submit"]').click();
  assert.match(await p.locator('.result').first().innerText(),/versão 101/);assert.equal(await p.evaluate(()=>state.boss.attempts.length),100);
  await p.reload();await p.locator('.navigation [data-view="boss"]').click();assert.match(await p.locator('.result').first().innerText(),/versão 101/);
  // A selected passage must not survive navigation to different content.
  await p.locator('.navigation [data-view="home"]').click();await p.evaluate(()=>{const range=document.createRange();range.selectNodeContents(document.querySelector('.lead'));getSelection().removeAllRanges();getSelection().addRange(range);});
  await p.keyboard.press('Alt+Shift+A');assert.equal(await p.locator('#a11y-read-selection').isEnabled(),true);await p.locator('#a11y-close').click();await p.locator('.navigation [data-view="portfolio"]').click();await p.locator('#a11y-launcher').click();assert.equal(await p.locator('#a11y-read-selection').isDisabled(),true);
  await p.locator('#a11y-read').click();assert.equal(await p.locator('#a11y-dock').isVisible(),true);await p.locator('[data-reset]').click();await p.waitForFunction(()=>document.getElementById('a11y-dock').hidden);await p.getByRole('button',{name:'Continuar meu percurso'}).click();
  // Viewport changes must recalculate the enlarged typography.
  await p.locator('.navigation [data-view="home"]').click();await p.setViewportSize({width:390,height:900});await p.locator('#a11y-launcher').click();await p.locator('#a11y-size').press('End');await p.locator('#a11y-close').click();const small=await p.locator('.hero h1').evaluate(e=>parseFloat(getComputedStyle(e).fontSize));
  await p.setViewportSize({width:1440,height:1000});await p.waitForFunction(v=>parseFloat(getComputedStyle(document.querySelector('.hero h1')).fontSize)>v,small);
  // Every supported text setting is checked across the three entry pages.
  for(const size of [100,125,150,175,200])for(const width of [320,390,768,1280]){
    await p.setViewportSize({width,height:900});await p.evaluate(v=>localStorage.setItem('amc-accessibility-v1',JSON.stringify({size:v})),size);
    for(const name of ['index.html','biblioteca.html','identidade.html']){await p.goto('http://127.0.0.1:4173/'+name);assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),true,`${name}: ${size}% / ${width}px`);}
  }
  // Regression checks for the library's small text and selected controls.
  await p.setViewportSize({width:320,height:900});await p.evaluate(()=>localStorage.setItem('amc-accessibility-v1',JSON.stringify({size:125,spacing:true,readable:true,titles:true,links:true})));
  for(const name of ['index.html','biblioteca.html','identidade.html']){await p.goto('http://127.0.0.1:4173/'+name);assert.equal(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),true,name+' / 125% com ajustes combinados');}
  for(const contrast of ['default','dark','light']){
    await p.evaluate(v=>localStorage.setItem('amc-accessibility-v1',JSON.stringify({contrast:v})),contrast);await p.goto('http://127.0.0.1:4173/biblioteca.html');
    const ratios=async selector=>p.locator(selector).evaluateAll(es=>{
      const rgb=s=>s.match(/[\d.]+/g).map(Number);
      const lum=c=>c.slice(0,3).map(x=>{x/=255;return x<=.04045?x/12.92:((x+.055)/1.055)**2.4;}).reduce((s,x,i)=>s+x*[.2126,.7152,.0722][i],0);
      const bg=e=>{if(!e)return [255,255,255];const c=rgb(getComputedStyle(e).backgroundColor),alpha=c[3]??1;if(alpha===1)return c;const parent=bg(e.parentElement);return c.slice(0,3).map((x,i)=>x*alpha+parent[i]*(1-alpha));};
      return es.map(e=>{const a=lum(rgb(getComputedStyle(e).color)),b=lum(bg(e));return (Math.max(a,b)+.05)/(Math.min(a,b)+.05);});
    });
    assert.ok((await ratios('.case-number,.step-count,.collection-footer,.export-hint,.lab-note p')).every(v=>v>=4.5),contrast+' metadata');
    await p.locator('[data-select="1"]').check();await p.locator('[data-open="1"]').first().click();
    assert.ok((await ratios('.step-cell,.table-head,.modal-footer span,#modal-select')).every(v=>v>=4.5),contrast+' case modal');await p.keyboard.press('Escape');
  }
  await p.goto(require('node:url').pathToFileURL(path.resolve('AMC-biblioteca.html')).href);assert.match(await p.locator('.brand').getAttribute('href'),/AMC-50-casos\.html$/);
  assert.deepEqual(errors,[]);
 }finally{await b.close();}
 console.log('PASS: foco, importação sem perda, revisão e exportação do desafio, seleção de voz sem conteúdo antigo, interrupção em modal, tipografia ao redimensionar, numeração até a versão 101, contraste da biblioteca e 60 combinações de tela/tamanho.');
}
(async()=>{unitState();await httpChecks();await browserChecks();})().catch(e=>{console.error(e);process.exitCode=1;});
