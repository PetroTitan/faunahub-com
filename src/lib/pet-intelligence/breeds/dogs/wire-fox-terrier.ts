import type { Breed } from "../../types.ts";

/** Wire Fox Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-wire-fox-terrier",
  slug: "wire-fox-terrier",
  species: "dog",
  name: "Wire Fox Terrier",
  aliases: ["Wire"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "226",
      registryUrl: "https://www.akc.org/dog-breeds/wire-fox-terrier/",
      recognizedYear: 1885,
      sourceId: "akc-wire-fox-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 39.4, max: 39.4, bound: "about", basis: { kind: "breed" }, statedAs: "15½ inches", sourceId: "akc-wire-fox-terrier" },
    ],
    weightKg: [
      { min: 8.2, max: 8.2, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "18 pounds (male)", sourceId: "akc-wire-fox-terrier" },
      { min: 6.8, max: 7.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "15-17 (female)", sourceId: "akc-wire-fox-terrier" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double", "Wiry"],
    statedAs: "AKC coat length: Medium; coat type: Double, Wiry",
    sourceId: "akc-wire-fox-terrier",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-wire-fox-terrier" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-wire-fox-terrier" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-wire-fox-terrier" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-wire-fox-terrier" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-wire-fox-terrier" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-wire-fox-terrier" },
  sources: ["akc-wire-fox-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
