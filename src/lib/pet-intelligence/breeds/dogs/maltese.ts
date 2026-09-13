import type { Breed } from "../../types.ts";

/** Maltese. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-maltese",
  slug: "maltese",
  species: "dog",
  name: "Maltese",
  aliases: ["Comforter Dog"],
  originCountries: ["Malta"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Toy Group",
      registryBreedCode: "507",
      registryUrl: "https://www.akc.org/dog-breeds/maltese/",
      recognizedYear: 1888,
      sourceId: "akc-maltese",
    },
  ],
  measurements: {
    heightCm: [
      { min: 17.8, max: 22.9, bound: "closed", basis: { kind: "breed" }, statedAs: "7-9 inches", sourceId: "akc-maltese" },
    ],
    weightKg: [
      { max: 3.2, bound: "at-most", basis: { kind: "breed" }, statedAs: "under 7 pounds", sourceId: "akc-maltese" },
    ],
  },
  coat: {
    length: "long",
    types: ["Silky"],
    statedAs: "AKC coat length: Long; coat type: Silky",
    sourceId: "akc-maltese",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-maltese" },
    groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-maltese" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-maltese" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-maltese" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-maltese" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-maltese" },
  sources: ["akc-maltese"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
