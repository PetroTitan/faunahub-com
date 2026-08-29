/**
 * Discovery destinations shown before a reader types, and offered when a query
 * finds nothing.
 *
 * Every entry is a real hub route that already exists on the site;
 * tests/search-index.test.ts asserts each one is present in the generated index,
 * so a hub that is ever renamed or removed fails the build rather than becoming
 * a dead link in the search panel.
 *
 * Note the labels: "Explore", never "Trending" or "Popular". FaunaHub has no
 * first-party traffic data wired into the client, so calling anything popular
 * would be asserting something nobody measured. What these are is editorially
 * chosen entry points into the largest clusters — which is a claim the site can
 * actually stand behind.
 */

export interface DiscoveryDestination {
  label: string;
  href: string;
  /** One line on what a reader finds there. */
  blurb: string;
}

/** The primary grid, shown in the overlay's initial state. */
export const DISCOVERY_DESTINATIONS: DiscoveryDestination[] = [
  {
    label: "Animal Encyclopedia",
    href: "/animal-encyclopedia",
    blurb: "Species profiles by group — mammals, birds, fish, reptiles, insects.",
  },
  {
    label: "Animal Finder",
    href: "/animal-finder",
    blurb: "Browse and filter every animal profile by group and taxonomy.",
  },
  {
    label: "Compare Animals",
    href: "/animal-compare",
    blurb: "Side-by-side pages that explain what actually separates two animals.",
  },
  {
    label: "Animal Taxonomy",
    href: "/animal-taxonomy",
    blurb: "How animal life is grouped, and what FaunaHub covers so far.",
  },
  {
    label: "Intelligence & Behavior",
    href: "/animal-intelligence-and-behavior",
    blurb: "How animals learn, communicate, and solve problems.",
  },
  {
    label: "Lifespans & Life Stages",
    href: "/animal-lifespans",
    blurb: "How long animals live, and how wild and captive figures differ.",
  },
  {
    label: "Senses & Adaptations",
    href: "/animal-senses-and-adaptations",
    blurb: "Vision, hearing, echolocation, camouflage, migration.",
  },
  {
    label: "Wildlife",
    href: "/wildlife",
    blurb: "Habitats, ecology, and biodiversity explainers.",
  },
  {
    label: "Endangered Animals",
    href: "/endangered-animals",
    blurb: "IUCN Red List species, by category and by region.",
  },
];

/**
 * The shorter list offered when a search finds nothing. Kept to the broadest
 * entry points, because a reader who just failed does not want another wall.
 */
export const FALLBACK_DESTINATIONS: DiscoveryDestination[] = [
  // Selected BY HREF, not by position. These were three numeric indexes into
  // the list above until inserting Animal Finder at index 1 silently pushed
  // Animal Taxonomy out of the no-results state — a change nothing named and
  // no test caught. Naming the destination makes the intent explicit and makes
  // a missing one fail loudly at build time instead.
  byHref("/animal-encyclopedia"),
  byHref("/animal-compare"),
  byHref("/animal-taxonomy"),
  {
    label: "Pet Care Tools",
    href: "/tools",
    blurb: "Age calculators, cost planning, and setup checklists.",
  },
];

function byHref(href: string): DiscoveryDestination {
  const found = DISCOVERY_DESTINATIONS.find((destination) => destination.href === href);
  if (!found) throw new Error(`no discovery destination for ${href}`);
  return found;
}

/** Every href referenced above. Used by the test that keeps them real. */
export const ALL_DISCOVERY_HREFS: string[] = [
  ...new Set([
    ...DISCOVERY_DESTINATIONS.map((destination) => destination.href),
    ...FALLBACK_DESTINATIONS.map((destination) => destination.href),
  ]),
];
