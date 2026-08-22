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
    name: "ISO 9001:2015 Quality Management",
    abbreviation: "ISO 9001",
    description:
      "AMIBA's supply chain operations — from vendor qualification and procurement to warehousing, distribution, and after-sales support — are certified under ISO 9001:2015. This ensures systematic process control, continuous improvement, and documented quality objectives at every stage.",
    icon: "Award",
  },
  {
    name: "CDSCO / DCGI Regulatory Compliance",
    abbreviation: "CDSCO",
    description:
      "Every pharmaceutical product in the AMIBA catalog carries valid manufacturing and marketing licenses issued under the Drugs and Cosmetics Act, 1940 and the rules thereunder. We maintain current Drug License numbers for all formulations and ensure ongoing compliance with CDSCO directives and DCGI notifications.",
    icon: "FileCheck",
  },
  {
    name: "ISO 13485 Medical Devices",
    abbreviation: "ISO 13485",
    description:
      "Our medical device and surgical consumable product lines are sourced from ISO 13485-certified manufacturers, ensuring that design controls, risk management, and post-market surveillance meet international regulatory requirements for medical devices.",
    icon: "Stethoscope",
  },
  {
    name: "CE Marking (European Conformity)",
    abbreviation: "CE",
    description:
      "Selected AMIBA products carry CE marking, indicating conformity with European health, safety, and environmental protection standards. CE-marked products in our catalog include diagnostic devices, PPE, and surgical consumables suitable for export and institutional procurement.",
    icon: "BadgeCheck",
  },
  {
    name: "Cold Chain Certification",
    abbreviation: "Cold Chain",
    description:
      "AMIBA maintains validated cold-chain logistics for temperature-sensitive products including biologics and certain diagnostics. Our cold-chain infrastructure includes temperature-monitored warehousing (2–8°C), insulated transport containers, and real-time temperature logging from dispatch to delivery.",
    icon: "Snowflake",
  },
];
