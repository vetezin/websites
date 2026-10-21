import { spawnSync } from 'node:child_process';
import { assemblePages } from './assemble-pages.mjs';

const projects = [
  { folder: 'conveniencia018', cli: 'node_modules/next/dist/bin/next', args: ['build', '--webpack'], env: { GITHUB_PAGES: 'true', NEXT_PUBLIC_BASE_PATH: '/websites/conveniencia018' } },
  { folder: 'volpicontabilidade', cli: 'scripts/astro.mjs', args: ['build'], env: { SITE_BASE_PATH: '/websites/volpicontabilidade/' } },
  { folder: 'gazzetti', cli: 'scripts/astro.mjs', args: ['build'], env: { SITE_BASE_PATH: '/websites/gazzetti/', SITE_URL: 'https://vetezin.github.io' } },
  { folder: 'ragassi', cli: 'scripts/build.mjs', args: [], env: { SITE_BASE_PATH: '/websites/ragassi/', SITE_URL: 'https://vetezin.github.io/websites/ragassi/' } },
  { folder: 'espetinhodoleo', cli: 'scripts/build.mjs', args: [], env: { SITE_BASE_PATH: '/websites/espleo/', SITE_URL: 'https://vetezin.github.io' } },
];

for (const project of projects) {
  const result = spawnSync(process.execPath, [project.cli, ...project.args], {
    cwd: new URL(`../${project.folder}/`, import.meta.url),
    env: { ...process.env, ...project.env },
    stdio: 'inherit',
  });
  if (result.error) throw result.error;
  if (result.status !== 0) process.exit(result.status ?? 1);
}
await assemblePages();
