import type { Breed } from "../../types.ts";

/** Chinese Crested. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-chinese-crested",
  slug: "chinese-crested",
  species: "dog",
  name: "Chinese Crested",
  aliases: ["Crested"],
  originCountries: ["Africa/China"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Toy Group",
      registryBreedCode: "516",
      registryUrl: "https://www.akc.org/dog-breeds/chinese-crested/",
      recognizedYear: 1991,
      sourceId: "akc-chinese-crested",
    },
  ],
  measurements: {
    heightCm: [
      { min: 27.9, max: 33, bound: "closed", basis: { kind: "breed" }, statedAs: "11-13 inches", sourceId: "akc-chinese-crested" },
    ],
    weightKg: [
      { min: 3.6, max: 5.4, bound: "closed", basis: { kind: "breed" }, statedAs: "8-12 pounds", sourceId: "akc-chinese-crested" },
    ],
  },
  coat: {
    length: "short",
    types: ["Silky", "Hairless"],
    statedAs: "AKC coat length: Short, Medium; coat type: Silky, Hairless",
    sourceId: "akc-chinese-crested",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-chinese-crested" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-chinese-crested" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-chinese-crested" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-chinese-crested" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-chinese-crested" },
  },
  lifespanYears: { min: 13, max: 18, bound: "closed", basis: { kind: "breed" }, statedAs: "13-18 years", sourceId: "akc-chinese-crested" },
  sources: ["akc-chinese-crested"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
