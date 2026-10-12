import { site, categories, products, stores } from './data/content.js';
import { filterProducts } from './catalog.js';

const icons = {
  grid:'<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  bolt:'<path d="m13 2-9 12h7l-1 8 10-13h-7z"/>',
  drop:'<path d="M12 2S5 10 5 15a7 7 0 0 0 14 0c0-5-7-13-7-13Z"/><path d="M8 15a4 4 0 0 0 4 4"/>',
  bulb:'<path d="M9 18h6m-5 3h4M8 14a6 6 0 1 1 8 0c-1 1-1 2-1 3H9c0-1 0-2-1-3Z"/>',
  tool:'<path d="m14 7 3 3 4-4a7 7 0 0 1-9 9l-7 7-3-3 7-7a7 7 0 0 1 9-9Z"/>',
  window:'<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M12 3v18M3 12h18"/>',
  pin:'<path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  search:'<circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 5 5"/>',
};
function icon(name) { return `<svg viewBox="0 0 24 24" aria-hidden="true">${icons[name] || icons.grid}</svg>`; }
function node(tag, className, text) {
  const el = document.createElement(tag);
  if (className) el.className = className;
  if (text !== undefined) el.textContent = text;
  return el;
}
const categoryName = id => categories.find(category => category.id === id)?.name || id;
const search = document.querySelector('#search');
const grid = document.querySelector('#product-grid');
const dialog = document.querySelector('#product-dialog');
const clearSearch = document.querySelector('#clear-search');
let selectedCategory = 'all';
let dialogTrigger = null;

// Only trusted, fixed SVG paths use innerHTML. All content uses textContent.
document.querySelector('#search-icon').innerHTML = icon('search');
document.querySelector('#hero-title').textContent = site.hero.title;
document.querySelector('#hero-description').textContent = site.hero.description;
document.querySelector('#about-title').textContent = site.about.title;
const aboutCopy = document.querySelector('#about-copy');
site.about.paragraphs.forEach(text => aboutCopy.append(node('p','',text)));
const instagram = node('a','', 'Acompanhe a loja no Instagram ↗');
instagram.href = site.instagram;
instagram.target = '_blank';
instagram.rel = 'noopener noreferrer';
aboutCopy.append(instagram);
document.querySelectorAll('[data-whatsapp]').forEach(link => {
  link.href = site.whatsapp;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

const centralStore = stores.find(store => store.id === 'loja2');
document.querySelector('[data-center-map]').href = 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(centralStore.mapQuery);

const categoryButtons = categories.map(category => {
  const button = node('button','category-button');
  button.type = 'button';
  button.setAttribute('aria-pressed', String(category.id === selectedCategory));
  button.setAttribute('aria-controls','product-grid');
  const glyph = node('span');
  glyph.innerHTML = icon(category.icon);
  button.append(glyph, node('span','',category.name), node('span','category-count',String(category.id === 'all' ? products.length : products.filter(p => p.category === category.id).length)));
  button.addEventListener('click', () => {
    selectedCategory = category.id;
    renderProducts();
  });
  document.querySelector('#categories').append(button);
  return {button,id:category.id};
});

function openProduct(product, trigger) {
  dialogTrigger = trigger;
  document.querySelector('#dialog-title').textContent = product.name;
  document.querySelector('#dialog-description').textContent = product.description;
  document.querySelector('#dialog-category').textContent = categoryName(product.category);
  const image = document.querySelector('#dialog-image');
  image.src = product.image;
  image.alt = product.name;
  const status = document.querySelector('#dialog-status');
  status.textContent = 'Consulte preço e disponibilidade';
  document.querySelector('#dialog-application').textContent = product.application;
  document.querySelector('#dialog-guidance').textContent = product.guidance;
  document.querySelector('.dialog-image').className = 'dialog-image ' + product.imageClass;
  dialog.querySelector('[data-whatsapp]').href = 'https://wa.me/5518998013291?text=' + encodeURIComponent('Olá! Gostaria de saber mais sobre ' + product.name + '. Podem me informar modelos, preço e disponibilidade?');
  const specs = document.querySelector('#dialog-specs');
  specs.replaceChildren(...product.specs.map(spec => {
    const row = node('li'); const separator = spec.indexOf(':');
    row.append(node('span','',spec.slice(0,separator)),node('strong','',spec.slice(separator+1).trim())); return row;
  }));
  dialog.showModal();
  dialog.scrollTop = 0;
  dialog.querySelector('.dialog-close').focus();
}
function productCard(product) {
  const article = node('article','product-card');
  const button = node('button','product-open');
  button.type = 'button';
  button.setAttribute('aria-label',`Ver detalhes de ${product.name}`);
  const visual = node('div','product-visual');
  if (product.imageClass) visual.classList.add(product.imageClass);
  const img = node('img');
  img.src = product.image;
  img.alt = product.name;
  img.width = 320;
  img.height = 300;
  img.loading = 'lazy';
  visual.append(img);
  const meta = node('div','product-meta');
  meta.append(node('span','product-category',categoryName(product.category)),node('h3','',product.name),node('p','product-spec',product.application));
  const bottom = node('div','product-bottom');
  bottom.append(node('span','','Conhecer produto'),node('span','','↗'));
  meta.append(bottom);
  // The article owns the heading and block content; its empty, labelled button covers the card.
  button.addEventListener('click',() => openProduct(product,button));
  article.append(visual,meta,button);
  return article;
}
function renderProducts() {
  const results = filterProducts(products,search.value,selectedCategory);
  grid.replaceChildren(...results.map(productCard));
  document.querySelector('#empty-state').hidden = results.length !== 0;
  document.querySelector('#results-count').textContent = `${results.length} ${results.length === 1 ? 'produto encontrado' : 'produtos encontrados'}`;
  clearSearch.hidden = search.value.length === 0;
  categoryButtons.forEach(({button,id}) => button.setAttribute('aria-pressed',String(id === selectedCategory)));
}
search.addEventListener('input',renderProducts);
document.querySelector('.search-form').addEventListener('submit',event => event.preventDefault());
clearSearch.addEventListener('click',() => { search.value=''; renderProducts(); search.focus(); });
document.querySelector('#reset-filters').addEventListener('click',() => { search.value=''; selectedCategory='all'; renderProducts(); search.focus(); });
dialog.querySelector('.dialog-close').addEventListener('click',() => dialog.close());
dialog.addEventListener('click',event => {
  if (event.target !== dialog) return;
  const bounds=dialog.getBoundingClientRect();
  if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) dialog.close();
});
dialog.addEventListener('close',() => { if (dialogTrigger?.isConnected) dialogTrigger.focus({preventScroll:true}); });

for (const store of stores) {
  const article = node('article','store-card');
  const top = node('div','store-top');
  top.setAttribute('aria-hidden','true');
  const pin = node('span','map-pin');
  pin.innerHTML = icon('pin');
  top.append(node('div','store-map-grid'),pin);
  const info = node('div','store-info');
  info.append(node('h3','',store.name));
  const address = node('address','store-address',store.address);
  address.append(node('span','',store.district));
  info.append(address);
  const hours = node('div','store-hours');
  hours.append(node('h4','','Horário de atendimento'));
  hours.append(node('p','','Consulte os horários de atendimento pelo WhatsApp antes de visitar.'));
  info.append(hours);
  const actions = node('div','store-actions');
  const map = node('a','button button-outline','Como chegar ↗');
  map.href=`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(store.mapQuery)}`;
  map.target='_blank';
  map.rel='noopener noreferrer';
  map.setAttribute('aria-label',`Como chegar à ${store.name}`);
  const phone = node('a','store-phone','Ligar para a loja');
  phone.href=`tel:${site.phoneLink}`;
  actions.append(map,phone);
  info.append(actions);
  article.append(top,info);
  document.querySelector('#stores').append(article);
}
const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('#main-nav');
function closeMenu(){ menuButton.setAttribute('aria-expanded','false'); nav.classList.remove('is-open'); }
menuButton.addEventListener('click',() => { const open=menuButton.getAttribute('aria-expanded')==='true'; menuButton.setAttribute('aria-expanded',String(!open)); nav.classList.toggle('is-open',!open); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click',closeMenu));
document.addEventListener('keydown',event => { if(event.key==='Escape' && menuButton.getAttribute('aria-expanded')==='true'){ closeMenu(); menuButton.focus(); } });
matchMedia('(min-width: 1101px)').addEventListener('change',event => { if(event.matches) closeMenu(); });
renderProducts();
