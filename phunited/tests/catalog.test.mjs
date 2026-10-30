import test from 'node:test';
import assert from 'node:assert/strict';

const items = Object.freeze([
  Object.freeze({ id: 'tee', name: 'Camiseta algodão', category: 'camisetas', price: 89.9 }),
  Object.freeze({ id: 'pants', name: 'Calça reta', category: 'calcas', price: 159.9 }),
  Object.freeze({ id: 'shorts', name: 'Short jeans', category: 'shorts', price: 109.9 }),
]);

test('all categories preserve featured order without mutating the source', async () => {
  const { selectProducts } = await import('../src/catalog.js');
  const result = selectProducts(items, { category: 'all', query: '', sort: 'featured' });
  assert.deepEqual(result.map(({ id }) => id), ['tee', 'pants', 'shorts']);
  assert.notEqual(result, items);
});

test('category and accent-insensitive search work together', async () => {
  const { selectProducts } = await import('../src/catalog.js');
  assert.deepEqual(selectProducts(items, { category: 'calcas', query: ' CALCA ', sort: 'featured' }).map(({ id }) => id), ['pants']);
  assert.deepEqual(selectProducts(items, { category: 'shorts', query: 'calca', sort: 'featured' }), []);
});

test('search with only whitespace includes all pieces', async () => {
  const { selectProducts } = await import('../src/catalog.js');
  assert.equal(selectProducts(items, { query: '   ' }).length, 3);
});

test('ascending and descending prices are numeric and do not change featured order', async () => {
  const { selectProducts } = await import('../src/catalog.js');
  assert.deepEqual(selectProducts(items, { sort: 'price-asc' }).map(({ id }) => id), ['tee', 'shorts', 'pants']);
  assert.deepEqual(selectProducts(items, { sort: 'price-desc' }).map(({ id }) => id), ['pants', 'shorts', 'tee']);
  assert.deepEqual(items.map(({ id }) => id), ['tee', 'pants', 'shorts']);
});

test('an unmatched query returns an empty collection', async () => {
  const { selectProducts } = await import('../src/catalog.js');
  assert.deepEqual(selectProducts(items, { query: 'inexistente' }), []);
});

test('prices use Brazilian real formatting', async () => {
  const { formatPrice } = await import('../src/catalog.js');
  assert.equal(formatPrice(89.9).replace(/\s/g, ' '), 'R$ 89,90');
});

test('product interest opens the store WhatsApp with exact name and Brazilian price', async () => {
  const { buildWhatsAppLink } = await import('../src/catalog.js');
  assert.equal(typeof buildWhatsAppLink, 'function');
  const link = new URL(buildWhatsAppLink({ name: 'Calça cargo oliva & preta', price: 189.9 }));
  assert.equal(link.origin, 'https://wa.me');
  assert.equal(link.pathname, '/5518996596174');
  assert.equal(link.searchParams.get('text'), 'Olá, PH UNITED! Tenho interesse no item Calça cargo oliva & preta, no valor de R$ 189,90. Pode me passar mais informações?');
});

test('general contact opens WhatsApp without an unrelated product', async () => {
  const { buildWhatsAppLink } = await import('../src/catalog.js');
  assert.equal(typeof buildWhatsAppLink, 'function');
  const link = new URL(buildWhatsAppLink());
  assert.equal(link.pathname, '/5518996596174');
  assert.equal(link.searchParams.get('text'), 'Olá, PH UNITED! Gostaria de mais informações sobre as peças.');
});
