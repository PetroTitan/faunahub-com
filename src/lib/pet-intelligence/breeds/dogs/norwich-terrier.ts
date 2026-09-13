import type { Breed } from "../../types.ts";

/** Norwich Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-norwich-terrier",
  slug: "norwich-terrier",
  species: "dog",
  name: "Norwich Terrier",
  aliases: ["Norwich"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "215",
      registryUrl: "https://www.akc.org/dog-breeds/norwich-terrier/",
      recognizedYear: 1936,
      sourceId: "akc-norwich-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 25.4, max: 25.4, bound: "about", basis: { kind: "breed" }, statedAs: "10 inches", sourceId: "akc-norwich-terrier" },
    ],
    weightKg: [
      { min: 5.4, max: 5.4, bound: "about", basis: { kind: "breed" }, statedAs: "12 pounds", sourceId: "akc-norwich-terrier" },
    ],
  },
  coat: {
    length: "short",
    types: ["Double", "Wiry"],
    statedAs: "AKC coat length: Short; coat type: Double, Wiry",
    sourceId: "akc-norwich-terrier",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-norwich-terrier" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-norwich-terrier" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-norwich-terrier" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-norwich-terrier" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-norwich-terrier" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-norwich-terrier" },
  sources: ["akc-norwich-terrier"],
  images: ["dog-norwich-terrier-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
