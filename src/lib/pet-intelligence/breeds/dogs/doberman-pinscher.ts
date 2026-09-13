import type { Breed } from "../../types.ts";

/** Doberman Pinscher. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-doberman-pinscher",
  slug: "doberman-pinscher",
  species: "dog",
  name: "Doberman Pinscher",
  aliases: ["Doberman", "Dobe", "Dobie"],
  originCountries: ["Germany"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "611",
      registryUrl: "https://www.akc.org/dog-breeds/doberman-pinscher/",
      recognizedYear: 1908,
      sourceId: "akc-doberman-pinscher",
    },
  ],
  measurements: {
    heightCm: [
      { min: 66, max: 71.1, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "26-28 inches (male)", sourceId: "akc-doberman-pinscher" },
      { min: 61, max: 66, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "24-26 inches (female)", sourceId: "akc-doberman-pinscher" },
    ],
    weightKg: [
      { min: 34, max: 45.4, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "75-100 pounds (male)", sourceId: "akc-doberman-pinscher" },
      { min: 27.2, max: 40.8, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "60-90 pounds (female)", sourceId: "akc-doberman-pinscher" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-doberman-pinscher",
  },
  traits: {
    shedding: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-doberman-pinscher" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-doberman-pinscher" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-doberman-pinscher" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-doberman-pinscher" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-doberman-pinscher" },
  },
  lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-doberman-pinscher" },
  sources: ["akc-doberman-pinscher"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
