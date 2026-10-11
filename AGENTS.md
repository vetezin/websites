## Isolamento obrigatório de mudanças por site

Antes de editar um site, leia `docs/SITE_BRANCHES.md`, identifique a pasta alvo e confira a branch com `git branch --show-current` e o estado com `git status --short`.

| Pasta autorizada | Branch de trabalho |
| --- | --- |
| `chapeudepalha/` | `chapeudepalha` |
| `conveniencia018/` | `conveniencia018` |
| `eletrosevero/` | `eletrosevero` |
| `gazzetti/` | `gazzetti` |
| `volpicontabilidade/` | `volpicontabilidade` |

- Mudanças em um site devem ocorrer exclusivamente na branch correspondente e dentro da pasta autorizada, incluindo seus documentos e testes. Leia também o AGENTS.md local, quando existir.
- Não implemente mudanças de site em `main` nem na branch de outro site. Em HEAD destacado, selecione a branch correspondente antes de editar.
- Não altere outros sites nem arquivos compartilhados da raiz (`scripts/`, `.github/`, `package.json`, instruções globais etc.) como efeito colateral. Se uma mudança compartilhada for necessária, explique o impacto e obtenha autorização específica.
- Antes de trocar de branch, confira alterações locais e worktrees existentes. Nunca descarte, guarde em stash ou commite trabalho alheio automaticamente. Com trabalho pendente ou outra sessão usando o checkout, prefira um worktree isolado; ele parte de commits e não inclui mudanças não commitadas.
- Uma branch contém todos os sites: o nome da branch não limita os caminhos que o Git permite editar. Respeite o escopo da tabela e revise os caminhos alterados antes de cada commit.
- Adicione somente os arquivos da tarefa ao staging. Verifique `git diff --cached --name-only` e impeça commits com caminhos fora do site, salvo autorização explícita. Preserve mudanças preexistentes.
- Não faça merge em `main` nem push sem pedido explícito do usuário. A `main` integra a publicação conjunta dos sites.
- Tarefas explicitamente autorizadas de manutenção do repositório podem alterar arquivos compartilhados e não precisam usar uma branch de site. Novos sites exigem atualizar este mapa antes do desenvolvimento.

# WEBSITE DESIGN & DEVELOPMENT

## Core Principle

Every website must be designed specifically for the company, brand, audience, market, and objective it represents.

Never treat a new website as a variation of a previous project.

Do not begin with a predefined layout, visual style, component library, hero structure, section sequence, or aesthetic trend.

The design must emerge from the specific context of the current business.

Reusable engineering is encouraged.

Reusable visual sameness is not.

---

## 1. Understand the Business Before Designing

Before creating or significantly redesigning any website, first analyze the company.

Determine:

- What the company does.
- What it sells or provides.
- Who its primary audience is.
- What problem it solves.
- What differentiates it from competitors.
- What customers value most when choosing this type of company.
- What creates trust in this market.
- What objections or doubts potential customers may have.
- What action the website should primarily encourage.
- What information is most important for conversion.
- What perception the company wants to create.
- What perception should be avoided.

Use all available project context:

- company description
- existing website
- branding
- logo
- colors
- photographs
- products
- services
- target audience
- user instructions
- references
- competitors
- repository content

Never invent a visual identity before understanding the business.

---

# 2. Define the Brand Perception

Before deciding how the site should look, define how the brand should feel.

Possible attributes include, but are not limited to:

- premium
- sophisticated
- elegant
- technical
- industrial
- approachable
- playful
- youthful
- traditional
- trustworthy
- institutional
- bold
- energetic
- artistic
- minimalist
- luxurious
- innovative
- practical
- human
- exclusive
- accessible

Select only attributes justified by the company.

Also explicitly determine what the brand should NOT feel like.

Example:

Desired:

- trustworthy
- sophisticated
- human
- calm

Avoid:

- clinical
- cold
- overly technological
- generic corporate

These decisions should influence the entire interface.

---

# 3. Design From the Business, Not From Trends

Never choose visual styles simply because they are currently popular.

Do not automatically use:

- minimalism
- brutalism
- glassmorphism
- Bento layouts
- gradients
- dark mode
- oversized typography
- rounded cards
- editorial layouts
- animations
- 3D elements

First determine whether they support the brand.

A trend is acceptable only when it serves the project.

The question should never be:

"What visual trend should I use?"

The question should be:

"What visual language best represents this company?"

---

# 4. Explore Different Directions Before Implementation

For substantial new websites or redesigns, internally consider at least three genuinely different visual directions before choosing one.

The alternatives must differ structurally.

They should explore different combinations of:

- composition
- typography
- grid
- whitespace
- density
- imagery
- navigation
- geometry
- hierarchy
- section rhythm
- motion
- color behavior

Do not create three versions of the same layout with different colors.

Choose the direction that best represents:

- the brand
- the audience
- the content
- the market
- the desired perception
- the conversion objective

Only after selecting a direction should implementation begin.

---

# 5. Establish a Visual DNA

For each website, define an implicit Visual DNA before building the interface.

Determine:

### Composition

Possible approaches:

- symmetrical
- asymmetric
- editorial
- modular
- cinematic
- immersive
- architectural
- grid-driven
- free-flowing
- utilitarian
- product-focused
- image-led

### Density

Determine whether the interface should be:

- sparse
- balanced
- dense
- highly informational

### Typography

Determine whether typography should feel:

- elegant
- editorial
- neutral
- technical
- expressive
- friendly
- bold
- understated
- luxurious
- institutional

### Geometry

Determine whether shapes and containers should feel:

- sharp
- soft
- architectural
- organic
- restrained
- technical

### Imagery

Determine the role of imagery:

- dominant
- supporting
- atmospheric
- documentary
- product-focused
- portfolio-focused
- people-focused
- minimal

### Motion

Determine whether motion should be:

- absent
- subtle
- functional
- cinematic
- expressive

### Section Rhythm

Determine whether page sections should feel:

- regular
- editorial
- narrative
- irregular
- compact
- expansive

### Color Behavior

Determine whether color should be:

- restrained
- monochromatic
- brand-led
- expressive
- functional
- high-contrast
- atmospheric

All decisions must belong to the same coherent visual language.

Never randomize design decisions simply to create variety.

---

# 6. Content Comes Before Layout

Always follow this hierarchy:

BUSINESS  
→ AUDIENCE  
→ CONTENT  
→ INFORMATION HIERARCHY  
→ ART DIRECTION  
→ COMPOSITION  
→ COMPONENTS  
→ IMPLEMENTATION

Never use:

COMPONENTS  
→ TEMPLATE  
→ CONTENT

Do not force company content into a predefined page structure.

Let the content determine the layout.

---

# 7. Build a Business-Specific Information Architecture

Do not assume every website requires the same sections.

Do not automatically create:

- Hero
- Benefits
- Services
- Testimonials
- FAQ
- CTA
- Footer

Determine what information the customer actually needs.

Different businesses require different storytelling.

For example:

An architecture studio may prioritize:

- portfolio
- photography
- projects
- philosophy
- process
- architects

A restaurant may prioritize:

- atmosphere
- menu
- food
- reservations
- location
- opening hours

A professional service business may prioritize:

- expertise
- credibility
- methodology
- cases
- team
- trust

A construction company may prioritize:

- projects
- scale
- technical capability
- credibility
- numbers
- certifications

A luxury brand may prioritize:

- imagery
- storytelling
- exclusivity
- craftsmanship
- product presentation

A local service business may prioritize:

- clarity
- services
- location
- contact
- reviews
- immediate conversion

A technology company may prioritize:

- product
- demonstration
- functionality
- integrations
- results
- adoption

Let the business determine the structure.

---

# 8. Avoid Generic AI Website Design

Never automatically default to the stereotypical AI-generated landing page.

Be especially careful with:

- centered hero sections
- huge headline + subtitle + two buttons
- three benefit cards
- repetitive feature grids
- Bento grids
- excessive cards
- cards inside cards
- excessive rounded rectangles
- large border radius everywhere
- glowing backgrounds
- purple and blue gradients
- random gradient blobs
- glassmorphism
- floating dashboards
- abstract background effects
- repeated icon circles
- excessive pills
- tiny labels above every heading
- generic statistics
- generic testimonials
- alternating image/text sections
- identical section spacing
- identical container widths everywhere
- excessive floating elements
- unnecessary badges
- decorative UI without meaning

These elements are not prohibited.

They are prohibited as automatic defaults.

Use them only when appropriate for the specific project.

---

# 9. Avoid Repeating Previous Websites

Every new project must be approached with a fresh composition.

Do not reuse another website's:

- hero structure
- section structure
- page rhythm
- typography system
- card style
- decorative elements
- image positioning
- CTA composition
- visual hierarchy
- navigation style
- animation language

unless there is a strong project-specific reason.

It is acceptable to reuse:

- accessibility solutions
- responsive techniques
- utility functions
- performance patterns
- technical components
- form logic
- tested interaction logic
- infrastructure

Reuse engineering.

Reconsider design.

---

# 10. Do Not Let Components Dictate the Design

Components should support the interface.

The interface should not exist to reuse components.

Do not transform every piece of content into a reusable card.

Do not create abstraction simply because two things look vaguely similar.

For marketing websites, expressive composition is allowed and encouraged when appropriate.

Reuse components when:

- functionality repeats
- interaction repeats
- content structure genuinely repeats
- consistency benefits usability

Do not force visual repetition for the sake of component reuse.

---

# 11. Typography Is Part of the Brand

Typography must reflect the company.

Do not automatically reuse the same font combination between projects.

Typography should consider:

- industry
- brand personality
- audience
- content
- readability
- hierarchy
- sophistication
- tone

Create clear distinction between:

- display typography
- headings
- body copy
- navigation
- labels
- metadata
- CTAs

Avoid making every heading identical.

Avoid oversized typography without purpose.

Avoid decorative typography that damages readability.

---

# 12. Use Imagery Strategically

Determine what kind of imagery best communicates the company.

Possible priorities include:

- product
- people
- environment
- architecture
- lifestyle
- process
- craftsmanship
- results
- portfolio
- illustration
- diagrams

Images should contribute to storytelling and composition.

Do not treat photographs as decorative rectangles inserted after the design is complete.

When strong imagery exists, allow the composition to be built around it.

When imagery is weak or unavailable, do not create an image-dependent design.

---

# 13. Color Must Have a Reason

Do not introduce colors because they look fashionable.

Color choices should come from:

- existing branding
- market positioning
- desired emotion
- readability
- contrast
- hierarchy

Avoid adding several accent colors without purpose.

Avoid defaulting to blue or purple simply because the project is technological.

Avoid dark interfaces simply because they appear premium.

The brand determines the palette.

---

# 14. Navigation Must Match the Website

Do not automatically use the same navbar on every project.

Navigation should depend on:

- number of pages
- amount of content
- audience familiarity
- primary action
- device
- project complexity

It may be:

- minimal
- traditional
- editorial
- persistent
- contextual
- product-focused
- conversion-focused

Usability takes priority over visual novelty.

---

# 15. Responsive Design Is a New Composition

Do not treat mobile design as a scaled-down desktop website.

For smaller screens, actively reconsider:

- information order
- hierarchy
- navigation
- image crops
- alignment
- spacing
- typography
- section composition
- interactions
- decorative elements

When appropriate:

- reorder content
- simplify layouts
- remove nonessential decoration
- stack elements differently
- change image behavior
- simplify navigation
- reduce density

Preserve the intention of the design, not the exact desktop geometry.

---

# 16. Motion Must Have Purpose

Animations should support:

- hierarchy
- feedback
- storytelling
- continuity
- interaction
- emphasis

Do not animate every section.

Do not apply the same reveal animation across the entire page.

Avoid animation that:

- delays access to content
- makes navigation slower
- distracts from reading
- exists only to demonstrate technical ability

Motion should match the personality of the brand.

A playful brand may use more expressive motion.

A luxury brand may use restrained movement.

A technical interface may use almost exclusively functional motion.

Always respect reduced-motion preferences.

---

# 17. Conversion Must Be Contextual

Do not automatically use the same CTA language or placement.

Determine the natural next action for the business.

Examples:

- Schedule consultation
- Request quote
- View projects
- See menu
- Reserve
- Talk to specialist
- Visit store
- Explore collection
- Request demonstration
- Contact team

The primary action must be visually clear without becoming excessively repetitive.

Not every section needs a CTA button.

---

# 18. Maintain Visual Hierarchy

Every page should have intentional levels of emphasis.

Not everything should compete for attention.

Determine:

- primary content
- secondary content
- supporting information
- actions
- background information

Each section should have a clear dominant idea.

The hierarchy should remain understandable even if decorative elements are removed.

---

# 19. Create Rhythm, Not Repetition

Sections should feel connected without becoming mechanically repetitive.

Avoid sequences such as:

text + image  
image + text  
text + image  
image + text

for the entire page.

Allow variation in:

- alignment
- scale
- density
- whitespace
- image size
- typography
- background
- composition

Variation should support the narrative.

It should never feel random.

---

# 20. Design for the Specific Market

Consider expectations of the company's market.

Understand which conventions create trust and which create differentiation.

Do not break useful conventions simply to make the site unique.

Originality should come from:

- brand
- content
- composition
- storytelling
- visual language

not from intentionally confusing the user.

---

# 21. Preserve Existing Brand Assets

When an established brand already exists, respect it.

Analyze:

- logo
- typography
- colors
- photography
- graphic elements
- tone
- existing communication

Do not replace the brand identity with a fashionable design trend.

Improve how the brand is expressed digitally.

Do not redesign the company unless redesigning the brand is part of the task.

---

# 22. Technical Quality

Regardless of visual direction:

- Use semantic HTML.
- Maintain accessibility.
- Ensure keyboard navigation.
- Provide visible focus states.
- Use appropriate form labels.
- Maintain sufficient contrast.
- Use meaningful alt text where appropriate.
- Avoid hover-only interactions.
- Respect reduced-motion preferences.
- Optimize images.
- Avoid unnecessary dependencies.
- Avoid unnecessary JavaScript.
- Maintain good responsive behavior.
- Preserve performance.
- Keep the console free from avoidable errors.
- Maintain clean, understandable code.

Visual creativity must not reduce engineering quality.

---

# 23. Final Brand-Specificity Review

Before considering the website complete, review it critically.

Ask:

### Business

- Does the site communicate what this company actually does?
- Is the primary audience obvious?
- Does the content address what customers care about?
- Does the site create the correct type of trust?
- Is the primary conversion path clear?

### Brand

- Does the interface reflect the intended brand personality?
- Does typography support that personality?
- Does imagery support it?
- Does color support it?
- Does motion support it?
- Does the overall composition feel appropriate for this business?

### Design

- Is there a clear hierarchy?
- Does each section have a purpose?
- Is the composition intentional?
- Is whitespace intentional?
- Are there too many containers?
- Are cards being overused?
- Are sections becoming repetitive?
- Are visual effects being used without reason?
- Does mobile preserve the intended experience?

### Originality

Ask:

"If I replaced the logo, company name, colors and text, could this exact website easily belong to a completely unrelated business?"

If the answer is YES, the design is too generic.

Revisit:

- information architecture
- art direction
- composition
- typography
- imagery
- section rhythm

before finishing.

---

# 24. The Goal

The goal is NOT to make every website visually unusual.

The goal is NOT to intentionally make every website different.

The goal is to make every design decision understandable from the context of the company.

Two similar companies may legitimately produce similar design decisions.

Two very different companies should rarely result in the same website structure and visual language.

Do not pursue randomness.

Do not pursue trends.

Do not pursue novelty for its own sake.

Pursue:

BUSINESS FIT  
+ BRAND FIT  
+ AUDIENCE FIT  
+ CONTENT FIT  
+ USABILITY  
+ VISUAL COHERENCE  
+ TECHNICAL QUALITY

The final website should feel like it could only have been designed for the company it represents.

---

# 25. ESCOLHA DE TECNOLOGIAS POR PROJETO

Não adote automaticamente a mesma stack em todos os sites.
Escolha as tecnologias a partir das necessidades reais do projeto.

Antes de implementar:

1. Verifique a stack existente e preserve-a quando for adequada.
2. Considere:
   - tipo e volume de conteúdo;
   - interações e animações necessárias;
   - SEO e desempenho;
   - necessidade de CMS, autenticação ou integrações;
   - hospedagem disponível;
   - facilidade de manutenção pela equipe.
3. Compare brevemente a solução mais simples com uma alternativa
   relevante, explicando benefícios e custos.
4. Apresente a stack escolhida e sua justificativa antes de instalar
   dependências.

Frameworks e bibliotecas são bem-vindos quando oferecem benefícios
concretos. Não os adicione apenas por popularidade ou para tornar
a stack diferente de outro projeto.

Exemplos de critérios:
- Sites institucionais simples podem usar HTML, CSS e JavaScript.
- Sites com bastante conteúdo podem se beneficiar de geração estática.
- Interfaces com estado e interações complexas podem justificar
  um framework de componentes.
- Tailwind pode ajudar na consistência e na iteração visual.
- Bibliotecas de animação só devem ser usadas quando o movimento
  tiver uma função definida.

A originalidade deve vir da composição, tipografia, conteúdo,
imagens e comportamento da interface.

Reutilize boas soluções técnicas sem repetir automaticamente
a identidade visual de outros sites.

Não instale novas dependências sem a confirmação prevista
nas permissões do projeto.
