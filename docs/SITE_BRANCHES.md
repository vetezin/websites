# Trabalho separado por site

A `main` mantém todos os sites e a publicação conjunta. Cada branch abaixo é
uma linha de trabalho para um site; nenhuma pasta foi removida ou movida.

| Site / pasta | Branch | Escopo permitido |
| --- | --- | --- |
| Chapéu de Palha | `chapeudepalha` | `chapeudepalha/` |
| Conveniência Zero18 | `conveniencia018` | `conveniencia018/` |
| Eletro Severo (brief e assets iniciais) | `eletrosevero` | `eletrosevero/` |
| Gazzetti Advogados | `gazzetti` | `gazzetti/` |
| Volpi Contabilidade | `volpicontabilidade` | `volpicontabilidade/` |
| Espetinho do Léo | `codex/espetinhodoleo` | `espetinhodoleo/` |
| Ragassi Auto Mecânica | `ragassi` | `ragassi/` |
| PH UNITED | `phunited` | `phunited/` |

## Iniciar uma mudança

1. Identifique o site pelo pedido e confira `git status --short`,
   `git branch --show-current` e `git worktree list`.
2. Com checkout limpo e sem outra sessão usando essa pasta, selecione a branch:
   `git switch gazzetti` (exemplo).
3. Trabalhe somente em `gazzetti/` nesse exemplo. Leia o `AGENTS.md` da raiz
   e o do site. Execute as validações pertinentes a esse site.
4. Revise `git diff --name-only` e `git diff --cached --name-only` antes de
   commitar. Adicione arquivos explicitamente, sem incluir trabalho alheio.
5. Informe a branch, os arquivos alterados e as validações na entrega.

Branches não restringem arquivos: todas continuam contendo o repositório
inteiro. As instruções do `AGENTS.md` orientam o Codex sobre o escopo, mas não
constituem uma barreira de permissões do Git.

## Trabalho simultâneo ou checkout com mudanças pendentes

Use um worktree separado para cada branch quando houver sessões simultâneas
ou mudanças pendentes no checkout atual. Não troque a branch de uma pasta que
outra sessão está usando. Exemplo, usando uma pasta autorizada e disponível:

```powershell
git worktree add <pasta-autorizada-do-worktree> gazzetti
```

Abra a sessão de trabalho nessa pasta e confirme a branch antes de editar.
Se a branch já estiver em uso, utilize o worktree existente.
Os worktrees criados a partir da branch não recebem alterações não commitadas
da pasta original. Não use stash, reset ou commits para transportar trabalho
preexistente sem autorização.

## Integração e manutenção

As branches são locais até um push expressamente autorizado. Merge em `main`
também exige pedido explícito; push em `main` aciona a publicação conjunta.
Antes da integração, revise os caminhos do diff contra `main` para confirmar
que somente o site autorizado mudou. Quando `main` avançar, incorpore suas
atualizações à branch de trabalho em um checkout limpo, antes de novas mudanças;
não use rebase ou reescrita de histórico sem autorização.

Arquivos compartilhados, como workflows e scripts de publicação, exigem
escopo de manutenção explicitamente autorizado. Não ajuste outros sites
automaticamente para acomodar uma mudança local.

Para um novo site, registre pasta e branch no mapa da raiz e neste documento.
Não trate pastas de infraestrutura (`docs/`, `scripts/`, `pages/`, `.github/`)
como sites independentes.
