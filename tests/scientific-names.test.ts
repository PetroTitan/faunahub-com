/**
 * Scientific names, the custom 404, and sitemap completeness.
 *
 * The property this suite exists to protect is asymmetric, and the asymmetry is
 * the whole point:
 *
 *   A profile that IS one species must carry its binomial, so that a reader
 *   searching "Panthera leo" reaches the Lion.
 *
 *   A profile that covers a genus, family or order must carry NOTHING, even
 *   though its page prints a binomial. FaunaHub's group pages show a REFERENCE
 *   species under an explicit disclaimer — "Butterfly" shows the monarch,
 *   "Catfish" the channel catfish — and harvesting that into `scientificName`
 *   would turn a hedged example into a false claim that the page is that
 *   species. The Frog page prints `Batrachochytrium dendrobatidis`, which is a
 *   pathogenic fungus, not a frog; anything that scrapes prose gets that wrong.
 *
 * So the tests below check both directions: that the fifteen species profiles
 * gained their names, and that the ninety-four deliberate absences stay absent.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

import { createSearchEngine } from "../src/lib/search/engine.ts";
import { hydrateFinderDocument } from "../src/lib/finder/types.ts";
import { runFinder } from "../src/lib/finder/filter.ts";

const ROOT = path.resolve(import.meta.dirname, "..");
const ANIMALS = path.join(ROOT, "src/app/animals");

const searchIndex = JSON.parse(
  fs.readFileSync(path.join(ROOT, "public/search-index.json"), "utf8"),
);
const finderIndex = JSON.parse(
  fs.readFileSync(path.join(ROOT, "public/animal-finder-index.json"), "utf8"),
);
const engine = createSearchEngine(searchIndex);
const finderDocs = finderIndex.documents.map(hydrateFinderDocument);
const bySlug = new Map<string, { scientificName?: string }>(
  finderIndex.documents.map((d: { slug: string }) => [d.slug, d]),
);

/**
 * The profiles backfilled in this sprint, with the binomial each page's own
 * <h1> already published. Written out rather than derived, so that a future
 * change to the extraction cannot quietly redefine what "correct" means.
 */
const BACKFILLED: ReadonlyArray<readonly [string, string]> = [
  ["aardvark", "Orycteropus afer"],
  ["bison", "Bison bison"],
  ["bobcat", "Lynx rufus"],
  ["capybara", "Hydrochoerus hydrochaeris"],
  ["coyote", "Canis latrans"],
  ["elk", "Cervus canadensis"],
  ["hippopotamus", "Hippopotamus amphibius"],
  ["lion", "Panthera leo"],
  ["okapi", "Okapia johnstoni"],
  ["pronghorn", "Antilocapra americana"],
  ["sun-bear", "Helarctos malayanus"],
  ["warthog", "Phacochoerus africanus"],
  ["wild-boar", "Sus scrofa"],
  ["wolf", "Canis lupus"],
  ["wolverine", "Gulo gulo"],
];

/**
 * Profiles whose subject is a genus, family or order. Each one PRINTS a
 * binomial somewhere on the page; none may carry one as its identity.
 */
const GROUP_LEVEL = [
  "butterfly", "catfish", "camel", "shark", "crocodile", "frog", "eagle",
  "skunk", "weasel", "squirrel", "whale", "seal", "dolphin", "octopus",
  "rabbit", "hamster", "falcon", "kangaroo", "orangutan", "rhinoceros",
  "pangolin", "gibbon", "echidna", "mongoose", "wildebeest", "anaconda",
  "badger", "bee", "chameleon", "hyena", "lemur", "lynx",
] as const;

/* ---------- 1. The species that gained a name ---------------------- */

for (const [slug, binomial] of BACKFILLED) {
  test(`${slug} carries ${binomial} in the finder index`, () => {
    assert.equal(bySlug.get(slug)?.scientificName, binomial);
  });
}

test("every backfilled binomial is the one the page's own <h1> publishes", () => {
  for (const [slug, binomial] of BACKFILLED) {
    const src = fs.readFileSync(path.join(ANIMALS, slug, "page.tsx"), "utf8");
    const h1 = src.replace(/\s+/g, " ").match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "";
    assert.ok(
      h1.includes(`scientificName="${binomial}"`),
      `${slug}: the <h1> must declare ${binomial}, not merely mention it in prose`,
    );
  }
});

test("Panthera leo finds the Lion in global search", () => {
  const titles = engine.search("Panthera leo").results.map((r) => r.document.title);
  assert.ok(titles.includes("Lion"), `expected Lion, got ${titles.join(", ") || "nothing"}`);
});

test("Canis lupus finds the Wolf in global search", () => {
  const titles = engine.search("Canis lupus").results.map((r) => r.document.title);
  assert.ok(titles.includes("Wolf"), `expected Wolf, got ${titles.join(", ") || "nothing"}`);
});

test("every backfilled binomial resolves in global search", () => {
  for (const [slug, binomial] of BACKFILLED) {
    const urls = engine.search(binomial).results.map((r) => r.document.url);
    assert.ok(
      urls.includes(`/animals/${slug}`),
      `searching "${binomial}" did not reach /animals/${slug}`,
    );
  }
});

test("every backfilled binomial resolves in the Animal Finder", () => {
  for (const [slug, binomial] of BACKFILLED) {
    const hits = runFinder(finderDocs, binomial, {}, finderIndex.facets);
    assert.ok(
      hits.some((h) => h.document.slug === slug),
      `the Finder did not match ${slug} on "${binomial}"`,
    );
  }
});

/**
 * Reaching the animal is the user-facing property; the TIER it matched on is
 * not always "scientific-name", and requiring that would encode a falsehood.
 * "Bison bison" matches the Bison on `name-tokens`, a stronger tier, because
 * the animal's common name is also its genus. So the scientific-name tier is
 * asserted only where the binomial shares no word with the common name — which
 * is exactly the case the backfill existed to fix.
 */
test("a binomial unrelated to the common name matches on the scientific-name tier", () => {
  for (const [slug, binomial] of BACKFILLED) {
    const doc = finderIndex.documents.find((d: { slug: string }) => d.slug === slug);
    const nameWords = new Set(doc.name.toLowerCase().split(/[^a-z]+/).filter(Boolean));
    const shares = binomial.toLowerCase().split(" ").some((w) => nameWords.has(w));
    if (shares) continue;
    const hit = runFinder(finderDocs, binomial, {}, finderIndex.facets).find(
      (h) => h.document.slug === slug,
    );
    assert.equal(hit?.reason, "scientific-name", `${slug} matched "${binomial}" on the wrong tier`);
  }
});

/* ---------- 2. The absences that must stay absent ------------------ */

for (const slug of GROUP_LEVEL) {
  test(`${slug} is a group page and carries no scientific name`, () => {
    const doc = bySlug.get(slug);
    assert.ok(doc, `${slug} is missing from the finder index`);
    assert.equal(
      doc.scientificName,
      undefined,
      `${slug} covers a genus, family or order — a single binomial would be a false claim`,
    );
  });
}

/**
 * A rank-level page may legitimately carry a RANK string — `"abalone": "genus
 * Haliotis"` is how the registry records "this page is a genus". What it must
 * never carry is a BINOMIAL, because that is the claim that the page is one
 * species. The distinction is the whole invariant; asserting merely that such a
 * page holds nothing would contradict 155 correct existing entries.
 */
test("no profile whose <h1> declares a rank carries a species binomial", () => {
  const RANK = /\((family|genus|order|class|subfamily|superorder|infraorder|suborder|phylum|subclass|tribe)\s/i;
  const BINOMIAL = /^[A-Z][a-z]{2,} [a-z]{3,}$/;
  const offenders: string[] = [];
  for (const slug of fs.readdirSync(ANIMALS)) {
    const file = path.join(ANIMALS, slug, "page.tsx");
    if (!fs.existsSync(file)) continue;
    const src = fs.readFileSync(file, "utf8").replace(/\s+/g, " ");
    const h1 = src.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] ?? "";
    const name = bySlug.get(slug)?.scientificName;
    if (RANK.test(h1) && name && BINOMIAL.test(name)) offenders.push(`${slug} → ${name}`);
  }
  assert.deepEqual(offenders, [], "a rank-level page was given a species binomial");
});

/**
 * `factsHeaderNote` is not on its own proof of a group page — nineteen
 * single-species profiles use it for care and domestication caveats (`cow`,
 * `goat`, `angelfish`). So this checks the direction that actually matters:
 * that nothing backfilled in this sprint carries one.
 */
test("no page backfilled here disclaims single-species coverage", () => {
  const offenders: string[] = [];
  for (const [slug] of BACKFILLED) {
    const src = fs.readFileSync(path.join(ANIMALS, slug, "page.tsx"), "utf8");
    if (/factsHeaderNote=/.test(src)) offenders.push(slug);
  }
  assert.deepEqual(offenders, [], "a page that hedges its coverage was given a binomial");
});

test("the deliberate absences are still the large majority", () => {
  const withName = finderIndex.documents.filter(
    (d: { scientificName?: string }) => d.scientificName,
  ).length;
  const total = finderIndex.documents.length;
  // A sudden jump here means something started deriving names from prose.
  assert.ok(
    total - withName >= 90,
    `only ${total - withName} profiles lack a binomial; prose-derived names are the likely cause`,
  );
});

test("every name backfilled here is a well-formed binomial", () => {
  const BINOMIAL = /^[A-Z][a-z]{2,}(?: [a-z]{3,}){1,2}$/;
  for (const [slug, binomial] of BACKFILLED) {
    assert.match(binomial, BINOMIAL, `${slug}: "${binomial}" is not a species binomial`);
  }
});

/**
 * The Frog profile prints `Batrachochytrium dendrobatidis` — the chytrid
 * fungus that infects amphibians, not an amphibian. It is the sharpest
 * available proof that a prose-scraping extractor would assign nonsense, so it
 * is pinned here as a canary.
 */
test("no animal is identified as the chytrid fungus", () => {
  for (const doc of finderIndex.documents as { slug: string; scientificName?: string }[]) {
    assert.notEqual(
      doc.scientificName,
      "Batrachochytrium dendrobatidis",
      `${doc.slug} was given a fungus as its identity`,
    );
  }
});

/* ---------- 3. The custom 404 -------------------------------------- */

test("a custom not-found page exists and is noindex", () => {
  const file = path.join(ROOT, "src/app/not-found.tsx");
  assert.ok(fs.existsSync(file), "src/app/not-found.tsx is missing");
  const src = fs.readFileSync(file, "utf8");
  assert.match(src, /index:\s*false/, "the 404 must not be indexable");
  assert.equal((src.match(/<h1/g) ?? []).length, 1, "the 404 must have exactly one <h1>");
  assert.ok(!/"use client"/.test(src), "the 404 must not ship a client bundle");
});

test("every link on the 404 points at a route that exists", () => {
  const src = fs.readFileSync(path.join(ROOT, "src/app/not-found.tsx"), "utf8");
  const hrefs = [...src.matchAll(/href:\s*"([^"]+)"/g)].map((m) => m[1]);
  assert.ok(hrefs.length >= 6, `expected the recovery links, found ${hrefs.length}`);
  const indexed = new Set(searchIndex.documents.map((d: { url: string }) => d.url));
  for (const href of hrefs) {
    if (href === "/") continue;
    assert.ok(indexed.has(href), `the 404 links to ${href}, which is not an indexed route`);
  }
});

const SITEMAP_SRC = fs.readFileSync(path.join(ROOT, "src/app/sitemap.ts"), "utf8");
/**
 * The sitemap is asserted against its SOURCE rather than by importing it,
 * matching tests/search-index.test.ts: sitemap.ts resolves `@/lib` aliases that
 * Node's type-stripping cannot follow, so importing it fails outside Next.
 */
const SITEMAP_LITERALS = [...SITEMAP_SRC.matchAll(/\$\{BASE_URL\}(\/[^`"'$]*)/g)]
  .map((m) => m[1])
  // Template segments such as `${BASE_URL}/animals/` followed by an
  // interpolation are route FAMILIES, not urls; only fully literal paths can be
  // compared for duplication.
  .filter((url) => url.length > 1 && !url.endsWith("/"));

test("the 404 is not in the sitemap", () => {
  assert.doesNotMatch(SITEMAP_SRC, /not-found|\/404/, "the 404 must not be submitted");
});

/* ---------- 4. Sitemap completeness -------------------------------- */

const SMALL_PET_HUBS = [
  "/small-pets/rabbits",
  "/small-pets/hamsters",
  "/small-pets/guinea-pigs",
] as const;

test("the three small-pets hubs are in the sitemap, exactly once each", () => {
  for (const hub of SMALL_PET_HUBS) {
    const hits = SITEMAP_LITERALS.filter((u) => u === hub);
    assert.equal(hits.length, 1, `${hub} appears ${hits.length} times in the sitemap`);
  }
});

test("the small-pets hubs are real, indexable routes", () => {
  for (const hub of SMALL_PET_HUBS) {
    const file = path.join(ROOT, "src/app", hub, "page.tsx");
    assert.ok(fs.existsSync(file), `${hub} has no page.tsx`);
    const src = fs.readFileSync(file, "utf8");
    assert.ok(!/index:\s*false/.test(src), `${hub} is noindex and must not be submitted`);
  }
});

test("the small-pets hubs are searchable pages, not invented urls", () => {
  const indexed = new Set(searchIndex.documents.map((d: { url: string }) => d.url));
  for (const hub of SMALL_PET_HUBS) {
    assert.ok(indexed.has(hub), `${hub} is in the sitemap but is not a real indexed page`);
  }
});

test("no literal sitemap url is duplicated", () => {
  const seen = new Set<string>();
  const dupes = SITEMAP_LITERALS.filter((u) => (seen.has(u) ? true : (seen.add(u), false)));
  assert.deepEqual(dupes, [], "duplicate urls in the sitemap source");
});

test("the sitemap carries no query string and no fragment", () => {
  assert.doesNotMatch(SITEMAP_SRC, /url:\s*[`"'][^`"']*\?/, "query-string url in the sitemap");
  assert.deepEqual(
    SITEMAP_LITERALS.filter((u) => u.includes("?") || u.includes("#")),
    [],
    "query or fragment url in the sitemap",
  );
});

test("the sitemap still excludes /search", () => {
  assert.deepEqual(
    SITEMAP_LITERALS.filter((u) => u === "/search"),
    [],
    "/search is noindex and must stay out of the sitemap",
  );
});
