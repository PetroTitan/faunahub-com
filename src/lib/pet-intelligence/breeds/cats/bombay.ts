import type { Breed } from "../../types.ts";

/** Bombay. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-bombay",
  slug: "bombay",
  species: "cat",
  name: "Bombay",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/bombay/",
      sourceId: "cfa-bombay",
    },
  ],
  coat: {
    length: "short",
    statedAs: "CFA breed profile, Coat Length: Shorthair",
    sourceId: "cfa-bombay",
  },
  traits: {},
  sources: ["cfa-bombay", "cfa-std-bombay"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
