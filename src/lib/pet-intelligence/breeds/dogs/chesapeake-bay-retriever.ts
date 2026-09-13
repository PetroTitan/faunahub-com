import type { Breed } from "../../types.ts";

/** Chesapeake Bay Retriever. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-chesapeake-bay-retriever",
  slug: "chesapeake-bay-retriever",
  species: "dog",
  name: "Chesapeake Bay Retriever",
  aliases: ["Chessie"],
  originCountries: ["United States"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "104",
      registryUrl: "https://www.akc.org/dog-breeds/chesapeake-bay-retriever/",
      recognizedYear: 1878,
      sourceId: "akc-chesapeake-bay-retriever",
    },
  ],
  measurements: {
    heightCm: [
      { min: 58.4, max: 66, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "23-26 inches (male)", sourceId: "akc-chesapeake-bay-retriever" },
      { min: 53.3, max: 61, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "21-24 inches (female)", sourceId: "akc-chesapeake-bay-retriever" },
    ],
    weightKg: [
      { min: 29.5, max: 36.3, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "65-80 pounds (male)", sourceId: "akc-chesapeake-bay-retriever" },
      { min: 24.9, max: 31.8, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "55-70 pounds (female)", sourceId: "akc-chesapeake-bay-retriever" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Wavy", "Wiry"],
    statedAs: "AKC coat length: Medium; coat type: Wavy, Wiry",
    sourceId: "akc-chesapeake-bay-retriever",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-chesapeake-bay-retriever" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-chesapeake-bay-retriever" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-chesapeake-bay-retriever" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-chesapeake-bay-retriever" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-chesapeake-bay-retriever" },
  },
  lifespanYears: { min: 10, max: 13, bound: "closed", basis: { kind: "breed" }, statedAs: "10-13 years", sourceId: "akc-chesapeake-bay-retriever" },
  sources: ["akc-chesapeake-bay-retriever"],
  images: ["dog-chesapeake-bay-retriever-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
