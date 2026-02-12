import { Icon } from "@iconify/react";

export default function About() {
  return (
    <section
      id="sobre"
      className="py-24 lg:py-32 bg-[var(--color-brand-light)]"
    >
      <div className="max-w-6xl mx-auto px-4 mt-0 lg:-mt-15 mb-0 lg:-mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="fade-in-section relative mx-auto lg:mx-0 lg:mr-30 w-full">
            <div className="relative h-[400px] sm:h-[450px] md:h-[500px] lg:h-[850px] w-full max-w-[500px] mx-auto lg:mx-0">
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
            <span className="text-xs font-semibold tracking-widest text--color-brand-brownDark uppercase">
              Sobre mim
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-[var(--color-brand-brownDark)] tracking-tight font-medium">
              Oii, Karina Azevedo por aqui.
            </h2>

            <div className="space-y-4 text-[var(--color-brand-brownRed)] font-light text-lg leading-relaxed">
              <p>
                Sou fotografa e Designer por formação. Moro em Coroaci, no
                interior de Minas Gerais, tenho 25 anos e me encontrei na
                fotografia em 2023 com uma paixão genuína por registrar
                histórias reais.
              </p>
              <p>
                Desde criança, sempre fui criativa e apaixonada por trabalhos
                manuais, detalhes e processos feitos com cuidado. Eu gostava de
                criar, inventar, testar ideias e naturalmente, me tornei uma
                pessoa atenta, detalhista e sensível aos pequenos aspectos. A
                faculdade de design agregou diretamente, uma área que hoje
                complementa completamente o meu olhar fotográfico, desde
                composição até a sensibilidade estética.
              </p>
              <p>
                Busco captar a essência das pessoas de forma espontânea,
                verdadeira e sensível, criando imagens que despertam sentimento
                e se transformam em memória. Antes de qualquer ensaio, gosto de
                ouvir, conhecer e entender a história de quem está diante da
                minha lente. Acredito que quando alguém olha para si com mais
                carinho, e para tudo o que viveu, a fotografia deixa de ser
                apenas uma imagem e passa a ser um registro afetivo da própria
                trajetória.
              </p>
              <p>
                Quero incentivar as pessoas a olharem para a própria vida com
                mais amor, mais consciência e mais orgulho da própria história.
              </p>
            </div>

            <div className="pt-4 mt-0 lg:-mt-5">
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
