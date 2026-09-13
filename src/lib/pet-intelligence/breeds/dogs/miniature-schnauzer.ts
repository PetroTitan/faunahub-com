import type { Breed } from "../../types.ts";

/** Miniature Schnauzer. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-miniature-schnauzer",
  slug: "miniature-schnauzer",
  species: "dog",
  name: "Miniature Schnauzer",
  aliases: ["Mini"],
  originCountries: ["Germany"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "214",
      registryUrl: "https://www.akc.org/dog-breeds/miniature-schnauzer/",
      recognizedYear: 1926,
      sourceId: "akc-miniature-schnauzer",
    },
  ],
  measurements: {
    heightCm: [
      { min: 30.5, max: 35.6, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 inches", sourceId: "akc-miniature-schnauzer" },
    ],
    weightKg: [
      { min: 5, max: 9.1, bound: "closed", basis: { kind: "breed" }, statedAs: "11-20 pounds", sourceId: "akc-miniature-schnauzer" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double", "Wiry"],
    statedAs: "AKC coat length: Medium; coat type: Double, Wiry",
    sourceId: "akc-miniature-schnauzer",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-miniature-schnauzer" },
    groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-miniature-schnauzer" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-miniature-schnauzer" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-miniature-schnauzer" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-miniature-schnauzer" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-miniature-schnauzer" },
  sources: ["akc-miniature-schnauzer"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
