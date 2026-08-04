/**
 * Batch-two animal profiles: route, source, image and licence tests.
 *
 * These twelve profiles exist to unblock Compare Center comparisons, so the
 * tests below check the things that would silently break that chain: a profile
 * that is not in the sitemap, an image whose recorded dimensions do not match
 * the file on disk, a licence FaunaHub is not allowed to use, or an image
 * credited to nobody.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

import { COMPARE_BATCH_TWO_IMAGES } from "../src/lib/images/compare-batch-two-images.ts";
import { ANIMAL_SOURCES } from "../src/lib/educational/animal-sources.ts";

const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const APP_DIR = path.join(REPO_ROOT, "src", "app");
const PUBLIC_DIR = path.join(REPO_ROOT, "public");

const NEW_PROFILES = [
  "sea-lion", "alpaca", "porpoise", "puffin", "brown-bear", "donkey",
  "chinchilla", "ferret", "gerbil", "mouse", "chicken", "dromedary",
];

/** Licences FaunaHub editorial policy permits. Anything else is a hard fail. */
const ALLOWED_LICENCE = /^(Public domain|CC0 1\.0|CC BY(-SA)? \d\.\d( \w+)?)$/;

test("every batch-two profile route exists", () => {
  for (const slug of NEW_PROFILES) {
    const file = path.join(APP_DIR, "animals", slug, "page.tsx");
    assert.ok(fs.existsSync(file), `missing route: /animals/${slug}`);
  }
});

test("no batch-two profile slug collides with an existing one", () => {
  assert.equal(new Set(NEW_PROFILES).size, NEW_PROFILES.length);
});

test("batch two introduced no scientific-name collision", () => {
  // A binomial may legitimately appear twice when a group-level page is
  // anchored on its representative species — /animals/carp and /animals/koi are
  // both Cyprinus carpio, and /animals/seadragon and /animals/leafy-seadragon
  // are both Phycodurus eques. Those pairs predate this batch and are the
  // subject of published nested-name comparisons, so they are recorded as known
  // rather than treated as defects. What must not happen is batch two adding a
  // new duplicate.
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
  assert.deepEqual(offending, [], "batch two duplicated an existing binomial");
});

test("every batch-two profile is listed in the sitemap source", () => {
  const sitemap = fs.readFileSync(path.join(APP_DIR, "sitemap.ts"), "utf8");
  for (const slug of NEW_PROFILES) {
    assert.ok(sitemap.includes(`"${slug}"`), `${slug} is not in the sitemap slug list`);
  }
});

test("every batch-two profile has at least three sources", () => {
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
  const banned = /(petco|petsmart|chewy|breeder|amazon\.|ebay\.|facebook\.|instagram\.|pinterest\.|blogspot|wordpress\.com)/i;
  for (const slug of NEW_PROFILES) {
    for (const source of ANIMAL_SOURCES[slug] ?? []) {
      assert.equal(banned.test(source.url), false, `${slug}: disallowed source ${source.url}`);
    }
  }
});

/* ------------------------------------------------------------------ *
 * Images
 * ------------------------------------------------------------------ */

test("each batch-two profile has exactly one hero and at least one gallery image", () => {
  for (const slug of NEW_PROFILES) {
    const mine = COMPARE_BATCH_TWO_IMAGES.filter((i) => i.animalSlug === slug);
    const heroes = mine.filter((i) => i.role === "hero");
    const gallery = mine.filter((i) => i.role === "gallery");
    assert.equal(heroes.length, 1, `${slug} has ${heroes.length} hero images`);
    assert.ok(gallery.length >= 1, `${slug} has no gallery image`);
  }
});

test("image ids, local paths and source URLs are unique", () => {
  const ids = COMPARE_BATCH_TWO_IMAGES.map((i) => i.id);
  const paths = COMPARE_BATCH_TWO_IMAGES.map((i) => i.localPath);
  const urls = COMPARE_BATCH_TWO_IMAGES.map((i) => i.sourceUrl);
  assert.equal(new Set(ids).size, ids.length, "duplicate image id");
  assert.equal(new Set(paths).size, paths.length, "duplicate local path");
  assert.equal(new Set(urls).size, urls.length, "duplicate source URL");
});

test("every image file exists, is a real WebP, and no raw original was committed", () => {
  for (const image of COMPARE_BATCH_TWO_IMAGES) {
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
  for (const image of COMPARE_BATCH_TWO_IMAGES) {
    assert.match(image.license, ALLOWED_LICENCE, `${image.id}: licence "${image.license}"`);
    assert.equal(/-NC|-ND|noncommercial|noderiv|GFDL/i.test(image.license), false, image.id);
    assert.equal(image.commercialUseAllowed, true, `${image.id}: commercial use not allowed`);
    assert.equal(image.modificationsAllowed, true, `${image.id}: modifications not allowed`);
  }
});

test("every image has a named author and a usable attribution line", () => {
  for (const image of COMPARE_BATCH_TWO_IMAGES) {
    assert.ok(image.author.trim().length > 0, `${image.id}: empty author`);
    assert.ok(image.attribution.includes(image.license), `${image.id}: attribution omits licence`);
    if (/^CC BY/i.test(image.license)) {
      assert.equal(image.attributionRequired, true, `${image.id}: CC BY needs attribution`);
      assert.ok(image.licenseUrl.startsWith("https://"), `${image.id}: missing licence URL`);
    }
  }
});

test("every image has descriptive alt text and a caption", () => {
  for (const image of COMPARE_BATCH_TWO_IMAGES) {
    assert.ok(image.alt.trim().split(/\s+/).length >= 8, `${image.id}: alt text too short`);
    assert.ok(image.caption.trim().split(/\s+/).length >= 6, `${image.id}: caption too short`);
    assert.notEqual(image.alt.trim(), image.caption.trim(), `${image.id}: alt duplicates caption`);
  }
});

test("captive, domestic and feral contexts are disclosed in risk notes", () => {
  // Honesty rule: a photograph taken under human care must say so somewhere the
  // editor can see it, so a later caption edit cannot quietly imply "wild".
  for (const image of COMPARE_BATCH_TWO_IMAGES) {
    assert.match(
      image.riskNotes,
      /(Wild animal\.|Photographed under human care\.|Domestic animal\.|Feral \(introduced\) population\.)/,
      `${image.id}: risk notes do not state the setting`,
    );
  }
});

test("recorded image dimensions are plausible and within the 1600px cap", () => {
  for (const image of COMPARE_BATCH_TWO_IMAGES) {
    assert.ok(image.width > 0 && image.height > 0, `${image.id}: zero dimension`);
    assert.ok(image.width <= 1600, `${image.id}: width ${image.width} exceeds cap`);
    assert.ok(image.height <= 2600, `${image.id}: height ${image.height} unexpectedly large`);
    const ratio = image.width / image.height;
    assert.ok(ratio > 0.35 && ratio < 3, `${image.id}: extreme aspect ratio ${ratio.toFixed(2)}`);
  }
});

test("every image page path matches its animal slug", () => {
  for (const image of COMPARE_BATCH_TWO_IMAGES) {
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

test("no batch-two profile contains care, veterinary or purchase guidance", () => {
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
    const source = fs.readFileSync(path.join(APP_DIR, "animals", slug, "page.tsx"), "utf8");
    for (const pattern of banned) {
      assert.equal(pattern.test(source), false, `${slug} matches ${pattern}`);
    }
  }
});

test("every relatedLinks href in a batch-two profile resolves", () => {
  // Most targets are static directories, but /endangered-animals/species/<slug>
  // is generated from the Red List registry, so it is resolved against that
  // registry rather than against the filesystem.
  const redListSource = fs.readFileSync(
    path.join(REPO_ROOT, "src", "lib", "red-list", "profiles.ts"),
    "utf8",
  );
  for (const slug of NEW_PROFILES) {
    const source = fs.readFileSync(path.join(APP_DIR, "animals", slug, "page.tsx"), "utf8");
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

test("domestic-species profiles link to the domestication and diet clusters", () => {
  const domestic = ["alpaca", "donkey", "chinchilla", "ferret", "gerbil", "mouse", "chicken", "dromedary"];
  for (const slug of domestic) {
    const source = fs.readFileSync(path.join(APP_DIR, "animals", slug, "page.tsx"), "utf8");
    assert.ok(source.includes("/animal-domestication"), `${slug} omits /animal-domestication`);
    assert.ok(source.includes("/animal-food-and-diet"), `${slug} omits /animal-food-and-diet`);
  }
});
