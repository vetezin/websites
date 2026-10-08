import test from 'node:test';
import assert from 'node:assert/strict';
import { createMailto, normalizeSearch } from '../src/data/contact.js';

test('rascunho preserva acentos e codifica parâmetros sem permitir novos destinatários', () => {
  const data = { name: '  João & Maria  ', email: 'joao@example.com', company: 'A&B', subject: 'Negociação?cc=outro@example.com', message: 'Gostaria de conversar sobre estruturação.\nObrigado.' };
  const url = new URL(createMailto(data, 'contato@gazzetti.com.br'));
  assert.equal(url.pathname, 'contato@gazzetti.com.br');
  assert.equal(url.searchParams.get('cc'), null);
  assert.equal(url.searchParams.get('subject'), '[Contato pelo site] Negociação?cc=outro@example.com');
  assert.match(url.searchParams.get('body'), /^Nome: João & Maria\n/);
  assert.match(url.searchParams.get('body'), /Empresa: A&B/);
});

test('empresa opcional mantém o rascunho compreensível', () => {
  const url = new URL(createMailto({ name: 'Ana', email: 'ana@example.com', subject: 'Contato', message: 'Quero conversar.' }, 'contato@gazzetti.com.br'));
  assert.match(url.searchParams.get('body'), /Empresa: Não informada/);
});

test('busca aceita diferenças de acentos, caixa e espaços externos', () => {
  assert.equal(normalizeSearch('  CERTIDÕES São PAULO  '), 'certidoes sao paulo');
  assert.equal(normalizeSearch(''), '');
});

function luminance(hex) {
  const values = hex.match(/\w\w/g).map(value => parseInt(value, 16) / 255).map(value => value <= .04045 ? value / 12.92 : ((value + .055) / 1.055) ** 2.4);
  return values[0] * .2126 + values[1] * .7152 + values[2] * .0722;
}
function contrast(a, b) {
  const values = [luminance(a), luminance(b)].sort((a, b) => b - a);
  return (values[0] + .05) / (values[1] + .05);
}
test('cores de texto principais e secundárias atendem ao contraste AA', () => {
  for (const [text, background] of [['263b4e', 'ffffff'], ['526272', 'f2f5f7'], ['ffffff', '122d4c'], ['b9c8d6', '122d4c'], ['a7bdd0', '244a70']]) {
    assert.ok(contrast(text, background) >= 4.5, `${text}/${background}: ${contrast(text, background).toFixed(2)}`);
  }
});
