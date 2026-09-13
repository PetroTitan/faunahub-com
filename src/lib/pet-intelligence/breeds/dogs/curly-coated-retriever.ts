import type { Breed } from "../../types.ts";

/** Curly-Coated Retriever. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-curly-coated-retriever",
  slug: "curly-coated-retriever",
  species: "dog",
  name: "Curly-Coated Retriever",
  canonicalCommonName: "Curly-Coated Retriever",
  aliases: ["Curly"],
  originCountries: ["England"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "105",
      registryUrl: "https://www.akc.org/dog-breeds/curly-coated-retriever/",
      recognizedYear: 1924,
      sourceId: "akc-curly-coated-retriever",
    },
  ],
  measurements: {
    heightCm: [
      { min: 63.5, max: 68.6, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "25-27 inches (male)", sourceId: "akc-curly-coated-retriever" },
      { min: 58.4, max: 63.5, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "23-25 inches (female)", sourceId: "akc-curly-coated-retriever" },
    ],
    weightKg: [
      { min: 27.2, max: 43.1, bound: "closed", basis: { kind: "breed" }, statedAs: "60-95 pounds", sourceId: "akc-curly-coated-retriever" },
    ],
  },
  coat: {
    length: "short",
    types: ["Curly", "Double"],
    statedAs: "AKC coat length: Short; coat type: Curly, Double",
    sourceId: "akc-curly-coated-retriever",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-curly-coated-retriever" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-curly-coated-retriever" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-curly-coated-retriever" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-curly-coated-retriever" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-curly-coated-retriever" },
  },
  lifespanYears: { min: 10, max: 12, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 years", sourceId: "akc-curly-coated-retriever" },
  sources: ["akc-curly-coated-retriever"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
