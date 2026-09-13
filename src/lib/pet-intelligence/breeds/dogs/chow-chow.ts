import type { Breed } from "../../types.ts";

/** Chow Chow. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-chow-chow",
  slug: "chow-chow",
  species: "dog",
  name: "Chow Chow",
  aliases: ["Chow"],
  originCountries: ["China"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Non-Sporting Group",
      registryBreedCode: "303",
      registryUrl: "https://www.akc.org/dog-breeds/chow-chow/",
      recognizedYear: 1903,
      sourceId: "akc-chow-chow",
    },
  ],
  measurements: {
    heightCm: [
      { min: 43.2, max: 50.8, bound: "closed", basis: { kind: "breed" }, statedAs: "17-20 inches", sourceId: "akc-chow-chow" },
    ],
    weightKg: [
      { min: 20.4, max: 31.8, bound: "closed", basis: { kind: "breed" }, statedAs: "45-70 pounds", sourceId: "akc-chow-chow" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double", "Rough", "Smooth"],
    statedAs: "AKC coat length: Medium; coat type: Double, Rough, Smooth",
    sourceId: "akc-chow-chow",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-chow-chow" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-chow-chow" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-chow-chow" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-chow-chow" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-chow-chow" },
  },
  lifespanYears: { min: 8, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "8-12 years", sourceId: "akc-chow-chow" },
  sources: ["akc-chow-chow"],
  images: ["dog-chow-chow-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
