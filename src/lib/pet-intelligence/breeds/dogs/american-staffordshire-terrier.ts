import type { Breed } from "../../types.ts";

/** American Staffordshire Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-american-staffordshire-terrier",
  slug: "american-staffordshire-terrier",
  species: "dog",
  name: "American Staffordshire Terrier",
  aliases: ["AmStaff"],
  originCountries: ["United States"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "202",
      registryUrl: "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
      recognizedYear: 1936,
      sourceId: "akc-american-staffordshire-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 45.7, max: 48.3, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "18-19 inches (male)", sourceId: "akc-american-staffordshire-terrier" },
      { min: 43.2, max: 45.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "17-18 inches (female)", sourceId: "akc-american-staffordshire-terrier" },
    ],
    weightKg: [
      { min: 24.9, max: 31.8, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "55-70 pounds (male)", sourceId: "akc-american-staffordshire-terrier" },
      { min: 18.1, max: 24.9, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "40-55 pounds (female)", sourceId: "akc-american-staffordshire-terrier" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-american-staffordshire-terrier",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-staffordshire-terrier" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-staffordshire-terrier" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-staffordshire-terrier" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-staffordshire-terrier" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-staffordshire-terrier" },
  },
  lifespanYears: { min: 12, max: 16, bound: "closed", basis: { kind: "breed" }, statedAs: "12-16 years", sourceId: "akc-american-staffordshire-terrier" },
  sources: ["akc-american-staffordshire-terrier"],
  images: ["dog-american-staffordshire-terrier-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
