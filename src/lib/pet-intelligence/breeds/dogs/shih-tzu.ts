import type { Breed } from "../../types.ts";

/** Shih Tzu. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-shih-tzu",
  slug: "shih-tzu",
  species: "dog",
  name: "Shih Tzu",
  originCountries: [
    "China",
    "Tibet (China)",
  ],
  originNote:
    "The two registries FaunaHub cites record different origins for this breed: the AKC records China, while the FCI records Tibet (China) as the country of origin. FaunaHub shows both rather than choosing between them.",
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Toy Group",
      registryBreedCode: "513",
      registryUrl: "https://www.akc.org/dog-breeds/shih-tzu/",
      recognizedYear: 1969,
      sourceId: "akc-shih-tzu",
    },
    {
      registryId: "fci",
      status: "recognized",
      registryGroup: "Group 9 — Companion and Toy Dogs, Section: Tibetan breeds",
      registryBreedCode: "208",
      registryUrl: "https://www.fci.be/en/nomenclature/SHIH-TZU-208.html",
      sourceId: "fci-shih-tzu",
    },
  ],
  measurements: {
    heightCm: [
      { min: 22.9, max: 26.7, bound: "closed", basis: { kind: "breed" }, statedAs: "9-10.5 inches", sourceId: "akc-shih-tzu" },
    ],
    weightKg: [
      { min: 4.1, max: 7.3, bound: "closed", basis: { kind: "breed" }, statedAs: "9-16 pounds", sourceId: "akc-shih-tzu" },
    ],
  },
  coat: {
    length: "long",
    types: [
      "Double",
    ],
    statedAs: "AKC coat length: Long; coat type: Double",
    sourceId: "akc-shih-tzu",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-shih-tzu" },
    groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-shih-tzu" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-shih-tzu" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-shih-tzu" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-shih-tzu" },
  },
  lifespanYears: { min: 10, max: 18, bound: "closed", basis: { kind: "breed" }, statedAs: "10-18 years", sourceId: "akc-shih-tzu" },
  editorial: {
    intro: [
      "The Shih Tzu is a small companion breed with Tibetan origins, kept as a companion rather than a working dog for most of its recorded history. That heritage is reflected in how the breed is usually described — people-oriented and content with moderate activity — and in what it demands in return, which is a real and ongoing coat-care commitment.",
    ],
    appearance: [
      "Shih Tzu are small, sturdy dogs carrying a long double coat, with a short muzzle and a distinctive head. The AKC standard gives a height of 9 to 10.5 inches and a weight of 9 to 16 pounds. Many owners keep the coat clipped short, which changes the grooming routine substantially but does not remove it.",
    ],
    temperament: [
      "The breed is commonly described as affectionate, people-focused, and comparatively content indoors. Shih Tzu are often kept as companion dogs for exactly this reason. Individual temperament still varies by dog, line, socialisation, and household, and a breed described as easy-going is not thereby a breed that needs no training.",
    ],
    activity: [
      "The AKC's published energy scale places this breed in the middle. Daily walks and play are part of a healthy routine, but the breed is not generally described as needing the sustained work that herding or sporting breeds do. Short-muzzled dogs can find heat and strenuous exercise harder to manage, which is worth raising with a veterinarian when planning activity.",
    ],
    grooming: [
      "This is the breed's main practical demand. A long double coat requires frequent brushing to prevent matting, along with regular professional grooming for most owners — the AKC's published grooming-frequency scale places this breed at the high end. Face and eye cleaning are commonly part of the routine. Owners who prefer a clipped coat still need regular grooming appointments.",
    ],
    training: [
      "Shih Tzu are widely described as responsive to gentle, consistent positive-reinforcement training. Early handling practice is particularly useful for this breed, because a dog who tolerates brushing, face cleaning, and grooming handling comfortably makes a lifelong routine much easier for both of you.",
    ],
    health: [
      "As with all breeds, Shih Tzu can be affected by inherited and lifestyle health conditions, and short-muzzled breeds have care considerations — particularly around heat and exertion — that differ from longer-muzzled dogs. Responsible breeders typically screen for relevant concerns. FaunaHub does not list specific medical conditions or treatments. Discuss preventive care, exercise in warm weather, and any specific concerns with a licensed veterinarian.",
    ],
    responsibility: [
      "Budget for grooming as a recurring cost, not a one-off: for most owners this breed means regular professional appointments for the life of the dog. The AKC publishes a life-expectancy range of 10 to 18 years — a breed-level published figure rather than a prediction about any individual dog. Reputable shelters, rescues, and responsible breeders are appropriate sources.",
    ],
    householdContext: [
      "The breed's size and moderate activity needs suit apartments well. Households considering a Shih Tzu should be realistic about coat care above all else — it is the commitment owners most often underestimate. As with any breed, interactions between children and dogs should be supervised, and the individual dog assessed rather than assumed from breed reputation.",
    ],
    faqs: [
      { question: "How much grooming does a Shih Tzu need?", answer: "A great deal, relative to most breeds. The AKC's published coat-grooming-frequency scale places this breed at the high end, and a full-length double coat mats without frequent brushing. Many owners keep the coat clipped shorter, which reduces daily brushing but still means regular professional grooming appointments." },
      { question: "Are Shih Tzu good apartment dogs?", answer: "Their size and moderate exercise needs generally suit apartment living. As with any dog, daily walks, mental engagement, and consideration for neighbours still apply, and individual dogs vary in how much activity and how much company they want." },
      { question: "Are Shih Tzu hypoallergenic?", answer: "No dog breed is fully hypoallergenic. The breed is often described as lower-shedding, and the AKC's published shedding scale does place it at the low end, but allergens come from dander and saliva as well as hair. Anyone with allergies should spend time with a specific dog before committing." },
      { question: "Do Shih Tzu need much exercise?", answer: "Less than working breeds, but not none. Daily walks and play suit most individuals. Because the breed is short-muzzled, exertion and heat are worth planning around and discussing with a veterinarian rather than judging by how willing the dog seems." },
    ],
  },
  sources: ["akc-shih-tzu", "fci-shih-tzu"],
  images: ["dog-shih-tzu-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
