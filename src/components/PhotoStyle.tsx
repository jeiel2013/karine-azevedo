import { useRef } from "react";
import { Icon } from "@iconify/react";

export default function PhotoStyle() {
  const images = [
    "/Portfolio1.jpg",
    "/Portfolio2.jpg",
    "/Portfolio3.jpg",
    "/Portfolio4.jpg",
    "/Portfolio5.jpg",
    "/Portfolio6.jpg",
    "/Portfolio7.jpg",
    "/Portfolio8.jpg",
    "/Portfolio9.jpg",
    "/Portfolio10.jpg",
    "/Portfolio11.jpg",
    "/Portfolio12.jpg",
    "/Portfolio13.jpg",
    "/Portfolio14.jpg",
    "/Portfolio15.jpg",
    "/Portfolio16.jpg",
    "/Portfolio17.jpg",
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition =
        direction === "left"
          ? scrollContainerRef.current.scrollLeft - scrollAmount
          : scrollContainerRef.current.scrollLeft + scrollAmount;

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="estilo" className="py-24 bg-with-pattern">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 fade-in-section">
          <h2 className="font-serif text-4xl text-[var(--color-brand-brownDark)] tracking-tight font-medium">
            Portfolio
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative group/carousel">
          {/* Left Arrow Button - Desktop/Tablet - Sempre visível */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white/95 hover:bg-white text-[var(--color-brand-brownDark)] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 items-center justify-center"
            aria-label="Foto anterior"
          >
            <Icon icon="solar:alt-arrow-left-linear" width="28" />
          </button>

          {/* Right Arrow Button - Desktop/Tablet - Sempre visível */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white/95 hover:bg-white text-[var(--color-brand-brownDark)] p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 items-center justify-center"
            aria-label="Próxima foto"
          >
            <Icon icon="solar:alt-arrow-right-linear" width="28" />
          </button>

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 lg:gap-6 overflow-x-auto scroll-smooth pb-4 -mx-6 px-6 md:mx-0 md:px-0"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
            {images.map((src, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[240px] sm:w-[280px] md:w-[320px] lg:w-[360px] aspect-[3/4] overflow-hidden rounded-sm group/item"
              >
                <img
                  src={src}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                  alt={`Portfolio ${index + 1}`}
                />
              </div>
            ))}
          </div>

          {/* Scroll Indicator - Todas as versões */}
          <div className="text-center mt-4 lg:opacity-0">
            <p className="text-xs text-[var(--color-brand-brownRed)]/60 font-light">
              ← Arraste para ver mais →
            </p>
          </div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style>{`
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
