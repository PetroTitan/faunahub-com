import type { Breed } from "../../types.ts";

/** Rat Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-rat-terrier",
  slug: "rat-terrier",
  species: "dog",
  name: "Rat Terrier",
  aliases: ["RT", "Rat"],
  originCountries: ["United States"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "247",
      registryUrl: "https://www.akc.org/dog-breeds/rat-terrier/",
      recognizedYear: 2013,
      sourceId: "akc-rat-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 25.4, max: 33, bound: "closed", basis: { kind: "variety", variety: "miniature" }, statedAs: "10-13 inches (miniature)", sourceId: "akc-rat-terrier" },
      { min: 33, max: 45.7, bound: "closed", basis: { kind: "variety", variety: "standard" }, statedAs: "13-18 inches (standard)", sourceId: "akc-rat-terrier" },
    ],
    weightKg: [
      { min: 4.5, max: 11.3, bound: "closed", basis: { kind: "breed" }, statedAs: "10-25 pounds", sourceId: "akc-rat-terrier" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-rat-terrier",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-rat-terrier" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-rat-terrier" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-rat-terrier" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-rat-terrier" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-rat-terrier" },
  },
  lifespanYears: { min: 12, max: 18, bound: "closed", basis: { kind: "breed" }, statedAs: "12-18 years", sourceId: "akc-rat-terrier" },
  sources: ["akc-rat-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
