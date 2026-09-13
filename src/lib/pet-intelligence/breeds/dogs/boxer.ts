import type { Breed } from "../../types.ts";

/** Boxer. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-boxer",
  slug: "boxer",
  species: "dog",
  name: "Boxer",
  originCountries: ["Germany"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "607",
      registryUrl: "https://www.akc.org/dog-breeds/boxer/",
      recognizedYear: 1904,
      sourceId: "akc-boxer",
    },
  ],
  measurements: {
    heightCm: [
      { min: 58.4, max: 63.5, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "23-25 inches (male)", sourceId: "akc-boxer" },
      { min: 54.6, max: 59.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "21.5-23.5 inches (female)", sourceId: "akc-boxer" },
    ],
    weightKg: [
      { min: 29.5, max: 36.3, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "65-80 pounds (male)", sourceId: "akc-boxer" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-boxer",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-boxer" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-boxer" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-boxer" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-boxer" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-boxer" },
  },
  lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-boxer" },
  sources: ["akc-boxer"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
