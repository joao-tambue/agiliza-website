import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacidade")({
  component: PrivacidadePage,
});

function PrivacidadePage() {
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
            Políticas de
            <br />
            Privacidade
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
                1. Introdução
              </h2>
              <p className="font-barlow text-[#444] text-[14px] leading-relaxed">
                A Agiliza ("nós", "nosso" ou "Agiliza") está comprometida com a
                protecção da sua privacidade. Esta Política de Privacidade
                explica como recolhemos, usamos, divulgamos e protegemos as suas
                informações pessoais quando utiliza o nosso website e serviços.
              </p>
            </div>

            <div>
              <h2 className="font-barlow-condensed font-black text-[#111] text-[24px] uppercase mb-3">
                2. Dados que Recolhemos
              </h2>
              <p className="font-barlow text-[#444] text-[14px] leading-relaxed mb-3">
                Podemos recolher os seguintes tipos de informação:
              </p>
              <ul className="space-y-2">
                {[
                  "Nome e apelido",
                  "Endereço de e-mail",
                  "Número de telefone",
                  "Informações de navegação (cookies, endereço IP, tipo de browser)",
                  "Mensagens que nos envia através do formulário de contacto",
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
                3. Como Usamos os Seus Dados
              </h2>
              <p className="font-barlow text-[#444] text-[14px] leading-relaxed mb-3">
                Utilizamos as informações recolhidas para:
              </p>
              <ul className="space-y-2">
                {[
                  "Responder às suas perguntas e solicitações",
                  "Melhorar a nossa plataforma e serviços",
                  "Enviar actualizações relevantes (com o seu consentimento)",
                  "Cumprir obrigações legais e regulatórias",
                  "Garantir a segurança do nosso website",
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
                4. Cookies
              </h2>
              <p className="font-barlow text-[#444] text-[14px] leading-relaxed">
                Utilizamos cookies e tecnologias semelhantes para melhorar a sua
                experiência de navegação. Os cookies são pequenos ficheiros de
                texto armazenados no seu dispositivo. Pode controlar o uso de
                cookies através das definições do seu navegador. Ao aceitar os
                cookies no nosso banner, consente o uso conforme descrito nesta
                política.
              </p>
            </div>

            <div>
              <h2 className="font-barlow-condensed font-black text-[#111] text-[24px] uppercase mb-3">
                5. Partilha de Dados
              </h2>
              <p className="font-barlow text-[#444] text-[14px] leading-relaxed">
                Não vendemos, trocamos ou transferimos as suas informações
                pessoais a terceiros sem o seu consentimento, excepto quando
                exigido por lei ou para proteger os nossos direitos legais.
                Podemos partilhar dados com prestadores de serviços de
                confiança que nos ajudam a operar o nosso website e negócio,
                desde que concordem em manter a confidencialidade dos dados.
              </p>
            </div>

            <div>
              <h2 className="font-barlow-condensed font-black text-[#111] text-[24px] uppercase mb-3">
                6. Segurança
              </h2>
              <p className="font-barlow text-[#444] text-[14px] leading-relaxed">
                Implementamos medidas de segurança técnicas e organizacionais
                para proteger as suas informações pessoais contra acesso não
                autorizado, alteração, divulgação ou destruição. No entanto,
                nenhum método de transmissão pela Internet é totalmente seguro.
              </p>
            </div>

            <div>
              <h2 className="font-barlow-condensed font-black text-[#111] text-[24px] uppercase mb-3">
                7. Os Seus Direitos
              </h2>
              <p className="font-barlow text-[#444] text-[14px] leading-relaxed mb-3">
                De acordo com a legislação aplicável, tem o direito de:
              </p>
              <ul className="space-y-2">
                {[
                  "Aceder aos seus dados pessoais que possuímos",
                  "Solicitar a correcção de dados inexactos",
                  "Solicitar a eliminação dos seus dados",
                  "Limitar ou opor-se ao processamento dos seus dados",
                  "Solicitar a portabilidade dos dados",
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
                8. Contacto
              </h2>
              <p className="font-barlow text-[#444] text-[14px] leading-relaxed">
                Se tiver dúvidas sobre esta Política de Privacidade ou quiser
                exercer os seus direitos, entre em contacto connosco através do
                e-mail{" "}
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
