import type { Breed } from "../../types.ts";

/** Russian Toy. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-russian-toy",
  slug: "russian-toy",
  species: "dog",
  name: "Russian Toy",
  originCountries: ["Russia"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Toy Group",
      registryBreedCode: "547",
      registryUrl: "https://www.akc.org/dog-breeds/russian-toy/",
      recognizedYear: 2022,
      sourceId: "akc-russian-toy",
    },
  ],
  measurements: {
    heightCm: [
      { min: 20.3, max: 27.9, bound: "closed", basis: { kind: "breed" }, statedAs: "8-11 inches", sourceId: "akc-russian-toy" },
    ],
    weightKg: [
      { max: 2.9, bound: "at-most", basis: { kind: "breed" }, statedAs: "Up to 6.5 pounds", sourceId: "akc-russian-toy" },
    ],
  },
  coat: {
    length: "short",
    types: ["Double"],
    statedAs: "AKC coat length: Short; coat type: Double",
    sourceId: "akc-russian-toy",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-russian-toy" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-russian-toy" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-russian-toy" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-russian-toy" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-russian-toy" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-russian-toy" },
  sources: ["akc-russian-toy"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
