import type { Breed } from "../../types.ts";

/** Bracco Italiano. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-bracco-italiano",
  slug: "bracco-italiano",
  species: "dog",
  name: "Bracco Italiano",
  aliases: ["Italian Pointer"],
  originCountries: ["Italy"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "133",
      registryUrl: "https://www.akc.org/dog-breeds/bracco-italiano/",
      recognizedYear: 2022,
      sourceId: "akc-bracco-italiano",
    },
  ],
  measurements: {
    heightCm: [
      { min: 53.3, max: 68.6, bound: "closed", basis: { kind: "breed" }, statedAs: "21-27 inches", sourceId: "akc-bracco-italiano" },
    ],
    weightKg: [
      { min: 24.9, max: 40.8, bound: "closed", basis: { kind: "breed" }, statedAs: "55-90 pounds", sourceId: "akc-bracco-italiano" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-bracco-italiano",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-bracco-italiano" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-bracco-italiano" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-bracco-italiano" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-bracco-italiano" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-bracco-italiano" },
  },
  lifespanYears: { min: 10, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "10-14 years", sourceId: "akc-bracco-italiano" },
  sources: ["akc-bracco-italiano"],
  images: ["dog-bracco-italiano-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
