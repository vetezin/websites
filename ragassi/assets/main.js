const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.main-nav');
const mobile = window.matchMedia('(max-width: 700px)');

if (toggle && navigation) {
  toggle.hidden = false;
  const closeMenu = (returnFocus = false) => {
    toggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
    navigation.hidden = mobile.matches;
    if (returnFocus) toggle.focus();
  };
  toggle.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    toggle.setAttribute('aria-expanded', String(open));
    navigation.classList.toggle('is-open', open);
    navigation.hidden = !open && mobile.matches;
  });
  navigation.addEventListener('click', event => {
    if (event.target.closest('a') && mobile.matches) closeMenu(true);
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') closeMenu(true);
  });
  mobile.addEventListener('change', () => closeMenu());
  closeMenu();
}
