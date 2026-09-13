import type { Breed } from "../../types.ts";

/** Russell Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-russell-terrier",
  slug: "russell-terrier",
  species: "dog",
  name: "Russell Terrier",
  aliases: ["Russell"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "248",
      registryUrl: "https://www.akc.org/dog-breeds/russell-terrier/",
      recognizedYear: 2012,
      sourceId: "akc-russell-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 25.4, max: 30.5, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 inches", sourceId: "akc-russell-terrier" },
    ],
    weightKg: [
      { min: 4.1, max: 6.8, bound: "closed", basis: { kind: "breed" }, statedAs: "9-15 pounds", sourceId: "akc-russell-terrier" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth", "Wiry"],
    statedAs: "AKC coat length: Short; coat type: Smooth, Wiry",
    sourceId: "akc-russell-terrier",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-russell-terrier" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-russell-terrier" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-russell-terrier" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-russell-terrier" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-russell-terrier" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-russell-terrier" },
  sources: ["akc-russell-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
