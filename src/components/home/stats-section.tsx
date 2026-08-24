"use client";

import { StatCounter } from "@/components/shared/stat-counter";

export function StatsSection() {
  /* TODO: REPLACE — Use real numbers when available */
  const stats = [
    { value: 100, suffix: "+", label: "Partner Institutions" },
    { value: 8, suffix: "", label: "Product Categories" },
    { value: 99, suffix: "%", label: "Order Fulfillment Rate" },
    { value: 10, suffix: "+", label: "States Covered" },
  ];

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-clinical-navy" />
      <div className="absolute inset-0 bg-molecular opacity-20" />
      <div className="grain-overlay absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-12">
          {stats.map((stat) => (
            <StatCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
