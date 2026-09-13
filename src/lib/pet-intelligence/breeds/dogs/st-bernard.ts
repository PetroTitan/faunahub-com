import type { Breed } from "../../types.ts";

/** Saint Bernard. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-st-bernard",
  slug: "st-bernard",
  species: "dog",
  name: "Saint Bernard",
  canonicalCommonName: "Saint Bernard",
  aliases: ["Saint", "Hospice Dog"],
  originCountries: ["Switzerland"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "623",
      registryUrl: "https://www.akc.org/dog-breeds/st-bernard/",
      recognizedYear: 1885,
      sourceId: "akc-st-bernard",
    },
  ],
  measurements: {
    heightCm: [
      { min: 71.1, max: 76.2, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "28-30 inches (males)", sourceId: "akc-st-bernard" },
      { min: 66, max: 71.1, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "26-28 inches (female)", sourceId: "akc-st-bernard" },
    ],
    weightKg: [
      { min: 63.5, max: 81.6, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "140-180 pounds (male)", sourceId: "akc-st-bernard" },
      { min: 54.4, max: 63.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "120-140 pounds (female)", sourceId: "akc-st-bernard" },
    ],
  },
  coat: {
    length: "short",
    types: ["Double", "Rough", "Smooth"],
    statedAs: "AKC coat length: Short; coat type: Double, Rough, Smooth",
    sourceId: "akc-st-bernard",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-st-bernard" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-st-bernard" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-st-bernard" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-st-bernard" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-st-bernard" },
  },
  lifespanYears: { min: 8, max: 10, bound: "closed", basis: { kind: "breed" }, statedAs: "8-10 years", sourceId: "akc-st-bernard" },
  sources: ["akc-st-bernard"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
