import type { Breed } from "../../types.ts";

/** Rottweiler. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-rottweiler",
  slug: "rottweiler",
  species: "dog",
  name: "Rottweiler",
  aliases: ["Rottie"],
  originCountries: ["Germany"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "622",
      registryUrl: "https://www.akc.org/dog-breeds/rottweiler/",
      recognizedYear: 1931,
      sourceId: "akc-rottweiler",
    },
  ],
  measurements: {
    heightCm: [
      { min: 61, max: 68.6, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "24-27 inches (male)", sourceId: "akc-rottweiler" },
      { min: 55.9, max: 63.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "22-25 inches (female)", sourceId: "akc-rottweiler" },
    ],
    weightKg: [
      { min: 43.1, max: 61.2, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "95-135 pounds (male)", sourceId: "akc-rottweiler" },
      { min: 36.3, max: 45.4, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "80-100 pounds (female)", sourceId: "akc-rottweiler" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-rottweiler",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-rottweiler" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-rottweiler" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-rottweiler" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-rottweiler" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-rottweiler" },
  },
  lifespanYears: { min: 9, max: 10, bound: "closed", basis: { kind: "breed" }, statedAs: "9-10 years", sourceId: "akc-rottweiler" },
  sources: ["akc-rottweiler"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
