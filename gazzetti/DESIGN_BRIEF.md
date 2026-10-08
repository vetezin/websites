# Gazzetti — direção de design

## Negócio
Gazzetti Advogados Associados atua em advocacia e consultoria empresarial.
O público são empresários, gestores e responsáveis por decisões jurídicas.
O conteúdo atual destaca estruturação de negócios, negociação e contencioso.
A interface deve ajudar a identificar a especialidade e conhecer os profissionais.
Confiança vem de informações claras, equipe identificada, discrição e contato acessível.
O visitante quer entender escopo, abordagem e qual unidade procurar.
A ação principal é entrar em contato com o escritório.
A percepção desejada é precisão e proximidade; evitar ostentação e promessas de resultado.

## Atributos
- Precisão: linguagem objetiva e alinhamentos consistentes.
- Discrição: cor restrita, nenhum apelo comercial agressivo.
- Proximidade: pessoas e canais de contato facilmente encontrados.
- Continuidade: azul institucional e assinatura curva da marca preservados.
- Não parecer: marketplace jurídico, startup de tecnologia ou advocacia de luxo genérica.

## Três direções
1. **Arquitetura empresarial:** abertura assimétrica, fotografia em painel, serifada controlada, listas abertas de serviços. Ritmo entre branco e azul, navegação horizontal convencional e movimento curto.
2. **Mesa de trabalho:** composição utilitária e densa, navegação lateral, tipografia inteiramente sem serifa, diagramas de escopo e imagens pequenas. Interações focadas em pesquisa e descoberta de áreas.
3. **Retrato do escritório:** abertura fotográfica imersiva, tipografia sobreposta e percurso narrativo pela equipe. Navegação compacta, retratos dominantes e transições fotográficas suaves.

Escolhida: arquitetura empresarial. Equilibra a especificidade dos serviços com uma presença humana, sem depender da disponibilidade de fotografias reais de todos os profissionais.

## Visual DNA
Composição arquitetural e assimétrica; densidade equilibrada; títulos institucionais expressivos e corpo neutro; geometria retangular; imagens de apoio; movimento funcional; ritmo variável; cor guiada pela marca.
Regra autoral: painéis fotográficos recebem uma pequena moldura deslocada e uma curva de assinatura em pontos de transição. A curva representa a continuidade presente no logo; não é usada como decoração repetida em cada bloco.

## Arquitetura
- Início: posicionamento → três escopos de atuação → abordagem → equipe → unidades.
- Escritório: identidade, modo de trabalhar, presença física; evita repetir a home.
- Áreas: índice por necessidade, três seções com escopo e dúvidas, contato contextual.
- Equipe: profissionais fictícios claramente identificados, perfis detalhados em diálogo acessível.
- Links úteis: curadoria de fontes oficiais com busca e filtros acessíveis.
- Contato: canais primeiro, formulário de rascunho por e-mail, unidades e privacidade.
- Privacidade: aviso demonstrativo e links aos documentos existentes, sem simular parecer jurídico.

## Tokens
- Display: Newsreader, serifada; corpo e navegação: Manrope, sem serifa. Fontes locais com swap, fallback Georgia/Arial.
- Azul profundo #122D4C; azul institucional #244A70; texto #263B4E; secundário #526272; branco #FFFFFF; superfície #F2F5F7; acento #A7BDD0.
- Texto #263B4E sobre branco e branco sobre #122D4C excedem AA; texto secundário também é verificado no teste de contraste.
- Escala: 14, 16, 18, 24, 32, 44, 64, 80 px, ajustada com clamp. Corpo de leitura em 18 px, interfaces em pelo menos 16 px e informações secundárias em pelo menos 14 px; não diminuir no mobile para acomodar layout. Entrelinha de leitura de pelo menos 1,6. Regra obrigatória registrada em `AGENTS.md`.
- Espaço: 8, 12, 16, 24, 32, 48, 64, 96, 128 px.
- Raio: 0 a 2 px; sombra apenas no menu e diálogo; divisores finos.
- Motion: hover 180 ms; entradas seletivas 650 ms, deslocamento 14 px; respeita reduced-motion; conteúdo visível sem JS.

## Stack e autorização
Astro + CSS próprio + JavaScript pontual, conforme proposto e aprovado pelo usuário em 08/10/2026 (“Ok, monte ele”). Alternativa considerada: HTML/CSS/JS puros; Astro evita duplicação entre sete páginas e gera HTML estático. Nenhuma biblioteca de motion necessária.

## Suposições e pendências
- Redesign demonstrativo local; sem publicação automática nem integração de envio.
- Equipe, retratos e biografias são MOCK autorizados, com aviso visível e dados centralizados.
- Textos de posicionamento e método são propostas editoriais a validar, não fatos históricos.
- Endereços, telefones e e-mails vêm do site existente; confirmar atualidade antes de publicar.
- Não inventar OAB, clientes, prêmios, anos de atuação, resultados ou depoimentos.
- Fachada original preservada na home e na página Escritório, com enquadramento completo da porta e placa. Retratos gerados permanecem identificados como fictícios; a arquitetura gerada inicial foi substituída por fotografia real.
- O formulário abre um rascunho no aplicativo de e-mail e nunca anuncia envio concluído.
- 21st CLI ausente; componentes próprios, sem reutilização visual de outros projetos.
