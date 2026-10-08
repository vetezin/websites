/** Prepara um rascunho sem transmitir dados nem afirmar que houve envio. */
export function createMailto({ name, email, company = '', subject, message }, recipient) {
  const body = `Nome: ${name.trim()}\nE-mail: ${email.trim()}\nEmpresa: ${company.trim() || 'Não informada'}\n\n${message.trim()}`;
  return `mailto:${recipient}?subject=${encodeURIComponent(`[Contato pelo site] ${subject}`)}&body=${encodeURIComponent(body)}`;
}

export function normalizeSearch(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLocaleLowerCase('pt-BR').trim();
}
