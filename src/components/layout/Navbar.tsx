import { Link } from "@tanstack/react-router";
import { useState } from "react";

type NavLink = {
  label: string;
  to: "/" | "/quem-somos" | "/equipe" | "/contacto";
  hash?: "servicos" | "faq";
};

const NAV_LINKS: NavLink[] = [
  { label: "Quem Somos", to: "/quem-somos" },
  { label: "Nossos Serviços", to: "/", hash: "servicos" },
  { label: "Equipe", to: "/equipe" },
  { label: "FAQ", to: "/", hash: "faq" },
  { label: "Contacto", to: "/contacto" },
];

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between max-w-[1280px] w-full mx-auto px-8 py-5">
      <Link to="/" className="flex items-center gap-2.5 group">
        <img src="/agiliza-logo.svg" alt="logo da agiliza" />
      </Link>

      <nav className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            hash={link.hash}
            className="text-white/90 hover:text-white text-[14px] font-barlow font-medium tracking-wide transition-colors duration-200"
            activeProps={{ className: "text-white" }}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <Link
          to="/contacto"
          className="hidden md:inline-flex bg-[#E84B2A] hover:bg-[#d4411f] text-white text-[13px] font-barlow font-semibold tracking-[0.08em] uppercase px-5 py-2.5 rounded transition-colors duration-200"
        >
          Contacto
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-white p-1"
          aria-label="Abrir menu"
        >
          <svg
            width="22"
            height="16"
            viewBox="0 0 22 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="22" height="2" rx="1" fill="white" />
            <rect y="7" width="16" height="2" rx="1" fill="white" />
            <rect y="14" width="22" height="2" rx="1" fill="white" />
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm border-t border-white/10 md:hidden">
          <nav className="flex flex-col px-8 py-6 gap-5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                hash={link.hash}
                onClick={() => setMenuOpen(false)}
                className="text-white/80 hover:text-white text-[15px] font-barlow font-medium tracking-wide transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contacto"
              className="inline-flex self-start bg-[#E84B2A] text-white text-[13px] font-barlow font-semibold tracking-[0.08em] uppercase px-5 py-2.5 rounded mt-2"
            >
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}