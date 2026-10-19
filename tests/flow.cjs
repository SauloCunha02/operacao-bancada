const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
let playwright;
try { playwright=require('playwright'); }
catch { playwright=require(process.env.AMC_PLAYWRIGHT_PATH||path.join(process.env.USERPROFILE,'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright')); }
const {chromium}=playwright;
const output=name=>path.resolve('verification-artifacts',name);
fs.mkdirSync('verification-artifacts',{recursive:true});
const content=vm.runInNewContext(fs.readFileSync('dist/cases.js','utf8')+';cases');
async function run(){
 const browser=await chromium.launch({headless:true,channel:'msedge'});
 const page=await browser.newPage({viewport:{width:1440,height:1100}});const errors=[];const external=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('request',r=>{if(/^https?:/.test(r.url())&&!r.url().startsWith('http://127.0.0.1:4173'))external.push(r.url());});
 await page.goto('http://127.0.0.1:4173');
 await page.getByRole('button',{name:'Começar pelo diagnóstico'}).click();
 for(const n of [0,0,1])await page.locator(`[data-diagnostic-choice="${n}"]`).click();
 assert.match(await page.locator('#mission-content').innerText(),/0 de 3/);
 await page.getByRole('button',{name:'Escolher outro chamado'}).click();
 assert.equal(await page.locator('.mission-card').count(),50);
 // An all-wrong entry diagnostic still leaves every mission available.
 await page.locator('[data-mission="1"]').click();
 await page.locator('[data-answer="1"]').click();
 assert.equal(await page.evaluate(()=>state.records[1].stage),0);
 assert.match(await page.locator('#mission-content').innerText(),/não atende aos cuidados/);
 await page.locator('[data-support="hint"]').click();await page.locator('[data-support="hint"]').click();
 assert.equal(await page.locator('[data-support="hint"]').isDisabled(),true);
 assert.equal(await page.locator('[data-support="model"]').isEnabled(),true);
 await page.locator('[data-answer="0"]').click();
 await page.locator('[data-test="1"]').click();
 assert.equal(await page.locator('[data-next-test]').isDisabled(),true);
 await page.locator('[data-test="0"]').click();await page.locator('[data-next-test]').click();
 // Wrong diagnosis, correction, validation, and handoff cannot advance or award XP.
 for(const stage of [2,3,4,5]){
  const before=await page.evaluate(()=>xp());
  await page.locator('[data-answer="1"]').click();
  assert.equal(await page.evaluate(()=>state.records[1].stage),stage);
  assert.equal(await page.evaluate(()=>xp()),before);
  await page.locator('[data-answer="0"]').click();
 }
 assert.equal(await page.evaluate(()=>state.records[1].status),'demonstrated');
 assert.equal(await page.evaluate(()=>xp()),60);
 await page.locator('#self-assessment').selectOption('2');
 const osDownload=page.waitForEvent('download');await page.locator('[data-export-case]').click();
 const os=await osDownload;await os.saveAs(output('test-os.md'));assert.match(fs.readFileSync('verification-artifacts/test-os.md','utf8'),/Tomada sem energia/);
 await page.getByRole('button',{name:'Fechar chamado e salvar'}).click();
 await page.reload();await page.locator('.navigation [data-view="missions"]').click();await page.locator('[data-mission="1"]').click();
 assert.equal(await page.evaluate(()=>xp()),60);assert.equal(await page.locator('#self-assessment').inputValue(),'2');
 await page.getByRole('button',{name:'Fechar chamado e salvar'}).click();
 // Exercise the entire 50-case content set through the actual decision UI.
 for(const c of content.slice(1)){
  await page.locator(`.mission-grid [data-mission="${c.id}"]`).click();
  await page.locator('[data-answer="0"]').click();
  const t=(c.id-1)%c.steps.length;
  await page.locator(`[data-test="${t}"]`).click();await page.locator('[data-next-test]').click();
  await page.locator(`[data-answer="${t}"]`).click();await page.locator(`[data-answer="${t}"]`).click();
  await page.locator('[data-answer="0"]').click();await page.locator('[data-answer="0"]').click();
  assert.equal(await page.evaluate(id=>state.records[id].status,c.id),'demonstrated');
  await page.getByRole('button',{name:'Fechar chamado e salvar'}).click();
 }
 assert.equal(await page.evaluate(()=>xp()),3000);
 await page.locator('.navigation [data-view="boss"]').click();
 // Consulting a reference must preserve the draft and never submit the form.
 await page.locator('[data-boss-field="priority"]').selectOption('1');await page.locator('[data-reference="46"]').click();
 assert.equal(await page.evaluate(()=>state.boss.attempts.length),0);
 await page.getByRole('button',{name:'Fechar roteiro'}).click();assert.equal(await page.locator('[data-boss-field="priority"]').inputValue(),'1');
 for(const field of await page.locator('[data-boss-field]').all())await field.selectOption('1');
 await page.locator('#boss-self').check();await page.locator('#boss-form button[type="submit"]').click();
 assert.equal(await page.evaluate(()=>state.boss.status),'needs_review');
 for(const field of await page.locator('[data-boss-field]').all())await field.selectOption('0');
 for(const key of ['causeB','fixB'])await page.locator(`[data-boss-field="${key}"]`).selectOption('1');
 await page.locator('#boss-self').check();await page.locator('#boss-form button[type="submit"]').click();
 assert.equal(await page.evaluate(()=>state.boss.status),'submitted_for_review');
 assert.equal(await page.evaluate(()=>state.boss.attempts.length),2);
 await page.locator('.navigation [data-view="portfolio"]').click();
 const backupEvent=page.waitForEvent('download');await page.locator('[data-export="json"]').click();const backup=await backupEvent;await backup.saveAs(output('test-percurso.json'));
 const mdEvent=page.waitForEvent('download');await page.locator('[data-export="md"]').click();const md=await mdEvent;await md.saveAs(output('test-portfolio.md'));
 assert.match(fs.readFileSync('verification-artifacts/test-portfolio.md','utf8'),/Versão 2/);
 await page.locator('[data-reset]').click();await page.getByRole('button',{name:'Continuar meu percurso'}).click();assert.equal(await page.evaluate(()=>xp()),3000);
 await page.locator('[data-reset]').click();await page.locator('#confirm-reset').click();assert.equal(await page.evaluate(()=>xp()),0);
 await page.locator('.navigation [data-view="portfolio"]').click();await page.locator('#import-file').setInputFiles(output('test-percurso.json'));
 await page.waitForFunction(()=>xp()===3000);assert.equal(await page.evaluate(()=>state.boss.status),'submitted_for_review');
 // Full student experience has no typed answers.
 for(const v of ['home','missions','boss','portfolio','teacher']){await page.locator(`[data-view="${v}"]`).first().click();assert.equal(await page.locator('textarea,input[type="text"],input[type="search"]').count(),0);}
 await page.locator('.navigation [data-view="home"]').click();await page.screenshot({path:'verification-artifacts/preview-desktop.png',fullPage:true});
 await page.setViewportSize({width:390,height:844});await page.screenshot({path:'verification-artifacts/preview-mobile.png',fullPage:true});
 assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
 await page.locator('.navigation [data-view="missions"]').click();await page.locator('[data-filter="5"]').click();assert.equal(await page.locator('.mission-card').count(),10);
 await page.locator('[data-mission="50"]').click();assert.equal(await page.evaluate(()=>document.querySelector('dialog').scrollWidth<=document.querySelector('dialog').clientWidth),true);
 await page.keyboard.press('Escape');assert.equal(await page.locator('#mission-dialog').isVisible(),false);
 await page.setViewportSize({width:1440,height:1100});await page.locator('[data-view="teacher"]').first().click();
 await page.pdf({path:'verification-artifacts/plano-docente-preview.pdf',format:'A4',printBackground:true});
 // Original library, selection, download, and print content remain functional.
 await page.goto('http://127.0.0.1:4173/biblioteca.html');assert.equal(await page.locator('.case-card').count(),50);
 await page.locator('[data-select="1"]').check();await page.locator('[data-open="1"]').first().click();assert.match(await page.locator('#case-content').innerText(),/Tomada sem energia/);
 await page.keyboard.press('Escape');
 const libEvent=page.waitForEvent('download');await page.locator('#download-md').click();await (await libEvent).saveAs(output('test-biblioteca.md'));
 // Standalone files run without a server or external asset requests.
 await page.goto(require('node:url').pathToFileURL(path.resolve('AMC-50-casos.html')).href);assert.match(await page.title(),/Operação Bancada/);
 await page.locator('.navigation [data-view="missions"]').click();assert.equal(await page.locator('.mission-card').count(),50);
 await page.locator('.mission-grid [data-mission="2"]').click();await page.locator('[data-answer="0"]').click();assert.equal(await page.locator('[data-test]').count(),4);await page.keyboard.press('Escape');
 await page.goto(require('node:url').pathToFileURL(path.resolve('AMC-biblioteca.html')).href);assert.equal(await page.locator('.case-card').count(),50);
 assert.deepEqual(errors,[]);assert.deepEqual(external,[]);
 console.log('PASS: 50 missões; erros em todas as decisões; diagnóstico com todos os erros; pistas; retomada; XP sem repetição; 2 versões do desafio; exportação/importação; reinício; filtros; celular; Escape; biblioteca; 2 versões offline; sem erros JS ou requisições externas.');
 await browser.close();
}
run().catch(e=>{console.error(e);process.exit(1);});
