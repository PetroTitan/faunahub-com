import type { Breed } from "../../types.ts";

/** Miniature Pinscher. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-miniature-pinscher",
  slug: "miniature-pinscher",
  species: "dog",
  name: "Miniature Pinscher",
  aliases: ["Min Pin", "King of Toys"],
  originCountries: ["Germany"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Toy Group",
      registryBreedCode: "508",
      registryUrl: "https://www.akc.org/dog-breeds/miniature-pinscher/",
      recognizedYear: 1925,
      sourceId: "akc-miniature-pinscher",
    },
  ],
  measurements: {
    heightCm: [
      { min: 25.4, max: 31.8, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12.5 inches", sourceId: "akc-miniature-pinscher" },
    ],
    weightKg: [
      { min: 3.6, max: 4.5, bound: "closed", basis: { kind: "breed" }, statedAs: "8-10 pounds", sourceId: "akc-miniature-pinscher" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-miniature-pinscher",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-miniature-pinscher" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-miniature-pinscher" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-miniature-pinscher" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-miniature-pinscher" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-miniature-pinscher" },
  },
  lifespanYears: { min: 12, max: 16, bound: "closed", basis: { kind: "breed" }, statedAs: "12-16 years", sourceId: "akc-miniature-pinscher" },
  sources: ["akc-miniature-pinscher"],
  images: ["dog-miniature-pinscher-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
