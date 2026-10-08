# Conveniência Zero18

Landing page da Conveniência Zero18, criada com Next.js 16 (App Router), React 19, TypeScript e CSS/Tailwind 4.

## Executar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Validar

```bash
npm run lint
npx tsc --noEmit
npm run build
```

O script de build usa Webpack por compatibilidade com o ambiente Windows usado durante a criação.

## Publicação

Site: https://vetezin.github.io/websites/conveniencia018/

A publicação acontece pelo workflow central em `../.github/workflows/pages.yml` após cada push na branch `main`. No GitHub, a origem de publicação em Settings → Pages deve ser **GitHub Actions**.

Para gerar a mesma versão estática no PowerShell:

```powershell
$env:GITHUB_PAGES = "true"
$env:NEXT_PUBLIC_BASE_PATH = "/websites/conveniencia018"
npm run build
Remove-Item Env:GITHUB_PAGES, Env:NEXT_PUBLIC_BASE_PATH
```

O resultado fica em `out/`. Os caminhos das imagens usam `data/assets.ts` para funcionar tanto no Pages quanto no desenvolvimento em localhost:3000.

## Conteúdo

- Dados comerciais e links: `data/zero18.ts`
- Página: `app/page.tsx`
- Estilos responsivos: `app/globals.css`
- Fotos e arte oficiais enviados pelo usuário: `public/zero18/`

Endereço, horários e avaliação foram conferidos no [perfil da empresa no Google](https://www.google.com/search?kgmid=/g/11vrb0x8ck&q=Conveni%C3%AAncia+Zero18) em 5 de outubro de 2026. Reconfirme esses dados periodicamente. As imagens da marca devem ser publicadas com autorização da Zero18.
