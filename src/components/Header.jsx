import { useState } from "react";
import { navLinks, profile } from "../data/portfolioData";
import { useScrollHeader } from "../hooks/useScrollHeader";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const scrolled = useScrollHeader();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className={`header${scrolled ? " scrolled" : ""}`}>
      <nav className="nav container">
        <a href="#home" className="logo" onClick={closeMenu}>
          {profile.initials}
          <span className="logo-dot">.</span>
        </a>

        <ul className={`nav-links${menuOpen ? " open" : ""}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-right">
          <ThemeToggle />
          <button
            type="button"
            className={`nav-toggle${menuOpen ? " active" : ""}`}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>
    </header>
  );
}
