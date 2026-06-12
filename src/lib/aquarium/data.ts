import type { SourceLink } from "@/lib/educational/types";

const PUBLISHED = "2026-06-12";
const MODIFIED = "2026-06-12";

/**
 * Core safety principle shown prominently near the top of every page in the
 * Aquarium Care cluster. This is a responsible-care PLANNING cluster — not a
 * fish-disease diagnosis, treatment, medication, or chemical-dosing cluster.
 * Keep this text intact.
 */
export const AQUARIUM_DISCLAIMER =
  "This content is educational and does not replace advice from a qualified aquatic veterinarian, aquarium professional, or local animal-care authority. Fish health and water quality problems can worsen quickly. For severe distress, injury, rapid worsening, mass illness, or unexplained deaths, seek qualified aquatic veterinary or specialist guidance.";

export const AQUARIUM_SOURCE_NOTE =
  "Authoritative references used for general educational context. External links open in a new tab and these organisations do not endorse FaunaHub. Aquarium needs vary by species and setup, and guidance differs by source and country — confirm specifics with a qualified aquatic veterinarian or aquarium professional. This page does not give chemical dosing, medication, or diagnosis.";

// ─── VERIFIED SOURCES ──────────────────────────────────────────────────────
// Every URL below was fetched with a browser user-agent and confirmed to
// return HTTP 200 (final, post-redirect URL) on 2026-06-12. Keep the list
// small, authoritative, and topical.

const SRC_AVMA_PETCARE: SourceLink = {
  label: "AVMA — Pet Care Resources",
  url: "https://www.avma.org/resources-tools/pet-owners/petcare",
  type: "veterinary",
  note: "American Veterinary Medical Association consumer pet-care hub",
};

const SRC_MERCK_FISH: SourceLink = {
  label: "Merck Veterinary Manual — Fish",
  url: "https://www.merckvetmanual.com/all-other-pets/fish",
  type: "reference",
  note: "Veterinary reference covering pet and aquarium fish",
};

const SRC_WAVMA: SourceLink = {
  label: "World Aquatic Veterinary Medical Association",
  url: "https://wavma.org/",
  type: "veterinary",
  note: "Professional body for aquatic-animal veterinary medicine",
};

const SRC_RSPCA_FISH: SourceLink = {
  label: "RSPCA — Fish Welfare",
  url: "https://www.rspca.org.uk/adviceandwelfare/pets/fish",
  type: "animal-welfare",
  note: "Welfare-based guidance on keeping fish (UK)",
};

const SRC_UF_IFAS: SourceLink = {
  label: "University of Florida IFAS Extension (EDIS)",
  url: "https://edis.ifas.ufl.edu/",
  type: "university",
  note: "University extension articles on aquaculture and fish health",
};

// ─── TYPES ─────────────────────────────────────────────────────────────────

export interface AquariumSection {
  heading: string;
  intro?: string;
  bullets: string[];
}

export interface AquariumFAQ {
  question: string;
  answer: string;
}

export interface AquariumRelatedGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface AquariumArticle {
  slug: string;
  /** Always "/aquarium-care/<slug>" */
  path: string;
  title: string;
  description: string;
  pageHeading: string;
  topicTag: string;
  directAnswer: string;
  sections: AquariumSection[];
  /** Required practical checklist */
  checklist: AquariumSection;
  /** Required: what NOT to assume */
  whatNotToAssume: AquariumSection;
  /** Required: when to seek qualified help */
  whenToSeekHelp: AquariumSection;
  faqs: AquariumFAQ[];
  sources: SourceLink[];
  related: AquariumRelatedGroup[];
  publishedTime: string;
  modifiedTime: string;
}

// Shared "when to seek help" block — fish decline can be fast.
const WHEN_TO_SEEK_HELP: AquariumSection = {
  heading: "When to seek qualified help",
  intro:
    "Water quality and fish health problems can worsen quickly. Do not use this page to diagnose disease or to medicate — get qualified aquatic veterinary or specialist guidance for anything serious.",
  bullets: [
    "Several fish unwell at once, unexplained deaths, or a rapidly worsening situation.",
    "Laboured breathing, gasping at the surface, clamped fins, or fish hiding and refusing food.",
    "Visible injuries, sores, unusual growths, or marked changes in colour or behaviour.",
    "A reading or smell that suggests a serious water-quality problem you cannot explain.",
    "Anything you are unsure about — contact a qualified aquatic veterinarian or aquarium professional.",
  ],
};

const RELATED_CORE: AquariumRelatedGroup = {
  title: "Aquarium care",
  links: [
    { label: "Aquarium care hub", href: "/aquarium-care" },
    { label: "Fish tank setup basics", href: "/aquarium-care/fish-tank-setup-basics" },
    { label: "Water quality basics", href: "/aquarium-care/aquarium-water-quality-basics" },
    { label: "Fish stress & warning signs", href: "/aquarium-care/fish-stress-warning-signs" },
  ],
};

const RELATED_PROFILES: AquariumRelatedGroup = {
  title: "Fish profiles",
  links: [
    { label: "Betta fish", href: "/animals/betta-fish" },
    { label: "Goldfish", href: "/animals/goldfish" },
    { label: "Guppy", href: "/animals/guppy" },
    { label: "Fish encyclopedia", href: "/animal-encyclopedia/fish" },
  ],
};

const RELATED_TOOLS: AquariumRelatedGroup = {
  title: "Tools & planning",
  links: [
    { label: "Aquarium setup checklist", href: "/tools/aquarium-setup-checklist" },
    { label: "Pet cost calculator", href: "/tools/pet-cost-calculator" },
    { label: "Pet budget checklist", href: "/guides/pet-budget-checklist" },
    { label: "Vet care hub", href: "/vet-care" },
  ],
};

// ─── ARTICLES ──────────────────────────────────────────────────────────────

export const AQUARIUM_ARTICLES: AquariumArticle[] = [
  {
    slug: "fish-tank-setup-basics",
    path: "/aquarium-care/fish-tank-setup-basics",
    title: "Fish Tank Setup Basics — A Responsible Starting Point",
    description:
      "How to think about setting up a first aquarium responsibly: tank size, equipment, cycling before fish, and water testing. Educational planning, not veterinary or chemical-dosing advice.",
    pageHeading: "Fish Tank Setup Basics",
    topicTag: "Aquarium · Setup",
    directAnswer:
      "A responsible aquarium starts before any fish arrive: choose an appropriately sized tank for the species you plan to keep, add a filter and heater if needed, and cycle the tank so beneficial bacteria can establish. Bigger tanks are generally more stable. This page is educational planning — it does not give chemical doses, medication, or diagnosis, and species needs vary, so confirm specifics with a qualified aquarium professional.",
    sections: [
      {
        heading: "Plan around the fish, not the other way round",
        intro:
          "Decide which fish you want first, then build a setup that suits them — not the reverse. Requirements vary widely by species.",
        bullets: [
          "Research the adult size, temperament, and water needs of the specific fish before buying anything.",
          "Bigger tanks are usually more stable and forgiving than very small ones; avoid tiny bowls.",
          "Plan for compatible species and adequate space — overstocking causes water-quality problems.",
          "Treat universal \"X litres per fish\" rules as rough planning guidance, not law; needs vary by species and source.",
        ],
      },
      {
        heading: "Core equipment to consider",
        bullets: [
          "A suitably sized tank with a stable, level, weight-bearing stand.",
          "A filter appropriate to the tank and stocking.",
          "A heater and thermometer for tropical species (coldwater fish such as goldfish differ).",
          "A water-testing kit so you can monitor quality with appropriate equipment.",
          "Substrate, hiding places, and (optionally) plants suited to the species.",
        ],
      },
    ],
    checklist: {
      heading: "Setup checklist",
      bullets: [
        "Chosen fish researched for adult size, temperament, and water needs.",
        "Appropriately sized tank and a stable, level stand.",
        "Filter and, for tropical fish, a heater and thermometer.",
        "A water-testing kit ready before fish arrive.",
        "Tank cycled (beneficial bacteria established) before adding fish.",
        "A qualified aquarium professional or aquatic vet identified for questions.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume any fish can live in a small bowl or unfiltered tank.",
        "Do not assume a new tank is ready for fish immediately — cycling takes time.",
        "Do not assume one tank-size rule applies to every species or country.",
        "Do not assume fish are effortless decorations; they are living animals with real needs.",
      ],
    },
    whenToSeekHelp: WHEN_TO_SEEK_HELP,
    faqs: [
      {
        question: "Do I really need to cycle a tank before adding fish?",
        answer:
          "Establishing beneficial bacteria (the nitrogen cycle) before or while carefully stocking is widely considered essential, because those bacteria process fish waste. Adding fish to a brand-new, uncycled tank can expose them to harmful waste build-up. Follow qualified aquarium guidance on cycling methods.",
      },
      {
        question: "What size tank should I get?",
        answer:
          "It depends entirely on the species, their adult size, how many you plan to keep, and their behaviour. Larger tanks are generally more stable. Treat any single number as rough planning guidance and confirm with species-specific, qualified advice rather than a universal rule.",
      },
      {
        question: "Does this page tell me which chemicals to add?",
        answer:
          "No. This is educational planning, not a chemistry or treatment guide. It does not provide chemical doses or medication. Water conditioners and any treatments should be used according to qualified guidance and the product's own instructions.",
      },
    ],
    sources: [SRC_AVMA_PETCARE, SRC_RSPCA_FISH, SRC_WAVMA],
    related: [RELATED_CORE, RELATED_PROFILES, RELATED_TOOLS],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },

  {
    slug: "freshwater-aquarium-beginners",
    path: "/aquarium-care/freshwater-aquarium-beginners",
    title: "Freshwater Aquarium for Beginners — A Calm, Responsible Guide",
    description:
      "An educational beginner's overview of freshwater aquariums: realistic expectations, planning, cycling, and stocking slowly. Not veterinary advice, diagnosis, or chemical dosing.",
    pageHeading: "Freshwater Aquarium for Beginners",
    topicTag: "Aquarium · Beginners",
    directAnswer:
      "Freshwater aquariums are a rewarding but real responsibility. A calm start means planning the setup, cycling the tank, choosing hardy, compatible species, stocking slowly, and learning to test and maintain water quality. Fish are not effortless decorations. This page is educational planning — it does not diagnose, treat, or give chemical doses, and needs vary by species, so confirm specifics with qualified guidance.",
    sections: [
      {
        heading: "Set realistic expectations",
        bullets: [
          "Aquariums need ongoing maintenance and attention — they are not set-and-forget.",
          "Most problems trace back to water quality, so testing and routine care matter more than gadgets.",
          "Start with a manageable, appropriately sized setup rather than the smallest possible tank.",
          "Stock gradually so the filter and beneficial bacteria can keep up.",
        ],
      },
      {
        heading: "Choosing beginner-friendly fish",
        intro:
          "\"Beginner-friendly\" does not mean disposable. Even hardy fish need correct conditions.",
        bullets: [
          "Research species for adult size, temperament, and whether they are social or solitary.",
          "Avoid mixing species with very different needs or known incompatibilities.",
          "Some popular fish, such as bettas, have specific requirements covered in their own care pages.",
          "Ask a knowledgeable aquarium source before buying, and never release unwanted fish into the wild.",
        ],
      },
    ],
    checklist: {
      heading: "Beginner checklist",
      bullets: [
        "Appropriately sized, cycled tank with filter (and heater for tropical fish).",
        "A water-testing kit and a simple maintenance routine planned.",
        "Hardy, compatible species researched in advance.",
        "A plan to stock slowly rather than all at once.",
        "A qualified aquarium professional or aquatic vet to ask when unsure.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume beginner fish are effortless or that any fish suits a tiny tank.",
        "Do not assume all fish get along — research compatibility.",
        "Do not assume a problem will fix itself; water issues can worsen quickly.",
        "Do not release aquarium fish into local waterways — it can cause ecological harm.",
      ],
    },
    whenToSeekHelp: WHEN_TO_SEEK_HELP,
    faqs: [
      {
        question: "Are freshwater aquariums easy?",
        answer:
          "They are achievable for beginners who plan and maintain them, but they are not effortless. Success depends on the right setup, cycling, sensible stocking, and regular water testing and maintenance. Treat fish as living animals with real needs, not decorations.",
      },
      {
        question: "How many fish can I add at once?",
        answer:
          "Stocking slowly is widely recommended so the filter and beneficial bacteria can keep pace with the waste load. Exact numbers depend on the species and tank, so follow qualified, species-specific guidance rather than filling a new tank all at once.",
      },
      {
        question: "Which fish is best for a first tank?",
        answer:
          "There is no single answer — it depends on your tank size, water, and what you can care for. Research hardy, appropriately sized, compatible species and ask a knowledgeable aquarium source. This page is educational and does not endorse specific purchases or brands.",
      },
    ],
    sources: [SRC_RSPCA_FISH, SRC_UF_IFAS, SRC_AVMA_PETCARE],
    related: [RELATED_CORE, RELATED_PROFILES, RELATED_TOOLS],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },

  {
    slug: "aquarium-water-quality-basics",
    path: "/aquarium-care/aquarium-water-quality-basics",
    title: "Aquarium Water Quality Basics — Testing & The Nitrogen Cycle",
    description:
      "A cautious overview of aquarium water quality: the nitrogen cycle, why testing matters, and avoiding sudden changes. No chemical dosing, diagnosis, or treatment instructions.",
    pageHeading: "Aquarium Water Quality Basics",
    topicTag: "Aquarium · Water quality",
    directAnswer:
      "Water quality is the foundation of fish health. Beneficial bacteria convert fish waste through the nitrogen cycle, and water should be tested with appropriate equipment so problems are caught early. Avoid sudden major changes unless guided by a qualified professional. This page is educational — it does not give chemical doses, medication, or diagnosis, and parameters vary by species, so confirm specifics with qualified guidance.",
    sections: [
      {
        heading: "The nitrogen cycle, in plain terms",
        intro:
          "Understanding the cycle explains why testing and patience matter. This is an overview, not a chemistry protocol.",
        bullets: [
          "Fish produce waste that releases ammonia, which is harmful.",
          "Beneficial bacteria convert ammonia to nitrite, and then nitrite to less-harmful nitrate.",
          "These bacteria take time to establish, which is why new tanks are cycled before stocking.",
          "Nitrate is reduced through routine partial water changes and good maintenance.",
        ],
      },
      {
        heading: "Testing and stability",
        bullets: [
          "Use an appropriate water-testing kit to monitor key parameters rather than guessing.",
          "Stability matters: many fish cope better with steady conditions than with sudden swings.",
          "Avoid large, abrupt changes in temperature, pH, or chemistry unless guided by a professional.",
          "Different species need different conditions — research the specific fish you keep.",
        ],
      },
    ],
    checklist: {
      heading: "Water-quality checklist",
      bullets: [
        "An appropriate water-testing kit and a habit of using it.",
        "A cycled tank with established beneficial bacteria before stocking.",
        "A routine of partial water changes suited to the tank and stocking.",
        "Awareness of the target conditions for your specific species.",
        "Caution about sudden changes — make adjustments gradually and with guidance.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume clear water means safe water — invisible waste products still matter.",
        "Do not assume one set of parameters suits every species.",
        "Do not make large, sudden changes hoping to fix a problem fast.",
        "Do not use this page to diagnose disease or to choose medications or chemical doses.",
      ],
    },
    whenToSeekHelp: WHEN_TO_SEEK_HELP,
    faqs: [
      {
        question: "What is the nitrogen cycle?",
        answer:
          "It is the process by which beneficial bacteria convert toxic fish-waste ammonia into nitrite and then into less-harmful nitrate, which is then diluted through water changes. Establishing this bacterial process (\"cycling\") is central to keeping fish in stable, healthy water.",
      },
      {
        question: "How often should I test my water?",
        answer:
          "Regular testing — especially in a new tank, after changes, or if fish seem unwell — helps catch problems early. Exact frequency depends on the tank, stocking, and stage of setup, so follow qualified, species-appropriate guidance rather than a fixed universal schedule.",
      },
      {
        question: "Can this page tell me how much of a chemical to add?",
        answer:
          "No. This is an educational overview, not a dosing guide. It does not provide chemical amounts or treatments. Any conditioners or products should be used strictly according to qualified guidance and the product instructions.",
      },
    ],
    sources: [SRC_UF_IFAS, SRC_WAVMA, SRC_MERCK_FISH],
    related: [RELATED_CORE, RELATED_PROFILES, RELATED_TOOLS],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },

  {
    slug: "fish-feeding-basics",
    path: "/aquarium-care/fish-feeding-basics",
    title: "Fish Feeding Basics — Species-Appropriate, Not Overfed",
    description:
      "An educational overview of feeding aquarium fish: species-appropriate diets, the risks of overfeeding, and why this page gives no exact quantities. Not veterinary advice.",
    pageHeading: "Fish Feeding Basics",
    topicTag: "Aquarium · Feeding",
    directAnswer:
      "Feeding aquarium fish well means matching the food to the species and avoiding overfeeding, which fouls the water. Different fish are herbivores, carnivores, or omnivores, and some feed at the surface while others feed on the bottom. This page does not give exact quantities; appropriate amounts depend on the species, age, and setup, so follow qualified, species-specific guidance.",
    sections: [
      {
        heading: "Match food to the species",
        bullets: [
          "Research whether your fish are herbivores, carnivores, or omnivores and feed accordingly.",
          "Consider where the fish feed — surface, mid-water, or bottom — when choosing foods.",
          "Variety appropriate to the species is often better than a single food type.",
          "Some fish have specialised needs; check species care pages and qualified sources.",
        ],
      },
      {
        heading: "Overfeeding is a common, serious mistake",
        intro:
          "Uneaten food and excess waste are a leading cause of water-quality problems.",
        bullets: [
          "Feed modest amounts and remove uneaten food rather than overloading the tank.",
          "Excess food decays, raising waste levels and stressing the system.",
          "Reduced or refused eating can be an early warning sign worth taking seriously.",
          "This page gives no exact quantities — amounts depend on the fish and should follow qualified advice.",
        ],
      },
    ],
    checklist: {
      heading: "Feeding checklist",
      bullets: [
        "Foods chosen to match the species' diet type and feeding zone.",
        "Modest portions, with uneaten food removed.",
        "A consistent routine suited to the species.",
        "Attention to appetite changes as a possible early warning sign.",
        "Qualified, species-specific guidance for amounts and special diets.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume more food is better — overfeeding harms water quality.",
        "Do not assume all fish eat the same things or feed in the same place.",
        "Do not assume a fish that stops eating is fine — it can be an early warning sign.",
        "Do not rely on this page for exact feeding amounts or medicated foods.",
      ],
    },
    whenToSeekHelp: WHEN_TO_SEEK_HELP,
    faqs: [
      {
        question: "How much should I feed my fish?",
        answer:
          "This page does not give exact quantities, because the right amount depends on the species, age, number of fish, and setup. A common principle is to feed modest amounts and avoid leaving uneaten food. Follow qualified, species-specific guidance for portions.",
      },
      {
        question: "Why is overfeeding a problem?",
        answer:
          "Uneaten food and the extra waste from overfeeding decay in the tank, raising harmful waste levels and degrading water quality, which stresses fish. Feeding modest amounts and removing leftovers helps keep the system stable.",
      },
      {
        question: "My fish stopped eating — what should I do?",
        answer:
          "Reduced or refused eating can be an early sign that something is wrong with the fish or the water. Do not try to diagnose or medicate from a webpage. Check your water with appropriate testing and seek qualified aquatic veterinary or specialist guidance, especially if other signs appear.",
      },
    ],
    sources: [SRC_MERCK_FISH, SRC_RSPCA_FISH, SRC_AVMA_PETCARE],
    related: [RELATED_CORE, RELATED_PROFILES, RELATED_TOOLS],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },

  {
    slug: "fish-tank-maintenance-checklist",
    path: "/aquarium-care/fish-tank-maintenance-checklist",
    title: "Fish Tank Maintenance Checklist — A Calm Routine",
    description:
      "A practical aquarium maintenance checklist: routine water changes, filter care, observation, and testing. Educational planning, not veterinary advice or chemical dosing.",
    pageHeading: "Fish Tank Maintenance Checklist",
    topicTag: "Aquarium · Maintenance",
    directAnswer:
      "Good aquarium maintenance is a calm, consistent routine: observe the fish daily, test water regularly, change part of the water on a schedule that suits the tank, and care for the filter without destroying its beneficial bacteria. This page is an educational planning checklist — it does not diagnose, treat, or give chemical doses, and routines vary by setup, so confirm specifics with qualified guidance.",
    sections: [
      {
        heading: "A sensible maintenance rhythm",
        intro:
          "Frequencies below are general planning guidance, not fixed rules; tailor them to your tank and species.",
        bullets: [
          "Daily: briefly observe the fish, check behaviour and appetite, and confirm equipment is running.",
          "Regularly: test key water parameters with an appropriate kit.",
          "On a schedule: carry out partial water changes suited to the tank and stocking.",
          "Periodically: clean or rinse filter media gently in tank water to protect beneficial bacteria.",
        ],
      },
      {
        heading: "Protect the biological filter",
        bullets: [
          "Avoid replacing all filter media at once or rinsing it in chlorinated tap water.",
          "Sudden deep-cleaning can remove beneficial bacteria and trigger water-quality problems.",
          "Make changes gradually and keep an eye on parameters afterwards.",
          "If something seems off, slow down and seek qualified guidance rather than overcorrecting.",
        ],
      },
    ],
    checklist: {
      heading: "Maintenance checklist",
      bullets: [
        "Daily observation of fish behaviour, appetite, and equipment.",
        "Regular water testing with an appropriate kit.",
        "Scheduled partial water changes suited to the tank.",
        "Gentle filter care that preserves beneficial bacteria.",
        "Notes on any changes, so trends are easier to spot.",
        "A qualified aquatic vet or aquarium professional to consult when unsure.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a deep clean of the whole tank and filter at once is helpful — it can harm the system.",
        "Do not assume one maintenance schedule fits every tank or species.",
        "Do not assume clear water is healthy water without testing.",
        "Do not use maintenance changes to try to treat a sick fish — seek qualified help.",
      ],
    },
    whenToSeekHelp: WHEN_TO_SEEK_HELP,
    faqs: [
      {
        question: "How often should I change the water?",
        answer:
          "Regular partial water changes are a core part of maintenance, but the right frequency and amount depend on the tank size, stocking, and species. Treat any single figure as general planning guidance and follow qualified, species-appropriate advice.",
      },
      {
        question: "Should I clean the filter thoroughly?",
        answer:
          "Filters need care, but replacing all media at once or rinsing it in chlorinated tap water can kill the beneficial bacteria that keep the water safe. Gentle cleaning — often in tank water — and gradual changes help protect the biological filter.",
      },
      {
        question: "Is a fully cleaned, sparkling tank best?",
        answer:
          "Not necessarily. Over-cleaning can disrupt the established biological balance. The goal is stable, well-maintained water and a healthy system, not a sterile one. Consistency and observation matter more than aggressive cleaning.",
      },
    ],
    sources: [SRC_RSPCA_FISH, SRC_UF_IFAS, SRC_WAVMA],
    related: [RELATED_CORE, RELATED_PROFILES, RELATED_TOOLS],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },

  {
    slug: "when-to-call-aquatic-vet",
    path: "/aquarium-care/when-to-call-aquatic-vet",
    title: "When to Call an Aquatic Vet — Knowing When to Get Help",
    description:
      "Educational guidance on when to seek a qualified aquatic veterinarian or specialist for fish: warning situations, finding help in advance, and why not to self-diagnose.",
    pageHeading: "When to Call an Aquatic Vet",
    topicTag: "Aquarium · Vet care",
    directAnswer:
      "Fish can become seriously ill quickly, and aquatic veterinary care is a real field. Seek qualified help for severe distress, injury, rapid worsening, mass illness, or unexplained deaths, and line up an aquatic vet or specialist before you need one. This page is educational — it does not diagnose, treat, or recommend medications. When in doubt, get professional guidance.",
    sections: [
      {
        heading: "Situations that warrant qualified help",
        bullets: [
          "Several fish becoming unwell at once, unexplained deaths, or a fast-deteriorating tank.",
          "Laboured breathing, gasping at the surface, or fish that hide and refuse food.",
          "Visible injuries, sores, growths, or marked changes in colour or swimming.",
          "Suspected serious water-quality problems you cannot identify or correct.",
        ],
      },
      {
        heading: "Find help before you need it",
        intro:
          "Not every veterinary clinic treats fish, so plan ahead.",
        bullets: [
          "Identify an aquatic veterinarian or fish-experienced clinic in advance.",
          "Professional bodies such as aquatic veterinary associations can help you locate practitioners.",
          "Keep basic records of your setup and water tests to share with a professional.",
          "Do not attempt diagnosis, medication, or chemical treatments from a webpage.",
        ],
      },
    ],
    checklist: {
      heading: "Preparedness checklist",
      bullets: [
        "An aquatic vet or fish-experienced clinic identified before an emergency.",
        "Basic records of your setup and recent water-test results.",
        "Awareness of the warning situations that need prompt help.",
        "A plan to act quickly rather than wait when something is seriously wrong.",
        "No reliance on webpages for diagnosis, medication, or dosing.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume fish cannot be treated by a veterinarian — aquatic veterinary medicine exists.",
        "Do not assume every clinic treats fish; find one in advance.",
        "Do not assume a serious problem will resolve on its own.",
        "Do not self-diagnose or medicate based on a webpage.",
      ],
    },
    whenToSeekHelp: WHEN_TO_SEEK_HELP,
    faqs: [
      {
        question: "Can you really take a fish to the vet?",
        answer:
          "Yes. Aquatic veterinary medicine is an established field, and some veterinarians and clinics treat fish. Because not every clinic does, it helps to identify an aquatic or fish-experienced vet in advance, before you face an emergency.",
      },
      {
        question: "When should I get professional help for my fish?",
        answer:
          "Seek qualified help for severe distress, injury, rapid worsening, several fish unwell at once, or unexplained deaths, and whenever you are unsure. Acting promptly matters because fish health and water problems can escalate quickly.",
      },
      {
        question: "Can this page tell me how to treat my fish?",
        answer:
          "No. This is educational guidance about when to seek help, not a treatment or medication guide. It does not diagnose disease, prescribe drugs, or give chemical doses. Those require a qualified aquatic veterinarian or specialist.",
      },
    ],
    sources: [SRC_WAVMA, SRC_AVMA_PETCARE, SRC_MERCK_FISH],
    related: [RELATED_CORE, RELATED_PROFILES, RELATED_TOOLS],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },

  {
    slug: "fish-stress-warning-signs",
    path: "/aquarium-care/fish-stress-warning-signs",
    title: "Fish Stress & Warning Signs — What to Watch For",
    description:
      "An educational overview of stress and warning signs in aquarium fish, and why they route to water testing and qualified help rather than home diagnosis or treatment.",
    pageHeading: "Fish Stress & Warning Signs",
    topicTag: "Aquarium · Warning signs",
    directAnswer:
      "Stressed or unwell fish often show changes in behaviour, breathing, appetite, or appearance, and these frequently trace back to water quality. Warning signs are a prompt to test your water and seek qualified help — not to self-diagnose a disease or reach for medication. This page is educational; for serious or worsening signs, contact a qualified aquatic veterinarian or specialist.",
    sections: [
      {
        heading: "Common warning signs",
        intro:
          "These are general signs that something may be wrong, not a diagnosis of any specific disease.",
        bullets: [
          "Gasping at the surface, rapid or laboured breathing, or sitting near the filter outflow.",
          "Clamped fins, loss of colour, or unusual swimming such as listing or darting.",
          "Hiding more than usual, lethargy, or a drop in appetite.",
          "Visible changes such as sores, spots, growths, or frayed fins.",
        ],
      },
      {
        heading: "What signs usually point to",
        bullets: [
          "Many problems begin with water quality, so test with an appropriate kit first.",
          "Sudden changes in temperature or chemistry, overstocking, or overfeeding are common stressors.",
          "Several fish affected at once, or unexplained deaths, is a serious situation.",
          "Do not use these signs to diagnose a disease or to choose medication — seek qualified help.",
        ],
      },
    ],
    checklist: {
      heading: "If you see warning signs",
      bullets: [
        "Observe carefully and note what has changed and when.",
        "Test the water with an appropriate kit to check for quality problems.",
        "Avoid sudden major changes unless guided by a qualified professional.",
        "Seek qualified aquatic veterinary or specialist help for serious or worsening signs.",
        "Do not attempt to diagnose a disease or medicate from a webpage.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a single sign always means one specific disease.",
        "Do not assume medication is the answer — many issues are water-quality related.",
        "Do not assume a worsening fish will recover without help.",
        "Do not diagnose or dose based on a webpage; get qualified guidance.",
      ],
    },
    whenToSeekHelp: WHEN_TO_SEEK_HELP,
    faqs: [
      {
        question: "What are common signs of stress in fish?",
        answer:
          "General signs include gasping or laboured breathing, clamped fins, loss of colour, unusual swimming, hiding, lethargy, reduced appetite, and visible changes like sores or spots. These indicate something may be wrong, but they are not a diagnosis of any specific disease.",
      },
      {
        question: "My fish is showing warning signs — should I add medication?",
        answer:
          "No, not based on a webpage. Many problems stem from water quality, so test the water first, and seek qualified aquatic veterinary or specialist guidance. Diagnosing disease and choosing any medication or treatment is a job for a professional, not a self-help step.",
      },
      {
        question: "Several of my fish are sick at once — what does that mean?",
        answer:
          "Multiple fish affected at the same time, or unexplained deaths, is a serious situation that often points to a tank-wide problem such as water quality. Treat it as urgent: test your water and seek qualified help promptly rather than waiting.",
      },
    ],
    sources: [SRC_MERCK_FISH, SRC_WAVMA, SRC_RSPCA_FISH],
    related: [RELATED_CORE, RELATED_PROFILES, RELATED_TOOLS],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },

  {
    slug: "betta-fish-care-basics",
    path: "/aquarium-care/betta-fish-care-basics",
    title: "Betta Fish Care Basics — Beyond the Bowl Myth",
    description:
      "An educational overview of responsible betta care: a heated, filtered, appropriately sized tank, water quality, and enrichment. Not veterinary advice, diagnosis, or dosing.",
    pageHeading: "Betta Fish Care Basics",
    topicTag: "Betta · Care",
    directAnswer:
      "Bettas are not bowl decorations: they need a heated, filtered, appropriately sized aquarium with good water quality, gentle flow, and places to rest. Males must not be housed together. This page is educational planning — it does not diagnose, treat, or give feeding amounts or chemical doses, and needs vary, so confirm specifics with a qualified aquarium professional or aquatic vet.",
    sections: [
      {
        heading: "What bettas actually need",
        bullets: [
          "A heated, filtered, appropriately sized tank — not a small unheated bowl.",
          "Warm, stable water quality, monitored with an appropriate testing kit.",
          "Gentle filter flow, since long-finned bettas can struggle in strong currents.",
          "Resting spots and enrichment such as plants and hides.",
        ],
      },
      {
        heading: "Behaviour and tank mates",
        intro:
          "Bettas have specific social needs that affect housing decisions.",
        bullets: [
          "Two male bettas should never be housed together, as they are territorial.",
          "Compatibility with other species and with female bettas is situation-dependent and needs research.",
          "Watch for stress signs such as clamped fins or hiding, and check water quality first.",
          "Profiles and care pages can guide planning, but qualified advice is best for specifics.",
        ],
      },
    ],
    checklist: {
      heading: "Betta care checklist",
      bullets: [
        "A heated, filtered, appropriately sized tank (no tiny bowls).",
        "An appropriate water-testing kit and a maintenance routine.",
        "Gentle flow and resting spots for long-finned fish.",
        "No second male betta in the same tank.",
        "Species-appropriate food in modest amounts (no exact quantities here).",
        "A qualified aquarium professional or aquatic vet to ask when unsure.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a betta thrives in a small unheated bowl — it does not.",
        "Do not assume two males can share a tank.",
        "Do not assume any tank mate is safe without researching compatibility.",
        "Do not diagnose or medicate a betta from a webpage.",
      ],
    },
    whenToSeekHelp: WHEN_TO_SEEK_HELP,
    faqs: [
      {
        question: "Can a betta live in a bowl?",
        answer:
          "No. The bowl image is a myth. Bettas need a heated, filtered, appropriately sized aquarium with stable, good-quality water. Specific tank size and setup should follow qualified aquarium guidance rather than marketing.",
      },
      {
        question: "Why can't two male bettas share a tank?",
        answer:
          "Male bettas are territorial — the basis of the name \"fighting fish\" — and will fight if housed together. They should be kept apart. Compatibility with other species or with females is situation-dependent and needs careful research.",
      },
      {
        question: "How much should I feed a betta?",
        answer:
          "This page does not give exact amounts. Bettas are carnivorous and should be fed modest, species-appropriate portions without overfeeding, which fouls the water. Follow qualified, species-specific guidance for amounts.",
      },
    ],
    sources: [SRC_RSPCA_FISH, SRC_MERCK_FISH, SRC_AVMA_PETCARE],
    related: [
      {
        title: "Betta resources",
        links: [
          { label: "Betta fish profile", href: "/animals/betta-fish" },
          { label: "Aquarium care hub", href: "/aquarium-care" },
          { label: "Water quality basics", href: "/aquarium-care/aquarium-water-quality-basics" },
          { label: "Fish stress & warning signs", href: "/aquarium-care/fish-stress-warning-signs" },
        ],
      },
      RELATED_TOOLS,
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },

  {
    slug: "goldfish-care-basics",
    path: "/aquarium-care/goldfish-care-basics",
    title: "Goldfish Care Basics — Bigger Than the Bowl",
    description:
      "An educational overview of responsible goldfish care: generous space, strong filtration, coldwater conditions, and water quality. Not veterinary advice, diagnosis, or dosing.",
    pageHeading: "Goldfish Care Basics",
    topicTag: "Goldfish · Care",
    directAnswer:
      "Goldfish are long-lived coldwater fish that grow larger than many people expect and produce a lot of waste, so they need a generously sized, well-filtered aquarium or pond — not a small bowl. This page is educational planning — it does not diagnose, treat, or give feeding amounts or chemical doses, and needs vary, so confirm specifics with qualified guidance.",
    sections: [
      {
        heading: "What goldfish actually need",
        bullets: [
          "A generously sized, well-filtered tank or pond — small bowls are inadequate.",
          "Coldwater conditions; goldfish generally do not need tropical heating.",
          "Strong filtration and good maintenance, because goldfish are messy and waste-heavy.",
          "Stable, good-quality water monitored with an appropriate testing kit.",
        ],
      },
      {
        heading: "Long-term commitment",
        intro:
          "Goldfish are not disposable fairground prizes.",
        bullets: [
          "Goldfish can live many years and grow sizeable with proper care.",
          "Fancy varieties can be more delicate and may have specific needs.",
          "Never release goldfish into local waterways — they can become invasive.",
          "Plan space, filtration, and time before taking on goldfish.",
        ],
      },
    ],
    checklist: {
      heading: "Goldfish care checklist",
      bullets: [
        "A generously sized, well-filtered tank or pond (no small bowls).",
        "Coldwater setup suited to goldfish.",
        "Strong filtration and a solid maintenance routine for a waste-heavy fish.",
        "An appropriate water-testing kit and stable water quality.",
        "Species-appropriate food in modest amounts (no exact quantities here).",
        "A qualified aquarium professional or aquatic vet to consult when unsure.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume a goldfish suits a small bowl — it needs real space and filtration.",
        "Do not assume goldfish are short-lived or disposable; they can live for years.",
        "Do not assume goldfish need tropical heating — they are coldwater fish.",
        "Do not diagnose or medicate a goldfish from a webpage.",
      ],
    },
    whenToSeekHelp: WHEN_TO_SEEK_HELP,
    faqs: [
      {
        question: "Can goldfish live in a bowl?",
        answer:
          "Small unfiltered bowls are widely considered inadequate. Goldfish grow sizeable, are long-lived, and produce a lot of waste, so they need a generously sized, well-filtered tank or pond. Specific requirements should follow qualified aquarium guidance.",
      },
      {
        question: "Do goldfish need a heater?",
        answer:
          "Goldfish are coldwater fish and generally do not need a tropical heater. They still require stable, good-quality, well-filtered water within a suitable temperature range, which should be confirmed with qualified guidance.",
      },
      {
        question: "How long do goldfish live?",
        answer:
          "With appropriate care goldfish can live many years, and some live much longer. Lifespan depends heavily on space, water quality, and variety, so treat figures as general rather than guaranteed.",
      },
    ],
    sources: [SRC_RSPCA_FISH, SRC_MERCK_FISH, SRC_AVMA_PETCARE],
    related: [
      {
        title: "Goldfish resources",
        links: [
          { label: "Goldfish profile", href: "/animals/goldfish" },
          { label: "Aquarium care hub", href: "/aquarium-care" },
          { label: "Water quality basics", href: "/aquarium-care/aquarium-water-quality-basics" },
          { label: "Maintenance checklist", href: "/aquarium-care/fish-tank-maintenance-checklist" },
        ],
      },
      RELATED_TOOLS,
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },

  {
    slug: "guppy-care-basics",
    path: "/aquarium-care/guppy-care-basics",
    title: "Guppy Care Basics — Small Fish, Real Needs",
    description:
      "An educational overview of responsible guppy care: a cycled heated tank, water quality, and planning for rapid breeding. Not veterinary advice, diagnosis, or dosing.",
    pageHeading: "Guppy Care Basics",
    topicTag: "Guppy · Care",
    directAnswer:
      "Guppies are small and adaptable but still need a properly cycled, heated, filtered tank with good water quality — and a plan for their fast breeding, since populations grow quickly. This page is educational planning — it does not diagnose, treat, or give feeding amounts or chemical doses, and needs vary, so confirm specifics with qualified guidance.",
    sections: [
      {
        heading: "What guppies actually need",
        bullets: [
          "A cycled, heated, filtered tank with stable, good-quality water.",
          "An appropriate water-testing kit and a simple maintenance routine.",
          "Company, as guppies are social fish often kept in groups.",
          "Planning for rapid breeding, since guppies are prolific livebearers.",
        ],
      },
      {
        heading: "Plan for population growth",
        intro:
          "Guppies breed readily, which is a practical care consideration.",
        bullets: [
          "Mixed-sex groups can produce frequent broods, so numbers rise quickly.",
          "Plan tank size, housing, or rehoming with a knowledgeable aquarium source.",
          "Never release surplus guppies into local waterways — introduced fish can harm ecosystems.",
          "Watch for stress signs and check water quality first if something seems off.",
        ],
      },
    ],
    checklist: {
      heading: "Guppy care checklist",
      bullets: [
        "A cycled, heated, filtered tank with stable water quality.",
        "An appropriate water-testing kit and maintenance routine.",
        "A group rather than a single, isolated fish where appropriate.",
        "A plan for rapid breeding and any surplus fish.",
        "Species-appropriate food in modest amounts (no exact quantities here).",
        "A qualified aquarium professional or aquatic vet to consult when unsure.",
      ],
    },
    whatNotToAssume: {
      heading: "What not to assume",
      bullets: [
        "Do not assume \"beginner-friendly\" means effortless — guppies still need proper care.",
        "Do not assume a single guppy is ideal; they are social fish.",
        "Do not assume breeding will not happen — plan for it.",
        "Do not diagnose or medicate a guppy from a webpage, and never release fish into the wild.",
      ],
    },
    whenToSeekHelp: WHEN_TO_SEEK_HELP,
    faqs: [
      {
        question: "Are guppies good beginner fish?",
        answer:
          "Guppies are popular with beginners because they are small and adaptable, but that does not make them effortless. They need a cycled, heated, filtered tank and good water quality. Treat them as real animals with real needs.",
      },
      {
        question: "Why do my guppies keep breeding?",
        answer:
          "Guppies are prolific livebearers, and mixed-sex groups produce broods regularly, so populations grow quickly. Plan for this through tank size, housing, or rehoming with a knowledgeable aquarium source — and never release surplus fish into the wild.",
      },
      {
        question: "How much should I feed guppies?",
        answer:
          "This page does not give exact amounts. Feed modest, species-appropriate portions and avoid overfeeding, which harms water quality. Follow qualified, species-specific guidance for amounts.",
      },
    ],
    sources: [SRC_RSPCA_FISH, SRC_UF_IFAS, SRC_AVMA_PETCARE],
    related: [
      {
        title: "Guppy resources",
        links: [
          { label: "Guppy profile", href: "/animals/guppy" },
          { label: "Aquarium care hub", href: "/aquarium-care" },
          { label: "Freshwater for beginners", href: "/aquarium-care/freshwater-aquarium-beginners" },
          { label: "Water quality basics", href: "/aquarium-care/aquarium-water-quality-basics" },
        ],
      },
      RELATED_TOOLS,
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
];

export function getAquariumArticleBySlug(
  slug: string
): AquariumArticle | undefined {
  return AQUARIUM_ARTICLES.find((a) => a.slug === slug);
}
