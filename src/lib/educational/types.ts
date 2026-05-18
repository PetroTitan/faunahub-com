export type ArticleKind =
  | "insurance"
  | "vet-care"
  | "dog-insurance"
  | "cat-insurance";

export interface ArticleSection {
  heading: string;
  intro?: string;
  bullets: string[];
}

export interface ArticleFAQ {
  question: string;
  answer: string;
}

export interface EducationalArticle {
  slug: string;
  kind: ArticleKind;
  path: string;
  parentHub: string;
  parentHubLabel: string;
  /** Optional higher-level parent (e.g. "/dogs" above "/dogs/insurance") */
  grandparentHub?: string;
  grandparentLabel?: string;
  title: string;
  description: string;
  pageHeading: string;
  topicTag: string;
  directAnswer: string;
  sections: ArticleSection[];
  checklist?: ArticleSection;
  questionsToConsider?: ArticleSection;
  risksLimitations?: ArticleSection;
  /** Vet-care only — visible warning callout */
  warningSigns?: ArticleSection;
  faqs: ArticleFAQ[];
  /** When set, renders a country/policy variability note */
  showVariabilityWarning?: boolean;
  /** When set, renders the standard vet/educational disclaimer */
  showVetDisclaimer?: boolean;
  publishedTime: string;
  modifiedTime: string;
}

export const INSURANCE_SOURCE_REVIEW_NOTE =
  "Source review note: This page is an educational overview. Pet insurance rules, premiums, exclusions, reimbursement rates, deductibles, waiting periods, and veterinary prices vary by country, provider, policy, pet species, age, breed, health history, and local regulation. Specific claims should be verified against current policy documents, veterinary references, official insurance regulators, consumer protection agencies, and qualified veterinary resources before being treated as definitive.";

export const VET_CARE_SOURCE_REVIEW_NOTE =
  "Source review note: This page is an educational overview. Veterinary procedures, prices, recommendations, and emergency protocols vary by country, region, clinic, animal species, age, breed, and condition. Specific claims should be verified against authoritative veterinary references such as the AVMA, AAHA, Merck Veterinary Manual, Cornell University College of Veterinary Medicine, and licensed local veterinarians before being treated as definitive.";

export const VET_CARE_DISCLAIMER =
  "This content is for general educational purposes only and is not a substitute for professional veterinary advice, diagnosis, or treatment. If your pet shows severe symptoms, persistent discomfort, breathing problems, bleeding, poisoning signs, collapse, seizures, repeated vomiting, sudden weakness, or major behavior changes, contact a licensed veterinarian or emergency animal clinic immediately.";

export const INSURANCE_VARIABILITY_WARNING =
  "Policy details — premiums, deductibles, reimbursement rates, annual limits, waiting periods, exclusions, and claim processes — vary by provider, country, jurisdiction, and individual policy. The descriptions on this page are general educational concepts, not statements about any specific policy or provider. Always read current policy documents and confirm with the insurer and your local regulator before making a decision.";
