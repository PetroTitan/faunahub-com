import type { Breed } from "../../types.ts";

/** Golden Retriever. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-golden-retriever",
  slug: "golden-retriever",
  species: "dog",
  name: "Golden Retriever",
  aliases: [
    "Golden",
  ],
  originCountries: [
    "Scotland",
    "Great Britain",
  ],
  originNote:
    "The two registries FaunaHub cites record different origins for this breed: the AKC records Scotland, while the FCI records Great Britain as the country of origin. FaunaHub shows both rather than choosing between them.",
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "107",
      registryUrl: "https://www.akc.org/dog-breeds/golden-retriever/",
      recognizedYear: 1925,
      sourceId: "akc-golden-retriever",
    },
    {
      registryId: "fci",
      status: "recognized",
      registryGroup: "Group 8 — Retrievers - Flushing Dogs - Water Dogs, Section: Retrievers",
      registryBreedCode: "111",
      registryUrl: "https://www.fci.be/en/nomenclature/GOLDEN-RETRIEVER-111.html",
      sourceId: "fci-golden-retriever",
    },
  ],
  measurements: {
    heightCm: [
      { min: 58.4, max: 61, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "23-24 inches (male)", sourceId: "akc-golden-retriever" },
      { min: 54.6, max: 57.2, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "21.5-22.5 inches (female)", sourceId: "akc-golden-retriever" },
    ],
    weightKg: [
      { min: 29.5, max: 34, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "65-75 pounds (male)", sourceId: "akc-golden-retriever" },
      { min: 24.9, max: 29.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "55-65 pounds (female)", sourceId: "akc-golden-retriever" },
    ],
  },
  coat: {
    length: "medium",
    types: [
      "Double",
    ],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-golden-retriever",
  },
  traits: {
    shedding: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-golden-retriever" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-golden-retriever" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-golden-retriever" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-golden-retriever" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-golden-retriever" },
  },
  lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-golden-retriever" },
  editorial: {
    intro: [
      "The Golden Retriever is a medium-to-large sporting breed originally developed in Scotland in the 19th century as a hunting retriever. Modern Goldens are often described as sociable, eager to please, and active. Temperament and behaviour vary between individuals, lines, and training.",
    ],
    appearance: [
      "Goldens have a dense, water-repellent double coat in shades from light cream to dark gold, with a feathered tail and distinctive friendly expression. Show-line and working-line Goldens often differ in coat length and overall build, and adult body weights vary substantially across responsible breeders.",
    ],
    temperament: [
      "Goldens are widely described as people-oriented and eager to engage. Some individuals are calm and gentle; others are very high-energy through young adulthood. Like all dogs, behaviour depends on socialisation, training, environment, exercise outlets, and the experience of the people around the dog.",
    ],
    activity: [
      "Most Goldens benefit from substantial daily activity — walks, off-lead exercise in safe environments, and mental enrichment such as scent work or fetch. Many Goldens enjoy swimming. Bored or under-exercised dogs of this breed often develop unwanted behaviours.",
    ],
    grooming: [
      "The dense double coat — which the AKC records as medium length — sheds year-round, with heavier seasonal sheds. Regular brushing several times a week, periodic baths, and routine ear/dental/nail care help keep the coat and skin in good condition. The feathered legs and tail can pick up mud and debris, so wipe-downs after outdoor activity are common.",
    ],
    training: [
      "Goldens are often described as trainable, with positive-reinforcement methods working well for many individuals. Early socialisation with people, other dogs, and varied environments matters for any breed.",
    ],
    health: [
      "Like all breeds, Goldens can be affected by inherited and lifestyle health conditions. Responsible breeders typically screen for joint and other concerns; rescues and shelters may have varying levels of background information. FaunaHub does not list specific medical conditions or treatments; discuss preventive care with a licensed veterinarian.",
    ],
    responsibility: [
      "Plan for a long-term commitment — many large dogs live well beyond a decade — and for substantial recurring costs including food, preventive vet care, grooming, training, and potentially emergency care. Reputable shelters, rescues, and responsible breeders are appropriate sources; avoid pet-store or unverified online sellers.",
    ],
    faqs: [
      { question: "Are Golden Retrievers good with families?", answer: "Goldens are widely described as people-oriented, but no breed is universally safe with children, and behaviour varies by individual, age, training, and household. Adult supervision and gentle handling matter for any breed." },
      { question: "How much exercise does a Golden Retriever need?", answer: "Most Goldens benefit from substantial daily exercise as adults; puppies and senior dogs have different needs. Discuss specifics with your veterinarian for an individual dog." },
      { question: "Do Goldens shed a lot?", answer: "Yes — Goldens have a dense double coat that sheds year-round, with heavier seasonal sheds. Regular brushing helps manage this. No breed is fully non-shedding." },
      { question: "Are Goldens hypoallergenic?", answer: "No dog breed is fully hypoallergenic. Anyone with allergies should spend time with a specific dog before committing." },
    ],
  },
  sources: ["akc-golden-retriever", "fci-golden-retriever"],
  images: ["dog-golden-retriever-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-05-21",
};
