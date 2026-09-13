import type { Breed } from "../../types.ts";

/** Pomeranian. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-pomeranian",
  slug: "pomeranian",
  species: "dog",
  name: "Pomeranian",
  aliases: ["Pom"],
  originCountries: ["Iceland"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Toy Group",
      registryBreedCode: "511",
      registryUrl: "https://www.akc.org/dog-breeds/pomeranian/",
      recognizedYear: 1888,
      sourceId: "akc-pomeranian",
    },
  ],
  measurements: {
    heightCm: [
      { min: 15.2, max: 17.8, bound: "closed", basis: { kind: "breed" }, statedAs: "6-7 inches", sourceId: "akc-pomeranian" },
    ],
    weightKg: [
      { min: 1.4, max: 3.2, bound: "closed", basis: { kind: "breed" }, statedAs: "3-7 pounds", sourceId: "akc-pomeranian" },
    ],
  },
  coat: {
    length: "long",
    types: ["Double"],
    statedAs: "AKC coat length: Long; coat type: Double",
    sourceId: "akc-pomeranian",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-pomeranian" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-pomeranian" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-pomeranian" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-pomeranian" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-pomeranian" },
  },
  lifespanYears: { min: 12, max: 16, bound: "closed", basis: { kind: "breed" }, statedAs: "12-16 years", sourceId: "akc-pomeranian" },
  sources: ["akc-pomeranian"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
