import { site } from "../data/site";
import type { ReactNode } from "react";

/* === Icone === */
type IconName = "map" | "website" | "mail" | "phone" | "linkedin" | "vat" | "order";

function Icon({ name }: { name: IconName }) {
  const svg = (children: ReactNode) => (
    <svg
      width={20}
      height={20}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {children}
    </svg>
  );

  switch (name) {
    case "map":
      return svg(
        <>
          <path d="M12 21s7-4.35 7-10a7 7 0 1 0-14 0c0 5.65 7 10 7 10" />
          <circle cx="12" cy="11" r="3" />
        </>
      );
    case "website":
      return svg(
        <>
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3a15 15 0 0 1 0 18" />
          <path d="M12 3a15 15 0 0 0 0 18" />
        </>
      );
    case "mail":
      return svg(
        <>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </>
      );
    case "phone":
      return svg(
        <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 19a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.7.6 2.5a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.6-1.6a2 2 0 0 1 2.1-.4c.8.3 1.6.5 2.5.6A2 2 0 0 1 22 16.9Z" />
      );
    case "linkedin":
      return svg(
        <>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M8 11v6" />
          <path d="M8 7h.01" />
          <path d="M12 17v-4a3 3 0 0 1 6 0v4" />
        </>
      );
    case "vat":
      return svg(
        <>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 12h8" />
          <path d="M8 16h5" />
          <path d="M8 8h8" />
        </>
      );
    case "order":
      return svg(
        <>
          <path d="M6 2h9l3 3v17H6Z" />
          <path d="M9 9h6" />
          <path d="M9 13h6" />
          <path d="M9 17h6" />
        </>
      );
  }
}

/* === Mappa da coordinate o embed === */
type ContactItem = { icon: IconName; label: string; href?: string };

function mapSrcFromSite(): string {
  const f: any = site.footer || {};
  const m = f.map;
  if (m?.lat && m?.lng) {
    const z = m.zoom ?? 16;
    // satellite + UI standard
    return `https://www.google.com/maps?ll=${m.lat},${m.lng}&z=${z}&t=k&hl=it&output=embed`;
  }
  return f.mapEmbed || site.contact?.mapEmbed || "";
}

/* === Footer === */
export default function Footer() {
  const year = new Date().getFullYear();
  const contacts = (site.footer?.contacts as ContactItem[]) ?? [];
  const mapSrc = mapSrcFromSite();

  return (
    <footer className="psy-footer">
      <div className="container foot-grid">
        {/* Sinistra: logo + contatti */}
        <div className="foot-left">
          <div className="foot-brand">
            <img src={site.brand.logo || "/img/logo.webp"} alt={site.brand.name} />
          </div>
          <ul className="contact-list text-small">
            {contacts.map((c, i) => {
              const target = c.href && c.href.startsWith("http") ? "_blank" : undefined;
              return (
                <li key={i} className="contact-item">
                  <span className="ico"><Icon name={c.icon} /></span>
                  {c.href ? (
                    <a href={c.href} target={target} rel="noreferrer">{c.label}</a>
                  ) : (
                    <span>{c.label}</span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        {/* Destra: mappa */}
        <div className="foot-right">
          {/* <h3>{site.footer?.contactTitle || "Contattami"}</h3> */}
          <div className="foot-map card">
            {mapSrc ? (
              <iframe
                title="Mappa"
                src={mapSrc}
                width="100%"
                height="320"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <p>Mappa non disponibile.</p>
            )}
          </div>
        </div>

        {/* Credits */}
        <div className="foot-credits">
          <p className="text-small text-dark">© {year} {site.brand.name}</p>
          <p className="text-dark">
            Website made by{" "}
            <a href="https://www.aswd.it" target="_blank" rel="noreferrer" className="link text-small">
              aswd.it
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
