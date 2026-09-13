import type { Breed } from "../../types.ts";

/** Sloughi. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-sloughi",
  slug: "sloughi",
  species: "dog",
  name: "Sloughi",
  originCountries: ["Arabian Greyhound"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "435",
      registryUrl: "https://www.akc.org/dog-breeds/sloughi/",
      recognizedYear: 2016,
      sourceId: "akc-sloughi",
    },
  ],
  measurements: {
    heightCm: [
      { min: 66, max: 73.7, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "26-29 inches (male)", sourceId: "akc-sloughi" },
      { min: 61, max: 68.6, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "24-27 inches (female)", sourceId: "akc-sloughi" },
    ],
    weightKg: [
      { min: 18.1, max: 29.5, bound: "closed", basis: { kind: "breed" }, statedAs: "40 -65  pounds", sourceId: "akc-sloughi" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-sloughi",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-sloughi" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-sloughi" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-sloughi" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-sloughi" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-sloughi" },
  },
  lifespanYears: { min: 10, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "10-15 years", sourceId: "akc-sloughi" },
  sources: ["akc-sloughi"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
