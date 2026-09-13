import type { Breed } from "../../types.ts";

/** Beauceron. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-beauceron",
  slug: "beauceron",
  species: "dog",
  name: "Beauceron",
  aliases: ["Bas-Rouge (Red Stockings)"],
  originCountries: ["France"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "846",
      registryUrl: "https://www.akc.org/dog-breeds/beauceron/",
      recognizedYear: 2007,
      sourceId: "akc-beauceron",
    },
  ],
  measurements: {
    heightCm: [
      { min: 64.8, max: 69.9, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "25.5-27.5 inches (male)", sourceId: "akc-beauceron" },
      { min: 61, max: 67.3, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "24-26.5 inches (female)", sourceId: "akc-beauceron" },
    ],
    weightKg: [
      { min: 31.8, max: 49.9, bound: "closed", basis: { kind: "breed" }, statedAs: "70-110 pounds", sourceId: "akc-beauceron" },
    ],
  },
  coat: {
    length: "short",
    types: ["Double", "Smooth"],
    statedAs: "AKC coat length: Short; coat type: Double, Smooth",
    sourceId: "akc-beauceron",
  },
  traits: {
    shedding: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-beauceron" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-beauceron" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-beauceron" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-beauceron" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-beauceron" },
  },
  lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-beauceron" },
  sources: ["akc-beauceron"],
  images: ["dog-beauceron-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
