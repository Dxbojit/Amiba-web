import type { Metadata } from "next";
import Image from "next/image";
import { SectionReveal, SectionRevealChild } from "@/components/shared/section-reveal";
import { CTABanner } from "@/components/shared/cta-banner";
import { Target, Eye, Heart, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about AMIBA's mission to transform B2B pharmaceutical supply in India — our story, values, and commitment to quality healthcare access.",
};



const values = [
  { icon: Target, title: "Precision", description: "Every product batch-tested. Every shipment documented. Every claim verifiable." },
  { icon: Eye, title: "Transparency", description: "Clear pricing, complete traceability, and honest communication at every touchpoint." },
  { icon: Heart, title: "Care", description: "Behind every order is a patient. We never compromise on quality or cut corners on compliance." },
  { icon: Users, title: "Partnership", description: "We don't just sell — we build long-term supply relationships that make your operations easier." },
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

      {/* Our Journey Narrative */}
      <section className="py-14 sm:py-20 bg-clinical-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-molecular opacity-15" />
        <div className="grain-overlay absolute inset-0 pointer-events-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-12">
              <p className="text-editorial text-signal-teal text-base mb-3">Our journey</p>
              <h2 className="text-display-lg text-white">A Legacy of Trust</h2>
            </div>
            
            <div className="space-y-6 text-white/80 text-lg leading-relaxed text-center sm:text-left">
              <p>
                Every meaningful journey begins with a dream—and for us, that dream has been built over decades of dedication, trust, and service.
              </p>
              <p>
                For the past 38 years, our family has been privileged to serve the community through a renowned pharmaceutical retail store and a trusted diagnostic centre. What began as a humble endeavour gradually grew through the unwavering commitment of our family, the faith of our customers, and the relationships we built along the way.
              </p>
              <p>
                These years have taught us that healthcare is not simply a business. It is a responsibility—one that demands integrity, compassion, quality, and a commitment to putting people first.
              </p>
              <p>
                Today, Amiba Pharmaceuticals represents the next chapter of that journey. It is one of our family's biggest dreams—a dream shaped by 38 years of experience, hard work, and a deep understanding of the healthcare community we serve.
              </p>
              <p>
                With Amiba, we aspire to take our family's legacy forward by contributing to the pharmaceutical industry with the same values that have guided us from the beginning: trust, quality, responsibility, and service.
              </p>
              <p>
                We know that this is not the destination, but the beginning of a new journey. And as we move forward, we remain humble and grateful for everyone who has been a part of our story.
              </p>
              
              <div className="pt-8 mt-8 border-t border-white/10 text-xl font-medium text-white text-center">
                <p>38 years of experience.</p>
                <p className="text-signal-teal my-2">One enduring commitment.</p>
                <p>A new dream—Amiba Pharmaceuticals.</p>
              </div>
              
              <p className="pt-6 text-signal-teal font-semibold text-2xl font-[var(--font-display)] text-center">
                Our journey continues.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Founders Message */}
      <section className="py-14 sm:py-20 bg-mist/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-12">
              <p className="text-editorial text-signal-teal text-base mb-3">Founders&apos; note</p>
              <h2 className="text-display-lg text-ink">A Message from the Founders</h2>
            </div>
          </SectionReveal>

          <SectionReveal>
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-sm border border-slate/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-signal-teal/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 pointer-events-none" />
              
              {/* Founder Profiles */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 mb-12 relative z-10">
                <div className="text-center">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto mb-4 bg-mist flex items-center justify-center">
                    <Image
                      src="/images/founders/manash-kr-mandal.jpg"
                      alt="Tapash Kr Mandal"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-ink">Tapash Kr Mandal</h3>
                  <p className="text-signal-teal text-sm font-medium">Founder</p>
                </div>
                
                <div className="text-center">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto mb-4 bg-mist flex items-center justify-center">
                    <Image
                      src="/images/founders/manash-mandal.png"
                      alt="Manash Kr Mandal"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-ink">Manash Kr Mandal</h3>
                  <p className="text-signal-teal text-sm font-medium">Founder</p>
                </div>
              </div>

              {/* Message Content */}
              <div className="space-y-6 text-slate text-lg leading-relaxed relative z-10">
                <p className="font-medium text-ink text-xl">Every great journey begins with a small step.</p>
                
                <p>
                  More than 35 years ago, our journey in healthcare began with hard work, determination, and a simple desire to build something meaningful.
                </p>
                
                <p>
                  One of us started his career as a Medical Representative — travelling, meeting doctors, learning the business from the ground up, facing challenges, and slowly building relationships and trust. There were no shortcuts. Every achievement came through years of dedication, persistence, and the courage to keep moving forward.
                </p>
                
                <p>
                  While one of us was constantly on the road, focused on developing the business and building its foundation, the other stood firmly behind it as the financial and operational backbone of the family and the business. Together, through different responsibilities and countless sacrifices, we built our journey step by step.
                </p>
                
                <p>
                  Today, after more than three decades in healthcare, seeing AMIBA PHARMACEUTICALS become a reality is one of the proudest moments of our lives.
                </p>
                
                <p>
                  But AMIBA is not the end of our journey. It is the beginning of a new one.
                </p>
                
                <p>
                  Our sons, Mriganka and Mrinmoy, have taken this dream forward and transformed it into a new-generation pharmaceutical venture. What we spent decades learning, they now have the opportunity to build upon — with new ideas, new energy, and a new vision.
                </p>
                
                <p>
                  And to everyone who dreams of building a career with AMIBA PHARMACEUTICALS, we want to say one thing:
                </p>
                
                <blockquote className="border-l-4 border-signal-teal pl-6 py-2 my-8 italic font-medium text-ink text-xl bg-signal-teal/5 rounded-r-lg">
                  &quot;Do not be afraid to start small.&quot;
                </blockquote>
                
                <p>
                  A career does not become successful overnight. Start with sincerity. Learn every day. Respect your work. Build relationships. Accept failures. Stay consistent. And never underestimate what years of honest hard work can achieve.
                </p>
                
                <p>
                  One of us began as a Medical Representative. Today, we are founders of a pharmaceutical company.
                </p>
                
                <p className="font-medium text-ink">
                  Your starting point does not decide your destination. Your dedication does.
                </p>
                
                <p>
                  We want AMIBA to be more than a workplace. We want it to be a place where young professionals can learn, grow, take responsibility, dream bigger, and build something they can be proud of.
                </p>
                
                <p className="font-medium text-ink">
                  Our dream has come true.
                </p>
                
                <p className="font-medium text-ink mb-12">
                  Now, we want to build the future together with you.
                </p>
                
                <div className="pt-8 border-t border-slate/10">
                  <p className="text-base text-slate mb-6">With gratitude, pride, and hope for the journey ahead,</p>
                  
                  <div className="font-[var(--font-display)]">
                    <p className="text-2xl font-bold text-ink mb-1">— Tapash Kr Mandal & Manash Kr Mandal</p>
                    <p className="text-signal-teal font-medium uppercase tracking-widest text-sm mb-6">AMIBA PHARMACEUTICALS</p>
                  </div>
                  
                  <p className="text-sm font-medium text-slate uppercase tracking-wider">
                    35+ years of experience. <span className="text-signal-teal">•</span> One new generation. <span className="text-signal-teal">•</span> One shared vision. <span className="text-signal-teal">•</span> A future built together.
                  </p>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Next Generation Leadership */}
      <section className="py-14 sm:py-20 bg-paper">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="text-center mb-12">
              <p className="text-editorial text-signal-teal text-base mb-3">Leadership</p>
              <h2 className="text-display-lg text-ink">The Next Generation</h2>
            </div>
          </SectionReveal>
          <SectionReveal stagger>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-12 sm:gap-24">
              <SectionRevealChild>
                <div className="text-center">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto mb-4 bg-mist flex items-center justify-center">
                    <Image
                      src="/images/founders/mriganka-mandal.jpg"
                      alt="Mriganka Mandal"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-lg text-ink">Mriganka Mandal</h3>
                  <p className="text-signal-teal text-sm font-medium">Director (B.D)</p>
                </div>
              </SectionRevealChild>
              
              <SectionRevealChild>
                <div className="text-center">
                  <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-md mx-auto mb-4 bg-gradient-to-br from-signal-teal/20 to-mist flex items-center justify-center">
                    <span className="text-4xl font-bold text-signal-teal font-[var(--font-display)]">
                      MM
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-ink">Mrinmoy Mandal</h3>
                  <p className="text-signal-teal text-sm font-medium">Director (B.O)</p>
                </div>
              </SectionRevealChild>
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
