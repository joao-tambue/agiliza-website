import { Link } from "@tanstack/react-router";

export function NotFound() {
  return (
    <main>
      <section className="bg-[#111] pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center border border-[#E84B2A]/60 rounded-full px-3 py-1 mb-6">
            <span className="text-[#E84B2A] font-barlow font-semibold text-[11px] tracking-[0.12em] uppercase">
              Erro 404
            </span>
          </div>
          <h1 className="font-barlow-condensed font-black text-white text-[96px] md:text-[180px] leading-[0.85] uppercase tracking-tighter">
            404
          </h1>
          <p className="font-barlow text-white/60 text-[15px] md:text-[16px] max-w-md mx-auto mt-4 mb-8">
            Página não encontrada. A página que procura pode ter sido removida
            ou o endereço está incorrecto.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#E84B2A] hover:bg-[#d4411f] text-white font-barlow font-semibold text-[12px] tracking-widest uppercase px-6 py-3.5 rounded transition-colors duration-200"
          >
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
            Voltar ao Início
          </Link>
        </div>
      </section>

      <section className="bg-[#F0EDE8] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-barlow-condensed font-black text-[#111] text-[32px] md:text-[44px] uppercase leading-tight mb-6">
              Não encontrou o que procurava?
            </h2>
            <p className="font-barlow text-[#444] text-[14px] leading-relaxed mb-10">
              Explore outras páginas do nosso site ou entre em contacto
              directamente connosco.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { label: "Quem Somos", to: "/quem-somos" },
                { label: "Serviços", to: "/servicos" },
                { label: "Equipe", to: "/equipe" },
                { label: "Contacto", to: "/contacto" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="inline-flex items-center gap-2 bg-white hover:bg-[#E84B2A] hover:text-white text-[#111] font-barlow font-semibold text-[12px] tracking-widest uppercase px-5 py-3 rounded-lg border border-[#D4D0CB] hover:border-[#E84B2A] transition-all duration-200"
                >
                  {link.label}
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2 11L11 2M11 2H4M11 2V9"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
