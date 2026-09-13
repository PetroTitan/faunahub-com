import type { Breed } from "../../types.ts";

/** Harrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-harrier",
  slug: "harrier",
  species: "dog",
  name: "Harrier",
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "412",
      registryUrl: "https://www.akc.org/dog-breeds/harrier/",
      recognizedYear: 1885,
      sourceId: "akc-harrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 48.3, max: 53.3, bound: "closed", basis: { kind: "breed" }, statedAs: "19-21 inches", sourceId: "akc-harrier" },
    ],
    weightKg: [
      { min: 20.4, max: 27.2, bound: "closed", basis: { kind: "breed" }, statedAs: "45-60 pounds", sourceId: "akc-harrier" },
    ],
  },
  coat: {
    length: "short",
    types: ["Double"],
    statedAs: "AKC coat length: Short; coat type: Double",
    sourceId: "akc-harrier",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-harrier" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-harrier" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-harrier" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-harrier" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-harrier" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-harrier" },
  sources: ["akc-harrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
