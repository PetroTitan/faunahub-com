import type { Metadata } from "next";
import DecisionHub from "@/components/pet-choice/DecisionHub";
import BreedProfileGrid from "@/components/breeds/BreedProfileGrid";
import { getDecisionsByKind } from "@/lib/pet-choice/data";
import { buildMetadata } from "@/lib/metadata";

const LAST_UPDATED = "2026-05-22";

const CAT_BREED_PROFILES = [
  { name: "Maine Coon", slug: "maine-coon" },
  { name: "Siamese", slug: "siamese" },
  { name: "British Shorthair", slug: "british-shorthair" },
  { name: "Persian", slug: "persian-cat" },
  { name: "Ragdoll", slug: "ragdoll" },
  { name: "Bengal", slug: "bengal-cat" },
];

export const metadata: Metadata = buildMetadata({
  title: "Cat Breed Decision Guides — Apartments, First-Time Owners & Families",
  description:
    "Cautious, practical cat breed decision pages — apartment-friendly, first-time-owner, low-maintenance, and family-friendly cat breeds.",
  path: "/cats/breeds",
});

const HUB_FAQS = [
  {
    question: "Is breed really the main thing to consider in a cat?",
    answer:
      "No. Individual personality, age at adoption, early socialisation, health, and environment usually matter more than breed. Breed gives a starting point for tendencies; the specific cat is the real decision.",
  },
  {
    question: "Should I adopt a kitten or an adult cat?",
    answer:
      "Adult cats from reputable shelters have observable personalities and are often a calmer choice for first-time owners. Kittens need more supervision and play during their first year but build longer shared history.",
  },
  {
    question: "Are 'hypoallergenic' cats real?",
    answer:
      "No truly hypoallergenic cat exists. Some breeds may be tolerated by some allergic people, but reactions vary individually. Spend time with the specific cat before adopting.",
  },
  {
    question: "What pairs well with these pages?",
    answer:
      "Try the Pet Breed Selector tool to surface the right page for your household, then use the cat age calculator and pet life stage calculator to plan care across life stages.",
  },
];

export default function CatBreedsHub() {
  const decisions = getDecisionsByKind("cat-breed");
  return (
    <DecisionHub
      parentHub="/cats/breeds"
      hubLabel="Cat Breeds"
      parentPath="/cats"
      parentLabel="Cats"
      h1="Cat Breed Decision Guides"
      intro="Practical pages that organise cat breed thinking by household intent — apartment, first-time owner, low-maintenance, and family situations. Every page uses cautious framing and emphasises that mixed-breed shelter cats with observable temperaments are often the most practical match."
      decisionPages={decisions}
      hubFaqs={HUB_FAQS}
      faqTitle="Cat Breeds — Frequently Asked Questions"
      lastUpdated={LAST_UPDATED}
      extraSection={
        <BreedProfileGrid species="cat" breeds={CAT_BREED_PROFILES} />
      }
    />
  );
}
