import content from './content.json';
export { content };
export const site = { name: 'Gazzetti Advogados Associados', officePhoto: 'images/escritorio-real.webp' };
export const navigation = [
 { label: 'O Escritório', path: 'o-escritorio/' },
 { label: 'Áreas de Atuação', path: 'areas-de-atuacao/' },
 { label: 'Contato', path: 'contato/' },
];
export const areaIds = ['estruturacao', 'negociacao', 'advocacia-contenciosa'];
// Microcopy funcional adicional: sujeito à revisão criativa; não é copy institucional.
export const ui = {
 demo: 'Demonstração institucional · conteúdo em validação',
 photo: 'Fotografia do site original da Gazzetti. Uso nesta demonstração sujeito à validação.',
 team: 'A apresentação da equipe será disponibilizada após a confirmação de nomes, fotografias e credenciais.',
 channels: 'Informações de contato em validação.',
 location: 'Endereços e orientações de acesso serão disponibilizados após confirmação.',
 formNotice: 'Formulário demonstrativo. O envio de mensagens não está disponível nesta apresentação.',
 privacyTitle: 'Política de Privacidade',
 privacy: 'Esta demonstração não envia nem armazena os dados preenchidos no formulário. A Política de Privacidade será disponibilizada após a definição e aprovação do fluxo real de dados do escritório.',
};
export const fields = [
 { name: 'name', label: 'Nome completo', placeholder: 'Seu nome', type: 'text', autocomplete: 'name', required: true },
 { name: 'email', label: 'E-mail', placeholder: 'seuemail@exemplo.com', type: 'email', autocomplete: 'email', required: true },
 { name: 'phone', label: 'Telefone (opcional)', placeholder: '(00) 00000-0000', type: 'tel', autocomplete: 'tel', required: false },
 { name: 'message', label: 'Mensagem', placeholder: 'Escreva sua mensagem', type: 'textarea', required: true },
];
