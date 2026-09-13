/**
 * Design polish + animal expansion wave — coverage and consistency tests.
 *
 * Runs on Node's built-in test runner with native TypeScript type-stripping:
 *
 *   npm run test
 *
 * The wave that added these profiles exposed one silent failure mode worth
 * guarding permanently: `src/app/sitemap.ts` keeps its animal list as a
 * hand-written array, so 62 new profiles built, indexed and rendered correctly
 * while being absent from the sitemap. Nothing failed — the sitemap was simply
 * 62 URLs short. The first test below is that guard.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

import { COMPARE_ANIMALS } from "../src/lib/animal-compare/index.ts";
import { SCIENTIFIC_NAMES } from "../src/lib/animal-compare/scientific-names.ts";
import { ANIMAL_SOURCES } from "../src/lib/educational/animal-sources.ts";
import { EXPANSION_WAVE_IMAGES } from "../src/lib/images/expansion-wave-images.ts";
import { getAnimalImage } from "../src/lib/images/animal-images.ts";

const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const ANIMALS_DIR = path.join(REPO_ROOT, "src", "app", "animals");
const PUBLIC_DIR = path.join(REPO_ROOT, "public");

const profileSlugs = fs
  .readdirSync(ANIMALS_DIR)
  .filter((slug) => fs.existsSync(path.join(ANIMALS_DIR, slug, "page.tsx")))
  .sort();

/** The slugs added by this wave — read from the image module they all share. */
const waveSlugs = EXPANSION_WAVE_IMAGES.map((image) => image.animalSlug).sort();

function sitemapAnimalSlugs(): string[] {
  const source = fs.readFileSync(path.join(REPO_ROOT, "src", "app", "sitemap.ts"), "utf8");
  const start = source.indexOf("const animalSlugs = [");
  assert.notEqual(start, -1, "sitemap.ts no longer declares animalSlugs");
  const end = source.indexOf("\n  ];", start);
  assert.notEqual(end, -1, "could not find the end of the animalSlugs array");
  return [...source.slice(start, end).matchAll(/^\s*"([a-z0-9-]+)",/gm)].map((m) => m[1]);
}

test("the sitemap lists exactly the animal profiles that exist", () => {
  const listed = sitemapAnimalSlugs();
  assert.equal(
    new Set(listed).size,
    listed.length,
    "sitemap.ts repeats an animal slug, which would emit a duplicate <loc>",
  );
  const missing = profileSlugs.filter((slug) => !listed.includes(slug));
  const orphaned = listed.filter((slug) => !profileSlugs.includes(slug));
  assert.deepEqual(
    missing,
    [],
    `these /animals profiles exist but are absent from sitemap.ts: ${missing.join(", ")}`,
  );
  assert.deepEqual(
    orphaned,
    [],
    `sitemap.ts lists animals with no profile directory: ${orphaned.join(", ")}`,
  );
});

test("every animal profile is registered in the animal roster", () => {
  const roster = new Set(COMPARE_ANIMALS.map((animal) => animal.slug));
  const missing = profileSlugs.filter((slug) => !roster.has(slug));
  assert.deepEqual(
    missing,
    [],
    `profiles absent from COMPARE_ANIMALS get thin search documents: ${missing.join(", ")}`,
  );
});

test("the expansion wave added the profiles it claims to", () => {
  assert.equal(waveSlugs.length, 62);
  assert.equal(new Set(waveSlugs).size, waveSlugs.length, "duplicate slug in the wave");
  for (const slug of waveSlugs) {
    assert.ok(profileSlugs.includes(slug), `${slug}: no profile directory`);
  }
});

test("every new profile carries a verified hero image on disk", () => {
  for (const slug of waveSlugs) {
    const image = getAnimalImage(slug);
    assert.ok(image, `${slug}: no image resolves through the registry`);
    const file = path.join(PUBLIC_DIR, image.localPath.replace(/^\//, ""));
    assert.ok(fs.existsSync(file), `${slug}: ${image.localPath} is not on disk`);
    assert.ok(fs.statSync(file).size > 5_000, `${slug}: image file is implausibly small`);
  }
});

test("no new image uses a licence FaunaHub cannot ship", () => {
  // NC, ND and GFDL-only files are excluded by editorial policy; anything that
  // is not clearly one of the permitted licences is a defect, not a judgement
  // call to make at render time.
  const permitted = /^(cc0|cc by(-sa)?(\s\d(\.\d)?)?|public domain)$/i;
  for (const image of EXPANSION_WAVE_IMAGES) {
    assert.match(
      image.license,
      permitted,
      `${image.animalSlug}: licence "${image.license}" is not on the permitted list`,
    );
    assert.equal(image.commercialUseAllowed, true, `${image.animalSlug}: non-commercial licence`);
    assert.equal(image.modificationsAllowed, true, `${image.animalSlug}: no-derivatives licence`);
    assert.ok(image.sourceUrl.startsWith("https://"), `${image.animalSlug}: no source URL`);
    assert.ok(image.alt.length > 20, `${image.animalSlug}: alt text is too thin to be useful`);
    assert.ok(image.caption.length > 10, `${image.animalSlug}: missing caption`);
    assert.ok(image.riskNotes.length > 20, `${image.animalSlug}: missing risk notes`);
  }
});

test("an aquarium or zoo photograph says so in its caption", () => {
  // A caption that implies a wild setting for a captive animal is a factual
  // claim the photograph does not support.
  for (const image of EXPANSION_WAVE_IMAGES) {
    const declaredCaptive = /photographed in (a|an) (aquarium|zoo)|aquarium|zoo/i.test(image.riskNotes);
    if (!declaredCaptive) continue;
    assert.match(
      image.caption,
      /aquarium|zoo/i,
      `${image.animalSlug}: risk notes record a captive setting the caption does not disclose`,
    );
  }
});

test("every new profile cites at least two sources, led by its own ADW account", () => {
  for (const slug of waveSlugs) {
    const sources = ANIMAL_SOURCES[slug];
    assert.ok(sources, `${slug}: no ANIMAL_SOURCES entry`);
    assert.ok(sources.length >= 2, `${slug}: only ${sources.length} source(s)`);
    assert.match(
      sources[0].url,
      /^https:\/\/animaldiversity\.org\/accounts\/[A-Za-z_]+\/$/,
      `${slug}: first source is not an ADW species account`,
    );
    for (const source of sources) {
      assert.ok(source.url.startsWith("https://"), `${slug}: insecure or missing source URL`);
      assert.ok(source.label.length > 5, `${slug}: source label too thin`);
    }
  }
});

test("no new profile introduces a duplicate scientific name", () => {
  // Two profiles sharing a binomial would mean the same species is published
  // twice under different common names.
  const byName = new Map<string, string[]>();
  for (const [slug, name] of Object.entries(SCIENTIFIC_NAMES)) {
    const key = name.toLowerCase().trim();
    // Rank-level names ("family Felidae") legitimately recur across group pages.
    if (/^(genus|family|order|class|tribe|subfamily|suborder)\s/i.test(key)) continue;
    byName.set(key, [...(byName.get(key) ?? []), slug]);
  }
  // Scoped to this wave. Two pre-existing collisions (carp/koi and
  // seadragon/leafy-seadragon) are deliberate editorial pairs — a domesticated
  // form beside its wild species, and a group page beside its reference
  // species — and re-litigating them is not this test's job. What must never
  // happen is a NEW profile republishing a species the site already has.
  const wave = new Set(waveSlugs);
  const collisions = [...byName.entries()]
    .filter(([, slugs]) => slugs.length > 1)
    .filter(([, slugs]) => slugs.some((slug) => wave.has(slug)));
  assert.deepEqual(
    collisions.map(([name, slugs]) => `${name}: ${slugs.join(" + ")}`),
    [],
    "a new profile publishes a species that already has one",
  );
});

test("no new profile carries unsafe animal advice", () => {
  // The site's editorial boundary: no first aid, no dosages, no handling,
  // capture, hunting or pest-control instructions.
  //
  // Checked a sentence at a time rather than across the whole file, because
  // these profiles deliberately NAME the things they refuse to provide —
  // "this profile gives no first-aid or treatment guidance" must stay legal
  // while an actual instruction must not. A refusal word anywhere in the same
  // sentence is what separates the two.
  const REFUSAL = /\b(no|not|never|without|refus|avoid|discourag|prohibit|illegal)/i;
  const banned: [RegExp, string][] = [
    [/\bhow to (treat|cure|remove|get rid of|catch|trap|kill)\b/i, "treatment or control instructions"],
    [/\bfirst[- ]aid\b/i, "first-aid guidance"],
    [/\b(apply|administer|give)\s+(a\s+)?(dose|dosage|\d+\s*(mg|ml))/i, "dosage guidance"],
    [/\bwho would win\b/i, "fight framing"],
    [/\bsafe to handle\b/i, "handling reassurance"],
    [/\bmakes? (a|an) (great|good|ideal) pet\b/i, "pet-suitability claim"],
    [/\byou should (feed|handle|catch|treat)\b/i, "direct instruction to the reader"],
  ];
  for (const slug of waveSlugs) {
    const source = fs.readFileSync(path.join(ANIMALS_DIR, slug, "page.tsx"), "utf8");
    // Strip JSX tags so markup never joins two sentences together.
    const prose = source.replace(/<[^>]*>/g, " ");
    for (const sentence of prose.split(/(?<=[.!?])\s+/)) {
      for (const [pattern, label] of banned) {
        if (!pattern.test(sentence)) continue;
        assert.ok(
          REFUSAL.test(sentence),
          `${slug}: ${label} without a refusal in the same sentence — "${sentence.trim().slice(0, 160)}"`,
        );
      }
    }
  }
});

test("every new profile links only to pages that exist", () => {
  const routeExists = (href: string) => {
    const clean = href.split("#")[0].replace(/^\//, "").replace(/\/$/, "");
    if (!clean) return true;
    const dir = path.join(REPO_ROOT, "src", "app", clean);
    if (fs.existsSync(path.join(dir, "page.tsx"))) return true;
    // Dynamic segments: a [slug] route one level up covers the child.
    const parent = path.dirname(dir);
    return (
      fs.existsSync(path.join(parent, "[slug]", "page.tsx")) ||
      fs.existsSync(path.join(dir, "[slug]", "page.tsx"))
    );
  };
  for (const slug of waveSlugs) {
    const source = fs.readFileSync(path.join(ANIMALS_DIR, slug, "page.tsx"), "utf8");
    for (const match of source.matchAll(/href: "(\/[^"]*)"/g)) {
      assert.ok(routeExists(match[1]), `${slug}: related link ${match[1]} has no route`);
    }
  }
});

/* ---------------------------------------------------------------------------
 * Global Search coverage for the new profiles.
 *
 * The expansion is only real if a reader can find these animals. These tests
 * run the shipped relevance engine over the committed index and assert that
 * each new profile is the top result for its own common name and for its own
 * scientific name, that near-miss typing still lands on the right page, and
 * that the names most easily confused with existing animals resolve to the
 * right one of the two.
 * ------------------------------------------------------------------------ */
import { createSearchEngine } from "../src/lib/search/engine.ts";
import type { SearchIndexPayload } from "../src/lib/search/types.ts";
import { expandDocuments } from "../src/lib/search/load-index.ts";

const searchPayload = expandDocuments(
  JSON.parse(
fs.readFileSync(path.join(REPO_ROOT, "public", "search-index.json"), "utf8"),
  ),
) as SearchIndexPayload;
const engine = createSearchEngine(searchPayload);
const topUrl = (query: string) => engine.search(query).results[0]?.document.url;

test("every new animal is the top result for its own common name", () => {
  const failures: string[] = [];
  for (const slug of waveSlugs) {
    const document = searchPayload.documents.find((d) => d.url === `/animals/${slug}`);
    assert.ok(document, `${slug}: absent from the search index`);
    const got = topUrl(document.title);
    if (got !== `/animals/${slug}`) failures.push(`${document.title} -> ${got}`);
  }
  assert.deepEqual(failures, [], "a new animal's own name does not return its profile first");
});

test("common-name queries a reader would actually type land on the profile", () => {
  const queries: [string, string][] = [
    ["narwhal", "/animals/narwhal"],
    ["sea otter", "/animals/sea-otter"],
    ["blue whale", "/animals/blue-whale"],
    ["reindeer", "/animals/reindeer"],
    ["groundhog", "/animals/groundhog"],
    ["bearded dragon", "/animals/bearded-dragon"],
    ["corn snake", "/animals/corn-snake"],
    ["leopard gecko", "/animals/leopard-gecko"],
    ["whale shark", "/animals/whale-shark"],
    ["jumping spider", "/animals/jumping-spider"],
    ["black widow", "/animals/black-widow"],
    ["atlas moth", "/animals/atlas-moth"],
  ];
  for (const [query, expected] of queries) {
    assert.equal(topUrl(query), expected, `"${query}" did not return ${expected} first`);
  }
});

test("scientific-name queries resolve to the right profile", () => {
  const queries: [string, string][] = [
    ["Monodon monoceros", "/animals/narwhal"],
    ["Enhydra lutris", "/animals/sea-otter"],
    ["Balaenoptera musculus", "/animals/blue-whale"],
    ["Rangifer tarandus", "/animals/reindeer"],
    ["Ovibos moschatus", "/animals/muskox"],
    ["Falco tinnunculus", "/animals/kestrel"],
    ["Sturnus vulgaris", "/animals/starling"],
    ["Pogona vitticeps", "/animals/bearded-dragon"],
    ["Eublepharis macularius", "/animals/leopard-gecko"],
    ["Rhincodon typus", "/animals/whale-shark"],
    ["Danio rerio", "/animals/zebrafish"],
    ["Physalia physalis", "/animals/portuguese-man-o-war"],
  ];
  for (const [query, expected] of queries) {
    assert.equal(topUrl(query), expected, `"${query}" did not return ${expected} first`);
  }
});

test("a near-miss spelling still finds the animal", () => {
  const queries: [string, string][] = [
    ["narwal", "/animals/narwhal"],
    ["reindeers", "/animals/reindeer"],
    ["muskox", "/animals/muskox"],
    ["cockateil", "/animals/cockatiel"],
    ["budgerigars", "/animals/budgerigar"],
  ];
  for (const [query, expected] of queries) {
    assert.equal(topUrl(query), expected, `"${query}" did not recover to ${expected}`);
  }
});

test("names that overlap an existing animal resolve to the right one", () => {
  // Each pair shares a word with an animal the site already published. A new
  // profile must not steal the plain query, and must win its own.
  const pairs: [string, string][] = [
    ["whale", "/animals/whale"],
    ["whale shark", "/animals/whale-shark"],
    ["shark", "/animals/shark"],
    ["tiger", "/animals/tiger"],
    ["tiger shark", "/animals/tiger-shark"],
    ["spider", "/animals/spider"],
    ["wolf spider", "/animals/wolf-spider"],
    ["wolf", "/animals/wolf"],
    ["frog", "/animals/frog"],
    ["common frog", "/animals/common-frog"],
    ["gecko", "/animals/gecko"],
    ["leopard", "/animals/leopard"],
    ["leopard gecko", "/animals/leopard-gecko"],
    ["ant", "/animals/ant"],
    ["fire ant", "/animals/fire-ant"],
  ];
  for (const [query, expected] of pairs) {
    assert.equal(topUrl(query), expected, `"${query}" resolved to the wrong animal`);
  }
});

test("the search index and the sitemap stay in step", () => {
  // Parity is the invariant that keeps the two from drifting: every indexed
  // document is a page the sitemap offers, and vice versa.
  const indexed = new Set(
    searchPayload.documents.filter((d) => d.url.startsWith("/animals/")).map((d) => d.url),
  );
  for (const slug of waveSlugs) {
    assert.ok(indexed.has(`/animals/${slug}`), `${slug}: indexed animal document missing`);
  }
  assert.equal(
    indexed.size,
    profileSlugs.length,
    "the number of indexed /animals documents no longer equals the number of profiles",
  );
});
