import { site } from "../data/site";

export default function HomeSection() {
  return (
    <section id="home" className="brow-hero">

      <div className="brow-hero-grid container">
        {/* Left dark brand block */}
        <div className="brow-left">
          <div className="brow-brand">
            <div className="brow-script">Your</div>
            <div className="brow-title">BEAUTY SALON</div>
          </div>
          <a className="btn brow-cta" href={site.hero.ctaPrimary.href} target="_blank">
            {site.hero.ctaPrimary.label || "Book appointment"}
          </a>
        </div>

        {/* Right model image */}
        <div className="brow-right">
          <img
            src="/img/hair.jpg"
            alt="Brow studio model"
            className="img"
          />
        </div>
      </div>

      {/* Decorative dots */}
      <div className="dots dots-hero-a" aria-hidden="true" />
      {/* <div className="dots dots-hero-b" aria-hidden="true" /> */}
    </section>
  );
}
