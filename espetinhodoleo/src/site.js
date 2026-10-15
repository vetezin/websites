const filters = [...document.querySelectorAll('[data-filter]')];
const products = [...document.querySelectorAll('[data-category]')];
const count = document.querySelector('.catalog-count');

function filterProducts(category) {
  let visible = 0;
  for (const product of products) {
    product.hidden = category !== 'all' && product.dataset.category !== category;
    if (!product.hidden) visible++;
  }
  for (const button of filters) button.setAttribute('aria-pressed', String(button.dataset.filter === category));
  if (count) count.textContent = `${visible} ${visible === 1 ? 'opção' : 'opções'}`;
}
for (const button of filters) button.addEventListener('click', () => filterProducts(button.dataset.filter));
// Deep links always reveal the referenced product, even after filtering.
window.addEventListener('hashchange', () => {
  const target = document.getElementById(window.location.hash.slice(1));
  if (target?.matches('[data-category]') && target.hidden) {
    filterProducts('all');
    target.scrollIntoView();
  }
});
