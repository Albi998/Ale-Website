import { site } from "../data/site";

export default function HomeSection() {
  return (
    <section id="home" className="psy-hero">
      <div className="psy-hero-fw">
        <div className="psy-hero-img">
          <img src={site.hero.image} alt={site.hero.imageAlt || ""} fetchPriority="high"/>
        </div>

        <div className="psy-hero-side">
          <div className="psy-hero-copy">
            <h1>{site.hero.title}</h1>
            <p className="lead">{site.hero.subtitle}</p>
            <a
              className="btn primary"
              href={site.hero.ctaPrimary.href}
              target="_blank"
              rel="noreferrer"
            >
              {site.hero.ctaPrimary.label}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
