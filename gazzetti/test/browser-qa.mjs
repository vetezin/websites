/** Recebe uma Page do Playwright, sem instalar runtime de teste no site. */
export async function runBrowserChecks(page, baseUrl='http://localhost:4322/') {
 const results=[];
 const check=(value,label)=>{if(!value)throw new Error(label);results.push(label);};
 const routes=['','o-escritorio/','areas-de-atuacao/','contato/'];
 const failures=[];
 const onError=error=>failures.push(error.message);
 page.on('pageerror',onError);
 try {
  for(const width of [320,390,768,1024,1440]) {
   await page.setViewportSize({width,height:900});
   for(const route of routes) {
    const response=await page.goto(baseUrl+route);await page.evaluate(()=>document.fonts.ready);
    check(response.status()===200,route+' status '+width);
    check(await page.locator('h1').count()===1,route+' H1 '+width);
    check(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),route+' sem overflow '+width);
    check(await page.locator('meta[name="robots"]').getAttribute('content')==='noindex, follow',route+' noindex '+width);
    check(await page.evaluate(()=>[...document.images].filter(i=>i.loading!=="lazy").every(i=>i.complete&&i.naturalWidth>0)),route+' imagens '+width);
    check(await page.evaluate(()=>[...document.querySelectorAll('p,a,label,input,textarea,figcaption')].filter(e=>e.getClientRects().length).every(e=>parseFloat(getComputedStyle(e).fontSize)>=14)),route+' legibilidade '+width);
   }
  }
  await page.setViewportSize({width:390,height:844});await page.goto(baseUrl);
  const summary=page.locator('.mobile-navigation summary');await summary.focus();await page.keyboard.press('Enter');
  check(await page.locator('.mobile-navigation').getAttribute('open')!==null,'Menu abre por teclado');
  await page.keyboard.press('Escape');check(await summary.evaluate(e=>document.activeElement===e),'Escape devolve foco');
  await summary.click();await page.locator('#mobile-menu').getByRole('link',{name:'O Escritório',exact:true}).click();
  check(page.url().includes('/o-escritorio/'),'Menu navega');
  await page.goto(baseUrl+'areas-de-atuacao/');await page.emulateMedia({reducedMotion:'reduce'});
  for(const id of ['estruturacao','negociacao','advocacia-contenciosa']) {
   await page.locator('.area-index a[href="#'+id+'"]').click();
   check(page.url().endsWith('#'+id),'Âncora '+id);
   check(await page.locator('#'+id).evaluate(e=>e.getBoundingClientRect().top>=72),'Âncora visível '+id);
  }
  check(await page.evaluate(()=>getComputedStyle(document.documentElement).scrollBehavior)==='auto','Movimento reduzido');
  await page.goto(baseUrl+'contato/');
  const transmitted=[];const onRequest=request=>{if(request.method()==='POST'||request.url().includes('mailto:'))transmitted.push(request.url());};
  page.on('request',onRequest);
  await page.getByLabel('Nome completo').fill('João');await page.getByLabel('E-mail',{exact:true}).fill('joao@example.com');await page.getByLabel('Telefone (opcional)').fill('+351 123 456 789');await page.getByLabel('Mensagem',{exact:true}).fill('Mensagem de teste.');
  check(await page.getByRole('button',{name:'Enviar mensagem',exact:true}).isDisabled(),'Envio desabilitado');
  await page.getByLabel('Nome completo').press('Enter');await page.locator('form').evaluate(e=>e.requestSubmit());
  check(transmitted.length===0,'Nenhum envio de dados');
  check(await page.evaluate(()=>localStorage.length===0&&sessionStorage.length===0),'Sem armazenamento');
  page.off('request',onRequest);
  for(const [old,dest] of [['escritorio/','o-escritorio/'],['areas/','areas-de-atuacao/'],['equipe/','o-escritorio/#equipe'],['privacidade/','politica-de-privacidade/']]) {await page.goto(baseUrl+old);await page.waitForURL(baseUrl+dest);check(true,'Alias '+old);}
  await page.goto(baseUrl);await page.keyboard.press('Tab');check(await page.locator('.skip-link').evaluate(e=>document.activeElement===e),'Pular conteúdo por teclado');
  await page.keyboard.press('Enter');check(await page.locator('main').evaluate(e=>document.activeElement===e),'Destino do foco no conteúdo');
  check(failures.length===0,'Sem erros de JavaScript');
  return {count:results.length,results,failures};
 } finally { page.off('pageerror',onError); }
}
