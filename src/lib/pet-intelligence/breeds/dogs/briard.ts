import type { Breed } from "../../types.ts";

/** Briard. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-briard",
  slug: "briard",
  species: "dog",
  name: "Briard",
  aliases: ["Berger de Brie (France)"],
  originCountries: ["France"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "808",
      registryUrl: "https://www.akc.org/dog-breeds/briard/",
      recognizedYear: 1928,
      sourceId: "akc-briard",
    },
  ],
  measurements: {
    heightCm: [
      { min: 58.4, max: 68.6, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "23-27 inches (male)", sourceId: "akc-briard" },
      { min: 55.9, max: 64.8, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "22-25.5 inches (female)", sourceId: "akc-briard" },
    ],
    weightKg: [
      { min: 24.9, max: 45.4, bound: "closed", basis: { kind: "breed" }, statedAs: "55-100 pounds", sourceId: "akc-briard" },
    ],
  },
  coat: {
    length: "long",
    types: ["Wavy", "Double"],
    statedAs: "AKC coat length: Long; coat type: Wavy, Double",
    sourceId: "akc-briard",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-briard" },
    groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-briard" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-briard" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-briard" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-briard" },
  },
  lifespanYears: { min: 12, max: 12, bound: "about", basis: { kind: "breed" }, statedAs: "12 years", sourceId: "akc-briard" },
  sources: ["akc-briard"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
