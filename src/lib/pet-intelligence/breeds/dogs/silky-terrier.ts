import type { Breed } from "../../types.ts";

/** Silky Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-silky-terrier",
  slug: "silky-terrier",
  species: "dog",
  name: "Silky Terrier",
  aliases: ["Silky", "Sydney Silky"],
  originCountries: ["Australia"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Toy Group",
      registryBreedCode: "514",
      registryUrl: "https://www.akc.org/dog-breeds/silky-terrier/",
      recognizedYear: 1959,
      sourceId: "akc-silky-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 22.9, max: 25.4, bound: "closed", basis: { kind: "breed" }, statedAs: "9-10 inches", sourceId: "akc-silky-terrier" },
    ],
    weightKg: [
      { min: 4.5, max: 4.5, bound: "about", basis: { kind: "breed" }, statedAs: "around 10 pounds", sourceId: "akc-silky-terrier" },
    ],
  },
  coat: {
    length: "long",
    types: ["Silky"],
    statedAs: "AKC coat length: Long; coat type: Silky",
    sourceId: "akc-silky-terrier",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-silky-terrier" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-silky-terrier" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-silky-terrier" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-silky-terrier" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-silky-terrier" },
  },
  lifespanYears: { min: 13, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "13-15 years", sourceId: "akc-silky-terrier" },
  sources: ["akc-silky-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
