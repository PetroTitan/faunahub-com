import type { Breed } from "../../types.ts";

/** Collie. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-collie",
  slug: "collie",
  species: "dog",
  name: "Collie",
  originCountries: ["Scotland and Northern England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "810",
      registryUrl: "https://www.akc.org/dog-breeds/collie/",
      recognizedYear: 1885,
      sourceId: "akc-collie",
    },
  ],
  measurements: {
    heightCm: [
      { min: 61, max: 66, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "24-26 inches (male)", sourceId: "akc-collie" },
      { min: 55.9, max: 61, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "22-24 inches (female)", sourceId: "akc-collie" },
    ],
    weightKg: [
      { min: 27.2, max: 34, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "60-75 pounds (male)", sourceId: "akc-collie" },
      { min: 22.7, max: 29.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "50-65 pounds (female)", sourceId: "akc-collie" },
    ],
  },
  coat: {
    // AKC records TWO coat lengths for this breed. Storing array[0]
    // filed it under the shorter one alone, so the page contradicted the
    // citation printed directly beneath it and the breed was missing from
    // the collection for its other coat. "variable" is the value the cat
    // side already uses for exactly this case.
    length: "variable",
    types: ["Rough", "Smooth"],
    statedAs: "AKC coat length: Short, Long; coat type: Rough, Smooth",
    sourceId: "akc-collie",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-collie" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-collie" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-collie" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-collie" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-collie" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-collie" },
  sources: ["akc-collie"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
