import { createMailto, normalizeSearch } from '../data/contact.js';

const menu = document.querySelector('.menu-toggle');
const mobileNavigation = document.querySelector('.mobile-navigation');
const navigation = document.querySelector('#navigation');

function closeMenu() {
  if (mobileNavigation instanceof HTMLDetailsElement) mobileNavigation.open = false;
  menu?.setAttribute('aria-label', 'Abrir menu');
}

mobileNavigation?.addEventListener('toggle', () => {
  menu?.setAttribute('aria-label', mobileNavigation.open ? 'Fechar menu' : 'Abrir menu');
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && mobileNavigation?.open) {
    closeMenu();
    menu.focus();
  }
});
document.addEventListener('click', event => {
  if (event.target instanceof Element && !event.target.closest('.site-header')) closeMenu();
});
navigation?.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
matchMedia('(min-width: 901px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});

// O conteúdo permanece visível sem JavaScript; a animação começa apenas ao entrar na tela.
const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
reducedMotion.addEventListener('change', event => {
  if (event.matches) document.getAnimations().forEach(animation => animation.cancel());
});
if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.animate([
        { opacity: 0, transform: 'translateY(14px)' },
        { opacity: 1, transform: 'translateY(0)' },
      ], { duration: 650, easing: 'cubic-bezier(.2,.65,.3,1)' });
      observer.unobserve(entry.target);
    });
  }, { threshold: .08 });
  document.querySelectorAll('[data-reveal]').forEach(element => observer.observe(element));
}

document.querySelectorAll('[data-profile]').forEach(button => {
  button.addEventListener('click', () => {
    const dialog = document.querySelector(`#profile-${button.dataset.profile}`);
    if (!(dialog instanceof HTMLDialogElement)) return;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    dialog.querySelector('[data-close]')?.focus();
    dialog.addEventListener('close', () => {
      document.body.style.overflow = '';
      button.focus();
    }, { once: true });
  });
});
document.querySelectorAll('.profile-dialog').forEach(dialog => {
  dialog.querySelector('[data-close]')?.addEventListener('click', () => dialog.close());
  dialog.addEventListener('keydown', event => {
    if (event.key !== 'Tab') return;
    const controls = [...dialog.querySelectorAll('button, a[href], input, select, textarea, [tabindex="0"]')]
      .filter(element => !element.disabled && element.getClientRects().length);
    const first = controls[0];
    const last = controls.at(-1);
    if ((!event.shiftKey && document.activeElement === last) || (event.shiftKey && document.activeElement === first)) {
      event.preventDefault();
      (event.shiftKey ? last : first)?.focus();
    }
  });
  dialog.addEventListener('click', event => {
    if (event.target !== dialog) return;
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  });
});

const search = document.querySelector('#resource-search');
const filters = document.querySelectorAll('button[data-category]');
const resources = document.querySelectorAll('[data-resource]');
let selectedCategory = 'Todos';

function filterResources() {
  const term = normalizeSearch(search?.value || '');
  let count = 0;
  resources.forEach(resource => {
    const matches = (selectedCategory === 'Todos' || resource.dataset.category === selectedCategory)
      && normalizeSearch(resource.dataset.search || '').includes(term);
    resource.hidden = !matches;
    if (matches) count++;
  });
  const counter = document.querySelector('[data-resource-count]');
  if (counter) counter.textContent = String(count);
  const empty = document.querySelector('.empty-results');
  if (empty) empty.hidden = count > 0;
}

search?.addEventListener('input', filterResources);
filters.forEach(button => button.addEventListener('click', () => {
  selectedCategory = button.dataset.category;
  filters.forEach(filter => filter.setAttribute('aria-pressed', String(filter === button)));
  filterResources();
}));
document.querySelector('[data-reset-search]')?.addEventListener('click', () => {
  if (search) search.value = '';
  selectedCategory = 'Todos';
  filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.category === 'Todos')));
  filterResources();
  search?.focus();
});

const form = document.querySelector('#contact-form');
if (form instanceof HTMLFormElement) {
  const area = new URLSearchParams(location.search).get('area');
  const subject = form.querySelector('#subject');
  const option = [...subject.options].find(option => option.dataset.area === area);
  if (option) subject.value = option.value;
  form.addEventListener('input', () => {
    const result = form.querySelector('.form-result');
    if (result) result.hidden = true;
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form));
    const link = form.querySelector('[data-mailto]');
    link.href = createMailto(data, form.dataset.recipient);
    const result = form.querySelector('.form-result');
    result.hidden = false;
    result.focus({ preventScroll: true });
    result.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'nearest' });
  });
  form.querySelector('[data-prepare]').disabled = false;
}
