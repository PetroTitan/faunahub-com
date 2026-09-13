import type { Breed } from "../../types.ts";

/** Entlebucher Mountain Dog. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-entlebucher-mountain-dog",
  slug: "entlebucher-mountain-dog",
  species: "dog",
  name: "Entlebucher Mountain Dog",
  aliases: ["Entlebucher", "Entle"],
  originCountries: ["Switzerland"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Herding Group",
      registryBreedCode: "859",
      registryUrl: "https://www.akc.org/dog-breeds/entlebucher-mountain-dog/",
      recognizedYear: 2011,
      sourceId: "akc-entlebucher-mountain-dog",
    },
  ],
  measurements: {
    heightCm: [
      { min: 44.5, max: 52.1, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "17.5-20.5 inches (male)", sourceId: "akc-entlebucher-mountain-dog" },
      { min: 41.9, max: 49.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "16.5-19.5 inches (female)", sourceId: "akc-entlebucher-mountain-dog" },
    ],
    weightKg: [
      { min: 22.7, max: 29.5, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "50-65 pounds (male)", sourceId: "akc-entlebucher-mountain-dog" },
      { min: 18.1, max: 24.9, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "40-55 pounds (female)", sourceId: "akc-entlebucher-mountain-dog" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-entlebucher-mountain-dog",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-entlebucher-mountain-dog" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-entlebucher-mountain-dog" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-entlebucher-mountain-dog" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-entlebucher-mountain-dog" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-entlebucher-mountain-dog" },
  },
  lifespanYears: { min: 11, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "11-13 years", sourceId: "akc-entlebucher-mountain-dog" },
  sources: ["akc-entlebucher-mountain-dog"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
