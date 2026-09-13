import type { Breed } from "../../types.ts";

/** Newfoundland. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-newfoundland",
  slug: "newfoundland",
  species: "dog",
  name: "Newfoundland",
  aliases: ["Newfie", "Newf"],
  originCountries: ["Canada"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "619",
      registryUrl: "https://www.akc.org/dog-breeds/newfoundland/",
      recognizedYear: 1886,
      sourceId: "akc-newfoundland",
    },
  ],
  measurements: {
    heightCm: [
      { min: 71.1, max: 71.1, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "28 inches (average male)", sourceId: "akc-newfoundland" },
      { min: 66, max: 66, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "26 inches (average female)", sourceId: "akc-newfoundland" },
    ],
    weightKg: [
      { min: 59, max: 68, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "130-150 pounds (male)", sourceId: "akc-newfoundland" },
      { min: 45.4, max: 54.4, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "100-120 pounds (female)", sourceId: "akc-newfoundland" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-newfoundland",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-newfoundland" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-newfoundland" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-newfoundland" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-newfoundland" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-newfoundland" },
  },
  lifespanYears: { min: 9, max: 10, bound: "closed", basis: { kind: "breed" }, statedAs: "9-10 years", sourceId: "akc-newfoundland" },
  sources: ["akc-newfoundland"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
