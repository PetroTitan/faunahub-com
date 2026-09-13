import type { Breed } from "../../types.ts";

/** Beagle. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-beagle",
  slug: "beagle",
  species: "dog",
  name: "Beagle",
  originCountries: [
    "England",
    "Great Britain",
  ],
  originNote:
    "The two registries FaunaHub cites record different origins for this breed: the AKC records England, while the FCI records Great Britain as the country of origin. FaunaHub shows both rather than choosing between them.",
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "404",
      registryUrl: "https://www.akc.org/dog-breeds/beagle/",
      recognizedYear: 1885,
      sourceId: "akc-beagle",
    },
    {
      registryId: "fci",
      status: "recognized",
      registryGroup: "Group 6 — Scent hounds and related breeds, Section: Scent hounds",
      registryBreedCode: "161",
      registryUrl: "https://www.fci.be/en/nomenclature/BEAGLE-161.html",
      sourceId: "fci-beagle",
    },
  ],
  measurements: {
    heightCm: [
      { max: 33, bound: "at-most", basis: { kind: "variety", variety: "13 inches & under" }, statedAs: "13 inches & under", sourceId: "akc-beagle" },
      { min: 33, max: 38.1, bound: "closed", basis: { kind: "variety", variety: "13-15 inches" }, statedAs: "13-15 inches", sourceId: "akc-beagle" },
    ],
    weightKg: [
      { max: 9.1, bound: "at-most", basis: { kind: "variety", variety: "13 inches & under" }, statedAs: "under 20 pounds (13 inches & under)", sourceId: "akc-beagle" },
      { min: 9.1, max: 13.6, bound: "closed", basis: { kind: "variety", variety: "13-15 inches" }, statedAs: "20-30 pounds (13-15 inches)", sourceId: "akc-beagle" },
    ],
  },
  coat: {
    length: "short",
    types: [
      "Smooth",
    ],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-beagle",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-beagle" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-beagle" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-beagle" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-beagle" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-beagle" },
  },
  lifespanYears: { min: 10, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "10-15 years", sourceId: "akc-beagle" },
  editorial: {
    intro: [
      "The Beagle is a small-to-medium scent hound originally developed for hunting in packs. Modern Beagles are often described as friendly and curious, with a strong nose. As with all breeds, \"breed tendencies\" are generalisations — individual Beagles vary widely.",
    ],
    appearance: [
      "Beagles are compact, sturdily built dogs with a short tri-colour or two-colour coat, large drop ears, and a gently curved tail often carried upright. Breed standards recognise different size varieties; confirm size expectations with a reputable source for any specific dog.",
    ],
    temperament: [
      "Beagles are often described as sociable, playful, and pack-oriented. The breed's strong scenting drive can mean that a Beagle on a trail follows their nose rather than the human calling them. Like all dogs, behaviour varies by individual, socialisation, training, and environment.",
    ],
    activity: [
      "Most Beagles benefit from substantial daily exercise — walks, safe off-lead time in enclosed areas, and scent-based enrichment. The breed's nose can lead to wandering, so secure fencing and reliable recall training matter.",
    ],
    grooming: [
      "The short coat sheds throughout the year. Regular brushing and routine ear, dental, and nail care help keep the dog in good condition. The long drop ears benefit from regular inspection and gentle cleaning under veterinary guidance.",
    ],
    training: [
      "Beagles are often described as cooperative with patient, positive-reinforcement training, although the breed's scenting drive can make outdoor recall a recurring training challenge. Short, engaging sessions and food-motivated rewards work well for many individuals.",
    ],
    health: [
      "As with all breeds, Beagles can be affected by inherited and lifestyle health conditions. FaunaHub does not list specific medical conditions or treatments. Discuss preventive care, body condition, and any specific concerns for a particular dog with a licensed veterinarian.",
    ],
    responsibility: [
      "Plan for a vocal, scent-driven dog with substantial exercise and enrichment needs. Reputable shelters, rescues, and responsible breeders are appropriate sources. Beagles historically have been used in laboratory research; some rescues specifically place ex-laboratory Beagles and can be a meaningful adoption option for committed homes.",
    ],
    faqs: [
      { question: "Are Beagles good with families?", answer: "Many Beagles are described as sociable with people, but no breed is universally safe with children. Behaviour depends on individual, training, supervision, and the child's familiarity with dogs." },
      { question: "Are Beagles loud?", answer: "Beagles can be vocal — the breed includes baying as part of its hound heritage. This matters for apartment living and for neighbours. Spend time with a specific dog and check landlord rules before adopting." },
      { question: "Are Beagles easy to train?", answer: "Many Beagles respond well to positive-reinforcement training, but the breed's scenting drive can make recall and off-lead reliability harder to achieve. Plan for ongoing training and secure outdoor environments." },
      { question: "Are Beagles hypoallergenic?", answer: "No dog breed is fully hypoallergenic. Anyone with allergies should spend time with a specific dog before committing." },
    ],
  },
  sources: ["akc-beagle", "fci-beagle"],
  images: ["dog-beagle-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-05-21",
};
