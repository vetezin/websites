# Websites

Quatro projetos independentes, com Git e publicação centralizados nesta pasta.

- [Conveniência Zero18](https://vetezin.github.io/websites/conveniencia018/) — Next.js, React e TypeScript.
- [Volpi Contabilidade](https://vetezin.github.io/websites/volpicontabilidade/) — Astro, Tailwind e JavaScript.
- [Gazzetti Advogados](https://vetezin.github.io/websites/gazzetti/) — Astro, CSS e JavaScript; prévia demonstrativa.
- [Chapéu de Palha](https://vetezin.github.io/websites/cdpalha/) — HTML estático, CSS e JavaScript; prévia demonstrativa.

## Branches por site

Cada site tem uma branch local `codex/site-<pasta>` para mudanças restritas à
sua pasta. A `main` mantém a versão integrada. Consulte
[o mapa e o fluxo de trabalho](docs/SITE_BRANCHES.md) antes de editar.
Para sessões simultâneas ou alterações locais pendentes, use worktrees separados.
As regras para o Codex estão no `AGENTS.md` da raiz.

## Rodar localmente

Requisito: Node.js 24 e npm. Na primeira execução, rode `npm ci` nos projetos com dependências. Chapéu de Palha não exige instalação.

Conveniência: `cd conveniencia018` e `npm run dev`; abra http://localhost:3000.
Volpi: `cd volpicontabilidade` e `npm run dev`; abra http://localhost:4321.
Gazzetti: `cd gazzetti` e `npm run dev`; abra http://localhost:4322.
Chapéu de Palha: `cd chapeudepalha` e `npm run dev`; abra http://127.0.0.1:4324.

Na raiz Sites, `npm run lint`, `npm test` e `npm run build:pages` validam e geram
a publicação conjunta. `npm run preview:pages` serve o resultado em
http://localhost:4330/websites/conveniencia018/ e
http://localhost:4330/websites/volpicontabilidade/ e
http://localhost:4330/websites/gazzetti/ e
http://localhost:4330/websites/cdpalha/.
Os builds ficam em `.pages/`, ignorada pelo Git.

## Como publicar

O repositório remoto é https://github.com/vetezin/websites.
O workflow `.github/workflows/pages.yml` instala as dependências já declaradas,
valida, compila os quatro projetos e publica um único artefato no GitHub Pages.
Em Settings → Pages, a origem é GitHub Actions.

Cada push em `main` atualiza os quatro endereços automaticamente. O status aparece
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
