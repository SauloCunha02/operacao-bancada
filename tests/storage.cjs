const fs=require('node:fs');
const vm=require('node:vm');
const assert=require('node:assert/strict');
const source=fs.readFileSync('dist/cases.js','utf8')+'\n'+fs.readFileSync('dist/journey.js','utf8');
function boot(storage){
 const nodes=new Map();
 const node=key=>{if(!nodes.has(key))nodes.set(key,{textContent:'',innerHTML:'',hidden:true,addEventListener(){},focus(){}});return nodes.get(key);};
 const env={document:{querySelector:node,querySelectorAll:()=>[],addEventListener(){}},localStorage:storage,setTimeout:()=>0,clearTimeout(){},window:{scrollTo(){}}};
 vm.createContext(env);vm.runInContext(source,env);return {env,nodes};
}
const denied=boot({getItem(){throw Error('denied');},setItem(){throw Error('denied');}});
vm.runInContext('record(cases[0]);save();',denied.env);
assert.match(denied.nodes.get('#main').innerHTML,/Começar pelo diagnóstico/);
assert.match(denied.nodes.get('#save-status').textContent,/Sem salvamento/);
assert.match(denied.nodes.get('#announcement').textContent,/Não foi possível salvar/);
const corrupt=boot({getItem:()=>'{broken',setItem(){}});
assert.match(corrupt.nodes.get('#main').innerHTML,/Começar pelo diagnóstico/);
assert.equal(vm.runInContext('xp()',corrupt.env),0);
console.log('PASS: armazenamento negado informa exportação; armazenamento corrompido mantém a oficina utilizável.');
