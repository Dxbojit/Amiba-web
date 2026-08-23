"use client";

import { Shield, Globe, Award, FileCheck } from "lucide-react";
import { certifications } from "@/data/certifications";

export function TrustBar() {
  const badges = certifications.slice(0, 5);

  return (
    <section className="py-8 sm:py-12 bg-paper border-b border-mist">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-8">
          {/* Trust statement */}
          <p className="text-slate text-sm text-center md:text-left">
            {/* TODO: REPLACE — Use real numbers when available */}
            Supplying to <span className="font-semibold text-ink">500+</span>{" "}
            pharmacies and hospitals across India
          </p>

          {/* Certification badges */}
          <div className="flex items-center gap-6 overflow-x-auto pb-2">
            {badges.map((cert) => (
              <div
                key={cert.abbreviation}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-mist/50 border border-mist flex-shrink-0"
              >
                <Shield size={14} className="text-signal-teal" />
                <span className="text-xs font-medium text-ink whitespace-nowrap">
                  {cert.abbreviation}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
