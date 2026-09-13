import type { Breed } from "../../types.ts";

/** English Foxhound. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-english-foxhound",
  slug: "english-foxhound",
  species: "dog",
  name: "English Foxhound",
  aliases: ["English hound"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "410",
      registryUrl: "https://www.akc.org/dog-breeds/english-foxhound/",
      recognizedYear: 1909,
      sourceId: "akc-english-foxhound",
    },
  ],
  measurements: {
    heightCm: [
      { min: 61, max: 61, bound: "about", basis: { kind: "breed" }, statedAs: "24 inches", sourceId: "akc-english-foxhound" },
    ],
    weightKg: [
      { min: 27.2, max: 34, bound: "closed", basis: { kind: "breed" }, statedAs: "60-75 pounds", sourceId: "akc-english-foxhound" },
    ],
  },
  coat: {
    length: "short",
    types: ["Double"],
    statedAs: "AKC coat length: Short; coat type: Double",
    sourceId: "akc-english-foxhound",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-english-foxhound" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-english-foxhound" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-english-foxhound" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-english-foxhound" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-english-foxhound" },
  },
  lifespanYears: { min: 10, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "10-13 years", sourceId: "akc-english-foxhound" },
  sources: ["akc-english-foxhound"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
