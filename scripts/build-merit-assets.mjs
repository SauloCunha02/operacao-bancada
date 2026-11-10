import {mkdir,access} from 'node:fs/promises';
import sharp from 'sharp';
import {merits} from '../src/merit-data.js';
await mkdir('dist/merit',{recursive:true});
for(const key of new Set(merits.map(m=>m.image))){const input='assets/merit/'+key+'.png';await access(input);await sharp(input).resize(512,512,{fit:'inside',withoutEnlargement:true}).webp({quality:90,alphaQuality:100}).toFile('dist/merit/'+key+'.webp');}
