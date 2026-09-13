import type { Breed } from "../../types.ts";

/** Russian Tsvetnaya Bolonka. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-russian-tsvetnaya-bolonka",
  slug: "russian-tsvetnaya-bolonka",
  species: "dog",
  name: "Russian Tsvetnaya Bolonka",
  aliases: ["Bolonka"],
  originCountries: ["Russia"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Toy Group",
      registryBreedCode: "549",
      registryUrl: "https://www.akc.org/dog-breeds/russian-tsvetnaya-bolonka/",
      sourceId: "akc-russian-tsvetnaya-bolonka",
    },
  ],
  measurements: {
    heightCm: [
      { min: 27.9, max: 27.9, bound: "about", basis: { kind: "breed" }, statedAs: "11 inches", sourceId: "akc-russian-tsvetnaya-bolonka" },
    ],
    weightKg: [
      { min: 2.7, max: 4.1, bound: "closed", basis: { kind: "breed" }, statedAs: "6 - 9 pounds", sourceId: "akc-russian-tsvetnaya-bolonka" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Wavy"],
    statedAs: "AKC coat length: Medium; coat type: Wavy",
    sourceId: "akc-russian-tsvetnaya-bolonka",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-russian-tsvetnaya-bolonka" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-russian-tsvetnaya-bolonka" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-russian-tsvetnaya-bolonka" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-russian-tsvetnaya-bolonka" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-russian-tsvetnaya-bolonka" },
  },
  lifespanYears: { min: 14, max: 20, bound: "closed", basis: { kind: "breed" }, statedAs: "14-20 years", sourceId: "akc-russian-tsvetnaya-bolonka" },
  sources: ["akc-russian-tsvetnaya-bolonka"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
