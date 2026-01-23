import { Icon } from "@iconify/react";
import FotoKarine from "../assets/fotoKarine1.webp";

export default function About() {
  return (
    <section
      id="sobre"
      className="py-24 lg:py-32 bg-[var(--color-brand-light)]"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="fade-in-section relative mx-auto lg:mx-0">
            <div className="w-full max-w-[400px] aspect-square rounded-full overflow-hidden border-2 border-[var(--color-brand-nude)] p-2">
              <img
                src={FotoKarine}
                alt="Karine Azevedo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          {/* Content */}
          <div className="fade-in-section space-y-6 text-center lg:text-left">
            <span className="text-xs font-semibold tracking-widest text-[var(--color-brand-terracotta)] uppercase">
              Quem sou eu?
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl text-[var(--color-brand-brownDark)] tracking-tight font-medium">
              Olá, sou Karine Azevedo
            </h2>

            <div className="space-y-4 text-[var(--color-brand-brownRed)] font-light text-lg leading-relaxed">
              <p>
                Sou fotógrafa de histórias reais. Gosto de registrar a essência
                das pessoas, de forma espontânea e verdadeira, criando imagens
                que despertam sentimento.
              </p>
              <p>
                Antes de fotografar, gosto de ouvir e conhecer um pouco de cada
                história. Acredito que, quando alguém olha com carinho para si e
                para o que vive, a fotografia se transforma em memória.
              </p>
            </div>

            <div className="pt-4">
              <a
                href="https://instagram.com/karineazevedofotografia_"
                target="_onblank"
                className="inline-block hover:scale-110 transition-transform duration-300"
                aria-label="Ver estilo fotográfico"
              >
                <Icon
                  icon="entypo-social:instagram"
                  className="text-[var(--color-brand-terracotta)]"
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
