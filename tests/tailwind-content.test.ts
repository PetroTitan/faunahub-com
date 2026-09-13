import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";

/**
 * Tailwind only generates a class it has SEEN in a scanned file.
 *
 * That makes `content` in tailwind.config.ts a correctness boundary, not a
 * performance setting — and a silent one. A class defined in an unscanned file
 * does not error, does not warn and does not render; it simply resolves to
 * nothing, so `bg-[#7A1F1F] text-white` becomes white text on a transparent
 * background. That shipped: nine IUCN status palettes defined in
 * src/lib/red-list/categories.ts were invisible on 367 pages.
 *
 * A test that checked those particular colours would protect only them. This
 * one asserts the RULE — every source file holding a Tailwind class string is
 * covered by a content glob — so the next data module to define a palette is
 * caught before it renders blank.
 */

const ROOT = new URL("..", import.meta.url).pathname;
const SRC = join(ROOT, "src");

/** Directories the config scans, derived from the config rather than restated. */
function scannedDirs(): string[] {
  const config = readFileSync(join(ROOT, "tailwind.config.ts"), "utf8");
  const content = config.slice(config.indexOf("content: ["), config.indexOf("theme:"));
  return [...content.matchAll(/"\.\/src\/([a-z-]+)\/\*\*/g)].map((m) => m[1]);
}

function walk(dir: string, out: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (/\.(ts|tsx|js|jsx|mdx)$/.test(full)) out.push(full);
  }
  return out;
}

/*
 * Arbitrary values are the dangerous case: `bg-[#7A1F1F]` cannot come from the
 * theme, so an unscanned file means the colour exists nowhere in the CSS.
 * Utility classes drawn from the default palette usually survive because some
 * scanned file also uses them, which is exactly why this failure is so quiet.
 */
const ARBITRARY = /\b(?:bg|text|border|from|to|via|fill|stroke|shadow|ring)-\[#[0-9A-Fa-f]{3,8}\]/;

test("every source file defining Tailwind classes is covered by a content glob", () => {
  const scanned = new Set(scannedDirs());
  const offenders: string[] = [];

  for (const file of walk(SRC)) {
    const rel = relative(SRC, file);
    const topDir = rel.split("/")[0];
    if (scanned.has(topDir)) continue;
    if (ARBITRARY.test(readFileSync(file, "utf8"))) offenders.push(rel);
  }

  assert.deepEqual(
    offenders,
    [],
    `These files define Tailwind arbitrary-value classes but are not scanned by ` +
      `tailwind.config.ts, so those classes will not exist in the compiled CSS:\n  ` +
      offenders.join("\n  "),
  );
});

test("src/lib is scanned, because its data modules define class strings", () => {
  assert.ok(
    scannedDirs().includes("lib"),
    "src/lib/red-list/categories.ts defines every IUCN badge palette as a class string. " +
      "Dropping src/lib from the content globs makes all nine badges invisible.",
  );
});
