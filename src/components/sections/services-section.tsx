import { SERVICES } from "#/data/home";
import { Link } from "@tanstack/react-router";
import { Globe, Server, Cpu, BarChart3 } from "lucide-react";

const SERVICE_ICONS = [Globe, Server, Cpu, BarChart3] as const;

export function ServicesSection() {
  return (
    <section id="servicos" className="bg-[#111] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-4">
          <div className="inline-flex items-center border border-[#E84B2A]/60 rounded-full px-3 py-1">
            <span className="text-[#E84B2A] font-barlow font-semibold text-[11px] tracking-[0.12em] uppercase">
              Áreas de actuação
            </span>
          </div>
        </div>

        <h2 className="font-barlow-condensed font-black text-center text-white text-[56px] md:text-[80px] leading-[0.9] uppercase mb-16">
          Nossos
          <br />
          Serviços
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service, index) => {
            const Icon = SERVICE_ICONS[index];
            return (
              <div
                key={service.id}
                className="bg-[#1E1E1E] rounded-2xl p-7 flex flex-col hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#E84B2A]/20 flex items-center justify-center mb-5">
                  <Icon className="text-[#E84B2A]" size={24} />
                </div>
                <h3 className="font-barlow font-bold text-white text-base mb-3">
                  {service.title}
                </h3>
                <p className="font-barlow text-white/60 text-sm leading-relaxed flex-1">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col items-center mt-24">
          <p className="font-barlow-condensed font-black text-white text-[40px] md:text-[56px] uppercase leading-none">
            Fico interessado ?
          </p>

          <div className="relative flex items-center gap-6 mt-8">
            <svg
              width="100"
              height="50"
              viewBox="0 0 100 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0 absolute -left-28 top-1/2 transform -translate-y-1/2"
            >
              <path
                d="M5 45 C 25 40, 40 10, 75 20"
                stroke="#E84B2A"
                strokeWidth="3"
                strokeLinecap="round"
                fill="none"
              />
              <path
                d="M75 20 L 63 14 M75 20 L 69 32"
                stroke="#E84B2A"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <Link
              to="/contacto"
              className="inline-flex items-center gap-3 bg-[#E84B2A] hover:bg-[#d4411f] text-white font-barlow font-semibold text-[14px] tracking-[0.08em] uppercase px-8 py-4 rounded transition-colors duration-200 shrink-0"
            >
              Entrar em Contacto
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 14L14 2M14 2H6M14 2V10"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
