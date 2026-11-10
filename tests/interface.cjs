const assert=require('node:assert/strict');
const fs=require('node:fs');
const {JSDOM,VirtualConsole}=require('jsdom');
const {build}=require('esbuild');
(async()=>{
  const {outputFiles}=await build({entryPoints:['src/game.js'],bundle:true,format:'iife',write:false,target:'es2022'});
  const source=outputFiles[0].text;
  const {cases}=await import('../src/cases.js');
  const {target,KEY}=await import('../src/rules.js');
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
  // Navegar e retomar nunca reduz o progresso nem concede recompensas novamente.
  const nav=setup(),read=()=>JSON.parse(nav.w.localStorage.getItem(KEY)).records[1];
  nav.click('#missions-nav');nav.click('[data-case="1"]');
  for(let stage=0;stage<6;stage++){
    assert.equal(read().viewStage,stage);
    if(stage>0){nav.click('[data-stage-back]');assert.equal(read().viewStage,stage-1);assert.equal(read().stage,stage);nav.click('[data-stage-next]');}
    nav.find('[data-stage-next]').disabled=false;nav.click('[data-stage-next]');assert.equal(read().stage,stage,'Avanço sem validação deve ser bloqueado');assert.equal(read().viewStage,stage);
    if(stage===1){nav.click('[data-test="0"]');nav.click('[data-stage-next]');}
    else{
      nav.click('[data-choice="0"]');assert.equal(read().stage,stage+1);assert.equal(read().viewStage,stage,'Resposta correta aguarda avanço explícito');
      nav.find('[data-choice="1"]').disabled=false;nav.click('[data-choice="1"]');assert.equal(read().errors,0,'Revisão não deve responder à etapa seguinte');
      nav.click('#close-panel');nav.click('#missions-nav');nav.click('[data-case="1"]');assert.equal(read().viewStage,stage);assert.match(nav.find('#stage-navigation-help').textContent,/validada/);
      const resumed=setup(nav.w.localStorage.getItem(KEY));resumed.click('#missions-nav');resumed.click('[data-case="1"]');assert.match(resumed.find('.mission-meta').textContent,new RegExp('ETAPA '+(stage+1)+' DE 6'));assert.ok(!resumed.find('[data-stage-next]').disabled);assert.equal(resumed.errors.length,0);resumed.dom.window.close();
      nav.click('[data-stage-next]');
    }
  }
  assert.equal(read().stage,6);assert.equal(read().viewStage,6);assert.equal(nav.find('#xp').textContent,'100 XP');
  for(let i=0;i<6;i++)nav.click('[data-stage-back]');assert.ok(nav.find('[data-stage-back]').disabled);assert.equal(read().stage,6);
  for(let i=0;i<6;i++){assert.ok(!nav.find('[data-stage-next]').disabled);nav.click('[data-stage-next]');}
  assert.match(nav.find('.xp-reward').textContent,/100 XP/);assert.equal(nav.find('#xp').textContent,'100 XP');nav.click('#shop-nav');assert.equal(nav.find('#shop-balance').textContent,'140');assert.equal(nav.errors.length,0);nav.dom.window.close();
  const app=setup();const {find,click,w}=app;
  assert.ok(find('#world-fallback')); // Caminho alternativo sem WebGL, por intenção deste teste DOM.
  click('#help');assert.ok(find('#panel').open);click('[data-start]');assert.ok(!find('#panel').open);
  for(const c of cases){
    click('#missions-nav');click(`[data-case="${c.id}"]`);assert.match(find('#panel-kicker').textContent,new RegExp('OS '+String(c.id).padStart(2,'0')));
    click('[data-choice="1"]');assert.match(find('.feedback').textContent,/preserve/);
    assert.ok(find('[data-stage-back]').disabled);assert.ok(find('[data-stage-next]').disabled);click('[data-choice="0"]');assert.match(find('.mission-meta').textContent,/ETAPA 1 DE 6/);click('[data-stage-next]');assert.ok(find('[data-stage-next]').disabled);assert.match(find('#stage-navigation-help').textContent,/evidência/);
    click(`[data-test="${target(c)}"]`);assert.match(find('.test-result').textContent,/EVIDÊNCIA ENCONTRADA/);
    click('[data-stage-next]');for(const index of [target(c),target(c),0,0]){click(`[data-choice="${index}"]`);click('[data-stage-next]');}
    assert.match(find('.xp-reward').textContent,/100 XP/);assert.equal(JSON.parse(w.localStorage.getItem(KEY)).records[c.id].stage,6);
    click('#close-panel');
  }
  assert.equal(find('#xp').textContent,'5000 XP');
  click('#missions-nav');click('[data-case="1"]');assert.match(find('.xp-reward').textContent,/100 XP/);assert.equal(find('#xp').textContent,'5000 XP');click('#close-panel');
  click('#avatar-nav');click('[data-skin="3"]');assert.equal(JSON.parse(w.localStorage.getItem(KEY)).skin,3);click('#close-panel');
  click('#journal-nav');assert.match(find('.stats').textContent,/50\/50/);click('#close-panel');
  click('#missions-nav');click('[data-list="4"]');assert.equal(w.document.querySelectorAll('[data-case]').length,10);click('#close-panel');
  click('#settings');find('#quality').value='low';find('#quality').dispatchEvent(new w.Event('change',{bubbles:true}));assert.equal(JSON.parse(w.localStorage.getItem(KEY)).quality,'low');click('#close-panel');
  assert.equal(app.errors.length,0,app.errors.map(e=>e?.stack).join('\n'));
  const restored=setup(w.localStorage.getItem(KEY));assert.equal(restored.find('#xp').textContent,'5000 XP');assert.equal(restored.errors.length,0);restored.dom.window.close();
  const denied=setup(null,true);denied.click('#missions-nav');denied.click('[data-case="1"]');denied.click('[data-choice="0"]');assert.match(denied.find('#save-state').textContent,/Sem salvamento/);assert.equal(denied.errors.length,0);denied.dom.window.close();
  app.dom.window.close();console.log('OK: navegação de ida/volta, retomada após validação, bloqueio de saltos e duplicação, interface DOM dos 50 chamados, recuperação, evidências, 5000 XP sem repetição, filtros, avatar, percurso, configurações, retomada, modo sem armazenamento e alternativa sem WebGL. Não inclui renderização gráfica.');
})();
