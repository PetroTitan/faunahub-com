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
      // CFA: "accepted for CFA registration in 1993. Championship status came
      // in 2002." The stored 1952 was neither date. registryGroup is
      // "Championship", so this field carries the year that status was granted.
      recognizedYear: 2002,
      sourceId: "cfa-european-burmese",
    },
  ],
  coat: {
    length: "short",
    statedAsKind: "citation",
    statedAs: "CFA breed profile, Coat Length: Shorthair",
    sourceId: "cfa-european-burmese",
  },
  traits: {},
  sources: ["cfa-european-burmese", "cfa-std-european-burmese"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
