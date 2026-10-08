# Publicação de dois websites

Goal: organizar os projetos no repositório vetezin/websites e publicar ambos via GitHub Pages.
Architecture: um repositório, um workflow e um artefato estático com dois subdiretórios.
Tech Stack: Next.js, Astro, Node.js, GitHub Actions e GitHub Pages; nenhuma dependência nova.

- [x] Ajustar caminhos da Volpi e validar os dois builds de produção.
- [x] Criar workflow central e documentação de execução/publicação.
- [x] Preservar Git anterior em backup ignorado e inicializar Git na raiz Sites.
- [x] Validar as páginas e navegação com Playwright, commit e push para main.
- [x] Habilitar Pages, conferir deployment e abrir os dois sites publicados.

Ruling: usar a pasta atual e publicar em main — solicitado explicitamente pelo usuário.
Ruling: nenhum projeto deve ser submódulo; manter fontes comuns e backup local do histórico anterior.
Ruling: remover a página de seleção — o usuário quer acessar os sites por links diretos.

Validação local: oito testes aprovados; lint e builds Next.js/Astro aprovados.
Playwright: caminhos internos, todas as imagens da página inicial, fontes, menu móvel,
contato com serviço pré-selecionado e índice dos projetos validados; console sem erros.
Revisão independente: sem achados materiais de publicação, caminhos ou arquivos no índice.

Publicação: workflow 37792837558 concluído com build e deploy aprovados.
Playwright no endereço público: ambos os sites carregam; navegação da Volpi,
imagens, links internos e contato com assunto pré-selecionado validados.
Os dois endereços públicos foram abertos no navegador integrado do Codex.
