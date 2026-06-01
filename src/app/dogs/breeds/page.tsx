import type { Metadata } from "next";
import DecisionHub from "@/components/pet-choice/DecisionHub";
import BreedProfileGrid from "@/components/breeds/BreedProfileGrid";
import RelatedLinks from "@/components/RelatedLinks";
import { getDecisionsByKind } from "@/lib/pet-choice/data";
import { buildMetadata } from "@/lib/metadata";

const LAST_UPDATED = "2026-05-22";

const DOG_BREED_PROFILES = [
  { name: "Labrador Retriever", slug: "labrador-retriever" },
  { name: "Golden Retriever", slug: "golden-retriever" },
  { name: "German Shepherd", slug: "german-shepherd" },
  { name: "French Bulldog", slug: "french-bulldog" },
  { name: "Beagle", slug: "beagle" },
  { name: "Poodle", slug: "poodle" },
  { name: "Border Collie", slug: "border-collie" },
  { name: "Dachshund", slug: "dachshund" },
];

export const metadata: Metadata = buildMetadata({
  title: "Dog Breed Decision Guides — Apartments, Families & First-Time Owners",
  description:
    "Cautious, practical dog breed decision pages — apartment-friendly, family-friendly, low-maintenance, first-time-owner, and small dog breeds.",
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
      h1="Dog Breed Decision Guides"
      intro="Practical pages that organise dog breed thinking by household intent — apartment-friendly, family-friendly, low-maintenance, first-time-owner, and small breeds. Every page uses cautious framing and notes individual variation in temperament, health, and training."
      decisionPages={decisions}
      hubFaqs={HUB_FAQS}
      faqTitle="Dog Breeds — Frequently Asked Questions"
      lastUpdated={LAST_UPDATED}
      extraSection={
        <>
          <BreedProfileGrid species="dog" breeds={DOG_BREED_PROFILES} />
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
