import type { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about AMIBA Healthcare — our journey, mission, and commitment to providing quality pharmaceutical and medical supplies across India.",
};

export default function AboutPage() {
  redirect("/about/our-journey");
}
