import type { Breed } from "../../types.ts";

/** Afghan Hound. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-afghan-hound",
  slug: "afghan-hound",
  species: "dog",
  name: "Afghan Hound",
  aliases: ["Afghan"],
  originCountries: ["Afghanistan"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "401",
      registryUrl: "https://www.akc.org/dog-breeds/afghan-hound/",
      recognizedYear: 1926,
      sourceId: "akc-afghan-hound",
    },
  ],
  measurements: {
    heightCm: [
      { min: 63.5, max: 68.6, bound: "closed", basis: { kind: "breed" }, statedAs: "25-27 inches", sourceId: "akc-afghan-hound" },
    ],
    weightKg: [
      { min: 22.7, max: 27.2, bound: "closed", basis: { kind: "breed" }, statedAs: "50-60 pounds", sourceId: "akc-afghan-hound" },
    ],
  },
  coat: {
    length: "long",
    types: ["Silky"],
    statedAs: "AKC coat length: Long; coat type: Silky",
    sourceId: "akc-afghan-hound",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-afghan-hound" },
    groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-afghan-hound" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-afghan-hound" },
    trainability: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-afghan-hound" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-afghan-hound" },
  },
  lifespanYears: { min: 12, max: 18, bound: "closed", basis: { kind: "breed" }, statedAs: "12-18 years", sourceId: "akc-afghan-hound" },
  sources: ["akc-afghan-hound"],
  images: ["dog-afghan-hound-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
