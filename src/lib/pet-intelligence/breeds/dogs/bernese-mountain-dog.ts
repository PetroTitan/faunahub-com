import type { Breed } from "../../types.ts";

/** Bernese Mountain Dog. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-bernese-mountain-dog",
  slug: "bernese-mountain-dog",
  species: "dog",
  name: "Bernese Mountain Dog",
  aliases: ["Berner"],
  originCountries: ["Switzerland"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "605",
      registryUrl: "https://www.akc.org/dog-breeds/bernese-mountain-dog/",
      recognizedYear: 1937,
      sourceId: "akc-bernese-mountain-dog",
    },
  ],
  measurements: {
    heightCm: [
      { min: 63.5, max: 69.9, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "25-27.5 inches (male)", sourceId: "akc-bernese-mountain-dog" },
      { min: 58.4, max: 66, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "23-26 inches (female)", sourceId: "akc-bernese-mountain-dog" },
    ],
    weightKg: [
      { min: 36.3, max: 52.2, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "80-115 pounds (male)", sourceId: "akc-bernese-mountain-dog" },
      { min: 31.8, max: 43.1, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "70-95 pounds (female)", sourceId: "akc-bernese-mountain-dog" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-bernese-mountain-dog",
  },
  traits: {
    shedding: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-bernese-mountain-dog" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-bernese-mountain-dog" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-bernese-mountain-dog" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-bernese-mountain-dog" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-bernese-mountain-dog" },
  },
  lifespanYears: { min: 7, max: 10, bound: "closed", basis: { kind: "breed" }, statedAs: "7-10 years", sourceId: "akc-bernese-mountain-dog" },
  sources: ["akc-bernese-mountain-dog"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
