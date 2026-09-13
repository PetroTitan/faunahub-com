import type { Breed } from "../../types.ts";

/** Poodle (Miniature). One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-poodle-miniature",
  slug: "poodle-miniature",
  species: "dog",
  name: "Poodle (Miniature)",
  canonicalCommonName: "Poodle (Miniature)",
  aliases: ["Miniatures"],
  originCountries: ["Germany"],
  scopeNote:
    "This profile covers the MINIATURE Poodle. The AKC publishes the Poodle as three separate breeds — Standard, Miniature and Toy — which share breed code 701; the Standard and Miniature are in the Non-Sporting Group while the Toy is in the Toy Group. The FCI treats the Poodle as one breed (#172) across its size varieties.",
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Non-Sporting Group",
      registryBreedCode: "701",
      registryUrl: "https://www.akc.org/dog-breeds/poodle-miniature/",
      recognizedYear: 1887,
      sourceId: "akc-poodle-miniature",
    },
  ],
  measurements: {
    heightCm: [
      { min: 25.4, max: 38.1, bound: "closed", basis: { kind: "breed" }, statedAs: "10-15 inches", sourceId: "akc-poodle-miniature" },
    ],
    weightKg: [
      { min: 4.5, max: 6.8, bound: "closed", basis: { kind: "breed" }, statedAs: "10-15 pounds", sourceId: "akc-poodle-miniature" },
    ],
  },
  coat: {
    length: "long",
    types: ["Curly"],
    statedAs: "AKC coat length: Long; coat type: Curly",
    sourceId: "akc-poodle-miniature",
  },
  traits: {
    shedding: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-poodle-miniature" },
    groomingNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-poodle-miniature" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-poodle-miniature" },
    trainability: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-poodle-miniature" },
    vocality: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-poodle-miniature" },
  },
  lifespanYears: { min: 10, max: 18, bound: "closed", basis: { kind: "breed" }, statedAs: "10-18 years", sourceId: "akc-poodle-miniature" },
  sources: ["akc-poodle-miniature"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
