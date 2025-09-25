import { site } from "../data/site";

export default function ContactsSection() {
  return (
    <section id="contact" className="psy-contacts section">
      <div className="container psy-contacts-grid">
        <div>
          <h2>{site.contact.heading || "Contatti"}</h2>
          <p className="lead">{site.brand.address}</p>
          <p>
            <a href={`tel:${site.brand.phone}`}>{site.brand.phone}</a>
            <br />
            <a href={`mailto:${site.brand.email}`}>{site.brand.email}</a>
          </p>
          <div className="psy-contact-actions">
            <a
              className="btn primary"
              href={site.hero.ctaPrimary.href}
              target="_blank"
              rel="noreferrer"
            >
              {site.hero.ctaPrimary.label}
            </a>
            <a
              className="btn"
              href={site.brand.socials.whatsapp}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div className="card" style={{ padding: 0, overflow: "hidden" }}>
          <iframe
            title="Mappa"
            src={site.contact.mapEmbed}
            width="100%"
            height="280"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
