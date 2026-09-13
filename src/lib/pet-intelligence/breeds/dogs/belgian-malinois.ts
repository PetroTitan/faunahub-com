import type { Breed } from "../../types.ts";

/** Belgian Malinois. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-belgian-malinois",
  slug: "belgian-malinois",
  species: "dog",
  name: "Belgian Malinois",
  originCountries: ["Belgium"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "802",
      registryUrl: "https://www.akc.org/dog-breeds/belgian-malinois/",
      recognizedYear: 1959,
      sourceId: "akc-belgian-malinois",
    },
  ],
  measurements: {
    heightCm: [
      { min: 61, max: 66, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "24-26 inches (male)", sourceId: "akc-belgian-malinois" },
      { min: 55.9, max: 61, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "22-24 inches (female)", sourceId: "akc-belgian-malinois" },
    ],
    weightKg: [
      { min: 27.2, max: 36.3, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "60-80 pounds (male)", sourceId: "akc-belgian-malinois" },
      { min: 18.1, max: 27.2, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "40-60 pounds (female)", sourceId: "akc-belgian-malinois" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-belgian-malinois",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-belgian-malinois" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-belgian-malinois" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-belgian-malinois" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-belgian-malinois" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-belgian-malinois" },
  },
  lifespanYears: { min: 14, max: 16, bound: "closed", basis: { kind: "breed" }, statedAs: "14-16 years", sourceId: "akc-belgian-malinois" },
  sources: ["akc-belgian-malinois"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
