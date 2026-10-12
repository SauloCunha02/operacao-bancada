'use strict';
const $ = selector => document.querySelector(selector);
const escapeHTML = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const normalize = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
const number = id => String(id).padStart(2,'0');
const storageKey = 'amc-oficina-selecao-v1';
let selected = new Set();
let level = 0;
let onlySelected = false;
let currentCase = null;
let toastTimer;
const paths = {
  'Energia':'<path d="m13 2-8 12h6l-1 8 9-12h-6l1-8Z"/>',
  'Vídeo':'<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M8 21h8M12 17v4"/>',
  'Periféricos':'<rect x="6" y="7" width="12" height="15" rx="6"/><path d="M12 7V2m0 9v3"/>',
  'Áudio':'<path d="M4 9h4l5-4v14l-5-4H4V9Zm12-1a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14"/>',
  'Rede':'<rect x="9" y="3" width="6" height="5" rx="1"/><rect x="2" y="16" width="6" height="5" rx="1"/><rect x="16" y="16" width="6" height="5" rx="1"/><path d="M12 8v4H5v4m7-4h7v4"/>',
  'Armazenamento':'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 14h18M6 17h1m3 0h1"/>',
  'Sistema':'<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M3 8h18m-14 5 3 2-3 2m6 0h4"/>',
  'Inicialização':'<path d="M12 2v9m6-6a9 9 0 1 1-12 0"/>',
  'Refrigeração':'<circle cx="12" cy="12" r="2"/><path d="M10 10C2 8 5 1 10 4c2 1 3 3 2 6m2 0c2-8 9-5 6 0-1 2-3 3-6 2m0 2c8 2 5 9 0 6-2-1-3-3-2-6m-2 0c-2 8-9 5-6 0 1-2 3-3 6-2"/>',
  'Memória':'<rect x="2" y="6" width="20" height="11" rx="1"/><path d="M6 17v3m4-3v3m4-3v3m4-3v3M6 10v3m4-3v3m4-3v3m4-3v3"/>'
};
const icon = category => `<svg viewBox="0 0 24 24" aria-hidden="true">${paths[category] || paths.Sistema}</svg>`;
const getSelected = () => cases.filter(c => selected.has(c.id));
const filteredCases = () => {
  const terms = normalize($('#search').value.trim()).split(/\s+/).filter(Boolean);
  const category = $('#category').value;
  return cases.filter(c => (!level || c.level === level) && (!category || c.category === category) && (!onlySelected || selected.has(c.id)) && terms.every(term => normalize([c.title,c.category,c.symptom,c.note,c.confirm,...c.steps.flat()].join(' ')).includes(term)));
};
function toast(message) {
  $('#toast').textContent = message;
  $('#toast').hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { $('#toast').hidden = true; }, 4200);
}
function save() {
  try { localStorage.setItem(storageKey, JSON.stringify([...selected])); }
  catch { $('.saved').textContent = 'Use “Salvar seleção .json” para guardar'; toast('O navegador não permitiu salvar. Baixe a seleção para guardá-la.'); }
}
function updateSelection() {
  const chosen = getSelected();
  $('#selection-total').textContent = chosen.length;
  $('#filter-selected-count').textContent = chosen.length;
  $('#selection-empty').hidden = chosen.length > 0;
  $('#selection-list').innerHTML = chosen.map(c => `<li><span class="selected-num">${number(c.id)}</span><button class="selected-case" data-open="${c.id}" aria-label="Abrir caso ${number(c.id)}: ${escapeHTML(c.title)}">${escapeHTML(c.title)}</button><button class="remove-case" data-remove="${c.id}" aria-label="Remover caso ${number(c.id)}">×</button></li>`).join('');
  $('#selection-summary').hidden = !chosen.length;
  const stageCount = new Set(chosen.map(c => c.level)).size;
  $('#selection-summary').textContent = `${chosen.length} ${chosen.length === 1 ? 'caso selecionado' : 'casos selecionados'} · ${stageCount} ${stageCount === 1 ? 'etapa' : 'etapas'}\n${chosen.reduce((sum,c) => sum+c.steps.length,0)} verificações para discutir com a turma.`;
  for (const id of ['download-md','download-json','copy','print','clear-selection']) $('#'+id).disabled = !chosen.length;
  document.querySelectorAll('[data-select]').forEach(input => { input.checked = selected.has(Number(input.dataset.select)); });
  document.querySelectorAll('.case-card').forEach(card => card.classList.toggle('is-selected',selected.has(Number(card.dataset.id))));
  if (currentCase && $('#case-dialog').open) updateModalSelection();
}
function toggleSelect(id) {
  if (selected.has(id)) selected.delete(id); else selected.add(id);
  save();
  updateSelection();
  if (onlySelected) renderCards();
}
function updateModalSelection() {
  const button = $('#modal-select');
  const active = selected.has(currentCase.id);
  button.setAttribute('aria-pressed',String(active));
  button.textContent = active ? '✓ No meu material' : '+ Adicionar ao material';
}
function renderCards() {
  const visible = filteredCases();
  $('#result-count').textContent = `${visible.length} ${visible.length === 1 ? 'caso' : 'casos'}`;
  $('#cards').innerHTML = visible.map(c => `<article class="case-card ${selected.has(c.id)?'is-selected':''}" data-id="${c.id}">
    <div class="card-top"><span class="card-category">${icon(c.category)}${escapeHTML(c.category)}</span><span class="case-number">CASO ${number(c.id)}</span></div>
    <h3>${escapeHTML(c.title)}</h3><p class="symptom">${escapeHTML(c.symptom)}</p>
    <div class="card-badges"><span class="level-badge l${c.level}">${c.level}. ${levels[c.level-1].short}</span><span class="step-count">${c.steps.length} verificações</span></div>
    <div class="card-footer"><button class="inspect" data-open="${c.id}" aria-label="Investigar caso ${number(c.id)}: ${escapeHTML(c.title)}">Investigar caso <span aria-hidden="true">↗</span></button><label class="select-case"><input type="checkbox" data-select="${c.id}" ${selected.has(c.id)?'checked':''} aria-label="Adicionar caso ${number(c.id)} ao material"><span>Adicionar</span></label></div>
  </article>`).join('');
  $('#empty-results').hidden = visible.length > 0;
  $('#select-visible').disabled = !visible.length;
  $('#only-selected').setAttribute('aria-pressed',String(onlySelected));
  const active = [];
  if (level) active.push(`Etapa ${level}: ${levels[level-1].name}`);
  if ($('#category').value) active.push($('#category').value);
  if (onlySelected) active.push('Minha seleção');
  if ($('#search').value.trim()) active.push(`Busca: “${$('#search').value.trim()}”`);
  $('#active-filter').hidden = !active.length;
  $('#active-filter').innerHTML = active.length ? `<span>${escapeHTML(active.join(' · '))}</span><button id="reset-all">Limpar</button>` : '';
  document.querySelectorAll('[data-level]').forEach(b => b.setAttribute('aria-pressed',String(Number(b.dataset.level)===level)));
}
function openCase(id) {
  const c = cases.find(item => item.id === id);
  if (!c) return;
  currentCase = c;
  $('#case-content').innerHTML = `<div class="dialog-top"><p class="eyebrow">CASO ${number(c.id)} / ${escapeHTML(c.category.toUpperCase())}</p><button class="icon-button" id="close-case" aria-label="Fechar caso">×</button></div>
    <div class="dialog-title-line"><h2 id="case-title">${escapeHTML(c.title)}</h2><button id="modal-select" class="modal-select" aria-pressed="false"></button></div>
    <p class="case-symptom"><b>Sintoma observado:</b> ${escapeHTML(c.symptom)}</p><div class="case-meta"><span class="level-badge l${c.level}">Etapa ${c.level} · ${levels[c.level-1].short}</span><span>${c.steps.length} verificações · uma hipótese por vez</span></div>
    <div class="sequence-label">DO SIMPLES AO COMPLEXO</div>
    <div class="diagnostic-steps"><div class="table-head" aria-hidden="true"><span>PASSO</span><span>CAUSA POSSÍVEL</span><span>COMO VERIFICAR</span><span>SOLUÇÃO</span></div>
    ${c.steps.map((s,i)=>`<section class="step-row" aria-label="Passo ${i+1}"><span class="step-num">${number(i+1)}</span><h3 class="step-cause"><span class="cell-label">CAUSA POSSÍVEL</span>${escapeHTML(s[0])}</h3><p class="step-cell"><span class="cell-label">COMO VERIFICAR</span>${escapeHTML(s[1])}</p><p class="step-cell solution"><span class="cell-label">SOLUÇÃO</span>${escapeHTML(s[2])}</p></section>`).join('')}</div>
    <div class="confirmation"><span aria-hidden="true">✓</span><div><h3>Como confirmar que resolveu</h3><p>${escapeHTML(c.confirm)}</p></div></div>
    ${c.note?`<p class="case-note"><b>Atenção na prática.</b> ${escapeHTML(c.note)}</p>`:''}
    <div class="modal-footer"><button id="previous-case" ${c.id===1?'disabled':''}>← Caso anterior</button><span>As causas são hipóteses. Confirme pelo teste.</span><button id="next-case" ${c.id===50?'disabled':''}>Próximo caso →</button></div>`;
  updateModalSelection();
  $('#close-case').onclick = () => $('#case-dialog').close();
  $('#modal-select').onclick = () => toggleSelect(c.id);
  $('#previous-case').onclick = () => openCase(c.id-1);
  $('#next-case').onclick = () => openCase(c.id+1);
  $('#case-dialog').scrollTop = 0;
  if (!$('#case-dialog').open) { $('#case-dialog').showModal(); document.body.style.overflow='hidden'; }
  $('#close-case').focus();
}
function openHelp() { $('#help-dialog').showModal(); document.body.style.overflow='hidden'; }
function resetFilters() { level=0; onlySelected=false; $('#search').value=''; $('#category').value=''; renderCards(); }
const commonCare = 'Antes de abrir o gabinete, desligue e retire da tomada; siga o manual e use proteção contra descarga eletrostática. Procedimentos internos com o professor. Não abra fonte/monitor. Preserve dados e a chave de recuperação antes de intervenções no sistema ou armazenamento.';
function markdown() {
  return `# AMC — Roteiros selecionados de diagnóstico\n\n${getSelected().length} casos selecionados. As causas são hipóteses; verifique antes de corrigir. Troque uma variável por vez.\n\n## Cuidados de bancada\n\n${commonCare}\n\n` + getSelected().map(c => `## Caso ${number(c.id)} — ${c.title}\n\n**Etapa ${c.level}:** ${levels[c.level-1].name}  \n**Categoria:** ${c.category}  \n**Sintoma:** ${c.symptom}\n\n${c.steps.map((s,i)=>`### Passo ${i+1}\n\n- **Causa possível:** ${s[0]}\n- **Como verificar:** ${s[1]}\n- **Solução:** ${s[2]}\n`).join('\n')}\n**Como confirmar que resolveu:** ${c.confirm}\n${c.note?`\n**Atenção na prática:** ${c.note}\n`:''}`).join('\n---\n\n') + `\n## Referências\n\n${references.map(r=>`- [${r.title}](${r.url})`).join('\n')}\n\nConsulte sempre o manual do modelo. Roteiros didáticos originais; referência de sistema: Windows.\n`;
}
function download(content,filename,type) {
  const url=URL.createObjectURL(new Blob([content],{type}));
  const link=document.createElement('a'); link.href=url; link.download=filename; document.body.append(link); link.click(); link.remove();
  setTimeout(()=>URL.revokeObjectURL(url),3000);
}
function printSelection() {
  const chosen=getSelected();
  if (!chosen.length) return;
  const sheets=[];
  for(let i=0;i<chosen.length;i+=2) sheets.push(chosen.slice(i,i+2));
  $('#print-content').innerHTML=sheets.map((pair,index)=>`<section class="print-page">
    <header class="print-intro"><div><h1>AMC · Diagnóstico de desktops</h1><span>Folha ${index+1} de ${sheets.length} · ${chosen.length} casos selecionados</span></div><p>${escapeHTML(commonCare)}</p></header>
    ${pair.map(c=>`<article><h2>Caso ${number(c.id)} — ${escapeHTML(c.title)}</h2><p class="print-meta">Etapa ${c.level}: ${levels[c.level-1].name} · ${escapeHTML(c.category)}</p><p><b>Sintoma:</b> ${escapeHTML(c.symptom)}</p><table><colgroup><col class="print-col-number"><col class="print-col-cause"><col class="print-col-check"><col class="print-col-fix"></colgroup><thead><tr><th>#</th><th>Causa possível</th><th>Como verificar</th><th>Solução</th></tr></thead><tbody>${c.steps.map((s,i)=>`<tr><td>${i+1}</td><td>${escapeHTML(s[0])}</td><td>${escapeHTML(s[1])}</td><td>${escapeHTML(s[2])}</td></tr>`).join('')}</tbody></table><p class="print-confirm"><b>Como confirmar que resolveu:</b> ${escapeHTML(c.confirm)}</p>${c.note?`<p class="print-note"><b>Atenção:</b> ${escapeHTML(c.note)}</p>`:''}</article>`).join('')}
    ${index===sheets.length-1?`<footer class="print-references"><b>Referências:</b> ${references.map(r=>`<a href="${r.url}">${escapeHTML(r.title)}</a>`).join(' · ')}</footer>`:''}
  </section>`).join('');
  window.print();
}
async function copyNumbers() {
  const text=`Minha seleção AMC: ${getSelected().map(c=>'#'+number(c.id)).join(', ')}. Vamos montar o material com esses casos.`;
  let copied=false;
  try { await navigator.clipboard.writeText(text); copied=true; } catch {
    const area=document.createElement('textarea'); area.value=text; area.style.position='fixed'; area.style.top='-1000px'; document.body.append(area); area.select();
    try { copied=document.execCommand('copy'); } catch { /* O navegador pode bloquear a área de transferência. */ }
    area.remove();
  }
  if(copied) toast('Números copiados. Cole a seleção nesta conversa.');
  else { download(text,'amc-numeros-selecionados.txt','text/plain;charset=utf-8'); toast('A cópia foi bloqueada pelo navegador. Os números foram baixados em um arquivo.'); }
}
try {
  const stored=JSON.parse(localStorage.getItem(storageKey) || '[]');
  if(Array.isArray(stored)) selected=new Set(stored.filter(id=>Number.isInteger(id)&&cases.some(c=>c.id===id)));
} catch { /* Seleção inválida não impede o uso da biblioteca. */ }
$('#level-filters').innerHTML=levels.map(l=>`<button class="level-button" data-level="${l.id}" aria-pressed="false" aria-label="Filtrar etapa ${l.id}: ${l.name}"><span class="level-top"><span class="level-index">0${l.id}</span><span class="level-amount">10 casos</span></span><strong>${l.name}</strong><p>${l.desc}</p></button>`).join('');
const categories=[...new Set(cases.map(c=>c.category))].sort((a,b)=>a.localeCompare(b,'pt-BR'));
categories.forEach(category=>{ const option=document.createElement('option'); option.value=category; option.textContent=category; $('#category').append(option); });
$('#reference-list').innerHTML=references.map(r=>`<li><a href="${r.url}" target="_blank" rel="noopener noreferrer">${escapeHTML(r.title)} ↗</a></li>`).join('');
$('#level-filters').addEventListener('click',event=>{ const b=event.target.closest('[data-level]'); if(!b)return; const id=Number(b.dataset.level); level=level===id?0:id; renderCards(); });
$('#reset-level').onclick=()=>{ level=0; renderCards(); };
$('#search').addEventListener('input',renderCards);
$('#category').addEventListener('change',renderCards);
$('#only-selected').onclick=()=>{ onlySelected=!onlySelected; renderCards(); };
$('#clear-filters').onclick=resetFilters;
$('#active-filter').addEventListener('click',event=>{ if(event.target.closest('#reset-all'))resetFilters(); });
document.addEventListener('click',event=>{ const open=event.target.closest('[data-open]'); if(open)openCase(Number(open.dataset.open)); const remove=event.target.closest('[data-remove]'); if(remove)toggleSelect(Number(remove.dataset.remove)); });
$('#cards').addEventListener('change',event=>{ if(event.target.matches('[data-select]'))toggleSelect(Number(event.target.dataset.select)); });
$('#select-visible').onclick=()=>{ const visible=filteredCases(); visible.forEach(c=>selected.add(c.id)); save(); updateSelection(); renderCards(); toast(`${visible.length} casos exibidos estão na sua seleção.`); };
$('#clear-selection').onclick=()=>{ selected.clear(); save(); updateSelection(); renderCards(); toast('Seleção limpa. Você pode escolher os casos novamente.'); };
$('#download-md').onclick=()=>{ if(!selected.size)return; download(markdown(),'amc-roteiros-selecionados.md','text/markdown;charset=utf-8'); toast('Roteiros selecionados baixados.'); };
$('#download-json').onclick=()=>{ if(!selected.size)return; download(JSON.stringify({format:'amc-selection',version:1,ids:getSelected().map(c=>c.id),care:commonCare,cases:getSelected(),references},null,2),'amc-selecao.json','application/json;charset=utf-8'); toast('Seleção salva em JSON, com os roteiros completos.'); };
$('#print').onclick=printSelection;
$('#copy').onclick=copyNumbers;
for(const id of ['help-button','safety-button','sources-button'])$('#'+id).onclick=openHelp;
document.querySelectorAll('.close-help').forEach(b=>b.onclick=()=>$('#help-dialog').close());
for(const dialog of document.querySelectorAll('dialog')){
  dialog.addEventListener('close',()=>{ document.body.style.overflow=''; });
  dialog.addEventListener('click',event=>{ if(event.target!==dialog)return; const rect=dialog.getBoundingClientRect(); if(event.clientX<rect.left||event.clientX>rect.right||event.clientY<rect.top||event.clientY>rect.bottom)dialog.close(); });
}
document.addEventListener('keydown',event=>{ if(event.key==='/'&&!/INPUT|TEXTAREA|SELECT/.test(event.target.tagName)&&!document.querySelector('dialog[open]')){event.preventDefault(); $('#search').focus();} });
updateSelection();
renderCards();
