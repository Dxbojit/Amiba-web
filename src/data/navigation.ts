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
    { label: "Analgesics", href: "/products?category=Analgesics" },
    { label: "Antibiotics", href: "/products?category=Antibiotics" },
    { label: "Chronic Care", href: "/products?category=Chronic+Care" },
    { label: "PPE & Devices", href: "/products?category=PPE" },
    { label: "Surgical Consumables", href: "/products?category=Surgical+Consumables" },
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
