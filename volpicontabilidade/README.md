# Volpi Contabilidade

Site institucional local em Astro 6, Tailwind CSS 4 e JavaScript.
Mantido ao lado de `conveniencia018`, no repositório `vetezin/websites`.

## Executar

Requisitos: Node.js 22.12 ou superior, em versão par suportada, e npm.
Validado nesta máquina com Node.js 24.11.0.

```powershell
cd C:\Users\Victor\Desktop\Projetos\Sites\volpicontabilidade
npm ci
npm run dev
```

Abra `http://localhost:4321/`. Se a porta estiver ocupada, o Astro informa a próxima disponível.
Publicado em https://vetezin.github.io/websites/volpicontabilidade/.
O workflow da raiz publica os dois projetos após cada push em main.
Para reproduzir a publicação, execute npm run build:pages na pasta Sites.

## Validar e gerar versão estática

```powershell
npm test
npm run build
npm run preview
```

O build gera `dist/`. O comando de prévia serve essa versão compilada.
O projeto alinha Vite 7 entre Astro e Tailwind para evitar versões incompatíveis.
O executor em `scripts/astro.mjs` desativa a telemetria do Astro.
Não há lint configurado nesta primeira versão.

## Páginas

- `/`: apresentação, serviços, história, clientes e canais de conteúdo.
- `/empresa/`: história, princípios e forma de atendimento.
- `/servicos/`: detalhes das quatro áreas e contato com assunto pré-selecionado.
- `/conteudos/`: links para os canais já usados pela Volpi.
- `/contato/`: telefone, e-mail, mapa e preparação de mensagem para WhatsApp.
- `/privacidade/`: comportamento real do formulário e serviços externos.
- `404.html`: página de endereço não encontrado.

## Comportamento do contato

O formulário valida os dados localmente, mostra uma prévia e oferece um link para
o WhatsApp da Volpi. O visitante confirma o envio no WhatsApp. Não há servidor
de e-mail, banco de dados, rastreamento, cookies nem persistência dos dados.
O envio real ao destinatário não foi executado durante os testes.

O acesso ao condomínio mantém o portal original. Conteúdos e newsletter abrem
os portais de origem; não há feed automatizado nem cadastro local de newsletter.

## Organização

- `src/data/company.js`: contatos, serviços, clientes e canais externos.
- `src/data/contact.js`: validação e construção da mensagem.
- `src/components/`: cabeçalho, rodapé e elementos compartilhados.
- `src/pages/`: páginas Astro.
- `src/styles/`: identidade visual, responsividade e fontes locais.
- `public/images/`: logo, imagens otimizadas e logos de clientes.
- `public/fonts/`: fonte Be Vietnam Pro e licença OFL.
- `assets/originals/`: fotos originais preservadas para referência.
- `test/`: testes de contato.
- `artifacts/`: capturas e relatório de validação.

## Fontes do conteúdo e da identidade

Informações verificadas em 07/10/2026:

- https://www.volpicontabilidade.com.br/index.php
- https://www.volpicontabilidade.com.br/empresa.php
- https://www.volpicontabilidade.com.br/servicos.php

Logo, fotos e 14 logos de clientes foram obtidos das URLs públicas do site atual.
As fotos são ilustrativas; não são apresentadas como fotografias da equipe real.
Os textos foram reorganizados sem inventar números, depoimentos ou certificações.
A fonte Be Vietnam Pro foi obtida do Google Fonts e é hospedada localmente,
com sua licença em `public/fonts/OFL.txt`.

## Antes da publicação

Confirmar dados de contato e autorização de reutilização das imagens e logos;
definir hospedagem, domínio e eventuais integrações de formulário/conteúdo.
Ajustar metadados de URL e imagem social quando o endereço final for definido.

## Verificação no navegador

Validar as páginas em 1440, 768, 390 e 320 px. Navegar pelo menu desktop e mobile,
fechar o menu com Escape, acessar uma solução e verificar o assunto no contato.
Testar campos obrigatórios, telefone inválido e prévia da mensagem. Editar um campo
após gerar a prévia deve invalidar a mensagem anterior. Conferir imagens, console,
foco de teclado e a preferência de movimento reduzido.
