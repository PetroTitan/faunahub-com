import type { Breed } from "../../types.ts";

/** Staffordshire Bull Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-staffordshire-bull-terrier",
  slug: "staffordshire-bull-terrier",
  species: "dog",
  name: "Staffordshire Bull Terrier",
  aliases: ["Stafford"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "224",
      registryUrl: "https://www.akc.org/dog-breeds/staffordshire-bull-terrier/",
      recognizedYear: 1974,
      sourceId: "akc-staffordshire-bull-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 35.6, max: 40.6, bound: "closed", basis: { kind: "breed" }, statedAs: "14-16 inches", sourceId: "akc-staffordshire-bull-terrier" },
    ],
    weightKg: [
      { min: 12.7, max: 17.2, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "28-38 pounds (male)", sourceId: "akc-staffordshire-bull-terrier" },
      { min: 10.9, max: 15.4, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "24-34 pounds (female)", sourceId: "akc-staffordshire-bull-terrier" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-staffordshire-bull-terrier",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-staffordshire-bull-terrier" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-staffordshire-bull-terrier" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-staffordshire-bull-terrier" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-staffordshire-bull-terrier" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-staffordshire-bull-terrier" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-staffordshire-bull-terrier" },
  sources: ["akc-staffordshire-bull-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
