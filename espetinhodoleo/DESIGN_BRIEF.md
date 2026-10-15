# Espetinho do Léo — site

## Negócio

Espetinhos e barcas com acompanhamentos em um quiosque no Parque do Povo, em Presidente Prudente.
O público inferido inclui frequentadores do parque, amigos e famílias buscando uma refeição informal.
A principal necessidade digital é consultar a oferta, escolher o canal de pedido e encontrar o quiosque.
As barcas e o ponto físico são os elementos mais específicos do conteúdo coletado.
Confiança vem de fotos do acervo, logo reconhecível e informações consistentes, sem estatísticas ou depoimentos inventados.
Conversões: ver cardápio, abrir iFood, traçar rota ou telefonar.
Percepção desejada: comida de quiosque, próxima e caprichada. Evitar luxo artificial ou aparência de franquia genérica.

## Direções consideradas

- **Brasa e barca:** comida e título de impacto, produto alongado para destacar barcas e informação prática. Escolhida no planejamento.
- **Encontro no parque:** ambiente dominante, narrativa documental e foco na visita; faltam fotos melhores para sustentar toda a página.
- **Cardápio de balcão:** listas compactas centradas em consulta; usado na organização do catálogo, sem sacrificar a apresentação do lugar.

## Revisões aprovadas na conversa

O usuário pediu afastar o amarelo do Chapéu de Palha, testar vermelho forte sobre preto e criar aba de cardápio. Depois pediu retirar as visualizações e implementar o site objetivo com a cara do Léo. Não foi copiado código ou composição de outro site.

## Visual DNA

Composição objetiva com dois eixos: comida e ponto físico. Densidade equilibrada no início e informativa no cardápio. Display condensado inspirado nas letras fortes do acervo, corpo Arial, sem carregamento externo de fontes. Cantos discretos, fotografia real, movimento apenas em feedback. Fundo preto e vermelho dominante; laranja pontual remete à brasa. Ritmo: entrada com foto, escolha por produto, quiosque real, pedido.

Regra de identidade: **um produto ou uma ação dominante por bloco**. A chama fica no logo; não há partículas, selos repetidos ou fogo animado. A linha vermelha/laranja funciona como separador entre apresentação e oferta.

Três decisões específicas: (1) barca como produto de destaque, pela oferta real; (2) quiosque G recorrente e mapa direto, pela localização no conjunto de quiosques; (3) letras condensadas e cores fortes em continuidade com as artes do Léo, preservando o logo original.

## Tokens

Preto #080808, superfície #141211, vermelho #FF3826, vermelho profundo #8C160D, fogo #FF9A3C, branco #FFF9EF, texto secundário #BFB8B0. Vermelho vivo com texto preto; branco sobre vermelho profundo. Contrastes calculados em `artifacts/validation.json` na validação.
Display: Impact local com Arial Narrow como fallback; corpo Arial/Helvetica. Títulos 34–90 px conforme viewport, corpo 14–18 px, informações secundárias 11–13 px. Containers até 1232 px, margens de 20 px no celular e 40 px no desktop; espaçamentos 8/16/24/32/40/64/80. Raio 2 px. Sem sombras decorativas.

## Arquitetura

Início: produto e ação de cardápio; destaque das barcas e entradas para espetos/acompanhamentos; foto do quiosque, endereço e mapa; escolha do canal de pedido. Cardápio como segunda página, acessível por navegação, funciona sem JavaScript e ganha filtros com JavaScript. Sem carrinho próprio, formulário ou cadastro porque o pedido já tem um canal oficial.

## Stack

HTML/CSS/JS, sem dependências, como previsto no planejamento e retomado pelo usuário. Um script Node gera as duas páginas a partir de conteúdo centralizado. Astro seria alternativa para escala editorial maior, sem benefício necessário para duas páginas. Nenhuma dependência instalada.

## Suposições e pendências

Detalhadas em `CONTENT_TODO.md`. Nenhum preço inventado. Quantidades das barcas extraídas das peças e sujeitas à validação. Uma foto de barca adaptada é MOCK de imagem identificado. Não publicar sem revisar essas pendências. Pesquisa original preservada; as visualizações foram retiradas.


## Refinamento de legibilidade e informação
A pedido do usuário, textos corridos passam a 17–20 px, links/botões a 16–17 px e informações secundárias a 13–16 px. Informações de visita/pedido/horário ganham leitura rápida, a composição dos itens aparece em listas e dúvidas práticas ficam em detalhes expansíveis. A regra anterior de chama apenas no logo é substituída por textura fotográfica estática nas laterais, com fade, menor opacidade no celular, sem sobrepor a área de leitura. Não foram inventados preços, horários ou capacidades do estabelecimento.


## Efeitos discretos aprovados

Fogo lateral com respiração de opacidade em ciclo lento de 7 segundos, fotos com aproximação de 3,5% somente em dispositivos com hover e botões com pressão breve ao clicar. Recortes contidos nas próprias molduras, sem deslocar texto ou mudar o layout. Todos os movimentos novos ficam condicionados a `prefers-reduced-motion: no-preference`; em modo reduzido, fogo e imagens permanecem estáticos. O brilho vermelho de hover nos botões é discreto e serve como feedback.


## Correção da visibilidade do fogo

O efeito anterior ficava praticamente invisível em telas até 680 px: a textura era deslocada 90 px para fora da tela e reduzida a 18% de opacidade. A correção aproxima as chamas das bordas, aumenta a presença e combina a respiração em 4,8 s com deslocamento vertical de até 24 px e variação de escala. As laterais usam tempos diferentes (3,6 e 4,2 s), preservando o espelhamento. Continua decorativo, sem interação, e estático quando há preferência por movimento reduzido.
