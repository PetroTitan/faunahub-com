import type { Breed } from "../../types.ts";

/** Smooth Fox Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-smooth-fox-terrier",
  slug: "smooth-fox-terrier",
  species: "dog",
  name: "Smooth Fox Terrier",
  aliases: ["Smooth"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "225",
      registryUrl: "https://www.akc.org/dog-breeds/smooth-fox-terrier/",
      recognizedYear: 1885,
      sourceId: "akc-smooth-fox-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 39.4, max: 39.4, bound: "about", basis: { kind: "breed" }, statedAs: "15½ inches", sourceId: "akc-smooth-fox-terrier" },
    ],
    weightKg: [
      { min: 8.2, max: 8.2, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "18 pounds (male)", sourceId: "akc-smooth-fox-terrier" },
      { min: 6.8, max: 7.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "15-17 (female)", sourceId: "akc-smooth-fox-terrier" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-smooth-fox-terrier",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-smooth-fox-terrier" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-smooth-fox-terrier" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-smooth-fox-terrier" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-smooth-fox-terrier" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-smooth-fox-terrier" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-smooth-fox-terrier" },
  sources: ["akc-smooth-fox-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
