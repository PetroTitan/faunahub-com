import type { Breed } from "../../types.ts";

/** English Cocker Spaniel. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-english-cocker-spaniel",
  slug: "english-cocker-spaniel",
  species: "dog",
  name: "English Cocker Spaniel",
  aliases: ["EC"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "116",
      registryUrl: "https://www.akc.org/dog-breeds/english-cocker-spaniel/",
      recognizedYear: 1946,
      sourceId: "akc-english-cocker-spaniel",
    },
  ],
  measurements: {
    heightCm: [
      { min: 40.6, max: 43.2, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "16-17 inches (male)", sourceId: "akc-english-cocker-spaniel" },
      { min: 38.1, max: 40.6, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "15-16 inches (female)", sourceId: "akc-english-cocker-spaniel" },
    ],
    weightKg: [
      { min: 12.7, max: 15.4, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "28-34 pounds (male)", sourceId: "akc-english-cocker-spaniel" },
      { min: 11.8, max: 14.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "26-32 pounds (female)", sourceId: "akc-english-cocker-spaniel" },
    ],
  },
  coat: {
    // AKC records TWO coat lengths for this breed. Storing array[0]
    // filed it under the shorter one alone, so the page contradicted the
    // citation printed directly beneath it and the breed was missing from
    // the collection for its other coat. "variable" is the value the cat
    // side already uses for exactly this case.
    length: "variable",
    types: ["Double"],
    statedAs: "AKC coat length: Medium, Long; coat type: Double",
    sourceId: "akc-english-cocker-spaniel",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-english-cocker-spaniel" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-english-cocker-spaniel" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-english-cocker-spaniel" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-english-cocker-spaniel" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-english-cocker-spaniel" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-english-cocker-spaniel" },
  sources: ["akc-english-cocker-spaniel"],
  images: ["dog-english-cocker-spaniel-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
