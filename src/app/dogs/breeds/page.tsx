import type { Metadata } from "next";
import DecisionHub from "@/components/pet-choice/DecisionHub";
import BreedProfileGrid from "@/components/breeds/BreedProfileGrid";
import RelatedLinks from "@/components/RelatedLinks";
import { getDecisionsByKind } from "@/lib/pet-choice/data";
import { DOG_BREED_RECORDS } from "@/lib/pet-intelligence";
import { buildMetadata } from "@/lib/metadata";

const LAST_UPDATED = "2026-05-22";


export const metadata: Metadata = buildMetadata({
  title: "Dog Breed Center — Profiles, Registry Facts & Decision Guides",
  description:
    "Every dog breed profile on FaunaHub, with registry recognition, published measurements and coat data, plus cautious decision guides for apartments, families and first-time owners.",
  path: "/dogs/breeds",
});

const HUB_FAQS = [
  {
    question: "How accurate are 'best dogs for X' lists?",
    answer:
      "Lists describe breed tendencies, not guarantees. Individual dogs vary by genetics, training, socialisation, and environment. Use these pages as starting points and meet specific dogs before deciding.",
  },
  {
    question: "Should I choose a breed or adopt from a shelter?",
    answer:
      "Both can work. Reputable shelters often have small adult dogs with observable temperaments, which is helpful when matching a dog to your home. Reputable breeders are another option; avoid pet-store or unregulated sources.",
  },
  {
    question: "Are 'hypoallergenic' dogs real?",
    answer:
      "No truly hypoallergenic dog exists. Some breeds shed less, but allergens also come from skin and saliva. Spend time with a specific dog before adopting if allergies are a concern.",
  },
  {
    question: "How do I narrow down further?",
    answer:
      "Try the Pet Breed Selector tool, then talk to a reputable shelter, breeder, or veterinarian about realistic next steps. The pages here pair well with the dog age calculator and pet life stage calculator.",
  },
];

export default function DogBreedsHub() {
  const decisions = getDecisionsByKind("dog-breed");
  return (
    <DecisionHub
      parentHub="/dogs/breeds"
      hubLabel="Dog Breeds"
      parentPath="/dogs"
      parentLabel="Dogs"
      h1="Dog Breed Center"
      intro="Every dog breed FaunaHub publishes, each with registry-sourced recognition and measurements alongside a written overview. Below the breed profiles are decision guides that organise breed thinking by household intent. Breed tendencies are not guarantees — individual animals vary."
      decisionPages={decisions}
      hubFaqs={HUB_FAQS}
      faqTitle="Dog Breeds — Frequently Asked Questions"
      lastUpdated={LAST_UPDATED}
      leadSection={<BreedProfileGrid species="dog" breeds={DOG_BREED_RECORDS} />}
      extraSection={
        <>
          <div className="mt-10">
            <RelatedLinks
              title="Filter by what is actually recorded"
              links={[
                {
                  label: "Dog Breed Finder",
                  href: "/dogs/breed-finder",
                  description:
                    "Filter the breed registry on attributes FaunaHub can source. The Finder states which filters it cannot offer, and why.",
                },
              ]}
            />
          </div>
          <div className="mt-10">
            <RelatedLinks
              title="Bringing home a puppy?"
              links={[
                {
                  label: "New puppy care foundation",
                  href: "/puppy-care",
                  description: "First weeks, vet planning, feeding, socialization, and safety",
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
