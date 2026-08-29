/**
 * Browse presets — one-click entry points into the collection.
 *
 * Every preset is a real filter selection over facets that shipped, so a
 * preset can never promise a slice the Finder cannot actually produce. A test
 * asserts each one resolves to at least one animal and that each `href` is a
 * page that exists.
 *
 * Note what is NOT here, and why:
 *
 *  - No "Popular" or "Trending" preset. FaunaHub has no first-party traffic
 *    data wired into the site, so any such label would be describing something
 *    nobody measured. The word used throughout is "Browse".
 *  - No "Arctic and polar animals" or "Rainforest animals". Those would have to
 *    come from the fauna geography habitat tags, which cover 283 of 642
 *    profiles. A preset titled "Polar animals" that silently omits half the
 *    polar animals FaunaHub has profiled is worse than no preset, because a
 *    reader has no way to see the omission.
 *  - No "Ocean animals". "Marine Animals" below is the encyclopedia's own
 *    shelf, and it is labelled as the shelf it is: sharks are filed under Fish
 *    and sea snakes under Reptiles, so the shelf is not a claim about which
 *    animals live in the sea.
 */
import type { FinderSelection } from "./filter.ts";

export interface FinderPreset {
  id: string;
  label: string;
  /** One line on what the reader gets. No superlatives, no counts — the count
   * is rendered live from the index so it can never go stale. */
  blurb: string;
  selection: FinderSelection;
  /** The real hub page behind the preset, where one exists, so browsing in the
   * Finder and browsing the site lead to the same crawlable place. */
  href?: string;
}

export const FINDER_PRESETS: FinderPreset[] = [
  {
    id: "mammals",
    label: "Mammals",
    blurb: "Big cats, primates, whales, bats and the rest of the class.",
    selection: { group: ["mammals"] },
    href: "/animal-encyclopedia/mammals",
  },
  {
    id: "birds",
    label: "Birds",
    blurb: "Raptors, waterbirds, songbirds and flightless species.",
    selection: { group: ["birds"] },
    href: "/animal-encyclopedia/birds",
  },
  {
    id: "reptiles-amphibians",
    label: "Reptiles & amphibians",
    blurb: "Snakes, lizards, crocodilians, turtles, frogs and salamanders.",
    selection: { group: ["reptiles"] },
    href: "/animal-encyclopedia/reptiles",
  },
  {
    id: "fish",
    label: "Fish",
    blurb: "Sharks and rays, bony fish, freshwater and reef species.",
    selection: { group: ["fish"] },
    href: "/animal-encyclopedia/fish",
  },
  {
    id: "marine-animals",
    label: "Marine animals",
    blurb: "The encyclopedia's marine shelf — sea mammals, corals and reef life.",
    selection: { group: ["marine-animals"] },
    href: "/animal-encyclopedia/marine-animals",
  },
  {
    id: "insects-invertebrates",
    label: "Insects & invertebrates",
    blurb: "Insects, arachnids, molluscs, crustaceans and their relatives.",
    selection: { group: ["insects"] },
    href: "/animal-encyclopedia/insects",
  },
  {
    id: "amphibians-only",
    label: "Amphibians only",
    blurb: "Frogs, toads, salamanders, newts and caecilians on their own.",
    selection: { taxon: ["amphibians"] },
    href: "/animal-taxonomy/reptiles-amphibians",
  },
  {
    id: "molluscs",
    label: "Molluscs",
    blurb: "Octopuses, squid, snails, clams and their kin.",
    selection: { taxon: ["mollusks"] },
    href: "/animal-taxonomy/invertebrates",
  },
  {
    id: "domestic",
    label: "Domesticated animals",
    blurb: "The reviewed list of animals FaunaHub records as domesticated.",
    selection: { coverage: ["domestic"] },
    href: "/domestic-animals",
  },
  {
    id: "comparable",
    label: "Animals with comparisons",
    blurb: "Every animal that appears in at least one side-by-side page.",
    selection: { coverage: ["comparison"] },
    href: "/animal-compare",
  },
  {
    id: "conservation",
    label: "With a conservation record",
    blurb: "Profiles joined to a FaunaHub Red List entry.",
    selection: { coverage: ["conservation"] },
    href: "/endangered-animals",
  },
];

/**
 * Related destinations shown beneath the Finder and offered when a filter
 * combination matches nothing.
 *
 * Each is a real hub that indexes its own subject in full, so a reader who
 * cannot find what they want through structured filters still has a route into
 * the axes the Finder deliberately does not offer — geography, conservation,
 * diet, lifespan, behaviour.
 */
export interface FinderDestination {
  label: string;
  href: string;
  blurb: string;
}

export const FINDER_DESTINATIONS: FinderDestination[] = [
  {
    label: "Animal Encyclopedia",
    href: "/animal-encyclopedia",
    blurb: "Every profile, grouped into the six shelves the Finder filters on.",
  },
  {
    label: "Animal Compare Center",
    href: "/animal-compare",
    blurb: "Side-by-side pages explaining what actually separates two animals.",
  },
  {
    label: "Fauna by Continent",
    href: "/fauna",
    blurb: "Where animals live, by continent and by ocean depth zone.",
  },
  {
    label: "Endangered Animals",
    href: "/endangered-animals",
    blurb: "IUCN Red List species by category and by region.",
  },
  {
    label: "Animal Taxonomy",
    href: "/animal-taxonomy",
    blurb: "How animal life is grouped, and what FaunaHub covers so far.",
  },
  {
    label: "Intelligence & Behavior",
    href: "/animal-intelligence-and-behavior",
    blurb: "How animals learn, communicate and solve problems.",
  },
  {
    label: "Lifespans & Life Stages",
    href: "/animal-lifespans",
    blurb: "How long animals live, and how wild and captive figures differ.",
  },
  {
    label: "Animal Food & Diet",
    href: "/animal-food-and-diet",
    blurb: "What animals eat, and where feeding advice stops.",
  },
  {
    label: "Senses & Adaptations",
    href: "/animal-senses-and-adaptations",
    blurb: "Vision, hearing, echolocation, camouflage and migration.",
  },
  {
    label: "Domestic & Companion Animals",
    href: "/domestic-animals",
    blurb: "Which animals are domesticated, and what that word actually means.",
  },
];

/** The shorter list offered when a filter combination finds nothing. */
export const FINDER_FALLBACK_DESTINATIONS: FinderDestination[] = [
  FINDER_DESTINATIONS[0],
  FINDER_DESTINATIONS[1],
  FINDER_DESTINATIONS[2],
  FINDER_DESTINATIONS[3],
];
