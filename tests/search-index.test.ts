/**
 * Search index — integrity, safety and freshness tests.
 *
 * Runs on Node's built-in test runner with native TypeScript type-stripping,
 * like the other suites here:
 *
 *   npm run test
 *
 * These tests guard the properties that make the index safe to ship: every URL
 * is a page that exists, no private backlog row is reachable, no document
 * duplicates another, and the committed artifact still matches the source it
 * claims to be generated from.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import zlib from "node:zlib";

import { ALL_DISCOVERY_HREFS } from "../src/lib/search/discovery.ts";
import { EXTERNAL_COMPARISONS } from "../src/lib/animal-compare/index.ts";
import { SEARCH_INDEX_VERSION, type SearchIndexPayload } from "../src/lib/search/types.ts";

const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const INDEX_PATH = path.join(REPO_ROOT, "public", "search-index.json");
const APP_DIR = path.join(REPO_ROOT, "src", "app");

const raw = fs.readFileSync(INDEX_PATH, "utf8");
const payload = JSON.parse(raw) as SearchIndexPayload;

/**
 * Performance budget for the generated index.
 *
 * Measured at the time of writing: 706 KB raw / 156 KB gzipped / 126 KB brotli
 * (which is what a CDN actually serves). Descriptions are close to half of that
 * and are indexed in FULL rather than at a display length, because truncating
 * them made every word past the cut unsearchable.
 *
 * The ceilings below leave headroom for content growth while still failing
 * loudly if a change starts shipping whole article bodies. The index is fetched
 * on demand when search is opened, never bundled — so this budget governs a
 * deliberate user action, not page load. If it is exceeded, the fix is to split
 * the payload (core index + descriptions sidecar, a change local to
 * load-index.ts), not to raise the number.
 */
const MAX_RAW_BYTES = 900 * 1024;
const MAX_GZIP_BYTES = 190 * 1024;

/** Every static route directory on disk, as a URL. */
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

/** Every dynamic route template on disk, as a matcher. */
function dynamicPatterns(): RegExp[] {
  const out: RegExp[] = [];
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name === "page.tsx") {
        const relative = full.slice(APP_DIR.length).replace(/\/page\.tsx$/, "");
        if (!relative.includes("[")) continue;
        const source = relative
          .split("/")
          .map((segment) => {
            if (!segment) return "";
            if (segment.startsWith("[") && segment.endsWith("]")) return "[^/?#]+";
            return segment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          })
          .join("/");
        out.push(new RegExp(`^${source}$`));
      }
    }
  };
  walk(APP_DIR);
  return out;
}

const STATIC_ROUTES = staticRoutes();
const DYNAMIC_PATTERNS = dynamicPatterns();

/**
 * Strip comments so the guards below test CODE, not prose.
 *
 * These files document the very APIs they must not call — the whole point of
 * the comments is to say "we deliberately do not use history.replaceState here"
 * — so a naive grep would fail on the explanation rather than on a violation.
 * Only whole comment lines and block comments are removed, never anything
 * inside a string literal.
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

/** Every source file that makes up the search feature at runtime. */
function searchSourceFiles(): string[] {
  const dirs = [
    path.join(REPO_ROOT, "src", "lib", "search"),
    path.join(REPO_ROOT, "src", "components", "search"),
    path.join(REPO_ROOT, "src", "app", "search"),
  ];
  const out: string[] = [];
  for (const dir of dirs) {
    for (const name of fs.readdirSync(dir)) {
      if (name.endsWith(".ts") || name.endsWith(".tsx")) out.push(path.join(dir, name));
    }
  }
  return out;
}

/* ------------------------------------------------------------------ *
 * Shape
 * ------------------------------------------------------------------ */

test("the index declares the wire version the client expects", () => {
  assert.equal(payload.version, SEARCH_INDEX_VERSION);
  assert.match(payload.generatedAt, /^\d{4}-\d{2}-\d{2}$/);
});

test("the index is not empty and covers every document type", () => {
  assert.ok(payload.documents.length > 1500, `only ${payload.documents.length} documents`);
  const types = new Set(payload.documents.map((document) => document.type));
  for (const expected of ["animal", "comparison", "guide", "category", "behavior", "tool", "hub", "research"]) {
    assert.ok(types.has(expected as never), `no documents of type "${expected}"`);
  }
});

test("every document id is unique and deterministic", () => {
  const seen = new Set<string>();
  for (const document of payload.documents) {
    const id = `${document.type}:${document.url}`;
    assert.equal(seen.has(id), false, `duplicate id ${id}`);
    seen.add(id);
  }
  assert.equal(seen.size, payload.documents.length);
});

test("every canonical url is unique", () => {
  const seen = new Set<string>();
  for (const document of payload.documents) {
    assert.equal(seen.has(document.url), false, `duplicate url ${document.url}`);
    seen.add(document.url);
  }
});

test("every document has a non-empty title", () => {
  for (const document of payload.documents) {
    assert.ok(document.title.trim().length > 0, `${document.url} has no title`);
  }
});

test("no url carries a query string, fragment, trailing slash or template segment", () => {
  for (const { url } of payload.documents) {
    assert.ok(url.startsWith("/"), `${url} is not site-relative`);
    assert.doesNotMatch(url, /[?#]/, `${url} carries a query or fragment`);
    assert.doesNotMatch(url, /\[|\]/, `${url} is an un-substituted template`);
    assert.doesNotMatch(url, /\/\//, `${url} has an empty segment`);
    if (url !== "/") assert.doesNotMatch(url, /\/$/, `${url} has a trailing slash`);
  }
});

/* ------------------------------------------------------------------ *
 * Every indexed URL is a real page
 * ------------------------------------------------------------------ */

test("every indexed url matches a route that exists on disk", () => {
  for (const { url } of payload.documents) {
    const matches =
      STATIC_ROUTES.has(url) || DYNAMIC_PATTERNS.some((pattern) => pattern.test(url));
    assert.ok(matches, `${url} matches no route in src/app`);
  }
});

test("no private or technical route is indexed", () => {
  const forbidden = [/^\/api\//, /^\/_next\//, /^\/search$/, /^\/admin/];
  for (const { url } of payload.documents) {
    for (const pattern of forbidden) {
      assert.doesNotMatch(url, pattern, `${url} must not be indexed`);
    }
  }
});

test("every static route on disk is findable", () => {
  // The half of the gate that catches a new cluster shipping unsearchable.
  const indexed = new Set(payload.documents.map((document) => document.url));
  const excluded = new Set(["/search"]);
  for (const url of STATIC_ROUTES) {
    if (excluded.has(url)) continue;
    assert.ok(indexed.has(url), `${url} exists but is not in the search index`);
  }
});

test("the index matches what the last production build actually prerendered", (t) => {
  // The strongest available gate, and the one that closes a real hole in the
  // others: `concreteRoutes` is built from the SAME ROUTE_SOURCES entries the
  // documents are, so a source that filters differently from its route's
  // generateStaticParams would drop a page from both sides and go unnoticed.
  // Next's prerender manifest is independent of all of that — it is the list of
  // pages the build genuinely emitted.
  const manifestPath = path.join(REPO_ROOT, ".next", "prerender-manifest.json");
  if (!fs.existsSync(manifestPath)) {
    t.skip("no .next build present — run `npm run build` to exercise this gate");
    return;
  }

  const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8")) as {
    routes: Record<string, unknown>;
  };

  // Everything the build emits that is not an HTML page a reader can land on.
  const NON_PAGE = /\.(xml|txt|json|png|ico|svg|webmanifest)$/;
  const prerendered = Object.keys(manifest.routes).filter(
    (route) => !NON_PAGE.test(route) && !route.startsWith("/_"),
  );

  const indexed = new Set(payload.documents.map((document) => document.url));
  const excluded = new Set(["/search"]);

  const missing = prerendered.filter((route) => !excluded.has(route) && !indexed.has(route));
  assert.deepEqual(missing, [], `prerendered pages missing from the index: ${missing.join(", ")}`);

  const built = new Set(prerendered);
  const phantom = [...indexed].filter((url) => !built.has(url));
  assert.deepEqual(phantom, [], `indexed urls the build never emitted: ${phantom.join(", ")}`);
});

/* ------------------------------------------------------------------ *
 * Nothing unpublished leaks
 * ------------------------------------------------------------------ */

test("no unpublished comparison backlog entry is reachable", async () => {
  const { COMPARISON_BACKLOG } = await import("../src/lib/animal-compare/backlog.ts");
  const indexed = new Set(payload.documents.map((document) => document.url));
  for (const entry of COMPARISON_BACKLOG) {
    if (entry.status === "published") continue; // published rows describe real pages
    for (const slug of [entry.proposedSlug, entry.publishedSlug].filter(Boolean)) {
      assert.equal(
        indexed.has(`/animal-compare/${slug}`),
        false,
        `backlogged comparison "${slug}" (${entry.status}) is in the index`,
      );
    }
  }
});

test("no unpublished behavior backlog entry is reachable", async () => {
  const { BEHAVIOR_BACKLOG } = await import("../src/lib/animal-behavior-backlog.ts");
  const indexed = new Set(payload.documents.map((document) => document.url));
  for (const entry of BEHAVIOR_BACKLOG) {
    if (entry.status === "published") continue;
    assert.equal(
      indexed.has(entry.proposedPath),
      false,
      `unpublished behavior page "${entry.proposedPath}" (${entry.status}) is in the index`,
    );
  }
});

test("the runtime search modules never import a private backlog", () => {
  // The generator imports both backlogs, deliberately and in exactly one
  // function, to assert against them. Nothing that ships to a browser may.
  const guarded = [
    path.join(REPO_ROOT, "src", "lib", "search", "engine.ts"),
    path.join(REPO_ROOT, "src", "lib", "search", "types.ts"),
    path.join(REPO_ROOT, "src", "lib", "search", "normalize.ts"),
    path.join(REPO_ROOT, "src", "lib", "search", "discovery.ts"),
    path.join(REPO_ROOT, "src", "lib", "search", "analytics.ts"),
    path.join(REPO_ROOT, "src", "lib", "search", "load-index.ts"),
    path.join(REPO_ROOT, "src", "components", "search", "SearchPanel.tsx"),
    path.join(REPO_ROOT, "src", "components", "search", "SearchDialog.tsx"),
    path.join(REPO_ROOT, "src", "components", "search", "SearchTrigger.tsx"),
  ];
  for (const file of guarded) {
    const source = fs.readFileSync(file, "utf8");
    assert.doesNotMatch(
      source,
      /from\s+["'][^"']*backlog(\.ts)?["']/,
      `${path.relative(REPO_ROOT, file)} imports a private backlog`,
    );
  }
});

test("no search module ever puts the reader's query into the URL", () => {
  // This is the invariant the whole analytics design rests on, and it was NOT
  // enough to state it in a comment: an earlier version of /search mirrored the
  // query into the address bar with history.replaceState, and the site-wide
  // WebmasterID tracker patches replaceState and reports window.location.href —
  // so the query reached a third-party endpoint once per keystroke while every
  // other gate stayed green. The guarantee has to be mechanical.
  const files = searchSourceFiles();
  const forbidden: [RegExp, string][] = [
    [/history\.(replaceState|pushState)/, "writes to browser history"],
    [/window\.location\.(href|search)\s*=/, "assigns to window.location"],
    [/searchParams\.set\s*\(/, "mutates URLSearchParams"],
    [/useSearchParams/, "reads the query string"],
    [/[?&]q=/, "constructs a q= query string"],
  ];
  for (const file of files) {
    const source = stripComments(fs.readFileSync(file, "utf8"));
    for (const [pattern, why] of forbidden) {
      assert.doesNotMatch(
        source,
        pattern,
        `${path.relative(REPO_ROOT, file)} ${why} — the reader's query must never enter the URL`,
      );
    }
  }
});

test("no analytics payload can carry the query text", () => {
  // The event type has no field for it, and no call site passes one. Both halves
  // are asserted, because adding an optional `query?: string` would otherwise
  // sail through typecheck, lint and every other test here.
  const analytics = stripComments(
    fs.readFileSync(path.join(REPO_ROOT, "src", "lib", "search", "analytics.ts"), "utf8"),
  );
  const propsBlock = analytics.slice(
    analytics.indexOf("export interface SearchAnalyticsProps"),
    analytics.indexOf("export const SEARCH_EVENT_NAME"),
  );
  assert.ok(propsBlock.length > 0, "could not locate SearchAnalyticsProps");
  for (const banned of ["query?:", "query:", "queryText", "term", "searchTerm", "rawQuery"]) {
    assert.equal(
      propsBlock.includes(banned),
      false,
      `SearchAnalyticsProps declares "${banned}" — analytics must never carry query text`,
    );
  }

  for (const file of searchSourceFiles()) {
    const source = stripComments(fs.readFileSync(file, "utf8"));
    // Every trackSearchEvent call, checked for a raw-text field.
    for (const match of source.matchAll(/trackSearchEvent\([\s\S]{0,600}?\)\s*;/g)) {
      assert.doesNotMatch(
        match[0],
        /\b(query|rawQuery|queryText|searchTerm|term)\s*:/,
        `${path.relative(REPO_ROOT, file)} passes query text to trackSearchEvent`,
      );
    }
  }
});

test("the WebSite schema does not advertise a query-string search endpoint", () => {
  // A sitelinks SearchAction sends readers to /search?q=<their text>, which the
  // site-wide tracker would then report as a page URL.
  const schema = stripComments(
    fs.readFileSync(path.join(REPO_ROOT, "src", "lib", "schema.ts"), "utf8"),
  );
  assert.doesNotMatch(schema, /"@type":\s*"SearchAction"/, "SearchAction is declared");
  assert.doesNotMatch(schema, /search_term_string/, "a query-string template is declared");
});

test("no client search module imports a heavyweight content registry", () => {
  // src/lib/animal-compare/records is ~3.8 MB and src/lib/images/animal-images
  // is ~1.2 MB. Either one reaching a "use client" module would ship megabytes
  // of prose to every reader. The index exists precisely so they never have to.
  const clientDir = path.join(REPO_ROOT, "src", "components", "search");
  const files = [
    ...fs.readdirSync(clientDir).map((name) => path.join(clientDir, name)),
    path.join(REPO_ROOT, "src", "lib", "search", "load-index.ts"),
    path.join(REPO_ROOT, "src", "lib", "search", "engine.ts"),
    path.join(REPO_ROOT, "src", "app", "search", "SearchPageClient.tsx"),
  ];
  const forbidden = [
    /from\s+["'][^"']*animal-compare/,
    /from\s+["'][^"']*animal-behavior/,
    /from\s+["'][^"']*images\/animal-images/,
    /from\s+["'][^"']*red-list/,
    /from\s+["'][^"']*\/data(\.ts)?["']/,
  ];
  for (const file of files) {
    if (!file.endsWith(".ts") && !file.endsWith(".tsx")) continue;
    const source = fs.readFileSync(file, "utf8");
    for (const pattern of forbidden) {
      assert.doesNotMatch(
        source,
        pattern,
        `${path.relative(REPO_ROOT, file)} imports a heavyweight registry into client code`,
      );
    }
  }
});

/* ------------------------------------------------------------------ *
 * Comparison pairs
 * ------------------------------------------------------------------ */

test("every pair key is canonically sorted and resolves to one indexed url", () => {
  const indexed = new Set(payload.documents.map((document) => document.url));
  const seenUrls = new Set<string>();
  for (const [key, url] of Object.entries(payload.pairs)) {
    assert.equal(key, key.split("--").sort().join("--"), `pair key ${key} is not sorted`);
    assert.ok(indexed.has(url), `pair ${key} points at unindexed ${url}`);
    assert.equal(seenUrls.has(url), false, `two pairs resolve to ${url}`);
    seenUrls.add(url);
  }
});

test("the pair index covers every published comparison, and nothing else", async () => {
  const { COMPARISONS, EXTERNAL_COMPARISONS } = await import(
    "../src/lib/animal-compare/index.ts"
  );
  const expected = new Set([
    ...COMPARISONS.map((record) => record.canonicalPairKey),
    ...EXTERNAL_COMPARISONS.map((record) => record.canonicalPairKey),
  ]);
  assert.equal(Object.keys(payload.pairs).length, expected.size);
  for (const key of expected) {
    assert.ok(payload.pairs[key], `pair ${key} is missing from the index`);
  }
});

test("legacy /compare pages keep their registry title, not their page title", () => {
  // The DocumentSet is first-wins, so a registry document must be added before
  // the harvester reaches the same URL. When these seven were added afterwards
  // they inherited the page's long SEO title —
  // "Lion vs Tiger — Size, Strength, Habitat & Key Differences" — whose tokens
  // then out-matched the lion's own profile for a query like "lion habitat".
  const byUrl = new Map(payload.documents.map((document) => [document.url, document]));
  for (const record of EXTERNAL_COMPARISONS) {
    const document = byUrl.get(record.href);
    assert.ok(document, `${record.href} is not indexed`);
    assert.equal(
      document.title,
      record.title,
      `${record.href} uses the page title instead of the registry title`,
    );
    assert.ok(
      record.summary.startsWith(document.description!.replace(/…$/, "")),
      `${record.href} description does not come from the registry summary`,
    );
  }
});

test("every comparison document names exactly two known animals", () => {
  const known = new Set(Object.values(payload.animalNames));
  for (const document of payload.documents) {
    if (document.type !== "comparison") continue;
    if (!document.animalSlugs) continue;
    assert.equal(document.animalSlugs.length, 2, `${document.url} names ${document.animalSlugs.length} animals`);
    for (const slug of document.animalSlugs) {
      assert.ok(known.has(slug), `${document.url} references unknown animal "${slug}"`);
    }
  }
});

/* ------------------------------------------------------------------ *
 * Derived data is never invented
 * ------------------------------------------------------------------ */

test("every scientific name matches the profile it was extracted from", async () => {
  const { SCIENTIFIC_NAMES } = await import("../src/lib/animal-compare/scientific-names.ts");
  const registryValues = new Set(Object.values(SCIENTIFIC_NAMES));
  for (const document of payload.documents) {
    if (!document.scientificName) continue;
    if (!document.url.startsWith("/animals/")) continue;
    assert.ok(
      registryValues.has(document.scientificName),
      `${document.url} carries a scientific name that is not in SCIENTIFIC_NAMES: "${document.scientificName}"`,
    );
  }
});

test("no animal is given a scientific name its profile does not declare", async () => {
  const { SCIENTIFIC_NAMES } = await import("../src/lib/animal-compare/scientific-names.ts");
  for (const document of payload.documents) {
    if (!document.url.startsWith("/animals/")) continue;
    const slug = document.url.slice("/animals/".length);
    const expected = SCIENTIFIC_NAMES[slug];
    assert.equal(
      document.scientificName ?? undefined,
      expected ?? undefined,
      `${document.url} scientific name disagrees with the registry`,
    );
  }
});

test("no alias duplicates its own document title", () => {
  for (const document of payload.documents) {
    for (const alias of document.aliases ?? []) {
      assert.notEqual(
        alias.trim().toLowerCase(),
        document.title.trim().toLowerCase(),
        `${document.url} lists its own title as an alias`,
      );
    }
  }
});

test("every browse facet chip has real animals and a real hub behind it", () => {
  const indexed = new Set(payload.documents.map((document) => document.url));
  const counts = new Map<string, number>();
  for (const document of payload.documents) {
    if (document.type !== "animal" || !document.group) continue;
    counts.set(document.group, (counts.get(document.group) ?? 0) + 1);
  }
  assert.ok(payload.facets.animalGroups.length > 0, "no browse facets were generated");
  for (const group of payload.facets.animalGroups) {
    assert.equal(group.count, counts.get(group.slug), `facet ${group.slug} count is wrong`);
    assert.ok(group.count > 0, `facet ${group.slug} is empty`);
    assert.ok(indexed.has(group.href), `facet ${group.slug} links to missing hub ${group.href}`);
    assert.ok(group.label.trim().length > 0, `facet ${group.slug} has no label`);
  }
});

test("the reported facet coverage matches the documents", () => {
  const classified = payload.documents.filter(
    (document) => document.type === "animal" && document.group,
  ).length;
  const total = payload.documents.filter(
    (document) => document.type === "animal" && document.url.startsWith("/animals/"),
  ).length;
  assert.equal(payload.facets.classifiedAnimals, classified);
  assert.equal(payload.facets.totalAnimalProfiles, total);
  assert.ok(
    payload.facets.classifiedAnimals <= payload.facets.totalAnimalProfiles,
    "coverage claims more classified animals than there are profiles",
  );
});

/* ------------------------------------------------------------------ *
 * Discovery destinations stay real
 * ------------------------------------------------------------------ */

test("every discovery destination is an indexed, existing page", () => {
  const indexed = new Set(payload.documents.map((document) => document.url));
  for (const href of ALL_DISCOVERY_HREFS) {
    assert.ok(STATIC_ROUTES.has(href), `discovery destination ${href} is not a route`);
    assert.ok(indexed.has(href), `discovery destination ${href} is not indexed`);
  }
});

test("no discovery copy claims popularity the site cannot measure", async () => {
  const source = fs.readFileSync(
    path.join(REPO_ROOT, "src", "lib", "search", "discovery.ts"),
    "utf8",
  );
  // FaunaHub has no first-party traffic data in the client, so these words
  // would be assertions nobody measured.
  for (const banned of ["Trending", "Popular", "Most searched", "Top searches"]) {
    assert.equal(
      new RegExp(`label:\\s*["'\`][^"'\`]*${banned}`, "i").test(source),
      false,
      `discovery copy claims "${banned}" without data to support it`,
    );
  }
});

/* ------------------------------------------------------------------ *
 * SEO safety
 * ------------------------------------------------------------------ */

test("the search page is noindex, follow — and absent from the sitemap", () => {
  const page = fs.readFileSync(path.join(APP_DIR, "search", "page.tsx"), "utf8");
  assert.match(page, /noindexFollow:\s*true/, "/search does not set noindexFollow");

  const metadata = fs.readFileSync(path.join(REPO_ROOT, "src", "lib", "metadata.ts"), "utf8");
  assert.match(
    metadata,
    /noindexFollow[\s\S]*index:\s*false[\s\S]*follow:\s*true[\s\S]*googleBot/,
    "noindexFollow must set an explicit googleBot block, or the root layout's overrides it",
  );

  const sitemap = fs.readFileSync(path.join(APP_DIR, "sitemap.ts"), "utf8");
  assert.doesNotMatch(sitemap, /\/search/, "a noindex page must never be in the sitemap");
});

test("the sitemap never gains a query-string url", () => {
  const sitemap = fs.readFileSync(path.join(APP_DIR, "sitemap.ts"), "utf8");
  assert.doesNotMatch(sitemap, /url:\s*[`"'][^`"']*\?/, "sitemap contains a query-string URL");
});

/* ------------------------------------------------------------------ *
 * Payload budget and freshness
 * ------------------------------------------------------------------ */

test("the index stays inside its performance budget", () => {
  const rawBytes = Buffer.byteLength(raw);
  const gzipBytes = zlib.gzipSync(Buffer.from(raw), { level: 9 }).length;
  assert.ok(
    rawBytes <= MAX_RAW_BYTES,
    `index is ${(rawBytes / 1024).toFixed(0)} KB raw, budget is ${MAX_RAW_BYTES / 1024} KB`,
  );
  assert.ok(
    gzipBytes <= MAX_GZIP_BYTES,
    `index is ${(gzipBytes / 1024).toFixed(0)} KB gzipped, budget is ${MAX_GZIP_BYTES / 1024} KB`,
  );
});

test("the committed index matches what the generator produces today", () => {
  // The whole architecture rests on the index being derived, not maintained.
  // This is the test that proves it still is.
  execFileSync("node", ["scripts/generate-search-index.mjs", "--check"], {
    cwd: REPO_ROOT,
    stdio: "pipe",
  });
});
