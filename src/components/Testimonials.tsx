export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "Kaka ja vi essas fotos várias vezes, minha vontade é de curtir 74 mil vezes, que perfeito cara, parabens pelo seu trabalho e seu carinho e amor em fazê-lo, sem duvidas você é muito abençoada, apaixonada estou.",
      author: "Angélica Marília",
    },
    {
      quote:
        "Ai Karine amamos tanto as fotos, na verdade não são apenas fotos, são registros de uma longa história com diversos pontos significativo como a casa na roça, a bicicleta... Muito mas muito obrigada por fazer parte de tudo isso, meus irmãos estão encantadooooos, e eu mais ainda meus parabéns, você faz um excelente trabalho",
      author: "Wellica Viana",
    },
    {
      quote:
        "Foi um privilégio pra todos nós termos a sua companhia, com seu trabalho incrivel, te desejamos o maior sucesso do mundo, amamos a sua presença, tanto nós como meus avós que ficaram tranquilos e sem receio das fotos com a sua capacidade de os deixar a vontade.",
      author: "Maria Eduarda C.",
    },
    {
      quote:
        "Que ensaio mais lindo! O seu profissionalismo e competência, vão além das lentes ! Que dom maravilhoso que Deus te deu, que ele continue te abençoando com muitos outros 'retratos e paisagens' maravilhosos, como os que vc tem feito!",
      author: "Meire Rodrigues",
    },
  ];

  return (
    <section id="depoimentos" className="py-24 bg-with-pattern-nude">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 fade-in-section">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-brand-brownDark)] mb-4 tracking-tight font-medium">
            Feedbacks
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="fade-in-section p-6 md:p-8 lg:p-10 bg-white border border-[var(--color-brand-terracotta)]/10 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col"
            >
              {/* Quote Text */}
              <p className="text-sm md:text-base text-[var(--color-brand-brownDark)] font-light leading-relaxed mb-6 flex-grow">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-[var(--color-brand-terracotta)]/10">
                <div className="w-8 h-px bg-[var(--color-brand-brownDark)]"></div>
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
