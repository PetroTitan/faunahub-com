import type { Breed } from "../../types.ts";

/** Whippet. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-whippet",
  slug: "whippet",
  species: "dog",
  name: "Whippet",
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "419",
      registryUrl: "https://www.akc.org/dog-breeds/whippet/",
      recognizedYear: 1888,
      sourceId: "akc-whippet",
    },
  ],
  measurements: {
    heightCm: [
      { min: 48.3, max: 55.9, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "19-22 inches (male)", sourceId: "akc-whippet" },
      { min: 45.7, max: 53.3, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "18-21 inches (female)", sourceId: "akc-whippet" },
    ],
    weightKg: [
      { min: 11.3, max: 18.1, bound: "closed", basis: { kind: "breed" }, statedAs: "25-40 pounds", sourceId: "akc-whippet" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-whippet",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-whippet" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-whippet" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-whippet" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-whippet" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-whippet" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-whippet" },
  sources: ["akc-whippet"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
