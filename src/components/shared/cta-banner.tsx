import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTABannerProps {
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function CTABanner({
  heading = "Ready to stock with AMIBA?",
  subheading = "Join hundreds of healthcare institutions that trust AMIBA for their pharmaceutical and medical supply needs.",
  ctaText = "Request a Quote",
  ctaHref = "/contact",
}: CTABannerProps) {
  return (
    <section className="relative py-14 sm:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-pulse-coral to-[#ff8a6a]" />
      <div className="grain-overlay absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-display-lg text-white mb-4">{heading}</h2>
        <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
          {subheading}
        </p>
        <Link
          href={ctaHref}
          className="btn-capsule bg-white text-pulse-coral font-semibold hover:bg-white/90 hover:shadow-lg transition-all inline-flex items-center gap-2"
        >
          {ctaText}
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}
