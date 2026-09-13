import type { Breed } from "../../types.ts";

/** Irish Red and White Setter. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-irish-red-and-white-setter",
  slug: "irish-red-and-white-setter",
  species: "dog",
  name: "Irish Red and White Setter",
  canonicalCommonName: "Irish Red and White Setter",
  aliases: ["Red and White"],
  originCountries: ["Ireland"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "129",
      registryUrl: "https://www.akc.org/dog-breeds/irish-red-and-white-setter/",
      recognizedYear: 2009,
      sourceId: "akc-irish-red-and-white-setter",
    },
  ],
  measurements: {
    heightCm: [
      { min: 62.2, max: 66, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "24.5-26 inches (male)", sourceId: "akc-irish-red-and-white-setter" },
      { min: 57.2, max: 61, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "22.5-24 inches (female)", sourceId: "akc-irish-red-and-white-setter" },
    ],
    weightKg: [
      { min: 19.1, max: 27.2, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "42-60 pounds (male)", sourceId: "akc-irish-red-and-white-setter" },
      { min: 15.9, max: 22.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "35-50 pounds (female)", sourceId: "akc-irish-red-and-white-setter" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Silky", "Double"],
    statedAs: "AKC coat length: Medium; coat type: Silky, Double",
    sourceId: "akc-irish-red-and-white-setter",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-irish-red-and-white-setter" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-irish-red-and-white-setter" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-irish-red-and-white-setter" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-irish-red-and-white-setter" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-irish-red-and-white-setter" },
  },
  lifespanYears: { min: 11, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "11-15 years", sourceId: "akc-irish-red-and-white-setter" },
  sources: ["akc-irish-red-and-white-setter"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
