import { Link } from "@tanstack/react-router";
import {
    TEAM_MEMBERS,
    TESTIMONIALS,
} from "#/data/home";
import { useState } from "react";
import { TeamCard } from "../ui/tean-card";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function TeamSection() {
    const [active, setActive] = useState(0);

    const next = () =>
        setActive((prev) => (prev + 1) % TESTIMONIALS.length);

    const prev = () =>
        setActive(
            (prev) =>
                prev === 0
                    ? TESTIMONIALS.length - 1
                    : prev - 1
        );

    const testimonial = TESTIMONIALS[active];

    return (
        <section className="bg-[#F0EDE8] py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="font-barlow-condensed font-black text-center text-[56px] md:text-[110px] leading-[0.9] uppercase text-[#111]">
                    Conheça a
                    <br />
                    Nossa Equipe
                </h2>

                <p className="text-center text-[#444] mt-6 mb-10">
                    A Agiliza é construída por uma equipa
                    multidisciplinar comprometida com inovação,
                    impacto social e transformação tecnológica.
                </p>

                <div className="flex justify-center mb-20">
                    <Link
                        to="/equipe"
                        className="bg-[#E84B2A] px-6 py-3 text-white uppercase text-xs font-semibold rounded-md"
                    >
                        Ver toda equipe ↗
                    </Link>
                </div>

                <div className="flex justify-center gap-4 md:gap-6 mb-20">
                    {TEAM_MEMBERS.map((member) => (
                        <TeamCard
                            key={member.id}
                            {...member}
                        />
                    ))}
                </div>

                <div className="max-w-[900px] mx-auto">
                    <div className="bg-white rounded-full border-[3px] border-[#1A1A1A] px-6 py-4 flex items-center gap-4 shadow-lg">
                        <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover"
                        />

                        <div className="flex-1">
                            <p className="text-sm font-semibold text-[#1A1A1A]">
                                {testimonial.text}
                            </p>

                            <p className="text-xs text-[#666] mt-1">
                                {testimonial.name} - {testimonial.role}
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <button onClick={prev}>
                                <ArrowLeft size={16} color="black" />
                            </button>

                            <button onClick={next}>
                                <ArrowRight size={16} color="black" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}