import { Icon } from "@iconify/react";

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "A Karine tem um olhar sensível e único. As fotos ficaram maravilhosas e capturaram exatamente a nossa essência.",
      author: "Ana Clara",
    },
    {
      quote:
        "Foi uma experiência incrível. Me senti super à vontade e o resultado emocionou toda a família. Recomendo demais!",
      author: "Mariana S.",
    },
    {
      quote:
        "Profissionalismo impecável e uma delicadeza sem igual. O álbum ficou perfeito, uma memória para a vida toda.",
      author: "Juliana Costa",
    },
    {
      quote:
        "Registros que vou guardar para sempre. Obrigada por eternizar esse momento com tanto carinho e sensibilidade.",
      author: "Fernanda Lima",
    },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-4xl text-center text-[var(--color-brand-brownDark)] mb-16 tracking-tight font-medium fade-in-section">
          O Que Dizem
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="fade-in-section bg-[var(--color-brand-light)] p-8 rounded-lg border border-[var(--color-brand-bg)] hover:border-[var(--color-brand-terracotta)]/30 transition-colors flex flex-col"
            >
              <div className="w-12 h-12 flex items-center justify-center text-[var(--color-brand-terracotta)] mb-6">
                <Icon icon="solar:quote-up-square-linear" width="40" />
              </div>
              <p className="text-[var(--color-brand-brownRed)] font-light leading-relaxed text-base mb-6 flex-grow">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-px bg-[var(--color-brand-terracotta)]"></div>
                <span className="font-serif text-[var(--color-brand-brownDark)] font-medium text-base">
                  {testimonial.author}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
