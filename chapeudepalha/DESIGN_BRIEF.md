# Chapéu de Palha — Diário de uma boa mesa

## Negócio e público

O Quiosque Chapéu de Palha oferece porções, pastéis e bebidas no Parque do Povo, em Presidente Prudente.
Atende famílias, amigos e pessoas que procuram uma parada para comer durante o passeio ou encontrar companhia à noite.
Resolve a escolha de um lugar próximo, informal e acolhedor para comer e passar um tempo.
A temática de One Piece diferencia o espaço e aparece na marca e no cardápio existentes.
Fotos reais dos alimentos, clareza do cardápio e informações de visita geram confiança.
As principais dúvidas são o que pedir, os preços, onde fica e quando há música ou futebol.
A conversão principal é consultar o cardápio e planejar a visita; contato pelo Instagram é um apoio já conhecido.
Criar uma percepção apetitosa, próxima e aventureira; evitar aparência de parque temático fictício ou restaurante de luxo.

## Marca

- Apetitosa: fotografia de comida como elemento de maior cor e presença nas páginas internas.
- Acolhedora: linguagem brasileira direta e ambiente real apresentado sem promessas inventadas.
- Aventureira: percurso de diário, marca existente e referências náuticas pontuais.
- Artesanal: margens, legendas e pequenas marcas gráficas que lembram anotações de uma visita.
- Não deve parecer portal de anime, site de jogo, taverna fantástica, catálogo de cards idênticos ou restaurante sofisticado que não corresponde ao quiosque.

## Três direções consideradas

### Taverna da tripulação
Composição robusta, escura, baseada em placas e madeira, títulos compactos e fotografias grandes. Navegação horizontal simples e ritmo de painéis. Forte ligação com as artes existentes, porém mais decoração competindo com a comida.

### Mangá gastronômico
Quadros assimétricos, contornos pretos e recortes de produtos, títulos expressivos e densidade alta. Navegação e transições com energia gráfica. Mais presença visual do anime que o usuário deseja nesta primeira versão.

### Diário de aventuras — escolhida
Fotografia ampla de chegada seguida de páginas editoriais com margens de anotações e fotos de comida em escalas diferentes. Navegação convencional; movimento discreto. Escolhida pelo usuário porque a comida conduz o percurso e One Piece participa dos detalhes. Após revisar a primeira versão, o usuário pediu que a página de cardápio reproduzisse a linguagem do impresso preto, mantendo o diário na página inicial.

## Visual DNA

- Composição: editorial, assimétrica e guiada por fotografias.
- Densidade: equilibrada na página inicial; informativa no cardápio.
- Tipografia: títulos condensados com personalidade de placa, corpo humanista simples e legível.
- Geometria: retangular; detalhes gráficos suaves e pequenos, sem grandes cartões arredondados.
- Imagem: produtos dominantes; fachada atmosférica na abertura; foto real do ambiente na visita.
- Movimento: funcional e sutil, sem esconder conteúdo ou simular virada de página.
- Ritmo: abertura expansiva, destaque de pastel, composição compartilhada de porções, sequência vertical de bebidas, encerramento de visita.
- Cor: fachada vermelha, chapéu dourado e papel na página inicial; preto, branco quente e cobre no cardápio, conforme a foto do impresso.

## Regra autoral

Cada trecho editorial usa uma margem de diário para legenda ou indicação de assunto e uma área principal dominada por comida. Fotografias atravessam essa margem em pontos pontuais. No cardápio, a mesma margem vira navegação de categorias. No mobile, vira uma linha de legenda acima do conteúdo. Sem números fictícios de etapas nem enfeites em todos os títulos.

## Arquitetura de informação

### Início
1. Chegada: background conceitual aprovado, nome e proposta legível; ação principal para cardápio.
2. Pastéis: fotografia real com texto curto, sem inventar tamanho ou recheio confirmado.
3. Porções para compartilhar: Fome de Pirata e batata com cheddar e bacon, com conexão ao menu.
4. Bebidas: fotos de coco e drinks, sem atribuir ingredientes ou álcool desconhecidos.
5. O encontro: ambiente real, música e futebol apresentados como características divulgadas; ligação ao Instagram para programação atual, sem inventar datas.
6. Visita: localização conhecida, rota externa e contato divulgado; horários pendentes não viram informação inventada.

### Cardápio
Categorias Porções, Pastéis e Bebidas. As 14 porções vêm da foto com pesos e preços, acompanhadas de aviso de valores transcritos sujeitos a confirmação. Complementos demonstrativos em pastéis e bebidas têm identificação visível; sem preços fictícios disfarçados. A capa real do cardápio aparece na abertura; a foto das porções pode ser aberta para referência. Fundo preto com moldura fina, títulos em cobre, nomes brancos condensados em itálico, pesos em cobre e preços alinhados. Pontilhados ligam nome e preço no desktop e separam as linhas no mobile. Texto HTML, navegação por categoria e busca sem acentos; o conteúdo completo continua disponível sem JavaScript.

## Tokens propostos

| Uso | Valor |
| --- | --- |
| Tinta | `#211d18` |
| Papel | `#f2e5c6` |
| Vermelho da fachada | `#9c3029` |
| Palha | `#f0bb4e` |
| Texto secundário | `#625440` |

Contraste WCAG calculado pela luminância relativa: tinta/papel 13,40:1; vermelho/papel 5,86:1; secundário/papel 5,87:1; palha/tinta 9,51:1. Todos atendem AA para texto normal. Sobre fotografia, texto recebe base escura suficiente; medir novamente na implementação.

- Famílias: Oswald para display, títulos e marca tipográfica auxiliar; Source Sans 3 para corpo, navegação, legendas, CTAs e preços. Até duas famílias, `font-display: swap`; preferir arquivos locais quando disponíveis, fallback funcional.
- Escala: corpo 18 px desktop / 16 px mobile; legenda 13–14 px; títulos de seção 40–64 px; abertura 64–96 px desktop / 44–56 px mobile. Preços com números tabulares.
- Espaçamento: 4, 8, 12, 16, 24, 32, 48, 72, 104 px. Margens 24 px mobile / 64 px desktop; largura principal até 1280 px.
- Raios: 0 em fotos e áreas editoriais, 4 px nos controles.
- Sombras: uma sombra discreta em fotografias sobre papel; nenhuma sombra de card repetitiva.
- Textura: CSS leve, baixa opacidade, sem prejudicar leitura.

## Stack escolhida

HTML estático gerado por script Node, CSS próprio e JavaScript nativo mínimo. O Node já está instalado; não exige novas dependências. Duas páginas com cabeçalho e rodapé compartilhados no gerador; dados centralizados em JSON/JS, HTML completo entregue para SEO e funcionamento sem JavaScript. Adequado ao volume de conteúdo, hospedagem estática e manutenção simples. Implementação autorizada pelo pedido de começar a criar o site após a proposta; nenhuma dependência instalada.

Alternativa: Astro, já usado por outros sites nesta pasta. Facilita componentes e expansão para muitas páginas, mas requer instalação de dependências neste projeto. Para duas páginas e interações pequenas, o gerador estático é suficiente.

Primeira entrega local. Integração de publicação e deploy não fazem parte desta etapa; não realizar push.

## Conteúdo, suposições e pendências

- As nove imagens fornecidas foram aceitas pelo usuário como material visual.
- MOCK: fachada de abertura gerada com IA, aprovada visualmente; reconstrução ilustrativa, não documento do ambiente real. Registro em IMAGE_PROMPT.md.
- Preços e pesos das porções são transcrições; confirmar atualização, nomes e disponibilidade.
- Sabores e valores de pastéis, nomes e ingredientes de bebidas não fornecidos. Complementos demonstrativos serão centralizados e marcados MOCK, com identificação na interface.
- Confirmar contato oficial, horários e dados de localização antes de publicação; não inventar vínculo de reserva ou delivery.
- Sem depoimentos, certificações, métricas, programação ou promoções fictícias.
- Sem formulário, cookies de analytics ou sistema de pedidos nesta primeira versão.
- Não gerar novas fotos de comida enquanto as imagens fornecidas cobrirem a composição.

## Verificação prevista

Validar build estático, links internos, imagens, integridade dos dados e JavaScript. Abrir fluxos pelo Playwright quando funcional; revisar console. Capturar e olhar início e cardápio em 390 e 1440 px. Conferir teclado, foco, contraste, headings, metadados e overflow. Medir performance quando houver ferramenta instalada, sem instalar sem autorização. Abrir resultado no navegador integrado.

## Revisão do plano

A abertura representa o quiosque aprovado. A variedade de formatos das fotos define a composição editorial da página inicial. A página interna usa a identidade do cardápio físico, com contraste maior e densidade adequada à consulta. A comida e os dados conduzem a navegação; a marca de One Piece já existente nas fotos e na capa participa da identidade. Resultados de verificação registrados em VERIFICATION.md.

## Tokens do cardápio preto

Fundo `#131312`, área impressa `#191917`, texto `#f8eedc`, cobre `#d8986d`, secundário `#c5bcaa`, linhas `#62533f`. Mesmas duas fontes, com Oswald em itálico nos nomes das porções. Molduras retangulares e finas, sem novos componentes ou biblioteca. Preços continuam em texto e têm números tabulares.
