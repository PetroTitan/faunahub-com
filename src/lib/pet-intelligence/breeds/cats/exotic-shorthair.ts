import type { Breed } from "../../types.ts";

/** Exotic. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-exotic-shorthair",
  slug: "exotic-shorthair",
  species: "cat",
  name: "Exotic",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/exotic/",
      sourceId: "cfa-exotic-shorthair",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 1 (EXO Exotic)",
      registryBreedCode: "EXO",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-exotic-shorthair",
    },
  ],
  coat: {
    length: "variable",
    statedAs: "CFA breed profile, Coat Length: Longhair and Shorthair",
    sourceId: "cfa-exotic-shorthair",
  },
  traits: {},
  sources: ["cfa-exotic-shorthair", "cfa-std-exotic-shorthair", "fife-exotic-shorthair"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
