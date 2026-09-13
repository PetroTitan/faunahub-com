import type { Breed } from "../../types.ts";

/** English Toy Spaniel. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-english-toy-spaniel",
  slug: "english-toy-spaniel",
  species: "dog",
  name: "English Toy Spaniel",
  aliases: ["ETS", "Charlie (U.K.", "King Charles Spaniel)"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Toy Group",
      registryBreedCode: "504",
      registryUrl: "https://www.akc.org/dog-breeds/english-toy-spaniel/",
      recognizedYear: 1886,
      sourceId: "akc-english-toy-spaniel",
    },
  ],
  measurements: {
    heightCm: [
      { min: 22.9, max: 25.4, bound: "closed", basis: { kind: "breed" }, statedAs: "9-10 inches", sourceId: "akc-english-toy-spaniel" },
    ],
    weightKg: [
      { min: 3.6, max: 6.4, bound: "closed", basis: { kind: "breed" }, statedAs: "8-14 pounds", sourceId: "akc-english-toy-spaniel" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Silky", "Double"],
    statedAs: "AKC coat length: Medium; coat type: Silky, Double",
    sourceId: "akc-english-toy-spaniel",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-english-toy-spaniel" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-english-toy-spaniel" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-english-toy-spaniel" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-english-toy-spaniel" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-english-toy-spaniel" },
  },
  lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-english-toy-spaniel" },
  sources: ["akc-english-toy-spaniel"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
