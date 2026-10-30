import { products } from './content.js';
import { formatPrice, selectProducts } from './catalog.js';

const grid = document.querySelector('#product-grid');
const count = document.querySelector('#catalog-count');
const emptyState = document.querySelector('#empty-state');
const searchInput = document.querySelector('#search-input');
const sortSelect = document.querySelector('#sort-select');
const status = document.querySelector('#catalog-status');
const searchPanel = document.querySelector('#search-panel');
const openSearch = document.querySelector('#open-search');
const menuToggle = document.querySelector('#menu-toggle');
const mobileMenu = document.querySelector('#mobile-menu');
const activeSearch = document.querySelector('#active-search');
const activeSearchLabel = document.querySelector('#active-search-label');
const clearActiveSearch = document.querySelector('#clear-active-search');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const state = { category: 'all', query: '', sort: 'featured' };
let automaticGallery = null;
let statusTimer;

function stopGallery() {
  if (!automaticGallery) return;
  clearTimeout(automaticGallery.timer);
  automaticGallery.reset();
  automaticGallery = null;
}

function notify() {
  clearTimeout(statusTimer);
  status.textContent = 'A página desta peça será criada na próxima etapa.';
  status.classList.add('is-visible');
  statusTimer = setTimeout(() => {
    status.classList.remove('is-visible');
    status.textContent = '';
  }, 4000);
}

function element(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function makeCard(product, index) {
  const card = element('article', 'product-card');
  const media = element('div', 'product-media');
  const photoButton = element('button', 'product-photo-button');
  photoButton.type = 'button';
  photoButton.setAttribute('aria-label', `Explorar ${product.name} — prévia demonstrativa`);
  photoButton.addEventListener('click', notify);

  let detailPhoto;
  let detailReady = false;
  let detailStarted = false;
  for (const detail of [false, true]) {
    const photo = element('img', detail ? 'product-photo product-photo-detail' : 'product-photo');
    if (!detail) photo.src = product.image;
    photo.alt = detail ? '' : product.alt;
    photo.width = 900;
    photo.height = 1125;
    photo.loading = detail || index < 4 ? 'eager' : 'lazy';
    photo.decoding = 'async';
    if (detail) {
      detailPhoto = photo;
      photo.setAttribute('aria-hidden', 'true');
      photo.addEventListener('load', () => {
        detailReady = true;
        if (detailVisible && card.isConnected) applyPhoto(true);
      });
    }
    photo.addEventListener('error', () => { photo.src = 'assets/placeholder.svg'; }, { once: true });
    photoButton.append(photo);
  }
  media.append(photoButton);

  const indicators = element('div', 'gallery-indicators');
  indicators.setAttribute('aria-hidden', 'true');
  let detailVisible = false;
  const dots = [0, 1].map((photoIndex) => {
    const dot = element('span', `gallery-dot${photoIndex === 0 ? ' is-active' : ''}`);
    indicators.append(dot);
    return dot;
  });

  function applyPhoto(detail) {
    media.classList.toggle('is-detail', detail);
    dots.forEach((dot, photoIndex) => {
      const active = photoIndex === Number(detail);
      dot.classList.toggle('is-active', active);
    });
  }

  function showPhoto(detail) {
    detailVisible = detail;
    if (detail && !detailReady) {
      if (!detailStarted) {
        detailStarted = true;
        detailPhoto.src = product.detailImage;
      }
      return;
    }
    applyPhoto(detail);
  }

  media.append(indicators);

  function startGallery() {
    if (reducedMotion.matches || !window.matchMedia('(hover: hover)').matches || document.hidden) return;
    stopGallery();
    const gallery = { reset: () => showPhoto(false), timer: null };
    const tick = () => {
      if (automaticGallery !== gallery) return;
      showPhoto(!detailVisible);
      gallery.timer = setTimeout(tick, 1800);
    };
    automaticGallery = gallery;
    gallery.timer = setTimeout(tick, 900);
  }
  card.addEventListener('mouseenter', startGallery);
  card.addEventListener('focusin', startGallery);
  card.addEventListener('focusout', (event) => {
    if (!card.contains(event.relatedTarget)) {
      stopGallery();
      showPhoto(false);
    }
  });
  card.addEventListener('mouseleave', () => {
    stopGallery();
    showPhoto(false);
  });

  let touchStart;
  let suppressClick = false;
  media.addEventListener('touchstart', (event) => {
    if (event.touches.length !== 1) { touchStart = null; return; }
    const { clientX, clientY } = event.touches[0];
    touchStart = { x: clientX, y: clientY };
  }, { passive: true });
  media.addEventListener('touchend', (event) => {
    if (!touchStart || !event.changedTouches.length) return;
    const touch = event.changedTouches[0];
    const dx = touch.clientX - touchStart.x;
    const dy = touch.clientY - touchStart.y;
    touchStart = null;
    if (Math.abs(dx) > 35 && Math.abs(dx) > Math.abs(dy) * 1.3) {
      stopGallery();
      showPhoto(!detailVisible);
      suppressClick = true;
      setTimeout(() => { suppressClick = false; }, 400);
    }
  }, { passive: true });
  media.addEventListener('touchcancel', () => { touchStart = null; }, { passive: true });
  media.addEventListener('click', (event) => {
    if (suppressClick) {
      event.preventDefault();
      event.stopImmediatePropagation();
      suppressClick = false;
    }
  }, { capture: true });

  const name = element('h3', 'product-name');
  const title = element('button', 'product-title', product.name);
  title.type = 'button';
  title.addEventListener('click', notify);
  name.append(title);
  card.append(media, name, element('p', 'product-price', formatPrice(product.price)));
  return card;
}

function render() {
  stopGallery();
  const selected = selectProducts(products, state);
  grid.replaceChildren(...selected.map(makeCard));
  emptyState.hidden = selected.length > 0;
  count.textContent = `${selected.length} ${selected.length === 1 ? 'peça' : 'peças'}`;
  const query = state.query.trim();
  activeSearch.hidden = !query;
  activeSearchLabel.textContent = query ? `Busca: “${query}”` : '';
  clearActiveSearch.setAttribute('aria-label', query ? `Limpar busca por ${query}` : 'Limpar busca');
  document.querySelectorAll('[data-category]').forEach((button) => {
    const active = button.dataset.category === state.category;
    button.setAttribute('aria-pressed', String(active));
    button.classList.toggle('is-active', active);
  });
}

function closeMenu() {
  mobileMenu.hidden = true;
  menuToggle.setAttribute('aria-expanded', 'false');
}

document.querySelectorAll('[data-category]').forEach((button) => {
  button.addEventListener('click', () => {
    const wasMobileMenu = mobileMenu.contains(button);
    state.category = button.dataset.category;
    render();
    closeMenu();
    if (wasMobileMenu) menuToggle.focus();
  });
});
searchInput.addEventListener('input', () => {
  state.query = searchInput.value;
  render();
});
sortSelect.addEventListener('change', () => {
  state.sort = sortSelect.value;
  render();
});
document.querySelector('#clear-filters').addEventListener('click', () => {
  state.category = 'all';
  state.query = '';
  state.sort = 'featured';
  searchInput.value = '';
  sortSelect.value = 'featured';
  render();
  document.querySelector('.category-list [data-category="all"]').focus();
});
document.querySelector('#clear-search').addEventListener('click', () => {
  searchInput.value = '';
  state.query = '';
  render();
  searchInput.focus();
});
clearActiveSearch.addEventListener('click', () => {
  state.query = '';
  searchInput.value = '';
  render();
  openSearch.focus();
});
openSearch.addEventListener('click', () => {
  searchPanel.hidden = !searchPanel.hidden;
  openSearch.setAttribute('aria-expanded', String(!searchPanel.hidden));
  if (!searchPanel.hidden) searchInput.focus();
});
menuToggle.addEventListener('click', () => {
  mobileMenu.hidden = !mobileMenu.hidden;
  menuToggle.setAttribute('aria-expanded', String(!mobileMenu.hidden));
});
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  if (!searchPanel.hidden) {
    searchPanel.hidden = true;
    openSearch.setAttribute('aria-expanded', 'false');
    openSearch.focus();
  }
  if (!mobileMenu.hidden) {
    closeMenu();
    menuToggle.focus();
  }
});
document.addEventListener('visibilitychange', () => {
  if (document.hidden) stopGallery();
});
reducedMotion.addEventListener('change', stopGallery);

render();
