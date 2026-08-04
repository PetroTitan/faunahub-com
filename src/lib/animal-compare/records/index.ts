/**
 * Published comparison records, assembled from authored batches.
 *
 * Batches are an editorial device, not a structural one: each was authored and
 * reviewed as a unit, and keeping the files separate keeps them reviewable.
 * Order here is the order comparisons appear in "browse all" listings.
 */
import type { ComparisonRecord } from "../types.ts";

import { BATCH_01 } from "./batch-01.ts";
import { BATCH_02 } from "./batch-02.ts";
import { BATCH_03 } from "./batch-03.ts";
import { BATCH_04 } from "./batch-04.ts";
import { BATCH_05 } from "./batch-05.ts";
import { BATCH_06 } from "./batch-06.ts";

export const COMPARISON_RECORDS: ComparisonRecord[] = [
  ...BATCH_01,
  ...BATCH_02,
  ...BATCH_03,
  ...BATCH_04,
  ...BATCH_05,
  ...BATCH_06,
];
