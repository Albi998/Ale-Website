import { site } from "../data/site";

export default function AboutSection() {
  return (
    <section id="about" className="brow-about">
      {/* Mini-hero con overlay e CTA */}
      <div className="brow-about-hero">
        <img src={site.about.hero.image} alt="" className="img" />
        <div className="brow-about-hero-overlay" />
        <div className="brow-about-hero-content container">
          <p className="brow-about-script">{site.about.hero.kicker}</p>
          <a href={site.hero.ctaPrimary.href} className="btn brow-cta" target="_blank">
            {site.about.hero.cta.label}
          </a>
        </div>
      </div>

      {/* Blocco about + media */}
      <div className="container brow-about-grid">
        <div className="brow-about-text">
          <h3 className="brow-handwrite">{site.about.title}</h3>
          <p className="brow-copy">{site.about.p1}</p>
          <p className="brow-copy">{site.about.p2}</p>
          <a href={site.hero.ctaPrimary.href} className="btn brow-btn" target="_blank">
            {site.about.cta.label}
          </a>
        </div>

        <div className="brow-about-media">
          <img
            src={site.about.image}
            alt="Team at work"
            className="img brow-media-rect"
          />
          <div className="dots dots-svc-b" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
