import type { Breed } from "../../types.ts";

/** Japanese Chin. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-japanese-chin",
  slug: "japanese-chin",
  species: "dog",
  name: "Japanese Chin",
  aliases: ["Chin (plural and singular)"],
  originCountries: ["Japan"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Toy Group",
      registryBreedCode: "506",
      registryUrl: "https://www.akc.org/dog-breeds/japanese-chin/",
      recognizedYear: 1888,
      sourceId: "akc-japanese-chin",
    },
  ],
  measurements: {
    heightCm: [
      { min: 20.3, max: 27.9, bound: "closed", basis: { kind: "breed" }, statedAs: "8-11 inches", sourceId: "akc-japanese-chin" },
    ],
    weightKg: [
      { min: 3.2, max: 5, bound: "closed", basis: { kind: "breed" }, statedAs: "7-11 pounds", sourceId: "akc-japanese-chin" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Silky"],
    statedAs: "AKC coat length: Medium; coat type: Silky",
    sourceId: "akc-japanese-chin",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-japanese-chin" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-japanese-chin" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-japanese-chin" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-japanese-chin" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-japanese-chin" },
  },
  lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-japanese-chin" },
  sources: ["akc-japanese-chin"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
