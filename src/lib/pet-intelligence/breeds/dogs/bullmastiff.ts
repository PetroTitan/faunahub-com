import type { Breed } from "../../types.ts";

/** Bullmastiff. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-bullmastiff",
  slug: "bullmastiff",
  species: "dog",
  name: "Bullmastiff",
  aliases: ["gamekeeper night dog"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "609",
      registryUrl: "https://www.akc.org/dog-breeds/bullmastiff/",
      recognizedYear: 1934,
      sourceId: "akc-bullmastiff",
    },
  ],
  measurements: {
    heightCm: [
      { min: 63.5, max: 68.6, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "25-27 inches (male)", sourceId: "akc-bullmastiff" },
      { min: 61, max: 66, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "24-26 inches (female)", sourceId: "akc-bullmastiff" },
    ],
    weightKg: [
      { min: 49.9, max: 59, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "110-130 pounds (male)", sourceId: "akc-bullmastiff" },
      { min: 45.4, max: 54.4, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "100-120 pounds (female)", sourceId: "akc-bullmastiff" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-bullmastiff",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-bullmastiff" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-bullmastiff" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-bullmastiff" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-bullmastiff" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-bullmastiff" },
  },
  lifespanYears: { min: 7, max: 9, bound: "closed", basis: { kind: "breed" }, statedAs: "7-9 years", sourceId: "akc-bullmastiff" },
  sources: ["akc-bullmastiff"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
