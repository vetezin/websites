import { company, services } from './company.js';

const clean = value => String(value ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim();

/** Valida os dados locais antes de preparar o contato no WhatsApp. */
export function validateContact(input) {
  const data = {
    name: clean(input.name),
    email: clean(input.email),
    phone: clean(input.phone),
    business: clean(input.business),
    service: clean(input.service),
    message: String(input.message ?? '').replace(/\r\n/g, '\n').trim(),
  };
  const errors = [];
  if (data.name.length < 2 || data.name.length > 100) errors.push('Informe seu nome, com 2 a 100 caracteres.');
  if (data.email && (data.email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))) errors.push('Informe um e-mail válido.');
  if (data.phone && (!/^[\d\s()+-]+$/.test(data.phone) || !/^(?:55)?\d{10,11}$/.test(data.phone.replace(/\D/g, '')))) errors.push('Informe um telefone com DDD válido.');
  if (data.business.length > 150) errors.push('O nome da empresa deve ter até 150 caracteres.');
  if (!['geral', ...services.map(service => service.id)].includes(data.service)) errors.push('Selecione um assunto válido.');
  if (data.message.length < 10 || data.message.length > 1500) errors.push('Descreva sua necessidade, com 10 a 1.500 caracteres.');
  return { data, errors };
}

/** Gera uma URL fixa e segura; o visitante confirma o envio no WhatsApp. */
export function prepareWhatsApp(input) {
  const { data, errors } = validateContact(input);
  if (errors.length) return { errors };
  const service = services.find(item => item.id === data.service)?.title || 'Informações gerais';
  const lines = [
    'Olá, Volpi! Entro em contato pelo site.',
    `Nome: ${data.name}`,
    data.business ? `Empresa: ${data.business}` : null,
    data.email ? `E-mail: ${data.email}` : null,
    data.phone ? `Telefone: ${data.phone}` : null,
    `Assunto: ${service}`,
    '', data.message,
  ].filter(line => line !== false && line !== undefined && line !== null);
  const message = lines.join('\n');
  return { errors: [], message, href: `https://wa.me/${company.whatsappNumber}?text=${encodeURIComponent(message)}` };
}
