import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setVisible(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const reject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] bg-[#1E1E1E] border-t border-white/10 py-4 px-4 shadow-2xl">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-barlow text-white/70 text-[13px] leading-relaxed text-center md:text-left">
          Este site utiliza cookies para melhorar a sua experiência de navegação.
          Ao continuar, concorda com a nossa{" "}
          <Link
            to="/privacidade"
            className="text-[#E84B2A] underline hover:text-[#d4411f] transition-colors"
          >
            Política de Privacidade
          </Link>{" "}
          e{" "}
          <Link
            to="/termos"
            className="text-[#E84B2A] underline hover:text-[#d4411f] transition-colors"
          >
            Termos de Uso
          </Link>.
        </p>
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={reject}
            className="font-barlow text-white/50 text-[12px] tracking-wide uppercase hover:text-white transition-colors duration-200"
          >
            Rejeitar
          </button>
          <button
            onClick={accept}
            className="font-barlow font-bold text-white text-[12px] tracking-wide uppercase bg-[#E84B2A] hover:bg-[#d4411f] px-5 py-2.5 rounded transition-colors duration-200"
          >
            Aceitar
          </button>
        </div>
      </div>
    </div>
  );
}
