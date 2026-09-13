import type { Breed } from "../../types.ts";

/** Peterbald. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-peterbald",
  slug: "peterbald",
  species: "cat",
  name: "Peterbald",
  recognition: [
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 4 (PEB Peterbald)",
      registryBreedCode: "PEB",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-peterbald",
    },
  ],
  coat: {
    length: "hairless",
    statedAs: "Coat length is stated by the breed's registry name (Peterbald).",
    sourceId: "fife-peterbald",
  },
  traits: {},
  sources: ["fife-peterbald"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
