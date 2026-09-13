import type { Breed } from "../../types.ts";

/** Nova Scotia Duck Tolling Retriever. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-nova-scotia-duck-tolling-retriever",
  slug: "nova-scotia-duck-tolling-retriever",
  species: "dog",
  name: "Nova Scotia Duck Tolling Retriever",
  aliases: ["Toller", "Duck Toller"],
  originCountries: ["Canada"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Sporting Group",
      registryBreedCode: "128",
      registryUrl: "https://www.akc.org/dog-breeds/nova-scotia-duck-tolling-retriever/",
      recognizedYear: 2003,
      sourceId: "akc-nova-scotia-duck-tolling-retriever",
    },
  ],
  measurements: {
    heightCm: [
      { min: 45.7, max: 53.3, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "18-21 inches (male)", sourceId: "akc-nova-scotia-duck-tolling-retriever" },
      { min: 43.2, max: 50.8, bound: "closed", basis: { kind: "sex", sex: "female" }, statedAs: "17-20 inches (female)", sourceId: "akc-nova-scotia-duck-tolling-retriever" },
    ],
    weightKg: [
      { min: 15.9, max: 22.7, bound: "closed", basis: { kind: "breed" }, statedAs: "35-50 pounds", sourceId: "akc-nova-scotia-duck-tolling-retriever" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double"],
    statedAs: "AKC coat length: Medium; coat type: Double",
    sourceId: "akc-nova-scotia-duck-tolling-retriever",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-nova-scotia-duck-tolling-retriever" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-nova-scotia-duck-tolling-retriever" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-nova-scotia-duck-tolling-retriever" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-nova-scotia-duck-tolling-retriever" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-nova-scotia-duck-tolling-retriever" },
  },
  lifespanYears: { min: 12, max: 14, bound: "closed", basis: { kind: "breed" }, statedAs: "12-14 years", sourceId: "akc-nova-scotia-duck-tolling-retriever" },
  sources: ["akc-nova-scotia-duck-tolling-retriever"],
  images: ["dog-nova-scotia-duck-tolling-retriever-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
