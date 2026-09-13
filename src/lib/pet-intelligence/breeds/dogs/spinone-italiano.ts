import type { Breed } from "../../types.ts";

/** Spinone Italiano. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-spinone-italiano",
  slug: "spinone-italiano",
  species: "dog",
  name: "Spinone Italiano",
  aliases: ["Spinone"],
  originCountries: ["Italy"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "132",
      registryUrl: "https://www.akc.org/dog-breeds/spinone-italiano/",
      recognizedYear: 2000,
      sourceId: "akc-spinone-italiano",
    },
  ],
  measurements: {
    heightCm: [
      { min: 58.4, max: 68.6, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "23-27 inches (male)", sourceId: "akc-spinone-italiano" },
      { min: 55.9, max: 63.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "22-25 inches (female)", sourceId: "akc-spinone-italiano" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Wiry"],
    statedAs: "AKC coat length: Medium; coat type: Wiry",
    sourceId: "akc-spinone-italiano",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-spinone-italiano" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-spinone-italiano" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-spinone-italiano" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-spinone-italiano" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-spinone-italiano" },
  },
  lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-spinone-italiano" },
  sources: ["akc-spinone-italiano"],
  images: ["dog-spinone-italiano-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
