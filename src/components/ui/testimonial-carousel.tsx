import { TESTIMONIALS } from "#/data/home";
import { useState } from "react";

function TestimonialCarousel() {
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
        <div className="max-w-[900px] mx-auto">
            <div className="bg-white rounded-full border-[3px] border-[#1E1E1E] px-5 py-4 flex items-center gap-4 shadow-xl">
                <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                />

                <div className="flex-1">
                    <p className="text-[#1E1E1E] font-semibold text-sm">
                        {testimonial.text}
                    </p>

                    <span className="text-[#666] text-xs">
                        {testimonial.name} - {testimonial.role}
                    </span>
                </div>

                <div className="flex gap-3">
                    <button
                        onClick={prev}
                        className="text-xl"
                    >
                        ←
                    </button>

                    <button
                        onClick={next}
                        className="text-xl"
                    >
                        →
                    </button>
                </div>
            </div>
        </div>
    );
}

export { TestimonialCarousel }