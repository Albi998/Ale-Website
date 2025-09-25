import { site } from "../data/site";

export default function ServicesSection() {
  return (
    <section id="services" className="psy-services section">
      <div className="container">
        <div
          className="grid anti-hero"
        >
          <h2 className="anti-left">{site.services.heading}</h2>
          <p className="lead text-end anti-right">
            {site.services.intro}
          </p>
        </div>

        <div className="psy-cards">
          {site.services.items.map((s) => (
            <article
              key={s.id}
              className={`psy-card ${s.theme === "solid" ? "solid" : "light"}`}
            >
              {s.tag ? <span className="psy-pill">{s.tag}</span> : null}

              <h3>{s.title}</h3>
              <p>{s.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
