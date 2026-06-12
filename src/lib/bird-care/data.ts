import type { SourceLink } from "@/lib/educational/types";
import type {
  BirdGuideArticle,
  BirdGuideSection,
} from "@/lib/birds/guide-types";

const PUBLISHED = "2026-06-12";
const MODIFIED = "2026-06-12";

// ─── VERIFIED SOURCES ──────────────────────────────────────────────────────
// URLs confirmed reachable with a browser user-agent on 2026-06-12. The
// Association of Avian Veterinarians blocks automated bots but is a real,
// authoritative professional body.

const SRC_AVMA: SourceLink = {
  label: "AVMA — Pet Care Resources",
  url: "https://www.avma.org/resources-tools/pet-owners/petcare",
  type: "veterinary",
  note: "American Veterinary Medical Association consumer pet-care hub",
};

const SRC_AAV: SourceLink = {
  label: "Association of Avian Veterinarians",
  url: "https://www.aav.org/",
  type: "veterinary",
  note: "Professional body for avian veterinary medicine",
};

const SRC_MERCK_BIRDS: SourceLink = {
  label: "Merck Veterinary Manual — Pet Birds",
  url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/pet-birds",
  type: "reference",
  note: "Veterinary reference on pet bird care and health",
};

const SRC_RSPCA_BIRDS: SourceLink = {
  label: "RSPCA — Bird Welfare",
  url: "https://www.rspca.org.uk/adviceandwelfare/pets/birds",
  type: "animal-welfare",
  note: "Welfare-based guidance on keeping birds (UK)",
};

// Shared escalation block — pet birds hide illness and decline quickly.
const AVIAN_VET_ESCALATION: BirdGuideSection = {
  heading: "When to contact an avian veterinarian",
  intro:
    "Birds instinctively hide illness, so signs can appear suddenly and serious. Do not use this page to diagnose or treat — find an avian (bird-experienced) veterinarian before you need one.",
  bullets: [
    "Breathing difficulty, tail-bobbing with each breath, open-mouth breathing, or any laboured breathing — urgent.",
    "Collapse, weakness, fluffed-up and inactive posture, or sitting on the cage floor.",
    "Bleeding, injury, burns, or a suspected fracture.",
    "Seizures, loss of balance, or sudden behaviour change.",
    "Refusal to eat or drink, vomiting, or any rapid worsening — contact an avian vet or emergency clinic immediately.",
  ],
};

const RELATED_HUB = {
  title: "Bird care",
  links: [
    { label: "Bird care hub", href: "/bird-care" },
    { label: "Pet bird safety basics", href: "/bird-care/pet-bird-safety-basics" },
    { label: "When to call an avian vet", href: "/bird-care/when-to-call-an-avian-vet" },
    { label: "Parrot profile", href: "/animals/parrot" },
  ],
};

const RELATED_PLANNING = {
  title: "Planning & related",
  links: [
    { label: "Bird encyclopedia", href: "/animal-encyclopedia/birds" },
    { label: "Pet nutrition hub", href: "/pet-nutrition" },
    { label: "Pet safety & emergencies", href: "/pet-safety" },
    { label: "Vet care hub", href: "/vet-care" },
  ],
};

const RELATED_TOOLS = {
  title: "Tools",
  links: [
    { label: "Pet cost calculator", href: "/tools/pet-cost-calculator" },
    { label: "Pet budget checklist", href: "/guides/pet-budget-checklist" },
    { label: "Pet adoption readiness quiz", href: "/tools/pet-adoption-readiness-quiz" },
  ],
};

export const BIRD_CARE_ARTICLES: BirdGuideArticle[] = [
  {
    slug: "pet-bird-safety-basics",
    path: "/bird-care/pet-bird-safety-basics",
    title: "Pet Bird Safety Basics — Hazards Around the Home",
    description:
      "An educational overview of common household hazards for pet birds — fumes, toxins, open windows, other pets, and more — and why bird health concerns route to an avian veterinarian.",
    pageHeading: "Pet Bird Safety Basics",
    topicTag: "Bird care · Safety",
    directAnswer:
      "Pet birds are sensitive animals, and the home holds hazards that can harm them quickly — airborne fumes, toxic foods and plants, open windows and doors, ceiling fans, water, and other pets. Reducing these risks is core to responsible care. This page is educational planning, not diagnosis or treatment; for any bird showing breathing trouble, collapse, bleeding, or rapid worsening, contact an avian veterinarian immediately.",
    sections: [
      {
        heading: "Common household hazards for birds",
        intro:
          "Birds have sensitive respiratory systems and explore with their beaks, so the home needs bird-proofing.",
        bullets: [
          "Airborne fumes: birds are highly sensitive to smoke, aerosols, strong cleaning products, and fumes from some overheated non-stick cookware.",
          "Toxic items: certain foods, plants, and household chemicals can be dangerous — keep them well out of reach.",
          "Open windows and doors, and uncovered glass and mirrors, risk escape or collision.",
          "Ceiling fans, hot surfaces, open water (pots, sinks, toilets), and cords are physical dangers.",
          "Other pets — cats, dogs, and even other birds — can injure or stress a bird.",
        ],
      },
      {
        heading: "Building a safer environment",
        bullets: [
          "Supervise time outside the cage and bird-proof the room first.",
          "Improve air quality and avoid smoke, aerosols, and strong fumes around birds.",
          "Secure windows and doors and make glass visible to reduce collisions.",
          "Store toxic foods, plants, and chemicals securely away from the bird.",
          "Introduce other pets cautiously, and never leave them unsupervised together.",
        ],
      },
    ],
    checklist: {
      heading: "Bird safety checklist",
      bullets: [
        "Room bird-proofed before any out-of-cage time, with supervision.",
        "Good air quality; no smoke, aerosols, or strong fumes near the bird.",
        "Windows and doors secured; glass and mirrors made visible.",
        "Fans off, hot surfaces and open water managed, cords secured.",
        "Toxic foods, plants, and chemicals stored well out of reach.",
        "An avian veterinarian identified before an emergency.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a bird can be left to roam unsupervised safely.",
        "Do not assume fumes that seem mild to you are safe for a bird's sensitive lungs.",
        "Do not assume other pets will not harm or stress the bird.",
        "Do not assume you can treat a poisoning or injury at home — contact an avian vet.",
      ],
    },
    escalation: AVIAN_VET_ESCALATION,
    faqs: [
      {
        question: "Why are birds so sensitive to fumes?",
        answer:
          "Birds have very efficient, sensitive respiratory systems, which makes them more vulnerable than many mammals to airborne toxins such as smoke, aerosols, strong cleaning fumes, and fumes from some overheated non-stick cookware. Good air quality is an important part of bird safety.",
      },
      {
        question: "What household items are dangerous to pet birds?",
        answer:
          "Hazards include airborne fumes, certain toxic foods and plants, household chemicals, open windows and glass, ceiling fans, hot surfaces, open water, and other pets. This page highlights categories of risk; for specifics and any suspected poisoning, consult an avian veterinarian.",
      },
      {
        question: "My bird may have been exposed to something toxic — what do I do?",
        answer:
          "Treat it as urgent. Do not try to treat it at home. Contact an avian veterinarian or emergency clinic immediately, and follow their guidance. Birds can deteriorate quickly, so prompt professional help matters.",
      },
    ],
    sources: [SRC_AVMA, SRC_RSPCA_BIRDS, SRC_AAV],
    related: [RELATED_HUB, RELATED_PLANNING, RELATED_TOOLS],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },

  {
    slug: "parrot-care-basics",
    path: "/bird-care/parrot-care-basics",
    title: "Parrot Care Basics — Specialised, Long-Lived Birds",
    description:
      "A cautious educational overview of responsible parrot care: space, enrichment, social needs, varied diet, and avian-vet access. Parrots are demanding, long-lived birds — not easy pets.",
    pageHeading: "Parrot Care Basics",
    topicTag: "Parrot · Care",
    directAnswer:
      "Parrots are intelligent, highly social, often long-lived birds with demanding needs — they are not easy or low-effort pets. Responsible care means generous space, daily enrichment and companionship, a varied appropriate diet, a safe environment, and access to an avian veterinarian. This page is educational planning; it does not give diagnosis, treatment, medication, exact diets, breeding, or wing-clipping instructions.",
    sections: [
      {
        heading: "What responsible parrot care involves",
        bullets: [
          "Generous space and time out of the cage in a bird-proofed area, with supervision.",
          "Daily enrichment — foraging, toys, and mental stimulation — as parrots are highly intelligent.",
          "Companionship and social interaction; many parrots are intensely social and can suffer if neglected.",
          "A varied, species-appropriate diet (no exact prescriptions here) guided by an avian vet.",
          "Access to an avian veterinarian for routine and emergency care.",
        ],
      },
      {
        heading: "Why parrots are a major commitment",
        intro:
          "Parrots are rewarding but demanding. Plan honestly before taking one on.",
        bullets: [
          "Many parrots are long-lived — some large species can live for decades — so this is a long commitment.",
          "They can be loud, messy, and need a lot of attention; boredom and isolation cause welfare problems.",
          "Needs vary enormously by species; research the specific parrot carefully.",
          "Requirements and costs add up; plan space, time, and budget realistically.",
        ],
      },
    ],
    checklist: {
      heading: "Responsible parrot-care checklist",
      bullets: [
        "Generous space and supervised, bird-proofed out-of-cage time.",
        "Daily enrichment and foraging opportunities.",
        "A plan for companionship and regular social interaction.",
        "A varied, species-appropriate diet guided by an avian vet.",
        "A safe environment free of common household hazards.",
        "An avian veterinarian identified before you need one.",
        "An honest plan for the long-term time and cost commitment.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume parrots are easy or low-effort pets — they are demanding and long-lived.",
        "Do not assume one parrot's needs apply to every species.",
        "Do not assume a seed-only diet is adequate; diet should follow avian-vet guidance.",
        "Do not attempt wing-clipping, breeding, or any medical care from a webpage — consult an avian vet.",
      ],
    },
    escalation: AVIAN_VET_ESCALATION,
    faqs: [
      {
        question: "Are parrots good pets for beginners?",
        answer:
          "Parrots are intelligent and rewarding but demanding — they need space, daily enrichment, social interaction, a varied diet, and often live a long time. They are not easy or low-effort pets, and needs vary greatly by species. Research thoroughly and consult an avian veterinarian before committing.",
      },
      {
        question: "How long do parrots live?",
        answer:
          "It varies widely by species. Smaller parrots may live many years, while some larger parrots can live for several decades. This long potential lifespan is a major reason parrot keeping is a serious, long-term commitment.",
      },
      {
        question: "Does this page tell me exactly what to feed a parrot?",
        answer:
          "No. Appropriate diets vary by species and individual, and a seed-only diet is generally inadequate. This page does not give exact diets or quantities; a varied, species-appropriate diet should be planned with an avian veterinarian.",
      },
    ],
    sources: [SRC_AAV, SRC_RSPCA_BIRDS, SRC_MERCK_BIRDS],
    related: [
      {
        title: "Parrot resources",
        links: [
          { label: "Parrot profile", href: "/animals/parrot" },
          { label: "Bird care hub", href: "/bird-care" },
          { label: "Pet bird safety basics", href: "/bird-care/pet-bird-safety-basics" },
          { label: "When to call an avian vet", href: "/bird-care/when-to-call-an-avian-vet" },
        ],
      },
      RELATED_TOOLS,
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },

  {
    slug: "when-to-call-an-avian-vet",
    path: "/bird-care/when-to-call-an-avian-vet",
    title: "When to Call an Avian Vet — Birds Hide Illness",
    description:
      "An educational guide to recognising when a pet bird needs an avian veterinarian, why birds hide illness, and the importance of finding a bird-experienced vet in advance.",
    pageHeading: "When to Call an Avian Vet",
    topicTag: "Bird care · Vet care",
    directAnswer:
      "Birds instinctively hide illness, so by the time signs are obvious a bird may be seriously unwell. Breathing difficulty, collapse, fluffed-up inactivity, bleeding, seizures, refusal to eat, or rapid worsening all warrant prompt avian-veterinary care. Find an avian (bird-experienced) veterinarian before you need one. This page is educational and does not diagnose, treat, or prescribe.",
    sections: [
      {
        heading: "Why birds hide illness",
        bullets: [
          "As prey animals, birds instinctively mask signs of weakness, so problems are easy to miss.",
          "Subtle changes — less singing, sitting fluffed up, reduced appetite — can be early warnings.",
          "Knowing your bird's normal behaviour, weight, and droppings helps you notice changes early.",
          "Because birds can decline quickly, prompt veterinary attention matters.",
        ],
      },
      {
        heading: "Find an avian vet in advance",
        intro:
          "Not every clinic treats birds, so plan before an emergency.",
        bullets: [
          "Identify an avian or bird-experienced veterinarian when you get a bird, not during a crisis.",
          "Keep their details and an emergency option somewhere easy to find.",
          "Consider routine check-ups, which can catch problems early.",
          "Do not rely on webpages for diagnosis or treatment — contact the vet.",
        ],
      },
    ],
    checklist: {
      heading: "Preparedness checklist",
      bullets: [
        "An avian or bird-experienced vet identified before any emergency.",
        "Emergency clinic details kept somewhere easy to find.",
        "Familiarity with the bird's normal behaviour, appetite, and droppings.",
        "Awareness of the warning signs that need prompt veterinary care.",
        "No reliance on webpages for diagnosis, medication, or dosing.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a quiet, fluffed-up bird is just resting — it can be a sign of illness.",
        "Do not assume every veterinary clinic treats birds; find one in advance.",
        "Do not assume a bird will recover on its own; birds can decline fast.",
        "Do not self-diagnose or medicate based on a webpage.",
      ],
    },
    escalation: AVIAN_VET_ESCALATION,
    faqs: [
      {
        question: "Why do birds seem fine and then suddenly become very ill?",
        answer:
          "Birds instinctively hide signs of illness as a survival strategy, so they often appear normal until a problem is advanced. That is why subtle changes matter, why knowing your bird's normal behaviour helps, and why prompt veterinary care is important when something seems off.",
      },
      {
        question: "What signs mean my bird needs a vet urgently?",
        answer:
          "Urgent signs include breathing difficulty or tail-bobbing, collapse or weakness, sitting fluffed and inactive, bleeding or injury, seizures, and refusal to eat or drink. Any of these, or rapid worsening, warrants immediate contact with an avian veterinarian or emergency clinic.",
      },
      {
        question: "Can a regular vet treat my bird?",
        answer:
          "Some general practices see birds, but avian medicine is specialised and not every clinic treats them. It is best to identify an avian or bird-experienced veterinarian in advance. This page is educational and does not replace that professional care.",
      },
    ],
    sources: [SRC_AAV, SRC_AVMA, SRC_MERCK_BIRDS],
    related: [RELATED_HUB, RELATED_PLANNING, RELATED_TOOLS],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
];

export function getBirdCareArticleBySlug(
  slug: string
): BirdGuideArticle | undefined {
  return BIRD_CARE_ARTICLES.find((a) => a.slug === slug);
}

export const BIRD_CARE_HUB_SOURCES: SourceLink[] = [
  SRC_AVMA,
  SRC_AAV,
  SRC_MERCK_BIRDS,
  SRC_RSPCA_BIRDS,
];
