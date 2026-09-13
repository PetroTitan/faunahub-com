import type { Breed } from "../../types.ts";

/** Dalmatian. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-dalmatian",
  slug: "dalmatian",
  species: "dog",
  name: "Dalmatian",
  aliases: ["Dal", "Coach Dog"],
  originCountries: ["Dalmatia (today, Croatia)"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Non-Sporting Group",
      registryBreedCode: "304",
      registryUrl: "https://www.akc.org/dog-breeds/dalmatian/",
      recognizedYear: 1888,
      sourceId: "akc-dalmatian",
    },
  ],
  measurements: {
    heightCm: [
      { min: 48.3, max: 61, bound: "closed", basis: { kind: "breed" }, statedAs: "19-24 inches", sourceId: "akc-dalmatian" },
    ],
    weightKg: [
      { min: 20.4, max: 31.8, bound: "closed", basis: { kind: "breed" }, statedAs: "45-70 pounds", sourceId: "akc-dalmatian" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-dalmatian",
  },
  traits: {
    shedding: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-dalmatian" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-dalmatian" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-dalmatian" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-dalmatian" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-dalmatian" },
  },
  lifespanYears: { min: 11, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "11-13 years", sourceId: "akc-dalmatian" },
  sources: ["akc-dalmatian"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
