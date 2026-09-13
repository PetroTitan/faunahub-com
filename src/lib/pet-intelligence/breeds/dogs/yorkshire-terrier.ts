import type { Breed } from "../../types.ts";

/** Yorkshire Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-yorkshire-terrier",
  slug: "yorkshire-terrier",
  species: "dog",
  name: "Yorkshire Terrier",
  aliases: ["Yorkie"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Toy Group",
      registryBreedCode: "515",
      registryUrl: "https://www.akc.org/dog-breeds/yorkshire-terrier/",
      recognizedYear: 1885,
      sourceId: "akc-yorkshire-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 17.8, max: 20.3, bound: "closed", basis: { kind: "breed" }, statedAs: "7-8 inches", sourceId: "akc-yorkshire-terrier" },
    ],
    weightKg: [
      { min: 3.2, max: 3.2, bound: "about", basis: { kind: "breed" }, statedAs: "7 pounds", sourceId: "akc-yorkshire-terrier" },
    ],
  },
  coat: {
    length: "long",
    types: ["Silky"],
    statedAs: "AKC coat length: Long; coat type: Silky",
    sourceId: "akc-yorkshire-terrier",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-yorkshire-terrier" },
    groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-yorkshire-terrier" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-yorkshire-terrier" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-yorkshire-terrier" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-yorkshire-terrier" },
  },
  lifespanYears: { min: 11, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "11-15 years", sourceId: "akc-yorkshire-terrier" },
  sources: ["akc-yorkshire-terrier"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
