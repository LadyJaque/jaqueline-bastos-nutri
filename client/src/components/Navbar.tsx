/* ============================================================
   Navbar — Sage Editorial Design
   Transparent on top, white+blur on scroll
   Logo centered, links right, WhatsApp CTA
   ============================================================ */

import { useState, useEffect } from "react";

const LOGO_URL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663491809810/QYRWyV9C8EsTicJN889V5q/logo-jaqueline_8b99bb51.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Dicas", href: "#dicas" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <button
            onClick={() => handleNav("#inicio")}
            className="flex items-center gap-2 flex-shrink-0"
            aria-label="Início"
          >
            <img
              src={LOGO_URL}
              alt="Jaqueline Bastos Nutricionista"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`link-underline text-sm font-normal tracking-wide transition-colors duration-200 ${
                  scrolled ? "text-[oklch(0.22_0.01_60)]" : "text-[oklch(0.22_0.01_60)]"
                } hover:text-[oklch(0.50_0.09_130)]`}
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400 }}
              >
                {link.label}
              </button>
            ))}
            <a
              href="https://wa.me/5500000000000?text=Olá%20Jaqueline!%20Gostaria%20de%20agendar%20uma%20consulta."
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-5 py-2 text-sm font-bold tracking-widest uppercase text-white transition-all duration-300"
              style={{
                background: "oklch(0.50 0.09 130)",
                fontFamily: "'Lato', sans-serif",
                letterSpacing: "0.12em",
              }}
            >
              Agendar
            </a>
          </nav>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-[oklch(0.42_0.08_130)] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[oklch(0.42_0.08_130)] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block w-6 h-0.5 bg-[oklch(0.42_0.08_130)] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-white border-t border-[oklch(0.90_0.02_80)] transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-left py-3 text-sm text-[oklch(0.22_0.01_60)] hover:text-[oklch(0.50_0.09_130)] border-b border-[oklch(0.96_0.01_80)] transition-colors"
              style={{ fontFamily: "'Lato', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://wa.me/5500000000000?text=Olá%20Jaqueline!%20Gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 py-3 text-center text-sm font-bold tracking-widest uppercase text-white"
            style={{
              background: "oklch(0.50 0.09 130)",
              fontFamily: "'Lato', sans-serif",
              letterSpacing: "0.12em",
            }}
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </header>
  );
}
