import { useState } from "react";

interface Step {
  title: string;
  text: string;
}

export default function HowItWorks() {
  const [currentStep, setCurrentStep] = useState(0);

  const steps: Step[] = [
    {
      title: "Agendamento",
      text: "O ensaio é agendado previamente, de acordo com a disponibilidade de datas. Entre em contato pelo WhatsApp para verificarmos as opções disponíveis.",
    },
    {
      title: "Planejamento",
      text: "Conversamos sobre o estilo do ensaio, local, looks e intenção das fotos. Esse alinhamento é importante para que o resultado final represente quem você é.",
    },
    {
      title: "Dia do Ensaio",
      text: "O ensaio acontece de forma leve e respeitosa, sem pressa. Não é necessário saber posar — eu conduzo todo o processo, valorizando gestos naturais.",
    },
    {
      title: "Seleção das Fotos",
      text: "Após o ensaio, você recebe uma galeria online para escolher as fotos inclusas no pacote contratado, com a opção de adquirir fotos extras.",
    },
    {
      title: "Edição e Entrega",
      text: "As imagens escolhidas passam por um processo cuidadoso de edição e são entregues em alta resolução, via galeria online.",
    },
  ];

  return (
    <section id="howitwork" className="py-24 bg-with-pattern-nude">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16 fade-in-section">
          <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-brand-brownDark)] mb-4 tracking-tight font-medium">
            Como Funciona?
          </h2>
          <p className="text-[var(--color-brand-brownRed)] font-light max-w-2xl mx-auto">
            Aqui, pensamos em 5 etapas estratégicas até alcançar um resultado
            verdadeiramente colaborativo e único.
          </p>
        </div>

        {/* Timeline Navigation - Desktop & Tablet (Horizontal Centered) */}
        <div className="hidden md:block max-w-6xl mx-auto mb-12 fade-in-section">
          <div className="flex items-start justify-center gap-0">
            {steps.map((step, index) => (
              <div key={index} className="flex items-center">
                {/* Step Button with Label */}
                <div className="flex flex-col items-center gap-3 px-2">
                  <button
                    onClick={() => setCurrentStep(index)}
                    className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full border-2 flex items-center justify-center font-bold text-lg lg:text-xl transition-all duration-300 ${
                      currentStep === index
                        ? "bg-[var(--color-brand-terracotta)] border-[var(--color-brand-terracotta)] text-white shadow-lg shadow-[var(--color-brand-terracotta)]/40"
                        : "bg-white border-[var(--color-brand-terracotta)]/30 text-[var(--color-brand-terracotta)] hover:border-[var(--color-brand-terracotta)] hover:bg-[var(--color-brand-terracotta)] hover:text-white"
                    }`}
                  >
                    {index + 1}
                  </button>
                  <span className="text-[10px] lg:text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-brownDark)] text-center whitespace-nowrap">
                    {step.title}
                  </span>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="h-[2px] bg-[var(--color-brand-terracotta)]/20 w-8 md:w-12 lg:w-16 mt-[-24px]"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Timeline Navigation - Mobile (Horizontal Scrollable) */}
        <div className="md:hidden mb-12 fade-in-section">
          <div className="overflow-x-auto pb-4 -mx-6 px-6">
            <div className="flex items-start justify-start gap-0 min-w-max">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  {/* Step Button with Label */}
                  <div className="flex flex-col items-center gap-3 px-2">
                    <button
                      onClick={() => setCurrentStep(index)}
                      className={`w-14 h-14 rounded-full border-2 flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                        currentStep === index
                          ? "bg-[var(--color-brand-terracotta)] border-[var(--color-brand-terracotta)] text-white shadow-lg shadow-[var(--color-brand-terracotta)]/40"
                          : "bg-white border-[var(--color-brand-terracotta)]/30 text-[var(--color-brand-terracotta)]"
                      }`}
                    >
                      {index + 1}
                    </button>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--color-brand-brownDark)] text-center whitespace-nowrap">
                      {step.title}
                    </span>
                  </div>

                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="h-[2px] bg-[var(--color-brand-terracotta)]/20 w-12 mt-[-24px]"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
          {/* Scroll indicator hint */}
          <p className="text-center text-xs text-[var(--color-brand-brownRed)]/60 mt-2">
            ← Arraste para ver todas as etapas →
          </p>
        </div>

        {/* Content Area */}
        <div className="max-w-3xl mx-auto text-center mt-12 p-6 md:p-8 lg:p-10 bg-white border border-[var(--color-brand-terracotta)]/10 rounded-2xl shadow-md fade-in-section">
          <h4 className="text-[var(--color-brand-terracotta)] font-semibold mb-3 uppercase text-sm tracking-wide">
            {steps[currentStep].title}
          </h4>
          <p className="text-sm md:text-base text-[var(--color-brand-brownRed)] font-light leading-relaxed">
            {steps[currentStep].text}
          </p>
        </div>
      </div>
    </section>
  );
}
