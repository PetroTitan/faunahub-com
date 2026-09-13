import type { Breed } from "../../types.ts";

/** Irish Water Spaniel. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-irish-water-spaniel",
  slug: "irish-water-spaniel",
  species: "dog",
  name: "Irish Water Spaniel",
  aliases: ["IWS", "Irisher"],
  originCountries: ["Ireland"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "119",
      registryUrl: "https://www.akc.org/dog-breeds/irish-water-spaniel/",
      recognizedYear: 1878,
      sourceId: "akc-irish-water-spaniel",
    },
  ],
  measurements: {
    heightCm: [
      { min: 55.9, max: 61, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "22-24 inches (male)", sourceId: "akc-irish-water-spaniel" },
      { min: 53.3, max: 58.4, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "21-23 inches (female)", sourceId: "akc-irish-water-spaniel" },
    ],
    weightKg: [
      { min: 24.9, max: 30.8, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "55-68 pounds (male)", sourceId: "akc-irish-water-spaniel" },
      { min: 20.4, max: 26.3, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "45-58 pounds (female)", sourceId: "akc-irish-water-spaniel" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Curly"],
    statedAs: "AKC coat length: Medium; coat type: Curly",
    sourceId: "akc-irish-water-spaniel",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-irish-water-spaniel" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-irish-water-spaniel" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-irish-water-spaniel" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-irish-water-spaniel" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-irish-water-spaniel" },
  },
  lifespanYears: { min: 12, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "12-13 years", sourceId: "akc-irish-water-spaniel" },
  sources: ["akc-irish-water-spaniel"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
