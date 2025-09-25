import { site } from "../data/site";

export default function AboutSection() {
  const cta = site.hero.ctaPrimary;
  const alt = site.about.imagesAlt || "";

  return (
    <section id="about" className="psy-about section">
      <div className="container about-wrap">
        <div className="about-grid">
          {/* Colonna sinistra: testo */}
          <div className="about-copy">
            <div className="about-bar">
              <h2 className="about-title">{site.about.heading}</h2>
            </div>
            {/* <p className="lead">{site.about.kicker}</p> */}
            <p>{site.about.p1}</p>
            <p>{site.about.p2}</p>
            <a className="btn ghost" href={cta.href}>{cta.label}</a>
          </div>

          {/* Colonna destra: p3 + immagini */}
          <div className="about-media">
            <p className="span-2">{site.about.p3}</p>
            <img
              src={site.about.images[0]}
              alt={alt}
              className="img"
              loading="lazy"
            />
            <img
              src={site.about.images[1]}
              alt={alt}
              className="img bottom"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
