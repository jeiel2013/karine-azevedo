import { Icon } from "@iconify/react";

export default function About() {
  return (
    <section
      id="sobre"
      className="py-24 lg:py-32 bg-[var(--color-brand-light)]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="fade-in-section relative mx-auto lg:mx-0 lg:mr-30 w-full">
            <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[750px] w-full max-w-[500px] mx-auto lg:mx-0">
              {/* Decorative Circles */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] aspect-square rounded-full border border-[var(--color-brand-brownDark)]/10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] aspect-square rounded-full border border-[var(--color-brand-terracotta)]/20"></div>

              {/* Main Image */}
              <div className="absolute inset-4 md:inset-6 lg:inset-8 rounded-t-full overflow-hidden shadow-2xl">
                <img
                  src="/fotoKarine1.webp"
                  loading="lazy"
                  alt="Karine Azevedo"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="fade-in-section space-y-6 text-center lg:text-left">
            <span className="text-xs font-semibold tracking-widest text-[var(--color-brand-terracotta)] uppercase">
              Quem sou eu?
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-[var(--color-brand-brownDark)] tracking-tight font-medium">
              Oii, sou Karine Azevedo
            </h2>

            <div className="space-y-4 text-[var(--color-brand-brownRed)] font-light text-lg leading-relaxed">
              <p>
                Sou fotógrafa e Designer por formação, moro em Coroaci, no
                interior de Minas Gerais, tenhos 25 anos e me encontrei na
                fotografia em 2023 com uma paixão genuína por registrar
                histórias reais.
              </p>
              <p>
                Minha paixão por criar e cuidar dos detalhes vem de berço. Essa
                essência minuciosa, somada à minha formação em Design, refinou
                meu olhar fotográfico. Hoje, uno a sensibilidade pelos pequenos
                aspectos à técnica de composição, criando uma estética cuidadosa
                e intencional.
              </p>
              <p>
                Busco captar a essência de forma espontânea e sensível,
                priorizando ouvir e entender sua história antes de cada clique.
                Acredito na fotografia como um registro afetivo: um convite para
                se olhar com carinho e transformar sua trajetória em memórias
                que despertam sentimentos
              </p>
              <p>
                Quero incentivar as pessoas a olharem para a própria vida com
                mais amor, mais consciência e mais orgulho da própria história.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="https://instagram.com/karineazevedofotografia_"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block hover:scale-110 transition-transform duration-300"
                aria-label="Instagram Karine Azevedo"
              >
                <Icon
                  icon="entypo-social:instagram"
                  className="text-[var(--color-brand-brownDark)] transition-colors"
                  width="32"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
