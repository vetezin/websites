import test from 'node:test';
import assert from 'node:assert/strict';
import { spawn, spawnSync } from 'node:child_process';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));

test('static build keeps services and usable contact links available without JavaScript', async () => {
  const result = spawnSync(process.execPath, ['scripts/build.mjs'], { cwd: root, encoding: 'utf8' });
  assert.equal(result.status, 0, `Build must succeed: ${result.stderr}`);
  const html = await readFile(join(root, 'dist/index.html'), 'utf8');
  for (const name of ['Motor', 'Injeção eletrônica', 'Embreagem', 'Troca de óleo', 'Suspensão', 'Freios']) {
    assert.ok(html.includes(name), `${name} must be present in the static HTML`);
  }
  assert.match(html, /href="tel:\+5518996966162"/);
  assert.match(html, /href="https:\/\/wa\.me\/5518996966162\?text=Ol%C3%A1/);
  assert.match(html, /<meta name="robots" content="noindex, nofollow">/);
  assert.doesNotMatch(html, /aggregateRating|openingHours|streetAddress/);
});

test('build under a subdirectory keeps every local asset reachable in the output', async () => {
  const result = spawnSync(process.execPath, ['scripts/build.mjs'], {
    cwd: root, encoding: 'utf8', env: { ...process.env, SITE_BASE_PATH: '/websites/ragassi/' }
  });
  assert.equal(result.status, 0, result.stderr);
  const html = await readFile(join(root, 'dist/index.html'), 'utf8');
  const assets = [...html.matchAll(/(?:src|href)="(\/websites\/ragassi\/assets\/[^"?#]+)"/g)];
  assert.ok(assets.length >= 5, 'the generated HTML must reference its images, styles and script');
  for (const [, url] of assets) {
    assert.ok((await stat(join(root, 'dist', url.replace('/websites/ragassi/', '')))).isFile());
  }
});

test('rendering escapes editorial content instead of interpreting it as HTML', async () => {
  const { renderPage } = await import('../scripts/render.mjs');
  const { siteContent } = await import('../content.mjs');
  const data = structuredClone(siteContent);
  data.hero.title = '<img src=x onerror=alert(1)> & teste';
  const html = await renderPage(data);
  assert.ok(html.includes('&lt;img src=x onerror=alert(1)&gt; &amp; teste'));
  assert.ok(!html.includes('<img src=x onerror=alert(1)>'));
  const json = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
  assert.equal(JSON.parse(json)['@type'], 'AutoRepair');
});

test('each service opens WhatsApp with its own service already identified', async () => {
  const { renderPage } = await import('../scripts/render.mjs');
  const { siteContent } = await import('../content.mjs');
  const html = await renderPage(siteContent);
  const links = [...html.matchAll(/<a class="service-link" href="([^"]+)"/g)];
  assert.equal(links.length,6,'All six services must be directly consultable without JavaScript');
  const messages = links.map(([,href])=>new URL(href.replaceAll('&amp;','&')).searchParams.get('text'));
  for (const name of ['motor','injeção eletrônica','embreagem','troca de óleo','suspensão','freios']) {
    assert.ok(messages.some(message=>message.includes(name)),`Missing context for ${name}`);
  }
  for (const [,href] of links) assert.equal(new URL(href).pathname,'/5518996966162');
});

test('unsafe base paths are rejected before building asset URLs', async () => {
  const { normalizeBasePath } = await import('../scripts/render.mjs');
  assert.equal(normalizeBasePath('/websites/ragassi'), '/websites/ragassi/');
  assert.equal(normalizeBasePath('/'), '/');
  for (const value of ['https://example.com/', '//example.com/', '/a/../', '/a?x=1', '/a"/']) {
    assert.throws(() => normalizeBasePath(value), /base path/i);
  }
});

test('a directory without an index returns HTTP 404 instead of a success response', async t => {
  const child = spawn(process.execPath, ['scripts/serve.mjs', '--preview'], {
    cwd: root, env: { ...process.env, PORT: '0', SITE_BASE_PATH: '/' }, stdio: ['ignore','pipe','pipe']
  });
  t.after(() => child.kill());
  const address = await new Promise((resolve,reject) => {
    const timeout = setTimeout(() => reject(new Error('Preview server did not start')),5000);
    child.once('error',error=>{clearTimeout(timeout);reject(error);});
    child.stdout.on('data',chunk=>{
      const match = String(chunk).match(/http:\/\/127\.0\.0\.1:\d+\//);
      if (match) {clearTimeout(timeout);resolve(match[0]);}
    });
  });
  const response = await fetch(new URL('assets/',address));
  assert.equal(response.status,404,'An absent directory index must not claim success');
  assert.equal(await response.text(),'Página não encontrada.');
});
