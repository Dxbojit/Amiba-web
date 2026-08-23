import type { Metadata } from "next";
import { SectionReveal, SectionRevealChild } from "@/components/shared/section-reveal";
import { CTABanner } from "@/components/shared/cta-banner";
import { Target, Eye, Heart, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AMIBA's mission to transform B2B pharmaceutical supply in India — our story, values, and commitment to quality healthcare access.",
};

const milestones = [
  { year: "2020", title: "Founded", description: "AMIBA Healthcare established with a mission to bring transparency and reliability to B2B pharmaceutical supply." },
  { year: "2021", title: "First 100 Partners", description: "Onboarded our hundredth institutional partner — hospitals, pharmacy chains, and clinics across Maharashtra." },
  { year: "2022", title: "Cold Chain Launch", description: "Launched validated cold-chain logistics for biologics and temperature-sensitive products." },
  { year: "2023", title: "Pan-India Coverage", description: "Expanded delivery network to cover 28 states and 8 union territories with dedicated regional logistics hubs." },
  { year: "2024", title: "500+ Partners", description: "Surpassed 500 active institutional partners with a 99% order fulfillment rate." },
];

const values = [
  { icon: Target, title: "Precision", description: "Every product batch-tested. Every shipment documented. Every claim verifiable." },
  { icon: Eye, title: "Transparency", description: "Clear pricing, complete traceability, and honest communication at every touchpoint." },
  { icon: Heart, title: "Care", description: "Behind every order is a patient. We never compromise on quality or cut corners on compliance." },
  { icon: Users, title: "Partnership", description: "We don't just sell — we build long-term supply relationships that make your operations easier." },
];

/* TODO: REPLACE — Use real leadership data */
const leadership = [
  { name: "Founder & CEO", initials: "AB", role: "Strategy & Operations" },
  { name: "Head of Quality", initials: "QA", role: "Quality Assurance & Compliance" },
  { name: "Head of Logistics", initials: "LG", role: "Supply Chain & Distribution" },
  { name: "Head of Sales", initials: "SL", role: "Institutional Partnerships" },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="max-w-3xl">
              <p className="text-editorial text-signal-teal text-base mb-3">Our story</p>
              <h1 className="text-display-lg text-ink mb-6">
                Building trust in every
                <br />
                <span className="text-signal-teal">shipment we deliver</span>
              </h1>
              <p className="text-body-lg text-slate">
                AMIBA was born from a simple observation: institutional buyers in India
                deserve a pharmaceutical supply partner that prioritizes transparency,
                quality documentation, and reliable logistics as much as competitive
                pricing. We set out to build that partner.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Mission + Vision */}
      <section className="py-14 sm:py-20 bg-mist/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal stagger>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <SectionRevealChild>
                <div className="glass-card p-6 sm:p-10 h-full">
                  <p className="text-editorial text-signal-teal text-sm mb-3">Mission</p>
                  <h2 className="text-display-md text-ink mb-4">
                    Making quality medicine accessible at institutional scale
                  </h2>
                  <p className="text-body text-slate">
                    We bridge the gap between GMP-certified manufacturers and healthcare
                    institutions by providing a supply chain that is transparent,
                    documented, and built for the rigour that pharmaceutical procurement
                    demands.
                  </p>
                </div>
              </SectionRevealChild>
              <SectionRevealChild>
                <div className="glass-card p-6 sm:p-10 h-full">
                  <p className="text-editorial text-signal-teal text-sm mb-3">Vision</p>
                  <h2 className="text-display-md text-ink mb-4">
                    The most trusted name in B2B pharma supply
                  </h2>
                  <p className="text-body text-slate">
                    We envision a future where every hospital, pharmacy, and clinic in
                    India has access to a reliable, quality-assured supply partner — where
                    procurement is effortless and product integrity is never in question.
                  </p>
                </div>
              </SectionRevealChild>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-14 sm:py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-12">
              <p className="text-editorial text-signal-teal text-base mb-3">Our values</p>
              <h2 className="text-display-lg text-ink">What drives us</h2>
            </div>
          </SectionReveal>
          <SectionReveal stagger>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((v) => (
                <SectionRevealChild key={v.title}>
                  <div className="text-center">
                    <div className="w-14 h-14 rounded-2xl bg-signal-teal/10 flex items-center justify-center mx-auto mb-4">
                      <v.icon size={28} className="text-signal-teal" strokeWidth={1.5} />
                    </div>
                    <h3 className="text-display-md !text-lg text-ink mb-2">{v.title}</h3>
                    <p className="text-body-sm text-slate">{v.description}</p>
                  </div>
                </SectionRevealChild>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-14 sm:py-20 bg-clinical-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-molecular opacity-15" />
        <div className="grain-overlay absolute inset-0 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-16">
              <p className="text-editorial text-signal-teal text-base mb-3">Our journey</p>
              <h2 className="text-display-lg text-white">Milestones</h2>
            </div>
          </SectionReveal>

          {/* Timeline items */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 sm:left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:-translate-x-px" />

            <div className="space-y-12">
              {milestones.map((m, i) => (
                <SectionReveal key={m.year}>
                  <div className={`relative flex items-start gap-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Dot */}
                    <div className="absolute left-6 sm:left-8 md:left-1/2 w-4 h-4 rounded-full bg-signal-teal border-4 border-clinical-navy transform -translate-x-2 md:-translate-x-2 mt-1" />

                    {/* Content */}
                    <div className={`ml-14 sm:ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                      <span className="text-signal-teal font-bold text-lg font-[var(--font-display)]">{m.year}</span>
                      <h3 className="text-white text-xl font-semibold mt-1 font-[var(--font-display)]">{m.title}</h3>
                      <p className="text-white/60 text-sm mt-2">{m.description}</p>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-14 sm:py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-12">
              <p className="text-editorial text-signal-teal text-base mb-3">Leadership</p>
              <h2 className="text-display-lg text-ink">Our team</h2>
            </div>
          </SectionReveal>
          <SectionReveal stagger>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              {leadership.map((l) => (
                <SectionRevealChild key={l.initials}>
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-signal-teal/20 to-mist flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-signal-teal font-[var(--font-display)]">
                        {l.initials}
                      </span>
                    </div>
                    <h3 className="text-sm font-semibold text-ink">{l.name}</h3>
                    <p className="text-xs text-slate mt-1">{l.role}</p>
                  </div>
                </SectionRevealChild>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <CTABanner
        heading="Join the AMIBA partner network"
        subheading="Discover what reliable, transparent pharmaceutical supply looks like."
      />
    </>
  );
}
