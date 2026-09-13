import type { Breed } from "../../types.ts";

/** Bichon Frise. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-bichon-frise",
  slug: "bichon-frise",
  species: "dog",
  name: "Bichon Frise",
  aliases: ["Bichon"],
  originCountries: ["The Mediterranean"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Non-Sporting Group",
      registryBreedCode: "310",
      registryUrl: "https://www.akc.org/dog-breeds/bichon-frise/",
      recognizedYear: 1972,
      sourceId: "akc-bichon-frise",
    },
  ],
  measurements: {
    heightCm: [
      { min: 24.1, max: 29.2, bound: "closed", basis: { kind: "breed" }, statedAs: "9.5-11.5 inches", sourceId: "akc-bichon-frise" },
    ],
    weightKg: [
      { min: 5.4, max: 8.2, bound: "closed", basis: { kind: "breed" }, statedAs: "12-18 pounds", sourceId: "akc-bichon-frise" },
    ],
  },
  coat: {
    length: "long",
    types: ["Curly", "Double"],
    statedAs: "AKC coat length: Long; coat type: Curly, Double",
    sourceId: "akc-bichon-frise",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-bichon-frise" },
    groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-bichon-frise" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-bichon-frise" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-bichon-frise" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-bichon-frise" },
  },
  lifespanYears: { min: 14, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "14-15 years", sourceId: "akc-bichon-frise" },
  sources: ["akc-bichon-frise"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
