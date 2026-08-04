/**
 * Batch-three animal profiles: route, source, image, licence and wiring tests.
 *
 * These five profiles (rat, damselfly, osprey, rook, mule) exist to unlock
 * Compare Center comparisons. The batch-two suite already covers the licence
 * and image-integrity ground, so the tests here repeat that for the new files
 * and add the checks that the batch-two review found missing the first time
 * round: a profile can be perfectly written and still be worthless if nothing
 * links to it, if the sitemap never emits it, or if the Compare Center's own
 * registry cannot see it.
 *
 * The final group guards specific factual corrections made during review. They
 * are deliberately narrow — each one pins a claim that was wrong once, so a
 * later edit cannot quietly reintroduce it.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

import { COMPARE_BATCH_THREE_IMAGES } from "../src/lib/images/compare-batch-three-images.ts";
import { ANIMAL_SOURCES } from "../src/lib/educational/animal-sources.ts";
import { COMPARE_ANIMALS } from "../src/lib/animal-compare/animals.ts";

const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const APP_DIR = path.join(REPO_ROOT, "src", "app");
const SRC_DIR = path.join(REPO_ROOT, "src");
const PUBLIC_DIR = path.join(REPO_ROOT, "public");

const NEW_PROFILES = ["rat", "damselfly", "osprey", "rook", "mule"];

/** Licences FaunaHub editorial policy permits. Anything else is a hard fail. */
const ALLOWED_LICENCE = /^(Public domain|CC0 1\.0|CC BY(-SA)? \d\.\d( \w+)?)$/;

function profileSource(slug: string): string {
  return fs.readFileSync(path.join(APP_DIR, "animals", slug, "page.tsx"), "utf8");
}

/** Every .ts/.tsx file under src/, used for whole-repo link sweeps. */
function allSourceFiles(dir = SRC_DIR, acc: string[] = []): string[] {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) allSourceFiles(full, acc);
    else if (/\.tsx?$/.test(entry.name)) acc.push(full);
  }
  return acc;
}

/* ------------------------------------------------------------------ *
 * Routes and slugs
 * ------------------------------------------------------------------ */

test("every batch-three profile route exists", () => {
  for (const slug of NEW_PROFILES) {
    const file = path.join(APP_DIR, "animals", slug, "page.tsx");
    assert.ok(fs.existsSync(file), `missing route: /animals/${slug}`);
  }
});

test("batch three introduced no scientific-name collision", () => {
  const KNOWN_SHARED = new Set(["cyprinus carpio", "phycodurus eques"]);
  const dirs = fs.readdirSync(path.join(APP_DIR, "animals"));
  const byName = new Map<string, string[]>();
  for (const dir of dirs) {
    const file = path.join(APP_DIR, "animals", dir, "page.tsx");
    if (!fs.existsSync(file)) continue;
    const match = fs.readFileSync(file, "utf8").match(/scientificName="([^"]+)"/);
    if (!match) continue;
    const name = match[1].trim().toLowerCase();
    if (!/^[a-z]+ [a-z]+$/.test(name)) continue;
    if (!byName.has(name)) byName.set(name, []);
    byName.get(name)!.push(dir);
  }
  const offending = [...byName.entries()]
    .filter(([name, v]) => v.length > 1 && !KNOWN_SHARED.has(name))
    .filter(([, v]) => v.some((d) => NEW_PROFILES.includes(d)));
  assert.deepEqual(offending, [], "batch three duplicated an existing binomial");
});

/* ------------------------------------------------------------------ *
 * Discoverability — the batch-two review's blind spot
 * ------------------------------------------------------------------ */

test("every batch-three profile is listed in the sitemap source", () => {
  const sitemap = fs.readFileSync(path.join(APP_DIR, "sitemap.ts"), "utf8");
  for (const slug of NEW_PROFILES) {
    assert.ok(sitemap.includes(`"${slug}"`), `${slug} is not in the sitemap slug list`);
  }
});

test("no batch-three profile is an orphan — each has an inbound link", () => {
  // The image registry records a pagePath for every profile, so it always
  // "links" to the page without making it reachable. It is excluded here so a
  // page that is only referenced by its own image rows still counts as orphaned.
  const files = allSourceFiles().filter(
    (f) =>
      !f.includes(path.join("images", "compare-batch-three-images.ts")) &&
      !NEW_PROFILES.some((s) => f.endsWith(path.join("animals", s, "page.tsx"))),
  );
  for (const slug of NEW_PROFILES) {
    const needle = `/animals/${slug}"`;
    const linkers = files.filter((f) => fs.readFileSync(f, "utf8").includes(needle));
    assert.ok(linkers.length > 0, `/animals/${slug} has no inbound internal link`);
  }
});

test("every batch-three profile appears in its parent encyclopedia hub", () => {
  const hubs: Record<string, string> = {
    rat: "mammals",
    mule: "mammals",
    osprey: "birds",
    rook: "birds",
    damselfly: "insects",
  };
  for (const [slug, hub] of Object.entries(hubs)) {
    const source = fs.readFileSync(
      path.join(APP_DIR, "animal-encyclopedia", hub, "page.tsx"),
      "utf8",
    );
    assert.ok(
      source.includes(`/animals/${slug}"`),
      `/animal-encyclopedia/${hub} does not list ${slug}`,
    );
  }
});

test("the Compare Center registry can see every batch-three profile", () => {
  for (const slug of NEW_PROFILES) {
    const entry = COMPARE_ANIMALS.find((a) => a.slug === slug);
    assert.ok(entry, `COMPARE_ANIMALS has no row for ${slug}`);
    assert.equal(entry!.profilePath, `/animals/${slug}`);
    assert.equal(entry!.profileKind, "profile");
  }
});

test("the taxonomy coverage layer no longer advertises these as missing", () => {
  // A shipped profile that is still listed under priorityMissingExamples renders
  // publicly on /animal-taxonomy/missing-animals as a gap that no longer exists.
  const groups = fs.readFileSync(
    path.join(SRC_DIR, "lib", "taxonomy", "animal-groups.ts"),
    "utf8",
  );
  for (const match of groups.matchAll(/priorityMissingExamples: \[([^\]]*)\]/g)) {
    for (const slug of NEW_PROFILES) {
      assert.equal(
        match[1].includes(`"${slug}"`),
        false,
        `${slug} is still listed as a missing animal`,
      );
    }
  }
});

/* ------------------------------------------------------------------ *
 * Sources
 * ------------------------------------------------------------------ */

test("every batch-three profile has at least three sources", () => {
  for (const slug of NEW_PROFILES) {
    const sources = ANIMAL_SOURCES[slug];
    assert.ok(sources, `no ANIMAL_SOURCES entry for ${slug}`);
    assert.ok(sources.length >= 3, `${slug} has only ${sources.length} sources`);
    for (const source of sources) {
      assert.ok(source.url.startsWith("https://"), `${slug}: non-HTTPS source ${source.url}`);
      assert.ok(source.label.trim().length > 0, `${slug}: unlabelled source`);
    }
  }
});

test("no source points at a disallowed publisher type", () => {
  const banned =
    /(petco|petsmart|chewy|breeder|amazon\.|ebay\.|facebook\.|instagram\.|pinterest\.|blogspot|wordpress\.com|medium\.com)/i;
  for (const slug of NEW_PROFILES) {
    for (const source of ANIMAL_SOURCES[slug] ?? []) {
      assert.equal(banned.test(source.url), false, `${slug}: disallowed source ${source.url}`);
    }
  }
});

test("a profile that routes readers to the IUCN Red List also cites it", () => {
  // The damselfly page sent readers to the Red List three times without an IUCN
  // entry in its source list, so the instruction was unfollowable.
  for (const slug of NEW_PROFILES) {
    const source = profileSource(slug);
    if (!/iucnredlist\.org|IUCN Red List/i.test(source)) continue;
    const cites = (ANIMAL_SOURCES[slug] ?? []).some((s) => /iucnredlist\.org/i.test(s.url));
    assert.ok(cites, `${slug} routes to the Red List but does not cite it`);
  }
});

test("the mule cites a reference about mules, not only about its parent species", () => {
  // A mule is a hybrid, so the species-indexed databases have no mule account.
  // Without a mule-specific reference every figure on the page is uncheckable.
  const sources = ANIMAL_SOURCES.mule ?? [];
  assert.ok(
    sources.some((s) => /mule/i.test(s.url) || /mule/i.test(s.label)),
    "ANIMAL_SOURCES.mule has no mule-specific reference",
  );
});

/* ------------------------------------------------------------------ *
 * Images
 * ------------------------------------------------------------------ */

test("each batch-three profile has exactly one hero and at least one gallery image", () => {
  for (const slug of NEW_PROFILES) {
    const mine = COMPARE_BATCH_THREE_IMAGES.filter((i) => i.animalSlug === slug);
    const heroes = mine.filter((i) => i.role === "hero");
    const gallery = mine.filter((i) => i.role === "gallery");
    assert.equal(heroes.length, 1, `${slug} has ${heroes.length} hero images`);
    assert.ok(gallery.length >= 1, `${slug} has no gallery image`);
  }
});

test("image ids, local paths and source URLs are unique", () => {
  const ids = COMPARE_BATCH_THREE_IMAGES.map((i) => i.id);
  const paths = COMPARE_BATCH_THREE_IMAGES.map((i) => i.localPath);
  const urls = COMPARE_BATCH_THREE_IMAGES.map((i) => i.sourceUrl);
  assert.equal(new Set(ids).size, ids.length, "duplicate image id");
  assert.equal(new Set(paths).size, paths.length, "duplicate local path");
  assert.equal(new Set(urls).size, urls.length, "duplicate source URL");
});

test("every image file exists, is a real WebP, and no raw original was committed", () => {
  for (const image of COMPARE_BATCH_THREE_IMAGES) {
    const abs = path.join(PUBLIC_DIR, image.localPath);
    assert.ok(fs.existsSync(abs), `missing file: ${image.localPath}`);
    assert.ok(image.localPath.endsWith(".webp"), `not webp: ${image.localPath}`);
    const fd = fs.openSync(abs, "r");
    const head = Buffer.alloc(12);
    fs.readSync(fd, head, 0, 12, 0);
    fs.closeSync(fd);
    assert.equal(head.toString("ascii", 0, 4), "RIFF", `bad header: ${image.localPath}`);
    assert.equal(head.toString("ascii", 8, 12), "WEBP", `bad header: ${image.localPath}`);
  }
  for (const slug of NEW_PROFILES) {
    const dir = path.join(PUBLIC_DIR, "images", "animals", slug);
    if (!fs.existsSync(dir)) continue;
    for (const file of fs.readdirSync(dir)) {
      assert.ok(file.endsWith(".webp"), `raw original committed: ${slug}/${file}`);
    }
  }
});

test("every image licence is on the allowed list", () => {
  for (const image of COMPARE_BATCH_THREE_IMAGES) {
    assert.match(image.license, ALLOWED_LICENCE, `${image.id}: licence "${image.license}"`);
    assert.equal(/-NC|-ND|noncommercial|noderiv|GFDL/i.test(image.license), false, image.id);
    assert.equal(image.commercialUseAllowed, true, `${image.id}: commercial use not allowed`);
    assert.equal(image.modificationsAllowed, true, `${image.id}: modifications not allowed`);
  }
});

test("every image has a named author and a usable attribution line", () => {
  for (const image of COMPARE_BATCH_THREE_IMAGES) {
    assert.ok(image.author.trim().length > 0, `${image.id}: empty author`);
    assert.ok(image.attribution.includes(image.license), `${image.id}: attribution omits licence`);
    if (/^CC BY/i.test(image.license)) {
      assert.equal(image.attributionRequired, true, `${image.id}: CC BY needs attribution`);
      assert.ok(image.licenseUrl.startsWith("https://"), `${image.id}: missing licence URL`);
    }
  }
});

test("every image has descriptive alt text and a caption", () => {
  for (const image of COMPARE_BATCH_THREE_IMAGES) {
    assert.ok(image.alt.trim().split(/\s+/).length >= 8, `${image.id}: alt text too short`);
    assert.ok(image.caption.trim().split(/\s+/).length >= 6, `${image.id}: caption too short`);
    assert.notEqual(image.alt.trim(), image.caption.trim(), `${image.id}: alt duplicates caption`);
  }
});

test("captive, domestic and feral contexts are disclosed in risk notes", () => {
  for (const image of COMPARE_BATCH_THREE_IMAGES) {
    assert.match(
      image.riskNotes,
      /(Wild animal\.|Photographed under human care\.|Domestic animal\.|Feral \(introduced\) population\.)/,
      `${image.id}: risk notes do not state the setting`,
    );
  }
});

test("recorded image dimensions are plausible and within the 1600px cap", () => {
  for (const image of COMPARE_BATCH_THREE_IMAGES) {
    assert.ok(image.width > 0 && image.height > 0, `${image.id}: zero dimension`);
    assert.ok(image.width <= 1600, `${image.id}: width ${image.width} exceeds cap`);
    assert.ok(image.height <= 1600, `${image.id}: height ${image.height} exceeds cap`);
    const ratio = image.width / image.height;
    assert.ok(ratio > 0.35 && ratio < 3, `${image.id}: extreme aspect ratio ${ratio.toFixed(2)}`);
  }
});

test("every image page path matches its animal slug", () => {
  for (const image of COMPARE_BATCH_THREE_IMAGES) {
    assert.equal(image.pagePath, `/animals/${image.animalSlug}`, image.id);
    assert.ok(
      image.localPath.startsWith(`/images/animals/${image.animalSlug}/`),
      `${image.id}: local path does not match slug`,
    );
  }
});

/* ------------------------------------------------------------------ *
 * Profile content boundaries
 * ------------------------------------------------------------------ */

test("no batch-three profile contains care, veterinary or purchase guidance", () => {
  const banned = [
    /\bbest pet\b/i,
    /\bperfect pet\b/i,
    /\blow[- ]maintenance\b/i,
    /\bgood for beginners\b/i,
    /\bcage should be\b/i,
    /\benclosure should be\b/i,
    /\bfeed (them |it )?\d/i,
    /\b\d+\s*(mg|ml)\s*(per|\/)\s*(kg|lb)/i,
    /\bwho would win\b/i,
    /\bbite force\b/i,
  ];
  for (const slug of NEW_PROFILES) {
    const source = profileSource(slug);
    for (const pattern of banned) {
      assert.equal(pattern.test(source), false, `${slug} matches ${pattern}`);
    }
  }
});

test("the rat profile carries no pest-control instruction", () => {
  // Rats are the archetypal pest-control search, so this page is the one most
  // likely to drift from natural history into control advice.
  const banned = [
    /how to (get rid|kill|trap|catch|poison|remove)/i,
    /\brodenticide\b/i,
    /\bbait station\b/i,
    /\bsnap trap\b/i,
    /\bglue trap\b/i,
    /\bexterminat/i,
    /\bseal (up )?entry\b/i,
  ];
  const source = profileSource("rat");
  for (const pattern of banned) {
    assert.equal(pattern.test(source), false, `rat profile matches ${pattern}`);
  }
});

test("every relatedLinks href in a batch-three profile resolves", () => {
  const redListSource = fs.readFileSync(
    path.join(SRC_DIR, "lib", "red-list", "profiles.ts"),
    "utf8",
  );
  for (const slug of NEW_PROFILES) {
    const source = profileSource(slug);
    for (const match of source.matchAll(/href: "(\/[^"]+)"/g)) {
      const href = match[1];
      const dynamic = href.match(/^\/endangered-animals\/species\/([a-z0-9-]+)$/);
      if (dynamic) {
        assert.ok(
          new RegExp(`["']?${dynamic[1]}["']?\\s*:\\s*\\{`).test(redListSource),
          `${slug} links to missing Red List profile ${href}`,
        );
        continue;
      }
      const target = path.join(APP_DIR, href.replace(/^\//, ""), "page.tsx");
      assert.ok(fs.existsSync(target), `${slug} links to missing route ${href}`);
    }
  }
});

/* ------------------------------------------------------------------ *
 * Factual corrections made during review
 *
 * Each test below pins a claim that was wrong in the first draft. They exist so
 * a later rewrite cannot silently restore the error.
 * ------------------------------------------------------------------ */

test("the osprey is not described as breeding on every continent", () => {
  // It OCCURS on every continent except Antarctica, but South America holds
  // non-breeding birds only. The page contradicted its own range section.
  const source = profileSource("osprey");
  assert.equal(
    /breed(s|ing)? on every continent/i.test(source),
    false,
    "osprey page claims it breeds on every continent",
  );
  assert.ok(
    /non-breeding/i.test(source) && /South America/i.test(source),
    "osprey page does not qualify its South American status",
  );
});

test("the osprey is not described as unrelated to the accipitrids", () => {
  // Pandionidae is generally recovered as sister to Accipitridae, so the
  // accipitrids are the osprey's closest living relatives. "Not an eagle" is
  // right; "not a close relative" is not.
  const source = profileSource("osprey");
  assert.equal(
    /not a close relative of the eagles/i.test(source),
    false,
    "osprey page denies its closest living relationship",
  );
  assert.ok(/sister/i.test(source), "osprey page omits the sister-family relationship");
});

test("the rat profile does not attribute pouched-rat detection work to Rattus", () => {
  // Landmine and tuberculosis detection animals are Cricetomys, a genus this
  // same page lists as NOT Rattus.
  const source = profileSource("rat");
  if (/detection/i.test(source)) {
    assert.ok(
      /Cricetomys/.test(source),
      "rat page mentions detection work without naming Cricetomys",
    );
  }
});

test("the rat profile describes rodent incisor enamel the right way round", () => {
  // Enamel is on the ANTERIOR face with softer dentine behind; that differential
  // wear is what produces the self-sharpening chisel edge.
  const source = profileSource("rat");
  assert.equal(
    /backed by hard enamel/i.test(source),
    false,
    "rat page inverts incisor enamel anatomy",
  );
});

test("the rat profile does not repeat the collapsible-skeleton myth", () => {
  const source = profileSource("rat");
  assert.equal(
    /(flexible skeleton|slender collar bones|collapse its (skeleton|spine))/i.test(source) &&
      !/cannot collapse/i.test(source),
    false,
    "rat page attributes gap-passing to a collapsible skeleton",
  );
});

test("the rook profile does not place the jackdaw inside Corvus", () => {
  // Current major checklists place the western jackdaw in Coloeus.
  const source = profileSource("rook");
  assert.equal(
    /Within <em>Corvus<\/em>[^.]*jackdaw/i.test(source),
    false,
    "rook page lists the jackdaw as a Corvus congener",
  );
});

test("the damselfly profile does not claim all species have aquatic larvae", () => {
  // Some Hawaiian Megalagrion develop in damp terrestrial leaf litter.
  const source = profileSource("damselfly");
  assert.equal(
    /all of them beginning life as aquatic/i.test(source) &&
      !/nearly all of them beginning life as aquatic/i.test(source),
    false,
    "damselfly page states an absolute with known exceptions",
  );
});

test("the mule profile does not present a pseudo-binomial", () => {
  // The hybrid formula must use a multiplication sign, and the layout must not
  // italicise it, or the H1 asserts the species name the page spends two
  // paragraphs disowning.
  const source = profileSource("mule");
  assert.equal(/Equus asinus x Equus/i.test(source), false, "mule page uses an ASCII x");
  assert.equal(/Equus mulus/.test(source), false, "mule page cites an unsupported name");
  assert.ok(/Equus asinus × Equus caballus/.test(source), "mule page lacks the hybrid formula");
});

test("the mule profile's prose is not the donkey profile's prose", () => {
  // Two signature passages were reused phrase-for-phrase from /animals/donkey.
  const mule = profileSource("mule");
  const donkey = profileSource("donkey");
  for (const phrase of [
    "fermentation in an enlarged hindgut",
    "stop, look and assess",
    "headlong flight is dangerous",
    "until the situation resolves",
  ]) {
    assert.equal(
      mule.includes(phrase) && donkey.includes(phrase),
      false,
      `mule and donkey profiles share the phrase "${phrase}"`,
    );
  }
});
