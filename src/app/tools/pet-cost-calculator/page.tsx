import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import PetCostCalculatorClient from "./PetCostCalculatorClient";

export const metadata: Metadata = buildMetadata({
  title: "Pet Cost Calculator — Estimate Monthly & Annual Pet Ownership Costs",
  description:
    "Free pet cost calculator. Estimate monthly and annual costs for food, vet care, grooming, insurance, toys, and emergency funds. No registration required.",
  path: "/tools/pet-cost-calculator",
});

export default function PetCostCalculatorPage() {
  const schema = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Tools", url: "https://faunahub.com/tools" },
    { name: "Pet Cost Calculator", url: "https://faunahub.com/tools/pet-cost-calculator" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PetCostCalculatorClient />
    </>
  );
}
