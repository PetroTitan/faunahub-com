import type { Breed } from "../../types.ts";

/** Manx. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-manx",
  slug: "manx",
  species: "cat",
  name: "Manx",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryGroupSourceId: "cfa-show-rules-2026-27",
      registryUrl: "https://cfa.org/breed/manx/",
      sourceId: "cfa-manx",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 3 (MAN Manx)",
      registryBreedCode: "MAN",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-manx",
    },
  ],
  measurements: {
    weightKg: [
      { min: 4.5, max: 5.4, bound: "closed", basis: { kind: "sex", sex: "male" }, statedAs: "Males average between 10 and 12 pounds", sourceId: "cfa-manx" },
    ],
  },
  coat: {
    length: "variable",
    statedAsKind: "citation",
    statedAs: "CFA breed profile, Coat Length: Longhair and Shorthair",
    sourceId: "cfa-manx",
  },
  traits: {},
  sources: ["cfa-manx", "cfa-std-manx", "fife-manx", "cfa-show-rules-2026-27"],
  images: [],
  reviewedAt: "2026-09-14",
  publishedAt: "2026-09-13",
};
