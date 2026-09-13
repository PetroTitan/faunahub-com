import type { Breed } from "../../types.ts";

/** Manchester Terrier (Toy). One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-manchester-terrier-toy",
  slug: "manchester-terrier-toy",
  species: "dog",
  name: "Manchester Terrier (Toy)",
  canonicalCommonName: "Manchester Terrier (Toy)",
  originCountries: ["England"],
  scopeNote:
    "This profile covers the TOY Manchester Terrier. The AKC publishes Standard and Toy Manchester Terriers as separate breeds sharing breed code 213, in the Terrier and Toy groups respectively.",
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Toy Group",
      registryBreedCode: "213",
      registryUrl: "https://www.akc.org/dog-breeds/manchester-terrier-toy/",
      recognizedYear: 1886,
      sourceId: "akc-manchester-terrier-toy",
    },
  ],
  measurements: {
    heightCm: [
      { min: 25.4, max: 30.5, bound: "closed", basis: { kind: "breed" }, statedAs: "10-12 inches", sourceId: "akc-manchester-terrier-toy" },
    ],
    weightKg: [
      { max: 5.4, bound: "at-most", basis: { kind: "breed" }, statedAs: "under 12 pounds", sourceId: "akc-manchester-terrier-toy" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-manchester-terrier-toy",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-manchester-terrier-toy" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-manchester-terrier-toy" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-manchester-terrier-toy" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-manchester-terrier-toy" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-manchester-terrier-toy" },
  },
  lifespanYears: { min: 15, max: 17, bound: "closed", basis: { kind: "breed" }, statedAs: "15-17 years", sourceId: "akc-manchester-terrier-toy" },
  sources: ["akc-manchester-terrier-toy"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
