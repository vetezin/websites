import { readFile, access } from 'node:fs/promises';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
const root = fileURLToPath(new URL('../', import.meta.url));
let base = process.env.SITE_BASE_PATH || '/';
if (!base.endsWith('/')) base += '/';
for (const name of ['public/site.js', 'scripts/build.mjs', 'scripts/serve.mjs', 'src/templates.mjs', 'data/site.mjs']) {
  const result = spawnSync(process.execPath, ['--check', resolve(root, name)], { encoding: 'utf8' });
  if (result.status !== 0) throw new Error(result.stderr);
}
for (const page of ['index.html', 'cardapio/index.html']) {
  const html = await readFile(resolve(root, 'dist', page), 'utf8');
  for (const required of ['lang="pt-BR"', 'name="description"', 'property="og:title"', 'application/ld+json', 'id="conteudo"']) if (!html.includes(required)) throw new Error(`${page}: falta ${required}`);
  if ((html.match(/<h1\b/g) || []).length !== 1) throw new Error(`${page}: precisa de um h1`);
  for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
    const link = match[1].split('#')[0];
    if (/^https?:/.test(link)) continue;
    const local = link.startsWith(base) ? link.slice(base.length) : link;
    const file = local.endsWith('/') || local === '' ? `${local}index.html` : local;
    await access(link.startsWith('/') ? resolve(root, 'dist', file) : resolve(root, 'dist', dirname(page), file));
  }
  for (const match of html.matchAll(/<img\b[^>]*>/g)) if (!/\balt=/.test(match[0]) || !/\bwidth=/.test(match[0]) || !/\bheight=/.test(match[0])) throw new Error(`${page}: imagem sem alt ou dimensões`);
  for (const match of html.matchAll(/<a\b[^>]*target="_blank"[^>]*>/g)) if (!match[0].includes('noopener')) throw new Error(`${page}: link externo sem noopener`);
  const schema = JSON.parse(html.match(/<script type="application\/ld\+json">([^<]+)<\/script>/)[1]);
  if (schema['@type'] !== 'Restaurant') throw new Error('Schema incorreto');
}
console.log('Checagem concluída: sintaxe JS, páginas, links locais, metadados, schema e imagens.');
