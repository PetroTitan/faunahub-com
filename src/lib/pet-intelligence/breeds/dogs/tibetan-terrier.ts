import type { Breed } from "../../types.ts";

/** Tibetan Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-tibetan-terrier",
  slug: "tibetan-terrier",
  species: "dog",
  name: "Tibetan Terrier",
  aliases: ["TT", "Luck Bringer", "Holy Dog of Tibet"],
  originCountries: ["Tibet"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Non-Sporting Group",
      registryBreedCode: "311",
      registryUrl: "https://www.akc.org/dog-breeds/tibetan-terrier/",
      recognizedYear: 1973,
      sourceId: "akc-tibetan-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 35.6, max: 43.2, bound: "closed", basis: { kind: "breed" }, statedAs: "14-17 inches", sourceId: "akc-tibetan-terrier" },
    ],
    weightKg: [
      { min: 8.2, max: 13.6, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "18-30 pounds (male)", sourceId: "akc-tibetan-terrier" },
    ],
  },
  coat: {
    length: "long",
    types: ["Double"],
    statedAs: "AKC coat length: Long; coat type: Double",
    sourceId: "akc-tibetan-terrier",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-tibetan-terrier" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-tibetan-terrier" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-tibetan-terrier" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-tibetan-terrier" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-tibetan-terrier" },
  },
  lifespanYears: { min: 15, max: 16, bound: "closed", basis: { kind: "breed" }, statedAs: "15-16 years", sourceId: "akc-tibetan-terrier" },
  sources: ["akc-tibetan-terrier"],
  images: ["dog-tibetan-terrier-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
