/**
 * HELPERG ecosystem registry + navigation tests.
 *
 * Runs on Node's built-in test runner with native TypeScript type-stripping
 * (Node >= 22.6 / 24). No test framework or extra dependency is added:
 *
 *   npm run test
 */
import { test } from "node:test";
import assert from "node:assert/strict";

import {
  ECOSYSTEM_PRODUCTS,
  getProductById,
  getTimelineProducts,
  getDirectorySections,
  isMobileApp,
  primaryWebPlatform,
  totalProductCount,
  validateEcosystemRegistry,
} from "../src/lib/ecosystem/products.ts";
import { CURRENT_PRODUCT_ID, ECOSYSTEM_COPY } from "../src/lib/ecosystem/config.ts";

test("registry passes its own validation (unique ids/urls, HTTPS, no placeholders)", () => {
  const issues = validateEcosystemRegistry();
  assert.deepEqual(
    issues,
    [],
    `registry issues:\n${issues.map((i) => `  - ${i.productId}: ${i.issue}`).join("\n")}`,
  );
});

test("product ids are unique", () => {
  const ids = ECOSYSTEM_PRODUCTS.map((p) => p.id);
  assert.equal(new Set(ids).size, ids.length);
});

test("timelineOrder values are unique", () => {
  const orders = ECOSYSTEM_PRODUCTS.map((p) => p.timelineOrder);
  assert.equal(new Set(orders).size, orders.length);
});

test("every rendered platform URL is HTTPS and never a placeholder", () => {
  for (const product of ECOSYSTEM_PRODUCTS) {
    for (const platform of product.platforms) {
      assert.match(
        platform.url,
        /^https:\/\//,
        `${product.id} ${platform.type} is not HTTPS: ${platform.url}`,
      );
      assert.notEqual(platform.url.trim(), "#", `${product.id} has a "#" link`);
      assert.notEqual(platform.url.trim(), "", `${product.id} has an empty url`);
    }
  }
});

test("no live product is missing a linkable platform", () => {
  for (const product of ECOSYSTEM_PRODUCTS) {
    if (product.status === "live") {
      assert.ok(
        product.platforms.length > 0,
        `${product.id} is live but has no platform`,
      );
    }
  }
});

test("current product exists in the registry", () => {
  const current = getProductById(CURRENT_PRODUCT_ID);
  assert.ok(current, `current product "${CURRENT_PRODUCT_ID}" not found`);
});

test("CV & Resume Builder is iOS-only — no fabricated Android link", () => {
  const cv = getProductById("cv-resume-builder");
  assert.ok(cv);
  assert.ok(
    cv.platforms.some((p) => p.type === "ios"),
    "expected an App Store platform",
  );
  assert.ok(
    !cv.platforms.some((p) => p.type === "android"),
    "must not have a Google Play platform",
  );
});

test("Cash Workspace has its verified website link and is live", () => {
  const cash = getProductById("cash-workspace");
  assert.ok(cash);
  assert.equal(cash.status, "live", "Cash Workspace is now a live product");

  const site = cash.platforms.find((p) => p.type === "website");
  assert.ok(site, "expected a clickable Website platform");
  assert.equal(
    site.url,
    "https://www.cashworkspace.com",
    "must use the exact verified Cash Workspace URL",
  );
  assert.match(site.url, /^https:\/\//, "Cash Workspace URL must be HTTPS");

  // No lingering placeholder/coming-soon state.
  assert.deepEqual(
    validateEcosystemRegistry([cash]),
    [],
    "Cash Workspace must pass registry validation",
  );
});

test("timeline includes the current product, is capped and ordered", () => {
  const timeline = getTimelineProducts(CURRENT_PRODUCT_ID);
  assert.ok(
    timeline.some((p) => p.id === CURRENT_PRODUCT_ID),
    "current product must appear in the timeline",
  );
  assert.ok(timeline.length <= 6, "timeline should be capped at 6 nodes");
  assert.ok(timeline.length >= 4, "timeline should show at least 4 nodes");

  const orders = timeline.map((p) => p.timelineOrder);
  assert.deepEqual(orders, [...orders].sort((a, b) => a - b), "timeline not ordered");

  // Every non-current timeline node must have a real web link to point at.
  for (const p of timeline) {
    if (p.id !== CURRENT_PRODUCT_ID) {
      assert.ok(primaryWebPlatform(p), `${p.id} has no web link for the timeline`);
    }
  }
});

test("directory places every product in exactly one section", () => {
  const sections = getDirectorySections();
  const placed = sections.flatMap((s) => s.products.map((p) => p.id));
  assert.equal(
    placed.length,
    totalProductCount(),
    "every product must be placed exactly once",
  );
  assert.equal(new Set(placed).size, placed.length, "a product was placed twice");
});

test("directory has no empty sections and mobile apps are grouped together", () => {
  const sections = getDirectorySections();
  for (const s of sections) {
    assert.ok(s.products.length > 0, `section "${s.title}" is empty`);
  }
  const mobile = sections.find((s) => s.id === "mobile");
  assert.ok(mobile, "expected a mobile applications section");
  for (const p of mobile.products) {
    assert.ok(isMobileApp(p), `${p.id} in mobile section is not a mobile app`);
  }
});

test("banner copy is present and never doubles as page content", () => {
  assert.ok(ECOSYSTEM_COPY.brand.includes("HELPERG"));
  assert.ok(ECOSYSTEM_COPY.cta.length > 0);
  assert.ok(ECOSYSTEM_COPY.tagline.length > 0);
});
