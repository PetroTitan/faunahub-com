import type { Breed } from "../../types.ts";

/** Kerry Blue Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-kerry-blue-terrier",
  slug: "kerry-blue-terrier",
  species: "dog",
  name: "Kerry Blue Terrier",
  aliases: ["Kerry"],
  originCountries: ["Ireland"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "211",
      registryUrl: "https://www.akc.org/dog-breeds/kerry-blue-terrier/",
      recognizedYear: 1922,
      sourceId: "akc-kerry-blue-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 45.7, max: 49.5, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "18-19.5 inches (male)", sourceId: "akc-kerry-blue-terrier" },
      { min: 44.5, max: 48.3, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "17.5-19 inches (female)", sourceId: "akc-kerry-blue-terrier" },
    ],
    weightKg: [
      { min: 15, max: 18.1, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "33-40 pounds (male)", sourceId: "akc-kerry-blue-terrier" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Wavy"],
    statedAs: "AKC coat length: Medium; coat type: Wavy",
    sourceId: "akc-kerry-blue-terrier",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-kerry-blue-terrier" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-kerry-blue-terrier" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-kerry-blue-terrier" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-kerry-blue-terrier" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-kerry-blue-terrier" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-kerry-blue-terrier" },
  sources: ["akc-kerry-blue-terrier"],
  images: ["dog-kerry-blue-terrier-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
