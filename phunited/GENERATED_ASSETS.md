# Imagens demonstrativas geradas — PH UNITED

Autorização do usuário em29/10/2026: criar fotos de camisetas, tênis, calças e outras vistas. Executado com ferramenta integrada image_gen; sem API/CLI adicional ou instalação. Produtos fictícios, sem marcas ou alegação de estoque. Não são fotografias de produtos reais da PH UNITED.

## Prompt set e direção

Use case: product-mockup. Cada geração pediu uma composição de dois painéis verticais iguais lado a lado: produto inteiro centralizado em fundo cinza claro #f3f3f1, iluminação difusa de estúdio, sombras leves, textura realista e margens amplas. Sem pessoas, cabides, acessórios, textos, logos, marcas ou watermark. Mesmo produto nos dois painéis, escala e construção consistentes. No vestuário, frente e costas; nos tênis, perfil lateral e vista traseira em três quartos do mesmo pé. Pares separados no meio e otimizados com sharp para WebP900×1125 em contain, sem redesenhar o item.

| Slug | Assunto usado no prompt | Vistas solicitadas |
|---|---|---|
| tee-black | Men's boxy oversized black heavyweight cotton t-shirt, dropped shoulders, no graphics | Front / back |
| tee-white | Men's ivory oversized heavyweight cotton t-shirt, dropped shoulders, small plain stitched patch at lower hem, no lettering | Front / back |
| tee-olive | Men's washed sage olive oversized heavyweight cotton tee, dropped shoulders, no graphics | Front / back |
| shorts-black | Men's black nylon cargo shorts, relaxed knee length, drawstring waist and side flap pockets | Front / alternative |
| pants-olive | Men's relaxed straight olive cargo pants, two neat thigh flap pockets | Front / back |
| pants-denim | Men's relaxed wide straight washed black denim jeans, realistic texture and seams | Front / back |
| sneakers-white | Unbranded white/cool-gray low-top leather and mesh sneaker, slightly chunky cream sole, no brands/stripes | Side / rear three-quarter |
| sneakers-black | Unbranded black canvas low-top skate sneaker, plain off-white sole, black laces, no contrasting stripe | Side / rear three-quarter |

Arquivos finais: assets/products/generated/<slug>.webp e <slug>-detail.webp. PNGs originais preservados no diretório padrão de imagens geradas do Codex; site usa somente cópias locais. Logo do cliente preservada.

As vistas são sínteses visuais, não evidência da construção de uma peça comercial. A segunda vista do short é semelhante à primeira; não rotular como costas verificadas. Conferir medidas, bolsos, costuras e materiais com produtos reais antes de vender. Imagens Unsplash/Pexels anteriores permanecem como arquivos de referência, mas não são mais consumidas por src/content.js.
