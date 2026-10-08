export const site = {
  name: 'Gazzetti Advogados Associados',
  email: 'contato@gazzetti.com.br',
  dpo: 'dpo@gazzetti.com.br',
  description: 'Advocacia e consultoria empresarial. Estruturação de negócios, negociação e atuação contenciosa em Presidente Prudente e São Paulo.',
  source: 'https://www.gazzetti.com.br/',
  officePhoto: { image: 'images/escritorio-real.webp', source: 'https://www.gazzetti.com.br/imgs/slider/predio.jpg' },
};

export const navigation = [
  { label: 'Início', path: '' },
  { label: 'Escritório', path: 'escritorio/' },
  { label: 'Áreas de atuação', path: 'areas/' },
  { label: 'Equipe', path: 'equipe/' },
  { label: 'Links úteis', path: 'uteis/' },
];

export const areas = [
  {
    id: 'estruturacao', title: 'Estruturação de negócios', short: 'Estruturação', icon: 'structure',
    intro: 'Segurança jurídica para organizar o presente e construir os próximos passos da empresa.',
    description: 'Decisões empresariais se conectam. Contratos, organização jurídica e gestão de passivos precisam ser considerados em conjunto. A proposta é compreender o contexto do negócio para orientar sua estruturação.',
    services: ['Estruturação jurídica de negócios e projetos', 'Organização de departamentos jurídicos', 'Gestão de passivos judiciais, bancários e tributários', 'Assessoria à reorganização da atividade empresarial'],
    question: 'Em que momento buscar assessoria para estruturar um negócio?',
    answer: 'Na criação de um projeto, na revisão de contratos, em mudanças de organização ou diante de passivos que exijam planejamento. O escopo é definido a partir das particularidades de cada empresa.',
  },
  {
    id: 'negociacao', title: 'Negociação empresarial', short: 'Negociação', icon: 'negotiation',
    intro: 'Diálogo, análise e estratégia na construção de caminhos possíveis para cada negociação.',
    description: 'Uma negociação exige compreender os interesses envolvidos e os efeitos de cada alternativa. A atuação reúne análise contratual e perspectiva contenciosa para apoiar decisões de forma fundamentada.',
    services: ['Negociações bancárias e contratuais', 'Análise de alternativas para composição de conflitos', 'Negociações relacionadas à estruturação de negócios', 'Assessoria na formalização de acordos empresariais'],
    question: 'A negociação substitui a atuação judicial?',
    answer: 'As duas frentes podem ser complementares. A análise do caso permite avaliar possibilidades de negociação, medidas processuais e seus efeitos, sem garantia de um resultado específico.',
  },
  {
    id: 'contencioso', title: 'Advocacia contenciosa', short: 'Contencioso', icon: 'litigation',
    intro: 'Atuação técnica em conflitos empresariais, com atenção ao impacto de cada decisão.',
    description: 'O acompanhamento de uma demanda vai além do processo. A proposta é conectar a estratégia jurídica aos riscos da atividade empresarial, com organização e comunicação ao longo do trabalho.',
    services: ['Demandas empresariais, bancárias e tributárias', 'Gestão de riscos em causas complexas', 'Acompanhamento de carteiras de processos', 'Assessoria jurídica preventiva e corretiva'],
    question: 'Como é definido o escopo de acompanhamento?',
    answer: 'A partir da natureza das demandas, dos documentos disponíveis e da necessidade da empresa. A contratação e os canais de acompanhamento são definidos diretamente com o escritório.',
  },
];

// MOCK: todas as pessoas, cargos e biografias abaixo são fictícios, autorizados para o protótipo.
export const team = [
  { id: 'helena', mock: true, name: 'Helena Duarte', role: 'Sócia · Estruturação empresarial', area: 'Estruturação de negócios', image: 'images/helena.webp', bio: 'Perfil demonstrativo de uma profissional dedicada à organização jurídica de negócios e à assessoria contratual. Sua atuação ilustrativa conecta planejamento, análise de riscos e proximidade com a gestão empresarial.', focus: ['Estruturação empresarial', 'Contratos', 'Assessoria preventiva'] },
  { id: 'rafael', mock: true, name: 'Rafael Monteiro', role: 'Sócio · Negociação e contencioso', area: 'Negociação empresarial', image: 'images/rafael.webp', bio: 'Perfil demonstrativo de um profissional com foco em negociações empresariais e acompanhamento de conflitos. A biografia ilustra uma abordagem que reúne análise técnica e compreensão dos interesses do negócio.', focus: ['Negociação bancária', 'Conflitos empresariais', 'Gestão de passivos'] },
  { id: 'beatriz', mock: true, name: 'Beatriz Nascimento', role: 'Associada · Advocacia contenciosa', area: 'Advocacia contenciosa', image: 'images/beatriz.webp', bio: 'Perfil demonstrativo de uma profissional voltada à análise e ao acompanhamento de demandas empresariais. Este conteúdo fictício representa a organização de informações que será usada nos perfis reais.', focus: ['Contencioso empresarial', 'Análise processual', 'Acompanhamento de demandas'] },
];

// Dados públicos extraídos do site existente. Confirmar atualidade antes de publicar.
export const offices = [
  { city: 'Presidente Prudente', state: 'SP', address: 'Rua Santos Dumont, 565', complement: 'Jardim Aviação · CEP 19020-390', phone: '(18) 3902-7911', tel: '+551839027911', map: 'https://www.google.com/maps/search/?api=1&query=Rua+Santos+Dumont+565+Presidente+Prudente+SP' },
  { city: 'São Paulo', state: 'SP', address: 'Av. Fagundes Filho, 141–145', complement: 'Conjunto 62 · Ed. Austin Office Center\nVila Monte Alegre · CEP 04304-010', phone: '(11) 5078-9018', tel: '+551150789018', map: 'https://www.google.com/maps/search/?api=1&query=Av+Fagundes+Filho+141+Sao+Paulo+SP' },
];

export const resources = [
  { title: 'Tribunal de Justiça de São Paulo', acronym: 'TJSP', category: 'Tribunais', description: 'Portal institucional, consultas e serviços judiciais.', url: 'https://www.tjsp.jus.br/' },
  { title: 'Tribunal Regional Federal da 3ª Região', acronym: 'TRF3', category: 'Tribunais', description: 'Informações e serviços da Justiça Federal.', url: 'https://www.trf3.jus.br/' },
  { title: 'Superior Tribunal de Justiça', acronym: 'STJ', category: 'Tribunais', description: 'Jurisprudência, consultas e informações institucionais.', url: 'https://www.stj.jus.br/' },
  { title: 'Supremo Tribunal Federal', acronym: 'STF', category: 'Tribunais', description: 'Acesso ao portal e aos serviços do tribunal.', url: 'https://portal.stf.jus.br/' },
  { title: 'Receita Federal', acronym: 'RFB', category: 'Certidões e serviços', description: 'Serviços tributários e orientações ao contribuinte.', url: 'https://www.gov.br/receitafederal/pt-br' },
  { title: 'Procuradoria-Geral da Fazenda Nacional', acronym: 'PGFN', category: 'Certidões e serviços', description: 'Informações sobre dívida ativa e regularização.', url: 'https://www.gov.br/pgfn/pt-br' },
  { title: 'Banco Central do Brasil', acronym: 'BCB', category: 'Empresas', description: 'Informações financeiras e serviços ao cidadão.', url: 'https://www.bcb.gov.br/' },
  { title: 'Junta Comercial do Estado de São Paulo', acronym: 'JUCESP', category: 'Empresas', description: 'Informações e serviços de registro empresarial.', url: 'https://www.jucesp.sp.gov.br/' },
  { title: 'Autoridade Nacional de Proteção de Dados', acronym: 'ANPD', category: 'Empresas', description: 'Orientações e publicações sobre proteção de dados.', url: 'https://www.gov.br/anpd/pt-br' },
];

export const policies = [
  { title: 'Política de privacidade e proteção de dados', url: 'https://www.gazzetti.com.br/download/politica_privacidade_protecao_dados.pdf' },
  { title: 'Política de cookies', url: 'https://www.gazzetti.com.br/politica-cookies.pdf' },
  { title: 'Política antidiscriminatória', url: 'https://www.gazzetti.com.br/download/politica_antidiscriminatoria.pdf' },
];
