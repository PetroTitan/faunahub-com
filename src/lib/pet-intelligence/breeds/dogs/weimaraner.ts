import type { Breed } from "../../types.ts";

/** Weimaraner. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-weimaraner",
  slug: "weimaraner",
  species: "dog",
  name: "Weimaraner",
  aliases: ["The Gray Ghost"],
  originCountries: ["Germany"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "123",
      registryUrl: "https://www.akc.org/dog-breeds/weimaraner/",
      recognizedYear: 1943,
      sourceId: "akc-weimaraner",
    },
  ],
  measurements: {
    heightCm: [
      { min: 63.5, max: 68.6, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "25-27 inches (male)", sourceId: "akc-weimaraner" },
      { min: 58.4, max: 63.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "23-25 inches (female)", sourceId: "akc-weimaraner" },
    ],
    weightKg: [
      { min: 31.8, max: 40.8, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "70-90 pounds (male)", sourceId: "akc-weimaraner" },
      { min: 24.9, max: 34, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "55-75 pounds (female)", sourceId: "akc-weimaraner" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-weimaraner",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-weimaraner" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-weimaraner" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-weimaraner" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-weimaraner" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-weimaraner" },
  },
  lifespanYears: { min: 10, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "10-13 years", sourceId: "akc-weimaraner" },
  sources: ["akc-weimaraner"],
  images: ["dog-weimaraner-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
