## Isolamento obrigatório de mudanças por site

Antes de editar um site, leia `docs/SITE_BRANCHES.md`, identifique a pasta alvo e confira a branch com `git branch --show-current` e o estado com `git status --short`.

| Pasta autorizada | Branch de trabalho |
| --- | --- |
| `chapeudepalha/` | `chapeudepalha` |
| `conveniencia018/` | `conveniencia018` |
| `eletrosevero/` | `eletrosevero` |
| `gazzetti/` | `gazzetti` |
| `volpicontabilidade/` | `volpicontabilidade` |
| `espetinhodoleo/` | `codex/espetinhodoleo` |
| `ragassi/` | `ragassi` |
| `phunited/` | `phunited` |

- Mudanças em um site devem ocorrer exclusivamente na branch correspondente e dentro da pasta autorizada, incluindo seus documentos e testes. Leia também o AGENTS.md local, quando existir.
- Não implemente mudanças de site em `main` nem na branch de outro site. Em HEAD destacado, selecione a branch correspondente antes de editar.
- Não altere outros sites nem arquivos compartilhados da raiz (`scripts/`, `.github/`, `package.json`, instruções globais etc.) como efeito colateral. Se uma mudança compartilhada for necessária, explique o impacto e obtenha autorização específica.
- Antes de trocar de branch, confira alterações locais e worktrees existentes. Nunca descarte, guarde em stash ou commite trabalho alheio automaticamente. Com trabalho pendente ou outra sessão usando o checkout, prefira um worktree isolado; ele parte de commits e não inclui mudanças não commitadas.
- Uma branch contém todos os sites: o nome da branch não limita os caminhos que o Git permite editar. Respeite o escopo da tabela e revise os caminhos alterados antes de cada commit.
- Adicione somente os arquivos da tarefa ao staging. Verifique `git diff --cached --name-only` e impeça commits com caminhos fora do site, salvo autorização explícita. Preserve mudanças preexistentes.
- Não faça merge em `main` nem push sem pedido explícito do usuário. A `main` integra a publicação conjunta dos sites.
- Tarefas explicitamente autorizadas de manutenção do repositório podem alterar arquivos compartilhados e não precisam usar uma branch de site. Novos sites exigem atualizar este mapa antes do desenvolvimento.

# AGENTS.md — Design e desenvolvimento de websites

## 0. Escopo e idioma

- Estas diretrizes valem para **novos sites e redesigns**.
- Em **ajustes pontuais** (bug, formulário, texto, seção isolada): preserve o design existente, siga a stack e as convenções atuais e **pule as seções 3 e 4**.
- Converse comigo em **português (pt-BR)**. O site e o copy usam **pt-BR por padrão**, salvo instrução contrária.
- Comentários de código e nomes técnicos podem ficar em inglês.

## 1. Princípio central

Todo site nasce do contexto específico da empresa, do público, do mercado e do objetivo. Nunca é variação de um projeto anterior.

- **Reutilize engenharia** (acessibilidade, responsividade, utilitários, formulários, performance).
- **Não reutilize sameness visual** (hero, ritmo de seções, tipografia, cards, navegação, linguagem de animação).
- Tendência só é aceitável se servir à marca. A pergunta nunca é "que tendência uso?", e sim "que linguagem visual representa esta empresa?".

Cadeia obrigatória de decisão:

NEGÓCIO → PÚBLICO → CONTEÚDO → HIERARQUIA DE INFORMAÇÃO → DIREÇÃO DE ARTE → COMPOSIÇÃO → COMPONENTES → IMPLEMENTAÇÃO

Nunca o contrário (componentes → template → conteúdo).

## 2. Informação ausente e integridade do conteúdo

- Use todo o contexto disponível: repositório, site atual, logo, cores, fotos, produtos, serviços, referências, concorrentes e minhas instruções.
- Se faltar algo essencial (o que a empresa faz, para quem, ação principal), **pergunte o mínimo necessário**. Se for possível seguir, **assuma e registre a suposição** no brief.
- **Dados mock são permitidos e desejados** para demonstrar visualmente a ideia: o site deve parecer completo, com ritmo, densidade e hierarquia reais, não uma casca vazia. Quando faltar conteúdo, preencha com mock **plausível, coerente com o nicho e no tom da marca** (textos, serviços, itens de cardápio, projetos, preços de exemplo, depoimentos de exemplo, imagens de apoio).
- **Todo mock deve ser identificável e fácil de substituir:**
  - Centralize os dados em um único lugar (ex.: `content.ts`, `content.json`, `data/site.js`) em vez de espalhar pelo markup.
  - Marque cada item com `MOCK` (comentário ou campo), para busca rápida (`grep MOCK`).
  - Para fatos que parecem reais e verificáveis (depoimentos, métricas, certificações, prêmios, nomes de clientes, endereço, telefone, CNPJ, preços), use valores **obviamente fictícios** (ex.: "Nome do Cliente", `(00) 00000-0000`, "Rua Exemplo, 123") ou identifique visualmente como exemplo. Nunca apresente como verdadeiro algo que não foi fornecido.
  - Não use fotos de pessoas reais como se fossem clientes ou equipe. Use imagens neutras, ilustrações ou placeholders coerentes com a direção de arte.
  - Se o site for publicado, os mocks de fatos verificáveis **não podem ir ao ar** sem substituição. Avise na entrega.
- **Na entrega, inclua uma lista do que é mock** e do que o cliente precisa fornecer (arquivo `CONTENT_TODO.md` ou seção no resumo).
- Sem fotos, não crie um design dependente de imagens. Use tipografia, composição, ilustração ou diagramas.
- Se já existe marca estabelecida (logo, cores, tipografia, fotografia, tom), **respeite-a** e melhore como ela se expressa no digital. Não redesenhe a empresa, a menos que isso seja a tarefa.

## 3. Fluxo obrigatório (novos sites e redesigns)

1. **Entender o negócio.** Responda, em 5 a 8 linhas: o que a empresa faz; quem é o público; que problema resolve; o que a diferencia; o que gera confiança nesse mercado; que dúvidas o cliente tem; qual a ação principal de conversão; que percepção criar e qual evitar.
2. **Criar `DESIGN_BRIEF.md`** na raiz com:
   - análise do negócio (item 1);
   - **atributos de marca** justificados e **o que a marca NÃO deve parecer**;
   - **3 direções estruturalmente diferentes** (composição, grid, tipografia, densidade, imagem, navegação, ritmo, movimento), 2 a 3 linhas cada. Não vale trocar só as cores;
   - direção escolhida e por quê;
   - **Visual DNA** (seção 4);
   - **restrição visual marcante**: uma regra autoral que dá identidade e é aplicada em todo o site (ex.: uma proporção, um tipo de grid, uma relação de escala, um tratamento de imagem);
   - arquitetura de informação justificada (quais seções e por quê);
   - **tokens**: fontes, paleta com contraste verificado, escala tipográfica, espaçamento, raio, sombras;
   - suposições feitas e conteúdo pendente.
3. **Propor a stack** (seção 8) junto com o brief e **aguardar minha confirmação** antes de instalar qualquer dependência.
4. **Implementar** usando os tokens do brief.
5. **Verificar** (seção 9).
6. **Entregar** com resumo curto: o que foi feito, suposições, placeholders pendentes, como rodar.

## 4. Visual DNA

Defina cada eixo e mantenha coerência entre eles. Não randomize para criar variedade.

- **Composição:** simétrica, assimétrica, editorial, modular, cinematográfica, arquitetural, orientada a grid, orientada a imagem, utilitária.
- **Densidade:** esparsa, equilibrada, densa, altamente informativa.
- **Tipografia:** elegante, editorial, neutra, técnica, expressiva, amigável, institucional, etc. Distinga display, títulos, corpo, navegação, rótulos e CTAs. Máximo de 2 famílias. Não repita automaticamente a combinação de outro projeto.
- **Geometria:** afiada, suave, orgânica, técnica, restrita.
- **Imagem:** dominante, de apoio, atmosférica, documental, produto, portfólio, pessoas, mínima. Se há boas imagens, construa a composição em torno delas.
- **Movimento:** ausente, sutil, funcional, cinematográfico, expressivo. Combine com a personalidade da marca.
- **Ritmo de seções:** regular, editorial, narrativo, irregular, compacto, expansivo.
- **Cor:** restrita, monocromática, guiada pela marca, expressiva, funcional, alto contraste. A cor vem da marca, do mercado, da emoção desejada e da legibilidade, não de moda. Dark mode e azul/roxo não são default.

## 5. Arquitetura de informação e composição

- **Não assuma seções fixas** (hero, benefícios, serviços, depoimentos, FAQ, CTA, rodapé). Determine o que o cliente precisa saber para decidir.
- O negócio define a estrutura. Exemplos: estúdio de arquitetura → portfólio, projetos, processo, filosofia; restaurante → atmosfera, cardápio, reserva, localização, horário; serviço profissional → especialidade, credibilidade, método, casos, equipe; construtora → obras, escala, capacidade técnica, certificações; marca de luxo → imagem, narrativa, craftsmanship; negócio local → clareza, serviços, localização, contato, avaliações; tecnologia → produto, demonstração, integrações, resultados.
- **Hierarquia:** cada seção tem uma ideia dominante. A hierarquia deve continuar legível sem os elementos decorativos.
- **Ritmo:** varie alinhamento, escala, densidade, espaço, tamanho de imagem e fundo de forma que sirva à narrativa. Evite sequências mecânicas texto+imagem / imagem+texto e espaçamento idêntico em tudo.
- **Navegação:** adapte ao número de páginas, ao público e à ação principal. Usabilidade vem antes de novidade.
- **Mercado:** conheça as convenções que geram confiança e não as quebre só para parecer único. Originalidade vem de marca, conteúdo, composição e narrativa, não de confundir o usuário.
- **Componentes servem à interface**, não o contrário. Reutilize quando função, interação ou estrutura de conteúdo realmente se repetem. Não transforme tudo em card.

## 6. Padrões genéricos de "site de IA"

Não são proibidos. São **proibidos como default automático**. Só use se o brief justificar:

hero centralizado com título grande + subtítulo + dois botões; três cards de benefícios; grids de features repetitivos; Bento; cards dentro de cards; raio grande em tudo; fundos com brilho, blobs ou gradientes roxo/azul; glassmorphism; dashboards flutuantes; círculos de ícone repetidos; pills e micro-rótulos acima de todo título; estatísticas e depoimentos genéricos; seções alternadas imagem/texto; badges sem função; decoração sem significado.

Cuidado também com o efeito colateral: fugir desses padrões não deve levar ao **novo padrão genérico** (ex.: fundo creme + serifada "elegante" em todo projeto premium). A restrição visual marcante do brief é o contrapeso.

## 7. Conversão, movimento e responsividade

- **CTA contextual:** defina a ação natural do negócio (agendar, pedir orçamento, ver projetos, ver cardápio, reservar, falar com especialista, visitar a loja, solicitar demonstração). Clara, sem repetição excessiva. Nem toda seção precisa de botão.
- **Mercado brasileiro:** para negócios locais e de serviço, considere **WhatsApp como canal principal** (link com mensagem pré-preenchida), telefone clicável, mapa, horário e dados de contato consistentes (NAP). Se houver cookies, analytics ou formulários, preveja **aviso de privacidade e consentimento conforme a LGPD**.
- **Movimento com propósito:** hierarquia, feedback, continuidade, ênfase. Não anime todas as seções nem repita o mesmo reveal. Nada que atrase o acesso ao conteúdo. Sempre respeitar `prefers-reduced-motion`.
- **Mobile é nova composição**, não desktop reduzido: reconsidere ordem da informação, hierarquia, navegação, recortes de imagem, alinhamento, espaçamento, tipografia e decoração. Preserve a intenção, não a geometria.

## 8. Escolha de stack

Não adote a mesma stack em todo site. Escolha pelas necessidades reais.

1. Verifique a stack existente e preserve-a quando adequada.
2. Considere: tipo e volume de conteúdo, interações e animações, SEO e desempenho, CMS/autenticação/integrações, hospedagem, facilidade de manutenção pela equipe.
3. Compare brevemente a solução mais simples com **uma** alternativa relevante, com benefícios e custos.
4. Apresente a stack e a justificativa **antes** de instalar dependências.

Referências: site institucional simples pode usar HTML, CSS e JS; muito conteúdo pode se beneficiar de geração estática; estado e interação complexos podem justificar framework de componentes; Tailwind quando ajuda consistência e iteração; bibliotecas de animação só com função definida. Nada de dependência por popularidade.

**Não instale novas dependências sem a confirmação prevista nas permissões do projeto.**

## 9. Qualidade técnica e verificação

**Engenharia (sempre):**
- HTML semântico, formulários com labels, navegação por teclado, foco visível, contraste suficiente (WCAG AA), alt text significativo, nada que dependa só de hover.
- Imagens otimizadas (formatos modernos, dimensões, `loading` adequado). Evitar JS e dependências desnecessárias.
- Fontes: self-host ou Google Fonts com `font-display: swap`, no máximo 2 famílias.
- **SEO técnico:** `title` e `meta description` únicos por página, Open Graph, favicon, `lang="pt-BR"`, sitemap e robots, **schema.org** adequado ao tipo de negócio (ex.: `LocalBusiness`, `Restaurant`, `Organization`), headings em ordem.
- **Performance:** metas de LCP < 2,5 s, CLS < 0,1 e Lighthouse ≥ 90 em performance, acessibilidade e SEO. Meça quando possível.
- Console sem erros evitáveis. Código limpo e legível.

**Verificação visual (obrigatória em novos sites e redesigns):**
1. Rodar o site localmente.
2. Capturar screenshots em **390 px (mobile)** e **1440 px (desktop)**, de todas as páginas principais (use Playwright ou equivalente, se disponível; se precisar instalar, peça confirmação).
3. Olhar os screenshots e criticar: hierarquia, espaçamento, recortes de imagem, quebras de texto, overflow, contraste, consistência com o brief.
4. Corrigir e repetir até resolver os problemas relevantes.

## 10. Revisão final de especificidade

Antes de concluir, responda com honestidade (resumido na entrega):

- **Negócio:** o site comunica o que a empresa faz? O público é óbvio? Gera o tipo certo de confiança? O caminho de conversão está claro?
- **Marca:** tipografia, imagem, cor e movimento sustentam a personalidade definida no brief?
- **Design:** há hierarquia clara? Cada seção tem propósito? Há excesso de containers ou de cards? As seções estão repetitivas? Efeitos sem motivo? O mobile preserva a experiência?
- **Teste de originalidade:** *se eu trocasse logo, nome, cores e texto, este mesmo site serviria para uma empresa totalmente diferente?* Se **sim**, está genérico. Revise arquitetura de informação, direção de arte, composição, tipografia, imagem e ritmo antes de entregar.

## 11. Definição de pronto

- [ ] `DESIGN_BRIEF.md` criado e coerente com o resultado
- [ ] Stack justificada e confirmada
- [ ] Build e lint sem erros; console limpo
- [ ] Screenshots em 390 px e 1440 px revisados
- [ ] Acessibilidade, SEO técnico e performance verificados
- [ ] Todo mock centralizado, marcado com `MOCK` e listado; nenhum fato verificável apresentado como real
- [ ] Teste de originalidade (seção 10) aprovado
- [ ] Resumo final entregue em pt-BR, com suposições e pendências

## 12. O objetivo

Não é tornar todo site incomum nem diferente por esporte. É tornar **cada decisão de design compreensível a partir do contexto da empresa**. Duas empresas parecidas podem gerar decisões parecidas; duas empresas muito diferentes raramente devem gerar a mesma estrutura e linguagem visual.

Busque: **adequação ao negócio + à marca + ao público + ao conteúdo + usabilidade + coerência visual + qualidade técnica.**

O resultado deve parecer algo que só poderia ter sido feito para aquela empresa.
### Diferenciação visual e criatividade controlada

- O objetivo não é maximizar originalidade, mas encontrar a linguagem visual mais adequada à empresa.
- Antes de implementar, identifique três decisões visuais específicas deste negócio e justifique por que elas não seriam escolhas automáticas para outro segmento.
- Diferencie projetos por estrutura, hierarquia, tipografia, composição, imagem e ritmo — nunca apenas por paleta e elementos decorativos.
- Preserve padrões familiares de navegação e interação. Não sacrifique clareza, confiança ou conversão por originalidade.
- Após analisar os screenshots, rejeite soluções visualmente intercambiáveis ou excessivamente experimentais. Corrija a direção de arte, não apenas os detalhes de CSS.
- Se duas empresas justificarem soluções semelhantes, não force diferenças artificiais.
