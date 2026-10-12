import test from 'node:test';
import assert from 'node:assert/strict';
import { filterProducts } from '../catalog.js';
const products = [
  { id:'a', name:'Lâmpada LED', category:'iluminacao', description:'Luz quente para ambientes', specs:['9 W'], available:true },
  { id:'b', name:'Torneira de cozinha', category:'hidraulica', description:'Bancada', specs:['Acabamento cromado'], available:false },
  { id:'c', name:'Disjuntor bipolar', category:'eletrica', description:'Proteção elétrica', specs:['32 A'], available:true },
];
test('busca normaliza acentos, caixa e espaços', () => {
  assert.deepEqual(filterProducts(products,'  LAMPADA  ').map(p=>p.id),['a']);
  assert.equal(filterProducts(products,'iluminacao').length,1);
});
test('busca exige todos os termos, inclusive nas especificações', () => {
  assert.deepEqual(filterProducts(products,'torneira cromado').map(p=>p.id),['b']);
  assert.equal(filterProducts(products,'torneira led').length,0);
});
test('categoria e busca combinam; categoria vazia mostra todos', () => {
  assert.equal(filterProducts(products,'','all').length,3);
  assert.equal(filterProducts(products,'LED','hidraulica').length,0);
  assert.deepEqual(filterProducts(products,'','eletrica').map(p=>p.id),['c']);
});
test('indisponíveis continuam visíveis para consulta sem alegar estoque', () => {
  const results=filterProducts(products,'','hidraulica');
  assert.equal(results.length,1);
  assert.equal(results[0].available,false);
  assert.equal(products.length,3);
});
