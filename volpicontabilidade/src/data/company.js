export const company = {
  name: 'Volpi Contabilidade',
  founded: 2007,
  phone: '(18) 3221-5575',
  phoneHref: 'tel:+551832215575',
  whatsapp: '(18) 98200-9848',
  whatsappNumber: '5518982009848',
  whatsappHref: 'https://wa.me/5518982009848?text=Ol%C3%A1%2C%20gostaria%20de%20conhecer%20os%20servi%C3%A7os%20da%20Volpi%20Contabilidade.',
  email: 'volpi@volpicontabilidade.com.br',
  street: 'Rua Comendador João Peretti, 225',
  neighborhood: 'Vila Santa Helena',
  city: 'Presidente Prudente',
  state: 'SP',
  postalCode: '19015-610',
  portal: 'https://volpicontabilidadeapp.com21.com.br/frontend/public/#/login',
  maps: 'https://www.google.com/maps/search/?api=1&query=Rua%20Comendador%20Jo%C3%A3o%20Peretti%20225%20Presidente%20Prudente%20SP',
  facebook: 'https://www.facebook.com/volpicontabilidade',
};

export const services = [
  {
    id: 'contabil', icon: 'chart', title: 'Assessoria contábil',
    summary: 'Informação organizada para entender os números e tomar decisões com mais clareza.',
    description: 'Assessoria e terceirização da contabilidade, com informações para apoiar a administração, os empresários e os demais interessados nos resultados da empresa.',
    items: ['Escrituração e procedimentos contábeis', 'Relatórios e acompanhamento das rotinas', 'Suporte aos departamentos da empresa'],
  },
  {
    id: 'fiscal', icon: 'document', title: 'Fiscal e tributário',
    summary: 'Acompanhamento das obrigações fiscais e planejamento adequado à sua realidade.',
    description: 'Diagnóstico das atividades e rotinas para identificar oportunidades legais de planejamento tributário, além da escrituração de documentos e apuração de impostos.',
    items: ['Apuração de impostos e obrigações fiscais', 'Orientação sobre ICMS, IPI e ISS', 'Planejamento tributário', 'Imposto de Renda de pessoa física e jurídica'],
  },
  {
    id: 'trabalhista', icon: 'people', title: 'Trabalhista e RH',
    summary: 'Suporte às relações trabalhistas e previdenciárias, com atenção às obrigações da empresa.',
    description: 'Assessoria nas áreas de recursos humanos, trabalhista e previdenciária, apoiando a organização de procedimentos e o atendimento às obrigações.',
    items: ['Orientação e legalização trabalhista', 'Procedimentos e normas trabalhistas', 'Suporte técnico ao departamento de RH'],
  },
  {
    id: 'empresarial', icon: 'building', title: 'Empresas e legalizações',
    summary: 'Da abertura à regularização, uma parceria para acompanhar cada etapa do negócio.',
    description: 'Apoio na constituição, regularização e encerramento de empresas. Consultoria e assessoria empresarial com visitas periódicas, relatórios e respostas a consultas.',
    items: ['Abertura e regularização de empresas', 'Legalização societária', 'Assessoria empresarial', 'Encerramento de empresas'],
  },
];

export const resources = [
  { title: 'Notícias empresariais', category: 'Atualidades', description: 'Acompanhe as publicações contábeis e empresariais disponíveis no portal atual da Volpi.', href: 'https://www.volpicontabilidade.com.br/noticias.php', icon: 'document' },
  { title: 'Informativo on-line', category: 'Informação para sua empresa', description: 'Acesse o informativo disponibilizado pela Volpi em parceria com a Sitecontabil.', href: 'https://sitecontabil.com.br/informativo/?id=68', icon: 'chart' },
  { title: 'Web Magazine', category: 'Revista digital', description: 'Explore a revista digital com conteúdos sobre o universo contábil e empresarial.', href: 'https://sitecontabil.com.br/periodicos/sitecontabil/webmagazine', icon: 'book' },
];

// Nomes lidos nos logotipos já publicados no site original.
export const clients = [
  'Residencial João Menossi II', 'M2 Tratores', 'Foregon',
  'Boitel Chaparral', 'Anjos Colchões & Sofás', 'PSDB', 'Grupo M8',
  'BMC Active', 'MSM Solução', 'Aragós Advogados', 'Noca Imóveis',
  'Domus', 'Data IT', 'Damha Urbanizadora',
];
