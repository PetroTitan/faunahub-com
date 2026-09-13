import type { Breed } from "../../types.ts";

/** Poodle (Toy). One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-poodle-toy",
  slug: "poodle-toy",
  species: "dog",
  name: "Poodle (Toy)",
  canonicalCommonName: "Poodle (Toy)",
  aliases: ["Toy"],
  originCountries: ["Germany"],
  scopeNote:
    "This profile covers the TOY Poodle. The AKC publishes the Poodle as three separate breeds — Standard, Miniature and Toy — which share breed code 701; the Toy sits in the Toy Group while the Standard and Miniature are Non-Sporting. The FCI treats the Poodle as one breed (#172) across its size varieties.",
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Toy Group",
      registryBreedCode: "701",
      registryUrl: "https://www.akc.org/dog-breeds/poodle-toy/",
      recognizedYear: 1887,
      sourceId: "akc-poodle-toy",
    },
  ],
  measurements: {
    heightCm: [
      { max: 25.4, bound: "at-most", basis: { kind: "breed" }, statedAs: "No more than 10 inches", sourceId: "akc-poodle-toy" },
    ],
    weightKg: [
      { min: 1.8, max: 2.7, bound: "closed", basis: { kind: "breed" }, statedAs: "4-6 pounds", sourceId: "akc-poodle-toy" },
    ],
  },
  coat: {
    length: "long",
    types: ["Curly"],
    statedAs: "AKC coat length: Long; coat type: Curly",
    sourceId: "akc-poodle-toy",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-poodle-toy" },
    groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-poodle-toy" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-poodle-toy" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-poodle-toy" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-poodle-toy" },
  },
  lifespanYears: { min: 10, max: 18, bound: "closed", basis: { kind: "breed" }, statedAs: "10-18 years", sourceId: "akc-poodle-toy" },
  sources: ["akc-poodle-toy"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
