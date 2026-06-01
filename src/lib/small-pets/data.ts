import type { SourceLink } from "@/lib/educational/types";

const PUBLISHED = "2026-06-01";
const MODIFIED = "2026-06-01";

/**
 * Core safety principle shown prominently near the top of every page in the
 * Small Pets Care cluster. This is a responsible-care PLANNING cluster — not
 * a veterinary diagnosis, treatment, dosage, or schedule cluster. Keep this
 * text intact.
 */
export const SMALL_PET_DISCLAIMER =
  "This content is educational and does not replace professional veterinary advice, diagnosis, or treatment. Small pets can become seriously ill quickly. For refusal to eat, breathing difficulty, severe diarrhoea, injury, collapse, suspected poisoning, severe pain, rapid worsening, or major behaviour change, contact a qualified veterinarian or emergency animal clinic immediately.";

export const SMALL_PET_SOURCE_NOTE =
  "Authoritative references used for general educational context. External links open in a new tab and these organisations do not endorse FaunaHub. Housing, diet, and care needs vary by species, age, health, and local climate, and welfare recommendations differ by country and organisation — confirm specifics with a qualified small-animal or exotic-pet veterinarian.";

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

const SRC_ASPCA_POISON: SourceLink = {
  label: "ASPCA Animal Poison Control Center",
  url: "https://www.aspca.org/pet-care/aspca-poison-control",
  type: "veterinary",
  note: "24/7 emergency animal-poisoning helpline (US)",
};

const SRC_MERCK_RABBITS: SourceLink = {
  label: "Merck Veterinary Manual — Rabbits",
  url: "https://www.merckvetmanual.com/all-other-pets/rabbits",
  type: "reference",
  note: "Veterinary reference on rabbit care and health",
};

const SRC_MERCK_GUINEA: SourceLink = {
  label: "Merck Veterinary Manual — Guinea Pigs",
  url: "https://www.merckvetmanual.com/all-other-pets/guinea-pigs",
  type: "reference",
  note: "Veterinary reference on guinea pig care and health",
};

const SRC_MERCK_HAMSTERS: SourceLink = {
  label: "Merck Veterinary Manual — Hamsters",
  url: "https://www.merckvetmanual.com/all-other-pets/hamsters",
  type: "reference",
  note: "Veterinary reference on hamster care and health",
};

const SRC_RSPCA_RABBITS: SourceLink = {
  label: "RSPCA — Rabbit Care",
  url: "https://www.rspca.org.uk/adviceandwelfare/pets/rabbits",
  type: "animal-welfare",
  note: "Welfare-based rabbit care guidance (UK)",
};

const SRC_RSPCA_GUINEA: SourceLink = {
  label: "RSPCA — Guinea Pig Care",
  url: "https://www.rspca.org.uk/adviceandwelfare/pets/rodents/guineapigs",
  type: "animal-welfare",
  note: "Welfare-based guinea pig care guidance (UK)",
};

const SRC_RSPCA_HAMSTERS: SourceLink = {
  label: "RSPCA — Hamster Care",
  url: "https://www.rspca.org.uk/adviceandwelfare/pets/rodents/hamsters",
  type: "animal-welfare",
  note: "Welfare-based hamster care guidance (UK)",
};

const SRC_PDSA_RABBITS: SourceLink = {
  label: "PDSA — Looking After Rabbits",
  url: "https://www.pdsa.org.uk/pet-help-and-advice/looking-after-your-pet/rabbits",
  type: "animal-welfare",
  note: "Veterinary-charity rabbit care guidance (UK)",
};

const SRC_HRS: SourceLink = {
  label: "House Rabbit Society — Rabbit Care",
  url: "https://rabbit.org/care/",
  type: "animal-welfare",
  note: "Rabbit-welfare organisation care resources",
};

// ─── TYPES ─────────────────────────────────────────────────────────────────

export type SmallPetSpecies = "rabbit" | "guinea-pig" | "hamster";

export interface SmallPetSection {
  heading: string;
  intro?: string;
  bullets: string[];
}

export interface SmallPetFAQ {
  question: string;
  answer: string;
}

export interface SmallPetRelatedGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface SmallPetArticle {
  species: SmallPetSpecies;
  slug: string;
  /** Always "/small-pets/<slug>" */
  path: string;
  title: string;
  description: string;
  pageHeading: string;
  topicTag: string;
  directAnswer: string;
  sections: SmallPetSection[];
  /** Required practical checklist */
  checklist: SmallPetSection;
  /** Required: what NOT to assume */
  whatNotToAssume: SmallPetSection;
  /** Required: when to contact a veterinarian */
  whenToContactVet: SmallPetSection;
  faqs: SmallPetFAQ[];
  sources: SourceLink[];
  related: SmallPetRelatedGroup[];
  publishedTime: string;
  modifiedTime: string;
}

export const SPECIES_LABEL: Record<SmallPetSpecies, string> = {
  rabbit: "Rabbit",
  "guinea-pig": "Guinea Pig",
  hamster: "Hamster",
};

export const SPECIES_ANIMAL: Record<SmallPetSpecies, string> = {
  rabbit: "rabbit",
  "guinea-pig": "guinea pig",
  hamster: "hamster",
};

const RABBIT_WHEN_TO_VET: SmallPetSection = {
  heading: "When to contact a veterinarian",
  intro:
    "Rabbits hide illness and can deteriorate quickly. A rabbit that stops eating or stops passing droppings is an emergency. Do not use this page to diagnose — find a rabbit-savvy (exotic) veterinarian before you need one.",
  bullets: [
    "Not eating, not drinking, or no droppings — treat as an urgent emergency.",
    "Laboured breathing, a hunched posture, teeth grinding from pain, or reluctance to move.",
    "Diarrhoea, a soiled rear, or — in warm weather — any sign of flystrike.",
    "Head tilt, weakness, collapse, injury, or suspected poisoning.",
    "Any rapid change at all — rabbits decline fast, so call promptly.",
  ],
};

const GUINEA_WHEN_TO_VET: SmallPetSection = {
  heading: "When to contact a veterinarian",
  intro:
    "Guinea pigs need near-constant food intake and hide illness well. Do not use this page to diagnose — find a guinea-pig-savvy veterinarian in advance.",
  bullets: [
    "Not eating or drinking — guinea pigs should eat almost constantly, so this is urgent.",
    "Laboured or noisy breathing, or discharge from the eyes or nose.",
    "Severe or watery diarrhoea, or a soiled rear.",
    "Weakness, collapse, injury, or suspected poisoning.",
    "Any rapid worsening — contact a veterinarian promptly.",
  ],
};

const HAMSTER_WHEN_TO_VET: SmallPetSection = {
  heading: "When to contact a veterinarian",
  intro:
    "Hamsters are small and can decline quickly, and they hide illness. Do not use this page to diagnose — know a small-animal/exotic veterinarian in advance.",
  bullets: [
    "Not eating or drinking, or sudden weight loss.",
    "Diarrhoea or a wet, soiled rear end — a serious sign that needs prompt veterinary care.",
    "Laboured breathing, wheezing, or discharge from the eyes or nose.",
    "Lethargy, collapse, injury, or suspected poisoning.",
    "Any rapid change — hamsters are small and decline quickly, so call promptly.",
  ],
};

// ─── RABBIT ARTICLES ───────────────────────────────────────────────────────

export const RABBIT_ARTICLES: SmallPetArticle[] = [
  {
    species: "rabbit",
    slug: "rabbit-care",
    path: "/small-pets/rabbit-care",
    title: "Rabbit Care — A Responsible Owner's Overview",
    description:
      "An educational overview of responsible rabbit care: space, companionship, a hay-based diet, enrichment, and exotic-vet access. Rabbits are not low-maintenance — plan carefully.",
    pageHeading: "Rabbit Care",
    topicTag: "Rabbit · Overview",
    directAnswer:
      "Rabbits are intelligent, social, long-lived animals that need a lot of space, companionship, a hay-based diet, daily enrichment, and access to a rabbit-savvy veterinarian. They are not low-effort or low-cost pets. This page is a responsible-care overview; it does not diagnose or treat, and a rabbit that seems unwell needs a vet quickly.",
    sections: [
      {
        heading: "What responsible rabbit care involves",
        bullets: [
          "Plenty of space to move, stretch up, and exercise daily — far more than a typical pet-store hutch.",
          "Companionship: rabbits are social and often do best in compatible bonded pairs; ask a rescue about bonding and neutering.",
          "A diet based mainly on unlimited grass hay, with fresh greens and a small amount of pellets.",
          "Daily enrichment and safe things to chew — chewing is a constant need, not optional.",
          "Access to a veterinarian experienced with rabbits (an exotic or rabbit-savvy vet).",
        ],
      },
      {
        heading: "Why rabbits are a serious commitment",
        bullets: [
          "Many rabbits live around 8–12 years, so this is a long commitment.",
          "They need rabbit-proofed space and supervision; they chew cables and furniture.",
          "Health problems can develop and worsen quickly, and care costs add up.",
          "Requirements vary by country, rescue, and veterinarian — check current local welfare guidance.",
        ],
      },
    ],
    checklist: {
      heading: "Responsible-care checklist",
      bullets: [
        "Generous space for daily exercise, beyond a small hutch or cage.",
        "Plan for companionship and ask a rescue about bonding and neutering.",
        "Unlimited grass hay available at all times.",
        "Daily enrichment and safe chew options.",
        "A rabbit-savvy veterinarian identified before you need one.",
        "A realistic budget for housing, food, and veterinary care.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume rabbits are low-maintenance or an easy first pet — they need daily care and skilled vet access.",
        "Do not assume a standard pet-store hutch provides enough space.",
        "Do not assume a rabbit is fine because it is quiet — rabbits hide illness.",
        "Do not assume any vet treats rabbits; confirm experience with rabbits in advance.",
      ],
    },
    whenToContactVet: RABBIT_WHEN_TO_VET,
    faqs: [
      {
        question: "Are rabbits good low-maintenance pets?",
        answer:
          "No. Rabbits need substantial space, companionship, a carefully managed hay-based diet, daily enrichment, and specialised veterinary care. They are a serious, long-term commitment, not a low-effort pet.",
      },
      {
        question: "Do rabbits need a companion?",
        answer:
          "Rabbits are social and often do best with a compatible, bonded companion. Bonding and neutering should be guided by a rescue or veterinarian. Some situations differ, so seek experienced advice.",
      },
      {
        question: "How long do rabbits live?",
        answer:
          "Many pet rabbits live around 8–12 years with good care. Plan for a long commitment, including the cost and time of housing, diet, enrichment, and veterinary care over that span.",
      },
    ],
    sources: [SRC_RSPCA_RABBITS, SRC_MERCK_RABBITS, SRC_PDSA_RABBITS],
    related: [
      {
        title: "Rabbit care",
        links: [
          { label: "Rabbit housing setup", href: "/small-pets/rabbit-housing-setup" },
          { label: "Rabbit feeding basics", href: "/small-pets/rabbit-feeding-basics" },
          { label: "Rabbit warning signs", href: "/small-pets/rabbit-warning-signs" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Rabbit animal profile", href: "/animals/rabbit" },
          { label: "How much does a rabbit cost?", href: "/small-pets/rabbits/how-much-does-a-rabbit-cost" },
          { label: "Small pets care hub", href: "/small-pets/care" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "rabbit",
    slug: "rabbit-housing-setup",
    path: "/small-pets/rabbit-housing-setup",
    title: "Rabbit Housing Setup — Space, Safety, and Enrichment",
    description:
      "An educational guide to setting up rabbit housing: generous space, secure rabbit-proofing, hiding spots, litter areas, and safe chew enrichment. Bigger is better; check local welfare guidance.",
    pageHeading: "Rabbit Housing Setup",
    topicTag: "Rabbit · Housing",
    directAnswer:
      "Rabbits need far more space than a typical hutch — room to run, stretch fully upright, and hop, with constant access to an exercise area. Bigger is always better. This page covers setup principles; exact minimum sizes vary by country and organisation, so check current local welfare guidance rather than relying on a single number.",
    sections: [
      {
        heading: "Space and layout",
        bullets: [
          "Provide as much space as you can — a large enclosure connected to a secure exercise area, available daily.",
          "Rabbits should be able to take several consecutive hops, stretch fully upright, and lie out flat.",
          "Recommended minimum sizes vary by organisation and jurisdiction — check current local welfare guidance; bigger is better.",
          "Include hiding spots, a litter area, and separate spots for hay, food, and water.",
          "Use solid, non-slip flooring; avoid wire floors that hurt rabbit feet.",
        ],
      },
      {
        heading: "Safety and enrichment",
        bullets: [
          "Rabbit-proof any free-roam area: protect cables, baseboards, and toxic plants.",
          "Offer safe things to chew and forage for — chewing is a constant need.",
          "Keep housing out of direct sun and extreme temperatures; rabbits are sensitive to heat.",
          "Provide platforms, tunnels, and digging opportunities for enrichment.",
          "Keep the area predator-safe and secure, indoors or out.",
        ],
      },
    ],
    checklist: {
      heading: "Housing checklist",
      bullets: [
        "Generous enclosure plus daily secure exercise space.",
        "Solid, non-slip flooring (no wire floors).",
        "Hiding spots, litter area, and separate hay/food/water stations.",
        "Cables, toxic plants, and hazards removed from roam areas.",
        "Safe chew and forage enrichment.",
        "Protection from heat, cold, damp, and predators.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a pet-store hutch is large enough — most are too small on their own.",
        "Do not assume one cage size is legally required everywhere; rules and recommendations vary.",
        "Do not assume wire floors are fine — they can injure rabbit feet.",
        "Do not assume a rabbit-proofed room is safe without checking for cables and toxic plants.",
      ],
    },
    whenToContactVet: RABBIT_WHEN_TO_VET,
    faqs: [
      {
        question: "How big should a rabbit's housing be?",
        answer:
          "As big as possible, with daily access to a secure exercise area. Recommended minimums vary by country and welfare organisation, so check current local guidance. The enclosure alone is rarely enough — rabbits need room to exercise every day.",
      },
      {
        question: "Can rabbits live in a standard hutch?",
        answer:
          "A typical pet-store hutch is usually too small on its own. Rabbits need much more space and daily exercise. Many welfare organisations consider small hutches inadequate; provide a larger setup and exercise area.",
      },
      {
        question: "Indoor or outdoor housing?",
        answer:
          "Both can work with the right setup. Indoors needs rabbit-proofing; outdoors needs protection from predators, heat, cold, and damp. Either way, provide space, enrichment, and a constant exercise area.",
      },
    ],
    sources: [SRC_RSPCA_RABBITS, SRC_PDSA_RABBITS],
    related: [
      {
        title: "Rabbit care",
        links: [
          { label: "Rabbit care overview", href: "/small-pets/rabbit-care" },
          { label: "Rabbit feeding basics", href: "/small-pets/rabbit-feeding-basics" },
          { label: "Rabbit first-week checklist", href: "/small-pets/rabbit-first-week-checklist" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Home safety for pets", href: "/pet-safety/home-safety-for-pets" },
          { label: "Small pets care hub", href: "/small-pets/care" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "rabbit",
    slug: "rabbit-feeding-basics",
    path: "/small-pets/rabbit-feeding-basics",
    title: "Rabbit Feeding Basics — A Hay-First Diet",
    description:
      "An educational overview of a rabbit's hay-first diet: unlimited grass hay, fresh greens, limited pellets, and constant fresh water. Refusal to eat is an emergency. No exact quantities.",
    pageHeading: "Rabbit Feeding Basics",
    topicTag: "Rabbit · Feeding",
    directAnswer:
      "A rabbit's diet should be based mainly on unlimited grass hay, with a portion of suitable fresh greens, a small measured amount of plain pellets, and constant fresh water. Hay keeps the gut moving and teeth worn down. This page explains the principles, not exact quantities — and a rabbit that stops eating needs a veterinarian immediately.",
    sections: [
      {
        heading: "The hay-first principle",
        bullets: [
          "Grass hay (such as timothy or meadow hay) should be available at all times and make up the majority of the diet.",
          "Offer a variety of suitable fresh leafy greens daily, introduced gradually.",
          "Plain pellets are a small part of the diet, not the main food; follow the pack and your vet's guidance on amount.",
          "Provide constant access to clean, fresh water.",
          "Avoid sugary treats, seed/muesli mixes, and most human foods — ask your vet what is appropriate.",
        ],
      },
    ],
    checklist: {
      heading: "Feeding checklist",
      bullets: [
        "Unlimited grass hay available at all times.",
        "A daily variety of suitable fresh greens, introduced slowly.",
        "Only a small amount of plain pellets.",
        "Constant clean, fresh water.",
        "No sugary treats or muesli-style mixes.",
        "Any diet change made gradually, with vet guidance if unsure.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume pellets or muesli mixes should be the main food — hay should be.",
        "Do not assume all greens are safe; check suitability and introduce new foods gradually.",
        "Do not assume reduced eating is minor — a rabbit that stops eating is an emergency.",
        "Do not give exact at-home diet quantities as a rule; needs vary, so confirm with your vet.",
      ],
    },
    whenToContactVet: {
      heading: "When to contact a veterinarian",
      intro: "Appetite and droppings are critical signals in rabbits.",
      bullets: [
        "If your rabbit stops eating or stops producing droppings — this is an emergency.",
        "If there is diarrhoea, a soiled rear, or a sudden change in appetite.",
        "If you suspect dental problems (drooling, dropping food, weight loss) — these need a vet, not home treatment.",
        "Before making a major diet change, especially for a young, senior, or unwell rabbit.",
      ],
    },
    faqs: [
      {
        question: "What should rabbits eat most of?",
        answer:
          "Grass hay should make up the majority of a rabbit's diet and be available at all times. It supports gut movement and dental wear. Fresh greens, a little plain pellet, and constant water complete the diet.",
      },
      {
        question: "How much should I feed my rabbit?",
        answer:
          "Hay should be unlimited; greens and pellets are smaller portions that vary by rabbit. Rather than a universal number, follow the pellet pack guidance and your veterinarian's advice for your individual rabbit.",
      },
      {
        question: "My rabbit stopped eating — what should I do?",
        answer:
          "Treat it as an emergency and contact a rabbit-savvy veterinarian immediately. A rabbit that stops eating or passing droppings can deteriorate very quickly. Do not wait or attempt home treatment.",
      },
    ],
    sources: [SRC_RSPCA_RABBITS, SRC_MERCK_RABBITS, SRC_HRS],
    related: [
      {
        title: "Rabbit care",
        links: [
          { label: "Rabbit care overview", href: "/small-pets/rabbit-care" },
          { label: "Rabbit warning signs", href: "/small-pets/rabbit-warning-signs" },
          { label: "Rabbit housing setup", href: "/small-pets/rabbit-housing-setup" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Pet nutrition hub", href: "/pet-nutrition" },
          { label: "Small pets care hub", href: "/small-pets/care" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "rabbit",
    slug: "rabbit-first-week-checklist",
    path: "/small-pets/rabbit-first-week-checklist",
    title: "Rabbit First-Week Checklist — A Calm Start",
    description:
      "A calm planning checklist for a rabbit's first week: a quiet secure setup, unlimited hay, gentle handling at the rabbit's pace, and a rabbit-savvy vet identified in advance.",
    pageHeading: "Rabbit First-Week Checklist",
    topicTag: "Rabbit · First week",
    directAnswer:
      "A rabbit's first week is about a calm, secure setup and letting your rabbit settle at its own pace. Keep things quiet, provide unlimited hay and fresh water, and watch eating and droppings closely. This page is planning guidance; identify a rabbit-savvy veterinarian early, and contact one promptly if anything seems wrong.",
    sections: [
      {
        heading: "Settle in gently",
        bullets: [
          "Set up secure housing with hiding spots before your rabbit arrives.",
          "Provide unlimited grass hay, fresh water, and the food it has been eating to start.",
          "Keep the first days calm and quiet; let your rabbit explore and approach you at its own pace.",
          "Sit nearby and let your rabbit come to you rather than chasing or grabbing.",
          "Watch eating, drinking, and droppings closely — changes can matter quickly.",
        ],
      },
    ],
    checklist: {
      heading: "First-week checklist",
      bullets: [
        "Secure housing with hiding spots, set up before arrival.",
        "Unlimited hay, fresh water, and the current food to start.",
        "A calm, quiet environment for settling in.",
        "Gentle, low-pressure interaction at the rabbit's pace.",
        "Close monitoring of eating, drinking, and droppings.",
        "A rabbit-savvy veterinarian identified, and an early check-up considered.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a new rabbit wants handling right away — let it settle first.",
        "Do not assume hiding means something is wrong; rabbits are prey animals and need time.",
        "Do not assume any vet sees rabbits — line up a rabbit-savvy vet in advance.",
        "Do not ignore reduced eating or droppings — contact a vet promptly.",
      ],
    },
    whenToContactVet: RABBIT_WHEN_TO_VET,
    faqs: [
      {
        question: "How do I help a new rabbit settle in?",
        answer:
          "Keep things calm and quiet, provide secure housing with hiding spots, offer unlimited hay and water, and let your rabbit approach you at its own pace. Avoid chasing or grabbing in the early days.",
      },
      {
        question: "Should I take a new rabbit to the vet right away?",
        answer:
          "Identify a rabbit-savvy veterinarian early and consider an initial check-up; go sooner if anything seems wrong. Reduced eating or droppings warrants prompt veterinary contact.",
      },
      {
        question: "My new rabbit is hiding and barely eating — is that normal?",
        answer:
          "Some hiding is normal for a prey animal settling in, but reduced eating or droppings is a concern in rabbits. If your rabbit isn't eating, contact a rabbit-savvy veterinarian promptly.",
      },
    ],
    sources: [SRC_RSPCA_RABBITS, SRC_PDSA_RABBITS, SRC_AVMA_PETCARE],
    related: [
      {
        title: "Rabbit care",
        links: [
          { label: "Rabbit care overview", href: "/small-pets/rabbit-care" },
          { label: "Rabbit housing setup", href: "/small-pets/rabbit-housing-setup" },
          { label: "Rabbit warning signs", href: "/small-pets/rabbit-warning-signs" },
        ],
      },
      {
        title: "Plan",
        links: [
          { label: "Small pet setup checklist", href: "/tools/small-pet-setup-checklist" },
          { label: "Pet cost calculator", href: "/tools/pet-cost-calculator" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "rabbit",
    slug: "rabbit-warning-signs",
    path: "/small-pets/rabbit-warning-signs",
    title: "Rabbit Warning Signs — When to See a Vet",
    description:
      "A cautious educational guide to rabbit warning signs that need urgent veterinary care — not eating, no droppings, breathing trouble, or collapse. Recognition and escalation only.",
    pageHeading: "Rabbit Warning Signs",
    topicTag: "Rabbit · Warning signs",
    directAnswer:
      "Rabbits hide illness and can decline within hours, so recognising warning signs and acting fast matters. The most important rule: a rabbit that stops eating or stops passing droppings is an emergency. This page helps you recognise and escalate — it does not diagnose or treat. Know a rabbit-savvy veterinarian before you need one.",
    sections: [
      {
        heading: "How to act",
        bullets: [
          "If your rabbit stops eating or passing droppings, contact a rabbit-savvy vet immediately — do not wait.",
          "If you are unsure, call; rabbits deteriorate quickly and telephone triage helps.",
          "Have your rabbit's normal eating and droppings in mind so you notice changes early.",
          "Keep an exotic/rabbit vet and an emergency option saved in advance.",
        ],
      },
    ],
    checklist: {
      heading: "Warning signs that warrant urgent veterinary contact",
      intro: "This list is not exhaustive, and signs can have many causes. Any of these warrants prompt veterinary contact.",
      bullets: [
        "Not eating, not drinking, or no droppings — an emergency.",
        "Laboured breathing, a hunched posture, or teeth grinding from pain.",
        "Diarrhoea, a soiled rear, or signs of flystrike in warm weather.",
        "Head tilt, loss of balance, weakness, or collapse.",
        "Injury, suspected poisoning, or any rapid worsening.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not adopt a \"wait and see\" approach — rabbits can decline within hours.",
        "Do not try to diagnose or treat at home; many remedies are unsafe for rabbits.",
        "Do not assume a quiet rabbit is well — they hide illness.",
        "Do not give any medication unless a veterinarian prescribes it.",
      ],
    },
    whenToContactVet: RABBIT_WHEN_TO_VET,
    faqs: [
      {
        question: "Why is a rabbit not eating so serious?",
        answer:
          "A rabbit's digestive system needs near-constant movement. When a rabbit stops eating or passing droppings, the gut can slow dangerously, which is a life-threatening emergency. Contact a rabbit-savvy vet immediately.",
      },
      {
        question: "Can I treat my rabbit at home first?",
        answer:
          "No. Home treatment is not appropriate for these signs, and many remedies are unsafe for rabbits. Contact a rabbit-savvy veterinarian rather than waiting or trying remedies.",
      },
      {
        question: "How do I find a rabbit vet quickly?",
        answer:
          "Identify a rabbit-savvy (exotic) veterinarian before you need one, and save an emergency option. In a crisis, call ahead so the clinic can prepare.",
      },
    ],
    sources: [SRC_MERCK_RABBITS, SRC_RSPCA_RABBITS, SRC_ASPCA_POISON, SRC_AVMA_PETCARE],
    related: [
      {
        title: "Rabbit care",
        links: [
          { label: "Rabbit care overview", href: "/small-pets/rabbit-care" },
          { label: "Rabbit feeding basics", href: "/small-pets/rabbit-feeding-basics" },
          { label: "Rabbit first-week checklist", href: "/small-pets/rabbit-first-week-checklist" },
        ],
      },
      {
        title: "Escalate safely",
        links: [
          { label: "When to go to the emergency vet", href: "/pet-safety/when-to-go-to-emergency-vet" },
          { label: "Vet care hub", href: "/vet-care" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
];

// ─── GUINEA PIG ARTICLES ───────────────────────────────────────────────────

export const GUINEA_PIG_ARTICLES: SmallPetArticle[] = [
  {
    species: "guinea-pig",
    slug: "guinea-pig-care",
    path: "/small-pets/guinea-pig-care",
    title: "Guinea Pig Care — A Responsible Owner's Overview",
    description:
      "An educational overview of responsible guinea pig care: companionship, space, a hay-and-vitamin-C diet, gentle handling, and vet access. Guinea pigs are social and not low-maintenance.",
    pageHeading: "Guinea Pig Care",
    topicTag: "Guinea pig · Overview",
    directAnswer:
      "Guinea pigs are highly social, vocal animals that need companionship, plenty of floor space, a hay-based diet with a dietary source of vitamin C, gentle handling, and access to a knowledgeable veterinarian. They are not low-effort pets. This page is a responsible-care overview; it does not diagnose or treat, and a guinea pig that isn't eating needs a vet urgently.",
    sections: [
      {
        heading: "What responsible guinea pig care involves",
        bullets: [
          "Companionship: guinea pigs are social and usually need at least one compatible guinea-pig companion.",
          "Plenty of floor space — far more than small pet-store cages provide.",
          "A diet based on unlimited grass hay, fresh greens, and a dietary source of vitamin C.",
          "Gentle, supportive handling and a calm environment; guinea pigs are easily startled.",
          "A veterinarian experienced with guinea pigs, identified in advance.",
        ],
      },
      {
        heading: "Why guinea pigs are a real commitment",
        bullets: [
          "Many guinea pigs live around 5–7 years, so plan for the long term.",
          "They need daily fresh food, cleaning, and interaction.",
          "Guinea pigs cannot make their own vitamin C and need a reliable dietary source — ask your vet.",
          "Requirements vary by country, rescue, and veterinarian — check current local welfare guidance.",
        ],
      },
    ],
    checklist: {
      heading: "Responsible-care checklist",
      bullets: [
        "Plan for compatible companionship.",
        "Generous floor space, larger than typical pet-store cages.",
        "Unlimited grass hay plus fresh greens and a vitamin C source.",
        "Gentle, supportive handling in a calm setting.",
        "A guinea-pig-savvy veterinarian identified early.",
        "A realistic budget for housing, food, and vet care.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume guinea pigs are low-maintenance or an easy starter pet.",
        "Do not assume one guinea pig is fine alone — they are social and usually need company.",
        "Do not assume a pet-store cage is big enough; most are too small.",
        "Do not start vitamin C supplements on your own — ask your veterinarian what is appropriate.",
      ],
    },
    whenToContactVet: GUINEA_WHEN_TO_VET,
    faqs: [
      {
        question: "Can guinea pigs live alone?",
        answer:
          "Guinea pigs are highly social and usually do best with at least one compatible companion. Solitary housing can harm welfare. Ask a rescue or veterinarian about appropriate, compatible pairings.",
      },
      {
        question: "Do guinea pigs really need vitamin C?",
        answer:
          "Yes. Guinea pigs cannot make their own vitamin C and need a reliable dietary source. How to provide it is best confirmed with your veterinarian; do not start supplements on your own without guidance.",
      },
      {
        question: "Are guinea pigs low-maintenance?",
        answer:
          "No. They need companionship, space, daily fresh food and cleaning, gentle handling, and specialised veterinary care. They are a meaningful, multi-year commitment.",
      },
    ],
    sources: [SRC_RSPCA_GUINEA, SRC_MERCK_GUINEA],
    related: [
      {
        title: "Guinea pig care",
        links: [
          { label: "Guinea pig housing setup", href: "/small-pets/guinea-pig-housing-setup" },
          { label: "Guinea pig feeding basics", href: "/small-pets/guinea-pig-feeding-basics" },
          { label: "Guinea pig warning signs", href: "/small-pets/guinea-pig-warning-signs" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Guinea pig animal profile", href: "/animals/guinea-pig" },
          { label: "How much does a guinea pig cost?", href: "/small-pets/guinea-pigs/how-much-does-a-guinea-pig-cost" },
          { label: "Small pets care hub", href: "/small-pets/care" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "guinea-pig",
    slug: "guinea-pig-housing-setup",
    path: "/small-pets/guinea-pig-housing-setup",
    title: "Guinea Pig Housing Setup — Space and Comfort",
    description:
      "An educational guide to guinea pig housing: generous floor space, solid flooring, hideaways, and a calm, temperature-stable location. Bigger is better; check current welfare guidance.",
    pageHeading: "Guinea Pig Housing Setup",
    topicTag: "Guinea pig · Housing",
    directAnswer:
      "Guinea pigs need plenty of flat floor space to run and popcorn, with solid flooring, multiple hideaways, and separate areas for hay, food, and water. Bigger is always better. Exact minimum sizes vary by organisation and country, so check current local welfare guidance rather than relying on a single figure.",
    sections: [
      {
        heading: "Space and layout",
        bullets: [
          "Provide generous, flat floor space — guinea pigs need room to run, not climb.",
          "Recommended minimums vary by organisation and jurisdiction — check current welfare guidance; bigger is better.",
          "Use solid, non-slip flooring with soft, absorbent bedding; avoid wire floors.",
          "Provide at least one hideaway per guinea pig, plus separate hay, food, and water stations.",
          "House companions together with enough space and resources to avoid competition.",
        ],
      },
      {
        heading: "Comfort and safety",
        bullets: [
          "Keep housing in a calm spot, out of direct sun and away from temperature extremes and draughts.",
          "Guinea pigs are sensitive to heat — avoid hot rooms and provide shade and ventilation.",
          "Spot-clean daily and fully clean regularly to keep bedding dry.",
          "Avoid cedar and pine shavings; ask about safe bedding options.",
          "Keep the area secure from other pets that could frighten or harm them.",
        ],
      },
    ],
    checklist: {
      heading: "Housing checklist",
      bullets: [
        "Generous flat floor space, larger than typical cages.",
        "Solid, non-slip flooring with soft, absorbent bedding.",
        "A hideaway per guinea pig and separate hay/food/water stations.",
        "Calm, shaded, temperature-stable location.",
        "Safe bedding (avoid cedar/pine shavings).",
        "Security from other household pets.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a small pet-store cage is adequate — most are too small.",
        "Do not assume a single cage size is legally required everywhere; rules and recommendations vary.",
        "Do not assume guinea pigs climb or use multi-level cages like rats — they need floor space.",
        "Do not assume all bedding is safe; avoid cedar and pine shavings.",
      ],
    },
    whenToContactVet: GUINEA_WHEN_TO_VET,
    faqs: [
      {
        question: "How much space do guinea pigs need?",
        answer:
          "As much flat floor space as possible — they need room to run, not climb. Recommended minimums vary by welfare organisation and country, so check current local guidance. More space supports better welfare, especially for companions.",
      },
      {
        question: "What bedding is safe for guinea pigs?",
        answer:
          "Use soft, absorbent, dust-low bedding and keep it dry. Avoid cedar and pine shavings, which can be irritating. Ask your veterinarian or a rescue about suitable options for your setup.",
      },
      {
        question: "Can guinea pigs overheat?",
        answer:
          "Yes — guinea pigs are sensitive to heat. Keep housing out of direct sun, away from temperature extremes, and well ventilated. In warm weather, take extra care and ask your vet about keeping them cool safely.",
      },
    ],
    sources: [SRC_RSPCA_GUINEA, SRC_MERCK_GUINEA],
    related: [
      {
        title: "Guinea pig care",
        links: [
          { label: "Guinea pig care overview", href: "/small-pets/guinea-pig-care" },
          { label: "Guinea pig feeding basics", href: "/small-pets/guinea-pig-feeding-basics" },
          { label: "Guinea pig first-week checklist", href: "/small-pets/guinea-pig-first-week-checklist" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Home safety for pets", href: "/pet-safety/home-safety-for-pets" },
          { label: "Small pets care hub", href: "/small-pets/care" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "guinea-pig",
    slug: "guinea-pig-feeding-basics",
    path: "/small-pets/guinea-pig-feeding-basics",
    title: "Guinea Pig Feeding Basics — Hay, Greens, and Vitamin C",
    description:
      "An educational overview of a guinea pig's diet: unlimited grass hay, fresh greens, a dietary source of vitamin C, and constant water. No vitamin C dosing; refusal to eat is urgent.",
    pageHeading: "Guinea Pig Feeding Basics",
    topicTag: "Guinea pig · Feeding",
    directAnswer:
      "A guinea pig's diet is based on unlimited grass hay, with daily fresh greens, a small amount of plain pellets, and constant fresh water — plus a reliable dietary source of vitamin C, which guinea pigs cannot make themselves. This page explains the principles, not exact quantities or vitamin C doses, and a guinea pig that stops eating needs a vet urgently.",
    sections: [
      {
        heading: "The basics of a guinea pig diet",
        bullets: [
          "Grass hay should be available at all times and make up the majority of the diet.",
          "Offer a daily variety of suitable fresh greens, introduced gradually.",
          "A small amount of plain, guinea-pig-appropriate pellets supports balanced nutrition.",
          "Provide a reliable dietary source of vitamin C — ask your veterinarian how best to do this for your guinea pig.",
          "Provide constant clean, fresh water; avoid sugary treats and muesli-style mixes.",
        ],
      },
    ],
    checklist: {
      heading: "Feeding checklist",
      bullets: [
        "Unlimited grass hay available at all times.",
        "Daily variety of suitable fresh greens, introduced slowly.",
        "A small amount of plain, appropriate pellets.",
        "A reliable vitamin C source, confirmed with your vet.",
        "Constant clean, fresh water; no sugary treats or muesli mixes.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume pellets alone provide enough vitamin C — confirm an appropriate source with your vet.",
        "Do not start or dose vitamin C supplements on your own; ask your veterinarian.",
        "Do not assume muesli-style mixes are healthy — they can lead to selective feeding.",
        "Do not assume reduced eating is minor — a guinea pig that stops eating is urgent.",
      ],
    },
    whenToContactVet: {
      heading: "When to contact a veterinarian",
      intro: "Appetite and vitamin C are key in guinea pigs.",
      bullets: [
        "If your guinea pig stops eating or drinking — this is urgent.",
        "To confirm how to provide an appropriate vitamin C source for your guinea pig.",
        "If there is diarrhoea, weight loss, drooling, or signs of dental trouble.",
        "Before any major diet change, especially for a young, pregnant, or unwell guinea pig.",
      ],
    },
    faqs: [
      {
        question: "How do guinea pigs get vitamin C?",
        answer:
          "Guinea pigs need a dietary source of vitamin C because they cannot make their own. This can come from appropriate foods and diet. The best approach for your guinea pig should be confirmed with your veterinarian; do not start supplements without guidance.",
      },
      {
        question: "What should guinea pigs eat most of?",
        answer:
          "Grass hay should make up the majority of the diet and be available at all times, supporting digestion and dental wear. Fresh greens, a little plain pellet, a vitamin C source, and constant water complete the diet.",
      },
      {
        question: "My guinea pig stopped eating — is that serious?",
        answer:
          "Yes. Guinea pigs should eat almost constantly, so a loss of appetite is urgent. Contact a guinea-pig-savvy veterinarian promptly rather than waiting or trying home remedies.",
      },
    ],
    sources: [SRC_RSPCA_GUINEA, SRC_MERCK_GUINEA],
    related: [
      {
        title: "Guinea pig care",
        links: [
          { label: "Guinea pig care overview", href: "/small-pets/guinea-pig-care" },
          { label: "Guinea pig warning signs", href: "/small-pets/guinea-pig-warning-signs" },
          { label: "Guinea pig housing setup", href: "/small-pets/guinea-pig-housing-setup" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Pet nutrition hub", href: "/pet-nutrition" },
          { label: "Small pets care hub", href: "/small-pets/care" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "guinea-pig",
    slug: "guinea-pig-first-week-checklist",
    path: "/small-pets/guinea-pig-first-week-checklist",
    title: "Guinea Pig First-Week Checklist — A Gentle Start",
    description:
      "A calm planning checklist for a guinea pig's first week: a quiet roomy setup, unlimited hay and vitamin C, gentle handling at the guinea pig's pace, and a savvy vet identified early.",
    pageHeading: "Guinea Pig First-Week Checklist",
    topicTag: "Guinea pig · First week",
    directAnswer:
      "A guinea pig's first week is about a calm, secure, roomy setup and letting your guinea pig settle. Provide unlimited hay, fresh greens with a vitamin C source, and constant water, and keep handling gentle and brief at first. This page is planning guidance; identify a guinea-pig-savvy veterinarian early and call promptly if anything seems wrong.",
    sections: [
      {
        heading: "Settle in gently",
        bullets: [
          "Set up roomy, secure housing with hideaways before your guinea pig arrives.",
          "Provide unlimited hay, fresh water, a vitamin C source, and the current food to start.",
          "Keep the first days calm and quiet; let your guinea pig get used to your voice.",
          "Start with short, gentle, supportive handling close to the ground.",
          "Watch eating, drinking, and droppings closely.",
        ],
      },
    ],
    checklist: {
      heading: "First-week checklist",
      bullets: [
        "Roomy, secure housing with hideaways, ready before arrival.",
        "Unlimited hay, fresh water, vitamin C source, and current food.",
        "A calm, quiet environment for settling in.",
        "Short, gentle, supportive handling close to the ground.",
        "Companionship planned if appropriate.",
        "A guinea-pig-savvy veterinarian identified, and an early check-up considered.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a new guinea pig wants to be picked up right away — build trust first.",
        "Do not assume hiding or freezing means illness; they are prey animals adjusting.",
        "Do not assume any vet sees guinea pigs — line one up in advance.",
        "Do not ignore reduced eating — contact a vet promptly.",
      ],
    },
    whenToContactVet: GUINEA_WHEN_TO_VET,
    faqs: [
      {
        question: "How do I help a new guinea pig settle?",
        answer:
          "Provide a roomy, secure setup with hideaways, keep things calm, offer unlimited hay and a vitamin C source, and let your guinea pig get used to your presence before lots of handling.",
      },
      {
        question: "Should new guinea pigs see a vet?",
        answer:
          "Identify a guinea-pig-savvy veterinarian early and consider an initial check-up. Go sooner if anything seems wrong — reduced eating in a guinea pig warrants prompt attention.",
      },
      {
        question: "When can I start handling my new guinea pig?",
        answer:
          "Start with short, gentle, supportive sessions once your guinea pig is settling in, building trust gradually. Keep handling low and calm, and let your guinea pig set the pace.",
      },
    ],
    sources: [SRC_RSPCA_GUINEA, SRC_AVMA_PETCARE],
    related: [
      {
        title: "Guinea pig care",
        links: [
          { label: "Guinea pig care overview", href: "/small-pets/guinea-pig-care" },
          { label: "Guinea pig housing setup", href: "/small-pets/guinea-pig-housing-setup" },
          { label: "Guinea pig warning signs", href: "/small-pets/guinea-pig-warning-signs" },
        ],
      },
      {
        title: "Plan",
        links: [
          { label: "Small pet setup checklist", href: "/tools/small-pet-setup-checklist" },
          { label: "Pet cost calculator", href: "/tools/pet-cost-calculator" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "guinea-pig",
    slug: "guinea-pig-warning-signs",
    path: "/small-pets/guinea-pig-warning-signs",
    title: "Guinea Pig Warning Signs — When to See a Vet",
    description:
      "A cautious educational guide to guinea pig warning signs that need urgent veterinary care — not eating, breathing trouble, severe diarrhoea, or collapse. Recognition and escalation only.",
    pageHeading: "Guinea Pig Warning Signs",
    topicTag: "Guinea pig · Warning signs",
    directAnswer:
      "Guinea pigs hide illness and can deteriorate quickly, and a guinea pig that stops eating is urgent. This page helps you recognise warning signs and escalate — it does not diagnose or treat. Know a guinea-pig-savvy veterinarian before you need one, and call promptly when something seems wrong.",
    sections: [
      {
        heading: "How to act",
        bullets: [
          "If your guinea pig stops eating or drinking, contact a vet promptly — they should eat almost constantly.",
          "If you are unsure, call; telephone triage helps you decide.",
          "Know your guinea pig's normal eating, droppings, and behaviour so changes stand out.",
          "Keep a guinea-pig-savvy vet and an emergency option saved in advance.",
        ],
      },
    ],
    checklist: {
      heading: "Warning signs that warrant prompt veterinary contact",
      intro: "This list is not exhaustive, and signs can have many causes. Any of these warrants prompt veterinary contact.",
      bullets: [
        "Not eating or drinking — urgent in guinea pigs.",
        "Laboured or noisy breathing, or discharge from eyes or nose.",
        "Severe or watery diarrhoea, or a soiled rear.",
        "Drooling, weight loss, or signs of dental trouble.",
        "Weakness, collapse, injury, suspected poisoning, or rapid worsening.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not adopt a \"wait and see\" approach — guinea pigs can decline quickly.",
        "Do not try to diagnose or treat at home; many remedies are unsafe.",
        "Do not assume a quiet guinea pig is well — they hide illness.",
        "Do not give any medication unless a veterinarian prescribes it.",
      ],
    },
    whenToContactVet: GUINEA_WHEN_TO_VET,
    faqs: [
      {
        question: "Why is a guinea pig not eating an emergency?",
        answer:
          "Guinea pigs need to eat almost constantly to keep their digestive system working. A loss of appetite can quickly become dangerous, so contact a guinea-pig-savvy veterinarian promptly rather than waiting.",
      },
      {
        question: "Can I treat my guinea pig at home?",
        answer:
          "No. Home treatment is not appropriate for these signs, and many remedies are unsafe. Contact a guinea-pig-savvy veterinarian instead of waiting or trying remedies.",
      },
      {
        question: "How do I find a guinea pig vet?",
        answer:
          "Identify a guinea-pig-savvy veterinarian before you need one, and save an emergency option. Calling ahead in a crisis lets the clinic prepare for your arrival.",
      },
    ],
    sources: [SRC_MERCK_GUINEA, SRC_RSPCA_GUINEA, SRC_AVMA_PETCARE],
    related: [
      {
        title: "Guinea pig care",
        links: [
          { label: "Guinea pig care overview", href: "/small-pets/guinea-pig-care" },
          { label: "Guinea pig feeding basics", href: "/small-pets/guinea-pig-feeding-basics" },
          { label: "Guinea pig first-week checklist", href: "/small-pets/guinea-pig-first-week-checklist" },
        ],
      },
      {
        title: "Escalate safely",
        links: [
          { label: "When to go to the emergency vet", href: "/pet-safety/when-to-go-to-emergency-vet" },
          { label: "Vet care hub", href: "/vet-care" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
];

// ─── HAMSTER ARTICLES ──────────────────────────────────────────────────────

export const HAMSTER_ARTICLES: SmallPetArticle[] = [
  {
    species: "hamster",
    slug: "hamster-care",
    path: "/small-pets/hamster-care",
    title: "Hamster Care — A Responsible Owner's Overview",
    description:
      "An educational overview of responsible hamster care: a large enclosure, deep bedding, a proper-sized wheel, a quiet routine respecting their nocturnal nature, and vet access.",
    pageHeading: "Hamster Care",
    topicTag: "Hamster · Overview",
    directAnswer:
      "Hamsters need a much larger enclosure than most pet-store cages, deep bedding to burrow, a correctly sized solid wheel, and a calm routine that respects their mostly night-time activity. They are not disposable or toy-like pets. This page is a responsible-care overview; it does not diagnose or treat, and a hamster that seems unwell needs prompt veterinary care.",
    sections: [
      {
        heading: "What responsible hamster care involves",
        bullets: [
          "A large enclosure with deep bedding for burrowing — far bigger than typical pet-store cages.",
          "A correctly sized, solid (not wire or barred) exercise wheel.",
          "Most hamsters are solitary (especially Syrians); housing depends on species — check current guidance.",
          "A quiet location and a routine that respects their crepuscular/nocturnal activity.",
          "A small-animal/exotic veterinarian identified in advance.",
        ],
      },
      {
        heading: "Why hamsters deserve real care",
        bullets: [
          "Hamsters are small and fragile and can decline quickly when unwell.",
          "They are mostly active at dawn, dusk, and night — avoid disturbing daytime sleep.",
          "Gentle, careful handling matters; startled hamsters may nip.",
          "Requirements vary by species, country, and veterinarian — check current welfare guidance.",
        ],
      },
    ],
    checklist: {
      heading: "Responsible-care checklist",
      bullets: [
        "A large enclosure with deep bedding for burrowing.",
        "A correctly sized solid exercise wheel.",
        "Species-appropriate housing (most are solitary).",
        "A quiet location respecting night-time activity.",
        "Gentle, careful handling.",
        "A small-animal/exotic veterinarian identified early.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume hamsters are easy, cheap, or low-maintenance — they need proper housing and care.",
        "Do not assume tiny pet-store cages are adequate — most are far too small.",
        "Do not assume hamsters should be social like other rodents — many are solitary.",
        "Do not wake a sleeping hamster repeatedly; respect their natural routine.",
      ],
    },
    whenToContactVet: HAMSTER_WHEN_TO_VET,
    faqs: [
      {
        question: "Are hamsters easy, low-maintenance pets?",
        answer:
          "No. Hamsters need a large enclosure, deep bedding, a proper wheel, gentle handling, a routine that respects their night-time activity, and access to a suitable veterinarian. They are small and fragile and deserve real care.",
      },
      {
        question: "Can hamsters live together?",
        answer:
          "It depends on species. Syrian hamsters are solitary and should live alone; some dwarf species may sometimes be housed together under specific conditions. Check current species-specific guidance and ask a knowledgeable source.",
      },
      {
        question: "Why is my hamster only active at night?",
        answer:
          "Hamsters are naturally most active around dawn, dusk, and at night. This is normal. Avoid disturbing their daytime sleep, and interact gently during their active hours.",
      },
    ],
    sources: [SRC_RSPCA_HAMSTERS, SRC_MERCK_HAMSTERS],
    related: [
      {
        title: "Hamster care",
        links: [
          { label: "Hamster housing setup", href: "/small-pets/hamster-housing-setup" },
          { label: "Hamster feeding basics", href: "/small-pets/hamster-feeding-basics" },
          { label: "Hamster warning signs", href: "/small-pets/hamster-warning-signs" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Hamster animal profile", href: "/animals/hamster" },
          { label: "How much does a hamster cost?", href: "/small-pets/hamsters/how-much-does-a-hamster-cost" },
          { label: "Small pets care hub", href: "/small-pets/care" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "hamster",
    slug: "hamster-housing-setup",
    path: "/small-pets/hamster-housing-setup",
    title: "Hamster Housing Setup — Space, Bedding, and a Wheel",
    description:
      "An educational guide to hamster housing: a large enclosure, deep burrowing bedding, a correctly sized solid wheel, hides, and a quiet, temperature-stable spot. Bigger is better.",
    pageHeading: "Hamster Housing Setup",
    topicTag: "Hamster · Housing",
    directAnswer:
      "Hamsters need a large enclosure with deep bedding to burrow, a correctly sized solid wheel, hides, and a quiet, temperature-stable location. Bigger is always better, and many common pet-store cages are too small. Exact minimum sizes vary by species and organisation, so check current welfare guidance rather than a single figure.",
    sections: [
      {
        heading: "Space and bedding",
        bullets: [
          "Provide a large enclosure with a big, continuous floor area; many pet-store cages are too small.",
          "Recommended minimums vary by species and organisation — check current welfare guidance; bigger is better.",
          "Use deep, suitable bedding so your hamster can burrow and build tunnels.",
          "Include a correctly sized solid (not wire/barred) wheel to protect feet and backs.",
          "Provide hides, chew items, and foraging opportunities.",
        ],
      },
      {
        heading: "Location and safety",
        bullets: [
          "Keep the enclosure in a quiet spot, away from temperature extremes, draughts, and direct sun.",
          "Avoid placing it where daytime noise will disturb sleep.",
          "Avoid cedar and pine shavings; ask about safe bedding options.",
          "Ensure the enclosure is escape-proof and secure from other household pets.",
          "Provide a sand area for bathing if appropriate for the species.",
        ],
      },
    ],
    checklist: {
      heading: "Housing checklist",
      bullets: [
        "A large enclosure with a big continuous floor area.",
        "Deep, suitable bedding for burrowing.",
        "A correctly sized solid wheel.",
        "Hides, chew items, and foraging enrichment.",
        "Quiet, temperature-stable, draught-free location.",
        "Escape-proof and secure from other pets.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a small barred pet-store cage is big enough — most are too small.",
        "Do not assume a wire or barred wheel is safe; use a solid, correctly sized wheel.",
        "Do not assume one cage size is legally required everywhere; rules and recommendations vary.",
        "Do not assume all bedding is safe; avoid cedar and pine shavings.",
      ],
    },
    whenToContactVet: HAMSTER_WHEN_TO_VET,
    faqs: [
      {
        question: "How big should a hamster cage be?",
        answer:
          "As large as possible, with a big continuous floor area — many common cages are too small. Recommended minimums vary by species and organisation, so check current welfare guidance. Deep bedding and a proper wheel matter as much as floor area.",
      },
      {
        question: "What size wheel does a hamster need?",
        answer:
          "A solid wheel large enough that your hamster can run without arching its back. A wheel that is too small or made of bars or wire can cause injury. Choose a correctly sized, solid wheel for the species.",
      },
      {
        question: "What bedding is safe for hamsters?",
        answer:
          "Use deep, suitable, low-dust bedding that allows burrowing, and keep it clean. Avoid cedar and pine shavings, which can be irritating. Ask your veterinarian or a reputable rescue about safe options.",
      },
    ],
    sources: [SRC_RSPCA_HAMSTERS, SRC_MERCK_HAMSTERS],
    related: [
      {
        title: "Hamster care",
        links: [
          { label: "Hamster care overview", href: "/small-pets/hamster-care" },
          { label: "Hamster feeding basics", href: "/small-pets/hamster-feeding-basics" },
          { label: "Hamster first-week checklist", href: "/small-pets/hamster-first-week-checklist" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Home safety for pets", href: "/pet-safety/home-safety-for-pets" },
          { label: "Small pets care hub", href: "/small-pets/care" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "hamster",
    slug: "hamster-feeding-basics",
    path: "/small-pets/hamster-feeding-basics",
    title: "Hamster Feeding Basics — Balanced and Simple",
    description:
      "An educational overview of feeding a hamster: a suitable formulated mix, small amounts of appropriate fresh food, safe chews, and constant water. No exact quantities; loss of appetite needs a vet.",
    pageHeading: "Hamster Feeding Basics",
    topicTag: "Hamster · Feeding",
    directAnswer:
      "Hamsters do well on a suitable formulated hamster food, with small amounts of appropriate fresh vegetables, safe items to gnaw, and constant fresh water. This page explains the principles, not exact quantities, and a hamster that stops eating or loses weight should be seen by a veterinarian.",
    sections: [
      {
        heading: "The basics of a hamster diet",
        bullets: [
          "Feed a suitable, balanced formulated hamster food as the foundation.",
          "Offer small amounts of appropriate fresh vegetables; introduce new foods gradually and remove uneaten fresh food.",
          "Provide safe items to gnaw, which supports dental health.",
          "Provide constant access to clean, fresh water.",
          "Avoid sugary, fatty, or unsuitable human foods; ask your vet what is appropriate.",
        ],
      },
    ],
    checklist: {
      heading: "Feeding checklist",
      bullets: [
        "A suitable, balanced formulated hamster food.",
        "Small amounts of appropriate fresh vegetables, introduced slowly.",
        "Safe gnawing items for dental health.",
        "Constant clean, fresh water.",
        "Uneaten fresh food removed promptly; no sugary or unsuitable foods.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume seed-heavy mixes are ideal — they can encourage selective feeding.",
        "Do not assume all fresh foods are safe; check suitability and use small amounts.",
        "Do not assume hoarded food in bedding is being eaten — monitor actual intake and weight.",
        "Do not assume reduced eating is minor — contact a vet if your hamster stops eating.",
      ],
    },
    whenToContactVet: {
      heading: "When to contact a veterinarian",
      intro: "Appetite and weight are key signals in small animals.",
      bullets: [
        "If your hamster stops eating or drinking, or loses weight.",
        "If there is diarrhoea or a wet, soiled rear — a serious sign needing prompt care.",
        "If you suspect dental problems (drooling, dropping food, weight loss).",
        "Before a major diet change, especially for a young or unwell hamster.",
      ],
    },
    faqs: [
      {
        question: "What do hamsters eat?",
        answer:
          "A suitable formulated hamster food forms the foundation, with small amounts of appropriate fresh vegetables, safe gnawing items, and constant fresh water. Ask your veterinarian about suitable foods and avoid sugary or unsuitable items.",
      },
      {
        question: "Can hamsters eat fresh vegetables?",
        answer:
          "Small amounts of appropriate fresh vegetables can be offered, introduced gradually, with uneaten food removed promptly. Check suitability first, and ask your veterinarian if you are unsure what is safe.",
      },
      {
        question: "My hamster is hoarding food — should I worry?",
        answer:
          "Hoarding food in cheek pouches and bedding is normal hamster behaviour. However, monitor actual intake and weight, because hoarding can hide reduced eating. If your hamster stops eating, contact a veterinarian.",
      },
    ],
    sources: [SRC_RSPCA_HAMSTERS, SRC_MERCK_HAMSTERS],
    related: [
      {
        title: "Hamster care",
        links: [
          { label: "Hamster care overview", href: "/small-pets/hamster-care" },
          { label: "Hamster warning signs", href: "/small-pets/hamster-warning-signs" },
          { label: "Hamster housing setup", href: "/small-pets/hamster-housing-setup" },
        ],
      },
      {
        title: "Related",
        links: [
          { label: "Pet nutrition hub", href: "/pet-nutrition" },
          { label: "Small pets care hub", href: "/small-pets/care" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "hamster",
    slug: "hamster-first-week-checklist",
    path: "/small-pets/hamster-first-week-checklist",
    title: "Hamster First-Week Checklist — A Quiet Start",
    description:
      "A calm planning checklist for a hamster's first week: a complete enclosure ready in advance, quiet settling time, and gentle handling built up slowly, respecting their night-time routine.",
    pageHeading: "Hamster First-Week Checklist",
    topicTag: "Hamster · First week",
    directAnswer:
      "A hamster's first week is about a complete enclosure ready in advance and lots of quiet settling time before handling. Let your hamster explore and adjust, interact gently during its active evening hours, and watch eating and activity. This page is planning guidance; identify a small-animal veterinarian early and call promptly if anything seems wrong.",
    sections: [
      {
        heading: "Settle in gently",
        bullets: [
          "Have the full enclosure — bedding, wheel, hides, food, water — ready before your hamster arrives.",
          "Give your hamster several quiet days to settle before much handling.",
          "Interact during active evening hours; avoid disturbing daytime sleep.",
          "Build handling up slowly, letting your hamster get used to your scent and voice.",
          "Watch eating, drinking, and activity, and keep the area calm.",
        ],
      },
    ],
    checklist: {
      heading: "First-week checklist",
      bullets: [
        "Complete enclosure set up before arrival.",
        "Several quiet settling days before much handling.",
        "Interaction during active evening hours only.",
        "Gentle, gradual handling building trust.",
        "Monitoring of eating, drinking, and activity.",
        "A small-animal/exotic veterinarian identified early.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a new hamster wants handling immediately — give it quiet time first.",
        "Do not wake a sleeping hamster to play; respect its night-time routine.",
        "Do not assume any vet sees hamsters — line one up in advance.",
        "Do not ignore reduced eating or a wet rear — contact a vet promptly.",
      ],
    },
    whenToContactVet: HAMSTER_WHEN_TO_VET,
    faqs: [
      {
        question: "How do I help a new hamster settle in?",
        answer:
          "Set up the complete enclosure before arrival and give your hamster several quiet days before much handling. Interact gently during its active evening hours and let it get used to your scent and voice.",
      },
      {
        question: "When can I start handling my new hamster?",
        answer:
          "After it has had quiet time to settle — usually a few days — start short, gentle sessions during active evening hours, building trust gradually. Let your hamster come to you rather than grabbing it.",
      },
      {
        question: "Should a new hamster see a vet?",
        answer:
          "Identify a small-animal or exotic veterinarian early. Go promptly if anything seems wrong — reduced eating, a wet rear, or breathing trouble all warrant prompt veterinary attention.",
      },
    ],
    sources: [SRC_RSPCA_HAMSTERS, SRC_AVMA_PETCARE],
    related: [
      {
        title: "Hamster care",
        links: [
          { label: "Hamster care overview", href: "/small-pets/hamster-care" },
          { label: "Hamster housing setup", href: "/small-pets/hamster-housing-setup" },
          { label: "Hamster warning signs", href: "/small-pets/hamster-warning-signs" },
        ],
      },
      {
        title: "Plan",
        links: [
          { label: "Small pet setup checklist", href: "/tools/small-pet-setup-checklist" },
          { label: "Pet cost calculator", href: "/tools/pet-cost-calculator" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    species: "hamster",
    slug: "hamster-warning-signs",
    path: "/small-pets/hamster-warning-signs",
    title: "Hamster Warning Signs — When to See a Vet",
    description:
      "A cautious educational guide to hamster warning signs that need prompt veterinary care — not eating, a wet rear, breathing trouble, or lethargy. Recognition and escalation only.",
    pageHeading: "Hamster Warning Signs",
    topicTag: "Hamster · Warning signs",
    directAnswer:
      "Hamsters are small and can decline quickly, and they hide illness. This page helps you recognise warning signs and escalate — it does not diagnose or treat. Diarrhoea or a wet, soiled rear end is a serious sign that needs prompt veterinary care. Know a small-animal veterinarian before you need one.",
    sections: [
      {
        heading: "How to act",
        bullets: [
          "If your hamster stops eating, has a wet rear, or struggles to breathe, contact a vet promptly.",
          "If you are unsure, call; telephone triage helps you decide.",
          "Know your hamster's normal weight, eating, and activity so changes stand out.",
          "Keep a small-animal/exotic vet and an emergency option saved in advance.",
        ],
      },
    ],
    checklist: {
      heading: "Warning signs that warrant prompt veterinary contact",
      intro: "This list is not exhaustive, and signs can have many causes. Any of these warrants prompt veterinary contact.",
      bullets: [
        "Not eating or drinking, or noticeable weight loss.",
        "Diarrhoea or a wet, soiled rear end — a serious sign needing prompt care.",
        "Laboured breathing, wheezing, or discharge from eyes or nose.",
        "Lethargy, wobbliness, or collapse.",
        "Injury, suspected poisoning, lumps, or any rapid worsening.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not adopt a \"wait and see\" approach — hamsters can decline quickly.",
        "Do not try to diagnose or treat at home; many remedies are unsafe for hamsters.",
        "Do not assume a sleepy hamster is fine — distinguish normal sleep from lethargy and weakness.",
        "Do not give any medication unless a veterinarian prescribes it.",
      ],
    },
    whenToContactVet: HAMSTER_WHEN_TO_VET,
    faqs: [
      {
        question: "Is a wet bottom on a hamster serious?",
        answer:
          "Diarrhoea or a wet, soiled rear end in a hamster is a serious sign and needs prompt veterinary attention. Do not try to diagnose or treat it at home — contact a small-animal veterinarian quickly.",
      },
      {
        question: "How do I tell normal sleep from illness?",
        answer:
          "Hamsters sleep deeply during the day, which is normal. Lethargy or weakness during their active hours, along with not eating, a wet rear, or breathing trouble, is different and warrants a vet call.",
      },
      {
        question: "Can I treat my hamster at home?",
        answer:
          "No. Home treatment is not appropriate for these signs, and many remedies are unsafe. Contact a small-animal or exotic veterinarian rather than waiting or trying remedies.",
      },
    ],
    sources: [SRC_MERCK_HAMSTERS, SRC_RSPCA_HAMSTERS, SRC_AVMA_PETCARE],
    related: [
      {
        title: "Hamster care",
        links: [
          { label: "Hamster care overview", href: "/small-pets/hamster-care" },
          { label: "Hamster feeding basics", href: "/small-pets/hamster-feeding-basics" },
          { label: "Hamster first-week checklist", href: "/small-pets/hamster-first-week-checklist" },
        ],
      },
      {
        title: "Escalate safely",
        links: [
          { label: "When to go to the emergency vet", href: "/pet-safety/when-to-go-to-emergency-vet" },
          { label: "Vet care hub", href: "/vet-care" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
];

export const SMALL_PET_ARTICLES: SmallPetArticle[] = [
  ...RABBIT_ARTICLES,
  ...GUINEA_PIG_ARTICLES,
  ...HAMSTER_ARTICLES,
];

export function getSmallPetArticleBySlug(
  slug: string
): SmallPetArticle | undefined {
  return SMALL_PET_ARTICLES.find((a) => a.slug === slug);
}
