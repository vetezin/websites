# Validação — revisão de catálogo em 12/10/2026

- 4/4 testes unitários de busca e filtro.
- 10/10 cenários Playwright com Chrome isolado: nove produtos, duas lojas, imagens carregadas, busca sem acentos, filtro combinado, estado vazio, limpar, modal pelo teclado, Escape, retorno de foco, detalhes ampliados, fonte e largura do catálogo, filtros à esquerda, ausência de avisos de protótipo e de estoque inventado, links de rota, consulta específica por WhatsApp, telefone, menu mobile, movimento reduzido e ausência de overflow.
- Nenhum erro de console, execução ou requisição observado.
- Capturas em 1440 px e 390 px, incluindo modal, revisadas visualmente. Desktop com catálogo amplo e navegação lateral; mobile com produtos em uma coluna e departamentos roláveis.
- Revisão local: conteúdo inserido com textContent; apenas ícones fixos usam HTML. Links externos com noopener. Sem nova dependência, formulário de coleta ou persistência.
- Tipografia de conteúdo ampliada e foto principal em destaque. Identidade amarela e preta preservada; imagens de referência sem ofertas antigas.
- Limitações: sem auditoria Lighthouse e sem build/lint configurados. Validação local não confirma direitos das fotos, estoque, especificações nem horários. Conferir CONTENT_TODO.md antes de publicar.
- Sintaxe verificada em app.js, catalog.js, data/content.js, serve.mjs e teste do navegador.
- Git: apenas arquivos da pasta eletrosevero; sem merge ou push.
