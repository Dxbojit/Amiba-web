"use client";

import { useState } from "react";
import { products, categories, getProductsByCategory } from "@/data/products";
import { ProductCard } from "@/components/products/product-card";
import {
  SectionReveal,
  SectionRevealChild,
} from "@/components/shared/section-reveal";
import { motion } from "framer-motion";

export function ProductGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = getProductsByCategory(activeCategory);

  return (
    <div>
      {/* Filter pills */}
      <div className="flex gap-2 mb-8 sm:mb-12 overflow-x-auto pb-2 sm:flex-wrap sm:justify-center sm:overflow-visible -mx-4 px-4 sm:mx-0 sm:px-0 w-full max-w-full min-w-0">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex-shrink-0 whitespace-nowrap ${
              activeCategory === cat
                ? "bg-signal-teal text-white shadow-md"
                : "bg-mist/50 text-slate hover:bg-mist hover:text-ink"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {filtered.map((product) => (
          <motion.div
            key={product.slug}
            layout
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <ProductCard product={product} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
