"use client";

import {
  ShieldCheck,
  Truck,
  BadgeDollarSign,
  UserCheck,
} from "lucide-react";
import {
  SectionReveal,
  SectionRevealChild,
} from "@/components/shared/section-reveal";

const valueProps = [
  {
    icon: ShieldCheck,
    title: "Quality Assured",
    description:
      "Every product sourced from GMP/WHO-GMP certified manufacturers with complete batch traceability and Certificates of Analysis.",
  },
  {
    icon: Truck,
    title: "Pan-India Logistics",
    description:
      "Temperature-controlled, documented delivery across all states and UTs. Cold-chain certified for biologics and temperature-sensitive products.",
  },
  {
    icon: BadgeDollarSign,
    title: "Transparent Bulk Pricing",
    description:
      "Institutional pricing with no hidden costs. Volume-based tiers, clear MOQs, and consistent pricing you can build your budgets around.",
  },
  {
    icon: UserCheck,
    title: "Dedicated Account Manager",
    description:
      "A single point of contact who understands your formulary, tracks your order patterns, and ensures you never face a stockout.",
  },
];

export function WhyAmiba() {
  return (
    <section className="py-16 sm:py-24 bg-mist/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-10 sm:mb-16">
            <p className="text-editorial text-signal-teal text-base mb-3">
              Why choose us
            </p>
            <h2 className="text-display-lg text-ink">
              Built for institutional buyers
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal stagger>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {valueProps.map((prop) => (
              <SectionRevealChild key={prop.title}>
                <div className="glass-card p-6 sm:p-8 h-full text-center group hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 rounded-2xl bg-signal-teal/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-signal-teal/20 transition-colors">
                    <prop.icon
                      size={28}
                      className="text-signal-teal"
                      strokeWidth={1.5}
                    />
                  </div>
                  <h3 className="text-display-md !text-lg font-semibold text-ink mb-3">
                    {prop.title}
                  </h3>
                  <p className="text-body-sm text-slate">{prop.description}</p>
                </div>
              </SectionRevealChild>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
