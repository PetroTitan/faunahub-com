import type { Breed } from "../../types.ts";

/** Cirneco dell’Etna. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-cirneco-delletna",
  slug: "cirneco-delletna",
  species: "dog",
  name: "Cirneco dell’Etna",
  canonicalCommonName: "Cirneco dell’Etna",
  aliases: ["Cirneco", "Sicilian Greyhound"],
  originCountries: ["Sicily"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "440",
      registryUrl: "https://www.akc.org/dog-breeds/cirneco-delletna/",
      recognizedYear: 2015,
      sourceId: "akc-cirneco-delletna",
    },
  ],
  measurements: {
    heightCm: [
      { min: 45.7, max: 50.8, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "18-20 inches (male)", sourceId: "akc-cirneco-delletna" },
      { min: 43.2, max: 48.3, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "17-19 inches (female)", sourceId: "akc-cirneco-delletna" },
    ],
    weightKg: [
      { min: 9.1, max: 12.7, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "20-28 pounds (male)", sourceId: "akc-cirneco-delletna" },
      { min: 8.6, max: 11.3, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "19-25 pounds (female)", sourceId: "akc-cirneco-delletna" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-cirneco-delletna",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-cirneco-delletna" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-cirneco-delletna" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-cirneco-delletna" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-cirneco-delletna" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-cirneco-delletna" },
  },
  lifespanYears: { min: 15, max: 16, bound: "closed", basis: { kind: "breed" }, statedAs: "15-16 years", sourceId: "akc-cirneco-delletna" },
  sources: ["akc-cirneco-delletna"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
