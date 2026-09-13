import type { Breed } from "../../types.ts";

/** Irish Wolfhound. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-irish-wolfhound",
  slug: "irish-wolfhound",
  species: "dog",
  name: "Irish Wolfhound",
  aliases: ["Wolfhound", "IW"],
  originCountries: ["Ireland"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "413",
      registryUrl: "https://www.akc.org/dog-breeds/irish-wolfhound/",
      recognizedYear: 1897,
      sourceId: "akc-irish-wolfhound",
    },
  ],
  measurements: {
    heightCm: [
      { min: 81.3, bound: "at-least", basis: { kind: "sex", sex: "male" }, statedAs: "32 inches minimum (male)", sourceId: "akc-irish-wolfhound" },
      { min: 76.2, bound: "at-least", basis: { kind: "sex", sex: "female" }, statedAs: "30 inches minimum (female)", sourceId: "akc-irish-wolfhound" },
    ],
    weightKg: [
      { min: 54.4, max: 54.4, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "120 pounds (male)", sourceId: "akc-irish-wolfhound" },
      { min: 47.6, max: 47.6, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "105 pounds (female)", sourceId: "akc-irish-wolfhound" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Wiry"],
    statedAs: "AKC coat length: Medium; coat type: Wiry",
    sourceId: "akc-irish-wolfhound",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-irish-wolfhound" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-irish-wolfhound" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-irish-wolfhound" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-irish-wolfhound" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-irish-wolfhound" },
  },
  lifespanYears: { min: 6, max: 8, bound: "closed", basis: { kind: "breed" }, statedAs: "6-8 years", sourceId: "akc-irish-wolfhound" },
  sources: ["akc-irish-wolfhound"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
