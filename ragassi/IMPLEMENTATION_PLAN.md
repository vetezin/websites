# Ragassi — plano de implementação

**Goal:** apresentação estática simples com navy/grafite, fotos reais e contato direto.
**Architecture:** content.mjs + template HTML gerado por Node nativo; CSS/JS pequenos; dist/ ignorado; nenhum pacote externo.
**Tech Stack:** HTML, CSS, JavaScript; Node somente para build, verificações e servidor.
**Spec:** DESIGN_BRIEF.md e direção/stack aprovadas na conversa.

## Restrições
Branch ragassi; somente ragassi/ e os dois mapas autorizados. Sem instalar pacotes ou publicar.

## Tarefas
- [x] 1. Registrar mapas, documentar decisões e preparar fotos locais.
- [x] 2. Testar contratos da saída: contato, conteúdo sem JS, assets, subdiretório e escape; executar RED antes do build.
- [x] 3. Implementar conteúdo, gerador HTML, CSS, menu mobile, servidor e metadados demonstrativos.
- [x] 4. Testes, build e checks; Playwright 390/1440px, teclado, menu, links, sem JS e console; revisar screenshots.
- [x] 5. Revisão final independente conforme requesting-code-review, correções relevantes e validação. Commit local após revisão de caminhos.

## Review Focus
Contato funciona sem JS; menu fecha com Escape/links e responde ao resize; assets funcionam em /websites/ragassi/; conteúdo é escapado; endereço/horário incertos não viram fatos no schema.

## Registro de execução
Execução direta nesta sessão, preservando aprovações anteriores, com uma revisão final independente.
Baseline: site novo sem suite anterior; worktree de main 64ef9e6, sem mudanças pendentes da Volpi.
Pre-flight: content.mjs → build.mjs → HTML/assets. Testes verificam a saída real, não strings de implementação.
Revisão independente: um P3 no servidor local (cabeçalho 200 antes da leitura); reproduzido com teste HTTP RED e corrigido. Suite final 5/5.
Detalhes das evidências e limitações em docs/VALIDATION.md.
