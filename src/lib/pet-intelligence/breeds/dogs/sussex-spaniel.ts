import type { Breed } from "../../types.ts";

/** Sussex Spaniel. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-sussex-spaniel",
  slug: "sussex-spaniel",
  species: "dog",
  name: "Sussex Spaniel",
  aliases: ["Sussex (singular and plural)"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "120",
      registryUrl: "https://www.akc.org/dog-breeds/sussex-spaniel/",
      recognizedYear: 1878,
      sourceId: "akc-sussex-spaniel",
    },
  ],
  measurements: {
    heightCm: [
      { min: 33, max: 38.1, bound: "closed", basis: { kind: "breed" }, statedAs: "13-15 inches", sourceId: "akc-sussex-spaniel" },
    ],
    weightKg: [
      { min: 15.9, max: 20.4, bound: "closed", basis: { kind: "breed" }, statedAs: "35-45 pounds", sourceId: "akc-sussex-spaniel" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-sussex-spaniel",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-sussex-spaniel" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-sussex-spaniel" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-sussex-spaniel" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-sussex-spaniel" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-sussex-spaniel" },
  },
  lifespanYears: { min: 13, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "13-15 years", sourceId: "akc-sussex-spaniel" },
  sources: ["akc-sussex-spaniel"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
