import type { Breed } from "../../types.ts";

/** American Bobtail. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-american-bobtail",
  slug: "american-bobtail",
  species: "cat",
  name: "American Bobtail",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/american-bobtail/",
      sourceId: "cfa-american-bobtail",
    },
  ],
  coat: {
    length: "variable",
    statedAsKind: "citation",
    statedAs: "CFA breed profile, Coat Length: Longhair and Shorthair",
    sourceId: "cfa-american-bobtail",
  },
  traits: {},
  sources: ["cfa-american-bobtail", "cfa-std-american-bobtail"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
