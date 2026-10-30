# PH UNITED

Protótipo local do catálogo frontal. Sem dependências externas de runtime ou instalação.

```powershell
cd C:/Users/Victor/.codex/worktrees/phunited/Sites/phunited
npm.cmd run dev
```

Abrir http://127.0.0.1:4177/. `npm.cmd test` verifica regras de catálogo; `npm.cmd run check` verifica sintaxe dos módulos e servidor. Com servidor ativo, `node tests/browser-check.mjs` verifica fluxos e grava screenshots em artifacts/. O teste usa Playwright do runtime e Chrome instalado, configuráveis por PLAYWRIGHT_MODULE_PATH e CHROME_PATH. O site é buildless: não exige build.

Conteúdo em `src/content.js`; regras em `src/catalog.js`; interações em `src/app.js`; tokens/composição em `styles.css`. Imagens atuais geradas por IA: `GENERATED_ASSETS.md`. Referências anteriores: `ASSET_SOURCES.md`. O carrossel alterna entre duas vistas sintéticas, com a segunda carregada sob demanda. Troca natural no hover/foco, sem setas; no celular, por deslize. Movimento reduzido desativa a alternância automática. Busca ativa permanece indicada ao fechar o painel; limpar preserva categoria/ordenação.

Todo catálogo é MOCK. `CONTENT_TODO.md` lista o necessário para publicação. `robots.txt` e meta robots bloqueiam indexação durante o protótipo; sitemap e URLs definitivas aguardam domínio real. Não há venda, estoque, checkout, dados de contato ou páginas de produto.
