import type { Breed } from "../../types.ts";

/** Lhasa Apso. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-lhasa-apso",
  slug: "lhasa-apso",
  species: "dog",
  name: "Lhasa Apso",
  aliases: ["Lhasa", "Lion Dog"],
  originCountries: ["Tibet"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Non-Sporting Group",
      registryBreedCode: "307",
      registryUrl: "https://www.akc.org/dog-breeds/lhasa-apso/",
      recognizedYear: 1935,
      sourceId: "akc-lhasa-apso",
    },
  ],
  measurements: {
    heightCm: [
      { min: 25.4, max: 27.9, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "10-11 inches (male)", sourceId: "akc-lhasa-apso" },
    ],
    weightKg: [
      { min: 5.4, max: 8.2, bound: "closed", basis: { kind: "breed" }, statedAs: "12-18 pounds", sourceId: "akc-lhasa-apso" },
    ],
  },
  coat: {
    length: "long",
    types: ["Silky"],
    statedAs: "AKC coat length: Long; coat type: Silky",
    sourceId: "akc-lhasa-apso",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-lhasa-apso" },
    groomingNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-lhasa-apso" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-lhasa-apso" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-lhasa-apso" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-lhasa-apso" },
  },
  lifespanYears: { min: 12, max: 15, bound: "closed", basis: { kind: "breed" }, statedAs: "12-15 years", sourceId: "akc-lhasa-apso" },
  sources: ["akc-lhasa-apso"],
  images: ["dog-lhasa-apso-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
