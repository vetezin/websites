# Validação — 08/10/2026

Build de produção servido em `http://localhost:4322/` e validado com o MCP Playwright.

## Comandos

- `npm test`: 4 testes aprovados (codificação do e-mail, campos opcionais, busca e contraste dos tokens).
- `npm run lint`: aprovado; verifica sintaxe JavaScript e padrões inseguros básicos nos arquivos Astro. Não substitui auditoria de segurança.
- `npm run build`: aprovado; oito páginas HTML, sitemap e robots gerados.

## Navegador

- 17 verificações de interação aprovadas em `test/browser-qa.mjs`: menu mobile, Escape, abertura e fechamento de perfis, contenção e retorno de foco, filtros, busca sem acentos, resultado vazio, limpeza, expansão das dúvidas, assunto contextual, validação dos campos, rascunho de e-mail, invalidação após edição e movimento reduzido.
- Sete páginas principais verificadas em 390 e 1440 px: início, escritório, áreas, equipe, links úteis, contato e privacidade.
- Um H1 por página, idioma pt-BR, fontes carregadas, imagens carregadas e ausência de overflow horizontal nas duas larguras.
- Console sem erros ou avisos na rodada final.
- Dez caminhos internos distintos, incluindo assuntos de contato, responderam HTTP 200.
- Quatorze capturas completas revisadas visualmente, após carregamento das imagens e conclusão das animações. Arquivos locais ignorados pelo Git em `artifacts/`; `preview.png` mostra a primeira tela desktop.
- Navegação por teclado, foco dos diálogos, labels e preferência por movimento reduzido verificados. Isso não constitui uma auditoria completa de acessibilidade.

## Revisão de design

A hierarquia apresenta advocacia e consultoria empresarial, áreas de atuação e acesso ao contato. Azul institucional, curva derivada da marca e composição arquitetural conectam a direção visual à Gazzetti. As áreas são apresentadas como conteúdo editorial, sem transformar todas as seções em cartões. A composição mobile reorganiza colunas, navegação e imagens. As animações são pontuais e não bloqueiam acesso ao conteúdo.

## Limites e publicação

- Lighthouse e métricas de campo não foram medidos. As metas de desempenho do brief continuam como critérios para a publicação, sem alegação de nota ou aprovação automática.
- Equipe e retratos são fictícios e identificados. A fachada é a fotografia real preservada do site original.
- Textos editoriais e contatos públicos devem ser aprovados pelo escritório. Pendências detalhadas em `CONTENT_TODO.md`.
- O formulário prepara um rascunho no aplicativo de e-mail; não há backend de envio.
- A prévia mantém `noindex` e robots bloqueado. SEO estrutural foi implementado, mas a indexação depende da aprovação do conteúdo e da configuração final do domínio.
- Nenhuma publicação ou alteração de infraestrutura foi realizada.

## Revisão de legibilidade e identidade

- Corpo e descrições ampliados para 18 px; navegação, campos e ações em 16 px; informações secundárias em pelo menos 14 px.
- Sete páginas verificadas em 390, 768, 1024 e 1440 px: 28 verificações sem overflow e sem textos visíveis abaixo de 14 px. Diálogo da equipe também verificado no celular, sem corte horizontal.
- Quatorze screenshots desktop/mobile atualizados; perfil mobile capturado adicionalmente. Os 17 checks de interação foram repetidos e aprovados; sem erros de JavaScript ou console na rodada final.
- Fotografia original da fachada convertida para WebP, sem alterar conteúdo ou cortar a porta e a placa, na home e em Escritório.
- Cards de recursos, divisores de áreas, campos e painel de contato receberam contornos mais definidos. O rodapé mobile usa uma coluna para acomodar os textos maiores.
- Regras permanentes de legibilidade, preservação de fotos reais e contornos visíveis em `AGENTS.md`.
