const normalize = (value) => String(value).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR').trim();

export function selectProducts(products, { category = 'all', query = '', sort = 'featured' } = {}) {
  const search = normalize(query);
  const selected = products.filter((product) =>
    (category === 'all' || product.category === category) && normalize(product.name).includes(search),
  );
  if (sort === 'price-asc') selected.sort((a, b) => a.price - b.price);
  if (sort === 'price-desc') selected.sort((a, b) => b.price - a.price);
  return selected;
}

const currency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
export const formatPrice = (price) => currency.format(price);
