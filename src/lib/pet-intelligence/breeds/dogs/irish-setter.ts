import type { Breed } from "../../types.ts";

/** Irish Setter. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-irish-setter",
  slug: "irish-setter",
  species: "dog",
  name: "Irish Setter",
  aliases: ["The Irishman", "Red Setter"],
  originCountries: ["Ireland"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "111",
      registryUrl: "https://www.akc.org/dog-breeds/irish-setter/",
      recognizedYear: 1878,
      sourceId: "akc-irish-setter",
    },
  ],
  measurements: {
    heightCm: [
      { min: 68.6, max: 68.6, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "27 inches (male)", sourceId: "akc-irish-setter" },
      { min: 63.5, max: 63.5, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "25 inches (female)", sourceId: "akc-irish-setter" },
    ],
    weightKg: [
      { min: 31.8, max: 31.8, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "70 pounds (male)", sourceId: "akc-irish-setter" },
      { min: 27.2, max: 27.2, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "60 pounds (female)", sourceId: "akc-irish-setter" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Silky"],
    statedAs: "AKC coat length: Medium; coat type: Silky",
    sourceId: "akc-irish-setter",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-irish-setter" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-irish-setter" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-irish-setter" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-irish-setter" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-irish-setter" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-irish-setter" },
  sources: ["akc-irish-setter"],
  images: ["dog-irish-setter-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
