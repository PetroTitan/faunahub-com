import type { Breed } from "../../types.ts";

/** Biewer Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-biewer-terrier",
  slug: "biewer-terrier",
  species: "dog",
  name: "Biewer Terrier",
  originCountries: ["Germany"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Toy Group",
      registryBreedCode: "548",
      registryUrl: "https://www.akc.org/dog-breeds/biewer-terrier/",
      recognizedYear: 2021,
      sourceId: "akc-biewer-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 17.8, max: 27.9, bound: "closed", basis: { kind: "breed" }, statedAs: "7-11 inches", sourceId: "akc-biewer-terrier" },
    ],
    weightKg: [
      { min: 1.8, max: 3.6, bound: "closed", basis: { kind: "breed" }, statedAs: "4-8 pounds", sourceId: "akc-biewer-terrier" },
    ],
  },
  coat: {
    length: "long",
    types: ["Silky"],
    statedAs: "AKC coat length: Long; coat type: Silky",
    sourceId: "akc-biewer-terrier",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-biewer-terrier" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-biewer-terrier" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-biewer-terrier" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-biewer-terrier" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-biewer-terrier" },
  },
  lifespanYears: { min: 16, max: 16, bound: "about", basis: { kind: "breed" }, statedAs: "16 years", sourceId: "akc-biewer-terrier" },
  sources: ["akc-biewer-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
