import {cases} from './cases.js';
import {shopFresh,cleanShop} from './shop-data.js';
import {meritFresh,cleanMerit} from './merit-data.js';
export const KEY='amc-mundo-3d-v1';
export const safety='Preservar os dados, consultar o manual e fazer intervenções internas com o professor, computador desligado e fora da tomada. Nunca abrir fonte ou monitor.';
export const phaseNames=['Testar','Consertar','Conferir'];
// Os marcos internos são mantidos para preservar a economia e os percursos antigos.
export const stageNames=['Testar','Testar','Consertar','Consertar','Conferir','Conferir'];
export const outfits=[{name:'Campus',color:'#397e68',xp:0},{name:'Circuito',color:'#438eaf',xp:200},{name:'Criativo',color:'#ac7a50',xp:500},{name:'Especialista',color:'#8a72aa',xp:1000}];
export const target=c=>(c.id-1)%c.steps.length;
export const fresh=()=>({version:2,tutorial:false,skin:0,quality:'auto',records:{},shop:shopFresh(),merit:meritFresh()});
export const newRecord=()=>({stage:1,viewStage:0,tested:[],lastTest:null,errors:0,hints:0});
export const phase=r=>r.stage===6?3:r.stage>=4?2:r.stage>=3?1:0;
export const viewedStage=r=>Number.isInteger(r.viewStage)?Math.max(0,Math.min(r.viewStage,phase(r))):phase(r);
export function moveStage(c,r,direction){
  const view=viewedStage(r);
  if(direction===-1&&view>0){r.viewStage=view-1;return true;}
  if(direction!==1)return false;
  if(view<phase(r)){r.viewStage=view+1;return true;}
  if(view===0&&r.stage===1&&r.tested.includes(target(c))){r.stage=3;r.viewStage=1;return true;}
  return false;
}
export const totalXP=s=>Object.values(s.records).filter(r=>r.stage===6).length*100;
export function cleanState(raw){
  if(!raw||typeof raw!=='object'||![1,2].includes(raw.version)||!raw.records||typeof raw.records!=='object'||Array.isArray(raw.records))throw Error('Arquivo de progresso inválido.');
  const s=fresh();s.tutorial=raw.tutorial===true;s.quality=['auto','low'].includes(raw.quality)?raw.quality:'auto';
  for(const c of cases){const r=raw.records[c.id];if(!r||!Number.isInteger(r.stage)||r.stage<0||r.stage>6||!Array.isArray(r.tested))continue;
    const tested=[...new Set(r.tested.filter(n=>Number.isInteger(n)&&n>=0&&n<c.steps.length))];
    // Uma investigação só pode avançar após consultar a evidência decisiva.
    let stage=r.stage===6?6:r.stage>=4?4:r.stage>=2?3:1;
    if(stage>1&&!tested.includes(target(c)))stage=1;
    const max=phase({stage}),legacyView=Number.isInteger(r.viewStage)?r.viewStage:r.stage;
    const view=raw.version===1?(legacyView===6?3:legacyView>=4?2:legacyView>=2?1:0):r.viewStage;
    s.records[c.id]={stage,viewStage:Number.isInteger(view)?Math.max(0,Math.min(view,max)):max,tested,lastTest:tested.includes(r.lastTest)?r.lastTest:tested.at(-1)??null,errors:Number.isInteger(r.errors)&&r.errors>=0?Math.min(r.errors,100000):0,hints:Number.isInteger(r.hints)&&r.hints>=0?Math.min(r.hints,100000):0};
  }
  s.skin=Number.isInteger(raw.skin)&&outfits[raw.skin]?.xp<=totalXP(s)?raw.skin:0;s.shop=cleanShop(raw.shop,s.records);s.merit=cleanMerit(raw.merit,s);return s;
}
export function options(c,stage){
  if(stage===3)return c.steps.map(s=>s[2]);
  return [];
}
export function choose(c,r,index){
  if(r.stage!==3||viewedStage(r)!==1||!r.tested.includes(target(c)))return false;
  const list=options(c,r.stage);if(!list.length||!Number.isInteger(index)||index<0||index>=list.length)return false;
  const expected=target(c);
  if(index!==expected){r.errors++;return false;}
  r.stage++;return true;
}
export function investigate(c,r,index){
  if(viewedStage(r)!==0||!Number.isInteger(index)||index<0||index>=c.steps.length)return null;
  if(!r.tested.includes(index))r.tested.push(index);
  r.lastTest=index;
  return index===target(c)?`O teste identifica esta condição no cenário: ${c.steps[index][0]}. A falha permanece até a correção correspondente.`:'Resultado esperado nesta verificação: essa hipótese foi descartada no cenário. A falha continua. Compare outra variável, uma de cada vez.';
}
export function confirmRepair(c,r){if(r.stage!==4||viewedStage(r)!==2||!r.tested.includes(target(c)))return false;r.stage=6;return true;}
