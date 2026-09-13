import type { Breed } from "../../types.ts";

/** Basset Hound. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-basset-hound",
  slug: "basset-hound",
  species: "dog",
  name: "Basset Hound",
  aliases: ["Basset"],
  originCountries: ["France"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "403",
      registryUrl: "https://www.akc.org/dog-breeds/basset-hound/",
      recognizedYear: 1885,
      sourceId: "akc-basset-hound",
    },
  ],
  measurements: {
    heightCm: [
      { max: 38.1, bound: "at-most", basis: { kind: "breed" }, statedAs: "up to 15 inches", sourceId: "akc-basset-hound" },
    ],
    weightKg: [
      { min: 18.1, max: 29.5, bound: "closed", basis: { kind: "breed" }, statedAs: "40-65 pounds", sourceId: "akc-basset-hound" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-basset-hound",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-basset-hound" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-basset-hound" },
    exerciseNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-basset-hound" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-basset-hound" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-basset-hound" },
  },
  lifespanYears: { min: 12, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "12-13 years", sourceId: "akc-basset-hound" },
  sources: ["akc-basset-hound"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
