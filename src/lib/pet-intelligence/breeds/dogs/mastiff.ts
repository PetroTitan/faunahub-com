import type { Breed } from "../../types.ts";

/** Mastiff. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-mastiff",
  slug: "mastiff",
  species: "dog",
  name: "Mastiff",
  aliases: ["Gentle Giant"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "618",
      registryUrl: "https://www.akc.org/dog-breeds/mastiff/",
      recognizedYear: 1885,
      sourceId: "akc-mastiff",
    },
  ],
  measurements: {
    heightCm: [
      { min: 76.2, bound: "at-least", basis: { kind: "sex", sex: "male" }, statedAs: "30 inches & up (male)", sourceId: "akc-mastiff" },
      { min: 69.9, bound: "at-least", basis: { kind: "sex", sex: "female" }, statedAs: "27.5 inches & up (female)", sourceId: "akc-mastiff" },
    ],
    weightKg: [
      { min: 72.6, max: 104.3, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "160-230 pounds (male)", sourceId: "akc-mastiff" },
      { min: 54.4, max: 77.1, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "120-170 pounds (female)", sourceId: "akc-mastiff" },
    ],
  },
  coat: {
    length: "short",
    types: ["Double"],
    statedAs: "AKC coat length: Short; coat type: Double",
    sourceId: "akc-mastiff",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-mastiff" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-mastiff" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-mastiff" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-mastiff" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-mastiff" },
  },
  lifespanYears: { min: 6, max: 10, bound: "closed", basis: { kind: "breed" }, statedAs: "6-10 years", sourceId: "akc-mastiff" },
  sources: ["akc-mastiff"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
