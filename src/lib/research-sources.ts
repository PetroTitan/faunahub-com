/**
 * Animal research source-literacy data layer.
 *
 * This is an EDUCATIONAL description of the kinds of institution-backed sources
 * useful for animal taxonomy, conservation, range/ecology, animal-care
 * boundaries, and image licensing. It is NOT a claim of partnership,
 * endorsement, certification, or affiliation with any organisation, and it does
 * NOT assign ratings, trust scores, or authority badges. Every source should be
 * checked at its own current page; databases change and can contain errors.
 */

export type SourceFamily =
  | "taxonomy"
  | "conservation"
  | "range-habitat"
  | "ecology"
  | "veterinary-boundary"
  | "image-licensing";

export type InstitutionType =
  | "government"
  | "university"
  | "museum"
  | "nonprofit"
  | "intergovernmental"
  | "reference"
  | "database";

/**
 * How FaunaHub relates to a source — an honest descriptor, never a partnership
 * or endorsement claim:
 * - "used": cited on FaunaHub animal profiles as an authoritative reference
 * - "referenced": named here as a useful source family, used selectively
 * - "example": a well-known source given as an example of its family
 */
export type FaunaHubUse = "used" | "referenced" | "example";

export interface ResearchSource {
  id: string;
  name: string;
  families: SourceFamily[];
  institutionType: InstitutionType;
  url: string;
  /** What this source is good for, in plain terms. */
  useCase: string;
  /** Honest strengths. */
  strengths: string;
  /** Honest limitations — no source is always current or error-free. */
  limitations: string;
  /** How FaunaHub relates to it (never an endorsement). */
  faunahubUse: FaunaHubUse;
  /** Optional extra caution. */
  cautionNote?: string;
}

export const SOURCE_FAMILIES: { key: SourceFamily; label: string; blurb: string }[] = [
  { key: "taxonomy", label: "Taxonomy", blurb: "Reference databases for scientific names, species groups, synonyms, and classification changes." },
  { key: "conservation", label: "Conservation status", blurb: "Assessments of extinction risk and trade context — attributed and changeable, not permanent labels." },
  { key: "range-habitat", label: "Range & habitat", blurb: "Where animals live, with the difference between mapped range, occurrence records, and native vs introduced ranges." },
  { key: "ecology", label: "Ecology", blurb: "Diet, behaviour, life history, and ecological roles from institution-backed accounts." },
  { key: "veterinary-boundary", label: "Veterinary & care boundaries", blurb: "Where animal-specific decisions belong — with qualified professionals, not an educational website." },
  { key: "image-licensing", label: "Image licensing", blurb: "Licenses and attribution rules that decide whether an image can be reused and converted to WebP." },
];

export const INSTITUTION_LABELS: Record<InstitutionType, string> = {
  government: "Government agency",
  university: "University / academic",
  museum: "Museum / natural-history collection",
  nonprofit: "Non-profit / conservation organisation",
  intergovernmental: "Intergovernmental body",
  reference: "Editor-reviewed reference",
  database: "Specialist database",
};

export const RESEARCH_SOURCES: ResearchSource[] = [
  // --- Taxonomy ---
  { id: "adw", name: "Animal Diversity Web (ADW)", families: ["taxonomy", "ecology", "range-habitat"], institutionType: "university", url: "https://animaldiversity.org/", useCase: "Peer-edited species accounts for biology, ecology, and classification.", strengths: "Maintained by the University of Michigan Museum of Zoology; broad coverage with cited accounts.", limitations: "Not every species has a detailed account, and accounts are updated at varying intervals.", faunahubUse: "used" },
  { id: "reptile-database", name: "The Reptile Database", families: ["taxonomy"], institutionType: "reference", url: "https://reptile-database.reptarium.cz/", useCase: "Taxonomic reference for reptile species names and synonyms.", strengths: "Museum- and specialist-backed; tracks reptile name changes and distribution summaries.", limitations: "A taxonomic resource — not a source for medical, safety, or husbandry claims.", faunahubUse: "used", cautionNote: "Use for names and classification, not for venom or first-aid claims." },
  { id: "amphibiaweb", name: "AmphibiaWeb", families: ["taxonomy", "conservation", "ecology"], institutionType: "university", url: "https://amphibiaweb.org/", useCase: "Amphibian biology, taxonomy, and conservation information.", strengths: "University of California, Berkeley resource with current amphibian accounts.", limitations: "Focused on amphibians; coverage depth varies by species.", faunahubUse: "used" },
  { id: "worms", name: "WoRMS — World Register of Marine Species", families: ["taxonomy"], institutionType: "database", url: "https://www.marinespecies.org/", useCase: "Authoritative register of marine species names.", strengths: "Expert-curated nomenclature for marine taxa.", limitations: "Names and ranks can be revised as research advances.", faunahubUse: "used" },
  { id: "catalogue-of-life", name: "Catalogue of Life", families: ["taxonomy"], institutionType: "database", url: "https://www.catalogueoflife.org/", useCase: "A consolidated checklist of the world's species, drawing on many expert databases.", strengths: "Broad cross-group coverage; useful for cross-checking accepted names.", limitations: "An aggregation of contributing checklists, so completeness and recency vary by group.", faunahubUse: "referenced" },
  { id: "gbif", name: "GBIF — Global Biodiversity Information Facility", families: ["taxonomy", "range-habitat"], institutionType: "intergovernmental", url: "https://www.gbif.org/", useCase: "Aggregated species occurrence records contributed by many institutions.", strengths: "Huge volume of openly available occurrence and specimen data.", limitations: "Occurrence points are not the same as range; data include captive, historical, and misidentified records that need careful interpretation.", faunahubUse: "referenced", cautionNote: "Occurrence records are not range maps." },
  { id: "fishbase", name: "FishBase", families: ["taxonomy", "ecology"], institutionType: "database", url: "https://www.fishbase.se/", useCase: "A reference database of fish species worldwide.", strengths: "Wide coverage of fish biology and nomenclature.", limitations: "Compiled from many sources; entries vary in detail and currency.", faunahubUse: "referenced" },

  // --- Conservation ---
  { id: "iucn", name: "IUCN Red List of Threatened Species", families: ["conservation"], institutionType: "nonprofit", url: "https://www.iucnredlist.org/", useCase: "The standard global source for species conservation assessments.", strengths: "Widely used, peer-reviewed assessment process with documented criteria.", limitations: "Not every species is assessed, and categories are reassessed over time — a status today may change.", faunahubUse: "used", cautionNote: "Treat any status as attributed and changeable; check the current Red List page." },
  { id: "cites", name: "CITES — Convention on International Trade in Endangered Species", families: ["conservation"], institutionType: "intergovernmental", url: "https://cites.org/", useCase: "International trade context for species listed across its appendices.", strengths: "The reference for whether international trade in a species is regulated.", limitations: "A trade/regulatory framework, NOT a measure of extinction risk — a CITES appendix is not the same as an IUCN category.", faunahubUse: "referenced", cautionNote: "Trade listing is not conservation status, and this is not legal advice." },
  { id: "noaa-fisheries", name: "NOAA Fisheries", families: ["conservation", "range-habitat"], institutionType: "government", url: "https://www.fisheries.noaa.gov/", useCase: "U.S. government information on marine species, including protected species.", strengths: "Authoritative for U.S. marine species status and management.", limitations: "Scope is mainly U.S. waters and federally managed species.", faunahubUse: "used" },
  { id: "usfws", name: "U.S. Fish & Wildlife Service (USFWS)", families: ["conservation", "range-habitat", "veterinary-boundary"], institutionType: "government", url: "https://www.fws.gov/", useCase: "U.S. listings, wildlife management, and where to report wildlife issues.", strengths: "Authoritative for U.S. listed species and wildlife regulations.", limitations: "U.S.-focused; legal/regulatory details require the agency itself, not a summary.", faunahubUse: "referenced", cautionNote: "For wildlife conflicts or invasive species, contact the relevant agency directly." },
  { id: "xerces", name: "Xerces Society for Invertebrate Conservation", families: ["conservation", "ecology"], institutionType: "nonprofit", url: "https://www.xerces.org/", useCase: "Science-based invertebrate (especially pollinator) conservation.", strengths: "Specialist focus on invertebrates often under-covered elsewhere.", limitations: "Scope is invertebrates; regional emphasis on North America.", faunahubUse: "used" },
  { id: "birdlife", name: "BirdLife International", families: ["conservation", "range-habitat"], institutionType: "nonprofit", url: "https://www.birdlife.org/", useCase: "Bird conservation assessments and important-bird-area information.", strengths: "The Red List authority for birds; global partnership network.", limitations: "Bird-focused; figures are periodically revised.", faunahubUse: "referenced" },

  // --- Range / habitat / ecology ---
  { id: "nps", name: "U.S. National Park Service", families: ["range-habitat", "ecology"], institutionType: "government", url: "https://www.nps.gov/", useCase: "Educational species and habitat information for protected lands.", strengths: "Reliable, place-based natural-history information.", limitations: "Coverage is tied to specific parks and U.S. lands.", faunahubUse: "referenced" },
  { id: "cornell-birds", name: "Cornell Lab of Ornithology — All About Birds", families: ["range-habitat", "ecology"], institutionType: "university", url: "https://www.allaboutbirds.org/", useCase: "Identification, range, and life-history for birds.", strengths: "Detailed, accessible bird accounts from Cornell University.", limitations: "Range detail is strongest for North American species.", faunahubUse: "used" },
  { id: "smithsonian-zoo", name: "Smithsonian's National Zoo & Conservation Biology Institute", families: ["ecology", "range-habitat"], institutionType: "museum", url: "https://nationalzoo.si.edu/animals", useCase: "Educational species pages from the Smithsonian Institution.", strengths: "Trustworthy general overviews across many animal groups.", limitations: "Overview-level; not a comprehensive scientific database.", faunahubUse: "used" },
  { id: "smithsonian-ocean", name: "Smithsonian Ocean", families: ["ecology", "range-habitat"], institutionType: "museum", url: "https://ocean.si.edu/", useCase: "Educational ocean-science and marine-life content.", strengths: "Clear, well-sourced explainers on marine biology.", limitations: "Educational scope rather than a primary data source.", faunahubUse: "used" },
  { id: "britannica", name: "Encyclopaedia Britannica", families: ["taxonomy", "ecology", "range-habitat"], institutionType: "reference", url: "https://www.britannica.com/", useCase: "Editor-reviewed encyclopedia overviews.", strengths: "Consistent, edited summaries useful for general framing.", limitations: "Overview-level; specifics should be confirmed against specialist databases.", faunahubUse: "used" },

  // --- Veterinary & care boundaries ---
  { id: "avma", name: "Veterinary associations (e.g. AVMA)", families: ["veterinary-boundary"], institutionType: "nonprofit", url: "https://www.avma.org/", useCase: "Where to find a qualified veterinarian and professional animal-health guidance.", strengths: "Professional bodies that point to qualified, licensed care.", limitations: "Provide general guidance and referrals — not a substitute for examining a specific animal.", faunahubUse: "referenced", cautionNote: "Animal-specific health decisions belong with a qualified veterinarian." },
  { id: "aspca-apcc", name: "Animal poison-control services (e.g. ASPCA Animal Poison Control)", families: ["veterinary-boundary"], institutionType: "nonprofit", url: "https://www.aspca.org/pet-care/animal-poison-control", useCase: "Where to turn in a suspected poisoning — a professional emergency service.", strengths: "Staffed services for urgent toxicity questions.", limitations: "An emergency contact for professionals to use, not a source of self-treatment instructions.", faunahubUse: "referenced", cautionNote: "In an emergency, contact a veterinarian or a poison-control service directly." },

  // --- Image licensing ---
  { id: "wikimedia-commons", name: "Wikimedia Commons", families: ["image-licensing"], institutionType: "database", url: "https://commons.wikimedia.org/", useCase: "A large library of freely licensed media with per-file license and author data.", strengths: "Machine-readable license metadata and author attribution per file.", limitations: "License accuracy depends on uploaders; each file must be checked individually.", faunahubUse: "used", cautionNote: "Verify the license and author on the file's own page before reuse." },
  { id: "creative-commons", name: "Creative Commons", families: ["image-licensing"], institutionType: "nonprofit", url: "https://creativecommons.org/", useCase: "The standard public licenses used to label reusable media.", strengths: "Clear, widely understood license terms (BY, BY-SA, CC0, and others).", limitations: "NC (non-commercial) and ND (no-derivatives) variants do not fit a site that reuses and converts images.", faunahubUse: "referenced", cautionNote: "FaunaHub uses only PD, CC0, CC BY, and CC BY-SA images." },
];

export function sourcesByFamily(family: SourceFamily): ResearchSource[] {
  return RESEARCH_SOURCES.filter((s) => s.families.includes(family));
}

export function duplicateSourceIds(): string[] {
  const seen = new Set<string>();
  const dups: string[] = [];
  for (const s of RESEARCH_SOURCES) {
    if (seen.has(s.id)) dups.push(s.id);
    seen.add(s.id);
  }
  return dups;
}

export const RESEARCH_SOURCE_COUNT = RESEARCH_SOURCES.length;
