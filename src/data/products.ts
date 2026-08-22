export interface Product {
  slug: string;
  name: string;
  category: string;
  shortDescription: string;
  longDescription: string;
  composition: string;
  packSize: string;
  moq: string;
  storageConditions: string;
  shelfLife: string;
  certifications: string[];
  image: string;
  relatedSlugs: string[];
}

export const categories = [
  "All",
  "Analgesics",
  "Antibiotics",
  "Chronic Care",
  "PPE",
  "Diagnostic Devices",
  "Surgical Consumables",
  "Essential / OTC",
] as const;

export type Category = (typeof categories)[number];

export const products: Product[] = [
  {
    slug: "paracetamol-500mg-tablets",
    name: "Paracetamol 500mg Tablets",
    category: "Analgesics",
    shortDescription:
      "WHO-essential analgesic and antipyretic. High-purity formulation with verified bioequivalence for institutional dispensing.",
    longDescription:
      "AMIBA Paracetamol 500mg Tablets are manufactured under strict GMP conditions to ensure consistent potency and dissolution profiles across every batch. Each tablet contains 500mg of paracetamol (acetaminophen) formulated for rapid onset of action. Designed for institutional bulk dispensing in hospitals, clinics, and pharmacy chains across India. Every production run undergoes rigorous quality testing including dissolution testing, content uniformity, and stability studies.",
    composition: "Paracetamol IP 500mg",
    packSize: "10 x 10 tablets (strip pack)",
    moq: "100 boxes",
    storageConditions: "Store below 25°C in a dry place, protected from light",
    shelfLife: "36 months from date of manufacture",
    certifications: ["GMP", "WHO-GMP", "CDSCO Approved"],
    image: "/images/products/paracetamol.jpg",
    relatedSlugs: ["amoxicillin-500mg-capsules", "ors-zinc-sachets"],
  },
  {
    slug: "amoxicillin-500mg-capsules",
    name: "Amoxicillin 500mg Capsules",
    category: "Antibiotics",
    shortDescription:
      "Broad-spectrum penicillin-type antibiotic for bacterial infections. GMP-certified with full DCGI regulatory compliance.",
    longDescription:
      "AMIBA Amoxicillin 500mg Capsules deliver reliable broad-spectrum antibiotic therapy for a wide range of bacterial infections. Manufactured in WHO-GMP certified facilities, each capsule contains 500mg of amoxicillin trihydrate equivalent to 500mg of amoxicillin. Our strict quality protocols ensure consistent bioavailability and antimicrobial efficacy. Ideal for hospital formularies and pharmacy stocking programs requiring documented supply chain integrity.",
    composition: "Amoxicillin Trihydrate IP eq. to Amoxicillin 500mg",
    packSize: "10 x 10 capsules (blister pack)",
    moq: "50 boxes",
    storageConditions: "Store below 25°C in a dry place, protected from moisture",
    shelfLife: "24 months from date of manufacture",
    certifications: ["GMP", "WHO-GMP", "CDSCO Approved", "ISO 9001"],
    image: "/images/products/amoxicillin.jpg",
    relatedSlugs: ["paracetamol-500mg-tablets", "wound-care-dressing-kit"],
  },
  {
    slug: "insulin-glargine-injection",
    name: "Insulin Glargine Injection",
    category: "Chronic Care",
    shortDescription:
      "Long-acting basal insulin analog for diabetes management. Cold-chain verified from production through last-mile delivery.",
    longDescription:
      "AMIBA Insulin Glargine Injection provides long-acting basal insulin coverage for patients with Type 1 and Type 2 diabetes mellitus. Each pre-filled pen delivers 100 IU/mL of insulin glargine, engineered for a smooth 24-hour glycemic profile with no pronounced peak. Our end-to-end cold-chain logistics ensure product integrity from our temperature-controlled warehouse to your pharmacy shelf. Every batch comes with complete temperature exposure documentation.",
    composition: "Insulin Glargine 100 IU/mL (rDNA origin)",
    packSize: "5 × 3mL pre-filled pens per box",
    moq: "20 boxes",
    storageConditions: "Refrigerate at 2°C–8°C. Do not freeze. After opening, store below 30°C for up to 28 days.",
    shelfLife: "24 months from date of manufacture (unopened, refrigerated)",
    certifications: ["GMP", "WHO-GMP", "CDSCO Approved", "Cold Chain Certified"],
    image: "/images/products/insulin-glargine.jpg",
    relatedSlugs: ["digital-infrared-thermometer", "nitrile-surgical-gloves"],
  },
  {
    slug: "surgical-n95-respirators",
    name: "Surgical N95 Respirators",
    category: "PPE",
    shortDescription:
      "BIS-certified N95 particulate respirators with fluid resistance. Individual lot testing with filtration efficiency ≥95%.",
    longDescription:
      "AMIBA Surgical N95 Respirators provide healthcare workers with reliable respiratory protection against airborne particulates and fluid splash. Each respirator meets BIS IS 9473:2002 standards with a minimum filtration efficiency of 95% for 0.3 micron particles. The anatomically contoured design with adjustable nose clip and headband straps ensures a secure seal and all-day comfort. Individually lot-tested and packaged in sealed boxes of 50 units for institutional procurement.",
    composition: "Multi-layer melt-blown polypropylene with fluid-resistant outer layer",
    packSize: "Box of 50 units",
    moq: "40 boxes",
    storageConditions: "Store in a clean, dry environment at ambient temperature",
    shelfLife: "60 months from date of manufacture",
    certifications: ["BIS Certified", "NIOSH Equivalent", "ISO 13485"],
    image: "/images/products/n95-respirators.jpg",
    relatedSlugs: ["nitrile-surgical-gloves", "wound-care-dressing-kit"],
  },
  {
    slug: "digital-infrared-thermometer",
    name: "Digital Non-Contact Infrared Thermometer",
    category: "Diagnostic Devices",
    shortDescription:
      "Medical-grade IR thermometer with ±0.2°C accuracy. CE and FDA registered for clinical screening applications.",
    longDescription:
      "The AMIBA Digital Non-Contact Infrared Thermometer enables rapid temperature screening without physical contact — essential for infection control protocols in hospitals and clinics. With a measurement accuracy of ±0.2°C and a response time under 1 second, it supports high-throughput screening scenarios. Features include a backlit LCD display, fever alarm, 32-reading memory, and automatic power-off. Each unit ships factory-calibrated with a certificate of conformity.",
    composition: "Infrared sensor module, LCD display, ABS housing",
    packSize: "1 unit per box with batteries and manual",
    moq: "25 units",
    storageConditions: "Store at 10°C–40°C, 15–85% RH, avoid direct sunlight",
    shelfLife: "Operational life: 5+ years with battery replacement",
    certifications: ["CE Marked", "FDA Registered", "ISO 13485"],
    image: "/images/products/infrared-thermometer.jpg",
    relatedSlugs: ["surgical-n95-respirators", "nitrile-surgical-gloves"],
  },
  {
    slug: "nitrile-surgical-gloves",
    name: "Nitrile Disposable Surgical Gloves",
    category: "Surgical Consumables",
    shortDescription:
      "Powder-free, latex-free nitrile examination gloves. AQL 1.5 with superior tactile sensitivity for clinical procedures.",
    longDescription:
      "AMIBA Nitrile Disposable Surgical Gloves offer a latex-free, powder-free solution for clinical examinations and surgical procedures. Manufactured with an AQL (Acceptable Quality Level) of 1.5, each glove undergoes individual inspection for pinhole integrity. The micro-textured fingertip surface provides superior grip even in wet conditions, while the 4-mil thickness balances protection with tactile sensitivity. Available in sizes S, M, L, and XL.",
    composition: "100% nitrile butadiene rubber (NBR), powder-free",
    packSize: "Box of 100 gloves (available in S / M / L / XL)",
    moq: "50 boxes",
    storageConditions: "Store in a cool, dry place away from direct sunlight and ozone sources",
    shelfLife: "48 months from date of manufacture",
    certifications: ["CE Marked", "FDA 510(k)", "ISO 11193", "EN 455"],
    image: "/images/products/nitrile-gloves.jpg",
    relatedSlugs: ["surgical-n95-respirators", "wound-care-dressing-kit"],
  },
  {
    slug: "ors-zinc-sachets",
    name: "ORS + Zinc Sachets",
    category: "Essential / OTC",
    shortDescription:
      "WHO-formula ORS with zinc supplementation. Essential medicine for diarrheal disease management in institutional settings.",
    longDescription:
      "AMIBA ORS + Zinc Sachets combine the WHO-recommended Oral Rehydration Salt formula with zinc gluconate supplementation in a convenient dual-sachet format. Each unit contains one ORS sachet (to be dissolved in 1L of clean water) and one zinc dispersible tablet (20mg). This combination therapy is the gold-standard treatment for acute diarrheal disease, reducing duration and severity while preventing dehydration. Packaged in cases of 100 units for hospital and PHC stocking.",
    composition: "ORS: Sodium Chloride, Potassium Chloride, Sodium Citrate, Dextrose Anhydrous. Zinc: Zinc Gluconate 20mg dispersible tablet",
    packSize: "Case of 100 dual sachets",
    moq: "30 cases",
    storageConditions: "Store below 30°C in a dry place, protected from moisture",
    shelfLife: "24 months from date of manufacture",
    certifications: ["GMP", "WHO Essential Medicine", "CDSCO Approved"],
    image: "/images/products/ors-zinc.jpg",
    relatedSlugs: ["paracetamol-500mg-tablets", "amoxicillin-500mg-capsules"],
  },
  {
    slug: "wound-care-dressing-kit",
    name: "Advanced Wound Care Dressing Kit",
    category: "Surgical Consumables",
    shortDescription:
      "Sterile multi-layer wound management kit with antimicrobial barrier. Individually sealed for operating theatre use.",
    longDescription:
      "The AMIBA Advanced Wound Care Dressing Kit is a comprehensive sterile solution for post-surgical and traumatic wound management. Each kit contains a primary antimicrobial contact layer (silver-ion impregnated), a secondary absorbent pad, a conformable bandage, and medical adhesive tape. The multi-layer design promotes moist wound healing while providing an effective bacterial barrier. Every kit is individually sealed, gamma-sterilized, and lot-traceable. Designed for use in operating theatres, ICUs, and emergency departments.",
    composition: "Silver-ion antimicrobial contact layer, absorbent cellulose pad, elastic conforming bandage, hypoallergenic adhesive tape",
    packSize: "Box of 25 individually sealed kits",
    moq: "20 boxes",
    storageConditions: "Store in a clean, dry environment at 15°C–30°C. Do not use if sterile barrier is compromised.",
    shelfLife: "36 months from date of manufacture",
    certifications: ["CE Marked", "ISO 13485", "Gamma Sterilized", "CDSCO Approved"],
    image: "/images/products/wound-care-kit.jpg",
    relatedSlugs: ["nitrile-surgical-gloves", "surgical-n95-respirators"],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getRelatedProducts(product: Product): Product[] {
  return product.relatedSlugs
    .map((slug) => getProductBySlug(slug))
    .filter((p): p is Product => p !== undefined);
}

export function getProductsByCategory(category: string): Product[] {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
}
