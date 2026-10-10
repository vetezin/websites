# Validação — reformulação Etapa 05

Executada em 10/10/2026 sobre o handoff docs/handoff-etapa-05.md. Substitui as evidências do protótipo anterior.

## Resultados

- npm run lint: passou (sintaxe JS e verificações básicas de templates; não é lint semântico completo de Astro).
- npm test: 2 testes passaram. Contrato de copy integral e metadados comparado ao handoff; contraste dos tokens efetivamente utilizados.
- npm run build: passou; 10 páginas estáticas incluindo quatro aliases, privacidade e 404. Rotas antigas equivalentes têm refresh no head, canonical e link; não são HTTP 301.
- Build com SITE_URL=https://vetezin.github.io e SITE_BASE_PATH=/websites/gazzetti/: passou, servido localmente na porta 4333. Sem push ou implantação.
- Playwright test/browser-qa.mjs: 140 verificações passaram em desenvolvimento e no build sob prefixo Pages: quatro rotas em cinco larguras, H1, imagens principais, legibilidade mínima, noindex, overflow, menu por teclado, Escape e foco, navegação, âncoras, movimento reduzido, formulário desabilitado, ausência de transmissão/armazenamento, aliases e pular conteúdo.
- Playwright test/handoff-browser-qa.mjs: 97 verificações passaram em desenvolvimento e no build Pages: copy renderizado, ordem de títulos/parágrafos, atividades, metadados, destinos, ampliação CSS 200%, menu e formulário sem JavaScript.
- A ampliação CSS não equivale à medição de todas as modalidades de zoom de navegador/tecnologia assistiva. Reflow adicional validado em 320 px.
- 20 capturas finais: quatro páginas em 320, 390, 768, 1024 e 1440 px, artifacts/handoff/*.png. Revisão visual: hierarquia, texto integral, contornos, quebra de títulos, ordem mobile, preservação da porta e placa. A moldura foi ajustada de 4:5 para 4:3 no desktop para reduzir faixas vazias sem cortar a foto. Grid corrigido após extravasamento em ampliação de 200%.
- Console final do build: 0 erros e 0 avisos.
- Revisão independente pela skill requesting-code-review: sem bloqueadores de funcionalidade/segurança. Pendência documental apontada foi corrigida nesta revisão.

## Lighthouse e desempenho

Lighthouse mobile na Home do build local: acessibilidade 100, boas práticas 100, SEO 66, agentic browsing 100. Única auditoria reprovada: is-crawlable, devido ao noindex exigido para a demonstração. Relatório local em artifacts/handoff/lighthouse-home-mobile.json. Essas notas não foram medidas nas demais páginas.

Trace Chrome DevTools na Home estática, CPU 1x e sem limitação de rede: LCP 86 ms e CLS 0,00. Medição laboratorial local, não desempenho em produção, p75 real ou garantia de metas. INP não medido; não há dados CrUX. O Lighthouse disponível nesta sessão não audita performance; não há nota de performance Lighthouse ≥90 comprovada. Cache/compressão e latência dependem do host de produção.

## Contraste calculado

Texto primário, secundário e prata: ao menos 4,5:1 sobre navy-base/deep/surface. Contorno de controle e foco: ao menos 3:1 nessas superfícies. Botão prata/navy-deep: ao menos 4,5:1. Linhas decorativas não delimitam controles e não são consideradas texto ou foco.

## Especificidade e limites

O site explica as três frentes aprovadas, com navegação para sua leitura integral. A foto real, marca original e copy empresarial sustentam o contexto Gazzetti; não há estatísticas, promessas, símbolos jurídicos ou profissionais fictícios. A composição atende ao handoff e ao mobile. O contato permanece uma demonstração porque os canais e a integração aguardam validação.

Fontes Newsreader/Manrope mantidas como escolha técnica dentro das sugestões do handoff. IMG_6015.jpeg não acompanhou o anexo; tokens fornecidos usados como referência provisória. Conteúdo institucional ainda depende de confirmação do escritório. Privacidade complementar pendente; nenhuma política jurídica foi inventada. Consulte CONTENT_TODO.md.

/uteis/ foi aposentada e não está na navegação. O servidor de validação retorna 404 para caminhos inexistentes. GitHub Pages utiliza o 404 do domínio/repositório; uma experiência 404 específica sob subdiretório depende da configuração da publicação, fora desta tarefa.

Sem analytics, serviço externo, envio ou armazenamento no formulário. Arquivos de imagem fictícios antigos permanecem sem referência na interface, recuperáveis no histórico do protótipo; nenhum retrato é apresentado como profissional real.
