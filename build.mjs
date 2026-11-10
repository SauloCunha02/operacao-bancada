import {build} from 'esbuild';
import {copyFileSync} from 'node:fs';
await import('./scripts/build-shop-assets.mjs');
await import('./scripts/build-merit-assets.mjs');
await build({entryPoints:['src/game.js'],bundle:true,minify:true,format:'esm',outfile:'dist/game.js',target:['es2022'],sourcemap:true});
for (const file of ['index.html','style.css','theme.css','shop.css','merit.css']) copyFileSync('src/'+file,'dist/'+file);
console.log('Jogo compilado em dist/');
