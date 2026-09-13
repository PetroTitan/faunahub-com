import type { Breed } from "../../types.ts";

/** Old English Sheepdog. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-old-english-sheepdog",
  slug: "old-english-sheepdog",
  species: "dog",
  name: "Old English Sheepdog",
  aliases: ["OES", "Bobtail"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "820",
      registryUrl: "https://www.akc.org/dog-breeds/old-english-sheepdog/",
      recognizedYear: 1888,
      sourceId: "akc-old-english-sheepdog",
    },
  ],
  measurements: {
    heightCm: [
      { min: 55.9, bound: "at-least", basis: { kind: "sex", sex: "male" }, statedAs: "22 inches & up (male)", sourceId: "akc-old-english-sheepdog" },
      { min: 53.3, bound: "at-least", basis: { kind: "sex", sex: "female" }, statedAs: "21 inches & up (female)", sourceId: "akc-old-english-sheepdog" },
    ],
    weightKg: [
      { min: 27.2, max: 45.4, bound: "closed", basis: { kind: "breed" }, statedAs: "60-100 pounds", sourceId: "akc-old-english-sheepdog" },
    ],
  },
  coat: {
    length: "long",
    types: ["Double"],
    statedAs: "AKC coat length: Long; coat type: Double",
    sourceId: "akc-old-english-sheepdog",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-old-english-sheepdog" },
    groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-old-english-sheepdog" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-old-english-sheepdog" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-old-english-sheepdog" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-old-english-sheepdog" },
  },
  lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-old-english-sheepdog" },
  sources: ["akc-old-english-sheepdog"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
