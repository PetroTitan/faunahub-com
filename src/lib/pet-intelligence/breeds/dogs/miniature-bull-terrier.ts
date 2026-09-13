import type { Breed } from "../../types.ts";

/** Miniature Bull Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-miniature-bull-terrier",
  slug: "miniature-bull-terrier",
  species: "dog",
  name: "Miniature Bull Terrier",
  aliases: ["Mini Bull", "MBT"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "227",
      registryUrl: "https://www.akc.org/dog-breeds/miniature-bull-terrier/",
      recognizedYear: 1991,
      sourceId: "akc-miniature-bull-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 25.4, max: 35.6, bound: "closed", basis: { kind: "breed" }, statedAs: "10-14 inches", sourceId: "akc-miniature-bull-terrier" },
    ],
    weightKg: [
      { min: 8.2, max: 12.7, bound: "closed", basis: { kind: "breed" }, statedAs: "18-28 pounds", sourceId: "akc-miniature-bull-terrier" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-miniature-bull-terrier",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-miniature-bull-terrier" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-miniature-bull-terrier" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-miniature-bull-terrier" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-miniature-bull-terrier" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-miniature-bull-terrier" },
  },
  lifespanYears: { min: 11, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "11-13 years", sourceId: "akc-miniature-bull-terrier" },
  sources: ["akc-miniature-bull-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
