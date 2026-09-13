import type { Breed } from "../../types.ts";

/** Pointer. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-pointer",
  slug: "pointer",
  species: "dog",
  name: "Pointer",
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "101",
      registryUrl: "https://www.akc.org/dog-breeds/pointer/",
      recognizedYear: 1878,
      sourceId: "akc-pointer",
    },
  ],
  measurements: {
    heightCm: [
      { min: 63.5, max: 71.1, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "25-28 inches (male)", sourceId: "akc-pointer" },
      { min: 58.4, max: 66, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "23-26 inches (female)", sourceId: "akc-pointer" },
    ],
    weightKg: [
      { min: 24.9, max: 34, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "55-75 pounds (male)", sourceId: "akc-pointer" },
      { min: 20.4, max: 29.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "45-65 pounds (female)", sourceId: "akc-pointer" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-pointer",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-pointer" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-pointer" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-pointer" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-pointer" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-pointer" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-pointer" },
  sources: ["akc-pointer"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
