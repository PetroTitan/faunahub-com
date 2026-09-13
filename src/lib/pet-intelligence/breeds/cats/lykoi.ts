import type { Breed } from "../../types.ts";

/** Lykoi. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-lykoi",
  slug: "lykoi",
  species: "cat",
  name: "Lykoi",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/lykoi/",
      recognizedYear: 2018,
      sourceId: "cfa-lykoi",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 4 (LYO Lykoi)",
      registryBreedCode: "LYO",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-lykoi",
    },
  ],
  coat: {
    length: "short",
    statedAs: "CFA breed profile, Coat Length: Shorthair",
    sourceId: "cfa-lykoi",
  },
  traits: {},
  sources: ["cfa-lykoi", "cfa-std-lykoi", "fife-lykoi"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
