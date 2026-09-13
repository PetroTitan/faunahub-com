import type { Breed } from "../../types.ts";

/** Soft Coated Wheaten Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-soft-coated-wheaten-terrier",
  slug: "soft-coated-wheaten-terrier",
  species: "dog",
  name: "Soft Coated Wheaten Terrier",
  aliases: ["Wheaten", "SCWT", "Poor Man¿s Wolfhound"],
  originCountries: ["Ireland"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "223",
      registryUrl: "https://www.akc.org/dog-breeds/soft-coated-wheaten-terrier/",
      recognizedYear: 1973,
      sourceId: "akc-soft-coated-wheaten-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 45.7, max: 48.3, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "18-19 inches (male)", sourceId: "akc-soft-coated-wheaten-terrier" },
      { min: 43.2, max: 45.7, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "17-18 inches (female)", sourceId: "akc-soft-coated-wheaten-terrier" },
    ],
    weightKg: [
      { min: 15.9, max: 18.1, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "35-40 pounds (male)", sourceId: "akc-soft-coated-wheaten-terrier" },
      { min: 13.6, max: 15.9, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "30-35 pounds (female)", sourceId: "akc-soft-coated-wheaten-terrier" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Wavy", "Silky"],
    statedAs: "AKC coat length: Medium; coat type: Wavy, Silky",
    sourceId: "akc-soft-coated-wheaten-terrier",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-soft-coated-wheaten-terrier" },
    groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-soft-coated-wheaten-terrier" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-soft-coated-wheaten-terrier" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-soft-coated-wheaten-terrier" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-soft-coated-wheaten-terrier" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-soft-coated-wheaten-terrier" },
  sources: ["akc-soft-coated-wheaten-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
