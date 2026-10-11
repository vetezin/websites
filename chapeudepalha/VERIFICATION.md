# Verificação — 11/10/2026

## Resultado

Duas páginas estáticas implementadas. Início com diário de bordo e comida como assunto central; cardápio preto revisado para seguir o impresso, conforme pedido do usuário. Nenhuma dependência instalada e nenhuma publicação realizada.

## Verificações executadas

- `npm run build`: geração das duas páginas concluída.
- `npm run lint`: sintaxe JavaScript, um h1 por página, metadados, schema Restaurant, links locais, imagens com alt/dimensões e proteção de links externos; aprovado.
- Build e checagem repetidos com base `/chapeudepalha/` e `/`; aprovado. Prévia restaurada à raiz.
- Playwright: início e cardápio em 390 × 900 e 1440 × 900. Todas as fotos/fontes carregadas, sem overflow horizontal e sem erros de página.
- Fluxos: busca por BATATA (3 resultados), busca sem acento por tilapia (2), estado vazio, limpar busca (22 linhas), categoria após filtro, menu móvel, Escape, link da abertura para o cardápio. Aprovados.
- JavaScript desativado: 22 linhas de cardápio e navegação principal acessíveis no mobile.
- Console: nenhuma mensagem de erro ou aviso na sessão conferida.
- Screenshots completos das duas páginas revisados visualmente. Recortes, hierarquia, alinhamento dos valores, molduras, quebras de nomes e leitura no mobile conferidos. Arquivos locais em `artifacts/`, ignorados pelo Git.
- Revisão objetiva do código: dados centralizados e escapados no HTML, sem coleta de dados/credenciais; servidor local limita arquivos a `dist/`. Sem alterações nos outros sites.

## Acessibilidade, SEO e desempenho

HTML semântico, labels, busca com status anunciado, foco visível, navegação por teclado e Escape, suporte a movimento reduzido, alt e dimensões nas fotos. Contrastes calculados na área impressa `#191917`: texto 15,30:1; cobre 7,24:1; secundário 9,35:1. Tokens da página inicial documentados no brief. Conferência manual e estrutural; não equivale a uma auditoria completa com leitor de tela.

Título e descrição próprios, Open Graph, favicon, lang pt-BR, schema Restaurant, robots e sitemap gerados. A demonstração usa `noindex, nofollow` e bloqueio no robots. Domínio real e liberação para indexação dependem da publicação autorizada e dos dados confirmados.

Fotos WebP, fontes locais com swap, JS pequeno e sem biblioteca. Medição local no navegador em 390 px, sem limitação de CPU/rede: início LCP 308 ms, CLS 0; cardápio LCP 84 ms, CLS 0,0163. São observações locais, sem garantia de resultado em produção. Lighthouse e axe não estavam disponíveis entre as dependências locais verificadas; nenhuma pontuação foi atribuída.

## Especificidade e pendências

A fachada aprovada, as fotos reais e o percurso da comida sustentam a identidade do quiosque. O cardápio reproduz preto, cobre, nomes em itálico, pontilhados, pesos e preços da referência; a capa original mostra a presença de One Piece. Há variação editorial de fotografias na página inicial e leitura direta na interna.

Mocks e confirmações estão em CONTENT_TODO.md: fachada ilustrativa aprovada, quatro sabores de pastel de exemplo, preços transcritos e dados comerciais a confirmar. Prévia local pronta para a próxima rodada de revisão.
