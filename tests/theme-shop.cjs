const assert=require('node:assert/strict');
const fs=require('node:fs');
const {JSDOM,VirtualConsole}=require('jsdom');
const {build}=require('esbuild');
(async()=>{
  const {outputFiles}=await build({entryPoints:['src/game.js'],bundle:true,format:'iife',write:false});
  const {KEY,fresh,target}=await import('../src/rules.js');const {THEME_KEY}=await import('../src/theme.js');const {cases}=await import('../src/cases.js');
  function setup({saved=null,theme=null,systemDark=false,deny=false}={}){
    const dom=new JSDOM(fs.readFileSync('src/index.html','utf8'),{url:'http://localhost/',runScripts:'outside-only',pretendToBeVisual:true,virtualConsole:new VirtualConsole()});const w=dom.window;const errors=[];
    w.addEventListener('error',e=>errors.push(e.error));w.matchMedia=q=>({matches:q.includes('color-scheme')&&systemDark,addEventListener(){}});w.setTimeout=()=>0;w.clearTimeout=()=>{};
    w.HTMLDialogElement.prototype.showModal=function(){this.setAttribute('open','');};w.HTMLDialogElement.prototype.close=function(){this.removeAttribute('open');this.dispatchEvent(new w.Event('close'));};
    if(saved)w.localStorage.setItem(KEY,saved);if(theme)w.localStorage.setItem(THEME_KEY,theme);if(deny)Object.defineProperty(w,'localStorage',{get(){throw Error('denied');}});
    w.eval(outputFiles[0].text);const el=s=>{const node=w.document.querySelector(s);assert.ok(node,s);return node;};return {dom,w,el,click:s=>el(s).click(),errors};
  }
  const a=setup();assert.equal(a.w.document.documentElement.dataset.theme,'light');a.click('#theme-toggle');assert.equal(a.w.document.documentElement.dataset.theme,'dark');assert.equal(a.el('#theme-toggle').getAttribute('aria-pressed'),'true');assert.match(a.el('#theme-toggle').getAttribute('aria-label'),/claro/);assert.equal(a.w.localStorage.getItem(THEME_KEY),'dark');
  a.click('#shop-nav');assert.equal(a.el('#shop-balance').textContent,'100');assert.equal(a.w.document.querySelectorAll('[data-shop-select]').length,14);assert.equal(a.el('#shop-name').textContent,'Visor Pixel');
  assert.equal(a.w.localStorage.getItem(KEY),null,'Experimentar não pode gastar créditos nem gravar compra');a.click('[data-shop-filter="back"]');assert.equal(a.w.document.querySelectorAll('[data-shop-select]').length,3);assert.equal(a.el('#shop-name').textContent,'Kit de Campo');assert.ok(a.el('#shop-action').disabled);
  a.click('[data-shop-filter="head"]');a.click('[data-shop-select="visor-lime"]');assert.equal(a.el('#shop-preview-image').getAttribute('src'),'shop/visor-lime.webp');a.click('#shop-action');assert.equal(a.el('#shop-balance').textContent,'40');assert.match(a.el('#shop-action').textContent,/Equipado/);assert.ok(a.el('#shop-action').disabled);
  const snapshot=JSON.parse(a.w.localStorage.getItem(KEY));assert.deepEqual(snapshot.shop.owned,['visor-lime']);a.click('#shop-remove');assert.equal(JSON.parse(a.w.localStorage.getItem(KEY)).shop.equipped.head,null);a.click('#shop-action');assert.equal(a.el('#shop-balance').textContent,'40');a.click('[data-shop-select="cap-blue"]');assert.ok(a.el('#shop-action').disabled);assert.match(a.el('#shop-action').textContent,/Faltam 40/);
  a.click('[data-shop-filter="owned"]');assert.equal(a.w.document.querySelectorAll('[data-shop-select]').length,2);a.click('#close-panel');assert.ok(!a.el('#panel').open);a.click('#missions-nav');assert.equal(a.w.document.querySelectorAll('[data-case]').length,50);a.click('#close-panel');
  const b=setup({saved:a.w.localStorage.getItem(KEY),theme:a.w.localStorage.getItem(THEME_KEY)});assert.equal(b.w.document.documentElement.dataset.theme,'dark');b.click('#shop-nav');assert.equal(b.el('#shop-balance').textContent,'40');b.click('#close-panel');b.click('#settings');b.el('#theme-choice').value='light';b.el('#theme-choice').dispatchEvent(new b.w.Event('change',{bubbles:true}));assert.equal(b.w.document.documentElement.dataset.theme,'light');
  b.w.dispatchEvent(new b.w.StorageEvent('storage',{key:THEME_KEY,newValue:'dark'}));assert.equal(b.w.document.documentElement.dataset.theme,'dark');
  const full=fresh();for(const c of cases)full.records[c.id]={stage:6,tested:[target(c)],errors:0,hints:0};const c=setup({saved:JSON.stringify(full),systemDark:true});assert.equal(c.w.document.documentElement.dataset.theme,'dark');c.click('#shop-nav');c.click('[data-shop-filter="aura"]');c.click('[data-shop-select="aura-cosmic"]');assert.ok(!c.el('#shop-action').disabled);c.click('#shop-action');assert.equal(c.el('#shop-balance').textContent,'1750');assert.equal(JSON.parse(c.w.localStorage.getItem(KEY)).shop.equipped.aura,'aura-cosmic');
  const denied=setup({deny:true,systemDark:true});denied.click('#theme-toggle');assert.equal(denied.w.document.documentElement.dataset.theme,'light');denied.click('#shop-nav');denied.click('#shop-action');assert.equal(denied.el('#shop-balance').textContent,'40');assert.match(denied.el('#save-state').textContent,/Sem salvamento/);
  for(const app of [a,b,c,denied]){assert.equal(app.errors.length,0,app.errors.map(e=>e?.stack).join('\n'));app.dom.window.close();}
  console.log('OK: tema claro/escuro/sistema, persistência e sincronização, 14 itens, filtros, prévia sem gasto, aquisição, equipar/retirar, saldo, bloqueios, retomada e uso sem armazenamento/WebGL.');
})();
