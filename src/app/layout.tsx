import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/nav/navbar";
import { Footer } from "@/components/footer/footer";
import { SmoothScrollProvider } from "@/lib/smooth-scroll";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: {
    default: "AMIBA — Trusted B2B Pharmaceutical & Medical Supply Partner",
    template: "%s | AMIBA",
  },
  description:
    "AMIBA is India's trusted B2B pharmaceutical wholesaler supplying GMP-certified medicines, surgical consumables, and medical devices to hospitals, pharmacies, and healthcare institutions.",
  keywords: [
    "B2B pharma",
    "pharmaceutical wholesaler",
    "medical supplies India",
    "hospital pharmacy supplier",
    "GMP certified medicines",
    "bulk medical supplies",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "AMIBA Healthcare",
    title: "AMIBA — Trusted B2B Pharmaceutical & Medical Supply Partner",
    description:
      "GMP-certified medicines and medical supplies for hospitals, pharmacies, and healthcare institutions across India.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AMIBA — Trusted B2B Pharmaceutical & Medical Supply Partner",
    description:
      "GMP-certified medicines and medical supplies for hospitals, pharmacies, and healthcare institutions across India.",
  },
};

/* JSON-LD Organization Schema */
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AMIBA Healthcare",
  description:
    "B2B pharmaceutical wholesaler supplying GMP-certified medicines and medical supplies across India.",
  url: "https://amiba.in", // TODO: REPLACE with real domain
  logo: "https://amiba.in/logo.png", // TODO: REPLACE
  contactPoint: {
    "@type": "ContactPoint",
    // TODO: REPLACE with real phone
    telephone: "+91-12345-67890",
    contactType: "sales",
    areaServed: "IN",
    availableLanguage: ["English", "Hindi"],
  },
  address: {
    "@type": "PostalAddress",
    // TODO: REPLACE with real address
    streetAddress: "Business District",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    postalCode: "400001",
    addressCountry: "IN",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable} ${fraunces.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <SmoothScrollProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
