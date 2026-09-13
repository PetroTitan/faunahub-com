/**
 * GENERATED FILE — do not edit by hand.
 *
 * Written by `scripts/generate-breed-index.mjs` from the 8 records in
 * this directory, and regenerated before every build. Edit the per-breed file,
 * then run `npm run breeds:index`.
 *
 * `npm run breeds:index:check` fails when this file disagrees with the
 * directory, and tests/pet-intelligence-shards.test.ts asserts the same thing —
 * so a data file that is never imported is a failure, not a silent orphan.
 */
import type { Breed } from "../../types.ts";
import { breed as bengalCat } from "./bengal-cat.ts";
import { breed as britishShorthair } from "./british-shorthair.ts";
import { breed as maineCoon } from "./maine-coon.ts";
import { breed as norwegianForestCat } from "./norwegian-forest-cat.ts";
import { breed as persianCat } from "./persian-cat.ts";
import { breed as ragdoll } from "./ragdoll.ts";
import { breed as siamese } from "./siamese.ts";
import { breed as sphynx } from "./sphynx.ts";

export const CAT_BREEDS: readonly Breed[] = [
  bengalCat,
  britishShorthair,
  maineCoon,
  norwegianForestCat,
  persianCat,
  ragdoll,
  siamese,
  sphynx,
];
