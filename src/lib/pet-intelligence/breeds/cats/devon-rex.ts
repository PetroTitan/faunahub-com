import type { Breed } from "../../types.ts";

/** Devon Rex. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-devon-rex",
  slug: "devon-rex",
  species: "cat",
  name: "Devon Rex",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryGroupSourceId: "cfa-show-rules-2026-27",
      registryUrl: "https://cfa.org/breed/devon-rex/",
      sourceId: "cfa-devon-rex",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 4 (DRX Devon Rex)",
      registryBreedCode: "DRX",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-devon-rex",
    },
  ],
  measurements: {
    weightKg: [
      // CFA states this as words — "Typical adult weights range from six to
      // nine pounds" — which the parser could not read, so the breed published
      // no weight and fell below the shared-dimension floor for comparisons.
      { min: 2.7, max: 4.1, bound: "closed", basis: { kind: "breed" }, statedAs: "Typical adult weights range from six to nine pounds", sourceId: "cfa-devon-rex" },
    ],
  },
  coat: {
    length: "short",
    statedAsKind: "citation",
    statedAs: "CFA breed profile, Coat Length: Shorthair",
    sourceId: "cfa-devon-rex",
  },
  traits: {},
  sources: ["cfa-devon-rex", "cfa-std-devon-rex", "fife-devon-rex", "cfa-show-rules-2026-27"],
  images: ["cat-devon-rex-001"],
  reviewedAt: "2026-09-14",
  publishedAt: "2026-09-13",
};
