import type { Breed } from "../../types.ts";

/** Cavalier King Charles Spaniel. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-cavalier-king-charles-spaniel",
  slug: "cavalier-king-charles-spaniel",
  species: "dog",
  name: "Cavalier King Charles Spaniel",
  aliases: ["Cavie"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Toy Group",
      registryBreedCode: "517",
      registryUrl: "https://www.akc.org/dog-breeds/cavalier-king-charles-spaniel/",
      recognizedYear: 1995,
      sourceId: "akc-cavalier-king-charles-spaniel",
    },
  ],
  measurements: {
    heightCm: [
      { min: 30.5, max: 33, bound: "closed", basis: { kind: "breed" }, statedAs: "12-13 inches", sourceId: "akc-cavalier-king-charles-spaniel" },
    ],
    weightKg: [
      { min: 5.9, max: 8.2, bound: "closed", basis: { kind: "breed" }, statedAs: "13-18 pounds", sourceId: "akc-cavalier-king-charles-spaniel" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Silky", "Wavy"],
    statedAs: "AKC coat length: Medium; coat type: Silky, Wavy",
    sourceId: "akc-cavalier-king-charles-spaniel",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-cavalier-king-charles-spaniel" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-cavalier-king-charles-spaniel" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-cavalier-king-charles-spaniel" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-cavalier-king-charles-spaniel" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-cavalier-king-charles-spaniel" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-cavalier-king-charles-spaniel" },
  sources: ["akc-cavalier-king-charles-spaniel"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
