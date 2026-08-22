export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  organization: string;
}

/* TODO: REPLACE — Swap these placeholder testimonials with real partner quotes before launch */
export const testimonials: Testimonial[] = [
  {
    quote:
      "AMIBA has been an exceptionally reliable supply partner for our 12-location pharmacy chain. Their batch documentation and cold-chain protocols are best-in-class — we've never had a compliance issue.",
    author: "Dr. Rajesh Menon",
    role: "Head of Procurement",
    organization: "LifeCare Pharmacy Group",
  },
  {
    quote:
      "What sets AMIBA apart is their dedicated account management. Our rep understands hospital formulary cycles and proactively ensures we never face stockout situations on critical medications.",
    author: "Sunita Patel",
    role: "Chief Pharmacist",
    organization: "Metro City General Hospital",
  },
  {
    quote:
      "We switched to AMIBA for surgical consumables last year and the quality consistency has been outstanding. Every shipment arrives with complete lot traceability and test certificates.",
    author: "Anand Krishnamurthy",
    role: "Materials Manager",
    organization: "Sterling Multispecialty Hospital",
  },
  {
    quote:
      "The transparent bulk pricing model was a game-changer for our rural health centres. No hidden costs, no surprises — just reliable medicines at institutional rates.",
    author: "Dr. Meera Shankar",
    role: "Program Director",
    organization: "District Health Mission, Karnataka",
  },
  {
    quote:
      "AMIBA's insulin supply chain is exactly what we needed for our diabetes care programme. Temperature-logged deliveries with real-time tracking give us total confidence in product integrity.",
    author: "Vikram Desai",
    role: "Supply Chain Head",
    organization: "Priya Diabetes Foundation",
  },
  {
    quote:
      "From order placement to delivery, AMIBA's process is seamless. Their digital platform makes reordering effortless, and their customer support team is genuinely responsive.",
    author: "Fatima Begum",
    role: "Owner & Pharmacist",
    organization: "Al-Shifa Medical Store",
  },
];
