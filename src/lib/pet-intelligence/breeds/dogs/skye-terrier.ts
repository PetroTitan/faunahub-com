import type { Breed } from "../../types.ts";

/** Skye Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-skye-terrier",
  slug: "skye-terrier",
  species: "dog",
  name: "Skye Terrier",
  aliases: ["Skye"],
  originCountries: ["Scotland"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "220",
      registryUrl: "https://www.akc.org/dog-breeds/skye-terrier/",
      recognizedYear: 1887,
      sourceId: "akc-skye-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 25.4, max: 25.4, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "10 inches (male)", sourceId: "akc-skye-terrier" },
      { min: 24.1, max: 24.1, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "9.5 inches (female)", sourceId: "akc-skye-terrier" },
    ],
    weightKg: [
      { min: 15.9, max: 20.4, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "35-45 pounds (male)", sourceId: "akc-skye-terrier" },
    ],
  },
  coat: {
    length: "long",
    types: ["Double"],
    statedAs: "AKC coat length: Long; coat type: Double",
    sourceId: "akc-skye-terrier",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-skye-terrier" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-skye-terrier" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-skye-terrier" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-skye-terrier" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-skye-terrier" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-skye-terrier" },
  sources: ["akc-skye-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
