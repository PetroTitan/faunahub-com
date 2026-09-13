import type { Breed } from "../../types.ts";

/** Neapolitan Mastiff. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-neapolitan-mastiff",
  slug: "neapolitan-mastiff",
  species: "dog",
  name: "Neapolitan Mastiff",
  aliases: ["Mastino", "Neo"],
  originCountries: ["Italy"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "642",
      registryUrl: "https://www.akc.org/dog-breeds/neapolitan-mastiff/",
      recognizedYear: 2004,
      sourceId: "akc-neapolitan-mastiff",
    },
  ],
  measurements: {
    heightCm: [
      { min: 66, max: 78.7, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "26-31 inches (male)", sourceId: "akc-neapolitan-mastiff" },
      { min: 61, max: 73.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "24-29 inches (female)", sourceId: "akc-neapolitan-mastiff" },
    ],
    weightKg: [
      { min: 68, max: 68, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "150 pounds (male)", sourceId: "akc-neapolitan-mastiff" },
      { min: 49.9, max: 49.9, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "110 pounds (female)", sourceId: "akc-neapolitan-mastiff" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-neapolitan-mastiff",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-neapolitan-mastiff" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-neapolitan-mastiff" },
    exerciseNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-neapolitan-mastiff" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-neapolitan-mastiff" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-neapolitan-mastiff" },
  },
  lifespanYears: { min: 7, max: 9, bound: "closed", basis: { kind: "breed" }, statedAs: "7-9 years", sourceId: "akc-neapolitan-mastiff" },
  sources: ["akc-neapolitan-mastiff"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
