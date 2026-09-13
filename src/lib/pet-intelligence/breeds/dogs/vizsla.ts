import type { Breed } from "../../types.ts";

/** Vizsla. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-vizsla",
  slug: "vizsla",
  species: "dog",
  name: "Vizsla",
  aliases: ["V"],
  originCountries: ["Hungary"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "122",
      registryUrl: "https://www.akc.org/dog-breeds/vizsla/",
      recognizedYear: 1960,
      sourceId: "akc-vizsla",
    },
  ],
  measurements: {
    heightCm: [
      { min: 55.9, max: 61, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "22-24 inches (male)", sourceId: "akc-vizsla" },
      { min: 53.3, max: 58.4, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "21-23 inches (female)", sourceId: "akc-vizsla" },
    ],
    weightKg: [
      { min: 24.9, max: 27.2, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "55-60 pounds (male)", sourceId: "akc-vizsla" },
      { min: 20, max: 24.9, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "44-55 pounds (female)", sourceId: "akc-vizsla" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-vizsla",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-vizsla" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-vizsla" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-vizsla" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-vizsla" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-vizsla" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-vizsla" },
  sources: ["akc-vizsla"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
