import type { SourceLink } from "@/lib/educational/types";

export type PetSpeciesKey =
  | "dog"
  | "cat"
  | "rabbit"
  | "hamster"
  | "guinea-pig"
  | "bird"
  | "fish"
  | "reptile";

export interface PetCostFAQ {
  question: string;
  answer: string;
}

export interface PetCostArticle {
  slug: string;
  species: PetSpeciesKey;
  /** Display label for the species ("Dog", "Guinea pig", etc.) */
  speciesLabel: string;
  /** Path of the parent species hub ("/dogs/costs", "/small-pets/rabbits", etc.) */
  parentHub: string;
  /** Display label for the parent hub */
  parentHubLabel: string;
  /** Path of the higher-level parent ("/dogs", "/small-pets", "/birds", ...) */
  grandparentHub: string;
  grandparentLabel: string;
  /** Absolute path of the cost article */
  path: string;
  title: string;
  description: string;
  pageHeading: string;
  directAnswer: string;
  oneTimeCategories: string[];
  recurringMonthly: string[];
  yearlyConsiderations: string[];
  hiddenCosts: string[];
  emergencyFundNote: string;
  factorsThatChangeCost: string[];
  notFinanciallySuitableFor: string[];
  budgetChecklist: string[];
  faqs: PetCostFAQ[];
  /** Optional verified-source list. Only add entries you have verified. */
  sources?: SourceLink[];
  publishedTime: string;
  modifiedTime: string;
}

export interface BudgetGuide {
  slug: string;
  path: string;
  title: string;
  description: string;
  pageHeading: string;
  directAnswer: string;
  /** Top-level sections rendered as H2 + bullet list */
  sections: { heading: string; intro?: string; bullets: string[] }[];
  faqs: PetCostFAQ[];
  /** Optional verified-source list. Only add entries you have verified. */
  sources?: SourceLink[];
  publishedTime: string;
  modifiedTime: string;
}

const PUBLISHED = "2026-05-18";
const MODIFIED = "2026-05-18";

// ─── VERIFIED SOURCES ─────────────────────────────────────────────────────
// Each URL has been fetched and confirmed to resolve to the content
// described. Cost is regional, so we cite veterinary-context sources only.

const SRC_AVMA_PET_CARE: SourceLink = {
  label: "AVMA — Pet Care Resources",
  url: "https://www.avma.org/resources-tools/pet-owners/petcare",
  type: "veterinary",
  note: "American Veterinary Medical Association consumer pet-care hub",
};

const SRC_AVMA_PET_OWNERS: SourceLink = {
  label: "AVMA — Pet Owner Resources",
  url: "https://www.avma.org/resources-tools/pet-owners",
  type: "veterinary",
  note: "AVMA top-level pet-owner resource index",
};

export const COST_SOURCE_REVIEW_NOTE =
  "Source review note: This page is an educational budgeting framework. Pet ownership costs vary by country, city, provider, animal health, breed, size, species, and lifestyle. Any specific price ranges should be verified against current local veterinary, insurance, shelter, retailer, or government/consumer data before being treated as definitive.";

export const COST_VETERINARY_DISCLAIMER =
  "This content is for general budgeting and educational planning only and is not a substitute for professional veterinary or financial advice. Actual pet costs vary by country, city, veterinarian, breed, size, species, age, health, insurance choices, food quality, grooming needs, and unexpected emergencies. For health-related cost planning specific to your pet, consult a licensed veterinarian.";

export const PET_COST_ARTICLES: PetCostArticle[] = [
  // ─── DOG ───────────────────────────────────────────────────────────────
  {
    slug: "how-much-does-a-dog-cost",
    species: "dog",
    speciesLabel: "Dog",
    parentHub: "/dogs/costs",
    parentHubLabel: "Dog Costs",
    grandparentHub: "/dogs",
    grandparentLabel: "Dogs",
    path: "/dogs/costs/how-much-does-a-dog-cost",
    title: "How Much Does a Dog Cost? Planning Framework, Not a Fixed Number",
    description:
      "Dog ownership costs vary widely by country, breed, size, age, and lifestyle. A cautious planning framework for one-time, monthly, and yearly costs.",
    pageHeading: "How Much Does a Dog Cost?",
    directAnswer:
      "There is no single right answer. Dog ownership costs vary widely by country, city, breed, size, age, health, insurance choices, food quality, grooming needs, training, and unexpected emergencies. Use this page as a planning framework — a list of cost categories to plan for — rather than a guaranteed estimate. Run your own numbers in the pet cost calculator, then refine them with quotes from local vets, groomers, insurers, and shelters.",
    oneTimeCategories: [
      "Adoption fee or breeder cost",
      "Initial veterinary visit, vaccinations, microchipping, and spay/neuter if applicable",
      "Crate or carrier, bed, leash, collar, harness, ID tag",
      "Bowls and an initial supply of species-appropriate food",
      "Initial training (puppy class, basic obedience, or trainer consultation)",
      "Baby gates, indoor confinement setup, or yard fencing where relevant",
    ],
    recurringMonthly: [
      "Food appropriate to size, age, and any veterinary diet recommendations",
      "Routine and preventive care (vaccines, flea/tick/heartworm prevention, dental) prorated monthly",
      "Pet insurance premium, where relevant",
      "Grooming — varies dramatically by coat type",
      "Toys, enrichment, replacement supplies",
      "Boarding, daycare, or dog walking for travel and work hours",
      "Contribution to an emergency vet fund",
    ],
    yearlyConsiderations: [
      "Annual wellness exam, vaccinations, dental check, and parasite screens",
      "Insurance renewal — premiums often increase with age",
      "Licensing or local registration where required",
      "Replacement gear (collars, harnesses, beds, crates)",
      "Possible behaviour-training refresher",
    ],
    hiddenCosts: [
      "Emergency veterinary visits — among the most variable and unpredictable costs",
      "Senior-stage care: dental work, mobility support, chronic-disease management",
      "Damage to home or rental deposits during the early adjustment period",
      "Pet-friendly housing premiums or relocation costs",
      "Grooming costs that scale with coat type — some breeds are far more expensive to maintain than they appear",
    ],
    emergencyFundNote:
      "Many veterinarians and welfare organisations recommend setting aside a meaningful emergency fund — separate from monthly costs — that can cover a serious unplanned veterinary issue. The exact amount depends on your location, your pet's profile, and your insurance situation; treat this as a planning concept, not a fixed rule.",
    factorsThatChangeCost: [
      "Size — larger dogs typically eat more, require larger gear, and incur larger medication doses.",
      "Breed — some breeds have well-documented health predispositions that increase lifetime cost.",
      "Coat — grooming-intensive coats are a meaningful recurring expense.",
      "Age and life stage — puppies and seniors are typically more expensive than mid-life adults.",
      "Country and city — cost of living, veterinary fees, and insurance premiums vary significantly.",
    ],
    notFinanciallySuitableFor: [
      "Households without a planned emergency veterinary fund.",
      "Owners who cannot commit to routine preventive care, including dental.",
      "People who would skip vet visits to save money on a sick dog.",
      "Households with no plan for boarding or daycare during travel or full workdays.",
    ],
    budgetChecklist: [
      "Confirm one-time setup budget covers crate, bed, bowls, leash, ID, initial vet visit, and initial training.",
      "Estimate monthly food, preventive care, insurance, and contribution to an emergency fund.",
      "Plan for grooming honestly — by coat type, not by ideal-world averages.",
      "Plan for travel and work hours: boarding, daycare, or dog walker budget.",
      "Set aside an emergency veterinary fund separate from monthly spending.",
      "Get quotes from at least two local vets and two insurers before adopting.",
    ],
    faqs: [
      {
        question: "Why don't you give a single yearly dollar amount for a dog?",
        answer:
          "Because there isn't one. The same dog can cost very different amounts depending on country, city, breed, size, age, insurance situation, food choices, grooming needs, and unpredictable emergencies. Quoting a single number would be misleading. The pet cost calculator lets you run your own scenario.",
      },
      {
        question: "Is pet insurance worth it for a dog?",
        answer:
          "It depends. Insurance can offset large, sudden veterinary bills, but premiums, deductibles, waiting periods, and pre-existing-condition rules vary widely by provider, breed, and location. Compare specific policies and consider running an insurance line in the pet cost calculator.",
      },
      {
        question: "Are some breeds more expensive than others?",
        answer:
          "Yes. Larger dogs typically incur higher food, medication, and gear costs; breeds with grooming-intensive coats or well-documented health predispositions can be substantially more expensive over a lifetime. Breed is one factor among many — meeting individual dogs and consulting a veterinarian matters more than a label.",
      },
      {
        question: "What is the most overlooked dog cost?",
        answer:
          "Emergency veterinary care and senior-stage care are the most commonly underestimated. Many owners plan for monthly recurring costs but not for the variable, sometimes large costs that show up over a dog's lifespan.",
      },
    ],
    sources: [SRC_AVMA_PET_CARE, SRC_AVMA_PET_OWNERS],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  // ─── CAT ───────────────────────────────────────────────────────────────
  {
    slug: "how-much-does-a-cat-cost",
    species: "cat",
    speciesLabel: "Cat",
    parentHub: "/cats/costs",
    parentHubLabel: "Cat Costs",
    grandparentHub: "/cats",
    grandparentLabel: "Cats",
    path: "/cats/costs/how-much-does-a-cat-cost",
    title: "How Much Does a Cat Cost? Honest Budget Framework",
    description:
      "Cat ownership costs depend on country, age, health, diet, and lifestyle. A cautious planning framework for one-time, monthly, and yearly costs.",
    pageHeading: "How Much Does a Cat Cost?",
    directAnswer:
      "Cat ownership costs vary by country, city, age, health, breed, diet, lifestyle, and insurance choices. Use this page as a planning framework — a list of categories to budget for — rather than a guaranteed annual figure. Combine it with the pet cost calculator and quotes from your local veterinarian for a realistic personal estimate.",
    oneTimeCategories: [
      "Adoption fee or breeder cost",
      "Initial veterinary visit, vaccinations, microchipping, and spay/neuter if applicable",
      "Carrier, litter box, scratching post, bed",
      "Bowls and an initial supply of species-appropriate food",
      "Initial litter and litter mat",
      "Cat tree, perches, or vertical-space setup",
    ],
    recurringMonthly: [
      "Complete-and-balanced cat food (wet, dry, or a combination)",
      "Litter and replacement supplies",
      "Preventive care prorated monthly (vaccines, parasite prevention, dental)",
      "Pet insurance premium, where relevant",
      "Toys, enrichment, replacement scratching surfaces",
      "Contribution to an emergency vet fund",
      "Boarding or cat sitter for travel periods",
    ],
    yearlyConsiderations: [
      "Annual wellness exam, vaccinations, and parasite screens",
      "Dental check, which becomes more important with age",
      "Insurance renewal and premium adjustments",
      "Replacement of cat trees, scratching surfaces, beds, carriers",
      "Senior-cat care frequency — many vets recommend twice-yearly checkups in older cats",
    ],
    hiddenCosts: [
      "Emergency veterinary visits — the most unpredictable expense",
      "Chronic-condition care in senior cats (kidney disease, hyperthyroidism, arthritis)",
      "Dental work — particularly in adult and senior cats",
      "Damage to furniture or rental deposits during adjustment periods",
      "Pet-friendly housing premiums",
    ],
    emergencyFundNote:
      "An emergency veterinary fund — separate from monthly spending — is widely recommended by veterinarians and welfare organisations. The right amount depends on your country, vet costs in your area, your cat's profile, and your insurance situation. Treat this as a planning concept rather than a fixed rule.",
    factorsThatChangeCost: [
      "Age and life stage — kittens and senior cats are typically more expensive than mid-life adults.",
      "Breed — some breeds have documented health predispositions.",
      "Diet — therapeutic or prescription diets are substantially more expensive than standard food.",
      "Indoor or outdoor lifestyle and the related risk and care profile.",
      "Country and city — cost of living, veterinary fees, and insurance premiums vary significantly.",
    ],
    notFinanciallySuitableFor: [
      "Households without a planned emergency veterinary fund.",
      "Owners who would skip preventive care to save money.",
      "Households where pet-friendly housing has not been confirmed.",
      "Households with no plan for travel periods (boarding, sitter).",
    ],
    budgetChecklist: [
      "Confirm one-time setup budget covers carrier, litter box, scratching surfaces, vertical space, initial vet visit.",
      "Estimate monthly food, litter, preventive care, insurance, and contribution to an emergency fund.",
      "Plan for senior-cat care frequency increases later in life.",
      "Set aside an emergency veterinary fund separate from monthly spending.",
      "Get quotes from at least two local vets and two insurers before adopting.",
    ],
    faqs: [
      {
        question: "Is a cat cheaper to own than a dog?",
        answer:
          "Often, in some dimensions, but not always. Cats typically have lower food and grooming costs than medium-to-large dogs, but veterinary and emergency costs depend on the individual animal and country. Comparing categories one by one in the pet cost calculator is more accurate than relying on a generalisation.",
      },
      {
        question: "Is pet insurance worth it for a cat?",
        answer:
          "It depends. Insurance can offset large unexpected bills, but premiums, deductibles, and exclusions vary by provider, age, breed, and location. Read terms carefully and consider running an insurance line in the pet cost calculator.",
      },
      {
        question: "What's the most overlooked cat cost?",
        answer:
          "Senior-cat care — dental work, kidney disease management, arthritis — and emergency veterinary visits. Most owners plan for monthly costs but not for the variable senior-stage costs that arrive later.",
      },
      {
        question: "Are indoor cats cheaper than outdoor cats?",
        answer:
          "Often, in some dimensions. Indoor cats are typically exposed to fewer infectious diseases and injuries, which can reduce some costs. They may need more enrichment investment. Either way, individual variation is significant.",
      },
    ],
    sources: [SRC_AVMA_PET_CARE, SRC_AVMA_PET_OWNERS],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  // ─── RABBIT ─────────────────────────────────────────────────────────────
  {
    slug: "how-much-does-a-rabbit-cost",
    species: "rabbit",
    speciesLabel: "Rabbit",
    parentHub: "/small-pets/rabbits",
    parentHubLabel: "Rabbits",
    grandparentHub: "/small-pets",
    grandparentLabel: "Small Pets",
    path: "/small-pets/rabbits/how-much-does-a-rabbit-cost",
    title: "How Much Does a Rabbit Cost? Realistic Setup and Care Budget",
    description:
      "Rabbit ownership often costs more than expected — large housing, hay, vet care, and 8–12+ year lifespans. A cautious planning framework.",
    pageHeading: "How Much Does a Rabbit Cost?",
    directAnswer:
      "Rabbit ownership often costs more than first-time owners expect. Beyond the small adoption fee, rabbits need a much larger living space than typical pet-store cages, daily hay and fresh vegetables, access to a rabbit-savvy veterinarian, and care over an 8 to 12+ year lifespan. Use this page as a planning framework — actual prices vary by country, city, and provider.",
    oneTimeCategories: [
      "Adoption fee (often from a reputable rescue, where pairs are common)",
      "Initial vet visit, including health check and discussion of spay/neuter",
      "Large indoor enclosure or dedicated free-roam setup — bigger than typical pet-store cages",
      "Litter box, hay rack, bowls, hiding spaces",
      "Initial supply of hay, pellets, and rabbit-safe fresh vegetables",
      "Rabbit-proofing materials for cables, baseboards, and furniture",
    ],
    recurringMonthly: [
      "Hay — the primary daily food and a recurring expense",
      "Rabbit pellets and fresh vegetables",
      "Litter / bedding replacement",
      "Routine vet care prorated monthly, including dental monitoring",
      "Toys, chew items, and enrichment",
      "Contribution to an emergency vet fund",
    ],
    yearlyConsiderations: [
      "Annual or twice-yearly veterinary check, including dental",
      "Replacement of chewed or worn enclosure parts",
      "Possible boarding or sitter for trips — rabbits do not travel well",
      "Adjustments for an ageing rabbit's needs",
    ],
    hiddenCosts: [
      "Rabbit-savvy veterinary care — not all vets are experienced with rabbits, and specialist visits can be more expensive",
      "Dental disease — common and sometimes requiring extensive procedures",
      "Gastrointestinal stasis emergencies — among the most common urgent rabbit issues",
      "Spay/neuter procedures, which are recommended by many welfare organisations",
      "Damage to baseboards, cables, or furniture during rabbit-proofing failures",
    ],
    emergencyFundNote:
      "An emergency veterinary fund is particularly important for rabbits because gastrointestinal stasis and dental emergencies can arise quickly. The right amount depends on your country and vet pricing — treat this as a planning concept rather than a fixed rule.",
    factorsThatChangeCost: [
      "Whether you adopt a pair (commonly recommended) or a single rabbit.",
      "Enclosure setup — free-roam vs penned vs hutch.",
      "Country and city — vet specialisation and feed costs vary widely.",
      "Age and dental health.",
    ],
    notFinanciallySuitableFor: [
      "Households without access to a rabbit-savvy veterinarian.",
      "People hoping rabbits are a 'low-cost starter pet' for children.",
      "Households unable to commit to 8 to 12+ years of care.",
    ],
    budgetChecklist: [
      "Confirm the indoor enclosure budget realistically — much larger than typical pet-store cages.",
      "Plan for daily hay supply and fresh vegetables.",
      "Find and price-check a rabbit-savvy veterinarian in advance.",
      "Budget for spay/neuter as part of the first-year plan.",
      "Set aside an emergency veterinary fund.",
      "Plan for travel-period sitting — rabbits typically should not be boarded with strangers.",
    ],
    faqs: [
      {
        question: "Are rabbits cheap pets?",
        answer:
          "They are often cheaper than dogs or cats in some dimensions but more expensive than many owners expect once you account for proper housing size, dental care, and the need for a rabbit-savvy vet. They are not 'starter pets' financially or care-wise.",
      },
      {
        question: "Do rabbits really need to live in pairs?",
        answer:
          "Most welfare organisations recommend keeping rabbits in compatible pairs. Two rabbits do not cost exactly twice as much but they do increase food, litter, vet, and housing costs.",
      },
      {
        question: "What is the biggest hidden cost?",
        answer:
          "Specialist veterinary care, especially for dental disease and gastrointestinal emergencies. Many general vets do not see rabbits routinely.",
      },
    ],
    sources: [SRC_AVMA_PET_CARE, SRC_AVMA_PET_OWNERS],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  // ─── HAMSTER ────────────────────────────────────────────────────────────
  {
    slug: "how-much-does-a-hamster-cost",
    species: "hamster",
    speciesLabel: "Hamster",
    parentHub: "/small-pets/hamsters",
    parentHubLabel: "Hamsters",
    grandparentHub: "/small-pets",
    grandparentLabel: "Small Pets",
    path: "/small-pets/hamsters/how-much-does-a-hamster-cost",
    title: "How Much Does a Hamster Cost? Cautious Setup and Care Budget",
    description:
      "Hamster ownership has a low purchase price but real setup and care costs — larger enclosures than pet stores suggest, wheels, vet care, and welfare considerations.",
    pageHeading: "How Much Does a Hamster Cost?",
    directAnswer:
      "Hamsters often look like a low-cost pet at the till, but realistic ownership costs include a larger enclosure than typical pet-store cages, a quality wheel, deep substrate, and access to a small-mammal-savvy veterinarian. Lifespan is typically only one to three years, which is itself a welfare and emotional consideration. Use this page as a planning framework.",
    oneTimeCategories: [
      "Adoption fee or pet-store cost",
      "Large enclosure — many welfare guidelines suggest substantially more floor space than typical pet-store cages",
      "Quality solid-surface running wheel sized appropriately for the species",
      "Deep substrate for burrowing",
      "Hides, chews, and enrichment items",
      "Initial vet check where available",
    ],
    recurringMonthly: [
      "Hamster-specific food mix",
      "Substrate replacement and bedding",
      "Chews and replacement enrichment",
      "Treats appropriate to species (kept small)",
      "Contribution to a small emergency vet fund",
    ],
    yearlyConsiderations: [
      "Annual veterinary check, where available",
      "Replacement of worn enrichment and cage parts",
      "Senior-stage care later in the hamster's short lifespan",
    ],
    hiddenCosts: [
      "Specialist small-mammal veterinary care — not all general practices see hamsters",
      "Common health issues including dental, respiratory, and tumours in older individuals",
      "Replacement of inadequate starter cages once welfare standards are understood",
      "Time cost — hamsters are crepuscular or nocturnal and not always available when children are awake",
    ],
    emergencyFundNote:
      "Even small pets can need urgent care. Although individual emergency costs tend to be lower than for dogs or cats in many regions, the rate of urgent issues in older hamsters means a small dedicated fund is worth having.",
    factorsThatChangeCost: [
      "Species — Syrian, Roborovski, and other dwarf species have different enclosure needs.",
      "Quality of starting equipment — cheap cages are often replaced.",
      "Country and city — small-mammal vet availability varies.",
    ],
    notFinanciallySuitableFor: [
      "People wanting a 'starter pet' for very young children without adult supervision.",
      "Households unable to provide a suitably large enclosure.",
      "Households without access to a small-mammal-savvy veterinarian.",
    ],
    budgetChecklist: [
      "Plan a larger enclosure than pet-store defaults — welfare guidelines often recommend much more space.",
      "Budget a quality solid-surface wheel sized to the species.",
      "Plan for deep substrate and ongoing replacement.",
      "Find a small-mammal-savvy vet in advance.",
      "Plan a small emergency fund.",
    ],
    faqs: [
      {
        question: "Are hamsters cheap pets?",
        answer:
          "At purchase, often yes. Over a hamster's short lifespan, total cost is typically lower than a dog or cat — but only if the enclosure, wheel, substrate, and vet access are set up correctly from the start.",
      },
      {
        question: "Do hamsters need vet care?",
        answer:
          "Yes — particularly as they age. Common issues include dental, respiratory, and tumour problems. Small-mammal-savvy vets are not available everywhere.",
      },
      {
        question: "Are hamsters good first pets for children?",
        answer:
          "Less so than commonly assumed. They are fragile, can bite, are often nocturnal, and live only one to three years. Welfare considerations are real — talk to a small-mammal-savvy vet or shelter before deciding.",
      },
    ],
    sources: [SRC_AVMA_PET_CARE, SRC_AVMA_PET_OWNERS],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  // ─── GUINEA PIG ─────────────────────────────────────────────────────────
  {
    slug: "how-much-does-a-guinea-pig-cost",
    species: "guinea-pig",
    speciesLabel: "Guinea pig",
    parentHub: "/small-pets/guinea-pigs",
    parentHubLabel: "Guinea pigs",
    grandparentHub: "/small-pets",
    grandparentLabel: "Small Pets",
    path: "/small-pets/guinea-pigs/how-much-does-a-guinea-pig-cost",
    title: "How Much Does a Guinea Pig Cost? Planning Framework for First-Time Owners",
    description:
      "Guinea pig ownership costs include a large enclosure, daily fresh vegetables, vitamin C, and specialist vet care — and most welfare bodies recommend keeping pairs.",
    pageHeading: "How Much Does a Guinea Pig Cost?",
    directAnswer:
      "Guinea pigs are social herbivores that most welfare organisations recommend keeping in pairs or small groups. Honest setup costs include a much larger enclosure than typical pet-store cages, daily hay and fresh vegetables (with vitamin C), and access to a small-mammal-savvy vet. Lifespan is typically five to seven years. Use this page as a planning framework — actual prices vary by country.",
    oneTimeCategories: [
      "Adoption fee (most welfare guidance suggests adopting in pairs)",
      "Large enclosure — far bigger than typical pet-store cages",
      "Hides, tunnels, hay racks, water bottle",
      "Initial supply of hay, pellets, vitamin-C-rich vegetables",
      "Bedding / fleece liners",
      "Initial vet visit where available",
    ],
    recurringMonthly: [
      "Daily hay — the main food",
      "Pellets and fresh vegetables, including vitamin-C sources",
      "Bedding or fleece-liner replacement",
      "Routine vet care prorated monthly",
      "Toys, chews, and enrichment replacements",
      "Contribution to a small emergency vet fund",
    ],
    yearlyConsiderations: [
      "Annual or twice-yearly veterinary check",
      "Replacement of enclosure liners, hides, water bottles",
      "Adjustments for ageing animals",
    ],
    hiddenCosts: [
      "Specialist small-mammal vet visits, including dental work",
      "Vitamin C deficiency consequences if diet is mismanaged",
      "Replacement of inadequate starter cages once welfare standards are understood",
      "Boarding or sitter cost for travel periods",
    ],
    emergencyFundNote:
      "Guinea pigs can develop respiratory infections, dental problems, and other urgent issues quickly. A small dedicated emergency vet fund is widely recommended even though individual emergency bills tend to be lower than for dogs or cats in many regions.",
    factorsThatChangeCost: [
      "Whether you keep one (rarely recommended) or a pair.",
      "Enclosure size and quality — a one-time saving here often becomes a recurring welfare cost.",
      "Diet quality — fresh vegetables and vitamin C are non-negotiable.",
      "Country and city — small-mammal vet availability and fresh-vegetable cost vary widely.",
    ],
    notFinanciallySuitableFor: [
      "Households unable to provide a large enclosure.",
      "People hoping guinea pigs are a 'low-cost starter pet' for very young children.",
      "Households without access to a small-mammal-savvy veterinarian.",
    ],
    budgetChecklist: [
      "Plan a much larger enclosure than pet-store defaults.",
      "Budget for daily hay and vitamin-C-rich vegetables.",
      "Find a small-mammal-savvy vet in advance.",
      "Set aside a small emergency vet fund.",
      "Plan for boarding or sitter cost for travel.",
    ],
    faqs: [
      {
        question: "Why do most welfare bodies recommend keeping guinea pigs in pairs?",
        answer:
          "Guinea pigs are social and typically do better with at least one same-species companion. Most welfare and rescue organisations encourage adopting in pairs.",
      },
      {
        question: "Are guinea pigs cheaper than rabbits?",
        answer:
          "In some categories often yes, but the difference is smaller than commonly assumed. Both species need substantial enclosure space, daily fresh food, and access to a small-mammal-savvy vet.",
      },
      {
        question: "What's the biggest hidden cost?",
        answer:
          "Specialist veterinary care for dental, respiratory, and skin issues — and the cost of replacing an inadequate starter cage once welfare standards are understood.",
      },
    ],
    sources: [SRC_AVMA_PET_CARE, SRC_AVMA_PET_OWNERS],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  // ─── BIRD ───────────────────────────────────────────────────────────────
  {
    slug: "how-much-does-a-bird-cost",
    species: "bird",
    speciesLabel: "Pet bird",
    parentHub: "/birds",
    parentHubLabel: "Pet Birds",
    grandparentHub: "/birds",
    grandparentLabel: "Pet Birds",
    path: "/birds/how-much-does-a-bird-cost",
    title: "How Much Does a Pet Bird Cost? Setup and Lifetime Budget",
    description:
      "Bird ownership often costs more — and lasts longer — than expected. A cautious planning framework for cage, food, avian vet care, and decades of commitment.",
    pageHeading: "How Much Does a Pet Bird Cost?",
    directAnswer:
      "Bird costs vary enormously by species. A small finch is a very different financial commitment from a medium parrot — and several parrot species live for decades. Honest setup includes a properly sized cage, species-appropriate diet, daily out-of-cage time, and access to an avian veterinarian. Use this page as a planning framework, not a single estimate.",
    oneTimeCategories: [
      "Adoption fee or breeder cost (avoid impulse pet-store purchases — rescues exist for most species)",
      "Properly sized cage, larger than many pet-store defaults",
      "Perches of varied diameter, toys, foraging items",
      "Food bowls and an initial supply of species-appropriate pellets, fresh vegetables and fruit",
      "Initial avian veterinary check",
    ],
    recurringMonthly: [
      "Species-appropriate pellets, fresh vegetables, and a small amount of fruit",
      "Replacement toys — birds destroy enrichment by design, which is healthy",
      "Cage liner / substrate",
      "Routine avian vet care prorated monthly",
      "Contribution to an emergency avian vet fund",
    ],
    yearlyConsiderations: [
      "Annual avian veterinary check — many issues are easier to catch early",
      "Replacement of perches, toys, and cage hardware",
      "Adjustments for ageing birds — several species live for decades",
    ],
    hiddenCosts: [
      "Avian veterinary care — typically more specialised and not available in every area",
      "Long lifespan — many parrots live 20 to 60+ years, which is a real intergenerational financial commitment",
      "Damage to household items during out-of-cage time",
      "Behavioural and welfare consequences of insufficient enrichment, which can require professional help",
    ],
    emergencyFundNote:
      "An avian-specific emergency fund is worth having. Sick birds often hide symptoms until problems are serious, and avian vets can be more specialised and expensive than general practices.",
    factorsThatChangeCost: [
      "Species — finches, budgies, cockatiels, and larger parrots have very different cost profiles.",
      "Lifespan — long-lived species mean decades of recurring costs.",
      "Country and city — avian vet availability varies widely.",
      "Whether you keep one or a compatible companion.",
    ],
    notFinanciallySuitableFor: [
      "People expecting a low-commitment, low-time pet.",
      "Households without access to an avian veterinarian.",
      "Households unable to plan for the bird's potentially very long lifespan.",
    ],
    budgetChecklist: [
      "Confirm cage size matches reputable welfare guidelines for the species, not pet-store defaults.",
      "Budget for varied perches and a steady supply of replacement enrichment.",
      "Find an avian veterinarian in advance and ask about typical exam pricing.",
      "Plan for daily out-of-cage time and the household impact.",
      "Set aside an emergency avian vet fund.",
    ],
    faqs: [
      {
        question: "Are small birds like budgies cheap pets?",
        answer:
          "At purchase, often yes. Over a lifespan that can reach 10 years or more, total cost adds up — and proper cage size, enrichment, and avian vet care are non-negotiable.",
      },
      {
        question: "Why is avian veterinary care more expensive?",
        answer:
          "Avian vets are specialists. Birds hide illness, exams are more delicate, and treatments are species-specific. Not every region has accessible avian vets.",
      },
      {
        question: "How long do pet birds live?",
        answer:
          "It depends heavily on species. Finches and budgies often live around 5 to 10 years. Cockatiels can live 15 to 25 years. Many parrot species live 25 to 60+ years — a multi-decade commitment.",
      },
    ],
    sources: [SRC_AVMA_PET_CARE, SRC_AVMA_PET_OWNERS],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  // ─── FISH ───────────────────────────────────────────────────────────────
  {
    slug: "how-much-does-a-fish-cost",
    species: "fish",
    speciesLabel: "Aquarium fish",
    parentHub: "/fish",
    parentHubLabel: "Pet Fish & Aquariums",
    grandparentHub: "/fish",
    grandparentLabel: "Pet Fish & Aquariums",
    path: "/fish/how-much-does-a-fish-cost",
    title: "How Much Does an Aquarium Fish Setup Cost? Honest Planning Guide",
    description:
      "Aquarium fishkeeping is rewarding but rarely as cheap as a single goldfish. A cautious framework for tank, cycling, equipment, and ongoing costs.",
    pageHeading: "How Much Does an Aquarium Fish Setup Cost?",
    directAnswer:
      "Aquarium fishkeeping is widely undervalued by first-time owners. The fish themselves are usually inexpensive; the tank, filtration, lighting, heater, cycling time, and water-chemistry knowledge are the real cost. Use this page as a planning framework — species-by-species needs and country-by-country prices vary significantly.",
    oneTimeCategories: [
      "Properly sized aquarium — many starter tanks are too small for the species commonly sold for them",
      "Filter, heater (where needed), lighting, thermometer",
      "Substrate, decor, plants, hiding spaces",
      "Water-testing kits",
      "Initial water-conditioning products",
      "Cycling time (the tank should be cycled before any fish are added)",
    ],
    recurringMonthly: [
      "Species-appropriate food",
      "Replacement filter media",
      "Water-conditioning products",
      "Replacement plants or decor as needed",
      "Electricity for filter, lighting, and heater",
    ],
    yearlyConsiderations: [
      "Equipment replacement (heaters and lights wear out)",
      "Water-testing kit refills",
      "Plant replacement or aquascaping refresh",
      "Possible vet/specialist consultation for sick fish (regional availability varies)",
    ],
    hiddenCosts: [
      "Replacing an undersized starter tank once you understand species needs",
      "Electricity for heated tropical or larger setups",
      "Saltwater setups are substantially more expensive than freshwater",
      "Sick-fish quarantine setup",
    ],
    emergencyFundNote:
      "An aquarium emergency fund is less about veterinary care and more about replacing failing equipment (heater, filter) quickly to protect livestock. A small reserve for unexpected replacements is sensible.",
    factorsThatChangeCost: [
      "Freshwater vs saltwater — saltwater is substantially more expensive.",
      "Tank size — larger tanks have higher one-time costs but are often more stable to keep.",
      "Species — some species need specific equipment, water parameters, or larger tanks.",
      "Country and city — electricity prices and aquarium supply costs vary widely.",
    ],
    notFinanciallySuitableFor: [
      "People assuming a starter kit holds the fish they want long-term.",
      "Households unable to commit to weekly maintenance routines.",
      "Households with no plan for water-quality knowledge or testing.",
    ],
    budgetChecklist: [
      "Research the species first — then size the tank to fit, not the other way around.",
      "Budget filter, heater (if needed), lighting, substrate, and water-testing kit.",
      "Plan for cycling time before adding any fish.",
      "Plan recurring costs for food, filter media, and electricity.",
      "Set aside a small reserve for equipment replacements.",
    ],
    faqs: [
      {
        question: "Are fish cheap pets?",
        answer:
          "The fish themselves are usually inexpensive; the correctly sized tank, equipment, and cycling time are the real cost. A 'cheap' starter kit often needs to be replaced.",
      },
      {
        question: "Why does tank size matter so much?",
        answer:
          "Many species commonly sold for small tanks need larger volumes than starter kits provide. Smaller tanks are also less stable in temperature and water chemistry, which makes them harder, not easier, to keep.",
      },
      {
        question: "Is saltwater really more expensive?",
        answer:
          "Yes. Saltwater setups generally need more specialised equipment, more careful chemistry, and more expensive livestock. They can be very rewarding but should be planned with much more financial headroom.",
      },
    ],
    sources: [SRC_AVMA_PET_CARE, SRC_AVMA_PET_OWNERS],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  // ─── REPTILE ────────────────────────────────────────────────────────────
  {
    slug: "how-much-does-a-reptile-cost",
    species: "reptile",
    speciesLabel: "Pet reptile",
    parentHub: "/reptiles",
    parentHubLabel: "Pet Reptiles",
    grandparentHub: "/reptiles",
    grandparentLabel: "Pet Reptiles",
    path: "/reptiles/how-much-does-a-reptile-cost",
    title: "How Much Does a Pet Reptile Cost? Honest Setup and Lifetime Budget",
    description:
      "Reptiles are often misjudged as cheap pets. Realistic costs include species-correct heating, lighting, enclosure size, vet care, and decades of commitment for some species.",
    pageHeading: "How Much Does a Pet Reptile Cost?",
    directAnswer:
      "Reptile ownership varies enormously by species, and many of the real costs are in the habitat — not the animal. Species-correct heating, UVB lighting (where required), enclosure size, substrate, and diet quality determine welfare. Several species live for decades. Use this page as a planning framework, and verify local laws before adopting — some species are restricted or prohibited in certain regions.",
    oneTimeCategories: [
      "Adoption or purchase cost (consider rescues; avoid impulse pet-store buys)",
      "Properly sized enclosure for adult size — many juveniles are sold in undersized enclosures",
      "Species-correct heating equipment and thermostat",
      "UVB lighting where required by the species, and replacement bulbs on schedule",
      "Substrate, hides, basking areas, water dish, climbing structures",
      "Initial exotic / reptile veterinary check where available",
    ],
    recurringMonthly: [
      "Species-appropriate food (insects, frozen rodents, vegetables, etc.)",
      "Replacement UVB bulbs on schedule",
      "Substrate replacement",
      "Electricity for heating and lighting",
      "Routine reptile vet care prorated monthly where available",
    ],
    yearlyConsiderations: [
      "Annual reptile vet check where available",
      "Replacement heating elements, lighting, and equipment",
      "Adjustments for adult sizing — many reptiles outgrow juvenile enclosures",
    ],
    hiddenCosts: [
      "Reptile / exotic veterinary care — not all general practices see reptiles",
      "Replacement of undersized juvenile enclosures and equipment",
      "Long lifespan in many species — bearded dragons commonly live 10+ years; some larger species live 20 to 40+ years",
      "Travel and boarding constraints — reptiles do not travel easily",
      "Legal compliance and permitting fees in some regions",
    ],
    emergencyFundNote:
      "A reptile-specific emergency fund is worth having. Exotic veterinary care can be more specialised and more expensive than general practice, and equipment failures (heating, UVB) can become urgent welfare issues.",
    factorsThatChangeCost: [
      "Species — adult size, diet, heating needs, UVB requirements, and lifespan vary enormously.",
      "Local laws and permitting — some species are restricted.",
      "Electricity prices for sustained heating and lighting.",
      "Quality of starting equipment.",
    ],
    notFinanciallySuitableFor: [
      "People drawn to a small juvenile without understanding adult enclosure needs.",
      "Households without access to a reptile-savvy veterinarian.",
      "Households unable to comply with local laws and welfare standards.",
    ],
    budgetChecklist: [
      "Research the species first — including adult size, lifespan, and legality in your region.",
      "Budget for the adult-size enclosure now, not just the juvenile habitat.",
      "Plan heating, UVB, and substrate for species-correct standards.",
      "Find a reptile-savvy veterinarian in advance.",
      "Plan for replacement bulbs on schedule and an emergency equipment reserve.",
      "Verify local laws and any permitting requirements.",
    ],
    faqs: [
      {
        question: "Are reptiles cheap pets?",
        answer:
          "The animal is often inexpensive; the habitat — heating, UVB, enclosure size, substrate — is the real cost. Pet-store starter kits frequently fall short of species-correct welfare standards.",
      },
      {
        question: "Do reptiles need a vet?",
        answer:
          "Yes. Reptiles benefit from periodic exotic-veterinary check-ups and need access to a reptile-savvy vet for urgent issues. Availability varies by region.",
      },
      {
        question: "How long do pet reptiles live?",
        answer:
          "Lifespan varies enormously. Some smaller species live around 5 to 10 years. Bearded dragons often live 10+ years. Some larger species can live 20 to 40+ years — a multi-decade commitment.",
      },
      {
        question: "Are there legal issues to consider?",
        answer:
          "Yes. Some species are restricted or prohibited in certain countries, regions, or buildings. Always verify legality before adopting.",
      },
    ],
    sources: [SRC_AVMA_PET_CARE, SRC_AVMA_PET_OWNERS],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
];

export const BUDGET_GUIDES: BudgetGuide[] = [
  {
    slug: "pet-budget-checklist",
    path: "/guides/pet-budget-checklist",
    title: "Pet Budget Checklist — Plan Before You Adopt",
    description:
      "A practical pet budget checklist for first-time and returning owners. One-time, recurring, hidden, and emergency cost categories without fake exact prices.",
    pageHeading: "Pet Budget Checklist",
    directAnswer:
      "Before adopting or buying any pet, walk through the categories in this checklist and price each one against your local providers — vets, insurers, retailers, shelters. The checklist is intentionally not a single dollar amount because real costs depend on country, city, species, breed, age, and lifestyle.",
    sections: [
      {
        heading: "Before adopting",
        intro:
          "Decisions made before adoption shape almost every later cost. Pause on these even if you already know what species you want.",
        bullets: [
          "Confirm your housing situation allows the pet (lease, building rules, deposit, insurance).",
          "Identify a local veterinarian (or specialist vet for exotic species) and ask about typical exam pricing.",
          "Sketch a rough monthly budget for food, preventive care, and an emergency fund contribution.",
          "Discuss long-term care: who covers vet bills, who covers daily care, what happens during travel.",
          "Confirm allergies are not an issue by spending time with the specific animal.",
        ],
      },
      {
        heading: "One-time setup costs",
        bullets: [
          "Adoption or purchase cost — favour reputable shelters, rescues, or breeders.",
          "Initial veterinary visit, vaccinations, parasite check, microchipping, and spay/neuter where applicable.",
          "Enclosure, habitat, or home setup appropriate to species — not the cheapest pet-store option.",
          "Carrier or crate for transport.",
          "Initial supplies: bowls, bedding, hides, litter or substrate, leash and ID for dogs, perches and substrate for birds.",
          "Initial training: puppy class for dogs, behaviour consultation if needed.",
        ],
      },
      {
        heading: "Recurring monthly costs",
        bullets: [
          "Species-appropriate food.",
          "Routine and preventive care prorated monthly (vaccines, parasite prevention, dental).",
          "Insurance premium where relevant.",
          "Grooming or coat care.",
          "Litter, substrate, bedding, or cage liner replacements.",
          "Toys, enrichment, and replacement supplies.",
          "Boarding or sitter for travel.",
          "Contribution to an emergency fund — separate from monthly spending.",
        ],
      },
      {
        heading: "Yearly checkpoints",
        bullets: [
          "Annual wellness exam (or twice yearly for senior pets and several exotic species).",
          "Vaccination and parasite-screen schedule.",
          "Insurance review and renewal.",
          "Replacement of worn gear (collars, harnesses, enclosure parts, lights, heaters).",
          "Adjustments for ageing — pets at the start and end of life often cost more than mid-life adults.",
        ],
      },
      {
        heading: "Emergency planning",
        intro:
          "Emergencies are the most unpredictable cost in any pet's life. Plan for them deliberately rather than hoping they will not happen.",
        bullets: [
          "Set aside a meaningful emergency veterinary fund separate from monthly spending.",
          "Know your nearest 24-hour or emergency veterinary clinic in advance.",
          "Confirm what your insurance does and does not cover before you need it.",
          "Plan for what you would do if a major bill arrived next week.",
        ],
      },
    ],
    faqs: [
      {
        question: "How much should I save before adopting?",
        answer:
          "There isn't a universal number. The right amount depends on species, country, vet pricing, your housing, and your insurance plans. Run the pet cost calculator with your own numbers, and add a meaningful emergency reserve on top.",
      },
      {
        question: "Is pet insurance always worth it?",
        answer:
          "It depends. Insurance can offset large unexpected bills, but premiums, deductibles, and exclusions vary by provider, species, and region. Read terms carefully and compare quotes before committing.",
      },
      {
        question: "What is the most overlooked cost?",
        answer:
          "Emergency veterinary care and senior-stage care. Many owners plan for monthly costs but not for the variable, sometimes large costs that show up later in a pet's life.",
      },
    ],
    sources: [SRC_AVMA_PET_CARE, SRC_AVMA_PET_OWNERS],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "first-year-pet-costs",
    path: "/guides/first-year-pet-costs",
    title: "First-Year Pet Costs — One-Time and Recurring Expenses to Plan For",
    description:
      "The first year of pet ownership usually costs more than later years. A cautious framework for one-time setup, initial vet care, training, and recurring costs.",
    pageHeading: "First-Year Pet Costs",
    directAnswer:
      "The first year of pet ownership usually costs more than subsequent years because it combines one-time setup (enclosure, gear, initial vet visit, training, spay/neuter where relevant) with twelve months of recurring costs. Use this page as a planning framework — actual prices vary widely by country, city, and species.",
    sections: [
      {
        heading: "Why year one is more expensive",
        bullets: [
          "Initial veterinary visit, vaccination series, parasite check, and microchipping.",
          "Spay/neuter procedures where applicable.",
          "Setup costs: enclosure, crate or carrier, bowls, bedding, scratching surfaces, perches, litter box, substrate, lighting, heating.",
          "Initial training or behaviour consultations.",
          "Replacement of pet-store starter equipment that turns out to be undersized or low-quality.",
        ],
      },
      {
        heading: "Year-one cost categories to plan",
        bullets: [
          "One-time setup costs appropriate to species.",
          "Twelve months of food, litter, bedding, and species-specific supplies.",
          "Routine vet care across the year, including the initial visit and follow-ups.",
          "Insurance premiums where applicable.",
          "Boarding, sitter, or daycare needs across the year.",
          "Contribution to an emergency vet fund built up across year one.",
        ],
      },
      {
        heading: "Common first-year surprises",
        bullets: [
          "Spay/neuter and dental procedures cost more than many first-time owners expect.",
          "Pet-friendly housing deposits or premiums.",
          "Replacement of inadequate starter cages, tanks, or enclosures.",
          "Behaviour-training costs that were not budgeted.",
          "Emergency veterinary visits in the first year — uncommon but not rare.",
        ],
      },
      {
        heading: "How to plan honestly",
        bullets: [
          "List every category from the pet budget checklist before adopting.",
          "Run a personal scenario in the pet cost calculator with your numbers.",
          "Get quotes from at least two local vets and two insurers.",
          "Build an emergency fund alongside monthly contributions in the first year.",
        ],
      },
    ],
    faqs: [
      {
        question: "Why is the first year so much more expensive?",
        answer:
          "Because it combines one-time setup costs (enclosure, gear, initial vet care, spay/neuter, training) with a full year of recurring expenses. Years two onwards typically lack most of the one-time costs.",
      },
      {
        question: "Should I save before I adopt?",
        answer:
          "Most reputable shelters and vet-led guides suggest yes — both for the one-time setup and as a starting emergency reserve. The right amount depends on country, species, and your circumstances.",
      },
      {
        question: "What if I adopt a senior pet?",
        answer:
          "Senior pets often have lower setup costs (they may already be socialised and trained) but higher recurring vet costs. Read the species-specific cost page for honest planning.",
      },
    ],
    sources: [SRC_AVMA_PET_CARE, SRC_AVMA_PET_OWNERS],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "hidden-costs-of-pet-ownership",
    path: "/guides/hidden-costs-of-pet-ownership",
    title: "Hidden Costs of Pet Ownership — What First-Time Owners Often Miss",
    description:
      "Pet costs go beyond food and routine vet care. A cautious overview of emergency vet, senior care, housing, and time costs most owners underestimate.",
    pageHeading: "Hidden Costs of Pet Ownership",
    directAnswer:
      "Most pet budgets focus on food, monthly preventive care, and a starter kit. The categories below are the ones most owners underestimate. They do not need to be feared — they need to be planned for. Use this page alongside the pet cost calculator and the species-specific cost pages.",
    sections: [
      {
        heading: "Emergency and senior veterinary care",
        bullets: [
          "Urgent veterinary visits are the single most variable cost in any pet's life.",
          "Senior-stage care — dental, chronic-disease management, mobility support, end-of-life — often arrives in clusters.",
          "Specialist or exotic veterinary care, where required, can be more expensive than general practice.",
        ],
      },
      {
        heading: "Housing and rental costs",
        bullets: [
          "Pet-friendly rentals often charge higher deposits or monthly premiums.",
          "Damage to furniture, baseboards, or carpets during early adjustment periods.",
          "Pet-related compromises during a move — limited listings, higher costs.",
        ],
      },
      {
        heading: "Lifestyle and time costs",
        bullets: [
          "Boarding, daycare, or sitter costs across the pet's lifespan.",
          "Travel restrictions — fewer trips, or more expensive trips.",
          "Reduced workplace flexibility, which can have a real financial impact.",
          "Behaviour-training costs that often were not in the original budget.",
        ],
      },
      {
        heading: "Equipment that turns out to be undersized",
        bullets: [
          "Cages, tanks, and enclosures sold for many species are too small for welfare standards — replacement is common.",
          "Cheap heating, lighting, or filtration that needs to be upgraded once you understand species needs.",
          "Senior-stage equipment (ramps, orthopaedic beds, elevated bowls) becomes a real category later in life.",
        ],
      },
      {
        heading: "End-of-life and bereavement",
        bullets: [
          "Veterinary services for end-of-life care.",
          "Cremation, burial, or aftercare services.",
          "Emotional cost — not financial, but worth acknowledging when planning the commitment.",
        ],
      },
    ],
    faqs: [
      {
        question: "What is the single most overlooked pet cost?",
        answer:
          "Emergency and senior veterinary care. Most owners plan for monthly recurring costs but not for the variable, sometimes large costs that arrive later in a pet's life.",
      },
      {
        question: "Are hidden costs species-specific?",
        answer:
          "Many are similar across species (emergencies, housing, time), but some are species-specific — exotic vet specialisation for birds and reptiles, dental work for rabbits and senior cats, mobility support for senior dogs.",
      },
      {
        question: "How should I plan for hidden costs?",
        answer:
          "Build them into the pet budget checklist and an emergency fund. Read the species-specific cost page for the most common surprises in that species.",
      },
    ],
    sources: [SRC_AVMA_PET_CARE, SRC_AVMA_PET_OWNERS],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
];

export function getCostArticleBySlug(slug: string): PetCostArticle | undefined {
  return PET_COST_ARTICLES.find((a) => a.slug === slug);
}

export function getBudgetGuideBySlug(slug: string): BudgetGuide | undefined {
  return BUDGET_GUIDES.find((g) => g.slug === slug);
}
