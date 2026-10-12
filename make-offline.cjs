const fs=require('node:fs');
const path=require('node:path');
const base=__dirname;
let html=fs.readFileSync(path.join(base,'dist/index.html'),'utf8');
const css=fs.readFileSync(path.join(base,'dist/styles.css'),'utf8').replace(/^@import[^;]+;\s*/,'');
html=html.replace('<link rel="stylesheet" href="styles.css">',()=>`<style>${css}</style>`);
for(const name of ['cases.js','app.js']) html=html.replace(`<script src="${name}" defer></script>`,()=>`<script>${fs.readFileSync(path.join(base,'dist',name),'utf8')}</script>`);
// Scripts embutidos precisam executar depois que os elementos da página existem.
const scriptTags=html.match(/<script>[\s\S]*?<\/script>/g);
html=html.replace(/<script>[\s\S]*?<\/script>\s*/g,'').replace('</body>',`${scriptTags.join('\n')}\n</body>`);
fs.writeFileSync(path.join(base,'AMC-50-casos.html'),html,'utf8');
console.log('Arquivo offline criado: AMC-50-casos.html');
