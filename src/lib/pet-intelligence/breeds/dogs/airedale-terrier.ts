import type { Breed } from "../../types.ts";

/** Airedale Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-airedale-terrier",
  slug: "airedale-terrier",
  species: "dog",
  name: "Airedale Terrier",
  aliases: ["Airedale", "King of Terriers"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "201",
      registryUrl: "https://www.akc.org/dog-breeds/airedale-terrier/",
      recognizedYear: 1888,
      sourceId: "akc-airedale-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 58.4, max: 58.4, bound: "about", basis: { kind: "breed" }, statedAs: "23 inches", sourceId: "akc-airedale-terrier" },
    ],
    weightKg: [
      { min: 22.7, max: 31.8, bound: "closed", basis: { kind: "breed" }, statedAs: "50-70 pounds", sourceId: "akc-airedale-terrier" },
    ],
  },
  coat: {
    // AKC records TWO coat lengths for this breed. Storing array[0]
    // filed it under the shorter one alone, so the page contradicted the
    // citation printed directly beneath it and the breed was missing from
    // the collection for its other coat. "variable" is the value the cat
    // side already uses for exactly this case.
    length: "variable",
    types: ["Wiry"],
    statedAs: "AKC coat length: Short, Medium; coat type: Wiry",
    sourceId: "akc-airedale-terrier",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-airedale-terrier" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-airedale-terrier" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-airedale-terrier" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-airedale-terrier" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-airedale-terrier" },
  },
  lifespanYears: { min: 11, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "11-14 years", sourceId: "akc-airedale-terrier" },
  sources: ["akc-airedale-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
