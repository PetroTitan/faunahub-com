import type { Breed } from "../../types.ts";

/** American Eskimo Dog. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-american-eskimo-dog",
  slug: "american-eskimo-dog",
  species: "dog",
  name: "American Eskimo Dog",
  aliases: ["Eskie"],
  originCountries: ["United States"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Non-Sporting Group",
      registryBreedCode: "316",
      registryUrl: "https://www.akc.org/dog-breeds/american-eskimo-dog/",
      recognizedYear: 1994,
      sourceId: "akc-american-eskimo-dog",
    },
  ],
  measurements: {
    heightCm: [
      { min: 22.9, max: 30.5, bound: "closed", basis: { kind: "variety", variety: "toy" }, statedAs: "9-12 inches (toy)", sourceId: "akc-american-eskimo-dog" },
      { min: 30.5, max: 38.1, bound: "closed", basis: { kind: "variety", variety: "miniature" }, statedAs: "12-15 inches (miniature)", sourceId: "akc-american-eskimo-dog" },
      { min: 38.1, max: 48.3, bound: "closed", basis: { kind: "variety", variety: "Standard" }, statedAs: "15-19 inches (Standard)", sourceId: "akc-american-eskimo-dog" },
    ],
    weightKg: [
      { min: 2.7, max: 4.5, bound: "closed", basis: { kind: "variety", variety: "toy" }, statedAs: "6-10 pounds (toy)", sourceId: "akc-american-eskimo-dog" },
      { min: 4.5, max: 9.1, bound: "closed", basis: { kind: "variety", variety: "miniature" }, statedAs: "10-20 pounds (miniature)", sourceId: "akc-american-eskimo-dog" },
      { min: 11.3, max: 15.9, bound: "closed", basis: { kind: "variety", variety: "standard" }, statedAs: "25-35 pounds (standard)", sourceId: "akc-american-eskimo-dog" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-american-eskimo-dog",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-eskimo-dog" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-eskimo-dog" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-eskimo-dog" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-eskimo-dog" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-american-eskimo-dog" },
  },
  lifespanYears: { min: 13, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "13-15 years", sourceId: "akc-american-eskimo-dog" },
  sources: ["akc-american-eskimo-dog"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
