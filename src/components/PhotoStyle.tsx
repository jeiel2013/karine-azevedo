import Estilo1 from "../../public/Estilo1.png";
import Estilo2 from "../../public/Estilo2.png";
import Estilo3 from "../../public/Estilo3.png";
import Estilo4 from "../../public/Estilo4.png";

export default function PhotoStyle() {
  const images = [Estilo1, Estilo3, Estilo2, Estilo4];

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
