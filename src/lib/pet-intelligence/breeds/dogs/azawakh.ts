import type { Breed } from "../../types.ts";

/** Azawakh. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-azawakh",
  slug: "azawakh",
  species: "dog",
  name: "Azawakh",
  originCountries: ["Sahel Region"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "437",
      registryUrl: "https://www.akc.org/dog-breeds/azawakh/",
      recognizedYear: 2019,
      sourceId: "akc-azawakh",
    },
  ],
  measurements: {
    heightCm: [
      { min: 63.5, max: 73.7, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "25-29 inches (male)", sourceId: "akc-azawakh" },
      { min: 59.7, max: 69.9, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "23.5-27.5 inches (female)", sourceId: "akc-azawakh" },
    ],
    weightKg: [
      { min: 20, max: 24.9, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "44-55 pounds (male)", sourceId: "akc-azawakh" },
      { min: 15, max: 20, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "33-44 pounds (female)", sourceId: "akc-azawakh" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-azawakh",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-azawakh" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-azawakh" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-azawakh" },
    trainability: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-azawakh" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-azawakh" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-azawakh" },
  sources: ["akc-azawakh"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
