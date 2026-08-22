import { Hero } from "@/components/home/hero";
import { TrustBar } from "@/components/home/trust-bar";
import { FeaturedProducts } from "@/components/home/featured-products";
import { WhyAmiba } from "@/components/home/why-amiba";
import { StatsSection } from "@/components/home/stats-section";
import { Testimonials } from "@/components/home/testimonials";
import { CTABanner } from "@/components/shared/cta-banner";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <FeaturedProducts />
      <WhyAmiba />
      <StatsSection />
      <Testimonials />
      <CTABanner />
    </>
  );
}
