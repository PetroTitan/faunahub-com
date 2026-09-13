import type { Breed } from "../../types.ts";

/** Greater Swiss Mountain Dog. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-greater-swiss-mountain-dog",
  slug: "greater-swiss-mountain-dog",
  species: "dog",
  name: "Greater Swiss Mountain Dog",
  aliases: ["Swissy", "the Butcher's Dog"],
  originCountries: ["Switzerland"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "634",
      registryUrl: "https://www.akc.org/dog-breeds/greater-swiss-mountain-dog/",
      recognizedYear: 1995,
      sourceId: "akc-greater-swiss-mountain-dog",
    },
  ],
  measurements: {
    heightCm: [
      { min: 64.8, max: 72.4, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "25.5-28.5 inches (male)", sourceId: "akc-greater-swiss-mountain-dog" },
      { min: 60.2, max: 68.6, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "23.7-27 inches (female)", sourceId: "akc-greater-swiss-mountain-dog" },
    ],
    weightKg: [
      { min: 52.2, max: 63.5, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "115-140 pounds (male)", sourceId: "akc-greater-swiss-mountain-dog" },
      { min: 38.6, max: 49.9, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "85-110 pounds (female)", sourceId: "akc-greater-swiss-mountain-dog" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-greater-swiss-mountain-dog",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-greater-swiss-mountain-dog" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-greater-swiss-mountain-dog" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-greater-swiss-mountain-dog" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-greater-swiss-mountain-dog" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-greater-swiss-mountain-dog" },
  },
  lifespanYears: { min: 8, max: 11, bound: "closed", basis: { kind: "breed" }, statedAs: "8-11 years", sourceId: "akc-greater-swiss-mountain-dog" },
  sources: ["akc-greater-swiss-mountain-dog"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
