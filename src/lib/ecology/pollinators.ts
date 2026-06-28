import type { SourceLink } from "@/lib/educational/types";
import {
  SRC_XERCES,
  SRC_USDA_FOREST_POLLINATORS,
  SRC_USFWS_POLLINATORS,
  SRC_NPS_POLLINATORS,
  SRC_IUCN,
  SRC_BRITANNICA_ANIMALS,
} from "@/lib/educational/animal-sources";

/**
 * Pollinator ecology data layer.
 *
 * Pollination is an ECOLOGICAL INTERACTION, not a taxonomic group: bees,
 * butterflies, moths, flies, beetles, some wasps, and a range of birds, bats,
 * and other animals can all act as pollinators in different systems. This file
 * captures a curated, source-backed, REPRESENTATIVE selection of pollinator
 * animals that have a FaunaHub profile — it is not a complete global inventory,
 * and it does not assign invented "importance" or "urgency" scores.
 *
 * Every `animalSlug` must point to a real /animals/[slug] page. Records are
 * deduped by slug (see the build-time check in the QA sweep). Animals that
 * commonly visit flowers but are usually NOT effective pollinators are kept
 * OUT of the records and listed separately in FLOWER_VISITOR_CAVEATS.
 */

export type PollinatorGroup =
  | "bee"
  | "butterfly"
  | "moth"
  | "fly"
  | "beetle"
  | "wasp"
  | "bird"
  | "bat"
  | "other";

/**
 * How confident we are in the pollination framing for the record's scope:
 * - verified: well-established pollination role for the named group/species
 * - broad-group: a large group where SOME members pollinate; stated cautiously
 * - representative: a representative example; role varies by plant/region
 * - source-review-pending: placeholder; not used for published records
 */
export type PollinatorConfidence =
  | "verified"
  | "broad-group"
  | "representative"
  | "source-review-pending";

export interface PollinatorRecord {
  animalSlug: string;
  commonName: string;
  pollinatorGroup: PollinatorGroup;
  /** Short, cautious description of the pollination role. */
  pollinationRole: string;
  /** Scope / range / taxonomic caveat that keeps the claim honest. */
  scopeNote: string;
  confidence: PollinatorConfidence;
  /** True if this batch created the profile; false if an existing page was integrated. */
  isNewProfile: boolean;
  /** Optional calm safety note (no medical/handling/control advice). */
  safetyNote?: string;
}

export const POLLINATOR_GROUPS: {
  key: PollinatorGroup;
  label: string;
  blurb: string;
}[] = [
  { key: "bee", label: "Bees", blurb: "The most familiar pollinators and, as a group, among the most important — from social bumblebees to thousands of solitary species. The honey bee is just one (often managed) species." },
  { key: "butterfly", label: "Butterflies", blurb: "Day-flying Lepidoptera that nectar at flowers. Many can act as pollinators, though effectiveness varies and some large butterflies feed mostly on non-floral resources." },
  { key: "moth", label: "Moths", blurb: "Often nocturnal pollinators of pale, long-tubed, night-scented flowers. Important in many systems — though some adult moths never feed at all." },
  { key: "fly", label: "Flies", blurb: "Hoverflies and other flies are widespread and frequently underrated pollinators. Many mimic bees or wasps but cannot sting." },
  { key: "beetle", label: "Beetles", blurb: "One of the most ancient pollinator groups, important for some early-diverging plant lineages. Only some beetles are flower visitors." },
  { key: "wasp", label: "Wasps & specialist pollinators", blurb: "Most wasps are minor pollinators, but a few lineages — fig wasps and pollen wasps — are highly specialized flower pollinators." },
  { key: "bird", label: "Birds", blurb: "Nectar-feeding birds such as hummingbirds (the Americas), sunbirds (the Old World), and honeyeaters (Australasia) pollinate many plants in their regions." },
  { key: "bat", label: "Bats", blurb: "Some bats pollinate night-blooming plants in tropical and desert regions. This is region-specific and true of certain bats, not all of them." },
];

export const POLLINATOR_RECORDS: PollinatorRecord[] = [
  // --- Bees (new profiles) ---
  { animalSlug: "bumblebee", commonName: "Bumblebee", pollinatorGroup: "bee", pollinationRole: "Effective buzz pollinator (sonication) of many wild plants and some crops such as tomato and blueberry.", scopeNote: "Genus Bombus (~250+ species), mainly temperate and montane Northern Hemisphere and parts of South America; role varies by species.", confidence: "verified", isNewProfile: true, safetyNote: "Generally non-aggressive; males cannot sting and females rarely do." },
  { animalSlug: "carpenter-bee", commonName: "Carpenter Bee", pollinatorGroup: "bee", pollinationRole: "Visits and pollinates many flowers; some also 'rob' nectar through a slit at the flower base.", scopeNote: "Large carpenter bees, genus Xylocopa; warm and temperate regions worldwide.", confidence: "verified", isNewProfile: true, safetyNote: "Males cannot sting; females rarely do." },
  { animalSlug: "mason-bee", commonName: "Mason Bee", pollinatorGroup: "bee", pollinationRole: "Efficient early-spring pollinator of fruit trees and wildflowers in some regions.", scopeNote: "Solitary cavity-nesting bees, genus Osmia; mainly Northern Hemisphere.", confidence: "verified", isNewProfile: true, safetyNote: "Solitary and gentle; rarely sting." },
  { animalSlug: "leafcutter-bee", commonName: "Leafcutter Bee", pollinatorGroup: "bee", pollinationRole: "Carries pollen on dense belly hairs and pollinates wildflowers and some crops.", scopeNote: "Family Megachilidae, especially Megachile; worldwide. Not the leafcutter ANT.", confidence: "verified", isNewProfile: true, safetyNote: "Solitary and gentle." },
  { animalSlug: "orchid-bee", commonName: "Orchid Bee", pollinatorGroup: "bee", pollinationRole: "Pollinator of certain orchids and other plants; males collect floral fragrances.", scopeNote: "Tribe Euglossini; primarily Neotropical (Central and South America).", confidence: "verified", isNewProfile: true },
  // --- Butterflies & moths (new) ---
  { animalSlug: "painted-lady-butterfly", commonName: "Painted Lady", pollinatorGroup: "butterfly", pollinationRole: "Nectars at a wide range of flowers and can act as a pollinator; a famous long-distance migrant.", scopeNote: "Vanessa cardui; one of the world's most widespread butterflies.", confidence: "representative", isNewProfile: true },
  { animalSlug: "hawk-moth", commonName: "Hawk Moth", pollinatorGroup: "moth", pollinationRole: "Important nocturnal pollinator of long-tubed flowers; many hover to feed in flight.", scopeNote: "Family Sphingidae; worldwide. Not all moths feed or pollinate as adults.", confidence: "verified", isNewProfile: true },
  { animalSlug: "hummingbird-hawk-moth", commonName: "Hummingbird Hawk-moth", pollinatorGroup: "moth", pollinationRole: "Day-flying nectar feeder and flower visitor that hovers like a hummingbird.", scopeNote: "Macroglossum stellatarum; Eurasia and North Africa. An insect, not a bird.", confidence: "representative", isNewProfile: true },
  // --- Flies (new) ---
  { animalSlug: "hoverfly", commonName: "Hoverfly", pollinatorGroup: "fly", pollinationRole: "Widespread and often underrated pollinator; visits many open flowers.", scopeNote: "Family Syrphidae (flower flies); true flies (Diptera), worldwide. Many mimic bees or wasps but cannot sting.", confidence: "verified", isNewProfile: true, safetyNote: "Harmless; cannot sting despite bee-like or wasp-like colours." },
  // --- Beetles (new) ---
  { animalSlug: "longhorn-beetle", commonName: "Longhorn Beetle", pollinatorGroup: "beetle", pollinationRole: "Flower-visiting lineages feed on pollen and nectar and pollinate; many other species are wood-borers.", scopeNote: "Family Cerambycidae; pollination mainly by flower longhorns (e.g. subfamily Lepturinae).", confidence: "representative", isNewProfile: true },
  // --- Wasps (new) ---
  { animalSlug: "fig-wasp", commonName: "Fig Wasp", pollinatorGroup: "wasp", pollinationRole: "Obligate, often species-specific pollinator of fig trees in a tight plant–insect mutualism.", scopeNote: "Family Agaonidae; pantropical. A specialized system — and not all fig-associated wasps are pollinators.", confidence: "verified", isNewProfile: true },
  { animalSlug: "pollen-wasp", commonName: "Pollen Wasp", pollinatorGroup: "wasp", pollinationRole: "Unusual wasps that provision nests with pollen and nectar and pollinate some plants.", scopeNote: "Subfamily Masarinae; mainly arid regions. Most other wasps are only minor pollinators.", confidence: "verified", isNewProfile: true, safetyNote: "Not aggressive; focused on flowers rather than people." },
  // --- Birds (new) ---
  { animalSlug: "honeyeater", commonName: "Honeyeater", pollinatorGroup: "bird", pollinationRole: "Nectar-feeding bird that pollinates many native plants, including eucalypts and banksias.", scopeNote: "Family Meliphagidae; Australasia. Not a hummingbird (a different bird family).", confidence: "verified", isNewProfile: true },
  // --- Bats (new) ---
  { animalSlug: "nectar-bat", commonName: "Nectar Bat", pollinatorGroup: "bat", pollinationRole: "Pollinates night-blooming plants such as agave, cactus, and some bananas in specific regions.", scopeNote: "Specialized nectar bats (e.g. subfamily Glossophaginae) and some larger bats; region-specific.", confidence: "representative", isNewProfile: true },

  // --- Integrated existing FaunaHub profiles ---
  { animalSlug: "bee", commonName: "Bee", pollinatorGroup: "bee", pollinationRole: "Bees as a group are among the most important pollinators worldwide; the honey bee is one, often managed, species.", scopeNote: "Clade Anthophila (~20,000 species). Wild bee diversity is not the same as the single honey bee.", confidence: "broad-group", isNewProfile: false },
  { animalSlug: "butterfly", commonName: "Butterfly", pollinatorGroup: "butterfly", pollinationRole: "Many butterflies nectar at flowers and can act as pollinators; effectiveness varies by species.", scopeNote: "Order Lepidoptera (day-flying); worldwide.", confidence: "broad-group", isNewProfile: false },
  { animalSlug: "monarch-butterfly", commonName: "Monarch Butterfly", pollinatorGroup: "butterfly", pollinationRole: "Nectars at many flowers during its famous migration and can act as a pollinator.", scopeNote: "Danaus plexippus; the Americas, with some introduced populations.", confidence: "representative", isNewProfile: false },
  { animalSlug: "moth", commonName: "Moth", pollinatorGroup: "moth", pollinationRole: "Some moths, especially at night, are important pollinators; others do not feed as adults.", scopeNote: "Order Lepidoptera (mostly night-flying); worldwide. Not all moths pollinate.", confidence: "broad-group", isNewProfile: false },
  { animalSlug: "beetle", commonName: "Beetle", pollinatorGroup: "beetle", pollinationRole: "Beetle pollination is ancient; some beetles pollinate magnolias, water lilies, and other plants.", scopeNote: "Order Coleoptera; only some lineages are flower-visiting pollinators.", confidence: "broad-group", isNewProfile: false },
  { animalSlug: "wasp", commonName: "Wasp", pollinatorGroup: "wasp", pollinationRole: "Most wasps are minor pollinators, but some — fig wasps and pollen wasps — are specialized pollinators.", scopeNote: "Order Hymenoptera (Vespidae and many other families); worldwide.", confidence: "broad-group", isNewProfile: false },
  { animalSlug: "hummingbird", commonName: "Hummingbird", pollinatorGroup: "bird", pollinationRole: "Specialized nectar-feeding birds that pollinate many flowers, often co-adapted with them.", scopeNote: "Family Trochilidae; restricted to the Americas.", confidence: "verified", isNewProfile: false },
  { animalSlug: "sunbird", commonName: "Sunbird", pollinatorGroup: "bird", pollinationRole: "Old World nectar-feeding birds that pollinate many plants; resemble hummingbirds only by convergence.", scopeNote: "Family Nectariniidae; Africa, Asia, and Australasia. Not hummingbirds.", confidence: "verified", isNewProfile: false },
  { animalSlug: "bat", commonName: "Bat", pollinatorGroup: "bat", pollinationRole: "Certain nectar- and fruit-feeding bats are key pollinators of night-blooming plants.", scopeNote: "Order Chiroptera; pollination by specific bats in tropical and desert regions, not all bats.", confidence: "broad-group", isNewProfile: false },
];

/**
 * Animals that frequently visit flowers but are usually NOT effective
 * pollinators — kept out of POLLINATOR_RECORDS so the data stays honest, and
 * used on the hub to explain "flower visiting" vs "pollination".
 */
export interface FlowerVisitorCaveat {
  animalSlug: string;
  commonName: string;
  note: string;
}

export const FLOWER_VISITOR_CAVEATS: FlowerVisitorCaveat[] = [
  { animalSlug: "ant", commonName: "Ants", note: "Ants often visit flowers for nectar, but they are usually minor or ineffective pollinators — they groom frequently and some of their secretions can reduce pollen viability." },
  { animalSlug: "luna-moth", commonName: "Luna moth", note: "Adult luna moths have no functional mouthparts and do not feed at all, so despite being moths they do not pollinate — a reminder that not every moth is a pollinator." },
  { animalSlug: "blue-morpho-butterfly", commonName: "Blue morpho", note: "Adult blue morphos feed mainly on fermenting fruit, tree sap, and fungi rather than flower nectar, so they are only minor flower pollinators." },
];

/** Authoritative, reachable references for the hub's methodology/sources. */
export const POLLINATOR_SOURCES: SourceLink[] = [
  SRC_XERCES,
  SRC_USDA_FOREST_POLLINATORS,
  SRC_USFWS_POLLINATORS,
  SRC_NPS_POLLINATORS,
  SRC_IUCN,
  SRC_BRITANNICA_ANIMALS,
];

export function getPollinatorsByGroup(group: PollinatorGroup): PollinatorRecord[] {
  return POLLINATOR_RECORDS.filter((r) => r.pollinatorGroup === group);
}

export function pollinatorGroupCounts(): Record<PollinatorGroup, number> {
  return POLLINATOR_RECORDS.reduce(
    (acc, r) => {
      acc[r.pollinatorGroup] = (acc[r.pollinatorGroup] ?? 0) + 1;
      return acc;
    },
    {} as Record<PollinatorGroup, number>,
  );
}

/** Build-time-safe dedupe helper: returns any slug that appears more than once. */
export function duplicatePollinatorSlugs(): string[] {
  const seen = new Set<string>();
  const dups: string[] = [];
  for (const r of POLLINATOR_RECORDS) {
    if (seen.has(r.animalSlug)) dups.push(r.animalSlug);
    seen.add(r.animalSlug);
  }
  return dups;
}

export const POLLINATOR_RECORD_COUNT = POLLINATOR_RECORDS.length;
