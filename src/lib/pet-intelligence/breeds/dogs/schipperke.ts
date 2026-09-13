import type { Breed } from "../../types.ts";

/** Schipperke. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-schipperke",
  slug: "schipperke",
  species: "dog",
  name: "Schipperke",
  aliases: ["Schip", "Schippie", "The Little Captain"],
  originCountries: ["Belgium"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Non-Sporting Group",
      registryBreedCode: "309",
      registryUrl: "https://www.akc.org/dog-breeds/schipperke/",
      recognizedYear: 1904,
      sourceId: "akc-schipperke",
    },
  ],
  measurements: {
    heightCm: [
      { min: 27.9, max: 33, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "11-13 inches (male)", sourceId: "akc-schipperke" },
      { min: 25.4, max: 30.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "10-12 inches (female)", sourceId: "akc-schipperke" },
    ],
    weightKg: [
      { min: 4.5, max: 7.3, bound: "closed", basis: { kind: "breed" }, statedAs: "10-16 pounds", sourceId: "akc-schipperke" },
    ],
  },
  coat: {
    length: "short",
    types: ["Double"],
    statedAs: "AKC coat length: Short; coat type: Double",
    sourceId: "akc-schipperke",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-schipperke" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-schipperke" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-schipperke" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-schipperke" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-schipperke" },
  },
  lifespanYears: { min: 12, max: 16, bound: "closed", basis: { kind: "breed" }, statedAs: "12-16 years", sourceId: "akc-schipperke" },
  sources: ["akc-schipperke"],
  images: ["dog-schipperke-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
