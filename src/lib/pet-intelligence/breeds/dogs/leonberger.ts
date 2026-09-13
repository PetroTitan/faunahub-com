import type { Breed } from "../../types.ts";

/** Leonberger. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-leonberger",
  slug: "leonberger",
  species: "dog",
  name: "Leonberger",
  aliases: ["Leo", "Gentle Lion"],
  originCountries: ["Germany"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "654",
      registryUrl: "https://www.akc.org/dog-breeds/leonberger/",
      recognizedYear: 2010,
      sourceId: "akc-leonberger",
    },
  ],
  measurements: {
    heightCm: [
      { min: 71.1, max: 80, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "28-31.5 inches (male)", sourceId: "akc-leonberger" },
      { min: 64.8, max: 74.9, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "25.5-29.5 inches (female)", sourceId: "akc-leonberger" },
    ],
    weightKg: [
      { min: 49.9, max: 77.1, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "110-170 pounds (male)", sourceId: "akc-leonberger" },
      { min: 40.8, max: 63.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "90-140 pounds (female)", sourceId: "akc-leonberger" },
    ],
  },
  coat: {
    length: "long",
    types: ["Double"],
    statedAs: "AKC coat length: Long; coat type: Double",
    sourceId: "akc-leonberger",
  },
  traits: {
    shedding: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-leonberger" },
    groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-leonberger" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-leonberger" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-leonberger" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-leonberger" },
  },
  lifespanYears: { min: 7, max: 7, bound: "about", basis: { kind: "breed" }, statedAs: "7 years", sourceId: "akc-leonberger" },
  sources: ["akc-leonberger"],
  images: ["dog-leonberger-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
