import http from 'node:http';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.dirname(fileURLToPath(import.meta.url));
const portArg = process.argv.indexOf('--port');
const port = Number(portArg >= 0 ? process.argv[portArg + 1] : 4177);
if (!Number.isInteger(port) || port < 1 || port > 65535) throw new Error('Use --port com um número entre 1 e 65535.');
const types = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml; charset=utf-8', '.woff2': 'font/woff2',
};

const server = http.createServer(async (request, response) => {
  response.setHeader('X-Content-Type-Options', 'nosniff');
  response.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.setHeader('Cache-Control', 'no-store');
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, { Allow: 'GET, HEAD' });
    response.end('Método não permitido');
    return;
  }
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname).replaceAll('\\', '/');
  } catch {
    response.writeHead(400).end('Endereço inválido');
    return;
  }
  const segments = pathname.split('/');
  if (segments.some((segment) => segment.startsWith('.')) || pathname.includes('\0')) {
    response.writeHead(403).end('Acesso não permitido');
    return;
  }
  const relative = pathname === '/' ? 'index.html' : pathname.replace(/^\/+/, '');
  const target = path.resolve(root, relative);
  const extension = path.extname(target).toLowerCase();
  const publicPath = relative === 'index.html' || relative.startsWith('assets/') || relative.startsWith('src/') || ['styles.css', 'robots.txt', 'sitemap.xml', 'favicon.svg'].includes(relative);
  if (!target.startsWith(`${root}${path.sep}`) || !types[extension] || !publicPath) {
    response.writeHead(404).end('Arquivo não encontrado');
    return;
  }
  try {
    const content = await readFile(target);
    response.writeHead(200, { 'Content-Type': types[extension], 'Content-Length': content.length });
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch (error) {
    const missing = ['ENOENT', 'EISDIR', 'ENOTDIR'].includes(error.code);
    response.writeHead(missing ? 404 : 500).end(missing ? 'Arquivo não encontrado' : 'Não foi possível carregar o arquivo');
    if (!missing) console.error('Falha ao servir arquivo:', error.code);
  }
});

server.listen(port, '127.0.0.1', () => console.log(`PH UNITED local: http://127.0.0.1:${port}/`));
server.on('error', (error) => {
  console.error(`Não foi possível iniciar o servidor (${error.code}).`);
  process.exitCode = 1;
});
