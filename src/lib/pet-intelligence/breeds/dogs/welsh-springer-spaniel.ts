import type { Breed } from "../../types.ts";

/** Welsh Springer Spaniel. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-welsh-springer-spaniel",
  slug: "welsh-springer-spaniel",
  species: "dog",
  name: "Welsh Springer Spaniel",
  aliases: ["Welshie", "Welshman"],
  originCountries: ["Wales"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "121",
      registryUrl: "https://www.akc.org/dog-breeds/welsh-springer-spaniel/",
      recognizedYear: 1914,
      sourceId: "akc-welsh-springer-spaniel",
    },
  ],
  measurements: {
    heightCm: [
      { min: 45.7, max: 48.3, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "18-19 inches (male)", sourceId: "akc-welsh-springer-spaniel" },
      { min: 43.2, max: 45.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "17-18 inches (female)", sourceId: "akc-welsh-springer-spaniel" },
    ],
    weightKg: [
      { min: 18.1, max: 24.9, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "40-55 pounds (male)", sourceId: "akc-welsh-springer-spaniel" },
      { min: 15.9, max: 22.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "35-50 pounds (female)", sourceId: "akc-welsh-springer-spaniel" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-welsh-springer-spaniel",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-welsh-springer-spaniel" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-welsh-springer-spaniel" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-welsh-springer-spaniel" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-welsh-springer-spaniel" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-welsh-springer-spaniel" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-welsh-springer-spaniel" },
  sources: ["akc-welsh-springer-spaniel"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
