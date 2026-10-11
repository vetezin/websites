(() => {
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('#primary-nav');
  if (toggle && nav) {
    toggle.hidden = false;
    document.documentElement.classList.add('nav-enhanced');
    const closeNav = () => {
      toggle.setAttribute('aria-expanded', 'false');
      nav.classList.remove('is-open');
    };
    toggle.addEventListener('click', () => {
      const open = toggle.getAttribute('aria-expanded') !== 'true';
      toggle.setAttribute('aria-expanded', String(open));
      nav.classList.toggle('is-open', open);
    });
    nav.addEventListener('click', (event) => { if (event.target.closest('a')) closeNav(); });
    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeNav(); toggle.focus(); }
    });
    document.addEventListener('click', (event) => { if (!event.target.closest('.header-inner')) closeNav(); });
    matchMedia('(min-width: 901px)').addEventListener('change', closeNav);
  }

  const search = document.querySelector('#menu-query');
  if (!search) return;
  const items = [...document.querySelectorAll('[data-menu-item]')];
  const sections = [...document.querySelectorAll('[data-menu-section]')];
  const normalize = (text) => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR');
  const clear = document.querySelector('#clear-search');
  const empty = document.querySelector('#empty-search');
  const status = document.querySelector('#search-status');
  document.querySelector('.menu-search').hidden = false;
  const filter = () => {
    const query = normalize(search.value.trim());
    let count = 0;
    items.forEach((item) => {
      const match = normalize(item.querySelector('h3').textContent).includes(query);
      item.hidden = !match;
      if (match) count++;
    });
    sections.forEach((section) => { section.hidden = ![...section.querySelectorAll('[data-menu-item]')].some(item => !item.hidden); });
    empty.hidden = count > 0;
    clear.hidden = query.length === 0;
    status.textContent = query ? `${count} ${count === 1 ? 'opção encontrada' : 'opções encontradas'}.` : '';
    document.querySelectorAll('.menu-food-strip').forEach(photo => { photo.hidden = query.length > 0; });
  };
  const reset = () => { search.value = ''; filter(); };
  search.addEventListener('input', filter);
  clear.addEventListener('click', () => { reset(); search.focus(); });
  document.querySelector('[data-reset-search]').addEventListener('click', () => { reset(); search.focus(); });
  const categoryLinks = [...document.querySelectorAll('[data-category-link]')];
  categoryLinks.forEach(link => link.addEventListener('click', reset));
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) if (entry.isIntersecting) {
        categoryLinks.forEach(link => { if (link.dataset.categoryLink === entry.target.id) link.setAttribute('aria-current', 'location'); else link.removeAttribute('aria-current'); });
      }
    }, { rootMargin: '-10% 0px -60% 0px' });
    sections.forEach(section => observer.observe(section));
  }
})();
