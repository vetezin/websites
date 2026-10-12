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
  {id:'ferramentas',name:'Ferramentas',icon:'tool'},
  {id:'acabamentos',name:'Acabamentos',icon:'window'},
];
// MOCK: descrições e fichas técnicas de exemplo; fotos de referência, sem estoque confirmado.
export const products = [
  {
    "id": "p07",
    "MOCK": true,
    "name": "Gabinete para banheiro Íris",
    "category": "acabamentos",
    "image": "./assets/photos/cabinet.jpg",
    "description": "Organização e acabamento para o banheiro, em uma composição compacta com gabinete, cuba e espelheira. O espaço interno acomoda os itens do dia a dia e a combinação de tons claros e amadeirados traz um acabamento acolhedor ao ambiente.",
    "specs": [
      "Ambiente: banheiro e lavabo",
      "Composição: gabinete, cuba e espelheira",
      "Largura: 44 cm",
      "Acabamento: amadeirado e off-white",
      "Instalação: suspensa na parede",
      "Limpeza: pano macio levemente úmido"
    ],
    "application": "Banheiros compactos, lavabos e reformas que precisam aproveitar melhor o espaço.",
    "guidance": "Confira as medidas do ambiente, os pontos de água e esgoto e os acessórios incluídos antes de escolher.",
    "source": "https://www.mgmmoveis.com.br/produtos/kit-iris/",
    "available": null,
    "imageClass": ""
  },
  {
    "id": "p01",
    "MOCK": true,
    "name": "Torneira de bancada",
    "category": "hidraulica",
    "image": "./assets/photos/faucet.png",
    "description": "Uma torneira de bica alta para facilitar a rotina na cozinha. O desenho oferece espaço para lavar louças e alimentos, enquanto o acabamento cromado combina com diferentes cubas e bancadas.",
    "specs": [
      "Ambiente: cozinha e área gourmet",
      "Instalação: bancada",
      "Acabamento: cromado",
      "Acionamento: alavanca de ¼ de volta",
      "Bica: móvel",
      "Conexão: ½ polegada"
    ],
    "application": "Bancadas de cozinha, espaços gourmet e pequenas reformas no ponto de água.",
    "guidance": "Confirme a altura da bica, o espaço até a cuba e a compatibilidade da conexão.",
    "source": "https://www.lorenzetti.com.br/produto/1167f31",
    "available": null,
    "imageClass": ""
  },
  {
    "id": "p06",
    "MOCK": true,
    "name": "Disjuntor bipolar",
    "category": "eletrica",
    "image": "./assets/photos/breaker.jpg",
    "description": "Componente de proteção para o quadro de distribuição, utilizado em circuitos com dois polos. Seu formato compacto facilita a organização do quadro e a identificação dos circuitos durante a manutenção.",
    "specs": [
      "Número de polos: 2",
      "Montagem: trilho DIN",
      "Corrente: 32 A",
      "Curva de atuação: C",
      "Aplicação: quadro de distribuição",
      "Cor: branco com acionamento azul"
    ],
    "application": "Circuitos residenciais e comerciais, conforme o dimensionamento do projeto elétrico.",
    "guidance": "A corrente, a curva e a capacidade de interrupção devem ser definidas por um profissional qualificado.",
    "source": "https://www.steck.com.br/produtos/quadrosedispositivosdeprotecao/protecao-basica?categoria=mini-disjuntor",
    "available": null,
    "imageClass": ""
  },
  {
    "id": "p09",
    "MOCK": true,
    "name": "Jogo de brocas",
    "category": "ferramentas",
    "image": "./assets/photos/bits.jpg",
    "description": "Uma seleção de brocas para tarefas de instalação e pequenos reparos. Os diferentes diâmetros ajudam a preparar furos para fixações, prateleiras e acessórios, conforme o material da superfície.",
    "specs": [
      "Composição: 5 brocas",
      "Medidas: 4, 5, 6, 8 e 10 mm",
      "Aplicação: alvenaria e concreto",
      "Ponta: metal duro",
      "Encaixe: cilíndrico",
      "Uso: furadeira compatível"
    ],
    "application": "Instalação de suportes, prateleiras e acessórios em paredes de alvenaria.",
    "guidance": "Escolha a broca e o modo de perfuração adequados à superfície e utilize os equipamentos de proteção.",
    "source": "https://global.tramontina.com/p/jogo-de-brocas-para-concreto-tramontina-master-5-pecas/43142505",
    "available": null,
    "imageClass": ""
  },
  {
    "id": "p10",
    "MOCK": true,
    "name": "Tomada dupla · Linha Sleek",
    "category": "eletrica",
    "image": "./assets/photos/socket.jpg",
    "description": "Dois pontos de conexão em um acabamento discreto para a parede. A placa branca e as linhas suaves permitem compor os pontos elétricos com diferentes estilos de ambiente.",
    "specs": [
      "Configuração: 2 tomadas 2P+T",
      "Cor: branco",
      "Formato: placa 4 × 2",
      "Corrente: 20 A",
      "Instalação: embutida",
      "Aplicação: ambientes internos"
    ],
    "application": "Pontos de energia em salas, quartos, cozinhas e áreas de trabalho.",
    "guidance": "Verifique a corrente dos equipamentos e a compatibilidade com o circuito. A instalação deve seguir o projeto elétrico.",
    "source": "https://www.panorama.com.br/conjunto-montado-4x2-tomada-dupla-padrao-20a-sleek-branco-margirius/p",
    "available": null,
    "imageClass": ""
  },
  {
    "id": "p05",
    "MOCK": true,
    "name": "Janela de três folhas",
    "category": "acabamentos",
    "image": "./assets/photos/window-post.jpg",
    "description": "Uma esquadria de correr que combina entrada de luz e ventilação. O acabamento branco facilita a composição com diferentes paredes e revestimentos, em construções novas ou reformas.",
    "specs": [
      "Material: aço galvanizado",
      "Cor: branco",
      "Abertura: de correr",
      "Composição: 3 folhas",
      "Medida: 120 × 100 cm",
      "Aplicação: ambientes residenciais"
    ],
    "application": "Quartos, salas e ambientes em que se deseja aproveitar a luz natural.",
    "guidance": "Confirme o vão de instalação, o sentido de abertura e se vidros e acessórios acompanham o modelo.",
    "source": "https://www.instagram.com/eletrosevero/p/DdJfEhlRLue/",
    "available": null,
    "imageClass": "photo-window"
  },
  {
    "id": "p13",
    "MOCK": true,
    "name": "Veneziana de seis folhas",
    "category": "acabamentos",
    "image": "./assets/photos/veneziana.webp",
    "description": "Uma solução para regular a entrada de luz e preservar a privacidade. As folhas de correr permitem adaptar a abertura do ambiente, enquanto as venezianas contribuem para a circulação de ar.",
    "specs": [
      "Material: aço",
      "Acabamento: branco",
      "Composição: 6 folhas",
      "Abertura: de correr",
      "Medida: 150 × 100 cm",
      "Indicação: quartos e dormitórios"
    ],
    "application": "Dormitórios e espaços que precisam equilibrar privacidade, iluminação e ventilação.",
    "guidance": "Confira as dimensões do vão, o tipo de vidro e as opções com ou sem grade disponíveis na loja.",
    "source": "https://www.mmachado.ind.br/produto/veneziana-6-folhas-requadro-14-p50",
    "available": null,
    "imageClass": ""
  },
  {
    "id": "p08",
    "MOCK": true,
    "name": "Chuveiro elétrico",
    "category": "hidraulica",
    "image": "./assets/photos/shower.png",
    "description": "Uma opção para completar o banheiro e tornar o banho mais confortável. O espalhador amplo distribui a água, e o seletor de temperaturas permite ajustar o uso conforme a estação.",
    "specs": [
      "Acabamento: branco",
      "Tensão: 220 V",
      "Potência: 6.400 W",
      "Controle: multitemperaturas",
      "Montagem: parede",
      "Composição: ducha e mangueira"
    ],
    "application": "Banheiros residenciais com instalação elétrica e hidráulica dimensionada para o modelo.",
    "guidance": "Antes de escolher, confirme tensão, pressão da água e dimensionamento do circuito com um profissional.",
    "source": "https://www.lorenzetti.com.br/produto/advanced-multitemperaturas/",
    "available": null,
    "imageClass": ""
  },
  {
    "id": "p12",
    "MOCK": true,
    "name": "Registro de esfera",
    "category": "hidraulica",
    "image": "./assets/photos/valve.jpg",
    "description": "Componente para abrir e fechar o fluxo de água de forma prática. O acionamento tipo borboleta facilita o manuseio em pontos de manutenção e trechos da instalação hidráulica.",
    "specs": [
      "Material: PVC",
      "Conexão: roscável",
      "Bitola: ½ polegada",
      "Acionamento: borboleta",
      "Uso: água fria",
      "Instalação: rede hidráulica"
    ],
    "application": "Pontos de controle e manutenção em instalações de água fria.",
    "guidance": "Confira o diâmetro da tubulação, o tipo de conexão e a pressão de trabalho antes da instalação.",
    "source": "https://www.tigre.com.br/produto/registro-de-esfera-com-borboleta-em-pvc",
    "available": null,
    "imageClass": ""
  }
];
export const stores = [
  {id:'loja1',name:'Loja 1 · Vila Fernandes',address:'Rua Barão do Rio Branco, 9',district:'Vila Fernandes · Álvares Machado, SP',mapQuery:'Eletro Severo Rua Barão do Rio Branco 9 Álvares Machado SP',MOCK:{name:true,hours:true},hours:[]},
  {id:'loja2',name:'Loja 2 · Centro',address:'Rua Fernando Costa, 168',district:'Centro · Álvares Machado, SP',mapQuery:'Eletro Severo Rua Fernando Costa 168 Álvares Machado SP',MOCK:{name:true,hours:true},hours:[]},
];
