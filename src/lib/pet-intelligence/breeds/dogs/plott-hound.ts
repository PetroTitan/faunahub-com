import type { Breed } from "../../types.ts";

/** Plott Hound. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-plott-hound",
  slug: "plott-hound",
  species: "dog",
  name: "Plott Hound",
  aliases: ["Plott"],
  originCountries: ["United States"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "423",
      registryUrl: "https://www.akc.org/dog-breeds/plott-hound/",
      recognizedYear: 2006,
      sourceId: "akc-plott-hound",
    },
  ],
  measurements: {
    heightCm: [
      { min: 50.8, max: 63.5, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "20-25 inches (male)", sourceId: "akc-plott-hound" },
      { min: 50.8, max: 58.4, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "20-23 inches (female)", sourceId: "akc-plott-hound" },
    ],
    weightKg: [
      { min: 22.7, max: 27.2, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "50-60 pounds (male)", sourceId: "akc-plott-hound" },
      { min: 18.1, max: 24.9, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "40-55 pounds (female)", sourceId: "akc-plott-hound" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-plott-hound",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-plott-hound" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-plott-hound" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-plott-hound" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-plott-hound" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-plott-hound" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-plott-hound" },
  sources: ["akc-plott-hound"],
  images: ["dog-plott-hound-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
