"use client";

import { testimonials } from "@/data/testimonials";
import { SectionReveal } from "@/components/shared/section-reveal";
import { Quote } from "lucide-react";

export function Testimonials() {
  // Double the array for seamless marquee
  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-24 bg-paper overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-12">
        <SectionReveal>
          <div className="text-center">
            <p className="text-editorial text-signal-teal text-base mb-3">
              Trusted partners
            </p>
            <h2 className="text-display-lg text-ink">
              What our partners say
            </h2>
          </div>
        </SectionReveal>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Gradient masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-paper to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-paper to-transparent z-10" />

        <div className="flex animate-marquee">
          {doubled.map((testimonial, i) => (
            <div
              key={`${testimonial.author}-${i}`}
              className="flex-shrink-0 w-[400px] mx-4"
            >
              <div className="glass-card p-8 h-full">
                <Quote
                  size={20}
                  className="text-signal-teal/40 mb-4"
                  fill="currentColor"
                />
                <p className="text-body-sm text-ink mb-6 leading-relaxed">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  {/* Initials avatar */}
                  <div className="w-10 h-10 rounded-full bg-signal-teal/10 flex items-center justify-center">
                    <span className="text-sm font-semibold text-signal-teal">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-ink">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-slate">
                      {testimonial.role}, {testimonial.organization}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
