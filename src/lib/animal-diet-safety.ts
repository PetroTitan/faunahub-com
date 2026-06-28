/**
 * Animal food & diet safety data layer.
 *
 * EDUCATIONAL structure only. This file describes natural feeding ECOLOGY
 * categories and the navigation of FaunaHub's diet-safety guides. It is
 * deliberately NOT a toxic-food database and contains NO foods, quantities,
 * portion sizes, feeding frequencies, "safe amounts", dosages, recipes,
 * symptoms, treatments, danger scores, or brand recommendations. It is not
 * veterinary advice. For any animal-specific feeding or health decision,
 * consult a qualified veterinarian; for a suspected poisoning or ingestion,
 * contact a veterinarian, an animal poison-control service, or a local
 * emergency service immediately.
 */

export type DietGroup =
  | "general"
  | "rabbit"
  | "bird"
  | "reptile-amphibian"
  | "wildlife";

/** Natural feeding categories — pure ecology, no pet-feeding guidance. */
export interface DietCategory {
  key: string;
  label: string;
  description: string;
  /** Example animals (not foods, not amounts). */
  animalExamples: string;
}

export const DIET_CATEGORIES: DietCategory[] = [
  { key: "herbivore", label: "Herbivores", description: "Animals that eat mainly plants. Grazers crop low vegetation such as grasses, while browsers take leaves, shoots, and twigs from taller plants.", animalExamples: "horses, sheep, rabbits, many tortoises" },
  { key: "carnivore", label: "Carnivores", description: "Animals whose diet is mainly other animals. Some, such as cats, are obligate carnivores that depend on nutrients found in animal tissue.", animalExamples: "cats, many snakes, eagles, sharks" },
  { key: "omnivore", label: "Omnivores", description: "Animals that eat both plant and animal foods, often shifting with what is available.", animalExamples: "pigs, many bears, crows, raccoons" },
  { key: "insectivore", label: "Insectivores", description: "Animals specialised in eating insects and other invertebrates.", animalExamples: "many frogs, hedgehogs, swifts, many lizards" },
  { key: "nectarivore", label: "Nectar feeders", description: "Animals that feed largely on flower nectar, often pollinating plants as they do so.", animalExamples: "hummingbirds, sunbirds, some bats" },
  { key: "filter-feeder", label: "Filter feeders", description: "Animals that strain small food particles or plankton from water.", animalExamples: "baleen whales, flamingos, many bivalves" },
  { key: "scavenger", label: "Scavengers & detritivores", description: "Animals that feed on dead matter or waste, recycling nutrients through ecosystems.", animalExamples: "vultures, many beetles, earthworms" },
];

/** A diet-safety guide page — navigation + framing only. No food data. */
export interface FeedingGuide {
  slug: string;
  title: string;
  group: DietGroup;
  /** One-line educational summary (no instructions). */
  summary: string;
  /** The boundary this page keeps. */
  riskBoundary: string;
  path: string;
}

export const FEEDING_GUIDES: FeedingGuide[] = [
  { slug: "what-animals-eat", title: "What animals eat", group: "general", summary: "Natural feeding categories — herbivores, carnivores, omnivores, and more — and how diet varies by species, age, season, and habitat.", riskBoundary: "Describes wild/natural diets, not a pet-feeding plan.", path: "/animal-food-and-diet/what-animals-eat" },
  { slug: "foods-dangerous-to-pets", title: "Foods that can be dangerous to pets", group: "general", summary: "Why some human foods can be a concern for some pets, with a few documented examples to raise with a veterinarian.", riskBoundary: "Not a complete toxic-food list and not emergency guidance.", path: "/animal-food-and-diet/foods-dangerous-to-pets" },
  { slug: "rabbit-food-safety", title: "Rabbit diet & food safety", group: "rabbit", summary: "Rabbits are fibre-dependent herbivores with sensitive digestion — why their feeding differs from other pets.", riskBoundary: "No schedules, portions, or treatment; consult a veterinarian.", path: "/animal-food-and-diet/rabbit-food-safety" },
  { slug: "bird-food-safety", title: "Bird diet & food safety", group: "bird", summary: "Bird diets vary enormously by species, so there is no single 'bird diet'; pet-bird and wild-bird feeding are different questions.", riskBoundary: "No portions or recipes; consult an avian veterinarian and official sources.", path: "/animal-food-and-diet/bird-food-safety" },
  { slug: "reptile-amphibian-feeding-boundaries", title: "Reptile & amphibian feeding boundaries", group: "reptile-amphibian", summary: "Reptile and amphibian diets vary radically by species, and feeding animals in human care is highly specialised.", riskBoundary: "No terrarium feeding plans, live-prey, or supplement dosing; consult a reptile/amphibian veterinarian.", path: "/animal-food-and-diet/reptile-amphibian-feeding-boundaries" },
  { slug: "wildlife-feeding-risks", title: "Why feeding wildlife is risky", group: "wildlife", summary: "How feeding wild animals can change behaviour, spread disease, cause dependency, and create conflict.", riskBoundary: "No instructions on what or how to feed wildlife; route to official wildlife agencies.", path: "/animal-food-and-diet/wildlife-feeding-risks" },
];

export function guidesByGroup(group: DietGroup): FeedingGuide[] {
  return FEEDING_GUIDES.filter((g) => g.group === group);
}

export function duplicateGuideSlugs(): string[] {
  const seen = new Set<string>();
  const dups: string[] = [];
  for (const g of FEEDING_GUIDES) {
    if (seen.has(g.slug)) dups.push(g.slug);
    seen.add(g.slug);
  }
  return dups;
}

export const FEEDING_GUIDE_COUNT = FEEDING_GUIDES.length;
