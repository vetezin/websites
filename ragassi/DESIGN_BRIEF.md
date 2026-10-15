# Ragassi Auto Mecânica — brief

## Negócio
A Ragassi é uma oficina de manutenção e reparação automotiva em Presidente Prudente.
O público são motoristas locais buscando manutenção ou reparos para seu carro.
O site precisa mostrar os serviços e facilitar contato pelo WhatsApp.
O material enviado confirma motor, injeção eletrônica, embreagem, óleo, suspensão e freios.
Fotos reais dos veículos em manutenção e da fachada geram familiaridade e ajudam na visita.
Não foram confirmados diferenciais, anos de atuação, garantias ou avaliações.
A percepção é de oficina próxima e prática, sem luxo, futurismo ou publicidade chamativa.

## Aprovação em conversa
Direção: cores da oficina em tons escuros, fotografias reais de reparação e apresentação simples.
Stack: HTML, CSS e JavaScript puro, sem instalar dependências. Alternativa Astro descartada por acrescentar compilação e dependências desnecessárias ao escopo.
Cadastro autorizado: ragassi/ e branch ragassi nos mapas AGENTS.md e docs/SITE_BRANCHES.md.
Publicação, push, merge e mudanças no pipeline compartilhado não fazem parte desta entrega.

## Três direções consideradas
1. Oficina clara: texto/fachada em duas colunas, fundo branco e serviços em lista. Usuário preferiu tons escuros.
2. Oficina em atividade (escolhida): navy/grafite, foto documental ampla na abertura, serviços em linhas e fachada na localização. Prioriza o trabalho e a familiaridade.
3. Bastidores: narrativa com fotos grandes, história e equipe. Depende de material ainda não fornecido.

## Visual DNA
Composição convencional assimétrica, orientada à fotografia; densidade equilibrada; tipografia familiar Arial/Helvetica; geometria reta com raio de 3–4 px.
Fotos documentais, cores restritas à marca, ritmo compacto nos serviços e mais aberto na visita. Movimento somente funcional, respeitando prefers-reduced-motion.
Marca deve parecer próxima, objetiva e organizada, não premium, tecnológica ou esportiva.
Restrição visual: fotografia sem texto sobreposto, sem gradientes, neon, metal decorativo, cards repetitivos ou reveals.

## Decisões específicas
- Azul/navy deriva da fachada real reconhecida pelo cliente.
- Veículos em reparação abrem a página; não utilizar carros de vitrine como representação do serviço.
- Fachada fica junto à localização para ajudar a reconhecer a entrada física.

## Arquitetura e comportamento
Uma página: apresentação/WhatsApp; seis serviços; oficina real; visita/contato; rodapé.
Navegação por âncoras, menu mobile acessível com Escape e fechamento ao selecionar um destino.
WhatsApp com mensagem predefinida, telefone clicável e rota para o perfil correto no Google.
Todo conteúdo essencial disponível sem JavaScript. Sem formulário, rastreamento, analytics, cookies ou embeds externos.

## Tokens
- Navy #101b30; apoio #172640; grafite #20272e; azul de ação #3552a0; detalhe #a9bdf3.
- Texto #f3f5f8; secundário #bec7d4; linha #39465c; visita clara #f0f2f5 com texto #20272e.
- Arial/Helvetica/sans-serif do sistema: corpo 16px/1.65, títulos 500–600; h1 clamp(30px,3.2vw,46px), h2 28–32px, mínimo 13px.
- Conteúdo máximo 1160px; margens mobile 24px; espaços 8/12/16/24/32/48/64/80px; raios 3/4px; sem sombras.
- Controles mínimos 44px. Contraste dos pares principais medido nas verificações.

## Suposições e conteúdo pendente
Copy editorial proposto centralizado e marcado MOCK em content.mjs; não apresentar promessas não confirmadas.
Logo é referência raster do cartão enviado; solicitar original. Fotos reais do Google usadas nesta apresentação: confirmar autorização e obter originais.
Google indicava Rua Campestre, 285; outros cadastros divergem. Exibir bairro/cidade; confirmar endereço completo e horários com o cliente.
Telefone e cartões de crédito/débito vêm da imagem enviada; confirmar atualidade antes da publicação.
Sem preços, garantias, estatísticas, depoimentos, certificações ou marcas de veículos inventados.
Build demonstrativo com noindex; publicação exige URL definitiva e conteúdo aprovado.

## Aceitação
Contato correto; menu por teclado; sem overflow em 390/1440px; imagens locais; conteúdo sem JS; console limpo; nenhuma dependência instalada; somente caminhos autorizados no commit.

## Revisão aprovada em 15/10/2026 — serviços no centro
O usuário aprovou a proposta de abertura curta centralizada, serviços como principal conteúdo e fotos menores como apoio. Esta revisão substitui a abertura fotográfica assimétrica do brief inicial.
Três colunas/duas linhas de serviços no desktop, duas no tablet, lista no celular; ícones locais consistentes sem círculos, cards ou dependência externa. Os itens são links para consultar cada serviço no WhatsApp com assunto preenchido.
O cabeçalho usa uma reconstrução fiel do logo com fundo transparente, solicitada pelo usuário. Carro, nome e descritor preservados; sem placa preta, recorte CSS ou efeitos. PNG mestre e WebP de entrega mantêm transparência real.
Navy/grafite e tipografia familiar permanecem. As duas fotos reais aparecem somente na seção de apresentação da oficina, em tamanhos menores.
As novas explicações editoriais continuam marcadas MOCK em content.mjs e não acrescentam serviços, garantias ou certificações.

## Acabamento interativo aprovado
Feedback discreto nos serviços: divisória azul, ícone mais claro e seta deslocada em 2px ao passar o mouse ou focar por teclado; toque com feedback durante a pressão. Botões mudam de cor suavemente e cedem 1px ao pressionar. Transições curtas de 120–160ms, sem animação de entrada ou movimento automático. Navegação suave existente preservada. Com prefers-reduced-motion, transições, deslocamentos e rolagem animada são desativados; cores e foco continuam comunicando a interação. Implementação somente CSS, sem bibliotecas.
