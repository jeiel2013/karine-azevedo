import { Icon } from "@iconify/react";
import FotoKarine2 from "../assets/FotoKarine2.webp";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-with-pattern-hero">
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Column */}
        <div className="fade-in-section flex flex-col items-start gap-8 z-10 order-2 lg:order-1">
          <div className="space-y-2">
            <h1 className="font-serif text-5xl md:text-7xl leading-[1.1] text-[var(--color-brand-brownDark)] tracking-tight font-medium">
              Fotografando
              <br />
              <span className="italic font-light">Histórias Reais</span>
            </h1>
            <p className="font-serif text-2xl text-[var(--color-brand-terracotta)] italic tracking-wide">
              Karine Azevedo
            </p>
          </div>

          <p className="text-lg md:text-xl font-light text-[var(--color-brand-brownRed)] max-w-md leading-relaxed">
            Registros que despertam sentimento e se transformam em memória viva.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4 pb-8 sm:pb-0">
            <a
              href="#sobre"
              className="group flex items-center justify-center gap-2 bg-[var(--color-brand-terracotta)] text-white px-8 py-3.5 rounded-sm hover:bg-[var(--color-brand-terracottaDark)] transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              <span className="font-medium tracking-wide text-sm">
                Conhecer Trabalho
              </span>
              <Icon
                icon="solar:arrow-right-linear"
                width="20"
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 border border-[var(--color-brand-terracotta)] text-[var(--color-brand-terracotta)] px-8 py-3.5 rounded-sm hover:bg-[var(--color-brand-terracotta)] hover:text-white transition-all duration-300 w-full sm:w-auto"
            >
              <Icon icon="solar:chat-round-line-linear" width="20" />
              <span className="font-medium tracking-wide text-sm">
                Falar no WhatsApp
              </span>
            </a>
          </div>
        </div>

        {/* Right Column */}
        <div className="relative h-[50vh] lg:h-[80vh] w-full order-1 lg:order-2 fade-in-section">
          {/* Decorative Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square rounded-full border border-[var(--color-brand-brownDark)]/10"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full border border-[var(--color-brand-terracotta)]/20"></div>

          {/* Main Image */}
          <div className="absolute inset-4 lg:inset-10 rounded-t-full overflow-hidden shadow-2xl">
            <img
              src={FotoKarine2}
              alt="Fotografia Hero"
              className="w-full h-full object-cover object-top md:object-[center_20%] lg:object-center hover:scale-105 transition-transform duration-700 hero-image-1366"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
