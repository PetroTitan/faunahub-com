import type { Breed } from "../../types.ts";

/** American English Coonhound. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-american-english-coonhound",
  slug: "american-english-coonhound",
  species: "dog",
  name: "American English Coonhound",
  originCountries: ["United States"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "425",
      registryUrl: "https://www.akc.org/dog-breeds/american-english-coonhound/",
      recognizedYear: 2011,
      sourceId: "akc-american-english-coonhound",
    },
  ],
  measurements: {
    heightCm: [
      { min: 61, max: 66, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "24-26 inches (male)", sourceId: "akc-american-english-coonhound" },
      { min: 58.4, max: 63.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "23-25 inches (female)", sourceId: "akc-american-english-coonhound" },
    ],
    weightKg: [
      { min: 20.4, max: 29.5, bound: "closed", basis: { kind: "breed" }, statedAs: "45-65 pounds", sourceId: "akc-american-english-coonhound" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-american-english-coonhound",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-english-coonhound" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-english-coonhound" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-english-coonhound" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-english-coonhound" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-english-coonhound" },
  },
  lifespanYears: { min: 11, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "11-12 years", sourceId: "akc-american-english-coonhound" },
  sources: ["akc-american-english-coonhound"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
