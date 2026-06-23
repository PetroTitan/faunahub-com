import type { SourceLink } from "@/lib/educational/types";

const PUBLISHED = "2026-06-01";
const MODIFIED = "2026-06-01";

/**
 * Core safety principle shown prominently near the top of every page in the
 * Pet Nutrition & Feeding Intelligence cluster. This is an educational
 * planning cluster — not a veterinary diet-prescription cluster. Keep this
 * text intact.
 */
export const PET_NUTRITION_DISCLAIMER =
  "This content is educational and does not replace professional veterinary nutrition advice. Feeding needs vary by species, age, size, body condition, activity level, reproductive status, health history, and diet type. For puppies, kittens, seniors, pregnancy, weight concerns, allergies, vomiting, diarrhoea, chronic disease, or prescription diets, consult a licensed veterinarian.";

export const PET_NUTRITION_SOURCE_NOTE =
  "Authoritative references used for general educational context. External links open in a new tab and these organisations do not endorse FaunaHub. Specific feeding amounts and diet choices depend on the individual animal and should be confirmed with the food label and a licensed veterinarian.";

// ─── VERIFIED SOURCES ──────────────────────────────────────────────────────
// Every URL below was fetched with a browser user-agent and confirmed to
// return HTTP 200 (final, post-redirect URL recorded). Keep this list small,
// authoritative, and topical. Do not add a source that has not been checked.

const SRC_AVMA_PETCARE: SourceLink = {
  label: "AVMA — Pet Care Resources",
  url: "https://www.avma.org/resources-tools/pet-owners/petcare",
  type: "veterinary",
  note: "American Veterinary Medical Association consumer pet-care hub",
};

const SRC_AVMA_SELECTING_FOOD: SourceLink = {
  label: "AVMA — Selecting Pet Food",
  url: "https://www.avma.org/resources-tools/pet-owners/petcare/selecting-pet-food",
  type: "veterinary",
  note: "How to evaluate and choose a commercial pet food",
};

const SRC_AVMA_HEALTHY_WEIGHT: SourceLink = {
  label: "AVMA — Healthy Weight for Pets",
  url: "https://www.avma.org/resources-tools/pet-owners/petcare/healthy-weight-pets",
  type: "veterinary",
  note: "Body condition and healthy-weight guidance",
};

const SRC_AVMA_OBESITY: SourceLink = {
  label: "AVMA — Obesity Prevention in Pets",
  url: "https://www.avma.org/resources-tools/pet-owners/petcare/obesity-prevention",
  type: "veterinary",
  note: "Preventing overfeeding and excess weight",
};

const SRC_WSAVA_NUTRITION: SourceLink = {
  label: "WSAVA — Global Nutrition Guidelines",
  url: "https://wsava.org/global-guidelines/global-nutrition-guidelines/",
  type: "veterinary",
  note: "World Small Animal Veterinary Association nutrition guidance and tools",
};

const SRC_MERCK_NUTRITION: SourceLink = {
  label: "Merck Veterinary Manual — Nutrition in Small Animals",
  url: "https://www.merckvetmanual.com/management-and-nutrition/nutrition-small-animals",
  type: "reference",
  note: "Veterinary reference on dog and cat nutrition",
};

const SRC_FDA_PETFOOD: SourceLink = {
  label: "FDA — Pet Food",
  url: "https://www.fda.gov/animal-veterinary/animal-foods-feeds/pet-food",
  type: "government",
  note: "US FDA pet-food regulation and labelling information",
};

const SRC_FDA_RAW: SourceLink = {
  label: "FDA — Raw Pet Food Diets Can Be Dangerous",
  url: "https://www.fda.gov/animal-veterinary/animal-health-literacy/get-facts-raw-pet-food-diets-can-be-dangerous-you-and-your-pet",
  type: "government",
  note: "FDA consumer guidance on raw pet-food risks",
};

const SRC_FDA_SAFE_HANDLING: SourceLink = {
  label: "FDA — Tips for Safe Handling of Pet Food and Treats",
  url: "https://www.fda.gov/animal-veterinary/animal-health-literacy/tips-safe-handling-pet-food-and-treats",
  type: "government",
  note: "Food-safety basics for storing and handling pet food",
};

const SRC_AAFCO_LABELS: SourceLink = {
  label: "AAFCO — Understanding Pet Food",
  url: "https://www.aafco.org/consumers/understanding-pet-food/",
  type: "reference",
  note: "Association of American Feed Control Officials consumer label guidance",
};

const SRC_ASPCA_DOG_NUTRITION: SourceLink = {
  label: "ASPCA — Dog Nutrition Tips",
  url: "https://www.aspca.org/pet-care/dog-care/dog-nutrition-tips",
  type: "veterinary",
  note: "General feeding guidance for dogs",
};

const SRC_ASPCA_CAT_NUTRITION: SourceLink = {
  label: "ASPCA — Cat Nutrition Tips",
  url: "https://www.aspca.org/pet-care/cat-care/cat-nutrition-tips",
  type: "veterinary",
  note: "General feeding guidance for cats",
};

const SRC_CORNELL_FELINE: SourceLink = {
  label: "Cornell Feline Health Center",
  url: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center",
  type: "university",
  note: "Cornell University College of Veterinary Medicine — cats",
};

const SRC_CORNELL_CANINE: SourceLink = {
  label: "Cornell Riney Canine Health Center",
  url: "https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center",
  type: "university",
  note: "Cornell University College of Veterinary Medicine — dogs",
};

// ─── TYPES ─────────────────────────────────────────────────────────────────

export interface NutritionSection {
  heading: string;
  intro?: string;
  bullets: string[];
}

export interface NutritionFAQ {
  question: string;
  answer: string;
}

export interface NutritionRelatedGroup {
  title: string;
  links: { label: string; href: string }[];
}

export type NutritionTone =
  | "planning"
  | "life-stage"
  | "food-types"
  | "treats"
  | "water"
  | "raw"
  | "labels";

export interface PetNutritionArticle {
  slug: string;
  /** Always "/pet-nutrition/<slug>" */
  path: string;
  /** Meta title (brand suffix is added by buildArticleMetadata) */
  title: string;
  description: string;
  /** H1 */
  pageHeading: string;
  topicTag: string;
  tone: NutritionTone;
  /** Cautious answer shown near the top */
  directAnswer: string;
  /** Educational overview sections */
  sections: NutritionSection[];
  /** Required practical planning checklist */
  checklist: NutritionSection;
  /** Required: what NOT to assume */
  whatNotToAssume: NutritionSection;
  /** Required: when to ask a veterinarian */
  whenToContactVet: NutritionSection;
  faqs: NutritionFAQ[];
  sources: SourceLink[];
  related: NutritionRelatedGroup[];
  publishedTime: string;
  modifiedTime: string;
}

// Reusable escalation block — generic "when to ask a vet" guidance.
const GENERIC_WHEN_TO_ASK: NutritionSection = {
  heading: "When to ask a veterinarian",
  intro:
    "Nutrition is individual, and this page cannot assess your specific pet. Ask a licensed veterinarian — ideally before major changes — especially in these situations.",
  bullets: [
    "Puppies, kittens, pregnancy or nursing, or seniors — life stages with particular needs.",
    "Weight concerns, a changing body condition, or any recommended weight-loss or weight-gain plan.",
    "Any diagnosed condition or prescription diet (for example kidney, urinary, diabetic, or allergy diets).",
    "Vomiting, diarrhoea, appetite loss, or refusal to eat that lasts or keeps coming back.",
    "Before a major diet change, or if you are considering a raw, vegetarian, or home-prepared diet.",
  ],
};

// ─── ARTICLES ──────────────────────────────────────────────────────────────

export const PET_NUTRITION_ARTICLES: PetNutritionArticle[] = [
  {
    slug: "how-much-should-i-feed-my-dog",
    path: "/pet-nutrition/how-much-should-i-feed-my-dog",
    title: "How Much Should I Feed My Dog? A Planning Guide",
    description:
      "An educational guide to the variables behind how much to feed a dog — age, size, activity, body condition, and the food label — and why a veterinarian refines the amount. No universal portions.",
    pageHeading: "How Much Should I Feed My Dog?",
    topicTag: "Portions",
    tone: "planning",
    directAnswer:
      "There is no single right amount that fits every dog. How much to feed depends on age, size, activity level, body condition, reproductive status, the specific food, and health history. The feeding guide printed on your dog's food is a starting range; a licensed veterinarian helps you refine it for your individual dog. This page explains the variables — it does not prescribe a portion.",
    sections: [
      {
        heading: "What the amount actually depends on",
        bullets: [
          "Life stage — puppies, adults, and seniors have different energy needs.",
          "Size and expected adult weight, especially for growing dogs.",
          "Activity level — a working or very active dog differs from a mostly resting companion.",
          "Body condition — whether your dog is currently lean, ideal, or carrying extra weight.",
          "The specific food — calorie density varies between products, so equal volumes are not equal calories.",
          "Health history and any veterinary recommendations.",
        ],
      },
      {
        heading: "How to use the food label and your vet together",
        intro:
          "For example, two dogs of the same weight can need noticeably different amounts — one a relaxed couch companion, the other highly active — which is why the label range is a starting point, not a fixed rule.",
        bullets: [
          "Start from the feeding guide on your dog's food, which gives a range by weight.",
          "Measure portions with a standard cup or kitchen scale rather than estimating.",
          "Watch body condition over weeks and adjust gradually with veterinary input.",
          "Account for treats and any extras within the daily total.",
          "Ask your veterinarian to confirm a target body condition and amount for your dog.",
        ],
      },
    ],
    checklist: {
      heading: "Planning checklist",
      bullets: [
        "Read the feeding guide on your current food and note the range for your dog's weight.",
        "Pick a consistent measuring tool — a marked cup or a kitchen scale.",
        "Note your dog's life stage, activity level, and rough body condition.",
        "Track weight and body condition over a few weeks rather than judging day to day.",
        "Bring these notes to your veterinarian to confirm a sensible amount.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume one universal number of cups fits all dogs of a given weight.",
        "Do not assume the label maximum is automatically right — it is a range, not a target.",
        "Do not assume more food shows more care; overfeeding is a common welfare problem.",
        "Do not start a weight-loss plan for an overweight dog without veterinary guidance.",
      ],
    },
    whenToContactVet: GENERIC_WHEN_TO_ASK,
    faqs: [
      {
        question: "Why won't you just tell me how many cups to feed?",
        answer:
          "Because the right amount depends on factors a webpage cannot assess — your dog's life stage, activity, body condition, the specific food's calorie density, and health history. The label range plus your veterinarian's input is far more reliable than a universal number.",
      },
      {
        question: "Should I follow the bag's feeding chart exactly?",
        answer:
          "Treat it as a starting range, not a fixed prescription. Many charts suggest a span for each weight. Watch your dog's body condition over time and adjust with your veterinarian rather than assuming the chart is exact for your dog.",
      },
      {
        question: "My dog seems hungry all the time — should I feed more?",
        answer:
          "Not necessarily. Many dogs act hungry regardless of need. Persistent hunger, weight change, or begging is worth discussing with your veterinarian rather than simply increasing portions.",
      },
    ],
    sources: [SRC_AVMA_HEALTHY_WEIGHT, SRC_WSAVA_NUTRITION, SRC_ASPCA_DOG_NUTRITION],
    related: [
      {
        title: "Keep planning",
        links: [
          { label: "Dog feeding schedule", href: "/pet-nutrition/dog-feeding-schedule" },
          { label: "Treats and portion control", href: "/pet-nutrition/pet-treats-and-portion-control" },
          { label: "Pet food label basics", href: "/pet-nutrition/pet-food-label-basics" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Dog food safety", href: "/dogs/food" },
          { label: "Dog health hub", href: "/dogs/health" },
          { label: "Pet Cost Calculator", href: "/tools/pet-cost-calculator" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "how-much-should-i-feed-my-cat",
    path: "/pet-nutrition/how-much-should-i-feed-my-cat",
    title: "How Much Should I Feed My Cat? A Planning Guide",
    description:
      "An educational guide to the variables behind how much to feed a cat — age, activity, indoor lifestyle, body condition, and the food label — and why a veterinarian refines the amount. No universal portions.",
    pageHeading: "How Much Should I Feed My Cat?",
    topicTag: "Portions",
    tone: "planning",
    directAnswer:
      "Cats vary widely in their needs, so there is no single correct amount. How much to feed depends on age, activity, indoor or outdoor lifestyle, body condition, reproductive status, the specific food, and health history. The label feeding guide is a starting range, and a licensed veterinarian helps you refine it. This page explains the variables — it does not prescribe a portion.",
    sections: [
      {
        heading: "What the amount actually depends on",
        bullets: [
          "Life stage — kittens, adults, and seniors have different needs.",
          "Activity and lifestyle — many indoor cats are less active and need less than an outdoor hunter.",
          "Body condition — whether your cat is currently lean, ideal, or overweight.",
          "Whether you feed wet, dry, or a mix — calorie density differs.",
          "Health history and any veterinary recommendations.",
        ],
      },
      {
        heading: "Using the label and your vet together",
        bullets: [
          "Start from the feeding guide on your cat's food and note the range for their weight.",
          "Measure portions consistently rather than topping up a bowl by eye.",
          "Watch body condition over weeks and adjust gradually with veterinary input.",
          "Count treats and any extras within the daily total.",
          "Ask your veterinarian to confirm a target body condition and amount.",
        ],
      },
    ],
    checklist: {
      heading: "Planning checklist",
      bullets: [
        "Read the feeding guide on your current food and note the range for your cat's weight.",
        "Choose a consistent measuring tool and stick with it.",
        "Note your cat's life stage, activity level, and rough body condition.",
        "Track weight and body condition over a few weeks, not day to day.",
        "Confirm a sensible amount and target condition with your veterinarian.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume one universal portion fits all cats of a given weight.",
        "Do not free-feed unlimited dry food on the assumption a cat will self-regulate — many do not.",
        "Do not assume an overweight cat should simply be fed less without veterinary guidance — rapid weight loss can be dangerous for cats.",
        "Do not treat changes in appetite or weight as just a feeding-amount issue; they can matter medically.",
      ],
    },
    whenToContactVet: {
      heading: "When to ask a veterinarian",
      intro:
        "Cats can be sensitive to abrupt feeding changes and rapid weight loss. Ask a licensed veterinarian — ideally before major changes — especially in these situations.",
      bullets: [
        "Kittens, pregnancy or nursing, or senior cats.",
        "Any weight-loss or weight-gain plan — cats need carefully managed, gradual change.",
        "A diagnosed condition or prescription diet (for example kidney, urinary, or diabetic diets).",
        "Appetite loss or refusal to eat — even a short period without food can be serious in cats.",
        "Before a major diet change of any kind.",
      ],
    },
    faqs: [
      {
        question: "Should I leave dry food out all day?",
        answer:
          "Free-feeding works for some cats but leads to overeating in others. Measured meals make portion control easier. The right approach depends on your cat and is worth discussing with your veterinarian.",
      },
      {
        question: "My cat is overweight — should I just cut the food?",
        answer:
          "Not on your own. Cats can develop a serious liver condition if they lose weight too quickly or stop eating. Any weight-loss plan for a cat should be guided by a veterinarian.",
      },
      {
        question: "Why won't you give an exact amount?",
        answer:
          "The right amount depends on your cat's age, activity, body condition, the specific food, and health — factors a webpage cannot assess. The label range plus veterinary input is more reliable than a universal number.",
      },
    ],
    sources: [SRC_AVMA_HEALTHY_WEIGHT, SRC_WSAVA_NUTRITION, SRC_ASPCA_CAT_NUTRITION],
    related: [
      {
        title: "Keep planning",
        links: [
          { label: "Cat feeding schedule", href: "/pet-nutrition/cat-feeding-schedule" },
          { label: "Wet vs dry food for cats", href: "/pet-nutrition/wet-vs-dry-food-for-cats" },
          { label: "Treats and portion control", href: "/pet-nutrition/pet-treats-and-portion-control" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Cat food safety", href: "/cats/food" },
          { label: "Cat health hub", href: "/cats/health" },
          { label: "Why is my cat not eating?", href: "/cats/health/why-is-my-cat-not-eating" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "dog-feeding-schedule",
    path: "/pet-nutrition/dog-feeding-schedule",
    title: "Dog Feeding Schedule — Building a Routine",
    description:
      "An educational overview of how to think about a dog feeding routine across life stages, with cautious, flexible planning rather than a rigid universal schedule.",
    pageHeading: "Dog Feeding Schedule",
    topicTag: "Schedule",
    tone: "planning",
    directAnswer:
      "Most adult dogs do well with a consistent daily routine, but the best schedule depends on age, lifestyle, and your veterinarian's guidance. This page helps you think through a routine — it does not set a rigid, universal schedule, because puppies, adults, and seniors differ, as do individual dogs.",
    sections: [
      {
        heading: "General routine planning",
        bullets: [
          "Many adult dogs are fed on a regular daily routine that fits the household — consistency helps digestion and house-training.",
          "Puppies usually eat more frequently than adults; your veterinarian can advise on frequency for your puppy's age.",
          "Keep fresh water available at all times.",
          "Feed in a calm space, and avoid heavy exercise right around large meals, especially for deep-chested dogs.",
          "Keep the timing reasonably consistent day to day.",
        ],
      },
    ],
    checklist: {
      heading: "Planning checklist",
      bullets: [
        "Decide on a routine that you can keep consistent on most days.",
        "Match feeding frequency to life stage — ask your vet about puppies and seniors.",
        "Keep fresh water available at all times.",
        "Measure the daily amount and divide it across the day's meals.",
        "Note appetite and energy, and raise any persistent changes with your veterinarian.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume one rigid schedule is correct for every dog or every life stage.",
        "Do not assume a skipped or eager meal is meaningless if it becomes a pattern.",
        "Do not exercise a dog hard right before or after a big meal, particularly large, deep-chested breeds.",
        "Do not change the routine abruptly for a dog with health concerns without veterinary input.",
      ],
    },
    whenToContactVet: GENERIC_WHEN_TO_ASK,
    faqs: [
      {
        question: "How many meals a day should a dog have?",
        answer:
          "Many adult dogs are fed once or twice daily, while puppies usually eat more often. The right frequency depends on age, health, and your veterinarian's advice rather than a single universal rule.",
      },
      {
        question: "Does the exact feeding time matter?",
        answer:
          "Consistency matters more than the precise clock time. A reasonably steady daily routine supports digestion and house-training. Adjust to fit your household while keeping it consistent.",
      },
      {
        question: "Is free-feeding okay for dogs?",
        answer:
          "Measured meals make portion control and monitoring easier, which is why many owners prefer them. Whether free-feeding suits your dog is best discussed with your veterinarian.",
      },
    ],
    sources: [SRC_ASPCA_DOG_NUTRITION, SRC_AVMA_PETCARE, SRC_WSAVA_NUTRITION],
    related: [
      {
        title: "Keep planning",
        links: [
          { label: "How much should I feed my dog?", href: "/pet-nutrition/how-much-should-i-feed-my-dog" },
          { label: "Puppy feeding basics", href: "/pet-nutrition/puppy-feeding-basics" },
          { label: "Feeding schedule planner", href: "/tools/pet-feeding-schedule-planner" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Dog food safety", href: "/dogs/food" },
          { label: "Dog health hub", href: "/dogs/health" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "cat-feeding-schedule",
    path: "/pet-nutrition/cat-feeding-schedule",
    title: "Cat Feeding Schedule — Meals vs Free Feeding",
    description:
      "An educational comparison of meal feeding and free feeding for cats, with cautious routine planning rather than a single universal best schedule.",
    pageHeading: "Cat Feeding Schedule",
    topicTag: "Schedule",
    tone: "planning",
    directAnswer:
      "Cats can be fed in measured meals, by free feeding, or a mix — each has trade-offs, and there is no single best schedule for every cat. This page compares the approaches so you can plan a routine, then confirm what suits your individual cat with a licensed veterinarian.",
    sections: [
      {
        heading: "Meal feeding vs free feeding",
        intro: "Both can work; the right choice depends on the individual cat and household.",
        bullets: [
          "Meal feeding (measured portions at set times) makes portion control and monitoring appetite easier.",
          "Free feeding (food left out) suits some grazing cats but can lead to overeating in others, especially with dry food.",
          "Many households use a mix — for example measured wet meals plus a measured amount of dry.",
          "Multi-cat homes may need separate stations so intake can be monitored.",
          "Keep fresh water available at all times, separate from the food if your cat prefers.",
        ],
      },
    ],
    checklist: {
      heading: "Planning checklist",
      bullets: [
        "Decide between measured meals, free feeding, or a mix based on your cat and home.",
        "Measure the daily amount so you can monitor intake either way.",
        "In multi-cat homes, set up stations so you can tell who eats what.",
        "Keep fresh water available and refreshed.",
        "Note appetite changes and discuss persistent ones with your veterinarian.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume there is one universally best schedule for all cats.",
        "Do not assume a cat will reliably self-regulate unlimited dry food.",
        "Do not ignore a cat that stops eating — even a short period without food can be serious for cats.",
        "Do not assume a fussy spell is just preference if it persists; ask your veterinarian.",
      ],
    },
    whenToContactVet: {
      heading: "When to ask a veterinarian",
      intro: "Appetite is an important signal in cats. Ask a licensed veterinarian in these situations.",
      bullets: [
        "Kittens, pregnancy or nursing, or senior cats.",
        "Any cat that refuses food or eats noticeably less, even briefly.",
        "Weight changes, or a recommended weight-management plan.",
        "A diagnosed condition or prescription diet.",
        "Before a major change to how or what you feed.",
      ],
    },
    faqs: [
      {
        question: "Is free feeding bad for cats?",
        answer:
          "Not inherently, but it makes overeating and weight gain easier for some cats and harder to monitor intake. Measured meals give more control. The best approach depends on your cat and is worth discussing with your veterinarian.",
      },
      {
        question: "How often should cats eat?",
        answer:
          "Many adult cats are fed two or more measured meals a day, and some prefer smaller, more frequent portions. Kittens eat more often. Your veterinarian can advise for your cat's age and health.",
      },
      {
        question: "My cat skipped a meal — should I worry?",
        answer:
          "A single skipped meal in an otherwise well cat may be minor, but cats should not go long without eating. If your cat refuses food or this recurs, contact your veterinarian.",
      },
    ],
    sources: [SRC_ASPCA_CAT_NUTRITION, SRC_AVMA_PETCARE, SRC_WSAVA_NUTRITION],
    related: [
      {
        title: "Keep planning",
        links: [
          { label: "How much should I feed my cat?", href: "/pet-nutrition/how-much-should-i-feed-my-cat" },
          { label: "Kitten feeding basics", href: "/pet-nutrition/kitten-feeding-basics" },
          { label: "Feeding schedule planner", href: "/tools/pet-feeding-schedule-planner" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Cat food safety", href: "/cats/food" },
          { label: "Why is my cat not eating?", href: "/cats/health/why-is-my-cat-not-eating" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "puppy-feeding-basics",
    path: "/pet-nutrition/puppy-feeding-basics",
    title: "Puppy Feeding Basics — Growth-Stage Planning",
    description:
      "An educational overview of feeding a growing puppy: using puppy-appropriate food, frequent meals, and why growth needs vary and warrant veterinary guidance. No exact prescriptions.",
    pageHeading: "Puppy Feeding Basics",
    topicTag: "Life stage",
    tone: "life-stage",
    directAnswer:
      "Puppies grow quickly and have different needs from adult dogs, so they are usually fed a food formulated for growth and offered more frequently. Exact amounts and timing depend on breed, expected adult size, and health, so a licensed veterinarian's guidance matters. This page is general planning, not a feeding prescription.",
    sections: [
      {
        heading: "General growth-stage planning",
        bullets: [
          "Use a food labelled as complete and balanced for growth (puppy) or all life stages, appropriate to expected adult size.",
          "Puppies are typically fed more frequently than adults; your veterinarian can advise on frequency for your puppy's age.",
          "Large- and giant-breed puppies have particular growth considerations — ask your veterinarian about appropriate food.",
          "Keep fresh water available at all times.",
          "Transition between foods gradually unless your veterinarian advises otherwise.",
        ],
      },
    ],
    checklist: {
      heading: "Planning checklist",
      bullets: [
        "Confirm the food is appropriate for growth and your puppy's expected adult size.",
        "Ask your veterinarian about meal frequency for your puppy's current age.",
        "Follow the label's starting range and adjust with veterinary input as your puppy grows.",
        "Keep fresh water available at all times.",
        "Schedule regular check-ups so growth and weight can be monitored.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume adult dog food suits a growing puppy — life-stage formulation matters.",
        "Do not assume more food means healthier growth; overfeeding can harm developing joints, especially in large breeds.",
        "Do not apply a breed-specific exact feeding amount from the internet as if it were universal.",
        "Do not switch foods abruptly unless your veterinarian advises it.",
      ],
    },
    whenToContactVet: {
      heading: "When to ask a veterinarian",
      intro: "Growth is a critical period. Ask a licensed veterinarian about the following.",
      bullets: [
        "Which food and feeding frequency suit your puppy's age and expected adult size.",
        "Large- or giant-breed growth, which has specific nutritional considerations.",
        "Any vomiting, diarrhoea, poor appetite, or failure to grow well.",
        "Weight and body-condition monitoring at routine visits.",
        "Before changing foods or adding supplements.",
      ],
    },
    faqs: [
      {
        question: "How often should a puppy eat?",
        answer:
          "Young puppies are usually fed several small meals a day, reducing in frequency as they grow. The right schedule depends on age, breed, and health — your veterinarian can advise for your puppy.",
      },
      {
        question: "Can puppies eat adult dog food?",
        answer:
          "Growing puppies generally need a food formulated for growth or all life stages. Adult maintenance food may not meet growth needs. Ask your veterinarian which formulation is appropriate.",
      },
      {
        question: "Why does large-breed puppy food exist?",
        answer:
          "Large- and giant-breed puppies have specific growth considerations, and some foods are formulated with that in mind. Your veterinarian can recommend an appropriate option for your puppy.",
      },
    ],
    sources: [SRC_ASPCA_DOG_NUTRITION, SRC_WSAVA_NUTRITION, SRC_MERCK_NUTRITION],
    related: [
      {
        title: "Keep planning",
        links: [
          { label: "Dog feeding schedule", href: "/pet-nutrition/dog-feeding-schedule" },
          { label: "How to transition pet food", href: "/pet-nutrition/how-to-transition-pet-food" },
          { label: "Pet food label basics", href: "/pet-nutrition/pet-food-label-basics" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Dog health hub", href: "/dogs/health" },
          { label: "Vet care hub", href: "/vet-care" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "kitten-feeding-basics",
    path: "/pet-nutrition/kitten-feeding-basics",
    title: "Kitten Feeding Basics — Growth-Stage Planning",
    description:
      "An educational overview of feeding a growing kitten: kitten-appropriate food, frequent meals, and why growth needs vary and warrant veterinary guidance. No exact prescriptions.",
    pageHeading: "Kitten Feeding Basics",
    topicTag: "Life stage",
    tone: "life-stage",
    directAnswer:
      "Kittens grow rapidly and have higher needs than adult cats, so they are usually fed a food formulated for growth and offered frequently. Exact amounts and timing depend on the individual kitten and health, so a licensed veterinarian's guidance matters. This page is general planning, not a feeding prescription.",
    sections: [
      {
        heading: "General growth-stage planning",
        bullets: [
          "Use a food labelled as complete and balanced for growth (kitten) or all life stages.",
          "Kittens are typically fed several small meals a day; your veterinarian can advise on frequency.",
          "Keep fresh water available at all times, even if feeding wet food.",
          "Transition between foods gradually unless your veterinarian advises otherwise.",
          "Monitor weight and body condition as your kitten grows.",
        ],
      },
    ],
    checklist: {
      heading: "Planning checklist",
      bullets: [
        "Confirm the food is formulated for growth or all life stages.",
        "Ask your veterinarian about meal frequency for your kitten's age.",
        "Follow the label's starting range and adjust with veterinary input.",
        "Keep fresh water available at all times.",
        "Schedule routine check-ups to monitor growth and weight.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume adult cat food meets a growing kitten's needs.",
        "Do not assume cow's milk is appropriate — many cats do not digest it well.",
        "Do not apply an exact gram or calorie amount from the internet as if universal.",
        "Do not switch foods abruptly unless your veterinarian advises it.",
      ],
    },
    whenToContactVet: {
      heading: "When to ask a veterinarian",
      intro: "Kittens are vulnerable during growth. Ask a licensed veterinarian about the following.",
      bullets: [
        "Which food and feeding frequency suit your kitten's age.",
        "Any vomiting, diarrhoea, poor appetite, or failure to grow well.",
        "Refusal to eat — kittens should not go long without food.",
        "Weight and body-condition monitoring at routine visits.",
        "Before changing foods or adding supplements.",
      ],
    },
    faqs: [
      {
        question: "How often should a kitten eat?",
        answer:
          "Young kittens are usually fed several small meals a day, reducing in frequency as they grow. The right schedule depends on age and health — your veterinarian can advise for your kitten.",
      },
      {
        question: "Can kittens drink cow's milk?",
        answer:
          "Cow's milk is not a suitable drink for many cats and can cause digestive upset. Kittens need a complete kitten diet and fresh water; ask your veterinarian about appropriate options.",
      },
      {
        question: "When do kittens switch to adult food?",
        answer:
          "The timing of moving from kitten to adult food depends on the individual cat. Your veterinarian can advise when and how to transition based on your kitten's growth.",
      },
    ],
    sources: [SRC_ASPCA_CAT_NUTRITION, SRC_WSAVA_NUTRITION, SRC_MERCK_NUTRITION],
    related: [
      {
        title: "Keep planning",
        links: [
          { label: "Cat feeding schedule", href: "/pet-nutrition/cat-feeding-schedule" },
          { label: "How to transition pet food", href: "/pet-nutrition/how-to-transition-pet-food" },
          { label: "Pet food label basics", href: "/pet-nutrition/pet-food-label-basics" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Can cats drink milk?", href: "/cats/food/can-cats-drink-milk" },
          { label: "Cat health hub", href: "/cats/health" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "senior-dog-feeding-considerations",
    path: "/pet-nutrition/senior-dog-feeding-considerations",
    title: "Senior Dog Feeding Considerations",
    description:
      "An educational overview of feeding considerations for older dogs — appetite, weight, dental comfort, and mobility — with veterinary guidance for any health-related diet needs.",
    pageHeading: "Senior Dog Feeding Considerations",
    topicTag: "Life stage",
    tone: "life-stage",
    directAnswer:
      "As dogs age, appetite, weight, dental comfort, activity, and digestion can change, and feeding may need to adapt. This page covers general considerations to discuss with your veterinarian. It does not give diet advice for specific medical conditions, which require a veterinarian's assessment.",
    sections: [
      {
        heading: "General considerations for older dogs",
        bullets: [
          "Activity often decreases with age, which can change energy needs and weight.",
          "Dental discomfort can affect eating; softening food or changing texture sometimes helps — ask your vet.",
          "Maintaining a healthy body condition supports comfort and mobility.",
          "Some seniors do well on the same food; others benefit from a change your veterinarian recommends.",
          "Keep fresh water available and watch for changes in drinking or appetite.",
        ],
      },
    ],
    checklist: {
      heading: "Planning checklist",
      bullets: [
        "Monitor weight and body condition more closely as your dog ages.",
        "Note any changes in appetite, chewing, drinking, or stool.",
        "Discuss whether the current food still suits your dog at routine visits.",
        "Keep fresh water available at all times.",
        "Raise any persistent changes with your veterinarian rather than guessing.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume every older dog needs a 'senior' food — it depends on the individual.",
        "Do not treat weight loss, increased thirst, or appetite changes as just normal ageing; they can signal health issues.",
        "Do not manage a suspected chronic condition through diet on your own.",
        "Do not change foods abruptly, especially for a dog with health concerns.",
      ],
    },
    whenToContactVet: {
      heading: "When to ask a veterinarian",
      intro: "Older dogs benefit from closer monitoring. Ask a licensed veterinarian about the following.",
      bullets: [
        "Unexplained weight loss or gain, or a changing body condition.",
        "Increased thirst, appetite changes, or difficulty chewing.",
        "Any diagnosed condition or a recommended prescription diet.",
        "Whether the current food still suits your dog's life stage.",
        "Before making a significant diet change.",
      ],
    },
    faqs: [
      {
        question: "Does my senior dog need special food?",
        answer:
          "Not always. Some older dogs do well on their existing food, while others benefit from a change. Whether a 'senior' diet helps your dog depends on the individual and is best decided with your veterinarian.",
      },
      {
        question: "My older dog is losing weight — is that normal ageing?",
        answer:
          "Weight loss should not be assumed to be just ageing. It can reflect dental, digestive, or other health issues. Have your veterinarian assess any noticeable weight change.",
      },
      {
        question: "How can I help a dog with dental discomfort eat?",
        answer:
          "Texture changes sometimes help, but dental discomfort itself needs veterinary attention. Ask your veterinarian about both the dental issue and any feeding adjustments.",
      },
    ],
    sources: [SRC_AVMA_PETCARE, SRC_CORNELL_CANINE, SRC_WSAVA_NUTRITION],
    related: [
      {
        title: "Keep planning",
        links: [
          { label: "How much should I feed my dog?", href: "/pet-nutrition/how-much-should-i-feed-my-dog" },
          { label: "Treats and portion control", href: "/pet-nutrition/pet-treats-and-portion-control" },
          { label: "How much water should pets drink?", href: "/pet-nutrition/how-much-water-should-pets-drink" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Dog health hub", href: "/dogs/health" },
          { label: "Vet care hub", href: "/vet-care" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "senior-cat-feeding-considerations",
    path: "/pet-nutrition/senior-cat-feeding-considerations",
    title: "Senior Cat Feeding Considerations",
    description:
      "An educational overview of feeding considerations for older cats — appetite, weight, and hydration awareness — with veterinary guidance for any health-related diet needs.",
    pageHeading: "Senior Cat Feeding Considerations",
    topicTag: "Life stage",
    tone: "life-stage",
    directAnswer:
      "Older cats can show changes in appetite, weight, and drinking, and feeding may need to adapt. This page covers general considerations to discuss with your veterinarian. It does not give diet advice for conditions such as kidney disease, thyroid disease, or diabetes — those require a veterinarian's assessment and, often, a prescription diet.",
    sections: [
      {
        heading: "General considerations for older cats",
        bullets: [
          "Appetite and weight can change with age; gradual weight loss in an older cat is worth veterinary attention.",
          "Hydration matters; some owners include wet food, and fresh water should always be available.",
          "Dental discomfort can affect eating and food choice — ask your veterinarian.",
          "Some seniors do well on their current food; others benefit from a change a veterinarian recommends.",
          "Watch litter-box habits and drinking, which can change with age and health.",
        ],
      },
    ],
    checklist: {
      heading: "Planning checklist",
      bullets: [
        "Monitor weight and body condition more closely as your cat ages.",
        "Note changes in appetite, drinking, chewing, or litter-box habits.",
        "Keep fresh water available, and consider wet food for added moisture if appropriate.",
        "Discuss whether the current food still suits your cat at routine visits.",
        "Raise any persistent changes with your veterinarian promptly.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume increased thirst, weight loss, or appetite changes are just ageing — in cats these can signal conditions like kidney or thyroid disease or diabetes.",
        "Do not choose a 'kidney', 'urinary', or other therapeutic diet on your own; these are veterinary decisions.",
        "Do not let an older cat go without eating — it can be dangerous.",
        "Do not change foods abruptly, especially with health concerns.",
      ],
    },
    whenToContactVet: {
      heading: "When to ask a veterinarian",
      intro: "Older cats benefit from prompt attention to changes. Ask a licensed veterinarian about the following.",
      bullets: [
        "Increased thirst or urination, weight loss, or appetite changes.",
        "Any refusal to eat — even briefly — which is serious in cats.",
        "Whether a therapeutic or prescription diet is appropriate for a diagnosed condition.",
        "Whether the current food still suits your cat's life stage.",
        "Before any significant diet change.",
      ],
    },
    faqs: [
      {
        question: "My senior cat is drinking more — should I change the food?",
        answer:
          "Increased thirst in an older cat can be a sign of a medical condition and should be assessed by a veterinarian rather than addressed by changing food on your own. See our page on cats drinking a lot of water.",
      },
      {
        question: "Does my older cat need a special diet?",
        answer:
          "Some do and some do not. Therapeutic diets for conditions like kidney disease are veterinary decisions. Whether a general 'senior' food helps your cat depends on the individual and your veterinarian's assessment.",
      },
      {
        question: "How do I keep an older cat hydrated?",
        answer:
          "Always provide fresh water, and some owners include wet food for added moisture. If you notice changes in drinking or urination, contact your veterinarian.",
      },
    ],
    sources: [SRC_CORNELL_FELINE, SRC_WSAVA_NUTRITION, SRC_MERCK_NUTRITION],
    related: [
      {
        title: "Keep planning",
        links: [
          { label: "How much should I feed my cat?", href: "/pet-nutrition/how-much-should-i-feed-my-cat" },
          { label: "Wet vs dry food for cats", href: "/pet-nutrition/wet-vs-dry-food-for-cats" },
          { label: "How much water should pets drink?", href: "/pet-nutrition/how-much-water-should-pets-drink" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Why is my cat drinking a lot of water?", href: "/cats/health/why-is-my-cat-drinking-a-lot-of-water" },
          { label: "Cat health hub", href: "/cats/health" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "wet-vs-dry-food-for-dogs",
    path: "/pet-nutrition/wet-vs-dry-food-for-dogs",
    title: "Wet vs Dry Food for Dogs — A Cautious Comparison",
    description:
      "An educational, balanced comparison of wet and dry dog food — texture, hydration, cost, and convenience — without declaring one universally best. Veterinary guidance for individual needs.",
    pageHeading: "Wet vs Dry Food for Dogs",
    topicTag: "Food types",
    tone: "food-types",
    directAnswer:
      "Both wet and dry dog foods can be part of a healthy diet when they are complete and balanced. Neither is universally best — the right choice depends on your dog, your routine, and veterinary guidance. This page compares practical trade-offs so you can plan, not a verdict that one type wins.",
    sections: [
      {
        heading: "Dry food — practical considerations",
        bullets: [
          "Convenient to store and measure, and often lower cost per calorie.",
          "Can be used in puzzle feeders and some chewing enrichment.",
          "Contains less moisture, so fresh water is especially important.",
          "Calorie density is often high, so careful measuring matters.",
        ],
      },
      {
        heading: "Wet food — practical considerations",
        bullets: [
          "Higher moisture content, which can support hydration.",
          "Often more palatable, which can help fussy eaters or some seniors.",
          "Usually more expensive per calorie and needs refrigeration once opened.",
          "Portioning still matters; calories vary between products.",
        ],
      },
      {
        heading: "How to choose",
        bullets: [
          "Look for a complete-and-balanced food appropriate to your dog's life stage either way.",
          "Many owners feed a mix; what suits your dog depends on health, preference, and budget.",
          "Ask your veterinarian if you are unsure, especially with health or weight concerns.",
        ],
      },
    ],
    checklist: {
      heading: "Planning checklist",
      bullets: [
        "Confirm any food is complete and balanced for your dog's life stage.",
        "Whichever you choose, measure portions and count treats in the daily total.",
        "Keep fresh water available, especially with dry food.",
        "Consider a mix if it suits your dog and budget.",
        "Ask your veterinarian about choices tied to health or weight.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume one type is universally superior for all dogs.",
        "Do not assume wet food alone guarantees hydration, or dry food alone harms it.",
        "Do not assume price equals quality, or that a single feature decides the choice.",
        "Do not switch types abruptly — transition gradually unless your vet advises otherwise.",
      ],
    },
    whenToContactVet: GENERIC_WHEN_TO_ASK,
    faqs: [
      {
        question: "Is wet or dry food better for dogs?",
        answer:
          "Neither is universally better. Both can be healthy when complete and balanced. The right choice depends on your dog's needs, preferences, health, and your routine — discuss it with your veterinarian if unsure.",
      },
      {
        question: "Can I mix wet and dry food?",
        answer:
          "Many owners do. The key is keeping the combined diet complete, balanced, and appropriately portioned. Count both toward the daily total and adjust with veterinary input if needed.",
      },
      {
        question: "Does dry food clean a dog's teeth?",
        answer:
          "Dry food is sometimes said to help, but it is not a substitute for dental care. Ask your veterinarian about appropriate dental-health measures for your dog.",
      },
    ],
    sources: [SRC_AVMA_SELECTING_FOOD, SRC_WSAVA_NUTRITION, SRC_ASPCA_DOG_NUTRITION],
    related: [
      {
        title: "Keep planning",
        links: [
          { label: "Pet food label basics", href: "/pet-nutrition/pet-food-label-basics" },
          { label: "How much should I feed my dog?", href: "/pet-nutrition/how-much-should-i-feed-my-dog" },
          { label: "How to transition pet food", href: "/pet-nutrition/how-to-transition-pet-food" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Dog food safety", href: "/dogs/food" },
          { label: "Dog health hub", href: "/dogs/health" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "wet-vs-dry-food-for-cats",
    path: "/pet-nutrition/wet-vs-dry-food-for-cats",
    title: "Wet vs Dry Food for Cats — A Cautious Comparison",
    description:
      "An educational, balanced comparison of wet and dry cat food — hydration, palatability, dental, and cost — without declaring one universally best. Veterinary guidance for individual needs.",
    pageHeading: "Wet vs Dry Food for Cats",
    topicTag: "Food types",
    tone: "food-types",
    directAnswer:
      "Both wet and dry cat foods can be part of a healthy diet when complete and balanced. Neither is universally best for every cat — hydration, palatability, dental factors, cost, and your cat's health all play a role. This page compares trade-offs so you can plan with your veterinarian, not a one-size verdict.",
    sections: [
      {
        heading: "Wet food — practical considerations",
        bullets: [
          "Higher moisture content, which can support hydration — relevant because many cats drink relatively little.",
          "Often very palatable, which can help fussy cats or some seniors.",
          "More expensive per calorie and needs refrigeration once opened.",
          "Portioning still matters; calories vary between products.",
        ],
      },
      {
        heading: "Dry food — practical considerations",
        bullets: [
          "Convenient to store and measure, and often lower cost per calorie.",
          "Easy to use in puzzle feeders for enrichment.",
          "Lower moisture, so fresh water is especially important.",
          "Easy to overfeed if left out, so measuring helps.",
        ],
      },
      {
        heading: "How to choose",
        bullets: [
          "Look for a complete-and-balanced food appropriate to your cat's life stage either way.",
          "Many households feed a mix; what suits your cat depends on health, preference, and budget.",
          "Ask your veterinarian if you are unsure, especially with urinary, weight, or other health concerns.",
        ],
      },
    ],
    checklist: {
      heading: "Planning checklist",
      bullets: [
        "Confirm any food is complete and balanced for your cat's life stage.",
        "Keep fresh water available regardless of food type.",
        "Measure portions and count treats in the daily total.",
        "Consider a mix if it suits your cat and budget.",
        "Ask your veterinarian about choices tied to health or weight.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume one type is universally best for all cats.",
        "Do not assume dry food alone meets a cat's water needs.",
        "Do not assume a urinary or weight issue can be managed by food choice alone — ask your veterinarian.",
        "Do not switch types abruptly — transition gradually unless your vet advises otherwise.",
      ],
    },
    whenToContactVet: GENERIC_WHEN_TO_ASK,
    faqs: [
      {
        question: "Is wet food better for cats?",
        answer:
          "Wet food's higher moisture can support hydration, which is helpful for some cats, but neither type is universally best. The right choice depends on your cat's health, preferences, and your routine — discuss it with your veterinarian.",
      },
      {
        question: "Will dry food keep my cat's teeth clean?",
        answer:
          "Dry food is not a reliable substitute for dental care. Ask your veterinarian about appropriate dental-health measures for your cat.",
      },
      {
        question: "Can I feed both wet and dry?",
        answer:
          "Many households do. Keep the combined diet complete, balanced, and appropriately portioned, and count both toward the daily total.",
      },
    ],
    sources: [SRC_AVMA_SELECTING_FOOD, SRC_CORNELL_FELINE, SRC_WSAVA_NUTRITION],
    related: [
      {
        title: "Keep planning",
        links: [
          { label: "Pet food label basics", href: "/pet-nutrition/pet-food-label-basics" },
          { label: "How much should I feed my cat?", href: "/pet-nutrition/how-much-should-i-feed-my-cat" },
          { label: "How much water should pets drink?", href: "/pet-nutrition/how-much-water-should-pets-drink" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Cat food safety", href: "/cats/food" },
          { label: "Cat health hub", href: "/cats/health" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "how-to-transition-pet-food",
    path: "/pet-nutrition/how-to-transition-pet-food",
    title: "How to Transition Pet Food Gradually",
    description:
      "An educational overview of why and how to change a pet's food gradually, and when to contact a veterinarian if vomiting, diarrhoea, or refusal occurs. Not a fixed medical schedule.",
    pageHeading: "How to Transition Pet Food",
    topicTag: "Transitions",
    tone: "planning",
    directAnswer:
      "When changing your pet's food, a gradual transition over several days helps reduce digestive upset for many pets — unless your veterinarian advises a different approach for a specific reason. This page explains the general concept. It is not a fixed medical schedule, and you should not push through if your pet becomes unwell.",
    sections: [
      {
        heading: "The gradual transition concept",
        bullets: [
          "The general idea is to mix increasing amounts of the new food with decreasing amounts of the old over several days.",
          "Going slowly gives the digestive system time to adjust and makes problems easier to spot.",
          "Some pets need a slower change than others; there is no single correct pace for every pet.",
          "Your veterinarian may advise a faster or different change for a specific medical reason.",
          "Keep fresh water available throughout.",
        ],
      },
    ],
    checklist: {
      heading: "Planning checklist",
      bullets: [
        "Plan to change over several days rather than all at once.",
        "Increase the new food and decrease the old gradually.",
        "Watch appetite, stool, and energy during the change.",
        "Slow down if your pet seems unsettled, and ask your vet if unsure.",
        "Keep fresh water available throughout.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a single fixed schedule is medically correct for every pet.",
        "Do not assume mild signs will pass if vomiting, diarrhoea, or refusal continues — contact your vet.",
        "Do not push through a transition if your pet becomes unwell.",
        "Do not change a prescription or therapeutic diet without veterinary guidance.",
      ],
    },
    whenToContactVet: {
      heading: "When to contact a veterinarian",
      intro: "Stop and seek guidance rather than continuing through illness.",
      bullets: [
        "Vomiting, diarrhoea, or refusal to eat during the transition — especially if it persists or worsens.",
        "Any cat that stops eating, even briefly.",
        "Signs of discomfort, lethargy, or other concerning changes.",
        "Before transitioning a pet on a prescription or therapeutic diet.",
        "If you are unsure how quickly to change your pet's food.",
      ],
    },
    faqs: [
      {
        question: "How long should a food transition take?",
        answer:
          "A gradual change over several days suits many pets, but the right pace varies and some need to go slower. There is no single universal schedule. Follow your veterinarian's advice, especially for sensitive pets.",
      },
      {
        question: "My pet got an upset stomach during the switch — what now?",
        answer:
          "Slow down and, if vomiting, diarrhoea, or refusal to eat continues or worsens, contact your veterinarian. Do not push through ongoing symptoms.",
      },
      {
        question: "Do I need to transition for a prescription diet?",
        answer:
          "Follow your veterinarian's instructions for any prescription or therapeutic diet, which may differ from a general gradual transition.",
      },
    ],
    sources: [SRC_WSAVA_NUTRITION, SRC_ASPCA_DOG_NUTRITION, SRC_MERCK_NUTRITION],
    related: [
      {
        title: "Keep planning",
        links: [
          { label: "Wet vs dry food for dogs", href: "/pet-nutrition/wet-vs-dry-food-for-dogs" },
          { label: "Wet vs dry food for cats", href: "/pet-nutrition/wet-vs-dry-food-for-cats" },
          { label: "Pet food label basics", href: "/pet-nutrition/pet-food-label-basics" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Why is my dog vomiting?", href: "/dogs/health/why-is-my-dog-vomiting" },
          { label: "Vet care hub", href: "/vet-care" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "pet-treats-and-portion-control",
    path: "/pet-nutrition/pet-treats-and-portion-control",
    title: "Pet Treats and Portion Control",
    description:
      "An educational overview of treating pets in moderation and counting treats within daily intake, with cautious portion awareness and veterinary guidance for weight concerns.",
    pageHeading: "Pet Treats and Portion Control",
    topicTag: "Treats",
    tone: "treats",
    directAnswer:
      "Treats are a normal part of life with pets, but they add calories that count toward the daily total. Keeping treats modest and within the day's intake supports a healthy weight. Many veterinarians suggest treats make up no more than roughly 10% of daily calories as a general guideline — confirm what is right for your pet with your veterinarian.",
    sections: [
      {
        heading: "Treating in moderation",
        bullets: [
          "Treats add calories — count them within the daily total rather than on top of full meals.",
          "A common veterinary guideline is to keep treats to about 10% of daily calories; your vet can tailor this.",
          "Use small pieces; many pets value the gesture more than the size.",
          "Healthy options can include small amounts of pet-safe foods — check our food-safety guides first.",
          "Avoid foods known to be toxic to pets, such as chocolate, grapes, raisins, onions, and xylitol-sweetened products.",
        ],
      },
    ],
    checklist: {
      heading: "Planning checklist",
      bullets: [
        "Decide a modest daily treat allowance and keep treats within the daily calorie total.",
        "Use small pieces and reduce meal portions slightly if treats are frequent.",
        "Check our food-safety guides before sharing any human food.",
        "Avoid known-toxic foods entirely.",
        "Ask your veterinarian about treats if your pet has weight or health concerns.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume treats are 'free' calories — they count toward the daily total.",
        "Do not assume a food is safe to share without checking; several common foods are toxic to pets.",
        "Do not use treats to manage a weight problem on your own — ask your veterinarian.",
        "Do not assume the 10% guideline is an exact prescription; it is a general starting point to confirm with your vet.",
      ],
    },
    whenToContactVet: GENERIC_WHEN_TO_ASK,
    faqs: [
      {
        question: "How many treats are too many?",
        answer:
          "A common veterinary guideline keeps treats to about 10% of daily calories, but the right amount depends on your pet. Treat this as a general starting point and confirm with your veterinarian, especially for pets with weight concerns.",
      },
      {
        question: "Can I use human food as treats?",
        answer:
          "Some pet-safe human foods can be used in small amounts, but several common foods are toxic to pets. Always check our food-safety guides first and avoid known hazards like chocolate, grapes, onions, and xylitol.",
      },
      {
        question: "My pet is gaining weight — should I cut treats?",
        answer:
          "Reducing treats can help, but weight management should be guided by your veterinarian, who can assess body condition and recommend a safe plan for your individual pet.",
      },
    ],
    sources: [SRC_AVMA_HEALTHY_WEIGHT, SRC_AVMA_OBESITY, SRC_WSAVA_NUTRITION],
    related: [
      {
        title: "Keep planning",
        links: [
          { label: "How much should I feed my dog?", href: "/pet-nutrition/how-much-should-i-feed-my-dog" },
          { label: "How much should I feed my cat?", href: "/pet-nutrition/how-much-should-i-feed-my-cat" },
          { label: "Pet food label basics", href: "/pet-nutrition/pet-food-label-basics" },
        ],
      },
      {
        title: "Food safety",
        links: [
          { label: "Dog food safety", href: "/dogs/food" },
          { label: "Cat food safety", href: "/cats/food" },
          { label: "Pet poisoning warning signs", href: "/pet-safety/pet-poisoning-warning-signs" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "how-much-water-should-pets-drink",
    path: "/pet-nutrition/how-much-water-should-pets-drink",
    title: "How Much Water Should Pets Drink?",
    description:
      "An educational overview of pet hydration: why water needs vary, how diet affects intake, and why a noticeable change in drinking is worth veterinary attention. No exact prescriptions.",
    pageHeading: "How Much Water Should Pets Drink?",
    topicTag: "Hydration",
    tone: "water",
    directAnswer:
      "Water needs vary by species, size, diet, activity, and weather, so there is no single correct amount for every pet. The most useful thing for most owners is to keep fresh water available and to notice meaningful changes — a clear increase or decrease in drinking can matter and is worth a veterinary conversation. This page does not give an exact water prescription or diagnose any condition.",
    sections: [
      {
        heading: "What affects how much pets drink",
        bullets: [
          "Diet — pets eating wet food take in more moisture from food and may drink less water directly.",
          "Activity and weather — more active pets and hot conditions increase needs.",
          "Body size and species — needs differ widely between and within species.",
          "Always provide clean, fresh water, and refresh it regularly.",
          "Knowing your pet's normal drinking makes changes easier to notice.",
        ],
      },
    ],
    checklist: {
      heading: "Planning checklist",
      bullets: [
        "Keep clean, fresh water available at all times and refresh it daily.",
        "Offer water in more than one spot, especially in multi-pet homes.",
        "Get a sense of your pet's normal drinking so changes stand out.",
        "Consider wet food for added moisture if appropriate for your pet.",
        "Note any clear increase or decrease in drinking and raise it with your veterinarian.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume there is one exact daily water amount for every pet.",
        "Do not assume a big change in drinking is harmless — increased or decreased thirst can signal health issues.",
        "Do not try to diagnose conditions like diabetes or kidney disease from drinking alone.",
        "Do not restrict water to control accidents without veterinary advice.",
      ],
    },
    whenToContactVet: {
      heading: "When to contact a veterinarian",
      intro: "Changes in drinking are a useful early signal. Contact a licensed veterinarian for the following.",
      bullets: [
        "A clear, sustained increase in thirst or urination.",
        "A clear decrease in drinking, or signs of dehydration.",
        "Drinking changes alongside weight loss, appetite changes, or lethargy.",
        "Any concern about hydration in a young, senior, or unwell pet.",
        "See our health pages on dogs and cats drinking a lot of water for context.",
      ],
    },
    faqs: [
      {
        question: "How much water should my pet drink each day?",
        answer:
          "It varies with size, diet, activity, and weather, so there is no single universal amount. Keep fresh water available and focus on noticing meaningful changes rather than hitting an exact number.",
      },
      {
        question: "My pet is suddenly drinking a lot — should I worry?",
        answer:
          "A clear, sustained increase in thirst can be a sign of a health issue and is worth a veterinary check. See our pages on dogs and cats drinking a lot of water, and contact your veterinarian.",
      },
      {
        question: "Should I limit my pet's water?",
        answer:
          "Generally no — pets should have free access to fresh water. Do not restrict water to manage accidents or for any other reason without specific veterinary advice.",
      },
    ],
    sources: [SRC_AVMA_PETCARE, SRC_MERCK_NUTRITION, SRC_CORNELL_FELINE],
    related: [
      {
        title: "Health context",
        links: [
          { label: "Why is my dog drinking a lot of water?", href: "/dogs/health/why-is-my-dog-drinking-a-lot-of-water" },
          { label: "Why is my cat drinking a lot of water?", href: "/cats/health/why-is-my-cat-drinking-a-lot-of-water" },
          { label: "Cat health hub", href: "/cats/health" },
        ],
      },
      {
        title: "Keep planning",
        links: [
          { label: "Wet vs dry food for cats", href: "/pet-nutrition/wet-vs-dry-food-for-cats" },
          { label: "Senior cat feeding considerations", href: "/pet-nutrition/senior-cat-feeding-considerations" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "raw-diets-for-pets-cautions",
    path: "/pet-nutrition/raw-diets-for-pets-cautions",
    title: "Raw Diets for Pets — A Cautious Overview",
    description:
      "A risk-aware educational overview of raw pet diets: food-safety and nutritional-balance concerns raised by major authorities, and why to involve a veterinarian. Not raw-diet advocacy or recipes.",
    pageHeading: "Raw Diets for Pets — Cautions",
    topicTag: "Food types",
    tone: "raw",
    directAnswer:
      "Raw pet diets are a topic where major veterinary and public-health authorities raise specific cautions, particularly around food safety and nutritional balance. This page is a risk-aware overview, not advocacy. It does not provide recipes or pathogen-handling instructions beyond pointing to official food-safety guidance, and it recommends involving a licensed veterinarian before considering a raw diet.",
    sections: [
      {
        heading: "Why raw diets warrant caution",
        bullets: [
          "Food-safety risk: raw meat can carry bacteria such as Salmonella and Listeria that can affect both pets and people in the household — the FDA highlights these risks.",
          "Nutritional balance: home-prepared raw diets can be incomplete or unbalanced without professional formulation.",
          "Household risk: handling raw pet food can spread bacteria to kitchen surfaces and to vulnerable people.",
          "Several veterinary organisations advise caution with raw or undercooked diets for these reasons.",
        ],
      },
      {
        heading: "If you are considering a raw diet",
        bullets: [
          "Talk to your veterinarian, or a board-certified veterinary nutritionist, before starting.",
          "Ask how nutritional completeness and balance would be ensured for your pet.",
          "Follow official food-safety guidance for storage, handling, and cleaning (see the FDA links below).",
          "Consider household members — infants, older adults, and immunocompromised people face higher risk.",
        ],
      },
    ],
    checklist: {
      heading: "Planning checklist",
      bullets: [
        "Discuss any raw-diet interest with your veterinarian first.",
        "Ask specifically about nutritional completeness and balance.",
        "Review official FDA food-safety guidance for handling and storage.",
        "Weigh household food-safety risk, especially with vulnerable people present.",
        "Make changes gradually and monitor your pet, contacting your vet with concerns.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume 'raw' automatically means healthier or more natural.",
        "Do not assume a home-prepared raw diet is balanced without professional formulation.",
        "Do not assume raw food carries no risk to the people in your home.",
        "Do not treat this page as a recipe or a how-to; it is a cautions overview.",
      ],
    },
    whenToContactVet: {
      heading: "When to ask a veterinarian",
      intro: "Raw diets are a decision to make with professional input. Ask a licensed veterinarian about the following.",
      bullets: [
        "Whether a raw diet is appropriate for your individual pet at all.",
        "How nutritional completeness and balance would be ensured.",
        "Any digestive upset, illness, or concern after a diet change.",
        "Diets for puppies, kittens, seniors, pregnant pets, or those with health conditions.",
        "Safer alternatives if balance or food safety cannot be assured.",
      ],
    },
    faqs: [
      {
        question: "Are raw diets healthier for pets?",
        answer:
          "That is not established, and major authorities raise food-safety and nutritional-balance concerns. Whether any diet suits your pet is best decided with a veterinarian rather than assumed.",
      },
      {
        question: "Are raw diets a risk to my family?",
        answer:
          "Handling raw pet food can spread bacteria like Salmonella to surfaces and people, which the FDA highlights. Households with infants, older adults, or immunocompromised members face higher risk. Follow official food-safety guidance and discuss it with your veterinarian.",
      },
      {
        question: "Can you give me a balanced raw recipe?",
        answer:
          "No. This page does not provide recipes. Nutritional formulation should come from your veterinarian or a board-certified veterinary nutritionist to ensure completeness and balance.",
      },
    ],
    sources: [SRC_FDA_RAW, SRC_FDA_SAFE_HANDLING, SRC_WSAVA_NUTRITION],
    related: [
      {
        title: "Keep planning",
        links: [
          { label: "Pet food label basics", href: "/pet-nutrition/pet-food-label-basics" },
          { label: "How to transition pet food", href: "/pet-nutrition/how-to-transition-pet-food" },
          { label: "Wet vs dry food for dogs", href: "/pet-nutrition/wet-vs-dry-food-for-dogs" },
        ],
      },
      {
        title: "Safety",
        links: [
          { label: "Home safety for pets", href: "/pet-safety/home-safety-for-pets" },
          { label: "Vet care hub", href: "/vet-care" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "pet-food-label-basics",
    path: "/pet-nutrition/pet-food-label-basics",
    title: "Pet Food Label Basics — How to Read the Bag",
    description:
      "An educational overview of pet food labels: the complete-and-balanced statement, life-stage wording, the ingredient list, guaranteed analysis, and the feeding-guide caveat. No brand rankings.",
    pageHeading: "Pet Food Label Basics",
    topicTag: "Labels",
    tone: "labels",
    directAnswer:
      "A pet food label carries useful information once you know what to look for — a nutritional-adequacy statement, the life stage the food is intended for, the ingredient list, the guaranteed analysis, and a feeding guide. This page explains these basics so you can read a label with confidence. It does not rank brands or make legal claims.",
    sections: [
      {
        heading: "Key things on the label",
        bullets: [
          "Nutritional-adequacy ('complete and balanced') statement — indicates the food is intended to be a complete diet, often referencing AAFCO.",
          "Life stage — wording such as growth, gestation/lactation, adult maintenance, or all life stages tells you who the food is formulated for.",
          "Ingredient list — ingredients are listed by weight; order alone does not tell the full nutritional story.",
          "Guaranteed analysis — minimum/maximum percentages of certain nutrients such as protein, fat, fibre, and moisture.",
          "Feeding guide — a starting range by weight, not an exact prescription for every pet.",
        ],
      },
      {
        heading: "How to use it",
        bullets: [
          "Match the life-stage statement to your pet (for example, a growth food for a puppy or kitten).",
          "Use the feeding guide as a starting point and refine with body condition and veterinary input.",
          "Read marketing terms cautiously; some words are not tightly defined.",
          "Ask your veterinarian if you are unsure whether a food suits your pet.",
        ],
      },
    ],
    checklist: {
      heading: "Planning checklist",
      bullets: [
        "Find the nutritional-adequacy statement and confirm it covers your pet's life stage.",
        "Note the life-stage wording (growth, adult maintenance, or all life stages).",
        "Skim the ingredient list and guaranteed analysis for a general picture.",
        "Treat the feeding guide as a starting range, not a fixed amount.",
        "Ask your veterinarian if a food's suitability is unclear.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume the first ingredient alone determines overall quality.",
        "Do not assume marketing words like 'premium', 'natural', or 'grain-free' guarantee anything specific.",
        "Do not assume the feeding guide is an exact amount for your individual pet.",
        "Do not assume a food is right for your pet's life stage or health without checking the adequacy statement and your vet.",
      ],
    },
    whenToContactVet: {
      heading: "When to ask a veterinarian",
      intro: "Labels inform a choice; your veterinarian helps you apply it. Ask about the following.",
      bullets: [
        "Which life-stage formulation suits your pet.",
        "Whether a particular food is appropriate given your pet's health.",
        "Any therapeutic or prescription diet, which is a veterinary decision.",
        "How to interpret the feeding guide for your individual pet.",
        "Before a significant diet change.",
      ],
    },
    faqs: [
      {
        question: "What does 'complete and balanced' mean?",
        answer:
          "It indicates the food is intended to provide complete nutrition for a stated life stage, often referencing AAFCO nutritional profiles. Check that the stated life stage matches your pet, and confirm suitability with your veterinarian.",
      },
      {
        question: "Does the first ingredient tell me if a food is good?",
        answer:
          "Not on its own. Ingredients are listed by weight, but ingredient order does not capture the full nutritional picture. Look at the adequacy statement and discuss options with your veterinarian.",
      },
      {
        question: "Is 'grain-free' better?",
        answer:
          "Not automatically. 'Grain-free' is a marketing description, not a guarantee of quality or suitability. Talk to your veterinarian about what is appropriate for your pet.",
      },
    ],
    sources: [SRC_AAFCO_LABELS, SRC_FDA_PETFOOD, SRC_AVMA_SELECTING_FOOD],
    related: [
      {
        title: "Keep planning",
        links: [
          { label: "Wet vs dry food for dogs", href: "/pet-nutrition/wet-vs-dry-food-for-dogs" },
          { label: "Wet vs dry food for cats", href: "/pet-nutrition/wet-vs-dry-food-for-cats" },
          { label: "How much should I feed my dog?", href: "/pet-nutrition/how-much-should-i-feed-my-dog" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Dog food safety", href: "/dogs/food" },
          { label: "Cat food safety", href: "/cats/food" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "how-to-choose-dog-food",
    path: "/pet-nutrition/how-to-choose-dog-food",
    title: "How to Choose Dog Food: A Practical Buyer's Guide",
    description:
      "An educational, brand-neutral guide to choosing dog food: what the AAFCO nutritional-adequacy statement means, how to match food to life stage, and which label details actually matter.",
    pageHeading: "How to Choose Dog Food",
    topicTag: "Choosing food",
    tone: "planning",
    directAnswer:
      "There is no single best dog food for every dog. The most useful starting signal on any product is the nutritional-adequacy statement (often referencing AAFCO), which tells you the food is formulated to be complete and balanced for a life stage. From there, match the food to your dog's life stage, size, and any veterinary guidance. This page explains how to compare options — it does not rank or recommend brands.",
    sections: [
      {
        heading: "What actually matters when choosing",
        bullets: [
          "Complete and balanced: look for a nutritional-adequacy statement (often citing AAFCO) for the right life stage.",
          "Life stage: puppy/growth, adult maintenance, or all life stages — and large-breed puppy formulas where relevant.",
          "Calorie density and feeding guide, so you can feed a sensible amount.",
          "Your dog's individual needs: size, activity, body condition, and any health history.",
          "Manufacturer transparency: who formulates the food and whether they employ qualified nutritionists and quality controls.",
        ],
      },
      {
        heading: "How to compare two products fairly",
        intro:
          "Marketing words on the front of the bag (premium, natural, holistic) are not defined nutritional standards. Compare the parts that are.",
        bullets: [
          "Check both have a complete-and-balanced statement for your dog's life stage.",
          "Compare calories per cup or per gram, not just price per bag.",
          "Read the guaranteed analysis and ingredient list, remembering ingredients are listed by weight before cooking.",
          "Consider your dog's response over weeks — coat, stool, energy, body condition — with veterinary input.",
          "Ask your veterinarian if a specific life-stage or therapeutic food suits your dog.",
        ],
      },
    ],
    checklist: {
      heading: "Choosing checklist",
      bullets: [
        "Confirm a nutritional-adequacy (complete and balanced) statement for the correct life stage.",
        "Match the food to your dog's life stage, size, and activity.",
        "Compare calories and feeding guides, not just front-of-bag claims.",
        "Introduce any new food gradually over several days.",
        "Review the choice with your veterinarian, especially for puppies, seniors, or health conditions.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a higher price or 'premium' wording means better nutrition.",
        "Do not assume grain-free is healthier — most dogs do not need it (see our grain-free explainer).",
        "Do not assume the first ingredient tells the whole story; ingredient order is by pre-cooking weight.",
        "Do not switch foods abruptly, which can upset digestion.",
      ],
    },
    whenToContactVet: GENERIC_WHEN_TO_ASK,
    faqs: [
      {
        question: "What is the single most useful thing to look for?",
        answer:
          "The nutritional-adequacy statement (often referencing AAFCO). It indicates the food is formulated to be complete and balanced for a stated life stage, which matters far more than front-of-bag marketing words.",
      },
      {
        question: "Do you recommend specific dog food brands?",
        answer:
          "No. FaunaHub does not rank or recommend brands and carries no affiliate food links. We explain how to read labels and compare options so you can decide with your veterinarian.",
      },
      {
        question: "Is expensive dog food always better?",
        answer:
          "Not necessarily. Price reflects many things besides nutrition. A complete-and-balanced food appropriate to your dog's life stage, fed in the right amount, matters more than cost alone.",
      },
    ],
    sources: [SRC_AVMA_SELECTING_FOOD, SRC_WSAVA_NUTRITION, SRC_AAFCO_LABELS],
    related: [
      {
        title: "Keep comparing",
        links: [
          { label: "Pet food label basics", href: "/pet-nutrition/pet-food-label-basics" },
          { label: "Understanding ingredient lists", href: "/pet-nutrition/understanding-pet-food-ingredient-lists" },
          { label: "Grain-free pet food explained", href: "/pet-nutrition/grain-free-pet-food-explained" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "How much should I feed my dog?", href: "/pet-nutrition/how-much-should-i-feed-my-dog" },
          { label: "Dog food safety", href: "/dogs/food" },
          { label: "Pet Cost Calculator", href: "/tools/pet-cost-calculator" },
        ],
      },
    ],
    publishedTime: "2026-06-23",
    modifiedTime: "2026-06-23",
  },
  {
    slug: "how-to-choose-cat-food",
    path: "/pet-nutrition/how-to-choose-cat-food",
    title: "How to Choose Cat Food: A Practical Buyer's Guide",
    description:
      "A brand-neutral, educational guide to choosing cat food: why cats are obligate carnivores, what the AAFCO complete-and-balanced statement means, and how to match food to your cat's life stage.",
    pageHeading: "How to Choose Cat Food",
    topicTag: "Choosing food",
    tone: "planning",
    directAnswer:
      "Cats are obligate carnivores with specific needs — including taurine, an amino acid they must get from their diet. The most useful starting signal on a product is its nutritional-adequacy statement (often citing AAFCO) confirming it is complete and balanced for a life stage. From there, match the food to your cat's life stage and individual needs with veterinary input. This page explains how to compare options — it does not rank brands.",
    sections: [
      {
        heading: "Why cat food is not just smaller dog food",
        bullets: [
          "Cats are obligate carnivores and need a meat-based, protein-rich diet.",
          "They require certain nutrients from animal sources, such as taurine, that complete cat foods are formulated to supply.",
          "Cat foods are formulated specifically for cats — dog food is not a substitute.",
          "Many cats benefit from some wet food for moisture, as cats can have a naturally low thirst drive.",
        ],
      },
      {
        heading: "What to check on the label",
        intro:
          "Front-of-bag words like 'premium' or 'gourmet' are marketing, not nutritional standards. Focus on the parts that are defined.",
        bullets: [
          "A nutritional-adequacy statement (often referencing AAFCO) for the right life stage — kitten/growth, adult, or all life stages.",
          "Whether it suits your cat's life stage and any veterinary recommendations.",
          "Calorie content and the feeding guide, so you can portion sensibly.",
          "Wet, dry, or a mix — based on your cat's preferences, hydration, and your vet's advice.",
        ],
      },
    ],
    checklist: {
      heading: "Choosing checklist",
      bullets: [
        "Confirm a complete-and-balanced statement for your cat's life stage.",
        "Choose food formulated for cats, not dogs.",
        "Decide on wet, dry, or a mix with hydration in mind.",
        "Introduce any new food gradually over several days.",
        "Confirm the choice with your veterinarian, especially for kittens, seniors, or health conditions.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not feed cats dog food — it lacks nutrients cats specifically need.",
        "Do not assume grain-free is healthier for cats; most do not need it.",
        "Do not assume a vegetarian or vegan diet suits a cat without veterinary supervision — cats are obligate carnivores.",
        "Do not switch foods abruptly.",
      ],
    },
    whenToContactVet: GENERIC_WHEN_TO_ASK,
    faqs: [
      {
        question: "What makes cats different from dogs nutritionally?",
        answer:
          "Cats are obligate carnivores and depend on nutrients found in animal tissue, such as taurine, which complete cat foods are formulated to provide. This is why cat food is formulated specifically for cats and dog food is not a substitute.",
      },
      {
        question: "Wet food, dry food, or both?",
        answer:
          "There is no universal answer. Many cats do well on a mix, and wet food adds moisture, which can help cats that drink little. Preferences, dental factors, weight, and health all matter — discuss the balance with your veterinarian. See our wet vs dry guide for cats.",
      },
      {
        question: "Do you recommend specific cat food brands?",
        answer:
          "No. FaunaHub does not rank or recommend brands and carries no affiliate food links. We explain how to read labels so you can choose with your veterinarian.",
      },
    ],
    sources: [SRC_AVMA_SELECTING_FOOD, SRC_ASPCA_CAT_NUTRITION, SRC_CORNELL_FELINE],
    related: [
      {
        title: "Keep comparing",
        links: [
          { label: "Wet vs dry food for cats", href: "/pet-nutrition/wet-vs-dry-food-for-cats" },
          { label: "Pet food label basics", href: "/pet-nutrition/pet-food-label-basics" },
          { label: "Understanding ingredient lists", href: "/pet-nutrition/understanding-pet-food-ingredient-lists" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "How much should I feed my cat?", href: "/pet-nutrition/how-much-should-i-feed-my-cat" },
          { label: "Cat food safety", href: "/cats/food" },
          { label: "Cat health hub", href: "/cats/health" },
        ],
      },
    ],
    publishedTime: "2026-06-23",
    modifiedTime: "2026-06-23",
  },
  {
    slug: "grain-free-pet-food-explained",
    path: "/pet-nutrition/grain-free-pet-food-explained",
    title: "Grain-Free Pet Food, Explained (Without the Hype)",
    description:
      "A balanced, evidence-aware look at grain-free dog and cat food: what 'grain-free' really means, whether most pets need it, true grain allergies, and the FDA's ongoing diet-and-heart investigation.",
    pageHeading: "Grain-Free Pet Food, Explained",
    topicTag: "Food types",
    tone: "food-types",
    directAnswer:
      "Grain-free does not automatically mean healthier. Most dogs and cats digest grains well, and true grain allergies are uncommon — food allergies are more often to specific proteins. Grain-free can be a reasonable choice for some pets, but it is not inherently superior. Note too that the U.S. FDA has investigated a possible association between certain grain-free diets and a heart condition (dilated cardiomyopathy) in dogs; a cause has not been established. Discuss any specialized diet with your veterinarian.",
    sections: [
      {
        heading: "What 'grain-free' actually means",
        bullets: [
          "It means the food contains no grains (such as wheat, corn, or rice); the carbohydrates come from other sources like potatoes, peas, or legumes.",
          "It is a recipe choice, not a quality or health certification.",
          "Grain-free is not the same as low-carbohydrate — many grain-free foods still contain plenty of carbohydrate.",
        ],
      },
      {
        heading: "Do most pets need it?",
        intro:
          "For the average healthy dog or cat, there is no established need to avoid grains.",
        bullets: [
          "True grain allergies are uncommon; most diagnosed food allergies are to specific protein sources, not grains.",
          "Food intolerances and allergies are best diagnosed by a veterinarian, often with a controlled elimination diet — not by guesswork.",
          "Whether grain-free or grain-inclusive, the key is a complete-and-balanced food appropriate to the life stage.",
        ],
      },
      {
        heading: "The FDA diet-and-heart investigation",
        intro:
          "This is an area of active research, presented here neutrally.",
        bullets: [
          "The U.S. FDA has investigated reports of dilated cardiomyopathy (DCM, a heart-muscle disease) in dogs, including some eating certain grain-free or legume-rich diets.",
          "A direct cause-and-effect link has not been established, and the science is ongoing.",
          "Because of this uncertainty, dietary choices — especially for breeds or individuals at risk — are worth discussing with your veterinarian.",
        ],
      },
    ],
    checklist: {
      heading: "If you are weighing grain-free",
      bullets: [
        "Confirm the food is complete and balanced for the life stage, grain-free or not.",
        "Do not assume grain-free treats a problem your pet does not have.",
        "If you suspect a food allergy, ask your vet about a proper diagnosis rather than self-selecting a diet.",
        "Raise any heart-health concerns or breed risks with your veterinarian.",
        "Change diets gradually and watch your pet's response over time.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume grain-free is automatically healthier or higher quality.",
        "Do not assume your pet has a grain allergy without veterinary diagnosis.",
        "Do not assume grain-free means low-carb.",
        "Do not make heart-health or allergy decisions from marketing — involve your veterinarian.",
      ],
    },
    whenToContactVet: GENERIC_WHEN_TO_ASK,
    faqs: [
      {
        question: "Is grain-free food better for my pet?",
        answer:
          "Not inherently. Most dogs and cats handle grains well, and grain-free is a recipe choice rather than a quality standard. What matters most is a complete-and-balanced food suited to your pet's life stage and needs.",
      },
      {
        question: "My pet seems itchy — is it a grain allergy?",
        answer:
          "Possibly, but grain allergies are uncommon; most food allergies involve specific proteins. Itching has many causes. A veterinarian can diagnose food allergies properly, often with an elimination diet, rather than guessing at grains.",
      },
      {
        question: "Should I worry about grain-free food and heart disease?",
        answer:
          "The FDA has investigated a possible association between some grain-free diets and dilated cardiomyopathy in dogs, but a cause has not been established and research continues. If you have concerns, especially for at-risk breeds, discuss your pet's diet with your veterinarian.",
      },
    ],
    sources: [SRC_FDA_PETFOOD, SRC_WSAVA_NUTRITION, SRC_AVMA_SELECTING_FOOD],
    related: [
      {
        title: "Keep reading",
        links: [
          { label: "How to choose dog food", href: "/pet-nutrition/how-to-choose-dog-food" },
          { label: "How to choose cat food", href: "/pet-nutrition/how-to-choose-cat-food" },
          { label: "Understanding ingredient lists", href: "/pet-nutrition/understanding-pet-food-ingredient-lists" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Pet food label basics", href: "/pet-nutrition/pet-food-label-basics" },
          { label: "Vet care hub", href: "/vet-care" },
        ],
      },
    ],
    publishedTime: "2026-06-23",
    modifiedTime: "2026-06-23",
  },
  {
    slug: "understanding-pet-food-ingredient-lists",
    path: "/pet-nutrition/understanding-pet-food-ingredient-lists",
    title: "Understanding Pet Food Ingredient Lists",
    description:
      "How to read a pet food ingredient list without being misled: ingredient order by weight, what 'by-products' and 'meal' really mean, ingredient splitting, and why the adequacy statement matters most.",
    pageHeading: "Understanding Pet Food Ingredient Lists",
    topicTag: "Labels",
    tone: "labels",
    directAnswer:
      "Ingredient lists are useful but easy to misread. Ingredients are listed by weight before cooking, so a watery fresh meat can rank above concentrated ingredients despite contributing less once moisture is removed. Common terms like 'by-products' and 'meal' are not inherently bad. The clearest signal that a food is nutritionally sound is still the complete-and-balanced (adequacy) statement — not the marketing around the ingredient list. This page explains how to read the list sensibly.",
    sections: [
      {
        heading: "How the ordering works",
        bullets: [
          "Ingredients are listed in descending order by weight, measured before cooking.",
          "Fresh meats are heavy because of their water content, so they often appear high even though much of that weight cooks off.",
          "A concentrated ingredient like a meat 'meal' (water already removed) can deliver more actual nutrient despite ranking lower.",
          "Because of this, the first ingredient alone does not tell you the whole nutritional story.",
        ],
      },
      {
        heading: "Terms that are often misunderstood",
        intro:
          "Several common terms are marketed as red flags but are not inherently problematic.",
        bullets: [
          "By-products: regulated animal parts beyond muscle meat (such as organs), which can be nutritious — not automatically low quality.",
          "Meal (e.g., chicken meal): a concentrated, rendered protein with water removed; a normal, useful ingredient.",
          "Ingredient splitting: a single component listed as several sub-types can shift its apparent position in the list.",
          "Named vs generic: 'chicken' is more specific than 'poultry' or 'meat', which some buyers prefer for transparency.",
        ],
      },
      {
        heading: "Where the real signal is",
        bullets: [
          "The nutritional-adequacy statement (often citing AAFCO) tells you the food is formulated to be complete and balanced for a life stage.",
          "The guaranteed analysis lists minimum/maximum levels of key nutrients (protein, fat, fibre, moisture).",
          "Together these matter more than the marketing language around the ingredient list.",
        ],
      },
    ],
    checklist: {
      heading: "Reading-the-list checklist",
      bullets: [
        "Remember ingredient order is by pre-cooking weight, not by nutritional value.",
        "Do not dismiss by-products or meals automatically.",
        "Look for the complete-and-balanced statement for the right life stage.",
        "Skim the guaranteed analysis for protein, fat, fibre, and moisture.",
        "Take questions about a specific food to your veterinarian.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume the first-listed ingredient proves overall quality.",
        "Do not assume 'by-product' or 'meal' means bad — both can be nutritious.",
        "Do not assume a long or 'natural-sounding' ingredient list equals better nutrition.",
        "Do not rely on the ingredient list alone; the adequacy statement is the key nutritional signal.",
      ],
    },
    whenToContactVet: GENERIC_WHEN_TO_ASK,
    faqs: [
      {
        question: "Why is meat listed first but the food still seems low in protein?",
        answer:
          "Because ingredients are ranked by weight before cooking, and fresh meat is mostly water. Once that moisture cooks off, its real contribution can be smaller than a concentrated ingredient listed lower down, such as a meat meal. Check the guaranteed analysis and adequacy statement for the fuller picture.",
      },
      {
        question: "Are by-products bad for pets?",
        answer:
          "Not inherently. By-products are regulated animal parts beyond muscle meat, such as organs, which can be nutritious. The term is often marketed as negative, but it does not by itself indicate poor quality.",
      },
      {
        question: "What should I trust more than the ingredient list?",
        answer:
          "The nutritional-adequacy (complete and balanced) statement for the correct life stage, alongside the guaranteed analysis. These tell you the food is formulated to meet recognised nutrient standards, which matters more than ingredient marketing.",
      },
    ],
    sources: [SRC_AAFCO_LABELS, SRC_FDA_PETFOOD, SRC_WSAVA_NUTRITION],
    related: [
      {
        title: "Keep reading",
        links: [
          { label: "Pet food label basics", href: "/pet-nutrition/pet-food-label-basics" },
          { label: "How to choose dog food", href: "/pet-nutrition/how-to-choose-dog-food" },
          { label: "How to choose cat food", href: "/pet-nutrition/how-to-choose-cat-food" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Grain-free pet food explained", href: "/pet-nutrition/grain-free-pet-food-explained" },
          { label: "Pet nutrition hub", href: "/pet-nutrition" },
        ],
      },
    ],
    publishedTime: "2026-06-23",
    modifiedTime: "2026-06-23",
  },
  {
    slug: "what-to-feed-a-rabbit",
    path: "/pet-nutrition/what-to-feed-a-rabbit",
    title: "What to Feed a Rabbit: A Hay-First Diet Guide",
    description:
      "An educational guide to feeding pet rabbits: why unlimited grass hay is the foundation, the role of leafy greens and limited pellets, foods to avoid, and why a rabbit that stops eating is an emergency.",
    pageHeading: "What to Feed a Rabbit",
    topicTag: "Small pets",
    tone: "planning",
    directAnswer:
      "Rabbits are herbivores whose diet should be built on unlimited grass hay (such as timothy), which makes up the bulk of what they eat. Add a daily portion of suitable leafy greens, a small measured amount of plain pellets, and constant fresh water. Avoid sugary treats and selective 'muesli' mixes. Introduce any change gradually, and treat a rabbit that stops eating or passing droppings as an emergency. This is general guidance — your veterinarian can tailor it.",
    sections: [
      {
        heading: "What a rabbit's diet is built on",
        bullets: [
          "Grass hay, available at all times — it should be the largest part of the diet and is vital for digestion and dental wear.",
          "Fresh leafy greens daily, introduced gradually and varied within safe options.",
          "A small, measured amount of plain (uniform) pellets — not the main food.",
          "Constant access to clean, fresh water.",
        ],
      },
      {
        heading: "Foods to limit or avoid",
        intro:
          "Many rabbit health problems trace back to too little hay and too many of the wrong extras.",
        bullets: [
          "Muesli-style mixes that let rabbits pick out sugary bits and leave the rest (selective feeding).",
          "Sugary or starchy treats, including many commercial 'rabbit treats' and excess fruit.",
          "Sudden diet changes, which can upset the sensitive gut.",
          "Foods that are toxic or unsuitable — check before offering anything new.",
        ],
      },
    ],
    checklist: {
      heading: "Rabbit feeding checklist",
      bullets: [
        "Keep grass hay available at all times.",
        "Offer a daily portion of suitable leafy greens, introduced gradually.",
        "Give only a small, measured amount of plain pellets.",
        "Provide constant fresh water.",
        "Monitor eating and droppings daily, and contact a vet promptly if either stops.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not make pellets or muesli the main food — hay comes first.",
        "Do not assume all greens or garden plants are safe; check each one.",
        "Do not change the diet suddenly.",
        "Do not wait and see if a rabbit stops eating — it can deteriorate quickly.",
      ],
    },
    whenToContactVet: GENERIC_WHEN_TO_ASK,
    faqs: [
      {
        question: "What should make up most of a rabbit's diet?",
        answer:
          "Grass hay, available at all times. It provides the fibre rabbits need for healthy digestion and helps wear down their continuously growing teeth. Greens, a little pellet food, and water complete the diet.",
      },
      {
        question: "Why is a rabbit that stops eating an emergency?",
        answer:
          "A rabbit's digestive system needs to keep moving. When a rabbit stops eating or passing droppings, it can become seriously unwell quickly. Contact a veterinarian promptly rather than waiting. This page is educational and not a substitute for veterinary care.",
      },
      {
        question: "Are muesli-style rabbit mixes a good idea?",
        answer:
          "They are generally discouraged because rabbits tend to pick out the sugary, starchy pieces and leave the fibrous parts, leading to an unbalanced diet. A hay-first diet with plain pellets is widely preferred.",
      },
    ],
    sources: [SRC_MERCK_NUTRITION, SRC_AVMA_PETCARE],
    related: [
      {
        title: "Small pet care",
        links: [
          { label: "What to feed guinea pigs", href: "/pet-nutrition/what-to-feed-guinea-pigs" },
          { label: "Small pets hub", href: "/small-pets" },
          { label: "Pet nutrition hub", href: "/pet-nutrition" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Vet care hub", href: "/vet-care" },
          { label: "Rabbit profile", href: "/animals/rabbit" },
        ],
      },
    ],
    publishedTime: "2026-06-23",
    modifiedTime: "2026-06-23",
  },
  {
    slug: "what-to-feed-guinea-pigs",
    path: "/pet-nutrition/what-to-feed-guinea-pigs",
    title: "What to Feed Guinea Pigs: Hay, Greens, and Vitamin C",
    description:
      "An educational guide to feeding guinea pigs: why unlimited grass hay is the base, why they need a daily source of vitamin C (which they cannot make themselves), and which foods to limit.",
    pageHeading: "What to Feed Guinea Pigs",
    topicTag: "Small pets",
    tone: "planning",
    directAnswer:
      "Guinea pigs are herbivores whose diet should be based on unlimited grass hay, plus daily fresh leafy greens, a measured amount of guinea-pig pellets, and constant fresh water. Crucially, guinea pigs cannot make their own vitamin C and must get it from their diet every day, or they can develop deficiency. This is general guidance — your veterinarian can confirm what suits your guinea pig.",
    sections: [
      {
        heading: "The foundation: hay, greens, and water",
        bullets: [
          "Grass hay, available at all times — the bulk of the diet, essential for digestion and dental wear.",
          "Fresh leafy greens daily, which also help supply vitamin C.",
          "A measured amount of plain guinea-pig pellets (formulated for guinea pigs).",
          "Constant access to clean, fresh water.",
        ],
      },
      {
        heading: "The vitamin C requirement",
        intro:
          "This is the single biggest way guinea pig feeding differs from rabbits.",
        bullets: [
          "Unlike most animals, guinea pigs cannot synthesise vitamin C and need a daily dietary source.",
          "Suitable fresh vegetables and guinea-pig pellets help provide it; your vet can advise on supplementation if needed.",
          "Too little vitamin C over time can lead to deficiency (sometimes called scurvy) — a reason to keep the diet consistent.",
          "Use food formulated for guinea pigs, not rabbit food, which is not designed for their vitamin C needs.",
        ],
      },
    ],
    checklist: {
      heading: "Guinea pig feeding checklist",
      bullets: [
        "Keep grass hay available at all times.",
        "Offer daily leafy greens that help supply vitamin C.",
        "Provide a measured amount of guinea-pig-specific pellets.",
        "Ensure constant fresh water.",
        "Ask your vet about vitamin C and any signs of deficiency.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not feed rabbit food to guinea pigs — it is not formulated for their vitamin C needs.",
        "Do not rely on pellets alone; hay and fresh greens matter.",
        "Do not assume vitamin C stores last — they need it daily.",
        "Do not change the diet abruptly.",
      ],
    },
    whenToContactVet: GENERIC_WHEN_TO_ASK,
    faqs: [
      {
        question: "Why do guinea pigs need vitamin C in their food?",
        answer:
          "Unlike most animals, guinea pigs cannot make their own vitamin C, so they must get it from their diet every day. Suitable fresh greens and guinea-pig pellets help provide it; a veterinarian can advise on supplementation.",
      },
      {
        question: "Can guinea pigs eat rabbit food?",
        answer:
          "It is not recommended. Rabbit pellets are not formulated for a guinea pig's vitamin C requirement and differ nutritionally. Use food made specifically for guinea pigs.",
      },
      {
        question: "What is the base of a guinea pig's diet?",
        answer:
          "Unlimited grass hay, supplemented with daily leafy greens, a measured amount of guinea-pig pellets, and fresh water. Hay supports digestion and helps wear down their continuously growing teeth.",
      },
    ],
    sources: [SRC_MERCK_NUTRITION, SRC_AVMA_PETCARE],
    related: [
      {
        title: "Small pet care",
        links: [
          { label: "What to feed a rabbit", href: "/pet-nutrition/what-to-feed-a-rabbit" },
          { label: "Small pets hub", href: "/small-pets" },
          { label: "Pet nutrition hub", href: "/pet-nutrition" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Vet care hub", href: "/vet-care" },
          { label: "Guinea pig profile", href: "/animals/guinea-pig" },
        ],
      },
    ],
    publishedTime: "2026-06-23",
    modifiedTime: "2026-06-23",
  },
  {
    slug: "goldfish-feeding-basics",
    path: "/pet-nutrition/goldfish-feeding-basics",
    title: "Goldfish Feeding Basics: How Much and How Often",
    description:
      "An educational guide to feeding goldfish: choosing an appropriate complete fish food, feeding small amounts, why overfeeding is the most common mistake, and how uneaten food harms water quality.",
    pageHeading: "Goldfish Feeding Basics",
    topicTag: "Fish",
    tone: "planning",
    directAnswer:
      "Feed goldfish a small amount of an appropriate complete fish food once or twice a day — only as much as they finish in a minute or two. Overfeeding is the most common mistake: uneaten food breaks down and fouls the water, which is one of the biggest risks to a goldfish's health. This is general guidance — an aquatics-experienced or fish veterinarian can advise for your setup.",
    sections: [
      {
        heading: "How much and how often",
        bullets: [
          "Use a complete food made for goldfish or coldwater fish as the staple.",
          "Feed small portions once or twice daily, offering only what they eat in about a minute or two.",
          "Remove uneaten food so it does not decay in the tank.",
          "Some keepers include an occasional fast day for healthy adult fish — ask an aquatics specialist about your situation.",
        ],
      },
      {
        heading: "Why overfeeding is the big risk",
        intro:
          "With fish, feeding and water quality are tightly linked.",
        bullets: [
          "Leftover food and extra waste raise harmful compounds (like ammonia) in the water.",
          "Poor water quality is a leading cause of illness in pet fish.",
          "A varied, appropriate diet and good tank maintenance matter more than large meals.",
          "When in doubt, feed slightly less rather than more.",
        ],
      },
    ],
    checklist: {
      heading: "Goldfish feeding checklist",
      bullets: [
        "Choose a complete goldfish or coldwater-fish food as the staple.",
        "Feed small amounts once or twice a day.",
        "Offer only what is eaten within a minute or two.",
        "Remove leftover food and keep up water maintenance.",
        "Ask an aquatics-experienced vet if a fish stops eating or seems unwell.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a fish that 'always looks hungry' needs more food.",
        "Do not let uneaten food sit in the tank.",
        "Do not rely on feeding alone — water quality is just as important.",
        "Do not feed large meals; small and consistent is safer.",
      ],
    },
    whenToContactVet: GENERIC_WHEN_TO_ASK,
    faqs: [
      {
        question: "How much should I feed a goldfish?",
        answer:
          "A small amount once or twice a day — only what the fish finish in about a minute or two. It is safer to slightly underfeed than to overfeed, because leftover food fouls the water.",
      },
      {
        question: "Why is overfeeding goldfish such a problem?",
        answer:
          "Uneaten food and extra waste break down and raise harmful compounds in the water, and poor water quality is a leading cause of illness in pet fish. Feeding modest amounts and removing leftovers protects water quality.",
      },
      {
        question: "What kind of food should goldfish eat?",
        answer:
          "A complete food formulated for goldfish or coldwater fish as the staple, sometimes with suitable variety. An aquatics-experienced veterinarian or specialist can advise on a diet for your particular setup.",
      },
    ],
    sources: [SRC_MERCK_NUTRITION, SRC_AVMA_PETCARE],
    related: [
      {
        title: "Fish & aquarium care",
        links: [
          { label: "Aquarium care hub", href: "/aquarium-care" },
          { label: "Pet nutrition hub", href: "/pet-nutrition" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Goldfish profile", href: "/animals/goldfish" },
          { label: "Vet care hub", href: "/vet-care" },
        ],
      },
    ],
    publishedTime: "2026-06-23",
    modifiedTime: "2026-06-23",
  },
];

export function getPetNutritionArticleBySlug(
  slug: string
): PetNutritionArticle | undefined {
  return PET_NUTRITION_ARTICLES.find((a) => a.slug === slug);
}
