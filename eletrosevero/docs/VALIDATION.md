# Validação do protótipo — 12/10/2026

## Evidências
- Node: 4/4 testes de busca e filtro; acentos, múltiplos termos, combinação de categoria e preservação de indisponíveis.
- Sintaxe: node --check em app.js, catalog.js, data/content.js, serve.mjs e testes do navegador.
- Playwright instalado + Chrome headless isolado: 9/9 cenários, resultados em screenshots/browser-results.json.
- Testados: 12 produtos, duas lojas, todas as imagens carregadas, limpeza de busca, filtro, vazio, detalhes, Enter, Escape, retorno de foco, estado indisponível, links distintos de rota, WhatsApp geral, telefone, menu mobile e prefers-reduced-motion.
- Console e requisições: nenhum erro observado na execução final.
- Capturas finais: desktop-1440.png, mobile-390.png e detalhes em ambas as larguras.

## Revisão visual e de conteúdo
- Desktop: catálogo em três colunas, filtros laterais e apresentação inicial destacada. Produtos têm espaço próprio; duas lojas recebem peso equivalente.
- Mobile: duas colunas, departamentos roláveis, menu recolhido, lojas empilhadas e diálogo com rolagem própria. Sem overflow horizontal em 390 px.
- Contraste dos pares de texto principais calculado no brief. Acessibilidade checada por estrutura semântica, labels, foco e navegação; não substitui auditoria automatizada completa WCAG.
- Produtos ilustrados, detalhes e horários estão identificados como exemplos. Não há promessas inventadas de estoque, experiência, certificação ou entrega.
- Originalidade: marca e raio orientam os destaques; departamentos, informações técnicas e rotas das duas lojas justificam a composição. Padrões familiares preservam a consulta rápida.

## Revisão independente
Nenhum achado P1/P2. Ajuste P3 de conteúdo inválido em button corrigido; cabeçalho semântico permanece fora da ação. Documentação atualizada. Os testes do navegador foram repetidos após o ajuste.

## Limitações
- Sem build ou lint configurados, pois a implementação não usa toolchain; realizados checks de sintaxe e testes.
- Lighthouse não disponível no runtime consultado, sem instalar dependências. LCP não foi obtido pela observação inicial; a soma de CLS local foi 0. Não há alegação de pontuação Lighthouse nem de desempenho de produção.
- SEO técnico preparado: title, description, Open Graph, lang, headings, favicon, schema Organization, robots e sitemap. Indexação bloqueada; URL example.invalid deve ser substituída antes de publicação.
- Nenhuma chamada enviada pelo WhatsApp, ligação realizada ou rota percorrida; links e parâmetros foram verificados.
- Produtos, fotos reais, horários e conteúdo institucional devem ser validados pela empresa antes de publicar.
