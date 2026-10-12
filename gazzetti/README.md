# Gazzetti — demonstração Etapa 05

Astro + CSS próprio + JavaScript mínimo. Dependências existentes; nenhuma biblioteca adicionada. Fontes locais Newsreader e Manrope, SIL OFL em public/fonts.

Execute npm run dev em gazzetti e abra http://localhost:4322/. Para validar: npm test, npm run lint, npm run build. npm run preview serve o build.

## Conteúdo e rotas

Copy literal e metadados: src/data/content.json, extraídos do handoff preservado em docs/handoff-etapa-05.md. Microcopy funcional e campos: src/data/site.js. Regras visuais: DESIGN_BRIEF.md. Pendências: CONTENT_TODO.md. Evidências: VALIDATION.md.

Quatro páginas: /, /o-escritorio/, /areas-de-atuacao/, /contato/. Complemento: /politica-de-privacidade/. Equipe dentro do escritório, sem perfis fictícios. Canais e endereços detalhados aguardam validação. Formulário sem envio, armazenamento ou simulação de recebimento; botão desabilitado e method=dialog impedem submissão de rede também sem JS.

Aliases estáticos: /escritorio/ → /o-escritorio/; /areas/ → /areas-de-atuacao/; /equipe/ → /o-escritorio/#equipe; /privacidade/ → /politica-de-privacidade/. Usam refresh no head, canonical atualizado e link de fallback; não são redirecionamentos HTTP 301. /uteis/ aposentada sem equivalente; retorna 404 no servidor local. O host deve configurar a resposta 404 sob subdiretório ao publicar.

## Validação e publicação

O helper test/browser-qa.mjs aceita Page do Playwright sem instalar runtime adicional. Capturas locais em artifacts/handoff, ignoradas pelo Git.

Demonstração com noindex e rastreamento permitido para leitura da diretiva, sem sitemap público, analytics ou cookies de marketing. SITE_URL define a origem; SITE_BASE_PATH define o prefixo. Default local http://localhost:4322/. Workflow existente da raiz usa https://vetezin.github.io e /websites/gazzetti/.

O Pages em https://vetezin.github.io/websites/gazzetti/ contém a versão anterior até uma nova publicação autorizada. Não houve push nesta tarefa.
