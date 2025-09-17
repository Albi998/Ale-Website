import { site } from "../data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="brow-footer" id="contact">
      <div className="brow-footer-grid">
        {/* Left dark panel: Menu + Hours */}
        <div className="brow-footer-menu">
          <div className="bf-columns">
            <div>
              <h4>Menu</h4>
              <ul>
                {site.footer.menu.map((m) => (
                  <li key={m.href}>
                    <a href={m.href}>{m.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4>Orari</h4>
              <ul>
                {site.footer.hours.map((h) => (
                  <li key={h.label}>
                    <span className="bf-k">{h.label}</span>
                    <span className="bf-v">{h.value}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bf-bottom">
            <span>
              © {year} {site.brand.name}
            </span>
            <div className="bf-socials">
              <a href="https://www.aswd.it/" target="_blank">
                Website by aswd
              </a>
            </div>
          </div>
        </div>

        {/* Right taupe panel: Instagram */}
        <div className="brow-footer-ig">
          <h4>
            SEGUICI{" "}
            <span className="bf-handle">{site.footer.instagramHandle}</span>
          </h4>
          <div className="bf-ig-grid">
            {site.footer.igPhotos.slice(0, 4).map((src, i) => (
              <a
                key={src}
                href={site.brand.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="bf-ig"
                aria-label={`Open Instagram post ${i + 1}`}
              >
                <img src={src} alt="" className="img" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
