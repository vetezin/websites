import { readFile, mkdir, writeFile, cp } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { renderPages } from '../src/templates.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const out = resolve(root, 'dist');
let base = process.env.SITE_BASE_PATH || '/';
if (!/^\/[a-zA-Z0-9/_-]*$/.test(base)) throw new Error('SITE_BASE_PATH precisa ser um caminho absoluto simples.');
if (!base.endsWith('/')) base += '/';
const origin = process.env.SITE_URL ? new URL(process.env.SITE_URL).origin : '';
const menu = JSON.parse(await readFile(resolve(root, 'data/menu.json'), 'utf8'));
for (const item of menu.items) {
  if (!item.name || !Number.isFinite(item.price) || item.price < 0 || !Number.isInteger(item.grams) || item.grams <= 0) throw new Error(`Item inválido: ${item.name}`);
}
for (const item of menu.pastries) {
  if (!item.name || !Number.isFinite(item.price) || item.price < 0) throw new Error(`Pastel inválido: ${item.name}`);
}
await mkdir(out, { recursive: true });
await cp(resolve(root, 'public'), out, { recursive: true, filter: (path) => !path.endsWith('.png') || path.endsWith('cardapio-porcoes-fonte.png') });
for (const [name, html] of Object.entries(renderPages(menu, base, origin))) {
  await mkdir(dirname(resolve(out, name)), { recursive: true });
  await writeFile(resolve(out, name), html);
}
const sitemap = origin ? `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${origin}${base}</loc></url><url><loc>${origin}${base}cardapio/</loc></url></urlset>` : '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"/>';
await writeFile(resolve(out, 'sitemap.xml'), sitemap);
await writeFile(resolve(out, 'robots.txt'), `User-agent: *\nDisallow: /\n${origin ? `Sitemap: ${origin}${base}sitemap.xml\n` : ''}`);
console.log(`Site gerado: ${out}\nBase: ${base} · duas páginas · prévia não indexável`);
