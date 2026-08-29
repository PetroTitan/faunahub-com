/**
 * Animal Finder — index integrity, facet honesty, filter behaviour and privacy.
 *
 * Runs on Node's built-in test runner with native TypeScript type-stripping,
 * like the other suites here:
 *
 *   npm run test
 *
 * The properties guarded fall into four groups:
 *
 *   1. Every record describes a page that exists, and every page that exists
 *      has a record. Neither direction is allowed to drift.
 *   2. Every exposed facet clears the coverage gate, and every value's count is
 *      the number of records that actually hold it. A filter that overstates a
 *      slice is the failure this whole layer is designed to avoid.
 *   3. Filtering and text matching are deterministic and intersect correctly.
 *   4. Nothing the reader types can reach the URL or an analytics payload.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import zlib from "node:zlib";

import {
  FINDER_INDEX_VERSION,
  FACET_COVERAGE_MINIMUM,
  hydrateFinderDocument,
  type FinderAnimalDocument,
  type FinderIndexPayload,
} from "../src/lib/finder/types.ts";
import {
  facetCounts,
  hasActiveSelection,
  runFinder,
  sanitizeSelection,
  selectionKey,
  selectionSize,
  valuesFor,
  MAX_QUERY_LENGTH,
  type FinderSelection,
} from "../src/lib/finder/filter.ts";
import { FINDER_PRESETS, FINDER_DESTINATIONS } from "../src/lib/finder/presets.ts";
import { COMPARISONS, EXTERNAL_COMPARISONS } from "../src/lib/animal-compare/index.ts";
import { DOMESTIC_ANIMALS } from "../src/lib/animals/classification.ts";
import { FALLBACK_DESTINATIONS } from "../src/lib/search/discovery.ts";

const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const INDEX_PATH = path.join(REPO_ROOT, "public", "animal-finder-index.json");
const APP_DIR = path.join(REPO_ROOT, "src", "app");
const ANIMALS_DIR = path.join(APP_DIR, "animals");

const raw = fs.readFileSync(INDEX_PATH, "utf8");
const payload = JSON.parse(raw) as FinderIndexPayload;
const documents: FinderAnimalDocument[] = payload.documents.map(hydrateFinderDocument);
const facets = payload.facets;

/**
 * Payload budget.
 *
 * Measured at the time of writing: 296 KB raw / 59 KB gzipped / 48 KB brotli
 * for 642 animals — under half the compressed size of the search index, which
 * is the reason the Finder ships its own payload rather than reusing that one.
 *
 * The ceilings leave headroom for roughly 40% more profiles while still failing
 * loudly if a change starts shipping article bodies or a second copy of the
 * search corpus. If the budget is ever exceeded, the fix is to drop the card
 * descriptions to a sidecar — not to raise the number.
 */
const MAX_RAW_BYTES = 420 * 1024;
const MAX_GZIP_BYTES = 85 * 1024;

/** Every /animals/<slug> directory that has a page on disk. */
function profileSlugsOnDisk(): Set<string> {
  return new Set(
    fs
      .readdirSync(ANIMALS_DIR, { withFileTypes: true })
      .filter((entry) => entry.isDirectory())
      .map((entry) => entry.name)
      .filter((slug) => fs.existsSync(path.join(ANIMALS_DIR, slug, "page.tsx"))),
  );
}

/** Every static route directory on disk, as a URL. Used to resolve hub links. */
function staticRoutes(): Set<string> {
  const out = new Set<string>();
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name === "page.tsx") {
        const relative = full.slice(APP_DIR.length).replace(/\/page\.tsx$/, "");
        const url = relative === "" ? "/" : relative;
        if (!url.includes("[")) out.add(url);
      }
    }
  };
  walk(APP_DIR);
  return out;
}

const ON_DISK = profileSlugsOnDisk();
const STATIC_ROUTES = staticRoutes();

/**
 * Strip comments so source guards test CODE, not the prose explaining it.
 *
 * These files document the very APIs they must not call, so a naive grep would
 * fail on the explanation rather than on a violation.
 *
 * Only WHOLE comment lines and block comments are removed. A trailing `//` is
 * deliberately NOT stripped: `line.replace(/\/\/.*$/, "")` truncates any line
 * containing `//` inside a string literal, so `router.push("https://x?q=" + q)`
 * became `router.push("https:` and slipped straight past the `?q=` guard. A
 * trailing comment that happens to contain a forbidden pattern is a false
 * positive worth having; a violation hidden behind a URL is not.
 */
function stripComments(source: string): string {
  const out: string[] = [];
  let inBlock = false;
  for (const line of source.split("\n")) {
    const trimmed = line.trim();
    if (inBlock) {
      if (trimmed.includes("*/")) inBlock = false;
      continue;
    }
    if (trimmed.startsWith("/*")) {
      if (!trimmed.includes("*/")) inBlock = true;
      continue;
    }
    if (trimmed.startsWith("//") || trimmed.startsWith("*")) continue;
    out.push(line);
  }
  return out.join("\n");
}

/** Every `trackFinderEvent(...)` call, extracted by balancing parentheses. */
function trackingCalls(source: string): string[] {
  const out: string[] = [];
  const needle = "trackFinderEvent(";
  let from = 0;
  for (;;) {
    const start = source.indexOf(needle, from);
    if (start === -1) break;
    let depth = 0;
    let end = start + needle.length - 1;
    for (; end < source.length; end += 1) {
      if (source[end] === "(") depth += 1;
      else if (source[end] === ")") {
        depth -= 1;
        if (depth === 0) break;
      }
    }
    out.push(source.slice(start, end + 1));
    from = end + 1;
  }
  return out;
}

function finderSourceFiles(): string[] {
  const out: string[] = [];
  for (const dir of [
    path.join(REPO_ROOT, "src", "lib", "finder"),
    path.join(REPO_ROOT, "src", "components", "finder"),
    path.join(REPO_ROOT, "src", "app", "animal-finder"),
  ]) {
    const walk = (current: string) => {
      for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
        const full = path.join(current, entry.name);
        if (entry.isDirectory()) walk(full);
        else if (/\.tsx?$/.test(entry.name)) out.push(full);
      }
    };
    walk(dir);
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * 1. Index integrity
 * ------------------------------------------------------------------ */

test("wire version matches the runtime constant", () => {
  assert.equal(payload.version, FINDER_INDEX_VERSION);
});

test("every slug is unique", () => {
  const seen = new Set<string>();
  for (const document of documents) {
    assert.ok(!seen.has(document.slug), `duplicate slug: ${document.slug}`);
    seen.add(document.slug);
  }
  assert.equal(seen.size, documents.length);
});

test("no result can appear twice for any selection", () => {
  // Duplicated cards are the classic bug when a document carries more than one
  // value on a multi-value axis and the filter unions instead of intersecting.
  // Molluscs and reef animals overlap in the taxonomy registry, so this is a
  // real shape in the data rather than a hypothetical.
  const selections: FinderSelection[] = [
    {},
    { taxon: ["mollusks", "cnidarians", "fish"] },
    { group: ["marine-animals", "fish"], coverage: ["comparison"] },
  ];
  for (const selection of selections) {
    const results = runFinder(documents, "", selection, facets);
    const slugs = results.map((result) => result.document.slug);
    assert.equal(new Set(slugs).size, slugs.length, `duplicate card for ${selectionKey(selection)}`);
  }
});

test("every indexed animal is a real /animals route", () => {
  for (const document of documents) {
    assert.ok(ON_DISK.has(document.slug), `${document.slug} has no page.tsx on disk`);
    assert.equal(document.url, `/animals/${document.slug}`);
    assert.ok(STATIC_ROUTES.has(document.url), `${document.url} is not a static route`);
  }
});

test("every published animal profile is findable", () => {
  // The reverse direction. A profile missing from the index is invisible to a
  // reader who browses rather than searches, and there is no editorial reason
  // for a published animal to be unbrowsable.
  const indexed = new Set(documents.map((document) => document.slug));
  const missing = [...ON_DISK].filter((slug) => !indexed.has(slug));
  assert.deepEqual(missing, [], `profiles missing from the Finder: ${missing.join(", ")}`);
});

test("no index record comes from a private backlog", async () => {
  // The candidate backlogs describe pages that do NOT exist — 165 comparison
  // candidates and 1,000 behavior candidates. They are imported here and
  // nowhere else in the Finder, for the sole purpose of proving that nothing
  // from them shipped.
  const { COMPARISON_BACKLOG } = await import("../src/lib/animal-compare/backlog.ts");
  const { BEHAVIOR_BACKLOG } = await import("../src/lib/animal-behavior-backlog.ts");

  const unpublished = new Set<string>();
  for (const row of COMPARISON_BACKLOG) {
    if (row.status === "published") continue;
    unpublished.add(row.proposedSlug);
    unpublished.add(`/animal-compare/${row.proposedSlug}`);
  }
  for (const row of BEHAVIOR_BACKLOG) {
    if (row.status === "published") continue;
    unpublished.add(row.proposedPath);
  }
  assert.ok(unpublished.size > 100, "the backlogs did not load — this test proves nothing");

  for (const document of documents) {
    assert.ok(!unpublished.has(document.url), `${document.url} is a backlog URL`);
    assert.ok(
      !unpublished.has(document.slug),
      `${document.slug} is an unpublished backlog candidate`,
    );
  }
});

test("no runtime finder module imports a private backlog", () => {
  // The check above is only meaningful if the backlogs stay out of the shipped
  // code. A client module that imported one would put 1,000 unpublished
  // candidates into the browser.
  for (const file of finderSourceFiles()) {
    const source = fs.readFileSync(file, "utf8");
    assert.doesNotMatch(
      source,
      /from\s+["'][^"']*backlog(\.ts)?["']/,
      `${path.relative(REPO_ROOT, file)} imports a private backlog`,
    );
  }
});

test("every name and url is well formed", () => {
  for (const document of documents) {
    assert.match(document.slug, /^[a-z0-9-]+$/, `${document.slug} is not a slug`);
    assert.ok(document.name.trim().length > 0, `${document.slug} has no name`);
    assert.ok(document.url.startsWith("/"), `${document.slug} has a non-relative url`);
    assert.ok(!document.url.includes("?"), `${document.slug} has a query string in its url`);
    assert.ok(!document.url.includes("#"), `${document.slug} has a fragment in its url`);
  }
});

test("every image points at a file that exists, with real dimensions", () => {
  for (const document of documents) {
    if (!document.image) continue;
    const asset = path.join(REPO_ROOT, "public", document.image.src.replace(/^\//, ""));
    assert.ok(fs.existsSync(asset), `${document.slug}: ${document.image.src} is not in public/`);
    assert.ok(document.image.width > 0 && document.image.height > 0, `${document.slug}: no size`);
  }
});

test("scientific names are never backfilled", () => {
  // 109 of the profiles are group-level pages — "Bear", "Owl", "Shark" — where
  // a binomial would be wrong. Their absence is meaningful, so the index must
  // carry fewer scientific names than documents, not one per record.
  const withName = documents.filter((document) => document.scientificName).length;
  assert.ok(withName < documents.length, "every record has a scientific name — one was invented");
  assert.ok(withName > documents.length / 2, "scientific names have gone missing wholesale");
});

/* ------------------------------------------------------------------ *
 * 2. Facet honesty
 * ------------------------------------------------------------------ */

test("every exposed facet clears the coverage gate", () => {
  for (const facet of facets) {
    const share = facet.covered / facet.total;
    assert.ok(
      share >= FACET_COVERAGE_MINIMUM,
      `facet "${facet.id}" covers only ${(share * 100).toFixed(1)}% — below the ${
        FACET_COVERAGE_MINIMUM * 100
      }% gate`,
    );
    assert.equal(facet.total, documents.length, `facet "${facet.id}" measures a different total`);
    assert.equal(
      facet.complete,
      facet.covered === facet.total,
      `facet "${facet.id}" misreports completeness`,
    );
  }
});

test("every facet value count equals the number of records that hold it", () => {
  // The single most important assertion here. A chip saying "Birds 134" that
  // opens onto 96 animals is the exact failure this layer exists to prevent.
  for (const facet of facets) {
    for (const value of facet.values) {
      const actual = documents.filter((document) =>
        valuesFor(document, facet.id).includes(value.value),
      ).length;
      assert.equal(
        value.count,
        actual,
        `facet "${facet.id}" value "${value.value}" claims ${value.count} but ${actual} records hold it`,
      );
      assert.ok(value.count > 0, `facet "${facet.id}" value "${value.value}" matches nothing`);
    }
  }
});

test("a facet's stated coverage equals the records that carry a value", () => {
  for (const facet of facets) {
    const covered = documents.filter(
      (document) => valuesFor(document, facet.id).length > 0,
    ).length;
    assert.equal(facet.covered, covered, `facet "${facet.id}" misreports its coverage`);
  }
});

test("no facet value matches every record", () => {
  // A control that cannot narrow anything is not a filter, it is a fact about
  // the collection. Those belong in the methodology note, not in the panel.
  for (const facet of facets) {
    for (const value of facet.values) {
      assert.notEqual(
        value.count,
        documents.length,
        `facet "${facet.id}" value "${value.value}" matches every record`,
      );
    }
  }
});

test("every facet value href is a page that exists", () => {
  for (const facet of facets) {
    for (const value of facet.values) {
      if (!value.href) continue;
      assert.ok(STATIC_ROUTES.has(value.href), `${facet.id}/${value.value} -> ${value.href} is 404`);
    }
  }
});

test("excluded axes are published with a real reason and never also exposed", () => {
  const exposed = new Set(facets.map((facet) => facet.id));
  assert.ok(payload.excludedFacets.length > 0, "no excluded axes were recorded");
  for (const axis of payload.excludedFacets) {
    assert.ok(!exposed.has(axis.id), `${axis.id} is both exposed and excluded`);
    assert.ok(axis.reason.length >= 20, `${axis.id} has no usable reason`);
    assert.equal(axis.total, documents.length, `${axis.id} measures a different total`);
    assert.ok(axis.covered <= axis.total, `${axis.id} reports impossible coverage`);
  }
});

test("the axes with known-thin data are excluded, by name", () => {
  // Named explicitly so that re-exposing one is a deliberate act that has to
  // delete this assertion, rather than a quiet consequence of a data change.
  const excluded = new Set(payload.excludedFacets.map((axis) => axis.id));
  for (const id of ["continent", "habitat", "diet", "class", "activity", "conservation-status"]) {
    assert.ok(excluded.has(id), `${id} is no longer recorded as an excluded axis`);
  }
});

test("the diet axis is excluded for being prose, not for being absent", () => {
  // If a future change made "Diet" look thin rather than free-text, the reason
  // published on the page would become wrong. Assert the shape of the data the
  // reason describes.
  const diet = payload.excludedFacets.find((axis) => axis.id === "diet");
  assert.ok(diet, "the diet axis is no longer measured");
  assert.ok(diet.covered > diet.total * 0.7, "diet is now thin — the published reason is stale");
  assert.ok(diet.distinctValues > 100, "diet is now categorical — reconsider exposing it");
});

test("no facet or axis copy claims popularity", () => {
  // FaunaHub has no first-party traffic data wired into the build, so any
  // "popular", "trending" or "most viewed" label would describe something
  // nobody measured.
  const copy = JSON.stringify([facets, payload.excludedFacets, FINDER_PRESETS]).toLowerCase();
  for (const word of ["popular", "trending", "most searched", "most viewed", "top pick"]) {
    assert.ok(!copy.includes(word), `finder copy claims "${word}"`);
  }
});

test("coverage flags agree with the registries they were derived from", () => {
  // Both kinds of published comparison count. `EXTERNAL_COMPARISONS` is the
  // seven hand-written pages at /compare/<slug>; omitting them left lion and
  // tiger flagged as having no comparison while /compare/lion-vs-tiger is
  // published and listed on the Compare Center.
  const comparable = new Set<string>();
  for (const record of COMPARISONS) {
    comparable.add(record.animalA.slug);
    comparable.add(record.animalB.slug);
  }
  for (const external of EXTERNAL_COMPARISONS) {
    for (const slug of external.canonicalPairKey.split("--")) comparable.add(slug);
  }
  assert.ok(comparable.has("lion") && comparable.has("tiger"), "the legacy pages are missing");

  const domestic = new Set(
    DOMESTIC_ANIMALS.filter((entry) => entry.status === "domestic").map((entry) => entry.slug),
  );

  for (const document of documents) {
    assert.equal(
      document.coverage.includes("comparison"),
      comparable.has(document.slug),
      `${document.slug}: comparison flag disagrees with the compare registry`,
    );
    assert.equal(
      document.coverage.includes("comparison"),
      document.comparisonCount > 0,
      `${document.slug}: comparison flag disagrees with its own count`,
    );
    assert.equal(
      document.coverage.includes("domestic"),
      domestic.has(document.slug),
      `${document.slug}: domestic flag disagrees with the classification registry`,
    );
    assert.equal(
      document.coverage.includes("photo"),
      Boolean(document.image),
      `${document.slug}: photo flag disagrees with the image field`,
    );
  }
});

/* ------------------------------------------------------------------ *
 * 3. Filtering and text matching
 * ------------------------------------------------------------------ */

test("an empty selection returns everything, alphabetically", () => {
  const results = runFinder(documents, "", {}, facets);
  assert.equal(results.length, documents.length);
  const names = results.map((result) => result.document.name);
  assert.deepEqual(names, [...names].sort((a, b) => a.localeCompare(b)));
});

test("selecting two values on one facet unions them", () => {
  const group = facets.find((facet) => facet.id === "group")!;
  const [first, second] = group.values;
  const both = runFinder(documents, "", { group: [first.value, second.value] }, facets);
  assert.equal(both.length, first.count + second.count);
});

test("selecting values on two facets intersects them", () => {
  const birds = runFinder(documents, "", { group: ["birds"] }, facets);
  const comparable = runFinder(documents, "", { coverage: ["comparison"] }, facets);
  const both = runFinder(
    documents,
    "",
    { group: ["birds"], coverage: ["comparison"] },
    facets,
  );
  assert.ok(both.length < birds.length, "intersection did not narrow");
  assert.ok(both.length < comparable.length, "intersection did not narrow");
  for (const result of both) {
    assert.equal(result.document.group, "birds");
    assert.ok(result.document.coverage.includes("comparison"));
  }
});

test("the coverage facet requires ALL selected flags, not any", () => {
  const both = runFinder(
    documents,
    "",
    { coverage: ["comparison", "conservation"] },
    facets,
  );
  for (const result of both) {
    assert.ok(result.document.coverage.includes("comparison"));
    assert.ok(result.document.coverage.includes("conservation"));
  }
  const either = documents.filter(
    (document) =>
      document.coverage.includes("comparison") || document.coverage.includes("conservation"),
  );
  assert.ok(both.length < either.length, "coverage behaved as a union");
});

test("text search reaches an animal by its exact name", () => {
  for (const name of ["Wolf", "Blue-Ringed Octopus", "Axolotl", "Emperor Penguin"]) {
    const results = runFinder(documents, name, {}, facets);
    assert.ok(results.length > 0, `"${name}" found nothing`);
    assert.equal(results[0].document.name, name, `"${name}" did not lead its own results`);
  }
});

test("text search reaches an animal by scientific name", () => {
  const withName = documents.find((document) => document.scientificName?.includes(" "))!;
  const results = runFinder(documents, withName.scientificName!, {}, facets);
  assert.ok(
    results.some((result) => result.document.slug === withName.slug),
    `${withName.scientificName} did not reach ${withName.slug}`,
  );
});

test("a spaced compound name reaches the animal, without inventing matches", () => {
  // Global search resolves "sea horse" to Seahorse; a name control that cannot
  // is worse at the one job it has. The collapse applies only to a query that
  // already contains a space — collapsing single words too would make "seal" a
  // prefix of "sealion" and surface Sea Lion off a string coincidence.
  const seaHorse = runFinder(documents, "sea horse", {}, facets);
  assert.equal(seaHorse[0]?.document.slug, "seahorse", '"sea horse" did not reach Seahorse');

  const blueRinged = runFinder(documents, "blue ringed octopus", {}, facets);
  assert.equal(blueRinged[0]?.document.slug, "blue-ringed-octopus");

  const seal = runFinder(documents, "seal", {}, facets);
  assert.equal(seal[0]?.document.slug, "seal");
  assert.ok(
    !seal.some((result) => result.document.slug === "sea-lion"),
    '"seal" reached Sea Lion — the collapse leaked into single-word queries',
  );
});

test("a short name outranks a longer name that starts with it", () => {
  // "rat" must reach Rat before Rattlesnake, which is the difference between a
  // control that feels exact and one that feels approximate.
  const results = runFinder(documents, "rat", {}, facets);
  assert.equal(results[0].document.slug, "rat");
});

test("text search and filters intersect", () => {
  // The example from the sprint brief: a text query plus a structural filter
  // must narrow to the intersection, never to either half alone.
  const wolfAnywhere = runFinder(documents, "wolf", {}, facets);
  const wolfInBirds = runFinder(documents, "wolf", { group: ["birds"] }, facets);
  assert.ok(wolfAnywhere.length > 0, "no wolf at all");
  assert.ok(
    wolfInBirds.length < wolfAnywhere.length,
    "a group filter did not narrow a text query",
  );
  for (const result of wolfInBirds) assert.equal(result.document.group, "birds");
});

test("a filter that matches nothing returns an empty list rather than a fallback", () => {
  // The empty state must be reachable. An engine that quietly widens the
  // selection to avoid showing zero results is inventing matches.
  const impossible = runFinder(
    documents,
    "zzzzznotananimal",
    { group: ["birds"] },
    facets,
  );
  assert.equal(impossible.length, 0);
});

test("hostile and degenerate input is handled without throwing", () => {
  const inputs = [
    "",
    "   ",
    "!!!",
    "<script>alert(1)</script>",
    "' OR 1=1 --",
    "../../etc/passwd",
    "🦊🦊🦊",
    "ＷＯＬＦ",
    "x".repeat(5000),
  ];
  for (const input of inputs) {
    const results = runFinder(documents, input, {}, facets);
    assert.ok(Array.isArray(results), `${JSON.stringify(input.slice(0, 20))} did not return a list`);
  }
});

test("the query is capped before it reaches the engine", () => {
  const long = "wolf".padEnd(500, "x");
  assert.ok(MAX_QUERY_LENGTH < 200);
  assert.doesNotThrow(() => runFinder(documents, long, {}, facets));
});

test("facet counts exclude the facet's own selection", () => {
  // With the facet's own selection included, every unselected chip would read
  // zero — telling a reader the collection is empty when it is not.
  const counts = facetCounts(documents, "", { group: ["birds"] }, facets, "group");
  const mammals = facets.find((facet) => facet.id === "group")!.values.find(
    (value) => value.value === "mammals",
  )!;
  assert.equal(counts.mammals, mammals.count, "counts collapsed under the facet's own filter");
});

test("a conjunctive facet's count equals the list it opens", () => {
  // The regression this exists for: `facetCounts` dropped the facet's OWN
  // selection for every facet, which is right for a union facet and wrong for
  // the coverage facet, where values combine with AND. With "Has a comparison
  // page" active the "Has a conservation record" chip read its unfiltered total
  // and opened onto a much shorter list — exactly the lie the coverage gate
  // exists to prevent, one layer further in.
  const active: FinderSelection = { coverage: ["comparison"] };
  const counts = facetCounts(documents, "", active, facets, "coverage");

  for (const value of facets.find((facet) => facet.id === "coverage")!.values) {
    const clicked = value.value === "comparison" ? [] : ["comparison", value.value];
    const opened = runFinder(
      documents,
      "",
      clicked.length > 0 ? { coverage: clicked } : { coverage: ["comparison"] },
      facets,
    );
    assert.equal(
      counts[value.value],
      opened.length,
      `coverage chip "${value.value}" claims ${counts[value.value]} but opens onto ${opened.length}`,
    );
  }
});

test("facet counts do respond to OTHER facets", () => {
  const unfiltered = facetCounts(documents, "", {}, facets, "group");
  const narrowed = facetCounts(documents, "", { coverage: ["comparison"] }, facets, "group");
  assert.ok(narrowed.birds < unfiltered.birds, "a coverage filter did not narrow group counts");
});

test("an unknown facet value is rejected rather than silently returning nothing", () => {
  const cleaned = sanitizeSelection(
    { group: ["birds", "dinosaurs"], nonsense: ["x"] },
    facets,
  );
  assert.deepEqual(cleaned, { group: ["birds"] });
  assert.ok(!("nonsense" in cleaned));
});

test("selection helpers are order-independent and stable", () => {
  const a: FinderSelection = { group: ["birds", "fish"], coverage: ["comparison"] };
  const b: FinderSelection = { coverage: ["comparison"], group: ["fish", "birds"] };
  assert.equal(selectionKey(a), selectionKey(b));
  assert.equal(selectionSize(a), 3);
  assert.ok(hasActiveSelection(a));
  assert.ok(!hasActiveSelection({ group: [] }));
});

/* ------------------------------------------------------------------ *
 * 4. Presets and destinations
 * ------------------------------------------------------------------ */

/**
 * Published Red List species pages, read from the SEARCH index.
 *
 * Deliberately not from `red-list/species.ts`: that module is what the finder
 * builder itself reads, so checking against it would only prove the builder
 * agrees with itself. The search index is produced by a different builder from
 * the route's own `generateStaticParams`, so it is independent evidence that
 * `/endangered-animals/species/<slug>` is a page that exists — and it carries
 * the species' own title, which is what makes the name check below possible.
 */
function publishedRedListSpecies(): Map<string, string> {
  const search = JSON.parse(
    fs.readFileSync(path.join(REPO_ROOT, "public", "search-index.json"), "utf8"),
  ) as { documents: { url: string; title: string }[] };
  const out = new Map<string, string>();
  for (const document of search.documents) {
    const match = document.url.match(/^\/endangered-animals\/species\/([a-z0-9-]+)$/);
    if (match) out.set(match[1], document.title);
  }
  return out;
}

test("the conservation flag covers every profile with a published Red List page", () => {
  // Derived from `existingAnimalSlug` alone, the flag reached 15 profiles and
  // meant "the registry filled in a cross-link field" rather than what the
  // label says. Polar bear, snow leopard, axolotl, kakapo, great white shark,
  // gharial, dugong and 33 others each have a published page at
  // /endangered-animals/species/<slug> and were reported as having none.
  const published = publishedRedListSpecies();
  assert.ok(published.size > 300, "the Red List species pages could not be read");

  const flagged = new Set(
    documents.filter((d) => d.coverage.includes("conservation")).map((d) => d.slug),
  );
  for (const slug of published.keys()) {
    if (!ON_DISK.has(slug)) continue;
    assert.ok(flagged.has(slug), `${slug} has a Red List page but is not flagged`);
  }
  for (const slug of ["polar-bear", "snow-leopard", "axolotl", "kakapo", "lion", "tiger"]) {
    assert.ok(flagged.has(slug), `${slug} has a Red List record but is not flagged`);
  }
});

test("the slug-derived conservation join never links two different animals", () => {
  // The join is on FaunaHub's own slug namespace, which is what makes it an
  // extraction rather than a guess. A collision would silently label the wrong
  // animal as threatened, so the two names must agree once diacritics are
  // folded — the Red List spells Kakapo "Kākāpō" — or one must contain the
  // other, as with "West Indian Ocean Coelacanth".
  const fold = (text: string) =>
    text
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .replace(/[^a-z]/g, "");
  const published = publishedRedListSpecies();
  const byName = new Map(documents.map((d) => [d.slug, d.name]));
  let checked = 0;
  for (const [slug, title] of published) {
    const name = byName.get(slug);
    if (!name) continue;
    checked += 1;
    const a = fold(name);
    const b = fold(title);
    assert.ok(
      a.includes(b) || b.includes(a),
      `slug "${slug}" joins profile "${name}" to Red List "${title}"`,
    );
  }
  assert.ok(checked > 30, `only ${checked} slug joins were checked`);
});

test("descriptions are the page's own sentence, whole", () => {
  // A 130-character cap truncated all 642 — the shortest source description is
  // 139 — and FaunaHub puts the corrective clause last, so the cut landed on
  // "not true jellyfish", "Not rodents, despite the resemblance", "but is not a
  // skunk at all", and on six safety boundaries reading "not first-aid advice"
  // or "not pet-care advice".
  const withDescription = documents.filter((d) => d.description);
  assert.ok(withDescription.length > 600, "descriptions have gone missing");
  for (const document of withDescription) {
    assert.ok(
      !document.description!.endsWith("…"),
      `${document.slug}: description was truncated`,
    );
  }
  for (const [slug, clause] of [
    ["comb-jelly", "not true jellyfish"],
    ["shrew", "Not rodents"],
    ["zorilla", "not a skunk"],
  ] as const) {
    const found = documents.find((d) => d.slug === slug);
    assert.ok(
      found?.description?.includes(clause),
      `${slug}: the corrective clause "${clause}" is missing from the card text`,
    );
  }
});

test("the search field is not a successful form control", () => {
  // The <form> is server-rendered and its onSubmit only exists after
  // hydration, so Enter before hydration submits it. With no `name` the input
  // is not a successful control and the query string is empty, so nothing
  // leaks — but adding a name later would turn that into a live URL leak with
  // no other guard in the way.
  const source = fs.readFileSync(
    path.join(REPO_ROOT, "src", "components", "finder", "AnimalFinder.tsx"),
    "utf8",
  );
  const input = source.slice(source.indexOf("<input"), source.indexOf("/>", source.indexOf("<input")));
  assert.match(input, /type="search"/, "the search field is not type=search");
  assert.doesNotMatch(input, /\bname=/, "the search field has a name and would enter the URL");
});

test("the search overlay's fallback destinations are named, not positional", () => {
  // FALLBACK_DESTINATIONS indexed DISCOVERY_DESTINATIONS by position until
  // inserting Animal Finder at index 1 silently pushed Animal Taxonomy out of
  // search's no-results state — a change nothing named and no test caught.
  assert.deepEqual(
    FALLBACK_DESTINATIONS.map((destination) => destination.href),
    ["/animal-encyclopedia", "/animal-compare", "/animal-taxonomy", "/tools"],
  );
  const source = fs.readFileSync(
    path.join(REPO_ROOT, "src", "lib", "search", "discovery.ts"),
    "utf8",
  );
  assert.doesNotMatch(
    source,
    /DISCOVERY_DESTINATIONS\[\d+\]/,
    "a fallback destination is selected by position again",
  );
});

test("every browse preset resolves to at least one animal", () => {
  for (const preset of FINDER_PRESETS) {
    const cleaned = sanitizeSelection(preset.selection, facets);
    assert.deepEqual(
      Object.keys(cleaned).sort(),
      Object.keys(preset.selection).sort(),
      `preset "${preset.id}" uses a facet or value that no longer exists`,
    );
    const results = runFinder(documents, "", cleaned, facets);
    assert.ok(results.length > 0, `preset "${preset.id}" matches nothing`);
  }
});

test("every preset and destination href is a page that exists", () => {
  for (const preset of FINDER_PRESETS) {
    if (!preset.href) continue;
    assert.ok(STATIC_ROUTES.has(preset.href), `preset "${preset.id}" -> ${preset.href} is 404`);
  }
  for (const destination of FINDER_DESTINATIONS) {
    assert.ok(
      STATIC_ROUTES.has(destination.href),
      `destination ${destination.href} is 404`,
    );
  }
});

/* ------------------------------------------------------------------ *
 * 5. Route, SEO and sitemap
 * ------------------------------------------------------------------ */

test("/animal-finder exists as a single static route", () => {
  assert.ok(STATIC_ROUTES.has("/animal-finder"), "the route is missing");
  // No nested faceted routes. A path segment under /animal-finder would mint
  // one indexable page per filter combination — the doorway pattern this whole
  // design refuses.
  const nested = [...STATIC_ROUTES].filter(
    (url) => url.startsWith("/animal-finder/") && url !== "/animal-finder",
  );
  assert.deepEqual(nested, [], `faceted routes exist: ${nested.join(", ")}`);
});

test("/animal-finder is indexable and canonical", () => {
  const source = fs.readFileSync(path.join(APP_DIR, "animal-finder", "page.tsx"), "utf8");
  assert.doesNotMatch(source, /noindex/, "the hub is marked noindex");
  assert.match(source, /path:\s*FINDER_BASE/, "the canonical is not the finder route");
});

test("the sitemap gains exactly one url and no query strings", () => {
  const sitemap = fs.readFileSync(path.join(APP_DIR, "sitemap.ts"), "utf8");
  const matches = sitemap.match(/\/animal-finder/g) ?? [];
  assert.equal(matches.length, 1, "the finder appears in the sitemap more than once");
  assert.doesNotMatch(sitemap, /animal-finder[^`"']*\?/, "a query URL reached the sitemap");
});

test("the global search overlay offers a route into the Finder", () => {
  const panel = fs.readFileSync(
    path.join(REPO_ROOT, "src", "components", "search", "SearchPanel.tsx"),
    "utf8",
  );
  // Both states the brief names: before a query, and after one fails.
  assert.match(panel, /Browse animals with Animal Finder/, "no finder route in the initial state");
  assert.match(panel, /Try Animal Finder filters/, "no finder route in the no-results state");
  const discovery = fs.readFileSync(
    path.join(REPO_ROOT, "src", "lib", "search", "discovery.ts"),
    "utf8",
  );
  assert.match(discovery, /\/animal-finder/, "the finder is not a discovery destination");
});

/* ------------------------------------------------------------------ *
 * 6. Privacy
 * ------------------------------------------------------------------ */

test("no finder module ever puts the reader's query into the URL", () => {
  // The invariant the whole analytics design rests on, asserted mechanically
  // rather than stated in a comment. The site-wide WebmasterID tracker patches
  // history.pushState/replaceState and reports window.location.href, so any
  // state written to the address bar ships the reader's text to a third party.
  // Deliberately broader than the obvious call shapes. Every pattern below was
  // added because the narrow version of it had a trivial bypass: no `window.`
  // prefix, bracket access, an aliased import, `.assign`/`.replace` instead of
  // an assignment, `.append` instead of `.set`, or a parameter name other
  // than `q`.
  const forbidden: [RegExp, string][] = [
    [/\bhistory\s*(\.|\[\s*["'])(replaceState|pushState)/, "writes to browser history"],
    [
      /\blocation\s*(\.|\[\s*["'])\s*(href|search|hash|pathname)\s*["']?\s*\]?\s*=[^=]/,
      "assigns to location",
    ],
    [/\blocation\s*(\.|\[\s*["'])\s*(assign|replace)\s*["']?\s*\]?\s*\(/, "navigates via location"],
    [/searchParams\s*(\.|\[\s*["'])\s*(set|append|delete)/, "mutates URLSearchParams"],
    [/\bURLSearchParams\b/, "builds a query string"],
    [/\buseSearchParams\b/, "reads the query string"],
    [/\buseRouter\b/, "can navigate with arbitrary URLs"],
    [/\bnext\/navigation["']/, "imports the navigation API"],
    [/[?&](q|s|query|term|search|phrase|text)=/, "constructs a query string"],
  ];
  for (const file of finderSourceFiles()) {
    const source = stripComments(fs.readFileSync(file, "utf8"));
    for (const [pattern, why] of forbidden) {
      assert.doesNotMatch(
        source,
        pattern,
        `${path.relative(REPO_ROOT, file)} ${why} — the reader's input must never enter the URL`,
      );
    }
  }
});

test("no analytics payload can carry the query text", () => {
  // Both halves are asserted: the event type has no field that could hold it,
  // and no call site passes one. Adding an optional `query?: string` would
  // otherwise sail through typecheck, lint and every other test here.
  const analytics = stripComments(
    fs.readFileSync(path.join(REPO_ROOT, "src", "lib", "finder", "analytics.ts"), "utf8"),
  );
  const props = analytics.slice(
    analytics.indexOf("interface FinderAnalyticsProps"),
    analytics.indexOf("export const FINDER_EVENT_NAME"),
  );
  assert.ok(props.length > 0, "the props interface could not be located");
  for (const field of [
    "query",
    "text",
    "term",
    "phrase",
    "input",
    "raw",
    "needle",
    "keyword",
    "typed",
    "value",
    "q",
  ]) {
    assert.doesNotMatch(
      props,
      new RegExp(`\\b${field}\\??\\s*:`, "i"),
      `FinderAnalyticsProps declares a "${field}" field`,
    );
  }

  // A whitelist is the structural half: the props type may declare ONLY these
  // fields, so a new one has to be added here deliberately rather than sliding
  // in behind a name the blacklist above happens not to cover.
  const declared = [...props.matchAll(/^\s{2}([A-Za-z][A-Za-z0-9]*)\??:/gm)].map((m) => m[1]);
  assert.deepEqual(
    declared.slice().sort(),
    [
      "filterCount",
      "filters",
      "position",
      "queryLength",
      "resultCount",
      "resultUrl",
      "source",
    ],
    "FinderAnalyticsProps declares a field the privacy review has not seen",
  );

  // Balanced-paren extraction, not a fixed window. The window version needed a
  // `\n  );` terminator within 400 characters, so a single-line call was never
  // scanned at all and one capture spanned 75 unrelated lines to find the NEXT
  // call's closing paren.
  let scanned = 0;
  for (const file of finderSourceFiles()) {
    const source = stripComments(fs.readFileSync(file, "utf8"));
    for (const call of trackingCalls(source)) {
      scanned += 1;
      // `query` may appear only inside an expression that ends in `.length`.
      // Checked per value rather than with one regex: `queryLength:
      // query.trim().length` is safe and `query.trim()` is not, and a single
      // lookahead cannot tell them apart.
      for (const segment of call.split(/[,\n]/)) {
        if (!/\bquery\b/.test(segment)) continue;
        assert.match(
          segment,
          /\bquery\b[\w.()\s]*\.length\b/,
          `a call site passes the query text: ${segment.trim()}`,
        );
        assert.match(
          segment.trim(),
          /^queryLength\s*:/,
          `only queryLength may derive from the query: ${segment.trim()}`,
        );
      }
      assert.doesNotMatch(
        call,
        /\b(rawQuery|searchText|typed|needle|input)\b/,
        `a call site references reader text: ${call.slice(0, 120)}`,
      );
    }
  }
  assert.ok(scanned >= 3, `only ${scanned} trackFinderEvent call sites were scanned`);
});

test("the analytics filter payload is a closed vocabulary", () => {
  // `filters` is the one string the payload carries, and it must only ever hold
  // facet ids and value slugs generated at build time — never anything typed.
  const vocabulary = new Set<string>();
  for (const facet of facets) {
    vocabulary.add(facet.id);
    for (const value of facet.values) vocabulary.add(value.value);
  }
  const selections: FinderSelection[] = [
    { group: ["birds"] },
    { group: ["birds", "fish"], coverage: ["comparison", "domestic"] },
    { taxon: ["amphibians"] },
  ];
  for (const selection of selections) {
    const key = selectionKey(sanitizeSelection(selection, facets));
    for (const token of key.split(/[|:+]/).filter(Boolean)) {
      assert.ok(vocabulary.has(token), `"${token}" is not a build-time facet token`);
    }
    assert.ok(key.length < 200, "the filter key is unexpectedly long");
  }
});

test("no finder client module imports a heavyweight registry", () => {
  // animal-compare/records is ~3.8 MB and images/animal-images.ts ~1.2 MB. A
  // client component that reaches one pulls it into the route's bundle, which
  // is exactly the shape of regression this index exists to avoid.
  const heavy = [/animal-compare\/records/, /images\/animal-images/, /red-list\/(profiles|species)/];
  for (const file of finderSourceFiles()) {
    const source = fs.readFileSync(file, "utf8");
    if (!source.includes('"use client"')) continue;
    for (const pattern of heavy) {
      assert.doesNotMatch(
        source,
        pattern,
        `${path.relative(REPO_ROOT, file)} imports a heavyweight registry into the client`,
      );
    }
  }
});

/* ------------------------------------------------------------------ *
 * 7. Freshness and budget
 * ------------------------------------------------------------------ */

test("the committed index still matches its source", () => {
  // Regenerating in --check mode is the only assertion that catches a registry
  // edit which was never followed by `npm run finder:index`.
  execFileSync("node", ["scripts/generate-finder-index.mjs", "--check"], {
    cwd: REPO_ROOT,
    stdio: "pipe",
  });
});

test("the payload stays inside its budget", () => {
  const bytes = Buffer.byteLength(raw);
  const gzip = zlib.gzipSync(raw, { level: 9 }).length;
  assert.ok(
    bytes <= MAX_RAW_BYTES,
    `index is ${(bytes / 1024).toFixed(1)} KB raw, over the ${MAX_RAW_BYTES / 1024} KB budget`,
  );
  assert.ok(
    gzip <= MAX_GZIP_BYTES,
    `index is ${(gzip / 1024).toFixed(1)} KB gzipped, over the ${MAX_GZIP_BYTES / 1024} KB budget`,
  );
});

test("the finder payload is smaller than the search index it does not reuse", () => {
  // The justification for a second payload. If this ever inverts, the Finder
  // should load the search index instead of its own.
  const search = fs.readFileSync(path.join(REPO_ROOT, "public", "search-index.json"));
  const finderGzip = zlib.gzipSync(raw, { level: 9 }).length;
  const searchGzip = zlib.gzipSync(search, { level: 9 }).length;
  assert.ok(
    finderGzip < searchGzip,
    `finder ${finderGzip} B >= search ${searchGzip} B — reuse the search index instead`,
  );
});
