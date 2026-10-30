# PH UNITED — plano de implementação

**Objetivo:** criar e validar a frente do catálogo conforme DESIGN_BRIEF.md e a conversa aprovada.
**Arquitetura:** HTML semântico, CSS por tokens/composição, conteúdo e lógica separados em módulos JS. Servidor Node nativo local. Sem dependências novas.
**Spec:** DESIGN_BRIEF.md.

## Restrições globais
Trabalhar na branch phunited e pasta phunited/. Única exceção autorizada: adicionar o novo site aos mapas AGENTS.md e docs/SITE_BRANCHES.md. Preservar checkout original e alterações preexistentes. Não publicar ou fazer push. Cards: foto, nome e preço. Sem páginas internas nesta entrega.

## Revisão prioritária
Filtros combinados e busca sem resultados; teclado e toque sem hover; reduced-motion e timers; falhas de fotos; nenhuma promessa comercial ou dado fictício sem aviso.

## Tarefas
- [x] Isolar worktree e registrar pasta/branch nos mapas.
- [x] Registrar brief, pesquisa, fontes e pendências; stack sem instalação.
- [x] Obter fotos licenciadas e preservar logo original. Subagente de assets.
- [x] Escrever e executar testes iniciais das regras de filtro/ordenação antes da lógica. Subagente de lógica.
- [x] Implementar conteúdo centralizado, lógica de catálogo, galeria automática/swipe e servidor. Subagente de lógica.
- [x] Implementar composição e CSS responsivo. Agente principal.
- [x] Validar testes Node, sintaxe, fluxos Playwright, imagens, console, teclado/reduced-motion e screenshots 390/1440.
- [x] Revisão independente, corrigir achados relevantes e atualizar resultados. Commit local após revisão dos caminhos.

## Progresso
29/10: worktree gerenciado criado em C:/Users/Victor/.codex/worktrees/phunited/Sites; branch phunited. Nenhum arquivo do checkout original alterado. CLI 21st não disponível no PATH; não instalar por ser opcional. Implementação própria baseada na direção aprovada.

29/10: testes de regras RED observado antes da lógica; GREEN 6/6. Primeira rodada de browser 15/15. Usuário corrigiu logo (novo anexo preto em fundo branco) e pediu remoção das setas; aplicado. Revisão independente encontrou foco oculto após categoria mobile e reset do estado vazio; ambos corrigidos com retorno a controles permanentes. Nova rodada de browser cobre os ajustes.

29/10, retomada: arquivo browser-check.mjs encontrado corrompido por bytes nulos após interrupção, recriado. Rodada final: 14 verificações E2E passaram, incluindo ausência de setas, hover/foco automático, reset de foco, filtros/busca/ordenação, swipe horizontal/vertical e clique deliberado após gesto estabilizado. Espera de 500 ms após swipe evita que inércia do gesto seja confundida com um novo toque. Seis testes unitários passaram e checagem de sintaxe passou. Screenshots finais 1440/390 revistos: logo correta, sem setas, duas colunas mobile, sem overflow. Sem Lighthouse nem aparelho físico. Servidor local ativo para revisão do usuário; sem publicação.
