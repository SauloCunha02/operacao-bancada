const assert=require('node:assert/strict');
const path=require('node:path');
const {pathToFileURL}=require('node:url');
let playwright;try{playwright=require('playwright');}catch{playwright=require(process.env.AMC_PLAYWRIGHT_PATH||path.join(process.env.USERPROFILE,'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright'));}
(async()=>{
 const browser=await playwright.chromium.launch({headless:true,channel:'msedge'});
 try{
  const context=await browser.newContext({viewport:{width:1440,height:950}});
  const p=await context.newPage();const errors=[];p.on('pageerror',e=>errors.push(e.message));
  const url='http://127.0.0.1:4173/';
  const background=selector=>p.locator(selector).evaluate(e=>getComputedStyle(e).backgroundColor);
  await p.goto(url);await p.locator('#theme-toggle').press('Enter');
  assert.equal(await p.locator('#theme-toggle').getAttribute('aria-pressed'),'true');
  assert.equal(await background('body'),'rgb(12, 29, 36)');
  assert.equal(await background('.stat >> nth=0'),'rgb(21, 45, 53)');
  await p.reload();assert.equal(await p.locator('html').getAttribute('data-theme'),'dark');
  await p.screenshot({path:'verification-artifacts/tema-escuro.png'});
  const second=await context.newPage();await second.goto(url+'biblioteca.html');
  assert.equal(await second.locator('html').getAttribute('data-theme'),'dark');
  await p.locator('.navigation [data-view="missions"]').click();await p.locator('[data-mission="1"]').click();await p.locator('[data-answer="0"]').click();
  const before=await p.evaluate(()=>({progress:localStorage.getItem('amc-educatech-v2'),prefs:localStorage.getItem('amc-accessibility-v1')}));
  await p.locator('#mission-dialog .dialog-head #theme-toggle').click();
  await second.waitForFunction(()=>document.documentElement.dataset.theme==='light');
  await p.locator('#theme-toggle').click();
  assert.deepEqual(await p.evaluate(()=>({progress:localStorage.getItem('amc-educatech-v2'),prefs:localStorage.getItem('amc-accessibility-v1')})),before);
  assert.equal(await background('#mission-dialog'),'rgb(21, 45, 53)');
  await p.locator('#a11y-launcher').click();
  for(const palette of ['protanopia','deuteranopia','tritanopia','achromatopsia']){
   await p.locator('#a11y-palette').selectOption(palette);
   assert.equal(await p.locator('html').getAttribute('data-theme'),'dark');
   assert.equal(await p.locator('html').getAttribute('data-a11y-palette'),palette);
  }
  await p.locator('#a11y-contrast').selectOption('light');assert.equal(await background('body'),'rgb(255, 255, 255)');
  await p.locator('#a11y-contrast').selectOption('dark');assert.equal(await background('body'),'rgb(17, 17, 17)');
  await p.locator('#a11y-reset').click();assert.equal(await background('body'),'rgb(12, 29, 36)');
  await p.locator('#a11y-close').click();await p.getByRole('button',{name:'Fechar chamado e salvar'}).click();
  for(const file of ['index.html','biblioteca.html','identidade.html']){
   await p.goto(url+file);assert.equal(await p.locator('html').getAttribute('data-theme'),'dark');
   for(const width of [320,390,768,1280]){
    await p.setViewportSize({width,height:950});
    assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),'Refluxo em '+file+' / '+width);
   }
  }
  await p.locator('#a11y-launcher').click();await p.locator('#a11y-size').press('End');await p.locator('#a11y-close').click();
  await p.setViewportSize({width:320,height:950});assert(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
  await p.locator('#theme-toggle').press('Space');assert.equal(await p.locator('html').getAttribute('data-theme'),'light');
  await p.locator('#a11y-launcher').click();await p.locator('#a11y-reset').click();await p.locator('#a11y-close').click();
  await p.setViewportSize({width:1440,height:950});await p.goto(url);await p.screenshot({path:'verification-artifacts/tema-claro.png'});
  for(const file of ['AMC-50-casos.html','AMC-biblioteca.html','AMC-identidade.html']){
   await p.goto(pathToFileURL(path.resolve(file)).href);await p.locator('#theme-toggle').click();
   const theme=await p.locator('html').getAttribute('data-theme');await p.reload();assert.equal(await p.locator('html').getAttribute('data-theme'),theme);
  }
  const blocked=await browser.newContext();await blocked.addInitScript(()=>Object.defineProperty(window,'localStorage',{get(){throw new Error('Storage blocked');}}));
  const blockedPage=await blocked.newPage();blockedPage.on('pageerror',e=>errors.push(e.message));await blockedPage.goto(url);await blockedPage.locator('#theme-toggle').click();assert.equal(await blockedPage.locator('html').getAttribute('data-theme'),'dark');
  assert.deepEqual(errors,[]);
  console.log('PASS: temas em três páginas e três HTMLs offline; persistência, sincronização entre abas, teclado, chamados, progresso preservado, paletas e alto contraste, texto 200%, quatro larguras e armazenamento bloqueado.');
 }finally{await browser.close();}
})().catch(e=>{console.error(e);process.exitCode=1;});
