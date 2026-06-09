import { TEAM_MEMBERS, TESTIMONIALS } from "#/data/home";
import { TeamCard } from "#/components/ui/tean-card";
import { Link, createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/equipe")({
  component: EquipePage,
});

function EquipePage() {
  const [active, setActive] = useState(0);

  const next = () =>
    setActive((prev) => (prev + 1) % TESTIMONIALS.length);

  const prev = () =>
    setActive((prev) =>
      prev === 0 ? TESTIMONIALS.length - 1 : prev - 1
    );

  const testimonial = TESTIMONIALS[active];

  return (
    <main>
      <section className="bg-[#111] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center border border-[#E84B2A]/60 rounded-full px-3 py-1 mb-6">
            <span className="text-[#E84B2A] font-barlow font-semibold text-[11px] tracking-[0.12em] uppercase">
              Nosso time
            </span>
          </div>
          <h1 className="font-barlow-condensed font-black text-white text-[56px] md:text-[96px] leading-[0.9] uppercase">
            A Nossa
            <br />
            Equipe
          </h1>
        </div>
      </section>

      <section className="bg-[#F0EDE8] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-barlow-condensed font-black text-[#111] text-[36px] md:text-[48px] uppercase leading-tight">
              Conheça os nossos membros
            </h2>
            <p className="font-barlow text-[#444] text-[14px] max-w-lg mx-auto mt-4">
              A Agiliza é construída por uma equipa multidisciplinar
              comprometida com inovação, impacto social e transformação
              tecnológica.
            </p>
          </div>

          <div className="flex justify-center gap-4 md:gap-6 flex-wrap">
            {TEAM_MEMBERS.map((member) => (
              <TeamCard key={member.id} {...member} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F0EDE8] pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-barlow-condensed font-black text-center text-[#111] text-[32px] md:text-[44px] uppercase leading-tight mb-12">
            O Que Dizem Sobre Nós
          </h2>

          <div className="max-w-[900px] mx-auto">
            <div className="bg-white rounded-full border-[3px] border-[#1A1A1A] px-6 py-4 flex items-center gap-4 shadow-lg">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover shrink-0"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />

              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-[#1A1A1A]">
                  {testimonial.text}
                </p>
                <p className="text-xs text-[#666] mt-1">
                  {testimonial.name} — {testimonial.role}
                </p>
              </div>

              <div className="flex gap-3 shrink-0">
                <button onClick={prev} aria-label="Anterior">
                  <ArrowLeft size={16} color="black" />
                </button>
                <button onClick={next} aria-label="Próximo">
                  <ArrowRight size={16} color="black" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-barlow-condensed font-black text-[#111] text-[36px] md:text-[48px] uppercase leading-tight mb-6">
            Junte-se à nossa equipa
          </h2>
          <p className="font-barlow text-[#444] text-[14px] max-w-xl mx-auto mb-8">
            Estamos sempre à procura de talentos que queiram fazer a diferença
            no mercado angolano.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-[#E84B2A] hover:bg-[#d4411f] text-white font-barlow font-semibold text-[12px] tracking-widest uppercase px-6 py-3.5 rounded transition-colors duration-200"
          >
            Candidate-se
            <svg
              width="13"
              height="13"
              viewBox="0 0 13 13"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 11L11 2M11 2H4M11 2V9"
                stroke="white"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
