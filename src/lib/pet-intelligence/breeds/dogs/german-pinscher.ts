import type { Breed } from "../../types.ts";

/** German Pinscher. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-german-pinscher",
  slug: "german-pinscher",
  species: "dog",
  name: "German Pinscher",
  aliases: ["GP"],
  originCountries: ["Germany"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "636",
      registryUrl: "https://www.akc.org/dog-breeds/german-pinscher/",
      recognizedYear: 2003,
      sourceId: "akc-german-pinscher",
    },
  ],
  measurements: {
    heightCm: [
      { min: 43.2, max: 50.8, bound: "closed", basis: { kind: "breed" }, statedAs: "17-20 inches", sourceId: "akc-german-pinscher" },
    ],
    weightKg: [
      { min: 11.3, max: 20.4, bound: "closed", basis: { kind: "breed" }, statedAs: "25-45 pounds", sourceId: "akc-german-pinscher" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-german-pinscher",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-german-pinscher" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-german-pinscher" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-german-pinscher" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-german-pinscher" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-german-pinscher" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-german-pinscher" },
  sources: ["akc-german-pinscher"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
