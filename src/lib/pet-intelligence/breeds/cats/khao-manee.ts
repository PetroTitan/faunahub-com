import type { Breed } from "../../types.ts";

/** Khao Manee. One record per file — see ../README.md. */
export const breed: Breed = {
  id: "cat-khao-manee",
  slug: "khao-manee",
  species: "cat",
  name: "Khao Manee",
  recognition: [
    {
      registryId: "cfa",
      // CFA: "accepted for CFA registration in 2018 and is currently shown in
      // the Provisional class." Publishing this as Championship flattened a
      // distinction the registry draws and the type system already carries.
      status: "provisional",
      registryGroup: "Provisional",
      registryUrl: "https://cfa.org/breed/khao-manee/",
      sourceId: "cfa-khao-manee",
    },
  ],
  coat: {
    length: "short",
    statedAs: "CFA breed profile, Coat Length: Shorthair",
    sourceId: "cfa-khao-manee",
  },
  traits: {},
  sources: ["cfa-khao-manee", "cfa-std-khao-manee"],
  images: ["cat-khao-manee-001"],
  reviewedAt: "2026-09-13",
  publishedAt: "2026-09-13",
};
