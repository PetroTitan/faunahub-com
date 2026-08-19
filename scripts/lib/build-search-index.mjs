/**
 * Builds the FaunaHub search index from the site's own sources of truth.
 *
 * The organising idea is that this file must never know a URL the site does not
 * already generate. Two source kinds, and nothing else:
 *
 *   1. ROUTE SOURCES — one entry per `generateStaticParams` in src/app. Each
 *      entry names the same registry the route reads and rebuilds the same URL
 *      the route builds, so a comparison, a species profile or a care article is
 *      indexed the moment it is published and never before.
 *   2. HARVESTED STATIC ROUTES — every non-dynamic page.tsx on disk, indexed
 *      under the title and description that page already publishes.
 *
 * There is no hand-maintained list of URLs anywhere in this file. The only
 * hand-maintained thing is the 25-entry ROUTE_SOURCES table, and
 * `assertRouteSourcesCoverTemplates` fails the build if a dynamic template
 * appears in src/app without a matching entry — so it cannot silently drift.
 *
 * The private backlogs are imported in exactly one place: the leakage check,
 * which fails the build if an unpublished slug ever reaches the index.
 */
import path from "node:path";
import { fileURLToPath } from "node:url";

import {
  harvestStaticRoutes,
  findDynamicRouteTemplates,
  harvestAnimalProfileFacts,
} from "./harvest-page-metadata.mjs";

const REPO_ROOT = path.resolve(fileURLToPath(import.meta.url), "../../..");
const APP_DIR = path.join(REPO_ROOT, "src/app");
const LIB = path.join(REPO_ROOT, "src/lib");

/**
 * Longest description we transport.
 *
 * This is the RETRIEVAL corpus, not a display cap — the card truncates for
 * itself with line-clamp. Confusing the two is a real bug: at 110 characters,
 * 79% of descriptions ended in an ellipsis and every word past the cut became
 * unsearchable, so "mountain lion" could not reach the cougar's profile even
 * though its own meta description says exactly that.
 *
 * 200 covers a full meta description (the site writes 110–165) with room to
 * spare, and costs roughly 15 KB compressed.
 */
const MAX_DESCRIPTION = 200;

/**
 * Static authority weights.
 *
 * These are editorial, not behavioural. FaunaHub has no first-party search or
 * traffic data wired into the build, so ranking by "popularity" would mean
 * inventing the popularity. All these encode is how central a KIND of page is
 * to what a reader arrived for.
 */
const BASE_PRIORITY = {
  animal: 80,
  comparison: 76,
  hub: 72,
  tool: 68,
  behavior: 64,
  category: 60,
  guide: 52,
  research: 46,
};

/**
 * Compliance and housekeeping pages. They stay findable — someone looking for
 * the editorial policy should find it — but they are pinned below content so
 * they can never outrank an animal.
 */
const UTILITY_ROUTES = new Set([
  "/about",
  "/affiliate-disclosure",
  "/contact",
  "/cookie-policy",
  "/editorial-policy",
  "/image-credits",
  "/privacy-policy",
  "/resources",
]);
const UTILITY_PRIORITY = 8;

/**
 * Routes deliberately kept out of the index, with the reason.
 * `/search` is noindex and would return itself as a result.
 */
const EXCLUDED_ROUTES = new Map([["/search", "the search page itself"]]);

/* ------------------------------------------------------------------ *
 * Source loading
 * ------------------------------------------------------------------ */

const load = (relative) => import(path.join(LIB, relative));

/** Every module the index is built from, loaded once and in parallel. */
async function loadSources() {
  const names = [
    ["compare", "animal-compare/index.ts"],
    ["scientificNames", "animal-compare/scientific-names.ts"],
    ["behavior", "animal-behavior.ts"],
    ["pillarContent", "behavior-pillar-content.ts"],
    ["groupContent", "behavior-group-content.ts"],
    ["methodContent", "behavior-method-content.ts"],
    ["speciesContent", "behavior-species-content.ts"],
    ["taxonomy", "taxonomy/helpers.ts"],
    ["fauna", "fauna/helpers.ts"],
    ["continents", "fauna/continents.ts"],
    ["ocean", "fauna/ocean.ts"],
    ["redList", "red-list/helpers.ts"],
    ["redListRegions", "red-list/regions.ts"],
    ["classification", "animals/classification.ts"],
    ["petInsurance", "pet-insurance/data.ts"],
    ["vetCare", "vet-care/data.ts"],
    ["petCost", "pet-cost/data.ts"],
    ["petNutrition", "pet-nutrition/data.ts"],
    ["foodSafety", "food-safety/data.ts"],
    ["health", "health/data.ts"],
    ["petSafety", "pet-safety/data.ts"],
    ["puppyKitten", "puppy-kitten/data.ts"],
    ["smallPets", "small-pets/data.ts"],
    ["aquarium", "aquarium/data.ts"],
    ["birdwatching", "birdwatching/data.ts"],
    ["birdCare", "bird-care/data.ts"],
    ["petChoice", "pet-choice/data.ts"],
  ];
  const modules = await Promise.all(names.map(([, file]) => load(file)));
  return Object.fromEntries(names.map(([key], i) => [key, modules[i]]));
}

/* ------------------------------------------------------------------ *
 * Route sources — one entry per generateStaticParams in src/app.
 *
 * `template` must match the route directory exactly; `url` must rebuild the
 * same string the route builds. Keeping both here is what lets the build prove,
 * rather than assume, that every generated page is findable and that every
 * indexed URL is a page.
 * ------------------------------------------------------------------ */

/** Article registries whose records already carry an absolute `path`. */
function articleDoc(article, extra = {}) {
  return {
    type: "guide",
    title: article.title,
    url: article.path,
    description: article.description,
    keywords: [article.topicTag, article.parentHubLabel, article.grandparentLabel],
    category: article.topicTag || article.parentHubLabel || "Guide",
    ...extra,
  };
}

const ROUTE_SOURCES = [
  {
    template: "/animal-compare/[slug]",
    records: (s) => s.compare.COMPARISONS,
    url: (r, s) => `${s.compare.COMPARE_BASE}/${r.slug}`,
    doc: (r, s, url) => ({
      type: "comparison",
      title: r.title,
      url,
      description: r.centralDifference || r.shortAnswer,
      keywords: [
        s.compare.categoryName(r.primaryCategory),
        ...(r.secondaryCategories ?? []).map(s.compare.categoryName),
      ],
      animalSlugs: [r.animalA.slug, r.animalB.slug],
      category: s.compare.categoryName(r.primaryCategory),
    }),
  },
  {
    template: "/animal-compare/categories/[category]",
    records: (s) => s.compare.COMPARISON_CATEGORIES,
    url: (r, s) => s.compare.categoryPath(r.id),
    doc: (r, s, url) => ({
      type: "category",
      title: r.name,
      url,
      description: r.metaDescription,
      keywords: ["animal comparisons"],
      category: "Comparison category",
    }),
  },
  {
    template: "/animal-intelligence-and-behavior/[slug]",
    records: (s) => s.pillarContent.PILLAR_CONTENT,
    url: (r, s) => `${s.behavior.BEHAVIOR_BASE}/${r.slug}`,
    doc: (r, s, url) => ({
      type: "behavior",
      title: r.metaTitle,
      url,
      description: r.metaDescription,
      keywords: ["animal behavior", "animal intelligence"],
      category: "Behavior guide",
    }),
  },
  {
    template: "/animal-intelligence-and-behavior/groups/[slug]",
    records: (s) => s.groupContent.GROUP_CONTENT,
    url: (r, s) => `${s.behavior.BEHAVIOR_BASE}/groups/${r.slug}`,
    doc: (r, s, url) => ({
      type: "behavior",
      title: r.metaTitle,
      url,
      description: r.metaDescription,
      keywords: ["animal behavior", "animal group"],
      // `relatedAnimalSlugs` is an array of { slug, name } objects despite its
      // name, so it has to be mapped. Copied verbatim, the objects sat in a
      // string[] field and every membership test against them silently failed:
      // the Cephalopod Intelligence page could never be recognised as being
      // about octopus, cuttlefish or squid.
      animalSlugs: (s.behavior.groupBySlug?.(r.slug)?.relatedAnimalSlugs ?? []).map(
        (entry) => (typeof entry === "string" ? entry : entry?.slug),
      ),
      category: "Group behavior",
    }),
  },
  {
    template: "/animal-intelligence-and-behavior/methods/[slug]",
    records: (s) => s.methodContent.METHOD_CONTENT,
    url: (r, s) => `${s.behavior.BEHAVIOR_BASE}/methods/${r.slug}`,
    doc: (r, s, url) => ({
      type: "research",
      title: r.metaTitle,
      url,
      description: r.metaDescription,
      keywords: ["research method", "how animal behavior is studied"],
      category: "Research method",
    }),
  },
  {
    template: "/animal-intelligence-and-behavior/species/[slug]",
    records: (s) => s.speciesContent.SPECIES_CONTENT,
    url: (r, s) => `${s.behavior.BEHAVIOR_BASE}/species/${r.slug}`,
    doc: (r, s, url) => ({
      type: "behavior",
      title: r.metaTitle,
      url,
      description: r.metaDescription,
      aliases: [r.commonName],
      keywords: ["animal behavior", "species behavior"],
      animalSlugs: [s.behavior.speciesBySlug?.(r.slug)?.animalSlug].filter(Boolean),
      category: "Species behavior",
    }),
  },
  {
    template: "/aquarium-care/[slug]",
    records: (s) => s.aquarium.AQUARIUM_ARTICLES,
    url: (r) => r.path,
    doc: (r, s, url) => articleDoc(r, { url }),
  },
  {
    template: "/bird-care/[slug]",
    records: (s) => s.birdCare.BIRD_CARE_ARTICLES,
    url: (r) => r.path,
    doc: (r, s, url) => articleDoc(r, { url }),
  },
  {
    template: "/birdwatching/[slug]",
    records: (s) => s.birdwatching.BIRDWATCHING_ARTICLES,
    url: (r) => r.path,
    doc: (r, s, url) => articleDoc(r, { url }),
  },
  {
    template: "/cats/breeds/[slug]",
    records: (s) => s.petChoice.DECISION_PAGES.filter((p) => p.kind === "cat-breed"),
    // DECISION_PAGES carries `parentHub`, not an absolute path; the route joins
    // the two exactly this way.
    url: (r) => `${r.parentHub}/${r.slug}`,
    doc: (r, s, url) => articleDoc(r, { url, category: "Cat breeds" }),
  },
  {
    template: "/cats/food/[slug]",
    records: (s) => s.foodSafety.FOOD_SAFETY_ARTICLES.filter((a) => a.species === "cat"),
    url: (r) => `/cats/food/${r.slug}`,
    // `searchAliases` is the only hand-curated alias list in the repo, written
    // by the editors for exactly this purpose ("cocoa", "cacao" -> chocolate).
    doc: (r, s, url) =>
      articleDoc(r, {
        url,
        category: "Cat food safety",
        // The food itself is a name for what the page is about, so it is an
        // alias. The rest of `searchAliases` — "cocoa", "cacao", "fish" — are
        // things the page MENTIONS, and an alias tier would let "fish" answer
        // with "Can Cats Eat Tuna?" ahead of the Fish Encyclopedia. They are
        // still fully searchable, one tier down.
        aliases: [r.foodName],
        keywords: [r.topicTag, r.parentHubLabel, ...(r.searchAliases ?? [])],
      }),
  },
  {
    template: "/cats/health/[slug]",
    records: (s) => s.health.SYMPTOM_ARTICLES.filter((a) => a.species === "cat"),
    url: (r) => r.path,
    doc: (r, s, url) => articleDoc(r, { url, category: "Cat health" }),
  },
  {
    template: "/dogs/breeds/[slug]",
    records: (s) => s.petChoice.DECISION_PAGES.filter((p) => p.kind === "dog-breed"),
    url: (r) => `${r.parentHub}/${r.slug}`,
    doc: (r, s, url) => articleDoc(r, { url, category: "Dog breeds" }),
  },
  {
    template: "/dogs/food/[slug]",
    records: (s) => s.foodSafety.FOOD_SAFETY_ARTICLES.filter((a) => a.species === "dog"),
    url: (r) => `/dogs/food/${r.slug}`,
    doc: (r, s, url) =>
      articleDoc(r, {
        url,
        category: "Dog food safety",
        // The food itself is a name for what the page is about, so it is an
        // alias. The rest of `searchAliases` — "cocoa", "cacao", "fish" — are
        // things the page MENTIONS, and an alias tier would let "fish" answer
        // with "Can Cats Eat Tuna?" ahead of the Fish Encyclopedia. They are
        // still fully searchable, one tier down.
        aliases: [r.foodName],
        keywords: [r.topicTag, r.parentHubLabel, ...(r.searchAliases ?? [])],
      }),
  },
  {
    template: "/dogs/health/[slug]",
    records: (s) => s.health.SYMPTOM_ARTICLES.filter((a) => a.species === "dog"),
    url: (r) => r.path,
    doc: (r, s, url) => articleDoc(r, { url, category: "Dog health" }),
  },
  {
    template: "/endangered-animals/regions/[region]",
    records: (s) => s.redListRegions.REGION_ORDER.map((region) => s.redListRegions.RED_LIST_REGIONS[region]),
    url: (r) => `/endangered-animals/regions/${r.region}`,
    doc: (r, s, url) => ({
      type: "category",
      title: `${r.label} — endangered species`,
      url,
      description: r.description,
      keywords: ["endangered animals", "conservation", "IUCN Red List", r.label],
      category: "Conservation region",
    }),
  },
  {
    template: "/endangered-animals/species/[slug]",
    records: (s) => s.redList.getDetailedProfiles(),
    url: (r) => `/endangered-animals/species/${r.slug}`,
    doc: (r, s, url) => ({
      type: "animal",
      title: r.commonName,
      url,
      description: r.rangeSummary,
      keywords: [r.redListCategoryLabel, r.taxonGroup, "endangered", "IUCN Red List"],
      scientificName: r.scientificName,
      animalSlugs: [r.slug],
      category: r.redListCategoryLabel,
      // No `group`: the Red List uses its own coarser vocabulary
      // ("reptiles-amphibians", "invertebrates") which is not the FaunaHub
      // taxonomy vocabulary the browse facet is built from. Mixing the two
      // would produce a filter whose counts mean two different things. The
      // taxon group stays searchable as a keyword above.
    }),
  },
  {
    template: "/fauna/continents/[continent]",
    records: (s) => s.continents.CONTINENT_ORDER.map((slug) => s.continents.FAUNA_CONTINENTS[slug]),
    url: (r) => `/fauna/continents/${r.slug}`,
    doc: (r, s, url) => ({
      type: "category",
      title: `${r.label} — animals & wildlife`,
      url,
      description: r.blurb,
      keywords: ["fauna", "continent", "wildlife by region", r.label],
      category: "Continent",
    }),
  },
  {
    template: "/fauna/ocean/[zone]",
    records: (s) => s.ocean.OCEAN_ZONE_ORDER.map((slug) => s.ocean.OCEAN_ZONES[slug]),
    url: (r) => `/fauna/ocean/${r.slug}`,
    doc: (r, s, url) => ({
      type: "category",
      title: `${r.label} — ocean zone animals`,
      url,
      description: r.blurb,
      keywords: ["ocean zone", "deep sea", "marine life", r.depthRange],
      scientificName: r.scientificName,
      category: "Ocean zone",
    }),
  },
  {
    template: "/guides/[slug]",
    records: (s) => s.petChoice.DECISION_PAGES.filter((p) => p.kind === "guide"),
    url: (r) => `${r.parentHub}/${r.slug}`,
    doc: (r, s, url) => articleDoc(r, { url, category: "Pet choice guide" }),
  },
  {
    template: "/kitten-care/[slug]",
    records: (s) => s.puppyKitten.KITTEN_ARTICLES,
    url: (r) => r.path,
    doc: (r, s, url) => articleDoc(r, { url, category: "Kitten care" }),
  },
  {
    template: "/pet-nutrition/[slug]",
    records: (s) => s.petNutrition.PET_NUTRITION_ARTICLES,
    url: (r) => r.path,
    doc: (r, s, url) => articleDoc(r, { url }),
  },
  {
    template: "/pet-safety/[slug]",
    records: (s) => s.petSafety.PET_SAFETY_ARTICLES,
    url: (r) => r.path,
    doc: (r, s, url) => articleDoc(r, { url }),
  },
  {
    template: "/puppy-care/[slug]",
    records: (s) => s.puppyKitten.PUPPY_ARTICLES,
    url: (r) => r.path,
    doc: (r, s, url) => articleDoc(r, { url, category: "Puppy care" }),
  },
  {
    template: "/small-pets/[slug]",
    records: (s) => s.smallPets.SMALL_PET_ARTICLES,
    url: (r) => r.path,
    doc: (r, s, url) => articleDoc(r, { url, category: "Small pets" }),
  },
];

/**
 * Article registries behind STATIC routes.
 *
 * Their pages read the record instead of writing metadata inline, so the
 * harvester finds no literal to read; the registry is the better source anyway.
 */
const STATIC_ARTICLE_SOURCES = [
  (s) => s.petInsurance.INSURANCE_ARTICLES,
  (s) => s.vetCare.VET_CARE_ARTICLES,
  (s) => s.petCost.PET_COST_ARTICLES,
  (s) => s.petCost.BUDGET_GUIDES,
];

/* ------------------------------------------------------------------ *
 * Helpers
 * ------------------------------------------------------------------ */

function clean(text) {
  return typeof text === "string" ? text.replace(/\s+/g, " ").trim() : "";
}

function shorten(text, max = MAX_DESCRIPTION) {
  const value = clean(text);
  if (value.length <= max) return value;
  const cut = value.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");
  const body = lastSpace > max * 0.6 ? cut.slice(0, lastSpace) : cut;
  return `${body.replace(/[\s,;:.]+$/, "")}…`;
}

function dedupe(values) {
  const seen = new Set();
  const out = [];
  for (const value of values ?? []) {
    const text = clean(value);
    const key = text.toLowerCase();
    if (!text || seen.has(key)) continue;
    seen.add(key);
    out.push(text);
  }
  return out;
}

/** Depth-adjusted priority: a hub outranks a leaf of the same kind. */
function priorityFor(type, url) {
  if (UTILITY_ROUTES.has(url)) return UTILITY_PRIORITY;
  const depth = url === "/" ? 0 : url.split("/").length - 1;
  const base = BASE_PRIORITY[type] ?? 40;
  return Math.max(10, Math.min(100, base - Math.max(0, depth - 1) * 6));
}

/**
 * Which shelf a route belongs on, from its path.
 *
 * Only ever applied to routes no registry claimed, so it never overrides
 * structured knowledge — it just stops a real page from being unfindable.
 */
export function inferType(url) {
  if (url === "/") return "hub";
  const segments = url.split("/").filter(Boolean);
  const [first] = segments;

  if (first === "tools") return segments.length === 1 ? "hub" : "tool";
  if (first === "animals") return "animal";
  if (first === "animal-compare" || first === "compare") {
    return segments.length === 1 ? "hub" : "comparison";
  }
  if (first === "animal-intelligence-and-behavior") {
    return segments.length === 1 ? "hub" : "behavior";
  }
  if (first === "animal-research-sources") return segments.length === 1 ? "hub" : "research";
  if (
    first === "animal-taxonomy" ||
    first === "animal-encyclopedia" ||
    first === "endangered-animals" ||
    first === "fauna" ||
    first === "wildlife" ||
    first === "domestic-animals"
  ) {
    return segments.length === 1 ? "hub" : "category";
  }
  if (segments.length === 1) return "hub";
  return "guide";
}

/**
 * Collects documents, one per URL.
 *
 * Registry documents are added first and own the type and title; the later
 * harvest pass can only fill fields they left empty. That ordering is what
 * keeps "Wolf" as a result title instead of the page's full
 * "Wolf — Profile, Habitat, Diet & Behavior".
 */
class DocumentSet {
  constructor() {
    this.byUrl = new Map();
    this.rejected = [];
  }

  add(document) {
    const url = document.url;
    if (typeof url !== "string" || !url.startsWith("/")) {
      this.rejected.push({ url: String(url), reason: "document has no site-relative url" });
      return;
    }
    if (EXCLUDED_ROUTES.has(url)) return;

    const normalized = {
      ...document,
      title: clean(document.title),
      description: shorten(document.description ?? ""),
      aliases: dedupe(document.aliases),
      keywords: dedupe(document.keywords),
      category: clean(document.category) || undefined,
      scientificName: clean(document.scientificName) || undefined,
      animalSlugs: (document.animalSlugs ?? []).filter(Boolean),
    };

    const existing = this.byUrl.get(url);
    if (!existing) {
      this.byUrl.set(url, normalized);
      return;
    }

    if (!existing.description && normalized.description) existing.description = normalized.description;
    if (!existing.scientificName && normalized.scientificName) {
      existing.scientificName = normalized.scientificName;
    }
    if (!existing.category && normalized.category) existing.category = normalized.category;
    if (!existing.group && normalized.group) existing.group = normalized.group;
    if (normalized.aliases.length) existing.aliases = dedupe([...existing.aliases, ...normalized.aliases]);
    if (normalized.keywords.length) existing.keywords = dedupe([...existing.keywords, ...normalized.keywords]);
    if (normalized.animalSlugs.length && existing.animalSlugs.length === 0) {
      existing.animalSlugs = normalized.animalSlugs;
    }
  }

  values() {
    return [...this.byUrl.values()];
  }
}

/** Strip empty optional fields so they never reach the payload. */
function finalize(document) {
  const out = {
    type: document.type,
    title: document.title,
    url: document.url,
    priority: document.priority,
  };
  if (document.description) out.description = document.description;
  if (document.aliases?.length) out.aliases = document.aliases;
  if (document.keywords?.length) out.keywords = document.keywords;
  if (document.scientificName) out.scientificName = document.scientificName;
  if (document.animalSlugs?.length) out.animalSlugs = document.animalSlugs;
  if (document.category) out.category = document.category;
  if (document.group) out.group = document.group;
  // Ordered for readable diffs, then given its deterministic id.
  return { id: `${out.type}:${out.url}`, ...out };
}

/* ------------------------------------------------------------------ *
 * The build
 * ------------------------------------------------------------------ */

export async function buildSearchIndex({ generatedAt }) {
  const sources = await loadSources();
  const set = new DocumentSet();

  const harvested = harvestStaticRoutes(APP_DIR);
  const harvestedByUrl = new Map(harvested.map((row) => [row.url, row]));

  /** Every concrete URL the site actually serves. Built alongside the docs. */
  const concreteRoutes = new Set(harvested.map((row) => row.url));

  /* ---- Classification lookups ------------------------------------ */

  const groupsByAnimal = new Map();
  for (const group of sources.taxonomy.ANIMAL_TAXONOMY_GROUPS) {
    for (const slug of group.existingAnimalSlugs ?? []) {
      const list = groupsByAnimal.get(slug);
      if (list) list.push(group);
      else groupsByAnimal.set(slug, [group]);
    }
  }

  // The browse facet uses the taxonomic groups only — class and phylum level.
  // The registry also carries topic groups ("Reef Animals", "Urban Wildlife")
  // which overlap each other and the taxonomic ones; they stay searchable as
  // keywords but would make a mutually-exclusive filter incoherent.
  const TAXONOMIC_GROUP_SLUGS = [
    ...sources.taxonomy.VERTEBRATE_CLASS_ORDER,
    ...sources.taxonomy.INVERTEBRATE_GROUP_ORDER,
  ];
  const taxonomicGroupRank = new Map(TAXONOMIC_GROUP_SLUGS.map((slug, i) => [slug, i]));
  const groupLabel = new Map(
    sources.taxonomy.ANIMAL_TAXONOMY_GROUPS.map((group) => [group.slug, group.label]),
  );

  /** The single taxonomic group an animal is filed under, if it has one. */
  const taxonomicGroupFor = (slug) => {
    const candidates = (groupsByAnimal.get(slug) ?? [])
      .map((group) => group.slug)
      .filter((groupSlug) => taxonomicGroupRank.has(groupSlug));
    if (candidates.length === 0) return undefined;
    // Registry order is broad-to-narrow, so the earliest listed taxonomic group
    // is the animal's class or phylum rather than an incidental second one.
    return candidates.sort(
      (a, b) => taxonomicGroupRank.get(a) - taxonomicGroupRank.get(b),
    )[0];
  };

  const faunaByAnimal = new Map(
    sources.fauna.FAUNA_RECORDS.map((record) => [record.animalSlug, record]),
  );
  const redListByAnimal = new Map(
    sources.redList.RED_LIST_SPECIES.map((record) => [record.slug, record]),
  );
  const domesticByAnimal = new Map(
    sources.classification.DOMESTIC_ANIMALS.map((record) => [record.slug, record]),
  );

  /* ---- 1. Animals, from the compare registry + their own pages ---- */

  // Each profile's own props carry the classification the page displays. Read
  // once here, keyed by URL.
  const profileFacts = new Map();
  for (const animal of sources.compare.COMPARE_ANIMALS) {
    const page = harvestedByUrl.get(animal.profilePath);
    if (!page || animal.profileKind !== "profile") continue;
    profileFacts.set(animal.slug, harvestAnimalProfileFacts(page.file));
  }

  // Category labels are derived, not authored: for each encyclopedia href, take
  // the label the majority of its own profiles print. That is how the browse
  // chips end up saying "Reptiles & Amphibians" rather than a label invented
  // here that no page actually uses.
  const categoryLabelVotes = new Map();
  for (const facts of profileFacts.values()) {
    if (!facts.parentCategoryHref || !facts.parentCategory) continue;
    const votes = categoryLabelVotes.get(facts.parentCategoryHref) ?? new Map();
    votes.set(facts.parentCategory, (votes.get(facts.parentCategory) ?? 0) + 1);
    categoryLabelVotes.set(facts.parentCategoryHref, votes);
  }
  const categoryLabel = new Map(
    [...categoryLabelVotes.entries()].map(([href, votes]) => [
      href,
      [...votes.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0][0],
    ]),
  );

  /** The encyclopedia hub an animal is filed under, or undefined. */
  const encyclopediaHref = (slug) => {
    const href = profileFacts.get(slug)?.parentCategoryHref;
    // A profile filed at the encyclopedia ROOT has no category — one amphibian
    // does this because FaunaHub has no amphibian hub. Guessing a hub for it
    // would file an animal under a group it does not belong to.
    return href && href !== "/animal-encyclopedia" ? href : undefined;
  };

  for (const animal of sources.compare.COMPARE_ANIMALS) {
    const url = animal.profilePath;
    concreteRoutes.add(url);

    const page = harvestedByUrl.get(url);
    const facts = profileFacts.get(animal.slug);
    const groups = groupsByAnimal.get(animal.slug) ?? [];
    const faunaRecord = faunaByAnimal.get(animal.slug);
    const redListRecord = redListByAnimal.get(animal.slug);
    const domestic = domesticByAnimal.get(animal.slug);
    const href = encyclopediaHref(animal.slug);

    // Aliases come from three places, all of them real strings this site
    // already publishes:
    //   - the profile's own commonName, when it differs from the registry name
    //     (often a parenthetical second name: "Colugo (Flying Lemur)");
    //   - the name inside those parentheses on its own, so "flying lemur" is a
    //     query that works;
    //   - the IUCN common name for the same slug, where one exists.
    // Nothing is authored, and no synonym is guessed.
    const aliases = [];
    const commonName = clean(facts?.commonName ?? "");
    const parenthetical = commonName.match(/^(.+?)\s*\(([^)]+)\)$/);
    if (parenthetical) {
      // Split rather than kept whole: nobody searches for the bracketed form.
      aliases.push(parenthetical[1], parenthetical[2]);
    } else if (commonName) {
      aliases.push(commonName);
    }
    if (redListRecord) aliases.push(redListRecord.commonName);

    // An "alias" identical to the title carries no recall and costs bytes.
    const titleKey = clean(animal.name).toLowerCase();
    const animalAliases = aliases.filter((alias) => clean(alias).toLowerCase() !== titleKey);

    set.add({
      type: "animal",
      title: animal.name,
      url,
      description: page?.description ?? "",
      aliases: animalAliases,
      keywords: [
        ...(facts?.tags ?? []),
        ...groups.map((group) => group.label),
        ...(faunaRecord?.continentSlugs ?? []),
        ...(faunaRecord?.habitatTags ?? []),
        redListRecord?.redListCategoryLabel,
        domestic?.status,
        domestic?.role,
      ],
      // The profile's own scientificName prop is the same string
      // SCIENTIFIC_NAMES is generated from; the registry is preferred so both
      // stay in lockstep, with the prop as a fallback for hub entries.
      scientificName:
        sources.scientificNames.SCIENTIFIC_NAMES[animal.slug] ?? facts?.scientificName,
      animalSlugs: [animal.slug],
      category:
        animal.profileKind === "hub"
          ? "Care hub"
          : (href ? categoryLabel.get(href) : undefined) ??
            (clean(facts?.parentCategory ?? "") || undefined),
      // The browse axis. Deliberately the encyclopedia category and nothing
      // else: it is the one classification every profile carries, it maps
      // 1:1 onto a real hub page, and mixing a second vocabulary into the same
      // field is what makes a filter's counts mean two different things. The
      // taxonomy group stays available as a keyword above.
      group: href ? href.split("/").pop() : undefined,
      priority: priorityFor("animal", url) + (animal.profileKind === "hub" ? 10 : 0),
    });
  }

  /* ---- 2. Every dynamic route, from the registry its route reads --- */

  for (const source of ROUTE_SOURCES) {
    for (const record of source.records(sources)) {
      const url = source.url(record, sources);
      concreteRoutes.add(url);
      const document = source.doc(record, sources, url);
      set.add({ ...document, priority: priorityFor(document.type, url) });
    }
  }

  /* ---- 3. Article registries behind static routes ----------------- */

  for (const pick of STATIC_ARTICLE_SOURCES) {
    for (const article of pick(sources) ?? []) {
      const document = articleDoc(article, { url: article.path });
      set.add({ ...document, priority: priorityFor("guide", article.path) });
    }
  }

  /* ---- 4. Legacy hand-written comparisons ------------------------- */

  // Added BEFORE the harvest pass, not after. DocumentSet is first-wins, so a
  // registry document has to be registered before the harvester reaches the
  // same URL — otherwise these seven keep their long SEO page titles
  // ("Lion vs Tiger — Size, Strength, Habitat & Key Differences") instead of
  // the registry's "Lion vs Tiger", and a query for "lion habitat" then ranks
  // the comparison above the lion's own profile.
  for (const record of sources.compare.EXTERNAL_COMPARISONS) {
    concreteRoutes.add(record.href);
    const [slugA, slugB] = record.canonicalPairKey.split("--");
    set.add({
      type: "comparison",
      title: record.title,
      url: record.href,
      description: record.summary,
      keywords: [sources.compare.categoryName(record.category)],
      animalSlugs: [slugA, slugB],
      category: sources.compare.categoryName(record.category),
      priority: priorityFor("comparison", record.href),
    });
  }

  /* ---- 5. Every remaining static route ---------------------------- */

  for (const page of harvested) {
    if (!page.title || page.noindex) continue;
    const type = inferType(page.url);
    set.add({
      type,
      title: page.title,
      url: page.url,
      description: page.description ?? "",
      priority: priorityFor(type, page.url),
    });
  }

  /* ---- 6. Pair index --------------------------------------------- */

  const pairs = {};
  for (const record of sources.compare.COMPARISONS) {
    pairs[record.canonicalPairKey] = `${sources.compare.COMPARE_BASE}/${record.slug}`;
  }
  // The seven legacy pages are real, already-indexed URLs, so a two-animal
  // query must resolve to them rather than to a second URL that does not exist
  // under /animal-compare.
  for (const record of sources.compare.EXTERNAL_COMPARISONS) {
    pairs[record.canonicalPairKey] = record.href;
  }
  /* ---- 7. Animal name lookup -------------------------------------- */

  // The phrase vocabulary the animal-phrase scanner matches against.
  //
  // Registry names first, so a name that is canonical for one animal is never
  // stolen by another animal's alias. Then EVERY other animal document — Red
  // List species included. That second pass is what stops "whale shark" being
  // read as "whale" + "shark" and answered with a comparison of two different
  // animals: the scanner matches the longest known name first, so the species
  // has to be IN the vocabulary to win.
  const animalNames = {};
  for (const animal of sources.compare.COMPARE_ANIMALS) {
    animalNames[animal.name.toLowerCase()] = animal.slug;
  }
  for (const document of set.values()) {
    if (document.type !== "animal") continue;
    const [slug] = document.animalSlugs ?? [];
    if (!slug) continue;
    for (const name of [document.title, ...(document.aliases ?? [])]) {
      const key = clean(name).toLowerCase();
      if (key && !animalNames[key]) animalNames[key] = slug;
    }
  }

  const documents = set
    .values()
    .map(finalize)
    .sort((a, b) => b.priority - a.priority || a.url.localeCompare(b.url));

  /* ---- 8. Browse facets ------------------------------------------ */

  // Only categories that actually have indexed animals are offered. A chip
  // opening onto an empty list would advertise coverage that does not exist.
  const animalsPerGroup = new Map();
  for (const document of documents) {
    if (document.type !== "animal" || !document.group) continue;
    animalsPerGroup.set(document.group, (animalsPerGroup.get(document.group) ?? 0) + 1);
  }

  const animalGroups = [...animalsPerGroup.entries()]
    .map(([slug, count]) => ({
      slug,
      label: categoryLabel.get(`/animal-encyclopedia/${slug}`) ?? slug,
      count,
      // Each chip also has a real, crawlable hub behind it, so browsing in the
      // overlay and browsing the site lead to the same place.
      href: `/animal-encyclopedia/${slug}`,
    }))
    .sort((a, b) => b.count - a.count || a.slug.localeCompare(b.slug));

  const classifiedAnimals = [...animalsPerGroup.values()].reduce((a, b) => a + b, 0);
  const totalAnimalProfiles = documents.filter(
    (document) => document.type === "animal" && document.url.startsWith("/animals/"),
  ).length;

  return {
    payload: {
      version: 1,
      generatedAt,
      documents,
      pairs,
      animalNames,
      facets: {
        animalGroups,
        // Reported so the UI can be honest about coverage instead of implying
        // the filter spans every profile on the site.
        classifiedAnimals,
        totalAnimalProfiles,
      },
    },
    concreteRoutes,
    rejected: set.rejected,
  };
}

/* ------------------------------------------------------------------ *
 * Validation
 *
 * Runs on every build. A failure means the index would ship a duplicate, an
 * unpublished record, or a URL that 404s — all worse than a failed build.
 * ------------------------------------------------------------------ */

export function validateSearchIndex(payload, concreteRoutes, rejected = []) {
  const issues = [];
  const add = (id, issue) => issues.push({ id, issue });

  for (const entry of rejected) add(entry.url, entry.reason);

  const seenIds = new Set();
  const seenUrls = new Set();
  const dynamicPatterns = findDynamicRouteTemplates(APP_DIR).map(templateToPattern);
  const staticRoutes = new Set(harvestStaticRoutes(APP_DIR).map((row) => row.url));

  for (const document of payload.documents) {
    const label = document.id || document.url || "(unidentified)";

    if (!document.id) add(label, "missing id");
    else if (seenIds.has(document.id)) add(label, `duplicate id "${document.id}"`);
    seenIds.add(document.id);

    if (!document.url) add(label, "missing url");
    else if (seenUrls.has(document.url)) add(label, `duplicate url "${document.url}"`);
    seenUrls.add(document.url);

    if (!clean(document.title)) add(label, "missing title");
    if (!BASE_PRIORITY[document.type]) add(label, `unknown document type "${document.type}"`);

    if (document.url) {
      const url = document.url;
      if (!url.startsWith("/")) add(label, `url is not site-relative: "${url}"`);
      if (/[?#]/.test(url)) add(label, `url carries a query or fragment: "${url}"`);
      if (url !== "/" && url.endsWith("/")) add(label, `url has a trailing slash: "${url}"`);
      if (url.includes("//")) add(label, `url has an empty segment: "${url}"`);
      if (url.includes("[")) add(label, `url is an un-substituted template: "${url}"`);
      if (EXCLUDED_ROUTES.has(url)) add(label, `url is on the exclusion list: "${url}"`);

      if (!concreteRoutes.has(url)) add(label, `url is not a route this site generates: "${url}"`);

      const shapeExists =
        staticRoutes.has(url) || dynamicPatterns.some((pattern) => pattern.test(url));
      if (!shapeExists) add(label, `url matches no route directory on disk: "${url}"`);
    }

    if (document.id && document.url && document.id !== `${document.type}:${document.url}`) {
      add(label, "id is not the deterministic `type:url` form");
    }

    if (typeof document.priority !== "number" || document.priority < 0 || document.priority > 110) {
      add(label, `priority out of range: ${document.priority}`);
    }

    if (document.type === "comparison" && document.animalSlugs && document.animalSlugs.length !== 2) {
      add(label, `comparison names ${document.animalSlugs.length} animals, expected 2`);
    }

    // Slugs must be slugs. A registry field named `relatedAnimalSlugs` that
    // actually holds { slug, name } objects got copied through once, and every
    // membership test against those documents then failed silently.
    for (const slug of document.animalSlugs ?? []) {
      if (typeof slug !== "string" || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) {
        add(label, `animalSlugs contains a non-slug value: ${JSON.stringify(slug)}`);
      }
    }
  }

  // Nothing the site generates may be unfindable, apart from deliberate
  // exclusions. This is the half of the gate that catches a NEW cluster
  // shipping without ever appearing in search.
  for (const url of concreteRoutes) {
    if (EXCLUDED_ROUTES.has(url)) continue;
    if (!seenUrls.has(url)) add(url, "route exists but is not indexed");
  }

  const seenPairUrls = new Set();
  for (const [key, url] of Object.entries(payload.pairs)) {
    const expected = key.split("--").sort().join("--");
    if (key !== expected) add(key, `pair key is not canonically sorted (expected "${expected}")`);
    if (!seenUrls.has(url)) add(key, `pair points at an unindexed url "${url}"`);
    if (seenPairUrls.has(url)) add(key, `two pairs resolve to the same url "${url}"`);
    seenPairUrls.add(url);
  }

  for (const [name, slug] of Object.entries(payload.animalNames)) {
    if (name !== name.toLowerCase()) add(name, "animal name key is not lowercase");
    if (!slug) add(name, "animal name maps to an empty slug");
  }

  return issues;
}

/**
 * Every dynamic route on disk must have a ROUTE_SOURCES entry, and vice versa.
 *
 * Without this, adding a new dynamic cluster would silently produce hundreds of
 * pages that search cannot see — the exact failure mode a "just add it to the
 * list" architecture is supposed to prevent.
 */
export function assertRouteSourcesCoverTemplates() {
  const onDisk = new Set(findDynamicRouteTemplates(APP_DIR));
  const declared = new Set(ROUTE_SOURCES.map((source) => source.template));
  const issues = [];

  for (const template of onDisk) {
    if (!declared.has(template)) {
      issues.push({
        id: template,
        issue: "dynamic route has no ROUTE_SOURCES entry, so its pages would be unsearchable",
      });
    }
  }
  for (const template of declared) {
    if (!onDisk.has(template)) {
      issues.push({ id: template, issue: "ROUTE_SOURCES entry has no matching route on disk" });
    }
  }
  return issues;
}

/** Turn "/animal-compare/[slug]" into /^\/animal-compare\/[^/]+$/. */
function templateToPattern(template) {
  const source = template
    .split("/")
    .map((segment) => {
      if (!segment) return "";
      if (segment.startsWith("[") && segment.endsWith("]")) {
        return segment.startsWith("[...") ? "[^?#]+" : "[^/?#]+";
      }
      return segment.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    })
    .join("/");
  return new RegExp(`^${source}$`);
}

/**
 * Fail loudly if a private backlog entry ever reaches the index.
 *
 * The backlogs are imported ONLY here, and only to check against. A row with
 * status "published" describes a page that was since written, so its slug
 * appearing is correct; every other status describes a page that does not
 * exist, and a search result pointing at one would be a 404 and an advertised
 * page FaunaHub never wrote.
 */
export async function assertNoBacklogLeakage(payload) {
  const [{ COMPARISON_BACKLOG }, { BEHAVIOR_BACKLOG }] = await Promise.all([
    load("animal-compare/backlog.ts"),
    load("animal-behavior-backlog.ts"),
  ]);

  const publishedUrls = new Set(payload.documents.map((document) => document.url));
  const issues = [];

  for (const entry of COMPARISON_BACKLOG) {
    if (entry.status === "published") continue;
    const slug = entry.publishedSlug ?? entry.proposedSlug;
    if (!slug) continue;
    const url = `/animal-compare/${slug}`;
    if (publishedUrls.has(url)) {
      issues.push({
        id: entry.id ?? slug,
        issue: `backlogged comparison "${slug}" (status "${entry.status}") reached the index`,
      });
    }
  }

  for (const entry of BEHAVIOR_BACKLOG) {
    if (entry.status === "published") continue;
    const url = entry.proposedPath;
    if (typeof url !== "string" || !url.startsWith("/")) continue;
    if (publishedUrls.has(url)) {
      issues.push({
        id: entry.id ?? url,
        issue: `unpublished behavior page "${url}" (status "${entry.status}") reached the index`,
      });
    }
  }

  return issues;
}

export { APP_DIR, REPO_ROOT, ROUTE_SOURCES, EXCLUDED_ROUTES };
