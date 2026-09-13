import type { Breed } from "../../types.ts";

/** Bouvier des Flandres. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-bouvier-des-flandres",
  slug: "bouvier-des-flandres",
  species: "dog",
  name: "Bouvier des Flandres",
  canonicalCommonName: "Bouvier des Flandres",
  aliases: ["Bouvier", "the Franco-Belgian Dog"],
  originCountries: ["Flanders (France, Belgium, Netherlands)"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "806",
      registryUrl: "https://www.akc.org/dog-breeds/bouvier-des-flandres/",
      recognizedYear: 1931,
      sourceId: "akc-bouvier-des-flandres",
    },
  ],
  measurements: {
    heightCm: [
      { min: 62.2, max: 69.9, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "24.5-27.5 inches (male)", sourceId: "akc-bouvier-des-flandres" },
      { min: 59.7, max: 67.3, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "23.5-26.5 inches (female)", sourceId: "akc-bouvier-des-flandres" },
    ],
    weightKg: [
      { min: 31.8, max: 49.9, bound: "closed", basis: { kind: "breed" }, statedAs: "70-110 pounds", sourceId: "akc-bouvier-des-flandres" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double", "Rough"],
    statedAs: "AKC coat length: Medium; coat type: Double, Rough",
    sourceId: "akc-bouvier-des-flandres",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-bouvier-des-flandres" },
    groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-bouvier-des-flandres" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-bouvier-des-flandres" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-bouvier-des-flandres" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-bouvier-des-flandres" },
  },
  lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-bouvier-des-flandres" },
  sources: ["akc-bouvier-des-flandres"],
  images: ["dog-bouvier-des-flandres-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
