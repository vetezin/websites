import { readFile } from 'node:fs/promises';
import { renderIcon } from './icons.mjs';

export function normalizeBasePath(value = '/') {
  if (!/^\/(?:[A-Za-z0-9_-]+\/)*[A-Za-z0-9_-]*\/?$/.test(value)) {
    throw new Error('Invalid base path. Use a local pathname such as /websites/ragassi/.');
  }
  return value.endsWith('/') ? value : `${value}/`;
}

const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[character]);

export async function renderPage(data, basePath = '/', siteUrl = data.previewUrl) {
  const base = normalizeBasePath(basePath);
  if (!/^\d{12,13}$/.test(data.phone)) throw new Error('Invalid contact phone.');
  const publicUrl = new URL(siteUrl);
  if (!['https:', 'http:'].includes(publicUrl.protocol)) throw new Error('Invalid site URL.');
  const whatsapp = `https://wa.me/${data.phone}?text=${encodeURIComponent(data.contact.message)}`;
  const schema = {
    '@context': 'https://schema.org', '@type': 'AutoRepair', name: data.name,
    telephone: `+${data.phone}`, areaServed: { '@type': 'City', name: data.city },
    hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Serviços automotivos', itemListElement: data.services.map(service => ({
      '@type': 'Offer', itemOffered: { '@type': 'Service', name: service.name }
    })) }
  };
  const values = {
    BASE:base, TITLE:data.title, DESCRIPTION:data.description, ROBOTS:data.preview?'noindex, nofollow':'index, follow',
    SOCIAL_IMAGE:new URL('assets/fachada.webp', publicUrl).href,
    NAME:data.name, CITY:data.city, STATE:data.state, DISTRICT:data.district,
    PHONE:data.phone, PHONE_DISPLAY:data.phoneDisplay, PAYMENT:data.payment,
    NAV_SERVICES:data.navigation.services, NAV_WORKSHOP:data.navigation.workshop, NAV_CONTACT:data.navigation.contact,
    MENU_LABEL:data.labels.menu, SKIP:data.labels.skip, WHATSAPP_LABEL:data.labels.whatsapp, APPOINTMENT_LABEL:data.labels.appointment, WHATSAPP:whatsapp,
    DIRECTIONS_LABEL:data.labels.directions, LOCATION_LABEL:data.labels.location, TOP_LABEL:data.labels.top,
    PREVIEW_LABEL:data.preview?data.labels.preview:'', HERO_TITLE:data.hero.title, HERO_BODY:data.hero.body,
    HERO_ALT:data.hero.photoAlt, HERO_CAPTION:data.hero.photoCaption, SERVICES_TITLE:data.servicesTitle,
    SERVICES_INTRO:data.servicesIntro, WORKSHOP_TITLE:data.workshop.title, WORKSHOP_BODY:data.workshop.body,
    FACADE_ALT:data.workshop.photoAlt, FACADE_CAPTION:data.workshop.photoCaption,
    CONTACT_TITLE:data.contact.title, CONTACT_BODY:data.contact.body, HOURS:data.contact.hours,
    LOCATION_NOTE:data.contact.locationNote, MAP_URL:data.profileUrl,
  };
  const raw = {
    SERVICES:data.services.map(service=>{
      const message = `Olá! Gostaria de saber sobre o serviço de ${service.name.toLocaleLowerCase('pt-BR')} para meu carro.`;
      const href = `https://wa.me/${data.phone}?text=${encodeURIComponent(message)}`;
      return `<li><a class="service-link" href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer">${renderIcon(service.icon)}<div><h3>${escapeHtml(service.name)}</h3><p>${escapeHtml(service.description)}</p><span class="visually-hidden">Consultar pelo WhatsApp</span></div><span class="service-arrow">${renderIcon('arrow')}</span></a></li>`;
    }).join('\n'),
    SCHEMA:JSON.stringify(schema).replace(/</g,'\\u003c'),
    WHATSAPP_ICON:renderIcon('whatsapp'), PHONE_ICON:renderIcon('phone'), PIN_ICON:renderIcon('pin'), ARROW_ICON:renderIcon('arrow'), MENU_ICON:renderIcon('menu'),
  };
  const template = await readFile(new URL('../index.template.html',import.meta.url),'utf8');
  return template.replace(/\{\{([A-Z_]+)\}\}/g,(_,key)=> {
    if (Object.hasOwn(raw,key)) return raw[key];
    if (!Object.hasOwn(values,key)) throw new Error(`Unknown template field: ${key}`);
    return escapeHtml(values[key]);
  });
}
