import { MVV } from "#/data/home";
import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function AboutSection() {
  const [, setVideoPlaying] = useState(false);

  return (
    <section className="bg-[#F0EDE8] pt-16 pb-0">
      <div className="max-w-7xl w-full mx-auto px-2 md:px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-start gap-10 lg:gap-16">
          <div className="w-full md:w-[46%] shrink-0">
            <div
              className="relative rounded-2xl overflow-hidden cursor-pointer group"
              style={{ aspectRatio: "4/3" }}
              onClick={() => setVideoPlaying(true)}
            >
              <div className="absolute inset-0 bg-[#1a1a1a]">
                <img
                  src="/group.png"
                  alt="Equipa Agiliza"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    (e.currentTarget).style.display =
                      "none";
                  }}
                />
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 group-hover:scale-110">
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-1"
                  >
                    <path d="M2 1L18 11L2 21V1Z" fill="white" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 pt-1">
            <div className="inline-flex items-center border border-[#E84B2A]/60 rounded-full px-3 py-1 mb-5">
              <span className="text-[#E84B2A] font-barlow font-semibold text-[11px] tracking-[0.12em] uppercase">
                Quem somos nós ?
              </span>
            </div>

            <h2 className="font-barlow font-bold text-[#111111] text-[20px] md:text-[22px] leading-[1.35] mb-4">
              "Startup tecnológica fundada em 2025, com sede em Luanda – Angola,
              focada no desenvolvimento de soluções digitais inovadoras para
              empresas e para a sociedade."
            </h2>

            <p className="font-barlow font-normal text-[#444444] text-[14px] md:text-[15px] leading-relaxed mb-7">
              Acreditamos que todo profissional merece reconhecimento justo,
              independentemente do setor em que atua. Por isso, unimos
              eletrónica, informática e inovação acessível para criar pontes
              entre esforço, oportunidade e valorização.
            </p>

            <Link
              to="/quem-somos"
              className="inline-flex items-center gap-2 bg-[#E84B2A] hover:bg-[#d4411f] text-white font-barlow font-semibold text-[12px] tracking-widest uppercase px-5 py-3 rounded transition-colors duration-200"
            >
              Ler mais sobre
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
        </div>
      </div>

      <div className="mt-20">
        <div className="max-w-7xl mx-auto px-2 md:px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 pb-16">
            {MVV.map((item) => (
              <div
                key={item.id}
                className="bg-[#1E1E1E] rounded-2xl px-7 pt-7 pb-8"
              >
                <h3 className="font-barlow-condensed font-black text-white uppercase text-[44px] md:text-[48px] leading-none mb-5">
                  {item.label}
                </h3>

                {"list" in item ? (
                  <ul className="space-y-1.5">
                    {item.list.map((value) => (
                      <li
                        key={value}
                        className="flex items-start gap-2 font-barlow text-white/80 text-[13px] leading-snug"
                      >
                        <span className="text-white/60 mt-0.5 shrink-0">
                          ➤
                        </span>
                        {value}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="font-barlow text-white/80 text-[13px] leading-relaxed">
                    {item.text}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}