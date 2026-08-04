/**
 * PRIVATE candidate backlog for the Animal Compare Center.
 *
 * ────────────────────────────────────────────────────────────────────────────
 * THIS FILE MUST NEVER BE IMPORTED BY ROUTE GENERATION, THE SITEMAP, OR ANY
 * RENDERED COMPONENT. It is editorial working state, not content.
 * ────────────────────────────────────────────────────────────────────────────
 *
 * Entries here produce no route, appear in no sitemap, and are linked from
 * nowhere. `tests/animal-compare.test.ts` asserts that neither
 * `src/lib/animal-compare/index.ts` nor `src/app/animal-compare/**` nor
 * `src/app/sitemap.ts` imports this module, and that no backlog entry shares a
 * pair key with a published comparison.
 *
 * Two kinds of entry live here:
 *
 *  1. REJECTED — the pair failed the Comparison Eligibility Gate and should not
 *     be built as written. The reason is recorded so the decision is not
 *     silently revisited.
 *  2. DEFERRED — the pair is eligible and worth building, but was not published
 *     in this sprint. These are the candidate pool for the next batch.
 */

export type BacklogStatus = "rejected" | "deferred";

export type BacklogReason =
  /** One or both animals have no existing FaunaHub profile or hub route. */
  | "missing-base-profile"
  /** Already published as a hand-written page at an older /compare URL. */
  | "already-published-elsewhere"
  /** Primary intent is confrontation or ranking; out of scope by policy. */
  | "conflict-framing"
  /** Would require identification framed as a safety or medical procedure. */
  | "unsafe-identification-framing"
  /** Not a meaningful pairing — no confusion, no relationship, no shared role. */
  | "not-meaningful"
  /** The two names are effectively the same animal; the page would be circular. */
  | "same-animal"
  /** Eligible and wanted, simply not authored in this sprint. */
  | "capacity";

export interface BacklogCandidate {
  /** sort([a, b]).join("--") — same canonicalisation as published records. */
  canonicalPairKey: string;
  animalA: string;
  animalB: string;
  status: BacklogStatus;
  reason: BacklogReason;
  /** Free-text detail; the record of why, so it is not re-litigated. */
  note: string;
}

function candidate(
  animalA: string,
  animalB: string,
  status: BacklogStatus,
  reason: BacklogReason,
  note: string,
): BacklogCandidate {
  return {
    canonicalPairKey: [animalA, animalB].sort().join("--"),
    animalA,
    animalB,
    status,
    reason,
    note,
  };
}

/**
 * Candidates from the Phase 7 required list and the Phase 5 generation sources
 * that did not survive the eligibility gate.
 *
 * The dominant rejection reason is `missing-base-profile`. FaunaHub has 625
 * animal profiles, but several extremely well-known animals are simply not
 * among them, and this sprint does not create animal profiles. Building a
 * comparison against an animal with no profile would mean either linking to a
 * 404 or inventing a profile — both are worse than not publishing the page.
 */
export const COMPARISON_BACKLOG: BacklogCandidate[] = [
  // ── Missing base profile: no /animals/<slug> route exists ────────────────
  candidate("seal", "sea-lion", "rejected", "missing-base-profile",
    "No sea-lion profile exists. Seal vs sea lion is a strong candidate and should be revisited once a sea-lion profile is published."),
  candidate("llama", "alpaca", "rejected", "missing-base-profile",
    "No alpaca profile exists. Llama vs alpaca is high-intent and should return once alpaca is profiled."),
  candidate("camel", "dromedary", "rejected", "missing-base-profile",
    "No dromedary profile exists as a separate route. Also partly a nested-name case: the dromedary is one of the camel species."),
  candidate("polar-bear", "brown-bear", "rejected", "missing-base-profile",
    "No brown-bear profile exists. Polar bear is compared with American black bear instead, which is profiled."),
  candidate("dolphin", "porpoise", "rejected", "missing-base-profile",
    "No porpoise profile exists. This is one of the strongest look-alike candidates in the marine set and should be built once porpoise is profiled."),
  candidate("penguin", "puffin", "rejected", "missing-base-profile",
    "No puffin profile exists. Strong candidate — unrelated birds converging on a similar look."),
  candidate("hamster", "gerbil", "rejected", "missing-base-profile",
    "No gerbil profile exists."),
  candidate("hamster", "mouse", "rejected", "missing-base-profile",
    "No mouse profile exists as a distinct route."),
  candidate("rabbit", "chinchilla", "rejected", "missing-base-profile",
    "No chinchilla profile exists."),
  candidate("duck", "chicken", "rejected", "missing-base-profile",
    "No chicken profile exists. Poultry comparisons are otherwise well supported (duck, goose, swan)."),
  candidate("parrot", "canary", "rejected", "missing-base-profile",
    "No canary profile exists. Companion-bird comparisons use parrot, African grey parrot, macaw and galah instead."),
  candidate("horse", "donkey", "rejected", "missing-base-profile",
    "No donkey profile exists. Horse is compared with zebra instead."),
  candidate("cow", "yak", "rejected", "missing-base-profile", "No yak profile exists."),
  candidate("rabbit", "ferret", "rejected", "missing-base-profile", "No ferret profile exists."),

  // ── Missing base profile: the name is a group with no generic route ──────
  candidate("snake", "lizard", "rejected", "missing-base-profile",
    "No generic lizard profile exists — only specific lizards. Snake vs legless lizard is published instead, which is the sharper question anyway."),
  candidate("lizard", "gecko", "rejected", "missing-base-profile",
    "No generic lizard profile exists. Gecko vs skink is published instead."),
  candidate("monkey", "ape", "rejected", "missing-base-profile",
    "Neither a generic monkey nor a generic ape profile exists. The distinction is covered by pairing specific profiled primates."),

  // ── Already published as a hand-written page under /compare ──────────────
  candidate("lion", "tiger", "rejected", "already-published-elsewhere", "Published at /compare/lion-vs-tiger."),
  candidate("leopard", "jaguar", "rejected", "already-published-elsewhere", "Published at /compare/leopard-vs-jaguar."),
  candidate("cheetah", "leopard", "rejected", "already-published-elsewhere", "Published at /compare/cheetah-vs-leopard."),
  candidate("wolf", "dog", "rejected", "already-published-elsewhere", "Published at /compare/wolf-vs-dog."),
  candidate("alligator", "crocodile", "rejected", "already-published-elsewhere", "Published at /compare/alligator-vs-crocodile."),
  candidate("falcon", "eagle", "rejected", "already-published-elsewhere", "Published at /compare/falcon-vs-eagle."),
  candidate("rabbit", "guinea-pig", "rejected", "already-published-elsewhere", "Published at /compare/rabbit-vs-guinea-pig."),

  // ── Conflict framing: the query intent is a fight, not a difference ──────
  candidate("crocodile", "hippopotamus", "rejected", "conflict-framing",
    "Search intent for this pair is overwhelmingly confrontational. A shared-habitat page is possible in principle but the framing risk outweighs the value."),
  candidate("lion", "hyena", "rejected", "conflict-framing",
    "Dominated by confrontation intent. The genuinely useful content — kleptoparasitism and carnivore guild competition — is better served by the hyena profile than by a versus page."),
  candidate("wolf", "hyena", "rejected", "conflict-framing",
    "Convergent-carnivore comparison has merit, but the query is almost entirely a fight question. Deferred rather than built with that intent attached."),
  candidate("gorilla", "bear", "rejected", "conflict-framing",
    "Pure confrontation query with no identification, taxonomic or ecological value."),

  // ── Not meaningful as written ────────────────────────────────────────────
  candidate("elephant", "whale", "rejected", "not-meaningful",
    "Both are large, and that is the entire premise. No confusion, no shared habitat, no meaningful ecological contrast."),
  candidate("giraffe", "ostrich", "rejected", "not-meaningful",
    "Both tall; nothing else connects them. Would produce generic content."),

  // ── Deferred: eligible, wanted, not authored in this sprint ──────────────
  candidate("bee", "bumblebee", "deferred", "capacity", "Nested-name case; strong taxonomy-shelf candidate."),
  candidate("crow", "rook", "deferred", "capacity", "No rook profile yet; revisit with corvid expansion."),
  candidate("otter", "beaver", "deferred", "capacity", "Semi-aquatic look-alike pair; both profiled."),
  candidate("weasel", "stoat", "deferred", "capacity", "Classic mustelid confusion pair; both profiled."),
  candidate("badger", "european-badger", "deferred", "capacity", "Nested/regional naming case; needs careful framing."),
  candidate("dolphin", "pilot-whale", "deferred", "capacity", "Nested-name cetacean case; both profiled."),
  candidate("tortoise", "box-turtle", "deferred", "capacity", "Terrestrial chelonian confusion; both profiled."),
  candidate("viper", "european-viper", "deferred", "capacity", "Nested-name case requiring careful safety framing."),
  candidate("shrimp", "krill", "deferred", "capacity", "Crustacean confusion pair; both profiled."),
  candidate("coral", "sea-anemone", "deferred", "capacity", "Cnidarian relatives; both profiled."),
];

export const BACKLOG_COUNT = COMPARISON_BACKLOG.length;

export function backlogByStatus(status: BacklogStatus): BacklogCandidate[] {
  return COMPARISON_BACKLOG.filter((c) => c.status === status);
}

export function backlogPairKeys(): Set<string> {
  return new Set(COMPARISON_BACKLOG.map((c) => c.canonicalPairKey));
}
