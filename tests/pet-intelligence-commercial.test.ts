/**
 * Pet Intelligence — editorial / commercial separation.
 *
 * FaunaHub publishes no breed commerce today. These tests are written now, while
 * that is trivially true, because the moment a commercial sprint starts the
 * cheapest thing to do is add a `sponsored` flag to the breed record and sort
 * the Finder by it. The dependency direction below is what makes that require a
 * deliberate, visible change rather than a one-line convenience.
 *
 * The rule: a merchant relationship must be structurally incapable of reaching
 * a breed fact. The registry may not import the commercial module; only the
 * reverse is allowed.
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";

import { BREEDS } from "../src/lib/pet-intelligence/index.ts";
import {
  BREED_COMMERCIAL_CONTEXT,
  COMMERCE_ENABLED,
  COMMERCIAL_CATEGORIES,
  COMMERCIAL_RELEVANCE_RULES,
  SERVICE_CATEGORIES,
} from "../src/lib/pet-intelligence/commercial.ts";

const REPO_ROOT = path.resolve(import.meta.dirname, "..");
const PI_DIR = path.join(REPO_ROOT, "src", "lib", "pet-intelligence");

function libFiles(): string[] {
  const out: string[] = [];
  const walk = (dir: string) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith(".ts")) out.push(full);
    }
  };
  walk(PI_DIR);
  return out;
}

test("commerce is off and no commercial context is published", () => {
  assert.equal(COMMERCE_ENABLED, false);
  assert.deepEqual([...BREED_COMMERCIAL_CONTEXT], []);
});

test("the registry never imports the commercial module", () => {
  // One-directional by construction. If this fails, a breed fact can be
  // computed from a merchant relationship.
  for (const file of libFiles()) {
    if (path.basename(file) === "commercial.ts") continue;
    const source = fs.readFileSync(file, "utf8");
    const imports = [...source.matchAll(/from\s+"([^"]+)"/g)].map((m) => m[1]);
    for (const spec of imports) {
      assert.ok(
        !spec.includes("commercial"),
        `${path.relative(REPO_ROOT, file)} imports the commercial module`,
      );
    }
  }
});

test("no breed record carries a commercial field", () => {
  const FORBIDDEN = /sponsor|affiliate|merchant|price|product|partner|promoted|advertis/i;
  for (const breed of BREEDS) {
    for (const key of Object.keys(breed)) {
      assert.doesNotMatch(key, FORBIDDEN, `${breed.id} has commercial field "${key}"`);
    }
  }
});

test("the commercial category vocabulary contains no brands or products", () => {
  // Categories are coarse nouns. A capitalised word or a registered mark is the
  // tell that a brand has arrived.
  for (const list of [...Object.values(COMMERCIAL_CATEGORIES), SERVICE_CATEGORIES]) {
    for (const category of list) {
      assert.match(category, /^[a-z][a-z-]*$/, `"${category}" is not a plain lowercase category`);
      assert.doesNotMatch(category, /®|™/, `"${category}" looks like a brand`);
    }
  }
});

test("no product category covers a subject FaunaHub refuses to monetise", () => {
  const REFUSED = /medicat|supplement|drug|vet|breeder|insurance-quote|pharmac/i;
  for (const list of [...Object.values(COMMERCIAL_CATEGORIES), SERVICE_CATEGORIES]) {
    for (const category of list) {
      assert.doesNotMatch(category, REFUSED, `"${category}" is a category FaunaHub will not rank`);
    }
  }
});

test("no breed-facing surface renders an affiliate link or a commercial block", () => {
  const surfaces = [
    "src/components/breeds/BreedAttributes.tsx",
    "src/components/breeds/BreedProfileView.tsx",
    "src/components/breeds/BreedProfileGrid.tsx",
    "src/app/dogs/breed-finder/BreedFinderClient.tsx",
    "src/app/dogs/breed-finder/page.tsx",
    "src/app/cats/breed-finder/page.tsx",
    "src/app/dogs/breeds/[slug]/page.tsx",
    "src/app/cats/breeds/[slug]/page.tsx",
  ];
  for (const file of surfaces) {
    const source = fs.readFileSync(path.join(REPO_ROOT, file), "utf8");
    assert.doesNotMatch(
      source,
      /rel="[^"]*sponsored|affiliate|utm_|tag=|amzn|commission/i,
      `${file} carries a commercial link`,
    );
  }
});

test("the Finder cannot be ordered by anything but the breed name", () => {
  // Ordering is the surface a future sponsor would buy first. It is a plain
  // alphabetical sort with no score, weight or priority anywhere near it.
  const source = fs.readFileSync(
    path.join(REPO_ROOT, "src/app/dogs/breed-finder/BreedFinderClient.tsx"),
    "utf8",
  );
  const sorts = [...source.matchAll(/\.sort\(([\s\S]*?)\);/g)].map((m) => m[1]);
  assert.ok(sorts.length > 0, "the Finder no longer sorts its results");
  for (const sort of sorts) {
    assert.match(sort, /localeCompare/, "Finder sorts by something other than name");
    assert.doesNotMatch(sort, /score|weight|priority|rank|sponsor/i, "Finder sort is weighted");
  }
});

test("the commercial module documents the one-way rule it depends on", () => {
  const source = fs.readFileSync(path.join(PI_DIR, "commercial.ts"), "utf8");
  assert.match(source, /never import/i, "the direction rule is no longer written down");
});

test("commercial relevance rules derive from recorded registry values only", () => {
  // The rules describe WHICH recorded value implies a category. If a rule ever
  // cites something FaunaHub does not record, the mapping would need a human to
  // assign it per breed — which is exactly where an advertiser's influence
  // would enter a system that is otherwise derived.
  const RECORDED = /coat|size band|exercise needs|grooming needs|shedding|vocality|trainability|every cat breed|registry/i;
  for (const rule of COMMERCIAL_RELEVANCE_RULES) {
    assert.match(rule.reason, RECORDED, `rule for "${rule.category}" cites something unrecorded`);
    assert.ok(
      COMMERCIAL_CATEGORIES[rule.species].includes(rule.category),
      `rule cites "${rule.category}", which is not in the ${rule.species} vocabulary`,
    );
  }
});

test("no commercial rule targets a subject FaunaHub refuses to monetise", () => {
  const REFUSED = /medicat|supplement|drug|vet|breeder|health|diet plan|treatment/i;
  for (const rule of COMMERCIAL_RELEVANCE_RULES) {
    assert.doesNotMatch(rule.category, REFUSED);
    assert.doesNotMatch(rule.reason, /health|medical|treat/i, `rule for "${rule.category}" reaches into health`);
  }
});
