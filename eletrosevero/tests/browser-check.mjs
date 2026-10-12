import { createRequire } from 'node:module';
import assert from 'node:assert/strict';
import { mkdir, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
const moduleRoot=process.env.PLAYWRIGHT_MODULE || path.join(process.env.USERPROFILE || '', '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/package.json');
const require=createRequire(moduleRoot);
const { chromium }=require('playwright');
const browser=await chromium.launch({headless:true,executablePath:process.env.CHROME_PATH || path.join(process.env.ProgramFiles || 'C:/Program Files','Google/Chrome/Application/chrome.exe')});
const page=await browser.newPage({viewport:{width:1440,height:1000},deviceScaleFactor:1});
await page.addInitScript(() => {
  window.__localVitals = { lcp: null, cls: 0 };
  new PerformanceObserver(list => {
    const entries=list.getEntries();
    window.__localVitals.lcp=entries.at(-1)?.startTime ?? null;
  }).observe({type:'largest-contentful-paint',buffered:true});
  new PerformanceObserver(list => {
    for(const entry of list.getEntries()) if(!entry.hadRecentInput) window.__localVitals.cls+=entry.value;
  }).observe({type:'layout-shift',buffered:true});
});
const errors=[];
page.on('pageerror',error=>errors.push(error.message));
page.on('console',msg=>{if(msg.type()==='error')errors.push(msg.text());});
page.on('response',response=>{if(response.status()>=400)errors.push(`${response.status()} ${response.url()}`);});
const checks=[];
async function check(name,fn){await fn();checks.push(name);console.log(`PASS ${name}`);}
const shotDir=fileURLToPath(new URL('../docs/screenshots/',import.meta.url));
await mkdir(shotDir,{recursive:true});
try{
  await page.goto('http://127.0.0.1:4175',{waitUntil:'networkidle'});
  const initialVitals=await page.evaluate(()=>window.__localVitals);
  await check('9 produtos, 2 lojas e imagens carregadas',async()=>{
    assert.equal(await page.locator('.product-card').count(),9);
    assert.equal(await page.locator('.store-card').count(),2);
    for (const image of await page.locator('main img').all()) { await image.scrollIntoViewIfNeeded(); await image.evaluate(el=>el.decode()); }
    assert.equal(await page.locator('main img').evaluateAll(imgs=>imgs.every(i=>i.complete&&i.naturalWidth>0)),true);
    await page.evaluate(()=>scrollTo(0,0));
  });
  await check('busca sem acentos e limpar',async()=>{
    await page.getByRole('searchbox').fill('iris');
    assert.equal(await page.locator('.product-card').count(),1);
    assert.match(await page.locator('.product-card').innerText(),/Íris/);
    await page.getByRole('button',{name:'Limpar busca',exact:true}).click();
    assert.equal(await page.locator('.product-card').count(),9);
  });
  await check('categoria, busca combinada e estado vazio',async()=>{
    await page.getByRole('button',{name:/^Hidráulica/}).click();
    assert.equal(await page.locator('.product-card').count(),3);
    await page.getByRole('searchbox').fill('cromado');
    assert.equal(await page.locator('.product-card').count(),1);
    await page.getByRole('searchbox').fill('zzzzzz');
    assert.equal(await page.locator('#empty-state').isVisible(),true);
    await page.getByRole('button',{name:'Ver todos os produtos',exact:true}).click();
    assert.equal(await page.locator('.product-card').count(),9);
    assert.equal(await page.getByRole('searchbox').inputValue(),'');
  });
  await check('diálogo, teclado, Escape e retorno de foco',async()=>{
    const opener=page.getByRole('button',{name:'Ver detalhes de Torneira de bancada',exact:true});
    await opener.focus();await page.keyboard.press('Enter');
    assert.equal(await page.getByRole('dialog').isVisible(),true);
    assert.match(await page.locator('#dialog-title').innerText(),/Torneira/);
    assert.equal(await page.locator('#dialog-specs li').count(),6);
    await page.screenshot({path:shotDir+'produto-desktop-1440.png'});
    await page.keyboard.press('Escape');
    assert.equal(await page.getByRole('dialog').isVisible(),false);
    assert.equal(await opener.evaluate(el=>el===document.activeElement),true);
  });
  await check('modal horizontal, sem rolagem a 1440 × 900 e ação visível',async()=>{
    await page.setViewportSize({width:1440,height:900});
    for(const opener of await page.locator('.product-open').all()) {
      await opener.click();
      const layout=await page.getByRole('dialog').evaluate(el=>({width:el.clientWidth,height:el.clientHeight,scroll:el.scrollHeight,horizontal:el.scrollWidth}));
      assert.ok(layout.width>=1250);assert.ok(layout.scroll<=layout.height+1,JSON.stringify(layout));
      assert.ok(layout.horizontal<=layout.width);
      const action=await page.locator('.dialog-actions .button').boundingBox();
      assert.ok(action.y+action.height<=900);
      await page.getByRole('button',{name:'Fechar detalhes'}).click();
    }
    await page.getByRole('button',{name:'Ver detalhes de Torneira de bancada',exact:true}).click();
    await page.screenshot({path:shotDir+'produto-desktop-1440.png'});
    await page.getByRole('button',{name:'Fechar detalhes'}).click();
    await page.setViewportSize({width:1440,height:1000});
  });
  await check('modal sem rolagem em notebook 1366 × 768',async()=>{
    await page.setViewportSize({width:1366,height:768});
    for(const opener of await page.locator('.product-open').all()) {
      await opener.click();
      const fit=await page.getByRole('dialog').evaluate(el=>el.scrollHeight<=el.clientHeight+1 && el.scrollWidth<=el.clientWidth);
      assert.equal(fit,true,await page.locator('#dialog-title').innerText());
      await page.getByRole('button',{name:'Fechar detalhes'}).click();
    }
    await page.setViewportSize({width:1440,height:1000});
  });
  await check('visite nossas lojas em destaque no cabeçalho',async()=>{
    const link=page.locator('.site-header').getByRole('link',{name:'Visite nossas lojas'});
    assert.equal(await link.isVisible(),true);assert.equal(await link.getAttribute('href'),'#lojas');
    await link.click();assert.equal(new URL(page.url()).hash,'#lojas');
  });
  await check('detalhes descritivos e consulta por produto',async()=>{
    await page.getByRole('button',{name:'Ver detalhes de Chuveiro elétrico',exact:true}).click();
    assert.match(await page.locator('#dialog-status').innerText(),/Consulte preço e disponibilidade/);
    assert.ok((await page.locator('#dialog-application').innerText()).length>40);
    assert.ok((await page.locator('#dialog-guidance').innerText()).length>40);
    assert.equal(await page.locator('#dialog-source').count(),0);
    assert.doesNotMatch(await page.getByRole('dialog').innerText(),/imagem de refer[eê]ncia/i);
    assert.equal(new URL(await page.locator('#product-dialog [data-whatsapp]').getAttribute('href')).searchParams.get('text').includes('Chuveiro'),true);
    await page.getByRole('button',{name:'Fechar detalhes'}).click();
  });
  await check('layout amplo, fontes legíveis e avisos removidos',async()=>{
    const metrics=await page.evaluate(()=>({
      catalog:document.querySelector('.catalog-section').getBoundingClientRect().width,
      sidebar:document.querySelector('.catalog-sidebar').getBoundingClientRect(),
      grid:document.querySelector('.catalog-content').getBoundingClientRect(),
      title:parseFloat(getComputedStyle(document.querySelector('.product-card h3')).fontSize),
      body:document.body.innerText
    }));
    assert.ok(metrics.catalog>=1400);assert.ok(metrics.sidebar.right<=metrics.grid.left);
    assert.ok(metrics.title>=22);assert.doesNotMatch(metrics.body,/protótipo|horários de exemplo|indisponível|fotos de referência|imagem de referência/i);
  });
  await check('rotas por unidade, WhatsApp e telefone',async()=>{
    const routes=await page.locator('.store-actions a[target="_blank"]').evaluateAll(links=>links.map(l=>l.href));
    assert.equal(routes.length,2);assert.notEqual(routes[0],routes[1]);
    assert.match(decodeURIComponent(routes[0]),/Barão do Rio Branco/);
    assert.match(decodeURIComponent(routes[1]),/Fernando Costa/);
    assert.equal(await page.locator('a[data-whatsapp]').evaluateAll(links=>links.every(l=>l.href.startsWith('https://wa.me/5518998013291?text='))),true);
    assert.equal(await page.locator('a[href="tel:+5518998013291"]').count(),3);
  });
  await page.evaluate(()=>scrollTo(0,0));
  await page.screenshot({path:shotDir+'inicio-desktop-1440.png'});
  await page.screenshot({path:shotDir+'desktop-1440.png',fullPage:true});
  await page.locator('#produtos').evaluate(el=>scrollTo({top:el.offsetTop,behavior:'instant'}));
  await page.screenshot({path:shotDir+'catalogo-desktop-1440.png'});
  await page.evaluate(()=>scrollTo({top:0,behavior:'instant'}));
  const metrics=await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,images:[...document.images].length,navigation:performance.getEntriesByType('navigation')[0]?.toJSON(),paint:performance.getEntriesByType('paint').map(p=>({name:p.name,startTime:p.startTime}))}));
  assert.ok(metrics.scrollWidth<=1440);
  await page.setViewportSize({width:390,height:844});
  await page.evaluate(()=>scrollTo(0,0));
  await check('menu mobile abre e fecha',async()=>{
    const menu=page.getByRole('button',{name:/Menu/});
    await menu.click();assert.equal(await menu.getAttribute('aria-expanded'),'true');
    await page.getByRole('navigation').getByRole('link',{name:'Produtos',exact:true}).click();
    assert.equal(await menu.getAttribute('aria-expanded'),'false');
    assert.equal(await page.getByRole('navigation').isVisible(),false);
  });
  await check('mobile sem overflow e detalhe acessível',async()=>{
    assert.equal(await page.locator('.header-stores').isVisible(),true);
    await page.locator('.header-stores').click();
    assert.equal(new URL(page.url()).hash,'#lojas');
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth));
    await page.getByRole('button',{name:'Ver detalhes de Torneira de bancada',exact:true}).click();
    assert.equal(await page.getByRole('dialog').isVisible(),true);
    assert.ok(await page.getByRole('dialog').evaluate(el=>el.scrollWidth<=el.clientWidth));
    await page.screenshot({path:shotDir+'produto-mobile-390.png'});
    await page.getByRole('button',{name:'Fechar detalhes'}).click();
  });
  await page.evaluate(()=>scrollTo(0,0));
  await page.emulateMedia({reducedMotion:'reduce'});
  await page.screenshot({path:shotDir+'mobile-390.png',fullPage:true});
  await check('movimento reduzido e console sem erros',async()=>{
    assert.equal(await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior),'auto');
    assert.deepEqual(errors,[]);
  });
  await writeFile(shotDir+'browser-results.json',JSON.stringify({checks,errors,initialVitals,metrics,mobile:{width:390,overflow:false},note:'Mesures locales, pas un audit Lighthouse ni une mesure de performance en production.'},null,2));
  console.log(`${checks.length} browser checks passed; screenshots: ${shotDir}`);
}finally{await browser.close();}
