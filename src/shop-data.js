import {meritProgress} from './merit-data.js';
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
  {id:'aura-cosmic',name:'Constelação',category:'aura',kind:'cosmic',color:'#d4adff',price:350,xp:2000,tag:'ALÉM DO ÓBVIO',description:'Uma constelação pessoal para quem continua fazendo novas perguntas.'},
  {id:'merit-cap',name:'Boné Pioneiro',category:'head',kind:'cap',color:'#dfbe63',price:0,xp:0,merit:'first-fix',tag:'RECOMPENSA DE MÉRITO',description:'Dourado para celebrar sua primeira faísca. Resgate ao concluir o primeiro chamado.'},
  {id:'merit-toolpack',name:'Kit Guardião',category:'back',kind:'toolpack',color:'#72c2a6',price:0,xp:0,merit:'explorer',tag:'RECOMPENSA DE MÉRITO',description:'Um kit especial para quem concluiu pelo menos um chamado em cada estação.'},
  {id:'merit-aura',name:'Aura Legado',category:'aura',kind:'cosmic',color:'#f3d67b',price:0,xp:0,merit:'campus-restored',tag:'RECOMPENSA DE MÉRITO',description:'Uma órbita dourada para celebrar os 50 chamados concluídos. Seu legado ganhou luz.'}
];
export const looks=[
  {id:'look-field',name:'Equipe de Campo',category:'looks',color:'#a8d980',xp:400,skin:0,items:['visor-lime','toolpack','aura-mint'],tag:'LOOK COMPLETO · 3 ACESSÓRIOS',description:'Visor Pixel, Kit de Campo e Órbita Menta. Um conjunto para investigar com estilo.'},
  {id:'look-circuit',name:'Circuito Azul',category:'looks',color:'#70bfe8',xp:1000,skin:1,items:['cap-blue','backpack','aura-circuit'],tag:'LOOK COMPLETO · 3 ACESSÓRIOS',description:'Boné Circuito, Mochila Explorer e Pulso Elétrico, com o uniforme azul.'},
  {id:'look-nova',name:'Tripulação Nova',category:'looks',color:'#b9a0ec',xp:2000,skin:3,items:['headphones','jetpack','aura-cosmic'],tag:'LOOK COMPLETO · 3 ACESSÓRIOS',description:'Headset Órbita, Propulsor Nova e Constelação. Sua experiência chegou a outro nível.'}
];
export const categoryNames={all:'Tudo',rewards:'Méritos',looks:'Conjuntos',uniform:'Uniformes',head:'Cabeça',back:'Mochilas',aura:'Efeitos',favorites:'Favoritos',owned:'Minha coleção'};
export const itemAvailable=(state,item)=>shopXP(state)>=item.xp&&(!item.merit||meritProgress(state).some(m=>m.id===item.merit&&m.unlocked));
export const shopFresh=()=>({owned:[],wishlist:[],equipped:{head:null,back:null,aura:null}});
export const earnedCredits=state=>100+Object.values(state.records).filter(r=>r.stage===6).length*40;
export const shopXP=state=>Object.values(state.records).filter(r=>r.stage===6).length*100;
export const balance=state=>earnedCredits(state)-(state.shop?.owned||[]).reduce((sum,id)=>sum+(catalog.find(i=>i.id===id)?.price||0),0);
export function cleanShop(raw,records){
  const state={records,shop:shopFresh()};
  for(const id of Array.isArray(raw?.owned)?raw.owned.slice(0,100):[]){const item=catalog.find(i=>i.id===id);if(item&&!state.shop.owned.includes(id)&&itemAvailable(state,item)&&balance(state)>=item.price)state.shop.owned.push(id);}
  for(const slot of ['head','back','aura']){const id=raw?.equipped?.[slot];if(state.shop.owned.includes(id)&&catalog.some(i=>i.id===id&&i.category===slot))state.shop.equipped[slot]=id;}
  state.shop.wishlist=[...new Set((Array.isArray(raw?.wishlist)?raw.wishlist:[]).slice(0,100).filter(id=>catalog.some(i=>i.id===id)||looks.some(i=>i.id===id)||typeof id==='string'&&/^uniform-[0-3]$/.test(id)))];
  return state.shop;
}
export function buyItem(state,id){
  const item=catalog.find(i=>i.id===id);if(!item)return {ok:false,message:'Item não encontrado.'};
  if(state.shop.owned.includes(id))return {ok:false,message:'Este item já faz parte da sua coleção.'};
  if(!itemAvailable(state,item)&&item.merit)return {ok:false,message:'Conquiste o mérito indicado para resgatar esta recompensa.'};
  if(shopXP(state)<item.xp)return {ok:false,message:`Este item libera em ${item.xp} XP.`};
  if(balance(state)<item.price)return {ok:false,message:'Faltam créditos. Cada missão concluída rende 40 créditos.'};
  state.shop.owned.push(id);state.shop.equipped[item.category]=id;return {ok:true,message:`${item.name} adquirido e equipado!`};
}
export function equipItem(state,id){const item=catalog.find(i=>i.id===id);if(!item||!state.shop.owned.includes(id))return false;state.shop.equipped[item.category]=id;return true;}
export const lookCost=(state,look)=>look.items.filter(id=>!state.shop.owned.includes(id)).reduce((sum,id)=>sum+catalog.find(i=>i.id===id).price,0);
export function acquireLook(state,id){
  const look=looks.find(i=>i.id===id);if(!look)return {ok:false,message:'Conjunto não encontrado.'};
  if(shopXP(state)<look.xp)return {ok:false,message:`Este conjunto libera em ${look.xp} XP.`};
  const price=lookCost(state,look);if(balance(state)<price)return {ok:false,message:'Faltam créditos para completar este conjunto.'};
  // Todas as condições são verificadas antes de qualquer alteração: não há aquisição parcial.
  for(const id of look.items){if(!state.shop.owned.includes(id))state.shop.owned.push(id);equipItem(state,id);}state.skin=look.skin;
  return {ok:true,message:`${look.name} completo e equipado!`};
}
