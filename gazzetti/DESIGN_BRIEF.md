# Gazzetti — Dark Navy Premium

## Negócio e público
A Gazzetti atua no direito empresarial, em estruturação, negociação e contencioso.
O público é formado por empresários, gestores e organizações.
O site deve explicar essas frentes e permitir conhecer a instituição.
A diferenciação proposta é a compreensão integrada do contexto dos negócios.
Confiança depende de clareza, sobriedade e informações profissionais confirmadas.
O visitante precisa entender a atuação e encontrar canais institucionais.
A ação principal é conhecer a atuação; o contato é o próximo passo.
A percepção desejada é técnica e sóbria; evitar promessas e ostentação.

## Direção e alternativas
1. Editorial navy/prata: título amplo acima de apoio em quatro colunas e arquitetura real em oito, linhas e superfícies contidas. Paleta escolhida no handoff; nova composição autorizada posteriormente pelo usuário.
2. Institucional claro: documento e fotografia em composição simétrica, leitura compacta; descartado porque contraria a direção aprovada.
3. Fotográfico dominante: abertura de largura total, narrativa visual expansiva; descartado por reduzir a prioridade do copy e da leitura integral.

## Atributos e Visual DNA
Sobriedade pela cor restrita; precisão pelo alinhamento; proximidade pela porta real do escritório. Não parecer fintech, catálogo genérico de advogados ou campanha de resultados.
Composição editorial em grid 12/8/4; densidade equilibrada; Newsreader nos títulos e Manrope em leitura e interface; geometria contida, raios de 4 px; fotografia documental de apoio; movimento funcional; ritmo alternando composição aberta, cards e faixa profunda.
Restrição autoral: a fotografia integral do acesso ocupa o eixo principal da abertura, sem moldura nem texto sobreposto; alinhamentos de leitura organizam as três dimensões da atuação. Nunca símbolos jurídicos decorativos.

## Arquitetura
Home: tese, apresentação, três frentes, filosofia, contato. O Escritório: posicionamento, equipe pendente, presença, atuação. Áreas: índice lateral e três textos integrais. Contato: canais pendentes, formulário desabilitado, localização pendente. Privacidade complementar sem política inventada. Ordem e copy da seção 5 do handoff preservados.

## Tokens
Navy base #041C38, deep #021329, surface #0B2948; silver #DDE3ED, primary #F4F6FA, secondary #B8C5D5, decorative #29435E, border #71859C, focus #B7D8FF, error #FFB4AB, success #B7E3CC. Contrastes medidos por teste automatizado; divisórias decorativas não são limites de controles.
Newsreader 400–500 e Manrope 400–700 locais, já licenciadas no projeto. As fontes do handoff são sugestões; preservar as existentes evita aquisição e mantém duas famílias. H1 Home 88/44 px (40 em 320), interno 64–80/38, H2 48–64/32, H3 28/26 (cards Manrope 500, 24–26), corpo 18 com entrelinha 1.65; interface 16, secundários 14. Máximo 65ch.
Container 1240; margens desktop 48, mobile 24 e 16 em 320; seção 88–120 desktop/56 mobile; gaps 24–32; raio 4; divisórias 1 px; sem sombras. Hover 180 ms, sem mudança de layout; reduced-motion elimina transições e smooth scroll.

## Stack e execução
Preservar Astro + CSS próprio + JS mínimo, sem instalação. Alternativa React acrescentaria runtime sem benefício para quatro páginas estáticas. Conteúdo em JSON, microcopy funcional em site.js. Navegação nativa com details e aprimoramento de Escape; âncoras nativas.

## Ativos, suposições e pendências
IMG_6015.jpeg não acompanha o anexo; os tokens explícitos orientam a direção. Logo original PNG mantida sem reconstrução. Foto já existente do site original; porta e placa preservadas com imagem inteira, sem moldura e na proporção original 1392:894, priorizando a identificação solicitada anteriormente. Equipe não renderiza retratos. A miniatura do navegador usa o ativo original completo, sem criar símbolo.
Copy aprovado para demonstração pela agência, ainda dependente de validação institucional. Sem contatos, registros, endereço detalhado ou mapas não confirmados. Sem envio, armazenamento, analytics e sitemap público; noindex com rastreamento permitido para leitura da diretiva. Ver CONTENT_TODO.md e VALIDATION.md. Não publicar novamente sem autorização.

## Revisão visual autorizada pelo usuário

Em 10/10/2026, o usuário autorizou repensar a composição sem se prender à base visual anterior. A autorização amplia as proporções e os arranjos do handoff, preservando copy, sequência e destinos. Plano em docs/plans/2026-10-10-direcao-visual.md.

A Home abre com título amplo e fotografia documental maior. Apresentação combina título aberto e dois níveis de leitura; três cards preservam os destinos com tipografia de interface e links separados por linha. Filosofia torna-se pausa ampla, com declaração curta à esquerda e explicação à direita. Escritório usa introdução deslocada, equipe aberta e presença em faixa; Áreas mantém capítulos e índice; Contato usa abertura horizontal e superfície para formulário. No mobile, as composições são reorganizadas sem esconder conteúdo ou reduzir corpo abaixo de 18 px.

Os efeitos se concentram no feedback: setas se deslocam 4 px, superfícies e contornos respondem ao ponteiro/foco. Não há reveal que esconda conteúdo. A preferência por movimento reduzido remove transições. Fontes locais mantidas por adequação e disponibilidade; o projeto não exigiu fontes ou dependências externas.
