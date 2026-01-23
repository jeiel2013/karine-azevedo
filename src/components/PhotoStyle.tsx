export default function PhotoStyle() {
  const images = [
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg",
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg",
    "https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp",
  ];

  return (
    <section id="estilo" className="py-24 bg-with-pattern">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16 fade-in-section">
          <h2 className="font-serif text-4xl text-[var(--color-brand-brownDark)] mb-6 tracking-tight font-medium">
            Estilo Fotográfico
          </h2>
          <p className="text-[var(--color-brand-brownRed)] font-light text-lg leading-relaxed">
            Meu trabalho é diversificado, mas guiado por um mesmo olhar: o
            cuidado com sua história. Em cada ensaio, busco criar imagens que
            traduzam conexão, afeto e autenticidade.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {images.map((src, index) => (
            <div
              key={index}
              className={`aspect-[3/4] overflow-hidden rounded-sm group fade-in-section delay-${(index + 1) * 100}`}
            >
              <img
                src={src}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                alt={`Estilo ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
