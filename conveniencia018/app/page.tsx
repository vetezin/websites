import Image from "next/image";
import { assetPath } from "@/data/assets";
import { MobileMenu } from "./mobile-menu";
import { zero18 } from "@/data/zero18";

function ExternalLink({
  href,
  children,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {children} <span aria-hidden="true">↗</span>
    </a>
  );
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ConvenienceStore",
    name: zero18.name,
    address: {
      "@type": "PostalAddress",
      streetAddress: zero18.street,
      addressLocality: zero18.city,
      addressRegion: "SP",
      postalCode: zero18.postalCode,
      addressCountry: "BR",
    },
    sameAs: [zero18.instagramUrl, zero18.mapsUrl],
    openingHoursSpecification: zero18.schemaHours,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>

      <header className="header">
        <a className="brand" href="#inicio" aria-label="Zero18, início">
          <Image src={assetPath("/zero18/logo-zero18.png")} alt="" width={48} height={48} priority />
          <span>ZERO<b>18</b></span>
        </a>
        <nav className="nav" aria-label="Navegação principal">
          <a href="#bebidas">Bebidas</a>
          <a href="#localizacao">Localização</a>
          <ExternalLink href={zero18.instagramUrl}>Instagram</ExternalLink>
        </nav>
        <ExternalLink className="header-cta" href={zero18.whatsappUrl}>WhatsApp</ExternalLink>
        <MobileMenu />
      </header>

      <main id="conteudo">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-image">
            <Image
              src={assetPath("/zero18/fachada-entrada-zero18.png")}
              alt="Fachada da Conveniência Zero18 sob céu azul"
              fill
              priority
              sizes="100vw"
            />
          </div>
          <div className="hero-overlay" />
          <div className="hero-body wrap">
            <p className="eyebrow">PRESIDENTE PRUDENTE · SP</p>
            <h1 id="hero-title">SUA PARADA<br />ANTES DO<br /><em>ROLÊ.</em></h1>
            <p className="hero-description">Bebida gelada e o clima certo pra começar. Encontre a Zero18 no Jardim Maracanã.</p>
            <div className="hero-actions">
              <ExternalLink className="button orange" href={zero18.whatsappUrl}>Chamar no WhatsApp</ExternalLink>
              <ExternalLink className="text-link" href={zero18.mapsUrl}>Como chegar</ExternalLink>
            </div>
          </div>
        </section>

        <section className="offer section wrap" id="bebidas" aria-labelledby="offer-title">
          <div className="offer-heading">
            <div>
              <p className="eyebrow"><span>01</span> · O QUE VOCÊ ENCONTRA</p>
              <h2 id="offer-title">BEBIDAS PRA LEVAR.<br /><em>COPÃO PRA COMEÇAR.</em></h2>
            </div>
            <p>Cervejas, gin, destilados e copão. Consulte as opções disponíveis pelo WhatsApp.</p>
          </div>
          <div className="offer-grid">
            <figure className="offer-card">
              <div className="offer-image"><Image src={assetPath("/zero18/destilados-zero18.png")} alt="Arte da Zero18 com uma seleção de destilados" fill sizes="(max-width: 680px) 100vw, 33vw" /></div>
              <figcaption>Destilados e gin</figcaption>
            </figure>
            <figure className="offer-card">
              <div className="offer-image"><Image src={assetPath("/zero18/copao-zero18.png")} alt="Arte oficial da Zero18 com um copão" fill sizes="(max-width: 680px) 100vw, 33vw" /></div>
              <figcaption>Copão</figcaption>
            </figure>
            <figure className="offer-card">
              <div className="offer-image"><Image src={assetPath("/zero18/ballena-zero18.png")} alt="Arte da Zero18 com bebida Ballena sabor morango" fill sizes="(max-width: 680px) 100vw, 33vw" /></div>
              <figcaption>Sabores pra escolher</figcaption>
            </figure>
          </div>
          <ExternalLink className="text-link offer-link" href={zero18.whatsappUrl}>Perguntar pelo WhatsApp</ExternalLink>
        </section>

        <section className="visit section wrap" id="localizacao" aria-labelledby="visit-title">
          <div className="visit-content">
            <p className="eyebrow"><span>02</span> · ONDE NOS ENCONTRAR</p>
            <h2 id="visit-title">AQUI NO<br /><em>MARACANÃ.</em></h2>
            <address>
              <strong>{zero18.street}</strong><br />
              {zero18.neighborhood} · {zero18.city} – SP<br />
              CEP {zero18.postalCode}
            </address>
            <div className="visit-hours">
              <h3>Horários</h3>
              {zero18.hours.map((item) => (
                <div className="hour" key={item.day}><span>{item.day}</span><strong>{item.time}</strong></div>
              ))}
              <p>Horários consultados no Google. Confira antes de sair.</p>
            </div>
            <ExternalLink className="button dark" href={zero18.mapsUrl}>Traçar rota</ExternalLink>
          </div>
          <div className="visit-image">
            <Image src={assetPath("/zero18/fachada-capa-zero18.webp")} alt="Fachada da Zero18 ao entardecer" fill sizes="(max-width: 760px) 100vw, 42vw" />
          </div>
        </section>
      </main>

      <footer className="footer wrap">
        <a className="footer-brand" href="#inicio" aria-label="Zero18, voltar ao início">
          <Image src={assetPath("/zero18/logo-zero18.png")} alt="" width={52} height={52} loading="eager" />
          <span>ZERO18</span>
        </a>
        <p>Sua conveniência no Jardim Maracanã.<br />Presidente Prudente · SP</p>
        <div className="footer-links">
          <ExternalLink href={zero18.whatsappUrl}>WhatsApp</ExternalLink>
          <ExternalLink href={zero18.instagramUrl}>Instagram</ExternalLink>
          <ExternalLink href={zero18.mapsUrl}>Google Maps</ExternalLink>
        </div>
        <small>© {new Date().getFullYear()} CONVENIÊNCIA ZERO18 · BEBA COM MODERAÇÃO.</small>
      </footer>
    </>
  );
}
