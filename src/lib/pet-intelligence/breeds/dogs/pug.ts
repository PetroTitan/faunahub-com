import type { Breed } from "../../types.ts";

/** Pug. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-pug",
  slug: "pug",
  species: "dog",
  name: "Pug",
  aliases: ["Multum in Parvo"],
  originCountries: ["China"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Toy Group",
      registryBreedCode: "512",
      registryUrl: "https://www.akc.org/dog-breeds/pug/",
      recognizedYear: 1885,
      sourceId: "akc-pug",
    },
  ],
  measurements: {
    heightCm: [
      { min: 25.4, max: 33, bound: "closed", basis: { kind: "breed" }, statedAs: "10-13 inches", sourceId: "akc-pug" },
    ],
    weightKg: [
      { min: 6.4, max: 8.2, bound: "closed", basis: { kind: "breed" }, statedAs: "14-18 pounds", sourceId: "akc-pug" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-pug",
  },
  traits: {
    shedding: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-pug" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-pug" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-pug" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-pug" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-pug" },
  },
  lifespanYears: { min: 13, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "13-15 years", sourceId: "akc-pug" },
  sources: ["akc-pug"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
