import type { Breed } from "../../types.ts";

/** American Hairless Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-american-hairless-terrier",
  slug: "american-hairless-terrier",
  species: "dog",
  name: "American Hairless Terrier",
  aliases: ["AHT"],
  originCountries: ["United States"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "231",
      registryUrl: "https://www.akc.org/dog-breeds/american-hairless-terrier/",
      recognizedYear: 2016,
      sourceId: "akc-american-hairless-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 30.5, max: 40.6, bound: "closed", basis: { kind: "breed" }, statedAs: "12-16 inches", sourceId: "akc-american-hairless-terrier" },
    ],
    weightKg: [
      { min: 5.4, max: 12.7, bound: "closed", basis: { kind: "breed" }, statedAs: "12-28 pounds", sourceId: "akc-american-hairless-terrier" },
    ],
  },
  coat: {
    length: "short",
    types: ["Hairless"],
    statedAs: "AKC coat length: Short; coat type: Hairless",
    sourceId: "akc-american-hairless-terrier",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-hairless-terrier" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-hairless-terrier" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-hairless-terrier" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-hairless-terrier" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-hairless-terrier" },
  },
  lifespanYears: { min: 14, max: 16, bound: "closed", basis: { kind: "breed" }, statedAs: "14-16 years", sourceId: "akc-american-hairless-terrier" },
  sources: ["akc-american-hairless-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
