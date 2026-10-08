# Gazzetti — redesign demonstrativo

Astro, CSS próprio e JavaScript. Node 24; sem banco, cookies de marketing ou serviço de envio.

```powershell
cd C:\Users\Victor\Desktop\Projetos\Sites\gazzetti
npm ci
npm run dev
```

Abra http://localhost:4322/. Para validar: `npm test`, `npm run lint`, `npm run build`.
Para visualizar o build: `npm run preview`.

## Conteúdo

`src/data/site.js` centraliza equipe MOCK, textos, contatos e recursos. Veja `CONTENT_TODO.md` antes de publicar. O site inclui `noindex` e robots bloqueado intencionalmente.
O formulário prepara um rascunho `mailto:`; nenhuma mensagem é enviada pelo site.
Fontes locais: Manrope e Newsreader, distribuídas sob SIL Open Font License.
Os arquivos WOFF2 contêm caracteres latinos e pontuação usados no site; as licenças estão em `public/fonts/`.
Logo e contatos: site público existente da Gazzetti. Fotografias: geradas por IA, fictícias e identificadas.

## Fluxos para verificar

- Navegar pelas seis páginas em 1440 e 390 px, incluindo menu mobile e teclado.
- Abrir perfil da equipe, fechar com botão e Escape e conferir retorno do foco.
- Filtrar links úteis, pesquisar sem acentos, testar ausência de resultados e limpar.
- Abrir contato a partir de uma área, conferir assunto pré-selecionado.
- Validar campos obrigatórios, preparar mensagem e conferir que apenas um rascunho é criado.
- Conferir reduced-motion, console, imagens, links internos e ausência de overflow.

`test/browser-qa.mjs` exporta `runBrowserChecks(page, baseUrl)` para execução com uma sessão Playwright. A validação inicial usa o MCP Playwright disponível no ambiente, sem instalar uma dependência extra no projeto.

Não há publicação automática deste projeto. O pipeline dos outros sites permanece independente.
