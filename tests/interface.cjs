const assert=require('node:assert/strict');
const fs=require('node:fs');
const {JSDOM,VirtualConsole}=require('jsdom');
const {build}=require('esbuild');
(async()=>{
  const {outputFiles}=await build({entryPoints:['src/game.js'],bundle:true,format:'iife',write:false,target:'es2022'});
  const source=outputFiles[0].text;
  const {cases}=await import('../src/cases.js');
  const {target,KEY}=await import('../src/rules.js');const {benchFor,checkedOutcome}=await import('../src/bench-data.js');
  function setup(saved,denyStorage=false){
    const dom=new JSDOM(fs.readFileSync('src/index.html','utf8'),{url:'http://localhost/',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()});
    const w=dom.window;
    w.matchMedia=()=>({matches:false,addEventListener(){},removeEventListener(){}});
    w.setTimeout=()=>0;w.clearTimeout=()=>{};
    w.HTMLDialogElement.prototype.showModal=function(){this.setAttribute('open','');};
    w.HTMLDialogElement.prototype.close=function(){this.removeAttribute('open');this.dispatchEvent(new w.Event('close'));};
    if(saved)w.localStorage.setItem(KEY,saved);
    if(denyStorage)Object.defineProperty(w,'localStorage',{get(){throw Error('unavailable');}});
    const errors=[];w.addEventListener('error',e=>errors.push(e.error));w.eval(source);
    const find=s=>{const el=w.document.querySelector(s);assert.ok(el,'Elemento ausente: '+s);return el;};
    const click=s=>find(s).click();
    return {dom,w,find,click,errors};
  }
  const app=setup();const {find,click,w}=app;
  const read=id=>JSON.parse(w.localStorage.getItem(KEY)).records[id];
  assert.ok(find('#world-fallback'));
  click('#help');click('[data-start]');assert.ok(!find('#panel').open);
  for(const c of cases){
    click('#missions-nav');click(`[data-case="${c.id}"]`);
    assert.ok(find('#panel').classList.contains('bench-dialog'));assert.equal(w.document.querySelectorAll('.bench-steps li').length,3);
    assert.match(find('.bench-display').textContent,/./);assert.equal(find('.bench-scene').dataset.state,'fault');
    assert.equal(w.document.querySelectorAll('[data-test]').length,c.steps.length);
    assert.ok(find('[data-stage-back]').disabled);assert.ok(find('[data-stage-next]').disabled);
    find('[data-stage-next]').disabled=false;click('[data-stage-next]');assert.equal(read(c.id).stage,1);
    const wrong=(target(c)+1)%c.steps.length;click(`[data-test="${wrong}"]`);assert.equal(read(c.id).errors,0);assert.match(find('.bench-observation strong').textContent,/RESULTADO/);assert.ok(find('[data-stage-next]').disabled);
    if(wrong>=3)assert.ok(find('[data-test="'+wrong+'"]').closest('details').open,'Mais testes permanece aberto após testar');
    click(`[data-test="${target(c)}"]`);assert.match(find('.bench-observation strong').textContent,/PISTA ENCONTRADA/);assert.ok(!find('[data-stage-next]').disabled);
    assert.equal(read(c.id).lastTest,target(c));
    click('#close-panel');click('#missions-nav');click(`[data-case="${c.id}"]`);assert.equal(read(c.id).viewStage,0);assert.match(find('.bench-observation strong').textContent,/PISTA ENCONTRADA/);
    click('[data-stage-next]');assert.equal(read(c.id).stage,3);assert.equal(read(c.id).viewStage,1);
    assert.equal(w.document.querySelectorAll('[data-choice]').length,3);assert.ok(find('[data-stage-next]').disabled);
    const wrongChoice=[...w.document.querySelectorAll('[data-choice]')].find(b=>Number(b.dataset.choice)!==target(c));wrongChoice.click();assert.match(find('.feedback').textContent,/não resolve/);assert.equal(read(c.id).errors,1);
    click(`[data-choice="${target(c)}"]`);assert.equal(read(c.id).stage,4);assert.equal(find('.bench-scene').dataset.state,benchFor(c).referral?'referral-ready':'repaired');
    assert.equal(find('#xp').textContent,((c.id-1)*100)+' XP','XP só é entregue após conferir');
    click('[data-stage-back]');assert.equal(read(c.id).stage,4);assert.equal(read(c.id).viewStage,0);click('[data-stage-next]');assert.ok(find('[data-choice="'+target(c)+'"]').disabled);
    find('[data-choice="'+target(c)+'"]').disabled=false;click('[data-choice="'+target(c)+'"]');assert.equal(read(c.id).errors,1,'Revisão não repete a resposta');
    click('[data-stage-next]');assert.equal(read(c.id).viewStage,2);
    click('#close-panel');click('#missions-nav');click(`[data-case="${c.id}"]`);assert.equal(read(c.id).viewStage,2);
    click('[data-confirm-repair]');assert.equal(read(c.id).stage,6);assert.equal(find('.bench-scene').dataset.state,benchFor(c).referral?'referred':'conferred');assert.equal(find('.bench-confirmed').textContent,checkedOutcome(c));
    find('[data-confirm-repair]').disabled=false;click('[data-confirm-repair]');assert.equal(find('#xp').textContent,(c.id*100)+' XP');
    click('[data-stage-next]');assert.match(find('.xp-reward').textContent,/100 XP/);assert.equal(read(c.id).viewStage,3);
    click('#close-panel');
  }
  assert.equal(find('#xp').textContent,'5000 XP');
  // Revisar as três etapas de um chamado concluído mantém pontuação e saldo.
  click('#missions-nav');click('[data-case="1"]');click('[data-review-tests="1"]');assert.equal(read(1).viewStage,0);
  click('[data-test="2"]');click('[data-hint]');assert.equal(read(1).hints,1);
  for(let i=0;i<3;i++)click('[data-stage-next]');assert.match(find('.xp-reward').textContent,/100 XP/);assert.equal(find('#xp').textContent,'5000 XP');
  click('#shop-nav');assert.equal(find('#shop-balance').textContent,'2100');click('#close-panel');
  click('#avatar-nav');click('[data-skin="3"]');assert.equal(JSON.parse(w.localStorage.getItem(KEY)).skin,3);click('#close-panel');
  click('#journal-nav');assert.match(find('.stats').textContent,/50\/50/);click('#close-panel');
  click('#missions-nav');click('[data-list="4"]');assert.equal(w.document.querySelectorAll('[data-case]').length,10);click('#close-panel');
  click('#settings');find('#quality').value='low';find('#quality').dispatchEvent(new w.Event('change',{bubbles:true}));assert.equal(JSON.parse(w.localStorage.getItem(KEY)).quality,'low');click('#close-panel');
  assert.equal(app.errors.length,0,app.errors.map(e=>e?.stack).join('\n'));
  const restored=setup(w.localStorage.getItem(KEY));assert.equal(restored.find('#xp').textContent,'5000 XP');restored.click('#missions-nav');restored.click('[data-case="1"]');assert.match(restored.find('.xp-reward').textContent,/100 XP/);assert.equal(restored.errors.length,0);restored.dom.window.close();
  // Recarregar em cada ponto do novo fluxo preserva ação, evidência e cursor.
  for(const [stage,viewStage] of [[1,0],[3,0],[3,1],[4,1],[4,2],[6,2],[6,3]]){
    const resumed=setup(JSON.stringify({version:2,records:{1:{stage,viewStage,tested:[0],lastTest:0,errors:0,hints:0}}}));resumed.click('#missions-nav');resumed.click('[data-case="1"]');
    if(viewStage===3)assert.ok(resumed.find('.xp-reward'));else assert.equal(resumed.w.document.querySelectorAll('.bench-steps [aria-current="step"]').length,1);
    assert.equal(JSON.parse(resumed.w.localStorage.getItem(KEY)).records[1].viewStage,viewStage);assert.equal(resumed.errors.length,0);resumed.dom.window.close();
  }
  // Importação pela interface usa a mesma migração que o carregamento local.
  const imported=setup(),legacy={version:1,format:'amc-mundo',records:{1:{stage:6,viewStage:6,tested:[0],errors:0,hints:0},2:{stage:3,viewStage:3,tested:[1],errors:1,hints:0}}};
  imported.click('#journal-nav');imported.click('[data-import]');
  Object.defineProperty(imported.find('#import-file'),'files',{configurable:true,value:[{size:200,text:async()=>JSON.stringify(legacy)}]});
  imported.find('#import-file').dispatchEvent(new imported.w.Event('change',{bubbles:true}));await new Promise(resolve=>setImmediate(resolve));
  imported.click('#confirm-import');assert.equal(imported.find('#xp').textContent,'100 XP');
  imported.click('#missions-nav');imported.click('[data-case="2"]');assert.equal(imported.find('.bench-steps [aria-current="step"]').textContent,'2Consertar');
  imported.click('#shop-nav');assert.equal(imported.find('#shop-balance').textContent,'140');imported.click('#journal-nav');
  const before=imported.w.localStorage.getItem(KEY);Object.defineProperty(imported.find('#import-file'),'files',{configurable:true,value:[{size:20,text:async()=>'{"version":99}'}]});
  imported.find('#import-file').dispatchEvent(new imported.w.Event('change',{bubbles:true}));await new Promise(resolve=>setImmediate(resolve));
  assert.equal(imported.w.localStorage.getItem(KEY),before);assert.match(imported.find('#toast').textContent,/Não foi possível importar/);assert.equal(imported.errors.length,0);imported.dom.window.close();
  const denied=setup(null,true);denied.click('#missions-nav');denied.click('[data-case="1"]');denied.click('[data-test="0"]');denied.click('[data-stage-next]');denied.click('[data-choice="0"]');denied.click('[data-stage-next]');denied.click('[data-confirm-repair]');assert.match(denied.find('#save-state').textContent,/Sem salvamento/);assert.equal(denied.find('#xp').textContent,'100 XP');assert.equal(denied.errors.length,0);denied.dom.window.close();
  app.dom.window.close();console.log('OK: 50 chamados visuais, testar/consertar/conferir, resultados e consertos específicos, três etapas, revisão, fechamento e recarga em todas as fases, 5000 XP sem repetição, saldo e modo sem armazenamento/WebGL. DOM simulado.');
})();
