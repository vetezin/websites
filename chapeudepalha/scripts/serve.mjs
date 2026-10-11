import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, sep, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const root = fileURLToPath(new URL('../', import.meta.url));
const output = resolve(root, 'dist');
const port = Number(process.env.PORT || 4324);
if (!process.argv.includes('--preview')) {
  const build = spawnSync(process.execPath, [resolve(root, 'scripts/build.mjs')], { stdio: 'inherit' });
  if (build.status !== 0) process.exit(build.status || 1);
}
const mime = { '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.png': 'image/png', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain; charset=utf-8' };
const server = createServer(async (req, res) => {
  try {
    const pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
    const base = (process.env.SITE_BASE_PATH || '/').replace(/\/$/, '') + '/';
    if (!pathname.startsWith(base)) throw new Error('Route not found');
    let file = resolve(output, pathname.slice(base.length));
    if (file !== output && !file.startsWith(output + sep)) throw new Error('Invalid path');
    const info = await stat(file);
    if (info.isDirectory()) {
      if (!pathname.endsWith('/')) { res.writeHead(302, { Location: `${pathname}/${new URL(req.url, 'http://localhost').search}` }); res.end(); return; }
      file = resolve(file, 'index.html');
    }
    res.writeHead(200, { 'Content-Type': mime[extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-cache', 'X-Content-Type-Options': 'nosniff' });
    res.end(await readFile(file));
  } catch {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('Página não encontrada.');
  }
});
server.listen(port, '127.0.0.1', () => console.log(`Prévia: http://localhost:${port}${process.env.SITE_BASE_PATH || '/'}`));
process.on('SIGINT', () => server.close());
