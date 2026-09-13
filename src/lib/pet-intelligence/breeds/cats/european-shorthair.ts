import type { Breed } from "../../types.ts";

/** European Shorthair. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-european-shorthair",
  slug: "european-shorthair",
  species: "cat",
  name: "European Shorthair",
  recognition: [
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 3 (EUR European)",
      registryBreedCode: "EUR",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-european-shorthair",
    },
  ],
  coat: {
    length: "short",
    statedAs: "Coat length is stated by the breed's registry name (European Shorthair).",
    sourceId: "fife-european-shorthair",
  },
  traits: {},
  sources: ["fife-european-shorthair"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
