import { readdir, readFile } from 'node:fs/promises';
import { spawnSync } from 'node:child_process';

async function check(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = `${directory}/${entry.name}`;
    if (entry.isDirectory()) await check(path);
    else if (/\.(js|mjs)$/.test(entry.name)) {
      const result = spawnSync(process.execPath, ['--check', path], { stdio: 'inherit' });
      if (result.status !== 0) process.exit(result.status ?? 1);
    } else if (entry.name.endsWith('.astro')) {
      const source = await readFile(path, 'utf8');
      if (/href=["']#(?:["'])|javascript:|onerror=/i.test(source)) throw new Error(`Link ou handler inseguro: ${path}`);
    }
  }
}
await check('src');
await check('scripts');
await check('test');
console.log('Sintaxe JavaScript e verificações básicas de templates: OK. O build valida a compilação Astro.');
