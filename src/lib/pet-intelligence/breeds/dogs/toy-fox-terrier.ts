import type { Breed } from "../../types.ts";

/** Toy Fox Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-toy-fox-terrier",
  slug: "toy-fox-terrier",
  species: "dog",
  name: "Toy Fox Terrier",
  aliases: ["Toy Fox", "TFT", "Amertoy"],
  originCountries: ["United States"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Toy Group",
      registryBreedCode: "519",
      registryUrl: "https://www.akc.org/dog-breeds/toy-fox-terrier/",
      recognizedYear: 2003,
      sourceId: "akc-toy-fox-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 21.6, max: 29.2, bound: "closed", basis: { kind: "breed" }, statedAs: "8.5-11.5 inches", sourceId: "akc-toy-fox-terrier" },
    ],
    weightKg: [
      { min: 1.8, max: 4.1, bound: "closed", basis: { kind: "breed" }, statedAs: "4 - 9 lbs", sourceId: "akc-toy-fox-terrier" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-toy-fox-terrier",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-toy-fox-terrier" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-toy-fox-terrier" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-toy-fox-terrier" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-toy-fox-terrier" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-toy-fox-terrier" },
  },
  lifespanYears: { min: 13, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "13-15 years", sourceId: "akc-toy-fox-terrier" },
  sources: ["akc-toy-fox-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
