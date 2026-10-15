import {readFile,stat} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import path from 'node:path';
import assert from 'node:assert/strict';
const root=fileURLToPath(new URL('../',import.meta.url));
const content=JSON.parse(await readFile(path.join(root,'src/content.json'),'utf8'));
const ids=new Set();
const base=`/${(process.env.SITE_BASE_PATH||'').replace(/^\/+|\/+$/g,'')}`.replace(/\/$/,'');
for(const item of content.items){assert(!ids.has(item.id),'ID repetido');ids.add(item.id);assert(content.categories.some(c=>c.id===item.category),'Categoria inválida');assert.equal(item.price,null,'Valores não confirmados devem permanecer ausentes');if(item.image)await stat(path.join(root,'public/assets',item.image));}
for(const file of ['index.html','cardapio.html']){
 const html=await readFile(path.join(root,'dist',file),'utf8');
 assert.equal((html.match(/<h1\b/g)||[]).length,1,'Uma heading principal por página');
 assert(html.includes('lang="pt-BR"'));assert(html.includes('name="description"'));assert(html.includes('application/ld+json'));
 const elementIds=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);assert.equal(elementIds.length,new Set(elementIds).size,'IDs duplicados na página');
 for(const match of html.matchAll(/(?:src|href)="([^"]+)"/g)){
  const link=match[1];if(/^(?:https?:|tel:|#)/.test(link))continue;
  const relative=link.split(/[?#]/)[0];
  assert(!base || relative.startsWith(base+'/'),'Link local fora do subdiretório');
  const pathname=relative.slice(base.length).replace(/^\//,'');
  await stat(path.join(root,'dist',pathname));
 }
 const json=html.match(/<script type="application\/ld\+json">(.*?)<\/script>/s);JSON.parse(json[1]);
}
console.log('OK: conteúdo, categorias, preços pendentes, links locais, IDs, metadados e schema.');
