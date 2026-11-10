export const catalog=[
  {id:'visor-lime',name:'Visor Pixel',category:'head',kind:'visor',color:'#c6f36b',price:60,xp:0,tag:'PRIMEIRA DESCOBERTA',description:'Uma faixa de energia para quem enxerga possibilidades em cada problema.'},
  {id:'cap-blue',name:'Boné Circuito',category:'head',kind:'cap',color:'#54b3e0',price:80,xp:0,tag:'CASUAL',description:'Seu uniforme ganhou um parceiro para explorar o campus.'},
  {id:'hardhat',name:'Capacete Solar',category:'head',kind:'hardhat',color:'#f5c052',price:140,xp:300,tag:'EDIÇÃO BANCADA',description:'Um visual inspirado em quem prepara tudo antes de começar.'},
  {id:'headphones',name:'Headset Órbita',category:'head',kind:'headphones',color:'#ad92e3',price:180,xp:600,tag:'EM SINTONIA',description:'Entre na frequência das boas ideias com um headset violeta.'},
  {id:'toolpack',name:'Kit de Campo',category:'back',kind:'toolpack',color:'#e7a76e',price:120,xp:200,tag:'PRONTO PARA AGIR',description:'Uma bolsa de ferramentas para acompanhar sua próxima investigação.'},
  {id:'backpack',name:'Mochila Explorer',category:'back',kind:'backpack',color:'#6bd0ae',price:220,xp:800,tag:'EXPLORADOR',description:'Leve a curiosidade nas costas. Cabe uma coleção inteira de descobertas.'},
  {id:'jetpack',name:'Propulsor Nova',category:'back',kind:'jetpack',color:'#80baf2',price:400,xp:1800,tag:'COLEÇÃO NOVA',description:'Dois propulsores e muita imaginação. Um acessório visual para ir além.'},
  {id:'aura-mint',name:'Órbita Menta',category:'aura',kind:'orbit',color:'#84e6ba',price:120,xp:400,tag:'EM MOVIMENTO',description:'Um anel luminoso que gira no seu ritmo e deixa o percurso mais vivo.'},
  {id:'aura-circuit',name:'Pulso Elétrico',category:'aura',kind:'circuit',color:'#6fc9f3',price:220,xp:1000,tag:'CONECTADO',description:'Pequenos blocos em órbita celebram suas conexões de conhecimento.'},
  {id:'aura-cosmic',name:'Constelação',category:'aura',kind:'cosmic',color:'#d4adff',price:350,xp:2000,tag:'ALÉM DO ÓBVIO',description:'Uma constelação pessoal para quem continua fazendo novas perguntas.'}
];
export const categoryNames={all:'Tudo',uniform:'Uniformes',head:'Cabeça',back:'Mochilas',aura:'Efeitos',owned:'Minha coleção'};
export const shopFresh=()=>({owned:[],equipped:{head:null,back:null,aura:null}});
export const earnedCredits=state=>100+Object.values(state.records).filter(r=>r.stage===6).length*40;
export const shopXP=state=>Object.values(state.records).filter(r=>r.stage===6).length*100;
export const balance=state=>earnedCredits(state)-(state.shop?.owned||[]).reduce((sum,id)=>sum+(catalog.find(i=>i.id===id)?.price||0),0);
export function cleanShop(raw,records){
  const state={records,shop:shopFresh()},xp=shopXP(state);
  for(const id of Array.isArray(raw?.owned)?raw.owned.slice(0,100):[]){const item=catalog.find(i=>i.id===id);if(item&&!state.shop.owned.includes(id)&&xp>=item.xp&&balance(state)>=item.price)state.shop.owned.push(id);}
  for(const slot of ['head','back','aura']){const id=raw?.equipped?.[slot];if(state.shop.owned.includes(id)&&catalog.some(i=>i.id===id&&i.category===slot))state.shop.equipped[slot]=id;}
  return state.shop;
}
export function buyItem(state,id){
  const item=catalog.find(i=>i.id===id);if(!item)return {ok:false,message:'Item não encontrado.'};
  if(state.shop.owned.includes(id))return {ok:false,message:'Este item já faz parte da sua coleção.'};
  if(shopXP(state)<item.xp)return {ok:false,message:`Este item libera em ${item.xp} XP.`};
  if(balance(state)<item.price)return {ok:false,message:'Faltam créditos. Cada missão concluída rende 40 créditos.'};
  state.shop.owned.push(id);state.shop.equipped[item.category]=id;return {ok:true,message:`${item.name} adquirido e equipado!`};
}
export function equipItem(state,id){const item=catalog.find(i=>i.id===id);if(!item||!state.shop.owned.includes(id))return false;state.shop.equipped[item.category]=id;return true;}
