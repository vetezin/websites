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

## Rodada de melhorias e mídia autorizada

- `npm.cmd test`: 6/6; `npm.cmd run check`: passou após mudanças.
- E2E final com novo catálogo: 17/17. Busca oliva encontra Calça cargo oliva; chip persiste após fechar, limpar preserva categoria/ordem/foco; imagens alternativas sem requisição inicial.
- Responsividade em320/390/768/820/1024/1440: sem overflow horizontal; três colunas em768/820, duas no celular. Primeira foto antes de440px nas larguras320/390 (antes612/533px). Nome>=13px e preço>=14px no mobile.
- Categorias atuais: camisetas3, short1, calças2, tênis2. Navegação e filtros sincronizados. Carrossel automático sem setas, swipe e reduced-motion preservados.
- 16 WebPs gerados autorizados,900×1125, total591.990bytes; pares e contact sheet inspecionados. A vista alternativa do short é muito similar, sem alegação de costas verificadas.
- Screenshots desktop/mobile/tablet revistos após integrar mídia: fotos mais uniformes, preços alinhados e hierarquia legível. Nenhuma sobreposição do cabeçalho observada no tablet.
- Revisão independente dos ajustes de comportamento/CSS: nenhum defeito importante apontado. Arquivos compartilhados dos mapas permaneceram intocados nesta rodada.

## Revisão de copy solicitada

Interface, alt text, rótulos acessíveis, metadados e schema revisados para linguagem da marca, sem referências de demonstração. Mensagem de clique agora orienta hover/swipe para outra vista, sem prometer compra ou página interna. Marcadores de origem/MOCK preservados apenas nos dados e documentos internos. Teste E2E de ausência de referências públicas adicionado; suíte de regras6/6 e sintaxe aprovadas. Sem publicação.

## Contato e interesse por peça
Dois novos testes de URL/mensagem falharam antes da implementação e passaram depois. Total8/8 testes de regras; sintaxe passou. E2E verifica contato com logo, número fornecido, oito CTAs e mensagens exatas com nome/BRL, além dos fluxos existentes. Nenhuma mensagem enviada. Screenshots desktop/mobile atualizados para revisão do contato e CTAs.

## Acabamento mobile e descrições

Oito descrições visuais acrescentadas, centralizadas em content.js. Nomes, descrições e preços sem recortes de texto; cards com altura uniforme por linha. Em320px, CTA ajustado para caber em uma linha mantendo altura44px. Busca com botão Fechar, foco restaurado, exclusividade com menu e contato oculto enquanto os painéis estão abertos. Fotografias mobile em4:5.

Testes de regras8/8 e sintaxe passaram. E2E ampliado verifica descrições,44px nos controles de toque e nove larguras:320/360/390/430/600/768/820/1024/1440, sem overflow. Screenshot320/menu/busca revistos; identificada e corrigida quebra do CTA na menor largura. Revisão independente do diff não apontou regressões importantes. Mobile emulado; aparelho físico e Lighthouse não avaliados.

Última execução após ajuste do CTA:22/22E2E aprovados, incluindo texto do botão em uma linha. Duas tentativas anteriores expiraram no teste desktop de hover já existente (limite3s); não houve aumento de timeout nem alteração do carrossel para ocultar falha. Diagnóstico de DOM adicionado somente em caso de falha; a última suíte passou sem diagnóstico acionado. Causa da intermitência não confirmada; acompanhar em futuras mudanças do carrossel.
