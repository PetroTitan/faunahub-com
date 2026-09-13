import type { Breed } from "../../types.ts";

/** Welsh Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-welsh-terrier",
  slug: "welsh-terrier",
  species: "dog",
  name: "Welsh Terrier",
  aliases: ["Welsh"],
  originCountries: ["Wales"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "221",
      registryUrl: "https://www.akc.org/dog-breeds/welsh-terrier/",
      recognizedYear: 1888,
      sourceId: "akc-welsh-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 38.1, max: 38.1, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "15 inches (male)", sourceId: "akc-welsh-terrier" },
    ],
    weightKg: [
      { min: 9.1, max: 9.1, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "20 pounds (male)", sourceId: "akc-welsh-terrier" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double", "Wiry"],
    statedAs: "AKC coat length: Medium; coat type: Double, Wiry",
    sourceId: "akc-welsh-terrier",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-welsh-terrier" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-welsh-terrier" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-welsh-terrier" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-welsh-terrier" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-welsh-terrier" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-welsh-terrier" },
  sources: ["akc-welsh-terrier"],
  images: ["dog-welsh-terrier-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
