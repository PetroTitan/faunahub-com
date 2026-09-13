import type { Breed } from "../../types.ts";

/** Chinook. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-chinook",
  slug: "chinook",
  species: "dog",
  name: "Chinook",
  originCountries: ["United States"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "653",
      registryUrl: "https://www.akc.org/dog-breeds/chinook/",
      recognizedYear: 2013,
      sourceId: "akc-chinook",
    },
  ],
  measurements: {
    heightCm: [
      { min: 61, max: 66, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "24-26 inches (male)", sourceId: "akc-chinook" },
      { min: 55.9, max: 61, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "22-24 inches (female)", sourceId: "akc-chinook" },
    ],
    weightKg: [
      { min: 24.9, max: 40.8, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "55-90 pounds (male)", sourceId: "akc-chinook" },
      { min: 22.7, max: 29.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "50-65 pounds (female)", sourceId: "akc-chinook" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Smooth"],
    statedAs: "AKC coat length: Medium; coat type: Smooth",
    sourceId: "akc-chinook",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-chinook" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-chinook" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-chinook" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-chinook" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-chinook" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-chinook" },
  sources: ["akc-chinook"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
