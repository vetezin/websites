# Websites

Dois projetos independentes, com Git e publicação centralizados nesta pasta.

- [Conveniência Zero18](https://vetezin.github.io/websites/conveniencia018/) — Next.js, React e TypeScript.
- [Volpi Contabilidade](https://vetezin.github.io/websites/volpicontabilidade/) — Astro, Tailwind e JavaScript.

## Rodar localmente

Requisito: Node.js 24 e npm. Na primeira execução, rode `npm ci` dentro de cada projeto.

Conveniência: `cd conveniencia018` e `npm run dev`; abra http://localhost:3000.
Volpi: `cd volpicontabilidade` e `npm run dev`; abra http://localhost:4321.

Na raiz Sites, `npm run lint`, `npm test` e `npm run build:pages` validam e geram
a publicação conjunta. `npm run preview:pages` serve o resultado em
http://localhost:4330/websites/conveniencia018/ e
http://localhost:4330/websites/volpicontabilidade/.
Os builds ficam em `.pages/`, ignorada pelo Git.

## Como publicar

O repositório remoto é https://github.com/vetezin/websites.
O workflow `.github/workflows/pages.yml` instala as dependências já declaradas,
valida, compila ambos os projetos e publica um único artefato no GitHub Pages.
Em Settings → Pages, a origem é GitHub Actions.

Cada push em `main` atualiza os dois endereços automaticamente. O status aparece
na aba Actions. Também é possível executar o workflow manualmente.
O Pages oferece um site por repositório; os projetos ficam em subdiretórios desse site.
Não envie `node_modules`, `.next`, `dist`, `out`, `.pages`, arquivos `.env` ou backups.

Para adicionar outro site, configure seu caminho `/websites/nome/`, acrescente o
build em `scripts/build-pages.mjs`, a cópia em `scripts/assemble-pages.mjs`, a
instalação/cache no workflow. Cada projeto recebe seu link direto, sem página de seleção.

## Histórico anterior

O Git que estava dentro de `conveniencia018` foi preservado em
`.local-backups/conveniencia018.git`. Essa pasta fica somente nesta máquina,
fora dos commits. O antigo repositório remoto da conveniência permanece intacto.
Agora os comandos Git devem ser executados na raiz Sites.
