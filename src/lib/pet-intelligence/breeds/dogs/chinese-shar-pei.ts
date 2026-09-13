import type { Breed } from "../../types.ts";

/** Chinese Shar-Pei. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-chinese-shar-pei",
  slug: "chinese-shar-pei",
  species: "dog",
  name: "Chinese Shar-Pei",
  canonicalCommonName: "Chinese Shar-Pei",
  aliases: ["Shar-Pei"],
  originCountries: ["China"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Non-Sporting Group",
      registryBreedCode: "314",
      registryUrl: "https://www.akc.org/dog-breeds/chinese-shar-pei/",
      recognizedYear: 1992,
      sourceId: "akc-chinese-shar-pei",
    },
  ],
  measurements: {
    heightCm: [
      { min: 45.7, max: 50.8, bound: "closed", basis: { kind: "breed" }, statedAs: "18-20 inches", sourceId: "akc-chinese-shar-pei" },
    ],
    weightKg: [
      { min: 20.4, max: 27.2, bound: "closed", basis: { kind: "breed" }, statedAs: "45-60 pounds", sourceId: "akc-chinese-shar-pei" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-chinese-shar-pei",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-chinese-shar-pei" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-chinese-shar-pei" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-chinese-shar-pei" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-chinese-shar-pei" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-chinese-shar-pei" },
  },
  lifespanYears: { min: 8, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "8-12 years", sourceId: "akc-chinese-shar-pei" },
  sources: ["akc-chinese-shar-pei"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
