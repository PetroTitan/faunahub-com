import type { EducationalArticle } from "@/lib/educational/types";

const PUBLISHED = "2026-05-18";
const MODIFIED = "2026-05-18";

export const VET_CARE_ARTICLES: EducationalArticle[] = [
  {
    slug: "routine-vet-care-costs",
    kind: "vet-care",
    path: "/vet-care/routine-vet-care-costs",
    parentHub: "/vet-care",
    parentHubLabel: "Vet Care",
    title: "Routine Vet Care Costs — Categories to Plan For",
    description:
      "An educational overview of routine veterinary cost categories — exams, vaccines, dental, parasite prevention, diagnostics, follow-up — without fake price claims.",
    pageHeading: "Routine Vet Care Costs",
    topicTag: "Vet Care",
    directAnswer:
      "Routine veterinary care covers the predictable, regular costs of keeping a pet healthy. Actual prices vary by country, region, clinic, and animal, so this page focuses on the categories you should budget for rather than specific numbers. Pair it with the pet cost calculator and your local vet's quote.",
    sections: [
      {
        heading: "Common routine care categories",
        bullets: [
          "Routine examination fee for a wellness visit.",
          "Vaccinations (core and species-appropriate non-core, sometimes on a multi-year schedule).",
          "Parasite prevention (flea, tick, heartworm where relevant — varies by region).",
          "Dental check and, where indicated, professional cleaning.",
          "Routine diagnostics for senior pets (bloodwork, urinalysis) — frequency increases with age.",
          "Follow-up visits for chronic-condition management.",
        ],
      },
      {
        heading: "Why prices vary",
        bullets: [
          "Region and country — local cost of living and wage levels affect clinic fees.",
          "Clinic type — independent, corporate, hospital, university, or specialty practice.",
          "Species — exotic and small-mammal vet care is often more specialised and may be more expensive.",
          "Age — senior wellness includes more frequent monitoring.",
          "Bundled wellness plans — many clinics offer packages; read the small print.",
        ],
      },
    ],
    checklist: {
      heading: "Plan honestly for routine care",
      bullets: [
        "Schedule at least one wellness exam per year for adult pets; twice yearly for many senior pets and several exotic species.",
        "Keep vaccinations and parasite prevention on a calendar your vet confirms.",
        "Track dental health between cleanings — most pets benefit from at-home support.",
        "Build the routine care budget into your monthly contribution in the pet cost calculator.",
        "Ask the clinic for an itemised estimate before any non-emergency procedure.",
      ],
    },
    questionsToConsider: {
      heading: "Questions to ask your veterinarian",
      bullets: [
        "Which core vaccines are recommended for my pet's species and lifestyle?",
        "What parasite prevention is appropriate for my region?",
        "What is the recommended dental care schedule for my pet?",
        "What senior monitoring is recommended at my pet's life stage?",
        "Do you offer wellness plans, and do they make sense for my pet?",
      ],
    },
    showVetDisclaimer: true,
    faqs: [
      {
        question: "Why don't you list specific prices?",
        answer:
          "Routine vet care prices vary too widely by country, region, and clinic for a published number to be useful. Local quotes from at least two clinics are far more reliable than a generalised figure.",
      },
      {
        question: "Is preventive care really worth the cost?",
        answer:
          "Most veterinary and welfare organisations recommend routine preventive care because catching conditions early often reduces later costs and improves welfare. The right preventive schedule for your pet is a conversation with your vet.",
      },
      {
        question: "Do pets need annual exams forever?",
        answer:
          "Many veterinarians recommend at least annual wellness visits for adult pets and more frequent visits (often twice yearly) for senior pets and several exotic species.",
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "emergency-vet-costs",
    kind: "vet-care",
    path: "/vet-care/emergency-vet-costs",
    parentHub: "/vet-care",
    parentHubLabel: "Vet Care",
    title: "Emergency Vet Costs — Why They Vary and How To Plan",
    description:
      "An educational overview of why emergency veterinary care can be expensive — after-hours staffing, diagnostics, surgery, hospitalisation — and how to plan responsibly.",
    pageHeading: "Emergency Vet Costs",
    topicTag: "Vet Care",
    directAnswer:
      "Emergency veterinary care is often the most variable and unpredictable cost in any pet's life. This page explains why, and how to plan — without quoting specific prices, because they vary too widely by country, region, and clinic to be responsibly generalised.",
    sections: [
      {
        heading: "Why emergency care is expensive",
        bullets: [
          "After-hours and 24-hour staffing requires qualified vets, technicians, and equipment outside normal business hours.",
          "Diagnostics — imaging, bloodwork, urgent specialist reads — are often run quickly and can add up.",
          "Surgery and anaesthesia have their own resource and monitoring costs.",
          "Hospitalisation with continuous monitoring, IV fluids, and medications scales with length of stay.",
          "Specialist referrals can add significant cost where they are needed.",
        ],
      },
      {
        heading: "How owners typically plan",
        bullets: [
          "Build a dedicated emergency veterinary fund separate from monthly spending.",
          "Consider whether pet insurance is appropriate for your household — see the insurance hub for trade-offs.",
          "Know your nearest 24-hour or emergency clinic in advance, before you need it.",
          "Save the emergency vet phone number where it can be found quickly.",
          "Ask any clinic for an itemised estimate for non-urgent procedures; in true emergencies, treatment usually proceeds and is billed.",
        ],
      },
    ],
    warningSigns: {
      heading: "Signs that may warrant urgent veterinary contact",
      intro:
        "If you are seeing any of the following — especially more than one or persistent — contact a licensed veterinarian or emergency animal clinic immediately. This list is not exhaustive.",
      bullets: [
        "Difficulty breathing, choking, or gasping",
        "Collapse, unresponsiveness, or seizures",
        "Severe bleeding that does not stop within minutes",
        "Suspected poisoning or ingestion of a toxic substance",
        "Repeated vomiting or severe diarrhoea, especially with weakness",
        "Distended or painful abdomen, particularly in larger dogs",
        "Trauma — falls, vehicle impact, fight wounds",
        "Sudden inability to use the legs or paws",
        "Heat-related illness signs (heavy panting, weakness, collapse)",
      ],
    },
    checklist: {
      heading: "Prepare before an emergency happens",
      bullets: [
        "Identify your nearest 24-hour or emergency clinic in advance.",
        "Keep their phone number saved on your phone and at home.",
        "Note their address and how to get there at night.",
        "Confirm if your insurance pays direct or by reimbursement (if applicable).",
        "Build and maintain an emergency veterinary fund separate from monthly spending.",
      ],
    },
    questionsToConsider: {
      heading: "Practical questions",
      bullets: [
        "Do I know where to go on a Sunday at 3 a.m.?",
        "Have I built a reserve I can access quickly without disrupting other finances?",
        "Have I discussed emergency planning with my regular vet?",
      ],
    },
    showVetDisclaimer: true,
    faqs: [
      {
        question: "Why don't you list emergency vet prices?",
        answer:
          "Emergency vet prices vary too widely — by country, region, clinic, time of day, and specific case — to be quoted responsibly. Local clinics are the only reliable source for typical ranges in your area.",
      },
      {
        question: "Should I call the clinic before going?",
        answer:
          "Yes, when possible. Calling lets the clinic prepare and can also help you decide whether the situation is an emergency. In a true life-threatening situation, go directly to the nearest emergency clinic.",
      },
      {
        question: "Does pet insurance cover emergencies?",
        answer:
          "Most accident-and-illness policies in widely served markets cover eligible emergencies, but exclusions and reimbursement rules vary by policy. Read the actual policy document.",
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "first-vet-visit-checklist",
    kind: "vet-care",
    path: "/vet-care/first-vet-visit-checklist",
    parentHub: "/vet-care",
    parentHubLabel: "Vet Care",
    title: "First Vet Visit Checklist — What To Bring and What To Ask",
    description:
      "A practical checklist for the first veterinary visit with a new pet — medical history, diet, behaviour, vaccines, parasite prevention, microchip, and insurance/emergency-fund questions.",
    pageHeading: "First Vet Visit Checklist",
    topicTag: "Vet Care",
    directAnswer:
      "Your first visit to the veterinarian with a new pet sets the foundation for everything that follows. This page is a practical checklist of what to bring, what to ask, and what to expect. It is not a substitute for clinical advice from the vet themselves.",
    sections: [
      {
        heading: "Before the visit",
        bullets: [
          "Gather any medical records, vaccination history, microchip records, and adoption paperwork.",
          "Make a list of foods your pet eats, including treats and supplements.",
          "Note behaviour observations: eating, drinking, toileting, sleep, energy, anxiety, social interactions.",
          "Bring a fresh stool sample if your vet has asked for one.",
          "Use a carrier or leash appropriate to species; arrive a few minutes early to allow your pet to settle.",
        ],
      },
      {
        heading: "What the vet often discusses",
        bullets: [
          "General physical examination findings.",
          "Vaccine plan appropriate to species, age, lifestyle, and region.",
          "Parasite prevention plan appropriate to your region.",
          "Spay/neuter discussion (if applicable).",
          "Dental health and routine care.",
          "Microchipping (if not already done).",
          "Diet and weight monitoring.",
          "Routine schedule for future visits.",
        ],
      },
    ],
    checklist: {
      heading: "Bring",
      bullets: [
        "Records from the shelter, breeder, or previous owner.",
        "Vaccination certificates, if any.",
        "Microchip number if known.",
        "List of foods and any supplements.",
        "Notes on observed behaviour over the past two weeks.",
        "A list of questions — see the questions-to-ask-a-vet page for ideas.",
      ],
    },
    questionsToConsider: {
      heading: "Questions to ask at the first visit",
      bullets: [
        "What does my pet's general physical exam look like today?",
        "Which vaccinations are recommended on what schedule?",
        "What parasite prevention is appropriate for my region?",
        "What signs should prompt me to call you (or an emergency clinic)?",
        "What is the recommended diet for my pet's life stage?",
        "When should I plan the next visit?",
        "How do you handle emergencies, and what is the nearest 24-hour clinic if you are closed?",
      ],
    },
    showVetDisclaimer: true,
    faqs: [
      {
        question: "How soon should a new pet see a vet?",
        answer:
          "Common veterinary guidance is to schedule a first visit within the first few days to weeks of adoption or purchase. Specific timing depends on species, age, and any conditions; ask the clinic for a recommendation.",
      },
      {
        question: "Should I bring stool or urine samples?",
        answer:
          "Often yes — many clinics request a fresh stool sample at the first visit for parasite screening. Confirm with the clinic in advance.",
      },
      {
        question: "What if my pet seems too anxious to handle the visit?",
        answer:
          "Tell the clinic in advance. Some vets offer fear-free or low-stress visit techniques and may suggest desensitisation strategies before a routine visit.",
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "questions-to-ask-a-vet",
    kind: "vet-care",
    path: "/vet-care/questions-to-ask-a-vet",
    parentHub: "/vet-care",
    parentHubLabel: "Vet Care",
    title: "Questions To Ask a Vet — A Practical List for Pet Owners",
    description:
      "Practical questions to ask your veterinarian at routine appointments — diet, weight, dental, vaccines, exercise, behaviour, breed/species risks, emergency signs, and cost planning.",
    pageHeading: "Questions To Ask a Vet",
    topicTag: "Vet Care",
    directAnswer:
      "The best veterinary visits are conversations, not handovers. This page is a practical list of questions to ask at routine appointments. Bringing a written list helps you cover what matters without forgetting key topics under time pressure.",
    sections: [
      {
        heading: "Diet and weight",
        bullets: [
          "Is my pet's body condition appropriate for their life stage and species?",
          "Is the current diet appropriate for their age, activity, and any conditions?",
          "Should I be measuring portions differently?",
          "Are there foods I should specifically avoid for my pet?",
        ],
      },
      {
        heading: "Preventive care",
        bullets: [
          "Are all vaccines up to date for my pet's species, age, and lifestyle?",
          "What parasite prevention is recommended in my region right now?",
          "What dental care should I be doing at home, and when should we consider a professional cleaning?",
          "Is my pet due for any age-appropriate screening (bloodwork, urinalysis)?",
        ],
      },
      {
        heading: "Exercise, behaviour, and enrichment",
        bullets: [
          "Is my pet getting an appropriate amount and type of exercise?",
          "Any behavioural changes I should be paying attention to?",
          "Recommendations for enrichment appropriate to species and home setup?",
        ],
      },
      {
        heading: "Species- or breed-aware monitoring",
        bullets: [
          "Are there species- or breed-related conditions you would monitor for in this pet?",
          "What signs should make me call you sooner rather than later?",
          "At what age would you change the routine-care frequency?",
        ],
      },
      {
        heading: "Emergencies and cost planning",
        bullets: [
          "What signs warrant calling an emergency clinic instead of waiting for the next appointment?",
          "Where is the nearest 24-hour or emergency clinic?",
          "Do you offer wellness plans or itemised estimates for upcoming procedures?",
          "How do you usually communicate cost expectations before non-urgent procedures?",
        ],
      },
    ],
    showVetDisclaimer: true,
    faqs: [
      {
        question: "Is it okay to bring a long list?",
        answer:
          "Yes. Most vets appreciate prepared owners. If you have many questions, mention it at the start so the clinic can plan time appropriately.",
      },
      {
        question: "What if I don't understand an answer?",
        answer:
          "Ask the vet to explain again, in plain language. You can also ask for written notes or a printout of recommendations.",
      },
      {
        question: "Can I follow up by phone or email later?",
        answer:
          "Many clinics allow short follow-up questions by phone or message portal. Ask what the clinic's policy is.",
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "when-to-call-an-emergency-vet",
    kind: "vet-care",
    path: "/vet-care/when-to-call-an-emergency-vet",
    parentHub: "/vet-care",
    parentHubLabel: "Vet Care",
    title: "When To Call an Emergency Vet — Cautious Warning Signs Guide",
    description:
      "Cautious educational guide to common warning signs that may warrant emergency veterinary contact. Not a substitute for a licensed veterinarian.",
    pageHeading: "When To Call an Emergency Vet",
    topicTag: "Vet Care",
    directAnswer:
      "If you are unsure whether your pet's symptoms are an emergency, the safest action is usually to contact a licensed veterinarian or an emergency animal clinic. Telephone triage is part of what veterinary teams do. The signs below are not exhaustive, and not every pet shows every sign — when in doubt, call.",
    sections: [
      {
        heading: "How to decide",
        bullets: [
          "If your pet is in obvious distress, do not wait — go to an emergency clinic.",
          "If you are uncertain, call the clinic. Telephone triage helps you decide.",
          "If you have access to a poison control helpline, use it for suspected ingestions.",
          "Do not give human medications, home remedies, or food/water to a pet that is suddenly weak, vomiting, or unconscious.",
        ],
      },
    ],
    warningSigns: {
      heading: "Signs that may warrant urgent veterinary contact",
      intro:
        "This list is not exhaustive. Any of the following — particularly more than one, or persistent — generally warrants calling a licensed veterinarian or emergency clinic. Specific judgement belongs with a professional.",
      bullets: [
        "Difficulty breathing, choking, or gasping",
        "Collapse, unresponsiveness, or seizures",
        "Severe or unstoppable bleeding",
        "Suspected ingestion of a toxic substance",
        "Repeated vomiting or severe diarrhoea, especially with weakness",
        "Distended or painful abdomen, particularly in larger dogs",
        "Trauma — falls, vehicle impact, animal fight wounds",
        "Sudden inability to use the legs or paws",
        "Heat-related illness — heavy panting, weakness, collapse, particularly on hot days",
        "Sudden, severe change in behaviour, alertness, or responsiveness",
        "Pale or blue gums or tongue",
        "Repeated unproductive retching, especially in deep-chested dogs (possible bloat)",
        "Eye injuries or sudden visible eye changes",
        "Severe urinary difficulty, particularly in male cats — can be life-threatening",
      ],
    },
    checklist: {
      heading: "If you decide to go",
      bullets: [
        "Call the clinic on the way so they can prepare.",
        "Bring any packaging, plant material, or substance involved if poisoning is suspected.",
        "Bring a list of current medications, supplements, and any recent diet changes.",
        "Transport safely: carrier for cats and small pets, supportive position for an injured dog.",
        "Take a family member or a friend if you can — driving while distressed is risky.",
      ],
    },
    questionsToConsider: {
      heading: "What to say on the phone",
      bullets: [
        "Species, age, weight if known.",
        "What you observed and when it started.",
        "Any known underlying conditions or medications.",
        "Any possible ingestion (food, plant, household product, medication).",
        "Whether the pet is currently breathing normally, alert, and responsive.",
      ],
    },
    showVetDisclaimer: true,
    faqs: [
      {
        question: "Should I always go straight to the emergency clinic?",
        answer:
          "If you suspect a life-threatening situation, yes. For ambiguous cases, calling first allows triage and may save time on arrival. The clinic can also tell you what to do or avoid on the way.",
      },
      {
        question: "Can I treat my pet at home?",
        answer:
          "Home treatment is generally not appropriate in a true emergency. Many home remedies and human medications are unsafe for pets. Get professional advice.",
      },
      {
        question: "What if I cannot reach a vet?",
        answer:
          "Try a 24-hour clinic, an emergency animal hospital, or an animal poison helpline if available in your region. Do not delay seeking help if the situation seems life-threatening.",
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
];

export function getVetCareArticleBySlug(slug: string) {
  return VET_CARE_ARTICLES.find((a) => a.slug === slug);
}
