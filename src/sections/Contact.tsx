import { site } from "../data/site";

export default function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container" style={{gridTemplateColumns:"1fr 1fr"}}>
        <div>
          <h2>Contatti</h2>
          <p className="lead">{site.brand.address}</p>
          <p><a href={`tel:${site.brand.phone}`}>{site.brand.phone}</a> · <a href={`mailto:${site.brand.email}`}>{site.brand.email}</a></p>
          <div style={{display:"flex",gap:12,marginTop:12}}>
            <a className="btn primary" href={site.brand.socials.whatsapp}>WhatsApp</a>
            <a className="btn" href={site.brand.socials.instagram} target="_blank">Instagram</a>
          </div>
        </div>
        <div className="card" style={{padding:0, overflow:"hidden"}}>
          {/* <iframe
            title="Mappa"
            src={site.contact.mapEmbed}
            width="100%" height="260" style={{border:0}}
            loading="lazy" referrerPolicy="no-referrer-when-downgrade"
          /> */}
        </div>
      </div>
    </section>
  );
}
