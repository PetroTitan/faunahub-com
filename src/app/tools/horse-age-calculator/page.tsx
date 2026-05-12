import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import HorseAgeCalculatorClient from "./HorseAgeCalculatorClient";

export const metadata: Metadata = buildMetadata({
  title: "Horse Age Calculator — Approximate Human-Age Equivalent",
  description:
    "Free horse age calculator. Convert your horse's age to a general human-age equivalent and life stage. Approximate estimates only — not a veterinary assessment.",
  path: "/tools/horse-age-calculator",
});

export default function HorseAgeCalculatorPage() {
  const schema = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Tools", url: "https://faunahub.com/tools" },
    { name: "Horse Age Calculator", url: "https://faunahub.com/tools/horse-age-calculator" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HorseAgeCalculatorClient />
    </>
  );
}
