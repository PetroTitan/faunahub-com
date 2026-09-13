import type { Breed } from "../../types.ts";

/** Abyssinian. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-abyssinian",
  slug: "abyssinian",
  species: "cat",
  name: "Abyssinian",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/abyssinian/",
      sourceId: "cfa-abyssinian",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 4 (ABY Abyssinian)",
      registryBreedCode: "ABY",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-abyssinian",
    },
  ],
  coat: {
    length: "short",
    statedAs: "CFA breed profile, Coat Length: Shorthair",
    sourceId: "cfa-abyssinian",
  },
  traits: {},
  sources: ["cfa-abyssinian", "cfa-std-abyssinian", "fife-abyssinian"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
