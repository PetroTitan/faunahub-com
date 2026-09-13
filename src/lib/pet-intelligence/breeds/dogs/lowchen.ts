import type { Breed } from "../../types.ts";

/** Löwchen. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-lowchen",
  slug: "lowchen",
  species: "dog",
  name: "Löwchen",
  canonicalCommonName: "Löwchen",
  aliases: ["Little Lion Dog"],
  originCountries: ["Unknown"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Non-Sporting Group",
      registryBreedCode: "317",
      registryUrl: "https://www.akc.org/dog-breeds/lowchen/",
      recognizedYear: 1996,
      sourceId: "akc-lowchen",
    },
  ],
  measurements: {
    heightCm: [
      { min: 30.5, max: 35.6, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 inches", sourceId: "akc-lowchen" },
    ],
    weightKg: [
      { min: 6.8, max: 6.8, bound: "about", basis: { kind: "breed" }, statedAs: "15 pounds", sourceId: "akc-lowchen" },
    ],
  },
  coat: {
    length: "long",
    types: ["Wavy"],
    statedAs: "AKC coat length: Long; coat type: Wavy",
    sourceId: "akc-lowchen",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-lowchen" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-lowchen" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-lowchen" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-lowchen" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-lowchen" },
  },
  lifespanYears: { min: 13, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "13-15 years", sourceId: "akc-lowchen" },
  sources: ["akc-lowchen"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
