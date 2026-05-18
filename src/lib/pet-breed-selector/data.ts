export type HomeType = "apartment" | "house" | "rural" | "flexible";
export type ActivityLevel = "low" | "moderate" | "high";
export type Experience = "beginner" | "intermediate" | "experienced";
export type Children = "yes" | "no" | "sometimes";
export type GroomingTolerance = "low" | "moderate" | "high";
export type PreferredSize =
  | "small"
  | "medium"
  | "large"
  | "no-preference";
export type NoiseTolerance = "low" | "moderate" | "high";
export type TimeAvailable = "low" | "moderate" | "high";

export interface SelectorInput {
  homeType: HomeType;
  activityLevel: ActivityLevel;
  experience: Experience;
  children: Children;
  groomingTolerance: GroomingTolerance;
  preferredSize: PreferredSize;
  noiseTolerance: NoiseTolerance;
  timeAvailable: TimeAvailable;
}

export type SelectorCategoryGroup = "dog" | "cat" | "general";

export interface SelectorCategory {
  id: string;
  group: SelectorCategoryGroup;
  title: string;
  description: string;
  href: string;
  /** Each scoring map gives a contribution per option value. Missing values
   * are treated as 0. The matching engine sums contributions across all
   * inputs, with a baseline of 1. */
  scoring: Partial<{
    homeType: Partial<Record<HomeType, number>>;
    activityLevel: Partial<Record<ActivityLevel, number>>;
    experience: Partial<Record<Experience, number>>;
    children: Partial<Record<Children, number>>;
    groomingTolerance: Partial<Record<GroomingTolerance, number>>;
    preferredSize: Partial<Record<PreferredSize, number>>;
    noiseTolerance: Partial<Record<NoiseTolerance, number>>;
    timeAvailable: Partial<Record<TimeAvailable, number>>;
  }>;
}

export const SELECTOR_CATEGORIES: SelectorCategory[] = [
  // Dog-breed-focused
  {
    id: "apartment-friendly-dogs",
    group: "dog",
    title: "Apartment-friendly dog breeds",
    description:
      "Smaller, quieter, moderate-energy dogs that often adapt better to apartment living — with cautions and individual variation.",
    href: "/dogs/breeds/best-dogs-for-apartments",
    scoring: {
      homeType: { apartment: 3, flexible: 1, house: 0, rural: -2 },
      preferredSize: {
        small: 2,
        medium: 1,
        large: -1,
        "no-preference": 0,
      },
      noiseTolerance: { low: 2, moderate: 1, high: 0 },
      activityLevel: { low: 1, moderate: 1, high: 0 },
      timeAvailable: { low: -1, moderate: 1, high: 1 },
      experience: { beginner: 1, intermediate: 0, experienced: 0 },
    },
  },
  {
    id: "family-dogs",
    group: "dog",
    title: "Family-friendly dog breeds",
    description:
      "Breeds often considered for households with children, with honest cautions about supervision and individual temperament.",
    href: "/dogs/breeds/best-family-dogs",
    scoring: {
      children: { yes: 3, sometimes: 1, no: -1 },
      homeType: { house: 2, flexible: 1, rural: 1, apartment: 0 },
      timeAvailable: { high: 2, moderate: 1, low: -1 },
      activityLevel: { high: 1, moderate: 1, low: 0 },
      preferredSize: {
        medium: 1,
        large: 1,
        small: 1,
        "no-preference": 0,
      },
    },
  },
  {
    id: "low-maintenance-dogs",
    group: "dog",
    title: "Lower-maintenance dog breeds (with cautions)",
    description:
      "Breeds sometimes described as easier in specific dimensions — but no dog is truly low-maintenance.",
    href: "/dogs/breeds/low-maintenance-dogs",
    scoring: {
      groomingTolerance: { low: 2, moderate: 1, high: 0 },
      timeAvailable: { low: 1, moderate: 1, high: 0 },
      activityLevel: { low: 1, moderate: 1, high: 0 },
      experience: { beginner: 1, intermediate: 1, experienced: 0 },
    },
  },
  {
    id: "first-time-owner-dogs",
    group: "dog",
    title: "Dog breeds for first-time owners",
    description:
      "Generally trainable, moderate-energy breeds often suggested for owners new to dogs — plus shelter-adult-dog options.",
    href: "/dogs/breeds/best-dogs-for-first-time-owners",
    scoring: {
      experience: { beginner: 3, intermediate: 1, experienced: -1 },
      timeAvailable: { high: 1, moderate: 1, low: -1 },
      groomingTolerance: { moderate: 1, high: 1, low: 0 },
    },
  },
  {
    id: "small-dog-breeds",
    group: "dog",
    title: "Small dog breeds",
    description:
      "Small breeds for apartments, families, and seniors — with realistic notes that 'small' does not always mean 'easy.'",
    href: "/dogs/breeds/best-small-dog-breeds",
    scoring: {
      preferredSize: { small: 3, medium: 0, large: -2, "no-preference": 0 },
      homeType: { apartment: 1, flexible: 1, house: 0, rural: 0 },
    },
  },

  // Cat-breed-focused
  {
    id: "apartment-friendly-cats",
    group: "cat",
    title: "Apartment-friendly cat breeds",
    description:
      "Cats often adapt well to indoor apartment life — calmer breeds, plus mixed-breed shelter cats whose temperament can be observed.",
    href: "/cats/breeds/best-cats-for-apartments",
    scoring: {
      homeType: { apartment: 3, flexible: 1, house: 1, rural: 0 },
      noiseTolerance: { low: 1, moderate: 1, high: 0 },
      activityLevel: { low: 1, moderate: 1, high: 0 },
      timeAvailable: { low: 0, moderate: 1, high: 1 },
    },
  },
  {
    id: "first-time-owner-cats",
    group: "cat",
    title: "Cat breeds for first-time owners",
    description:
      "Calmer, generally tolerant breeds plus shelter-adult-cat options for owners new to cats.",
    href: "/cats/breeds/best-cats-for-first-time-owners",
    scoring: {
      experience: { beginner: 3, intermediate: 1, experienced: -1 },
      timeAvailable: { moderate: 1, high: 1, low: 0 },
    },
  },
  {
    id: "low-maintenance-cats",
    group: "cat",
    title: "Lower-maintenance cat breeds",
    description:
      "Short-coat, generally tolerant cat breeds — with honest cautions that no cat is maintenance-free.",
    href: "/cats/breeds/low-maintenance-cat-breeds",
    scoring: {
      groomingTolerance: { low: 2, moderate: 1, high: 0 },
      timeAvailable: { low: 1, moderate: 1, high: 0 },
      activityLevel: { low: 1, moderate: 0, high: 0 },
    },
  },
  {
    id: "family-cats",
    group: "cat",
    title: "Family-friendly cat breeds",
    description:
      "Breeds often considered tolerant in family households, with cautions about supervision and individual temperament.",
    href: "/cats/breeds/best-family-cats",
    scoring: {
      children: { yes: 3, sometimes: 1, no: 0 },
      timeAvailable: { high: 1, moderate: 1, low: 0 },
    },
  },

  // General guides
  {
    id: "pets-for-apartments",
    group: "general",
    title: "Pets for apartment living",
    description:
      "Compare pet categories — cats, smaller dogs, fish, small mammals, captive-bred birds — for apartment life.",
    href: "/guides/best-pets-for-apartments",
    scoring: {
      homeType: { apartment: 3, flexible: 1, house: 0, rural: 0 },
      noiseTolerance: { low: 1, moderate: 1, high: 0 },
    },
  },
  {
    id: "pets-for-families",
    group: "general",
    title: "Pets for families",
    description:
      "Compare pet categories suited to family households, with supervision and welfare cautions.",
    href: "/guides/best-pets-for-families",
    scoring: {
      children: { yes: 3, sometimes: 1, no: -1 },
      timeAvailable: { high: 1, moderate: 1, low: -1 },
    },
  },
  {
    id: "pets-for-beginners",
    group: "general",
    title: "Pets for beginners",
    description:
      "Honest starting points for first-time pet owners across species — including adoption-first thinking.",
    href: "/guides/best-pets-for-beginners",
    scoring: {
      experience: { beginner: 3, intermediate: 1, experienced: -1 },
      timeAvailable: { low: 1, moderate: 1, high: 0 },
    },
  },
  {
    id: "low-maintenance-pets",
    group: "general",
    title: "Lower-effort pet categories",
    description:
      "Pet categories often described as lower-effort — fish, cats, certain reptiles — with realistic caveats.",
    href: "/guides/low-maintenance-pets",
    scoring: {
      timeAvailable: { low: 3, moderate: 1, high: 0 },
      groomingTolerance: { low: 2, moderate: 1, high: 0 },
      activityLevel: { low: 1, moderate: 0, high: 0 },
    },
  },
];

export interface SelectorMatch {
  category: SelectorCategory;
  score: number;
}

export function scoreCategories(
  input: SelectorInput,
  categories: SelectorCategory[] = SELECTOR_CATEGORIES
): SelectorMatch[] {
  return categories
    .map((category) => {
      const s = category.scoring;
      const base = 1;
      const total =
        base +
        (s.homeType?.[input.homeType] ?? 0) +
        (s.activityLevel?.[input.activityLevel] ?? 0) +
        (s.experience?.[input.experience] ?? 0) +
        (s.children?.[input.children] ?? 0) +
        (s.groomingTolerance?.[input.groomingTolerance] ?? 0) +
        (s.preferredSize?.[input.preferredSize] ?? 0) +
        (s.noiseTolerance?.[input.noiseTolerance] ?? 0) +
        (s.timeAvailable?.[input.timeAvailable] ?? 0);
      return { category, score: total };
    })
    .sort((a, b) => b.score - a.score);
}

export function topMatches(
  input: SelectorInput,
  limit = 4
): SelectorMatch[] {
  const scored = scoreCategories(input);
  const top = scored.slice(0, limit);
  // Always include at least one general guide near the top if not already there
  const hasGeneral = top.some((m) => m.category.group === "general");
  if (!hasGeneral) {
    const firstGeneral = scored.find((m) => m.category.group === "general");
    if (firstGeneral) {
      top.push(firstGeneral);
    }
  }
  return top;
}

export const SELECTOR_DISCLAIMER =
  "This selector is an educational decision-support tool, not a guarantee of temperament or suitability. Individual animals vary by genetics, health, training, socialization, environment, and previous experience. Before adopting or buying a pet, speak with reputable shelters, breeders, trainers, or veterinarians and consider long-term care needs.";

export const SELECTOR_FAQS: { question: string; answer: string }[] = [
  {
    question: "Is this selector a substitute for professional advice?",
    answer:
      "No. It surfaces broad pet-category and breed-category pages on FaunaHub that may fit a description of your household. Real adoption decisions should involve reputable shelters, breeders, trainers, or veterinarians — and time spent with the specific animal you are considering.",
  },
  {
    question: "Why does the selector recommend categories rather than specific pets?",
    answer:
      "Individual animals vary far more than category-level descriptions. The selector points you to pages that discuss several examples within a category, so you can read about realistic trade-offs before narrowing further with a vet, shelter, or rescue.",
  },
  {
    question: "Does it recommend exotic pets?",
    answer:
      "No. The selector focuses on common companion animals (dogs, cats, and several widely kept small mammals, birds, and fish). Exotic or legally restricted species require careful research, species-savvy veterinary care, and local-law compliance — please consult experienced keepers and authorities directly.",
  },
  {
    question: "Can I trust the result?",
    answer:
      "Treat it as a starting point. The selector is deterministic and based on simple inputs you provide. It does not measure individual temperament, allergies, or health — those need real-world assessment.",
  },
];
