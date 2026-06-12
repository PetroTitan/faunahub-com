import type { SourceLink } from "@/lib/educational/types";

/**
 * Shared types and safety text for the Birdwatching and Bird Care guide
 * clusters. Both clusters use the same core safety principle, disclaimer
 * component, and article-view component; only the data and breadcrumb root
 * differ.
 *
 * These are responsible-care / responsible-observation PLANNING clusters —
 * not wildlife-handling, diagnosis, treatment, dosage, or nest-intervention
 * clusters. Keep the safety text intact.
 */

export const BIRD_DISCLAIMER =
  "This content is educational and does not replace advice from a qualified veterinarian, licensed wildlife rehabilitator, local wildlife authority, or avian specialist. Do not handle injured, sick, nesting, or protected wild birds unless instructed by a qualified authority. For pet birds showing breathing difficulty, collapse, bleeding, seizures, severe injury, refusal to eat, or rapid worsening, contact an avian veterinarian or emergency animal clinic immediately.";

export const BIRD_SOURCE_NOTE =
  "Authoritative references used for general educational context. External links open in a new tab and these organisations do not endorse FaunaHub. Bird needs, behaviour, and local wildlife rules vary by species and region — confirm specifics with a qualified avian veterinarian, licensed wildlife rehabilitator, or local wildlife authority. This page does not give diagnosis, treatment, medication, or wildlife-handling instructions.";

export interface BirdGuideSection {
  heading: string;
  intro?: string;
  bullets: string[];
}

export interface BirdGuideFAQ {
  question: string;
  answer: string;
}

export interface BirdGuideRelatedGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface BirdGuideArticle {
  slug: string;
  /** Full path, e.g. "/birdwatching/<slug>" or "/bird-care/<slug>" */
  path: string;
  title: string;
  description: string;
  pageHeading: string;
  topicTag: string;
  directAnswer: string;
  sections: BirdGuideSection[];
  /** Required practical checklist */
  checklist: BirdGuideSection;
  /** Required: what NOT to assume */
  whatNotToAssume: BirdGuideSection;
  /** Required: when to contact a wildlife authority/rehabilitator or avian vet */
  escalation: BirdGuideSection;
  faqs: BirdGuideFAQ[];
  sources: SourceLink[];
  related: BirdGuideRelatedGroup[];
  publishedTime: string;
  modifiedTime: string;
}

export interface BirdGuideBreadcrumbRoot {
  label: string;
  href: string;
}
