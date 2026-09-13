import type { Breed } from "../../types.ts";

/** Alaskan Klee Kai. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-alaskan-klee-kai",
  slug: "alaskan-klee-kai",
  species: "dog",
  name: "Alaskan Klee Kai",
  aliases: ["AKK", "KleeKai"],
  originCountries: ["United States"],
  recognition: [
    {
      registryId: "akc",
      status: "provisional",
      registryGroup: "Miscellaneous Class",
      registryBreedCode: "322",
      registryUrl: "https://www.akc.org/dog-breeds/alaskan-klee-kai/",
      sourceId: "akc-alaskan-klee-kai",
    },
  ],
  measurements: {
    heightCm: [
      { min: 30.5, max: 43.2, bound: "closed", basis: { kind: "breed" }, statedAs: "12 - 17 inches", sourceId: "akc-alaskan-klee-kai" },
    ],
    weightKg: [
      { min: 2.7, max: 11.3, bound: "closed", basis: { kind: "breed" }, statedAs: "6 - 25 lbs", sourceId: "akc-alaskan-klee-kai" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-alaskan-klee-kai",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-alaskan-klee-kai" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-alaskan-klee-kai" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-alaskan-klee-kai" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-alaskan-klee-kai" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-alaskan-klee-kai" },
  },
  lifespanYears: { min: 13, max: 16, bound: "closed", basis: { kind: "breed" }, statedAs: "13-16 years", sourceId: "akc-alaskan-klee-kai" },
  sources: ["akc-alaskan-klee-kai"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
