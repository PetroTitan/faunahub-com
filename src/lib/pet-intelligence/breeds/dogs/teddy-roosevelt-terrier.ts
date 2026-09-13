import type { Breed } from "../../types.ts";

/** Teddy Roosevelt Terrier. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-teddy-roosevelt-terrier",
  slug: "teddy-roosevelt-terrier",
  species: "dog",
  name: "Teddy Roosevelt Terrier",
  aliases: ["Teddy"],
  originCountries: ["United States"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Terrier Group",
      registryBreedCode: "250",
      // NO recognizedYear. AKC's year_recognized field gives 1885 for this
      // breed, which predates the breed's own recorded history and is plainly
      // a placeholder rather than a recognition date. 203 fully-recognised
      // breeds carry the field; these three omit it deliberately, and
      // tests/pet-intelligence-registry.test.ts now names them so a future
      // import cannot quietly restore the wrong value.
      registryUrl: "https://www.akc.org/dog-breeds/teddy-roosevelt-terrier/",
      sourceId: "akc-teddy-roosevelt-terrier",
    },
  ],
  measurements: {
    heightCm: [
      { min: 20.3, max: 35.6, bound: "closed", basis: { kind: "breed" }, statedAs: "8-14 inches", sourceId: "akc-teddy-roosevelt-terrier" },
    ],
    weightKg: [
      { min: 3.6, max: 11.3, bound: "closed", basis: { kind: "breed" }, statedAs: "8-25 pounds", sourceId: "akc-teddy-roosevelt-terrier" },
    ],
  },
  coat: {
    length: "short",
    types: ["Smooth"],
    statedAs: "AKC coat length: Short; coat type: Smooth",
    sourceId: "akc-teddy-roosevelt-terrier",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-teddy-roosevelt-terrier" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-teddy-roosevelt-terrier" },
    exerciseNeeds: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-teddy-roosevelt-terrier" },
    trainability: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-teddy-roosevelt-terrier" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-teddy-roosevelt-terrier" },
  },
  lifespanYears: { min: 14, max: 16, bound: "closed", basis: { kind: "breed" }, statedAs: "14-16 years", sourceId: "akc-teddy-roosevelt-terrier" },
  sources: ["akc-teddy-roosevelt-terrier"],
  images: ["dog-teddy-roosevelt-terrier-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
