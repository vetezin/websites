// Conteúdo centralizado. MOCK indica texto editorial proposto, sem promessas comerciais.
export const siteContent = {
  name: 'Ragassi Auto Mecânica',
  city: 'Presidente Prudente',
  state: 'SP',
  district: 'Vila Formosa',
  phone: '5518996966162',
  phoneDisplay: '(18) 99696-6162',
  // Fonte: cartão enviado pelo usuário. Confirmar atualidade antes de publicar.
  payment: 'Aceitamos cartões de crédito e débito.',
  profileUrl: 'https://www.google.com/maps/place/RAGASSI+AUTO+MEC%C3%82NICA/data=!4m2!3m1!1s0x0:0xc927e521cf07d8ee',
  // URL prevista no repositório; esta entrega não publica ou modifica o pipeline.
  previewUrl: 'https://vetezin.github.io/websites/ragassi/',
  preview: true,
  title: 'Ragassi Auto Mecânica em Presidente Prudente',
  description: 'Motor, injeção eletrônica, embreagem, troca de óleo, suspensão e freios em Presidente Prudente. Fale com a Ragassi Auto Mecânica pelo WhatsApp.',
  navigation: { services: 'Serviços', workshop: 'A oficina', contact: 'Contato' },
  labels: {
    skip: 'Pular para o conteúdo', menu: 'Menu', whatsapp: 'Falar no WhatsApp',
    directions: 'Como chegar', call: 'Ligar para a oficina', top: 'Voltar ao início',
    preview: 'Site demonstrativo para apresentação', location: 'Localização',
  },
  // MOCK: copy editorial para aprovação do cliente.
  hero: {
    title: 'Mecânica e manutenção para o seu carro.',
    body: 'Da troca de óleo aos reparos de motor, encontre os serviços que seu carro precisa. Converse com a Ragassi e agende seu horário.',
    photoAlt: 'Carros com o capô aberto em manutenção no interior da oficina Ragassi',
    photoCaption: 'O dia a dia da nossa oficina, em Presidente Prudente.',
  },
  // MOCK: descrições editoriais. Os seis serviços vêm do cartão enviado.
  servicesTitle: 'Serviços da oficina',
  servicesIntro: 'Manutenção e reparos para cuidar do seu veículo.',
  services: [
    { name: 'Motor', description: 'Manutenção e reparos do motor.', mock: true },
    { name: 'Injeção eletrônica', description: 'Avaliação e manutenção do sistema de injeção.', mock: true },
    { name: 'Embreagem', description: 'Avaliação e reparos no sistema de embreagem.', mock: true },
    { name: 'Troca de óleo', description: 'Troca de óleo para a manutenção do motor.', mock: true },
    { name: 'Suspensão', description: 'Manutenção dos componentes da suspensão.', mock: true },
    { name: 'Freios', description: 'Avaliação e manutenção do sistema de freios.', mock: true },
  ],
  // MOCK: copy editorial; localização detalhada e horários permanecem sem confirmação.
  workshop: {
    title: 'Conheça a Ragassi',
    body: 'Nossa oficina está em Presidente Prudente. Aqui você pode conversar sobre a manutenção do seu carro e consultar a disponibilidade para atendimento.',
    photoAlt: 'Fachada azul da Ragassi Auto Mecânica com a placa da oficina acima da entrada',
    photoCaption: 'A fachada azul ajuda você a reconhecer a oficina.',
  },
  contact: {
    title: 'Vamos agendar seu horário?',
    body: 'Chame no WhatsApp e conte qual serviço você precisa.',
    message: 'Olá! Gostaria de consultar um horário para atendimento do meu carro.',
    hours: 'Consulte os horários de atendimento pelo WhatsApp.',
    // Informação incerta explicitada; não inferir endereço do perfil ou dos cadastros antigos.
    locationNote: 'Confirme o endereço completo com a oficina antes da visita.',
  },
};
