import type { Breed } from "../../types.ts";

/** Dutch Shepherd. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-dutch-shepherd",
  slug: "dutch-shepherd",
  species: "dog",
  name: "Dutch Shepherd",
  originCountries: ["The Netherlands"],
  recognition: [
    {
      registryId: "akc",
      status: "provisional",
      registryGroup: "Miscellaneous Class",
      registryBreedCode: "863",
      registryUrl: "https://www.akc.org/dog-breeds/dutch-shepherd/",
      sourceId: "akc-dutch-shepherd",
    },
  ],
  measurements: {
    heightCm: [
      { min: 54.6, max: 62.2, bound: "closed", basis: { kind: "breed" }, statedAs: "21.5-24.5 inches", sourceId: "akc-dutch-shepherd" },
    ],
    weightKg: [
      { min: 19.1, max: 34, bound: "closed", basis: { kind: "breed" }, statedAs: "42-75 pounds", sourceId: "akc-dutch-shepherd" },
    ],
  },
  coat: {
    length: "short",
    types: ["Double"],
    statedAs: "AKC coat length: Short; coat type: Double",
    sourceId: "akc-dutch-shepherd",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-dutch-shepherd" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-dutch-shepherd" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-dutch-shepherd" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-dutch-shepherd" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-dutch-shepherd" },
  },
  lifespanYears: { min: 11, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "11-14 years", sourceId: "akc-dutch-shepherd" },
  sources: ["akc-dutch-shepherd"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
