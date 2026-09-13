import type { Breed } from "../../types.ts";

/** Barbet. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-barbet",
  slug: "barbet",
  species: "dog",
  name: "Barbet",
  aliases: ["French Water Dog"],
  originCountries: ["France"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "140",
      registryUrl: "https://www.akc.org/dog-breeds/barbet/",
      recognizedYear: 2020,
      sourceId: "akc-barbet",
    },
  ],
  measurements: {
    heightCm: [
      { min: 48.3, max: 62.2, bound: "closed", basis: { kind: "breed" }, statedAs: "19-24.5 inches", sourceId: "akc-barbet" },
    ],
    weightKg: [
      { min: 15.9, max: 29.5, bound: "closed", basis: { kind: "breed" }, statedAs: "35-65 pounds", sourceId: "akc-barbet" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Wavy", "Curly"],
    statedAs: "AKC coat length: Medium, Long; coat type: Wavy, Curly",
    sourceId: "akc-barbet",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-barbet" },
    groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-barbet" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-barbet" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-barbet" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-barbet" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-barbet" },
  sources: ["akc-barbet"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
