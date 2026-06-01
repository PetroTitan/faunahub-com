import type { SourceLink } from "@/lib/educational/types";

const PUBLISHED = "2026-06-01";
const MODIFIED = "2026-06-01";

/**
 * Core safety principle shown prominently near the top of every page in the
 * Pet Safety & Emergency Preparedness cluster. This is a preparedness and
 * recognition cluster — not a diagnosis, treatment, dosage, or home-care
 * cluster. Keep this text intact.
 */
export const PET_SAFETY_EMERGENCY_DISCLAIMER =
  "This content is educational and does not replace professional veterinary advice, diagnosis, or treatment. If an animal may be poisoned, is collapsed, is unable to breathe, is bleeding heavily, is having seizures, is unable to urinate, is in severe pain, is repeatedly vomiting, or is rapidly worsening, contact a licensed veterinarian or emergency animal clinic immediately.";

export const PET_SAFETY_SOURCE_NOTE =
  "Authoritative references used for general educational context. External links open in a new tab and these organisations do not endorse FaunaHub. Emergency thresholds, first-aid procedures, and what belongs in any individual pet's plan should be confirmed with a licensed veterinarian who can assess your specific animal.";

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

const SRC_AVMA_FIRST_AID: SourceLink = {
  label: "AVMA — First Aid Tips for Pet Owners",
  url: "https://www.avma.org/resources-tools/pet-owners/emergencycare/first-aid-tips-pet-owners",
  type: "veterinary",
  note: "General first-aid guidance; emphasises veterinary care",
};

const SRC_AVMA_DISASTERS: SourceLink = {
  label: "AVMA — Pets and Disasters",
  url: "https://www.avma.org/resources-tools/pet-owners/emergency-care/pets-and-disasters",
  type: "veterinary",
  note: "Disaster and emergency preparedness for pet owners",
};

const SRC_AVMA_HOUSEHOLD_HAZARDS: SourceLink = {
  label: "AVMA — Household Hazards",
  url: "https://www.avma.org/resources-tools/pet-owners/petcare/household-hazards",
  type: "veterinary",
  note: "Common household dangers for pets",
};

const SRC_AVMA_WARM_WEATHER: SourceLink = {
  label: "AVMA — Warm Weather Pet Safety",
  url: "https://www.avma.org/resources-tools/pet-owners/petcare/warm-weather-pet-safety",
  type: "veterinary",
  note: "Heat-related risk and prevention guidance",
};

const SRC_AVMA_MICROCHIP: SourceLink = {
  label: "AVMA — Microchipping FAQ",
  url: "https://www.avma.org/resources-tools/pet-owners/petcare/microchips-reunite-pets-families/microchipping-faq",
  type: "veterinary",
  note: "How microchips help reunite lost pets with families",
};

const SRC_ASPCA_POISON: SourceLink = {
  label: "ASPCA Animal Poison Control Center",
  url: "https://www.aspca.org/pet-care/aspca-poison-control",
  type: "veterinary",
  note: "24/7 emergency animal-poisoning helpline (US)",
};

const SRC_ASPCA_PEOPLE_FOODS: SourceLink = {
  label: "ASPCA — People Foods to Avoid Feeding Your Pets",
  url: "https://www.aspca.org/pet-care/aspca-poison-control/people-foods-avoid-feeding-your-pets",
  type: "veterinary",
  note: "Common human foods that can be dangerous to pets",
};

const SRC_ASPCA_TOXIC_PLANTS: SourceLink = {
  label: "ASPCA — Toxic and Non-Toxic Plants",
  url: "https://www.aspca.org/pet-care/aspca-poison-control/toxic-and-non-toxic-plants",
  type: "veterinary",
  note: "Searchable plant-toxicity database",
};

const SRC_ASPCA_DISASTER: SourceLink = {
  label: "ASPCA — Disaster Preparedness",
  url: "https://www.aspca.org/pet-care/general-pet-care/disaster-preparedness",
  type: "veterinary",
  note: "Emergency and disaster planning for pet owners",
};

const SRC_ASPCA_HOT_WEATHER: SourceLink = {
  label: "ASPCA — Hot Weather Safety Tips",
  url: "https://www.aspca.org/pet-care/general-pet-care/hot-weather-safety-tips",
  type: "veterinary",
  note: "Preventing heat-related problems",
};

const SRC_ASPCA_TRAVEL: SourceLink = {
  label: "ASPCA — Travel Safety Tips",
  url: "https://www.aspca.org/pet-care/general-pet-care/travel-safety-tips",
  type: "veterinary",
  note: "Travelling safely with pets",
};

const SRC_MERCK: SourceLink = {
  label: "Merck Veterinary Manual",
  url: "https://www.merckvetmanual.com",
  type: "reference",
  note: "Comprehensive veterinary reference (consumer & professional)",
};

const SRC_CORNELL_FELINE: SourceLink = {
  label: "Cornell Feline Health Center",
  url: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center",
  type: "university",
  note: "Cornell University College of Veterinary Medicine — cats",
};

const SRC_READY_GOV: SourceLink = {
  label: "Ready.gov — Prepare Your Pets for Disasters",
  url: "https://www.ready.gov/pets",
  type: "government",
  note: "US government emergency-preparedness guidance for pet owners",
};

const SRC_REDCROSS_PETS: SourceLink = {
  label: "American Red Cross — Pet Disaster Preparedness",
  url: "https://www.redcross.org/get-help/how-to-prepare-for-emergencies/pet-disaster-preparedness.html",
  type: "animal-welfare",
  note: "Pet preparedness and first-aid guidance",
};

const SRC_HUMANEWORLD_LOST: SourceLink = {
  label: "Humane World for Animals — How to Find a Lost Pet",
  url: "https://www.humaneworld.org/en/resources/how-find-lost-dog",
  type: "animal-welfare",
  note: "Practical, humane lost-pet search guidance",
};

// ─── TYPES ─────────────────────────────────────────────────────────────────

export interface SafetySection {
  heading: string;
  intro?: string;
  bullets: string[];
}

export interface SafetyFAQ {
  question: string;
  answer: string;
}

export interface SafetyRelatedGroup {
  title: string;
  links: { label: string; href: string }[];
}

export type SafetyTone = "emergency-prep" | "poisoning" | "seasonal" | "travel" | "home" | "planning";

export interface PetSafetyArticle {
  slug: string;
  /** Always "/pet-safety/<slug>" */
  path: string;
  /** Meta title (brand suffix is added by buildArticleMetadata) */
  title: string;
  description: string;
  /** H1 */
  pageHeading: string;
  topicTag: string;
  tone: SafetyTone;
  /** Cautious answer shown near the top */
  directAnswer: string;
  /** Preparedness / what owners can safely observe or do */
  sections: SafetySection[];
  /** Optional warning-tone list of signs that may need urgent help */
  warningSigns?: SafetySection;
  /** Required: clear escalation guidance */
  whenToContactVet: SafetySection;
  /** Required: what NOT to do */
  whatNotToDo: SafetySection;
  /** Optional practical checklist */
  checklist?: SafetySection;
  faqs: SafetyFAQ[];
  sources: SourceLink[];
  related: SafetyRelatedGroup[];
  publishedTime: string;
  modifiedTime: string;
}

// Reusable escalation block — the generic "when to contact a vet" guidance.
const GENERIC_WHEN_TO_CONTACT: SafetySection = {
  heading: "When to contact a veterinarian or emergency clinic",
  intro:
    "These signs can have many causes and this page cannot diagnose them. When in doubt, the safest action is to call. Veterinary teams do telephone triage and can tell you whether to come in.",
  bullets: [
    "Difficulty breathing, choking, gasping, or blue/pale gums.",
    "Collapse, unresponsiveness, seizures, or sudden severe weakness.",
    "Suspected poisoning or ingestion of any toxic substance, plant, or medication.",
    "Heavy bleeding that does not stop, or a serious injury.",
    "Repeated vomiting, inability to urinate, or rapid worsening of any kind.",
    "Any time you are simply unsure — call a licensed veterinarian or emergency clinic.",
  ],
};

// ─── ARTICLES ──────────────────────────────────────────────────────────────

export const PET_SAFETY_ARTICLES: PetSafetyArticle[] = [
  {
    slug: "pet-emergency-checklist",
    path: "/pet-safety/pet-emergency-checklist",
    title: "Pet Emergency Checklist — Prepare Before You Need It",
    description:
      "A calm preparedness checklist for pet owners: emergency contacts, transport plan, medical-record folder, poison-control number, and an emergency fund. Educational, not treatment advice.",
    pageHeading: "Pet Emergency Checklist",
    topicTag: "Emergency prep",
    tone: "emergency-prep",
    directAnswer:
      "The best time to plan for a pet emergency is before one happens. This checklist helps you organise contacts, transport, records, and funds in advance so that, in a stressful moment, you can act quickly and get your pet to professional care. It does not tell you how to treat an emergency — that belongs with a licensed veterinarian.",
    sections: [
      {
        heading: "Build your emergency information ahead of time",
        bullets: [
          "Save your regular veterinarian's phone number and address where you can find them instantly.",
          "Identify your nearest 24-hour or emergency animal clinic now, and note how to get there at night.",
          "Keep an animal poison-control number on hand for suspected ingestions (for example, the ASPCA Animal Poison Control Center in the US).",
          "Keep a current photo of each pet and a note of species, breed, age, weight, and microchip number.",
          "Store copies of vaccination records and any known conditions or medications in one folder.",
        ],
      },
      {
        heading: "Prepare for transport and the unexpected",
        bullets: [
          "Have a suitable carrier for cats and small pets, and a leash and slip-lead for dogs, ready to grab.",
          "Keep a sturdy towel or blanket nearby — useful for safe lifting and warmth on the way to care.",
          "Know who could drive you so you are not driving while distressed.",
          "Plan a backup caretaker who could act if you are unreachable.",
          "Consider an emergency veterinary fund, pet insurance, or both, so cost is not a barrier to care.",
        ],
      },
    ],
    checklist: {
      heading: "Quick preparedness checklist",
      bullets: [
        "Regular vet — name, phone, address saved.",
        "Nearest emergency clinic — phone, address, route saved.",
        "Animal poison-control number saved.",
        "Microchip number recorded and registry contact details up to date.",
        "Folder of vaccination records, conditions, and current medications.",
        "Carrier, leash, and towel kept somewhere easy to reach.",
        "Emergency fund and/or insurance plan in place.",
        "Backup caretaker identified and briefed.",
      ],
    },
    whenToContactVet: GENERIC_WHEN_TO_CONTACT,
    whatNotToDo: {
      heading: "What not to do",
      bullets: [
        "Do not use this checklist to decide a situation is harmless — when in doubt, contact a veterinarian.",
        "Do not give any medication, including human medicine, unless a veterinarian instructs you to.",
        "Do not wait to gather paperwork if your pet is in obvious distress — get to professional care first.",
        "Do not rely on memory for emergency numbers; write them down and save them in your phone.",
      ],
    },
    faqs: [
      {
        question: "What is the single most useful thing to prepare?",
        answer:
          "Knowing where your nearest 24-hour or emergency clinic is, and having its number saved, before you need it. In an emergency, minutes spent searching for a clinic are minutes lost.",
      },
      {
        question: "Should I keep medication in an emergency kit?",
        answer:
          "Do not stock or give medication on your own. Ask your veterinarian what, if anything, belongs in your specific pet's plan. Many human medications and home remedies are unsafe for animals.",
      },
      {
        question: "Is a pet emergency fund really necessary?",
        answer:
          "Emergency veterinary care is one of the most unpredictable costs of pet ownership. A dedicated fund, pet insurance, or both can help ensure that cost is not a barrier to timely care. See the linked planning pages.",
      },
    ],
    sources: [SRC_READY_GOV, SRC_AVMA_DISASTERS, SRC_ASPCA_DISASTER],
    related: [
      {
        title: "Plan and escalate",
        links: [
          { label: "When to go to the emergency vet", href: "/pet-safety/when-to-go-to-emergency-vet" },
          { label: "Pet emergency contact list", href: "/pet-safety/pet-emergency-contact-list" },
          { label: "When to call an emergency vet", href: "/vet-care/when-to-call-an-emergency-vet" },
        ],
      },
      {
        title: "Budget responsibly",
        links: [
          { label: "Emergency vet costs", href: "/vet-care/emergency-vet-costs" },
          { label: "Pet insurance vs emergency fund", href: "/pet-insurance/pet-insurance-vs-emergency-fund" },
          { label: "Pet Cost Calculator", href: "/tools/pet-cost-calculator" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "pet-first-aid-kit",
    path: "/pet-safety/pet-first-aid-kit",
    title: "Pet First-Aid Kit — General Categories to Prepare",
    description:
      "An educational overview of general pet first-aid kit categories — documents, carrier, contact numbers, comfort items — and why you should ask your veterinarian what belongs in your pet's kit.",
    pageHeading: "Pet First-Aid Kit",
    topicTag: "First-aid kit",
    tone: "emergency-prep",
    directAnswer:
      "A pet first-aid kit is mainly about being organised and reaching professional help quickly — not about performing medical procedures at home. This page covers the general, non-medical categories most kits include and stresses one rule: ask your veterinarian what belongs in your specific pet's kit, and never administer treatment or medication without their guidance.",
    sections: [
      {
        heading: "General, non-medical categories most kits include",
        intro:
          "These are organisational and comfort items. They do not replace veterinary care — they help you get to it.",
        bullets: [
          "Your veterinarian's and nearest emergency clinic's phone numbers and addresses.",
          "An animal poison-control number.",
          "Copies of vaccination records, known conditions, and a current photo of your pet.",
          "A spare leash, a slip-lead, and an appropriately sized carrier.",
          "A clean towel or blanket for warmth and safe handling.",
          "A small flashlight, and a list of your pet's normal weight and any medications.",
        ],
      },
      {
        heading: "Let your veterinarian guide the medical contents",
        bullets: [
          "Ask your veterinarian what first-aid supplies are appropriate for your pet's species, size, and health.",
          "Ask them to show you how, and whether, to use anything they recommend.",
          "Keep the kit somewhere you can grab it quickly, and check it periodically so nothing is expired or missing.",
          "Store a copy of key contact numbers in a second place, such as your phone.",
        ],
      },
    ],
    checklist: {
      heading: "Kit organisation checklist",
      bullets: [
        "Contact numbers: regular vet, emergency clinic, poison control.",
        "Documents: vaccination records, conditions, medications list, recent photo.",
        "Handling: spare leash, slip-lead, carrier, towel/blanket.",
        "Practical: flashlight, your pet's normal weight noted.",
        "Vet-recommended supplies, with instructions, only as your veterinarian advises.",
      ],
    },
    whenToContactVet: GENERIC_WHEN_TO_CONTACT,
    whatNotToDo: {
      heading: "What not to do",
      bullets: [
        "Do not store or administer any medication unless your veterinarian has prescribed it and shown you how.",
        "Do not attempt wound treatment, bandaging, or any procedure based on this page — get veterinary guidance.",
        "Do not assume a kit means you can manage an emergency at home; its purpose is to help you reach professional care.",
        "Do not include anything you have not been shown how to use safely.",
      ],
    },
    faqs: [
      {
        question: "What should actually go in my pet's first-aid kit?",
        answer:
          "Ask your veterinarian. The right contents depend on your pet's species, size, and health. This page lists general organisational and contact items; medical supplies should be chosen and demonstrated by a professional.",
      },
      {
        question: "Can I buy a pre-made kit instead?",
        answer:
          "Pre-made kits can be a starting point, but review the contents with your veterinarian so you understand what each item is for and whether anything should be added or removed for your pet.",
      },
      {
        question: "How often should I check the kit?",
        answer:
          "Check it periodically — for example, when you renew vaccinations — so contact numbers are current and nothing is expired or missing.",
      },
    ],
    sources: [SRC_AVMA_FIRST_AID, SRC_REDCROSS_PETS, SRC_READY_GOV],
    related: [
      {
        title: "Preparedness",
        links: [
          { label: "Pet emergency checklist", href: "/pet-safety/pet-emergency-checklist" },
          { label: "Pet emergency contact list", href: "/pet-safety/pet-emergency-contact-list" },
          { label: "Home safety for pets", href: "/pet-safety/home-safety-for-pets" },
        ],
      },
      {
        title: "Veterinary planning",
        links: [
          { label: "First vet visit checklist", href: "/vet-care/first-vet-visit-checklist" },
          { label: "Vet care hub", href: "/vet-care" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "when-to-go-to-emergency-vet",
    path: "/pet-safety/when-to-go-to-emergency-vet",
    title: "When to Go to the Emergency Vet — Warning Signs Guide",
    description:
      "A cautious educational guide to warning signs that may mean your pet needs urgent veterinary care, and why calling first can help. Not a diagnosis tool.",
    pageHeading: "When to Go to the Emergency Vet",
    topicTag: "Emergency signs",
    tone: "emergency-prep",
    directAnswer:
      "If you are unsure whether something is an emergency, the safest action is usually to contact a licensed veterinarian or emergency animal clinic. The signs below are not exhaustive and not every pet shows every sign — they are prompts to seek professional help, not a way to diagnose from a screen. When in doubt, call.",
    sections: [
      {
        heading: "How to decide",
        bullets: [
          "If your pet is in obvious distress, do not wait — go to an emergency clinic.",
          "If you are uncertain, call first. Telephone triage helps the clinic prepare and helps you decide.",
          "For a suspected poisoning or ingestion, contact a veterinarian or an animal poison-control line immediately.",
          "Bring useful details: what you saw, when it started, your pet's species, age, and weight, and any known conditions or medications.",
        ],
      },
    ],
    warningSigns: {
      heading: "Signs that may warrant urgent veterinary contact",
      intro:
        "This list is not exhaustive, and these signs can have many causes. Any of the following — especially more than one, or persistent — generally warrants calling a licensed veterinarian or emergency clinic. Specific judgement belongs with a professional.",
      bullets: [
        "Difficulty breathing, choking, or gasping.",
        "Collapse, unresponsiveness, or seizures.",
        "Pale, white, or blue gums or tongue.",
        "Severe or unstoppable bleeding, or a major injury.",
        "Suspected ingestion of a toxic substance, plant, or medication.",
        "Repeated vomiting or severe diarrhoea, especially with weakness.",
        "Straining to urinate or inability to urinate — can be life-threatening, particularly in male cats.",
        "A distended or painful abdomen, or repeated unproductive retching, particularly in deep-chested dogs.",
        "Signs of severe pain, sudden inability to use the legs, or rapid worsening of any kind.",
        "Heat-related signs: heavy panting, weakness, or collapse on a hot day.",
      ],
    },
    whenToContactVet: {
      heading: "When to contact a veterinarian or emergency clinic",
      intro: "Do not try to diagnose from this page.",
      bullets: [
        "Contact a clinic immediately if you see any of the warning signs above.",
        "Contact a clinic any time you are unsure — calling is always reasonable.",
        "If your regular vet is closed, call a 24-hour or emergency animal hospital.",
        "For suspected poisoning, contact a veterinarian or an animal poison-control line right away.",
      ],
    },
    whatNotToDo: {
      heading: "What not to do",
      bullets: [
        "Do not adopt a \"wait and see\" approach with the signs above — they can escalate quickly.",
        "Do not give human medications, home remedies, or food and water to a pet that is weak, vomiting, or unconscious.",
        "Do not assume a single normal-looking moment means the danger has passed.",
        "Do not delay seeking help because you are unsure — call and let a professional decide.",
      ],
    },
    faqs: [
      {
        question: "Should I always go straight to the clinic?",
        answer:
          "If you suspect a life-threatening situation, yes. For ambiguous cases, calling first allows triage and can save time on arrival. The clinic can also tell you what to do or avoid on the way.",
      },
      {
        question: "What if I cannot reach my regular vet?",
        answer:
          "Call a 24-hour clinic, an emergency animal hospital, or an animal poison-control line if relevant. Do not delay seeking help if the situation seems serious.",
      },
      {
        question: "Can I treat the problem at home first?",
        answer:
          "Home treatment is generally not appropriate in a true emergency, and many home remedies and human medications are unsafe for pets. Get professional advice.",
      },
    ],
    sources: [SRC_AVMA_PETCARE, SRC_ASPCA_POISON, SRC_MERCK],
    related: [
      {
        title: "Related safety pages",
        links: [
          { label: "Pet poisoning warning signs", href: "/pet-safety/pet-poisoning-warning-signs" },
          { label: "Pet heatstroke warning signs", href: "/pet-safety/pet-heatstroke-warning-signs" },
          { label: "Pet choking warning signs", href: "/pet-safety/pet-choking-warning-signs" },
        ],
      },
      {
        title: "Vet care",
        links: [
          { label: "When to call an emergency vet", href: "/vet-care/when-to-call-an-emergency-vet" },
          { label: "Emergency vet costs", href: "/vet-care/emergency-vet-costs" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "pet-poisoning-warning-signs",
    path: "/pet-safety/pet-poisoning-warning-signs",
    title: "Pet Poisoning Warning Signs — Recognise and Escalate",
    description:
      "An educational, cautious overview of signs that may suggest a pet has been exposed to something toxic, and why to contact a veterinarian or animal poison control immediately. Not a treatment guide.",
    pageHeading: "Pet Poisoning Warning Signs",
    topicTag: "Poisoning",
    tone: "poisoning",
    directAnswer:
      "If you think your pet may have eaten or been exposed to something toxic, contact a licensed veterinarian or an animal poison-control line immediately — even before symptoms appear. Many poisonings are most treatable early. This page helps you recognise possible warning signs and escalate. It does not tell you how to treat poisoning, and you should not attempt home detox.",
    sections: [
      {
        heading: "Possible signs of poisoning (these can have many causes)",
        intro:
          "No single sign confirms poisoning, and some serious exposures show few early signs. Do not wait for symptoms if you suspect ingestion — call for guidance.",
        bullets: [
          "Vomiting, drooling, or repeated retching.",
          "Diarrhoea or sudden loss of appetite.",
          "Unusual lethargy, weakness, wobbliness, or tremors.",
          "Agitation, restlessness, or disorientation.",
          "Difficulty breathing, or pale or unusual gum colour.",
          "Seizures, collapse, or unresponsiveness.",
        ],
      },
      {
        heading: "What you can safely do",
        bullets: [
          "Move your pet away from the suspected substance and prevent further access.",
          "Note what was eaten, roughly how much, and when — and keep any packaging, plant material, or label.",
          "Call your veterinarian or an animal poison-control line and follow their instructions exactly.",
          "Have your pet's species, age, and weight ready when you call.",
        ],
      },
    ],
    warningSigns: {
      heading: "Signs that may warrant urgent veterinary contact",
      intro: "Any of these — especially after a suspected exposure — warrants immediate professional contact.",
      bullets: [
        "Seizures, tremors, or collapse.",
        "Difficulty breathing, or pale, white, or blue gums.",
        "Repeated vomiting or severe weakness.",
        "Unresponsiveness or rapid worsening.",
        "Known ingestion of a substance you have been told is toxic.",
      ],
    },
    whenToContactVet: {
      heading: "When to contact a veterinarian or poison control",
      intro: "For suspected poisoning, sooner is safer. Do not try to diagnose from this page.",
      bullets: [
        "Contact a veterinarian or animal poison-control line immediately for any suspected ingestion — even before symptoms appear.",
        "Bring or describe the substance, the amount, and the time of exposure.",
        "Follow their instructions precisely; they may advise you to come in right away.",
        "If your pet is seizing, collapsed, or struggling to breathe, treat it as an emergency and go to the nearest clinic.",
      ],
    },
    whatNotToDo: {
      heading: "What not to do",
      bullets: [
        "Do not try to make your pet vomit unless a veterinarian or poison-control professional tells you to — it can be dangerous with certain substances.",
        "Do not give hydrogen peroxide, salt, milk, oil, or any home remedy unless explicitly instructed by a professional.",
        "Do not give any medication to \"counteract\" the poison.",
        "Do not wait for symptoms to appear before calling if you suspect ingestion.",
      ],
    },
    faqs: [
      {
        question: "Should I wait to see if symptoms develop?",
        answer:
          "No. For many poisons, treatment is most effective before symptoms appear. If you suspect ingestion, contact a veterinarian or animal poison-control line immediately, even if your pet seems fine.",
      },
      {
        question: "Should I make my pet vomit?",
        answer:
          "Not on your own. Inducing vomiting is unsafe with some substances and can cause serious harm. Only do so if a veterinarian or poison-control professional specifically instructs you to.",
      },
      {
        question: "What information will the clinic want?",
        answer:
          "What was eaten, roughly how much, when it happened, your pet's species, age, and weight, and any packaging or plant material you can bring or photograph.",
      },
    ],
    sources: [SRC_ASPCA_POISON, SRC_ASPCA_PEOPLE_FOODS, SRC_AVMA_HOUSEHOLD_HAZARDS],
    related: [
      {
        title: "Specific situations",
        links: [
          { label: "Dog ate chocolate — what to do", href: "/pet-safety/dog-ate-chocolate-what-to-do" },
          { label: "Dog ate grapes — what to do", href: "/pet-safety/dog-ate-grapes-what-to-do" },
          { label: "Cat ate toxic food — what to do", href: "/pet-safety/cat-ate-toxic-food-what-to-do" },
        ],
      },
      {
        title: "Prevention",
        links: [
          { label: "Home safety for pets", href: "/pet-safety/home-safety-for-pets" },
          { label: "Dog food safety", href: "/dogs/food" },
          { label: "Cat food safety", href: "/cats/food" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "dog-ate-chocolate-what-to-do",
    path: "/pet-safety/dog-ate-chocolate-what-to-do",
    title: "Dog Ate Chocolate — What to Do First",
    description:
      "If your dog ate chocolate, contact a veterinarian or animal poison control right away — do not estimate safety from a webpage. A cautious, escalation-focused guide with no dose thresholds.",
    pageHeading: "Dog Ate Chocolate — What to Do",
    topicTag: "Poisoning",
    tone: "poisoning",
    directAnswer:
      "If your dog has eaten chocolate, contact a licensed veterinarian or an animal poison-control line now. Chocolate can be toxic to dogs, and the risk depends on factors that should not be judged from a webpage. Do not try to estimate whether the amount was \"safe.\" The most useful thing you can do is gather information and let a professional advise you.",
    sections: [
      {
        heading: "Do this first",
        bullets: [
          "Contact your veterinarian or an animal poison-control line immediately and follow their guidance.",
          "Keep the wrapper or packaging so you can describe the type and quantity of chocolate.",
          "Note roughly how much was eaten, what kind, and what time it happened.",
          "Have your dog's weight, age, and any health conditions ready.",
          "Prevent access to any remaining chocolate.",
        ],
      },
      {
        heading: "Why you should not judge this from a webpage",
        bullets: [
          "Chocolate toxicity depends on the type and amount eaten and the individual dog — this is a professional assessment, not a self-check.",
          "Different chocolates carry different risks, and a small dog and a large dog are not the same.",
          "A professional can weigh these factors quickly; a generic webpage cannot.",
          "Acting early is generally safer than waiting to see what happens.",
        ],
      },
    ],
    whenToContactVet: {
      heading: "When to contact a veterinarian or poison control",
      intro: "For chocolate ingestion, contact a professional right away rather than waiting. Do not try to diagnose from this page.",
      bullets: [
        "Call as soon as you know or suspect your dog ate chocolate — do not wait for symptoms.",
        "Describe the chocolate type, the amount, and the time, and share your dog's weight.",
        "If your dog is restless, vomiting repeatedly, having tremors or seizures, or has a racing heartbeat, treat it as an emergency and go to the nearest clinic.",
        "Follow the professional's instructions exactly.",
      ],
    },
    whatNotToDo: {
      heading: "What not to do",
      bullets: [
        "Do not use an online \"chocolate toxicity calculator\" to decide whether to seek help — call a professional instead.",
        "Do not assume a small amount is safe.",
        "Do not try to make your dog vomit unless a veterinarian or poison-control professional tells you to.",
        "Do not give any home remedy or medication to \"flush it out.\"",
      ],
    },
    faqs: [
      {
        question: "My dog only ate a little — is that okay?",
        answer:
          "Do not assume any amount is safe. Risk depends on the chocolate type, the amount, and your individual dog. Contact a veterinarian or animal poison-control line and let them assess it.",
      },
      {
        question: "What information should I have ready?",
        answer:
          "The type of chocolate, roughly how much was eaten, when it happened, and your dog's weight, age, and any health conditions. Keep the wrapper if you can.",
      },
      {
        question: "Where can I learn more about chocolate and dogs generally?",
        answer:
          "See our educational page on whether dogs can eat chocolate for background. In an active situation, though, contacting a veterinarian or poison control comes first.",
      },
    ],
    sources: [SRC_ASPCA_POISON, SRC_ASPCA_PEOPLE_FOODS, SRC_MERCK],
    related: [
      {
        title: "Related",
        links: [
          { label: "Can dogs eat chocolate?", href: "/dogs/food/can-dogs-eat-chocolate" },
          { label: "Pet poisoning warning signs", href: "/pet-safety/pet-poisoning-warning-signs" },
          { label: "Dog ate grapes — what to do", href: "/pet-safety/dog-ate-grapes-what-to-do" },
        ],
      },
      {
        title: "Prevention",
        links: [
          { label: "Home safety for pets", href: "/pet-safety/home-safety-for-pets" },
          { label: "Dog health hub", href: "/dogs/health" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "dog-ate-grapes-what-to-do",
    path: "/pet-safety/dog-ate-grapes-what-to-do",
    title: "Dog Ate Grapes or Raisins — What to Do First",
    description:
      "If your dog ate grapes or raisins, contact a veterinarian or animal poison control immediately. A cautious, escalation-first guide with no thresholds and no home treatment.",
    pageHeading: "Dog Ate Grapes — What to Do",
    topicTag: "Poisoning",
    tone: "poisoning",
    directAnswer:
      "If your dog has eaten grapes or raisins, contact a licensed veterinarian or an animal poison-control line immediately. Grapes and raisins can be dangerous to dogs, and there is no reliable \"safe amount\" you can work out at home. Treat any ingestion as a reason to get professional guidance promptly rather than waiting.",
    sections: [
      {
        heading: "Do this first",
        bullets: [
          "Contact your veterinarian or an animal poison-control line right away.",
          "Note roughly how many grapes or raisins were eaten and when.",
          "Keep any packaging and prevent access to the rest.",
          "Have your dog's weight, age, and any health conditions ready.",
          "Follow the professional's instructions exactly.",
        ],
      },
      {
        heading: "Why waiting is not the safe option",
        bullets: [
          "Grape and raisin toxicity is taken seriously by veterinary and poison-control bodies, and early professional guidance is generally safer.",
          "There is no dependable home method to judge whether the amount was harmless.",
          "Individual dogs can respond differently to the same exposure.",
          "Getting advice promptly keeps all options open.",
        ],
      },
    ],
    whenToContactVet: {
      heading: "When to contact a veterinarian or poison control",
      intro: "For grape or raisin ingestion, contact a professional promptly. Do not try to diagnose from this page.",
      bullets: [
        "Call as soon as you know or suspect your dog ate grapes or raisins — do not wait for symptoms.",
        "Describe the amount and time, and share your dog's weight.",
        "If your dog is vomiting repeatedly, very lethargic, or producing little or no urine, treat it as an emergency and go to the nearest clinic.",
        "Follow the professional's instructions precisely.",
      ],
    },
    whatNotToDo: {
      heading: "What not to do",
      bullets: [
        "Do not assume a few grapes or raisins are harmless.",
        "Do not wait to see whether symptoms develop before contacting a professional.",
        "Do not try to make your dog vomit unless a veterinarian or poison-control professional instructs you to.",
        "Do not give any home remedy or medication.",
      ],
    },
    faqs: [
      {
        question: "Is a small number of grapes really a problem?",
        answer:
          "Do not assume any amount is safe. Veterinary and poison-control organisations treat grape and raisin ingestion seriously, and there is no reliable home way to judge risk. Contact a professional promptly.",
      },
      {
        question: "What about raisins, sultanas, or currants?",
        answer:
          "Dried forms are part of the same concern. Treat ingestion the same way: contact a veterinarian or animal poison-control line right away and follow their guidance.",
      },
      {
        question: "Where can I read more generally?",
        answer:
          "See our educational page on whether dogs can eat grapes for background. In an active situation, contacting a veterinarian or poison control comes first.",
      },
    ],
    sources: [SRC_ASPCA_POISON, SRC_ASPCA_PEOPLE_FOODS, SRC_MERCK],
    related: [
      {
        title: "Related",
        links: [
          { label: "Can dogs eat grapes?", href: "/dogs/food/can-dogs-eat-grapes" },
          { label: "Pet poisoning warning signs", href: "/pet-safety/pet-poisoning-warning-signs" },
          { label: "Dog ate chocolate — what to do", href: "/pet-safety/dog-ate-chocolate-what-to-do" },
        ],
      },
      {
        title: "Prevention",
        links: [
          { label: "Home safety for pets", href: "/pet-safety/home-safety-for-pets" },
          { label: "Dog food safety", href: "/dogs/food" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "cat-ate-toxic-food-what-to-do",
    path: "/pet-safety/cat-ate-toxic-food-what-to-do",
    title: "Cat Ate Something Toxic — What to Do First",
    description:
      "If your cat ate chocolate, onions or garlic, lilies, or human medication, contact a veterinarian or animal poison control immediately. A cautious escalation guide for cat owners, with no home treatment.",
    pageHeading: "Cat Ate Toxic Food — What to Do",
    topicTag: "Poisoning",
    tone: "poisoning",
    directAnswer:
      "If your cat may have eaten something toxic, contact a licensed veterinarian or an animal poison-control line immediately. Cats are sensitive to several common substances, and some exposures are best treated early — before symptoms appear. This page helps you recognise danger categories and escalate. It is not a treatment guide.",
    sections: [
      {
        heading: "Common danger categories for cats",
        intro:
          "These are widely recognised risk categories for cats. This is not a complete list, and it cannot tell you how serious a specific exposure is — a professional can.",
        bullets: [
          "Chocolate and caffeine.",
          "Onions, garlic, leeks, and chives (including powders and many cooked dishes).",
          "Lilies and many other plants — lilies in particular are a serious concern for cats.",
          "Human medications and supplements of any kind.",
          "Grapes and raisins, alcohol, and xylitol-sweetened products.",
        ],
      },
      {
        heading: "What you can safely do",
        bullets: [
          "Move your cat away from the substance and prevent further access.",
          "Note what was eaten, roughly how much, and when — and keep any packaging or plant material.",
          "Contact your veterinarian or an animal poison-control line and follow their instructions exactly.",
          "Have your cat's age, weight, and any health conditions ready.",
        ],
      },
    ],
    warningSigns: {
      heading: "Signs that may warrant urgent veterinary contact",
      intro: "Any of these — especially after a suspected exposure — warrants immediate professional contact.",
      bullets: [
        "Drooling, vomiting, or repeated retching.",
        "Lethargy, weakness, hiding, or wobbliness.",
        "Difficulty breathing, or pale or unusual gum colour.",
        "Tremors, seizures, or collapse.",
        "Any known ingestion of a substance you have been told is toxic to cats.",
      ],
    },
    whenToContactVet: {
      heading: "When to contact a veterinarian or poison control",
      intro: "For cats, several exposures are best handled early. Do not try to diagnose from this page.",
      bullets: [
        "Contact a professional immediately for any suspected ingestion — even before symptoms appear.",
        "This is especially urgent for lilies, human medication, and onion- or garlic-containing foods.",
        "Describe the substance, amount, and time, and share your cat's weight.",
        "If your cat is collapsed, seizing, or struggling to breathe, go to the nearest clinic now.",
      ],
    },
    whatNotToDo: {
      heading: "What not to do",
      bullets: [
        "Do not try to make your cat vomit — this can be dangerous and is not appropriate for many substances.",
        "Do not give milk, salt, oil, or any home remedy to \"dilute\" the poison.",
        "Do not give any human or pet medication unless a veterinarian instructs you to.",
        "Do not wait for symptoms before calling if you suspect ingestion.",
      ],
    },
    faqs: [
      {
        question: "My cat brushed against a lily — should I worry?",
        answer:
          "Lilies are a serious concern for cats, and even small exposures can matter. Contact a veterinarian or animal poison-control line promptly and describe the plant if you can.",
      },
      {
        question: "Is a tiny amount of onion or garlic a problem?",
        answer:
          "Do not assume small amounts are safe, especially in cooked dishes and powders. Contact a professional and let them assess the exposure.",
      },
      {
        question: "What should I have ready when I call?",
        answer:
          "What was eaten, roughly how much, when it happened, your cat's age and weight, and any packaging or plant material you can bring or photograph.",
      },
    ],
    sources: [SRC_ASPCA_POISON, SRC_ASPCA_PEOPLE_FOODS, SRC_ASPCA_TOXIC_PLANTS, SRC_CORNELL_FELINE],
    related: [
      {
        title: "Related",
        links: [
          { label: "Can cats eat chocolate?", href: "/cats/food/can-cats-eat-chocolate" },
          { label: "Pet poisoning warning signs", href: "/pet-safety/pet-poisoning-warning-signs" },
          { label: "Cat food safety", href: "/cats/food" },
        ],
      },
      {
        title: "Prevention",
        links: [
          { label: "Home safety for pets", href: "/pet-safety/home-safety-for-pets" },
          { label: "Cat health hub", href: "/cats/health" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "pet-heatstroke-warning-signs",
    path: "/pet-safety/pet-heatstroke-warning-signs",
    title: "Pet Heatstroke Warning Signs — Recognise and Prevent",
    description:
      "An educational guide to heat-related warning signs in pets and practical prevention. Heatstroke is an emergency — contact a veterinarian immediately. No home cooling protocols.",
    pageHeading: "Pet Heatstroke Warning Signs",
    topicTag: "Heat safety",
    tone: "seasonal",
    directAnswer:
      "Heat-related illness in pets can be life-threatening and progress quickly. If you think a pet is overheating, move it out of the heat and contact a licensed veterinarian or emergency clinic immediately — call them on the way. This page focuses on recognising warning signs and preventing overheating; follow your veterinarian's or the emergency team's instructions for any cooling.",
    sections: [
      {
        heading: "Prevent overheating",
        bullets: [
          "Never leave a pet in a parked vehicle — interiors heat dangerously fast, even with windows cracked.",
          "Provide constant access to shade and fresh water in warm weather.",
          "Avoid exercise during the hottest part of the day; choose early morning or evening.",
          "Be extra cautious with flat-faced (brachycephalic) breeds, older pets, overweight pets, and those with heart or breathing conditions.",
          "Check that pavement or sand is not too hot before walking your pet on it.",
        ],
      },
    ],
    warningSigns: {
      heading: "Possible signs of heat-related illness",
      intro:
        "These signs can have many causes, and not every pet shows every sign. If you suspect overheating, treat it as urgent — move the pet to a cooler place and contact a veterinarian immediately.",
      bullets: [
        "Heavy, frantic, or persistent panting.",
        "Excessive drooling or very red gums and tongue.",
        "Weakness, stumbling, or reluctance to move.",
        "Vomiting or diarrhoea.",
        "Disorientation, collapse, or seizures.",
      ],
    },
    whenToContactVet: {
      heading: "When to contact a veterinarian or emergency clinic",
      intro: "Suspected heatstroke is an emergency. Do not try to diagnose from this page.",
      bullets: [
        "Move the pet out of the heat to a cooler, shaded, or air-conditioned area straight away.",
        "Contact a licensed veterinarian or emergency clinic immediately and follow their instructions, including any cooling steps they direct.",
        "Offer small amounts of cool water if the pet is alert and able to drink, but do not force it.",
        "Go to the nearest clinic without delay if the pet is collapsed, disoriented, seizing, or struggling to breathe.",
      ],
    },
    whatNotToDo: {
      heading: "What not to do",
      bullets: [
        "Do not use ice-cold water or ice baths, which can be harmful — follow veterinary guidance on cooling.",
        "Do not assume a pet has \"cooled down and is fine\" — heat illness can worsen internally even after panting eases.",
        "Do not delay veterinary contact while trying to manage it at home.",
        "Do not leave any pet in a parked car, even briefly.",
      ],
    },
    faqs: [
      {
        question: "Is heatstroke really an emergency?",
        answer:
          "Yes. Heat-related illness can become life-threatening quickly and can affect internal organs. If you suspect it, move the pet out of the heat and contact a veterinarian or emergency clinic immediately.",
      },
      {
        question: "How should I cool my pet down?",
        answer:
          "Move the pet to a cooler area and follow the instructions of your veterinarian or the emergency team. Avoid ice-cold water. The priority is getting professional care quickly.",
      },
      {
        question: "Which pets are most at risk?",
        answer:
          "Flat-faced breeds, older or overweight pets, very young animals, and pets with heart or breathing conditions can be more vulnerable. Any pet can overheat in hot, humid, or poorly ventilated conditions.",
      },
    ],
    sources: [SRC_AVMA_WARM_WEATHER, SRC_ASPCA_HOT_WEATHER, SRC_MERCK],
    related: [
      {
        title: "Seasonal safety",
        links: [
          { label: "Fireworks and pet safety", href: "/pet-safety/fireworks-and-pet-safety" },
          { label: "Pet travel safety checklist", href: "/pet-safety/pet-travel-safety-checklist" },
          { label: "When to go to the emergency vet", href: "/pet-safety/when-to-go-to-emergency-vet" },
        ],
      },
      {
        title: "Health hubs",
        links: [
          { label: "Dog health hub", href: "/dogs/health" },
          { label: "Cat health hub", href: "/cats/health" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "pet-choking-warning-signs",
    path: "/pet-safety/pet-choking-warning-signs",
    title: "Pet Choking Warning Signs — Recognise and Get Help",
    description:
      "An educational guide to recognising possible choking in pets, getting emergency veterinary help, and reducing choking risk. Not a guide to airway procedures or the Heimlich manoeuvre.",
    pageHeading: "Pet Choking Warning Signs",
    topicTag: "Choking",
    tone: "emergency-prep",
    directAnswer:
      "A pet that genuinely cannot breathe is a life-threatening emergency. If you think a pet is choking, contact a licensed veterinarian or emergency clinic immediately and get to professional care as fast as safely possible. This page helps you recognise warning signs and reduce risk. It does not teach airway procedures, which can cause serious harm when done incorrectly.",
    sections: [
      {
        heading: "Reduce the risk of choking",
        bullets: [
          "Choose chews and toys appropriately sized for your pet, and supervise their use.",
          "Discard small, hard, or breakable items and worn toys that could splinter or be swallowed.",
          "Keep small household objects, bones, and string-like items out of reach.",
          "Feed in a calm setting; some pets gulp food and benefit from slow-feeder bowls (ask your veterinarian).",
          "Learn what your pet's normal breathing looks like so changes are easier to notice.",
        ],
      },
    ],
    warningSigns: {
      heading: "Possible signs of choking or airway distress",
      intro:
        "These signs can have several causes. True breathing difficulty is always an emergency — contact a veterinarian or emergency clinic immediately.",
      bullets: [
        "Sudden distress, panic, or frantic pawing at the mouth.",
        "Gagging, retching, or exaggerated swallowing attempts.",
        "Noisy, laboured, or absent breathing.",
        "Pale, white, or blue gums or tongue.",
        "Collapse or loss of consciousness.",
      ],
    },
    whenToContactVet: {
      heading: "When to contact a veterinarian or emergency clinic",
      intro: "Treat genuine breathing trouble as a true emergency. Do not try to diagnose from this page.",
      bullets: [
        "Contact a veterinarian or emergency clinic immediately if you suspect choking or any breathing difficulty.",
        "Call on the way so the team can prepare for your arrival.",
        "If you can see and easily remove an object from the mouth without being bitten or pushing it deeper, do so cautiously — but do not delay getting to care.",
        "Go straight to the nearest clinic if your pet collapses or has blue or pale gums.",
      ],
    },
    whatNotToDo: {
      heading: "What not to do",
      bullets: [
        "Do not perform the Heimlich manoeuvre or other airway techniques based on a webpage — done incorrectly they can injure your pet.",
        "Do not blindly put your fingers deep into the throat or sweep for an object you cannot see — this can push it further or cause bites.",
        "Do not waste time on home techniques if your pet is in severe distress — get to a clinic.",
        "Do not assume coughing alone means choking; many things cause coughing, so let a professional assess it.",
      ],
    },
    faqs: [
      {
        question: "How do I tell choking from coughing?",
        answer:
          "It can be hard to tell, and many conditions cause coughing or gagging. If your pet is in real breathing distress or has pale or blue gums, treat it as an emergency and contact a veterinarian or emergency clinic immediately.",
      },
      {
        question: "Should I learn the Heimlich for pets?",
        answer:
          "Hands-on emergency techniques are best learned in person from a qualified instructor or your veterinarian, who can show correct, safe methods for your pet. A webpage cannot teach this safely.",
      },
      {
        question: "How can I prevent choking?",
        answer:
          "Use appropriately sized, sturdy chews and toys, supervise chewing, discard worn items, and keep small swallowable objects out of reach. Ask your veterinarian about slow feeding if your pet gulps food.",
      },
    ],
    sources: [SRC_AVMA_FIRST_AID, SRC_REDCROSS_PETS, SRC_MERCK],
    related: [
      {
        title: "Emergency recognition",
        links: [
          { label: "When to go to the emergency vet", href: "/pet-safety/when-to-go-to-emergency-vet" },
          { label: "Pet first-aid kit", href: "/pet-safety/pet-first-aid-kit" },
          { label: "Pet emergency checklist", href: "/pet-safety/pet-emergency-checklist" },
        ],
      },
      {
        title: "Vet care",
        links: [
          { label: "When to call an emergency vet", href: "/vet-care/when-to-call-an-emergency-vet" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "lost-pet-checklist",
    path: "/pet-safety/lost-pet-checklist",
    title: "Lost Pet Checklist — Calm, Practical Steps",
    description:
      "A calm, practical checklist for the first hours after a pet goes missing: microchip and ID, neighbourhood search, local shelters, recent photos, and online lost-pet reports.",
    pageHeading: "Lost Pet Checklist",
    topicTag: "Lost pet",
    tone: "planning",
    directAnswer:
      "If your pet has gone missing, acting quickly and methodically helps. Start a calm, organised search of the immediate area, contact local shelters and your microchip registry, and post clear reports with a recent photo. This page is a practical checklist; it cannot guarantee recovery, and your safety matters too.",
    sections: [
      {
        heading: "First steps",
        bullets: [
          "Search the immediate area calmly, calling your pet's name in a normal, reassuring voice.",
          "Check nearby hiding spots — under cars, in bushes, sheds, garages, and quiet corners.",
          "Bring a recent photo and, for some pets, a familiar-smelling item or favourite treat.",
          "Ask neighbours and people nearby, and leave your phone number with them.",
          "Confirm your microchip registry has your current contact details and report your pet missing to it.",
        ],
      },
      {
        heading: "Widen the search",
        bullets: [
          "Contact local animal shelters, rescues, and veterinary clinics, and check them in person where possible.",
          "Post on reputable local lost-and-found pet pages and community groups with a clear photo and description.",
          "Note distinctive markings, collar, and ID tag details in your posts.",
          "Check with local authorities or animal control about found-animal procedures in your area.",
          "Keep a log of where and when you have searched and who you have contacted.",
        ],
      },
    ],
    checklist: {
      heading: "Lost pet checklist",
      bullets: [
        "Recent photo ready to share.",
        "Microchip registry updated and pet reported missing.",
        "Immediate-area search done, with neighbours notified.",
        "Local shelters, rescues, and vet clinics contacted.",
        "Clear online lost-pet reports posted.",
        "Search log kept of places, times, and contacts.",
      ],
    },
    whenToContactVet: {
      heading: "When to involve a veterinarian or clinic",
      bullets: [
        "If your pet is found injured, contact a veterinarian or emergency clinic right away — see our emergency-signs guide.",
        "Call nearby clinics to ask whether an injured or stray animal matching your pet has been brought in.",
        "Keep your microchip details current so any clinic or shelter that scans your pet can reach you quickly.",
      ],
    },
    whatNotToDo: {
      heading: "What not to do",
      bullets: [
        "Do not enter private property, restricted areas, or unsafe terrain — ask the owner or local authorities for help instead.",
        "Do not chase a frightened pet, which can drive it further away; move slowly and let it come to you.",
        "Do not share your home address publicly in online posts; use a phone number or messaging instead.",
        "Do not assume a microchip works if your contact details are out of date — check the registry.",
      ],
    },
    faqs: [
      {
        question: "What is the most important first step?",
        answer:
          "Search the immediate area calmly and make sure your microchip registry has your current contact details and a missing report. Microchips help shelters and clinics reunite found pets with owners.",
      },
      {
        question: "Does a microchip guarantee my pet will be returned?",
        answer:
          "No tool guarantees recovery, but a registered, up-to-date microchip greatly improves the chance that a shelter or clinic can identify your pet and contact you. Keep your details current.",
      },
      {
        question: "How should I post online safely?",
        answer:
          "Share a clear recent photo, your pet's description, and the area last seen, but use a phone number or messaging rather than your home address. Stick to reputable local lost-and-found groups.",
      },
    ],
    sources: [SRC_HUMANEWORLD_LOST, SRC_AVMA_MICROCHIP, SRC_ASPCA_DISASTER],
    related: [
      {
        title: "Preparedness",
        links: [
          { label: "Pet emergency contact list", href: "/pet-safety/pet-emergency-contact-list" },
          { label: "Pet travel safety checklist", href: "/pet-safety/pet-travel-safety-checklist" },
          { label: "Fireworks and pet safety", href: "/pet-safety/fireworks-and-pet-safety" },
        ],
      },
      {
        title: "Safety hub",
        links: [
          { label: "Pet safety hub", href: "/pet-safety" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "fireworks-and-pet-safety",
    path: "/pet-safety/fireworks-and-pet-safety",
    title: "Fireworks and Pet Safety — Plan Ahead for Calm",
    description:
      "Practical, calm planning for fireworks, thunderstorms, and loud events: a safe room, secure ID, and preparing ahead. Discuss anxiety with your veterinarian — no medication or sedative advice.",
    pageHeading: "Fireworks and Pet Safety",
    topicTag: "Seasonal safety",
    tone: "seasonal",
    directAnswer:
      "Loud events like fireworks and thunderstorms frighten many pets, and fear can lead them to bolt and become lost. The most effective approach is preparing ahead: a quiet, secure space, current identification, and a calm routine. If your pet experiences significant anxiety, talk to your veterinarian — this page does not recommend any medication.",
    sections: [
      {
        heading: "Prepare ahead",
        bullets: [
          "Set up a quiet, comfortable room or covered crate where your pet feels secure, away from windows.",
          "Keep your pet indoors during fireworks and bring outdoor pets inside well before they begin.",
          "Make sure ID tags are current and the microchip registry has your up-to-date contact details — fear is a common cause of pets bolting.",
          "Use familiar bedding, toys, and background sound (such as a TV or calm music) to soften noise.",
          "Exercise your pet earlier in the day so they are settled before the noise starts.",
        ],
      },
      {
        heading: "During the event",
        bullets: [
          "Stay calm yourself; pets take cues from you, and a relaxed routine helps.",
          "Let your pet hide if it wants to — do not force it out of a safe spot.",
          "Keep doors, gates, and windows secured to prevent escape.",
          "Comfort your pet normally; reassurance does not \"reward\" fear.",
        ],
      },
    ],
    whenToContactVet: {
      heading: "When to talk to your veterinarian",
      bullets: [
        "If your pet shows significant noise anxiety — panic, destructiveness, or self-injury — discuss it with your veterinarian, who can advise on safe options for your pet.",
        "Ask your veterinarian about behaviour and desensitisation approaches well before the event season.",
        "If your pet injures itself or shows signs of distress that worry you, contact a veterinarian.",
        "Do not give any calming product, supplement, or medication without veterinary guidance.",
      ],
    },
    whatNotToDo: {
      heading: "What not to do",
      bullets: [
        "Do not give sedatives, calming medications, or supplements unless your veterinarian has advised them for your pet.",
        "Do not punish or scold a frightened pet — it increases fear.",
        "Do not take a noise-anxious pet to a fireworks display or leave it outside or in a vehicle during one.",
        "Do not rely on a collar tag alone; make sure the microchip details are current too.",
      ],
    },
    faqs: [
      {
        question: "What helps most with fireworks fear?",
        answer:
          "Preparation: a secure quiet space, current ID and microchip details, keeping pets indoors, and a calm routine. For significant anxiety, your veterinarian can advise on safe, pet-specific approaches.",
      },
      {
        question: "Will comforting my pet make the fear worse?",
        answer:
          "No. Reassuring a frightened pet does not reinforce fear. Stay calm, let your pet hide if it wants to, and keep the environment as settled as possible.",
      },
      {
        question: "Should I medicate my pet for fireworks?",
        answer:
          "Only a veterinarian can advise on whether anything is appropriate for your individual pet. Do not give any calming product or medication on your own. Plan ahead and discuss options before the season.",
      },
    ],
    sources: [SRC_ASPCA_DISASTER, SRC_AVMA_PETCARE, SRC_READY_GOV],
    related: [
      {
        title: "Related",
        links: [
          { label: "Lost pet checklist", href: "/pet-safety/lost-pet-checklist" },
          { label: "Pet heatstroke warning signs", href: "/pet-safety/pet-heatstroke-warning-signs" },
          { label: "Home safety for pets", href: "/pet-safety/home-safety-for-pets" },
        ],
      },
      {
        title: "Behavior",
        links: [
          { label: "Dog behavior", href: "/dogs/behavior" },
          { label: "Cat behavior", href: "/cats/behavior" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "pet-travel-safety-checklist",
    path: "/pet-safety/pet-travel-safety-checklist",
    title: "Pet Travel Safety Checklist — Plan a Calm Trip",
    description:
      "A practical checklist for travelling with pets: secure carrier or restraint, ID and records, water and food planning, rest stops, and finding a vet at your destination.",
    pageHeading: "Pet Travel Safety Checklist",
    topicTag: "Travel safety",
    tone: "travel",
    directAnswer:
      "Travelling with a pet goes more smoothly with preparation: a secure carrier or restraint, current identification, records, water and food, and knowing where veterinary help is at your destination. This page is a general planning checklist. Always confirm current rules with airlines, carriers, and authorities, as requirements vary by destination and change over time.",
    sections: [
      {
        heading: "Before you travel",
        bullets: [
          "Confirm your pet is comfortable in its carrier or restraint, and that the carrier is the right size and well ventilated.",
          "Check that ID tags are current and the microchip registry has your up-to-date contact details.",
          "Carry copies of vaccination records and any health documents your destination may require.",
          "Research the rules for your specific route, transport type, and destination well in advance — they vary and change.",
          "Identify a veterinarian or emergency clinic near your destination before you leave.",
        ],
      },
      {
        heading: "During the journey",
        bullets: [
          "Secure your pet safely — a crash-tested carrier or restraint for car travel, never loose in the vehicle.",
          "Never leave a pet alone in a parked vehicle, which can overheat dangerously fast.",
          "Plan regular breaks for water and bathroom needs on longer car trips.",
          "Bring familiar food, water, a bowl, waste bags, and any routine supplies.",
          "Keep your pet's normal feeding and water routine as steady as conditions allow.",
        ],
      },
    ],
    checklist: {
      heading: "Travel checklist",
      bullets: [
        "Secure, correctly sized carrier or vehicle restraint.",
        "Current ID tags and up-to-date microchip details.",
        "Vaccination and health records for the destination.",
        "Route, transport, and destination rules confirmed in advance.",
        "Destination veterinarian or emergency clinic identified.",
        "Water, food, bowls, waste bags, and routine supplies packed.",
      ],
    },
    whenToContactVet: {
      heading: "When to contact a veterinarian",
      bullets: [
        "Ask your regular veterinarian before travel about your pet's fitness to travel and any destination health requirements.",
        "Locate a veterinarian or emergency clinic near your destination in advance.",
        "If your pet shows signs of illness or distress during travel, contact a local veterinarian — see our emergency-signs guide.",
        "Do not give any travel-calming product or medication without veterinary guidance.",
      ],
    },
    whatNotToDo: {
      heading: "What not to do",
      bullets: [
        "Do not leave a pet unattended in a parked vehicle, even briefly.",
        "Do not let a pet ride loose in a car; use a secure carrier or restraint.",
        "Do not rely on this page for airline, import, or legal requirements — verify current rules with the carrier and relevant authorities.",
        "Do not give sedatives or calming medication for travel unless your veterinarian advises it for your pet.",
      ],
    },
    faqs: [
      {
        question: "How should my pet ride in the car?",
        answer:
          "Secured — in an appropriately sized carrier or a tested vehicle restraint, never loose. This protects your pet and reduces driver distraction. Never leave a pet alone in a parked car.",
      },
      {
        question: "Do you list airline or border rules?",
        answer:
          "No. Airline, import, and quarantine rules vary by carrier and destination and change over time. Confirm current requirements directly with the airline or carrier and the relevant authorities before you travel.",
      },
      {
        question: "Should I sedate my pet for travel?",
        answer:
          "Only if your veterinarian advises it for your specific pet. Do not give sedatives or calming products on your own. Discuss travel anxiety with your veterinarian ahead of time.",
      },
    ],
    sources: [SRC_ASPCA_TRAVEL, SRC_AVMA_PETCARE, SRC_READY_GOV],
    related: [
      {
        title: "Related",
        links: [
          { label: "Lost pet checklist", href: "/pet-safety/lost-pet-checklist" },
          { label: "Pet emergency contact list", href: "/pet-safety/pet-emergency-contact-list" },
          { label: "Pet heatstroke warning signs", href: "/pet-safety/pet-heatstroke-warning-signs" },
        ],
      },
      {
        title: "Seasonal",
        links: [
          { label: "Fireworks and pet safety", href: "/pet-safety/fireworks-and-pet-safety" },
          { label: "Pet safety hub", href: "/pet-safety" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "home-safety-for-pets",
    path: "/pet-safety/home-safety-for-pets",
    title: "Home Safety for Pets — Prevent Common Hazards",
    description:
      "A practical prevention checklist for pet-proofing your home: toxic foods and plants, medications, cords, small objects, windows and balconies, and secure storage.",
    pageHeading: "Home Safety for Pets",
    topicTag: "Home safety",
    tone: "home",
    directAnswer:
      "Most household pet hazards are preventable with a few habits: store medications and toxic foods securely, keep dangerous plants out of reach, manage cords and small objects, and secure windows and balconies. This page is a prevention checklist. If you think your pet has already been exposed to something dangerous, contact a veterinarian or animal poison-control line immediately.",
    sections: [
      {
        heading: "Common household hazards to manage",
        bullets: [
          "Toxic foods — including chocolate, grapes and raisins, onions and garlic, and xylitol-sweetened products — stored well out of reach.",
          "Medications and supplements (human and pet) secured in closed cabinets, never left on counters or bedside tables.",
          "Plants — many common houseplants are toxic to pets; check before bringing them home and keep risky ones away.",
          "Cleaning products, antifreeze, pesticides, and other chemicals stored securely and used away from pets.",
          "Small objects, string, hair ties, batteries, and breakable items kept out of reach to reduce choking and swallowing risks.",
        ],
      },
      {
        heading: "Room-by-room habits",
        bullets: [
          "Kitchen: secure bins, keep food off accessible surfaces, and clear away cooked bones and wrappers.",
          "Bathroom: close cabinets, and keep medications and cleaning products sealed and stored.",
          "Living spaces: bundle or cover electrical cords and keep small décor items out of reach.",
          "Windows and balconies: use secure screens or restrict access — falls are a real risk, especially for cats.",
          "Garage and outdoors: store chemicals high and sealed, and clean up any antifreeze spills immediately.",
        ],
      },
    ],
    checklist: {
      heading: "Pet-proofing checklist",
      bullets: [
        "Toxic foods stored securely and out of reach.",
        "All medications and supplements in closed cabinets.",
        "Toxic plants identified and removed or kept away.",
        "Chemicals, antifreeze, and pesticides sealed and stored.",
        "Cords managed and small swallowable objects cleared.",
        "Windows and balconies secured against falls.",
      ],
    },
    whenToContactVet: {
      heading: "When to contact a veterinarian or poison control",
      bullets: [
        "If you think your pet has eaten or been exposed to something hazardous, contact a veterinarian or animal poison-control line immediately — do not wait for symptoms.",
        "Keep any packaging, plant material, or label to describe the exposure.",
        "See our pet poisoning warning-signs page for what to watch for and how to escalate.",
        "When in doubt about whether something is dangerous, call and ask.",
      ],
    },
    whatNotToDo: {
      heading: "What not to do",
      bullets: [
        "Do not assume a plant or product is pet-safe without checking a reliable source such as the ASPCA plant database.",
        "Do not store medications or chemicals where a curious pet could reach them.",
        "Do not try to treat a suspected exposure at home — contact a veterinarian or poison control.",
        "Do not leave windows or high balconies open without secure screens.",
      ],
    },
    faqs: [
      {
        question: "Which foods should I keep away from pets at home?",
        answer:
          "Common examples include chocolate, grapes and raisins, onions and garlic, and xylitol-sweetened products, among others. Store them securely and see our food-safety pages and the ASPCA people-foods list for more.",
      },
      {
        question: "How do I know if a houseplant is safe?",
        answer:
          "Check a reliable toxicity reference such as the ASPCA toxic and non-toxic plants database before bringing a plant home, and keep any risky plants well out of reach.",
      },
      {
        question: "My pet already got into something — what now?",
        answer:
          "Contact a veterinarian or animal poison-control line immediately, even before symptoms appear, and keep any packaging or plant material to describe the exposure. Do not attempt home treatment.",
      },
    ],
    sources: [SRC_AVMA_HOUSEHOLD_HAZARDS, SRC_ASPCA_TOXIC_PLANTS, SRC_ASPCA_PEOPLE_FOODS],
    related: [
      {
        title: "Poisoning awareness",
        links: [
          { label: "Pet poisoning warning signs", href: "/pet-safety/pet-poisoning-warning-signs" },
          { label: "Cat ate toxic food — what to do", href: "/pet-safety/cat-ate-toxic-food-what-to-do" },
          { label: "Dog ate chocolate — what to do", href: "/pet-safety/dog-ate-chocolate-what-to-do" },
        ],
      },
      {
        title: "Food safety",
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
    slug: "pet-emergency-contact-list",
    path: "/pet-safety/pet-emergency-contact-list",
    title: "Pet Emergency Contact List — What to Keep Ready",
    description:
      "What belongs on a pet emergency contact list — vet, emergency clinic, poison control, microchip registry, insurance, and a trusted caretaker — plus a free, private tool to build your own.",
    pageHeading: "Pet Emergency Contact List",
    topicTag: "Planning",
    tone: "planning",
    directAnswer:
      "A pet emergency contact list keeps the numbers you might need in a crisis in one easy-to-find place. This page explains what to include and links to a free, private tool that builds a printable list entirely in your browser — nothing is stored or sent anywhere. It is an organisational aid, not medical advice.",
    sections: [
      {
        heading: "What to include",
        bullets: [
          "Your regular veterinarian — name, phone number, and address.",
          "Your nearest 24-hour or emergency animal clinic — phone, address, and night-time route.",
          "An animal poison-control number for suspected ingestions.",
          "Your pet's microchip number and the registry's contact details.",
          "Your pet insurance provider and policy number, if you have one.",
          "A trusted caretaker who could help if you are unavailable.",
        ],
      },
      {
        heading: "Keep it useful",
        bullets: [
          "Store a copy somewhere visible at home and another in your phone.",
          "Note your pet's species, breed, age, and weight for quick reference.",
          "Record any conditions or medications only as free-form notes to share with your vet — not as a treatment plan.",
          "Review the list periodically so numbers and details stay current.",
        ],
      },
    ],
    whenToContactVet: {
      heading: "When to contact a veterinarian or emergency clinic",
      bullets: [
        "Keep these contacts so that, in an emergency, you can reach a licensed veterinarian or emergency clinic immediately.",
        "For suspected poisoning, the animal poison-control number on your list is a fast first call.",
        "See our emergency-signs page for warning signs that warrant urgent contact.",
        "A current microchip registry contact helps clinics and shelters reach you if your pet is found.",
      ],
    },
    whatNotToDo: {
      heading: "What not to do",
      bullets: [
        "Do not record medical notes as instructions — list them as things to tell your veterinarian, not a treatment plan.",
        "Do not assume a saved list replaces calling a professional in an emergency.",
        "Do not let the list go stale — update numbers, microchip details, and your caretaker as they change.",
        "Do not share the list publicly if it contains personal details such as your home address.",
      ],
    },
    faqs: [
      {
        question: "Does the contact-list tool store my information?",
        answer:
          "No. The builder tool runs entirely in your browser. Your entries are not sent to a server, not saved to a database, and not associated with any account. Refreshing or closing the page clears them.",
      },
      {
        question: "What is the most important number to have?",
        answer:
          "Your nearest 24-hour or emergency clinic and your regular veterinarian, followed by an animal poison-control number. Saving them before an emergency saves time when it matters.",
      },
      {
        question: "Should I list my pet's medications?",
        answer:
          "You can note them as free-form information to share with your veterinarian. Do not treat the list as a dosing or treatment plan — that guidance comes from your vet.",
      },
    ],
    sources: [SRC_READY_GOV, SRC_ASPCA_POISON, SRC_AVMA_MICROCHIP],
    related: [
      {
        title: "Use the tool",
        links: [
          { label: "Pet Emergency Contact List builder", href: "/tools/pet-emergency-contact-list" },
          { label: "Pet emergency checklist", href: "/pet-safety/pet-emergency-checklist" },
          { label: "Lost pet checklist", href: "/pet-safety/lost-pet-checklist" },
        ],
      },
      {
        title: "Planning",
        links: [
          { label: "Pet insurance vs emergency fund", href: "/pet-insurance/pet-insurance-vs-emergency-fund" },
          { label: "Emergency vet costs", href: "/vet-care/emergency-vet-costs" },
        ],
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
];

export function getPetSafetyArticleBySlug(slug: string): PetSafetyArticle | undefined {
  return PET_SAFETY_ARTICLES.find((a) => a.slug === slug);
}
