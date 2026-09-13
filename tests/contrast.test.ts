import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/**
 * Text contrast, computed rather than eyeballed.
 *
 * Three greys carrying real content were below WCAG AA: #8A958E at 2.73:1 on
 * the panel surface (breed data labels, "Last updated:", collection card
 * titles, and the A-Z directory letters the whole crawlable-discovery design
 * leans on), and #5E6B63 at 2.96:1 against the dark footer, where it sat under
 * the site-wide disclaimer on every page.
 *
 * Each passed review because each looks deliberate — a muted grey on a near-
 * white ground reads as restraint, not as a defect. Only the arithmetic shows
 * it, so the arithmetic is a test.
 */

const ROOT = new URL("..", import.meta.url).pathname;

function luminance(hex: string): number {
  const h = hex.replace("#", "");
  const channels = [0, 2, 4].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  const [r, g, b] = channels.map((c) =>
    c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4,
  );
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

function contrast(fg: string, bg: string): number {
  const [a, b] = [luminance(fg), luminance(bg)];
  return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
}

test("the contrast formula matches known reference values", () => {
  // Without this, every assertion below could pass on a broken formula.
  assert.equal(Math.round(contrast("#000000", "#FFFFFF")), 21);
  assert.equal(Math.round(contrast("#FFFFFF", "#FFFFFF")), 1);
  assert.ok(Math.abs(contrast("#767676", "#FFFFFF") - 4.54) < 0.05);
});

/** The light surfaces body text is set on. */
const LIGHT_SURFACES = ["#FFFFFF", "#F7F8F3", "#EFF1EB", "#EFF4E0"];
const AA_NORMAL = 4.5;

test("every body-text grey clears AA on every light surface it can appear on", () => {
  const failures: string[] = [];
  for (const fg of ["#5E6B63", "#636E66", "#2C3A2F", "#17211B", "#063F2A"]) {
    for (const bg of LIGHT_SURFACES) {
      const ratio = contrast(fg, bg);
      if (ratio < AA_NORMAL) failures.push(`${fg} on ${bg} = ${ratio.toFixed(2)}:1`);
    }
  }
  assert.deepEqual(failures, [], "text colour below WCAG AA");
});

test("footer text clears AA on the footer's dark ground", () => {
  const FOOTER_BG = "#17211B";
  const source = readFileSync(join(ROOT, "src/components/SiteFooter.tsx"), "utf8");
  const used = [...source.matchAll(/text-\[(#[0-9A-Fa-f]{6})\]/g)].map((m) => m[1]);
  assert.ok(used.length > 0, "no text colours found in the footer to check");
  for (const fg of used) {
    const ratio = contrast(fg, FOOTER_BG);
    assert.ok(
      ratio >= AA_NORMAL,
      `footer text ${fg} on ${FOOTER_BG} = ${ratio.toFixed(2)}:1, below ${AA_NORMAL}`,
    );
  }
});

/*
 * The retired greys are named so they cannot drift back in. A colour that
 * failed once tends to return by copy-paste from a component that still had it.
 */
const RETIRED = ["#8A958E", "#7C8A82"];

test("the retired sub-AA greys do not reappear", () => {
  const offenders: string[] = [];
  const walk = (dir: string) => {
    for (const entry of readdirSync(dir)) {
      const full = join(dir, entry);
      if (statSync(full).isDirectory()) walk(full);
      else if (/\.(tsx?|css)$/.test(full)) {
        const source = readFileSync(full, "utf8");
        for (const dead of RETIRED) {
          if (source.includes(dead)) offenders.push(`${full.replace(ROOT, "")}: ${dead}`);
        }
      }
    }
  };
  walk(join(ROOT, "src"));
  assert.deepEqual(
    offenders,
    [],
    `a grey retired for failing WCAG AA is back:\n  ${offenders.join("\n  ")}`,
  );
});
