import type { Breed } from "../../types.ts";

/** Cane Corso. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-cane-corso",
  slug: "cane-corso",
  species: "dog",
  name: "Cane Corso",
  aliases: ["Corso (plural: Cani Corsi)"],
  originCountries: ["Italy"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "643",
      registryUrl: "https://www.akc.org/dog-breeds/cane-corso/",
      recognizedYear: 2010,
      sourceId: "akc-cane-corso",
    },
  ],
  measurements: {
    heightCm: [
      { min: 63.5, max: 69.9, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "25-27.5 inches (male)", sourceId: "akc-cane-corso" },
      { min: 59.7, max: 66, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "23.5-26 inches (female)", sourceId: "akc-cane-corso" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-cane-corso",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-cane-corso" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-cane-corso" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-cane-corso" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-cane-corso" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-cane-corso" },
  },
  lifespanYears: { min: 9, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "9-12 years", sourceId: "akc-cane-corso" },
  sources: ["akc-cane-corso"],
  images: ["dog-cane-corso-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
