import type { Breed } from "../../types.ts";

/** Bedlington Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-bedlington-terrier",
  slug: "bedlington-terrier",
  species: "dog",
  name: "Bedlington Terrier",
  aliases: ["Bedlington"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "204",
      registryUrl: "https://www.akc.org/dog-breeds/bedlington-terrier/",
      recognizedYear: 1886,
      sourceId: "akc-bedlington-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 38.1, max: 44.5, bound: "closed", basis: { kind: "breed" }, statedAs: "15-17.5 inches", sourceId: "akc-bedlington-terrier" },
    ],
    weightKg: [
      { min: 7.7, max: 10.4, bound: "closed", basis: { kind: "breed" }, statedAs: "17-23 pounds", sourceId: "akc-bedlington-terrier" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Curly"],
    statedAs: "AKC coat length: Medium; coat type: Curly",
    sourceId: "akc-bedlington-terrier",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-bedlington-terrier" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-bedlington-terrier" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-bedlington-terrier" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-bedlington-terrier" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-bedlington-terrier" },
  },
  lifespanYears: { min: 11, max: 16, bound: "closed", basis: { kind: "breed" }, statedAs: "11-16 years", sourceId: "akc-bedlington-terrier" },
  sources: ["akc-bedlington-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
