import type { Breed } from "../../types.ts";

/** Boerboel. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-boerboel",
  slug: "boerboel",
  species: "dog",
  name: "Boerboel",
  aliases: ["Bole"],
  originCountries: ["South Africa"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "659",
      registryUrl: "https://www.akc.org/dog-breeds/boerboel/",
      recognizedYear: 2015,
      sourceId: "akc-boerboel",
    },
  ],
  measurements: {
    heightCm: [
      { min: 61, max: 68.6, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "24-27 inches (male)", sourceId: "akc-boerboel" },
      { min: 55.9, max: 63.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "22-25 inches (female)", sourceId: "akc-boerboel" },
    ],
    weightKg: [
      { min: 68, max: 90.7, bound: "closed", basis: { kind: "breed" }, statedAs: "150-200 pounds", sourceId: "akc-boerboel" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-boerboel",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-boerboel" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-boerboel" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-boerboel" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-boerboel" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-boerboel" },
  },
  lifespanYears: { min: 9, max: 11, bound: "closed", basis: { kind: "breed" }, statedAs: "9-11 years", sourceId: "akc-boerboel" },
  sources: ["akc-boerboel"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
