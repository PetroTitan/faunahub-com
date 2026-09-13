import type { Breed } from "../../types.ts";

/** Lakeland Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-lakeland-terrier",
  slug: "lakeland-terrier",
  species: "dog",
  name: "Lakeland Terrier",
  aliases: ["Lakeland", "Lakie"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "212",
      registryUrl: "https://www.akc.org/dog-breeds/lakeland-terrier/",
      recognizedYear: 1934,
      sourceId: "akc-lakeland-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 36.8, max: 38.1, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "14.5-15 inches (male)", sourceId: "akc-lakeland-terrier" },
    ],
    weightKg: [
      { min: 7.7, max: 7.7, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "17 pounds (male)", sourceId: "akc-lakeland-terrier" },
    ],
  },
  coat: {
    length: "short",
    types: ["Double", "Wiry"],
    statedAs: "AKC coat length: Short; coat type: Double, Wiry",
    sourceId: "akc-lakeland-terrier",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-lakeland-terrier" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-lakeland-terrier" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-lakeland-terrier" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-lakeland-terrier" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-lakeland-terrier" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-lakeland-terrier" },
  sources: ["akc-lakeland-terrier"],
  images: ["dog-lakeland-terrier-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
