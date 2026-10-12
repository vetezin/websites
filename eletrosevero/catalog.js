const normalize = value => String(value ?? '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
export function filterProducts(products, query = '', category = 'all') {
  const terms = normalize(query).split(/\s+/).filter(Boolean);
  return products.filter(product => {
    if (category !== 'all' && product.category !== category) return false;
    const text = normalize([product.name, product.category, product.description, ...product.specs].join(' '));
    return terms.every(term => text.includes(term));
  });
}
