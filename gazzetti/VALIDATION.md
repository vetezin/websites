# Validação — nova composição visual

Revisão de 10/10/2026 após o usuário autorizar repensar a composição. Plano: docs/plans/2026-10-10-direcao-visual.md. Conteúdo de referência: docs/handoff-etapa-05.md. Substitui o relatório da composição anterior, preservado no histórico Git.

## Evidências atuais

- npm run lint: passou. Verifica sintaxe JavaScript e condições básicas de templates, não é lint semântico completo de Astro.
- npm test: 2 testes passaram, comparando copy/metadados integralmente com o handoff e medindo contraste dos tokens efetivos.
- Build local passou; build final com SITE_URL=https://vetezin.github.io e SITE_BASE_PATH=/websites/gazzetti/ passou: 10 páginas estáticas incluindo aliases, privacidade e 404. Sem publicação.
- test/browser-qa.mjs: 140 verificações passaram em desenvolvimento e build estático prefixado: quatro rotas em 320,390,768,1024,1440; imagens, H1, fonte mínima, noindex, overflow, teclado/menu/Escape, âncoras, reduced-motion, ausência de transmissão/armazenamento e aliases.
- test/handoff-browser-qa.mjs: 97 verificações passaram em desenvolvimento e no build final: copy e metadados renderizados, ordem, atividades, destinos, ampliação CSS 200%, menu e formulário sem JavaScript.
- 404 e privacidade adicionalmente verificadas em 320/1440, sem overflow e com composição de leitura isolada por utility-hero.
- 20 capturas do build: artifacts/direction-v2/*.png, quatro páginas nas cinco larguras. Revisadas todas as principais em 390/1440 e amostras 320/768/1024. Porta e placa completas; sem moldura, fundo de foto ou texto sobreposto. Ordem texto/CTA/foto no mobile preservada.
- Console final do build: 0 erros e 0 avisos.
- Revisão independente requesting-code-review: sem achados importantes concretos; não substitui as verificações de navegador feitas pelo agente principal.

## Acessibilidade e movimento

Corpo 18 px; interface/labels 16 px; avisos/legendas mínimo 14 px. Contraste calculado: texto primário/secundário/prata >=4,5:1 sobre navy-base/deep/surface; borda e foco >=3:1. Link ativo sublinhado; foco visível de 3px; alvos de links >=44px. Listas de atividades com role=list para preservar semântica quando list-style:none.

Ampliação CSS 200% não equivale a todas as modalidades de zoom de navegador/tecnologias assistivas. Reflow também testado em 320 px. Leitor de tela não testado manualmente.

Motion restrito a feedback de cores, bordas e setas, 180 ms, sem deslocar layout. Nenhum conteúdo depende de animação ou JS. Prefers-reduced-motion remove transições e smooth scroll. Navegação nativa e conteúdo permanecem disponíveis sem JS.

## Desempenho e limites

PerformanceObserver na Home do build local, viewport390x844, sem limitação artificial de CPU/rede: LCP observado 44ms e CLS 0,0426 até a captura após carregamento/fontes. Medição local, não p75 real ou garantia de desempenho em produção. INP não medido; não há dados CrUX. Nenhuma nova dependência, fonte, requisição externa de conteúdo ou integração foi adicionada.

A nova auditoria Lighthouse não pôde ser concluída: o MCP encerrou/perdeu a sessão do navegador. As notas 100/100/66 da composição anterior não são apresentadas como resultado desta revisão. Não há nota Lighthouse de performance >=90 comprovada. A demonstração permanece noindex por requisito; indexabilidade não é objetivo desta etapa.

## Resultado e pendências

Home com título amplo, fotografia integral maior, apresentação em níveis de leitura e filosofia própria. Escritório com introdução deslocada e equipe aberta; Áreas com capítulos/listas separadas por linhas; Contato com formulário em superfície distinta. Tipografia, navy/prata e marca original sustentam a direção aprovada. A identidade depende da fotografia real e do conteúdo empresarial, sem adicionar símbolos jurídicos, métricas ou alegações fictícias.

Copy, sequência, destinos e campos foram preservados. Equipe/canais continuam pendentes; formulário demonstrativo desabilitado, sem envio/armazenamento/sucesso fictício. Política definitiva pendente. Não há analytics ou publicação nesta revisão. Veja CONTENT_TODO.md.
