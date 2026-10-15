# Validação — 15/10/2026

## Engenharia
- `npm test`: 5 testes passaram. Os quatro contratos iniciais foram executados antes da implementação e falharam pela ausência dos módulos; depois passaram.
- Contratos: HTML útil sem JS, contato, assets em subdiretório, escape de conteúdo, validação do base path e HTTP 404 para diretório sem index.
- `npm run lint`: sintaxe de 6 arquivos JS verificada por Node; sete pares de contraste AA passaram (menor razão 5,76:1). Não é um lint de estilo com ESLint nem uma validação formal de todo HTML/CSS.
- `npm run build`: saída estática em dist/. Sem instalação de dependências.
- `git diff --check`: sem erros de whitespace.

## Navegador
21 checks Playwright passaram: menu mobile visível e inicialmente fechado; abertura e aria-expanded; Escape/retorno de foco; fechamento ao navegar e âncora; ausência de overflow em 390 e 1440px; links WhatsApp e telefone; navegação após resize; imagens carregadas; destinos das âncoras; navegação, seis serviços e contato com JavaScript desabilitado; 404; proteção contra acesso aos fontes; console e execução sem erros.

Capturas revisadas: qa/mobile-390.png e qa/desktop-1440.png (ignoradas pelo Git). Texto, recortes de fotos, espaçamento e contraste coerentes com a direção aprovada. Não foram enviados contatos ou mensagens externas.

## Auditorias
Lighthouse mobile por Chrome DevTools, http://127.0.0.1:4326/:
- Acessibilidade: 100.
- Boas práticas: 100.
- SEO: 66, com uma única falha: bloqueio intencional de indexação da demonstração via noindex/nofollow.
- Agentic Browsing: 100.

Trace local com cache desconsiderado, CPU 1x e sem limitação de rede: LCP 93ms, CLS 0,00. Esses números são de laboratório local; não são métricas de usuários reais nem promessa em rede móvel. A ferramenta Lighthouse usada não mede a nota de performance, que não foi atribuída.

## Revisão independente
Subagente de requesting-code-review revisou brief, plano, código e contratos. Um achado P3: o servidor emitia 200 antes da leitura do arquivo, inclusive quando assets/index.html não existia. Um teste real reproduziu 200 em vez de 404; a leitura agora precede o cabeçalho e a suite final passou 5/5.
Direitos das fotos e atualidade dos dados dependem do cliente. O revisor não repetiu os fluxos visuais por restrição de acesso ao navegador; os checks acima foram feitos pelo implementador.

## Especificidade e limites
Oficina e conversão claras; identidade derivada da fachada azul; fotos reais de manutenção e fachada contextualizam o lugar. Serviços em linhas e navegação convencional mantêm a proposta simples, sem efeitos futuristas ou cards decorativos.
Copy editorial proposto está centralizado e marcado MOCK. Endereço completo, horários, logo original e autorização das fotos permanecem em CONTENT_TODO.md. Demonstração não publicada.
21st CLI não estava disponível; nenhuma instalação foi feita. Frontend implementado diretamente conforme stack aprovada. Não há Spec Kit ou CodeGraph neste repositório.
Mudanças compartilhadas restritas às linhas de cadastro nos dois mapas autorizados; nenhum script, workflow ou site existente foi alterado.

## Revisão 2 — serviços, ícones e logo transparente

- `npm test`: 6/6 passaram, incluindo os seis links WhatsApp com assunto específico. O contrato novo foi observado em RED antes da implementação e em GREEN depois.
- `npm run lint`: sintaxe de 7 arquivos e os mesmos sete pares de contraste AA passaram; `npm run build` passou.
- 30 checks Playwright passaram: menu e teclado, seis serviços com assunto e telefone corretos, áreas de toque, nove links WhatsApp, telefone, SVGs decorativos, âncoras, imagens, ausência de overflow em 320/390/768/1440px, resize, reduced motion, navegação sem JavaScript e console limpo.
- Capturas finais `qa/desktop-v2-1440.png` e `qa/mobile-v2-390.png` revisadas. Abertura central, serviços prioritários, ícones discretos e fotos de apoio coerentes com o brief. Ajustado o balanceamento do título para evitar palavra isolada no desktop.
- Logo adaptado com ImageGen; PNG mestre preservado e WebP de entrega com 476×207px e 40.698 bytes. Canal alpha inspecionado: cantos transparentes e 63.243 pixels totalmente transparentes; integração visual sem retângulo preto conferida nas capturas. Prompt e modo em LOGO_PROMPT.md.
- Lighthouse encontrou nomes acessíveis que omitiam a descrição visível dos serviços. O teste por nome acessível reproduziu a falha (RED); removido o aria-label substitutivo e incluído contexto visualmente oculto. Teste GREEN para os seis links, suite e build repetidos com sucesso.
- Auditoria mobile final: Acessibilidade 100, Boas práticas 100, Agentic Browsing 100 e SEO 66. Única falha restante: indexação bloqueada intencionalmente na demonstração.
- Trace da revisão 2, cache desconsiderado, CPU 1x e sem limitação de rede: LCP 78ms e CLS 0,00. Resultado de laboratório local; nota Lighthouse de performance não medida.
- Revisão independente da segunda iteração sem achados relevantes: contratos WhatsApp, escape, assets em subdiretório, ícones e preservação do menu conferidos. A correção posterior de nome acessível foi validada por regressão no navegador e auditoria.
- Prévia atualizada no navegador integrado. Nenhuma mensagem externa enviada, publicação, push ou merge realizados. Pendências de conteúdo em CONTENT_TODO.md permanecem para publicação.
