export interface Certification {
  name: string;
  abbreviation: string;
  description: string;
  icon: string; // lucide icon name
}

export const certifications: Certification[] = [
  {
    name: "Good Manufacturing Practice",
    abbreviation: "GMP",
    description:
      "All AMIBA pharmaceutical products are manufactured in facilities that comply with Schedule M of the Drugs and Cosmetics Act, ensuring consistent quality across every production batch. Our GMP protocols cover raw material sourcing, in-process quality control, finished product testing, and environmental monitoring.",
    icon: "Shield",
  },
  {
    name: "WHO Good Manufacturing Practice",
    abbreviation: "WHO-GMP",
    description:
      "Our manufacturing partners hold WHO-GMP certification, the international gold standard for pharmaceutical production quality. This ensures our products meet the same rigorous standards required by global procurement agencies including UNICEF and WHO Essential Medicines programmes.",
    icon: "Globe",
  },
  {
    name: "CDSCO / DCGI Regulatory Compliance",
    abbreviation: "CDSCO",
    description:
      "Every pharmaceutical product in the AMIBA catalog carries valid manufacturing and marketing licenses issued under the Drugs and Cosmetics Act, 1940 and the rules thereunder. We maintain current Drug License numbers for all formulations and ensure ongoing compliance with CDSCO directives and DCGI notifications.",
    icon: "FileCheck",
  },
];
