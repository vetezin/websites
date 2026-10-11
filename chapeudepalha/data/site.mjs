// Copy and additional content live here. MOCK entries are visibly identified in the menu.
export const site = {
  name: 'Quiosque Chapéu de Palha',
  shortName: 'Chapéu de Palha',
  location: 'Parque do Povo · Presidente Prudente',
  address: 'Av. 11 de Maio · Vila Formosa, Presidente Prudente — SP',
  addressSource: 'Ficha pública do Google consultada em 11/10/2026; confirmar antes de publicar.',
  instagram: 'https://www.instagram.com/chapeudepalha_pqpovo/',
  maps: 'https://www.google.com/maps/search/?api=1&query=Quiosque+Chapeu+de+Palha+Parque+do+Povo+Presidente+Prudente',
  hero: {
    eyebrow: 'Boa comida. Boa companhia. Um pouco de aventura.',
    title: ['O melhor da jornada', 'é a parada.'],
    description: 'Pastéis, porções e um brinde à boa companhia. Seu ponto de encontro no Parque do Povo.',
    image: 'quiosque-background-conceito-v1.webp',
    MOCK: true,
    note: 'Imagem de abertura ilustrativa, criada a partir da fachada real.',
  },
  intro: {
    title: ['Algumas aventuras', 'começam à mesa.'],
    text: 'Tem passeio que vira encontro. Tem encontro que pede mais uma porção. E tem lugar que dá vontade de ficar. Bem-vindo ao Chapéu de Palha.',
  },
  pastel: {
    title: ['A primeira mordida', 'já vale a parada.'],
    text: 'Massa dourada, aquela crocância e uma boa conversa esperando do outro lado da mesa. Abra o cardápio e encontre sua próxima escolha.',
    caption: 'Um pastel, uma pausa e todo o tempo do mundo.',
  },
  portions: {
    title: ['Fome de aventura?', 'Chame a tripulação.'],
    text: 'A mesa fica melhor quando tem o que dividir. Porções para acompanhar a conversa, o encontro e o próximo brinde.',
    featured: 'Batata frita com cheddar e bacon',
    featuredText: 'Batata frita, cheddar e bacon. Uma das porções do nosso cardápio.',
    posterCaption: 'Fome de Pirata · isca de frango, anéis de cebola e batata frita.',
  },
  drinks: {
    title: ['Uma pausa.', 'Um brinde.'],
    text: 'Do coco gelado ao drink da vez, tem uma boa companhia para o que você escolher comer.',
    photos: [
      { file: 'coco.webp', alt: 'Coco verde servido com canudo sobre o cardápio do quiosque', label: 'Uma pausa de coco' },
      { file: 'drink-limao.webp', alt: 'Bebida verde com gelo, canudo e rodela de limão', label: 'Gelo, limão e um brinde' },
      { file: 'bebida-roxa.webp', alt: 'Bebida roxa em copo, com a bandeira dos Chapéus de Palha ao fundo', label: 'Cor para a sua parada' },
    ],
  },
  gathering: {
    title: ['O encontro é aqui.', 'O resto a gente combina.'],
    text: 'Família, amigos, música ao vivo e futebol. O Chapéu é uma parada para comer e um convite para ficar mais um pouco.',
    details: ['Música ao vivo', 'Futebol ao vivo', 'Ambiente familiar'],
    schedule: 'Confira a programação e os horários no nosso Instagram.',
  },
  visit: {
    title: ['Seu próximo destino:', 'Chapéu de Palha.'],
    text: 'No meio do passeio ou no fim do dia, faça uma parada no Parque do Povo.',
  },
  menu: {
    title: ['Escolha seu', 'próximo tesouro.'],
    description: 'Porções para dividir, pastéis para saborear e bebidas para acompanhar. O nosso cardápio, agora na sua tela.',
    portionsNote: 'Pesos e valores conforme o cardápio fotografado.',
    pastryNote: 'Sabores ilustrativos para esta apresentação. Confirme as opções e os valores com o quiosque.',
    drinkNote: 'Fotos fornecidas do quiosque. Consulte nomes, opções e valores disponíveis.',
    examplePastries: [
      { name: 'Pastel de carne', description: 'Sugestão de sabor para a apresentação do cardápio.', MOCK: true },
      { name: 'Pastel de queijo', description: 'Sugestão de sabor para a apresentação do cardápio.', MOCK: true },
      { name: 'Pastel de frango com queijo', description: 'Sugestão de sabor para a apresentação do cardápio.', MOCK: true },
      { name: 'Pastel de pizza', description: 'Sugestão de sabor para a apresentação do cardápio.', MOCK: true },
    ],
    beverages: [
      { name: 'Água de coco', description: 'Coco verde, como na foto do quiosque.', image: 'coco.webp', status: 'photographed' },
      { name: 'Drinks', description: 'Consulte os drinks disponíveis e seus ingredientes.', image: 'drink-limao.webp', status: 'category' },
      { name: 'Sucos e outras bebidas', description: 'Consulte sabores e opções sem álcool.', image: 'bebida-roxa.webp', status: 'category' },
      { name: 'Chopp', description: 'Consulte os tamanhos e as opções disponíveis.', status: 'profile' },
    ],
  },
};
