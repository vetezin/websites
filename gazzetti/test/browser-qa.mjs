/** Executável com qualquer Page do Playwright, sem acoplar uma dependência de testes ao site. */
export async function runBrowserChecks(page, baseUrl = 'http://localhost:4322/') {
  const checks = [];
  function check(value, label) {
    if (!value) throw new Error(label);
    checks.push(label);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(baseUrl);
  await page.getByRole('button', { name: 'Abrir menu' }).click();
  check(await page.getByRole('navigation', { name: 'Navegação principal' }).isVisible(), 'Menu mobile abre');
  await page.keyboard.press('Escape');
  check(await page.locator('.mobile-navigation').getAttribute('open') === null, 'Escape fecha menu');
  await page.getByRole('button', { name: 'Abrir menu' }).click();
  await page.getByRole('navigation', { name: 'Navegação principal' }).getByRole('link', { name: 'Equipe', exact: true }).click();
  const profileButton = page.getByRole('button', { name: 'Conhecer o perfil fictício de Helena Duarte' });
  await profileButton.click();
  check(await page.getByRole('dialog').isVisible(), 'Perfil abre');
  await page.keyboard.press('Tab');
  check(await page.evaluate(() => !!document.activeElement.closest('dialog')), 'Tab mantém foco no perfil');
  await page.keyboard.press('Shift+Tab');
  check(await page.evaluate(() => !!document.activeElement.closest('dialog')), 'Shift+Tab mantém foco no perfil');
  await page.keyboard.press('Escape');
  check(await profileButton.evaluate(element => element === document.activeElement), 'Fechar perfil devolve o foco');

  await page.goto(`${baseUrl}uteis/`);
  await page.getByRole('button', { name: 'Tribunais', exact: true }).click();
  check(await page.locator('[data-resource]:visible').count() === 4, 'Filtro de tribunais');
  await page.getByRole('button', { name: 'Todos', exact: true }).click();
  check(await page.locator('.resource').first().evaluate(element => parseFloat(getComputedStyle(element.querySelector('h2')).fontSize) > parseFloat(getComputedStyle(element.querySelector('p')).fontSize)), 'Título do card domina a descrição');
  await page.getByLabel('Buscar portal ou serviço').fill('sao paulo');
  check(await page.locator('[data-resource]:visible').count() === 2, 'Busca sem acentos');
  await page.getByLabel('Buscar portal ou serviço').fill('xyz-inexistente');
  check(await page.getByText('Nenhum portal encontrado.').isVisible(), 'Estado sem resultados');
  await page.getByRole('button', { name: 'Limpar busca' }).click();
  check(await page.locator('[data-resource]:visible').count() === 9, 'Limpar restaura os resultados');

  await page.goto(`${baseUrl}areas/`);
  await page.locator('#negociacao summary').click();
  check(await page.locator('#negociacao details').getAttribute('open') !== null, 'Dúvida da área expande');
  await page.locator('#negociacao').getByRole('link', { name: 'Converse com o escritório' }).click();
  check(await page.getByLabel('Assunto').inputValue() === 'Negociação empresarial', 'Área preenche o assunto');
  await page.getByRole('button', { name: 'Simular envio' }).click();
  check(await page.locator('.form-result').isHidden(), 'Campos obrigatórios impedem simulação inválida');
  await page.getByLabel('Nome (obrigatório)').fill('João de Teste');
  await page.getByLabel('E-mail (obrigatório)').fill('joao@example.com');
  await page.getByLabel('Empresa (opcional)').fill('Empresa de Teste');
  await page.getByLabel('Mensagem (obrigatório)').fill('Gostaria de conversar sobre um contrato empresarial.');
  await page.locator('input[name=privacy]').check();
  const submissions = [];
  const recordSubmission = request => {
    if (request.method() === 'POST') submissions.push(request.url());
  };
  page.on('request', recordSubmission);
  await page.getByRole('button', { name: 'Simular envio' }).click();
  check(await page.getByText('Simulação concluída.').isVisible(), 'Simulação concluída com aviso de ausência de envio');
  check(submissions.length === 0, 'Simulação não transmite formulário por POST');
  page.off('request', recordSubmission);
  const href = await page.locator('[data-mailto]').getAttribute('href');
  check(href.startsWith('mailto:contato@gazzetti.com.br?') && decodeURIComponent(href).includes('João de Teste'), 'Destinatário e dados preservados');
  await page.getByLabel('Mensagem (obrigatório)').fill('Mensagem alterada para o escritório.');
  check(await page.locator('.form-result').isHidden(), 'Alteração invalida a simulação anterior');

  await page.setViewportSize({ width: 720, height: 900 });
  await page.goto(baseUrl);
  check(await page.locator('.hero-figure').evaluate(element => element.getBoundingClientRect().top >= document.querySelector('.hero-copy').getBoundingClientRect().bottom), 'Tablet apresenta foto abaixo do texto');
  check((await page.locator('meta[property="og:image"]').getAttribute('content')).endsWith('/images/escritorio-real.webp'), 'Compartilhamento usa a fachada real');
  await page.setViewportSize({ width: 390, height: 844 });
  check(await page.locator('.team-grid-compact').evaluate(element => element.getBoundingClientRect().height < 600), 'Equipe compacta na home mobile');

  const noScriptContext = await page.context().browser().newContext({ javaScriptEnabled: false, viewport: { width: 390, height: 844 } });
  try {
    const noScriptPage = await noScriptContext.newPage();
    await noScriptPage.goto(baseUrl);
    await noScriptPage.getByRole('button', { name: 'Abrir menu' }).click();
    check(await noScriptPage.getByRole('navigation', { name: 'Navegação principal' }).isVisible(), 'Menu abre sem JavaScript');
    await noScriptPage.getByRole('navigation', { name: 'Navegação principal' }).getByRole('link', { name: 'Escritório', exact: true }).click();
    check(noScriptPage.url().endsWith('/escritorio/'), 'Menu navega sem JavaScript');
  } finally {
    await noScriptContext.close();
  }

  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(baseUrl);
  check(await page.locator('h1').evaluate(element => getComputedStyle(element).animationName) === 'none', 'Preferência de movimento reduzido respeitada');
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  return { passed: checks.length, checks };
}
