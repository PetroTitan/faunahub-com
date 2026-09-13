import type { Breed } from "../../types.ts";

/** Standard Schnauzer. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-standard-schnauzer",
  slug: "standard-schnauzer",
  species: "dog",
  name: "Standard Schnauzer",
  aliases: ["Standard"],
  originCountries: ["Germany"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "627",
      registryUrl: "https://www.akc.org/dog-breeds/standard-schnauzer/",
      recognizedYear: 1904,
      sourceId: "akc-standard-schnauzer",
    },
  ],
  measurements: {
    heightCm: [
      { min: 47, max: 49.5, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "18.5-19.5 inches (male)", sourceId: "akc-standard-schnauzer" },
      { min: 44.5, max: 47, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "17.5-18.5 inches (female)", sourceId: "akc-standard-schnauzer" },
    ],
    weightKg: [
      { min: 15.9, max: 22.7, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "35-50 pounds (male)", sourceId: "akc-standard-schnauzer" },
      { min: 13.6, max: 20.4, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "30-45 pounds (female)", sourceId: "akc-standard-schnauzer" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double", "Wiry"],
    statedAs: "AKC coat length: Medium; coat type: Double, Wiry",
    sourceId: "akc-standard-schnauzer",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-standard-schnauzer" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-standard-schnauzer" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-standard-schnauzer" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-standard-schnauzer" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-standard-schnauzer" },
  },
  lifespanYears: { min: 13, max: 16, bound: "closed", basis: { kind: "breed" }, statedAs: "13-16 years", sourceId: "akc-standard-schnauzer" },
  sources: ["akc-standard-schnauzer"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
