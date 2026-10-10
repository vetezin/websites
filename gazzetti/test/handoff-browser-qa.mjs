/** Verifica o conteúdo renderizado e a demonstração sem JavaScript. */
export async function runHandoffChecks(page, expected, base='http://localhost:4322/') {
 const routes={home:'',office:'o-escritorio/',areas:'areas-de-atuacao/',contact:'contato/'};
 const checks=[];const check=(v,label)=>{if(!v)throw Error(label);checks.push(label);};
 for(const [key,route] of Object.entries(routes)){
  await page.goto(base+route);const main=await page.locator('main').innerText();
  check(await page.title()===expected[key].title,key+' title');
  check(await page.locator('meta[name="description"]').getAttribute('content')===expected[key].description,key+' description');
  check(JSON.stringify(await page.locator('main h1,main h2,main h3').allTextContents())===JSON.stringify(expected[key].sections.flatMap(s=>s.headings.map(h=>h.text))),key+' headings em ordem');
  let last=0;for(const text of expected[key].sections.flatMap(s=>s.paragraphs)){const pos=main.indexOf(text,last);if(pos<0)throw Error('Parágrafo ausente/fora de ordem: '+text);last=pos+text.length;}
  check(true,key+' parágrafos literais em ordem');
  for(const text of expected[key].sections.flatMap(s=>s.activities))check(main.includes(text),'Atividade literal: '+text);
  for(const a of await page.locator('a[href]').evaluateAll(es=>es.map(e=>e.getAttribute('href')).filter(x=>!x.startsWith('#')))) check((await page.request.get(new URL(a,page.url()).href)).status()===200,key+' destino '+a);
 }
 await page.setViewportSize({width:1440,height:1000});
 for(const route of Object.values(routes)){await page.goto(base+route);await page.evaluate(()=>document.documentElement.style.zoom='2');check(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),route+' ampliação CSS 200%');}
 const ctx=await page.context().browser().newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});
 try{
  const p=await ctx.newPage();await p.goto(base);await p.locator('summary').click();check(await p.locator('#mobile-menu').isVisible(),'Menu sem JS');
  await p.locator('#mobile-menu a').first().click();check(p.url().includes('o-escritorio'),'Navegação sem JS');
  await p.goto(base+'contato/');await p.getByLabel('Nome completo').fill('Ana');await p.getByLabel('E-mail',{exact:true}).fill('ana@example.com');await p.getByLabel('Mensagem',{exact:true}).fill('Teste');
  const requests=[];p.on('request',r=>requests.push(r.url()));await p.getByLabel('Nome completo').press('Enter');await p.getByLabel('E-mail',{exact:true}).press('Enter');check(requests.length===0,'Sem submissão por Enter sem JS');
  check(await p.getByRole('button',{name:'Enviar mensagem',exact:true}).isDisabled(),'Botão desabilitado sem JS');
 }finally{await ctx.close();}
 return {count:checks.length,checks};
}
