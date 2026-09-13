import type { Breed } from "../../types.ts";

/** Pekingese. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-pekingese",
  slug: "pekingese",
  species: "dog",
  name: "Pekingese",
  aliases: ["Peke"],
  originCountries: ["China"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Toy Group",
      registryBreedCode: "510",
      registryUrl: "https://www.akc.org/dog-breeds/pekingese/",
      recognizedYear: 1906,
      sourceId: "akc-pekingese",
    },
  ],
  measurements: {
    heightCm: [
      { min: 15.2, max: 22.9, bound: "closed", basis: { kind: "breed" }, statedAs: "6-9 inches", sourceId: "akc-pekingese" },
    ],
    weightKg: [
      { max: 6.4, bound: "at-most", basis: { kind: "breed" }, statedAs: "up to 14 pounds", sourceId: "akc-pekingese" },
    ],
  },
  coat: {
    length: "long",
    types: ["Double"],
    statedAs: "AKC coat length: Long; coat type: Double",
    sourceId: "akc-pekingese",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-pekingese" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-pekingese" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-pekingese" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-pekingese" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-pekingese" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-pekingese" },
  sources: ["akc-pekingese"],
  images: ["dog-pekingese-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
