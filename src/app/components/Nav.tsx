import { useState, useEffect } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = ["About", "Experience", "Projects", "Contact"];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between h-16">
        <a
          href="#top"
          style={{ fontFamily: "'Fraunces', serif", fontSize: "1.1rem", fontWeight: 700, color: "var(--foreground)", letterSpacing: "-0.01em" }}
        >
          Rye
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: "0.85rem", fontWeight: 500 }}
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              {l}
            </a>
          ))}
          <a
            href="#contact"
            style={{
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              fontSize: "0.85rem",
              fontWeight: 600,
              background: "var(--foreground)",
              color: "white",
              padding: "0.5rem 1.25rem",
              borderRadius: "6px",
            }}
            className="hover:opacity-80 transition-opacity"
          >
            Hire Me
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-px bg-foreground transition-transform ${menuOpen ? "translate-y-1.5 rotate-45" : ""}`} />
          <span className={`block w-5 h-px bg-foreground transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-px bg-foreground transition-transform ${menuOpen ? "-translate-y-1.5 -rotate-45" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-border px-8 py-5 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 500, color: "var(--foreground)" }}
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
