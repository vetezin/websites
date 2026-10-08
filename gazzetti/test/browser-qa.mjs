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
  check(await page.getByRole('button', { name: 'Abrir menu' }).getAttribute('aria-expanded') === 'false', 'Escape fecha menu');
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
  await page.getByRole('button', { name: 'Preparar mensagem' }).click();
  check(await page.locator('.form-result').isHidden(), 'Campos obrigatórios impedem rascunho inválido');
  await page.getByLabel('Nome (obrigatório)').fill('João de Teste');
  await page.getByLabel('E-mail (obrigatório)').fill('joao@example.com');
  await page.getByLabel('Empresa (opcional)').fill('Empresa de Teste');
  await page.getByLabel('Mensagem (obrigatório)').fill('Gostaria de conversar sobre um contrato empresarial.');
  await page.locator('input[name=privacy]').check();
  await page.getByRole('button', { name: 'Preparar mensagem' }).click();
  check(await page.getByText('Seu rascunho está pronto.').isVisible(), 'Rascunho preparado sem enviar');
  const href = await page.locator('[data-mailto]').getAttribute('href');
  check(href.startsWith('mailto:contato@gazzetti.com.br?') && decodeURIComponent(href).includes('João de Teste'), 'Destinatário e dados preservados');
  await page.getByLabel('Mensagem (obrigatório)').fill('Mensagem alterada para o escritório.');
  check(await page.locator('.form-result').isHidden(), 'Alteração invalida o rascunho anterior');

  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(baseUrl);
  check(await page.locator('h1').evaluate(element => getComputedStyle(element).animationName) === 'none', 'Preferência de movimento reduzido respeitada');
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  return { passed: checks.length, checks };
}
