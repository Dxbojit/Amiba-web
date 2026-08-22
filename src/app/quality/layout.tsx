import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality & Compliance",
  description:
    "AMIBA's commitment to pharmaceutical quality — GMP, WHO-GMP, ISO 9001 certifications, cold-chain handling, and regulatory compliance.",
};

export default function QualityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
