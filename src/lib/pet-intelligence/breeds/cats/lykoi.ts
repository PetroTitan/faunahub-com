import type { Breed } from "../../types.ts";

/** Lykoi. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-lykoi",
  slug: "lykoi",
  species: "cat",
  name: "Lykoi",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/lykoi/",
      // CFA states two dates: accepted for registration in 2018, advanced to
      // Championship in 2023. registryGroup here is "Championship", and the
      // contract for this field is the year the registry granted THAT status.
      recognizedYear: 2023,
      sourceId: "cfa-lykoi",
    },
    {
      registryId: "fife",
      // FIFe lists LYO under "Preliminary Recognised Breeds and Varieties":
      // "LYO - Lykoi / Preliminary recognised breed in category 4 (2023-2027)".
      status: "provisional",
      registryGroup: "Preliminary recognised, category 4 (LYO Lykoi)",
      registryBreedCode: "LYO",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-lykoi",
    },
  ],
  coat: {
    length: "short",
    statedAsKind: "citation",
    statedAs: "CFA breed profile, Coat Length: Shorthair",
    sourceId: "cfa-lykoi",
  },
  traits: {},
  sources: ["cfa-lykoi", "cfa-std-lykoi", "fife-lykoi"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
