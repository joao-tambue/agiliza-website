import { SLIDES } from "#/data/home";
import { useEffect, useState } from "react";
// import { Link } from "@tanstack/react-router";

export function HeroSection() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = (index: number) => {
    if (index === active || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 350);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      goTo((active + 1) % SLIDES.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [active]);

  const slide = SLIDES[active];

  return (
    <section className="relative h-screen min-h-150 max-h-225 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-700"
        style={{
          backgroundImage: `url(${slide.bg}), url('/images/hero-bg-1.jpg')`,
        }}
      >
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/40" />
        <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <div
        className={`relative z-10 flex flex-col justify-center h-full px-2 md:px-4 lg:px-8 max-w-7xl w-full mx-auto transition-opacity duration-350 ${
          animating ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
        }`}
        style={{ paddingTop: "96px" }}
      >
        <h1 className="font-barlow-condensed font-black uppercase leading-none mb-5">
          <span className="block text-white text-[52px] md:text-[68px] lg:text-[76px] leading-[0.95]">
            {slide.titleLine1}
          </span>
          <span className="block leading-[0.95]">
            <span className="text-[#888888] text-[52px] md:text-[68px] lg:text-[76px]">
              {slide.titleHighlight}
            </span>
            <span className="text-white text-[52px] md:text-[68px] lg:text-[76px]">
              {" "}
              {slide.titleEnd}
            </span>
          </span>
        </h1>

        <p className="text-white/90 font-barlow font-normal text-[15px] md:text-[16px] leading-relaxed max-w-130 mb-8">
          {slide.subtitle}
        </p>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {slide.tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-2 text-white/90 font-barlow text-[13px] font-medium"
            >
              <svg
                width="13"
                height="10"
                viewBox="0 0 13 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="shrink-0"
              >
                <path
                  d="M1 5L4.5 8.5L12 1"
                  stroke="#E84B2A"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="absolute bottom-14 left-1/2 -translate-x-1/2 z-10 flex items-center gap-2.5">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => goTo(i)}
            aria-label={`Ir para slide ${i + 1}`}
            className="transition-all duration-300 focus:outline-none"
          >
            {i === active ? (
              <span className="block w-7 h-2.5 rounded-full bg-[#E84B2A]" />
            ) : (
              <span className="block w-2.5 h-2.5 rounded-full border-2 border-white/60 hover:border-white transition-colors" />
            )}
          </button>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1440 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: "56px" }}
        >
          <path
            d="M0 56 L0 40 L40 56 L80 40 L120 56 L160 40 L200 56 L240 40 L280 56 L320 40 L360 56 L400 40 L440 56 L480 40 L520 56 L560 40 L600 56 L640 40 L680 56 L720 40 L760 56 L800 40 L840 56 L880 40 L920 56 L960 40 L1000 56 L1040 40 L1080 56 L1120 40 L1160 56 L1200 40 L1240 56 L1280 40 L1320 56 L1360 40 L1400 56 L1440 40 L1440 56 Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
}