import test from 'node:test';
import assert from 'node:assert/strict';
import { withBase } from '../src/data/paths.js';

test('rotas, imagens e assuntos do contato funcionam no subdiretório do Pages', () => {
  const base = '/websites/volpicontabilidade/';
  assert.equal(withBase('/', base), base);
  assert.equal(withBase('/images/logo.png', base), `${base}images/logo.png`);
  assert.equal(withBase('/contato/?servico=fiscal', base), `${base}contato/?servico=fiscal`);
  assert.equal(withBase('/servicos/#fiscal', base), `${base}servicos/#fiscal`);
});

test('desenvolvimento mantém os caminhos na raiz', () => {
  assert.equal(withBase('/empresa/', '/'), '/empresa/');
});
