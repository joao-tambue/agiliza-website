import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Send } from "lucide-react";

const WHATSAPP_NUMBER = "244941019521";

export const Route = createFileRoute("/contacto")({
  component: ContactoPage,
});

const ASSUNTOS = [
  "Parceria",
  "Serviços",
  "Suporte",
  "Investimento",
  "Outro",
] as const;

function ContactoPage() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    assunto: "",
    mensagem: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const texto =
      `Olá! 👋\n\n` +
      `*Nome:* ${form.nome}\n` +
      `*Email:* ${form.email}\n` +
      `*Telefone:* ${form.telefone || "—"}\n` +
      `*Assunto:* ${form.assunto}\n` +
      `*Mensagem:* ${form.mensagem}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;
    window.open(url, "_blank");
  };

  return (
    <main>
      <section className="bg-[#111] pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center border border-[#E84B2A]/60 rounded-full px-3 py-1 mb-6">
            <span className="text-[#E84B2A] font-barlow font-semibold text-[11px] tracking-[0.12em] uppercase">
              Contacto
            </span>
          </div>
          <h1 className="font-barlow-condensed font-black text-white text-[48px] md:text-[80px] leading-[0.9] uppercase">
            Fale
            <br />
            Connosco
          </h1>
        </div>
      </section>

      <section className="bg-[#F0EDE8] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-10">
            <div className="md:col-span-2">
              <h2 className="font-barlow-condensed font-black text-[#111] text-[32px] md:text-[44px] uppercase leading-tight mb-6">
                Entre em
                <br />
                Contacto
              </h2>
              <p className="font-barlow text-[#444] text-[14px] leading-relaxed mb-8">
                Tem alguma pergunta, ideia ou quer saber mais sobre os nossos
                serviços? Preencha o formulário ao lado e responderemos em
                breve.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#E84B2A]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#E84B2A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-barlow font-bold text-[#111] text-[13px]">
                      Email
                    </p>
                    <a
                      href="mailto:contacto@agiliza.ao"
                      className="font-barlow text-[#444] text-[13px] hover:text-[#E84B2A] transition-colors"
                    >
                      contacto@agiliza.ao
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#E84B2A]/20 flex items-center justify-center shrink-0 mt-0.5">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#E84B2A"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-barlow font-bold text-[#111] text-[13px]">
                      Localização
                    </p>
                    <p className="font-barlow text-[#444] text-[13px]">
                      Luanda, Angola
                    </p>
                  </div>
                </div>

                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 group"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#25D366]/20 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-[#25D366]/30 transition-colors">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="#25D366"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-barlow font-bold text-[#111] text-[13px]">
                      WhatsApp
                    </p>
                    <p className="font-barlow text-[#444] text-[13px] group-hover:text-[#25D366] transition-colors">
                      +244 941 019 521
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="md:col-span-3">
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl border border-[#E0DDD8] shadow-lg p-8 space-y-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="nome"
                      className="block font-barlow font-semibold text-[#111] text-[12px] uppercase tracking-wide mb-1.5"
                    >
                      Nome completo *
                    </label>
                    <input
                      id="nome"
                      name="nome"
                      type="text"
                      required
                      value={form.nome}
                      onChange={handleChange}
                      placeholder="O seu nome"
                      className="w-full font-barlow text-[13px] text-[#111] placeholder-[#AAAAAA] bg-[#F7F5F2] border border-[#E0DDD8] rounded-lg px-4 py-3 focus:outline-none focus:border-[#E84B2A] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block font-barlow font-semibold text-[#111] text-[12px] uppercase tracking-wide mb-1.5"
                    >
                      Email *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="seu@email.com"
                      className="w-full font-barlow text-[13px] text-[#111] placeholder-[#AAAAAA] bg-[#F7F5F2] border border-[#E0DDD8] rounded-lg px-4 py-3 focus:outline-none focus:border-[#E84B2A] transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="telefone"
                      className="block font-barlow font-semibold text-[#111] text-[12px] uppercase tracking-wide mb-1.5"
                    >
                      Telefone
                    </label>
                    <input
                      id="telefone"
                      name="telefone"
                      type="tel"
                      value={form.telefone}
                      onChange={handleChange}
                      placeholder="+244 XXX XXX XXX"
                      className="w-full font-barlow text-[13px] text-[#111] placeholder-[#AAAAAA] bg-[#F7F5F2] border border-[#E0DDD8] rounded-lg px-4 py-3 focus:outline-none focus:border-[#E84B2A] transition-colors"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="assunto"
                      className="block font-barlow font-semibold text-[#111] text-[12px] uppercase tracking-wide mb-1.5"
                    >
                      Assunto *
                    </label>
                    <select
                      id="assunto"
                      name="assunto"
                      required
                      value={form.assunto}
                      onChange={handleChange}
                      className="w-full font-barlow text-[13px] text-[#111] bg-[#F7F5F2] border border-[#E0DDD8] rounded-lg px-4 py-3 focus:outline-none focus:border-[#E84B2A] transition-colors appearance-none"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1L5 5L9 1' stroke='%23999' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E\")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "right 16px center",
                      }}
                    >
                      <option value="" disabled>
                        Selecione um assunto
                      </option>
                      {ASSUNTOS.map((a) => (
                        <option key={a} value={a}>
                          {a}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="mensagem"
                    className="block font-barlow font-semibold text-[#111] text-[12px] uppercase tracking-wide mb-1.5"
                  >
                    Mensagem *
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    required
                    rows={5}
                    value={form.mensagem}
                    onChange={handleChange}
                    placeholder="Escreva a sua mensagem..."
                    className="w-full font-barlow text-[13px] text-[#111] placeholder-[#AAAAAA] bg-[#F7F5F2] border border-[#E0DDD8] rounded-lg px-4 py-3 focus:outline-none focus:border-[#E84B2A] transition-colors resize-y"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#E84B2A] hover:bg-[#d4411f] text-white font-barlow font-semibold text-[12px] tracking-widest uppercase px-6 py-3.5 rounded-lg transition-colors duration-200"
                >
                  <Send size={14} />
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
