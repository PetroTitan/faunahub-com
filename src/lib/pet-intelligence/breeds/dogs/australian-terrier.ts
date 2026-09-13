import type { Breed } from "../../types.ts";

/** Australian Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-australian-terrier",
  slug: "australian-terrier",
  species: "dog",
  name: "Australian Terrier",
  originCountries: ["Australia"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "203",
      registryUrl: "https://www.akc.org/dog-breeds/australian-terrier/",
      recognizedYear: 1960,
      sourceId: "akc-australian-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 25.4, max: 27.9, bound: "closed", basis: { kind: "breed" }, statedAs: "10-11 inches", sourceId: "akc-australian-terrier" },
    ],
    weightKg: [
      { min: 6.8, max: 9.1, bound: "closed", basis: { kind: "breed" }, statedAs: "15-20 pounds", sourceId: "akc-australian-terrier" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double", "Rough"],
    statedAs: "AKC coat length: Medium; coat type: Double, Rough",
    sourceId: "akc-australian-terrier",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-australian-terrier" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-australian-terrier" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-australian-terrier" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-australian-terrier" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-australian-terrier" },
  },
  lifespanYears: { min: 11, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "11-15 years", sourceId: "akc-australian-terrier" },
  sources: ["akc-australian-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
