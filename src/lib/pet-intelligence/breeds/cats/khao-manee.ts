import type { Breed } from "../../types.ts";

/** Khao Manee. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-khao-manee",
  slug: "khao-manee",
  species: "cat",
  name: "Khao Manee",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/khao-manee/",
      sourceId: "cfa-khao-manee",
    },
  ],
  coat: {
    length: "short",
    statedAs: "CFA breed profile, Coat Length: Shorthair",
    sourceId: "cfa-khao-manee",
  },
  traits: {},
  sources: ["cfa-khao-manee", "cfa-std-khao-manee"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
