import type { Breed } from "../../types.ts";

/** Sokoke. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-sokoke",
  slug: "sokoke",
  species: "cat",
  name: "Sokoke",
  recognition: [
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 3 (SOK Sokoke)",
      registryBreedCode: "SOK",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-sokoke",
    },
  ],
  coat: {
    length: "short",
    statedAs: "Coat length is stated by the breed's registry name (Sokoke).",
    sourceId: "fife-sokoke",
  },
  traits: {},
  sources: ["fife-sokoke"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
