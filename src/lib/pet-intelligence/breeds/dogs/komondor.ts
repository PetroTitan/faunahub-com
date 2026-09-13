import type { Breed } from "../../types.ts";

/** Komondor. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-komondor",
  slug: "komondor",
  species: "dog",
  name: "Komondor",
  aliases: ["Kom"],
  originCountries: ["Hungary"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "616",
      registryUrl: "https://www.akc.org/dog-breeds/komondor/",
      recognizedYear: 1937,
      sourceId: "akc-komondor",
    },
  ],
  measurements: {
    heightCm: [
      { min: 69.9, bound: "at-least", basis: { kind: "sex", sex: "male" }, statedAs: "27.5 minimum inches (male)", sourceId: "akc-komondor" },
      { min: 64.8, bound: "at-least", basis: { kind: "sex", sex: "female" }, statedAs: "25.5 minimum inches (female)", sourceId: "akc-komondor" },
    ],
    weightKg: [
      { min: 45.4, bound: "at-least", basis: { kind: "sex", sex: "male" }, statedAs: "100 pounds or more (male)", sourceId: "akc-komondor" },
      { min: 36.3, bound: "at-least", basis: { kind: "sex", sex: "female" }, statedAs: "80 pounds or more (female)", sourceId: "akc-komondor" },
    ],
  },
  coat: {
    length: "long",
    types: ["Corded"],
    statedAs: "AKC coat length: Long; coat type: Corded",
    sourceId: "akc-komondor",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-komondor" },
    groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-komondor" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-komondor" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-komondor" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-komondor" },
  },
  lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-komondor" },
  sources: ["akc-komondor"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
