import type { Breed } from "../../types.ts";

/** Mudi. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-mudi",
  slug: "mudi",
  species: "dog",
  name: "Mudi",
  originCountries: ["Hungary"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "854",
      registryUrl: "https://www.akc.org/dog-breeds/mudi/",
      recognizedYear: 2022,
      sourceId: "akc-mudi",
    },
  ],
  measurements: {
    heightCm: [
      { min: 38.1, max: 47, bound: "closed", basis: { kind: "breed" }, statedAs: "15-18.5 inches", sourceId: "akc-mudi" },
    ],
    weightKg: [
      { min: 8.2, max: 13.2, bound: "closed", basis: { kind: "breed" }, statedAs: "18-29 pounds", sourceId: "akc-mudi" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Curly"],
    statedAs: "AKC coat length: Medium; coat type: Curly",
    sourceId: "akc-mudi",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-mudi" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-mudi" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-mudi" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-mudi" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-mudi" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-mudi" },
  sources: ["akc-mudi"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
