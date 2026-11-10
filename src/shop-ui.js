import {catalog,categoryNames,balance,buyItem,equipItem,shopXP} from './shop-data.js';
import {outfits} from './rules.js';
import {createShopPreview} from './shop-preview.js';

export function createShopUI({getState,save,onEquip,openPanel,toast,icon}){
  const $=s=>document.querySelector(s);
  const items=[...catalog,...outfits.map((o,i)=>({...o,id:'uniform-'+i,category:'uniform',price:0,tag:'UNIFORME DO CAMPUS',description:'Uma nova cor para vestir a experiência que você construiu.',skin:i}))];
  let selected='visor-lime',filter='all',preview=null,mounted=false;
  const owned=item=>item.category==='uniform'?shopXP(getState())>=item.xp:getState().shop.owned.includes(item.id);
  const equipped=item=>item.category==='uniform'?getState().skin===item.skin:getState().shop.equipped[item.category]===item.id;
  function dispose(){mounted=false;preview?.dispose();preview=null;}
  $('#panel').addEventListener('close',dispose);
  function modelState(item){const state=getState(),equipment={...state.shop.equipped};let shirt=outfits[state.skin].color;if(item.category==='uniform')shirt=item.color;else equipment[item.category]=item.id;return {shirt,equipped:equipment};}
  function select(id){if(!items.some(i=>i.id===id))return;selected=id;refreshDetails();$('#shop-cards').querySelectorAll('[data-shop-select]').forEach(b=>{b.classList.toggle('is-selected',b.dataset.shopSelect===selected);b.setAttribute('aria-pressed',String(b.dataset.shopSelect===selected));});}
  function renderCards(){
    const visible=items.filter(i=>filter==='all'||filter==='owned'&&owned(i)||i.category===filter);
    $('#shop-count').textContent=`${visible.length} itens`;
    $('#shop-cards').innerHTML=visible.map(i=>`<button class="shop-item ${selected===i.id?'is-selected':''}" data-shop-select="${i.id}" aria-pressed="${selected===i.id}"><span class="item-picture" style="--item-color:${i.color}"><img src="shop/${i.id}.webp" alt="" loading="lazy" width="350" height="350"><span class="item-state">${equipped(i)?'✓ EM USO':owned(i)?'NA COLEÇÃO':shopXP(getState())<i.xp?'◈ '+i.xp+' XP':''}</span></span><span class="item-name">${i.name}</span><span class="item-price">${i.category==='uniform'?(i.xp?i.xp+' XP':'INCLUÍDO'):icon('coin')+i.price}<span>Experimentar ↗</span></span></button>`).join('')||'<p class="dialog-copy">Sua coleção começa com uma descoberta. Experimente um item para conhecer os detalhes.</p>';
  }
  function refreshDetails(){
    const state=getState(),item=items.find(i=>i.id===selected),xp=shopXP(state),isOwned=owned(item),isEquipped=equipped(item),locked=xp<item.xp;
    $('#shop-balance').textContent=balance(state);$('#shop-owned').textContent=state.shop.owned.length;
    $('#shop-tag').textContent=item.tag;$('#shop-name').textContent=item.name;$('#shop-description').textContent=item.description;
    $('#shop-preview-image').src='shop/'+item.id+'.webp';$('#shop-preview-image').alt='Prévia de '+item.name;
    const requirement=$('#shop-requirement');requirement.textContent=locked?`Mais ${item.xp-xp} XP para liberar este item. Continue investigando!`:isEquipped?'Este item já acompanha você no campus.':isOwned?'Já faz parte da sua coleção. Equipe quando quiser.':'Experimente sem compromisso. O item só é adquirido pelo botão abaixo.';
    $('#shop-progress').style.width=`${item.xp?Math.min(100,xp/item.xp*100):100}%`;
    const button=$('#shop-action');button.disabled=locked||isEquipped||!isOwned&&balance(state)<item.price;button.textContent=locked?`Libera em ${item.xp} XP`:isEquipped?'✓ Equipado':isOwned?'Equipar no avatar':balance(state)<item.price?`Faltam ${item.price-balance(state)} créditos`:`Adquirir e equipar · ${item.price} créditos`;
    $('#shop-remove').hidden=item.category==='uniform'||!isEquipped;
    $('#shop-credit-note').textContent=`${xp/100} missões concluídas · 40 créditos por nova missão · 100 créditos iniciais`;
    const next=items.filter(i=>i.xp>xp).sort((a,b)=>a.xp-b.xp)[0];$('#shop-next').textContent=next?`Sua próxima descoberta: ${next.name} em ${next.xp} XP.`:'Você liberou todos os requisitos de XP. Escolha seu próximo visual.';
    const model=modelState(item);preview?.update(model.shirt,model.equipped);
  }
  function refresh(){renderCards();refreshDetails();}
  function show(){
    dispose();
    openPanel('Seu próximo visual começa aqui.','GALERIA SHOP · FEITO DE CONQUISTAS',`<div class="shop-summary"><span class="shop-wallet">${icon('coin')}<strong id="shop-balance"></strong><span>créditos</span></span><span><b id="shop-owned">0</b> acessórios na coleção</span><span class="shop-no-money">Conquistas do campus</span></div><div class="shop-layout"><section class="shop-preview-panel" aria-label="Experimentador de avatar"><div class="shop-preview" id="shop-preview"><div class="shop-preview-fallback"><img id="shop-preview-image" alt="" width="350" height="350"></div><span class="preview-label">PROVADOR · EXPERIMENTE</span></div><button class="preview-spin" id="shop-spin" aria-pressed="true">${icon('globe')} Pausar giro</button><div class="shop-detail"><p class="eyebrow" id="shop-tag"></p><h3 id="shop-name"></h3><p id="shop-description"></p><div class="shop-unlock-track"><i id="shop-progress"></i></div><p class="shop-requirement" id="shop-requirement" role="status"></p><button id="shop-action" class="primary"></button><button id="shop-remove" class="secondary" hidden>Retirar acessório</button></div></section><section class="shop-catalog" aria-label="Catálogo da loja"><div class="shop-catalog-heading"><div><span class="eyebrow">ESCOLHA. EXPERIMENTE. COMBINE.</span><h3>Uma coleção com a sua cara.</h3></div><span id="shop-count"></span></div><div class="shop-filters" aria-label="Categorias">${Object.entries(categoryNames).map(([id,name])=>`<button data-shop-filter="${id}" class="${filter===id?'selected':''}" aria-pressed="${filter===id}">${name}</button>`).join('')}</div><div id="shop-cards" class="shop-grid"></div><div class="shop-next">${icon('spark')}<span id="shop-next"></span></div></section></div><p class="note" id="shop-credit-note"></p>`,'shop');
    mounted=true;refresh();const item=items.find(i=>i.id===selected),model=modelState(item);
    preview=createShopPreview($('#shop-preview'),{...model,dark:document.documentElement.dataset.theme==='dark',low:getState().quality==='low'});
    if(!preview){$('#shop-spin').hidden=true;$('#shop-preview').classList.add('static-preview');}
    $('#shop-action').onclick=()=>{
      const item=items.find(i=>i.id===selected),state=getState();
      if(item.category==='uniform'){if(shopXP(state)<item.xp)return;state.skin=item.skin;toast('Uniforme '+item.name+' equipado.');}
      else if(owned(item)){if(!equipItem(state,item.id))return;toast(item.name+' equipado.');}
      else{const result=buyItem(state,item.id);toast(result.message);if(!result.ok)return;}
      onEquip();save();refresh();if(!matchMedia('(prefers-reduced-motion: reduce)').matches)$('#shop-action').animate?.([{transform:'scale(.95)'},{transform:'scale(1)'}],{duration:220});
    };
    $('#shop-remove').onclick=()=>{const item=items.find(i=>i.id===selected);getState().shop.equipped[item.category]=null;onEquip();save();refresh();toast('Acessório guardado na sua coleção.');};
    $('#shop-spin').onclick=()=>{const spinning=preview?.toggle();$('#shop-spin').setAttribute('aria-pressed',String(spinning));$('#shop-spin').innerHTML=icon('globe')+(spinning?' Pausar giro':' Girar avatar');};
  }
  $('#panel-content').addEventListener('click',e=>{if(!mounted)return;const b=e.target.closest('button');if(!b)return;if(b.dataset.shopFilter){filter=b.dataset.shopFilter;$('#panel-content').querySelectorAll('[data-shop-filter]').forEach(el=>{el.classList.toggle('selected',el===b);el.setAttribute('aria-pressed',String(el===b));});const visible=items.filter(i=>filter==='all'||filter==='owned'&&owned(i)||i.category===filter);if(visible.length&&!visible.some(i=>i.id===selected))selected=visible[0].id;refresh();}else if(b.dataset.shopSelect)select(b.dataset.shopSelect);});
  return {show,dispose};
}
