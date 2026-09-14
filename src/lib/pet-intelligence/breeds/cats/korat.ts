import type { Breed } from "../../types.ts";

/** Korat. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-korat",
  slug: "korat",
  species: "cat",
  name: "Korat",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/korat/",
      sourceId: "cfa-korat",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 3 (KOR Korat)",
      registryBreedCode: "KOR",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-korat",
    },
  ],
  measurements: {
    weightKg: [
      { min: 4.5, bound: "at-least", basis: { kind: "sex", sex: "male" }, statedAs: "not unusual for a mature male's weight to match or exceed 10 pounds", sourceId: "cfa-korat" },
    ],
  },
  coat: {
    length: "short",
    statedAsKind: "citation",
    statedAs: "CFA breed profile, Coat Length: Shorthair",
    sourceId: "cfa-korat",
  },
  traits: {},
  sources: ["cfa-korat", "cfa-std-korat", "fife-korat"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
