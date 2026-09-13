import type { Breed } from "../../types.ts";

/** Saluki. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-saluki",
  slug: "saluki",
  species: "dog",
  name: "Saluki",
  originCountries: ["Middle East"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "417",
      registryUrl: "https://www.akc.org/dog-breeds/saluki/",
      recognizedYear: 1929,
      sourceId: "akc-saluki",
    },
  ],
  measurements: {
    heightCm: [
      { min: 58.4, max: 71.1, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "23-28 inches (male)", sourceId: "akc-saluki" },
    ],
    weightKg: [
      { min: 18.1, max: 29.5, bound: "closed", basis: { kind: "breed" }, statedAs: "40-65 pounds", sourceId: "akc-saluki" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-saluki",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-saluki" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-saluki" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-saluki" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-saluki" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-saluki" },
  },
  lifespanYears: { min: 10, max: 17, bound: "closed", basis: { kind: "breed" }, statedAs: "10-17 years", sourceId: "akc-saluki" },
  sources: ["akc-saluki"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
