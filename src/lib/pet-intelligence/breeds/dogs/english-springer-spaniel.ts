import type { Breed } from "../../types.ts";

/** English Springer Spaniel. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-english-springer-spaniel",
  slug: "english-springer-spaniel",
  species: "dog",
  name: "English Springer Spaniel",
  aliases: ["Springer"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "117",
      registryUrl: "https://www.akc.org/dog-breeds/english-springer-spaniel/",
      recognizedYear: 1910,
      sourceId: "akc-english-springer-spaniel",
    },
  ],
  measurements: {
    heightCm: [
      { min: 50.8, max: 50.8, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "20 inches (male)", sourceId: "akc-english-springer-spaniel" },
      { min: 48.3, max: 48.3, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "19 inches (female)", sourceId: "akc-english-springer-spaniel" },
    ],
    weightKg: [
      { min: 22.7, max: 22.7, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "50 pounds (male)", sourceId: "akc-english-springer-spaniel" },
      { min: 18.1, max: 18.1, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "40 pounds (female)", sourceId: "akc-english-springer-spaniel" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-english-springer-spaniel",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-english-springer-spaniel" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-english-springer-spaniel" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-english-springer-spaniel" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-english-springer-spaniel" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-english-springer-spaniel" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-english-springer-spaniel" },
  sources: ["akc-english-springer-spaniel"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
