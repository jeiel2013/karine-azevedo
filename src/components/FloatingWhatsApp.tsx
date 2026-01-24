import { Icon } from "@iconify/react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5533987079816?text=Ol%C3%A1%20Karine!%20Quero%20conhecer%20mais%20seu%20trabalho%20e%20seu%20or%C3%A7amento%20de%20ensaios!"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center animate-bounce"
      style={{ animationDuration: "1s" }}
    >
      <Icon icon="solar:phone-calling-linear" width="32" />
    </a>
  );
}
