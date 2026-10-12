# Validação — revisão de catálogo em 12/10/2026

- 4/4 testes unitários de busca e filtro.
- 14/14 cenários Playwright com Chrome isolado: nove produtos, duas lojas, imagens carregadas, busca sem acentos, filtro combinado, estado vazio, limpar, modal pelo teclado, Escape, retorno de foco, detalhes ampliados, fonte e largura do catálogo, filtros à esquerda, ausência de avisos de protótipo e de estoque inventado, links de rota, consulta específica por WhatsApp, telefone, menu mobile, movimento reduzido e ausência de overflow.
- Nenhum erro de console, execução ou requisição observado.
- Capturas em 1440 px e 390 px, incluindo modal, revisadas visualmente. Desktop com catálogo amplo e navegação lateral; mobile com produtos em uma coluna e departamentos roláveis.
- Revisão local: conteúdo inserido com textContent; apenas ícones fixos usam HTML. Links externos com noopener. Sem nova dependência, formulário de coleta ou persistência.
- Tipografia de conteúdo ampliada e foto principal em destaque. Identidade amarela e preta preservada; imagens de referência sem ofertas antigas.
- Limitações: sem auditoria Lighthouse e sem build/lint configurados. Validação local não confirma direitos das fotos, estoque, especificações nem horários. Conferir CONTENT_TODO.md antes de publicar.
- Sintaxe verificada em app.js, catalog.js, data/content.js, serve.mjs e teste do navegador.
- Git: apenas arquivos da pasta eletrosevero; sem merge ou push.

## Ajuste de modal e cabeçalho

- Modal ampliado de 1180 para 1280 px, com aplicações e ficha técnica lado a lado. Nove produtos testados sem rolagem interna em 1440 × 900 e 1366 × 768; ação de contato visível. Em telas menores a rolagem é preservada para acesso ao conteúdo completo.
- Abertura reinicia a posição de rolagem; fechamento, Escape e retorno de foco permanecem funcionais.
- Visite nossas lojas destacado no cabeçalho, apontando para as duas unidades. Visível no celular com menu fechado.
- Revisados screenshots de modal e início; sem erros de console ou overflow. CSS anterior do modal consolidado para evitar regras conflitantes.

## Limpeza de referências na interface

Links de fonte e avisos de fotos de referência removidos do catálogo e do modal. Texto alternativo descreve somente o produto. Origem das imagens preservada na documentação interna. Consulta de preço/modelos e identificação das fichas fictícias permanecem. Os 13 cenários de navegador passaram novamente; captura do modal revisada.

## Cabeçalho centralizado e atalhos

- Grupo principal centralizado no desktop independentemente dos atalhos à direita. Ícone de WhatsApp inserido no contato, preservando a seta.
- Instagram aponta ao perfil da empresa. Maps usa a mesma consulta da unidade do Centro (Rua Fernando Costa, 168), definida em data/content.js. Nomes acessíveis e foco visível nos links.
- Conferidos 1440, 1280, 1100, 768 e 390 px: sem overflow e sem sobreposição; atalhos e visita às lojas continuam visíveis. Menu recolhido até 1100 px, fechamento ao retornar ao desktop.
- 14 cenários Playwright aprovados, console sem erros e screenshots do cabeçalho desktop/mobile revisados.
