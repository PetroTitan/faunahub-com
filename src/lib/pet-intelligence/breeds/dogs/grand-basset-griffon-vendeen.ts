import type { Breed } from "../../types.ts";

/** Grand Basset Griffon Vendéen. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-grand-basset-griffon-vendeen",
  slug: "grand-basset-griffon-vendeen",
  species: "dog",
  name: "Grand Basset Griffon Vendéen",
  canonicalCommonName: "Grand Basset Griffon Vendéen",
  aliases: ["GBGV"],
  originCountries: ["France"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "439",
      registryUrl: "https://www.akc.org/dog-breeds/grand-basset-griffon-vendeen/",
      recognizedYear: 2018,
      sourceId: "akc-grand-basset-griffon-vendeen",
    },
  ],
  measurements: {
    heightCm: [
      { min: 39.4, max: 45.7, bound: "closed", basis: { kind: "breed" }, statedAs: "15.5-18 inches", sourceId: "akc-grand-basset-griffon-vendeen" },
    ],
    weightKg: [
      { min: 18.1, max: 20.4, bound: "closed", basis: { kind: "breed" }, statedAs: "40-45 pounds", sourceId: "akc-grand-basset-griffon-vendeen" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Wiry", "Double"],
    statedAs: "AKC coat length: Medium; coat type: Wiry, Double",
    sourceId: "akc-grand-basset-griffon-vendeen",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-grand-basset-griffon-vendeen" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-grand-basset-griffon-vendeen" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-grand-basset-griffon-vendeen" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-grand-basset-griffon-vendeen" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-grand-basset-griffon-vendeen" },
  },
  lifespanYears: { min: 13, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "13-15 years", sourceId: "akc-grand-basset-griffon-vendeen" },
  sources: ["akc-grand-basset-griffon-vendeen"],
  images: ["dog-grand-basset-griffon-vendeen-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
