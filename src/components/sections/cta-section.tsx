import { Link } from "@tanstack/react-router";
import { useState } from "react";

function HandDrawnArrow() {
  return (
    <svg
      viewBox="0 0 180 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      preserveAspectRatio="none"
    >
      <path
        d="M10 60 C40 20, 100 10, 155 30"
        stroke="#E84B2A"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
      />
      {/* Ponta da seta */}
      <path
        d="M140 18 L158 32 L143 44"
        stroke="#E84B2A"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function IconLinkedin() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

const TABS = [
  { id: "trabalhos", label: "Trabalhos" },
  { id: "contactos", label: "Contactos" },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function CtaSection() {
  const [activeTab, setActiveTab] = useState<TabId>("trabalhos");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEmail("");
  };

  return (
    <section className="bg-[#1A1A1A] relative">
      <div className="absolute top-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
        <svg
          viewBox="0 0 1440 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: "56px" }}
        >
          <path
            d="M0 0 L0 16 L40 0 L80 16 L120 0 L160 16 L200 0 L240 16 L280 0 L320 16 L360 0 L400 16 L440 0 L480 16 L520 0 L560 16 L600 0 L640 16 L680 0 L720 16 L760 0 L800 16 L840 0 L880 16 L920 0 L960 16 L1000 0 L1040 16 L1080 0 L1120 16 L1160 0 L1200 16 L1240 0 L1280 16 L1320 0 L1360 16 L1400 0 L1440 16 L1440 0 Z"
            fill="#F0EDE8"
          />
        </svg>
      </div>

      <div className="max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-8 pt-24 pb-16">

        {/* ── Tabs ── */}
        <div className="flex items-center justify-center gap-10 mb-10">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`font-barlow font-semibold text-[14px] tracking-wide pb-1.5 transition-colors duration-200 relative focus:outline-none ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-white/50 hover:text-white/80"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#E84B2A] rounded-full" />
              )}
            </button>
          ))}
        </div>

        <div
          className="relative rounded-2xl overflow-hidden"
          style={{ background: "#EFEBE5" }}
        >
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none z-0">
            <svg
              viewBox="0 0 1440 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              className="w-full block"
              style={{ height: "40px" }}
            >
              <path
                d="M0 40 L0 24 L40 40 L80 24 L120 40 L160 24 L200 40 L240 24 L280 40 L320 24 L360 40 L400 24 L440 40 L480 24 L520 40 L560 24 L600 40 L640 24 L680 40 L720 24 L760 40 L800 24 L840 40 L880 24 L920 40 L960 24 L1000 40 L1040 24 L1080 40 L1120 24 L1160 40 L1200 24 L1240 40 L1280 24 L1320 40 L1360 24 L1400 40 L1440 24 L1440 40 Z"
                fill="#1A1A1A"
              />
            </svg>
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-stretch min-h-[280px]">

            <div className="relative w-full md:w-[30%] shrink-0 flex items-end justify-center overflow-hidden">
              <img
                src="/img.png"
                alt="Agiliza App — mão a segurar o telefone"
                className="h-[260px] md:h-[300px] lg:h-[340px] w-auto object-contain object-bottom drop-shadow-xl"
                onError={(e) => {
                  // Se a imagem não existir ainda, mostra placeholder com instruções
                  const el = e.currentTarget as HTMLImageElement;
                  el.style.display = "none";
                  const parent = el.parentElement;
                  if (parent && !parent.querySelector(".img-placeholder")) {
                    const ph = document.createElement("div");
                    ph.className =
                      "img-placeholder w-full h-[260px] md:h-[300px] flex items-center justify-center";
                    ph.innerHTML = `<p class="text-[#888] text-[11px] text-center px-4 leading-relaxed">[ Coloca a imagem da<br/>mão com o telefone aqui ]<br/><span class="opacity-60">src="/app-mockup.png"</span></p>`;
                    parent.appendChild(ph);
                  }
                }}
              />
            </div>

            {/* ── Coluna central: badge + título + seta ── */}
            <div className="flex-1 flex flex-col justify-center items-center px-6 py-10 md:py-0 text-center gap-4">

              {/* Badge pill laranja */}
              <div className="inline-flex items-center border-2 border-[#E84B2A] rounded-full px-5 py-1.5">
                <span className="font-barlow font-black text-[#E84B2A] text-[12px] md:text-[13px] tracking-[0.12em] uppercase">
                  Agiliza App
                </span>
              </div>

              {/* Seta decorativa SVG à mão */}
              <div className="w-36 md:w-44 h-12 md:h-14 -mt-1 -mb-1 rotate-[-8deg]">
                <HandDrawnArrow />
              </div>

              {/* Título principal */}
              <h2 className="font-barlow-condensed font-black uppercase text-[#111111] text-[22px] md:text-[26px] lg:text-[30px] leading-tight tracking-wide">
                A solução para as
                <br className="hidden sm:block" />
                mamas trabalhadoras
              </h2>
            </div>

            {/* ── Coluna direita: mini card CTA newsletter ── */}
            <div className="w-full md:w-[260px] lg:w-[290px] shrink-0 flex items-center justify-center px-6 pb-10 md:py-8">
              <div className="bg-white rounded-xl border border-[#E0DDD8] shadow-lg p-5 w-full max-w-[240px] md:max-w-none">

                {/* Título do card */}
                <p className="font-barlow-condensed font-black uppercase text-[#111111] text-[16px] md:text-[17px] leading-tight mb-1">
                  Seja o primeiro
                  <br />a saber !
                </p>

                {/* Subtítulo */}
                <p className="font-barlow font-normal text-[#666666] text-[11px] leading-snug mb-4">
                  Assim que a app estiver disponível,
                  vamos notificá-lo. Introduza o seu
                  e-mail para receber actualizações
                  e ter acesso antecipado.
                </p>

                {/* Formulário */}
                <div className="flex flex-col gap-2">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="O seu e-mail"
                    className="w-full font-barlow text-[12px] text-[#111] placeholder-[#AAAAAA] bg-[#F7F5F2] border border-[#E0DDD8] rounded-md px-3 py-2 focus:outline-none focus:border-[#E84B2A] transition-colors"
                  />
                  <button
                    onClick={handleSubmit}
                    className="w-full bg-[#E84B2A] hover:bg-[#d4411f] active:bg-[#bf3a1a] text-white font-barlow font-bold text-[11px] tracking-[0.1em] uppercase px-4 py-2.5 rounded-md transition-colors duration-200"
                  >
                    Entrar na lista
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#1A1A1A]">

      <div className="max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-8 pt-12 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Coluna 1 — Logo + descrição + sociais */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 group mb-4">
              <img src="/agiliza-logo.svg" alt="logo da agiliza" />
            </Link>

            <p className="font-barlow font-normal text-white/55 text-[13px] leading-relaxed mb-6 max-w-[220px]">
              Entre em contacto e descubra como podemos
              transformar ideias em soluções tecnológicas
              com impacto real.
            </p>

            {/* Ícones sociais */}
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-8 h-8 rounded-md border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-colors duration-200"
              >
                <IconFacebook />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-8 h-8 rounded-md border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-colors duration-200"
              >
                <IconInstagram />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-8 h-8 rounded-md border border-white/20 flex items-center justify-center text-white/60 hover:text-white hover:border-white/50 transition-colors duration-200"
              >
                <IconLinkedin />
              </a>
            </div>
          </div>

          {/* Coluna 2 — Redes / Plataforma */}
          <div>
            <h4 className="font-barlow font-bold text-white text-[11px] tracking-[0.14em] uppercase mb-5">
              Redes / Plataforma
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Instagram", href: "https://instagram.com" },
                { label: "Facebook", href: "https://facebook.com" },
                { label: "LinkedIn", href: "https://linkedin.com" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-barlow font-normal text-white/55 text-[13px] tracking-wide hover:text-white transition-colors duration-200 uppercase"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 3 — Contacto / Localização */}
          <div>
            <h4 className="font-barlow font-bold text-white text-[11px] tracking-[0.14em] uppercase mb-5">
              Contacto / Localização
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Luanda – Angola", href: "#" },
                { label: "contacto@agiliza.ao", href: "mailto:contacto@agiliza.ao" },
                { label: "contacto@agiliza.ao", href: "mailto:contacto@agiliza.ao" },
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href={item.href}
                    className="font-barlow font-normal text-white/55 text-[13px] hover:text-white transition-colors duration-200 uppercase"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coluna 4 — Termos */}
          <div>
            <h4 className="font-barlow font-bold text-white text-[11px] tracking-[0.14em] uppercase mb-5">
              Termos
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Políticas e Privacidade", to: "/privacidade" },
                { label: "Termos de Uso", to: "/termos" },
              ].map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="font-barlow font-normal text-white/55 text-[13px] hover:text-white transition-colors duration-200 uppercase"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="border-t border-white/10" />

      {/* ── Copyright bar ── */}
      <div className="max-w-7xl w-full mx-auto px-4 md:px-6 lg:px-8 py-5">
        <p className="font-barlow font-normal text-white/35 text-[11px] tracking-[0.1em] uppercase text-center">
          Agiliza© 2025 – Todos os direitos reservados
        </p>
      </div>
    </footer>
  );
}