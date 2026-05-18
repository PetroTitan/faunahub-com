export type DecisionPageKind = "dog-breed" | "cat-breed" | "guide";

export type ParentHub = "/dogs/breeds" | "/cats/breeds" | "/guides";

export interface RecommendationItem {
  name: string;
  summary: string;
  bullets: string[];
  caveat?: string;
}

export interface DecisionPageFAQ {
  question: string;
  answer: string;
}

export interface DecisionPage {
  slug: string;
  kind: DecisionPageKind;
  parentHub: ParentHub;
  title: string;
  description: string;
  pageHeading: string;
  shortIntent: string;
  directAnswer: string;
  decisionCriteria: string[];
  recommendations: RecommendationItem[];
  recommendationsHeading: string;
  recommendationsIntro: string;
  careExpectations: string[];
  notIdealFor: string[];
  faqs: DecisionPageFAQ[];
  publishedTime: string;
  modifiedTime: string;
}

const PUBLISHED = "2026-05-18";
const MODIFIED = "2026-05-18";

const SOURCE_REVIEW_NOTE =
  "Source review note: This page is an educational pet-choice guide. Breed traits, care expectations, temperament tendencies, and health considerations should be verified against authoritative veterinary, breed-club, shelter, rescue, and animal welfare references before being treated as definitive.";

export const DECISION_SOURCE_NOTE = SOURCE_REVIEW_NOTE;

export const DECISION_PAGES: DecisionPage[] = [
  // ─── DOG BREED DECISION PAGES ───────────────────────────────────────────
  {
    slug: "best-dogs-for-apartments",
    kind: "dog-breed",
    parentHub: "/dogs/breeds",
    title: "Best Dogs for Apartments — Calm, Quieter Breeds & What To Consider",
    description:
      "Smaller, quieter, moderate-energy dog breeds often adapt better to apartment life — but training, routine, and individual temperament matter as much as breed.",
    pageHeading: "Best Dogs for Apartments",
    shortIntent: "Apartment-friendly dog breeds",
    directAnswer:
      "Some dog breeds tend to adapt better than others to apartment living — particularly smaller, quieter, moderate-energy dogs that respond well to indoor enrichment. Apartment-fit depends as much on daily routine, training, and the individual dog's temperament as on the breed itself.",
    decisionCriteria: [
      "Space and vertical layout in the apartment (rest area, indoor exercise space, room for a crate or bed).",
      "Daily exercise commitment — most dogs need at least one or two real outdoor walks each day.",
      "Noise tendencies of the breed and the building's sensitivity to barking.",
      "Indoor enrichment: training time, food puzzles, calm activities.",
      "Time the dog will be alone — long unpredictable absences are hard for many dogs.",
      "Building rules — breed bans, weight limits, deposit and insurance requirements.",
    ],
    recommendationsHeading: "Breed categories often considered for apartment life",
    recommendationsIntro:
      "These breed examples are starting points for further research, not absolute matches. Always meet the individual dog — and read about breed-specific welfare and health concerns where flagged below.",
    recommendations: [
      {
        name: "Cavalier King Charles Spaniel",
        summary: "Small companion-bred dog often considered gentle indoors.",
        bullets: [
          "Typically moderate exercise needs",
          "Often described as calm in low-traffic homes",
          "Sociable temperament when well-socialised",
        ],
        caveat:
          "Predisposed to certain heart and neurological conditions in some lines — ongoing veterinary care and breeder/shelter due diligence are important.",
      },
      {
        name: "Bichon Frise",
        summary: "Small companion-bred dog with a non-shedding coat.",
        bullets: [
          "Small footprint",
          "Coat sheds less than many breeds",
          "Generally outgoing temperament",
        ],
        caveat:
          "Coat is low-shedding but not low-maintenance — regular professional grooming is needed.",
      },
      {
        name: "Greyhound (often retired racers)",
        summary:
          "Lean, short-coat sighthound that many adopters describe as calm indoors.",
        bullets: [
          "Bursts of speed outside, typically quiet at home",
          "Short coat is easy to groom",
          "Often minimal barking",
        ],
        caveat:
          "Needs daily outdoor exercise and a secure environment. Sensitive to extreme cold and heat; lean build means joints and skin need care.",
      },
      {
        name: "Havanese",
        summary: "Small Cuban-origin companion breed.",
        bullets: [
          "Small footprint",
          "Typically friendly and people-oriented",
          "Moderate energy",
        ],
        caveat: "Coat needs regular grooming.",
      },
      {
        name: "Boston Terrier",
        summary: "Small, sturdy companion breed.",
        bullets: [
          "Compact size",
          "Generally trainable with consistency",
          "Often considered moderate energy",
        ],
        caveat:
          "Brachycephalic (flat-faced) — documented welfare concerns include breathing and eye issues; vet involvement is important.",
      },
      {
        name: "Maltese",
        summary: "Toy companion breed.",
        bullets: [
          "Very small",
          "Often quieter than other toy breeds when well-trained",
          "Mostly indoor lifestyle",
        ],
        caveat:
          "Toy-sized dogs can be fragile around active children and need protection from injury.",
      },
    ],
    careExpectations: [
      "Most apartment-suitable dogs still need daily outdoor exercise, mental stimulation, and time outside the apartment.",
      "Building-friendliness is shaped by training: housetraining, recall, and quiet behaviour are skills, not breed guarantees.",
      "Coat care varies — some small dogs are higher-maintenance than larger breeds.",
      "Plan for routine veterinary care, parasite prevention, dental care, and emergencies.",
    ],
    notIdealFor: [
      "Owners hoping that a small dog means very little exercise — most dogs of any size benefit from real outdoor activity.",
      "Households where the dog would be alone for long unpredictable stretches every day.",
      "Owners looking for a guarantee of quiet behaviour — barking is shaped by training and individual temperament as much as by breed.",
    ],
    faqs: [
      {
        question: "Are smaller dogs always better for apartments?",
        answer:
          "Not always. Some small terriers are notably vocal, and some larger, calmer breeds (like Greyhounds) often adapt well to apartment routines. Size is a starting point, not a final answer.",
      },
      {
        question: "Can I keep a high-energy dog in an apartment?",
        answer:
          "It is harder but not impossible. It requires real daily outdoor activity, structured training, and enrichment. For most owners this means honest planning, not just a promise of 'long walks.'",
      },
      {
        question: "Are 'hypoallergenic' dogs a real thing?",
        answer:
          "No truly hypoallergenic dog exists. Some breeds shed less, but allergens are also produced by skin and saliva. People with allergies should spend time around a specific dog before adopting.",
      },
      {
        question: "Should I adopt or buy?",
        answer:
          "Reputable shelters and breed-specific rescues often have small adult dogs whose temperament is already observable — useful when matching for apartment life. Reputable breeders are another option; avoid pet-store or unregulated sources.",
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "best-family-dogs",
    kind: "dog-breed",
    parentHub: "/dogs/breeds",
    title: "Best Family Dogs — Breeds Often Considered for Households With Children",
    description:
      "Some breeds tend to fit family households well, but compatibility with children depends on the individual dog, supervision, and consistent training — not breed alone.",
    pageHeading: "Best Family Dogs",
    shortIntent: "Family-friendly dog breeds",
    directAnswer:
      "Some breeds are widely considered good candidates for family households, but compatibility with children depends on the individual dog's temperament, the household's structure, the children's ages, and consistent training and supervision. 'Family-friendly' is a starting point, not a guarantee.",
    decisionCriteria: [
      "Children's ages and capacity for supervision — no dog should be left unsupervised with very young children, regardless of breed.",
      "Daily exercise and play commitment.",
      "Time for consistent training and house rules.",
      "Existing pets, household noise level, and routine.",
      "Coat care the family can realistically sustain.",
      "Healthcare costs across the dog's lifetime.",
    ],
    recommendationsHeading: "Breed categories often considered for family life",
    recommendationsIntro:
      "These examples are common in family-dog literature, but the right family dog is shaped most by training, supervision, and the individual animal — not by a label.",
    recommendations: [
      {
        name: "Labrador Retriever",
        summary: "Widely chosen family companion breed.",
        bullets: [
          "Typically outgoing and people-oriented",
          "High exercise needs",
          "Generally trainable",
        ],
        caveat:
          "Hip and elbow predispositions are documented; weight management matters across the lifespan.",
      },
      {
        name: "Golden Retriever",
        summary: "Friendly retriever breed common in family homes.",
        bullets: [
          "Often described as gentle",
          "Needs regular grooming and exercise",
          "Generally trainable",
        ],
        caveat:
          "Hereditary cancers are documented in the breed; coat care is substantial.",
      },
      {
        name: "Beagle",
        summary: "Small-to-medium scent hound.",
        bullets: [
          "Typically sociable",
          "Trainable with patience",
          "Often tolerant of family commotion",
        ],
        caveat:
          "Strong scent drive and well-known vocal tendencies; recall and food management need real attention.",
      },
      {
        name: "Cavalier King Charles Spaniel",
        summary: "Small companion breed often present in family homes.",
        bullets: [
          "Typically gentle",
          "Small footprint",
          "Generally trainable",
        ],
        caveat:
          "Heart and neurological predispositions are documented in some lines.",
      },
      {
        name: "Standard or Miniature Poodle",
        summary: "Versatile companion breed available across sizes.",
        bullets: [
          "Low-shedding coat (but not low-maintenance)",
          "Often highly trainable",
          "Wide size range",
        ],
        caveat: "Professional grooming is a substantial recurring cost.",
      },
      {
        name: "Newfoundland",
        summary: "Large, often-described-as-gentle giant breed.",
        bullets: [
          "Typically calm temperament",
          "Often tolerant",
          "Strong swimmer historically",
        ],
        caveat:
          "Very large size requires space, lifting capability, and budget. Heart conditions are documented; lifespan is typically shorter than in small breeds.",
      },
    ],
    careExpectations: [
      "Children of any age should always be supervised around dogs, regardless of breed.",
      "Family dogs benefit from structure: feeding routines, training, exercise, and veterinary care.",
      "Long-term costs are a significant household commitment.",
      "Coat care, dental care, and routine prevention all matter — and add up.",
    ],
    notIdealFor: [
      "Households without time or budget for consistent daily care.",
      "Households expecting a dog to 'train itself.'",
      "Households unable to supervise children with the dog.",
    ],
    faqs: [
      {
        question: "Which is the best dog for kids?",
        answer:
          "There is no single answer. Many breeds work well in family homes with the right training and supervision; individual temperament, training, and the family's habits matter far more than a label.",
      },
      {
        question: "Are large dogs safe with small children?",
        answer:
          "Some large breeds are typically gentle, but size makes accidental injury (e.g., knocking children over) a real factor. Supervision and training are essential regardless of size.",
      },
      {
        question: "What age should children be before getting a dog?",
        answer:
          "There is no universal answer. Many veterinarians and rescue organisations suggest waiting until children can be taught to handle a dog respectfully and consistently — but household specifics vary. Talk to a veterinarian, trainer, or rescue staff about your situation.",
      },
      {
        question: "Should we adopt or buy?",
        answer:
          "Adopting an adult dog from a reputable shelter or rescue lets you assess temperament more directly than choosing a puppy. Reputable breeders are another option; avoid pet-store or unregulated sources.",
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "low-maintenance-dogs",
    kind: "dog-breed",
    parentHub: "/dogs/breeds",
    title: "Low-Maintenance Dogs — A Cautious Look at What 'Easy' Really Means",
    description:
      "No dog is truly low-maintenance, but some breeds are less labour-intensive in specific dimensions. Honest cautions about exercise, grooming, and health.",
    pageHeading: "Low-Maintenance Dogs",
    shortIntent: "Lower-labour dog breeds — with cautions",
    directAnswer:
      "There is no truly low-maintenance dog — every dog needs daily exercise, training, social time, veterinary care, and grooming. Some breeds tend to be more practical for time-limited or first-time owners, but 'low maintenance' is relative and often misread as 'no commitment.'",
    decisionCriteria: [
      "Realistic time available for daily exercise and training.",
      "Grooming tolerance and budget.",
      "Health profile — some 'low-fuss' breeds carry significant predispositions.",
      "Tolerance for being alone.",
      "Indoor vs outdoor lifestyle.",
      "Routine veterinary care expectations.",
    ],
    recommendationsHeading: "Breed categories sometimes considered lower-labour",
    recommendationsIntro:
      "These are often-cited examples for owners looking for less labour-intensive dimensions of dog ownership — never a substitute for daily care and training.",
    recommendations: [
      {
        name: "Greyhound",
        summary: "Short-coat sighthound, often calm indoors.",
        bullets: [
          "Minimal grooming",
          "Typically tolerant of relaxed home life with daily walks",
          "Often quiet",
        ],
        caveat:
          "Needs daily exercise and care like any dog; sensitive to cold weather.",
      },
      {
        name: "Whippet",
        summary: "Slim, short-coat sighthound related to the Greyhound.",
        bullets: [
          "Minimal grooming",
          "Generally calm indoors",
          "Often gentle temperament",
        ],
        caveat:
          "Prey drive can be strong; a secure outdoor environment is essential.",
      },
      {
        name: "Beagle",
        summary: "Short-coat small-to-medium hound.",
        bullets: [
          "Easy grooming",
          "Trainable with consistency",
          "Compact size",
        ],
        caveat: "Notably vocal; strongly food-motivated.",
      },
      {
        name: "Basenji",
        summary: "Small short-coat sighthound-like breed.",
        bullets: [
          "Minimal grooming",
          "Quiet (does not bark in the typical way)",
          "Independent temperament",
        ],
        caveat:
          "Independence reads as 'low maintenance' until training begins — they are not an easy first dog.",
      },
      {
        name: "Boston Terrier",
        summary: "Small short-coat companion breed.",
        bullets: [
          "Minimal grooming",
          "Small footprint",
          "Trainable with consistency",
        ],
        caveat:
          "Brachycephalic welfare concerns include breathing and eye issues — vet involvement matters.",
      },
      {
        name: "Chihuahua (short-coat)",
        summary: "Toy companion breed.",
        bullets: [
          "Small size",
          "Minimal grooming on the short-coat variety",
          "Long lifespan in many lines",
        ],
        caveat:
          "Toy-sized — fragile around children; training and socialisation are essential.",
      },
    ],
    careExpectations: [
      "Every dog needs daily walks or play and training, regardless of any 'low-maintenance' label.",
      "Short coats reduce grooming time but do not eliminate it — nails, ears, teeth, baths.",
      "Routine veterinary care including parasite prevention, vaccinations, and checkups is non-negotiable.",
      "Time-alone tolerance varies; consider daycare or sitter costs if your schedule is demanding.",
    ],
    notIdealFor: [
      "People hoping a dog will fit a hands-off lifestyle.",
      "People unable to commit to daily exercise.",
      "People wanting 'no grooming' at all — basic care still applies to short-coat breeds.",
    ],
    faqs: [
      {
        question: "Is any dog truly low maintenance?",
        answer:
          "No. Some breeds are less labour-intensive in specific dimensions (short coat, quieter, lower exercise demands), but every dog requires substantial time, training, and routine care.",
      },
      {
        question: "Are short-coat breeds always easier?",
        answer:
          "Short coats reduce grooming time but do not eliminate care. Some short-coat breeds also have well-documented health predispositions that may add cost or time.",
      },
      {
        question: "What's the easiest dog for someone working full-time?",
        answer:
          "Realistically, no dog handles long full-time absence well. Consider daycare, a dog sitter, or whether a different pet category (such as a cat) might be a better honest fit for your schedule.",
      },
      {
        question: "Are small dogs lower maintenance?",
        answer:
          "Not necessarily. Some small dogs need substantial training, are highly vocal, or have specific health concerns. Size is a starting point, not a verdict.",
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "best-dogs-for-first-time-owners",
    kind: "dog-breed",
    parentHub: "/dogs/breeds",
    title: "Best Dogs for First-Time Owners — A Practical, Cautious Shortlist",
    description:
      "Some breeds are often considered a more forgiving starting point for first-time owners — but commitment to training, daily care, and realistic expectations matters most.",
    pageHeading: "Best Dogs for First-Time Owners",
    shortIntent: "First-time-owner dog breeds",
    directAnswer:
      "For someone new to dogs, breeds with predictable, generally trainable, moderate-energy temperaments are often a more forgiving starting point. The single most important factor is committing to consistent training, daily care, and honest expectations — far more than the breed itself.",
    decisionCriteria: [
      "Realistic time and budget for training (classes, books, professional help).",
      "Patience and consistency from everyone in the household.",
      "Family structure and existing pets.",
      "Daily exercise capacity.",
      "Grooming routine you can honestly sustain.",
      "Access to a veterinarian and emergency budget.",
    ],
    recommendationsHeading: "Breed categories often suggested for first-time owners",
    recommendationsIntro:
      "These are examples first-time owners often encounter in trustworthy training and rescue literature. Many first-time owners also do well with an adult mixed-breed dog from a reputable shelter — whose temperament can be observed before adoption.",
    recommendations: [
      {
        name: "Cavalier King Charles Spaniel",
        summary: "Small companion breed often described as gentle.",
        bullets: [
          "Typically gentle",
          "Moderate energy",
          "Generally trainable",
        ],
        caveat:
          "Heart and neurological predispositions documented in some lines — ongoing veterinary care matters.",
      },
      {
        name: "Bichon Frise",
        summary: "Small companion breed with non-shedding coat.",
        bullets: [
          "Typically friendly",
          "Low shedding",
          "Generally trainable",
        ],
        caveat: "Professional grooming is a recurring need, not a one-off.",
      },
      {
        name: "Labrador Retriever",
        summary: "Popular trainable companion breed.",
        bullets: [
          "Typically eager-to-please",
          "Well documented in training literature",
          "Sociable temperament",
        ],
        caveat:
          "High exercise needs and weight-management requirements that demand real owner commitment.",
      },
      {
        name: "Golden Retriever",
        summary: "Friendly companion breed.",
        bullets: [
          "Typically gentle",
          "Generally trainable",
          "Common in family homes",
        ],
        caveat:
          "Coat and exercise commitment are substantial; hereditary cancers documented.",
      },
      {
        name: "Beagle",
        summary: "Small-to-medium scent hound.",
        bullets: [
          "Trainable with patience",
          "Small enough for most homes",
          "Sociable temperament",
        ],
        caveat: "Notably vocal; recall and food management need attention.",
      },
      {
        name: "Adult mixed-breed dog from a reputable shelter",
        summary:
          "Often the most practical first-dog recommendation in real-world advice.",
        bullets: [
          "Temperament already observable",
          "Widely available",
          "Shelter staff can help with matching",
        ],
        caveat:
          "Take time to meet and walk the dog more than once; ask staff for behaviour notes and follow-up support.",
      },
    ],
    careExpectations: [
      "Plan for training from day one — group classes, books, or a reputable trainer.",
      "Plan routine veterinary care: vaccinations, parasite prevention, dental.",
      "Plan grooming time honestly; over-promising leads to neglected coats.",
      "Build relationships with reputable shelters, breeders, vets, and trainers early.",
    ],
    notIdealFor: [
      "People expecting a dog to 'just behave' without consistent training.",
      "People unprepared for at least daily exercise and play.",
      "People hoping to avoid initial training and setup costs.",
    ],
    faqs: [
      {
        question: "Should a first-time owner get a puppy or adult dog?",
        answer:
          "There is no single right answer. Adult dogs often have observable temperaments and can be a calmer starting point; puppies require more time investment but build a long shared history. Consider work schedule, patience, and goals.",
      },
      {
        question: "Are 'hypoallergenic' breeds easier for first-time owners?",
        answer:
          "No reliably hypoallergenic dog exists. If allergies are a concern, spend time with specific dogs before committing.",
      },
      {
        question: "How long until a dog is fully trained?",
        answer:
          "Months at minimum for basic reliability; consistent training continues for life. Group classes are useful in the first six months to a year.",
      },
      {
        question: "What if I'm not sure I'm ready?",
        answer:
          "Foster from a reputable shelter, volunteer to walk dogs, or talk to a vet or rescue worker. Honest preparation is better than rushed adoption.",
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "best-small-dog-breeds",
    kind: "dog-breed",
    parentHub: "/dogs/breeds",
    title: "Best Small Dog Breeds — Practical, Cautious Examples",
    description:
      "Small dogs suit many lifestyles, but 'small' does not always mean 'easy.' A cautious look at popular small breeds and the practical trade-offs.",
    pageHeading: "Best Small Dog Breeds",
    shortIntent: "Small dog breeds — with realistic trade-offs",
    directAnswer:
      "Small dogs are popular for apartments, families, and seniors, but 'small' does not always mean 'easy.' Some small breeds are highly active, vocal, or have specific health concerns. Compatibility depends on the individual dog and on whether the owner is ready for daily exercise, training, grooming, and veterinary care.",
    decisionCriteria: [
      "Energy and exercise needs (some small breeds are very active).",
      "Coat type and grooming routine.",
      "Trainability and time you can commit to consistent training.",
      "Health profile by breed.",
      "Compatibility with children and other pets.",
      "Lifespan and long-term commitment (small breeds often live 12 to 16+ years).",
    ],
    recommendationsHeading: "Small breed categories often considered",
    recommendationsIntro:
      "Common small breeds with realistic caveats. None is universally 'easy' — match by temperament and care need, not by size alone.",
    recommendations: [
      {
        name: "Cavalier King Charles Spaniel",
        summary: "Small companion breed.",
        bullets: ["Typically gentle", "Moderate energy", "Sociable"],
        caveat:
          "Heart and neurological predispositions documented in some lines.",
      },
      {
        name: "Bichon Frise",
        summary: "Small companion breed.",
        bullets: ["Typically friendly", "Low shedding", "Trainable"],
        caveat: "Coat needs regular professional grooming.",
      },
      {
        name: "Yorkshire Terrier",
        summary: "Toy terrier-type companion.",
        bullets: ["Very small", "Often alert", "Long lifespan in many lines"],
        caveat:
          "Vocal tendencies; coat needs grooming; toy build is fragile around active children.",
      },
      {
        name: "Pomeranian",
        summary: "Toy spitz-type companion.",
        bullets: ["Small", "Bold temperament", "Long lifespan in many lines"],
        caveat: "Vocal; coat is high-maintenance.",
      },
      {
        name: "Dachshund",
        summary: "Small short-legged hound-type breed.",
        bullets: ["Small", "Often sociable", "Distinctive build"],
        caveat:
          "Documented spinal/back issues — careful handling, weight management, and avoiding rough play matter.",
      },
      {
        name: "Pug",
        summary: "Small companion breed.",
        bullets: ["Small", "Typically affectionate", "Compact size"],
        caveat:
          "Brachycephalic welfare concerns include breathing and eye issues; weight management is critical.",
      },
      {
        name: "Boston Terrier",
        summary: "Small short-coat companion breed.",
        bullets: ["Short coat", "Generally trainable", "Compact"],
        caveat:
          "Also brachycephalic — same welfare concerns as other flat-faced breeds.",
      },
      {
        name: "Chihuahua",
        summary: "Toy companion breed.",
        bullets: [
          "Very small",
          "Short-coat variety is minimal grooming",
          "Long lifespan in many lines",
        ],
        caveat:
          "Fragile around active children; training and socialisation are essential.",
      },
    ],
    careExpectations: [
      "Toy breeds can be fragile around active young children — supervised, gentle handling is essential.",
      "Small dogs are not necessarily low-exercise — many are surprisingly active.",
      "Dental care is particularly important in many small breeds.",
      "Long lifespan in many small breeds means an honest long-term commitment.",
    ],
    notIdealFor: [
      "People who want a dog they can let 'run itself' off-leash in unfamiliar places.",
      "People wanting a guarded or working breed (most small breeds are companion-bred).",
      "Households with very young children who cannot reliably interact gently.",
    ],
    faqs: [
      {
        question: "Are small dogs easier than big dogs?",
        answer:
          "Not necessarily. Some small breeds are vocal, energetic, or have specific health issues. Match by temperament and care need, not by size alone.",
      },
      {
        question: "How long do small dogs live?",
        answer:
          "Many small breeds live longer than large breeds on average — often 12 to 16+ years — but this varies by breed and individual.",
      },
      {
        question: "Are small dogs good with kids?",
        answer:
          "Some are, but their fragility means careful supervision and respectful handling are essential. Some toy breeds are not a good match for very young children.",
      },
      {
        question: "Which small dog sheds least?",
        answer:
          "Some breeds shed less than others, but no breed is fully non-shedding or reliably hypoallergenic.",
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },

  // ─── CAT BREED DECISION PAGES ───────────────────────────────────────────
  {
    slug: "best-cats-for-apartments",
    kind: "cat-breed",
    parentHub: "/cats/breeds",
    title: "Best Cats for Apartments — Calm Companions & Practical Considerations",
    description:
      "Most cats adapt well to apartment life when given vertical space, enrichment, and routine. Honest examples and the breed/individual factors that matter.",
    pageHeading: "Best Cats for Apartments",
    shortIntent: "Apartment-friendly cat breeds",
    directAnswer:
      "Most cats adapt well to indoor apartment life when given enough vertical space, enrichment, and routine — but apartment-fit depends on individual personality, social needs, and how much time the household can give to play and engagement. Some breeds tend to be calmer indoor companions; others need more enrichment to settle.",
    decisionCriteria: [
      "Apartment size and vertical space (cat trees, perches, window access).",
      "Time for daily interactive play.",
      "Noise sensitivity and household activity level.",
      "Other pets in the household.",
      "Allergies in the household.",
      "Long-term care budget — many cats live 12 to 18+ years.",
    ],
    recommendationsHeading: "Breed categories often considered for apartment life",
    recommendationsIntro:
      "These examples are starting points, not absolute matches. A mixed-breed (domestic shorthair / longhair) cat from a reputable shelter is often the most practical recommendation because temperament can be observed before adoption.",
    recommendations: [
      {
        name: "British Shorthair",
        summary: "Short-coat companion breed often described as calm.",
        bullets: [
          "Typically tolerant temperament",
          "Minimal grooming",
          "Often adaptable to indoor routines",
        ],
        caveat:
          "Weight management matters; some heart conditions documented in lines.",
      },
      {
        name: "Russian Blue",
        summary: "Short-coat companion breed.",
        bullets: [
          "Typically quiet",
          "Reserved with new people",
          "Minimal grooming",
        ],
        caveat:
          "May take time to bond with new humans and other pets — patience helps.",
      },
      {
        name: "Ragdoll",
        summary: "Semi-longhair companion breed.",
        bullets: [
          "Typically gentle",
          "Often indoor-friendly",
          "Sociable",
        ],
        caveat:
          "Coat care; hereditary heart issues documented in some lines.",
      },
      {
        name: "Burmese",
        summary: "Short-coat sociable breed.",
        bullets: [
          "Typically affectionate",
          "Engaging temperament",
          "Generally tolerant",
        ],
        caveat:
          "Very social — may not suit households where the cat is alone for long stretches.",
      },
      {
        name: "American Shorthair",
        summary: "Short-coat adaptable breed.",
        bullets: [
          "Typically easy-going",
          "Adaptable",
          "Minimal grooming",
        ],
        caveat: "Weight management important.",
      },
      {
        name: "Domestic shorthair or longhair (mixed-breed)",
        summary:
          "Common, widely available shelter cats — often the most practical recommendation.",
        bullets: [
          "Temperament can be observed at the shelter",
          "Wide range of personalities and ages available",
          "Shelter staff can help match",
        ],
        caveat:
          "Take time to meet several cats and ask staff for behaviour notes.",
      },
    ],
    careExpectations: [
      "Indoor cats benefit from vertical space, scratching surfaces, hiding spots, and interactive play.",
      "Feed a complete-and-balanced diet — see FaunaHub's cat food safety guides for what to avoid.",
      "Routine veterinary care: vaccinations, dental, parasite prevention, especially in senior cats.",
      "A common litter rule of thumb is one box per cat plus one extra.",
    ],
    notIdealFor: [
      "Households expecting a cat to 'entertain itself' all day with no engagement.",
      "Households where the cat would be exposed to constant loud disruption.",
      "People unable to commit to many years of routine care.",
    ],
    faqs: [
      {
        question: "Do all cats adapt to apartment life?",
        answer:
          "Most do, but individual personality matters more than breed. Some highly active cats need substantial enrichment to do well indoors.",
      },
      {
        question: "Should I get one cat or two?",
        answer:
          "Two cats often keep each other company when the household is out. Single-cat households work for cats that get enough interaction and enrichment. Bonded pairs at shelters are often a good adoption choice.",
      },
      {
        question: "Are mixed-breed cats a good option?",
        answer:
          "Often, yes. Shelter cats are widely available, and the cat's temperament can typically be observed before adoption — a practical advantage over choosing a kitten by breed alone.",
      },
      {
        question: "Are 'hypoallergenic' cats real?",
        answer:
          "No truly hypoallergenic cat exists. Some breeds may be tolerated by some allergic people, but reactions vary individually — always spend time with a specific cat before committing.",
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "best-cats-for-first-time-owners",
    kind: "cat-breed",
    parentHub: "/cats/breeds",
    title: "Best Cats for First-Time Owners — Practical Starting Points",
    description:
      "Some breeds and many shelter cats are often considered good first companions. What matters more than breed is committing to routine care and time at home.",
    pageHeading: "Best Cats for First-Time Owners",
    shortIntent: "First-time-owner cat breeds and shelter options",
    directAnswer:
      "For someone new to cats, breeds with predictable, generally tolerant temperaments often work well — alongside a mixed-breed shelter cat whose personality can be observed in person. Far more important than breed is committing to routine care, enrichment, and time at home.",
    decisionCriteria: [
      "Time and patience for the first weeks of acclimation.",
      "Household structure, routine, and noise level.",
      "Existing pets and children.",
      "Allergies in the household.",
      "Budget for vet care, food, and enrichment.",
      "Long-term commitment — many cats live 12 to 18+ years.",
    ],
    recommendationsHeading: "Breed categories and shelter options for first-time owners",
    recommendationsIntro:
      "These examples are common starting points; a mixed-breed adult cat from a reputable shelter is often the most practical first cat because temperament can be observed.",
    recommendations: [
      {
        name: "British Shorthair",
        summary: "Short-coat companion breed.",
        bullets: ["Typically calm", "Tolerant", "Minimal grooming"],
        caveat: "Weight management important.",
      },
      {
        name: "Russian Blue",
        summary: "Quiet short-coat companion breed.",
        bullets: ["Typically reserved", "Minimal grooming", "Quiet"],
        caveat: "Needs patience for early bonding.",
      },
      {
        name: "Ragdoll",
        summary: "Semi-longhair companion breed.",
        bullets: [
          "Typically gentle",
          "Indoor-friendly",
          "Sociable",
        ],
        caveat: "Coat care; hereditary heart issues documented in some lines.",
      },
      {
        name: "American Shorthair",
        summary: "Adaptable short-coat breed.",
        bullets: ["Typically easy-going", "Short coat", "Tolerant"],
        caveat: "Weight management important.",
      },
      {
        name: "Maine Coon",
        summary: "Large semi-longhair breed.",
        bullets: [
          "Typically friendly",
          "Sociable",
          "Often tolerant",
        ],
        caveat:
          "Very large size; coat care; hereditary heart issues documented in some lines.",
      },
      {
        name: "Adult mixed-breed cat from a reputable shelter",
        summary:
          "Often the most practical first cat — temperament can be observed before adoption.",
        bullets: [
          "Personality already visible",
          "Widely available",
          "Shelter staff can help match",
        ],
        caveat:
          "Take time to meet several cats; ask staff about behaviour and health history.",
      },
    ],
    careExpectations: [
      "Plan for routine veterinary care, vaccinations, dental, and parasite prevention.",
      "Provide enrichment: scratching surfaces, play, vertical space, hiding spots.",
      "Feed a complete-and-balanced commercial cat food — see FaunaHub's cat food safety guides.",
      "Plan for emergencies and senior-cat care across many years.",
    ],
    notIdealFor: [
      "People expecting a cat to behave like a low-energy ornament.",
      "Households with no patience for the cat's adjustment period in a new home.",
      "People unable to plan for at least 10 to 18 years of care.",
    ],
    faqs: [
      {
        question: "Should a first-time owner get a kitten or adult cat?",
        answer:
          "Adult cats from shelters have observable personalities and are often a calmer first choice. Kittens need more supervision and play during their first year but build long bonds.",
      },
      {
        question: "Are some breeds easier than others?",
        answer:
          "Some breeds are typically calmer or more tolerant, but individual personality matters more than breed for most owners in practice.",
      },
      {
        question: "What if I'm worried about allergies?",
        answer:
          "Spend time with a specific cat before committing. No breed is reliably hypoallergenic; reactions to specific cats vary individually.",
      },
      {
        question: "How long does it take a cat to settle in?",
        answer:
          "Often days to weeks, sometimes longer in shy or rescued cats. Provide a quiet space, predictable routine, and patience.",
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "low-maintenance-cat-breeds",
    kind: "cat-breed",
    parentHub: "/cats/breeds",
    title: "Low-Maintenance Cat Breeds — A Cautious, Realistic Shortlist",
    description:
      "Some short-coat, calmer cat breeds are less labour-intensive in specific dimensions — but no cat is maintenance-free. Honest practical guidance.",
    pageHeading: "Low-Maintenance Cat Breeds",
    shortIntent: "Lower-labour cat breeds — with cautions",
    directAnswer:
      "There is no truly maintenance-free cat — every cat needs feeding, vet care, enrichment, and litter care. Some breeds are generally less labour-intensive in specific dimensions, particularly short-coat breeds with calmer temperaments. Use these guides as orientation, not as a promise.",
    decisionCriteria: [
      "Coat type and grooming tolerance.",
      "Activity level and play needs.",
      "Health profile by breed.",
      "Time alone tolerance.",
      "Litter, dental, and routine care commitment.",
      "Long-term care budget.",
    ],
    recommendationsHeading: "Breed categories often considered lower-labour",
    recommendationsIntro:
      "Short-coat, generally tolerant breeds. None is hands-off; all still need daily care.",
    recommendations: [
      {
        name: "British Shorthair",
        summary: "Short-coat companion breed.",
        bullets: ["Typically calm", "Minimal grooming", "Tolerant"],
        caveat: "Weight management; some heart concerns in lines.",
      },
      {
        name: "Russian Blue",
        summary: "Quiet short-coat companion breed.",
        bullets: ["Typically quiet", "Minimal grooming", "Reserved"],
        caveat: "Socialisation needs patience.",
      },
      {
        name: "American Shorthair",
        summary: "Adaptable short-coat breed.",
        bullets: ["Adaptable", "Minimal grooming", "Tolerant"],
        caveat: "Weight management important.",
      },
      {
        name: "Burmese",
        summary: "Short-coat sociable breed.",
        bullets: ["Typically tolerant", "Minimal grooming", "Sociable"],
        caveat:
          "Very social — needs interaction, not a 'set and forget' choice.",
      },
      {
        name: "Bombay",
        summary: "Sleek, all-black short-coat breed.",
        bullets: ["Minimal grooming", "Often affectionate", "Compact"],
        caveat: "Highly social.",
      },
      {
        name: "Domestic shorthair (mixed-breed)",
        summary: "Common shelter cat; often a practical recommendation.",
        bullets: [
          "Short coat",
          "Widely available",
          "Temperament observable",
        ],
        caveat: "Always assess the individual cat with shelter staff.",
      },
    ],
    careExpectations: [
      "'Low maintenance' still means daily food, water, litter, enrichment, and veterinary care.",
      "Indoor environment quality matters as much as breed.",
      "Dental, vaccinations, and parasite prevention apply to every cat.",
      "Plan for senior-cat care, which is more time-intensive than adult-cat care.",
    ],
    notIdealFor: [
      "People hoping a cat needs no daily interaction.",
      "People hoping to skip vet care.",
      "People wanting a high-energy active cat.",
    ],
    faqs: [
      {
        question: "Is any cat truly low maintenance?",
        answer:
          "No. Cats need food, water, litter, vet care, enrichment, and time. Some breeds are less labour-intensive in specific dimensions.",
      },
      {
        question: "Are short-coat cats always easier?",
        answer:
          "Short coats reduce grooming time but do not remove other needs. Some short-coat breeds still need substantial play and social interaction.",
      },
      {
        question: "Can I leave a low-maintenance cat for a weekend?",
        answer:
          "Many adult cats handle short trips well with adequate food, water, and a clean litter setup, ideally with a daily check-in by a sitter. Always plan and discuss longer absences with your vet.",
      },
      {
        question: "What's the easiest first cat?",
        answer:
          "Often a calm adult from a shelter; breed is a starting point, not the only factor.",
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "best-family-cats",
    kind: "cat-breed",
    parentHub: "/cats/breeds",
    title: "Best Family Cats — Breeds Often Considered for Households With Children",
    description:
      "Many cats fit family households with respectful handling rules and supervision. Honest breed examples and the factors that matter most.",
    pageHeading: "Best Family Cats",
    shortIntent: "Family-friendly cat breeds",
    directAnswer:
      "Many cats fit family households when given a calm introduction, respectful handling rules with children, and respect for the cat's space. Some breeds tend to be more tolerant of children's activity; mixed-breed cats from shelters are also a common practical choice when temperament can be observed in person.",
    decisionCriteria: [
      "Children's ages and ability to handle a cat respectfully.",
      "Household activity level.",
      "Other pets.",
      "Allergies in the household.",
      "Budget for vet, food, and enrichment.",
      "Long-term commitment of 10 to 18+ years.",
    ],
    recommendationsHeading: "Breed categories often considered for family life",
    recommendationsIntro:
      "These examples are common starting points. A mixed-breed adult cat from a reputable shelter is often the strongest family match because temperament can be observed.",
    recommendations: [
      {
        name: "Ragdoll",
        summary: "Semi-longhair companion breed often described as gentle.",
        bullets: ["Typically gentle", "Indoor-friendly", "Tolerant"],
        caveat:
          "Coat care; hereditary heart issues documented in some lines.",
      },
      {
        name: "Maine Coon",
        summary: "Large semi-longhair breed.",
        bullets: ["Typically friendly", "Sociable", "Tolerant"],
        caveat:
          "Very large size; coat care; hereditary heart issues documented in some lines.",
      },
      {
        name: "Birman",
        summary: "Semi-longhair companion breed.",
        bullets: ["Typically gentle", "Sociable", "Tolerant"],
        caveat: "Coat care required.",
      },
      {
        name: "British Shorthair",
        summary: "Short-coat companion breed.",
        bullets: ["Typically calm", "Minimal grooming", "Adaptable"],
        caveat: "Weight management important.",
      },
      {
        name: "Burmese",
        summary: "Short-coat sociable breed.",
        bullets: ["Typically affectionate", "Sociable", "Engaging"],
        caveat: "Very social — needs interaction.",
      },
      {
        name: "Adult mixed-breed cat from a reputable shelter",
        summary: "Often the strongest family choice.",
        bullets: [
          "Temperament observable",
          "Widely available",
          "Shelter staff can help match",
        ],
        caveat: "Meet several cats; ask for behaviour notes.",
      },
    ],
    careExpectations: [
      "Teach children to handle cats gently; supervise interactions with toddlers.",
      "Provide cats with safe retreat spaces children cannot reach.",
      "Routine vet care, dental, food (see FaunaHub cat food safety), enrichment.",
      "Plan for senior-cat care later in the cat's life.",
    ],
    notIdealFor: [
      "Households unable to supervise children-with-cat interactions.",
      "People expecting a cat to play with children on demand.",
      "People unable to commit to 10 to 18+ years of care.",
    ],
    faqs: [
      {
        question: "Are cats safe with toddlers?",
        answer:
          "Cats can fit toddler-age households with careful supervision and a safe retreat space, but young children must be taught not to grab, chase, or restrain a cat.",
      },
      {
        question: "Which breed is best with kids?",
        answer:
          "Breed gives a starting point. Individual temperament and how the household introduces the cat matter more than a label.",
      },
      {
        question: "Should we adopt or buy?",
        answer:
          "Many cats in shelters are well-suited to family life; shelter staff can help match temperament. Reputable breeders are another option.",
      },
      {
        question: "What if a family member is allergic?",
        answer:
          "Spend time with a specific cat before committing. No breed is reliably hypoallergenic.",
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },

  // ─── GENERAL PET CHOICE GUIDES ──────────────────────────────────────────
  {
    slug: "best-pets-for-apartments",
    kind: "guide",
    parentHub: "/guides",
    title: "Best Pets for Apartments — A Practical, Cautious Comparison",
    description:
      "Cats, smaller dogs, fish, and certain small mammals or birds are commonly chosen for apartments. Honest pros, cons, and the trade-offs that matter.",
    pageHeading: "Best Pets for Apartments",
    shortIntent: "Pet categories often suited to apartment living",
    directAnswer:
      "Cats, smaller dogs, fish, and certain small mammals or birds are commonly chosen for apartments. The right fit depends on space, time, building rules, allergies, and willingness to commit to daily care. 'Apartment-friendly' is a starting point, not a guarantee.",
    decisionCriteria: [
      "Apartment size, layout, and noise sensitivity of neighbours.",
      "Building rules — pet limits, weight caps, deposit and insurance requirements.",
      "Daily time available for care and interaction.",
      "Allergies in the household.",
      "Long-term commitment (some pets live decades).",
      "Honest budget for setup, food, and routine veterinary care.",
    ],
    recommendationsHeading: "Pet categories often considered for apartments",
    recommendationsIntro:
      "Each category has trade-offs. None is 'no effort.' Use this as a starting point for a conversation with a vet, shelter, or experienced keeper.",
    recommendations: [
      {
        name: "Cats",
        summary: "Often a practical apartment companion.",
        bullets: [
          "Indoor-suited with vertical space and enrichment",
          "Modest daily handling commitment",
          "Wide range of personalities available in shelters",
        ],
        caveat:
          "Long commitment of 10 to 18+ years; allergies are common.",
      },
      {
        name: "Smaller dog breeds",
        summary: "Possible if owners can commit to daily exercise.",
        bullets: [
          "Smaller footprint",
          "Moderate energy in many cases",
          "Bond strongly with owners",
        ],
        caveat:
          "Building rules and noise tolerance are real factors; not all small breeds are quiet.",
      },
      {
        name: "Aquarium fish",
        summary: "Quiet and space-efficient when properly set up.",
        bullets: [
          "Educational",
          "Quiet",
          "Many species options",
        ],
        caveat:
          "Proper tank size, cycling, and water chemistry are non-negotiable. Many common starter tanks are too small for the species often sold for them.",
      },
      {
        name: "Captive-bred small birds",
        summary: "Possible but with specific welfare needs.",
        bullets: [
          "Often social with people",
          "Can fit small homes physically",
        ],
        caveat:
          "Many small parrot species need substantial daily out-of-cage time, social contact, and species-appropriate care. Several species live for decades. 'Low-effort' birds are largely a myth.",
      },
      {
        name: "Guinea pigs",
        summary: "Social small mammals often suited to indoor enclosures.",
        bullets: [
          "Friendly",
          "Suited to indoor enclosure with daily care",
          "Vocal in pleasant ways",
        ],
        caveat:
          "Need a large enclosure — far bigger than typical pet-store cages suggest — plus same-species companions and daily care.",
      },
      {
        name: "Rabbits",
        summary: "Possible apartment pets with the right setup.",
        bullets: [
          "Trainable",
          "Can be litter-trained",
          "Bond closely with people and other rabbits",
        ],
        caveat:
          "Need very large indoor space (often free-roam); long lifespan; vet care can be specialised.",
      },
    ],
    careExpectations: [
      "Every pet category in this list needs daily care; 'apartment-friendly' is not 'effort-free.'",
      "Many of these animals live for years — fish years, guinea pig years, decades for some birds and rabbits.",
      "Setup costs are often higher than expected: aquarium cycling, enclosure sizing, vet emergency access.",
      "Adoption is often the most ethical and practical starting point — see species-specific shelters and rescues.",
    ],
    notIdealFor: [
      "People in buildings with strict pet bans.",
      "People unable to commit to daily care.",
      "People wanting 'no-effort' companionship.",
    ],
    faqs: [
      {
        question: "What's the easiest pet for an apartment?",
        answer:
          "'Easy' is relative. Fish are quiet and space-efficient but need correct setup; cats are often a practical balance for time-limited owners.",
      },
      {
        question: "Can I have a dog in a small apartment?",
        answer:
          "Yes, for many smaller, calmer breeds with daily outdoor exercise — but not all small dogs are quiet, and not all owners can match the dog's needs.",
      },
      {
        question: "Are guinea pigs and rabbits really apartment-friendly?",
        answer:
          "Yes — if their housing and exercise needs are properly met, which often means much more space than pet-store cages suggest.",
      },
      {
        question: "What about reptiles or exotic pets?",
        answer:
          "Some reptiles can fit apartments if their habitat is properly built, but reptile care is specialised. Laws and welfare standards vary by region; research deeply and consult experienced keepers and a reptile-savvy veterinarian before adopting.",
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "best-pets-for-families",
    kind: "guide",
    parentHub: "/guides",
    title: "Best Pets for Families — Comparing Dogs, Cats and Small Mammals",
    description:
      "Dogs, cats, and several small mammals can fit family households with the right supervision and care. A cautious comparison with real trade-offs.",
    pageHeading: "Best Pets for Families",
    shortIntent: "Pet categories often considered for family households",
    directAnswer:
      "Dogs, cats, and some smaller mammals can be good family pets when the family commits to consistent care, supervised interactions, and species-appropriate routines. The right choice depends on children's ages, schedules, allergies, and the level of care the family can sustain — not just on the pet category.",
    decisionCriteria: [
      "Children's ages and ability to handle a pet respectfully.",
      "Household schedule and routine.",
      "Existing pets.",
      "Allergies.",
      "Budget for setup, food, and routine veterinary care.",
      "Long-term commitment — dogs and cats often live 10 to 18+ years.",
    ],
    recommendationsHeading: "Pet categories often considered for families",
    recommendationsIntro:
      "Each option has real trade-offs. Children should not be the primary carer for any pet; adults should commit to long-term welfare.",
    recommendations: [
      {
        name: "Dogs",
        summary: "Common family companions.",
        bullets: [
          "Bond strongly with families",
          "Trainable",
          "Active engagement",
        ],
        caveat:
          "Substantial commitment; supervision with children is essential regardless of breed.",
      },
      {
        name: "Cats",
        summary: "Common family pets.",
        bullets: [
          "Lower training demand than dogs",
          "Long lifespan",
          "Independent enough for many schedules",
        ],
        caveat:
          "Teach children to handle gently and respect the cat's space.",
      },
      {
        name: "Guinea pigs",
        summary: "Often family-friendly social small mammals.",
        bullets: [
          "Typically gentle",
          "Vocal in pleasant ways",
          "Can be handled by older children with supervision",
        ],
        caveat:
          "Need same-species companions, a much larger enclosure than pet-store cages, daily care, and access to a small-mammal-savvy veterinarian.",
      },
      {
        name: "Aquarium fish",
        summary: "Observational family pet.",
        bullets: [
          "Educational",
          "Quiet",
          "Can be a long-term household project",
        ],
        caveat:
          "Proper tank setup is required; children should not handle fish. Adults are responsible for water chemistry.",
      },
      {
        name: "Rabbits",
        summary: "Companion pet for some families.",
        bullets: [
          "Trainable",
          "Bond with family members",
        ],
        caveat:
          "Fragile spines mean they are often not a good match for very young children. Vet care can be specialised.",
      },
      {
        name: "Reptiles and amphibians (case by case)",
        summary: "Educational pets for some older-child families.",
        bullets: [
          "Educational",
          "Long-lived in many species",
        ],
        caveat:
          "Not a good first match for very young children. Salmonella considerations; specialised lighting, heating, and diet; laws and welfare standards vary by region.",
      },
    ],
    careExpectations: [
      "Adults are responsible for the pet's welfare — children can help but should not be the sole carer.",
      "Plan for the pet's full lifespan, not just the first months.",
      "Routine veterinary care, species-appropriate diet, and enrichment are non-negotiable.",
      "Adoption from reputable shelters and rescues is often the best starting point for dogs, cats, and many small mammals.",
    ],
    notIdealFor: [
      "Families unable to supervise children with pets.",
      "Families looking for low-effort care.",
      "People expecting children to provide all care.",
    ],
    faqs: [
      {
        question: "What's the best first pet for a child?",
        answer:
          "Adults should be the primary carer regardless of which pet. 'Starter pet' framing can lead to welfare problems; match by family lifestyle, not by perceived ease.",
      },
      {
        question: "Are dogs safer with kids than cats?",
        answer:
          "Both can fit family life with proper supervision; risk depends much more on the individual animal and the household than on species.",
      },
      {
        question: "Are 'starter pets' like hamsters good for kids?",
        answer:
          "Hamsters are fragile, can bite, are mostly crepuscular or nocturnal (often awake when children are not), and have short lifespans. Talk to a vet or shelter about whether they really fit your family before deciding.",
      },
      {
        question: "Should we adopt?",
        answer:
          "Adoption from reputable shelters is often a strong family choice for dogs, cats, and many small mammals.",
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "best-pets-for-beginners",
    kind: "guide",
    parentHub: "/guides",
    title: "Best Pets for Beginners — A Cautious, Honest Starting Guide",
    description:
      "A first pet should fit your time, budget, and lifestyle — not necessarily be the 'easiest' species. Honest comparisons and adoption-first thinking.",
    pageHeading: "Best Pets for Beginners",
    shortIntent: "Pet categories often considered for first-time owners",
    directAnswer:
      "A first pet should fit your time, budget, and lifestyle — not necessarily be the 'easiest' species. Some pet categories are more forgiving for beginners, but every pet requires real ongoing care. Adoption from reputable shelters is a strong path for many first-time owners.",
    decisionCriteria: [
      "Realistic daily time you can give the pet.",
      "Honest long-term commitment (years to decades, depending on species).",
      "Budget for setup, food, and veterinary care.",
      "Living situation and household members.",
      "Allergies.",
      "Access to species-savvy veterinary care.",
    ],
    recommendationsHeading: "Pet categories often suited to beginners",
    recommendationsIntro:
      "Each option assumes you will research the species seriously, ideally with a vet or shelter, before committing.",
    recommendations: [
      {
        name: "Cats",
        summary: "Often a practical first pet.",
        bullets: [
          "Independent enough for many work schedules",
          "Long lifespan",
          "Widely available in shelters",
        ],
        caveat: "10 to 18+ years of care; allergies are common.",
      },
      {
        name: "Adult dogs from reputable shelters",
        summary:
          "Often easier than puppies because temperament is observable.",
        bullets: [
          "Personality already visible",
          "Shelter staff can help match",
          "Wide range of sizes and energy levels",
        ],
        caveat:
          "Still substantial care, training, and exercise commitment.",
      },
      {
        name: "Aquarium fish",
        summary: "Quiet and space-efficient with research.",
        bullets: [
          "Educational",
          "Low daily handling",
        ],
        caveat:
          "Tank cycling, water chemistry, and species compatibility must be learned before adding fish.",
      },
      {
        name: "Guinea pigs",
        summary: "Social small mammals often suggested for beginners.",
        bullets: [
          "Typically friendly",
          "Vocal in pleasant ways",
        ],
        caveat:
          "Need same-species companions, a large enclosure, daily handling, and a small-mammal-savvy vet.",
      },
      {
        name: "Domestic shorthair cats (mixed-breed)",
        summary: "A common, practical first-cat recommendation.",
        bullets: [
          "Short coat",
          "Temperament observable in shelter",
          "Widely available",
        ],
        caveat: "Same long-term commitment as any cat.",
      },
    ],
    careExpectations: [
      "Every pet on this list needs real daily and weekly care.",
      "Plan for the full lifespan — not just the first year.",
      "Setup costs (enclosure, tank, vet checks) are often underestimated.",
      "Foster, volunteer, or visit shelters before committing if you are unsure.",
    ],
    notIdealFor: [
      "People wanting an 'easy' pet with no work.",
      "People considering reptiles, parrots, or exotic species without research and a species-savvy vet.",
      "People expecting children to provide all care.",
    ],
    faqs: [
      {
        question: "Are hamsters really beginner pets?",
        answer:
          "They can be, but they are fragile, often nocturnal, and live only a couple of years. Welfare considerations are real — talk to a small-mammal-savvy vet or rescue before deciding.",
      },
      {
        question: "Are fish a 'starter pet'?",
        answer:
          "Fish can be rewarding but need correct tank setup before any fish are added. Many starter tanks sold in stores are too small for the species commonly sold for them.",
      },
      {
        question: "Should I get a puppy as my first dog?",
        answer:
          "Adult dogs from shelters often suit first-time owners better. Puppies need significant training and supervision during their first year.",
      },
      {
        question: "What if I'm worried about commitment?",
        answer:
          "Foster from a reputable shelter, volunteer to walk dogs, or talk to a veterinarian before adopting. Honest preparation beats rushed adoption.",
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
  {
    slug: "low-maintenance-pets",
    kind: "guide",
    parentHub: "/guides",
    title: "Low-Maintenance Pets — An Honest Look at What That Really Means",
    description:
      "No pet is maintenance-free, but some pet categories are less labour-intensive. Cautious comparisons of fish, cats, reptiles and other options.",
    pageHeading: "Low-Maintenance Pets",
    shortIntent: "Pet categories often considered lower-effort",
    directAnswer:
      "No pet is truly maintenance-free. Some pet categories are less labour-intensive than others — fish, certain reptiles in properly built habitats, and adult cats often top common lists — but every pet needs food, environment, health care, and time. 'Low-maintenance' is relative and should not mean 'no commitment.'",
    decisionCriteria: [
      "What 'maintenance' means to you — daily handling, weekly cleaning, setup learning, or vet costs.",
      "Time available for daily and weekly care.",
      "Setup budget.",
      "Long-term commitment, often years or decades.",
      "Access to species-savvy veterinary care.",
      "Local laws and welfare regulations.",
    ],
    recommendationsHeading: "Pet categories often considered lower-effort",
    recommendationsIntro:
      "Use these examples as starting points for honest research, not as a promise of low effort across every dimension.",
    recommendations: [
      {
        name: "Aquarium fish (with correct setup)",
        summary: "Quiet, observational pet.",
        bullets: [
          "Minimal daily handling",
          "Space-efficient",
          "Educational",
        ],
        caveat:
          "Tank cycling and water chemistry must be learned; not 'set and forget.'",
      },
      {
        name: "Cats",
        summary: "Relatively independent companion.",
        bullets: [
          "Low daily handling commitment compared with dogs",
          "Long lifespan",
          "Widely available in shelters",
        ],
        caveat: "Vet care, food, enrichment, litter — every day.",
      },
      {
        name: "Reptiles in well-designed habitats (case by case)",
        summary: "Case-by-case option.",
        bullets: [
          "Minimal daily handling",
          "Long-lived in many species",
        ],
        caveat:
          "Specialised lighting, heating, and diet; legal restrictions in some regions; salmonella considerations; vet care must be species-savvy.",
      },
      {
        name: "Hermit crabs (niche)",
        summary: "Niche invertebrate option.",
        bullets: [
          "Low handling",
          "Educational",
        ],
        caveat:
          "Often misunderstood — they need proper humidity, salt water, multiple companions, and deep substrate. Not 'easy' for children.",
      },
      {
        name: "Snails or other invertebrates (research-heavy)",
        summary: "Niche option.",
        bullets: [
          "Low handling",
          "Educational",
        ],
        caveat:
          "Research species and check legal restrictions in your region before keeping.",
      },
    ],
    careExpectations: [
      "Every pet category here needs daily or near-daily attention.",
      "Setup costs and learning are real — particularly for fish and reptiles.",
      "Long-lived species mean long commitments.",
      "If in doubt, foster a cat from a shelter or volunteer before committing.",
    ],
    notIdealFor: [
      "People who expect a pet to need no time at all.",
      "People looking for low-cost, low-effort, high-companionship pets all at once.",
      "People considering reptiles or exotics without species-savvy vet access and legal research.",
    ],
    faqs: [
      {
        question: "What's the most low-maintenance pet?",
        answer:
          "It depends on what 'maintenance' means. Fish need less handling but more setup knowledge; cats need less than dogs but more than fish.",
      },
      {
        question: "Are reptiles low maintenance?",
        answer:
          "Once a habitat is correctly built and maintained, daily handling is often minimal — but setup, electricity, and vet costs are real, and laws vary by region.",
      },
      {
        question: "Are hamsters low maintenance?",
        answer:
          "Less so than commonly assumed. They are fragile, often nocturnal, and have short lifespans. Welfare considerations are real.",
      },
      {
        question: "What if I want a low-maintenance pet but also bonding?",
        answer:
          "That tension is real. Cats often balance the two; dogs typically do not fit a 'low-maintenance' label honestly.",
      },
    ],
    publishedTime: PUBLISHED,
    modifiedTime: MODIFIED,
  },
];

export function getDecisionBySlug(
  slug: string,
  kind?: DecisionPageKind
): DecisionPage | undefined {
  return DECISION_PAGES.find(
    (p) => p.slug === slug && (!kind || p.kind === kind)
  );
}

export function getDecisionsByKind(kind: DecisionPageKind): DecisionPage[] {
  return DECISION_PAGES.filter((p) => p.kind === kind);
}

export function getRelatedDecisions(
  current: DecisionPage,
  limit = 3
): DecisionPage[] {
  return DECISION_PAGES.filter(
    (p) => p.kind === current.kind && p.slug !== current.slug
  ).slice(0, limit);
}
