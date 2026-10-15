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


## Recriação de fotografias — 15/10/2026

- Duas imagens recriadas pelo image_gen integrado com as fotos originais como referência: espetinhos e acompanhamentos. Inspecionadas individualmente antes de aplicar.
- Novos assets WebP de 1200 × 1200 px, com originais preservados. Identificação visual de imagem ilustrativa no início e nos itens do cardápio, alt atualizado e rastreabilidade em `IMAGE_PROMPTS.json`.
- Build, check de links/conteúdo/metadados e sintaxe do script de build aprovados após a troca.
- Início revisto em desktop; viewport de 1440 px sem overflow, foto principal carregada a 1200 px. Em 390 px, imagem ocupa 335 px sem overflow. Cardápio filtrado por Acompanhamentos conferido no celular, recriação visível com aviso e sem sobreposição. Filtro retorna uma opção.
- A foto documental do quiosque não foi recriada. A semelhança comercial de porções/ingredientes precisa ser validada pelo responsável antes da publicação.


## Legibilidade, conteúdo e fogo lateral — 15/10/2026

- Textos principais de 18–20 px; navegação, botões e textos de apoio ampliados. Composição dos produtos centralizada em `src/content.json`, informações de visita/pedido e quatro dúvidas práticas acrescentadas.
- Textura de fogo gerada pelo image_gen integrado, convertida para WebP com transparência e registrada em `IMAGE_PROMPTS.json`. Decoração estática com fade, `aria-hidden` e `pointer-events: none`; opacidade reduzida no celular.
- Início e Cardápio revisados em 390 e 1440 px. Conferências adicionais em 320 px e Início em 768 px. Corrigida expansão dos atalhos do cardápio na tela de 320 px; sem overflow horizontal após a correção.
- Filtro Barcas conferido no celular: duas opções e composição legível. Dúvida sobre as barcas abre pelo teclado (Enter), exibindo a resposta.
- Screenshots finais em `artifacts/refinamento-390-final.jpg` e `artifacts/refinamento-1440-final.jpg`; capturas do cardápio também preservadas em artifacts. Pasta ignorada pelo Git.
- Build e check de conteúdo/links/metadados aprovados. Revisão direta do diff: conteúdo escapado nos templates, decoração fora da árvore acessível, nenhum arquivo de outro site alterado. Console sem erros na consulta efetuada.
- Pendências comerciais anteriores continuam em `CONTENT_TODO.md`; não foram criados horários ou valores fictícios. Nenhuma dependência instalada ou publicação realizada.


## Preparação do GitHub Pages — 15/10/2026

Publicação autorizada pelo usuário com slug `espleo`. Build e check aprovados com `SITE_URL=https://vetezin.github.io` e `SITE_BASE_PATH=/websites/espleo/`. Scripts compartilhados recebem somente a entrada do novo site e a cópia de dist para `espleo/`; o workflow valida links antes do deploy. Demais sites e alterações não commitadas da Volpi preservados. Revisão dos caminhos contra origin/main inclui somente o site, seu registro e a configuração de publicação necessária.


## Efeitos discretos — 15/10/2026

- Efeitos apenas em CSS: fogo respira por opacidade (7 s); fotos ampliam 3,5% dentro do recorte com hover de mouse; botões recebem brilho discreto e pressão ao clicar. Sem novos arquivos JS ou dependências.
- Build e check de conteúdo/links/metadados aprovados. Navegação pelo botão Ver cardápio e filtro Barcas (2 opções) conferidos.
- Início e Cardápio conferidos em 390 e 1440 px, sem overflow horizontal. Transform da foto confirmado em matrix(1.035,0,0,1.035,0,0); moldura com overflow hidden preserva o layout.
- Emulação de movimento reduzido em 390 px via Chrome DevTools: media query ativa, animation-name do fogo none e transições de foto e botão 0s. Sem overflow nessa emulação. Não houve alteração na preferência real do dispositivo.
- Console sem erros na consulta. Capturas `efeitos-inicio-390.jpg`, `efeitos-inicio-1440.jpg`, `efeitos-cardapio-390.jpg` e `efeitos-cardapio-1440.jpg` na pasta ignorada artifacts.
- Revisão do diff restrita a CSS e documentação do site. Atualização validada localmente; nenhuma publicação nova executada nesta etapa.
