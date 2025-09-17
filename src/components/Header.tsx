import { site } from "../data/site";

export default function Header() {
  return (
    <nav className="brow-side-menu" aria-label="Section menu">
      {site.nav.map((n) => (
        <a key={n.href} href={n.href}>
          {n.label}
        </a>
      ))}
    </nav>
  );
}
