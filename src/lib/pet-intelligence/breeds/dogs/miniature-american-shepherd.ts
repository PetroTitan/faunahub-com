import type { Breed } from "../../types.ts";

/** Miniature American Shepherd. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-miniature-american-shepherd",
  slug: "miniature-american-shepherd",
  species: "dog",
  name: "Miniature American Shepherd",
  aliases: ["Mini American"],
  originCountries: ["United States"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "861",
      registryUrl: "https://www.akc.org/dog-breeds/miniature-american-shepherd/",
      recognizedYear: 2015,
      sourceId: "akc-miniature-american-shepherd",
    },
  ],
  measurements: {
    heightCm: [
      { min: 35.6, max: 45.7, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "14-18 inches (male)", sourceId: "akc-miniature-american-shepherd" },
      { min: 33, max: 43.2, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "13-17 inches (female)", sourceId: "akc-miniature-american-shepherd" },
    ],
    weightKg: [
      { min: 9.1, max: 18.1, bound: "closed", basis: { kind: "breed" }, statedAs: "20-40 pounds", sourceId: "akc-miniature-american-shepherd" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-miniature-american-shepherd",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-miniature-american-shepherd" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-miniature-american-shepherd" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-miniature-american-shepherd" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-miniature-american-shepherd" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-miniature-american-shepherd" },
  },
  lifespanYears: { min: 12, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "12-13 years", sourceId: "akc-miniature-american-shepherd" },
  sources: ["akc-miniature-american-shepherd"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
