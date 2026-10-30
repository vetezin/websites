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
  await check('detail photographs are not requested before gallery interaction', async () => {
    assert.equal(requests.get(desktop).filter(request => request.includes('-detail.webp')).length, 0);
  });
  await check('8 cards; no arrows or clickable gallery indicators', async () => {
    await cards(desktop, 8);
    assert.equal(await desktop.locator('.gallery-prev, .gallery-next, .gallery-indicators button').count(), 0);
    assert((await desktop.locator('.product-media').first().boundingBox()).y < 1000);
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
    await detail(desktop, true);
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
    await mobile.waitForFunction(() => document.querySelector('#catalog-status').textContent.includes('próxima etapa'));
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
    await mobile.waitForFunction(() => document.querySelector('#catalog-status').textContent.includes('próxima etapa'), null, { timeout: 3000 });
    await mobile.waitForTimeout(4100);
  });
  await check('mobile two columns, loaded photos, no overflow and screenshot', async () => {
    assert.equal(await mobile.locator('#product-grid').evaluate(node => getComputedStyle(node).gridTemplateColumns.split(' ').length), 2);
    await capture(mobile, 'mobile.png');
  });
  await check('responsive typography and catalog-first layout across six widths', async () => {
    for (const width of [320, 390, 768, 820, 1024, 1440]) {
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
      if (width <= 430) assert(metrics.photoTop < 440, `catalog starts at ${metrics.photoTop}px at ${width}px`);
      if ([768, 820].includes(width)) assert.equal(metrics.columns, 3, `tablet column count at ${width}px`);
      if (width === 820) await capture(page, 'tablet.png');
      await page.context().close();
    }
  });
  await check('no browser errors or failed requests', async () => assert.deepEqual(errors, []));
} finally { await browser.close(); }
console.log(`${checks} checks passed.`);
