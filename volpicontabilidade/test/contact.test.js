import test from 'node:test';
import assert from 'node:assert/strict';
import { prepareWhatsApp, validateContact } from '../src/data/contact.js';

const valid = { name: 'Ana Souza', business: 'Empresa exemplo', email: 'ana@example.com', phone: '(18) 99999-9999', service: 'fiscal', message: 'Gostaria de conversar sobre planejamento tributário.' };

test('prepara a mensagem com o serviço escolhido e destino da Volpi', () => {
  const result = prepareWhatsApp(valid);
  const url = new URL(result.href);
  assert.deepEqual(result.errors, []);
  assert.equal(url.origin, 'https://wa.me');
  assert.equal(url.pathname, '/5518982009848');
  assert.equal(url.searchParams.get('text'), result.message);
  assert.match(result.message, /Assunto: Fiscal e tributário/);
  assert.match(result.message, /Nome: Ana Souza/);
});

test('permite contato sem campos opcionais', () => {
  const result = prepareWhatsApp({ ...valid, business: '', email: '', phone: '', service: 'geral' });
  assert.deepEqual(result.errors, []);
  assert.match(result.message, /Informações gerais/);
  assert.doesNotMatch(result.message, /E-mail:|Telefone:|Empresa:/);
  assert.doesNotMatch(result.message, /\n{3,}/);
});

test('rejeita nome vazio e mensagem curta sem gerar link', () => {
  const result = prepareWhatsApp({ ...valid, name: ' ', message: 'Oi' });
  assert.equal(result.errors.length, 2);
  assert.equal(result.href, undefined);
});

test('rejeita assunto desconhecido, e-mail e telefone inválidos', () => {
  const result = validateContact({ ...valid, service: 'javascript:alert(1)', email: 'invalido', phone: '123abc' });
  assert.equal(result.errors.length, 3);
});

test('limita tamanho dos dados antes de gerar URL', () => {
  const result = prepareWhatsApp({ ...valid, name: 'a'.repeat(101), business: 'b'.repeat(151), message: 'm'.repeat(1501) });
  assert.equal(result.errors.length, 3);
  assert.equal(result.href, undefined);
});

test('codifica caracteres especiais sem permitir alterar o destino', () => {
  const message = '<script>alert(1)</script> &text=outro #fragmento';
  const result = prepareWhatsApp({ ...valid, message });
  const url = new URL(result.href);
  assert.equal(url.searchParams.getAll('text').length, 1);
  assert.equal(url.hash, '');
  assert.ok(url.searchParams.get('text').includes(message));
});
