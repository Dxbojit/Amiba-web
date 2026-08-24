export interface NavLink {
  label: string;
  href: string;
}

export const mainNav: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Quality", href: "/quality" },
  { label: "For Partners", href: "/for-partners" },
  { label: "Contact", href: "/contact" },
];

export const footerNav = {
  products: [
    { label: "All Products", href: "/products" },
    { label: "Gastrointestinal", href: "/products?category=Gastrointestinal" },
    { label: "Cardiovascular", href: "/products?category=Cardiovascular" },
    { label: "Vitamins & Supplements", href: "/products?category=Vitamins+%26+Supplements" },
    { label: "Respiratory & Allergy", href: "/products?category=Respiratory+%26+Allergy" },
    { label: "Gout & Hyperuricemia", href: "/products?category=Gout+%26+Hyperuricemia" },
  ],
  company: [
    { label: "About AMIBA", href: "/about" },
    { label: "Quality & Certifications", href: "/quality" },
    { label: "For Partners", href: "/for-partners" },
    { label: "FAQs", href: "/faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/legal/privacy" },
    { label: "Terms of Use", href: "/legal/terms" },
  ],
};
