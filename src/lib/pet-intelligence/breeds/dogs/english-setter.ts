import type { Breed } from "../../types.ts";

/** English Setter. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-english-setter",
  slug: "english-setter",
  species: "dog",
  name: "English Setter",
  aliases: ["English"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "109",
      registryUrl: "https://www.akc.org/dog-breeds/english-setter/",
      recognizedYear: 1878,
      sourceId: "akc-english-setter",
    },
  ],
  measurements: {
    heightCm: [
      { min: 63.5, max: 68.6, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "25-27 inches (male)", sourceId: "akc-english-setter" },
      { min: 58.4, max: 63.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "23-25 inches (female)", sourceId: "akc-english-setter" },
    ],
    weightKg: [
      { min: 29.5, max: 36.3, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "65-80 pounds (male)", sourceId: "akc-english-setter" },
      { min: 20.4, max: 24.9, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "45-55 pounds (female)", sourceId: "akc-english-setter" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double", "Silky"],
    statedAs: "AKC coat length: Medium; coat type: Double, Silky",
    sourceId: "akc-english-setter",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-english-setter" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-english-setter" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-english-setter" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-english-setter" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-english-setter" },
  },
  lifespanYears: { min: 12, max: 12, bound: "about", basis: { kind: "breed" }, statedAs: "12 years", sourceId: "akc-english-setter" },
  sources: ["akc-english-setter"],
  images: ["dog-english-setter-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
