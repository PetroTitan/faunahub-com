import type { Breed } from "../../types.ts";

/** Anatolian Shepherd Dog. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-anatolian-shepherd-dog",
  slug: "anatolian-shepherd-dog",
  species: "dog",
  name: "Anatolian Shepherd Dog",
  aliases: ["Anatolian"],
  originCountries: ["Turkey"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "635",
      registryUrl: "https://www.akc.org/dog-breeds/anatolian-shepherd-dog/",
      recognizedYear: 1996,
      sourceId: "akc-anatolian-shepherd-dog",
    },
  ],
  measurements: {
    heightCm: [
      { min: 73.7, max: 73.7, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "29 inches (male)", sourceId: "akc-anatolian-shepherd-dog" },
      { min: 68.6, max: 68.6, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "27 inches (female)", sourceId: "akc-anatolian-shepherd-dog" },
    ],
    weightKg: [
      { min: 49.9, max: 68, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "110-150 pounds (male)", sourceId: "akc-anatolian-shepherd-dog" },
      { min: 36.3, max: 54.4, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "80-120 pounds (female)", sourceId: "akc-anatolian-shepherd-dog" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-anatolian-shepherd-dog",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-anatolian-shepherd-dog" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-anatolian-shepherd-dog" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-anatolian-shepherd-dog" },
    trainability: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-anatolian-shepherd-dog" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-anatolian-shepherd-dog" },
  },
  lifespanYears: { min: 11, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "11-13 years", sourceId: "akc-anatolian-shepherd-dog" },
  sources: ["akc-anatolian-shepherd-dog"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
