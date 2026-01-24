export default function IndividualPhotography() {
  const images = ["/Individual1.png", "/Individual2.png", "/Individual3.png"];

  return (
    <section className="py-24 bg-with-pattern-nude">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Text */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 mb-16 fade-in-section">
          <div className="lg:col-span-2 space-y-2">
            <span className="text-xs font-semibold tracking-widest text-[var(--color-brand-terracotta)] uppercase">
              Individual
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-[var(--color-brand-brownDark)] tracking-tight font-medium">
              Fotografia Individual
            </h2>
          </div>
          <div className="lg:col-span-3">
            <p className="text-[var(--color-brand-brownRed)] font-light text-lg leading-relaxed">
              A fotografia individual é um espaço de expressão e presença.
              Atendo desde retratos corporativos até ensaios pessoais. Meu
              trabalho é criar imagens que transmitam autenticidade, confiança e
              sensibilidade.
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
                alt={`Individual ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
