import type { Breed } from "../../types.ts";

/** Cesky Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-cesky-terrier",
  slug: "cesky-terrier",
  species: "dog",
  name: "Cesky Terrier",
  aliases: ["Cesky", "Bohemian Terrier"],
  originCountries: ["Czech Republic"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "228",
      registryUrl: "https://www.akc.org/dog-breeds/cesky-terrier/",
      recognizedYear: 2011,
      sourceId: "akc-cesky-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 25.4, max: 33, bound: "closed", basis: { kind: "breed" }, statedAs: "10-13 inches", sourceId: "akc-cesky-terrier" },
    ],
    weightKg: [
      { min: 6.4, max: 10.9, bound: "closed", basis: { kind: "breed" }, statedAs: "14-24 pounds", sourceId: "akc-cesky-terrier" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Silky", "Wavy"],
    statedAs: "AKC coat length: Medium; coat type: Silky, Wavy",
    sourceId: "akc-cesky-terrier",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-cesky-terrier" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-cesky-terrier" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-cesky-terrier" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-cesky-terrier" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-cesky-terrier" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-cesky-terrier" },
  sources: ["akc-cesky-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
