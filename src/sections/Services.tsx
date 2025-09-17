import { site } from "../data/site";

export default function ServicesSection() {
  return (
    <section id="services" className="brow-expertise">
      <div className="container">
        {/* Intro */}
        <div
          className="grid"
          style={{
            gridTemplateColumns: "1.025fr 0.975fr",
            alignItems: "center",
            // gap: "28px",
            marginBottom: "32px",
          }}
        >
          <div>
            <div aria-hidden="true" className="brow-divider" />
            <p className="brow-copy" style={{ maxWidth: 520 }}>
              {site.services.intro}
            </p>
          </div>
          <div className="brow-overprint" />
        </div>

        <h2 className="brow-expertise-title">{site.services.heading}</h2>

        <div className="brow-expertise-grid">
          {site.services.items.map((s, i) => {
            const leftText = i % 2 === 0;

            const Card = (
              <div
                key={s.id + "-card"}
                className={`brow-card ${s.theme === "taupe" ? "taupe" : ""}`}
              >
                <h3 className="brow-handwrite">{s.title}</h3>
                <p className="brow-copy">{s.excerpt}</p>
                <a className="btn brow-btn" href={s.ctaHref}>
                  {s.ctaLabel}
                </a>
              </div>
            );

            const Media = (
              <div key={s.id + "-media"} className="brow-media">
                {s.shape === "rect" ? (
                  <img src={s.image} alt={s.title} className="img brow-media-rect" />
                ) : (
                  <div className="brow-media-circle">
                    <img src={s.image} alt={s.title} className="img" />
                  </div>
                )}
                <div
                  className={`dots-black ${leftText ? "dots-svc-a" : "dots-svc-b"}`}
                  aria-hidden="true"
                />
              </div>
            );

            return leftText ? (
              <div key={s.id} className="brow-service-row">
                {Card}
                {Media}
              </div>
            ) : (
              <div key={s.id} className="brow-service-row">
                {Media}
                {Card}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
