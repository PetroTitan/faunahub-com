import type { Breed } from "../../types.ts";

/** Flat-Coated Retriever. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-flat-coated-retriever",
  slug: "flat-coated-retriever",
  species: "dog",
  name: "Flat-Coated Retriever",
  canonicalCommonName: "Flat-Coated Retriever",
  aliases: ["Flat-Coat"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "106",
      registryUrl: "https://www.akc.org/dog-breeds/flat-coated-retriever/",
      recognizedYear: 1915,
      sourceId: "akc-flat-coated-retriever",
    },
  ],
  measurements: {
    heightCm: [
      { min: 58.4, max: 62.2, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "23-24.5 inches (male)", sourceId: "akc-flat-coated-retriever" },
      { min: 55.9, max: 59.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "22-23.5 inches (female)", sourceId: "akc-flat-coated-retriever" },
    ],
    weightKg: [
      { min: 27.2, max: 31.8, bound: "closed", basis: { kind: "breed" }, statedAs: "60-70 pounds", sourceId: "akc-flat-coated-retriever" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Smooth"],
    statedAs: "AKC coat length: Medium; coat type: Smooth",
    sourceId: "akc-flat-coated-retriever",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-flat-coated-retriever" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-flat-coated-retriever" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-flat-coated-retriever" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-flat-coated-retriever" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-flat-coated-retriever" },
  },
  lifespanYears: { min: 8, max: 10, bound: "closed", basis: { kind: "breed" }, statedAs: "8-10 years", sourceId: "akc-flat-coated-retriever" },
  sources: ["akc-flat-coated-retriever"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
