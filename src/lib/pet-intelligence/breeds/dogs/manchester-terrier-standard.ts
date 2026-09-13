import type { Breed } from "../../types.ts";

/** Manchester Terrier (Standard). One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-manchester-terrier-standard",
  slug: "manchester-terrier-standard",
  species: "dog",
  name: "Manchester Terrier (Standard)",
  canonicalCommonName: "Manchester Terrier (Standard)",
  aliases: ["Manchester", "the Gentleman¿s Terrier"],
  originCountries: ["England"],
  scopeNote:
    "This profile covers the STANDARD Manchester Terrier. The AKC publishes Standard and Toy Manchester Terriers as separate breeds sharing breed code 213, in the Terrier and Toy groups respectively.",
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "213",
      registryUrl: "https://www.akc.org/dog-breeds/manchester-terrier-standard/",
      recognizedYear: 1887,
      sourceId: "akc-manchester-terrier-standard",
    },
  ],
  measurements: {
    heightCm: [
      { min: 38.1, max: 40.6, bound: "closed", basis: { kind: "breed" }, statedAs: "15-16 inches", sourceId: "akc-manchester-terrier-standard" },
    ],
    weightKg: [
      { min: 5.4, max: 10, bound: "closed", basis: { kind: "breed" }, statedAs: "12-22 pounds", sourceId: "akc-manchester-terrier-standard" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-manchester-terrier-standard",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-manchester-terrier-standard" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-manchester-terrier-standard" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-manchester-terrier-standard" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-manchester-terrier-standard" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-manchester-terrier-standard" },
  },
  lifespanYears: { min: 15, max: 17, bound: "closed", basis: { kind: "breed" }, statedAs: "15-17 years", sourceId: "akc-manchester-terrier-standard" },
  sources: ["akc-manchester-terrier-standard"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
