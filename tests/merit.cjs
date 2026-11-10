const assert=require('node:assert/strict');
(async()=>{
  const {cases}=await import('../src/cases.js');const {fresh,cleanState,target,totalXP}=await import('../src/rules.js');const {balance}=await import('../src/shop-data.js');
  const {merits,meritProgress,meritPoints,meritTier,syncMerits,featureMerit,suggestMission}=await import('../src/merit-data.js');
  const s=fresh(),done=(id,extra={})=>{const c=cases[id-1];s.records[id]={stage:6,tested:[target(c)],errors:0,hints:0,...extra};};
  assert.equal(merits.length,12);assert.equal(meritPoints(s),0);assert.equal(meritProgress(s).filter(m=>m.unlocked).length,0);assert.equal(featureMerit(s,'first-fix'),false);
  s.records[1]={stage:5,tested:[0,1,2],errors:1,hints:1};assert.equal(meritPoints(s),0);done(1);assert.equal(meritPoints(s),30);assert.equal(syncMerits(s).length,1);assert.equal(syncMerits(s).length,0);
  assert.equal(featureMerit(s,'first-fix'),true);assert.equal(s.merit.featured,'first-fix');assert.equal(featureMerit(s,'campus-restored'),false);
  for(const id of [11,21,31,41])done(id);assert.ok(meritProgress(s).find(m=>m.id==='explorer').unlocked);assert.ok(meritProgress(s).find(m=>m.id==='method').unlocked);assert.ok(!meritProgress(s).find(m=>m.id==='station-1').unlocked);
  for(const c of cases)done(c.id);assert.equal(meritProgress(s).filter(m=>m.unlocked).length,10);assert.equal(suggestMission(s,merits.find(m=>m.id==='curious')).id,1,'Méritos de método devem continuar alcançáveis depois das 50 missões');
  const xp=totalXP(s),credits=balance(s);for(const id of [1,2,3]){const c=cases[id-1];s.records[id].tested=[...new Set([target(c),0,1,2])];s.records[id].hints=1;}
  assert.equal(meritProgress(s).filter(m=>m.unlocked).length,12);assert.equal(meritPoints(s),1300);assert.equal(meritTier(s).name,'Legado em movimento');assert.equal(meritTier(s).next,null);assert.equal(totalXP(s),xp);assert.equal(balance(s),credits);
  assert.equal(featureMerit(s,'campus-restored'),true);syncMerits(s);const restored=cleanState(JSON.parse(JSON.stringify(s)));assert.equal(restored.merit.featured,'campus-restored');assert.equal(meritPoints(restored),1300);assert.equal(syncMerits(restored).length,0);
  const legacy={version:1,records:{1:{stage:6,tested:[0],errors:0,hints:0}}};const migrated=cleanState(legacy);assert.equal(meritPoints(migrated),30);assert.equal(syncMerits(migrated).length,0,'Importação antiga não deve repetir avisos de conquistas antigas');
  legacy.merit={featured:'campus-restored',seen:['unknown','campus-restored','first-fix','first-fix']};const sanitized=cleanState(legacy);assert.equal(sanitized.merit.featured,null);assert.deepEqual(sanitized.merit.seen,['first-fix']);
  const forged=fresh();forged.records[1]={stage:6,tested:[],errors:100,hints:100};assert.equal(meritPoints(cleanState(forged)),0,'Conclusão sem evidência não pode gerar mérito');
  assert.equal(featureMerit(s,null),true);assert.equal(s.merit.featured,null);
  console.log('OK: 12 méritos, critérios e limiares, 1300 pontos máximos, avisos sem repetição, destaque válido, migração, revisão posterior às 50 missões e ausência de XP/créditos extras.');
})();
