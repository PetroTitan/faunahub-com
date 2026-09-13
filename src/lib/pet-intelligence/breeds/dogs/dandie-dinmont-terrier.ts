import type { Breed } from "../../types.ts";

/** Dandie Dinmont Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-dandie-dinmont-terrier",
  slug: "dandie-dinmont-terrier",
  species: "dog",
  name: "Dandie Dinmont Terrier",
  aliases: ["Dandie"],
  originCountries: ["English-Scottish border"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "208",
      registryUrl: "https://www.akc.org/dog-breeds/dandie-dinmont-terrier/",
      recognizedYear: 1886,
      sourceId: "akc-dandie-dinmont-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 20.3, max: 27.9, bound: "closed", basis: { kind: "breed" }, statedAs: "8-11 inches", sourceId: "akc-dandie-dinmont-terrier" },
    ],
    weightKg: [
      { min: 8.2, max: 10.9, bound: "closed", basis: { kind: "breed" }, statedAs: "18-24 pounds", sourceId: "akc-dandie-dinmont-terrier" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-dandie-dinmont-terrier",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-dandie-dinmont-terrier" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-dandie-dinmont-terrier" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-dandie-dinmont-terrier" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-dandie-dinmont-terrier" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-dandie-dinmont-terrier" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-dandie-dinmont-terrier" },
  sources: ["akc-dandie-dinmont-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
