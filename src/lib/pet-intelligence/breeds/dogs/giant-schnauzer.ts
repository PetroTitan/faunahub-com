import type { Breed } from "../../types.ts";

/** Giant Schnauzer. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-giant-schnauzer",
  slug: "giant-schnauzer",
  species: "dog",
  name: "Giant Schnauzer",
  aliases: ["Giant"],
  originCountries: ["Germany"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "613",
      registryUrl: "https://www.akc.org/dog-breeds/giant-schnauzer/",
      recognizedYear: 1930,
      sourceId: "akc-giant-schnauzer",
    },
  ],
  measurements: {
    heightCm: [
      { min: 64.8, max: 69.9, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "25.5-27.5 inches (male)", sourceId: "akc-giant-schnauzer" },
      { min: 59.7, max: 64.8, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "23.5-25.5 inches (female)", sourceId: "akc-giant-schnauzer" },
    ],
    weightKg: [
      { min: 34, max: 43.1, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "75-95 pounds (male)", sourceId: "akc-giant-schnauzer" },
      { min: 24.9, max: 36.3, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "55-80 pounds (female)", sourceId: "akc-giant-schnauzer" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double", "Wiry"],
    statedAs: "AKC coat length: Medium; coat type: Double, Wiry",
    sourceId: "akc-giant-schnauzer",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-giant-schnauzer" },
    groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-giant-schnauzer" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-giant-schnauzer" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-giant-schnauzer" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-giant-schnauzer" },
  },
  lifespanYears: { min: 10, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "10-13 years", sourceId: "akc-giant-schnauzer" },
  sources: ["akc-giant-schnauzer"],
  images: ["dog-giant-schnauzer-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
