export default function FamilyPhotography() {
  const images = ["/Familiar2.png", "/Familiar1.png", "/Familiar3.png"];

  return (
    <section id="familia" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Text */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16 fade-in-section">
          <div className="lg:col-span-2 space-y-2">
            <span className="text-xs font-semibold tracking-widest text-[var(--color-brand-terracotta)] uppercase">
              Família
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-[var(--color-brand-brownDark)] tracking-tight font-medium">
              Fotografia Familiar
            </h2>
          </div>
          <div className="lg:col-span-3">
            <p className="text-[var(--color-brand-brownRed)] font-light text-lg leading-relaxed">
              Minha abordagem à fotografia familiar é pautada pelo afeto e pela
              verdade de cada vínculo. Cada ensaio é um convite para desacelerar
              e viver o momento. Busco fotografar conexões reais, gestos
              espontâneos e a beleza da sua história.
            </p>
          </div>
        </div>

        {/* Grid Photos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className={`aspect-[4/5] rounded-sm overflow-hidden relative group fade-in-section delay-${index * 100}`}
            >
              <img
                src={src}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                alt={`Família ${index + 1}`}
              />
              <div className="absolute inset-0 bg-[var(--color-brand-brownDark)]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
