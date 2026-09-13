import type { Breed } from "../../types.ts";

/** Basenji. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-basenji",
  slug: "basenji",
  species: "dog",
  name: "Basenji",
  aliases: ["The Barkless Dog"],
  originCountries: ["Central Africa"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "402",
      registryUrl: "https://www.akc.org/dog-breeds/basenji/",
      recognizedYear: 1944,
      sourceId: "akc-basenji",
    },
  ],
  measurements: {
    heightCm: [
      { min: 43.2, max: 43.2, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "17 inches (male)", sourceId: "akc-basenji" },
      { min: 40.6, max: 40.6, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "16 inches (female)", sourceId: "akc-basenji" },
    ],
    weightKg: [
      { min: 10.9, max: 10.9, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "24 pounds (male)", sourceId: "akc-basenji" },
      { min: 10, max: 10, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "22 pounds (female)", sourceId: "akc-basenji" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-basenji",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-basenji" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-basenji" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-basenji" },
    trainability: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-basenji" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-basenji" },
  },
  lifespanYears: { min: 13, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "13-14 years", sourceId: "akc-basenji" },
  sources: ["akc-basenji"],
  images: ["dog-basenji-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
