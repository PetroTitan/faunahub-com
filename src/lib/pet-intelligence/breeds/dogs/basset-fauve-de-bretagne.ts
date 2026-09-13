import type { Breed } from "../../types.ts";

/** Basset Fauve de Bretagne. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "dog-basset-fauve-de-bretagne",
  slug: "basset-fauve-de-bretagne",
  species: "dog",
  name: "Basset Fauve de Bretagne",
  canonicalCommonName: "Basset Fauve de Bretagne",
  aliases: ["Fauve", "BassetFauve"],
  originCountries: ["France"],
  recognition: [
    {
      registryId: "akc",
      status: "recognized",
      registryGroup: "Hound Group",
      registryBreedCode: "446",
      // NO recognizedYear. AKC's year_recognized field gives 1885 for this
      // breed, which predates the breed's own recorded history and is plainly
      // a placeholder rather than a recognition date. 203 fully-recognised
      // breeds carry the field; these three omit it deliberately, and
      // tests/pet-intelligence-registry.test.ts now names them so a future
      // import cannot quietly restore the wrong value.
      registryUrl: "https://www.akc.org/dog-breeds/basset-fauve-de-bretagne/",
      sourceId: "akc-basset-fauve-de-bretagne",
    },
  ],
  measurements: {
    heightCm: [
      { min: 31.8, max: 39.4, bound: "closed", basis: { kind: "breed" }, statedAs: "12.5-15.5 inches", sourceId: "akc-basset-fauve-de-bretagne" },
    ],
    weightKg: [
      { min: 10.4, max: 17.7, bound: "closed", basis: { kind: "breed" }, statedAs: "23-39 pounds", sourceId: "akc-basset-fauve-de-bretagne" },
    ],
  },
  coat: {
    length: "medium",
    types: ["Double", "Wiry"],
    statedAs: "AKC coat length: Medium; coat type: Double, Wiry",
    sourceId: "akc-basset-fauve-de-bretagne",
  },
  traits: {
    shedding: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-basset-fauve-de-bretagne" },
    groomingNeeds: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-basset-fauve-de-bretagne" },
    exerciseNeeds: { value: "higher", method: "Normalised from the AKC published trait scale for this breed, which places it in the high band. FaunaHub stores only the band, never a score.", sourceId: "akc-basset-fauve-de-bretagne" },
    trainability: { value: "lower", method: "Normalised from the AKC published trait scale for this breed, which places it in the low band. FaunaHub stores only the band, never a score.", sourceId: "akc-basset-fauve-de-bretagne" },
    vocality: { value: "moderate", method: "Normalised from the AKC published trait scale for this breed, which places it in the middle band. FaunaHub stores only the band, never a score.", sourceId: "akc-basset-fauve-de-bretagne" },
  },
  lifespanYears: { min: 13, max: 16, bound: "closed", basis: { kind: "breed" }, statedAs: "13-16 years", sourceId: "akc-basset-fauve-de-bretagne" },
  sources: ["akc-basset-fauve-de-bretagne"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
