import type { Metadata } from "next";
import DecisionHub from "@/components/pet-choice/DecisionHub";
import BreedProfileGrid from "@/components/breeds/BreedProfileGrid";
import BreedDirectory from "@/components/breeds/BreedDirectory";
import BreedDiscovery from "@/components/breeds/BreedDiscovery";
import RelatedLinks from "@/components/RelatedLinks";
import { getDecisionsByKind } from "@/lib/pet-choice/data";
import { CAT_BREED_RECORDS } from "@/lib/pet-intelligence";
import { buildMetadata } from "@/lib/metadata";

/**
 * How many image cards the hub renders.
 *
 * Kept small on purpose: each card is a `next/image`, so an unbounded grid puts
 * one image element per breed into the initial HTML. Every breed stays
 * reachable through the plain-text A-Z directory underneath.
 */
const FEATURED_CARDS = 24;

const LAST_UPDATED = "2026-05-22";


export const metadata: Metadata = buildMetadata({
  title: "Cat Breed Center — Profiles, Registry Facts & Decision Guides",
  description:
    "Every cat breed profile on FaunaHub, with registry recognition, published measurements and coat data, plus cautious decision guides for apartments, families and first-time owners.",
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
      h1="Cat Breed Center"
      intro="Every cat breed FaunaHub publishes, each with registry-sourced recognition and measurements alongside a written overview. Below the breed profiles are decision guides that organise breed thinking by household intent. Breed tendencies are not guarantees — individual animals vary."
      decisionPages={decisions}
      hubFaqs={HUB_FAQS}
      faqTitle="Cat Breeds — Frequently Asked Questions"
      lastUpdated={LAST_UPDATED}
      leadSection={
        <>
          <BreedProfileGrid
            species="cat"
            breeds={CAT_BREED_RECORDS}
            limit={FEATURED_CARDS}
            heading="Breed profiles"
          />
          <BreedDiscovery species="cat" />
          <BreedDirectory species="cat" breeds={CAT_BREED_RECORDS} />
        </>
      }
      extraSection={
        <>
          <div className="mt-10">
            <RelatedLinks
              title="Filter by what is actually recorded"
              links={[
                {
                  label: "Cat Breed Finder",
                  href: "/cats/breed-finder",
                  description:
                    "Filter the breed registry on attributes FaunaHub can source. The Finder states which filters it cannot offer, and why.",
                },
              ]}
            />
          </div>
          <div className="mt-10">
            <RelatedLinks
              title="Bringing home a kitten?"
              links={[
                {
                  label: "New kitten care foundation",
                  href: "/kitten-care",
                  description: "First weeks, vet planning, feeding, litter setup, and safety",
                },
                {
                  label: "Pet adoption readiness quiz",
                  href: "/tools/pet-adoption-readiness-quiz",
                  description: "A privacy-safe readiness check before you adopt",
                },
              ]}
            />
          </div>
        </>
      }
    />
  );
}
