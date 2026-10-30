import assert from 'node:assert/strict';
import { mkdir } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_MODULE_PATH || 'C:/Users/Victor/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const url = process.env.PH_UNITED_URL || 'http://127.0.0.1:4177/';
const artifacts = new URL('../artifacts/', import.meta.url);
await mkdir(artifacts, { recursive: true });
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true });
const errors = [];
const requests = new WeakMap();
let checks = 0;
async function check(name, action) { await action(); console.log(`PASS ${name}`); checks++; }
async function pageFor(options) {
  const context = await browser.newContext(options);
  const page = await context.newPage();
  requests.set(page, []);
  page.on('request', request => requests.get(page).push(request.url()));
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()); });
  page.on('response', response => { if (response.status() >= 400) errors.push(`${response.status()} ${response.url()}`); });
  await page.goto(url, { waitUntil: 'networkidle' });
  if (options.javaScriptEnabled !== false) await page.waitForFunction(() => document.querySelectorAll('.product-card').length === 8);
  return page;
}
async function cards(page, expected) { assert.equal(await page.locator('.product-card').count(), expected); }
async function detail(page, expected) {
  await page.waitForFunction(expected => document.querySelector('.product-media').classList.contains('is-detail') === expected, expected, { timeout: 3000 });
}
async function swipe(page, dx, dy) {
  const media = page.locator('.product-media').first();
  await media.scrollIntoViewIfNeeded();
  const box = await media.boundingBox();
  const x = box.x + box.width / 2 - dx / 2;
  const y = box.y + box.height / 2 - dy / 2;
  const cdp = await page.context().newCDPSession(page);
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x, y }] });
  for (let i = 1; i <= 5; i++) {
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: x + dx * i / 5, y: y + dy * i / 5 }] });
    await page.waitForTimeout(30);
  }
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await cdp.detach();
}
async function capture(page, filename) {
  await page.locator('.product-card').last().scrollIntoViewIfNeeded();
  await page.waitForFunction(() => [...document.querySelectorAll('.product-card img[src]')].every(img => img.complete && img.naturalWidth > 0));
  assert.equal(await page.locator('.product-card img[src*="placeholder"]').count(), 0);
  assert(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth));
  await page.mouse.move(0, 0);
  await page.locator('#intro-title').click();
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(450); // Let photo crossfades finish before visual inspection.
  await page.screenshot({ path: fileURLToPath(new URL(filename, artifacts)), fullPage: true });
}
try {
  const desktop = await pageFor({ viewport: { width: 1440, height: 1000 } });
  await check('brand copy replaces prototype references in visible text and accessible descriptions', async () => {
    const copy = await desktop.evaluate(() => [
      document.body.innerText,
      ...[...document.querySelectorAll('img')].map(node => node.alt),
      ...[...document.querySelectorAll('[aria-label]')].map(node => node.getAttribute('aria-label')),
      ...[...document.querySelectorAll('meta[name="description"], meta[property="og:description"]')].map(node => node.content),
      document.querySelector('script[type="application/ld+json"]').textContent,
    ].join('\n'));
    assert.doesNotMatch(copy, /demonstra|prévia|fictí|gerad[oa]|estoque real|próxima etapa|\bIA\b/i);
  });
  await check('detail photographs are not requested before gallery interaction', async () => {
    assert.equal(requests.get(desktop).filter(request => request.includes('-detail.webp')).length, 0);
  });
  await check('8 cards; no arrows or clickable gallery indicators', async () => {
    await cards(desktop, 8);
    assert.equal(await desktop.locator('.gallery-prev, .gallery-next, .gallery-indicators button').count(), 0);
    assert((await desktop.locator('.product-media').first().boundingBox()).y < 1000);
  });
  await check('every product has a concise descriptive line', async () => {
    const descriptions = await desktop.locator('.product-description').allTextContents();
    assert.equal(descriptions.length, 8);
    assert(descriptions.every(text => text.trim().length >= 25 && text.trim().length <= 150));
    assert(descriptions.every(text => !/\b\d+%|certific|garanti|100%|algodão|couro legítimo/i.test(text)), 'descriptions must not invent unverified material or commercial claims');
  });
  await check('WhatsApp contact and product links contain the correct destination and message', async () => {
    const contact = desktop.locator('#whatsapp-contact');
    assert(await contact.isVisible());
    assert.equal(await contact.innerText(), 'Entre em contato');
    assert.match(await contact.locator('img').getAttribute('src'), /ph-united-logo\.png$/);
    assert.equal(new URL(await contact.getAttribute('href')).pathname, '/5518996596174');
    const cards = await desktop.locator('.product-card').all();
    assert.equal(cards.length, 8);
    for (const card of cards) {
      const link = card.locator('.product-interest');
      assert.equal(await link.innerText(), 'Tenho interesse');
      const url = new URL(await link.getAttribute('href'));
      const name = await card.locator('.product-title').innerText();
      const price = (await card.locator('.product-price').innerText()).replace(/^Por /, '').replace(/\u00a0/g, ' ');
      assert.equal(url.origin, 'https://wa.me');
      assert.equal(url.pathname, '/5518996596174');
      assert.equal(url.searchParams.get('text'), `Olá, PH UNITED! Tenho interesse no item ${name}, no valor de ${price}. Pode me passar mais informações?`);
      assert.equal(await link.getAttribute('target'), '_blank');
    }
  });
  await check('category filters and synchronized navigation', async () => {
    for (const [category, count] of [['camisetas', 3], ['shorts', 1], ['calcas', 2], ['tenis', 2]]) {
      await desktop.locator(`.category-list [data-category="${category}"]`).click();
      await cards(desktop, count);
      assert(await desktop.locator(`[data-category="${category}"]`).evaluateAll(buttons => buttons.every(button => button.getAttribute('aria-pressed') === 'true')));
    }
  });
  await check('search combines with category and Escape restores focus', async () => {
    await desktop.locator('.category-list [data-category="calcas"]').click();
    await desktop.locator('#open-search').click();
    await desktop.locator('#search-input').fill('oliva');
    await cards(desktop, 1);
    assert.equal(await desktop.locator('.product-title').innerText(), 'Calça cargo oliva');
    await desktop.keyboard.press('Escape');
    assert(await desktop.locator('#search-panel').isHidden());
    assert(await desktop.locator('#open-search').evaluate(node => node === document.activeElement));
    assert(await desktop.locator('#active-search').isVisible());
    assert.match(await desktop.locator('#active-search-label').innerText(), /oliva/);
  });
  await check('clearing active query preserves category and sort and returns visible focus', async () => {
    await desktop.locator('#sort-select').selectOption('price-desc');
    await desktop.locator('#clear-active-search').click();
    await cards(desktop, 2);
    assert.equal(await desktop.locator('.category-list [data-category="calcas"]').getAttribute('aria-pressed'), 'true');
    assert.equal(await desktop.locator('#sort-select').inputValue(), 'price-desc');
    assert(await desktop.locator('#active-search').isHidden());
    assert(await desktop.locator('#open-search').evaluate(node => node === document.activeElement));
  });
  await check('empty state reset returns focus to visible control', async () => {
    await desktop.locator('#open-search').click();
    await desktop.locator('#search-input').fill('zzzzzz');
    await cards(desktop, 0);
    await desktop.locator('#clear-filters').focus();
    await desktop.keyboard.press('Enter');
    await cards(desktop, 8);
    assert(await desktop.locator('.category-list [data-category="all"]').evaluate(node => node === document.activeElement));
    await desktop.keyboard.press('Escape');
  });
  await check('numeric price order', async () => {
    for (const [order, direction] of [['price-asc', 1], ['price-desc', -1]]) {
      await desktop.locator('#sort-select').selectOption(order);
      const prices = (await desktop.locator('.product-price').allTextContents()).map(text => Number(text.replace(/[^\d,]/g, '').replace(',', '.')));
      assert(prices.every((value, i) => !i || (value - prices[i - 1]) * direction >= 0));
    }
    await desktop.locator('#sort-select').selectOption('featured');
  });
  await check('natural hover cycles and resets on leaving card', async () => {
    await desktop.locator('.product-card').first().hover();
    try { await detail(desktop, true); } catch (error) {
      console.log('HOVER DIAGNOSTIC', await desktop.evaluate(() => ({
        hidden: document.hidden,
        hover: matchMedia('(hover: hover)').matches,
        reduced: matchMedia('(prefers-reduced-motion: reduce)').matches,
        active: document.activeElement?.outerHTML.slice(0, 200),
        cards: [...document.querySelectorAll('.product-card')].slice(0, 3).map(node => ({ hovered: node.matches(':hover'), media: node.querySelector('.product-media').className, detailSrc: node.querySelector('.product-photo-detail').getAttribute('src'), loaded: node.querySelector('.product-photo-detail').complete, box: node.getBoundingClientRect().toJSON() })),
      })));
      throw error;
    }
    await desktop.mouse.move(0, 0);
    await detail(desktop, false);
    await desktop.waitForTimeout(1900);
    await detail(desktop, false);
  });
  await check('keyboard focus supports natural preview', async () => {
    await desktop.locator('.product-photo-button').first().focus();
    await detail(desktop, true);
    await desktop.locator('#open-search').focus();
    await detail(desktop, false);
  });
  await check('desktop loaded photos, no overflow and screenshot', async () => {
    await capture(desktop, 'desktop.png');
    await desktop.screenshot({ path: fileURLToPath(new URL('preview.png', artifacts)) });
  });
  const reduced = await pageFor({ viewport: { width: 1440, height: 1000 }, reducedMotion: 'reduce' });
  await check('reduced motion disables automatic gallery', async () => {
    await reduced.locator('.product-card').first().hover();
    await reduced.locator('.product-photo-button').first().focus();
    await reduced.waitForTimeout(1300);
    await detail(reduced, false);
  });
  const mobile = await pageFor({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
  await check('mobile search and menu are exclusive, closable and hide floating contact', async () => {
    await mobile.locator('#menu-toggle').tap();
    assert(await mobile.locator('#mobile-menu').isVisible());
    assert(await mobile.locator('#whatsapp-contact').isHidden());
    await mobile.locator('#open-search').tap();
    assert(await mobile.locator('#mobile-menu').isHidden());
    assert(await mobile.locator('#search-panel').isVisible());
    assert(await mobile.locator('#whatsapp-contact').isHidden());
    const close = mobile.locator('#close-search');
    assert(await close.isVisible());
    assert((await close.boundingBox()).height >= 44, 'search close needs a comfortable touch target');
    await close.tap();
    assert(await mobile.locator('#search-panel').isHidden());
    assert(await mobile.locator('#open-search').evaluate(node => node === document.activeElement));
    assert.equal(await mobile.locator('#whatsapp-contact').getAttribute('hidden'), null);
    await mobile.locator('#open-search').tap();
    await mobile.locator('#menu-toggle').tap();
    assert(await mobile.locator('#search-panel').isHidden());
    assert(await mobile.locator('#mobile-menu').isVisible());
    await mobile.locator('#menu-toggle').tap();
    assert.equal(await mobile.locator('#whatsapp-contact').getAttribute('hidden'), null);
  });
  await check('mobile menu selection restores visible focus', async () => {
    await mobile.locator('#menu-toggle').tap();
    await mobile.locator('#mobile-menu [data-category="shorts"]').focus();
    await mobile.keyboard.press('Enter');
    await cards(mobile, 1);
    assert(await mobile.locator('#mobile-menu').isHidden());
    assert(await mobile.locator('#menu-toggle').evaluate(node => node === document.activeElement));
    await mobile.locator('.category-list [data-category="all"]').tap();
  });
  await check('mobile product click provides feedback without navigation', async () => {
    await mobile.locator('.product-title').first().tap();
    await mobile.waitForFunction(() => document.querySelector('#catalog-status').textContent === 'Deslize a foto para ver outra vista da peça.');
    assert.equal(mobile.url(), url);
    await mobile.waitForTimeout(4100);
  });
  await check('horizontal swipe changes detail; vertical scroll preserves it', async () => {
    await swipe(mobile, -70, 0);
    await detail(mobile, true);
    assert.equal(await mobile.locator('#catalog-status').innerText(), '');
    await swipe(mobile, 0, -70);
    await detail(mobile, true);
    await swipe(mobile, 70, 0);
    await detail(mobile, false);
    // A new deliberate tap follows the gesture after touch scrolling settles.
    await mobile.waitForTimeout(500);
    await mobile.locator('.product-title').first().tap();
    await mobile.waitForFunction(() => document.querySelector('#catalog-status').textContent === 'Deslize a foto para ver outra vista da peça.', null, { timeout: 3000 });
    await mobile.waitForTimeout(4100);
  });
  await check('mobile two columns, loaded photos, no overflow and screenshot', async () => {
    assert.equal(await mobile.locator('#product-grid').evaluate(node => getComputedStyle(node).gridTemplateColumns.split(' ').length), 2);
    await capture(mobile, 'mobile.png');
    await mobile.screenshot({ path: fileURLToPath(new URL('mobile-top.png', artifacts)) });
  });
  await check('responsive typography and catalog-first layout across nine widths', async () => {
    for (const width of [320, 360, 390, 430, 600, 768, 820, 1024, 1440]) {
      const page = await pageFor({ viewport: { width, height: 1000 } });
      const metrics = await page.evaluate(() => ({
        overflow: document.documentElement.scrollWidth > innerWidth,
        photoTop: document.querySelector('.product-media').getBoundingClientRect().top,
        nameSize: parseFloat(getComputedStyle(document.querySelector('.product-title')).fontSize),
        priceSize: parseFloat(getComputedStyle(document.querySelector('.product-price')).fontSize),
        columns: getComputedStyle(document.querySelector('#product-grid')).gridTemplateColumns.split(' ').length,
      }));
      assert.equal(metrics.overflow, false, `overflow at ${width}px`);
      assert(metrics.nameSize >= 13, `name text too small at ${width}px`);
      assert(metrics.priceSize >= 14, `price text too small at ${width}px`);
      if (width <= 430) assert(metrics.photoTop < 460, `catalog starts at ${metrics.photoTop}px at ${width}px`);
      if ([768, 820].includes(width)) assert.equal(metrics.columns, 3, `tablet column count at ${width}px`);
      if (width <= 600) {
        const targets = await page.locator('.category-list button, #sort-select, .product-interest, #menu-toggle, #open-search').evaluateAll(nodes => nodes.filter(node => node.getBoundingClientRect().height > 0).map(node => ({ label: node.textContent.trim() || node.getAttribute('aria-label'), height: node.getBoundingClientRect().height })));
        assert(targets.every(target => target.height >= 44), `small touch targets at ${width}px: ${JSON.stringify(targets.filter(target => target.height < 44))}`);
        const interestLines = await page.locator('.product-interest').evaluateAll(nodes => nodes.map(node => {
          const range = document.createRange();
          range.selectNodeContents(node);
          return range.getClientRects().length;
        }));
        assert(interestLines.every(lines => lines === 1), `interest labels must stay on one line at ${width}px`);
      }
      if (width === 820) await capture(page, 'tablet.png');
      if ([320, 430].includes(width)) await capture(page, `mobile-${width}.png`);
      await page.context().close();
    }
  });
  await check('mobile menu and search screenshots', async () => {
    await mobile.evaluate(() => window.scrollTo(0, 0));
    await mobile.locator('#menu-toggle').tap();
    await mobile.screenshot({ path: fileURLToPath(new URL('mobile-menu.png', artifacts)) });
    await mobile.locator('#open-search').tap();
    await mobile.screenshot({ path: fileURLToPath(new URL('mobile-search.png', artifacts)) });
    await mobile.locator('#close-search').tap();
  });
  await check('no browser errors or failed requests', async () => assert.deepEqual(errors, []));
} finally { await browser.close(); }
console.log(`${checks} checks passed.`);
