import { useRef, useState } from "react";
import { Icon } from "@iconify/react";

export default function PhotoStyle() {
  const images = [
    "/PortfolioA1.jpg",
    "/PortfolioA2.jpg",
    "/PortfolioA3.jpg",
    "/PortfolioB1.jpg",
    "/PortfolioB2.jpg",
    "/PortfolioB3.jpg",
    "/PortfolioC1.jpg",
    "/PortfolioC2.jpg",
    "/PortfolioC3.jpg",
    "/PortfolioD1.jpg",
    "/PortfolioD2.jpg",
    "/PortfolioD3.jpg",
    "/PortfolioE1.jpg",
    "/PortfolioE2.jpg",
    "/PortfolioE3.jpg",
    "/PortfolioF1.jpg",
    "/PortfolioF2.jpg",
    "/PortfolioF3.jpg",
    "/PortfolioG1.png",
    "/PortfolioG2.png",
    "/PortfolioG3.png",
  ];

  const scrollContainers = useRef<{ [key: number]: HTMLDivElement | null }>({});
  const [activeRow, setActiveRow] = useState<number | null>(null);

  const scroll = (rowIndex: number, direction: "left" | "right") => {
    if (scrollContainers.current[rowIndex]) {
      const scrollAmount = 300;
      const newScrollPosition =
        direction === "left"
          ? scrollContainers.current[rowIndex]!.scrollLeft - scrollAmount
          : scrollContainers.current[rowIndex]!.scrollLeft + scrollAmount;

      scrollContainers.current[rowIndex]!.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const rows = [];
  for (let i = 0; i < images.length; i += 3) {
    rows.push(images.slice(i, i + 3));
  }

  return (
    <section id="estilo" className="py-24 bg-with-pattern">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12 fade-in-section">
          <h2 className="font-serif text-4xl text-[var(--color-brand-brownDark)] tracking-tight font-medium">
            Portfolio
          </h2>
        </div>

        {/* Grid Layout - Desktop/Tablet, Carousel Layout - Mobile */}
        <div className="space-y-6">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex}>
              {/* Desktop/Tablet: Grid Layout */}
              <div className="hidden md:grid grid-cols-3 gap-4 lg:gap-6">
                {row.map((src, imgIndex) => (
                  <div
                    key={imgIndex}
                    className="w-full aspect-[3/4] overflow-hidden rounded-sm group/item"
                  >
                    <img
                      src={src}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                      alt={`Portfolio ${rowIndex * 3 + imgIndex + 1}`}
                    />
                  </div>
                ))}
              </div>

              {/* Mobile: Carousel with Scroll */}
              <div
                className="md:hidden relative group/carousel"
                onMouseEnter={() => setActiveRow(rowIndex)}
                onMouseLeave={() => setActiveRow(null)}
              >
                {/* Left Arrow - Visible only on mobile when hovering */}
                {activeRow === rowIndex && (
                  <button
                    onClick={() => scroll(rowIndex, "left")}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white text-[var(--color-brand-brownDark)] p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 items-center justify-center flex"
                    aria-label="Foto anterior"
                  >
                    <Icon icon="solar:alt-arrow-left-linear" width="24" />
                  </button>
                )}

                {/* Scrollable Container */}
                <div
                  ref={(el) => {
                    if (el) scrollContainers.current[rowIndex] = el;
                  }}
                  className="flex gap-4 overflow-x-auto scroll-smooth pb-4"
                  style={{
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                    WebkitOverflowScrolling: "touch",
                  }}
                >
                  {row.map((src, imgIndex) => (
                    <div
                      key={imgIndex}
                      className="flex-shrink-0 w-[200px] aspect-[3/4] overflow-hidden rounded-sm group/item"
                    >
                      <img
                        src={src}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-500"
                        alt={`Portfolio ${rowIndex * 3 + imgIndex + 1}`}
                      />
                    </div>
                  ))}
                </div>

                {/* Right Arrow - Visible only on mobile when hovering */}
                {activeRow === rowIndex && (
                  <button
                    onClick={() => scroll(rowIndex, "right")}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/95 hover:bg-white text-[var(--color-brand-brownDark)] p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110 items-center justify-center flex"
                    aria-label="Próxima foto"
                  >
                    <Icon icon="solar:alt-arrow-right-linear" width="24" />
                  </button>
                )}

                {/* Scroll Indicator - Mobile Only */}
                <div className="md:hidden text-center mt-3">
                  <p className="text-xs text-[var(--color-brand-brownRed)]/60 font-light">
                    ← Arraste para ver mais →
                  </p>
                </div>
              </div>
            </div>
          ))}
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
