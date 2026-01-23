import { Icon } from "@iconify/react";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[var(--color-brand-bg)]/95 backdrop-blur-sm transition-all duration-300 border-b border-[var(--color-brand-brownDark)]/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="hover:scale-105 hover:opacity-90 transition-all duration-300">
          <img
            src="/logoTipografiaSemFundo.png"
            alt="Karine Azevedo"
            className="h-8 md:h-10 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-8">
          <a
            href="#sobre"
            className="text-sm font-light text-[var(--color-brand-brownDark)] hover:text-[var(--color-brand-terracotta)] transition-colors tracking-wide"
          >
            Sobre Mim
          </a>
          <a
            href="#estilo"
            className="text-sm font-light text-[var(--color-brand-brownDark)] hover:text-[var(--color-brand-terracotta)] transition-colors tracking-wide"
          >
            Estilo
          </a>
          <a
            href="#howitwork"
            className="text-sm font-light text-[var(--color-brand-brownDark)] hover:text-[var(--color-brand-terracotta)] transition-colors tracking-wide"
          >
            Como Funciona?
          </a>
          <a
            href="#depoimentos"
            className="text-sm font-light text-[var(--color-brand-brownDark)] hover:text-[var(--color-brand-terracotta)] transition-colors tracking-wide"
          >
            Depoimentos
          </a>
          <a
            href="#contato"
            className="bg-[var(--color-brand-terracotta)] text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-[var(--color-brand-terracottaDark)] transition-colors shadow-sm"
          >
            Agendar Ensaio
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden text-[var(--color-brand-brownDark)]"
        >
          <Icon icon="solar:hamburger-menu-linear" width="24" />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-0 w-full bg-[var(--color-brand-bg)] border-b border-[var(--color-brand-brownDark)]/10 p-6 flex flex-col gap-4 lg:hidden shadow-lg">
          <a
            href="#sobre"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[var(--color-brand-brownDark)] py-2 border-b border-[var(--color-brand-brownDark)]/5"
          >
            Sobre Mim
          </a>
          <a
            href="#estilo"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[var(--color-brand-brownDark)] py-2 border-b border-[var(--color-brand-brownDark)]/5"
          >
            Estilo Fotográfico
          </a>
          <a
            href="#howitwork"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[var(--color-brand-brownDark)] py-2 border-b border-[var(--color-brand-brownDark)]/5"
          >
            Como Funciona?
          </a>
          <a
            href="#depoimentos"
            onClick={() => setMobileMenuOpen(false)}
            className="text-[var(--color-brand-brownDark)] py-2 border-b border-[var(--color-brand-brownDark)]/5"
          >
            Depoimentos
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-brand-terracotta)] font-medium py-2"
          >
            Agendar Agora
          </a>
        </div>
      )}
    </header>
  );
}
