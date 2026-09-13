import type { Breed } from "../../types.ts";

/** Ibizan Hound. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-ibizan-hound",
  slug: "ibizan-hound",
  species: "dog",
  name: "Ibizan Hound",
  aliases: ["Ibizan", "Beezer"],
  originCountries: ["Spain"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "420",
      registryUrl: "https://www.akc.org/dog-breeds/ibizan-hound/",
      recognizedYear: 1978,
      sourceId: "akc-ibizan-hound",
    },
  ],
  measurements: {
    heightCm: [
      { min: 59.7, max: 69.9, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "23.5-27.5 inches (male)", sourceId: "akc-ibizan-hound" },
      { min: 57.2, max: 66, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "22.5-26 inches (female)", sourceId: "akc-ibizan-hound" },
    ],
    weightKg: [
      { min: 22.7, max: 22.7, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "50 pounds (male)", sourceId: "akc-ibizan-hound" },
      { min: 20.4, max: 20.4, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "45 pounds (female)", sourceId: "akc-ibizan-hound" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth", "Wiry"],
    statedAs: "AKC coat length: Short; coat type: Smooth, Wiry",
    sourceId: "akc-ibizan-hound",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-ibizan-hound" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-ibizan-hound" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-ibizan-hound" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-ibizan-hound" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-ibizan-hound" },
  },
  lifespanYears: { min: 11, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "11-14 years", sourceId: "akc-ibizan-hound" },
  sources: ["akc-ibizan-hound"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
