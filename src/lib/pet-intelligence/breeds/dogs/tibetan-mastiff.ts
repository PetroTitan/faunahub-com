import type { Breed } from "../../types.ts";

/** Tibetan Mastiff. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-tibetan-mastiff",
  slug: "tibetan-mastiff",
  species: "dog",
  name: "Tibetan Mastiff",
  aliases: ["TM"],
  originCountries: ["Tibet"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "640",
      registryUrl: "https://www.akc.org/dog-breeds/tibetan-mastiff/",
      recognizedYear: 2006,
      sourceId: "akc-tibetan-mastiff",
    },
  ],
  measurements: {
    heightCm: [
      { min: 66, bound: "at-least", basis: { kind: "sex", sex: "male" }, statedAs: "minimum 26 inches (male)", sourceId: "akc-tibetan-mastiff" },
      { min: 61, bound: "at-least", basis: { kind: "sex", sex: "female" }, statedAs: "minimum 24 inches (female)", sourceId: "akc-tibetan-mastiff" },
    ],
    weightKg: [
      { min: 40.8, max: 68, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "90-150 pounds (male)", sourceId: "akc-tibetan-mastiff" },
      { min: 31.8, max: 54.4, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "70-120 pounds (female)", sourceId: "akc-tibetan-mastiff" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-tibetan-mastiff",
  },
  traits: {
    shedding: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-tibetan-mastiff" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-tibetan-mastiff" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-tibetan-mastiff" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-tibetan-mastiff" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-tibetan-mastiff" },
  },
  lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-tibetan-mastiff" },
  sources: ["akc-tibetan-mastiff"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
