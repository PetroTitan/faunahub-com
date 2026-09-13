import type { Breed } from "../../types.ts";

/** Petit Basset Griffon Vendéen. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-petit-basset-griffon-vendeen",
  slug: "petit-basset-griffon-vendeen",
  species: "dog",
  name: "Petit Basset Griffon Vendéen",
  canonicalCommonName: "Petit Basset Griffon Vendéen",
  aliases: ["PBGV", "Petit"],
  originCountries: ["France"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "422",
      registryUrl: "https://www.akc.org/dog-breeds/petit-basset-griffon-vendeen/",
      recognizedYear: 1990,
      sourceId: "akc-petit-basset-griffon-vendeen",
    },
  ],
  measurements: {
    heightCm: [
      { min: 33, max: 38.1, bound: "closed", basis: { kind: "breed" }, statedAs: "13-15 inches", sourceId: "akc-petit-basset-griffon-vendeen" },
    ],
    weightKg: [
      { min: 11.3, max: 18.1, bound: "closed", basis: { kind: "breed" }, statedAs: "25-40 pounds", sourceId: "akc-petit-basset-griffon-vendeen" },
    ],
  },
  coat: {
    length: "long",
    types: ["Double", "Rough"],
    statedAs: "AKC coat length: Long; coat type: Double, Rough",
    sourceId: "akc-petit-basset-griffon-vendeen",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-petit-basset-griffon-vendeen" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-petit-basset-griffon-vendeen" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-petit-basset-griffon-vendeen" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-petit-basset-griffon-vendeen" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-petit-basset-griffon-vendeen" },
  },
  lifespanYears: { min: 14, max: 16, bound: "closed", basis: { kind: "breed" }, statedAs: "14-16 years", sourceId: "akc-petit-basset-griffon-vendeen" },
  sources: ["akc-petit-basset-griffon-vendeen"],
  images: ["dog-petit-basset-griffon-vendeen-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
