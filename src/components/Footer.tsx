import { Icon } from "@iconify/react";
const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      id="contato"
      className="bg-[var(--color-brand-brownDark)] text-[var(--color-brand-bg)] py-20"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light italic mb-10 text-[var(--color-brand-bg)]/90 tracking-tight">
          "Estou ansiosa para contar sua história
          <br />
          em um projeto fotográfico!"
        </h2>

        <a
          href="https://wa.me/5555339870798?text=Ol%C3%A1%20Karine!%20Quero%20agendar%20um%20ensaio%20com%20voc%C3%AA!"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-[var(--color-brand-terracotta)] text-white px-10 py-5 rounded-full text-lg font-medium hover:bg-[var(--color-brand-terracottaDark)] transition-all hover:scale-105 shadow-xl hover:shadow-2xl"
        >
          <Icon icon="solar:chat-round-dots-linear" width="24" />
          Agendar Meu Ensaio no WhatsApp
        </a>

        <div className="mt-12 flex flex-col items-center gap-4 text-[var(--color-brand-nude)]">
          <a
            href="https://instagram.com/karineazevedofotografia"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Icon icon="solar:camera-linear" width="20" />
            @karineazevedofotografia_
          </a>
          <a
            href="#"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Icon icon="solar:letter-linear" width="20" />
            contato@karineazevedo.com
          </a>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-[var(--color-brand-nude)] text-sm">
          © {currentYear} Karine Azevedo Fotografia. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
