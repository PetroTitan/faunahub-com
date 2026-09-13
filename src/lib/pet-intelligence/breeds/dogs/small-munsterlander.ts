import type { Breed } from "../../types.ts";

/** Small Munsterlander. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-small-munsterlander",
  slug: "small-munsterlander",
  species: "dog",
  name: "Small Munsterlander",
  originCountries: ["Germany"],
  recognition: [
    {
      registryId: "akc",
      status: "provisional",
      registryGroup: "Miscellaneous Class",
      registryBreedCode: "139",
      registryUrl: "https://www.akc.org/dog-breeds/small-munsterlander/",
      sourceId: "akc-small-munsterlander",
    },
  ],
  measurements: {
    heightCm: [
      { min: 52.1, max: 53.3, bound: "closed", basis: { kind: "breed" }, statedAs: "20.5-21 inches", sourceId: "akc-small-munsterlander" },
    ],
    weightKg: [
      { min: 18.1, max: 27.2, bound: "closed", basis: { kind: "breed" }, statedAs: "40-60 pounds", sourceId: "akc-small-munsterlander" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-small-munsterlander",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-small-munsterlander" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-small-munsterlander" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-small-munsterlander" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-small-munsterlander" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-small-munsterlander" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-small-munsterlander" },
  sources: ["akc-small-munsterlander"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
