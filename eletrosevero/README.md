# Eletro Severo — protótipo de catálogo

HTML, CSS e JavaScript nativos; sem instalação de dependências. Node.js é necessário apenas para o servidor local e os testes.

## Rodar
Na raiz deste checkout:

    node eletrosevero/serve.mjs

Abra http://127.0.0.1:4175. Encerre com Ctrl+C. Para outra porta, defina PORT.

## Validar

    node --test eletrosevero/tests/catalog.test.mjs
    node --check eletrosevero/app.js
    node --check eletrosevero/serve.mjs

## Conteúdo e manutenção
- data/content.js centraliza a empresa, lojas, categorias e produtos.
- Cada produto possui id e MOCK; estoque não confirmado (available=null). A interface orienta consultar preço e disponibilidade.
- catalog.js combina busca sem acentos com categoria. app.js renderiza os dados usando textContent e gerencia o diálogo nativo.
- assets/photos contém fotos locais de referência e SOURCES.md documenta as origens. Os SVGs antigos em assets/products não são exibidos. Nenhuma imagem é carregada de terceiros durante a visita.
- Sem backend, login, banco, analytics, cookies ou checkout. O painel de gestão é uma etapa futura.
- Veja CONTENT_TODO.md e DESIGN_BRIEF.md antes de publicar. Protótipo bloqueado para indexação.

Teste de navegador opcional: `node eletrosevero/tests/browser-check.mjs`. Usa Playwright já instalado no runtime local do Codex e Chrome. Para outro ambiente, PLAYWRIGHT_MODULE deve apontar para o package.json da instalação existente do Playwright e CHROME_PATH para o executável do Chrome. Não instala nada. O preview deve estar em execução na porta 4175. Capturas e resultados ficam em docs/screenshots/.
