import type { Breed } from "../../types.ts";

/** Oriental. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-oriental",
  slug: "oriental",
  species: "cat",
  name: "Oriental",
  scopeNote:
    "FIFe recognises the Oriental as TWO breeds split by coat length (OLH Longhair, OSH Shorthair); CFA recognises one Oriental breed. FaunaHub publishes one record, as CFA does.",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/oriental/",
      // CFA states two dates: accepted for registration in 1974, advanced to
      // Championship in 1977. registryGroup here is "Championship", and the
      // contract for this field is the year the registry granted THAT status.
      recognizedYear: 1977,
      sourceId: "cfa-oriental",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 4 — OLH Oriental Longhair / OSH Oriental Shorthair",
      registryBreedCode: "OLH/OSH",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-oriental",
    },
  ],
  coat: {
    length: "variable",
    statedAs: "CFA breed profile, Coat Length: Longhair and Shorthair",
    sourceId: "cfa-oriental",
  },
  traits: {},
  sources: ["cfa-oriental", "cfa-std-oriental", "fife-oriental"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
