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
O formulário simula o envio dentro da página; nenhuma mensagem é enviada ou armazenada. O rascunho `mailto:` é uma alternativa opcional.
Fontes locais: Manrope e Newsreader, distribuídas sob SIL Open Font License.
Os arquivos WOFF2 contêm caracteres latinos e pontuação usados no site; as licenças estão em `public/fonts/`.
Logo, contatos e foto da fachada: site público existente da Gazzetti. Retratos da equipe: gerados por IA, fictícios e identificados. Regras de legibilidade e preservação de fotos reais em `AGENTS.md`.

## Fluxos para verificar

- Navegar pelas seis páginas em 1440 e 390 px, incluindo menu mobile e teclado.
- Abrir perfil da equipe, fechar com botão e Escape e conferir retorno do foco.
- Filtrar links úteis, pesquisar sem acentos, testar ausência de resultados e limpar.
- Abrir contato a partir de uma área, conferir assunto pré-selecionado.
- Validar campos obrigatórios, simular envio e conferir o aviso de que nenhuma mensagem foi enviada.
- Conferir reduced-motion, console, imagens, links internos e ausência de overflow.

`test/browser-qa.mjs` exporta `runBrowserChecks(page, baseUrl)` para execução com uma sessão Playwright. A validação inicial usa o MCP Playwright disponível no ambiente, sem instalar uma dependência extra no projeto.

Não há publicação automática deste projeto. O pipeline dos outros sites permanece independente.
