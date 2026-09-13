import type { Breed } from "../../types.ts";

/** Havanese. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-havanese",
  slug: "havanese",
  species: "dog",
  name: "Havanese",
  aliases: ["Havana Silk Dog"],
  originCountries: ["Cuba"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Toy Group",
      registryBreedCode: "518",
      registryUrl: "https://www.akc.org/dog-breeds/havanese/",
      recognizedYear: 1996,
      sourceId: "akc-havanese",
    },
  ],
  measurements: {
    heightCm: [
      { min: 21.6, max: 29.2, bound: "closed", basis: { kind: "breed" }, statedAs: "8.5-11.5 inches", sourceId: "akc-havanese" },
    ],
    weightKg: [
      { min: 3.2, max: 5.9, bound: "closed", basis: { kind: "breed" }, statedAs: "7-13 pounds", sourceId: "akc-havanese" },
    ],
  },
  coat: {
    length: "long",
    types: ["Silky", "Double"],
    statedAs: "AKC coat length: Long; coat type: Silky, Double",
    sourceId: "akc-havanese",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-havanese" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-havanese" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-havanese" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-havanese" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-havanese" },
  },
  lifespanYears: { min: 14, max: 16, bound: "closed", basis: { kind: "breed" }, statedAs: "14-16 years", sourceId: "akc-havanese" },
  sources: ["akc-havanese"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
