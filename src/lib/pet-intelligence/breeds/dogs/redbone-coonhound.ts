import type { Breed } from "../../types.ts";

/** Redbone Coonhound. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-redbone-coonhound",
  slug: "redbone-coonhound",
  species: "dog",
  name: "Redbone Coonhound",
  aliases: ["Redbone"],
  originCountries: ["United States"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "430",
      registryUrl: "https://www.akc.org/dog-breeds/redbone-coonhound/",
      recognizedYear: 2009,
      sourceId: "akc-redbone-coonhound",
    },
  ],
  measurements: {
    heightCm: [
      { min: 55.9, max: 68.6, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "22-27 inches (male)", sourceId: "akc-redbone-coonhound" },
      { min: 53.3, max: 66, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "21-26 inches (female)", sourceId: "akc-redbone-coonhound" },
    ],
    weightKg: [
      { min: 20.4, max: 31.8, bound: "closed", basis: { kind: "breed" }, statedAs: "45-70 pounds", sourceId: "akc-redbone-coonhound" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-redbone-coonhound",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-redbone-coonhound" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-redbone-coonhound" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-redbone-coonhound" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-redbone-coonhound" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-redbone-coonhound" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-redbone-coonhound" },
  sources: ["akc-redbone-coonhound"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
