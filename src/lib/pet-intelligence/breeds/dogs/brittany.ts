import type { Breed } from "../../types.ts";

/** Brittany. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-brittany",
  slug: "brittany",
  species: "dog",
  name: "Brittany",
  originCountries: ["France"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "113",
      registryUrl: "https://www.akc.org/dog-breeds/brittany/",
      recognizedYear: 1934,
      sourceId: "akc-brittany",
    },
  ],
  measurements: {
    heightCm: [
      { min: 44.5, max: 52.1, bound: "closed", basis: { kind: "breed" }, statedAs: "17.5-20.5 inches", sourceId: "akc-brittany" },
    ],
    weightKg: [
      { min: 13.6, max: 18.1, bound: "closed", basis: { kind: "breed" }, statedAs: "30-40 pounds", sourceId: "akc-brittany" },
    ],
  },
  coat: {
    length: "short",
    types: ["Double", "Wavy"],
    statedAs: "AKC coat length: Short; coat type: Double, Wavy",
    sourceId: "akc-brittany",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-brittany" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-brittany" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-brittany" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-brittany" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-brittany" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-brittany" },
  sources: ["akc-brittany"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
