import type { Breed } from "../../types.ts";

/** Italian Greyhound. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-italian-greyhound",
  slug: "italian-greyhound",
  species: "dog",
  name: "Italian Greyhound",
  aliases: ["IG", "Iggy"],
  originCountries: ["The Mediterranean basin"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Toy Group",
      registryBreedCode: "505",
      registryUrl: "https://www.akc.org/dog-breeds/italian-greyhound/",
      recognizedYear: 1886,
      sourceId: "akc-italian-greyhound",
    },
  ],
  measurements: {
    heightCm: [
      { min: 33, max: 38.1, bound: "closed", basis: { kind: "breed" }, statedAs: "13-15 inches", sourceId: "akc-italian-greyhound" },
    ],
    weightKg: [
      { min: 3.2, max: 6.4, bound: "closed", basis: { kind: "breed" }, statedAs: "7-14 pounds", sourceId: "akc-italian-greyhound" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-italian-greyhound",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-italian-greyhound" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-italian-greyhound" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-italian-greyhound" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-italian-greyhound" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-italian-greyhound" },
  },
  lifespanYears: { min: 14, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "14-15 years", sourceId: "akc-italian-greyhound" },
  sources: ["akc-italian-greyhound"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
