"use client";

import { products } from "@/data/products";
import { ProductCard } from "@/components/products/product-card";
import {
  SectionReveal,
  SectionRevealChild,
} from "@/components/shared/section-reveal";

export function FeaturedProducts() {
  return (
    <section className="py-24 bg-paper">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <p className="text-editorial text-signal-teal text-base mb-3">
              Our catalog
            </p>
            <h2 className="text-display-lg text-ink mb-4">
              Pharmaceutical & Medical Products
            </h2>
            <p className="text-body-lg text-slate max-w-2xl mx-auto">
              A tightly curated selection of GMP-certified pharmaceuticals,
              surgical consumables, and diagnostic devices for institutional
              buyers.
            </p>
          </div>
        </SectionReveal>

        <SectionReveal stagger>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <SectionRevealChild key={product.slug}>
                <ProductCard product={product} />
              </SectionRevealChild>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
