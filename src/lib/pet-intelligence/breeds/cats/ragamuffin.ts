import type { Breed } from "../../types.ts";

/** RagaMuffin. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-ragamuffin",
  slug: "ragamuffin",
  species: "cat",
  name: "RagaMuffin",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/ragamuffin/",
      // CFA states two dates: accepted for registration in 2003, advanced to
      // Championship in 2011. registryGroup here is "Championship", and the
      // contract for this field is the year the registry granted THAT status.
      recognizedYear: 2011,
      sourceId: "cfa-ragamuffin",
    },
  ],
  measurements: {
    weightKg: [
      { max: 9.1, bound: "at-most", basis: { kind: "sex", sex: "male" }, statedAs: "A mature male's weight may reach up to 20 pounds", sourceId: "cfa-ragamuffin" },
    ],
  },
  coat: {
    length: "long",
    statedAsKind: "citation",
    statedAs: "CFA breed profile, Coat Length: Longhair",
    sourceId: "cfa-ragamuffin",
  },
  traits: {},
  sources: ["cfa-ragamuffin", "cfa-std-ragamuffin"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
