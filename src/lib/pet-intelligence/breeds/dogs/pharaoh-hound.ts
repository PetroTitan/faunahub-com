import type { Breed } from "../../types.ts";

/** Pharaoh Hound. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-pharaoh-hound",
  slug: "pharaoh-hound",
  species: "dog",
  name: "Pharaoh Hound",
  aliases: ["Pharaoh", "the Blushing Dog"],
  originCountries: ["Malta"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "421",
      registryUrl: "https://www.akc.org/dog-breeds/pharaoh-hound/",
      recognizedYear: 1983,
      sourceId: "akc-pharaoh-hound",
    },
  ],
  measurements: {
    heightCm: [
      { min: 58.4, max: 63.5, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "23-25 inches (male)", sourceId: "akc-pharaoh-hound" },
      { min: 53.3, max: 61, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "21-24 inches (female)", sourceId: "akc-pharaoh-hound" },
    ],
    weightKg: [
      { min: 20.4, max: 24.9, bound: "closed", basis: { kind: "breed" }, statedAs: "45-55 pounds", sourceId: "akc-pharaoh-hound" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-pharaoh-hound",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-pharaoh-hound" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-pharaoh-hound" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-pharaoh-hound" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-pharaoh-hound" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-pharaoh-hound" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-pharaoh-hound" },
  sources: ["akc-pharaoh-hound"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
