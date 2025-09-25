import { site } from "../data/site";

export default function AboutSection() {
  const rightCTA = site.about?.ctaSecondary ?? {
    href: site.hero.ctaPrimary.href,
    label: "Prenota un incontro",
  };
  const leftCTA = site.about?.cta ?? {
    href: "#reviews",
    label: "Leggi le recensioni",
  };

  return (
    <section id="about" className="psy-about section">
      <div className="container about-wrap">
        

        <div className="about-grid">
          
          <div className="about-copy">
          <div className="about-bar">
          <h2 className="about-title">{site.about.heading}</h2>
          
        </div>
            <p className="lead">{site.about.kicker}</p>
            <p>{site.about.p1}</p>
            <p>{site.about.p2}</p>
            <a className="btn ghost" href={rightCTA.href}>
              {rightCTA.label}
            </a>
          </div>

          

          <div className="about-media">
          <p>{site.about.p3}</p>
          <div></div>
            <img
              src={site.about.images[0]}
              alt={site.about.imagesAlt?.[0] ?? ""}
              className="img"
              loading="lazy"
            />
            
            <img
              src={site.about.images[1]}
              alt={site.about.imagesAlt?.[1] ?? ""}
              className="img bottom"
              loading="lazy"
            />
            
          </div>
        </div>
      </div>
    </section>
  );
}
