import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quality & Compliance",
  description:
    "AMIBA's commitment to pharmaceutical quality — GMP, WHO-GMP certifications, and regulatory compliance.",
};

export default function QualityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
