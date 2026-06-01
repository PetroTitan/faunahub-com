import type { SourceLink } from "@/lib/educational/types";

const PUBLISHED = "2026-06-01";
const MODIFIED = "2026-06-01";

/**
 * Core safety principle shown prominently near the top of every page in the
 * Puppy & Kitten Care Foundation cluster. This is an early-care PLANNING
 * cluster — not a veterinary diagnosis, treatment, dosage, or schedule
 * cluster. Keep this text intact.
 */
export const EARLY_CARE_DISCLAIMER =
  "This content is educational and does not replace professional veterinary advice, diagnosis, or treatment. Puppies and kittens can become seriously ill quickly. For vomiting, diarrhoea, refusal to eat, difficulty breathing, collapse, seizures, injury, suspected poisoning, severe pain, or rapid worsening, contact a licensed veterinarian or emergency animal clinic immediately.";

export const EARLY_CARE_SOURCE_NOTE =
  "Authoritative references used for general educational context. External links open in a new tab and these organisations do not endorse FaunaHub. Vaccination, deworming, spay/neuter timing, and other early-care decisions vary by age, health, vaccine history, and local risk — confirm them with a licensed veterinarian.";

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

const SRC_AVMA_VACCINATIONS: SourceLink = {
  label: "AVMA — Vaccinations",
  url: "https://www.avma.org/resources-tools/pet-owners/petcare/vaccinations",
  type: "veterinary",
  note: "General vaccination information; schedules are set by your veterinarian",
};

const SRC_AVMA_SPAY_NEUTER: SourceLink = {
  label: "AVMA — Spaying and Neutering",
  url: "https://www.avma.org/resources-tools/pet-owners/petcare/spaying-and-neutering",
  type: "veterinary",
  note: "General spay/neuter information; timing is a veterinary decision",
};

const SRC_AVMA_SOCIALIZING: SourceLink = {
  label: "AVMA — Socializing Your Pet",
  url: "https://www.avma.org/resources-tools/pet-owners/petcare/socializing-your-pet",
  type: "veterinary",
  note: "General guidance on safe, positive socialization",
};

const SRC_AVMA_SELECTING_PET: SourceLink = {
  label: "AVMA — Selecting a Pet That's Right for You",
  url: "https://www.avma.org/resources-tools/pet-owners/petcare/selecting-pet-thats-right-you",
  type: "veterinary",
  note: "Choosing and preparing for a new pet responsibly",
};

const SRC_AVMA_HOUSEHOLD_HAZARDS: SourceLink = {
  label: "AVMA — Household Hazards",
  url: "https://www.avma.org/resources-tools/pet-owners/petcare/household-hazards",
  type: "veterinary",
  note: "Common household dangers for pets",
};

const SRC_AVMA_MICROCHIP: SourceLink = {
  label: "AVMA — Microchipping FAQ",
  url: "https://www.avma.org/resources-tools/pet-owners/petcare/microchips-reunite-pets-families/microchipping-faq",
  type: "veterinary",
  note: "How microchips help reunite lost pets with families",
};

const SRC_AVMA_FIRST_AID: SourceLink = {
  label: "AVMA — First Aid Tips for Pet Owners",
  url: "https://www.avma.org/resources-tools/pet-owners/emergencycare/first-aid-tips-pet-owners",
  type: "veterinary",
  note: "General first-aid guidance; emphasises veterinary care",
};

const SRC_ASPCA_DOG_CARE: SourceLink = {
  label: "ASPCA — General Dog Care",
  url: "https://www.aspca.org/pet-care/dog-care/general-dog-care",
  type: "veterinary",
  note: "General dog and puppy care guidance",
};

const SRC_ASPCA_CAT_CARE: SourceLink = {
  label: "ASPCA — General Cat Care",
  url: "https://www.aspca.org/pet-care/cat-care/general-cat-care",
  type: "veterinary",
  note: "General cat and kitten care guidance",
};

const SRC_ASPCA_DOG_NUTRITION: SourceLink = {
  label: "ASPCA — Dog Nutrition Tips",
  url: "https://www.aspca.org/pet-care/dog-care/dog-nutrition-tips",
  type: "veterinary",
  note: "General feeding guidance for dogs and puppies",
};

const SRC_ASPCA_CAT_NUTRITION: SourceLink = {
  label: "ASPCA — Cat Nutrition Tips",
  url: "https://www.aspca.org/pet-care/cat-care/cat-nutrition-tips",
  type: "veterinary",
  note: "General feeding guidance for cats and kittens",
};

const SRC_ASPCA_LITTER: SourceLink = {
  label: "ASPCA — Litter Box Setup and Problems",
  url: "https://www.aspca.org/pet-care/cat-care/common-cat-behavior-issues/litter-box-problems",
  type: "veterinary",
  note: "Litter-box number, location, and accessibility basics",
};

const SRC_ASPCA_POISON: SourceLink = {
  label: "ASPCA Animal Poison Control Center",
  url: "https://www.aspca.org/pet-care/aspca-poison-control",
  type: "veterinary",
  note: "24/7 emergency animal-poisoning helpline (US)",
};

const SRC_MERCK: SourceLink = {
  label: "Merck Veterinary Manual",
  url: "https://www.merckvetmanual.com",
  type: "reference",
  note: "Comprehensive veterinary reference (consumer & professional)",
};

const SRC_MERCK_NUTRITION: SourceLink = {
  label: "Merck Veterinary Manual — Nutrition in Small Animals",
  url: "https://www.merckvetmanual.com/management-and-nutrition/nutrition-small-animals",
  type: "reference",
  note: "Veterinary reference on dog and cat nutrition",
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

export type EarlyCareSpecies = "puppy" | "kitten";

export interface EarlyCareSection {
  heading: string;
  intro?: string;
  bullets: string[];
}

export interface EarlyCareFAQ {
  question: string;
  answer: string;
}

export interface EarlyCareRelatedGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface EarlyCareArticle {
  species: EarlyCareSpecies;
  slug: string;
  /** Always "/{species}-care/<slug>" */
  path: string;
  title: string;
  description: string;
  pageHeading: string;
  topicTag: string;
  directAnswer: string;
  sections: EarlyCareSection[];
  /** Required practical checklist */
  checklist: EarlyCareSection;
  /** Required: what NOT to assume */
  whatNotToAssume: EarlyCareSection;
  /** Required: when to contact a veterinarian */
  whenToContactVet: EarlyCareSection;
  faqs: EarlyCareFAQ[];
  sources: SourceLink[];
  related: EarlyCareRelatedGroup[];
  publishedTime: string;
  modifiedTime: string;
}

export const HUB_META: Record<
  EarlyCareSpecies,
  { hub: string; label: string; animal: string }
> = {
  puppy: { hub: "/puppy-care", label: "Puppy Care", animal: "puppy" },
  kitten: { hub: "/kitten-care", label: "Kitten Care", animal: "kitten" },
};

const PUPPY_WHEN_TO_VET: EarlyCareSection = {
  heading: "When to contact a veterinarian",
  intro:
    "Puppies can become seriously ill quickly. Do not use this page to diagnose symptoms — when in doubt, call. Contact a licensed veterinarian or emergency clinic promptly for any of these.",
  bullets: [
    "Vomiting, diarrhoea, or refusal to eat or drink — especially in a very young puppy.",
    "Lethargy, weakness, collapse, or unresponsiveness.",
    "Difficulty breathing, persistent coughing, or pale gums.",
    "Seizures, suspected poisoning, or any injury or fall.",
    "Signs of pain, a swollen or painful belly, or rapid worsening of any kind.",
  ],
};

const KITTEN_WHEN_TO_VET: EarlyCareSection = {
  heading: "When to contact a veterinarian",
  intro:
    "Kittens can become seriously ill quickly, and even a short time without eating can be dangerous. Do not use this page to diagnose symptoms — when in doubt, call.",
  bullets: [
    "Refusal to eat or drink, or noticeably less eating — kittens should not go long without food.",
    "Vomiting, diarrhoea, lethargy, weakness, or collapse.",
    "Difficulty breathing, repeated sneezing with discharge, or pale gums.",
    "Seizures, suspected poisoning, or any injury or fall.",
    "Straining in the litter box, signs of pain, or rapid worsening of any kind.",
  ],
};

// ─── PUPPY ARTICLES ────────────────────────────────────────────────────────

export const PUPPY_ARTICLES: EarlyCareArticle[] = [
  {
    species: "puppy",
    slug: "first-week-with-a-puppy",
    path: "/puppy-care/first-week-with-a-puppy",
    title: "First Week With a Puppy — A Calm Planning Guide",
    description:
      "An educational plan for a puppy's first week home: a calm arrival, gentle routine, supplies, supervision, and an early vet visit. Not veterinary advice — when in doubt, ask your vet.",
    pageHeading: "First Week With a Puppy",
    topicTag: "First weeks",
    directAnswer:
      "A puppy's first week is mostly about a calm arrival, a gentle routine, and keeping your puppy safe while everyone adjusts. Keep things low-key, supervise closely, and plan an early veterinary visit. This page helps you plan — it does not diagnose or treat, and a puppy that seems unwell should be seen by a veterinarian.",
    sections: [
      {
        heading: "Settle in gently",
        bullets: [
          "Prepare a quiet, safe space before your puppy arrives, and keep the first days calm.",
          "Introduce the home gradually rather than all at once; limit overwhelming visitors early on.",
          "Start a gentle, consistent routine for meals, toileting, naps, and play.",
          "Supervise closely and puppy-proof rooms before giving more freedom.",
          "Begin gentle, positive handling so your puppy gets used to being touched and held.",
        ],
      },
      {
        heading: "Set up the essentials",
        bullets: [
          "Have food, bowls, a collar and ID tag, a leash, a bed, and safe toys ready.",
          "Keep fresh water available at all times.",
          "Ask the shelter, rescue, or breeder what food your puppy has been eating to avoid an abrupt change.",
          "Find a veterinarian and plan an early visit to start care on the right foot.",
          "Note your puppy's microchip details and keep the registry up to date.",
        ],
      },
    ],
    checklist: {
      heading: "First-week checklist",
      bullets: [
        "Quiet, safe space and a consistent daily routine.",
        "Food (matching the previous diet at first), bowls, water, bed, collar, ID tag, leash, toys.",
        "Veterinarian identified and an early visit planned.",
        "Microchip details recorded and registry up to date.",
        "Home puppy-proofed; close supervision in new areas.",
        "Emergency clinic and animal poison-control numbers saved.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a quiet or hiding puppy is fine — watch eating, drinking, toileting, and energy, and ask your vet about concerns.",
        "Do not assume the home is hazard-free; puppies explore with their mouths.",
        "Do not change foods abruptly — transition gradually unless your veterinarian advises otherwise.",
        "Do not skip the early vet visit, even if your puppy seems healthy.",
      ],
    },
    whenToContactVet: PUPPY_WHEN_TO_VET,
    faqs: [
      {
        question: "How soon should a new puppy see a vet?",
        answer:
          "Plan an early visit within the first days to weeks, and sooner if anything seems wrong. Your veterinarian can advise on timing based on your puppy's age, history, and local risks.",
      },
      {
        question: "Should I let everyone visit the new puppy right away?",
        answer:
          "Keep the first days calm and low-key. Gradual, positive introductions are usually better than an overwhelming welcome. Your veterinarian can advise on when wider socialization is appropriate.",
      },
      {
        question: "My puppy isn't eating much the first day — is that normal?",
        answer:
          "A brief settling-in dip can happen, but puppies should not go long without eating, and refusal to eat, vomiting, diarrhoea, or low energy warrants contacting your veterinarian promptly.",
      },
    ],
    sources: [SRC_ASPCA_DOG_CARE, SRC_AVMA_SELECTING_PET, SRC_AVMA_PETCARE],
    related: [
      {
        title: "Plan the first weeks",
        links: [
          { label: "Puppy supplies checklist", href: "/puppy-care/puppy-supplies-checklist" },
          { label: "Puppy vet visit checklist", href: "/puppy-care/puppy-vet-visit-checklist" },
          { label: "Puppy home safety checklist", href: "/puppy-care/puppy-home-safety-checklist" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Puppy feeding basics", href: "/pet-nutrition/puppy-feeding-basics" },
          { label: "Pet adoption readiness quiz", href: "/tools/pet-adoption-readiness-quiz" },
          { label: "Dogs hub", href: "/dogs" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "puppy",
    slug: "puppy-vet-visit-checklist",
    path: "/puppy-care/puppy-vet-visit-checklist",
    title: "Puppy Vet Visit Checklist — What to Bring and Ask",
    description:
      "A practical checklist for a puppy's first veterinary visits: records to bring and questions to ask about vaccines, deworming, microchipping, and spay/neuter — without rigid schedules.",
    pageHeading: "Puppy Vet Visit Checklist",
    topicTag: "Vet planning",
    directAnswer:
      "Your puppy's early veterinary visits set up a lifetime of care. This page helps you prepare what to bring and what to ask — including how to discuss vaccines, deworming, microchipping, and spay/neuter. It does not give a vaccine or deworming schedule, because those depend on your puppy's age, health, history, and local risks, and are set by your veterinarian.",
    sections: [
      {
        heading: "What to bring",
        bullets: [
          "Any records from the shelter, rescue, or breeder, including vaccination or deworming history.",
          "The name of the food your puppy is currently eating.",
          "Microchip number if known.",
          "A fresh stool sample if your clinic requests one.",
          "Notes on eating, drinking, toileting, energy, and anything you've noticed.",
        ],
      },
      {
        heading: "Questions to ask your veterinarian",
        intro: "These are discussion prompts — your veterinarian tailors the plan to your puppy.",
        bullets: [
          "Which vaccines do you recommend for my puppy, and on what timeline for our situation?",
          "What parasite prevention and deworming are appropriate for my region?",
          "When would you recommend discussing spay or neuter for my puppy?",
          "Is my puppy microchipped, and are the registry details up to date?",
          "When is it safe for my puppy to meet other animals or go to public places?",
          "What signs should make me call you — or an emergency clinic — sooner rather than later?",
        ],
      },
    ],
    checklist: {
      heading: "Visit checklist",
      bullets: [
        "Records and vaccination/deworming history gathered.",
        "Current food name noted.",
        "Microchip number recorded (if known).",
        "Stool sample if requested.",
        "Written list of questions, including vaccines, parasite prevention, and spay/neuter timing.",
        "Notes on any observations to share.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a vaccine or deworming schedule from the internet applies to your puppy — your veterinarian sets timing.",
        "Do not assume one visit is enough; early care often involves a planned series your vet will outline.",
        "Do not assume public outings are safe yet — ask your vet when it's appropriate for your puppy.",
        "Do not give any medication or dewormer without veterinary guidance.",
      ],
    },
    whenToContactVet: PUPPY_WHEN_TO_VET,
    faqs: [
      {
        question: "What vaccines does my puppy need and when?",
        answer:
          "That is a decision for your veterinarian, based on your puppy's age, health, history, and local disease risks. We deliberately do not publish a universal schedule. Ask your vet to outline a plan for your puppy.",
      },
      {
        question: "When should I spay or neuter my puppy?",
        answer:
          "Timing depends on the individual dog and is a veterinary decision. Bring it up at an early visit so your veterinarian can advise based on breed, size, health, and current guidance.",
      },
      {
        question: "Do I need a stool sample?",
        answer:
          "Many clinics request a fresh stool sample at early visits to check for parasites. Confirm with your clinic before the appointment.",
      },
    ],
    sources: [SRC_AVMA_VACCINATIONS, SRC_AVMA_SPAY_NEUTER, SRC_AVMA_MICROCHIP, SRC_AVMA_PETCARE],
    related: [
      {
        title: "Plan care",
        links: [
          { label: "First week with a puppy", href: "/puppy-care/first-week-with-a-puppy" },
          { label: "When to call a vet for a puppy", href: "/puppy-care/when-to-call-a-vet-for-a-puppy" },
          { label: "Vet care hub", href: "/vet-care" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Dog health hub", href: "/dogs/health" },
          { label: "Pet insurance", href: "/pet-insurance" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "puppy",
    slug: "puppy-supplies-checklist",
    path: "/puppy-care/puppy-supplies-checklist",
    title: "Puppy Supplies Checklist — What to Have Ready",
    description:
      "A practical, brand-neutral checklist of puppy supplies to have ready before bringing a puppy home: food, bowls, bed, collar, ID, leash, safe toys, and grooming basics.",
    pageHeading: "Puppy Supplies Checklist",
    topicTag: "Supplies",
    directAnswer:
      "Having the basics ready before your puppy arrives makes the first days calmer and safer. This is a general, brand-neutral checklist — FaunaHub does not recommend specific products. Choose age- and size-appropriate items, and ask your veterinarian if you're unsure what suits your puppy.",
    sections: [
      {
        heading: "Core supplies",
        bullets: [
          "Food (ideally matching what your puppy is already eating at first) and food/water bowls.",
          "A collar with an ID tag, plus a leash appropriate for a puppy.",
          "A comfortable bed and a safe, appropriately sized crate or pen if you plan to use one.",
          "Safe, size-appropriate toys without small parts that could be swallowed.",
          "Puppy-appropriate grooming basics and cleaning supplies for accidents.",
        ],
      },
    ],
    checklist: {
      heading: "Supplies checklist",
      bullets: [
        "Food, bowls, and fresh water access.",
        "Collar, ID tag, and leash.",
        "Bed and, if using, a correctly sized crate or playpen.",
        "Safe, durable, size-appropriate toys.",
        "Grooming basics and accident-cleaning supplies.",
        "Vet and emergency contact details saved.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a more expensive or branded product is automatically better or safer.",
        "Do not assume any toy is safe — avoid items with small parts or that can splinter, and supervise chewing.",
        "Do not assume adult-sized gear fits a growing puppy; check sizing and recheck as they grow.",
        "Do not buy medications, supplements, or flea/worm products without veterinary guidance.",
      ],
    },
    whenToContactVet: {
      heading: "When to ask a veterinarian",
      bullets: [
        "Before buying any flea, tick, worming, or supplement product — these should be vet-guided.",
        "If you're unsure what food or gear is appropriate for your puppy's age and size.",
        "If a toy or item is swallowed or causes choking — treat that as an emergency.",
        "See our home safety checklist for hazards to avoid.",
      ],
    },
    faqs: [
      {
        question: "Do I need a crate for a puppy?",
        answer:
          "A correctly sized crate or pen can help with safety and house-training for some households, used positively and never as punishment. Whether it suits your puppy and home is a personal and vet-informed choice.",
      },
      {
        question: "What toys are safe for puppies?",
        answer:
          "Choose durable, size-appropriate toys without small parts that could be swallowed or splinter, and supervise play. If you're unsure, ask your veterinarian, and replace worn toys promptly.",
      },
      {
        question: "Should I buy flea and worm treatments in advance?",
        answer:
          "No — parasite prevention should be chosen with your veterinarian, who can recommend products appropriate for your puppy's age, weight, and region. Do not give these without guidance.",
      },
    ],
    sources: [SRC_ASPCA_DOG_CARE, SRC_AVMA_PETCARE],
    related: [
      {
        title: "Plan the first weeks",
        links: [
          { label: "First week with a puppy", href: "/puppy-care/first-week-with-a-puppy" },
          { label: "Puppy home safety checklist", href: "/puppy-care/puppy-home-safety-checklist" },
          { label: "Puppy feeding routine", href: "/puppy-care/puppy-feeding-routine" },
        ],
      },
      {
        title: "Budget",
        links: [
          { label: "Pet cost calculator", href: "/tools/pet-cost-calculator" },
          { label: "Pet budget checklist", href: "/guides/pet-budget-checklist" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "puppy",
    slug: "puppy-feeding-routine",
    path: "/puppy-care/puppy-feeding-routine",
    title: "Puppy Feeding Routine — Building Consistency",
    description:
      "An educational overview of building a consistent puppy feeding routine using a puppy-appropriate food and veterinary guidance — without exact amounts. Links to puppy feeding basics.",
    pageHeading: "Puppy Feeding Routine",
    topicTag: "Feeding",
    directAnswer:
      "Puppies do best with a consistent routine and a food formulated for growth. The right amount and meal frequency depend on your puppy's age, breed, and expected adult size, so use the food label as a starting point and let your veterinarian refine it. This page is about routine — it does not give exact grams, cups, or calories.",
    sections: [
      {
        heading: "Build a steady routine",
        bullets: [
          "Feed a food labelled complete and balanced for growth (puppy) or all life stages.",
          "Young puppies usually eat more frequently than adults; ask your veterinarian about frequency for your puppy's age.",
          "Keep meal times reasonably consistent and feed in a calm spot.",
          "Use the feeding guide on the label as a starting range, adjusted with your vet and your puppy's body condition.",
          "Keep fresh water available at all times, and transition foods gradually.",
        ],
      },
    ],
    checklist: {
      heading: "Feeding routine checklist",
      bullets: [
        "Puppy-appropriate, complete-and-balanced food.",
        "Meal frequency confirmed with your veterinarian.",
        "Consistent meal times in a calm space.",
        "Label feeding guide used as a starting range, not an exact rule.",
        "Fresh water always available; food changes made gradually.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume an exact gram or cup amount from the internet fits your puppy.",
        "Do not assume adult dog food meets a growing puppy's needs.",
        "Do not assume more food means healthier growth — overfeeding can harm developing joints.",
        "Do not switch foods abruptly unless your veterinarian advises it.",
      ],
    },
    whenToContactVet: {
      heading: "When to contact a veterinarian",
      intro: "Feeding questions and warning signs both belong with your vet.",
      bullets: [
        "To confirm the right food, meal frequency, and amount for your puppy's age and breed.",
        "If your puppy refuses food, vomits, has diarrhoea, or is losing weight or not growing well.",
        "For large- or giant-breed puppies, which have specific growth considerations.",
        "Before adding supplements or changing diet for any health reason.",
      ],
    },
    faqs: [
      {
        question: "How much should I feed my puppy?",
        answer:
          "The right amount depends on age, breed, expected adult size, and the specific food. Use the label's feeding guide as a starting range and have your veterinarian refine it. See our puppy feeding basics page for more.",
      },
      {
        question: "How often should a puppy eat?",
        answer:
          "Young puppies usually eat several small meals a day, reducing in frequency as they grow. Your veterinarian can advise the right frequency for your puppy's age.",
      },
      {
        question: "Can puppies eat adult dog food?",
        answer:
          "Growing puppies generally need food formulated for growth or all life stages. Ask your veterinarian which formulation is appropriate for your puppy.",
      },
    ],
    sources: [SRC_ASPCA_DOG_NUTRITION, SRC_MERCK_NUTRITION, SRC_AVMA_PETCARE],
    related: [
      {
        title: "Feeding",
        links: [
          { label: "Puppy feeding basics", href: "/pet-nutrition/puppy-feeding-basics" },
          { label: "How to transition pet food", href: "/pet-nutrition/how-to-transition-pet-food" },
          { label: "Feeding schedule planner", href: "/tools/pet-feeding-schedule-planner" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Dog food safety", href: "/dogs/food" },
          { label: "Pet nutrition hub", href: "/pet-nutrition" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "puppy",
    slug: "puppy-socialization-basics",
    path: "/puppy-care/puppy-socialization-basics",
    title: "Puppy Socialization Basics — Safe, Positive Exposure",
    description:
      "An educational overview of positive, gentle puppy socialization — calm exposure to people, sounds, and handling — with veterinary guidance on when public exposure is appropriate.",
    pageHeading: "Puppy Socialization Basics",
    topicTag: "Socialization",
    directAnswer:
      "Early, positive experiences help a puppy grow into a confident adult dog. Socialization is about calm, gentle, rewarding exposure at your puppy's pace — not flooding them with too much at once. Because a young puppy's protection from disease is still developing, ask your veterinarian when it's appropriate for your puppy to meet unknown animals or visit public places.",
    sections: [
      {
        heading: "Positive, gentle exposure",
        bullets: [
          "Introduce new people, gentle handling, household sounds, and surfaces gradually and positively.",
          "Keep experiences short, calm, and rewarding; let your puppy retreat if overwhelmed.",
          "Pair new things with praise or a small reward so they build good associations.",
          "Practise gentle handling of paws, ears, and mouth so future grooming and vet visits are easier.",
          "Ask your veterinarian when it's safe to meet other dogs or go to public places, based on vaccination status and local risk.",
        ],
      },
    ],
    checklist: {
      heading: "Socialization checklist",
      bullets: [
        "Short, calm, positive exposures rather than overwhelming events.",
        "Gentle handling practice (paws, ears, mouth) with rewards.",
        "New sounds, surfaces, and household experiences introduced gradually.",
        "Your puppy allowed to retreat and set the pace.",
        "Vet guidance on timing for meeting other animals and public outings.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a universal age or timeline for public exposure — ask your veterinarian for your puppy.",
        "Do not assume more exposure is always better; forced or frightening experiences can backfire.",
        "Do not assume every dog or place is safe before your vet says public exposure is appropriate.",
        "Do not punish fearful behaviour; build confidence with calm, positive experiences.",
      ],
    },
    whenToContactVet: {
      heading: "When to ask a veterinarian or professional",
      bullets: [
        "To confirm when it's safe for your puppy to meet unknown animals or visit public places.",
        "If your puppy shows persistent fear, anxiety, or reactivity — ask about positive, reward-based training.",
        "For referral to a qualified, reward-based trainer or behaviour professional if needed.",
        "For any health concern, including the warning signs listed across this cluster.",
      ],
    },
    faqs: [
      {
        question: "When can my puppy meet other dogs or go outside in public?",
        answer:
          "That depends on your puppy's vaccination status and local disease risk, so it's a question for your veterinarian. They can advise when public exposure is appropriate while still supporting early socialization safely.",
      },
      {
        question: "What if my puppy seems scared?",
        answer:
          "Go slower, keep experiences short and positive, and let your puppy retreat. Never force or punish fear. If anxiety persists, ask your veterinarian about reward-based training or a behaviour professional.",
      },
      {
        question: "Is it too late to socialize an older puppy?",
        answer:
          "Early experiences are valuable, but positive socialization and training continue to help at any age. A reward-based trainer and your veterinarian can guide an approach for your dog.",
      },
    ],
    sources: [SRC_AVMA_SOCIALIZING, SRC_ASPCA_DOG_CARE, SRC_CORNELL_CANINE],
    related: [
      {
        title: "Plan care",
        links: [
          { label: "First week with a puppy", href: "/puppy-care/first-week-with-a-puppy" },
          { label: "Puppy potty training planning", href: "/puppy-care/puppy-potty-training-planning" },
          { label: "Puppy sleep routine", href: "/puppy-care/puppy-sleep-routine" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Dog behavior", href: "/dogs/behavior" },
          { label: "Dogs hub", href: "/dogs" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "puppy",
    slug: "puppy-potty-training-planning",
    path: "/puppy-care/puppy-potty-training-planning",
    title: "Puppy Potty Training Planning — Routine and Patience",
    description:
      "An educational overview of house-training planning for puppies: routine, supervision, and positive reinforcement — no punishment, no guaranteed timelines.",
    pageHeading: "Puppy Potty Training Planning",
    topicTag: "House-training",
    directAnswer:
      "House-training is built on routine, supervision, and rewarding the right behaviour. Take your puppy out often and consistently, reward success calmly, and expect accidents as part of learning. Progress varies by puppy, so avoid fixed timelines and never use punishment, which tends to create fear rather than learning.",
    sections: [
      {
        heading: "Routine, supervision, and rewards",
        bullets: [
          "Take your puppy to the same toileting spot frequently — after waking, eating, drinking, and play.",
          "Supervise closely indoors so you can guide your puppy outside in time.",
          "Reward success calmly and immediately so your puppy connects the behaviour with the reward.",
          "Clean accidents thoroughly without scolding; interrupt gently if you catch one in progress.",
          "Keep a consistent routine — predictability helps puppies learn.",
        ],
      },
    ],
    checklist: {
      heading: "House-training checklist",
      bullets: [
        "Frequent, consistent trips to the same toileting spot.",
        "Close supervision indoors during the learning phase.",
        "Calm, immediate rewards for success.",
        "Thorough cleaning of accidents, no punishment.",
        "A steady daily routine for meals, water, and toileting.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a guaranteed timeline — puppies learn at different rates.",
        "Do not use punishment, rubbing a puppy's nose in accidents, or scolding — these cause fear, not learning.",
        "Do not assume accidents mean failure; they are part of normal learning.",
        "Do not assume frequent accidents are only a training issue — see your vet if they seem unusual.",
      ],
    },
    whenToContactVet: {
      heading: "When to contact a veterinarian",
      bullets: [
        "If your puppy strains, has accidents far more often than expected, or shows blood in urine or stool.",
        "If there is diarrhoea, vomiting, or signs of discomfort.",
        "If a previously progressing puppy suddenly regresses, which can have medical causes.",
        "For any of the warning signs listed across this cluster.",
      ],
    },
    faqs: [
      {
        question: "How long does potty training take?",
        answer:
          "It varies widely by puppy, so we avoid promising a timeline. Consistency, supervision, and positive reinforcement help most. Patience and routine matter more than a fixed schedule.",
      },
      {
        question: "Should I punish accidents?",
        answer:
          "No. Punishment, scolding, or nose-rubbing tends to create fear and slow learning. Clean accidents calmly and focus on rewarding success and preventing opportunities for mistakes.",
      },
      {
        question: "My puppy was doing well and suddenly regressed — why?",
        answer:
          "Regression can happen during normal development, but it can also have medical causes. If it's sudden or accompanied by straining, blood, or discomfort, contact your veterinarian.",
      },
    ],
    sources: [SRC_ASPCA_DOG_CARE, SRC_AVMA_PETCARE],
    related: [
      {
        title: "Routine",
        links: [
          { label: "Puppy sleep routine", href: "/puppy-care/puppy-sleep-routine" },
          { label: "Puppy socialization basics", href: "/puppy-care/puppy-socialization-basics" },
          { label: "First week with a puppy", href: "/puppy-care/first-week-with-a-puppy" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Dog behavior", href: "/dogs/behavior" },
          { label: "Dog health hub", href: "/dogs/health" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "puppy",
    slug: "puppy-sleep-routine",
    path: "/puppy-care/puppy-sleep-routine",
    title: "Puppy Sleep Routine — Rest, Naps, and Settling",
    description:
      "An educational overview of helping a puppy sleep and rest well: lots of naps, a calm sleep space, and a gentle wind-down routine. Not veterinary advice.",
    pageHeading: "Puppy Sleep Routine",
    topicTag: "Sleep & routine",
    directAnswer:
      "Puppies need a lot of sleep, and plenty of rest supports healthy development and calmer behaviour. A consistent, calm routine with a comfortable sleep space helps. This page is general guidance; persistent sleep problems, restlessness, or signs of distress are worth raising with your veterinarian.",
    sections: [
      {
        heading: "Support healthy rest",
        bullets: [
          "Expect puppies to sleep a large part of the day; protect nap time from constant disturbance.",
          "Provide a comfortable, safe, quiet sleep space your puppy can settle in.",
          "Build a gentle wind-down routine — calm play, a toileting trip, then settling.",
          "Keep a consistent sleep and wake rhythm to help your puppy adjust.",
          "Use calm reassurance; a predictable routine helps puppies feel secure at night.",
        ],
      },
    ],
    checklist: {
      heading: "Sleep routine checklist",
      bullets: [
        "A comfortable, safe, quiet sleep space.",
        "Protected nap times during the day.",
        "A gentle, consistent wind-down routine in the evening.",
        "A toileting trip before settling for the night.",
        "Consistent sleep and wake times.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a sleepy puppy is lazy — lots of sleep is normal and important.",
        "Do not assume night waking is only behavioural; very young puppies may need a night toilet trip.",
        "Do not assume crating is required; if used, it should be positive and never punishment.",
        "Do not ignore sudden lethargy or hard-to-wake behaviour — that is different from normal sleep and warrants a vet call.",
      ],
    },
    whenToContactVet: {
      heading: "When to contact a veterinarian",
      bullets: [
        "If your puppy is unusually lethargic, hard to wake, or weak — this is different from normal sleepiness.",
        "If restlessness, distress, or disrupted sleep is persistent or paired with other symptoms.",
        "If night waking comes with vomiting, diarrhoea, or signs of pain.",
        "For any warning signs listed across this cluster.",
      ],
    },
    faqs: [
      {
        question: "How much do puppies sleep?",
        answer:
          "Puppies typically sleep a large portion of the day. Ample rest supports growth and behaviour. Protect nap times and provide a calm sleep space. Sudden, unusual lethargy is different and warrants a vet call.",
      },
      {
        question: "How do I help my puppy sleep through the night?",
        answer:
          "A consistent wind-down routine, a comfortable sleep space, and a toileting trip before bed help. Very young puppies may still need a night toilet break. Patience and routine matter most.",
      },
      {
        question: "Should my puppy sleep in a crate?",
        answer:
          "A crate can help some households when introduced positively and never used as punishment. Whether it suits your puppy is a personal choice; the goal is a safe, calm place to rest.",
      },
    ],
    sources: [SRC_ASPCA_DOG_CARE, SRC_AVMA_PETCARE],
    related: [
      {
        title: "Routine",
        links: [
          { label: "Puppy potty training planning", href: "/puppy-care/puppy-potty-training-planning" },
          { label: "Puppy socialization basics", href: "/puppy-care/puppy-socialization-basics" },
          { label: "First week with a puppy", href: "/puppy-care/first-week-with-a-puppy" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Dog behavior", href: "/dogs/behavior" },
          { label: "Dogs hub", href: "/dogs" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "puppy",
    slug: "puppy-home-safety-checklist",
    path: "/puppy-care/puppy-home-safety-checklist",
    title: "Puppy Home Safety Checklist — Puppy-Proofing Basics",
    description:
      "A practical puppy-proofing checklist: securing toxic foods, plants, medications, cords, and small objects, and preventing falls. Prevention-focused, with poison-control escalation.",
    pageHeading: "Puppy Home Safety Checklist",
    topicTag: "Home safety",
    directAnswer:
      "Puppies explore with their mouths, so puppy-proofing prevents many emergencies before they happen. Secure toxic foods, plants, medications, chemicals, cords, and small swallowable objects, and supervise closely. If you think your puppy has eaten something dangerous, contact a veterinarian or an animal poison-control line immediately — do not wait for symptoms.",
    sections: [
      {
        heading: "Puppy-proof the home",
        bullets: [
          "Store toxic foods (chocolate, grapes and raisins, onions, garlic, xylitol products) well out of reach.",
          "Secure medications, supplements, cleaning products, antifreeze, and pesticides.",
          "Keep toxic plants away; check a reliable plant-toxicity reference before bringing plants home.",
          "Manage electrical cords and remove small objects, string, and items that could be swallowed.",
          "Block access to stairs, balconies, and gaps where a puppy could fall or get stuck.",
        ],
      },
    ],
    checklist: {
      heading: "Home safety checklist",
      bullets: [
        "Toxic foods and chemicals stored securely.",
        "Medications and supplements out of reach.",
        "Toxic plants identified and removed or blocked.",
        "Cords managed; small swallowable objects cleared.",
        "Stairs, balconies, and hazardous gaps secured.",
        "Vet and animal poison-control numbers saved.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a curious puppy won't reach something — they are fast and persistent.",
        "Do not assume a plant or product is pet-safe without checking a reliable source.",
        "Do not try to treat a suspected poisoning at home — contact a professional immediately.",
        "Do not assume supervision alone is enough; physical puppy-proofing matters too.",
      ],
    },
    whenToContactVet: {
      heading: "When to contact a veterinarian or poison control",
      intro: "Do not wait for symptoms with a suspected exposure.",
      bullets: [
        "If your puppy may have eaten something toxic, contact a veterinarian or animal poison-control line immediately.",
        "Keep any packaging or plant material to describe the exposure.",
        "For choking, a swallowed object, a fall, or injury, treat it as an emergency.",
        "See our pet safety pages for poisoning warning signs and escalation.",
      ],
    },
    faqs: [
      {
        question: "What household items are most dangerous to puppies?",
        answer:
          "Common hazards include toxic foods (chocolate, grapes, onions, xylitol), medications, cleaning products, antifreeze, toxic plants, electrical cords, and small swallowable objects. Secure these and supervise closely.",
      },
      {
        question: "My puppy ate something I'm worried about — what now?",
        answer:
          "Contact a veterinarian or an animal poison-control line immediately, even before symptoms appear, and keep any packaging or plant material. Do not try to treat it at home.",
      },
      {
        question: "How do I know if a plant is safe?",
        answer:
          "Check a reliable toxicity reference before bringing plants home and keep risky ones out of reach. Our pet safety cluster links to authoritative plant-toxicity resources.",
      },
    ],
    sources: [SRC_AVMA_HOUSEHOLD_HAZARDS, SRC_ASPCA_POISON, SRC_ASPCA_DOG_CARE],
    related: [
      {
        title: "Safety",
        links: [
          { label: "Home safety for pets", href: "/pet-safety/home-safety-for-pets" },
          { label: "Pet poisoning warning signs", href: "/pet-safety/pet-poisoning-warning-signs" },
          { label: "When to call a vet for a puppy", href: "/puppy-care/when-to-call-a-vet-for-a-puppy" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Dog food safety", href: "/dogs/food" },
          { label: "Pet safety hub", href: "/pet-safety" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "puppy",
    slug: "when-to-call-a-vet-for-a-puppy",
    path: "/puppy-care/when-to-call-a-vet-for-a-puppy",
    title: "When to Call a Vet for a Puppy — Warning Signs",
    description:
      "A cautious educational guide to warning signs that mean a puppy needs prompt veterinary care. Recognition and escalation only — not diagnosis, treatment, or wait-and-see.",
    pageHeading: "When to Call a Vet for a Puppy",
    topicTag: "Warning signs",
    directAnswer:
      "Puppies can become seriously ill very quickly, so when something seems wrong, the safest action is usually to contact a veterinarian. This page lists warning signs to help you escalate — it does not diagnose or treat. When in doubt, call a licensed veterinarian or emergency clinic; do not wait and see with the signs below.",
    sections: [
      {
        heading: "How to act",
        bullets: [
          "If your puppy is in obvious distress, go to an emergency clinic without delay.",
          "If you are unsure, call — telephone triage helps the clinic prepare and helps you decide.",
          "For a suspected poisoning or ingestion, contact a vet or animal poison-control line immediately.",
          "Have your puppy's age, weight, and any history ready, and describe what you've seen and when.",
        ],
      },
    ],
    checklist: {
      heading: "Warning signs that warrant prompt veterinary contact",
      intro: "This list is not exhaustive, and signs can have many causes. Any of these warrants contacting a veterinarian — especially in a young puppy.",
      bullets: [
        "Repeated vomiting or diarrhoea, or refusal to eat or drink.",
        "Lethargy, weakness, collapse, or being hard to wake.",
        "Difficulty breathing, persistent coughing, or pale, white, or blue gums.",
        "Seizures, tremors, or suspected poisoning.",
        "Any injury, fall, or suspected swallowed object.",
        "A swollen or painful belly, signs of severe pain, or rapid worsening.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not adopt a \"wait and see\" approach with the signs above — puppies can deteriorate fast.",
        "Do not give human medications or home remedies, which can be dangerous.",
        "Do not try to diagnose the cause from this page — that is for your veterinarian.",
        "Do not assume one normal-seeming moment means the danger has passed.",
      ],
    },
    whenToContactVet: {
      heading: "When to contact a veterinarian or emergency clinic",
      intro: "When in doubt, call. Do not delay for the signs above.",
      bullets: [
        "Contact a clinic immediately for any warning sign listed here.",
        "Contact a clinic any time you are unsure — calling is always reasonable.",
        "If your regular vet is closed, call a 24-hour or emergency animal hospital.",
        "For suspected poisoning, also consider an animal poison-control line.",
      ],
    },
    faqs: [
      {
        question: "Should I wait to see if my puppy improves?",
        answer:
          "Not with the warning signs on this page. Puppies can deteriorate quickly, so it's safer to call a veterinarian promptly rather than wait. Telephone triage can help you decide what to do.",
      },
      {
        question: "Can I treat my puppy at home first?",
        answer:
          "Home treatment is generally not appropriate for these signs, and human medications can be dangerous to puppies. Contact a veterinarian for guidance instead.",
      },
      {
        question: "What should I tell the clinic when I call?",
        answer:
          "Your puppy's age and weight, what you've observed and when it started, any possible ingestion, and whether your puppy is alert and breathing normally.",
      },
    ],
    sources: [SRC_AVMA_FIRST_AID, SRC_ASPCA_POISON, SRC_MERCK, SRC_CORNELL_CANINE],
    related: [
      {
        title: "Escalate safely",
        links: [
          { label: "When to go to the emergency vet", href: "/pet-safety/when-to-go-to-emergency-vet" },
          { label: "Pet poisoning warning signs", href: "/pet-safety/pet-poisoning-warning-signs" },
          { label: "Puppy home safety checklist", href: "/puppy-care/puppy-home-safety-checklist" },
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
];

// ─── KITTEN ARTICLES ───────────────────────────────────────────────────────

export const KITTEN_ARTICLES: EarlyCareArticle[] = [
  {
    species: "kitten",
    slug: "first-week-with-a-kitten",
    path: "/kitten-care/first-week-with-a-kitten",
    title: "First Week With a Kitten — A Calm Planning Guide",
    description:
      "An educational plan for a kitten's first week home: a quiet safe room, gentle routine, supplies, litter access, and an early vet visit. Not veterinary advice — when in doubt, ask your vet.",
    pageHeading: "First Week With a Kitten",
    topicTag: "First weeks",
    directAnswer:
      "A kitten's first week is about a calm, gradual introduction and keeping your kitten safe while it adjusts. Many kittens settle best starting in one quiet room with food, water, litter, and hiding spots, expanding access over time. This page helps you plan — it does not diagnose or treat, and a kitten that seems unwell, especially one not eating, should be seen by a veterinarian.",
    sections: [
      {
        heading: "Settle in gently",
        bullets: [
          "Start your kitten in one quiet, safe room with food, water, a litter box, a bed, and hiding spots.",
          "Keep the first days calm; let your kitten explore and approach at its own pace.",
          "Place the litter box away from food and water, and keep it easy to reach.",
          "Expand access to the rest of the home gradually as your kitten gains confidence.",
          "Begin gentle, positive handling and short play sessions.",
        ],
      },
      {
        heading: "Set up the essentials",
        bullets: [
          "Have kitten-appropriate food, bowls, a litter box and litter, a bed, and safe toys ready.",
          "Keep fresh water available, separate from the litter box.",
          "Ask the shelter, rescue, or breeder what food your kitten has been eating to avoid an abrupt change.",
          "Find a veterinarian and plan an early visit.",
          "Record microchip details and keep the registry up to date.",
        ],
      },
    ],
    checklist: {
      heading: "First-week checklist",
      bullets: [
        "Quiet safe room with food, water, litter box, bed, and hiding spots.",
        "Kitten-appropriate food (matching the previous diet at first).",
        "Litter box placed away from food and water.",
        "Veterinarian identified and an early visit planned.",
        "Microchip details recorded; home kitten-proofed.",
        "Emergency clinic and animal poison-control numbers saved.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a hiding kitten is fine — watch eating, drinking, litter use, and energy closely.",
        "Do not assume a kitten can be given the run of the whole home immediately.",
        "Do not change foods abruptly — transition gradually unless your veterinarian advises otherwise.",
        "Do not ignore a kitten that isn't eating — even a short time without food can be serious.",
      ],
    },
    whenToContactVet: KITTEN_WHEN_TO_VET,
    faqs: [
      {
        question: "Should I keep my kitten in one room at first?",
        answer:
          "Many kittens settle best starting in a single quiet room with everything they need, then expanding access gradually. This helps them build confidence and makes litter use easier.",
      },
      {
        question: "My kitten is hiding and barely eating — what should I do?",
        answer:
          "Some shyness is normal, but kittens should not go long without eating. If your kitten won't eat, seems lethargic, or shows other symptoms, contact your veterinarian promptly.",
      },
      {
        question: "How soon should a kitten see a vet?",
        answer:
          "Plan an early visit within the first days to weeks, and sooner if anything seems wrong. Your veterinarian advises on timing based on age, history, and local risks.",
      },
    ],
    sources: [SRC_ASPCA_CAT_CARE, SRC_AVMA_SELECTING_PET, SRC_AVMA_PETCARE],
    related: [
      {
        title: "Plan the first weeks",
        links: [
          { label: "Kitten supplies checklist", href: "/kitten-care/kitten-supplies-checklist" },
          { label: "Litter box setup basics", href: "/kitten-care/litter-box-setup-basics" },
          { label: "Kitten vet visit checklist", href: "/kitten-care/kitten-vet-visit-checklist" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Kitten feeding basics", href: "/pet-nutrition/kitten-feeding-basics" },
          { label: "Cats hub", href: "/cats" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "kitten",
    slug: "kitten-vet-visit-checklist",
    path: "/kitten-care/kitten-vet-visit-checklist",
    title: "Kitten Vet Visit Checklist — What to Bring and Ask",
    description:
      "A practical checklist for a kitten's first veterinary visits: records to bring and questions to ask about vaccines, deworming, microchipping, and spay/neuter — without rigid schedules.",
    pageHeading: "Kitten Vet Visit Checklist",
    topicTag: "Vet planning",
    directAnswer:
      "Your kitten's early veterinary visits lay the foundation for lifelong care. This page helps you prepare what to bring and what to ask — including how to discuss vaccines, deworming, microchipping, and spay/neuter. It does not give a vaccine or deworming schedule, because those depend on your kitten's age, health, history, and local risks, and are set by your veterinarian.",
    sections: [
      {
        heading: "What to bring",
        bullets: [
          "Any records from the shelter, rescue, or breeder, including vaccination or deworming history.",
          "The name of the food your kitten is currently eating.",
          "Microchip number if known.",
          "A fresh stool sample if your clinic requests one.",
          "Notes on eating, drinking, litter use, energy, and anything you've noticed.",
        ],
      },
      {
        heading: "Questions to ask your veterinarian",
        intro: "These are discussion prompts — your veterinarian tailors the plan to your kitten.",
        bullets: [
          "Which vaccines do you recommend for my kitten, and on what timeline for our situation?",
          "What parasite prevention and deworming are appropriate for my region?",
          "When would you recommend discussing spay or neuter for my kitten?",
          "Is my kitten microchipped, and are the registry details up to date?",
          "Are there any tests you recommend for a new kitten?",
          "What signs should make me call you — or an emergency clinic — sooner rather than later?",
        ],
      },
    ],
    checklist: {
      heading: "Visit checklist",
      bullets: [
        "Records and vaccination/deworming history gathered.",
        "Current food name noted.",
        "Microchip number recorded (if known).",
        "Stool sample if requested.",
        "Written list of questions, including vaccines, parasite prevention, and spay/neuter timing.",
        "Notes on any observations to share.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a vaccine or deworming schedule from the internet applies to your kitten — your veterinarian sets timing.",
        "Do not assume one visit is enough; early care often involves a planned series your vet will outline.",
        "Do not assume an indoor kitten needs nothing — discuss appropriate care with your vet.",
        "Do not give any medication or dewormer without veterinary guidance.",
      ],
    },
    whenToContactVet: KITTEN_WHEN_TO_VET,
    faqs: [
      {
        question: "What vaccines does my kitten need and when?",
        answer:
          "That is a decision for your veterinarian, based on your kitten's age, health, history, lifestyle, and local risks. We deliberately do not publish a universal schedule. Ask your vet to outline a plan for your kitten.",
      },
      {
        question: "When should I spay or neuter my kitten?",
        answer:
          "Timing depends on the individual cat and is a veterinary decision. Raise it at an early visit so your veterinarian can advise based on current guidance and your kitten's health.",
      },
      {
        question: "Does an indoor-only kitten still need vet visits?",
        answer:
          "Yes. Indoor kittens still benefit from veterinary care, preventive discussion, and monitoring. Your veterinarian can advise what's appropriate for your kitten's lifestyle.",
      },
    ],
    sources: [SRC_AVMA_VACCINATIONS, SRC_AVMA_SPAY_NEUTER, SRC_AVMA_MICROCHIP, SRC_AVMA_PETCARE],
    related: [
      {
        title: "Plan care",
        links: [
          { label: "First week with a kitten", href: "/kitten-care/first-week-with-a-kitten" },
          { label: "When to call a vet for a kitten", href: "/kitten-care/when-to-call-a-vet-for-a-kitten" },
          { label: "Vet care hub", href: "/vet-care" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Cat health hub", href: "/cats/health" },
          { label: "Pet insurance", href: "/pet-insurance" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "kitten",
    slug: "kitten-supplies-checklist",
    path: "/kitten-care/kitten-supplies-checklist",
    title: "Kitten Supplies Checklist — What to Have Ready",
    description:
      "A practical, brand-neutral checklist of kitten supplies to have ready: food, bowls, litter box and litter, bed, safe toys, scratching post, and a carrier.",
    pageHeading: "Kitten Supplies Checklist",
    topicTag: "Supplies",
    directAnswer:
      "Having the basics ready before your kitten arrives makes settling in calmer. This is a general, brand-neutral checklist — FaunaHub does not recommend specific products. Choose age-appropriate items, provide a litter box and scratching outlet, and ask your veterinarian if you're unsure what suits your kitten.",
    sections: [
      {
        heading: "Core supplies",
        bullets: [
          "Kitten-appropriate food (ideally matching the current diet at first) and food/water bowls.",
          "A litter box and litter, plus a scoop; have more than one box in multi-cat or multi-level homes.",
          "A bed or cosy resting spots and safe hiding places.",
          "Safe toys without small parts, and a scratching post or pad.",
          "A secure carrier for vet visits and travel.",
        ],
      },
    ],
    checklist: {
      heading: "Supplies checklist",
      bullets: [
        "Kitten food, bowls, and fresh water access.",
        "Litter box(es), litter, and a scoop.",
        "Bed, cosy resting spots, and hiding places.",
        "Safe toys and a scratching post or pad.",
        "Secure carrier for travel and vet visits.",
        "Vet and emergency contact details saved.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume one litter box is enough — many households need more than one.",
        "Do not assume any toy is safe; avoid small parts and string-like items that can be swallowed, and supervise play.",
        "Do not assume a kitten will use a scratching post without one provided in a good spot.",
        "Do not buy flea, worm, or supplement products without veterinary guidance.",
      ],
    },
    whenToContactVet: {
      heading: "When to ask a veterinarian",
      bullets: [
        "Before buying any flea, tick, worming, or supplement product — these should be vet-guided.",
        "If you're unsure what food or litter suits your kitten.",
        "If a toy or string-like item is swallowed or causes choking — treat that as an emergency.",
        "See our kitten home safety checklist for hazards to avoid.",
      ],
    },
    faqs: [
      {
        question: "How many litter boxes does a kitten need?",
        answer:
          "A common guideline is one box per cat plus one extra, placed in accessible, low-traffic spots. The right number depends on your home and number of cats. See our litter box setup basics page.",
      },
      {
        question: "Are string and ribbon toys safe?",
        answer:
          "String, ribbon, and yarn can be dangerous if swallowed and should be used only with supervision and stored away afterwards. Choose safe, solid toys without small parts for unsupervised play.",
      },
      {
        question: "Do kittens need a scratching post?",
        answer:
          "Yes — scratching is natural and important. Providing an appropriate post or pad protects furniture and supports your kitten's needs. Place it where your kitten likes to spend time.",
      },
    ],
    sources: [SRC_ASPCA_CAT_CARE, SRC_AVMA_PETCARE],
    related: [
      {
        title: "Plan the first weeks",
        links: [
          { label: "First week with a kitten", href: "/kitten-care/first-week-with-a-kitten" },
          { label: "Litter box setup basics", href: "/kitten-care/litter-box-setup-basics" },
          { label: "Kitten home safety checklist", href: "/kitten-care/kitten-home-safety-checklist" },
        ],
      },
      {
        title: "Budget",
        links: [
          { label: "Pet cost calculator", href: "/tools/pet-cost-calculator" },
          { label: "Pet budget checklist", href: "/guides/pet-budget-checklist" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "kitten",
    slug: "kitten-feeding-routine",
    path: "/kitten-care/kitten-feeding-routine",
    title: "Kitten Feeding Routine — Building Consistency",
    description:
      "An educational overview of building a consistent kitten feeding routine using a kitten-appropriate food and veterinary guidance — without exact amounts or fasting advice.",
    pageHeading: "Kitten Feeding Routine",
    topicTag: "Feeding",
    directAnswer:
      "Kittens grow quickly and do best with a food formulated for growth, offered frequently. The right amount and frequency depend on your kitten's age and health, so use the food label as a starting point and let your veterinarian refine it. This page is about routine — it does not give exact amounts, and kittens should never be fasted or restricted to manage weight.",
    sections: [
      {
        heading: "Build a steady routine",
        bullets: [
          "Feed a food labelled complete and balanced for growth (kitten) or all life stages.",
          "Kittens are usually fed several small meals a day; ask your veterinarian about frequency for your kitten's age.",
          "Keep meal times reasonably consistent and feed in a calm spot.",
          "Use the feeding guide on the label as a starting range, refined with your vet and body condition.",
          "Keep fresh water available, separate from the litter box, and transition foods gradually.",
        ],
      },
    ],
    checklist: {
      heading: "Feeding routine checklist",
      bullets: [
        "Kitten-appropriate, complete-and-balanced food.",
        "Meal frequency confirmed with your veterinarian.",
        "Consistent meal times in a calm space.",
        "Label feeding guide used as a starting range, not an exact rule.",
        "Fresh water always available; food changes made gradually.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume an exact gram or cup amount from the internet fits your kitten.",
        "Do not assume adult cat food meets a growing kitten's needs.",
        "Do not fast or restrict a kitten to manage weight — that can be dangerous; ask your vet.",
        "Do not assume cow's milk is suitable — many cats do not digest it well.",
      ],
    },
    whenToContactVet: {
      heading: "When to contact a veterinarian",
      intro: "Appetite is an important signal in kittens.",
      bullets: [
        "To confirm the right food, meal frequency, and amount for your kitten's age.",
        "If your kitten refuses food or eats noticeably less — even briefly, this is serious in kittens.",
        "If there is vomiting, diarrhoea, or poor growth.",
        "Before adding supplements or changing diet for any health reason.",
      ],
    },
    faqs: [
      {
        question: "How often should a kitten eat?",
        answer:
          "Kittens are usually fed several small meals a day, reducing in frequency as they grow. Your veterinarian can advise the right frequency for your kitten's age.",
      },
      {
        question: "How much should I feed my kitten?",
        answer:
          "The right amount depends on age and the specific food. Use the label's feeding guide as a starting range and have your veterinarian refine it. See our kitten feeding basics page for more.",
      },
      {
        question: "Can kittens drink cow's milk?",
        answer:
          "Cow's milk is not suitable for many cats and can cause digestive upset. Kittens need a complete kitten diet and fresh water; ask your veterinarian about appropriate options.",
      },
    ],
    sources: [SRC_ASPCA_CAT_NUTRITION, SRC_MERCK_NUTRITION, SRC_AVMA_PETCARE],
    related: [
      {
        title: "Feeding",
        links: [
          { label: "Kitten feeding basics", href: "/pet-nutrition/kitten-feeding-basics" },
          { label: "How to transition pet food", href: "/pet-nutrition/how-to-transition-pet-food" },
          { label: "Feeding schedule planner", href: "/tools/pet-feeding-schedule-planner" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Can cats drink milk?", href: "/cats/food/can-cats-drink-milk" },
          { label: "Pet nutrition hub", href: "/pet-nutrition" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "kitten",
    slug: "kitten-socialization-basics",
    path: "/kitten-care/kitten-socialization-basics",
    title: "Kitten Socialization Basics — Gentle, Positive Handling",
    description:
      "An educational overview of positive kitten socialization: gentle handling, calm exposure, and play that builds confidence — at the kitten's pace, with veterinary guidance.",
    pageHeading: "Kitten Socialization Basics",
    topicTag: "Socialization",
    directAnswer:
      "Gentle, positive experiences early on help a kitten grow into a confident, well-adjusted cat. Socialization is about calm handling, rewarding exposure to everyday sights and sounds, and play — always at your kitten's pace. Let your kitten approach and retreat freely, and ask your veterinarian about timing for any interactions with other animals.",
    sections: [
      {
        heading: "Positive, gentle exposure",
        bullets: [
          "Handle your kitten gently and briefly, building up positive associations with being touched and held.",
          "Introduce everyday sounds, household activity, the carrier, and gentle grooming gradually.",
          "Use play and rewards to build confidence; let your kitten retreat to a safe spot when it wants to.",
          "Introduce resident pets slowly and supervised, following guidance from your vet or a behaviour professional.",
          "Practise handling paws and mouth gently so future grooming and vet visits are easier.",
        ],
      },
    ],
    checklist: {
      heading: "Socialization checklist",
      bullets: [
        "Short, gentle handling sessions with rewards.",
        "Gradual exposure to sounds, the carrier, and grooming.",
        "Play sessions that build confidence.",
        "Safe hiding spots and freedom to retreat.",
        "Slow, supervised introductions to other pets.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume forcing interactions helps — it can increase fear.",
        "Do not assume a kitten and a resident pet will bond instantly; introduce gradually and supervised.",
        "Do not punish fearful or hiding behaviour; build confidence with calm, positive experiences.",
        "Do not assume rough play is fine — redirect to toys so your kitten doesn't learn to bite hands.",
      ],
    },
    whenToContactVet: {
      heading: "When to ask a veterinarian or professional",
      bullets: [
        "About appropriate, safe introductions to other animals in your home.",
        "If your kitten shows persistent fear, hiding, or aggression — ask about positive, reward-based approaches.",
        "For referral to a qualified feline behaviour professional if needed.",
        "For any health concern, including the warning signs listed across this cluster.",
      ],
    },
    faqs: [
      {
        question: "How do I help my kitten become friendly and confident?",
        answer:
          "Gentle handling, positive exposure to everyday life, play, and letting your kitten set the pace all help. Avoid forcing interactions, and reward calm, confident behaviour.",
      },
      {
        question: "How should I introduce a kitten to my other pets?",
        answer:
          "Slowly and supervised, giving the kitten safe spaces and separate resources at first. Your veterinarian or a feline behaviour professional can guide a step-by-step introduction.",
      },
      {
        question: "My kitten bites during play — what should I do?",
        answer:
          "Redirect play to toys rather than hands so your kitten doesn't learn to bite people, and keep sessions positive. If biting is intense or persistent, ask your veterinarian or a behaviour professional.",
      },
    ],
    sources: [SRC_AVMA_SOCIALIZING, SRC_ASPCA_CAT_CARE, SRC_CORNELL_FELINE],
    related: [
      {
        title: "Routine",
        links: [
          { label: "Kitten sleep and play routine", href: "/kitten-care/kitten-sleep-and-play-routine" },
          { label: "First week with a kitten", href: "/kitten-care/first-week-with-a-kitten" },
          { label: "Litter box setup basics", href: "/kitten-care/litter-box-setup-basics" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Cat behavior", href: "/cats/behavior" },
          { label: "Cats hub", href: "/cats" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "kitten",
    slug: "litter-box-setup-basics",
    path: "/kitten-care/litter-box-setup-basics",
    title: "Litter Box Setup Basics for Kittens",
    description:
      "An educational overview of setting up litter boxes for a kitten: number, location, accessibility, and litter basics. Setup planning only — not for diagnosing urinary or behavioural problems.",
    pageHeading: "Litter Box Setup Basics",
    topicTag: "Litter setup",
    directAnswer:
      "Good litter box setup helps a kitten succeed from the start: enough boxes, in accessible quiet locations, kept clean. A common guideline is one box per cat plus one extra. This page covers setup basics only — it does not diagnose urinary or behavioural problems, which warrant veterinary attention.",
    sections: [
      {
        heading: "Setting up for success",
        bullets: [
          "Provide enough boxes — a common guideline is one per cat plus one extra.",
          "Choose low-sided boxes a small kitten can climb into easily.",
          "Place boxes in quiet, accessible spots, away from food and water and from loud appliances.",
          "On multiple floors, offer a box on each level while your kitten is small.",
          "Scoop daily and keep boxes clean; introduce your kitten to the box location early.",
        ],
      },
    ],
    checklist: {
      heading: "Litter setup checklist",
      bullets: [
        "Enough boxes (commonly one per cat plus one extra).",
        "Low-sided, easy-to-enter boxes for a small kitten.",
        "Quiet, accessible locations away from food, water, and noise.",
        "A box on each floor for multi-level homes.",
        "Daily scooping and regular cleaning.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume one box is enough, especially in multi-cat or multi-level homes.",
        "Do not assume a kitten can climb into a tall or covered box easily.",
        "Do not assume litter box accidents are only behavioural — they can signal a medical issue.",
        "Do not punish accidents; review setup and consult your vet if problems persist.",
      ],
    },
    whenToContactVet: {
      heading: "When to contact a veterinarian",
      intro: "Litter box changes can be an early health signal in cats.",
      bullets: [
        "If your kitten strains, cries, or makes frequent unproductive trips to the box — this can be an emergency, especially in males.",
        "If you notice blood in urine or stool, diarrhoea, or sudden changes in habits.",
        "If your kitten stops using the box despite a good setup.",
        "For any of the warning signs listed across this cluster.",
      ],
    },
    faqs: [
      {
        question: "How many litter boxes does my kitten need?",
        answer:
          "A common guideline is one box per cat plus one extra, placed in accessible, quiet locations. The right number depends on your home and number of cats.",
      },
      {
        question: "Where should I put the litter box?",
        answer:
          "In a quiet, accessible spot away from food and water and away from loud appliances. For multi-level homes, provide a box on each floor while your kitten is small.",
      },
      {
        question: "My kitten is straining or going outside the box — what should I do?",
        answer:
          "Straining or frequent unproductive trips can be a medical emergency, especially in male cats. Contact your veterinarian promptly rather than assuming it's behavioural.",
      },
    ],
    sources: [SRC_ASPCA_LITTER, SRC_ASPCA_CAT_CARE, SRC_CORNELL_FELINE],
    related: [
      {
        title: "Plan the first weeks",
        links: [
          { label: "First week with a kitten", href: "/kitten-care/first-week-with-a-kitten" },
          { label: "Kitten supplies checklist", href: "/kitten-care/kitten-supplies-checklist" },
          { label: "When to call a vet for a kitten", href: "/kitten-care/when-to-call-a-vet-for-a-kitten" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Cat behavior", href: "/cats/behavior" },
          { label: "Cat health hub", href: "/cats/health" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "kitten",
    slug: "kitten-sleep-and-play-routine",
    path: "/kitten-care/kitten-sleep-and-play-routine",
    title: "Kitten Sleep and Play Routine",
    description:
      "An educational overview of balancing sleep and play for a kitten: lots of rest, short interactive play sessions, and a calm routine that supports healthy development.",
    pageHeading: "Kitten Sleep and Play Routine",
    topicTag: "Sleep & play",
    directAnswer:
      "Kittens alternate bursts of energetic play with lots of sleep, and both are important for healthy development. Short, regular interactive play sessions plus plenty of undisturbed rest help your kitten thrive and settle. This page is general guidance; sudden lethargy or being hard to wake is different from normal sleep and warrants a vet call.",
    sections: [
      {
        heading: "Balance play and rest",
        bullets: [
          "Offer short, regular interactive play sessions with wand or toy games to channel energy.",
          "Redirect biting and pouncing onto toys rather than hands.",
          "Protect plenty of undisturbed sleep — kittens sleep a great deal.",
          "Provide cosy, safe resting spots and predictable quiet times.",
          "A play session before a meal and rest can help settle a kitten for the night.",
        ],
      },
    ],
    checklist: {
      heading: "Sleep and play checklist",
      bullets: [
        "Short, regular interactive play sessions.",
        "Toys to redirect biting and pouncing away from hands.",
        "Plenty of protected, undisturbed sleep.",
        "Cosy, safe resting spots.",
        "A predictable evening wind-down routine.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a very sleepy kitten is unwell — lots of sleep is normal.",
        "Do not assume rough play is harmless; redirect to toys so biting hands isn't learned.",
        "Do not assume night-time zoomies mean a problem; play and routine help settle energy.",
        "Do not ignore sudden lethargy or being hard to wake — that differs from normal sleep and needs a vet call.",
      ],
    },
    whenToContactVet: {
      heading: "When to contact a veterinarian",
      bullets: [
        "If your kitten is unusually lethargic, weak, or hard to wake — different from normal sleepiness.",
        "If play suddenly stops, or there are signs of pain, limping, or distress.",
        "If sleep changes come with not eating, vomiting, or diarrhoea.",
        "For any warning signs listed across this cluster.",
      ],
    },
    faqs: [
      {
        question: "Why is my kitten so active at night?",
        answer:
          "Kittens are naturally playful and can have energy bursts. Regular interactive play, especially in the evening, plus a consistent routine, helps channel energy and settle them. This is usually normal.",
      },
      {
        question: "How much do kittens sleep?",
        answer:
          "Kittens sleep a great deal, which supports growth. Protect undisturbed rest. Sudden, unusual lethargy or being hard to wake is different and warrants a veterinary call.",
      },
      {
        question: "My kitten bites during play — how do I stop it?",
        answer:
          "Redirect to wand or toy play rather than hands so your kitten doesn't learn to bite people. Keep sessions positive. If biting is intense or persistent, ask your veterinarian or a behaviour professional.",
      },
    ],
    sources: [SRC_ASPCA_CAT_CARE, SRC_AVMA_PETCARE],
    related: [
      {
        title: "Routine",
        links: [
          { label: "Kitten socialization basics", href: "/kitten-care/kitten-socialization-basics" },
          { label: "First week with a kitten", href: "/kitten-care/first-week-with-a-kitten" },
          { label: "Litter box setup basics", href: "/kitten-care/litter-box-setup-basics" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Cat behavior", href: "/cats/behavior" },
          { label: "Cats hub", href: "/cats" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "kitten",
    slug: "kitten-home-safety-checklist",
    path: "/kitten-care/kitten-home-safety-checklist",
    title: "Kitten Home Safety Checklist — Kitten-Proofing Basics",
    description:
      "A practical kitten-proofing checklist: securing toxic foods and plants, medications, cords and strings, small objects, and windows and balconies. Prevention-focused, with poison-control escalation.",
    pageHeading: "Kitten Home Safety Checklist",
    topicTag: "Home safety",
    directAnswer:
      "Kittens are curious climbers and explorers, so kitten-proofing prevents many emergencies. Secure toxic foods and plants (lilies are especially dangerous to cats), medications, chemicals, cords, and string-like items, and secure windows and balconies. If you think your kitten has eaten something dangerous, contact a veterinarian or animal poison-control line immediately — do not wait for symptoms.",
    sections: [
      {
        heading: "Kitten-proof the home",
        bullets: [
          "Keep lilies and other toxic plants out of the home entirely — lilies are extremely dangerous to cats.",
          "Store toxic foods (chocolate, onions, garlic, xylitol products) and medications securely.",
          "Secure cleaning products, antifreeze, and pesticides.",
          "Put away string, yarn, ribbon, hair ties, and small objects that can be swallowed.",
          "Secure windows and balconies with sturdy screens — cats can fall from heights.",
        ],
      },
    ],
    checklist: {
      heading: "Home safety checklist",
      bullets: [
        "Lilies and toxic plants removed from the home.",
        "Toxic foods, medications, and chemicals stored securely.",
        "String, ribbon, yarn, and small objects put away.",
        "Cords managed; appliances (washers, dryers) checked before use.",
        "Windows and balconies secured with sturdy screens.",
        "Vet and animal poison-control numbers saved.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a plant is cat-safe — many are toxic, and lilies are especially dangerous; check a reliable reference.",
        "Do not assume a height is out of reach; kittens climb and jump.",
        "Do not leave string or ribbon out — swallowed string can be life-threatening.",
        "Do not try to treat a suspected poisoning at home; contact a professional immediately.",
      ],
    },
    whenToContactVet: {
      heading: "When to contact a veterinarian or poison control",
      intro: "Do not wait for symptoms with a suspected exposure.",
      bullets: [
        "If your kitten may have eaten a toxic plant (especially a lily), food, or medication, contact a veterinarian or poison-control line immediately.",
        "If string, ribbon, or a small object is swallowed, treat it as an emergency.",
        "For a fall, injury, or choking, seek veterinary care right away.",
        "See our pet safety pages for poisoning warning signs and escalation.",
      ],
    },
    faqs: [
      {
        question: "Why are lilies so dangerous for kittens?",
        answer:
          "Lilies are highly toxic to cats, and even small exposures can be very serious. Keep lilies out of homes with cats entirely, and if exposure is suspected, contact a veterinarian or poison-control line immediately.",
      },
      {
        question: "What everyday items are risky for kittens?",
        answer:
          "String, ribbon, yarn, hair ties, small swallowable objects, toxic plants and foods, medications, chemicals, and open windows or balconies. Secure these and supervise your kitten.",
      },
      {
        question: "My kitten swallowed string — what should I do?",
        answer:
          "Swallowed string can be life-threatening and is an emergency. Do not pull on any visible string; contact a veterinarian or emergency clinic immediately.",
      },
    ],
    sources: [SRC_AVMA_HOUSEHOLD_HAZARDS, SRC_ASPCA_POISON, SRC_ASPCA_CAT_CARE],
    related: [
      {
        title: "Safety",
        links: [
          { label: "Home safety for pets", href: "/pet-safety/home-safety-for-pets" },
          { label: "Cat ate toxic food — what to do", href: "/pet-safety/cat-ate-toxic-food-what-to-do" },
          { label: "When to call a vet for a kitten", href: "/kitten-care/when-to-call-a-vet-for-a-kitten" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Cat food safety", href: "/cats/food" },
          { label: "Pet safety hub", href: "/pet-safety" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "kitten",
    slug: "when-to-call-a-vet-for-a-kitten",
    path: "/kitten-care/when-to-call-a-vet-for-a-kitten",
    title: "When to Call a Vet for a Kitten — Warning Signs",
    description:
      "A cautious educational guide to warning signs that mean a kitten needs prompt veterinary care. Recognition and escalation only — not diagnosis, treatment, or wait-and-see.",
    pageHeading: "When to Call a Vet for a Kitten",
    topicTag: "Warning signs",
    directAnswer:
      "Kittens can become seriously ill very quickly, and even a short time without eating can be dangerous. When something seems wrong, the safest action is usually to contact a veterinarian. This page lists warning signs to help you escalate — it does not diagnose or treat. When in doubt, call; do not wait and see with the signs below.",
    sections: [
      {
        heading: "How to act",
        bullets: [
          "If your kitten is in obvious distress, go to an emergency clinic without delay.",
          "If you are unsure, call — telephone triage helps the clinic prepare and helps you decide.",
          "For a suspected poisoning or ingestion (including string or a toxic plant), contact a vet or poison-control line immediately.",
          "Have your kitten's age and any history ready, and describe what you've seen and when.",
        ],
      },
    ],
    checklist: {
      heading: "Warning signs that warrant prompt veterinary contact",
      intro: "This list is not exhaustive, and signs can have many causes. Any of these warrants contacting a veterinarian — especially in a young kitten.",
      bullets: [
        "Refusal to eat or drink, or eating much less — kittens should not go long without food.",
        "Repeated vomiting or diarrhoea, lethargy, weakness, or collapse.",
        "Difficulty breathing, repeated sneezing with discharge, or pale, white, or blue gums.",
        "Straining in the litter box or frequent unproductive trips — can be an emergency, especially in males.",
        "Seizures, suspected poisoning, swallowed string, or any injury or fall.",
        "Signs of severe pain or rapid worsening of any kind.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not adopt a \"wait and see\" approach with the signs above — kittens can deteriorate fast.",
        "Do not give human medications or home remedies, which can be dangerous.",
        "Do not try to diagnose the cause from this page — that is for your veterinarian.",
        "Do not assume a kitten that briefly perks up is out of danger.",
      ],
    },
    whenToContactVet: {
      heading: "When to contact a veterinarian or emergency clinic",
      intro: "When in doubt, call. Do not delay for the signs above.",
      bullets: [
        "Contact a clinic immediately for any warning sign listed here.",
        "Contact a clinic any time you are unsure — calling is always reasonable.",
        "If your regular vet is closed, call a 24-hour or emergency animal hospital.",
        "For suspected poisoning, also consider an animal poison-control line.",
      ],
    },
    faqs: [
      {
        question: "My kitten won't eat — is that an emergency?",
        answer:
          "Kittens should not go long without eating, so refusal to eat warrants prompt veterinary contact, particularly if paired with lethargy, vomiting, or other symptoms. When in doubt, call.",
      },
      {
        question: "Should I wait to see if my kitten improves?",
        answer:
          "Not with the warning signs on this page. Kittens can deteriorate quickly, so it's safer to call a veterinarian promptly. Telephone triage can help you decide what to do.",
      },
      {
        question: "What should I tell the clinic when I call?",
        answer:
          "Your kitten's age, what you've observed and when it started, any possible ingestion (including string or plants), and whether your kitten is alert and breathing normally.",
      },
    ],
    sources: [SRC_AVMA_FIRST_AID, SRC_ASPCA_POISON, SRC_MERCK, SRC_CORNELL_FELINE],
    related: [
      {
        title: "Escalate safely",
        links: [
          { label: "When to go to the emergency vet", href: "/pet-safety/when-to-go-to-emergency-vet" },
          { label: "Cat ate toxic food — what to do", href: "/pet-safety/cat-ate-toxic-food-what-to-do" },
          { label: "Kitten home safety checklist", href: "/kitten-care/kitten-home-safety-checklist" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Cat health hub", href: "/cats/health" },
          { label: "Vet care hub", href: "/vet-care" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
];

export const EARLY_CARE_ARTICLES: EarlyCareArticle[] = [
  ...PUPPY_ARTICLES,
  ...KITTEN_ARTICLES,
];

export function getEarlyCareArticle(
  species: EarlyCareSpecies,
  slug: string
): EarlyCareArticle | undefined {
  return EARLY_CARE_ARTICLES.find(
    (a) => a.species === species && a.slug === slug
  );
}
