import type { Breed } from "../../types.ts";

/** Great Pyrenees. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-great-pyrenees",
  slug: "great-pyrenees",
  species: "dog",
  name: "Great Pyrenees",
  aliases: ["Pyr"],
  originCountries: ["France"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "615",
      registryUrl: "https://www.akc.org/dog-breeds/great-pyrenees/",
      recognizedYear: 1933,
      sourceId: "akc-great-pyrenees",
    },
  ],
  measurements: {
    heightCm: [
      { min: 68.6, max: 81.3, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "27-32 inches (male)", sourceId: "akc-great-pyrenees" },
      { min: 63.5, max: 73.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "25-29 inches (female)", sourceId: "akc-great-pyrenees" },
    ],
    weightKg: [
      { min: 45.4, bound: "at-least", basis: { kind: "sex", sex: "male" }, statedAs: "100 pounds & up (male)", sourceId: "akc-great-pyrenees" },
      { min: 38.6, bound: "at-least", basis: { kind: "sex", sex: "female" }, statedAs: "85 pounds & up (female)", sourceId: "akc-great-pyrenees" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-great-pyrenees",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-great-pyrenees" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-great-pyrenees" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-great-pyrenees" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-great-pyrenees" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-great-pyrenees" },
  },
  lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-great-pyrenees" },
  sources: ["akc-great-pyrenees"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
