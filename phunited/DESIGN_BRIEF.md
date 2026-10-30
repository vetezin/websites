# PH UNITED — frente do catálogo

Data: 29/10/2026. Novo site, protótipo local autorizado na conversa. Direção aprovada: streetwear limpo, preto e branco, produtos em primeiro plano. Implementação imediata e uso de subagentes autorizados. Sem publicação.

## Objetivo e escopo
Loja multimarcas de moda masculina. Explorar camisetas, shorts e calças na página inicial. Cards contêm apenas foto, nome e preço. Páginas internas, carrinho, pagamento, estoque e WhatsApp ficam para outra etapa. Um clique pode informar que os detalhes serão apresentados na próxima etapa, sem simular venda.

## Decisões adotadas
- Catálogo aparece na primeira tela; abertura editorial compacta, sem banner fotográfico ocupando a dobra.
- Categorias, busca e ordenação locais para explorar os produtos demonstrativos.
- Cards com borda fina, raio de3px, sombra leve; duas vistas de produto fictício gerado por IA. Sem setas ou controles clicáveis; indicadores apenas visuais. Segunda vista carregada sob demanda.
- Atualização autorizada pelo usuário: imagens de produtos fictícios geradas por IA com fundo/iluminação padronizados, incluindo tênis. Logo fornecida pelo usuário preservada.
- Atualização de copy solicitada: interface e metadados usam linguagem da PH UNITED; referências de demonstração retiradas também das descrições acessíveis. Dados comerciais continuam centralizados e marcados MOCK internamente; publicação permanece fora do escopo.

## Visual DNA e tokens
Composição: grid de vitrine com abertura editorial assimétrica. Densidade equilibrada. Geometria reta, com símbolo circular da marca como contraste. Fotografia de produto dominante. Movimento funcional. Ritmo compacto no catálogo, rodapé mais espaçoso. Cor monocromática guiada pela logo.

Paleta: tinta #111315, papel #ffffff, superfície #f3f3f1, linha #dedfdd, texto secundário #60625f. Tipografia: Arial/Helvetica sem download, peso 800 e espaçamento negativo no display, corpo 400, utilitários 600. Grade de 3 colunas a 1440 px, 2 a 390 px, conforme ajuste solicitado pelo usuário. Espaçamento em escala de 4/8 px. Largura máxima 1440 px.

Três decisões específicas: símbolo original como assinatura (identidade fornecida); nomenclatura e filtros por tipo de roupa (jornada da multimarcas); fotos dominantes com detalhe sob interação (pedido explícito de explorar a peça fora da página interna). Restrição autoral: nada além de foto, nome e preço no conteúdo do card; nenhum selo comercial ou marca fictícia.

## Arquitetura e interação
- Cabeçalho: reconhece a marca e permite acessar as categorias. Fonte: nome/logo do cliente. Navegação filtra a vitrine.
- Abertura: contextualiza o streetwear masculino e encaminha ao catálogo. Copy é proposta editorial, sem alegações comerciais.
- Vitrine: responde quais peças podem ser exploradas; fonte: mocks centralizados. Busca, categorias e ordenação se combinam. Estado vazio oferece limpar filtros.
- Rodapé: reforça identidade e sinaliza a condição demonstrativa; sem contatos ou condições inventados.
- Sem imagem: placeholder de peça sem interromper navegação. Sem JS: mensagem clara, sem catálogo invisível silenciosamente.

## Movimento
| Elemento | Efeito | Objetivo | Gatilho | Alternativa sem movimento | Custo | Decisão |
|---|---|---|---|---|---|---|
| Card | Elevação de 3 px | Indicar interação | Hover/foco | Borda e foco | Baixo | Usar |
| Foto | Alternância pausada para detalhe | Explorar tecido/modelagem | Hover/foco após pausa | Foto inteira estática em reduced-motion | Baixo; uma instância ativa | Usar |
| Foto, mobile | Swipe com limiar | Navegar sem abrir detalhe | Gesto horizontal | Foto inteira permanece visível; nenhuma informação essencial depende do gesto | Baixo | Usar |
| Outras seções | Nenhum | Manter catálogo imediato | — | Conteúdo estático | Nenhum | Sem animação |

Respeitar prefers-reduced-motion: sem alternância automática e sem deslocamento; foto principal permanece visível e swipe opcional continua disponível. Pausar timers ao sair, perder visibilidade ou trocar filtro. Teclado: foco no card permite a mesma prévia automática quando movimento está habilitado; foco sempre visível e restaurado após ocultar menu/estado vazio.

## Stack e opções
Escolha: HTML/CSS/JS nativos, servidor Node sem dependências. Alternativa: Astro, já usado em outros sites, adicionaria instalação/setup para uma única tela sem necessidade atual. Evolução comercial exigirá decisão própria de plataforma; não prometemos migração automática.

## Aceitação
Fotos, nome e preço nos cards; categorias/busca/ordenação funcionais; keyboard, swipe e reduced-motion; screenshots revistos em 390 e 1440 px; erros de console e assets ausentes verificados. Nenhuma métrica Lighthouse ou Core Web Vitals será afirmada sem medição. SEO básico e noindex enquanto houver mocks.

## Refinamento após auditoria
Mobile: abertura compacta, sem microrrótulos decorativos e CTA redundante; produto visível antes de440px em320/390. Nomes13px, preços15px; desktop14/16px. Espaço mínimo de duas linhas nos nomes mantém preços alinhados. Tablet até1000px com3colunas; mobile até760px com2. Filtro de busca ativo aparece fora do painel; limpeza preserva categoria e ordem. Descrições institucionais definitivas e geração HTML sem dependência de JS ficam pendentes. Categoria tênis adicionada conforme mídia solicitada.
