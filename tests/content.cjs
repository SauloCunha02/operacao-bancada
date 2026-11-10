const assert=require('node:assert/strict');
(async()=>{
  const {cases,levels}=await import('../src/cases.js');
  const {newRecord,choose,investigate,target,totalXP,cleanState,fresh,phase,viewedStage,moveStage,confirmRepair,phaseNames}=await import('../src/rules.js');
  const {benchCases,candidateFixes,focusPart,checkedOutcome}=await import('../src/bench-data.js');const {renderSimulator,renderBenchActions}=await import('../src/bench-ui.js');
  const {balance}=await import('../src/shop-data.js');
  assert.equal(cases.length,50);assert.equal(levels.length,5);assert.deepEqual(phaseNames,['Testar','Consertar','Conferir']);
  assert.equal(benchCases.length,50);
  const state=fresh();
  for(const c of cases){
    const b=benchCases[c.id-1];assert.equal(b.actions.length,c.steps.length);assert.ok(b.finding&&b.check&&b.kind);
    assert.equal(new Set(b.actions.map(a=>a.test)).size,b.actions.length);
    for(const a of b.actions){assert.ok(a.test.length<=38&&a.fix.length<=40);assert.ok(a.normal.length>15);}
    for(let index=0;index<c.steps.length;index++){
      const preview={stage:1,viewStage:0,tested:[index],lastTest:index,errors:0,hints:0};
      const html=renderSimulator(c,preview)+renderBenchActions(c,preview);
      assert.ok(!/\b(undefined|NaN)\b/.test(html));assert.ok(html.includes('data-test="'+index+'"'));assert.ok(html.includes(index===target(c)?b.finding:b.actions[index].normal));
    }
    if(b.referral)assert.notEqual(checkedOutcome(c),c.confirm);
    assert.equal(candidateFixes(c).length,3);assert.ok(candidateFixes(c).includes(target(c)));
    const r=newRecord();state.records[c.id]=r;const xp=totalXP(state);
    assert.equal(phase(r),0);assert.equal(moveStage(c,r,-1),false);assert.equal(moveStage(c,r,1),false);
    assert.equal(choose(c,r,target(c)),false);assert.equal(confirmRepair(c,r),false);
    assert.equal(investigate(c,r,-1),null);assert.equal(investigate(c,r,999),null);
    const other=(target(c)+1)%c.steps.length;assert.match(investigate(c,r,other),/descartada/);assert.equal(moveStage(c,r,1),false);assert.equal(r.errors,0);
    assert.match(investigate(c,r,target(c)),/identifica/);investigate(c,r,target(c));assert.equal(r.tested.length,2);
    assert.equal(moveStage(c,r,1),true);assert.equal(r.stage,3);assert.equal(viewedStage(r),1);
    assert.equal(choose(c,r,other),false);assert.equal(r.errors,1);assert.equal(r.stage,3);assert.equal(moveStage(c,r,1),false);
    assert.equal(choose(c,r,target(c)),true);assert.equal(r.stage,4);assert.equal(viewedStage(r),1);assert.equal(totalXP(state),xp);assert.equal(confirmRepair(c,r),false);
    assert.equal(moveStage(c,r,-1),true);assert.equal(investigate(c,r,other)!==null,true);assert.equal(r.stage,4);
    assert.equal(moveStage(c,r,1),true);assert.equal(moveStage(c,r,1),true);assert.equal(viewedStage(r),2);
    assert.equal(confirmRepair(c,r),true);assert.equal(r.stage,6);assert.equal(totalXP(state),xp+100);assert.equal(confirmRepair(c,r),false);assert.equal(choose(c,r,target(c)),false);
    assert.equal(moveStage(c,r,1),true);assert.equal(viewedStage(r),3);assert.equal(moveStage(c,r,1),false);
    for(let i=0;i<3;i++)assert.equal(moveStage(c,r,-1),true);
    for(let i=0;i<3;i++)assert.equal(moveStage(c,r,1),true);
    assert.equal(r.stage,6);assert.equal(totalXP(state),xp+100);
    const saved=cleanState(JSON.parse(JSON.stringify(state)));assert.equal(saved.records[c.id].viewStage,3);assert.equal(saved.records[c.id].lastTest,other);
    // Toda etapa e cursor da versão anterior migra sem adicionar missões ou recompensas.
    for(let oldStage=0;oldStage<=6;oldStage++){
      for(let oldView=0;oldView<=oldStage;oldView++){
        const legacy={version:1,records:{[c.id]:{stage:oldStage,viewStage:oldView,tested:oldStage>=2?[target(c)]:[],errors:3,hints:2}}};
        const migrated=cleanState(legacy),mr=migrated.records[c.id],expected=oldStage===6?6:oldStage>=4?4:oldStage>=2?3:1;
        assert.equal(migrated.version,2);assert.equal(mr.stage,expected);assert.ok(mr.viewStage>=0&&mr.viewStage<=phase(mr));assert.equal(mr.errors,3);assert.equal(mr.hints,2);
        assert.equal(totalXP(migrated),oldStage===6?100:0);assert.equal(balance(migrated),oldStage===6?140:100);
      }
    }
  }
  assert.equal(focusPart(cases[33],1),'fan','Ferramenta não deve ser confundida com RAM');
  assert.equal(totalXP(state),5000);assert.equal(balance(state),2100);
  const forged=fresh();forged.records[1]={stage:6,viewStage:99,tested:[],errors:-2,hints:0};assert.equal(cleanState(forged).records[1].stage,1);assert.equal(cleanState(forged).records[1].viewStage,0);
  for(const [value,expected] of [[99,3],[-9,0],['2',3],[2,2]]){forged.records[1]={stage:6,viewStage:value,tested:[0],lastTest:999,errors:0,hints:0};const r=cleanState(forged).records[1];assert.equal(r.viewStage,expected);assert.equal(r.lastTest,0);}
  assert.throws(()=>cleanState({}));assert.throws(()=>cleanState(null));assert.throws(()=>cleanState({version:3,records:{}}));assert.throws(()=>cleanState({version:2,records:[]}));
  state.skin=3;assert.equal(cleanState(state).skin,3);const noXP=fresh();noXP.skin=3;assert.equal(cleanState(noXP).skin,0);
  console.log('OK: 50 bancadas, 203 testes com ações próprias, três etapas, evidência obrigatória, conserto e conferência, revisão sem recompensa extra e migração de todas as etapas/cursor antigos.');
})();
