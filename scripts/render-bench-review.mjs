import {writeFileSync,readFileSync} from 'node:fs';
import sharp from 'sharp';
import {cases} from '../src/cases.js';
import {renderSimulator} from '../src/bench-ui.js';
const esc=s=>s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));
const samples=[[1,1,0],[3,1,0],[4,1,0],[10,1,0],[25,1,0],[34,1,0],[41,6,3],[3,6,3]];
const css=readFileSync('src/bench.css','utf8').split('@keyframes')[0];
let svg='<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="720" viewBox="0 0 1440 720"><rect width="1440" height="720" fill="#e5eae0"/><style>text{font-family:Arial,sans-serif}.board-caption{text-anchor:start;fill:#294338;font-size:12px}.board-title{text-anchor:start;fill:#294338;font-size:15px}svg text:not(.board-caption):not(.board-title){text-anchor:middle;fill:#d4e6df;font-size:12px;font-weight:700}.monitor-led{fill:#d9be77}'+css+'</style>';
for(const [i,[id,stage,viewStage]] of samples.entries()){
  const x=(i%4)*360+12,y=Math.floor(i/4)*355+12,c=cases[id-1],test=(id-1)%c.steps.length;
  const record={stage,viewStage,tested:[test],lastTest:test,errors:0,hints:0};
  const html=renderSimulator(c,record),attributes=html.match(/<div class="bench-scene" ([^>]+)>/)[1];
  let scene=html.match(/<svg[\s\S]*?<\/svg>/)[0].replace('<svg viewBox=',`<svg x="${x}" y="${y+45}" width="335" height="225" viewBox=`);
  scene=scene.replace('<svg ',`<svg class="bench-scene" ${attributes} `);
  const label=stage===6&&id===41?'Encaminhamento: o diagnóstico continua.':c.title.slice(0,45);
  svg+=`<rect x="${x}" y="${y}" width="335" height="330" rx="18" fill="#f6f8f1"/><text class="board-title" x="${x+15}" y="${y+28}">OS ${String(id).padStart(2,'0')} · ${stage===6?'conferido':'problema'}</text>${scene}<text class="board-caption" x="${x+15}" y="${y+296}">${esc(label)}</text>`;
}
svg+='</svg>';
await sharp(Buffer.from(svg)).png().toFile('reviews/bench-v2.0.0.png');
writeFileSync('reviews/bench-v2.0.0.md','# Estados da bancada · v2.0.0\n\nPrancha renderizada diretamente dos SVGs usados no jogo, com exemplos de energia, vídeo, rede, armazenamento, temperatura, encaminhamento e atendimento conferido. Não é uma captura de navegador e não verifica layout responsivo ou desempenho.\n\n![Estados da bancada](bench-v2.0.0.png)\n\nRegenerar: `node scripts/render-bench-review.mjs`.\n');
console.log('Prancha SVG dos estados salva em reviews/bench-v2.0.0.png');
