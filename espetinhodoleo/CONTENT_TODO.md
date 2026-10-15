# Conteúdo a confirmar antes da publicação

- Logo vetorial ou arquivo em alta resolução. O avatar atual tem 150 px.
- Cardápio completo e atualizado: sabores, composição, quantidade e preços. As barcas de 4 e 8 espetos foram extraídas das artes fornecidas.
- Horário: há divergência entre artes antigas e recentes. O site pede consulta ao canal oficial em vez de publicar uma grade incerta.
- Confirmar endereço/pin e telefone públicos. O site usa quiosque G, Avenida 11 de Maio e o Google fornecido pelo usuário.
- Confirmar canais e condições de entrega. O iFood veio da bio; não foi auditada a disponibilidade atual do estabelecimento na plataforma.
- Confirmar autorização para uso comercial das fotos, inclusive a imagem ambiental com clientes ao fundo.
- Substituir `public/assets/barca.webp` por foto limpa original: é **MOCK de imagem**, recortada/adaptada por IA a partir da arte promocional. Consta em `src/content.json` como `imageAdapted` e `MOCK`; identificada visualmente como imagem ilustrativa.
- Não há preços, promoções, depoimentos ou estatísticas mockados. Copy de apresentação é proposta editorial, sem alegações de superioridade.
- Fornecer domínio real e autorizar publicação; preencher `SITE_URL` somente nessa etapa.

Fontes consultadas em 13/10/2026: https://www.instagram.com/espetinhodoleo018/ e https://share.google/adxTG2iPaJOMRvQg0. A pesquisa foi preservada em `docs/research/`.

## Recriação das fotos com IA

- **MOCK:** `espetinhos-ia.webp` substitui a foto da travessa no início e cardápio; `acompanhamentos-ia.webp` substitui a foto de vinagrete/mandioca. Criadas com o imagegen integrado a partir das imagens originais, sem alegar ser fotografia documental. Marcadas como ilustrativas e centralizadas em `src/content.json`.
- Originais `espetinhos.webp` e `vinagrete.webp` preservados. Foto do quiosque permanece original.
- Confirmar fidelidade de ingredientes, porções e apresentação com o cliente antes da publicação.
- Prompts completos, fontes e ferramenta registrados em `docs/IMAGE_PROMPTS.json`.
