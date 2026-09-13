import type { Breed } from "../../types.ts";

/** Yakutian Laika. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-yakutian-laika",
  slug: "yakutian-laika",
  species: "dog",
  name: "Yakutian Laika",
  aliases: ["Yakuts"],
  originCountries: ["Yakutia"],
  recognition: [
    {
      registryId: "akc",
      status: "provisional",
      registryGroup: "Miscellaneous Class",
      registryBreedCode: "670",
      registryUrl: "https://www.akc.org/dog-breeds/yakutian-laika/",
      sourceId: "akc-yakutian-laika",
    },
  ],
  measurements: {
    heightCm: [
      { min: 53.3, max: 58.4, bound: "closed", basis: { kind: "breed" }, statedAs: "21-23 inches", sourceId: "akc-yakutian-laika" },
    ],
    weightKg: [
      { min: 18.1, max: 24.9, bound: "closed", basis: { kind: "breed" }, statedAs: "40-55 pounds", sourceId: "akc-yakutian-laika" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-yakutian-laika",
  },
  traits: {
    shedding: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-yakutian-laika" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-yakutian-laika" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-yakutian-laika" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-yakutian-laika" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-yakutian-laika" },
  },
  lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-yakutian-laika" },
  sources: ["akc-yakutian-laika"],
  images: ["dog-yakutian-laika-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
