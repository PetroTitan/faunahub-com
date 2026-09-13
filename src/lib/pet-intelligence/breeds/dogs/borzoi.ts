import type { Breed } from "../../types.ts";

/** Borzoi. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-borzoi",
  slug: "borzoi",
  species: "dog",
  name: "Borzoi",
  originCountries: ["Russia"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "407",
      registryUrl: "https://www.akc.org/dog-breeds/borzoi/",
      recognizedYear: 1891,
      sourceId: "akc-borzoi",
    },
  ],
  measurements: {
    heightCm: [
      { min: 71.1, bound: "at-least", basis: { kind: "sex", sex: "male" }, statedAs: "28 inches & up (male)", sourceId: "akc-borzoi" },
      { min: 66, bound: "at-least", basis: { kind: "sex", sex: "female" }, statedAs: "26 inches & up (female)", sourceId: "akc-borzoi" },
    ],
    weightKg: [
      { min: 34, max: 47.6, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "75-105 pounds (male)", sourceId: "akc-borzoi" },
      { min: 27.2, max: 38.6, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "60-85 pounds (female)", sourceId: "akc-borzoi" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Curly", "Silky"],
    statedAs: "AKC coat length: Medium; coat type: Curly, Silky",
    sourceId: "akc-borzoi",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-borzoi" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-borzoi" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-borzoi" },
    trainability: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-borzoi" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-borzoi" },
  },
  lifespanYears: { min: 9, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "9-14 years", sourceId: "akc-borzoi" },
  sources: ["akc-borzoi"],
  images: ["dog-borzoi-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
