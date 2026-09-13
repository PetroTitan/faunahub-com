import type { Breed } from "../../types.ts";

/** Papillon. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-papillon",
  slug: "papillon",
  species: "dog",
  name: "Papillon",
  aliases: ["The Butterfly Dog", "Pap"],
  originCountries: ["France"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Toy Group",
      registryBreedCode: "509",
      registryUrl: "https://www.akc.org/dog-breeds/papillon/",
      recognizedYear: 1915,
      sourceId: "akc-papillon",
    },
  ],
  measurements: {
    heightCm: [
      { min: 20.3, max: 27.9, bound: "closed", basis: { kind: "breed" }, statedAs: "8-11 inches", sourceId: "akc-papillon" },
    ],
    weightKg: [
      { min: 2.3, max: 4.5, bound: "closed", basis: { kind: "breed" }, statedAs: "5-10 pounds", sourceId: "akc-papillon" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Silky"],
    statedAs: "AKC coat length: Medium; coat type: Silky",
    sourceId: "akc-papillon",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-papillon" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-papillon" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-papillon" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-papillon" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-papillon" },
  },
  lifespanYears: { min: 14, max: 16, bound: "closed", basis: { kind: "breed" }, statedAs: "14-16 years", sourceId: "akc-papillon" },
  sources: ["akc-papillon"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
