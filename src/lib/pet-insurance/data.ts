import type { EducationalArticle, SourceLink } from "@/lib/educational/types";

const PUBLISHED = "2026-05-18";
const MODIFIED = "2026-05-18";

// ─── VERIFIED SOURCES ─────────────────────────────────────────────────────
// Each URL listed below has been fetched and confirmed to resolve to the
// content described in the label/note. Keep this list small and high-quality;
// do not add unverified URLs.

const SRC_NAIC_PET_INSURANCE: SourceLink = {
  label: "NAIC — Pet Insurance",
  url: "https://content.naic.org/insurance-topics/pet-insurance",
  type: "insurance-regulator",
  note: "U.S. insurance regulators' consumer overview of pet insurance",
};

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

const SRC_CORNELL_FELINE: SourceLink = {
  label: "Cornell Feline Health Center",
  url: "https://www.vet.cornell.edu/departments-centers-and-institutes/cornell-feline-health-center",
  type: "university",
  note: "Cornell University College of Veterinary Medicine",
};

const SRC_CORNELL_CANINE: SourceLink = {
  label: "Cornell Riney Canine Health Center",
  url: "https://www.vet.cornell.edu/departments-centers-and-institutes/riney-canine-health-center",
  type: "university",
  note: "Cornell University College of Veterinary Medicine",
};

export const INSURANCE_ARTICLES: EducationalArticle[] = [
  {
    slug: "how-pet-insurance-works",
    kind: "insurance",
    path: "/pet-insurance/how-pet-insurance-works",
    parentHub: "/pet-insurance",
    parentHubLabel: "Pet Insurance",
    title: "How Pet Insurance Works — General Mechanics, Plainly Explained",
    description:
      "An educational overview of how pet insurance typically works: policy selection, premiums, deductibles, claims, reimbursement, exclusions, and waiting periods. Country and policy variability is real.",
    pageHeading: "How Pet Insurance Works",
    topicTag: "Pet Insurance",
    directAnswer:
      "Pet insurance is a contract between an owner and an insurer that may reimburse a portion of eligible veterinary costs in exchange for a recurring premium. The exact mechanics — what is covered, how much, after which deductible, with what waiting period — vary by country, provider, and individual policy. This page is an educational overview, not a recommendation of any specific product.",
    sections: [
      {
        heading: "The general process",
        intro:
          "Most pet insurance products in widely served markets share a similar overall flow, even if the specifics differ.",
        bullets: [
          "Select a policy: review coverage levels, exclusions, deductibles, reimbursement rates, and annual limits in the policy documents.",
          "Pay premiums: a recurring (often monthly or annual) charge that keeps the policy active.",
          "Take your pet to a licensed veterinarian for eligible accident or illness care.",
          "Submit a claim: typically by uploading invoices, medical records, and forms to the insurer.",
          "Receive reimbursement: the insurer reviews the claim and reimburses a portion of eligible costs, after the deductible and according to the reimbursement rate and annual limit.",
          "Renew annually: terms and premiums can change at renewal, often based on age, claims history, and provider pricing changes.",
        ],
      },
      {
        heading: "Key concepts you'll meet",
        bullets: [
          "Premium: the recurring cost of keeping the policy active.",
          "Deductible: an amount the owner pays out of pocket before reimbursement begins. May be per-incident or per-year, depending on the policy.",
          "Reimbursement rate: the percentage of eligible costs the insurer pays after the deductible.",
          "Annual limit: a maximum total payout per year (some policies are unlimited; others are capped).",
          "Waiting period: a window after policy start during which certain claims are not eligible.",
          "Pre-existing conditions: medical issues that began before coverage started, typically excluded.",
          "Exclusions: categories or conditions the policy specifically does not cover.",
          "Claim process: the steps required to request reimbursement, including documentation and time limits.",
        ],
      },
      {
        heading: "Where pet insurance fits in a broader plan",
        bullets: [
          "Pet insurance can sit alongside an emergency veterinary fund, not necessarily replace it.",
          "Some owners use insurance primarily for major unexpected events and a separate fund for routine costs.",
          "Some owners prefer a self-insured approach: a dedicated savings reserve in place of a policy. Whether one approach is better than the other depends on individual circumstances and risk tolerance.",
        ],
      },
    ],
    checklist: {
      heading: "Before buying a policy — read the actual document for",
      bullets: [
        "What is covered (accident vs illness vs both, wellness add-ons).",
        "What is excluded (pre-existing conditions, hereditary or breed-specific conditions, elective procedures).",
        "Deductible structure and amount.",
        "Reimbursement rate and how it is calculated.",
        "Annual or lifetime limits.",
        "Waiting periods (often different for accidents, illness, and specific conditions).",
        "Claim process, documentation requirements, and time limits.",
        "Renewal terms, including how premiums may change with age or claims.",
      ],
    },
    questionsToConsider: {
      heading: "Questions to ask before deciding",
      bullets: [
        "Is the provider authorised to sell insurance in your country, and who regulates them?",
        "What does the policy explicitly exclude?",
        "How are pre-existing conditions defined for this policy?",
        "Can the insurer change exclusions or premium rules at renewal?",
        "How are claims paid — to you after the visit, or directly to the vet?",
        "What does the cancellation policy look like?",
      ],
    },
    risksLimitations: {
      heading: "Risks and limitations",
      bullets: [
        "Reimbursement is rarely 100% of every claim — deductibles, rates, and limits all reduce payout.",
        "Pre-existing conditions are typically excluded; this means delaying purchase until after a diagnosis is usually a bad idea.",
        "Premiums commonly rise as pets age, sometimes substantially.",
        "Coverage details vary widely between providers and between policies from the same provider.",
      ],
    },
    faqs: [
      {
        question: "Does pet insurance cover every visit to the vet?",
        answer:
          "No. Most policies cover accidents and illnesses, with routine and wellness care available as optional add-ons in some markets. Pre-existing conditions, elective procedures, and certain breed-specific or hereditary conditions are commonly excluded. Always check the actual policy document.",
      },
      {
        question: "Can I switch providers later?",
        answer:
          "Switching is technically possible, but any condition that arose under the original policy may be treated as pre-existing under a new one. This is a common reason owners stay with a provider long-term once a pet has been treated for anything.",
      },
      {
        question: "Is pet insurance regulated?",
        answer:
          "Yes, typically by national insurance regulators or consumer protection agencies, but rules vary by country. Verify a provider's authorisation before purchasing.",
      },
    ],
    showVariabilityWarning: true,
    sources: [SRC_NAIC_PET_INSURANCE],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "what-does-pet-insurance-cover",
    kind: "insurance",
    path: "/pet-insurance/what-does-pet-insurance-cover",
    parentHub: "/pet-insurance",
    parentHubLabel: "Pet Insurance",
    title: "What Does Pet Insurance Cover? Common Categories Explained",
    description:
      "An educational overview of categories pet insurance commonly covers — accidents, illness, diagnostics, surgery, medications, optional wellness add-ons — and how coverage varies by policy.",
    pageHeading: "What Does Pet Insurance Cover?",
    topicTag: "Pet Insurance",
    directAnswer:
      "Coverage varies significantly by provider and policy, but most pet insurance policies in widely served markets are built around accident and illness care, with optional wellness add-ons in some markets. This page describes general categories you will see in policy documents. Always read your specific policy — the categories below are not promises about any particular plan.",
    sections: [
      {
        heading: "Commonly covered categories",
        bullets: [
          "Accidents: injuries from incidents such as falls, bites, or foreign-body ingestion (subject to policy terms).",
          "Illness: diagnosed medical conditions, often including chronic conditions diagnosed after policy start.",
          "Diagnostics: laboratory tests, imaging, and other investigations linked to eligible accidents or illnesses.",
          "Surgery and hospitalisation: emergency surgery, inpatient care, and follow-up monitoring related to a covered claim.",
          "Medications: prescriptions linked to an eligible accident or illness.",
        ],
      },
      {
        heading: "Sometimes available as add-ons",
        bullets: [
          "Wellness / routine care: vaccinations, dental cleanings, parasite prevention — usually optional and priced separately.",
          "Dental illness or dental injury: coverage depth varies dramatically by policy.",
          "Behavioural therapy or physical therapy: sometimes included, often capped.",
          "Alternative therapies (acupuncture, hydrotherapy): coverage where available is highly policy-specific.",
        ],
      },
      {
        heading: "Coverage details that matter as much as the category",
        bullets: [
          "The deductible (per-incident vs per-year).",
          "The reimbursement rate (commonly described as a percentage).",
          "The annual or lifetime limit.",
          "The waiting period before that category becomes eligible.",
          "Sub-limits within a category (some policies cap specific conditions, even if the broader category is covered).",
        ],
      },
    ],
    checklist: {
      heading: "Read the policy document for",
      bullets: [
        "Whether accident-only, illness-only, or accident+illness coverage is included.",
        "Which diagnostics and treatments require pre-authorisation.",
        "Whether wellness add-ons are available in your market.",
        "Whether dental illness has its own rules.",
        "Whether there are per-condition caps or lifetime caps for chronic illness.",
        "Renewal terms — coverage and premiums can change at renewal.",
      ],
    },
    questionsToConsider: {
      heading: "Questions to ask",
      bullets: [
        "Is the cover broad enough for the conditions you are most concerned about?",
        "If your pet develops a chronic condition mid-policy, how does the policy handle it at renewal?",
        "Are there breed-specific or hereditary-condition rules?",
        "Are there any age-based exclusions or premium step-ups?",
        "Are wellness add-ons cost-effective for your specific pet?",
      ],
    },
    risksLimitations: {
      heading: "Limitations to be aware of",
      bullets: [
        "Pre-existing conditions are typically excluded — sometimes broadly.",
        "Many policies exclude elective or cosmetic procedures.",
        "Behavioural conditions may be partly covered or fully excluded depending on the policy.",
        "Some hereditary or breed-specific conditions may be excluded, limited, or carry their own caps.",
      ],
    },
    faqs: [
      {
        question: "Does pet insurance cover routine checkups?",
        answer:
          "Standard accident-and-illness policies generally do not cover routine care; wellness or preventive-care add-ons are available in some markets. Check the specific policy.",
      },
      {
        question: "Are dental cleanings covered?",
        answer:
          "Coverage for dental work is highly policy-specific. Some policies include dental illness or injury, others exclude it entirely. Wellness add-ons may include routine cleanings.",
      },
      {
        question: "Can I add coverage later?",
        answer:
          "Add-ons and upgrades are sometimes available at renewal, but any condition that has already arisen will typically be treated as pre-existing for the new coverage.",
      },
    ],
    showVariabilityWarning: true,
    sources: [SRC_NAIC_PET_INSURANCE],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "pet-insurance-exclusions",
    kind: "insurance",
    path: "/pet-insurance/pet-insurance-exclusions",
    parentHub: "/pet-insurance",
    parentHubLabel: "Pet Insurance",
    title: "Pet Insurance Exclusions — What Policies Often Do Not Cover",
    description:
      "An educational overview of common pet insurance exclusions: pre-existing conditions, waiting periods, breed-specific or hereditary conditions, elective procedures, and more.",
    pageHeading: "Pet Insurance Exclusions",
    topicTag: "Pet Insurance",
    directAnswer:
      "Exclusions are categories or conditions a policy explicitly does not cover. They are usually as important as the coverage categories themselves — and they are deeply policy-specific. The list below is a general educational overview of common exclusion types, not a statement about any individual product.",
    sections: [
      {
        heading: "Commonly excluded categories",
        bullets: [
          "Pre-existing conditions: medical issues that began or showed signs before the policy started.",
          "Conditions arising during a waiting period: a window after policy start when certain claims are not eligible.",
          "Elective or cosmetic procedures: tail docking, ear cropping (where legal), purely cosmetic dental procedures.",
          "Breeding, pregnancy, and birth-related care in many standard policies (sometimes available as add-ons).",
          "Behavioural conditions in some policies, or with significant limitations.",
        ],
      },
      {
        heading: "Often-limited categories",
        bullets: [
          "Breed-specific or hereditary conditions: coverage depth varies, with some policies excluding them entirely.",
          "Dental illness: deeply policy-specific; some include, some exclude.",
          "Alternative therapies (e.g. acupuncture, hydrotherapy): if covered, often capped.",
          "Routine and preventive care: usually only available as an add-on.",
        ],
      },
      {
        heading: "Why exclusions matter",
        bullets: [
          "An exclusion list defines the boundary of what a policy actually pays for.",
          "Two policies with similar premiums can have very different exclusions.",
          "A condition excluded as 'pre-existing' on one policy may not be at all on another — but switching after a diagnosis usually doesn't help.",
        ],
      },
    ],
    checklist: {
      heading: "When reviewing a policy",
      bullets: [
        "Read the full exclusion list before the policy summary's coverage list.",
        "Check how the policy defines 'pre-existing condition' and 'symptoms before the policy started'.",
        "Confirm whether breed-specific or hereditary conditions are excluded, limited, or covered.",
        "Confirm whether dental illness or dental injury is included.",
        "Confirm what happens at renewal — exclusions can be added.",
      ],
    },
    questionsToConsider: {
      heading: "Questions to ask the insurer",
      bullets: [
        "Can a list of specific exclusions for my pet's breed or condition be provided in writing?",
        "Does this policy include or exclude bilateral conditions (e.g. one knee covered, second knee excluded as related)?",
        "How are pre-existing conditions defined for puppies/kittens with no prior records?",
        "Can specific exclusions be removed after a waiting or healthy period?",
      ],
    },
    risksLimitations: {
      heading: "Risks to be aware of",
      bullets: [
        "Exclusions are usually permanent for the policy in question.",
        "A 'curable' pre-existing condition treated and resolved may sometimes be re-covered after a defined period — but this is policy-specific.",
        "Quoted premium does not reflect what is excluded; two seemingly similar policies can pay out very differently.",
      ],
    },
    faqs: [
      {
        question: "What is a pre-existing condition?",
        answer:
          "A medical condition that began, was diagnosed, or showed clinical signs before the policy started or during a waiting period. The exact definition varies by policy — read it carefully.",
      },
      {
        question: "Are hereditary conditions always excluded?",
        answer:
          "No. Some policies cover hereditary or breed-specific conditions, some limit them, and some exclude them. This is a key difference between policies and worth comparing carefully.",
      },
      {
        question: "Can exclusions be added at renewal?",
        answer:
          "Yes, in many markets. Conditions diagnosed during one policy year can be re-categorised as pre-existing at renewal, depending on the policy and local regulation.",
      },
    ],
    showVariabilityWarning: true,
    sources: [SRC_NAIC_PET_INSURANCE],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "pet-insurance-deductibles-reimbursement-limits",
    kind: "insurance",
    path: "/pet-insurance/pet-insurance-deductibles-reimbursement-limits",
    parentHub: "/pet-insurance",
    parentHubLabel: "Pet Insurance",
    title: "Pet Insurance Deductibles, Reimbursement & Limits — Concepts Explained",
    description:
      "An educational overview of deductibles, reimbursement rates, annual limits, and how they combine to determine what a pet insurance policy actually pays.",
    pageHeading: "Deductibles, Reimbursement & Limits",
    topicTag: "Pet Insurance",
    directAnswer:
      "Three mechanics often determine how much a pet insurance policy actually pays: the deductible, the reimbursement rate, and the annual limit. Understanding how they interact is more useful than comparing premiums alone. The hypothetical examples below are clearly labelled and are not market pricing claims.",
    sections: [
      {
        heading: "The three core mechanics",
        bullets: [
          "Deductible: the amount the owner pays out of pocket before reimbursement begins. May be per-incident or per-year.",
          "Reimbursement rate: the percentage of eligible costs paid by the insurer after the deductible is met.",
          "Annual limit: the maximum the insurer will pay across all eligible claims in a year. Some policies are unlimited, others are capped.",
        ],
      },
      {
        heading: "How they combine — a hypothetical example",
        intro:
          "The numbers below are illustrative only and do not represent any real policy or market price.",
        bullets: [
          "Hypothetical claim of $1,000 in eligible costs.",
          "Hypothetical deductible of $200 — owner pays $200 first.",
          "Hypothetical reimbursement rate of 80% on the remaining $800 — insurer pays $640.",
          "Owner's total out-of-pocket in this hypothetical: $360. Annual-limit caps and per-condition caps may further reduce payout.",
          "Different deductibles or reimbursement rates would change the result substantially.",
        ],
      },
      {
        heading: "Common trade-offs",
        bullets: [
          "Higher deductible / lower premium: cheaper monthly, more risk on the owner.",
          "Lower deductible / higher premium: more predictable claims, more upfront cost.",
          "Higher reimbursement rate / higher premium: bigger payout per claim.",
          "Higher annual limit / higher premium: more headroom for very expensive incidents.",
        ],
      },
    ],
    checklist: {
      heading: "Before buying, confirm",
      bullets: [
        "Whether the deductible is per-incident or per-year.",
        "Whether the reimbursement rate is the same across all categories.",
        "Whether per-condition sub-limits exist in addition to the annual limit.",
        "How the deductible resets at renewal.",
        "Whether the premium structure changes when the pet ages.",
      ],
    },
    questionsToConsider: {
      heading: "Useful questions",
      bullets: [
        "If my pet has multiple separate incidents in one year, how does the deductible apply?",
        "How is 'eligible cost' calculated? Some policies reimburse against a usual-and-customary fee, not the actual bill.",
        "Is there a wait period before the reimbursement rate applies?",
        "How are claims paid — to me after the visit, or directly to the vet?",
      ],
    },
    risksLimitations: {
      heading: "Easy traps",
      bullets: [
        "Comparing two policies by premium alone — without comparing deductibles, rates, and limits — can be misleading.",
        "A high reimbursement rate matters less if the annual limit is low.",
        "Per-condition caps can dramatically reduce payout on chronic disease.",
      ],
    },
    faqs: [
      {
        question: "Are the numbers in the example real?",
        answer:
          "No. They are illustrative only and do not represent any real product, market average, or recommendation. Real deductibles, reimbursement rates, and limits vary widely.",
      },
      {
        question: "Is unlimited annual coverage always better?",
        answer:
          "Not necessarily. Unlimited coverage often comes with higher premiums, higher deductibles, lower reimbursement rates, or other trade-offs. Compare the full structure, not one number.",
      },
      {
        question: "How is the deductible different from the reimbursement rate?",
        answer:
          "The deductible is a flat amount the owner pays before insurance begins; the reimbursement rate is the percentage the insurer pays on costs above the deductible. Both apply in sequence on a covered claim.",
      },
    ],
    showVariabilityWarning: true,
    sources: [SRC_NAIC_PET_INSURANCE],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "is-pet-insurance-worth-it",
    kind: "insurance",
    path: "/pet-insurance/is-pet-insurance-worth-it",
    parentHub: "/pet-insurance",
    parentHubLabel: "Pet Insurance",
    title: "Is Pet Insurance Worth It? A Balanced Educational Look",
    description:
      "An honest, non-prescriptive look at pros and cons of pet insurance, who may benefit, who may prefer an emergency fund, and how to compare the trade-offs.",
    pageHeading: "Is Pet Insurance Worth It?",
    topicTag: "Pet Insurance",
    directAnswer:
      "There is no universal answer. Pet insurance may help some owners manage large unexpected veterinary bills, while others may be better served by a dedicated emergency fund — or by a combination of both. The right answer depends on your country, your pet, your budget, your risk tolerance, and the specific policies available to you.",
    sections: [
      {
        heading: "Where insurance can help",
        bullets: [
          "Smoothing the financial impact of large unexpected bills (surgery, hospitalisation, diagnostics).",
          "Reducing the chance that a single high-cost event derails the household budget.",
          "Giving some owners peace of mind in making treatment decisions without watching the bill.",
          "Covering chronic disease care diagnosed after policy start, depending on the policy.",
        ],
      },
      {
        heading: "Where insurance may not fit",
        bullets: [
          "Routine, predictable costs that the policy does not cover anyway.",
          "Healthy pets with limited risk factors where total premiums may exceed claims over a lifetime.",
          "Households that prefer to self-insure with a dedicated savings reserve.",
          "Pets with pre-existing conditions excluded from new policies.",
        ],
      },
      {
        heading: "Trade-offs to consider",
        bullets: [
          "Premiums are predictable; out-of-pocket vet bills are not.",
          "An emergency fund builds a flexible reserve usable for any vet need — but only if you actually save it consistently.",
          "Insurance shifts risk to the insurer at a cost; an emergency fund retains the risk but lets you keep the unspent reserve.",
          "Some owners use both: a moderate emergency reserve plus a higher-deductible policy for catastrophic events.",
        ],
      },
    ],
    checklist: {
      heading: "If you are evaluating insurance",
      bullets: [
        "Compare at least two policies on coverage, exclusions, deductibles, reimbursement rates, annual limits, and waiting periods — not on premium alone.",
        "Read the policy document, not the marketing page.",
        "Confirm the provider is authorised in your country and check the regulator.",
        "Consider how premiums may change as your pet ages.",
        "Run your numbers, including premiums and likely out-of-pocket, in the pet cost calculator.",
      ],
    },
    questionsToConsider: {
      heading: "Questions for yourself",
      bullets: [
        "Could a sudden large vet bill cause real financial stress for your household?",
        "Are you disciplined enough to build and not spend a separate emergency fund?",
        "Is your pet a species or breed with documented predispositions to specific conditions?",
        "Do you know your local emergency veterinary fees and any 24-hour clinic location?",
      ],
    },
    risksLimitations: {
      heading: "What this page is not",
      bullets: [
        "Not financial advice for your specific situation.",
        "Not a recommendation of any specific provider or policy.",
        "Not a claim that insurance is the right or wrong choice — that depends on you.",
      ],
    },
    faqs: [
      {
        question: "Is pet insurance worth it for older pets?",
        answer:
          "It depends. Older pets typically face higher premiums and may have more pre-existing exclusions, but they are also more likely to need expensive care. Compare specific quotes for your pet rather than relying on a general rule.",
      },
      {
        question: "Is pet insurance worth it for indoor cats?",
        answer:
          "It depends. Indoor cats face lower accident risks but can still develop conditions that require costly care (urinary disease, dental disease, chronic kidney issues). Insurance and savings are both reasonable approaches.",
      },
      {
        question: "What about combining insurance and an emergency fund?",
        answer:
          "Many owners do. A higher-deductible policy plus a moderate savings reserve can give both catastrophic protection and routine flexibility. The right balance is personal.",
      },
    ],
    showVariabilityWarning: true,
    sources: [SRC_NAIC_PET_INSURANCE, SRC_AVMA_PET_CARE],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "pet-insurance-vs-emergency-fund",
    kind: "insurance",
    path: "/pet-insurance/pet-insurance-vs-emergency-fund",
    parentHub: "/pet-insurance",
    parentHubLabel: "Pet Insurance",
    title: "Pet Insurance vs Emergency Fund — Trade-Offs Without Hype",
    description:
      "An educational comparison of pet insurance vs a dedicated emergency veterinary fund. Trade-offs, hybrid approaches, and what to read in the actual policy.",
    pageHeading: "Pet Insurance vs Emergency Fund",
    topicTag: "Pet Insurance",
    directAnswer:
      "Pet insurance and a dedicated emergency veterinary fund are two different ways to prepare for unexpected vet costs. Each has trade-offs. Many households use a mix of the two. The right answer for you depends on your budget, discipline, country, available policies, and your pet's profile.",
    sections: [
      {
        heading: "What each approach actually does",
        bullets: [
          "Insurance: you pay a regular premium; the insurer reimburses eligible claims after a deductible, at a reimbursement rate, up to an annual limit.",
          "Emergency fund: you transfer a regular contribution into a dedicated savings account that you only touch for veterinary emergencies.",
        ],
      },
      {
        heading: "Insurance pros and cons",
        bullets: [
          "Pros: protection against catastrophic costs in many policies; reduces financial pressure on individual treatment decisions; useful for households with limited savings headroom.",
          "Cons: coverage is policy-specific; pre-existing and other exclusions; premiums can rise with age; total lifetime premiums may exceed claims for healthy pets.",
        ],
      },
      {
        heading: "Emergency fund pros and cons",
        bullets: [
          "Pros: total flexibility (covers anything); no exclusions; you keep the unspent reserve; no waiting periods.",
          "Cons: requires real discipline to build and not spend; may be insufficient for catastrophic incidents in early years; no shared risk with an insurer.",
        ],
      },
      {
        heading: "Hybrid approaches",
        bullets: [
          "Higher-deductible insurance policy plus a moderate emergency fund — catastrophic coverage with routine flexibility.",
          "Insurance only for major-medical scenarios where covered, with an emergency fund for the rest.",
          "Self-insurance only, with a clear written rule for what the fund can be used for.",
        ],
      },
    ],
    checklist: {
      heading: "Deciding between them — work through",
      bullets: [
        "Your household's tolerance for variable large vet bills.",
        "Whether you can reliably contribute to a separate fund every month.",
        "Whether quoted policies actually cover the conditions you are most concerned about.",
        "What the regulator and consumer protection rules look like in your country.",
        "What your pet's age, breed, species, and known health profile suggest.",
      ],
    },
    questionsToConsider: {
      heading: "Useful questions",
      bullets: [
        "What would a $1,000–$5,000 emergency vet bill mean for your household next week?",
        "Have you built and maintained a dedicated savings reserve before for other purposes?",
        "Does the specific policy you are considering include the conditions you are worried about?",
        "Does combining a smaller insurance product with a smaller emergency fund fit your budget better than either alone?",
      ],
    },
    risksLimitations: {
      heading: "What this page is not",
      bullets: [
        "Not a recommendation that one approach beats the other.",
        "Not financial advice for your specific situation.",
        "Not a substitute for reading the actual insurance policy.",
      ],
    },
    faqs: [
      {
        question: "Which is cheaper?",
        answer:
          "It depends on what 'cheaper' means. Insurance has predictable monthly cost; an emergency fund has volatile but potentially lower lifetime cost. The right comparison depends on what your pet ends up needing.",
      },
      {
        question: "How much should I have in an emergency fund?",
        answer:
          "There is no universal number. Many veterinarians and welfare organisations encourage a meaningful reserve — but the right amount depends on your country, vet pricing, and your pet's profile. There is no responsibly published fixed rule.",
      },
      {
        question: "Can I switch from insurance to an emergency fund later?",
        answer:
          "You can cancel insurance, but any condition that arose under the policy may be treated as pre-existing if you later return to insurance. Think carefully about timing.",
      },
    ],
    showVariabilityWarning: true,
    sources: [SRC_NAIC_PET_INSURANCE, SRC_AVMA_PET_OWNERS],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },

  // ─── DOG INSURANCE ARTICLE ──────────────────────────────────────────────
  {
    slug: "is-pet-insurance-worth-it-for-dogs",
    kind: "dog-insurance",
    path: "/dogs/insurance/is-pet-insurance-worth-it-for-dogs",
    parentHub: "/dogs/insurance",
    parentHubLabel: "Dog Insurance",
    grandparentHub: "/dogs",
    grandparentLabel: "Dogs",
    title: "Is Pet Insurance Worth It for Dogs? A Cautious Educational Look",
    description:
      "An honest, non-prescriptive look at pet insurance for dogs — size, breed tendencies, activity, and accident risk factors. No provider recommendations.",
    pageHeading: "Is Pet Insurance Worth It for Dogs?",
    topicTag: "Dog Insurance",
    directAnswer:
      "Whether pet insurance is worth it for a specific dog depends on the dog, the policy, your country, and your finances. Dogs vary widely in size, breed tendencies, activity level, and exposure to accident risk — and these factors interact with the policy's exclusions and pricing. This page does not recommend any provider or claim that insurance is universally a good or bad choice.",
    sections: [
      {
        heading: "Dog-specific factors that can affect cost and risk",
        bullets: [
          "Size: larger dogs typically incur larger medication doses, larger surgical resource use, and larger gear costs.",
          "Activity level: highly active dogs may face higher exposure to accident risk, depending on lifestyle.",
          "Breed tendencies: some breeds are documented to have predispositions to specific conditions; coverage rules around hereditary or breed-specific conditions are deeply policy-specific.",
          "Age: premiums commonly rise as dogs age, sometimes substantially.",
          "Lifestyle: working, sporting, off-leash, and travel-heavy lifestyles can change risk profile.",
        ],
      },
      {
        heading: "What to compare across policies",
        bullets: [
          "Coverage of breed-specific or hereditary conditions.",
          "Deductible structure and reimbursement rate.",
          "Annual limit and any per-condition sub-limits.",
          "Waiting periods, especially for orthopaedic conditions.",
          "Renewal terms and age-based premium changes.",
        ],
      },
    ],
    checklist: {
      heading: "Before deciding for your dog",
      bullets: [
        "Confirm the policy's stance on your dog's breed-specific risk profile in writing.",
        "Confirm the provider's authorisation and regulator in your country.",
        "Read the exclusion list before reading the marketing summary.",
        "Compare at least two policies on coverage and structure, not on premium alone.",
        "Run your scenario in the pet cost calculator with insurance premiums and likely out-of-pocket costs.",
      ],
    },
    questionsToConsider: {
      heading: "Questions for yourself",
      bullets: [
        "Could a sudden large vet bill cause real financial pressure for your household?",
        "Are you disciplined enough to maintain a dedicated emergency fund as an alternative?",
        "Do you know your local 24-hour or emergency vet's typical procedures (not prices)?",
        "Does your dog have known conditions that may already be considered pre-existing?",
      ],
    },
    risksLimitations: {
      heading: "What this page is not",
      bullets: [
        "Not a recommendation of any provider.",
        "Not a claim about breed-specific medical risk — those should come from a veterinarian or peer-reviewed source.",
        "Not financial or veterinary advice for your specific situation.",
      ],
    },
    faqs: [
      {
        question: "Are some breeds more expensive to insure?",
        answer:
          "Premiums often vary by breed in many markets, reflecting general claims experience and documented predispositions. Always check the specific quote for your dog and compare structurally similar policies.",
      },
      {
        question: "Is insurance worth it for puppies?",
        answer:
          "Some owners insure early to avoid pre-existing exclusions later; others build an emergency fund instead. Both approaches are reasonable depending on circumstance — neither is universally correct.",
      },
      {
        question: "Is insurance worth it for older dogs?",
        answer:
          "It depends on the policy. Older dogs typically face higher premiums and more pre-existing exclusions; some policies have age caps. Compare quotes carefully and consider an emergency fund alternative.",
      },
    ],
    showVariabilityWarning: true,
    sources: [SRC_NAIC_PET_INSURANCE, SRC_CORNELL_CANINE, SRC_AVMA_PET_CARE],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  // ─── CAT INSURANCE ARTICLE ──────────────────────────────────────────────
  {
    slug: "is-pet-insurance-worth-it-for-cats",
    kind: "cat-insurance",
    path: "/cats/insurance/is-pet-insurance-worth-it-for-cats",
    parentHub: "/cats/insurance",
    parentHubLabel: "Cat Insurance",
    grandparentHub: "/cats",
    grandparentLabel: "Cats",
    title: "Is Pet Insurance Worth It for Cats? An Educational Look",
    description:
      "A cautious, non-prescriptive overview of pet insurance for cats — indoor/outdoor lifestyle, age, chronic conditions, and the emergency-fund alternative.",
    pageHeading: "Is Pet Insurance Worth It for Cats?",
    topicTag: "Cat Insurance",
    directAnswer:
      "Whether pet insurance is worth it for a specific cat depends on the cat, the policy, your country, and your finances. Cats often have lower accident exposure than dogs, but chronic conditions (kidney disease, dental disease, hyperthyroidism, urinary issues in some male cats) can be expensive over time. This page does not recommend any provider or claim that insurance is universally a good or bad choice.",
    sections: [
      {
        heading: "Cat-specific factors that can affect cost and risk",
        bullets: [
          "Indoor vs outdoor lifestyle: outdoor cats typically face higher accident and infectious-disease exposure.",
          "Age: senior cats are more likely to develop chronic conditions; premiums often increase with age.",
          "Chronic-disease profile: chronic conditions diagnosed mid-policy can have substantial lifetime costs.",
          "Multi-cat households: some policies offer multi-pet structures; compare policy-by-policy.",
        ],
      },
      {
        heading: "What to compare across policies",
        bullets: [
          "Whether chronic conditions are covered ongoing or per-year-only.",
          "Dental coverage rules.",
          "Deductible structure and reimbursement rate.",
          "Annual limits and any per-condition caps.",
          "Renewal terms — premiums often rise with age.",
        ],
      },
    ],
    checklist: {
      heading: "Before deciding for your cat",
      bullets: [
        "Confirm how the policy handles chronic conditions diagnosed during a policy year.",
        "Confirm dental coverage rules — they vary widely.",
        "Read the exclusion list before the marketing summary.",
        "Compare at least two policies on coverage and structure.",
        "Run your scenario in the pet cost calculator with insurance premiums and likely out-of-pocket costs.",
      ],
    },
    questionsToConsider: {
      heading: "Questions for yourself",
      bullets: [
        "Could a sudden $1,000–$5,000 vet bill cause real financial pressure for your household next week?",
        "Are you disciplined enough to maintain a dedicated emergency fund instead of (or alongside) a policy?",
        "Does your cat have any known conditions that may be treated as pre-existing under a new policy?",
        "Do you know your local emergency or 24-hour clinic in advance?",
      ],
    },
    risksLimitations: {
      heading: "What this page is not",
      bullets: [
        "Not a recommendation of any specific provider.",
        "Not a claim about breed-specific medical risk in cats — those should come from a veterinarian or peer-reviewed source.",
        "Not financial or veterinary advice for your specific situation.",
      ],
    },
    faqs: [
      {
        question: "Are indoor cats cheaper to insure?",
        answer:
          "Premiums often reflect general claims experience for indoor vs outdoor lifestyle, but the difference depends entirely on the provider and policy. Always check the specific quote for your cat.",
      },
      {
        question: "Is insurance worth it for senior cats?",
        answer:
          "It depends. Senior cats typically face higher premiums and more pre-existing exclusions; some policies have age caps. Compare quotes carefully and consider an emergency fund alternative.",
      },
      {
        question: "What about cats with chronic conditions?",
        answer:
          "Existing chronic conditions are usually treated as pre-existing under a new policy and may be excluded. This is a common reason owners stay with their current insurer once a chronic diagnosis exists.",
      },
    ],
    showVariabilityWarning: true,
    sources: [SRC_NAIC_PET_INSURANCE, SRC_CORNELL_FELINE, SRC_AVMA_PET_CARE],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
];

export function getInsuranceArticleBySlug(slug: string) {
  return INSURANCE_ARTICLES.find((a) => a.slug === slug);
}
