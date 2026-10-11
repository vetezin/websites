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

O resultado está em `dist/`, ignorado pelo Git. O projeto ainda não está integrado à publicação conjunta dos outros sites. Build permite `SITE_BASE_PATH` e `SITE_URL` quando houver uma publicação autorizada. Para produção, confirmar o conteúdo e revisar explicitamente `noindex` e `robots.txt`.

## Editar conteúdo

- `data/menu.json`: 14 porções, pesos e preços transcritos da foto.
- `data/site.mjs`: textos, links e complementos. Entradas `MOCK` aparecem como exemplos; nenhum preço fictício é apresentado como real.
- `src/templates.mjs`: composição das duas páginas e elementos compartilhados.
- `public/styles.css` e `public/site.js`: visual, navegação móvel e busca progressiva.
- `public/images/`: originais e WebP otimizados. Sem novas imagens de alimentos geradas.
- `DESIGN_BRIEF.md`: direção e escolhas técnicas.
- `CONTENT_TODO.md`: conteúdo a confirmar antes de publicação.

A fachada de abertura é uma reconstrução gerada com IA e está identificada na página inicial. Preços de porções precisam de confirmação; sabores de pastéis são exemplos. Horários e programação são encaminhados ao Instagram. Não há pedidos, reservas, analytics ou formulário de coleta de dados.
