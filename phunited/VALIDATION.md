# Validação — PH UNITED

29/10/2026. Branch phunited; implementação local sem instalação de dependências.

- `npm.cmd test`: 6 testes de regras passaram; filtro combinado, busca sem acento, espaço em branco, ordenação numérica sem mutação, resultado vazio e BRL.
- `npm.cmd run check`: sintaxe dos módulos e servidor válida.
- `node tests/browser-check.mjs`: 14 verificações passaram em Playwright com Chrome instalado. Desktop 1440×1000; mobile emulado 390×844.
- Galeria automática no hover/foco; sem setas ou seleção manual; reset ao sair e reduced-motion sem troca automática.
- Toque: swipe horizontal muda detalhe, vertical preserva; clique deliberado após gesto estabilizado funciona sem abrir página inexistente.
- Busca/categorias/ordenação, resultado vazio, limpeza e foco acessível verificados.
- Imagens carregadas; sem erros de console/JS ou HTTP falho. Sem overflow horizontal. Screenshots em artifacts/desktop.png, artifacts/mobile.png e artifacts/preview.png (ignorados no Git).
- Revisão independente encontrou dois problemas de foco oculto (menu mobile e reset); corrigidos e cobertos no E2E final.
- Revisão visual final: catálogo na primeira tela, cards restritos a foto/nome/preço, logo original corrigida, hierarquia e recortes conferidos. Fotos de apoio têm fundos distintos; unificar fotografia com o estoque real melhorará a consistência.
- Sem build: HTML/CSS/JS nativos. Sem lint configurado; check verifica sintaxe, não equivale a lint.
- SEO de protótipo: title/description/OG/lang/favicon/schema/robots presentes; noindex intencional. Domínio, URLs absolutas de publicação e sitemap final dependem do domínio real.

Limites: não medidos Lighthouse/Core Web Vitals, não testado em aparelho físico. Sem páginas internas, checkout, estoque ou publicação. Produtos e preços permanecem MOCK.
