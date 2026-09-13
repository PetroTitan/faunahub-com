import type { Breed } from "../../types.ts";

/** Brussels Griffon. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-brussels-griffon",
  slug: "brussels-griffon",
  species: "dog",
  name: "Brussels Griffon",
  aliases: ["Griffon Bruxellois", "Griff"],
  originCountries: ["Belgium"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Toy Group",
      registryBreedCode: "502",
      registryUrl: "https://www.akc.org/dog-breeds/brussels-griffon/",
      recognizedYear: 1910,
      sourceId: "akc-brussels-griffon",
    },
  ],
  measurements: {
    heightCm: [
      { min: 17.8, max: 25.4, bound: "closed", basis: { kind: "breed" }, statedAs: "7-10 inches", sourceId: "akc-brussels-griffon" },
    ],
    weightKg: [
      { min: 3.6, max: 4.5, bound: "closed", basis: { kind: "breed" }, statedAs: "8-10 pounds", sourceId: "akc-brussels-griffon" },
    ],
  },
  coat: {
    length: "short",
    types: ["Double", "Smooth", "Wiry"],
    statedAs: "AKC coat length: Short, Medium; coat type: Double, Smooth, Wiry",
    sourceId: "akc-brussels-griffon",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-brussels-griffon" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-brussels-griffon" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-brussels-griffon" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-brussels-griffon" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-brussels-griffon" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-brussels-griffon" },
  sources: ["akc-brussels-griffon"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
