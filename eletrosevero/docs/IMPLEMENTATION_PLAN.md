# Plano de implementação — catálogo Eletro Severo

Objetivo: protótipo local em HTML/CSS/JavaScript com apresentação, catálogo, contatos e duas lojas. Brief: ../DESIGN_BRIEF.md. Execução na própria sessão, sem dependências instaladas.

## Escopo e decisões
- Somente eletrosevero/ na branch eletrosevero.
- 12 itens MOCK; ilustrações locais de produtos; campos de disponibilidade preparados para futura edição, sem painel ou backend.
- Sem preços inventados: consultar preço. Horários de exemplo identificados por unidade.
- Endereços e WhatsApp provêm da coleta; funcionamento das duas lojas confirmado pelo usuário.
- Sem publicação, analytics, cookies ou envio de formulários.

## Arquivos
- index.html: estrutura semântica, metadados e diálogo de produto.
- styles.css: tokens, identidade e composições desktop/mobile.
- data/content.js: empresa, lojas, categorias e produtos; todo conteúdo proposto identificado.
- catalog.js: busca com normalização de acentos e filtro por categoria.
- app.js: renderização segura, navegação mobile e diálogo acessível.
- assets/products/*.svg: ilustrações vetoriais locais identificadas como exemplo.
- serve.mjs: preview local sem dependências, limitado à pasta do site.
- tests/catalog.test.mjs: buscas, filtros combinados e itens indisponíveis.
- CONTENT_TODO.md e README.md: substituições e execução.

## Tarefas
- [x] Testar busca com acentos, múltiplos termos, filtro combinado e preservação de indisponíveis; observar falha antes de implementar.
- [x] Implementar dados, filtro e interface usando tokens do brief.
- [x] Criar ilustrações e documentação de mocks; conferir links e metadados.
- [x] Rodar testes Node e checks de sintaxe; verificar no navegador filtros, vazio, modal, Escape, foco e mobile.
- [x] Capturar/revisar 390 px e 1440 px; conferir console e overflow; revisão final e commit somente dos caminhos autorizados.

## Pontos de revisão
Busca com acentos ou espaços não deve perder itens. Filtros devem combinar com a busca. Indisponível não pode sugerir estoque confirmado. MOCK não deve virar pedido real. O diálogo precisa devolver o foco ao produto e permitir leitura/fechamento no celular.

## Registro de execução
- Isolamento: worktree gerenciado, branch eletrosevero, escopo exclusivo da pasta eletrosevero/.
- RED: testes de busca falharam por ausência de catalog.js; GREEN: 4/4 após implementação.
- Testes do navegador: 9/9 em Chrome headless isolado usando Playwright instalado. Capturas 390/1440 revisadas.
- Ajuste de validação: percorre imagens lazy antes de conferir carregamento; ausência inicial fora da viewport não era erro de asset.
- Revisão independente: sem P1/P2; corrigido conteúdo de bloco dentro de button, mantendo o título como irmão semântico do botão que cobre o item.
- Sem instalação, publicação, merge ou push. Backend e gestão de estoque fora desta entrega.
