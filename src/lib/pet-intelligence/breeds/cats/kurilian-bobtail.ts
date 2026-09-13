import type { Breed } from "../../types.ts";

/** Kurilian Bobtail. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-kurilian-bobtail",
  slug: "kurilian-bobtail",
  species: "cat",
  name: "Kurilian Bobtail",
  scopeNote:
    "FIFe recognises the Kurilean Bobtail as TWO breeds split by coat length (KBL Longhair, KBS Shorthair). CFA does not recognise the breed, so there is no single-breed treatment to follow; FaunaHub publishes one record covering both coat lengths rather than two pages for a breed only one registry recognises.",
  recognition: [
    {
      registryId: "fife",
      status: "recognized",
      registryGroup: "Fully recognised, category 3 — KBL Kurilean Bobtail Longhair / KBS Kurilean Bobtail Shorthair",
      registryBreedCode: "KBL/KBS",
      registryUrl: "https://fifeweb.org/cats/breeds/",
      sourceId: "fife-kurilian-bobtail",
    },
  ],
  traits: {},
  sources: ["fife-kurilian-bobtail"],
  images: [],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
