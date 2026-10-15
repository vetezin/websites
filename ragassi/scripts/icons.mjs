// Ícones vetoriais locais para interface; nenhuma biblioteca ou requisição externa.
const paths = {
  whatsapp: '<path d="M21 11.5a9 9 0 0 1-13.1 8L3 21l1.5-4.9A9 9 0 1 1 21 11.5Z"/><path d="M8 7.5c-.8.2-1 1-.8 2 .7 3.2 3.1 5.6 6.3 6.3 1 .2 1.8 0 2-.8l.4-1.3-2.8-1.2-.8 1c-1.4-.6-2.5-1.7-3.1-3.1l1-.8L9 7.2Z"/>',
  phone: '<path d="m8 3 2.3 5-2 1.5a15 15 0 0 0 6.2 6.2l1.5-2L21 16v3a2 2 0 0 1-2.2 2A19 19 0 0 1 3 5.2 2 2 0 0 1 5 3Z"/>',
  pin: '<path d="M20 10c0 5.3-8 11-8 11S4 15.3 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
  arrow: '<path d="M5 19 19 5M5 5h14v14"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  motor: '<path d="M7 7h10l3 4v7H7l-3-4V9h3ZM10 4h5M12.5 4v3M1 10v6M1 13h3M20 11h3v6h-3"/><path d="M11 11h5v3"/>',
  injection: '<path d="m12 2 4 4-2 2 3 3-6 6-3-3-2 2-4-4 2-2 3 3 6-6-3-3Z"/><path d="m15 13 6 6M17 17l-2 2M19 15l2-2M10 18l-2 3"/>',
  clutch: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="3"/><path d="M12 3.5v3M12 17.5v3M3.5 12h3M17.5 12h3M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2"/>',
  oil: '<path d="M3 10h9l3 3 5-3 2 3-8 6H3ZM6 10V6h5v4M2 6h4"/><path d="M20 16s-2 2.5-2 3.5a2 2 0 0 0 4 0c0-1-2-3.5-2-3.5Z"/>',
  suspension: '<path d="M9 2h6M12 2v4M8 6h8l-8 4 8 4-8 4h8M12 18v4M9 22h6"/>',
  brakes: '<path d="M17.5 5a9 9 0 1 0 0 14"/><circle cx="10" cy="12" r="2.5"/><path d="M17 6h4v12h-4ZM10 5v1M10 18v1M3 12h1M5 7l1 1M5 17l1-1"/>',
};

export function renderIcon(name) {
  if (!Object.hasOwn(paths,name)) throw new Error(`Unknown interface icon: ${name}`);
  return `<svg class="icon" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${paths[name]}</svg>`;
}
