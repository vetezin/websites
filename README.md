# Websites

Sites independentes, com Git e publicação centralizados neste repositório.

## Sites e URLs de acesso

| Site | Pasta | URL de acesso |
| --- | --- | --- |
| Conveniência Zero18 | `conveniencia018/` | [https://vetezin.github.io/websites/conveniencia018/](https://vetezin.github.io/websites/conveniencia018/) |
| Volpi Contabilidade | `volpicontabilidade/` | [https://vetezin.github.io/websites/volpicontabilidade/](https://vetezin.github.io/websites/volpicontabilidade/) |
| Gazzetti Advogados | `gazzetti/` | [https://vetezin.github.io/websites/gazzetti/](https://vetezin.github.io/websites/gazzetti/) |
| Chapéu de Palha | `chapeudepalha/` | Retirado do GitHub Pages; código preservado para uso local. |
| Eletro Severo | `eletrosevero/` | [https://vetezin.github.io/websites/eletrosevero/](https://vetezin.github.io/websites/eletrosevero/) |
| Ragassi Auto Mecânica | `ragassi/` | [https://vetezin.github.io/websites/ragassi/](https://vetezin.github.io/websites/ragassi/) |
| Espetinho do Léo | `espetinhodoleo/` | [https://vetezin.github.io/websites/espleo/](https://vetezin.github.io/websites/espleo/) |

As URLs correspondem aos caminhos configurados nos scripts e documentos de cada
projeto. A disponibilidade online não pôde ser confirmada nesta atualização.
Gazzetti, Chapéu de Palha e Eletro Severo são prévias demonstrativas.
Chapéu de Palha está fora da publicação; seu código continua disponível no repositório.

## Branches por site

Cada site tem uma branch de trabalho para mudanças restritas à
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
Eletro Severo: `node eletrosevero/serve.mjs`; abra http://127.0.0.1:4175.
Ragassi: `cd ragassi` e `npm run dev`; abra http://127.0.0.1:4326/.
Espetinho do Léo: `cd espetinhodoleo`, `npm run build` e `npm run dev`; abra http://127.0.0.1:8780/.

Na raiz Sites, `npm run lint`, `npm test` e `npm run build:pages` validam e geram
a publicação conjunta. `npm run preview:pages` serve o resultado em
http://localhost:4330/websites/conveniencia018/ e
http://localhost:4330/websites/volpicontabilidade/ e
http://localhost:4330/websites/gazzetti/ e
http://localhost:4330/websites/eletrosevero/ e
http://localhost:4330/websites/ragassi/ e
http://localhost:4330/websites/espleo/.
Os builds ficam em `.pages/`, ignorada pelo Git.

## Como publicar

O repositório remoto é https://github.com/vetezin/websites.
O workflow `.github/workflows/pages.yml` instala as dependências já declaradas,
valida, compila os projetos que exigem build, inclui os arquivos estáticos da
Eletro Severo e publica um único artefato no GitHub Pages.
Em Settings → Pages, a origem é GitHub Actions.

Cada push em `main` atualiza os sites habilitados para publicação automaticamente. O status aparece
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
