# Quiosque Chapéu de Palha

Site estático com início inspirado em um diário de bordo e cardápio preto fiel à linguagem do impresso. As fotografias de comida fornecidas pelo usuário conduzem a composição; referências de One Piece aparecem nos detalhes da marca e do ambiente.

## Rodar

Requisito: Node.js instalado. Não é necessário instalar dependências.

```powershell
cd chapeudepalha
npm run dev
```

Abrir `http://127.0.0.1:4324/`. O comando gera o site e inicia o servidor local. Após editar, executar `npm run build` e atualizar o navegador; não há recarregamento automático.

```powershell
npm run build
npm run lint
```

O resultado está em `dist/`, ignorado pelo Git. A publicação conjunta no GitHub Pages usa `SITE_BASE_PATH=/websites/cdpalha/` e `SITE_URL=https://vetezin.github.io`; endereço: https://vetezin.github.io/websites/cdpalha/. O workflow valida o HTML gerado antes de publicar. Esta publicação é uma demonstração autorizada pelo usuário, com fachada ilustrativa identificada e `noindex`. Para o site oficial do estabelecimento, confirmar o conteúdo e revisar explicitamente `noindex` e `robots.txt`.

## Editar conteúdo

- `data/menu.json`: 14 porções com pesos e preços e 18 pastéis salgados com preços, transcritos das fotos.
- `data/site.mjs`: textos, links e complementos. A fachada ilustrativa está marcada como `MOCK`; nenhum preço fictício é apresentado como real.
- `src/templates.mjs`: composição das duas páginas e elementos compartilhados.
- `public/styles.css` e `public/site.js`: visual, navegação móvel e busca progressiva.
- `public/images/`: originais e WebP otimizados. Sem novas imagens de alimentos geradas.
- `DESIGN_BRIEF.md`: direção e escolhas técnicas.
- `CONTENT_TODO.md`: conteúdo a confirmar antes de publicação.

A fachada de abertura é uma reconstrução gerada com IA e está identificada na página inicial. Preços de porções e pastéis seguem os cardápios fotografados; confirmar a atualização dos valores antes do lançamento oficial. Horários e programação são encaminhados ao Instagram. Não há pedidos, reservas, analytics ou formulário de coleta de dados.
