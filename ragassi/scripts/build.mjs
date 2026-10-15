import { mkdir, writeFile, cp } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';
import { renderPage } from './render.mjs';
import { siteContent } from '../content.mjs';

const root = fileURLToPath(new URL('../',import.meta.url));
const output = join(root,'dist');
const url = new URL(process.env.SITE_URL || siteContent.previewUrl);
const base = process.env.SITE_BASE_PATH || '/';
const html = await renderPage(siteContent,base,url.href);
await mkdir(output,{recursive:true});
await cp(join(root,'assets'),join(output,'assets'),{recursive:true});
await writeFile(join(output,'index.html'),html);
await writeFile(join(output,'robots.txt'),siteContent.preview?'User-agent: *\nDisallow: /\n':`User-agent: *\nAllow: /\nSitemap: ${new URL('sitemap.xml',url).href}\n`);
const xmlUrl = url.href.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
await writeFile(join(output,'sitemap.xml'),`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${xmlUrl}</loc></url></urlset>\n`);
console.log('Ragassi: site estático gerado em dist/ (demonstração, sem publicação).');
