import type { Breed } from "../../types.ts";

/** Alaskan Malamute. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-alaskan-malamute",
  slug: "alaskan-malamute",
  species: "dog",
  name: "Alaskan Malamute",
  aliases: ["Mal"],
  originCountries: ["Alaska"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Working Group",
      registryBreedCode: "601",
      registryUrl: "https://www.akc.org/dog-breeds/alaskan-malamute/",
      recognizedYear: 1935,
      sourceId: "akc-alaskan-malamute",
    },
  ],
  measurements: {
    heightCm: [
      { min: 63.5, max: 63.5, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "25 inches (male)", sourceId: "akc-alaskan-malamute" },
      { min: 58.4, max: 58.4, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "23 inches (female)", sourceId: "akc-alaskan-malamute" },
    ],
    weightKg: [
      { min: 38.6, max: 38.6, bound: "about", basis: { kind: "sex", sex: "male" }, statedAs: "85 pounds (male)", sourceId: "akc-alaskan-malamute" },
      { min: 34, max: 34, bound: "about", basis: { kind: "sex", sex: "female" }, statedAs: "75 pounds (female)", sourceId: "akc-alaskan-malamute" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-alaskan-malamute",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-alaskan-malamute" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-alaskan-malamute" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-alaskan-malamute" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-alaskan-malamute" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-alaskan-malamute" },
  },
  lifespanYears: { min: 10, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "10-14 years", sourceId: "akc-alaskan-malamute" },
  sources: ["akc-alaskan-malamute"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
