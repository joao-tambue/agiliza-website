import { MVV } from "#/data/home";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/quem-somos")({
  component: QuemSomosPage,
});

function QuemSomosPage() {
  return (
    <main>
      <section className="bg-[#111] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center border border-[#E84B2A]/60 rounded-full px-3 py-1 mb-6">
            <span className="text-[#E84B2A] font-barlow font-semibold text-[11px] tracking-[0.12em] uppercase">
              Sobre nós
            </span>
          </div>
          <h1 className="font-barlow-condensed font-black text-white text-[56px] md:text-[96px] leading-[0.9] uppercase">
            Quem
            <br />
            Somos
          </h1>
        </div>
      </section>

      <section className="bg-[#F0EDE8] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-barlow-condensed font-black text-[#111] text-[32px] md:text-[44px] uppercase leading-tight mb-8">
              A Nossa História
            </h2>
            <div className="space-y-5">
              <p className="font-barlow text-[#444] text-[15px] leading-relaxed">
                A <strong className="text-[#111]">Agiliza</strong> nasceu em 2025,
                no coração de Luanda, Angola, com uma missão clara:{" "}
                <strong className="text-[#111]">
                  valorizar o profissional informal
                </strong>{" "}
                através da tecnologia.
              </p>
              <p className="font-barlow text-[#444] text-[15px] leading-relaxed">
                Percebemos que milhares de trabalhadores informais —
                lavadeiras, pedreiros, canalizadores, vendedoras ambulantes —
                enfrentavam diariamente a falta de reconhecimento, a
                invisibilidade e a ausência de ferramentas que os ajudassem a
                crescer. Foi aí que decidimos agir.
              </p>
              <p className="font-barlow text-[#444] text-[15px] leading-relaxed">
                Mais do que uma startup tecnológica, somos um movimento de
                transformação social. Acreditamos que a inovação deve ser
                acessível a todos e que o esforço de quem move a cidade merece
                ser visto, valorizado e recompensado.
              </p>
              <p className="font-barlow text-[#444] text-[15px] leading-relaxed">
                Hoje, trabalhamos lado a lado com comunidades, parceiros
                institucionais e empresas para construir soluções digitais que
                geram impacto real — desde aplicações web modernas até sistemas
                empresariais personalizados.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F0EDE8] pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
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
      </section>

      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="font-barlow-condensed font-black text-[#111] text-[36px] md:text-[48px] uppercase leading-tight mb-6">
            Vamos construir o futuro juntos?
          </h2>
          <p className="font-barlow text-[#444] text-[14px] max-w-xl mx-auto mb-8">
            Se partilha da nossa visão e quer fazer parte desta transformação,
            entre em contacto connosco.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center gap-2 bg-[#E84B2A] hover:bg-[#d4411f] text-white font-barlow font-semibold text-[12px] tracking-widest uppercase px-6 py-3.5 rounded transition-colors duration-200"
          >
            Fale Connosco
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
