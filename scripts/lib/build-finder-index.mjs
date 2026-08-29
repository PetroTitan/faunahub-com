/**
 * Builds the Animal Finder index from the site's own sources of truth.
 *
 * The Finder's population is the set of directories under src/app/animals — the
 * 642 profiles that exist as real routes. Nothing is composed: a record is
 * created because a page.tsx is on disk, and every field on it is either a
 * string that page already renders or a membership fact from a registry the
 * site's own routes read.
 *
 * The interesting part of this file is not the extraction, it is the REFUSAL.
 * `measureAxes` scores every candidate axis against the population, and only
 * axes that clear the coverage gate become facets; the rest are carried into
 * the payload as `excludedFacets` so the page can state its own limits. That
 * inverts the usual failure mode: an axis with thin data cannot quietly become
 * a filter that hides two thirds of the collection — it has to be published as
 * a known gap instead.
 *
 * Why this is a separate payload from search-index.json rather than an
 * extension of it: the Finder needs 642 records with structured fields and no
 * descriptions to match on, and search needs 1,690 documents with full
 * descriptions. Serving one file to both pages would mean the Finder
 * downloading 158 KB of comparison, guide and behaviour documents it cannot
 * filter, to use a quarter of them. Measured sizes for both are in
 * docs/animal-finder.md.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { harvestAnimalProfileFacts } from "./harvest-page-metadata.mjs";
import { harvestPageMetadata } from "./harvest-page-metadata.mjs";

const REPO_ROOT = path.resolve(fileURLToPath(import.meta.url), "../../..");
const APP_DIR = path.join(REPO_ROOT, "src/app");
const ANIMALS_DIR = path.join(APP_DIR, "animals");
const LIB = path.join(REPO_ROOT, "src/lib");

/** Wire version. Must match FINDER_INDEX_VERSION in src/lib/finder/types.ts. */
const FINDER_INDEX_VERSION = 1;

/**
 * Descriptions are carried WHOLE. There is no truncation here, and that is a
 * correctness decision rather than a generosity.
 *
 * A 130-character cap looked harmless — the card clamps to three lines anyway —
 * until it was measured against the corpus: the shortest meta description on
 * the site is 139 characters and the median is 167, so the cap cut every single
 * one of the 642. Worse, FaunaHub's editorial convention puts the corrective
 * clause LAST, so the cut landed on exactly the words that exist to stop a
 * reader believing something false:
 *
 *   comb-jelly   "jellyfish-like ocean drifters" …  — not true jellyfish
 *   shrew        …                                  Not rodents, despite the resemblance
 *   zorilla      "looks and smells like a skunk" …  but is not a skunk at all
 *   giant-clam   … "and why"                        the man-eating myth is false
 *   sea-snake, krait, viper, stonefish  …           not first-aid advice
 *   chameleon, gecko                    …           not pet-care advice
 *
 * Nothing false was ever authored; the extraction was removing the clause the
 * no-fabrication doctrine exists to protect, and baking an ellipsis into the
 * artifact so a screen reader announced the mutilated sentence as the whole
 * one. Carrying the text whole costs 23 KB raw and roughly 5 KB compressed.
 * The card still clamps to three lines visually, but the full sentence is in
 * the DOM and in the accessibility tree.
 */
const MAX_DESCRIPTION = null;

/** Ranks whose groups describe what an animal IS, rather than where it lives. */
const TAXONOMIC_RANKS = new Set(["class", "phylum", "informal-group"]);

/**
 * The two informal groups that are containers rather than taxa.
 *
 * Every animal is one or the other, so exposing them as filter values would
 * add two chips that cannot narrow anything a reader cares about while making
 * the facet look twice as populated as it is.
 */
const CONTAINER_GROUPS = new Set(["vertebrates", "invertebrates"]);

const imp = (relative) => import(pathToFileURL(path.join(LIB, relative)).href);

/** Every /animals/[slug] directory that has a page. Sorted, so output is stable. */
export function findAnimalSlugs() {
  return fs
    .readdirSync(ANIMALS_DIR, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((slug) => fs.existsSync(path.join(ANIMALS_DIR, slug, "page.tsx")))
    .sort();
}

/** Whitespace-normalise the page's own description. Nothing is cut. */
function cleanDescription(text) {
  if (!text) return undefined;
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length > 0 ? clean : undefined;
}

/**
 * Measure one candidate axis against the population.
 *
 * `distinctValues` is what separates a real enum from prose wearing an enum's
 * name: "Diet" is present on 87% of profiles and holds 508 distinct strings,
 * which is a paragraph, not a classification.
 */
function measureAxis({ id, label, total, values, reason }) {
  const distinct = new Set();
  let covered = 0;
  for (const held of values) {
    if (held.length > 0) covered += 1;
    for (const value of held) distinct.add(value);
  }
  return { id, label, covered, total, distinctValues: distinct.size, reason };
}

/**
 * Build the payload.
 *
 * @returns {{ payload: object, axes: object[] }} — `axes` carries the full
 *   measurement of every candidate, exposed and excluded alike, so the audit
 *   in the tests and the table in the docs read from the same computation the
 *   build makes rather than from a transcription of it.
 */
export async function buildFinderIndex({ generatedAt }) {
  const slugs = findAnimalSlugs();
  const total = slugs.length;

  /* ---- 1. What each profile publishes about itself ----------------- */

  const facts = new Map();
  const descriptions = new Map();
  for (const slug of slugs) {
    const file = path.join(ANIMALS_DIR, slug, "page.tsx");
    facts.set(slug, harvestAnimalProfileFacts(file));
    descriptions.set(slug, harvestPageMetadata(file)?.description ?? null);
  }

  /* ---- 2. Registries the site's own routes already read ------------ */

  const [taxonomy, compare, images, classification, redList] = await Promise.all([
    imp("taxonomy/animal-groups.ts"),
    imp("animal-compare/index.ts"),
    imp("images/animal-images.ts"),
    imp("animals/classification.ts"),
    loadRedListSpecies(),
  ]);

  const groupLabels = new Map();
  const taxonGroups = new Map();
  for (const group of taxonomy.ANIMAL_TAXONOMY_GROUPS) {
    if (!TAXONOMIC_RANKS.has(group.rankLabel)) continue;
    if (CONTAINER_GROUPS.has(group.slug)) continue;
    groupLabels.set(group.slug, group.label);
    for (const slug of group.existingAnimalSlugs) {
      if (!facts.has(slug)) continue;
      if (!taxonGroups.has(slug)) taxonGroups.set(slug, []);
      taxonGroups.get(slug).push(group.slug);
    }
  }

  // Both kinds of published side-by-side page count.
  //
  // `COMPARISONS` is the registry behind /animal-compare/<slug>.
  // `EXTERNAL_COMPARISONS` is the seven hand-written pages at /compare/<slug>
  // that predate it — real routes, listed on the Compare Center, and indexed by
  // search. Counting only the first left `lion` and `tiger` flagged as having
  // no comparison while /compare/lion-vs-tiger is published, which made the
  // preset blurb "every animal that appears in at least one side-by-side page"
  // false for the site's best-known pair.
  const comparisonCounts = new Map();
  const countPair = (slugA, slugB) => {
    for (const slug of [slugA, slugB]) {
      if (!facts.has(slug)) continue;
      comparisonCounts.set(slug, (comparisonCounts.get(slug) ?? 0) + 1);
    }
  };
  for (const record of compare.COMPARISONS) {
    countPair(record.animalA.slug, record.animalB.slug);
  }
  for (const external of compare.EXTERNAL_COMPARISONS) {
    const [slugA, slugB] = external.canonicalPairKey.split("--");
    countPair(slugA, slugB);
  }

  // Last hero wins, because that is what the app does: HERO_BY_SLUG in
  // images/animal-images.ts is built with Object.fromEntries, where a later key
  // overwrites an earlier one. Keeping the FIRST here would agree with the
  // profile page today — there are no duplicate hero slugs — and silently show
  // a different photo on the card the moment there were.
  const heroImages = new Map();
  for (const image of images.ANIMAL_IMAGES) {
    if (image.role !== "hero") continue;
    if (!facts.has(image.animalSlug)) continue;
    heroImages.set(image.animalSlug, {
      src: image.localPath,
      width: image.width,
      height: image.height,
    });
  }

  // `status` is checked rather than assumed. Every row in DOMESTIC_ANIMALS is
  // "domestic" today, but the field is typed "wild" | "domestic", and a row
  // added as "wild" would otherwise be labelled "Documented domestic animal".
  const domestic = new Set(
    classification.DOMESTIC_ANIMALS.filter(
      (entry) => entry.status === "domestic" && facts.has(entry.slug),
    ).map((entry) => entry.slug),
  );

  // A profile "has a conservation record" when FaunaHub publishes a Red List
  // entry for that animal. There are two ways one is attached, and both count:
  //
  //   1. `existingAnimalSlug` — the registry's explicit cross-link. 15 records.
  //   2. the Red List record's OWN slug is the profile's slug. 49 records.
  //
  // Using only (1) made the flag mean "the registry filled in a cross-link
  // field", which is not what the label says: polar-bear, snow-leopard,
  // axolotl, kakapo, great-white-shark, gharial, dugong, california-condor and
  // 32 others all have a published page at /endangered-animals/species/<slug>
  // and were reported as having no conservation record.
  //
  // (2) is a join on FaunaHub's own slug namespace, not a guess about the
  // animal — and `assertConservationJoin` below fails the build if a slug ever
  // joins two records whose names do not agree.
  // `via` records HOW each link was made, because only one of the two is mine
  // to validate. A cross-link is an editorial decision — the registry
  // deliberately points the Green Turtle record at the group-level Sea Turtle
  // profile — and second-guessing it would be overruling the editors. The slug
  // join is a derivation, so it has to prove itself.
  const conservationRecords = new Map();
  for (const record of redList) {
    if (record.existingAnimalSlug && facts.has(record.existingAnimalSlug)) {
      conservationRecords.set(record.existingAnimalSlug, { record, via: "cross-link" });
    }
  }
  for (const record of redList) {
    if (facts.has(record.slug) && !conservationRecords.has(record.slug)) {
      conservationRecords.set(record.slug, { record, via: "slug" });
    }
  }
  const conservation = new Set(conservationRecords.keys());

  /* ---- 3. Encyclopedia category, from the profile's own prop ------- */

  const categorySlug = new Map();
  const categoryLabelVotes = new Map();
  for (const slug of slugs) {
    const href = facts.get(slug).parentCategoryHref;
    const match = href?.match(/^\/animal-encyclopedia\/([a-z-]+)$/);
    if (!match) continue;
    categorySlug.set(slug, match[1]);
    // The label is decided by majority vote among the profiles filed under the
    // category, exactly as the search index does it, so the two never disagree
    // about what to call the same shelf.
    const label = facts.get(slug).parentCategory;
    if (!label) continue;
    if (!categoryLabelVotes.has(match[1])) categoryLabelVotes.set(match[1], new Map());
    const votes = categoryLabelVotes.get(match[1]);
    votes.set(label, (votes.get(label) ?? 0) + 1);
  }
  const categoryLabel = new Map();
  for (const [slug, votes] of categoryLabelVotes) {
    categoryLabel.set(slug, [...votes.entries()].sort((a, b) => b[1] - a[1])[0][0]);
  }

  /* ---- 4. Documents ------------------------------------------------ */

  const documents = slugs.map((slug) => {
    const fact = facts.get(slug);
    const coverage = [];
    if ((comparisonCounts.get(slug) ?? 0) > 0) coverage.push("comparison");
    if (heroImages.has(slug)) coverage.push("photo");
    if (conservation.has(slug)) coverage.push("conservation");
    if (domestic.has(slug)) coverage.push("domestic");

    const document = {
      slug,
      name: fact.commonName ?? titleCase(slug),
      url: `/animals/${slug}`,
      coverage,
      comparisonCount: comparisonCounts.get(slug) ?? 0,
    };

    const description = cleanDescription(descriptions.get(slug));
    if (description) document.description = description;
    if (fact.scientificName) document.scientificName = fact.scientificName;
    if (categorySlug.has(slug)) document.group = categorySlug.get(slug);
    if (taxonGroups.has(slug)) document.taxonGroups = taxonGroups.get(slug).slice().sort();
    if (fact.tags.length > 0) document.tags = fact.tags;
    if (heroImages.has(slug)) document.image = heroImages.get(slug);
    return document;
  });

  /* ---- 5. Measure every candidate axis ----------------------------- */

  const fauna = await imp("fauna/featured-animals.ts");
  const ocean = await imp("fauna/ocean.ts");
  const faunaBySlug = new Map(
    fauna.FAUNA_RECORDS.filter((record) => facts.has(record.animalSlug)).map((record) => [
      record.animalSlug,
      record,
    ]),
  );
  const oceanBySlug = new Map(
    ocean.OCEAN_RECORDS.filter((record) => facts.has(record.animalSlug)).map((record) => [
      record.animalSlug,
      record,
    ]),
  );
  const quickFact = (slug, label) => {
    const found = facts.get(slug).quickFacts?.find((entry) => entry.label === label);
    return found?.value ? [found.value] : [];
  };

  const axes = [
    measureAxis({
      id: "group",
      label: "Animal group",
      total,
      values: slugs.map((slug) => (categorySlug.has(slug) ? [categorySlug.get(slug)] : [])),
      reason:
        "The encyclopedia shelf each profile declares, with its breadcrumb structured data as the fallback for the bespoke pages that predate the shared layout.",
    }),
    measureAxis({
      id: "taxon",
      label: "Taxonomic group",
      total,
      values: slugs.map((slug) => taxonGroups.get(slug) ?? []),
      reason:
        "Class- and phylum-level groups from the taxonomy registry. Recorded for most profiles but not all; absence means the registry has not filed the animal yet.",
    }),
    measureAxis({
      id: "coverage",
      label: "FaunaHub coverage",
      total,
      values: slugs.map(() => ["known"]),
      reason:
        "Facts about what FaunaHub publishes for an animal — a comparison page, a licensed photo, a conservation record, a domestication entry. Complete by construction, because they describe the site rather than the animal.",
    }),
    measureAxis({
      id: "continent",
      label: "Continent",
      total,
      values: slugs.map((slug) => faunaBySlug.get(slug)?.continentSlugs ?? []),
      reason:
        "The fauna geography registry covers land, freshwater and coastal species by design and excludes purely marine ones, so a continent filter would silently omit a large part of the collection rather than report it as unknown.",
    }),
    measureAxis({
      id: "habitat",
      label: "Habitat",
      total,
      values: slugs.map((slug) => faunaBySlug.get(slug)?.habitatTags ?? []),
      reason:
        "Habitat tags exist only on the profiles the fauna geography registry covers. Filtering on them would present a partial editorial pass as a property of the animal.",
    }),
    measureAxis({
      id: "ocean-zone",
      label: "Ocean depth zone",
      total,
      values: slugs.map((slug) => oceanBySlug.get(slug)?.zoneSlugs ?? []),
      reason: "Recorded only for the marine species on the ocean depth pages.",
    }),
    measureAxis({
      id: "diet",
      label: "Diet",
      total,
      values: slugs.map((slug) => quickFact(slug, "Diet")),
      reason:
        "Present on most profiles, but as a written sentence rather than a category. Sorting those sentences into carnivore, herbivore and omnivore would be assigning a classification the editors never made.",
    }),
    measureAxis({
      id: "class",
      label: "Class (taxon)",
      total,
      values: slugs.map((slug) => quickFact(slug, "Class")),
      reason:
        "Written freely, often with a parenthetical gloss, so the same class appears under several spellings. The taxonomy registry carries the same information already normalised.",
    }),
    measureAxis({
      id: "habitat-prose",
      label: "Habitat (written)",
      total,
      values: slugs.map((slug) => quickFact(slug, "Habitat")),
      reason: "A description of where the animal lives, not a category it belongs to.",
    }),
    measureAxis({
      id: "activity",
      label: "Activity pattern",
      total,
      values: slugs.map((slug) => quickFact(slug, "Activity")),
      reason: "Recorded on too few profiles, and as prose rather than a category.",
    }),
    measureAxis({
      id: "conservation-status",
      label: "Conservation status",
      total,
      values: slugs.map((slug) => (conservation.has(slug) ? ["linked"] : [])),
      reason:
        "FaunaHub's Red List records are a genuine IUCN enum, but only a handful are joined to an encyclopedia profile. The conservation category pages under /endangered-animals are where that data is complete.",
    }),
    measureAxis({
      id: "domestic-status",
      label: "Domestic or wild",
      total,
      values: slugs.map((slug) => (domestic.has(slug) ? ["domestic"] : [])),
      reason:
        "The domestication registry is a reviewed list of domesticated animals. Everything absent from it defaults to wild WITHOUT having been individually checked, so offering a wild/domestic toggle would imply an audit that has not happened. The documented half is offered as a coverage refinement instead.",
    }),
  ];

  /* ---- 6. Gate: only axes with real coverage become facets --------- */

  const facets = [];

  const groupAxis = axes.find((axis) => axis.id === "group");
  if (passesGate(groupAxis)) {
    const counts = tally(slugs, (slug) => (categorySlug.has(slug) ? [categorySlug.get(slug)] : []));
    facets.push({
      id: "group",
      label: "Animal group",
      description:
        "The section of the encyclopedia an animal is filed under. These are FaunaHub's shelves, not strict taxonomy — whales and seals sit under Marine Animals, sharks under Fish.",
      mode: "any",
      values: [...counts.entries()]
        .map(([value, count]) => ({
          value,
          label: categoryLabel.get(value) ?? titleCase(value),
          count,
          href: `/animal-encyclopedia/${value}`,
        }))
        .sort((a, b) => b.count - a.count || a.value.localeCompare(b.value)),
      covered: groupAxis.covered,
      total,
      complete: groupAxis.covered === total,
    });
  }

  const taxonAxis = axes.find((axis) => axis.id === "taxon");
  if (passesGate(taxonAxis)) {
    const counts = tally(slugs, (slug) => taxonGroups.get(slug) ?? []);
    facets.push({
      id: "taxon",
      label: "Taxonomic group",
      description:
        "Class- and phylum-level groups from FaunaHub's taxonomy registry. Finer than the encyclopedia shelves — amphibians separate from reptiles, molluscs from insects.",
      mode: "any",
      values: [...counts.entries()]
        .map(([value, count]) => ({
          value,
          label: groupLabels.get(value) ?? titleCase(value),
          count,
        }))
        .sort((a, b) => b.count - a.count || a.value.localeCompare(b.value)),
      covered: taxonAxis.covered,
      total,
      complete: taxonAxis.covered === total,
    });
  }

  // The coverage facet is complete by construction: every record holds a known
  // true or false for each flag, so no selection can hide an animal whose
  // status was simply never recorded.
  const coverageCounts = tally(slugs, (slug) => {
    const document = documents.find((entry) => entry.slug === slug);
    return document.coverage;
  });
  facets.push({
    id: "coverage",
    label: "What FaunaHub has",
    description:
      "Refine by what this site publishes for an animal. These are facts about FaunaHub's own coverage, checked for every profile.",
    mode: "all",
    values: [
      flagValue("comparison", "Has a comparison page", coverageCounts, "/animal-compare"),
      flagValue("photo", "Has a licensed photo", coverageCounts, "/image-credits"),
      flagValue("conservation", "Has a conservation record", coverageCounts, "/endangered-animals"),
      flagValue("domestic", "Documented domestic animal", coverageCounts, "/domestic-animals"),
      // A value that every record holds cannot narrow anything, so it is a
      // fact about the collection rather than a control. It is reported in the
      // methodology note instead of taking up space as a checkbox that does
      // nothing. If a future profile ships without a photo the value reappears
      // on its own, because this is computed, not configured.
    ].filter((value) => value.count > 0 && value.count < total),
    covered: total,
    total,
    complete: true,
  });

  const exposed = new Set(facets.map((facet) => facet.id));
  const excludedFacets = axes
    .filter((axis) => !exposed.has(axis.id))
    .map(({ id, label, covered, total: axisTotal, distinctValues, reason }) => ({
      id,
      label,
      covered,
      total: axisTotal,
      distinctValues,
      reason,
    }));

  return {
    conservationRecords,
    payload: {
      version: FINDER_INDEX_VERSION,
      generatedAt,
      documents,
      facets,
      excludedFacets,
    },
    axes,
  };
}

function flagValue(flag, label, counts, href) {
  return { value: flag, label, count: counts.get(flag) ?? 0, href };
}

function tally(slugs, valuesOf) {
  const counts = new Map();
  for (const slug of slugs) {
    for (const value of valuesOf(slug)) counts.set(value, (counts.get(value) ?? 0) + 1);
  }
  return counts;
}

/**
 * The coverage gate.
 *
 * An axis must cover at least half the population AND hold a small enough set
 * of distinct values to be a classification rather than prose. The second half
 * matters as much as the first: "Diet" clears the coverage bar comfortably and
 * is still unusable.
 */
export const FACET_COVERAGE_MINIMUM = 0.5;
export const FACET_COVERAGE_STRONG = 0.7;
const MAX_FACET_VALUES = 40;

export function passesGate(axis) {
  return (
    axis.covered / axis.total >= FACET_COVERAGE_MINIMUM &&
    axis.distinctValues > 0 &&
    axis.distinctValues <= MAX_FACET_VALUES
  );
}

function titleCase(slug) {
  return slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/**
 * Every Red List record.
 *
 * `RED_LIST_SPECIES` already spreads batches 2-5 into itself, so this imports
 * the one canonical list. Loading the batch modules as well returned 625 rows
 * for 363 records; that was harmless only because the result was collapsed into
 * a Set of slugs, and would have silently doubled anything that counted.
 */
async function loadRedListSpecies() {
  const { RED_LIST_SPECIES } = await imp("red-list/species.ts");
  return RED_LIST_SPECIES;
}

export { REPO_ROOT, ANIMALS_DIR, MAX_DESCRIPTION };

/* ------------------------------------------------------------------ *
 * Validation
 *
 * Every check below fails the build rather than warning. An index that points
 * a reader at a route that does not exist, or that leaks a candidate from a
 * private backlog, is worse than no index at all.
 * ------------------------------------------------------------------ */

/**
 * @returns {{ id: string, issue: string }[]} — empty when the payload is sound.
 */
export function validateFinderIndex(payload) {
  const issues = [];
  const add = (id, issue) => issues.push({ id, issue });

  if (payload.version !== FINDER_INDEX_VERSION) {
    add("payload", `version ${payload.version} does not match ${FINDER_INDEX_VERSION}`);
  }

  const onDisk = new Set(findAnimalSlugs());
  const seen = new Set();

  for (const document of payload.documents) {
    const id = document.slug ?? "(no slug)";

    if (seen.has(document.slug)) add(id, "duplicate slug");
    seen.add(document.slug);

    if (!document.slug || !/^[a-z0-9-]+$/.test(document.slug)) add(id, "slug is not a slug");
    if (!document.name || !document.name.trim()) add(id, "missing name");

    // The one rule: a record exists because a route exists.
    if (!onDisk.has(document.slug)) add(id, "no /animals/<slug>/page.tsx on disk");
    if (document.url !== `/animals/${document.slug}`) {
      add(id, `url "${document.url}" does not match its slug`);
    }

    // The description must be the page's own sentence, whole. An ellipsis here
    // means something started truncating again — see the note on
    // MAX_DESCRIPTION for why that is a correctness bug and not a size knob.
    if (document.description?.endsWith("…")) {
      add(id, "description was truncated");
    }

    if (document.image) {
      const asset = path.join(REPO_ROOT, "public", document.image.src.replace(/^\//, ""));
      if (!fs.existsSync(asset)) add(id, `image ${document.image.src} is not in public/`);
      if (!(document.image.width > 0) || !(document.image.height > 0)) {
        add(id, "image is missing real dimensions");
      }
    }

    if (!Array.isArray(document.coverage)) add(id, "coverage is not an array");
    else {
      for (const flag of document.coverage) {
        if (!["comparison", "photo", "conservation", "domestic"].includes(flag)) {
          add(id, `unknown coverage flag "${flag}"`);
        }
      }
      // A coverage flag is a claim about FaunaHub's own content, so each one
      // must agree with the record it was derived from.
      if (document.coverage.includes("comparison") !== document.comparisonCount > 0) {
        add(id, "comparison flag disagrees with comparisonCount");
      }
      if (document.coverage.includes("photo") !== Boolean(document.image)) {
        add(id, "photo flag disagrees with the image field");
      }
    }
  }

  // Every profile on disk must be findable. A profile absent from the Finder
  // is invisible to a reader who is browsing rather than searching, and there
  // is no editorial reason for a published animal to be unbrowsable.
  for (const slug of onDisk) {
    if (!seen.has(slug)) add(slug, "profile exists on disk but is missing from the index");
  }

  /* ---- Facets ---------------------------------------------------- */

  const facetIds = new Set();
  for (const facet of payload.facets) {
    const id = `facet:${facet.id}`;
    if (facetIds.has(facet.id)) add(id, "duplicate facet id");
    facetIds.add(facet.id);

    if (!["any", "all"].includes(facet.mode)) add(id, `unknown mode "${facet.mode}"`);
    if (facet.values.length === 0) add(id, "facet has no values");
    if (facet.covered / facet.total < FACET_COVERAGE_MINIMUM) {
      add(
        id,
        `coverage ${facet.covered}/${facet.total} is below the ${FACET_COVERAGE_MINIMUM * 100}% gate`,
      );
    }
    if (facet.complete !== (facet.covered === facet.total)) {
      add(id, "`complete` disagrees with the coverage counts");
    }

    const values = new Set();
    for (const value of facet.values) {
      if (values.has(value.value)) add(id, `duplicate value "${value.value}"`);
      values.add(value.value);
      if (!value.label || !value.label.trim()) add(id, `value "${value.value}" has no label`);
      // A chip that leads nowhere is worse than a chip with no link, and a chip
      // whose count is wrong is worse than both.
      const actual = payload.documents.filter((document) =>
        documentValues(document, facet.id).includes(value.value),
      ).length;
      if (actual !== value.count) {
        add(id, `value "${value.value}" claims ${value.count} but ${actual} records hold it`);
      }
      if (value.count === 0) add(id, `value "${value.value}" has no records`);
    }
  }

  for (const excluded of payload.excludedFacets) {
    if (facetIds.has(excluded.id)) add(`excluded:${excluded.id}`, "is also exposed as a facet");
    if (!excluded.reason || excluded.reason.length < 20) {
      add(`excluded:${excluded.id}`, "has no usable reason");
    }
  }

  /* ---- No popularity claims -------------------------------------- */

  const serialized = JSON.stringify(payload.facets) + JSON.stringify(payload.excludedFacets);
  for (const word of ["popular", "trending", "most searched", "top pick", "best animal"]) {
    if (serialized.toLowerCase().includes(word)) {
      add("payload", `facet copy contains "${word}" — FaunaHub measures no such thing`);
    }
  }

  return issues;
}

/** The values a document holds on an axis. Mirrors valuesFor in the runtime. */
function documentValues(document, facetId) {
  if (facetId === "group") return document.group ? [document.group] : [];
  if (facetId === "taxon") return document.taxonGroups ?? [];
  if (facetId === "coverage") return document.coverage;
  return [];
}

/**
 * Fail if any private backlog entry reached the index.
 *
 * The backlogs are imported HERE and nowhere else in the Finder: the only
 * reason to load 165 unpublished comparison candidates and 1,000 unpublished
 * behavior candidates is to prove none of them shipped.
 *
 * An earlier version of this collected only `slug`/`animalSlug`/`proposedSlug`
 * and compared them against `document.url`. Since comparison candidates carry a
 * bare pair slug ("lion-vs-tiger") and behavior candidates key on
 * `proposedPath`, that set could never intersect a `/animals/<slug>` URL — the
 * check passed by construction rather than by evidence. It now collects every
 * identifier shape and checks BOTH the slug and the url, and it fails if the
 * forbidden set comes back implausibly small, so a rename in either backlog
 * cannot quietly turn this back into a no-op.
 */
export async function assertNoFinderBacklogLeakage(payload) {
  const issues = [];
  const [compareBacklog, behaviorBacklog] = await Promise.all([
    imp("animal-compare/backlog.ts"),
    imp("animal-behavior-backlog.ts"),
  ]);

  const forbidden = new Set();
  for (const module of [compareBacklog, behaviorBacklog]) {
    for (const value of Object.values(module)) {
      if (!Array.isArray(value)) continue;
      for (const entry of value) {
        if (!entry || typeof entry !== "object") continue;
        if (entry.status === "published") continue;
        for (const key of ["slug", "animalSlug", "proposedSlug", "proposedPath"]) {
          if (typeof entry[key] === "string") forbidden.add(entry[key]);
        }
      }
    }
  }

  if (forbidden.size < 100) {
    issues.push({
      id: "backlog",
      issue: `only ${forbidden.size} unpublished candidates loaded — this check proves nothing`,
    });
  }

  for (const document of payload.documents) {
    for (const value of [document.slug, document.url]) {
      if (forbidden.has(value)) {
        issues.push({ id: document.slug, issue: `"${value}" appears in a private backlog` });
      }
    }
  }
  return issues;
}

/**
 * Fail if a conservation record was joined to a profile that is not the same
 * animal.
 *
 * The join is on FaunaHub's own slug namespace, which is what makes it an
 * extraction rather than a guess — but a slug collision between the two
 * registries would silently label the wrong animal as threatened. Folding both
 * names and requiring one to contain the other catches that, while accepting
 * the two real variants: the Red List spells Kakapo "Kākāpō" (identical once
 * diacritics fold) and names the Coelacanth record "West Indian Ocean
 * Coelacanth", which contains the profile's own name.
 */
export function assertConservationJoin(conservationRecords, payload) {
  const issues = [];
  const byslug = new Map(payload.documents.map((document) => [document.slug, document]));
  for (const [slug, { record, via }] of conservationRecords) {
    // Editorial cross-links are the registry's own call, not a derivation.
    if (via !== "slug") continue;
    const document = byslug.get(slug);
    if (!document) continue;
    const profile = foldName(document.name);
    const listed = foldName(record.commonName ?? "");
    if (!profile || !listed) continue;
    if (!listed.includes(profile) && !profile.includes(listed)) {
      issues.push({
        id: slug,
        issue: `conservation join names disagree: profile "${document.name}" vs Red List "${record.commonName}"`,
      });
    }
  }
  return issues;
}

/** Lowercase, strip diacritics, keep letters only. */
function foldName(text) {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z]/g, "");
}
