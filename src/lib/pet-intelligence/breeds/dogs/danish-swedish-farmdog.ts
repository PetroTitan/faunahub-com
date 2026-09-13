import type { Breed } from "../../types.ts";

/** Danish-Swedish Farmdog. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-danish-swedish-farmdog",
  slug: "danish-swedish-farmdog",
  species: "dog",
  name: "Danish-Swedish Farmdog",
  canonicalCommonName: "Danish-Swedish Farmdog",
  originCountries: ["Denmark/Sweden"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "662",
      registryUrl: "https://www.akc.org/dog-breeds/danish-swedish-farmdog/",
      recognizedYear: 2025,
      sourceId: "akc-danish-swedish-farmdog",
    },
  ],
  measurements: {
    heightCm: [
      { min: 31.8, max: 36.8, bound: "closed", basis: { kind: "breed" }, statedAs: "12.5-14.5 inches", sourceId: "akc-danish-swedish-farmdog" },
    ],
    weightKg: [
      { min: 6.8, max: 9.1, bound: "closed", basis: { kind: "breed" }, statedAs: "15-20 pounds", sourceId: "akc-danish-swedish-farmdog" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-danish-swedish-farmdog",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-danish-swedish-farmdog" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-danish-swedish-farmdog" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-danish-swedish-farmdog" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-danish-swedish-farmdog" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-danish-swedish-farmdog" },
  },
  lifespanYears: { min: 11, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "11-13 years", sourceId: "akc-danish-swedish-farmdog" },
  sources: ["akc-danish-swedish-farmdog"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
