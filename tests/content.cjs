const assert=require('node:assert/strict');
(async()=>{
  const {cases,levels}=await import('../src/cases.js');
  const {newRecord,choose,investigate,advanceInvestigation,target,options,totalXP,cleanState,fresh}=await import('../src/rules.js');
  assert.equal(cases.length,50);assert.equal(levels.length,5);
  const state=fresh();
  for(const c of cases){
    assert.equal(c.level,Math.ceil(c.id/10));assert.ok(c.symptom&&c.confirm&&c.steps.length>=2);assert.ok(c.steps.every(s=>s.length===3&&s.every(Boolean)));
    const r=newRecord();state.records[c.id]=r;
    assert.equal(choose(c,r,1),false);assert.equal(r.stage,0);assert.equal(r.errors,1);
    assert.equal(choose(c,r,0),true);assert.equal(r.stage,1);
    assert.equal(advanceInvestigation(c,r),false);
    const wrongTest=(target(c)+1)%c.steps.length;assert.match(investigate(c,r,wrongTest),/descartada/);
    assert.equal(advanceInvestigation(c,r),false);
    assert.match(investigate(c,r,target(c)),/identifica/);
    investigate(c,r,target(c));assert.equal(r.tested.length,2);
    assert.equal(advanceInvestigation(c,r),true);
    for(let stage=2;stage<6;stage++){
      const right=[2,3].includes(stage)?target(c):0,wrong=(right+1)%options(c,stage).length;
      assert.equal(choose(c,r,wrong),false);assert.equal(r.stage,stage);
      assert.equal(choose(c,r,right),true);assert.equal(r.stage,stage+1);
    }
    const xp=totalXP(state);assert.equal(choose(c,r,0),false);assert.equal(totalXP(state),xp);
    assert.equal(r.stage,6);
  }
  assert.equal(totalXP(state),5000);
  const restored=cleanState(JSON.parse(JSON.stringify(state)));assert.equal(totalXP(restored),5000);
  const tampered=fresh();tampered.records[1]={stage:6,tested:[],errors:-2,hints:0};assert.equal(cleanState(tampered).records[1].stage,1);
  const legacy=fresh();legacy.records[1]={stage:6,tested:[0],errors:0,hints:0};assert.equal(cleanState(legacy).records[1].viewStage,6);
  for(const [value,expected] of [[99,6],[-9,0],['2',6],[2,2]]){legacy.records[1].viewStage=value;assert.equal(cleanState(legacy).records[1].viewStage,expected);}
  legacy.records[1].tested=[];legacy.records[1].viewStage=6;assert.equal(cleanState(legacy).records[1].viewStage,1);
  assert.throws(()=>cleanState({}));assert.throws(()=>cleanState(null));assert.throws(()=>cleanState({version:1,records:[]}));
  state.skin=3;assert.equal(cleanState(state).skin,3);const noXP=fresh();noXP.skin=3;assert.equal(cleanState(noXP).skin,0);
  console.log('OK: 50 casos, 5 estações, 300 etapas, erros e recuperação, evidências obrigatórias, retomada, 5000 XP sem repetição, restauração e validação de dados.');
})();
