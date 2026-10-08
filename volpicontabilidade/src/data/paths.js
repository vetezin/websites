/** Prefixa rotas e arquivos locais para desenvolvimento ou GitHub Pages. */
export function withBase(path, base = import.meta.env?.BASE_URL || '/') {
  return `${base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}
