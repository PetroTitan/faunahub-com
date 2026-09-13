import type { Breed } from "../../types.ts";

/** Egyptian Mau. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-egyptian-mau",
  slug: "egyptian-mau",
  species: "cat",
  name: "Egyptian Mau",
  recognition: [
    {
      registryId: "cfa",
      status: "recognized",
      registryGroup: "Championship",
      registryUrl: "https://cfa.org/breed/egyptian-mau/",
      recognizedYear: 1970,
      sourceId: "cfa-egyptian-mau",
    },
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 3 (MAU Egyptian Mau)",
      registryBreedCode: "MAU",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-egyptian-mau",
    },
  ],
  coat: {
    length: "short",
    statedAs: "CFA breed profile, Coat Length: Shorthair",
    sourceId: "cfa-egyptian-mau",
  },
  traits: {},
  sources: ["cfa-egyptian-mau", "cfa-std-egyptian-mau", "fife-egyptian-mau"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
