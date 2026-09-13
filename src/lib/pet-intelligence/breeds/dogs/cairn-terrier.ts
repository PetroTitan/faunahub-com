import type { Breed } from "../../types.ts";

/** Cairn Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-cairn-terrier",
  slug: "cairn-terrier",
  species: "dog",
  name: "Cairn Terrier",
  aliases: ["Cairn"],
  originCountries: ["Scotland"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "207",
      registryUrl: "https://www.akc.org/dog-breeds/cairn-terrier/",
      recognizedYear: 1913,
      sourceId: "akc-cairn-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 25.4, max: 25.4, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "10 inches (male)", sourceId: "akc-cairn-terrier" },
      { min: 24.1, max: 24.1, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "9.5 inches (female)", sourceId: "akc-cairn-terrier" },
    ],
    weightKg: [
      { min: 6.4, max: 6.4, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "14 pounds (male)", sourceId: "akc-cairn-terrier" },
      { min: 5.9, max: 5.9, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "13 pounds (female)", sourceId: "akc-cairn-terrier" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double", "Wiry"],
    statedAs: "AKC coat length: Medium; coat type: Double, Wiry",
    sourceId: "akc-cairn-terrier",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-cairn-terrier" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-cairn-terrier" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-cairn-terrier" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-cairn-terrier" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-cairn-terrier" },
  },
  lifespanYears: { min: 13, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "13-15 years", sourceId: "akc-cairn-terrier" },
  sources: ["akc-cairn-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
