export const site = {
  name: 'Eletro Severo',
  phone: '(18) 99801-3291',
  phoneLink: '+5518998013291',
  whatsapp: 'https://wa.me/5518998013291?text=Ol%C3%A1!%20Gostaria%20de%20informa%C3%A7%C3%B5es%20sobre%20os%20produtos%20da%20Eletro%20Severo.',
  instagram: 'https://www.instagram.com/eletrosevero/',
  hero: { MOCK:true, title:'Sua obra começa aqui.\nSeu lar também.', description:'Materiais elétricos, hidráulicos e acabamentos. Encontre o que procura e converse com a gente para escolher o que sua obra precisa.' },
  about: { MOCK:true, title:'Do primeiro fio ao último acabamento.', paragraphs:['Construir, reformar ou resolver aquele reparo do dia a dia. A Eletro Severo reúne materiais para diferentes momentos da sua obra, em duas lojas em Álvares Machado.', 'Explore os departamentos, conheça alguns produtos e fale com a gente para consultar modelos, preços e disponibilidade.'] },
};
export const categories = [
  {id:'all',name:'Todos os produtos',icon:'grid'},
  {id:'eletrica',name:'Elétrica',icon:'bolt'},
  {id:'hidraulica',name:'Hidráulica',icon:'drop'},
  {id:'iluminacao',name:'Iluminação',icon:'bulb'},
  {id:'ferramentas',name:'Ferramentas',icon:'tool'},
  {id:'acabamentos',name:'Acabamentos',icon:'window'},
];
// MOCK: seleção, características e disponibilidade para demonstrar o catálogo.
// Categorias e tipos de produtos se baseiam na divulgação pública; não são estoque confirmado.
export const products = [
  {id:'p01',MOCK:true,name:'Torneira de bancada',category:'hidraulica',description:'Uma opção para completar a bancada da cozinha, com bica alta e acabamento cromado.',specs:['Aplicação: cozinha','Instalação: bancada','Acabamento: cromado'],image:'faucet',available:true},
  {id:'p02',MOCK:true,name:'Lâmpada LED bulbo',category:'iluminacao',description:'Iluminação para ambientes da casa. Potência, temperatura de cor e tensão devem ser escolhidas para cada instalação.',specs:['Potência ilustrativa: 9 W','Base: E27','Cor ilustrativa: branco quente'],image:'bulb',available:true},
  {id:'p03',MOCK:true,name:'Cabo flexível',category:'eletrica',description:'Condutor para instalações elétricas. A seção e o dimensionamento devem ser definidos por um profissional qualificado.',specs:['Seção ilustrativa: 2,5 mm²','Cor ilustrativa: azul','Venda ilustrativa: por metro'],image:'cable',available:true},
  {id:'p04',MOCK:true,name:'Furadeira de impacto',category:'ferramentas',description:'Ferramenta para tarefas de instalação e manutenção. Confirme o modelo e os acessórios adequados ao trabalho.',specs:['Potência ilustrativa: 650 W','Mandril ilustrativo: 13 mm','Função: com impacto'],image:'drill',available:true},
  {id:'p05',MOCK:true,name:'Janela de três folhas',category:'acabamentos',description:'Esquadria em aço branco para compor o ambiente. Consulte medidas, acabamentos e opções para seu projeto.',specs:['Material: aço','Acabamento: branco','Medida ilustrativa: 120 × 100 cm'],image:'window',available:true},
  {id:'p06',MOCK:true,name:'Disjuntor bipolar',category:'eletrica',description:'Dispositivo de proteção para instalações elétricas. A especificação deve seguir o projeto e a orientação técnica.',specs:['Corrente ilustrativa: 32 A','Número de polos: 2','Instalação: trilho DIN'],image:'breaker',available:true},
  {id:'p07',MOCK:true,name:'Gabinete para banheiro',category:'acabamentos',description:'Uma composição de gabinete e cuba para organizar o banheiro. Dimensões e materiais são exemplos para o protótipo.',specs:['Largura ilustrativa: 60 cm','Cor ilustrativa: amadeirado','Composição ilustrativa: gabinete e cuba'],image:'cabinet',available:true},
  {id:'p08',MOCK:true,name:'Chuveiro elétrico',category:'hidraulica',description:'Opção para o banho do dia a dia. Confirme tensão, potência e compatibilidade com a instalação antes de escolher.',specs:['Tensão ilustrativa: 220 V','Potência ilustrativa: 5.500 W','Acabamento: branco'],image:'shower',available:false},
  {id:'p09',MOCK:true,name:'Jogo de brocas',category:'ferramentas',description:'Conjunto para demonstrar os acessórios de perfuração. Escolha as brocas conforme material e equipamento.',specs:['Conjunto ilustrativo: 5 peças','Medidas ilustrativas: 4 a 10 mm','Aplicação ilustrativa: alvenaria'],image:'bits',available:true},
  {id:'p10',MOCK:true,name:'Interruptor com tomada',category:'eletrica',description:'Conjunto de acabamento para pontos elétricos. Confira padrão, corrente e necessidades do ambiente.',specs:['Cor: branco','Configuração ilustrativa: 1 interruptor + 1 tomada','Formato ilustrativo: 4 × 2'],image:'socket',available:true},
  {id:'p11',MOCK:true,name:'Plafon LED de sobrepor',category:'iluminacao',description:'Iluminação de teto com formato compacto. Confira as opções de cor, potência e dimensões na loja.',specs:['Formato: redondo','Potência ilustrativa: 18 W','Montagem: sobrepor'],image:'ceiling',available:false},
  {id:'p12',MOCK:true,name:'Registro de esfera',category:'hidraulica',description:'Componente para controle do fluxo de água. Confirme o diâmetro e a aplicação com a equipe.',specs:['Diâmetro ilustrativo: 1/2 polegada','Material ilustrativo: metal','Acionamento: alavanca'],image:'valve',available:true},
];
export const stores = [
  {id:'loja1',name:'Loja 1 · Vila Fernandes',address:'Rua Barão do Rio Branco, 9',district:'Vila Fernandes · Álvares Machado, SP',mapQuery:'Eletro Severo Rua Barão do Rio Branco 9 Álvares Machado SP',MOCK:{name:true,hours:true},hours:[['Segunda a sexta','8h às 18h'],['Sábado','8h às 12h'],['Domingo','Fechado']]},
  {id:'loja2',name:'Loja 2 · Centro',address:'Rua Fernando Costa, 168',district:'Centro · Álvares Machado, SP',mapQuery:'Eletro Severo Rua Fernando Costa 168 Álvares Machado SP',MOCK:{name:true,hours:true},hours:[['Segunda a sexta','8h às 18h'],['Sábado','8h às 12h'],['Domingo','Fechado']]},
];
