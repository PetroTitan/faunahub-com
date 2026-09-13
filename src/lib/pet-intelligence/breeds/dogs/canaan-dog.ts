import type { Breed } from "../../types.ts";

/** Canaan Dog. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-canaan-dog",
  slug: "canaan-dog",
  species: "dog",
  name: "Canaan Dog",
  aliases: ["Canaan", "Canaani (plural)"],
  originCountries: ["Israel"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "840",
      registryUrl: "https://www.akc.org/dog-breeds/canaan-dog/",
      recognizedYear: 1997,
      sourceId: "akc-canaan-dog",
    },
  ],
  measurements: {
    heightCm: [
      { min: 50.8, max: 61, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "20-24 inches (male)", sourceId: "akc-canaan-dog" },
      { min: 48.3, max: 58.4, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "19-23 inches (female)", sourceId: "akc-canaan-dog" },
    ],
    weightKg: [
      { min: 20.4, max: 24.9, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "45-55 pounds (male)", sourceId: "akc-canaan-dog" },
      { min: 15.9, max: 20.4, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "35-45 pounds (female)", sourceId: "akc-canaan-dog" },
    ],
  },
  coat: {
    length: "short",
    types: ["Double", "Smooth"],
    statedAs: "AKC coat length: Short; coat type: Double, Smooth",
    sourceId: "akc-canaan-dog",
  },
  traits: {
    shedding: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-canaan-dog" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-canaan-dog" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-canaan-dog" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-canaan-dog" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-canaan-dog" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-canaan-dog" },
  sources: ["akc-canaan-dog"],
  images: ["dog-canaan-dog-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
