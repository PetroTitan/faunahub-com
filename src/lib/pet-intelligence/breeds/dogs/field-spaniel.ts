import type { Breed } from "../../types.ts";

/** Field Spaniel. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-field-spaniel",
  slug: "field-spaniel",
  species: "dog",
  name: "Field Spaniel",
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "118",
      registryUrl: "https://www.akc.org/dog-breeds/field-spaniel/",
      recognizedYear: 1884,
      sourceId: "akc-field-spaniel",
    },
  ],
  measurements: {
    heightCm: [
      { min: 45.7, max: 45.7, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "18 inches (male)", sourceId: "akc-field-spaniel" },
      { min: 43.2, max: 43.2, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "17 inches (female)", sourceId: "akc-field-spaniel" },
    ],
    weightKg: [
      { min: 15.9, max: 22.7, bound: "closed", basis: { kind: "breed" }, statedAs: "35-50 pounds", sourceId: "akc-field-spaniel" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Wavy", "Smooth"],
    statedAs: "AKC coat length: Medium; coat type: Wavy, Smooth",
    sourceId: "akc-field-spaniel",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-field-spaniel" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-field-spaniel" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-field-spaniel" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-field-spaniel" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-field-spaniel" },
  },
  lifespanYears: { min: 12, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "12-13 years", sourceId: "akc-field-spaniel" },
  sources: ["akc-field-spaniel"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
