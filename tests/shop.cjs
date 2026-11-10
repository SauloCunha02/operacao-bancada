const assert=require('node:assert/strict');
(async()=>{
  const {catalog,balance,buyItem,equipItem,cleanShop,looks,lookCost,acquireLook}=await import('../src/shop-data.js');
  const {fresh,cleanState,target}=await import('../src/rules.js');
  const {cases}=await import('../src/cases.js');
  const {createBlockAvatar}=await import('../src/avatar.js');
  const {accessoryModel,setAccessories,animateAccessories}=await import('../src/shop-visuals.js');
  const s=fresh();assert.equal(balance(s),100);assert.equal(buyItem(s,'visor-lime').ok,true);assert.equal(balance(s),40);assert.equal(s.shop.equipped.head,'visor-lime');
  assert.equal(buyItem(s,'visor-lime').ok,false);assert.equal(balance(s),40);assert.equal(buyItem(s,'cap-blue').ok,false);assert.equal(buyItem(s,'hardhat').ok,false);assert.equal(equipItem(s,'jetpack'),false);
  const old={version:1,records:{},skin:0,quality:'auto'};assert.deepEqual(cleanState(old).shop,fresh().shop);
  for(const c of cases)s.records[c.id]={stage:6,tested:[target(c)],errors:0,hints:0};
  assert.equal(balance(s),2040);for(const i of catalog.filter(i=>i.id!=='visor-lime'))assert.equal(buyItem(s,i.id).ok,true,i.id);
  const spent=catalog.reduce((sum,i)=>sum+i.price,0);assert.equal(balance(s),2100-spent);assert.equal(s.shop.owned.length,13);assert.equal(equipItem(s,'visor-lime'),true);
  const restored=cleanState(JSON.parse(JSON.stringify(s)));assert.deepEqual(restored.shop,s.shop);assert.equal(balance(restored),balance(s));
  const poisoned=cleanShop({owned:['visor-lime','visor-lime','cap-blue','unknown'],equipped:{head:'unknown',back:'visor-lime',aura:'aura-cosmic'}},{});assert.deepEqual(poisoned.owned,['visor-lime']);assert.equal(poisoned.equipped.head,null);assert.equal(poisoned.equipped.back,null);
  const a=createBlockAvatar();for(const i of catalog){const model=accessoryModel(i);assert.ok(model.children.length>0,i.id);assert.equal(model.name,'gear-'+i.id);}
  const combo=fresh();const initial=JSON.stringify(combo);assert.equal(acquireLook(combo,'look-field').ok,false);assert.equal(JSON.stringify(combo),initial,'Conjunto bloqueado não deve alterar a coleção');
  for(const c of cases.slice(0,5))combo.records[c.id]={stage:6,tested:[target(c)],errors:0,hints:0};
  assert.equal(buyItem(combo,'visor-lime').ok,true);assert.equal(lookCost(combo,looks[0]),240);assert.equal(acquireLook(combo,'look-field').ok,true);assert.equal(balance(combo),0);assert.equal(combo.shop.owned.length,3);assert.equal(acquireLook(combo,'look-field').ok,true);assert.equal(balance(combo),0);assert.equal(combo.shop.owned.length,3);
  const poor=fresh();for(const c of cases.slice(0,4))poor.records[c.id]={stage:6,tested:[target(c)],errors:0,hints:0};const beforeCombo=JSON.stringify(poor);assert.equal(acquireLook(poor,'look-field').ok,false);assert.equal(JSON.stringify(poor),beforeCombo,'Saldo insuficiente não deve fazer aquisições parciais');
  combo.shop.wishlist=['look-nova','visor-lime','uniform-1','unknown','visor-lime'];assert.deepEqual(cleanState(combo).shop.wishlist,['look-nova','visor-lime','uniform-1']);
  let group=setAccessories(a,{head:'hardhat',back:'jetpack',aura:'aura-cosmic'});assert.equal(group.children.length,3);animateAccessories(group,2);assert.ok(group.children.at(-1).rotation.y>0);animateAccessories(group,2,true);assert.equal(group.children.at(-1).rotation.y,0);
  setAccessories(a,{});assert.equal(a.group.children.filter(o=>o.name==='shop-accessories').length,1);assert.ok(a.shirtMeshes[0].geometry.userData.sharedAvatar);
  console.log('OK: 100 créditos iniciais, 40 por missão, compras sem repetição ou saldo negativo, bloqueios por XP, equipamento por categoria, coleção completa, migração e restauração, acessórios 3D e efeitos.');
})();
