import type { Metadata } from "next";
import HealthHub from "@/components/health/HealthHub";
import type { SourceLink } from "@/lib/educational/types";
import { getSymptomArticlesBySpecies } from "@/lib/health/data";
import { buildMetadata } from "@/lib/metadata";

const LAST_UPDATED = "2026-05-18";

export const metadata: Metadata = buildMetadata({
  title: "Dog Health — Cautious Symptom Awareness Guides",
  description:
    "Educational, source-aware dog health pages: common symptom explainers, emergency warning signs, food and poisoning risks, and vet-care planning. Not a diagnosis — always consult a licensed veterinarian.",
  path: "/dogs/health",
});

const HUB_FAQS = [
  {
    question: "Is FaunaHub's dog health content a diagnosis tool?",
    answer:
      "No. These pages are educational symptom-awareness overviews, not diagnoses. They list possible cause categories and emergency warning signs so you can ask better questions of a licensed veterinarian — not so you can decide what's wrong yourself.",
  },
  {
    question: "When should I contact an emergency vet rather than wait?",
    answer:
      "When any emergency sign is present — difficulty breathing, collapse, seizures, suspected poisoning, repeated vomiting, severe bleeding, sudden inability to use the legs, severe pain, or major behaviour change. When in doubt, call. Telephone triage is a normal part of veterinary care.",
  },
  {
    question: "Why don't you list specific treatments or medications?",
    answer:
      "Diagnosis and treatment require examining the specific dog, often with laboratory or imaging tests. Publishing generic treatment or medication advice on a website would be unsafe. Several common human medications are also dangerous to dogs and should never be given without veterinary instruction.",
  },
  {
    question: "What sources do these pages use?",
    answer:
      "Each symptom page cites authoritative veterinary references such as the AVMA, the Merck Veterinary Manual, the Cornell Riney Canine Health Center, and the ASPCA Animal Poison Control Center where toxicology is relevant. Pages still encourage owners to consult a licensed veterinarian directly.",
  },
];

const HUB_SOURCES: SourceLink[] = [
  {
    label: "AVMA — Pet Care Resources",
    url: "https://www.avma.org/resources-tools/pet-owners/petcare",
    type: "veterinary",
    note: "American Veterinary Medical Association consumer pet-care hub",
  },
  {
    label: "Cornell Riney Canine Health Center",
    url: "https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center",
    type: "university",
    note: "Cornell University College of Veterinary Medicine — dogs",
  },
  {
    label: "Merck Veterinary Manual",
    url: "https://www.merckvetmanual.com",
    type: "reference",
    note: "Comprehensive veterinary reference",
  },
  {
    label: "ASPCA Animal Poison Control Center",
    url: "https://www.aspca.org/pet-care/animal-poison-control",
    type: "veterinary",
    note: "24/7 emergency animal-poisoning helpline (US)",
  },
];

export default function DogHealthHubPage() {
  const articles = getSymptomArticlesBySpecies("dog");
  return (
    <HealthHub
      species="dog"
      articles={articles}
      sources={HUB_SOURCES}
      faqs={HUB_FAQS}
      lastUpdated={LAST_UPDATED}
    />
  );
}
