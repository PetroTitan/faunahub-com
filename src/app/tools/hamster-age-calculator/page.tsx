import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import HamsterAgeCalculatorClient from "./HamsterAgeCalculatorClient";

export const metadata: Metadata = buildMetadata({
  title: "Hamster Age Calculator — Approximate Human-Age Equivalent",
  description:
    "Free hamster age calculator. Enter your hamster's age in months and select Syrian or dwarf to estimate a general human-age equivalent. Approximate only.",
  path: "/tools/hamster-age-calculator",
});

export default function HamsterAgeCalculatorPage() {
  const schema = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Tools", url: "https://faunahub.com/tools" },
    { name: "Hamster Age Calculator", url: "https://faunahub.com/tools/hamster-age-calculator" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HamsterAgeCalculatorClient />
    </>
  );
}
