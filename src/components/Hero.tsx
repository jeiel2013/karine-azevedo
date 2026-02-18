import { Icon } from "@iconify/react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center pt-20 pb-8 overflow-hidden bg-gradient-to-b from-[var(--color-brand-bg)] to-[var(--color-brand-nude)]/30"
    >
      {/* Background Image - Mobile */}
      <div className="absolute inset-0 h-[115vh] z-0 md:hidden overflow-hidden">
        <img
          src="/Hero1.jpg"
          alt="Background"
          className="absolute w-full h-full object-cover object-[center_90%]"
        />
        {/* Overlay Mobile - gradiente bem à esquerda */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-bg)]/92 from-10% via-[var(--color-brand-bg)]/50 via-25% to-transparent"></div>
      </div>

      {/* Background Image - Tablet (768px - 1023px) */}
      <div className="absolute inset-0 z-0 hidden md:block lg:hidden overflow-hidden h-[110%]">
        <img
          src="/Hero1.webp"
          alt="Background"
          className="absolute w-full h-full object-cover object-[30%_75%]"
        />
        {/* Overlay Tablet */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-bg)]/95 from-5% via-[var(--color-brand-bg)]/65 via-15% to-transparent" />
      </div>

      {/* Background Image - 1024x768 / 1366x768 landscape */}
      <div className="absolute inset-y-0 right-[-35%] z-0 hidden lg:block xl:hidden overflow-hidden w-[135%]">
        <img
          src="/Hero1.jpg"
          alt="Background"
          className="absolute inset-0 w-full h-full object-cover object-[85%_90%]"
        />
        {/* Overlay para 1366x768 */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-bg)]/70 from-16% via-[var(--color-brand-bg)]/40 via-28% to-transparent" />
      </div>

      {/* Background Image - Desktop (>1400px) */}
      <div className="absolute inset-0 z-0 hidden xl:block overflow-hidden">
        <img
          src="/Hero1.jpg"
          alt="Background"
          className="absolute min-w-full min-h-full w-auto h-auto left-[20%] top-[-10%] -translate-y-1/2"
        />
        {/* Overlay Desktop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-brand-bg)]/95 from-25% via-[var(--color-brand-bg)]/65 via-30% to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Column - Text Content */}
        <div className="fade-in-section flex flex-col items-start gap-8">
          <div className="space-y-2">
            <h1 className="font-serif text-6xl md:text-7xl leading-[1.1] text-[var(--color-brand-brownDark)] tracking-tight font-medium md:whitespace-nowrap">
              Fotografando{" "} Histórias Reais
              {/* <span className="italic font-light">Histórias Reais</span> */}
            </h1>
          </div>
          <p className="text-12px md:text-lg font-light text-[var(--color-brand-brownRed)] max-w-md leading-relaxed">
            Registros que despertam sentimento e se transformam em memória viva.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4 pb-8 sm:pb-0">
            <a
              href="#estilo"
              className="group flex items-center justify-center gap-2 bg-[var(--color-brand-terracotta)] text-(--color-brand-brownDark) px-8 py-3.5 rounded-sm hover:bg-[var(--color-brand-brownDark)] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg w-full sm:w-auto"
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
            {/* <a
              href="https://wa.me/5533987079816?text=Ol%C3%A1%20Karine!%20Quero%20conhecer%20mais%20seu%20trabalho%20e%20seu%20or%C3%A7amento%20de%20ensaios!"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-center gap-2 border border-[var(--color-brand-brownDark)] text-[var(--color-brand-brownDark)] px-8 py-3.5 rounded-sm hover:bg-[var(--color-brand-brownDark)] hover:text-white transition-all duration-300 w-full sm:w-auto"
            >
              <Icon icon="solar:chat-round-line-linear" width="20" />
              <span className="font-medium tracking-wide text-sm">
                Falar no WhatsApp
              </span>
            </a> */}
          </div>
        </div>

        {/* Right Column - Empty space for image to show through */}
        <div className="hidden lg:block"></div>
      </div>
    </section>
  );
}
