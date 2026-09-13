import type { Breed } from "../../types.ts";

/** Czechoslovakian Vlciak. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-czechoslovakian-vlciak",
  slug: "czechoslovakian-vlciak",
  species: "dog",
  name: "Czechoslovakian Vlciak",
  aliases: ["Vlcak"],
  originCountries: ["Czechoslovakia"],
  recognition: [
    {
      registryId: "akc",
      status: "provisional",
      registryGroup: "Miscellaneous Class",
      registryBreedCode: "663",
      registryUrl: "https://www.akc.org/dog-breeds/czechoslovakian-vlciak/",
      sourceId: "akc-czechoslovakian-vlciak",
    },
  ],
  measurements: {
    heightCm: [
      { min: 64.8, bound: "at-least", basis: { kind: "sex", sex: "male" }, statedAs: "Minimum: 25.5 males", sourceId: "akc-czechoslovakian-vlciak" },
      { min: 59.7, bound: "at-least", basis: { kind: "sex", sex: "female" }, statedAs: "Minimum: 23.5 females", sourceId: "akc-czechoslovakian-vlciak" },
    ],
    weightKg: [
      { min: 25.9, bound: "at-least", basis: { kind: "sex", sex: "male" }, statedAs: "Minimum: 57 males", sourceId: "akc-czechoslovakian-vlciak" },
      { min: 20, bound: "at-least", basis: { kind: "sex", sex: "female" }, statedAs: "Minimum: 44 females", sourceId: "akc-czechoslovakian-vlciak" },
    ],
  },
  coat: {
    length: "medium",
    // AKC's coat_type field is literally ["0"] for this breed — its null
    // marker, not a coat. It rendered on the page as "Coat Medium · 0".
    statedAs: "AKC coat length: Medium (the AKC records no coat type for this breed)",
    sourceId: "akc-czechoslovakian-vlciak",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-czechoslovakian-vlciak" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-czechoslovakian-vlciak" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-czechoslovakian-vlciak" },
    trainability: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-czechoslovakian-vlciak" },
    vocality: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-czechoslovakian-vlciak" },
  },
  lifespanYears: { min: 12, max: 16, bound: "closed", basis: { kind: "breed" }, statedAs: "12-16 years", sourceId: "akc-czechoslovakian-vlciak" },
  sources: ["akc-czechoslovakian-vlciak"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
