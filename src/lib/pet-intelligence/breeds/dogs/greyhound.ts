import type { Breed } from "../../types.ts";

/** Greyhound. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-greyhound",
  slug: "greyhound",
  species: "dog",
  name: "Greyhound",
  originCountries: ["Egypt"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "411",
      registryUrl: "https://www.akc.org/dog-breeds/greyhound/",
      recognizedYear: 1885,
      sourceId: "akc-greyhound",
    },
  ],
  measurements: {
    heightCm: [
      { min: 71.1, max: 76.2, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "28-30 inches (male)", sourceId: "akc-greyhound" },
      { min: 68.6, max: 71.1, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "27-28 inches (female)", sourceId: "akc-greyhound" },
    ],
    weightKg: [
      { min: 29.5, max: 31.8, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "65-70 pounds (male)", sourceId: "akc-greyhound" },
      { min: 27.2, max: 29.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "60-65 pounds (female)", sourceId: "akc-greyhound" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-greyhound",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-greyhound" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-greyhound" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-greyhound" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-greyhound" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-greyhound" },
  },
  lifespanYears: { min: 10, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "10-13 years", sourceId: "akc-greyhound" },
  sources: ["akc-greyhound"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
