import type { Breed } from "../../types.ts";

/** Dachshund. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-dachshund",
  slug: "dachshund",
  species: "dog",
  name: "Dachshund",
  aliases: [
    "Dachsie",
  ],
  originCountries: [
    "Germany",
  ],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "408",
      registryUrl: "https://www.akc.org/dog-breeds/dachshund/",
      recognizedYear: 1885,
      sourceId: "akc-dachshund",
    },
    {
      registryId: "fci",
      status: "recognized",
      registryGroup: "Group 4 — Dachshunds",
      registryBreedCode: "148",
      registryUrl: "https://www.fci.be/en/nomenclature/DACHSHUND-148.html",
      sourceId: "fci-dachshund",
    },
  ],
  measurements: {
    heightCm: [
      { min: 20.3, max: 22.9, bound: "closed", basis: { kind: "variety", variety: "standard" }, statedAs: "8-9 inches (standard)", sourceId: "akc-dachshund" },
      { min: 12.7, max: 15.2, bound: "closed", basis: { kind: "variety", variety: "miniature" }, statedAs: "5-6 inches (miniature)", sourceId: "akc-dachshund" },
    ],
    weightKg: [
      { min: 7.3, max: 14.5, bound: "closed", basis: { kind: "variety", variety: "standard" }, statedAs: "16-32 pounds (standard)", sourceId: "akc-dachshund" },
      { max: 5, bound: "at-most", basis: { kind: "variety", variety: "miniature" }, statedAs: "11 pounds & under (miniature)", sourceId: "akc-dachshund" },
    ],
  },
  coat: {
    // AKC records TWO coat lengths for this breed. Storing array[0]
    // filed it under the shorter one alone, so the page contradicted the
    // citation printed directly beneath it and the breed was missing from
    // the collection for its other coat. "variable" is the value the cat
    // side already uses for exactly this case.
    length: "variable",
    types: [
      "Smooth",
    ],
    statedAs: "AKC coat length: Short, Medium; coat type: Smooth",
    sourceId: "akc-dachshund",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-dachshund" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-dachshund" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-dachshund" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-dachshund" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-dachshund" },
  },
  lifespanYears: { min: 12, max: 16, bound: "closed", basis: { kind: "breed" }, statedAs: "12-16 years", sourceId: "akc-dachshund" },
  editorial: {
    intro: [
      "The Dachshund — also known as the Teckel or sausage dog — is a small German hound originally developed to follow scent into burrows. The breed is recognised in standard and miniature sizes and in smooth, longhaired, and wirehaired coat varieties.",
    ],
    appearance: [
      "Dachshunds are distinctively long-bodied and short-legged, with a deep chest and long head. Their build is iconic but also brings specific back-care considerations that should be discussed with a veterinarian. Coat colours and patterns vary widely between varieties.",
    ],
    temperament: [
      "Dachshunds are often described as bold and curious. Some individuals are affectionate companions; others can be more independent or reserved with strangers. Like all dogs, behaviour varies by individual, line, training, and household.",
    ],
    activity: [
      "Most Dachshunds benefit from moderate daily exercise spread across short walks and play. The breed's long-back anatomy means that high-impact activity — extensive jumping on and off furniture, stairs, or rough play — should be managed carefully and on veterinary advice.",
    ],
    grooming: [
      "Grooming varies sharply by coat variety: smooth Dachshunds need minimal coat care, longhaired need regular brushing, and wirehaired benefit from periodic hand-stripping or professional grooming. All varieties need routine ear, dental, and nail care.",
    ],
    training: [
      "Dachshunds are often described as cooperative learners with positive-reinforcement training, although the breed's independent streak can make consistency more important than with very biddable breeds. Short, engaging sessions and food-motivated rewards work for many individuals.",
    ],
    health: [
      "Back-health context: the long-bodied build is associated with specific spinal-care considerations that should be discussed with a licensed veterinarian. Jumping, stairs, and body condition are the things owners most often raise with a veterinarian for this breed; what is appropriate for a particular dog is a question for that dog's vet rather than a rule that holds for all of them. FaunaHub does not provide diagnosis or treatment.",
    ],
    responsibility: [
      "Plan for routine veterinary care and weight management as ongoing priorities. Reputable shelters, rescues, and responsible breeders are appropriate sources. Avoid pet-store or unverified online sellers.",
    ],
    faqs: [
      { question: "Are Dachshunds good apartment dogs?", answer: "Many Dachshunds do well in apartments because of their small size and modest exercise needs, but landlord rules, neighbour noise tolerance, stairs, and the breed's back-care considerations all matter. Spend time with a specific dog before deciding." },
      { question: "Do Dachshunds bark a lot?", answer: "The breed is often described as alert and vocal. Some individuals are noticeably barky, others much less so. This matters for apartment living and for shared-wall housing." },
      { question: "What about their long backs?", answer: "The long-bodied build brings spinal-care considerations that should be discussed with a licensed veterinarian. Owners commonly discuss jumping, stairs, and body condition with their veterinarian for this breed; specific guidance depends on the individual dog. FaunaHub does not diagnose or treat." },
      { question: "Are Dachshunds good with children?", answer: "Many Dachshunds live happily in families, but no breed is universally child-safe. Behaviour varies by individual, training, supervision, and the child's experience around dogs." },
    ],
  },
  sources: ["akc-dachshund", "fci-dachshund"],
  images: ["dog-dachshund-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-05-21",
};
