# Espetinho do Léo

Site estático em pt-BR, com Início e Cardápio. HTML gerado a partir de um único arquivo de conteúdo, CSS e JavaScript sem dependências de produção.

## Rodar

```powershell
npm run build
npm run check
npm run dev
```

Abra http://127.0.0.1:8780. O servidor é local. Para trocar a porta, defina `PORT`.

## Editar

- `src/content.json`: dados, contatos, categorias e itens. Não cadastrar valores sem confirmação.
- `scripts/build.mjs`: templates das duas páginas e SEO.
- `src/style.css`: sistema visual e responsividade.
- `src/site.js`: filtros do cardápio.
- `public/assets/`: fotos otimizadas e logo original.

Sem domínio configurado, o build gera `noindex` e robots bloqueado. Para uma publicação autorizada, configure `SITE_URL` com o domínio real e, se necessário, `SITE_BASE_PATH` com o subdiretório. O sitemap e as URLs canônicas são gerados nesse build. Não inventar domínio. Conteúdo pendente precisa ser revisado antes de publicar.

O novo site não foi conectado à publicação conjunta: scripts compartilhados e workflows foram preservados. Branch `codex/espetinhodoleo`, pasta autorizada `espetinhodoleo/`.

## Conteúdo e imagens

Veja `CONTENT_TODO.md`. Fotos coletadas do Instagram e Google informados pelo usuário. `barca.webp` é uma adaptação com IA da arte original, identificada como ilustrativa. Espetinhos e acompanhamentos também usam recriações com IA das fotos do acervo, identificadas como ilustrativas. Originais preservados. Nenhuma pessoa, avaliação ou preço fictício foi criado. O cardápio é uma prévia baseada no acervo público, não uma integração com o iFood.
