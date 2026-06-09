import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/termos")({
  component: TermosPage,
});

function TermosPage() {
  return (
    <main>
      <section className="bg-[#111] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center border border-[#E84B2A]/60 rounded-full px-3 py-1 mb-6">
            <span className="text-[#E84B2A] font-barlow font-semibold text-[11px] tracking-[0.12em] uppercase">
              Legal
            </span>
          </div>
          <h1 className="font-barlow-condensed font-black text-white text-[48px] md:text-[80px] leading-[0.9] uppercase">
            Termos de
            <br />
            Uso
          </h1>
        </div>
      </section>

      <section className="bg-[#F0EDE8] py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="font-barlow text-[#666] text-[13px] mb-10">
            Última actualização: Maio de 2026
          </p>

          <div className="space-y-8">
            <div>
              <h2 className="font-barlow-condensed font-black text-[#111] text-[24px] uppercase mb-3">
                1. Aceitação dos Termos
              </h2>
              <p className="font-barlow text-[#444] text-[14px] leading-relaxed">
                Ao aceder e utilizar o website da Agiliza, concorda em cumprir
                e estar vinculado pelos presentes Termos de Uso. Se não
                concordar com algum dos termos, não deverá utilizar os nossos
                serviços.
              </p>
            </div>

            <div>
              <h2 className="font-barlow-condensed font-black text-[#111] text-[24px] uppercase mb-3">
                2. Propriedade Intelectual
              </h2>
              <p className="font-barlow text-[#444] text-[14px] leading-relaxed">
                Todo o conteúdo presente neste website — incluindo textos,
                logótipos, imagens, gráficos, ícones e software — é propriedade
                exclusiva da Agiliza ou dos seus licenciadores e está protegido
                pelas leis de propriedade intelectual aplicáveis. É proibida a
                reprodução, distribuição ou modificação sem autorização prévia
                por escrito.
              </p>
            </div>

            <div>
              <h2 className="font-barlow-condensed font-black text-[#111] text-[24px] uppercase mb-3">
                3. Uso Permitido
              </h2>
              <p className="font-barlow text-[#444] text-[14px] leading-relaxed mb-3">
                O utilizador concorda em utilizar o website e os serviços da
                Agiliza apenas para fins legais e de acordo com estes Termos,
                comprometendo-se a:
              </p>
              <ul className="space-y-2">
                {[
                  "Não violar quaisquer leis ou regulamentos aplicáveis",
                  "Não infringir os direitos de terceiros",
                  "Não transmitir conteúdo ilegal, difamatório ou fraudulento",
                  "Não interferir com o funcionamento do website",
                  "Não tentar aceder a áreas restritas sem autorização",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 font-barlow text-[#444] text-[14px]"
                  >
                    <span className="text-[#E84B2A] mt-0.5 shrink-0">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-barlow-condensed font-black text-[#111] text-[24px] uppercase mb-3">
                4. Limitação de Responsabilidade
              </h2>
              <p className="font-barlow text-[#444] text-[14px] leading-relaxed">
                A Agiliza não será responsável por quaisquer danos directos,
                indirectos, incidentais ou consequenciais resultantes do uso ou
                da impossibilidade de uso dos nossos serviços. O website é
                fornecido "como está" e "conforme disponível", sem garantias de
                qualquer tipo, expressas ou implícitas.
              </p>
            </div>

            <div>
              <h2 className="font-barlow-condensed font-black text-[#111] text-[24px] uppercase mb-3">
                5. Links de Terceiros
              </h2>
              <p className="font-barlow text-[#444] text-[14px] leading-relaxed">
                O nosso website pode conter links para sites de terceiros. A
                Agiliza não tem controlo sobre o conteúdo ou práticas de
                privacidade desses sites e não assume qualquer responsabilidade
                pelos mesmos. Recomendamos que leia os termos e políticas de
                cada site que visitar.
              </p>
            </div>

            <div>
              <h2 className="font-barlow-condensed font-black text-[#111] text-[24px] uppercase mb-3">
                6. Alterações aos Termos
              </h2>
              <p className="font-barlow text-[#444] text-[14px] leading-relaxed">
                Reservamo-nos o direito de modificar estes Termos de Uso a
                qualquer momento. As alterações entram em vigor imediatamente
                após a publicação no website. O uso continuado do website após
                quaisquer alterações constitui aceitação dos novos termos.
              </p>
            </div>

            <div>
              <h2 className="font-barlow-condensed font-black text-[#111] text-[24px] uppercase mb-3">
                7. Lei Aplicável
              </h2>
              <p className="font-barlow text-[#444] text-[14px] leading-relaxed">
                Estes Termos são regidos pelas leis da República de Angola.
                Qualquer disputa decorrente destes Termos será resolvida nos
                tribunais da comarca de Luanda, Angola.
              </p>
            </div>

            <div>
              <h2 className="font-barlow-condensed font-black text-[#111] text-[24px] uppercase mb-3">
                8. Contacto
              </h2>
              <p className="font-barlow text-[#444] text-[14px] leading-relaxed">
                Para questões relacionadas com estes Termos de Uso, entre em
                contacto connosco através do e-mail{" "}
                <a
                  href="mailto:contacto@agiliza.ao"
                  className="text-[#E84B2A] underline"
                >
                  contacto@agiliza.ao
                </a>{" "}
                ou visitando a nossa{" "}
                <Link
                  to="/contacto"
                  className="text-[#E84B2A] underline"
                >
                  página de contacto
                </Link>.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#D4D0CB]">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#E84B2A] font-barlow font-semibold text-[12px] tracking-widest uppercase hover:text-[#d4411f] transition-colors"
            >
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="rotate-180"
              >
                <path
                  d="M2 11L11 2M11 2H4M11 2V9"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Voltar ao Início
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
