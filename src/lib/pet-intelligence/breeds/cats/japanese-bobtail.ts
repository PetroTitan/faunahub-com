import type { Breed } from "../../types.ts";

/** Japanese Bobtail. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-japanese-bobtail",
  slug: "japanese-bobtail",
  species: "cat",
  name: "Japanese Bobtail",
  scopeNote:
    "FIFe recognises only the Shorthair (JBS); CFA recognises the Japanese Bobtail in both coat lengths.",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/japanese-bobtail/",
      recognizedYear: 1976,
      sourceId: "cfa-japanese-bobtail",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 4 (JBS Japanese Bobtail Shorthair)",
      registryBreedCode: "JBS",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-japanese-bobtail",
    },
  ],
  coat: {
    length: "variable",
    statedAs: "CFA breed profile, Coat Length: Longhair and Shorthair",
    sourceId: "cfa-japanese-bobtail",
  },
  traits: {},
  sources: ["cfa-japanese-bobtail", "cfa-std-japanese-bobtail", "fife-japanese-bobtail"],
  images: ["cat-japanese-bobtail-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
