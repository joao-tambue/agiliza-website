import { FAQ_ITEMS } from "#/data/home";
import { useState } from "react";

export function FaqSection() {
  const [openId, setOpenId] = useState<string>("faq-1");

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? "" : id));
  };

  return (
    <section id="faq" className="bg-[#F0EDE8] py-20 md:py-28 overflow-hidden">
      <div className="max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-8">

        {/* Badge */}
        <div className="flex justify-center mb-10 md:mb-14">
          <span className="inline-flex items-center border border-[#E84B2A]/50 bg-[#E84B2A]/10 rounded-full px-5 py-1.5">
            <span className="text-[#E84B2A] font-barlow font-semibold text-[11px] tracking-[0.14em] uppercase">
              FAQ
            </span>
          </span>
        </div>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16 xl:gap-20">

          {/* ── LEFT: Accordion ── */}
          <div className="w-full lg:w-[52%]">
            <h2 className="font-barlow-condensed font-black uppercase text-[#111111] text-[44px] md:text-[56px] leading-none mb-10">
              Perguntas
              <br />
              Frequentes
            </h2>

            <div className="divide-y divide-[#CCCAC6]">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openId === item.id;
                return (
                  <div key={item.id}>
                    <button
                      onClick={() => toggle(item.id)}
                      className="w-full flex items-start justify-between gap-4 py-4 text-left group focus:outline-none"
                      aria-expanded={isOpen}
                    >
                      <span
                        className={`font-barlow font-bold text-[12px] md:text-[13px] tracking-[0.08em] uppercase transition-colors duration-200 ${
                          isOpen
                            ? "text-[#111111]"
                            : "text-[#555555] group-hover:text-[#111111]"
                        }`}
                      >
                        {item.question}
                      </span>
                      {/* +/- icon */}
                      <span
                        className={`shrink-0 mt-0.5 w-4 h-4 flex items-center justify-center transition-colors duration-200 ${
                          isOpen ? "text-[#E84B2A]" : "text-[#999]"
                        }`}
                      >
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 12 12"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-45" : "rotate-0"
                          }`}
                        >
                          <path
                            d="M6 1V11M1 6H11"
                            stroke="currentColor"
                            strokeWidth="1.6"
                            strokeLinecap="round"
                          />
                        </svg>
                      </span>
                    </button>

                    {/* Answer — animated expand */}
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="font-barlow font-normal text-[#444444] text-[13px] md:text-[14px] leading-relaxed pb-5">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ── RIGHT: Browser Mockup ── */}
          <div className="w-full lg:flex-1 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px] lg:max-w-none">
              {/* Browser chrome */}
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#E8E5E0]">
                {/* Title bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-[#F0EDE8]">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                  <span className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                  <span className="w-3 h-3 rounded-full bg-[#28C840]" />
                </div>

                {/* Browser body — image */}
                <div
                  className="relative bg-[#F5F3EF] overflow-hidden"
                  style={{ minHeight: "320px" }}
                >
                  <img
                    src="/duvida.png"
                    alt="Membro da equipa Agiliza"
                    className="w-full h-full object-cover object-top"
                    style={{ minHeight: "320px", maxHeight: "520px" }}
                    onError={(e) => {
                      // Fallback: show a placeholder illustration
                      (e.currentTarget as HTMLImageElement).style.display =
                        "none";
                    }}
                  />

                  {/* Subtle gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white/40 to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Floating accent — small orange dot decoration */}
              <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#E84B2A]/20 blur-sm pointer-events-none" />
              <div className="absolute -bottom-4 -left-4 w-10 h-10 rounded-full bg-[#E84B2A]/10 blur-md pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}