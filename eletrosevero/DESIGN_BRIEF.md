# Eletro Severo — brief do protótipo

Status: protótipo implementado após o pedido do usuário em 12/10/2026. Painel de gestão fica para uma etapa futura.

## Negócio

A Eletro Severo comercializa materiais elétricos, hidráulicos e acabamentos.
O catálogo divulgado inclui também ferramentas, gabinetes, portas e janelas.
O público presumido reúne moradores em reforma e profissionais de obra em Álvares Machado.
O protótipo deve facilitar a descoberta de produtos e a consulta de informações à loja.
As duas lojas estão em funcionamento, conforme confirmação do usuário em 09/10/2026.
Produtos organizados, contatos claros e localização das unidades devem transmitir confiança.
Medidas, aplicações e disponibilidade são dúvidas a atender; dados não confirmados serão exemplos.
A percepção desejada é de comércio local acessível e prático, com identidade forte.

## Escopo e conteúdo

- Página de apresentação com acesso imediato ao catálogo, breve texto institucional e duas unidades.
- Catálogo com aproximadamente 12 produtos demonstrativos, busca textual, filtro por categoria, contagem de resultados e estado sem resultados.
- Categorias: elétrica, hidráulica, iluminação, ferramentas e acabamentos. Portas e janelas entram em acabamentos neste protótipo.
- Detalhe acessível de produto com imagem ilustrativa, descrição e especificações de exemplo.
- Preços: “Consultar preço”; decisão para o protótipo, evitando preços fictícios sem atualização garantida.
- Contato geral via WhatsApp publicado pela marca. Para itens mock, o protótipo não encaminha dados fictícios como pedidos reais: o detalhe indica demonstração e oferece contato geral.
- Sem checkout, autenticação, painel administrativo ou persistência de pedidos.
- Protótipo local; sem publicação nesta etapa.

## Atributos da marca

- **Direta:** nomes reconhecíveis, informação de produto legível e navegação simples.
- **Enérgica:** amarelo e detalhes vermelhos derivados da comunicação existente.
- **Próxima:** destaque para as duas lojas e atendimento por WhatsApp.
- Não deve parecer uma marca de luxo, uma plataforma de tecnologia ou um encarte com excesso de ofertas.

## Três direções possíveis

1. **Balcão digital — recomendada.** Abertura assimétrica e curta, com apresentação à esquerda e seleção de produtos à direita. Catálogo branco com categorias laterais no desktop, tipografia firme e poucas faixas amarelas; mobile prioriza busca e produtos.
2. **Encarte de produtos.** Grade densa desde a abertura, chamadas vermelhas, fotos grandes e navegação por departamentos no topo. Aproxima-se das campanhas do Instagram, mas depende de ofertas atualizadas e tem mais risco de ruído visual.
3. **Da instalação ao acabamento.** Composição narrativa por etapas da obra, blocos largos e agrupamentos de produtos por aplicação. Ajuda quem não conhece os itens, mas torna o acesso ao catálogo menos imediato.

Escolha implementada: balcão digital. Equilibra apresentação institucional e consulta de itens sem depender de preços ou fotografias da equipe.

## Visual DNA e regra autoral

- Composição: assimétrica na abertura e funcional no catálogo.
- Densidade: equilibrada na apresentação; informativa nos produtos.
- Tipografia: títulos fortes com Arial Black; corpo, navegação e dados com Arial, ambas com fallback sans-serif. Sem download de fontes.
- Geometria: retangular, cantos discretos; evitar cápsulas e cartões excessivamente arredondados.
- Imagem: apoio de produto, com ilustrações neutras identificadas como exemplos. Não depender de fotos da loja.
- Movimento: apenas feedback funcional, respeitando prefers-reduced-motion.
- Ritmo: abertura curta, catálogo dominante, apresentação e lojas em blocos amplos.
- Cor: fundo predominantemente branco, amarelo para identidade e preto para leitura; vermelho reservado ao contato e a pequenos detalhes.
- **Restrição visual marcante:** um único corte diagonal, inspirado no raio da logo, fecha as faixas amarelas de títulos; superfícies de leitura permanecem retas e claras.

## Arquitetura da informação

Navegação: Produtos, A Eletro Severo, Nossas lojas e WhatsApp.
A apresentação inicial explica o negócio e leva ao catálogo. A busca e as categorias respondem à intenção principal de encontrar itens. O texto institucional vem depois dos produtos para não atrasar a consulta. As duas lojas encerram a página com endereços e rotas; horários de exemplo identificados visualmente por unidade, conforme autorização de mocks e pedido de exibição de horários.

## Tokens propostos

- Amarelo de interface: #FFEC01; amostra do fundo da logo fornecida. Não equivale a um manual oficial da marca.
- Preto: #161616; branco: #FFFFFF; superfície: #F4F4F2; texto secundário: #595959; vermelho: #B91C1C.
- Contraste calculado: preto/amarelo 14,87:1; preto/branco 18,10:1; cinza/branco 7,00:1; branco/vermelho 6,47:1. Não usar amarelo como texto sobre branco.
- Escala: 12, 14, 16, 20, 28, 40 e 56 px; abertura mobile limitada a aproximadamente 36 px.
- Espaçamento: 4, 8, 12, 16, 24, 32, 48, 64 e 96 px.
- Conteúdo: largura máxima de 1200 px; margens mobile de 20 px.
- Raios: 0, 4 e 8 px. Bordas leves; sem sombras decorativas; sombra apenas no diálogo de detalhe.

## Logo recebida

Arquivo: assets/logo-original.png. Imagem de 150 × 150 px fornecida pelo usuário, preservada integralmente com fundo amarelo. Usar em tamanho compacto, com enquadramento CSS do espaço vazio, sem esticar, redesenhar ou sugerir que foi obtida uma versão vetorial. A assinatura dentro da imagem ocupa uma área pequena; verificar legibilidade no cabeçalho e complementar com nome em texto quando necessário.

## Stack proposta

**HTML, CSS e JavaScript nativos**, sem instalar dependências: suficiente para apresentação e catálogo com filtros locais. Conteúdo centralizado em data/content.js, com funções simples para renderização segura e pesquisa.

Alternativa: Astro, útil para catálogo maior com páginas estáticas individuais e conteúdo editorial. Exige configuração e dependências que não agregam benefício suficiente a este protótipo.

Implementação solicitada pelo usuário após discussão do catálogo. Stack sem dependências adicionais; nenhum pacote instalado.

## Mocks e pendências

O usuário autorizou mockar informações ausentes. Cada produto demonstrativo terá campo MOCK e rótulo visível “Produto de exemplo”; as imagens terão indicação de ilustração. Textos institucionais propostos também serão marcados no arquivo de dados. Não criar depoimentos, métricas, certificações ou histórico inventado.

Registrar substituições em CONTENT_TODO.md. Confirmar antes de publicação: produtos, fotos, especificações, horários, contatos por unidade, nomes das unidades e copy institucional. Endereços coletados: Rua Barão do Rio Branco, 9, Vila Fernandes; Rua Fernando Costa, 168, Centro, ambos em Álvares Machado/SP. O funcionamento de ambas foi confirmado pelo usuário; a correspondência de cada endereço com o nome comercial da unidade ainda deve ser revisada.

## Critérios de validação após implementação

Verificar busca, combinação de filtros, limpeza de busca, estado vazio, detalhes por teclado, fechamento com Escape e retorno de foco. Revisar screenshots em 390 e 1440 px, console e ausência de overflow. Usar HTML semântico, foco visível, imagens dimensionadas e navegação acessível. Incluir metadados, favicon, robots e sitemap com domínio de exemplo documentado, impedindo indexação do protótipo. Schema Organization apenas com dados confirmados, sem ofertas fictícias. Medir performance quando a ferramenta estiver disponível e não alegar métricas sem medição.

## Decisões específicas do negócio

1. Catálogo por departamentos de instalação e acabamento: atende à variedade da loja e ao vocabulário de quem compra materiais para obra, sem categorias abstratas.
2. Especificações como seção de cabo, medida de esquadria e aplicação hidráulica: mostram como a escolha depende do projeto; a descrição lembra a necessidade de confirmação técnica.
3. Duas unidades com endereço, horários e rota individual: atende ao comércio físico local e à visita presencial, em vez de priorizar checkout ou logística não confirmada.

Disponibilidade é um campo nos dados, com dois itens indisponíveis de exemplo. A futura gestão poderá consumir esse contrato, mas não há backend nesta entrega.
