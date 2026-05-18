import type { Metadata } from "next";
import HealthHub from "@/components/health/HealthHub";
import type { SourceLink } from "@/lib/educational/types";
import { getSymptomArticlesBySpecies } from "@/lib/health/data";
import { buildMetadata } from "@/lib/metadata";

const LAST_UPDATED = "2026-05-18";

export const metadata: Metadata = buildMetadata({
  title: "Cat Health — Cautious Symptom Awareness Guides",
  description:
    "Educational, source-aware cat health pages: common symptom explainers, emergency warning signs, food and poisoning risks, and vet-care planning. Not a diagnosis — always consult a licensed veterinarian.",
  path: "/cats/health",
});

const HUB_FAQS = [
  {
    question: "Is FaunaHub's cat health content a diagnosis tool?",
    answer:
      "No. These pages are educational symptom-awareness overviews, not diagnoses. They list possible cause categories and emergency warning signs so you can ask better questions of a licensed veterinarian — not so you can decide what's wrong yourself.",
  },
  {
    question: "When should I contact an emergency vet rather than wait?",
    answer:
      "When any emergency sign is present — difficulty breathing, collapse, seizures, suspected poisoning, repeated vomiting, severe bleeding, sudden inability to use the legs, severe pain, inability to urinate (especially in male cats — life-threatening), or major behaviour change. When in doubt, call. Telephone triage is a normal part of veterinary care.",
  },
  {
    question: "Why don't you list specific treatments or medications?",
    answer:
      "Diagnosis and treatment require examining the specific cat, often with laboratory or imaging tests. Publishing generic treatment or medication advice on a website would be unsafe. Several common human medications — including paracetamol/acetaminophen — are highly toxic to cats and should never be given without veterinary instruction.",
  },
  {
    question: "What sources do these pages use?",
    answer:
      "Each symptom page cites authoritative veterinary references such as the AVMA, the Merck Veterinary Manual, the Cornell Feline Health Center, and the ASPCA Animal Poison Control Center where toxicology is relevant. Pages still encourage owners to consult a licensed veterinarian directly.",
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
    label: "Cornell Feline Health Center",
    url: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center",
    type: "university",
    note: "Cornell University College of Veterinary Medicine — cats",
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

export default function CatHealthHubPage() {
  const articles = getSymptomArticlesBySpecies("cat");
  return (
    <HealthHub
      species="cat"
      articles={articles}
      sources={HUB_SOURCES}
      faqs={HUB_FAQS}
      lastUpdated={LAST_UPDATED}
    />
  );
}
