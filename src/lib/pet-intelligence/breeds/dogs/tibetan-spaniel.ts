import type { Breed } from "../../types.ts";

/** Tibetan Spaniel. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-tibetan-spaniel",
  slug: "tibetan-spaniel",
  species: "dog",
  name: "Tibetan Spaniel",
  aliases: ["Tibbie"],
  originCountries: ["Tibet"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Non-Sporting Group",
      registryBreedCode: "312",
      registryUrl: "https://www.akc.org/dog-breeds/tibetan-spaniel/",
      recognizedYear: 1983,
      sourceId: "akc-tibetan-spaniel",
    },
  ],
  measurements: {
    heightCm: [
      { min: 25.4, max: 25.4, bound: "about", basis: { kind: "breed" }, statedAs: "10 inches", sourceId: "akc-tibetan-spaniel" },
    ],
    weightKg: [
      { min: 4.1, max: 6.8, bound: "closed", basis: { kind: "breed" }, statedAs: "9-15 pounds", sourceId: "akc-tibetan-spaniel" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-tibetan-spaniel",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-tibetan-spaniel" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-tibetan-spaniel" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-tibetan-spaniel" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-tibetan-spaniel" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-tibetan-spaniel" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-tibetan-spaniel" },
  sources: ["akc-tibetan-spaniel"],
  images: ["dog-tibetan-spaniel-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
