import http from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
const root=fileURLToPath(new URL('../dist',import.meta.url));
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.webp':'image/webp','.jpg':'image/jpeg','.svg':'image/svg+xml','.txt':'text/plain','.xml':'application/xml'};
const port=Number(process.env.PORT||8780);
const base=`/${(process.env.SITE_BASE_PATH||'').replace(/^\/+|\/+$/g,'')}`.replace(/\/$/,'');
http.createServer(async(req,res)=>{
 try{
  let pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname);
  if(base){
   if(pathname==='/'||pathname===base){res.writeHead(302,{Location:base+'/'});return res.end();}
   if(!pathname.startsWith(base+'/')){res.writeHead(404);return res.end('Página não encontrada');}
   pathname=pathname.slice(base.length);
  }
  const target=path.resolve(root,'.'+(pathname.endsWith('/')?pathname+'index.html':pathname));
  if(!target.startsWith(root+path.sep)){res.writeHead(403);return res.end('Forbidden');}
  const bytes=await readFile(target);
  res.writeHead(200,{'Content-Type':mime[path.extname(target)]||'application/octet-stream','X-Content-Type-Options':'nosniff','Referrer-Policy':'strict-origin-when-cross-origin'});res.end(bytes);
 }catch{res.writeHead(404,{'Content-Type':'text/plain; charset=utf-8'});res.end('Página não encontrada');}
}).listen(port,'127.0.0.1',()=>console.log(`Local: http://127.0.0.1:${port}${base}/`));
