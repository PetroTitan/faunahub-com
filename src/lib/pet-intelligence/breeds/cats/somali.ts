import type { Breed } from "../../types.ts";

/** Somali. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-somali",
  slug: "somali",
  species: "cat",
  name: "Somali",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/somali/",
      recognizedYear: 1976,
      sourceId: "cfa-somali",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 4 (SOM Somali)",
      registryBreedCode: "SOM",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-somali",
    },
  ],
  coat: {
    length: "long",
    statedAs: "CFA breed profile, Coat Length: Longhair",
    sourceId: "cfa-somali",
  },
  traits: {},
  sources: ["cfa-somali", "cfa-std-somali", "fife-somali"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
