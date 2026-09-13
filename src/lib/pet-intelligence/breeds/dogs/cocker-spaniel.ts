import type { Breed } from "../../types.ts";

/** Cocker Spaniel. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-cocker-spaniel",
  slug: "cocker-spaniel",
  species: "dog",
  name: "Cocker Spaniel",
  aliases: ["Cocker"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "115",
      registryUrl: "https://www.akc.org/dog-breeds/cocker-spaniel/",
      recognizedYear: 1878,
      sourceId: "akc-cocker-spaniel",
    },
  ],
  measurements: {
    heightCm: [
      { min: 36.8, max: 39.4, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "14.5-15.5 inches (male)", sourceId: "akc-cocker-spaniel" },
      { min: 34.3, max: 36.8, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "13.5-14.5 inches (female)", sourceId: "akc-cocker-spaniel" },
    ],
    weightKg: [
      { min: 11.3, max: 13.6, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "25-30 pounds (male)", sourceId: "akc-cocker-spaniel" },
      { min: 9.1, max: 11.3, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "20-25 pounds (female)", sourceId: "akc-cocker-spaniel" },
    ],
  },
  coat: {
    length: "long",
    types: ["Silky", "Double"],
    statedAs: "AKC coat length: Long; coat type: Silky, Double",
    sourceId: "akc-cocker-spaniel",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-cocker-spaniel" },
    groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-cocker-spaniel" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-cocker-spaniel" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-cocker-spaniel" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-cocker-spaniel" },
  },
  lifespanYears: { min: 10, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "10-14 years", sourceId: "akc-cocker-spaniel" },
  sources: ["akc-cocker-spaniel"],
  images: ["dog-cocker-spaniel-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
