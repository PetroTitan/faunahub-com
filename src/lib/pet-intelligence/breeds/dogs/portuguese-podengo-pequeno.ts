import type { Breed } from "../../types.ts";

/** Portuguese Podengo Pequeno. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-portuguese-podengo-pequeno",
  slug: "portuguese-podengo-pequeno",
  species: "dog",
  name: "Portuguese Podengo Pequeno",
  aliases: ["Pequeno"],
  originCountries: ["Portugal"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "443",
      registryUrl: "https://www.akc.org/dog-breeds/portuguese-podengo-pequeno/",
      recognizedYear: 2013,
      sourceId: "akc-portuguese-podengo-pequeno",
    },
  ],
  measurements: {
    heightCm: [
      { min: 20.3, max: 30.5, bound: "closed", basis: { kind: "breed" }, statedAs: "8-12 inches", sourceId: "akc-portuguese-podengo-pequeno" },
    ],
    weightKg: [
      { min: 4.1, max: 5.9, bound: "closed", basis: { kind: "breed" }, statedAs: "9-13 pounds", sourceId: "akc-portuguese-podengo-pequeno" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth", "Wiry"],
    statedAs: "AKC coat length: Short; coat type: Smooth, Wiry",
    sourceId: "akc-portuguese-podengo-pequeno",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-portuguese-podengo-pequeno" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-portuguese-podengo-pequeno" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-portuguese-podengo-pequeno" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-portuguese-podengo-pequeno" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-portuguese-podengo-pequeno" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-portuguese-podengo-pequeno" },
  sources: ["akc-portuguese-podengo-pequeno"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
