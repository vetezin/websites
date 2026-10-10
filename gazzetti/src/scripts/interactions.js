const menu = document.querySelector('.mobile-navigation');
if (menu) {
 const toggle = menu.querySelector('summary');
 const sync = () => toggle.setAttribute('aria-expanded', String(menu.open));
 sync();
 menu.addEventListener('toggle', sync);
 document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu.open) { menu.open = false; toggle.focus(); }
 });
 menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { menu.open = false; }));
 const wideScreen = window.matchMedia('(min-width: 1024px)');
 wideScreen.addEventListener('change', event => { if (event.matches) menu.open = false; });
}
// A demonstração não transmite, persiste ou simula recebimento de dados.
// method="dialog" e botão disabled também impedem envio sem JavaScript.
document.querySelector('[data-demo-form]')?.addEventListener('submit', event => event.preventDefault());
