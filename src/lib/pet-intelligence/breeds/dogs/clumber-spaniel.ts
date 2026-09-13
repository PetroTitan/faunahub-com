import type { Breed } from "../../types.ts";

/** Clumber Spaniel. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-clumber-spaniel",
  slug: "clumber-spaniel",
  species: "dog",
  name: "Clumber Spaniel",
  aliases: ["Clumber"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "114",
      registryUrl: "https://www.akc.org/dog-breeds/clumber-spaniel/",
      recognizedYear: 1878,
      sourceId: "akc-clumber-spaniel",
    },
  ],
  measurements: {
    heightCm: [
      { min: 45.7, max: 50.8, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "18-20 inches (male)", sourceId: "akc-clumber-spaniel" },
      { min: 43.2, max: 48.3, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "17-19 inches (female)", sourceId: "akc-clumber-spaniel" },
    ],
    weightKg: [
      { min: 31.8, max: 38.6, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "70-85 pounds (male)", sourceId: "akc-clumber-spaniel" },
      { min: 24.9, max: 31.8, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "55-70 pounds (female)", sourceId: "akc-clumber-spaniel" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Silky", "Wavy"],
    statedAs: "AKC coat length: Medium; coat type: Silky, Wavy",
    sourceId: "akc-clumber-spaniel",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-clumber-spaniel" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-clumber-spaniel" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-clumber-spaniel" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-clumber-spaniel" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-clumber-spaniel" },
  },
  lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-clumber-spaniel" },
  sources: ["akc-clumber-spaniel"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
