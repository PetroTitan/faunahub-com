import type { Breed } from "../../types.ts";

/** Dogo Argentino. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-dogo-argentino",
  slug: "dogo-argentino",
  species: "dog",
  name: "Dogo Argentino",
  originCountries: ["Argentina"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "638",
      registryUrl: "https://www.akc.org/dog-breeds/dogo-argentino/",
      recognizedYear: 2020,
      sourceId: "akc-dogo-argentino",
    },
  ],
  measurements: {
    heightCm: [
      { min: 61, max: 67.3, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "24-26.5 inches (male)", sourceId: "akc-dogo-argentino" },
      { min: 61, max: 64.8, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "24-25.5 inches (female)", sourceId: "akc-dogo-argentino" },
    ],
    weightKg: [
      { min: 36.3, max: 45.4, bound: "closed", basis: { kind: "breed" }, statedAs: "80-100 pounds", sourceId: "akc-dogo-argentino" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-dogo-argentino",
  },
  traits: {
    shedding: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-dogo-argentino" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-dogo-argentino" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-dogo-argentino" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-dogo-argentino" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-dogo-argentino" },
  },
  lifespanYears: { min: 9, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "9-15 years", sourceId: "akc-dogo-argentino" },
  sources: ["akc-dogo-argentino"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
