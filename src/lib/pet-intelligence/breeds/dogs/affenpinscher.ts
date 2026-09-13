import type { Breed } from "../../types.ts";

/** Affenpinscher. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-affenpinscher",
  slug: "affenpinscher",
  species: "dog",
  name: "Affenpinscher",
  aliases: ["Affen", "Monkey Dog"],
  originCountries: ["Germany"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Toy Group",
      registryBreedCode: "501",
      registryUrl: "https://www.akc.org/dog-breeds/affenpinscher/",
      recognizedYear: 1936,
      sourceId: "akc-affenpinscher",
    },
  ],
  measurements: {
    heightCm: [
      { min: 22.9, max: 29.2, bound: "closed", basis: { kind: "breed" }, statedAs: "9-11.5 inches", sourceId: "akc-affenpinscher" },
    ],
    weightKg: [
      { min: 3.2, max: 4.5, bound: "closed", basis: { kind: "breed" }, statedAs: "7-10 pounds", sourceId: "akc-affenpinscher" },
    ],
  },
  coat: {
    // AKC records TWO coat lengths for this breed. Storing array[0]
    // filed it under the shorter one alone, so the page contradicted the
    // citation printed directly beneath it and the breed was missing from
    // the collection for its other coat. "variable" is the value the cat
    // side already uses for exactly this case.
    length: "variable",
    types: ["Wiry"],
    statedAs: "AKC coat length: Short, Medium; coat type: Wiry",
    sourceId: "akc-affenpinscher",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-affenpinscher" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-affenpinscher" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-affenpinscher" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-affenpinscher" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-affenpinscher" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-affenpinscher" },
  sources: ["akc-affenpinscher"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
