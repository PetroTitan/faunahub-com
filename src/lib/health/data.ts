import type { SourceLink } from "@/lib/educational/types";

export type HealthSpecies = "dog" | "cat";

export interface SymptomFAQ {
  question: string;
  answer: string;
}

export interface SymptomArticle {
  slug: string;
  species: HealthSpecies;
  speciesLabel: "Dog" | "Cat";
  path: string;
  title: string;
  description: string;
  pageHeading: string;
  /** Plain-language symptom label e.g. "vomiting" */
  symptom: string;
  /** Cautious direct answer paragraph at top of page */
  directAnswer: string;
  /** Broad cause categories — never diagnoses */
  possibleCauseCategories: string[];
  /** Concrete warning signs that warrant urgent veterinary contact */
  emergencySigns: string[];
  /** Things owners can observe and report to a veterinarian */
  safeObservationChecklist: string[];
  /** Things owners should NOT do */
  whatNotToDo: string[];
  /** Plain-language guidance on when to contact a veterinarian */
  whenToContactVet: string;
  faqs: SymptomFAQ[];
  sources: SourceLink[];
  publishedTime: string;
  modifiedTime: string;
}

const PUBLISHED = "2026-05-18";
const MODIFIED = "2026-05-18";

// ─── VERIFIED SOURCES ─────────────────────────────────────────────────────
// Every URL here has been fetched and confirmed (via earlier source-review
// batches) to resolve to relevant authoritative content.

const SRC_AVMA_PET_CARE: SourceLink = {
  label: "AVMA — Pet Care Resources",
  url: "https://www.avma.org/resources-tools/pet-owners/petcare",
  type: "veterinary",
  note: "American Veterinary Medical Association consumer pet-care hub",
};

const SRC_MERCK_VET_MANUAL: SourceLink = {
  label: "Merck Veterinary Manual",
  url: "https://www.merckvetmanual.com",
  type: "reference",
  note: "Comprehensive veterinary reference (consumer & professional)",
};

const SRC_CORNELL_CANINE: SourceLink = {
  label: "Cornell Riney Canine Health Center",
  url: "https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center",
  type: "university",
  note: "Cornell University College of Veterinary Medicine — dogs",
};

const SRC_CORNELL_FELINE: SourceLink = {
  label: "Cornell Feline Health Center",
  url: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center",
  type: "university",
  note: "Cornell University College of Veterinary Medicine — cats",
};

const SRC_ASPCA_POISON_CONTROL: SourceLink = {
  label: "ASPCA Animal Poison Control Center",
  url: "https://www.aspca.org/pet-care/animal-poison-control",
  type: "veterinary",
  note: "24/7 emergency animal-poisoning helpline (US)",
};

const SRC_MERCK_FOOD_HAZARDS: SourceLink = {
  label: "Merck Veterinary Manual — Food Hazards",
  url: "https://www.merckvetmanual.com/toxicology/food-hazards",
  type: "reference",
  note: "Veterinary reference on food-related toxicology in animals",
};

const DOG_GENERAL_SOURCES: SourceLink[] = [
  SRC_AVMA_PET_CARE,
  SRC_CORNELL_CANINE,
  SRC_MERCK_VET_MANUAL,
];

const CAT_GENERAL_SOURCES: SourceLink[] = [
  SRC_AVMA_PET_CARE,
  SRC_CORNELL_FELINE,
  SRC_MERCK_VET_MANUAL,
];

const DOG_TOXIN_SOURCES: SourceLink[] = [
  SRC_AVMA_PET_CARE,
  SRC_CORNELL_CANINE,
  SRC_ASPCA_POISON_CONTROL,
  SRC_MERCK_FOOD_HAZARDS,
];

const CAT_TOXIN_SOURCES: SourceLink[] = [
  SRC_AVMA_PET_CARE,
  SRC_CORNELL_FELINE,
  SRC_ASPCA_POISON_CONTROL,
  SRC_MERCK_FOOD_HAZARDS,
];

// ─── COMMON FRAMING ────────────────────────────────────────────────────────

const COMMON_NOT_TO_DO_DOG: string[] = [
  "Do not give human medications (including anti-nausea, anti-diarrhoea, or pain medications) unless a licensed veterinarian has specifically instructed you to.",
  "Do not try to diagnose based only on this page or any online content.",
  "Do not delay contacting a veterinarian if poisoning is suspected, if your dog has collapsed, is having seizures, has trouble breathing, or is in severe pain.",
  "Do not rely on calculators, guides, or AI tools for emergency decisions.",
  "Do not ignore symptoms that worsen, persist, or pair with other concerning signs.",
];

const COMMON_NOT_TO_DO_CAT: string[] = [
  "Do not give human medications (including anti-nausea, anti-diarrhoea, or pain medications) unless a licensed veterinarian has specifically instructed you to. Several common human medications are dangerous to cats.",
  "Do not try to diagnose based only on this page or any online content.",
  "Do not delay contacting a veterinarian if poisoning is suspected, if your cat has collapsed, is having seizures, has trouble breathing, or is in severe pain.",
  "Do not rely on calculators, guides, or AI tools for emergency decisions.",
  "Do not ignore symptoms that worsen, persist, or pair with other concerning signs.",
];

// ─── SYMPTOM ARTICLES ─────────────────────────────────────────────────────

export const SYMPTOM_ARTICLES: SymptomArticle[] = [
  // ─── DOG ────────────────────────────────────────────────────────────────
  {
    slug: "why-is-my-dog-vomiting",
    species: "dog",
    speciesLabel: "Dog",
    path: "/dogs/health/why-is-my-dog-vomiting",
    title: "Why Is My Dog Vomiting? Cautious Symptom Guide",
    description:
      "A cautious, source-aware educational overview of possible reasons a dog may vomit, emergency warning signs, and when to contact a veterinarian. Not a diagnosis.",
    pageHeading: "Why is my dog vomiting?",
    symptom: "vomiting",
    directAnswer:
      "Vomiting in dogs can have many possible causes — from a single mild stomach upset to a serious underlying condition. This page describes broad cause categories and the warning signs that should prompt urgent veterinary contact. It is not a diagnosis or treatment guide. If vomiting is severe, repeated, or paired with other concerning signs, contact a licensed veterinarian or emergency clinic.",
    possibleCauseCategories: [
      "Dietary indiscretion — eating something unfamiliar, spoiled, or non-food.",
      "Suspected toxin exposure — chocolate, grapes/raisins, xylitol, certain plants, household chemicals, or medications.",
      "Gastrointestinal infections, inflammation, or parasites.",
      "Foreign-body ingestion or obstruction (toys, bones, fabric).",
      "Underlying chronic or systemic conditions — only a veterinarian can identify these.",
      "Motion sickness, stress, or rapid eating in some dogs.",
    ],
    emergencySigns: [
      "Repeated vomiting that does not stop",
      "Blood in vomit, stool, or gums that look pale or yellow",
      "Lethargy, collapse, or unresponsiveness",
      "Inability to keep water down (dehydration risk)",
      "Suspected ingestion of a toxic substance",
      "Distended, painful, or hard abdomen — especially in deep-chested dogs",
      "Repeated unproductive retching (possible bloat — life-threatening emergency)",
      "Severe abdominal pain or restlessness that does not settle",
    ],
    safeObservationChecklist: [
      "How many times and how recently has the dog vomited?",
      "What did the vomit look like (food, foam, bile, blood)?",
      "Can the dog keep water down?",
      "Other signs: appetite, energy, urination, stool, breathing.",
      "Recent diet, treats, or possible access to anything unusual.",
      "Recent medications, supplements, or known existing conditions.",
    ],
    whatNotToDo: COMMON_NOT_TO_DO_DOG,
    whenToContactVet:
      "Contact a licensed veterinarian or emergency clinic immediately if any emergency sign is present, if you suspect poisoning, or if the dog seems unwell. Contact a veterinarian promptly if vomiting is repeated, persists, or is paired with other signs (lethargy, appetite loss, diarrhoea, pain, or dehydration). If you are unsure, calling a clinic for telephone triage is a normal part of veterinary care.",
    faqs: [
      {
        question: "Is a single vomit episode an emergency?",
        answer:
          "A single episode in an otherwise healthy adult dog may not be an emergency on its own, but it can be — and only a veterinarian can assess the specific situation. If your dog seems otherwise well and does not vomit again, monitor carefully and contact a veterinarian if you are uncertain. If your dog seems unwell, contact a veterinarian.",
      },
      {
        question: "Should I withhold food or water?",
        answer:
          "Owners sometimes hear blanket guidance to withhold food for a period after vomiting, but this is case-specific and risky if the dog is already dehydrated. Withholding water can be harmful. Ask a veterinarian how to handle hydration and feeding in your specific situation.",
      },
      {
        question: "My dog ate something they shouldn't have — what do I do?",
        answer:
          "Treat any known ingestion of a potentially toxic substance as a veterinary question. Contact a licensed veterinarian, an emergency clinic, or — where available — an animal poison-control service (such as the ASPCA Animal Poison Control Center in the US). Do not wait to see whether symptoms develop.",
      },
    ],
    sources: DOG_TOXIN_SOURCES,
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "why-is-my-dog-coughing",
    species: "dog",
    speciesLabel: "Dog",
    path: "/dogs/health/why-is-my-dog-coughing",
    title: "Why Is My Dog Coughing? Cautious Symptom Guide",
    description:
      "A cautious, source-aware educational overview of possible reasons a dog may cough, emergency warning signs, and when to contact a veterinarian. Not a diagnosis.",
    pageHeading: "Why is my dog coughing?",
    symptom: "coughing",
    directAnswer:
      "Coughing in dogs can have many possible causes — from mild airway irritation to more serious respiratory or heart conditions. This page lists broad cause categories and the warning signs that should prompt urgent veterinary contact. It is not a diagnosis or treatment guide. If your dog is struggling to breathe, has pale or blue gums, or is collapsing, treat this as an emergency and contact a veterinarian immediately.",
    possibleCauseCategories: [
      "Upper-airway irritation or infectious respiratory illness — only a vet can identify the specific cause.",
      "Lower-airway conditions involving the trachea or lungs.",
      "Cardiac (heart) conditions that can present with cough in some dogs.",
      "Foreign-body inhalation or aspiration.",
      "Allergies or environmental irritants.",
      "Other chronic conditions that need professional assessment.",
    ],
    emergencySigns: [
      "Difficulty breathing, gasping, or open-mouth breathing at rest",
      "Pale, white, or bluish gums or tongue",
      "Collapse, unresponsiveness, or sudden weakness",
      "Coughing with lethargy, refusal to eat, or severe distress",
      "Severe or persistent cough that does not settle",
      "Cough with blood",
      "Suspected inhalation or ingestion of a foreign object",
    ],
    safeObservationChecklist: [
      "When did the cough start and how often does it occur?",
      "Is the cough dry, harsh, wet, productive, or paired with retching?",
      "Is there exercise intolerance or refusal to walk?",
      "Are gums and tongue a normal pink colour, or pale/blue?",
      "Are there other signs: appetite, energy, fever-like behaviour, runny nose, eye discharge?",
      "Recent contact with other dogs, kennels, daycare, or new environments.",
    ],
    whatNotToDo: COMMON_NOT_TO_DO_DOG,
    whenToContactVet:
      "Contact a veterinarian or emergency clinic immediately if your dog is having trouble breathing, has pale or blue gums, has collapsed, or is severely distressed. Contact a veterinarian promptly if the cough persists, worsens, or is paired with lethargy, appetite loss, or exercise intolerance. Many causes of cough need professional examination to identify safely.",
    faqs: [
      {
        question: "Could this be 'kennel cough'?",
        answer:
          "Several different infectious agents can cause respiratory illness in dogs, and 'kennel cough' is a general term that covers some of them. Only a veterinarian can identify the cause and decide what care is appropriate. Do not assume any specific diagnosis from a website.",
      },
      {
        question: "Can a coughing dog be left to recover at home?",
        answer:
          "Some mild irritation-type coughs resolve on their own — but persistent, severe, or worsening cough, or cough paired with other signs, should be assessed by a veterinarian. Heart and respiratory causes of cough require professional diagnosis. Do not assume your dog will improve without veterinary input.",
      },
      {
        question: "Is cough medicine for humans safe to give?",
        answer:
          "No. Many human cough and cold medications are not safe for dogs. Do not give human medications unless a licensed veterinarian has specifically instructed you to.",
      },
    ],
    sources: DOG_GENERAL_SOURCES,
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "why-is-my-dog-limping",
    species: "dog",
    speciesLabel: "Dog",
    path: "/dogs/health/why-is-my-dog-limping",
    title: "Why Is My Dog Limping? Cautious Symptom Guide",
    description:
      "A cautious, source-aware educational overview of possible reasons a dog may limp, emergency warning signs, and when to contact a veterinarian. Not a diagnosis.",
    pageHeading: "Why is my dog limping?",
    symptom: "limping",
    directAnswer:
      "Limping in dogs can have many possible causes — from a minor strain to a serious orthopaedic, soft-tissue, or neurological issue. This page lists broad cause categories and the warning signs that should prompt urgent veterinary contact. It is not a diagnosis or treatment guide, and it does not recommend pain medication.",
    possibleCauseCategories: [
      "Soft-tissue injury (sprain, strain, bruise).",
      "Orthopaedic conditions — joint, ligament, or bone issues need professional assessment.",
      "Paw or nail injury, foreign object in the paw, or burn from hot surfaces.",
      "Trauma — falls, vehicle impact, fight wounds, or jumping injuries.",
      "Infections of skin, joints, or bone.",
      "Underlying chronic conditions that a veterinarian can investigate.",
    ],
    emergencySigns: [
      "Inability to bear any weight on the limb",
      "Obvious deformity, open wound, or visible bone",
      "Severe pain — crying out, biting when touched, or refusing to move",
      "Suspected trauma (fall, vehicle impact, attack)",
      "Sudden paralysis or dragging of a limb",
      "Significant swelling, heat, or rapidly developing wound",
      "Limping with collapse, lethargy, or fever-like behaviour",
    ],
    safeObservationChecklist: [
      "Which limb is affected, and when did the limp start?",
      "Is the dog willing to bear any weight on the limb?",
      "Are there visible injuries, swelling, bleeding, or foreign objects in the paw?",
      "Did anything happen — a jump, fall, slip, or activity change?",
      "Is the limp constant or intermittent? Worse after rest, after activity, or both?",
      "Any other signs: appetite, mood, fever-like behaviour, reluctance to move?",
    ],
    whatNotToDo: [
      ...COMMON_NOT_TO_DO_DOG,
      "Do not give human pain medications (such as ibuprofen, paracetamol/acetaminophen, naproxen, or aspirin) — several are dangerous to dogs.",
      "Do not attempt to splint or bandage a limb at home except under veterinary guidance.",
      "Do not force a dog who is in pain to walk or exercise.",
    ],
    whenToContactVet:
      "Contact a veterinarian or emergency clinic immediately if your dog cannot bear weight, has a visible injury or deformity, is in severe pain, or has experienced trauma. Contact a veterinarian promptly if the limp persists, worsens, or is paired with other signs. Many causes of limping need physical examination to identify safely.",
    faqs: [
      {
        question: "Can I give my dog over-the-counter pain medicine?",
        answer:
          "No. Several common human pain medications — including ibuprofen, paracetamol/acetaminophen, naproxen, and aspirin — can be dangerous to dogs. Do not give any pain medication unless a licensed veterinarian has specifically prescribed it.",
      },
      {
        question: "Should I rest my dog or take them to the vet?",
        answer:
          "Mild limps that follow obvious overactivity sometimes settle with short, careful rest — but persistent limping, inability to bear weight, severe pain, or any sign of trauma is a reason for veterinary examination. When in doubt, contact a veterinarian.",
      },
      {
        question: "My dog seems okay but limps after rest. Is that serious?",
        answer:
          "Stiffness after rest can occur in dogs of any age and has many possible causes — it is a finding to mention to a veterinarian rather than try to diagnose at home. Make a note of when it happens and contact a clinic if it persists or worsens.",
      },
    ],
    sources: DOG_GENERAL_SOURCES,
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "why-is-my-dog-not-eating",
    species: "dog",
    speciesLabel: "Dog",
    path: "/dogs/health/why-is-my-dog-not-eating",
    title: "Why Is My Dog Not Eating? Cautious Symptom Guide",
    description:
      "A cautious, source-aware educational overview of possible reasons a dog may not be eating, emergency warning signs, and when to contact a veterinarian. Not a diagnosis.",
    pageHeading: "Why is my dog not eating?",
    symptom: "not eating",
    directAnswer:
      "Loss of appetite in dogs can have many possible causes — from a transient upset to a serious underlying condition. This page lists broad cause categories and the warning signs that should prompt urgent veterinary contact. It is not a diagnosis or treatment guide. If your dog refuses food for longer than expected, or refusal is paired with other signs, contact a licensed veterinarian.",
    possibleCauseCategories: [
      "Gastrointestinal upset — only a vet can identify the specific cause.",
      "Dental pain or oral conditions.",
      "Suspected toxin exposure or recent ingestion of something unusual.",
      "Pain from injury, surgery, or an internal condition.",
      "Stress, recent changes, or behavioural causes.",
      "Underlying chronic or systemic conditions that need professional assessment.",
    ],
    emergencySigns: [
      "Refusal to eat paired with vomiting, diarrhoea, or lethargy",
      "Refusal to drink water for extended periods (dehydration risk)",
      "Pain signs — vocalising, hiding, restlessness, or unwillingness to move",
      "Collapse, weakness, or unresponsiveness",
      "Suspected toxin exposure",
      "Pale, yellow, or blue-tinged gums",
      "Distended or painful abdomen",
    ],
    safeObservationChecklist: [
      "How long has appetite been reduced, and is the dog refusing all food or only some?",
      "Is water intake normal?",
      "Other signs: energy, vomiting, diarrhoea, breathing, weight, mood.",
      "Recent dental work, surgery, or known existing conditions.",
      "Recent diet changes or possible toxin access.",
      "Any visible injuries, swelling, or pain signs?",
    ],
    whatNotToDo: COMMON_NOT_TO_DO_DOG,
    whenToContactVet:
      "Contact a veterinarian or emergency clinic immediately if appetite loss is paired with any emergency sign, if you suspect poisoning, or if the dog seems severely unwell. Contact a veterinarian promptly if your dog has refused food for longer than is normal for them, refuses water, or shows other concerning signs. Specific time-based guidance varies by dog, age, and underlying conditions, so calling a clinic for telephone triage is a normal step.",
    faqs: [
      {
        question: "How long can a dog go without eating?",
        answer:
          "There is no single safe figure that applies to every dog. Puppies, senior dogs, small dogs, and dogs with underlying conditions are typically less tolerant of fasting than healthy adults. Contact a veterinarian for advice specific to your dog rather than relying on a generalised timeframe.",
      },
      {
        question: "My dog skipped one meal but seems fine — should I worry?",
        answer:
          "A single skipped meal in an otherwise healthy adult dog who is bright, drinking water, and behaving normally may not be urgent, but should be monitored. If appetite is still off the next meal, or if other signs appear, contact a veterinarian.",
      },
      {
        question: "Should I try a new food or human food to get them eating?",
        answer:
          "Introducing new or unfamiliar food can mask the underlying cause and sometimes worsen things. Some human foods are also unsafe for dogs. Talk to a veterinarian before changing diet in response to appetite loss.",
      },
    ],
    sources: DOG_TOXIN_SOURCES,
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "why-is-my-dog-drinking-a-lot-of-water",
    species: "dog",
    speciesLabel: "Dog",
    path: "/dogs/health/why-is-my-dog-drinking-a-lot-of-water",
    title: "Why Is My Dog Drinking a Lot of Water? Cautious Symptom Guide",
    description:
      "A cautious, source-aware educational overview of possible reasons a dog may drink unusually large amounts of water, warning signs, and when to contact a veterinarian. Not a diagnosis.",
    pageHeading: "Why is my dog drinking a lot of water?",
    symptom: "drinking a lot of water",
    directAnswer:
      "A sudden or persistent increase in water intake in a dog is a clinical finding that can be associated with many possible underlying conditions — some of them serious. This page lists broad cause categories and the warning signs that should prompt veterinary contact. It is not a diagnosis. If the increase persists, or is paired with appetite changes, urination changes, weight loss, vomiting, or lethargy, contact a licensed veterinarian.",
    possibleCauseCategories: [
      "Hot weather, recent exercise, or increased activity (often transient and resolves).",
      "Diet change, especially a switch from wet to dry food.",
      "Medication side effects in some dogs.",
      "Underlying systemic conditions — only a veterinarian can identify the specific cause through examination and tests.",
      "Behavioural or environmental changes in some cases.",
    ],
    emergencySigns: [
      "Increased water intake paired with severe lethargy or collapse",
      "Repeated vomiting or significant diarrhoea",
      "Pale, yellow, or blue-tinged gums",
      "Sudden weight loss or refusal to eat",
      "Difficulty urinating, blood in urine, or signs of severe pain when urinating",
      "Suspected toxin exposure",
      "Sudden confusion, weakness, or unsteadiness",
    ],
    safeObservationChecklist: [
      "How much more water than usual is your dog drinking (rough estimate or measured)?",
      "How long has the increase persisted?",
      "Is urination frequency, volume, or appearance also changing?",
      "Other signs: appetite, weight, energy, vomiting, breathing.",
      "Recent diet or medication changes.",
      "Recent weather, environment, or activity changes.",
    ],
    whatNotToDo: [
      ...COMMON_NOT_TO_DO_DOG,
      "Do not restrict your dog's access to water unless a veterinarian has specifically told you to.",
      "Do not try to diagnose your dog with diabetes, kidney disease, or any other condition from a website — these require professional examination and tests.",
    ],
    whenToContactVet:
      "Contact a veterinarian if your dog's water intake remains noticeably higher than usual for more than a short period, or at any time if the increase is paired with appetite change, weight change, urination change, vomiting, or lethargy. Increased water intake is a common reason for a veterinary visit and the underlying cause is identified through examination and tests — not from a list of symptoms online.",
    faqs: [
      {
        question: "How much water is too much?",
        answer:
          "There is no single number that applies to every dog. Body size, diet, activity, weather, and age all affect normal water intake. A noticeable, sustained increase versus your dog's usual baseline is the relevant change — and that is a finding to discuss with a veterinarian.",
      },
      {
        question: "Could this be diabetes or kidney disease?",
        answer:
          "Increased water intake can be associated with several systemic conditions, including some endocrine and renal conditions, but it has many other possible causes too. Only a veterinarian can identify the cause through examination and laboratory tests. Do not try to diagnose this from a website.",
      },
      {
        question: "Should I restrict water?",
        answer:
          "Generally no. Restricting water in a dog that is drinking more than usual can be harmful, particularly if an underlying condition is causing the increase. Do not restrict water unless a licensed veterinarian has specifically instructed you to.",
      },
    ],
    sources: DOG_GENERAL_SOURCES,
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },

  // ─── CAT ────────────────────────────────────────────────────────────────
  {
    slug: "why-is-my-cat-vomiting",
    species: "cat",
    speciesLabel: "Cat",
    path: "/cats/health/why-is-my-cat-vomiting",
    title: "Why Is My Cat Vomiting? Cautious Symptom Guide",
    description:
      "A cautious, source-aware educational overview of possible reasons a cat may vomit, emergency warning signs, and when to contact a veterinarian. Not a diagnosis.",
    pageHeading: "Why is my cat vomiting?",
    symptom: "vomiting",
    directAnswer:
      "Vomiting in cats can have many possible causes — from a single mild upset to a serious underlying condition. This page lists broad cause categories and the warning signs that should prompt urgent veterinary contact. It is not a diagnosis or treatment guide. If vomiting is severe, repeated, or paired with other concerning signs, contact a licensed veterinarian or emergency clinic.",
    possibleCauseCategories: [
      "Dietary indiscretion or sudden food changes.",
      "Suspected toxin exposure — common household risks include lilies (particularly dangerous to cats), human medications, and certain plants and foods.",
      "Hairballs in some cats, though repeated retching warrants professional assessment.",
      "Gastrointestinal infections, inflammation, or parasites.",
      "Foreign-body ingestion or obstruction (string, thread, small objects).",
      "Underlying chronic or systemic conditions that a veterinarian can investigate.",
    ],
    emergencySigns: [
      "Repeated vomiting that does not stop",
      "Blood in vomit or stool",
      "Lethargy, collapse, or unresponsiveness",
      "Inability to keep water down (dehydration risk)",
      "Suspected ingestion of a toxic substance — especially lilies, human medication, or unknown plant",
      "Pale, yellow, or blue-tinged gums",
      "Distended or painful abdomen",
      "Repeated unproductive retching",
    ],
    safeObservationChecklist: [
      "How many times and how recently has the cat vomited?",
      "What did the vomit look like (food, foam, bile, blood, hair)?",
      "Can the cat keep water down?",
      "Other signs: appetite, energy, hiding, urination, stool, breathing.",
      "Recent diet changes or access to plants, household chemicals, medications.",
      "Recent medications, supplements, or known existing conditions.",
    ],
    whatNotToDo: COMMON_NOT_TO_DO_CAT,
    whenToContactVet:
      "Contact a veterinarian or emergency clinic immediately if any emergency sign is present, if you suspect poisoning (especially lily ingestion or human medication), or if the cat seems severely unwell. Contact a veterinarian promptly if vomiting is repeated, persists, or is paired with other signs (lethargy, appetite loss, hiding, dehydration). Cats can become unwell quickly — when in doubt, call.",
    faqs: [
      {
        question: "Is occasional hairball vomiting normal?",
        answer:
          "Some cats occasionally bring up hair, but repeated retching, frequent hairball-related vomiting, or vomiting paired with other signs is not something to dismiss — it can indicate underlying issues. Contact a veterinarian if you are unsure.",
      },
      {
        question: "My cat ate a lily — is that an emergency?",
        answer:
          "Yes. True lilies and several related plants are well-documented as highly toxic to cats. Treat any known or suspected lily exposure as a veterinary emergency and contact a veterinarian or an animal poison-control service immediately. Do not wait to see whether symptoms develop.",
      },
      {
        question: "Should I withhold food or water?",
        answer:
          "Cats can become unwell more quickly than dogs when not eating or drinking. Do not withhold food or water for extended periods based on general online guidance. Ask a veterinarian how to handle hydration and feeding in your specific situation.",
      },
    ],
    sources: CAT_TOXIN_SOURCES,
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "why-is-my-cat-not-eating",
    species: "cat",
    speciesLabel: "Cat",
    path: "/cats/health/why-is-my-cat-not-eating",
    title: "Why Is My Cat Not Eating? Cautious Symptom Guide",
    description:
      "A cautious, source-aware educational overview of possible reasons a cat may not be eating, emergency warning signs, and when to contact a veterinarian. Not a diagnosis.",
    pageHeading: "Why is my cat not eating?",
    symptom: "not eating",
    directAnswer:
      "Loss of appetite in cats is taken more seriously than in dogs because cats can become unwell relatively quickly when not eating. This page lists broad cause categories and the warning signs that should prompt veterinary contact. It is not a diagnosis or treatment guide. If your cat refuses food for an extended period, or refusal is paired with other concerning signs, contact a licensed veterinarian.",
    possibleCauseCategories: [
      "Gastrointestinal upset — only a vet can identify the specific cause.",
      "Dental pain or oral conditions.",
      "Stress, environmental changes, or behavioural causes.",
      "Suspected toxin exposure or recent unusual ingestion.",
      "Pain from injury or an internal condition.",
      "Underlying chronic or systemic conditions that need professional assessment.",
    ],
    emergencySigns: [
      "Refusal to eat for more than a short period — cats are more vulnerable than dogs to extended fasting",
      "Refusal to eat paired with lethargy, vomiting, diarrhoea, or hiding",
      "Pain signs — vocalising, restlessness, unwillingness to move",
      "Collapse, weakness, or unresponsiveness",
      "Suspected toxin exposure",
      "Difficulty urinating, especially in male cats — can be life-threatening",
      "Pale, yellow, or blue-tinged gums",
      "Yellowing of skin, gums, or eye whites",
    ],
    safeObservationChecklist: [
      "How long has appetite been reduced, and is the cat refusing all food or only some?",
      "Is water intake normal?",
      "Is the cat hiding, withdrawn, or behaving unusually?",
      "Other signs: energy, vomiting, diarrhoea, breathing, weight, urination.",
      "Recent dental work, surgery, or known existing conditions.",
      "Recent diet, environment, or routine changes.",
      "Any visible injuries, swelling, or signs of pain?",
    ],
    whatNotToDo: COMMON_NOT_TO_DO_CAT,
    whenToContactVet:
      "Contact a veterinarian or emergency clinic immediately if appetite loss is paired with any emergency sign, if you suspect poisoning, or if the cat seems severely unwell. Cats are particularly at risk if they go without food for prolonged periods because of how their liver metabolism works. Specific timing guidance is case-specific — call a clinic for telephone triage rather than relying on a generalised number.",
    faqs: [
      {
        question: "How long can a cat safely go without eating?",
        answer:
          "There is no safe universal figure, and cats are more vulnerable than dogs to extended fasting because of their liver metabolism. Overweight cats are at higher risk. Do not rely on online numbers — contact a veterinarian if your cat is refusing food for an extended period or is behaving unusually.",
      },
      {
        question: "My cat skipped one meal — should I worry?",
        answer:
          "A single skipped meal in an otherwise normal cat who is alert, drinking, and behaving normally is often not an emergency, but should be monitored. If appetite is still off, or if other signs appear, contact a veterinarian. Hiding and withdrawal are particularly important behavioural signs in cats.",
      },
      {
        question: "Should I try a different food?",
        answer:
          "Changing food in response to appetite loss can mask the underlying cause and sometimes worsen things. Some human foods are also unsafe for cats. Talk to a veterinarian before changing diet, particularly if your cat has any chronic condition.",
      },
    ],
    sources: CAT_TOXIN_SOURCES,
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "why-is-my-cat-sneezing",
    species: "cat",
    speciesLabel: "Cat",
    path: "/cats/health/why-is-my-cat-sneezing",
    title: "Why Is My Cat Sneezing? Cautious Symptom Guide",
    description:
      "A cautious, source-aware educational overview of possible reasons a cat may sneeze, warning signs, and when to contact a veterinarian. Not a diagnosis.",
    pageHeading: "Why is my cat sneezing?",
    symptom: "sneezing",
    directAnswer:
      "Sneezing in cats can have many possible causes — from a brief response to dust to a respiratory condition that needs professional assessment. This page lists broad cause categories and the warning signs that should prompt veterinary contact. It is not a diagnosis or treatment guide. Persistent sneezing, sneezing with discharge, or sneezing paired with other signs should be assessed by a veterinarian.",
    possibleCauseCategories: [
      "Brief response to dust, scent, or other airborne irritants — often transient.",
      "Upper-respiratory infectious illness — only a vet can identify the specific cause.",
      "Allergies or environmental sensitivities.",
      "Foreign body in the nose or nasal passages.",
      "Dental disease that affects the nose in some cats.",
      "Other chronic conditions that need professional examination.",
    ],
    emergencySigns: [
      "Difficulty breathing, open-mouth breathing, or gasping",
      "Pale, white, or bluish gums or tongue",
      "Lethargy, refusal to eat, or hiding",
      "Bloody nasal discharge",
      "Severe facial swelling",
      "Repeated or violent sneezing fits with distress",
      "Suspected inhalation of a foreign object",
    ],
    safeObservationChecklist: [
      "How often is the cat sneezing, and for how long has it been happening?",
      "Is there nasal or eye discharge? Clear, yellow, green, or bloody?",
      "Is the cat eating, drinking, and behaving normally?",
      "Other signs: energy, breathing, hiding, weight, coughing.",
      "Any environmental changes — new home, dust, scented products, new animals?",
      "Any known existing conditions or recent illness in other household pets?",
    ],
    whatNotToDo: COMMON_NOT_TO_DO_CAT,
    whenToContactVet:
      "Contact a veterinarian or emergency clinic immediately if your cat is having trouble breathing, has pale or blue gums, has bloody nasal discharge, or is severely unwell. Contact a veterinarian promptly if sneezing persists, worsens, or is paired with discharge, lethargy, or appetite loss. Many causes of sneezing need professional examination to identify safely.",
    faqs: [
      {
        question: "Is occasional sneezing normal?",
        answer:
          "An occasional sneeze in response to dust or a scent is generally not a concern in an otherwise well cat. Persistent sneezing, sneezing with discharge, or sneezing paired with other signs should be assessed by a veterinarian.",
      },
      {
        question: "Could this be a cat cold?",
        answer:
          "Several different infectious agents can cause respiratory illness in cats and are sometimes informally called a 'cat cold.' Only a veterinarian can identify the cause and decide what care is appropriate. Do not assume any specific diagnosis from a website.",
      },
      {
        question: "Can I give human cold medicine?",
        answer:
          "No. Several human cold and flu medications are dangerous to cats. Do not give human medications unless a licensed veterinarian has specifically instructed you to.",
      },
    ],
    sources: CAT_GENERAL_SOURCES,
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "why-is-my-cat-limping",
    species: "cat",
    speciesLabel: "Cat",
    path: "/cats/health/why-is-my-cat-limping",
    title: "Why Is My Cat Limping? Cautious Symptom Guide",
    description:
      "A cautious, source-aware educational overview of possible reasons a cat may limp, emergency warning signs, and when to contact a veterinarian. Not a diagnosis.",
    pageHeading: "Why is my cat limping?",
    symptom: "limping",
    directAnswer:
      "Limping in cats can have many possible causes — from a soft-tissue injury to a more serious orthopaedic or neurological issue. Cats often hide pain, so a limp may indicate more discomfort than it appears. This page lists broad cause categories and the warning signs that should prompt veterinary contact. It is not a diagnosis or treatment guide, and it does not recommend pain medication.",
    possibleCauseCategories: [
      "Soft-tissue injury (sprain, strain, bruise).",
      "Bite wounds or abscesses — particularly common in outdoor cats and not always visible early.",
      "Paw or nail injury, foreign object in the paw.",
      "Trauma — falls, vehicle impact, fights.",
      "Orthopaedic, neurological, or joint issues that need professional assessment.",
      "Other chronic conditions a veterinarian can investigate.",
    ],
    emergencySigns: [
      "Inability to bear any weight on the limb",
      "Obvious deformity, open wound, or visible bone",
      "Severe pain — vocalising, hissing when touched, or hiding in distress",
      "Suspected trauma (fall, vehicle impact, fight)",
      "Sudden paralysis, dragging of a limb, or loss of use of both back legs",
      "Significant swelling, heat, foul-smelling discharge, or rapidly developing wound",
      "Limping with lethargy, fever-like behaviour, or refusal to eat",
    ],
    safeObservationChecklist: [
      "Which limb is affected, and when did the limp start?",
      "Is the cat willing to bear any weight?",
      "Are there visible injuries, swelling, scabs, or foreign objects?",
      "Is the cat hiding more than usual or behaving differently?",
      "Did anything happen — outdoor access, a fall, a fight, a chase?",
      "Any other signs: appetite, energy, fever-like behaviour, breathing?",
    ],
    whatNotToDo: [
      ...COMMON_NOT_TO_DO_CAT,
      "Do not give human pain medications. Paracetamol/acetaminophen is highly toxic to cats. Several other human medications are also dangerous.",
      "Do not attempt to splint or bandage a limb at home except under veterinary guidance.",
      "Do not assume an outdoor cat's limp will resolve on its own — bite wounds can develop into abscesses that need treatment.",
    ],
    whenToContactVet:
      "Contact a veterinarian or emergency clinic immediately if your cat cannot bear weight, has a visible injury or deformity, is in severe pain, or has experienced trauma — sudden loss of use of both back legs is a particular emergency in cats. Contact a veterinarian promptly if the limp persists, worsens, or is paired with other signs. Many causes of feline limping need physical examination to identify safely.",
    faqs: [
      {
        question: "Can I give my cat over-the-counter pain medicine?",
        answer:
          "No — and it is particularly important not to do this in cats. Paracetamol/acetaminophen is highly toxic to cats and can be fatal. Several other common human pain medications are also dangerous. Do not give any pain medication unless a licensed veterinarian has specifically prescribed it.",
      },
      {
        question: "My cat had a fight and is now limping. Should I wait?",
        answer:
          "Bite wounds in cats — particularly from other animals — can develop into abscesses that need veterinary treatment. Even small puncture wounds can be significant. Contact a veterinarian rather than waiting to see whether the limp resolves.",
      },
      {
        question: "What if my cat suddenly can't use their back legs?",
        answer:
          "Sudden loss of use of both back legs in a cat is a veterinary emergency. Do not wait. Contact an emergency clinic immediately.",
      },
    ],
    sources: CAT_GENERAL_SOURCES,
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "why-is-my-cat-drinking-a-lot-of-water",
    species: "cat",
    speciesLabel: "Cat",
    path: "/cats/health/why-is-my-cat-drinking-a-lot-of-water",
    title: "Why Is My Cat Drinking a Lot of Water? Cautious Symptom Guide",
    description:
      "A cautious, source-aware educational overview of possible reasons a cat may drink unusually large amounts of water, warning signs, and when to contact a veterinarian. Not a diagnosis.",
    pageHeading: "Why is my cat drinking a lot of water?",
    symptom: "drinking a lot of water",
    directAnswer:
      "A sustained or noticeable increase in a cat's water intake is a clinical finding that can be associated with many possible underlying conditions — some of them important to identify early. This page lists broad cause categories and the warning signs that should prompt veterinary contact. It is not a diagnosis. If the increase persists, or is paired with appetite changes, urination changes, weight loss, vomiting, or lethargy, contact a licensed veterinarian.",
    possibleCauseCategories: [
      "Hot weather, recent activity, or diet shift from wet to dry food (sometimes transient).",
      "Medication side effects in some cats.",
      "Underlying systemic conditions — only a veterinarian can identify the specific cause through examination and tests.",
      "Environmental or behavioural changes in some cases.",
    ],
    emergencySigns: [
      "Increased water intake paired with severe lethargy or collapse",
      "Repeated vomiting or significant weight loss",
      "Pale, yellow, or blue-tinged gums",
      "Difficulty urinating, blood in urine, or signs of pain when urinating — particularly serious in male cats",
      "Sudden refusal to eat or hiding",
      "Yellowing of skin, gums, or eye whites",
      "Suspected toxin exposure",
    ],
    safeObservationChecklist: [
      "How much more water than usual is your cat drinking (rough estimate or measured)?",
      "How long has the increase persisted?",
      "Is urination frequency, volume, or appearance also changing?",
      "Is the cat using the litter box differently, or showing pain when urinating?",
      "Other signs: appetite, weight, energy, vomiting, breathing, hiding.",
      "Recent diet or medication changes.",
    ],
    whatNotToDo: [
      ...COMMON_NOT_TO_DO_CAT,
      "Do not restrict your cat's access to water unless a veterinarian has specifically told you to.",
      "Do not try to diagnose your cat with diabetes, kidney disease, hyperthyroidism, or any other condition from a website — these require professional examination and tests.",
    ],
    whenToContactVet:
      "Contact a veterinarian if your cat's water intake remains noticeably higher than usual for more than a short period, or at any time if the increase is paired with appetite change, weight change, urination change, vomiting, or lethargy. In cats, urinary difficulty — especially in male cats — can become life-threatening quickly, so any sign of straining, blood, or inability to urinate is an emergency.",
    faqs: [
      {
        question: "How much water is too much for a cat?",
        answer:
          "There is no single number that applies to every cat. Body size, diet (wet vs dry), age, and environment all affect normal water intake. A noticeable, sustained increase versus your cat's usual baseline is the relevant change — and that is a finding to discuss with a veterinarian.",
      },
      {
        question: "Could this be diabetes, kidney disease, or hyperthyroidism?",
        answer:
          "Increased water intake can be associated with several systemic conditions, including some endocrine and renal conditions that are more common in older cats. It has many other possible causes too. Only a veterinarian can identify the cause through examination and laboratory tests. Do not try to diagnose this from a website.",
      },
      {
        question: "Should I restrict water?",
        answer:
          "Generally no. Restricting water in a cat that is drinking more than usual can be harmful, particularly if an underlying condition is causing the increase. Do not restrict water unless a licensed veterinarian has specifically instructed you to.",
      },
    ],
    sources: CAT_GENERAL_SOURCES,
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
];

export function getSymptomArticleBySlug(
  slug: string,
  species?: HealthSpecies
): SymptomArticle | undefined {
  return SYMPTOM_ARTICLES.find(
    (a) => a.slug === slug && (!species || a.species === species)
  );
}

export function getSymptomArticlesBySpecies(
  species: HealthSpecies
): SymptomArticle[] {
  return SYMPTOM_ARTICLES.filter((a) => a.species === species);
}
