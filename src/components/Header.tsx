import { useEffect, useRef, useState } from "react";
import { site } from "../data/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const shellRef = useRef<HTMLDivElement>(null);

  // chiudi su click fuori / ESC
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!open) return;
      if (shellRef.current && !shellRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header className="psy-header" aria-label="Primary">
      <div ref={shellRef} className={`psy-nav-shell ${open ? "open" : ""}`}>
        <a className="psy-logo" href={site.brand.href || "#"} onClick={closeMenu}>
          <img src={site.brand.logo || "/img/logo.webp"} alt={site.brand.name} />
        </a>

        {/* Desktop */}
        <nav className="psy-nav desktop">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} className="link">{n.label}</a>
          ))}
        </nav>
        <a className="btn psy-cta desktop" href={site.hero.ctaPrimary.href} target="_blank" rel="noreferrer">
          {site.hero.ctaPrimary.label}
        </a>

        {/* Mobile burger */}
        <button
          className="btn psy-cta psy-burger"
          aria-label={open ? "Chiudi menu" : "Apri menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          <span className="bars" aria-hidden>
            <span />
            <span />
            <span />
          </span>
        </button>

        {/* Mobile dropdown */}
        <div id="mobile-menu" role="menu" className="psy-menu">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} role="menuitem" onClick={closeMenu}>
              {n.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
