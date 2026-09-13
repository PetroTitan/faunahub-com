import type { Breed } from "../../types.ts";

/** Labrador Retriever. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-labrador-retriever",
  slug: "labrador-retriever",
  species: "dog",
  name: "Labrador Retriever",
  aliases: [
    "Lab",
  ],
  originCountries: [
    "Canada",
    "Great Britain",
  ],
  originNote:
    "The two registries FaunaHub cites record different origins for this breed: the AKC records Canada, while the FCI records Great Britain as the country of origin. FaunaHub shows both rather than choosing between them.",
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "108",
      registryUrl: "https://www.akc.org/dog-breeds/labrador-retriever/",
      recognizedYear: 1917,
      sourceId: "akc-labrador-retriever",
    },
    {
      registryId: "fci",
      status: "recognized",
      registryGroup: "Group 8 — Retrievers - Flushing Dogs - Water Dogs, Section: Retrievers",
      registryBreedCode: "122",
      registryUrl: "https://www.fci.be/en/nomenclature/LABRADOR-RETRIEVER-122.html",
      sourceId: "fci-labrador-retriever",
    },
  ],
  measurements: {
    heightCm: [
      { min: 57.2, max: 62.2, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "22.5-24.5 inches (male)", sourceId: "akc-labrador-retriever" },
      { min: 54.6, max: 59.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "21.5-23.5 inches (female)", sourceId: "akc-labrador-retriever" },
    ],
    weightKg: [
      { min: 29.5, max: 36.3, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "65-80 pounds (male)", sourceId: "akc-labrador-retriever" },
      { min: 24.9, max: 31.8, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "55-70 pounds (female)", sourceId: "akc-labrador-retriever" },
    ],
  },
  coat: {
    length: "short",
    types: [
      "Double",
    ],
    statedAs: "AKC coat length: Short; coat type: Double",
    sourceId: "akc-labrador-retriever",
  },
  traits: {
    shedding: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-labrador-retriever" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-labrador-retriever" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-labrador-retriever" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-labrador-retriever" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-labrador-retriever" },
  },
  lifespanYears: { min: 11, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "11-13 years", sourceId: "akc-labrador-retriever" },
  editorial: {
    intro: [
      "The Labrador Retriever is one of the most popular dog breeds in many countries. It was originally developed as a working retriever for hunters and water work, and modern Labradors are often described as friendly, active, and trainable. As with any breed, \"breed tendencies\" describe what is sometimes seen in members of the breed — not what is guaranteed in any specific dog.",
    ],
    appearance: [
      "Labradors are medium-to-large, athletically built dogs with a short, dense double coat. Recognised coat colours typically include black, yellow, and chocolate. The breed is known for an otter-like tail, a broad head, and an alert, friendly expression. Show-line and working-line Labradors may differ visibly in build.",
    ],
    temperament: [
      "Labradors are often described as sociable and people-oriented, with a strong play and retrieve drive in many lines. Individual dogs vary; some Labradors are calm and gentle, others are very high-energy and need consistent exercise and training. Early socialisation and structured training shape adult behaviour far more than breed alone.",
    ],
    activity: [
      "Most Labradors benefit from substantial daily exercise — a combination of walks, off-lead activity in safe environments, and mental enrichment. Many Labradors enjoy water and fetching games. Without enough physical and mental work, dogs of this breed can become bored and develop unwanted behaviours.",
    ],
    grooming: [
      "The short double coat sheds throughout the year, with heavier shedding seasons. Regular brushing helps manage loose hair. Routine ear checks, dental care, and nail trimming are sensible parts of any Labrador care routine.",
    ],
    training: [
      "Labradors are widely described as trainable, with consistent positive-reinforcement methods working well for most individuals. Early socialisation with people, other dogs, and varied environments matters for any breed. The breed's food motivation is a useful training tool but also means body condition needs attention to avoid weight gain.",
    ],
    health: [
      "As with all breeds, Labradors can be affected by inherited and lifestyle health conditions. Responsible breeders typically screen for joint and other conditions; rescue/adoption sources may have varying levels of health history. FaunaHub does not list specific medical conditions or treatments. Discuss preventive care, weight management, and any specific concerns with a licensed veterinarian.",
    ],
    responsibility: [
      "Before adopting any dog, consider time, budget, housing, exercise capacity, and long-term commitment — typically more than a decade for many breeds. Reputable shelters, rescues, and responsible breeders are appropriate sources; avoid pet-store or unverified online sellers. Local laws and landlord rules may also affect breed choice.",
    ],
    faqs: [
      { question: "Are Labradors good with children?", answer: "Many Labradors are described as friendly with people, including children, but no breed is universally safe with children. Behaviour depends on the individual dog, training, socialisation, supervision, and the children's experience around dogs. Always supervise interactions between children and any dog." },
      { question: "Do Labradors need a lot of exercise?", answer: "Most Labradors benefit from substantial daily exercise and mental enrichment. Specific needs vary by age, health, and individual energy level. Discuss exercise planning for a specific dog with your veterinarian." },
      { question: "Are Labradors easy for first-time dog owners?", answer: "Labradors are sometimes recommended for first-time owners because of their reputation for trainability and sociability, but they are a substantial commitment — high energy as young dogs, food-motivated (so weight management matters), and large enough to need consistent training. First-time owners should plan time and budget realistically." },
      { question: "Are Labradors hypoallergenic?", answer: "No dog breed is fully hypoallergenic. Allergens come from dander and saliva as well as hair. Anyone with allergies should spend time with a specific dog before committing." },
    ],
  },
  sources: ["akc-labrador-retriever", "fci-labrador-retriever"],
  images: ["dog-labrador-retriever-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-05-21",
};
