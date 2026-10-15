import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, sep, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { normalizeBasePath } from './render.mjs';

const root = fileURLToPath(new URL('../',import.meta.url));
const output = resolve(root,'dist');
const base = normalizeBasePath(process.env.SITE_BASE_PATH || '/');
const port = Number(process.env.PORT || 4326);
if (!process.argv.includes('--preview')) {
  const result = spawnSync(process.execPath,[resolve(root,'scripts/build.mjs')],{stdio:'inherit'});
  if (result.status !== 0) process.exit(result.status || 1);
}
const types = {'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.webp':'image/webp','.png':'image/png','.svg':'image/svg+xml','.xml':'application/xml','.txt':'text/plain; charset=utf-8'};
const server = createServer(async (request,response) => {
  if (!['GET','HEAD'].includes(request.method)) {
    response.writeHead(405,{Allow:'GET, HEAD'}); response.end(); return;
  }
  try {
    const url = new URL(request.url,'http://localhost');
    const pathname = decodeURIComponent(url.pathname);
    if (!pathname.startsWith(base)) throw new Error('Not found');
    let file = resolve(output,pathname.slice(base.length));
    if (file !== output && !file.startsWith(output + sep)) throw new Error('Not found');
    if ((await stat(file)).isDirectory()) {
      if (!pathname.endsWith('/')) {response.writeHead(302,{Location:pathname+'/'+url.search});response.end();return;}
      file = resolve(file,'index.html');
    }
    const content = await readFile(file);
    response.writeHead(200,{'Content-Type':types[extname(file)] || 'application/octet-stream','Cache-Control':'no-cache','X-Content-Type-Options':'nosniff'});
    response.end(request.method==='HEAD'?undefined:content);
  } catch {
    if (!response.headersSent) response.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});
    response.end('Página não encontrada.');
  }
});
server.listen(port,'127.0.0.1',()=>console.log(`Ragassi: http://127.0.0.1:${server.address().port}${base}`));
process.on('SIGINT',()=>server.close());
process.on('SIGTERM',()=>server.close());
