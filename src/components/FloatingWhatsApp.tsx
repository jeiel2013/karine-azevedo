import { Icon } from "@iconify/react";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5511999999999"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center animate-bounce"
      style={{ animationDuration: "1s" }}
    >
      <Icon icon="solar:phone-calling-linear" width="32" />
    </a>
  );
}
