import {cases} from './cases.js';

// Méritos descrevem o percurso digital; não gastam XP e não são comprados na loja.
const definition=(id,name,description,category,goal,points,image,color,metric,station=null)=>({id,name,description,category,goal,points,image,color,metric,station});
export const merits=[
  definition('first-fix','Primeira faísca','Conclua seu primeiro chamado, dos testes à conferência.','jornada',1,30,'first','#c28a4e','completed'),
  definition('curious','Olhar investigativo','Consulte pelo menos 3 testes em cada um de 3 chamados concluídos.','metodo',3,60,'investigator','#58b6cd','curious'),
  definition('resilient','Um novo olhar','Conclua 3 chamados com revisão de decisões ou apoio das pistas da mentora.','metodo',3,60,'resilience','#d58b78','reviewed'),
  definition('method','Método em ação','Conclua 5 chamados com a evidência decisiva investigada.','metodo',5,80,'investigator','#75bfa7','completed'),
  definition('explorer','Explorador do campus','Conclua pelo menos 1 chamado em cada uma das 5 estações.','jornada',5,120,'explorer','#62bab1','stations'),
  definition('station-1','Energia restaurada','Conclua os 10 chamados da estação Primeiros passos.','estacoes',10,100,'power','#88b963','station',1),
  definition('station-2','Tudo no ajuste','Conclua os 10 chamados da estação Uso e configurações.','estacoes',10,100,'settings','#d8ac58','station',2),
  definition('station-3','Guardião dos dados','Conclua os 10 chamados da estação Sistema e armazenamento.','estacoes',10,100,'data','#75aeca','station',3),
  definition('station-4','Por dentro da máquina','Conclua os 10 chamados da estação Dentro do gabinete.','estacoes',10,100,'hardware','#ac95cf','station',4),
  definition('station-5','Detetive de hardware','Conclua os 10 chamados da estação Isolamento de falhas.','estacoes',10,100,'diagnosis','#d89c72','station',5),
  definition('halfway','Grandes descobertas','Conclua 25 chamados na simulação.','jornada',25,150,'champion','#9dafb5','completed'),
  definition('campus-restored','Legado da Bancada','Conclua os 50 chamados e restaure o laboratório na simulação.','jornada',50,300,'champion','#e0b957','completed')
];
const validCompleted=state=>cases.filter(c=>{const r=state.records[c.id];return r?.stage===6&&Array.isArray(r.tested)&&r.tested.includes((c.id-1)%c.steps.length);});
export function meritProgress(state){
  const done=validCompleted(state);
  const metrics={completed:done.length,curious:done.filter(c=>new Set(state.records[c.id].tested.filter(i=>Number.isInteger(i)&&i>=0&&i<c.steps.length)).size>=3).length,reviewed:done.filter(c=>state.records[c.id].errors>0||state.records[c.id].hints>0).length,stations:new Set(done.map(c=>c.level)).size};
  return merits.map(m=>{const value=m.metric==='station'?done.filter(c=>c.level===m.station).length:metrics[m.metric];return {...m,value:Math.min(value,m.goal),unlocked:value>=m.goal,percent:Math.min(100,value/m.goal*100)};});
}
export const meritPoints=state=>meritProgress(state).filter(m=>m.unlocked).reduce((sum,m)=>sum+m.points,0);
export function meritTier(state){const points=meritPoints(state);const tiers=[{name:'Semente de curiosidade',at:0},{name:'Olhar de investigador',at:100},{name:'Talento em construção',at:350},{name:'Referência do campus',at:700},{name:'Legado em movimento',at:1200}];const tier=[...tiers].reverse().find(t=>points>=t.at);return {...tier,next:tiers.find(t=>t.at>points)||null,points};}
export const meritFresh=()=>({featured:null,seen:[],tracked:null});
export function cleanMerit(raw,state){const unlocked=meritProgress(state).filter(m=>m.unlocked).map(m=>m.id);return {featured:unlocked.includes(raw?.featured)?raw.featured:null,seen:Array.isArray(raw?.seen)?[...new Set(raw.seen.slice(0,100).filter(id=>unlocked.includes(id)))]:unlocked,tracked:merits.some(m=>m.id===raw?.tracked)&&!unlocked.includes(raw?.tracked)?raw.tracked:null};}
export function syncMerits(state){const unlocked=meritProgress(state).filter(m=>m.unlocked),fresh=unlocked.filter(m=>!state.merit.seen.includes(m.id));state.merit.seen=unlocked.map(m=>m.id);if(state.merit.featured&&!unlocked.some(m=>m.id===state.merit.featured))state.merit.featured=null;if(state.merit.tracked&&unlocked.some(m=>m.id===state.merit.tracked))state.merit.tracked=null;return fresh;}
export function trackMerit(state,id){if(id===null){state.merit.tracked=null;return true;}if(!meritProgress(state).some(m=>m.id===id&&!m.unlocked))return false;state.merit.tracked=id;return true;}
export function featureMerit(state,id){if(id===null){state.merit.featured=null;return true;}if(!meritProgress(state).some(m=>m.id===id&&m.unlocked))return false;state.merit.featured=id;return true;}
export function suggestMission(state,merit){
  let candidates=cases.filter(c=>state.records[c.id]?.stage!==6);
  if(merit.station)candidates=candidates.filter(c=>c.level===merit.station);
  if(merit.metric==='stations'){const visited=new Set(validCompleted(state).map(c=>c.level));candidates=candidates.filter(c=>!visited.has(c.level));}
  if(!candidates.length&&merit.metric==='curious')candidates=validCompleted(state).filter(c=>new Set(state.records[c.id].tested).size<3);
  if(!candidates.length&&merit.metric==='reviewed')candidates=validCompleted(state).filter(c=>!state.records[c.id].errors&&!state.records[c.id].hints);
  return candidates.find(c=>state.records[c.id])||candidates[0]||null;
}
