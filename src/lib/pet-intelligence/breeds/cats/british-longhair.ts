import type { Breed } from "../../types.ts";

/** British Longhair. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-british-longhair",
  slug: "british-longhair",
  species: "cat",
  name: "British Longhair",
  recognition: [
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 3 (BLH British Longhair)",
      registryBreedCode: "BLH",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-british-longhair",
    },
  ],
  coat: {
    length: "long",
    statedAs: "Coat length is stated by the breed's registry name (British Longhair).",
    sourceId: "fife-british-longhair",
  },
  traits: {},
  sources: ["fife-british-longhair"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
