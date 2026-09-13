import type { Breed } from "../../types.ts";

/** European Burmese. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-european-burmese",
  slug: "european-burmese",
  species: "cat",
  name: "European Burmese",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/european-burmese/",
      recognizedYear: 1952,
      sourceId: "cfa-european-burmese",
    },
  ],
  coat: {
    length: "short",
    statedAs: "CFA breed profile, Coat Length: Shorthair",
    sourceId: "cfa-european-burmese",
  },
  traits: {},
  sources: ["cfa-european-burmese", "cfa-std-european-burmese"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
