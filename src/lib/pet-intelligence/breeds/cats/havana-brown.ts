import type { Breed } from "../../types.ts";

/** Havana Brown. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-havana-brown",
  slug: "havana-brown",
  species: "cat",
  name: "Havana Brown",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/havana-brown/",
      recognizedYear: 1959,
      sourceId: "cfa-havana-brown",
    },
  ],
  coat: {
    length: "short",
    statedAs: "CFA breed profile, Coat Length: Shorthair",
    sourceId: "cfa-havana-brown",
  },
  traits: {},
  sources: ["cfa-havana-brown", "cfa-std-havana-brown"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
