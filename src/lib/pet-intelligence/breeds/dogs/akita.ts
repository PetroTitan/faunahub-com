import type { Breed } from "../../types.ts";

/** Akita. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-akita",
  slug: "akita",
  species: "dog",
  name: "Akita",
  originCountries: ["Japan"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "630",
      registryUrl: "https://www.akc.org/dog-breeds/akita/",
      recognizedYear: 1972,
      sourceId: "akc-akita",
    },
  ],
  measurements: {
    heightCm: [
      { min: 66, max: 71.1, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "26-28 inches (male)", sourceId: "akc-akita" },
      { min: 61, max: 66, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "24-26 inches (female)", sourceId: "akc-akita" },
    ],
    weightKg: [
      { min: 45.4, max: 59, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "100-130 pounds (male)", sourceId: "akc-akita" },
      { min: 31.8, max: 45.4, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "70-100 pounds (female)", sourceId: "akc-akita" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-akita",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-akita" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-akita" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-akita" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-akita" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-akita" },
  },
  lifespanYears: { min: 10, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "10-14 years", sourceId: "akc-akita" },
  sources: ["akc-akita"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
