import type { Breed } from "../../types.ts";

/** Poodle. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-poodle",
  slug: "poodle",
  species: "dog",
  name: "Poodle",
  canonicalCommonName: "Poodle (Standard)",
  aliases: [
    "Standards",
    "Poodle (Standard)",
  ],
  originCountries: [
    "Germany",
    "France",
  ],
  originNote:
    "The two registries FaunaHub cites record different origins for this breed: the AKC records Germany, while the FCI records France as the country of origin. FaunaHub shows both rather than choosing between them.",
  scopeNote:
    "This profile covers the STANDARD Poodle. The AKC publishes the Poodle as three separate breeds — Standard, Miniature and Toy — which share breed code 701 but not a group: the Toy Poodle is in the Toy Group, while Standard and Miniature are Non-Sporting. Every measurement and group below is the Standard's. The FCI treats the Poodle as one breed (#172) across its size varieties.",
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Non-Sporting Group",
      registryBreedCode: "701",
      registryUrl: "https://www.akc.org/dog-breeds/poodle-standard/",
      recognizedYear: 1887,
      sourceId: "akc-poodle",
    },
    {
      registryId: "fci",
      status: "recognized",
      registryGroup: "Group 9 — Companion and Toy Dogs, Section: Poodle",
      registryBreedCode: "172",
      registryUrl: "https://www.fci.be/en/nomenclature/POODLE-172.html",
      sourceId: "fci-poodle",
    },
  ],
  measurements: {
    heightCm: [
      { min: 38.1, bound: "at-least", basis: { kind: "variety", variety: "standard" }, statedAs: "over 15 inches (standard)", sourceId: "akc-poodle" },
    ],
    weightKg: [
      { min: 27.2, max: 31.8, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "60-70 pounds (male standard)", sourceId: "akc-poodle" },
      { min: 18.1, max: 22.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "40-50 pounds (female standard)", sourceId: "akc-poodle" },
    ],
  },
  coat: {
    length: "long",
    types: [
      "Curly",
    ],
    statedAs: "AKC coat length: Long; coat type: Curly",
    sourceId: "akc-poodle",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-poodle" },
    groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-poodle" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-poodle" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-poodle" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-poodle" },
  },
  lifespanYears: { min: 10, max: 18, bound: "closed", basis: { kind: "breed" }, statedAs: "10-18 years", sourceId: "akc-poodle" },
  editorial: {
    intro: [
      "The Poodle is a long-established breed recognised in three main size varieties — standard, miniature, and toy — sharing the same breed standard apart from size. The breed has a history as a working water-retriever and is widely kept today as a companion dog.",
    ],
    appearance: [
      "Poodles have a distinctive curly or corded single-layer coat, an elegantly proportioned build, and a refined head with long drop ears. Standards are the largest, toy Poodles the smallest. Coat colours include white, black, brown, apricot, silver, and various recognised patterns.",
    ],
    temperament: [
      "Poodles are widely described as alert, trainable, and people-oriented. Some individuals are calm and quiet; others are very playful and active. Behaviour varies by individual, line, training, and household environment.",
    ],
    activity: [
      "Most Poodles benefit from substantial daily activity — walks, play, and mental enrichment. Standard Poodles in particular often enjoy structured activities such as obedience or scent work. Toy and miniature varieties still need consistent daily exercise, even though their needs are smaller in absolute terms.",
    ],
    grooming: [
      "The single-layer curly coat does not shed in the same way as many double-coated breeds, but it does need regular maintenance — brushing several times a week and professional grooming every several weeks. Mat formation is a common issue without routine care. Despite popular belief, no breed is fully hypoallergenic.",
    ],
    training: [
      "Poodles are often described as very trainable using positive-reinforcement methods. They tend to respond well to varied, engaging training rather than repetitive drills. First-time owners typically benefit from structured classes with a qualified force-free trainer.",
    ],
    health: [
      "As with all breeds, Poodles can be affected by inherited and lifestyle health conditions, with some differing across size varieties. Responsible breeders typically screen for relevant conditions; rescues and shelters may have varying levels of background information. FaunaHub does not list specific medical conditions or treatments. Discuss preventive care, coat and skin care, and any specific concerns for a particular dog with a licensed veterinarian.",
    ],
    responsibility: [
      "Plan for substantial grooming costs and time, ongoing training time, and a long-term commitment. Reputable shelters, rescues, and responsible breeders are appropriate sources. Avoid pet-store or unverified online sellers.",
    ],
    faqs: [
      { question: "Are Poodles hypoallergenic?", answer: "No dog breed is fully hypoallergenic. Poodle coats may shed less loose hair than many double-coated breeds, but allergens come from dander and saliva as well as hair. Anyone with allergies should spend time with a specific dog before committing." },
      { question: "Which Poodle variety is right for me?", answer: "Standard, miniature, and toy Poodles share the same breed standard apart from size, but their housing, exercise, and grooming costs scale differently. Discuss specifics with a reputable breeder, shelter, or your veterinarian." },
      { question: "Do Poodles need professional grooming?", answer: "Most Poodles benefit from professional grooming on a regular schedule, in addition to home brushing several times a week. Budget for this when planning the long-term cost of the breed." },
      { question: "Are Poodles easy for first-time owners?", answer: "Many Poodles are described as cooperative learners and can do well with first-time owners who are ready to commit to regular grooming, ongoing training, and consistent daily care." },
    ],
  },
  sources: ["akc-poodle", "fci-poodle"],
  images: ["dog-poodle-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-05-21",
};
