import type { Breed } from "../../types.ts";

/** Bolognese. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-bolognese",
  slug: "bolognese",
  species: "dog",
  name: "Bolognese",
  aliases: ["Bolo"],
  originCountries: ["Italy"],
  recognition: [
    {
      registryId: "akc",
      status: "provisional",
      registryGroup: "Miscellaneous Class",
      registryBreedCode: "521",
      registryUrl: "https://www.akc.org/dog-breeds/bolognese/",
      sourceId: "akc-bolognese",
    },
  ],
  measurements: {
    heightCm: [
      { min: 25.4, max: 30.5, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 inches", sourceId: "akc-bolognese" },
    ],
    weightKg: [
      { min: 2.7, max: 4.5, bound: "closed", basis: { kind: "breed" }, statedAs: "6-10 pounds", sourceId: "akc-bolognese" },
    ],
  },
  coat: {
    length: "long",
    types: ["Wavy"],
    statedAs: "AKC coat length: Long; coat type: Wavy",
    sourceId: "akc-bolognese",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-bolognese" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-bolognese" },
    exerciseNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-bolognese" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-bolognese" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-bolognese" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-bolognese" },
  sources: ["akc-bolognese"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
