const fs=require('node:fs');
const path=require('node:path');
function bundle(source,output,style,scripts){
  let html=fs.readFileSync(path.join(__dirname,'dist',source),'utf8');
  html=html.replace(/<link rel="stylesheet" href="([^"]+)">/g,(_,name)=>{
    const css=fs.readFileSync(path.join(__dirname,'dist',name),'utf8').replace(/^@import[^\r\n]*[\r\n]*/,'');
    return `<style>${css}</style>`;
  });
  html=html.replace(/(src|href)="(assets\/brand\/[^"\s]+\.svg)"/g,(_,attr,file)=>`${attr}="data:image/svg+xml;base64,${fs.readFileSync(path.join(__dirname,'dist',file)).toString('base64')}"`);
  html=html.replace('<script src="theme.js"></script>',()=>`<script>${fs.readFileSync(path.join(__dirname,'dist/theme.js'),'utf8')}</script>`);
  for(const name of scripts)html=html.replace(`<script src="${name}" defer></script>`,'');
  const code=scripts.map(name=>`<script>${fs.readFileSync(path.join(__dirname,'dist',name),'utf8').replace(/<\/script/gi,'<\\/script')}</script>`).join('\n');
  html=html.replace('</body>',()=>`${code}\n</body>`).replaceAll('href="biblioteca.html"','href="AMC-biblioteca.html"').replaceAll('href="index.html"','href="AMC-50-casos.html"').replaceAll('href="identidade.html"','href="AMC-identidade.html"').replaceAll('href="./"','href="AMC-50-casos.html"');
  html=html.replace("location.href='biblioteca.html'","location.href='AMC-biblioteca.html'");
  html=html.replaceAll('src="assets/brand/bancada.svg"',()=>`src="data:image/svg+xml;base64,${fs.readFileSync(path.join(__dirname,'dist/assets/brand/bancada.svg')).toString('base64')}"`);
  fs.writeFileSync(path.join(__dirname,output),html,'utf8');
  console.log(`Arquivo offline criado: ${output}`);
}
bundle('index.html','AMC-50-casos.html','journey.css',['cases.js','journey.js','accessibility.js']);
bundle('biblioteca.html','AMC-biblioteca.html','styles.css',['cases.js','app.js','accessibility.js']);
bundle('identidade.html','AMC-identidade.html','brand.css',['accessibility.js']);
