import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import GuineaPigAgeCalculatorClient from "./GuineaPigAgeCalculatorClient";

export const metadata: Metadata = buildMetadata({
  title: "Guinea Pig Age Calculator — Approximate Human-Age Equivalent",
  description:
    "Free guinea pig age calculator. Enter your guinea pig's age in years to see a general human-age equivalent and life stage. Approximate estimates only.",
  path: "/tools/guinea-pig-age-calculator",
});

export default function GuineaPigAgeCalculatorPage() {
  const schema = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Tools", url: "https://faunahub.com/tools" },
    {
      name: "Guinea Pig Age Calculator",
      url: "https://faunahub.com/tools/guinea-pig-age-calculator",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <GuineaPigAgeCalculatorClient />
    </>
  );
}
