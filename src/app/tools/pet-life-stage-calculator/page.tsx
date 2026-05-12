import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import PetLifeStageCalculatorClient from "./PetLifeStageCalculatorClient";

export const metadata: Metadata = buildMetadata({
  title: "Pet Life Stage Calculator — Life Stage & Care Focus by Species",
  description:
    "Free cross-species pet life stage calculator. Enter species and age (with size for dogs) to estimate life stage, human-age range, and general care focus.",
  path: "/tools/pet-life-stage-calculator",
});

export default function PetLifeStageCalculatorPage() {
  const schema = breadcrumbSchema([
    { name: "Home", url: "https://faunahub.com" },
    { name: "Tools", url: "https://faunahub.com/tools" },
    {
      name: "Pet Life Stage Calculator",
      url: "https://faunahub.com/tools/pet-life-stage-calculator",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <PetLifeStageCalculatorClient />
    </>
  );
}
