import type { Breed } from "../../types.ts";

/** Scottish Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-scottish-terrier",
  slug: "scottish-terrier",
  species: "dog",
  name: "Scottish Terrier",
  aliases: ["Scottie", "Diehard"],
  originCountries: ["Scotland"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "218",
      registryUrl: "https://www.akc.org/dog-breeds/scottish-terrier/",
      recognizedYear: 1885,
      sourceId: "akc-scottish-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 25.4, max: 25.4, bound: "about", basis: { kind: "breed" }, statedAs: "10 inches", sourceId: "akc-scottish-terrier" },
    ],
    weightKg: [
      { min: 8.6, max: 10, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "19-22 pounds (male)", sourceId: "akc-scottish-terrier" },
      { min: 8.2, max: 9.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "18-21 pounds (female)", sourceId: "akc-scottish-terrier" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double", "Wiry"],
    statedAs: "AKC coat length: Medium; coat type: Double, Wiry",
    sourceId: "akc-scottish-terrier",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-scottish-terrier" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-scottish-terrier" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-scottish-terrier" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-scottish-terrier" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-scottish-terrier" },
  },
  lifespanYears: { min: 12, max: 12, bound: "about", basis: { kind: "breed" }, statedAs: "12 years", sourceId: "akc-scottish-terrier" },
  sources: ["akc-scottish-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
