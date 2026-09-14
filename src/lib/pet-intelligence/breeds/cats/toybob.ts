import type { Breed } from "../../types.ts";

/** Toybob. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-toybob",
  slug: "toybob",
  species: "cat",
  name: "Toybob",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/toybob/",
      // CFA states two dates: accepted for registration in 2019, advanced to
      // Championship in 2025. registryGroup here is "Championship", and the
      // contract for this field is the year the registry granted THAT status.
      recognizedYear: 2025,
      sourceId: "cfa-toybob",
    },
  ],
  coat: {
    length: "variable",
    statedAsKind: "citation",
    statedAs: "CFA breed profile, Coat Length: Longhair and Shorthair",
    sourceId: "cfa-toybob",
  },
  traits: {},
  sources: ["cfa-toybob", "cfa-std-toybob"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
