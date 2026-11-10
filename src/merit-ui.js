import {merits,meritProgress,meritTier,featureMerit,suggestMission} from './merit-data.js';

export function createMeritUI({getState,save,openPanel,onMission,toast,icon}){
  const $=s=>document.querySelector(s);let filter='all',selected='first-fix',noticeTimer;
  function rows(){return meritProgress(getState());}
  function updateHUD(){
    const state=getState(),list=rows(),earned=list.filter(m=>m.unlocked),featured=list.find(m=>m.id===state.merit.featured&&m.unlocked),tier=meritTier(state);
    $('#merit-count').textContent=`${earned.length}/${merits.length}`;$('#merit-hud-title').textContent=featured?featured.name:tier.name;$('#merit-hud-points').textContent=`${tier.points} pontos de mérito`;
    const profile=$('#merit-profile');profile.innerHTML=featured?`<img src="merit/${featured.image}.webp" alt="" width="40" height="40">`:'OB';profile.title=featured?'Mérito em destaque: '+featured.name:'Ver meus méritos';profile.setAttribute('aria-label',profile.title);
    const pending=list.filter(m=>!m.unlocked).sort((a,b)=>b.percent-a.percent)[0];$('#merit-hud-next').textContent=pending?`Próximo: ${pending.name} · ${pending.value}/${pending.goal}`:'Coleção de méritos completa';
  }
  function detail(){
    const state=getState(),m=rows().find(m=>m.id===selected);if(!m)return;
    $('#merit-detail-image').src='merit/'+m.image+'.webp';$('#merit-detail-image').classList.toggle('locked',!m.unlocked);
    $('#merit-detail-name').textContent=m.name;$('#merit-detail-description').textContent=m.description;
    $('#merit-detail-state').textContent=m.unlocked?'CONQUISTADO · +'+m.points+' PONTOS':'EM DESCOBERTA · '+m.points+' PONTOS';
    $('#merit-detail-progress').style.width=m.percent+'%';$('#merit-detail-counter').textContent=`${m.value} de ${m.goal} · ${m.unlocked?'conquista demonstrada na simulação':'progresso do critério'}`;
    const feature=$('#merit-feature');feature.hidden=!m.unlocked;feature.disabled=state.merit.featured===m.id;feature.textContent=feature.disabled?'✓ Em destaque no perfil':'Exibir no meu perfil';
    const suggested=suggestMission(state,m),go=$('#merit-go');go.hidden=m.unlocked||!suggested;go.textContent=suggested&&state.records[suggested.id]?.stage===6?'Revisar um chamado →':'Ir para uma missão →';
    $('#merit-unfeature').hidden=state.merit.featured!==m.id;
    document.querySelectorAll('[data-merit-select]').forEach(b=>{b.classList.toggle('selected',b.dataset.meritSelect===m.id);b.setAttribute('aria-pressed',String(b.dataset.meritSelect===m.id));});
  }
  function cards(){
    const list=rows().filter(m=>filter==='all'||filter==='earned'&&m.unlocked||filter==='pending'&&!m.unlocked||m.category===filter);
    $('#merit-results').textContent=`${list.length} ${list.length===1?'mérito':'méritos'}`;
    $('#merit-cards').innerHTML=list.map(m=>`<button class="merit-card ${m.unlocked?'earned':'pending'} ${selected===m.id?'selected':''}" style="--medal-color:${m.color}" data-merit-select="${m.id}" aria-pressed="${selected===m.id}"><span class="medal-art"><img src="merit/${m.image}.webp" alt="" width="256" height="256" loading="lazy"><span class="medal-state">${m.unlocked?'✓ CONQUISTADO':m.value+'/'+m.goal}</span></span><strong>${m.name}</strong><span class="medal-points">${m.points} pontos <span>${m.unlocked?'Ver conquista':'Ver objetivo'} ↗</span></span><span class="medal-track"><i style="width:${m.percent}%"></i></span></button>`).join('')||'<p class="dialog-copy">Nenhuma conquista neste filtro por enquanto. Cada chamado é um novo passo.</p>';
  }
  function show(id=null){
    const state=getState(),list=rows(),tier=meritTier(state),earned=list.filter(m=>m.unlocked),featured=list.find(m=>m.id===state.merit.featured),next=list.filter(m=>!m.unlocked).sort((a,b)=>b.percent-a.percent)[0];
    selected=list.some(m=>m.id===id)?id:(featured?.id||next?.id||list.at(-1).id);
    const rankPercent=tier.next?(tier.points-tier.at)/(tier.next.at-tier.at)*100:100;
    openPanel('Cada descoberta deixa uma marca.','SEUS MÉRITOS · CONQUISTAS DO CAMPUS',`<div class="merit-hero"><div><p class="eyebrow">${tier.name}</p><h3>Seu conhecimento<br>ganhou novas formas.</h3><p>Investigar, pedir apoio e concluir etapas também são conquistas. Escolha uma medalha para conhecer seu próximo objetivo.</p><div class="merit-rank-track"><i style="width:${rankPercent}%"></i></div><small>${tier.next?`${tier.next.at-tier.points} pontos para ${tier.next.name}`:'Você alcançou o último título do campus.'}</small></div><div class="merit-stat"><strong>${earned.length}<span>/${merits.length}</span></strong><span>medalhas conquistadas</span><b>${tier.points} pontos de mérito</b></div></div><section class="merit-detail" aria-label="Detalhes do mérito"><div class="merit-detail-art"><img id="merit-detail-image" alt="" width="200" height="200"></div><div class="merit-detail-copy"><p class="eyebrow" id="merit-detail-state"></p><h3 id="merit-detail-name"></h3><p id="merit-detail-description"></p><div class="merit-detail-track"><i id="merit-detail-progress"></i></div><small id="merit-detail-counter"></small><div class="actions"><button id="merit-feature" class="primary"></button><button id="merit-go" class="primary"></button><button id="merit-unfeature" class="secondary">Retirar destaque</button></div></div></section><div class="merit-filter-row"><div class="merit-filters" aria-label="Filtrar méritos">${Object.entries({all:'Todos',earned:'Conquistados',pending:'Em progresso',metodo:'Método',estacoes:'Estações',jornada:'Jornada'}).map(([id,label])=>`<button data-merit-filter="${id}" class="${id===filter?'selected':''}" aria-pressed="${id===filter}">${label}</button>`).join('')}</div><span id="merit-results"></span></div><div id="merit-cards" class="merit-grid"></div><p class="note">Os méritos reconhecem o percurso na simulação. São conquistados por critérios visíveis, sem compra e sem consumir XP ou créditos. Seu progresso anterior também conta.</p>`,'merits');
    cards();detail();$('#merit-feature').onclick=()=>{if(featureMerit(state,selected)){save();detail();toast('Medalha em destaque no seu perfil.');}};
    $('#merit-unfeature').onclick=()=>{featureMerit(state,null);save();detail();toast('Destaque retirado. A medalha continua na coleção.');};
    $('#merit-go').onclick=()=>{const mission=suggestMission(state,rows().find(m=>m.id===selected));if(mission)onMission(mission.id,state.records[mission.id]?.stage===6);};
  }
  $('#panel-content').addEventListener('click',e=>{if(!$('#panel').classList.contains('merit-dialog'))return;const b=e.target.closest('button');if(!b)return;if(b.dataset.meritSelect){selected=b.dataset.meritSelect;detail();}else if(b.dataset.meritFilter){filter=b.dataset.meritFilter;document.querySelectorAll('[data-merit-filter]').forEach(el=>{el.classList.toggle('selected',el===b);el.setAttribute('aria-pressed',String(el===b));});cards();detail();}});
  function notify(newMerits){
    if(!newMerits.length)return;const m=[...newMerits].sort((a,b)=>b.points-a.points)[0],notice=$('#merit-notice');
    notice.innerHTML=`<img src="merit/${m.image}.webp" alt="" width="76" height="76"><div><span class="eyebrow">NOVA CONQUISTA</span><strong>${m.name}</strong><p>+${m.points} pontos de mérito${newMerits.length>1?` · e mais ${newMerits.length-1} ${newMerits.length===2?'medalha':'medalhas'}`:''}</p><button data-open-merits="${m.id}">Ver meus méritos →</button></div><button class="merit-dismiss" data-merit-dismiss aria-label="Fechar aviso">${icon('close')}</button>`;notice.hidden=false;clearTimeout(noticeTimer);noticeTimer=setTimeout(()=>notice.hidden=true,8000);
  }
  document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b)return;if(b.hasAttribute('data-open-merits')){show(b.dataset.openMerits);$('#merit-notice').hidden=true;}if(b.hasAttribute('data-merit-dismiss'))$('#merit-notice').hidden=true;});
  return {show,notify,updateHUD};
}
