import type { Breed } from "../../types.ts";

/** American Shorthair. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-american-shorthair",
  slug: "american-shorthair",
  species: "cat",
  name: "American Shorthair",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryGroupSourceId: "cfa-show-rules-2026-27",
      registryUrl: "https://cfa.org/breed/american-shorthair/",
      sourceId: "cfa-american-shorthair",
    },
  ],
  coat: {
    length: "short",
    statedAsKind: "citation",
    statedAs: "CFA breed profile, Coat Length: Shorthair",
    sourceId: "cfa-american-shorthair",
  },
  traits: {},
  sources: ["cfa-american-shorthair", "cfa-std-american-shorthair", "cfa-show-rules-2026-27"],
  images: [],
  reviewedAt: "2026-09-14",
  publishedAt: "2026-09-13",
};
