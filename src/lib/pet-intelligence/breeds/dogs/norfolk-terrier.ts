import type { Breed } from "../../types.ts";

/** Norfolk Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-norfolk-terrier",
  slug: "norfolk-terrier",
  species: "dog",
  name: "Norfolk Terrier",
  aliases: ["Norfolk"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "216",
      registryUrl: "https://www.akc.org/dog-breeds/norfolk-terrier/",
      recognizedYear: 1979,
      sourceId: "akc-norfolk-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 22.9, max: 25.4, bound: "closed", basis: { kind: "breed" }, statedAs: "9-10 inches", sourceId: "akc-norfolk-terrier" },
    ],
    weightKg: [
      { min: 5, max: 5.4, bound: "closed", basis: { kind: "breed" }, statedAs: "11-12 pounds", sourceId: "akc-norfolk-terrier" },
    ],
  },
  coat: {
    length: "short",
    types: ["Double", "Wiry"],
    statedAs: "AKC coat length: Short; coat type: Double, Wiry",
    sourceId: "akc-norfolk-terrier",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-norfolk-terrier" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-norfolk-terrier" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-norfolk-terrier" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-norfolk-terrier" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-norfolk-terrier" },
  },
  lifespanYears: { min: 12, max: 16, bound: "closed", basis: { kind: "breed" }, statedAs: "12-16 years", sourceId: "akc-norfolk-terrier" },
  sources: ["akc-norfolk-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
