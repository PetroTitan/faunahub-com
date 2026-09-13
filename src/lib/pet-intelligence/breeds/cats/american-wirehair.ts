import type { Breed } from "../../types.ts";

/** American Wirehair. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-american-wirehair",
  slug: "american-wirehair",
  species: "cat",
  name: "American Wirehair",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/american-wirehair/",
      recognizedYear: 1967,
      sourceId: "cfa-american-wirehair",
    },
  ],
  coat: {
    length: "short",
    statedAs: "CFA breed profile, Coat Length: Shorthair",
    sourceId: "cfa-american-wirehair",
  },
  traits: {},
  sources: ["cfa-american-wirehair", "cfa-std-american-wirehair"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
