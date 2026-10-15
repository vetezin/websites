# Validação — 15/10/2026

- `node scripts/build.mjs`: aprovado.
- `node scripts/check.mjs`: aprovado; conteúdo, IDs, links locais, preços ausentes, categorias, metadados e JSON-LD.
- Build e check com `SITE_URL=https://example.com` (domínio de teste, não publicado) e `SITE_BASE_PATH=/espetinhodoleo`: aprovados; build final restaurado para prévia sem domínio.
- Servidor de subdiretório: HTTP 200 para `/espetinhodoleo/index.html` e `/espetinhodoleo/assets/style.css`.
- Sintaxe Node dos scripts e JavaScript verificada. Nenhum linter ou pacote adicional instalado.
- Navegador via Playwright do navegador integrado: Início e Cardápio revisados em 390 px e 1440 px, sem overflow horizontal nem imagens quebradas.
- Filtros: Barcas mostra 2 opções; Espetinhos e Acompanhamentos mostram 1 opção cada; Tudo restaura 4. Estado aria-pressed e contador aria-live conferidos.
- Navegação por teclado: Tab alcança os filtros; foco visível. Links diretos para produtos e acesso ao quiosque conferidos.
- Console da prévia sem erros na consulta realizada.
- Fotos em WebP; assets públicos somam aproximadamente 316 KB, sem fontes, analytics ou bibliotecas externas carregadas pela página.
- Lighthouse e Core Web Vitals não medidos: ferramenta indisponível; não se declara pontuação de performance.
- Revisão independente encontrou e orientou correção de caminhos de subdiretório e fatos duplicados nos templates. As três correções foram aplicadas e os checks pertinentes repetidos.
- Sem cadastro, formulário, armazenamento de dados ou cookies no site. Links externos usam noopener/noreferrer.
- Contraste calculado (WCAG): {"principal": 19.12, "secundário": 10.2, "botão principal": 5.57, "fogo": 9.48, "texto sobre vermelho profundo": 8.97, "texto secundário sobre vermelho profundo": 6.09}. Não substitui auditoria completa de acessibilidade.

## Especificidade

Comida, barcas e quiosque G comunicam o negócio e orientam visita/pedido. Logo e foto do ponto físico preservam reconhecimento. Paleta vermelha/preta e display condensado continuam a direção solicitada para o Léo. Estrutura curta, sem depoimentos genéricos ou estatísticas fictícias. Fotos e layout mobile revisados; a barca pequena usa tratamento tipográfico até haver foto original adequada.

## Pendências

`CONTENT_TODO.md` reúne horários, preços, sabores/composições, fotos/autorizações e domínio. A barca adaptada é imagem MOCK identificada. Nada publicado ou enviado ao cliente. Scripts de publicação conjunta do repositório não foram alterados.
