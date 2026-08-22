export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQCategory {
  category: string;
  items: FAQItem[];
}

export const faqData: FAQCategory[] = [
  {
    category: "Ordering",
    items: [
      {
        question: "How do I place an order with AMIBA?",
        answer:
          "AMIBA operates through a dedicated B2B ordering platform separate from this website. To get started, submit a quote request through our Contact page. Once your business credentials are verified, our account team will set up your ordering access and walk you through the platform.",
      },
      {
        question: "What are the minimum order quantities (MOQs)?",
        answer:
          "MOQs vary by product category and are designed for institutional buyers. Pharmaceutical products typically start at 20–100 boxes, while surgical consumables and PPE start at 20–50 boxes. Specific MOQs are listed on each product page. For custom quantities, contact your account manager.",
      },
      {
        question: "Can I request samples before placing a bulk order?",
        answer:
          "Yes. We offer evaluation samples for qualified institutional buyers. Sample requests are subject to business verification and may require a nominal handling fee. Contact our sales team with your Drug License and GST details to request samples.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept bank transfers (NEFT/RTGS), demand drafts, and approved credit terms for established accounts. Payment terms are discussed during the onboarding process and may vary based on order volume and credit history.",
      },
    ],
  },
  {
    category: "Licensing & Verification",
    items: [
      {
        question: "Do I need a Drug License to order from AMIBA?",
        answer:
          "Yes. As a B2B pharmaceutical wholesaler, we are legally required to verify that all buyers hold a valid Drug License (Form 20/21) issued by the relevant State Drug Controller. This is verified during the account registration process.",
      },
      {
        question: "What documents are required for account registration?",
        answer:
          "You will need to provide: a valid Drug License (Form 20 or 21), GST Registration Certificate, PAN Card of the business entity, and a signed purchase authorization letter on your company letterhead. Our team will guide you through the documentation process.",
      },
      {
        question: "How long does the verification process take?",
        answer:
          "Business verification typically takes 2–3 working days once all required documents are submitted. For urgent requirements, contact our sales team to expedite the process.",
      },
    ],
  },
  {
    category: "Logistics & Delivery",
    items: [
      {
        question: "What is the typical delivery timeline?",
        answer:
          "Standard delivery timelines range from 3–7 working days for metro and Tier-1 cities, and 5–10 working days for Tier-2/3 locations. Cold-chain products may require additional transit planning. Expedited shipping is available for urgent orders at an additional cost.",
      },
      {
        question: "How do you handle cold-chain products?",
        answer:
          "Temperature-sensitive products (e.g., Insulin Glargine) are shipped in validated insulated containers with calibrated temperature data loggers. You receive a temperature exposure report with every cold-chain delivery, documenting that the product remained within the specified range throughout transit.",
      },
      {
        question: "Do you deliver pan-India?",
        answer:
          "Yes. AMIBA has logistics partnerships covering all states and union territories across India. We serve metro cities, Tier-1/2/3 cities, and select rural healthcare facilities. Coverage maps and estimated delivery times for your region are available on request.",
      },
    ],
  },
  {
    category: "Returns & Compliance",
    items: [
      {
        question: "What is your returns policy?",
        answer:
          "We accept returns for damaged, defective, or incorrectly shipped products within 7 days of delivery. All returns must be reported through your account manager with photographic evidence. Near-expiry returns are handled per the terms agreed in your supply contract.",
      },
      {
        question: "How do you ensure product quality and authenticity?",
        answer:
          "Every product in the AMIBA catalog is sourced directly from licensed manufacturers with valid GMP/WHO-GMP certification. We maintain complete batch traceability from manufacturer to end-buyer. Certificates of Analysis (CoA) are available for every batch on request.",
      },
      {
        question: "Are your products covered by regulatory recalls?",
        answer:
          "Yes. AMIBA maintains a post-market surveillance system aligned with CDSCO directives. In the event of a manufacturer-initiated or regulatory recall, affected buyers are notified immediately and we facilitate product retrieval and replacement at no additional cost.",
      },
    ],
  },
];
