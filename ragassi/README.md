# Ragassi Auto Mecânica

Site estático em HTML, CSS e JavaScript. Sem instalação de pacotes, fontes remotas, analytics, formulários ou cookies.

Requisito de desenvolvimento: Node.js 22 ou superior. Não precisa executar npm install.

```powershell
npm run dev
```

Abra http://127.0.0.1:4326/. O comando gera dist/ e inicia a prévia. Após editar, rode novamente para reconstruir.

```powershell
npm test
npm run lint
npm run build
npm run preview
```

Para gerar em subdiretório, defina SITE_BASE_PATH=/websites/ragassi/ no build e no servidor. SITE_URL define a URL dos metadados e sitemap.

Conteúdo em content.mjs; template em index.template.html; visual em assets/styles.css; menu em assets/main.js. Imagens são locais e rastreadas em assets/SOURCES.md.

DESIGN_BRIEF.md registra a direção aprovada. CONTENT_TODO.md lista aprovações e materiais pendentes. dist/ e qa/ são ignorados pelo Git.

Branch ragassi. Não houve integração, push ou publicação. Os scripts e workflows compartilhados permanecem intactos.
