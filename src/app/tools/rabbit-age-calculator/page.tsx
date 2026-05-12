import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import RabbitAgeCalculatorClient from "./RabbitAgeCalculatorClient";

export const metadata: Metadata = buildMetadata({
  title: "Rabbit Age Calculator — Approximate Human-Age Equivalent",
  description:
    "Free rabbit age calculator. Enter your rabbit's age in years to see an approximate human-age equivalent and general life stage. Estimates only.",
  path: "/tools/rabbit-age-calculator",
});

export default function RabbitAgeCalculatorPage() {
  const schema = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Tools", url: "https://faunahub.com/tools" },
    { name: "Rabbit Age Calculator", url: "https://faunahub.com/tools/rabbit-age-calculator" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <RabbitAgeCalculatorClient />
    </>
  );
}
