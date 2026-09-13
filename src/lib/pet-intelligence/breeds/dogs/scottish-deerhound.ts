import type { Breed } from "../../types.ts";

/** Scottish Deerhound. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-scottish-deerhound",
  slug: "scottish-deerhound",
  species: "dog",
  name: "Scottish Deerhound",
  aliases: ["Deerhound", "Royal Dog of Scotland"],
  originCountries: ["Scotland"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "418",
      registryUrl: "https://www.akc.org/dog-breeds/scottish-deerhound/",
      recognizedYear: 1886,
      sourceId: "akc-scottish-deerhound",
    },
  ],
  measurements: {
    heightCm: [
      { min: 76.2, max: 81.3, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "30-32 inches (male)", sourceId: "akc-scottish-deerhound" },
      { min: 71.1, bound: "at-least", basis: { kind: "sex", sex: "female" }, statedAs: "28 inches & up (female)", sourceId: "akc-scottish-deerhound" },
    ],
    weightKg: [
      { min: 38.6, max: 49.9, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "85-110 pounds (male)", sourceId: "akc-scottish-deerhound" },
      { min: 34, max: 43.1, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "75-95 pounds (female)", sourceId: "akc-scottish-deerhound" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Wiry", "Double"],
    statedAs: "AKC coat length: Medium; coat type: Wiry, Double",
    sourceId: "akc-scottish-deerhound",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-scottish-deerhound" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-scottish-deerhound" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-scottish-deerhound" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-scottish-deerhound" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-scottish-deerhound" },
  },
  lifespanYears: { min: 8, max: 11, bound: "closed", basis: { kind: "breed" }, statedAs: "8-11 years", sourceId: "akc-scottish-deerhound" },
  sources: ["akc-scottish-deerhound"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
