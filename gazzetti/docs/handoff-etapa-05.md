# Gazzetti | Etapa 05: handoff para desenvolvimento

Olho Óptico Web Studio • Revisão 01 • 09/10/2026

## 1. Objetivo e limites do projeto

Criar uma demonstração institucional navegável para apresentação comercial à Gazzetti. Público: empresários, gestores e organizações que buscam compreender a atuação do escritório. Objetivo: apresentar a marca, explicar suas três frentes jurídicas e facilitar o contato institucional.

Decisões aprovadas: quatro páginas principais; equipe integrada a O Escritório; especialidades em uma página com âncoras; copywriting e metadados da etapa 03; direção visual escura premium, com azul-marinho e prata. Blog, páginas individuais de serviços e página exclusiva de equipe ficam fora deste escopo.

Este documento especifica a implementação, sem escolher stack. O desenvolvedor define framework, infraestrutura e solução de envio, mantendo os requisitos de experiência. Não há autorização para publicar no domínio do cliente, enviar mensagens em seu nome ou configurar mensuração com dados reais.

**Requisito:** preservar os textos abaixo, sua sequência e os destinos. Não acrescentar serviços, profissionais, certificações, depoimentos, números ou promessas. Mudanças relevantes de copy, estrutura ou estética dependem da direção criativa da Olho Óptico.

**Referência visual:** IMG_6015.jpeg, enviada pelo usuário. A imagem confirma visualmente a direção azul-marinho e prata; não substitui o arquivo oficial da marca. Não redesenhar o símbolo nem compor uma nova logo com fonte tipográfica.

**Status das informações:** o conteúdo abaixo foi aprovado pela agência para demonstração. Isso não equivale a validação institucional pelo escritório. Serviços, unidades, história, profissionais e contatos devem ser confirmados antes da publicação.

## 2. Sitemap e navegação

| Página | URL proposta | Função |
|---|---|---|
| Home | `/` | Apresentar a marca e direcionar à atuação |
| O Escritório | `/o-escritorio/` | Posicionamento, equipe e presença |
| Áreas de Atuação | `/areas-de-atuacao/` | Explicar as três frentes jurídicas |
| Contato | `/contato/` | Canais, formulário e localização |
| Política de Privacidade | `/politica-de-privacidade/` | Complementar; conteúdo depende do fluxo real de dados |

Cabeçalho: logo à esquerda; O Escritório, Áreas de Atuação e Contato à direita. Logo leva à Home. Contato recebe destaque discreto. Sem submenu. Indicar a página ativa por texto e linha ou outro sinal além da cor. A página de privacidade não integra o menu principal.

Rodapé: marca, navegação das quatro páginas, canais confirmados, Política de Privacidade e identificação profissional validada pelo escritório. Não inventar registro da sociedade ou inscrição profissional. Instagram só recebe link após validação do canal informado no briefing: https://www.instagram.com/gazzetti.adv/.

| Origem do CTA | Rótulo aprovado | Destino |
|---|---|---|
| Hero da Home | Conheça nossa atuação | `/areas-de-atuacao/` |
| Apresentação da Home | Conheça o escritório | `/o-escritorio/` |
| Cada card da Home | Saiba mais | Âncora da categoria correspondente |
| Após cards da Home | Explore nossas áreas de atuação | `/areas-de-atuacao/` |
| Final da Home | Entre em contato | `/contato/` |
| Final de O Escritório | Explorar áreas de atuação | `/areas-de-atuacao/` |
| Final de Áreas de Atuação | Entre em contato | `/contato/` |
| Formulário | Enviar mensagem | Envio real somente após integração validada |

Âncoras: `/areas-de-atuacao/#estruturacao`, `/areas-de-atuacao/#negociacao` e `/areas-de-atuacao/#advocacia-contenciosa`. Links “Saiba mais” devem ter nome acessível que identifique a área. Telefone e e-mail usarão `tel:` e `mailto:` com valores confirmados. Não assumir que um telefone recebe WhatsApp.

## 3. Design system

### Conceito

Dark Navy Premium: composição editorial, fundo azul profundo, títulos claros, linhas finas e fotografia arquitetônica. A percepção premium deve vir da proporção, do espaço e da consistência. Evitar prata cromado intenso, brilhos, preto puro como base, vidro decorativo, gradientes chamativos e símbolos jurídicos genéricos.

### Tokens de cor propostos

Os HEX abaixo são referências de implementação, não códigos oficiais extraídos da marca. Confirmar com o arquivo original. A combinação azul-marinho e prata está aprovada; estes valores operacionalizam essa direção.

| Token | Valor proposto | Uso |
|---|---|---|
| `navy-base` | `#041C38` | Fundo predominante |
| `navy-deep` | `#021329` | Rodapé e blocos de maior profundidade |
| `navy-surface` | `#0B2948` | Cards e campos |
| `silver` | `#DDE3ED` | Títulos, marca e botão principal |
| `text-primary` | `#F4F6FA` | Texto de maior destaque |
| `text-secondary` | `#B8C5D5` | Parágrafos e informações auxiliares |
| `line-decorative` | `#29435E` | Divisórias sem função interativa |
| `control-border` | `#71859C` | Contornos perceptíveis de campos |
| `focus` | `#B7D8FF` | Anel de foco |
| `error` | `#FFB4AB` | Erro com mensagem e ícone |
| `success` | `#B7E3CC` | Confirmação de envio |

Botão principal: fundo silver e texto navy-deep. Botão secundário: fundo transparente, texto silver e borda control-border. Estados devem preservar legibilidade. Verificar contraste das combinações finais; não considerar a tabela uma certificação de acessibilidade. Alvo de aceitação: 4,5:1 para texto comum e 3:1 para texto grande e elementos de interface aplicáveis.

### Tipografia e hierarquia

Sugestão para títulos: Cormorant Garamond, peso 500/600. Sugestão para corpo e interface: Inter, peso 400/500/600. Confirmar disponibilidade e licença, usar poucos arquivos e WOFF2 quando viável. Fallback: Georgia para títulos; sistema sans-serif para corpo. A tipografia da marca original não deve ser substituída por essas fontes.

| Elemento | Desktop | Mobile | Entrelinha |
|---|---|---|---|
| H1 Home | 64–76 px | 38–44 px | 1,05–1,15 |
| H1 internas | 52–64 px | 36–40 px | 1,1–1,2 |
| H2 | 38–48 px | 28–34 px | 1,15–1,25 |
| H3 | 24–30 px | 24–28 px | 1,2–1,3 |
| Corpo | 18 px | 16–18 px | 1,55–1,7 |
| Menu, botão e rótulo | 14–16 px | 16 px | 1,4 |

Parágrafos com largura de aproximadamente 55–70 caracteres. Não justificar texto. Não forçar quebras no H1 que produzam palavras isoladas em telas menores. Legendas e informação secundária não abaixo de 14 px.

### Grid e espaçamento

Container máximo 1240 px; margem desktop 40–64 px; mobile 20–24 px, com 16 px nas menores larguras quando necessário. Grid desktop de 12 colunas, tablet 8 e mobile 4. Gaps de 24–32 px no desktop e 16–24 px no mobile. Escala base: 4, 8, 12, 16, 24, 32, 48, 64, 80, 96 e 120 px. Seções com 80–120 px verticais no desktop e 48–64 px no mobile.

Cards e campos com raio de 4 px; botões de 2–4 px. Sem sombras pesadas. Divisórias de 1 px. Não fazer todas as seções parecerem caixas: alternar composições abertas, linhas e superfícies.

## 4. Wireframes e especificação das páginas

### Home

1. **Cabeçalho:** altura aproximada de 88 px no desktop e 72 px no mobile. Fundo navy-base; marca original clara. Pode permanecer fixo no topo, sem esconder conteúdo ou causar mudança de layout.
2. **Hero:** desktop com texto em 7 colunas e fotografia em 5; mobile com texto, CTA e fotografia nessa ordem. H1 dominante, parágrafo integral aprovado e botão. Sem texto sobre partes detalhadas da imagem. Não impor altura de 100vh ou cortar conteúdo. Foto com recorte arquitetônico, proporção aproximada 4:5 no desktop e 4:3 no mobile.
3. **Apresentação:** composição editorial em duas colunas, H2 de um lado e dois parágrafos mais link do outro. Coluna única no mobile. Fundo navy-base ou navy-surface, com transição clara pelo espaço.
4. **Áreas:** H2 e três cards de mesma linguagem visual. Card contém nome, descrição completa e Saiba mais. Grid de três colunas quando houver espaço; empilhamento em telas menores. Link geral após os cards.
5. **Filosofia:** faixa navy-deep com H2 amplo e texto em largura controlada. Não transformar os parágrafos aprovados em slogans adicionais.
6. **Encerramento:** H2, texto e CTA em composição aberta. Desktop pode alinhar CTA à direita; mobile empilha.
7. **Rodapé compartilhado.**

### O Escritório

1. Hero editorial com H1 e introdução. Pode incluir detalhe arquitetônico lateral, sem sugerir que banco de imagem retrata a sede.
2. História e posicionamento: H2 seguido dos três parágrafos aprovados; desktop em duas colunas editoriais, mobile em sequência. Sem linha do tempo fictícia.
3. Equipe: título e introdução aprovados. Estrutura prevista para retrato real, nome, cargo e credenciais confirmadas. Não utilizar retratos gerados ou modelos como advogados. Na demonstração, usar bloco textual discreto de material pendente, sem cartões de profissionais fictícios.
4. Presença institucional: H2 e texto aprovado; duas unidades somente após confirmação. Não criar mapas ou fotos de instalações sem fonte.
5. CTA final e rodapé.

### Áreas de Atuação

1. Hero com H1 e os dois parágrafos aprovados.
2. Índice de três links. Desktop: coluna lateral de aproximadamente 3/12, opcionalmente sticky abaixo do cabeçalho, conteúdo nas 9/12 restantes. Mobile: índice no fluxo normal; links empilhados, sem carrossel horizontal obrigatório.
3. Estruturação: âncora, número decorativo 01, H2, dois parágrafos e lista aprovada.
4. Negociação: âncora, número 02, H2, dois parágrafos e lista aprovada.
5. Advocacia contenciosa: âncora, número 03, H2, dois parágrafos e lista aprovada.
6. Encerramento e rodapé. Sem accordion para os textos principais; o conteúdo deve ser legível, linkável e disponível para indexação.

Usar offset de âncora compatível com a altura do cabeçalho. Se houver indicação de seção ativa, ela acompanha a leitura sem alterar automaticamente o foco ou empilhar entradas no histórico. As listas de atividades são conteúdo editorial dependente de validação; os rótulos de origem constam no copy aprovado.

### Contato

1. Hero compacto com H1 e introdução.
2. Desktop com canais à esquerda e formulário à direita, aproximadamente 5/12 e 7/12. Mobile: canais antes do formulário.
3. Localização abaixo. Preferir links de rotas verificados; mapa incorporado é opcional e depende de avaliação de privacidade e performance.
4. Rodapé. Não inserir chat, pop-up ou WhatsApp flutuante sem autorização.

## 5. Copy final e metadados

Conteúdo reproduzido da etapa 03 aprovada. Os apontamentos de pendência são editoriais internos. Não misturar esses apontamentos com alegações de serviço confirmado no site público.

### 5.1 Home

**URL:** `/`
**Palavra-chave principal:** advocacia empresarial em Presidente Prudente
**Termos relacionados:** assessoria jurídica empresarial; advocacia empresarial; consultoria jurídica para empresas.
**Meta title:** Gazzetti Advogados | Advocacia Empresarial
**Meta description:** Conheça a Gazzetti Advogados Associados. Atuação em estruturação de negócios, negociações empresariais e advocacia contenciosa.

#### Hero

**H1: O direito como parte da estratégia dos negócios.**

A Gazzetti Advogados Associados atua na estruturação de negócios, em negociações e na condução de questões jurídicas empresariais, com uma abordagem que considera as particularidades de cada situação.

CTA: Conheça nossa atuação

#### Apresentação

**H2: Uma atuação jurídica conectada à realidade empresarial.**

Decisões empresariais envolvem responsabilidades, relações contratuais, riscos e interesses que precisam ser analisados de forma integrada.

A Gazzetti desenvolve sua atuação a partir da compreensão desses contextos, oferecendo assessoria jurídica em questões que envolvem a organização, a negociação e a defesa dos interesses empresariais.

CTA: Conheça o escritório

#### Áreas

**H2: Diferentes frentes jurídicas. Uma visão integrada dos negócios.**

**H3: Estruturação**

Atuação jurídica relacionada à organização de negócios, à estruturação de operações e à gestão de questões que influenciam o desenvolvimento das atividades empresariais.

**H3: Negociação**

Assessoria em negociações empresariais e bancárias, considerando as particularidades das relações envolvidas e os interesses das partes.

**H3: Advocacia contenciosa**

Representação e acompanhamento de demandas jurídicas empresariais, incluindo disputas complexas e questões que exigem análise técnica e estratégica.

CTA geral: Explore nossas áreas de atuação. CTAs dos cards: Saiba mais.

#### Filosofia

**H2: Cada decisão jurídica exige compreensão do contexto.**

Nenhuma empresa enfrenta exatamente os mesmos desafios.

Por isso, a análise jurídica precisa considerar mais do que a legislação aplicável. É necessário compreender as relações envolvidas, os objetivos do negócio e as consequências de cada decisão.

Essa perspectiva orienta a atuação da Gazzetti em diferentes frentes do direito empresarial.

#### Encerramento

**H2: Questões empresariais exigem diálogo e análise.**

Conheça os canais de contato da Gazzetti Advogados Associados.

CTA: Entre em contato

### 5.2 O Escritório

**URL:** `/o-escritorio/`
**Palavra-chave principal:** Gazzetti Advogados Associados
**Termos relacionados:** escritório de advocacia empresarial; advogados em Presidente Prudente; assessoria jurídica empresarial.
**Meta title:** O Escritório | Gazzetti Advogados Associados
**Meta description:** Conheça a Gazzetti Advogados Associados, sua atuação jurídica empresarial, filosofia de trabalho e equipe de profissionais.

#### Hero

**H1: Uma trajetória dedicada ao direito e às relações empresariais.**

A Gazzetti Advogados Associados desenvolve sua atuação em diferentes questões jurídicas ligadas ao ambiente empresarial, reunindo conhecimento técnico e atenção às particularidades de cada demanda.

#### História e posicionamento

**H2: O direito em diálogo com os negócios.**

A atividade empresarial está em constante transformação. Novas relações, operações e desafios exigem uma atuação jurídica capaz de compreender diferentes contextos e suas implicações.

A Gazzetti concentra sua atuação em áreas relacionadas à estruturação de negócios, às negociações e ao contencioso empresarial.

Seu trabalho considera os aspectos jurídicos de cada situação, buscando contribuir para a análise de decisões e para a condução responsável das questões apresentadas.

#### Equipe

**H2: Profissionais e conhecimento jurídico.**

A atuação da Gazzetti é desenvolvida por profissionais do direito envolvidos na análise, no acompanhamento e na condução das demandas do escritório.

**Nota interna aprovada:** Nesta seção serão inseridos os nomes, fotografias, qualificações e registros profissionais confirmados. Não recomendamos criar biografias fictícias para a demonstração.

#### Presença institucional

**H2: Presença e relacionamento.**

Com sede em Presidente Prudente e endereço também divulgado em São Paulo, a Gazzetti mantém canais de contato para o atendimento de questões jurídicas relacionadas à sua atuação.

**Nota interna aprovada:** A situação atual das unidades e o escopo de atendimento devem ser confirmados antes da publicação.

#### Encerramento

**H2: Conheça as áreas de atuação da Gazzetti.**

Saiba mais sobre as frentes jurídicas que integram o trabalho do escritório.

CTA: Explorar áreas de atuação

### 5.3 Áreas de Atuação

**URL:** `/areas-de-atuacao/`
**Palavra-chave principal:** áreas de atuação em advocacia empresarial
**Termos relacionados:** estruturação de negócios; negociações bancárias empresariais; contencioso empresarial; assessoria jurídica empresarial.
**Meta title:** Áreas de Atuação | Gazzetti Advogados
**Meta description:** Conheça as áreas de atuação da Gazzetti: estruturação de negócios, negociações empresariais e bancárias e advocacia contenciosa.

#### Hero

**H1: Atuação jurídica para diferentes dimensões dos negócios.**

A Gazzetti Advogados Associados atua em questões que envolvem a organização de atividades empresariais, a condução de negociações e a representação em demandas jurídicas.

Conheça as principais frentes de atuação do escritório.

#### Estruturação | id: estruturacao

**H2: Estruturação**

A organização jurídica de uma atividade empresarial envolve decisões que podem influenciar suas operações, relações contratuais e responsabilidades.

A Gazzetti atua em questões relacionadas à estruturação de negócios e à organização de atividades empresariais, considerando os aspectos jurídicos envolvidos em cada contexto.

**Rótulo aprovado: Atividades mencionadas no site atual:**

- Estruturação de negócios.
- Estruturação de departamentos jurídicos.
- Organização e recuperação de atividades empresariais.
- Gestão de passivos.

#### Negociação | id: negociacao

**H2: Negociação**

As negociações empresariais envolvem interesses, obrigações e condições que exigem análise jurídica cuidadosa.

A Gazzetti atua na condução de questões negociais, incluindo relações bancárias e situações relacionadas aos interesses jurídicos de empresas.

**Rótulo aprovado: Atividades mencionadas no site atual:**

- Negociações bancárias.
- Estratégias negociais.
- Defesa de interesses empresariais em processos de negociação.

#### Advocacia contenciosa | id: advocacia-contenciosa

**H2: Advocacia contenciosa**

Conflitos empresariais podem envolver diferentes áreas do direito e produzir consequências relevantes para a continuidade das operações e para as relações de uma organização.

A atuação contenciosa da Gazzetti contempla a análise e a condução de demandas jurídicas, com atenção às circunstâncias de cada caso.

**Rótulo aprovado: Atividades mencionadas no site atual:**

- Contencioso empresarial.
- Gestão de riscos.
- Demandas bancárias e tributárias.
- Gerenciamento de causas complexas.

#### Encerramento

**H2: Entre em contato com a Gazzetti.**

Para informações sobre a atuação do escritório, utilize um de seus canais institucionais.

CTA: Entre em contato

### 5.4 Contato

**URL:** `/contato/`
**Palavra-chave principal:** contato Gazzetti Advogados
**Termos relacionados:** Gazzetti Presidente Prudente; escritório Gazzetti; endereço Gazzetti Advogados.
**Meta title:** Contato | Gazzetti Advogados Associados
**Meta description:** Entre em contato com a Gazzetti Advogados Associados. Consulte os canais de atendimento e as informações institucionais do escritório.

#### Hero

**H1: Entre em contato.**

A Gazzetti Advogados Associados disponibiliza seus canais institucionais para informações e contato com o escritório.

#### Canais

**H2: Informações de contato.**

Consulte os endereços e canais oficiais de comunicação da Gazzetti.

**H3: Presidente Prudente, SP**

**Pendência interna:** Endereço, telefone e e-mail: confirmar dados atuais.

**H3: São Paulo, SP**

**Pendência interna:** Confirmar endereço, funcionamento e disponibilidade de atendimento.

#### Formulário

**H2: Envie sua mensagem.**

Preencha os campos abaixo para entrar em contato com o escritório.

| Campo | Rótulo aprovado | Placeholder aprovado | Obrigatório |
|---|---|---|---|
| Nome | Nome completo | Seu nome | Sim |
| E-mail | E-mail | seuemail@exemplo.com | Sim |
| Telefone | Telefone (opcional) | (00) 00000-0000 | Não |
| Mensagem | Mensagem | Escreva sua mensagem | Sim |

Ao enviar sua mensagem, seus dados serão tratados conforme a Política de Privacidade do escritório.

Botão: Enviar mensagem

#### Localização

**H2: Localização.**

Consulte as informações das unidades e os respectivos endereços para orientação de acesso.

**Pendência interna:** Mapas e links de rotas serão configurados após confirmação dos endereços.

## 6. Componentes reutilizáveis e estados

| Componente | Requisitos |
|---|---|
| Cabeçalho | Logo original, menu, indicação ativa, acesso por teclado, link de pular para conteúdo |
| Menu mobile | Botão com nome e estado expandido; fechar por botão e Escape; devolver foco ao acionador |
| Hero | Variação Home e interna, H1 único, texto integral, CTA opcional, mídia responsiva |
| Seção editorial | Largura de leitura controlada, variantes navy-base/surface/deep |
| Card de atuação | H3, descrição, link de destino; sem links aninhados ou hover obrigatório |
| Índice de áreas | Links de âncora reais; sticky somente em espaço suficiente |
| Bloco de equipe | Renderizar informações reais; versão de material pendente para demonstração |
| Bloco de unidade | Nome, endereço e canais somente confirmados |
| CTA final | H2, apoio e link; alinhamento responsivo |
| Formulário | Rótulos visíveis, ajuda, erro por campo e retorno de envio |
| Rodapé | Navegação, dados confirmados e privacidade |

Menu mobile sugerido: painel abaixo do cabeçalho, sem cobrir toda a tela. Se o desenvolvedor optar por diálogo modal, deve conter foco, deixar fundo inerte e devolver foco ao fechar. Fechar ao escolher um destino. Não usar hover para revelar conteúdo necessário.

Links e botões: default, hover, focus-visible, active e disabled quando aplicável. Foco visível com contorno de pelo menos 2 px e afastamento; não remover outline sem substituição. Alvos de toque de aproximadamente 44 × 44 px ou maiores. Links em texto com sinal visual além da cor. Navegação usa links; ações usam botões.

## 7. Interações, movimento e responsividade

Transições de botão, borda e link: 150–250 ms. Nenhum deslocamento de layout no hover. Animação de entrada é opcional, de baixa amplitude e curta, somente após o conteúdo estar disponível; não esconder conteúdo se JavaScript falhar. Hero e CTA principal visíveis desde o início. Sem parallax, vídeo automático, cursor especial ou tela de carregamento.

Respeitar preferência por movimento reduzido: remover fades com deslocamento e rolagem suave. Âncoras mantêm destino mesmo sem scripts. Elementos sticky não podem cobrir foco, títulos ou avisos.

Faixas iniciais de trabalho: até 767 px, mobile; 768–1023 px, tablet; a partir de 1024 px, desktop. São sugestões; ajustar conforme o conteúdo, mantendo o comportamento definido. Não definir layout por modelo de aparelho.

| Elemento | Mobile | Tablet/desktop |
|---|---|---|
| Cabeçalho | Menu recolhível | Menu horizontal quando couber |
| Hero Home | Texto, CTA, foto | Texto e foto lado a lado |
| Áreas na Home | Uma coluna | Três colunas somente com leitura confortável |
| Índice de áreas | No fluxo normal | Lateral sticky opcional |
| Contato | Canais antes do formulário | Duas colunas |
| Campos | Uma coluna | Nome/e-mail podem compartilhar linha |
| CTA final | Empilhado | Horizontal quando couber |

Sem rolagem horizontal em 320 px. Testar zoom de 200%, reflow e títulos longos. Não ocultar texto para encurtar mobile. Fotos devem reservar espaço, preservar assunto principal e usar recorte específico quando necessário. Acessibilidade e leitura prevalecem sobre uma altura igual para cards.

## 8. Formulário, integração e privacidade

**Demonstração:** não enviar dados para o escritório antes de existir autorização, destinatário e integração confirmados. Mostrar aviso junto ao formulário: “Formulário demonstrativo. O envio de mensagens não está disponível nesta apresentação.” Esse aviso é microcopy funcional proposto no handoff. Botão desabilitado com motivo legível; não simular uma mensagem entregue.

**Versão operacional:** definir provedor, endereço destinatário, responsável pelos dados, retenção e política aplicável. A mensagem de sucesso só aparece depois da confirmação real do servidor/provedor. Confirmar recepção ponta a ponta antes da publicação.

Campos com `name`, tipo apropriado, autocomplete de nome/e-mail/telefone e labels associados. Placeholder não substitui label. Telefone opcional com suporte a colagem e sem máscara que impeça números internacionais. Nome aceita acentos e nomes curtos. Validar cliente e servidor, limitar tamanho e taxa de envio, impedir injeção em cabeçalhos de e-mail e evitar retornar conteúdo não sanitizado. Definir limites técnicos com o desenvolvedor e exibir orientação se necessário.

Estados propostos de microcopy, sujeitos à revisão junto da interface:

- Carregando: “Enviando mensagem…”; impedir envio duplicado.
- Nome vazio: “Informe seu nome.”
- E-mail inválido: “Informe um e-mail válido.”
- Mensagem vazia: “Escreva sua mensagem.”
- Sucesso real: “Sua mensagem foi enviada ao escritório.”
- Falha: “Não foi possível enviar sua mensagem. Tente novamente ou utilize um dos canais de contato.”

Associar erros aos campos, preservar valores em falhas, anunciar status por região acessível e levar foco ao resumo/primeiro erro quando apropriado. Não prometer prazo de retorno. Não solicitar anexos, documentos ou dados de processo neste escopo.

Antispam: preferir mecanismos de baixo atrito, como limitação de taxa e honeypot acessível; desafio adicional somente se necessário. Segredos e credenciais exclusivamente no servidor. Não registrar conteúdo completo de mensagens em logs de analytics. Não presumir consentimento como fundamento universal: o responsável jurídico deve validar o fluxo e a Política de Privacidade. A política não está escrita nem aprovada nesta etapa.

## 9. Imagens e ativos

| Ativo | Uso | Pendência |
|---|---|---|
| Logo oficial clara, idealmente SVG | Cabeçalho e rodapé | Arquivo oficial; manter símbolo e proporções |
| Foto institucional/arquitetônica | Hero Home | Preferir foto real; referência licenciada na demonstração |
| Fotos do escritório | O Escritório | Origem, licença e identificação |
| Retratos dos profissionais | Equipe | Fotos reais, nomes e credenciais validados |
| Imagem de compartilhamento | Open Graph | Produzir a partir da marca aprovada |
| Favicon | Navegador | Derivar de ativo oficial com aprovação |

Não apresentar imagens genéricas como instalações reais. Na demonstração, informar a natureza ilustrativa em legenda próxima à imagem e na apresentação comercial. Esse aviso não integra o texto institucional definitivo.

Usar formatos modernos quando suportados e fallback adequado; `srcset`/`sizes`, dimensões explícitas e compressão sem perda perceptível. Carregar a imagem principal sem lazy loading; aplicar lazy loading abaixo da dobra. Alternativos descrevem o conteúdo e não acumulam palavras-chave; imagens decorativas têm alt vazio. Não escurecer excessivamente fotos ou aplicar tratamento azul que comprometa rostos.

## 10. SEO, migração e descoberta

Os metadados da seção 5 são os aprovados. Um H1 por página; H2/H3 sem saltos arbitrários. Conteúdo textual disponível no HTML inicial ou renderizado no servidor/pré-renderização equivalente. Não depender de interação para revelar as áreas. Usar links rastreáveis e URLs estáveis; escolher uma regra consistente de barra final.

**Demonstração:** acesso privado preferível; impedir indexação. Se houver URL pública temporária, aplicar `noindex` e não incluí-la em sitemap público. `robots.txt` não substitui autenticação nem é mecanismo de privacidade. Não bloquear o rastreamento de uma página pública que depende de o robô ler o `noindex`.

**Produção:** canonical absoluto por página no domínio definitivo; sitemap XML com URLs canônicas elegíveis; robots.txt coerente; metadados sociais próprios e idioma pt-BR. Não gerar endereços canônicos fictícios enquanto o domínio não estiver configurado. Páginas inexistentes retornam 404 real.

Mapear URLs atuais antes da migração. Cada URL antiga relevante deve receber redirecionamento 301 para conteúdo equivalente quando existir. Não enviar indiscriminadamente páginas antigas à Home. Verificar cadeias, links internos e versões http/https e www. Inventário de URLs e redirecionamentos ainda não realizado nesta etapa.

Dados estruturados: considerar entidade do escritório e páginas AboutPage/ContactPage conforme conteúdo validado. LegalService é candidato para a entidade; o desenvolvedor deve verificar vocabulário e diretrizes na implementação. Usar identificador consistente e apenas nome, contatos, endereços e perfis comprovados. Não criar avaliações, estrelas ou promessa de resultado enriquecido. Validar saída antes de publicar.

Presidente Prudente e São Paulo não devem ser inseridos como cobertura ou unidades além do que o escritório confirmar. Não acrescentar localidades ao texto aprovado sem autorização. A arquitetura enxuta limita a profundidade por especialidade; páginas adicionais são uma evolução futura, fora deste handoff.

## 11. Performance, segurança e mensuração

Metas de experiência para produção, a validar com medição: LCP até 2,5 s, INP até 200 ms e CLS até 0,1 no percentil 75 quando houver dados de campo suficientes. São metas, não resultados já obtidos. Testes de laboratório ajudam no diagnóstico e não substituem dados reais.

Priorizar fontes com poucos pesos e estratégia de fallback que reduza deslocamento; imagens dimensionadas, scripts essenciais, cache adequado e ausência de dependências para efeitos simples. Não incorporar mapas, vídeos ou widgets pesados por padrão.

HTTPS; tratamento seguro de entradas; limitação de requisições; dependências mantidas; segredos fora do frontend; mensagens de erro sem detalhes internos; permissões administrativas restritas. O desenvolvedor define cabeçalhos e medidas adequados à infraestrutura, sem prejudicar recursos aprovados.

Analytics e Search Console somente quando autorizados e com contas/gestão definidas. Eventos propostos: clique em contato, telefone, e-mail, rotas e envio confirmado. Não enviar nome, e-mail, telefone ou mensagem como parâmetros de analytics. Banner de cookies, se necessário, deve corresponder às tecnologias realmente instaladas e ao tratamento aprovado, sem componente decorativo ou consentimento fictício.

## 12. Critérios de aceitação da implementação

- As quatro páginas são navegáveis, URLs diretas funcionam e todos os CTAs chegam ao destino especificado.
- Copy e metadados correspondem à seção 5; alterações e microcopy novos ficam identificados para revisão.
- Fundo predominante azul-marinho, elementos claros/prata, marca original preservada e tipografia consistente.
- Não há profissionais, contatos, serviços adicionais ou fotografias apresentados como reais sem validação.
- Desktop e mobile respeitam ordem, hierarquia e leitura integral; sem rolagem horizontal em 320 px.
- Menu, links, âncoras e formulário operam por teclado; foco visível, ordem lógica e movimento reduzido respeitados.
- Contraste medido nas combinações efetivas; imagens com alt adequado; formulários com labels e erros associados.
- Demonstração identificada, sem envio fictício, sem indexação e sem mensuração não autorizada.
- Produção só habilita envio depois de teste de recepção real e aprovação do fluxo de privacidade.
- Imagens e fontes otimizadas, dimensões reservadas e metas de performance verificadas com evidência apropriada.
- Nenhum link vazio, destino inventado, texto de pendência tratado como dado real ou erro de console impeditivo.

Verificações a executar pelo desenvolvedor: revisão visual em larguras 320, 390, 768, 1024 e 1440 px; teclado; zoom; preferência de movimento reduzido; contraste; rotas e âncoras; envio e falhas quando integrado; metadados e rastreabilidade. Essa lista define a aceitação, não afirma que o site já foi testado.

## 13. Pendências e responsáveis

| Pendência | Responsável sugerido | Impacto |
|---|---|---|
| Logo, códigos oficiais e arquivos de marca | Escritório / Olho Óptico | Fidelidade visual final |
| Fotos, autorização e licenças | Escritório / Olho Óptico | Equipe e imagens reais |
| Equipe, formação e registros | Escritório | Seção equipe e identificação |
| Serviços e linguagem institucional | Escritório | Publicação dos textos |
| Unidades, endereço e funcionamento | Escritório | Presença, mapas e SEO local |
| Telefone, e-mail e Instagram | Escritório | CTAs reais |
| Destinatário, provedor e retenção | Escritório / desenvolvedor | Formulário operacional |
| Política de Privacidade e publicidade jurídica | Responsável jurídico do escritório | Revisão antes de publicar |
| Stack, infraestrutura e domínio | Desenvolvedor / contratante | Implementação e operação |
| Inventário de URLs e redirecionamentos | Desenvolvedor | Migração |
| Analytics, Search Console e acesso | Escritório / Olho Óptico | Mensuração autorizada |

## 14. Instrução compacta para IA de programação

Implemente uma demonstração institucional navegável da Gazzetti com as quatro rotas deste documento. Preserve literalmente o copy da seção 5, a sequência das seções e os destinos da seção 2. Aplique a direção Dark Navy Premium e os tokens provisórios da seção 3, mantendo a logo original. Faça mobile desde o início, com conteúdo integral, foco visível, navegação por teclado e movimento reduzido. Não acrescente informações, serviços, depoimentos, unidades ou profissionais. Não substitua pendências por dados inventados. Use avisos de demonstração para materiais ilustrativos e mantenha o formulário sem envio real até integração autorizada. Não configure analytics, publicação no domínio do cliente ou indexação nesta versão. A stack será definida pelo desenvolvedor. Antes de concluir, verifique os critérios da seção 12 e relate evidências, pendências e decisões técnicas. Solicite revisão da direção criativa para mudanças relevantes de estrutura, estética ou textos.

## 15. Próxima etapa

Este handoff conclui a etapa 05 para revisão da Olho Óptico. A aprovação autoriza avançar à etapa 06, com checklist de validação e publicação. A aprovação do documento não elimina as pendências do cliente nem equivale a publicação autorizada. Nenhum código, site ou teste de site foi produzido nesta entrega.
