import { Icon } from "@iconify/react";

export default function Services() {
  const services = [
    {
      icon: "solar:calendar-date-linear",
      title: "Fotografia de Eventos",
      description:
        "Cobertura completa de eventos especiais. Registro autêntico dos momentos mais importantes do seu dia especial.",
    },
    {
      icon: "solar:user-circle-linear",
      title: "Sessões de Retrato",
      description:
        "Retratos individuais, em grupo, de família ou profissionais, para capturar sua essência única. Cada sessão é personalizada.",
    },
    {
      icon: "solar:album-linear",
      title: "Produtos Fotográficos",
      description:
        "Álbuns, revelações e quadros pensados para transformar suas fotografias em memórias físicas, feitas para serem tocadas.",
    },
  ];

  return (
    <section id="servicos" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="font-serif text-4xl text-center text-[var(--color-brand-brownDark)] mb-16 tracking-tight font-medium fade-in-section">
          Serviços Oferecidos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="fade-in-section bg-[var(--color-brand-light)] p-8 rounded-lg border border-[var(--color-brand-bg)] hover:border-[var(--color-brand-terracotta)]/30 transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center text-[var(--color-brand-terracotta)] mb-6">
                <Icon icon={service.icon} width="40" />
              </div>
              <h3 className="text-xl text-[var(--color-brand-brownDark)] font-medium mb-4">
                {service.title}
              </h3>
              <p className="text-[var(--color-brand-brownRed)] font-light leading-relaxed text-sm">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
