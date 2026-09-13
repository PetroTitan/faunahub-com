/**
 * Pet Intelligence — breed data shards and their generated index.
 *
 * Breed records live one-per-file so the corpus can reach several hundred
 * without a 29,000-line module. That splits one hazard into two: a data file
 * nothing imports, and an index entry with no data file. Either is invisible at
 * runtime — the site builds, renders and passes every other test while quietly
 * omitting a breed.
 *
 * These assert the directory and the generated index describe exactly the same
 * set, in both directions.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

import { DOG_BREED_RECORDS, CAT_BREED_RECORDS } from "../src/lib/pet-intelligence/index.ts";

const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const BREEDS_DIR = path.join(REPO_ROOT, "src/lib/pet-intelligence/breeds");

function shardSlugs(dir: string): string[] {
  return fs
    .readdirSync(path.join(BREEDS_DIR, dir))
    .filter((f) => f.endsWith(".ts") && f !== "index.ts")
    .map((f) => f.replace(/\.ts$/, ""))
    .sort();
}

for (const [dir, records] of [
  ["dogs", DOG_BREED_RECORDS],
  ["cats", CAT_BREED_RECORDS],
] as const) {
  test(`${dir}: every data file is loaded by the registry, and vice versa`, () => {
    const onDisk = shardSlugs(dir);
    const loaded = records.map((b) => b.slug).sort();
    assert.deepEqual(
      loaded,
      onDisk,
      `${dir}: the registry and the data directory disagree — run \`npm run breeds:index\``,
    );
  });

  test(`${dir}: every data file's name matches the slug inside it`, () => {
    for (const slug of shardSlugs(dir)) {
      const source = fs.readFileSync(path.join(BREEDS_DIR, dir, `${slug}.ts`), "utf8");
      const declared = source.match(/^\s*slug: "([^"]+)",$/m)?.[1];
      assert.equal(declared, slug, `${dir}/${slug}.ts declares slug "${declared}"`);
      assert.match(
        source,
        /export const breed: Breed =/,
        `${dir}/${slug}.ts must export \`const breed: Breed\``,
      );
    }
  });

  test(`${dir}/index.ts is generated, not hand-edited`, () => {
    const source = fs.readFileSync(path.join(BREEDS_DIR, dir, "index.ts"), "utf8");
    assert.match(source, /GENERATED FILE — do not edit by hand/);
    // Every import must resolve to a file that exists.
    const imported = [...source.matchAll(/from "\.\/([^"]+)\.ts"/g)].map((m) => m[1]);
    for (const slug of imported) {
      assert.ok(
        fs.existsSync(path.join(BREEDS_DIR, dir, `${slug}.ts`)),
        `${dir}/index.ts imports ${slug}.ts, which does not exist`,
      );
    }
    assert.equal(
      imported.length,
      shardSlugs(dir).length,
      `${dir}/index.ts imports ${imported.length} files but ${shardSlugs(dir).length} exist`,
    );
  });
}

test("no breed data file sits in the wrong species directory", () => {
  for (const [dir, species] of [
    ["dogs", "dog"],
    ["cats", "cat"],
  ] as const) {
    for (const slug of shardSlugs(dir)) {
      const source = fs.readFileSync(path.join(BREEDS_DIR, dir, `${slug}.ts`), "utf8");
      assert.match(
        source,
        new RegExp(`species: "${species}"`),
        `${dir}/${slug}.ts is not a ${species} record`,
      );
    }
  }
});

test("the old single-module breed files are gone", () => {
  // They would still compile and still be importable, so an edit could land in
  // a module nothing reads.
  for (const stale of ["dogs.ts", "cats.ts"]) {
    assert.ok(
      !fs.existsSync(path.join(BREEDS_DIR, stale)),
      `breeds/${stale} is back; the registry reads breeds/${stale.replace(".ts", "")}/index.ts`,
    );
  }
});
