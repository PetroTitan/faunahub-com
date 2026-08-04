/**
 * Comparison batch 06 — pets, domestic animals and fish.
 *
 * Compliance posture: these pages describe species, not purchases. No page
 * names a better pet, quotes prices, prescribes diets, portions, housing or
 * breeding, or offers veterinary guidance.
 */
import { defineComparison, REVIEWED } from "./define.ts";

export const BATCH_06 = [
  defineComparison({
    slug: "dog-vs-cat",
    animalA: { slug: "dog", name: "Dog" },
    animalB: { slug: "cat", name: "Cat" },
    title: "Dog vs Cat",
    metaTitle: "Dog vs Cat — Domestication, Diet, Social Life & Senses",
    metaDescription:
      "Dogs were domesticated far earlier from wolves and are cooperative omnivores; cats are obligate carnivores from a solitary ancestor. Senses and behaviour compared.",
    shortAnswer:
      "The deepest difference is dietary and social. Cats are obligate carnivores whose bodies require nutrients found only in animal tissue, and they descend from a largely solitary wild ancestor. Dogs descend from wolves — cooperative pack hunters — and have adapted to a broader omnivorous diet, including a greater ability to digest starch. Dogs were also domesticated many thousands of years earlier.",
    primaryCategory: "pets-domestic",
    secondaryCategories: ["mammals", "behavior-adaptations"],
    relationship: "pet-decision",
    confidence: "strong",
    searchIntent: "pet-decision",
    whyCompare:
      "These are the two most widely kept companion animals in the world, and most of the practical differences between living with them trace directly to their wild ancestors' diets and social systems.",
    centralDifference:
      "Cats are obligate carnivores descended from a solitary ancestor; dogs are dietary generalists descended from cooperative pack hunters, and that shapes almost everything else.",
    dimensions: [
      {
        id: "ancestor",
        label: "Wild ancestor",
        animalAValue: "The grey wolf, a cooperative pack hunter of large prey",
        animalBValue: "The African wildcat, a largely solitary hunter of small prey",
        interpretation: "Social biology in both species is inherited from very different starting points.",
      },
      {
        id: "domestication-timing",
        label: "When domestication began",
        animalAValue: "Many thousands of years ago, before settled agriculture",
        animalBValue: "Later, associated with early farming settlements and stored grain",
        interpretation: "Dogs have the longest domestication history of any animal.",
        caveat: "Exact dates are actively debated and revised as archaeological and genetic evidence accumulates.",
      },
      {
        id: "diet",
        label: "Dietary biology",
        animalAValue: "Omnivorous in practice, with greater starch-digesting capacity than wolves",
        animalBValue: "Obligate carnivore, requiring nutrients such as taurine that are found in animal tissue",
        interpretation: "This is a hard physiological constraint in cats, not a preference.",
      },
      {
        id: "social",
        label: "Social organisation",
        animalAValue: "Highly social, forming groups and cooperating readily with people",
        animalBValue: "Socially flexible — solitary or forming colonies where food is concentrated",
        interpretation: "Cats are more social than their reputation suggests, but on different terms from dogs.",
      },
      {
        id: "senses",
        label: "Notable senses",
        animalAValue: "Exceptional sense of smell, used in tracking and detection work",
        animalBValue: "Excellent low-light vision, hearing into the ultrasonic, and sensitive whiskers",
        interpretation: "Each sensory profile reflects the prey and conditions its ancestor hunted in.",
      },
      {
        id: "variation",
        label: "Physical variation",
        animalAValue: "Extreme — the widest size and shape range of any land mammal species",
        animalBValue: "Comparatively narrow, with breeds differing mostly in coat and face shape",
        interpretation: "Selective breeding for working roles drove dog variation far beyond anything in cats.",
      },
    ],
    narrative: {
      taxonomy:
        "The domestic dog descends from the grey wolf and is treated either as a subspecies of it or as a closely related species depending on the authority. The domestic cat descends from the African wildcat. Both are carnivorans, but dogs are caniforms and cats feliforms — two branches that separated tens of millions of years ago, long before either was domesticated.",
      identification:
        "No identification issue arises. What is worth noting is how differently the two species vary: dogs range from a couple of kilograms to more than seventy, with skull shapes so different they would be taken for separate species in the fossil record, while cat breeds differ mainly in coat, ear and face shape within a fairly narrow size range.",
      habitat:
        "Both live worldwide alongside people, and both have free-ranging populations. Free-ranging cats are significant predators of small wildlife in many regions, a documented conservation concern particularly on islands and for ground-nesting birds. Free-ranging dogs affect wildlife through predation, disturbance and disease transmission.",
      diet:
        "Cats are obligate carnivores: they cannot synthesise adequate taurine, arachidonic acid, vitamin A or several other nutrients and must obtain them from animal tissue. Dogs are far more flexible, and domestication was accompanied by an increase in the genes governing starch digestion relative to wolves. This is a genuine physiological difference, not a matter of taste.",
      behavior:
        "Dogs read human gestures and gaze unusually well, including pointing, which even hand-raised wolves do less readily, and they cooperate with people in a wide range of working roles. Cats are socially flexible, forming colonies where food is concentrated and living alone where it is dispersed, and they communicate with people using vocalisations largely absent from adult cat-to-cat interaction.",
      humanRelationship:
        "Dogs have the longest domestication history of any animal and have been shaped for herding, guarding, hunting, hauling, detection and assistance work. Cats were associated with early farming settlements, where stored grain attracted rodents, and were selected far less intensively for working roles. Both are now kept overwhelmingly as companions rather than for work.",
      whichIsWhich:
        "There is no identification question here — the useful distinction is what each animal is built for. A dog's biology reflects a cooperative pack hunter that ate what the group could get; a cat's reflects a solitary specialist on small prey. Those origins explain diet, social behaviour and much of what differs in living alongside them.",
      sensesAdaptations:
        "Dogs have a vastly larger olfactory epithelium and far more olfactory receptor genes than people, which underpins detection and tracking work. Cats see well in very low light through a reflective tapetum lucidum behind the retina, hear well into the ultrasonic range used by rodents, and use whiskers to judge gaps and detect air movement at close range.",
      petContext:
        "Both are long-term commitments measured in years to well over a decade, with needs that vary by individual as much as by species. Neither is universally suitable, easy or low-maintenance: dogs typically need daily exercise, training and company, while cats need environmental enrichment, safe outdoor arrangements where relevant, and appropriate space. Care, diet and health decisions belong with a veterinarian.",
      lifespan:
        "Both commonly live well over a decade under good care, with substantial variation. In dogs, size is a strong predictor: small breeds typically outlive very large ones by a considerable margin. Cats show less size-related variation. Indoor and outdoor cats differ markedly in average lifespan for reasons of risk rather than biology, and figures should not be quoted interchangeably.",
    },
    faqs: [
      {
        question: "Which makes the better pet, a dog or a cat?",
        answer:
          "There is no general answer, and this page deliberately does not give one. Suitability depends on the household, time available, space, local law, allergies, other animals present and the individual animal's temperament. What is useful is understanding the species differences: dogs descend from cooperative pack hunters and cats from a solitary specialist, and those origins shape what each typically needs.",
      },
      {
        question: "Why can't cats be vegetarian?",
        answer:
          "Because they are obligate carnivores. Cats cannot synthesise adequate taurine, arachidonic acid, preformed vitamin A and several other nutrients, all of which occur in animal tissue, and deficiency causes serious harm including heart and eye disease. This is a physiological constraint rather than a preference. Any dietary decision for an individual cat is a veterinary matter, not something a comparison page should advise on.",
      },
      {
        question: "Are dogs really better at reading people than cats?",
        answer:
          "Dogs perform notably well on tasks involving human gestures, following pointing and gaze in ways that even hand-raised wolves do less readily, which is generally attributed to their long domestication alongside people. Cats also read human cues and respond to their names and emotional states, but they have been studied far less and were never selected for cooperative work, so direct comparison is uneven.",
      },
      {
        question: "Which was domesticated first?",
        answer:
          "The dog, by a wide margin, and it is the earliest domesticated animal of any kind — the process began before settled agriculture. Cats came later and are associated with early farming settlements, where stored grain drew rodents and tolerant wildcats found an opportunity. Exact dates for both remain debated and are revised as archaeological and genetic evidence accumulates.",
      },
      {
        question: "Why do dogs vary so much more in size and shape than cats?",
        answer:
          "Selective breeding for working roles. Dogs were shaped for herding, guarding, hauling, hunting different quarry in different terrain, and much else, and each role rewarded a different build. That sustained pressure produced the widest size and shape range of any land mammal species. Cats were kept largely for rodent control, a single role their existing form already suited, so comparable pressure never applied.",
      },
    ],
    commonConfusions: [
      "Treating a cat's dietary requirements as a preference rather than a physiological constraint.",
      "Assuming cats are asocial, when they form colonies where food is concentrated.",
      "Reading dog breed differences as species differences, when all breeds are one species.",
    ],
    similarities: [
      "Both are carnivoran mammals domesticated from wild ancestors and now kept worldwide.",
      "Both have acute senses well beyond human capability, in different modalities.",
      "Both form social bonds with people and communicate with them in species-specific ways.",
      "Both have free-ranging populations that affect local wildlife.",
    ],
    keyDifferences: [
      "Cats are obligate carnivores; dogs are dietary generalists with greater starch-digesting capacity.",
      "Dogs descend from cooperative pack hunters, cats from a largely solitary ancestor.",
      "Dogs were domesticated many thousands of years before cats.",
      "Dogs show far greater variation in size and shape than any cat breed.",
      "Dogs excel at reading human gestures, while cats have exceptional low-light vision and ultrasonic hearing.",
    ],
    petBoundary:
      "Neither species is universally suitable, easy or low-maintenance, and nothing here ranks one above the other. Suitability depends on the household, local law and the individual animal. This page gives no feeding quantities, training protocols, housing instructions or health guidance — those decisions belong with a qualified veterinarian and species-specific welfare resources.",
    relatedComparisonSlugs: ["rabbit-vs-hamster", "guinea-pig-vs-hamster", "wolf-vs-coyote"],
    relatedHubPaths: ["/dogs", "/cats", "/animal-domestication"],
    sourceIds: ["adw", "britannica", "smithsonian"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "rabbit-vs-hamster",
    animalA: { slug: "rabbit", name: "Rabbit" },
    animalB: { slug: "hamster", name: "Hamster" },
    title: "Rabbit vs Hamster",
    metaTitle: "Rabbit vs Hamster — Different Orders, Diet & Social Needs",
    metaDescription:
      "Rabbits are social lagomorphs needing constant fibre; hamsters are solitary rodents with cheek pouches. Digestion, activity pattern and space needs compared.",
    shortAnswer:
      "They are not close relatives. Rabbits are lagomorphs — a separate order from rodents — that are highly social, need continuous access to fibrous forage, and practise caecotrophy to digest it. Hamsters are rodents that are strongly solitary in most species, store food in cheek pouches, and are nocturnal burrowers. Rabbits are also considerably larger and longer-lived.",
    primaryCategory: "pets-domestic",
    secondaryCategories: ["mammals", "taxonomy"],
    relationship: "pet-decision",
    confidence: "strong",
    searchIntent: "pet-decision",
    whyCompare:
      "Both are commonly grouped together as small pets, which obscures that they sit in different orders and have almost opposite social and dietary requirements.",
    centralDifference:
      "Rabbits are social, fibre-dependent lagomorphs; hamsters are solitary, food-hoarding rodents, and the two belong to different orders.",
    dimensions: [
      {
        id: "order",
        label: "Taxonomic order",
        animalAValue: "Lagomorpha, distinguished by a second pair of small peg teeth behind the upper incisors",
        animalBValue: "Rodentia",
        interpretation: "Rabbits are not rodents, which is the single most common misconception about them.",
      },
      {
        id: "sociality",
        label: "Social needs",
        animalAValue: "Highly social; European rabbits live in groups within a warren",
        animalBValue: "Solitary in most species, with Syrian hamsters strongly intolerant of company",
        interpretation: "This is the difference with the largest welfare consequences of any on this page.",
      },
      {
        id: "digestion",
        label: "Digestion",
        animalAValue: "Hindgut fermenter practising caecotrophy — reingesting soft droppings to extract nutrients twice",
        animalBValue: "Simpler omnivorous digestion, with food stored in cheek pouches and cached",
        interpretation: "Continuous fibre intake is a physiological necessity for rabbits, not a preference.",
      },
      {
        id: "activity",
        label: "Activity pattern",
        animalAValue: "Crepuscular — most active at dawn and dusk",
        animalBValue: "Nocturnal, with most activity well after dark",
        interpretation: "Activity pattern determines when each animal is actually awake to interact.",
      },
      {
        id: "size",
        label: "Adult size",
        animalAValue: "Typically 1–5 kg depending on breed, with some considerably larger",
        animalBValue: "Roughly 25–200 g depending on species",
        interpretation: "The size difference drives very different space and handling requirements.",
      },
      {
        id: "lifespan",
        label: "Typical lifespan under care",
        animalAValue: "Commonly around 8–12 years",
        animalBValue: "Commonly around 2–3 years",
        interpretation: "The commitment involved differs by roughly a factor of four.",
        caveat: "Figures vary with species, breed, genetics and care, and are ranges rather than guarantees.",
      },
    ],
    narrative: {
      taxonomy:
        "Rabbits belong to Lagomorpha, an order separate from rodents, and are distinguished anatomically by a second pair of small peg teeth sitting directly behind the upper incisors. Hamsters are rodents in the family Cricetidae. The two orders are related and were once classified together, but have been recognised as distinct for a long time on both anatomical and molecular grounds.",
      identification:
        "No identification difficulty arises given the size difference. What matters instead is recognising that grouping them as small pets implies a similarity that does not exist: their social needs, digestion, activity periods and lifespans differ substantially, and care appropriate to one is inappropriate for the other.",
      habitat:
        "Wild European rabbits live in social groups in extensive burrow systems in grassland, dune and scrub. Wild hamsters are solitary burrowers of dry grassland and steppe, occupying individual burrow systems with separate chambers for sleeping and food storage. Both are prey animals whose behaviour is organised around avoiding detection.",
      diet:
        "Rabbits are herbivores requiring continuous access to fibrous forage, which keeps the gut moving and wears the continuously growing teeth. Caecotrophy — reingesting a specific soft dropping type — is an essential part of their digestion. Hamsters are omnivores taking seeds, grains, plant material and invertebrates, and they transport food in cheek pouches to cache in the burrow.",
      behavior:
        "Rabbits are social and, in appropriate pairings, benefit from company; they thump a hind foot in alarm and are most active at dawn and dusk. Most hamsters, particularly Syrians, are strongly solitary and will fight if housed together, and they are nocturnal, running long distances at night in the wild. Both are prey animals for whom being picked up is inherently stressful.",
      humanRelationship:
        "Both are widely kept, and both are frequently acquired with underestimated requirements — rabbits for space, company and constant forage, hamsters for solitary housing and enough space to express natural burrowing and running behaviour. Rabbits also have a long history as livestock, while the laboratory and pet hamster population descends from a very small founder group.",
      whichIsWhich:
        "The larger, longer-eared, group-living animal that eats hay constantly is a rabbit, and it is a lagomorph rather than a rodent. The small nocturnal animal that stuffs food into cheek pouches and lives alone is a hamster, a rodent. They are not two versions of the same kind of small pet.",
      petContext:
        "Both are prey species that find handling stressful and both have needs commonly underestimated at the point of acquisition. Rabbits are social, long-lived, need substantial space and constant fibrous forage. Most hamsters must be housed alone and need far more space and depth of substrate than typical commercial cages provide. This page gives no housing, diet or health instructions — those belong with a veterinarian experienced with the species.",
      lifespan:
        "Rabbits under good care commonly live around eight to twelve years, and hamsters around two to three, so the practical commitment differs greatly. Both figures are ranges influenced by species, breed, genetics and care, and both refer to animals under human care rather than wild populations, where predation makes average lifespans far shorter.",
    },
    faqs: [
      {
        question: "Are rabbits a kind of rodent?",
        answer:
          "No. Rabbits belong to Lagomorpha, a separate order, and one clear anatomical marker is a second pair of small peg teeth sitting directly behind the upper incisors — rodents have a single pair. The two orders are related and were once grouped together, but they have been recognised as distinct for a long time on both anatomical and molecular grounds.",
      },
      {
        question: "Can rabbits and hamsters live together?",
        answer:
          "No, and they should never be housed together. They are different species with incompatible social needs, activity patterns, diets and communication, and the size difference alone makes injury likely. Most hamsters, particularly Syrians, must also be housed alone from their own species. Species-specific housing advice should come from a veterinarian or welfare organisation rather than from a general comparison.",
      },
      {
        question: "Why do rabbits need constant access to hay?",
        answer:
          "Two reasons, both physiological. Their digestive system depends on a continuous flow of fibrous material to keep functioning, and interruptions can cause serious problems quickly. Their teeth also grow continuously and are worn down by grinding tough forage. This is a structural requirement of rabbit biology rather than a dietary preference, though the specifics for an individual animal are a veterinary matter.",
      },
      {
        question: "Which is easier to keep?",
        answer:
          "Neither is straightforwardly easy, and this page does not rank them. Both are prey animals that find handling stressful, and both are routinely acquired with underestimated requirements — rabbits for space, company and constant forage, hamsters for solitary housing and far more space and substrate depth than standard cages offer. Suitability depends entirely on what a particular household can provide.",
      },
    ],
    commonConfusions: [
      "Calling rabbits rodents, when they belong to a separate order.",
      "Grouping the two as interchangeable small pets with similar needs.",
      "Assuming hamsters benefit from company, when most species are strongly solitary.",
    ],
    similarities: [
      "Both are small prey mammals for whom being handled is inherently stressful.",
      "Both have continuously growing incisors that require appropriate wear.",
      "Both are burrowers in the wild and both benefit from opportunities to dig and hide.",
      "Both are widely kept and both are frequently acquired with underestimated requirements.",
    ],
    keyDifferences: [
      "Rabbits are lagomorphs; hamsters are rodents.",
      "Rabbits are highly social, while most hamsters are strongly solitary.",
      "Rabbits are hindgut fermenters needing constant fibre; hamsters cache food in cheek pouches.",
      "Rabbits are crepuscular, whereas hamsters are nocturnal.",
      "Rabbits commonly live around four times as long as hamsters.",
    ],
    petBoundary:
      "Neither animal is a low-maintenance starter pet, and neither should be housed with the other. This page gives no housing dimensions, feeding quantities, handling protocols or health guidance — consult a veterinarian experienced with the species and established welfare organisations.",
    relatedComparisonSlugs: ["guinea-pig-vs-hamster", "rabbit-vs-hare", "rabbit-vs-capybara"],
    relatedHubPaths: ["/small-pets", "/small-pets/rabbits", "/small-pets/hamsters"],
    sourceIds: ["adw", "britannica", "smithsonian"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "guinea-pig-vs-hamster",
    animalA: { slug: "guinea-pig", name: "Guinea Pig" },
    animalB: { slug: "hamster", name: "Hamster" },
    title: "Guinea Pig vs Hamster",
    metaTitle: "Guinea Pig vs Hamster — Social Needs, Vitamin C & Activity",
    metaDescription:
      "Guinea pigs are highly social daytime herbivores that cannot make their own vitamin C; hamsters are solitary nocturnal omnivores. Two very different rodents.",
    shortAnswer:
      "Both are rodents, but almost everything else differs. Guinea pigs are highly social herbivores active largely in daylight, and — unusually among mammals — they cannot synthesise vitamin C and must obtain it from their diet. Hamsters are solitary in most species, nocturnal, omnivorous, and store food in cheek pouches. Guinea pigs are also several times larger and live substantially longer.",
    primaryCategory: "pets-domestic",
    secondaryCategories: ["mammals"],
    relationship: "pet-decision",
    confidence: "strong",
    searchIntent: "pet-decision",
    whyCompare:
      "Both are sold as beginner small pets side by side, and the social difference in particular has welfare consequences that the shared shelf label completely hides.",
    centralDifference:
      "Guinea pigs are social daytime herbivores with a dietary vitamin C requirement; hamsters are solitary nocturnal omnivores that hoard food.",
    dimensions: [
      {
        id: "sociality",
        label: "Social needs",
        animalAValue: "Highly social; keeping one alone is discouraged and prohibited in some jurisdictions",
        animalBValue: "Solitary in most species, with Syrians strongly intolerant of company",
        interpretation: "The requirements are opposite, which makes the shared small pet label actively misleading.",
      },
      {
        id: "vitamin-c",
        label: "Vitamin C",
        animalAValue: "Cannot synthesise it and must obtain it from the diet",
        animalBValue: "Synthesises its own",
        interpretation: "Guinea pigs share this unusual limitation with primates and a few other mammals.",
      },
      {
        id: "activity",
        label: "Activity pattern",
        animalAValue: "Active in bouts through the day and evening",
        animalBValue: "Nocturnal, with most activity well after dark",
        interpretation: "Determines when the animal is actually awake to interact with.",
      },
      {
        id: "diet",
        label: "Diet",
        animalAValue: "Herbivore requiring continuous fibrous forage",
        animalBValue: "Omnivore taking seeds, grains, plant material and invertebrates",
        interpretation: "Continuous fibre intake is a physiological requirement for guinea pigs.",
      },
      {
        id: "size",
        label: "Adult size",
        animalAValue: "Roughly 700–1,200 g",
        animalBValue: "Roughly 25–200 g depending on species",
        interpretation: "Guinea pigs need considerably more floor space than a typical hamster enclosure provides.",
      },
      {
        id: "lifespan",
        label: "Typical lifespan under care",
        animalAValue: "Commonly around 5–7 years",
        animalBValue: "Commonly around 2–3 years",
        interpretation: "The commitment is roughly double, which matters when acquiring for a child.",
        caveat: "Figures vary with species, genetics and care and are ranges rather than guarantees.",
      },
    ],
    narrative: {
      taxonomy:
        "Both are rodents, but from different parts of the order. Guinea pigs are caviomorphs, a South American group that also includes capybaras and chinchillas. Hamsters belong to Cricetidae, in a different rodent suborder. Their relationship is more distant than the shared small pet shelf suggests, and their biology reflects that.",
      identification:
        "There is no identification difficulty: a guinea pig is several times larger, tailless in appearance, and stocky, while a hamster is small with a short tail and prominent cheek pouches when full. The value of the comparison lies in the care implications rather than in telling them apart.",
      habitat:
        "Domestic guinea pigs descend from a South American wild cavy that lives in social groups in grassland and rocky areas, using existing cover and burrows rather than digging extensively. Wild hamsters are solitary burrowers of dry grassland and steppe, excavating individual systems with separate sleeping and food-storage chambers.",
      diet:
        "Guinea pigs are herbivores needing continuous fibrous forage to keep the gut moving and wear continuously growing teeth, plus a dietary source of vitamin C because they cannot make their own. Hamsters are omnivores that gather seeds, grains and invertebrates, transporting them in cheek pouches to cache in the burrow for later.",
      behavior:
        "Guinea pigs are vocal and social, using a range of whistles, purrs and rumbles, and they show a startle response of scattering or freezing rather than fleeing far. Hamsters are solitary and nocturnal, running considerable distances at night in the wild and being highly territorial toward their own species. Both are prey animals that find being picked up stressful.",
      humanRelationship:
        "Both are extremely common first pets, and both are frequently acquired with underestimated requirements. Guinea pigs need company, substantial floor space and a reliable vitamin C source; hamsters need solitary housing and far more space and substrate depth than most commercial cages provide. In several jurisdictions it is unlawful to keep a single guinea pig precisely because of their social needs.",
      whichIsWhich:
        "Larger, stocky, tailless in appearance, awake in daylight, whistling, living with a companion: guinea pig. Small, short-tailed, awake at night, cheek pouches full, living alone: hamster. Both are rodents, and that is close to the only thing they have in common as animals to care for.",
      petContext:
        "The single most important practical difference is social: guinea pigs need appropriate company and most hamsters must be housed alone. Both need considerably more space than standard commercial enclosures provide, and both are prey animals for whom handling is stressful. This page gives no housing dimensions, feeding quantities or health guidance — consult a veterinarian experienced with these species.",
    },
    faqs: [
      {
        question: "Can guinea pigs and hamsters live together?",
        answer:
          "No, and they must never be housed together. Their social needs are opposite, their activity patterns differ, and their diets are not interchangeable. The size difference also makes injury a real risk. Guinea pigs need company from their own species, while most hamsters must be housed alone. Species-specific housing advice should come from a veterinarian or welfare organisation.",
      },
      {
        question: "Why do guinea pigs need vitamin C in their diet?",
        answer:
          "Because they cannot synthesise it. Most mammals produce their own vitamin C, but guinea pigs share with primates and a few other species a loss of that ability, so it must come from what they eat. Deficiency causes serious illness. How to meet that requirement for a particular animal is a veterinary question rather than something a comparison page should specify.",
      },
      {
        question: "Which is better for a child?",
        answer:
          "Neither is straightforwardly suitable, and this page does not rank them. Both are prey animals that find handling stressful, both need more space than standard cages offer, and both require adult responsibility for daily care. Guinea pigs additionally need company and live roughly twice as long as hamsters, which is a longer commitment than many families anticipate.",
      },
      {
        question: "Is it true guinea pigs cannot be kept alone?",
        answer:
          "They are highly social and keeping one alone is strongly discouraged on welfare grounds, and in several jurisdictions it is unlawful. Their wild relatives live in groups, and companionship affects behaviour and wellbeing substantially. Hamsters are the opposite case: most species, and Syrians in particular, are territorial and will fight if housed together, so solitary housing is the appropriate arrangement for them.",
      },
    ],
    commonConfusions: [
      "Treating both as interchangeable beginner small pets with similar needs.",
      "Assuming all rodents have similar social requirements.",
      "Overlooking the guinea pig's dietary vitamin C requirement.",
    ],
    similarities: [
      "Both are rodents with continuously growing incisors requiring appropriate wear.",
      "Both are prey animals for whom being picked up is inherently stressful.",
      "Both are widely kept as first pets and both are frequently acquired with underestimated needs.",
      "Both need considerably more space and enrichment than standard commercial cages provide.",
    ],
    keyDifferences: [
      "Guinea pigs are highly social, while most hamsters must be housed alone.",
      "Guinea pigs cannot synthesise vitamin C and must obtain it from the diet.",
      "Guinea pigs are active in daylight, whereas hamsters are nocturnal.",
      "Guinea pigs are herbivores needing constant fibre; hamsters are omnivores that hoard food.",
      "Guinea pigs live roughly twice as long as hamsters.",
    ],
    petBoundary:
      "Neither species is a low-maintenance starter pet and they must never be housed together. This page gives no housing dimensions, feeding quantities, supplement regimes or health guidance — those decisions belong with a veterinarian experienced with small mammals and with established welfare organisations.",
    relatedComparisonSlugs: ["rabbit-vs-hamster", "rabbit-vs-capybara", "dog-vs-cat"],
    relatedHubPaths: ["/small-pets", "/small-pets/guinea-pigs", "/small-pets/hamsters"],
    sourceIds: ["adw", "britannica", "smithsonian"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "rabbit-vs-capybara",
    animalA: { slug: "rabbit", name: "Rabbit" },
    animalB: { slug: "capybara", name: "Capybara" },
    title: "Rabbit vs Capybara",
    metaTitle: "Rabbit vs Capybara — Different Orders, Size & Semi-Aquatic Life",
    metaDescription:
      "Capybaras are the largest rodents, semi-aquatic and highly social; rabbits are much smaller lagomorphs that burrow. Digestion, habitat and wild status compared.",
    shortAnswer:
      "The capybara is the largest living rodent, semi-aquatic, and lives in large social groups in South American wetlands, weighing tens of kilograms. The rabbit is a much smaller lagomorph — a different order entirely — that digs burrows and lives in grassland and scrub. Both are highly social hindgut fermenters that practise caecotrophy, which is where the genuine similarity lies.",
    primaryCategory: "mammals",
    secondaryCategories: ["pets-domestic", "taxonomy"],
    relationship: "taxonomy-clarification",
    confidence: "strong",
    searchIntent: "taxonomy",
    whyCompare:
      "Capybaras are frequently described as giant guinea pigs or oversized rabbits, and setting them against a rabbit clarifies both what they actually are and what the two genuinely share.",
    centralDifference:
      "A capybara is the largest rodent, semi-aquatic and living in large groups; a rabbit is a much smaller burrowing lagomorph from a different order.",
    dimensions: [
      {
        id: "order",
        label: "Taxonomic order",
        animalAValue: "Lagomorpha, with a second pair of peg teeth behind the upper incisors",
        animalBValue: "Rodentia, in the South American caviomorph group with guinea pigs",
        interpretation: "Different orders, so the resemblance in ecology is convergent rather than inherited.",
      },
      {
        id: "size",
        label: "Adult size",
        animalAValue: "Roughly 1–2.5 kg in wild European rabbits",
        animalBValue: "Commonly 35–65 kg — the largest living rodent",
        interpretation: "The size gap is one of the largest in any comparison between herbivores of similar diet.",
      },
      {
        id: "water",
        label: "Relationship with water",
        animalAValue: "Avoids water; escapes underground",
        animalBValue: "Semi-aquatic — swims well and submerges to escape predators",
        interpretation: "Eyes, ears and nostrils set high on the capybara's head allow it to stay submerged while alert.",
      },
      {
        id: "shelter",
        label: "Shelter",
        animalAValue: "Excavates burrows and warrens",
        animalBValue: "Does not burrow; rests in vegetation near water",
        interpretation: "Escape strategy differs completely — underground against underwater.",
      },
      {
        id: "digestion",
        label: "Digestion",
        animalAValue: "Hindgut fermenter practising caecotrophy",
        animalBValue: "Hindgut fermenter also practising caecotrophy",
        interpretation: "This is the genuine shared trait, arrived at independently in both lineages.",
      },
      {
        id: "sociality",
        label: "Social structure",
        animalAValue: "Group-living in warrens, with established structure",
        animalBValue: "Large groups, sometimes numbering dozens around water",
        interpretation: "Both are social herbivores, though capybara groups can be far larger.",
      },
    ],
    narrative: {
      taxonomy:
        "The capybara is a caviomorph rodent, closely related to guinea pigs and rock cavies. The rabbit is a lagomorph, a separate order. So the capybara really is a giant relative of the guinea pig, but it is not a giant rabbit. Their similar diet and digestion are convergent solutions to processing large amounts of low-quality plant material.",
      identification:
        "There is no scope for confusion given the size difference: an adult capybara can weigh thirty times a wild rabbit. The capybara's blunt squared muzzle, high-set eyes and ears, and near-absent tail are distinctive, as is its habit of resting at the water's edge in groups.",
      habitat:
        "Capybaras occupy wetlands, riverbanks, marshes and flooded grassland across much of South America, and are never far from water. Rabbits occupy grassland, dune, scrub and woodland edge with soil suitable for digging, and the European rabbit has been introduced widely beyond its native range with severe ecological consequences in places.",
      diet:
        "Both are herbivores that graze grasses and aquatic or terrestrial vegetation, and both are hindgut fermenters practising caecotrophy — reingesting a soft dropping type to pass nutrients through the gut twice. Both also have continuously growing teeth worn down by abrasive plant material. This dietary and digestive convergence is genuine and notable.",
      behavior:
        "Capybaras are highly social, resting in groups at the water's edge and entering water to escape predators, where they can submerge with only eyes, ears and nostrils exposed. Rabbits are social within warrens and escape underground, thumping a hind foot in alarm. Both are prey animals whose behaviour is organised around detecting and evading predators.",
      humanRelationship:
        "Capybaras are hunted for meat and hide in parts of their range and are farmed in some regions, and they have become established outside their native range in places. They are also kept as exotic pets in some jurisdictions, which raises substantial welfare and legality questions. Rabbits are domesticated worldwide and are simultaneously one of the most damaging introduced species in several countries.",
      whichIsWhich:
        "Very large, blunt-faced, semi-aquatic, in a group by water in South America: capybara, a rodent. Small, long-eared, burrowing, in grassland or scrub: rabbit, a lagomorph. Their shared digestion is real convergence; their supposed kinship is not.",
      petContext:
        "Capybaras are wild animals with semi-aquatic, highly social requirements that domestic settings very rarely meet, and keeping them is restricted or prohibited in many jurisdictions. Domestic rabbits are genuinely domesticated but have welfare needs that are commonly underestimated. Nothing here is care guidance, and exotic-animal keeping decisions should involve local law and a veterinarian experienced with the species.",
    },
    faqs: [
      {
        question: "Is a capybara a giant rabbit?",
        answer:
          "No. Capybaras are rodents in the South American caviomorph group, closely related to guinea pigs and rock cavies. Rabbits are lagomorphs, a separate order distinguished by an extra pair of small peg teeth behind the upper incisors. Calling a capybara a giant guinea pig is much closer to accurate; calling it a giant rabbit is not.",
      },
      {
        question: "What do the two genuinely have in common?",
        answer:
          "Their digestion. Both are hindgut fermenters that practise caecotrophy, reingesting a specific soft dropping type so nutrients pass through the gut twice — an efficient way to extract value from fibrous, low-quality plant food. Both also have continuously growing teeth worn down by abrasive vegetation. These are convergent solutions to the same dietary problem rather than inherited traits.",
      },
      {
        question: "Why are capybaras semi-aquatic?",
        answer:
          "Water is their escape route and their habitat. They have partially webbed feet, swim strongly, and can submerge with only eyes, ears and nostrils above the surface because those features sit high on the head. Predators including jaguars and caimans make rapid access to water valuable, and the wetland vegetation they graze grows there. Rabbits solved the same predation problem by digging instead.",
      },
      {
        question: "Do capybaras make good pets?",
        answer:
          "They are wild animals with requirements that domestic settings very rarely meet — they are large, highly social, need constant access to water deep enough to swim in, and graze continuously. Keeping them is restricted or prohibited in many jurisdictions. This page does not advise on exotic-animal keeping; local law and a veterinarian experienced with the species are the appropriate sources.",
      },
    ],
    commonConfusions: [
      "Describing capybaras as giant rabbits, when they are rodents related to guinea pigs.",
      "Assuming shared digestion implies close kinship.",
      "Treating capybaras as domesticated because they appear tame in photographs.",
    ],
    similarities: [
      "Both are social herbivores that graze grasses and other vegetation.",
      "Both are hindgut fermenters that practise caecotrophy to extract nutrients twice.",
      "Both have continuously growing teeth worn down by abrasive plant material.",
      "Both are prey animals whose behaviour is organised around predator avoidance.",
    ],
    keyDifferences: [
      "Capybaras are rodents; rabbits are lagomorphs from a separate order.",
      "Capybaras are the largest living rodents, many times a rabbit's mass.",
      "Capybaras are semi-aquatic and escape into water; rabbits escape into burrows.",
      "Capybaras do not dig burrows, while rabbits build extensive warrens.",
      "Rabbits are fully domesticated, whereas capybaras are not.",
    ],
    petBoundary:
      "Capybaras are wild animals whose keeping is restricted or prohibited in many jurisdictions and whose needs domestic settings rarely meet. This page gives no housing, feeding or health guidance for either species — consult local law, a veterinarian experienced with the species, and established welfare resources.",
    relatedComparisonSlugs: ["rabbit-vs-hare", "rabbit-vs-hamster", "guinea-pig-vs-hamster"],
    relatedHubPaths: ["/animal-encyclopedia/mammals", "/small-pets", "/fauna"],
    sourceIds: ["adw", "iucn", "britannica"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "horse-vs-zebra",
    animalA: { slug: "horse", name: "Horse" },
    animalB: { slug: "zebra", name: "Zebra" },
    title: "Horse vs Zebra",
    metaTitle: "Horse vs Zebra — Why Zebras Were Never Domesticated",
    metaDescription:
      "Horses and zebras are close equid relatives, but only one was domesticated. Temperament, social structure, stripes and body form explain why.",
    shortAnswer:
      "Both are equids in the same genus, but only the horse was domesticated. Zebras have a strong flight response, a less tractable temperament, and social structures that do not include the kind of stable following hierarchy domestication exploits. Physically, zebras are stockier with shorter legs, upright stiff manes, and stripes whose main documented function appears to be deterring biting flies.",
    primaryCategory: "mammals",
    secondaryCategories: ["pets-domestic", "taxonomy"],
    relationship: "domestic-vs-wild",
    confidence: "supported",
    searchIntent: "taxonomy",
    whyCompare:
      "The question of why zebras were never domesticated despite being close relatives of the horse is one of the clearest windows into what domestication actually requires.",
    centralDifference:
      "Horses and zebras are close equid relatives, but zebra temperament and social structure lack the traits domestication requires, so only the horse was domesticated.",
    dimensions: [
      {
        id: "domestication",
        label: "Domestication",
        animalAValue: "Domesticated thousands of years ago and central to transport, agriculture and warfare",
        animalBValue: "Never domesticated, despite repeated attempts",
        interpretation: "This is the central question the comparison exists to answer.",
      },
      {
        id: "temperament",
        label: "Temperament",
        animalAValue: "Trainable, with a flight response that can be conditioned",
        animalBValue: "Strong persistent flight response and a marked tendency to panic or fight when restrained",
        interpretation: "Constant predation pressure in Africa is generally credited with selecting for this.",
      },
      {
        id: "social",
        label: "Social structure",
        animalAValue: "Herd structure with followership that handlers can work with",
        animalBValue: "Harem or territorial systems without the stable following hierarchy domestication exploits",
        interpretation: "Domestication generally requires a social structure a human can insert themselves into.",
      },
      {
        id: "build",
        label: "Build",
        animalAValue: "Longer-legged with a flowing mane and a long-haired tail",
        animalBValue: "Stockier with shorter legs, an upright stiff mane and a tufted tail",
        interpretation: "Zebra proportions reflect an animal built for sudden acceleration rather than sustained carriage.",
      },
      {
        id: "stripes",
        label: "Stripes",
        animalAValue: "Absent; coat colour varies by breed",
        animalBValue: "Present, with patterns unique to each individual",
        interpretation: "Experimental evidence supports biting-fly deterrence as a principal function.",
      },
      {
        id: "range",
        label: "Range",
        animalAValue: "Worldwide as a domestic animal, with feral populations on several continents",
        animalBValue: "Sub-Saharan Africa",
        interpretation: "The horse's distribution is entirely a consequence of its domestication.",
      },
    ],
    narrative: {
      taxonomy:
        "Both belong to the genus Equus, which also contains asses and onagers. They are close enough to interbreed, producing sterile hybrids sometimes called zorses, but they differ in chromosome number, which is why the offspring cannot reproduce. Zebra covers three species, which differ in stripe pattern, range and social organisation.",
      identification:
        "Stripes settle it, and every zebra's pattern is unique to the individual. Beyond that, a zebra is stockier with proportionally shorter legs, an upright stiff mane rather than a flowing one, and a tufted tail rather than a long-haired one. Horses show enormous breed variation in size and build that zebras do not.",
      habitat:
        "Zebras occupy grassland, savanna, woodland and, for the mountain zebra, rocky upland across sub-Saharan Africa, and plains zebras undertake substantial seasonal migrations following rainfall and grazing. Horses exist worldwide as domestic animals, with feral populations established on several continents where they were introduced.",
      diet:
        "Both are grazers with digestive systems suited to processing large quantities of fibrous grass, and both are hindgut fermenters rather than ruminants — a system that handles low-quality forage in bulk rather than efficiently. Zebras often graze coarse grass ahead of other herbivores, which opens shorter growth for species that follow them.",
      behavior:
        "Plains zebras live in harem groups of a stallion with mares and foals, which combine into larger aggregations, while Grevy's zebras hold territories instead. Horses in feral conditions form comparable bands. The critical behavioural difference for domestication is the flight response: zebras are markedly more prone to panic and to defend themselves when restrained.",
      humanRelationship:
        "The horse transformed human transport, agriculture and warfare, and its domestication is among the most consequential in history. Zebras were repeatedly tested as draught and riding animals, particularly in colonial Africa, and the attempts consistently failed. Zebra species now face habitat loss, hunting and competition with livestock, with Grevy's zebra in particular seriously threatened.",
      whichIsWhich:
        "Striped, stocky, upright mane, tufted tail, in African grassland: zebra. Unstriped, longer-legged, flowing mane and long-haired tail, anywhere in the world: horse. They are close relatives, and the interesting difference is behavioural rather than visual.",
      conservation:
        "Plains zebras remain relatively numerous but are declining in places, mountain zebras are of concern, and Grevy's zebra is endangered with a small and fragmented population. Horses are not a conservation concern as domestic animals, though the Przewalski's horse — a separate wild species, not the ancestor of domestic horses — remains rare. Check the IUCN Red List per species.",
    },
    faqs: [
      {
        question: "Why were zebras never domesticated?",
        answer:
          "Chiefly temperament and social structure. Zebras have a strong persistent flight response and a marked tendency to panic or fight when restrained, which is generally attributed to sustained predation pressure in Africa. They also lack the stable following hierarchy that domestication typically exploits. Repeated attempts, particularly during the colonial period, produced individually trained animals but never a domesticated population.",
      },
      {
        question: "Why do zebras have stripes?",
        answer:
          "The best-supported explanation is deterrence of biting flies. Experiments in which horses were fitted with striped coats found that flies approached but failed to land properly, apparently because the pattern disrupts their visual control on approach. Thermoregulation and predator confusion have also been proposed and are less well supported. Each zebra's pattern is unique to the individual.",
      },
      {
        question: "Can horses and zebras interbreed?",
        answer:
          "Yes. Both are in the genus Equus and hybrids occur, usually called zorses. Because the two differ in chromosome number, the offspring are sterile, in the same way mules are. Hybrids typically show partial striping, often concentrated on the legs and hindquarters. They are produced deliberately rather than occurring naturally, since the two species do not share a range.",
      },
      {
        question: "Is the Przewalski's horse the ancestor of domestic horses?",
        answer:
          "Current evidence indicates not. It was long assumed to be the last truly wild ancestor, but genetic work has instead suggested it may descend from horses that were themselves domesticated early and subsequently returned to the wild. Either way it is a distinct lineage rather than the direct ancestor of modern domestic horses, and it remains rare after being restored from captive animals.",
      },
    ],
    commonConfusions: [
      "Assuming zebras are simply wild horses that could be tamed with enough effort.",
      "Treating zebra as a single species, when three exist with different social systems.",
      "Believing Przewalski's horse is the direct ancestor of domestic horses.",
    ],
    similarities: [
      "Both are equids in the genus Equus, close enough to produce hybrids.",
      "Both are grazers and hindgut fermenters processing large volumes of fibrous grass.",
      "Both live in social groups with foals following mares closely from birth.",
      "Both are highly alert prey animals with excellent hearing and wide field of vision.",
    ],
    keyDifferences: [
      "Horses were domesticated thousands of years ago; zebras never were.",
      "Zebras have a stronger flight response and are far less tractable when restrained.",
      "Zebras are stockier with upright stiff manes and tufted tails.",
      "Zebra stripes appear to deter biting flies, and each pattern is individually unique.",
      "Horses occur worldwide, while zebras are confined to sub-Saharan Africa.",
    ],
    relatedComparisonSlugs: ["pig-vs-wild-boar", "goat-vs-sheep", "cow-vs-african-buffalo"],
    relatedHubPaths: ["/animal-domestication", "/domestic-animals", "/animal-encyclopedia/mammals"],
    sourceIds: ["adw", "iucn", "britannica"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "goat-vs-sheep",
    animalA: { slug: "goat", name: "Goat" },
    animalB: { slug: "sheep", name: "Sheep" },
    title: "Goat vs Sheep",
    metaTitle: "Goat vs Sheep — Tail, Browsing vs Grazing & Behaviour",
    metaDescription:
      "Goats hold their tails up and browse shrubs; sheep hold theirs down and graze grass. Horns, upper lip, flocking behaviour and fleece compared.",
    shortAnswer:
      "Tail carriage is the quickest cue: goats hold their tails upright, while sheep hold theirs down. Beyond that, goats are browsers that seek out shrubs, leaves and bark and are independent and exploratory, whereas sheep are grazers that prefer grass and flock tightly under pressure. Goats usually have coarse hair and beards; most sheep breeds grow a woolly fleece.",
    primaryCategory: "pets-domestic",
    secondaryCategories: ["mammals", "look-alikes"],
    relationship: "close-relatives",
    confidence: "strong",
    searchIntent: "identification",
    whyCompare:
      "Both were domesticated in the same region at roughly the same time and are farmed side by side, yet they differ in feeding and temperament in ways that matter to anyone managing them.",
    centralDifference:
      "Goats are exploratory browsers that hold their tails up; sheep are grass-grazing flockers that hold their tails down.",
    dimensions: [
      {
        id: "tail",
        label: "Tail carriage",
        animalAValue: "Held upright, unless the animal is unwell or frightened",
        animalBValue: "Hangs downward",
        interpretation: "The fastest and most reliable cue at any distance.",
      },
      {
        id: "feeding",
        label: "Feeding style",
        animalAValue: "Browser — shrubs, leaves, bark and varied vegetation, often reaching upward",
        animalBValue: "Grazer — grass and low herbage, cropped close to the ground",
        interpretation: "Browsing lets goats use scrub and marginal land that sheep cannot.",
      },
      {
        id: "lip",
        label: "Upper lip",
        animalAValue: "Mobile and prehensile, used to select individual leaves",
        animalBValue: "Divided philtrum allowing very close cropping of short grass",
        interpretation: "Mouth structure matches feeding style precisely in both.",
      },
      {
        id: "horns",
        label: "Horns",
        animalAValue: "Usually narrow and swept backward, present in both sexes in many breeds",
        animalBValue: "Often absent in ewes; rams' horns typically curl in a spiral",
        interpretation: "Horn shape is a good confirming cue where horns are present.",
      },
      {
        id: "coat",
        label: "Coat",
        animalAValue: "Coarse hair, often with a beard; some breeds produce cashmere or mohair undercoat",
        animalBValue: "Woolly fleece in most breeds, requiring shearing",
        interpretation: "Fleece is the sheep's most economically significant product and needs annual management.",
      },
      {
        id: "behaviour",
        label: "Behaviour under pressure",
        animalAValue: "Independent and exploratory; scatters or climbs rather than bunching",
        animalBValue: "Flocks tightly and moves as a group",
        interpretation: "Flocking is why sheep can be herded by dogs in a way goats cannot.",
      },
    ],
    narrative: {
      taxonomy:
        "Both are bovids in the subfamily Caprinae and are close relatives, but they belong to different genera and have different chromosome numbers. Hybrids are occasionally reported but are rare and usually not viable. Both were domesticated in South-West Asia at broadly similar times, among the earliest livestock alongside cattle and pigs.",
      identification:
        "Tail carriage first: up means goat, down means sheep. Then coat and beard — goats usually have coarse hair and often a beard, while most sheep carry a woolly fleece. Horn shape confirms it, being narrow and swept back in goats and spirally curled in rams. Behaviour helps too, since a tightly bunched group is almost certainly sheep.",
      habitat:
        "Both are kept worldwide across an enormous range of conditions. Goats handle rough, steep, arid and scrubby ground that sheep use poorly, and they climb readily, which is why they are so common on marginal land. Sheep suit grassland and pasture. Feral populations of both exist, and feral goats in particular cause substantial damage to island vegetation.",
      diet:
        "Goats are browsers, selecting leaves, shoots, bark and varied vegetation and using a mobile prehensile upper lip to pick individual items, often standing on hind legs to reach higher. Sheep are grazers, cropping grass close to the ground with a divided upper lip. Both are ruminants, and both can degrade vegetation severely when stocked too heavily.",
      behavior:
        "Sheep flock tightly, following one another and moving as a group under pressure, which is precisely the behaviour that makes herding with dogs effective. Goats are more independent and exploratory, scattering rather than bunching and investigating fences and obstacles persistently. Goats are also notable climbers, reaching places that surprise people unfamiliar with them.",
      humanRelationship:
        "Both are among the earliest domesticated livestock and both provide milk, meat, hide and fibre. Sheep are the more significant wool producers, while goats produce cashmere and mohair from undercoat in specific breeds. Goats' browsing has made them valuable on marginal land and simultaneously destructive where they are introduced to islands or overstocked.",
      whichIsWhich:
        "Tail up, beard, coarse hair, browsing a hedge or standing on its hind legs to reach leaves: goat. Tail down, woolly fleece, head down cropping grass, bunched with others: sheep. Both are caprines, and both were domesticated in the same region at broadly the same time.",
      petContext:
        "Both are livestock rather than companion animals, and both are increasingly kept in smallholdings where their requirements are underestimated. Both are herd animals that should not be kept alone, both need secure fencing — goats especially, given their climbing and testing of barriers — and both need appropriate grazing or browse, shelter and routine health management. Care decisions belong with a veterinarian and local livestock regulations.",
    },
    faqs: [
      {
        question: "What is the quickest way to tell a goat from a sheep?",
        answer:
          "Look at the tail. Goats hold their tails upright, unless unwell or frightened, while sheep hold theirs hanging down. It works at a distance and needs no close inspection. Coat confirms it — goats usually have coarse hair and often a beard, while most sheep carry a woolly fleece — and horn shape helps where horns are present.",
      },
      {
        question: "Why can sheep be herded by dogs but goats less easily?",
        answer:
          "Because of flocking. Sheep respond to pressure by bunching tightly and moving as a group, which is exactly the behaviour a herding dog exploits. Goats respond by scattering, climbing or standing their ground, and they investigate and test barriers rather than following. That independence makes goats harder to move as a unit and considerably harder to fence.",
      },
      {
        question: "Can goats and sheep interbreed?",
        answer:
          "Very rarely, and successfully almost never. They belong to different genera and have different chromosome numbers, so pregnancies from such matings usually fail. A small number of live hybrids have been reported and verified, but they are exceptional. Goats and sheep are close relatives within the same subfamily, not close enough for reliable hybridisation.",
      },
      {
        question: "Why are goats better on rough ground?",
        answer:
          "Because they browse rather than graze. Goats select leaves, shoots and bark from shrubs and trees using a mobile prehensile upper lip, and they climb readily, so scrubby, steep and arid land that offers little grass still offers them food. Sheep depend on grass and low herbage, so the same ground supports them poorly. It is a difference in feeding niche rather than hardiness alone.",
      },
    ],
    commonConfusions: [
      "Assuming any horned livestock animal on rough ground is a goat.",
      "Expecting all sheep to have thick fleece, when hair breeds exist.",
      "Treating the two as interchangeable in fencing and management, when goats test barriers far more.",
    ],
    similarities: [
      "Both are caprine bovids domesticated in South-West Asia among the earliest livestock.",
      "Both are ruminants providing milk, meat, hide and fibre.",
      "Both are herd animals that should not be kept alone.",
      "Both can degrade vegetation severely when stocked too heavily.",
    ],
    keyDifferences: [
      "Goats hold their tails upright; sheep hold theirs down.",
      "Goats browse shrubs and leaves, while sheep graze grass close to the ground.",
      "Most sheep breeds grow a woolly fleece, whereas goats have coarse hair and often a beard.",
      "Sheep flock tightly under pressure, but goats scatter and climb.",
      "Goat horns are narrow and swept back, while rams' horns typically curl in a spiral.",
    ],
    petBoundary:
      "Both are livestock with legal, housing, fencing and health requirements that differ by jurisdiction, and neither should be kept alone. This page gives no husbandry, feeding, breeding or veterinary guidance — consult a veterinarian, local livestock regulations and established agricultural extension resources.",
    relatedComparisonSlugs: ["pig-vs-wild-boar", "cow-vs-african-buffalo", "horse-vs-zebra"],
    relatedHubPaths: ["/domestic-animals", "/animal-domestication", "/animal-encyclopedia/mammals"],
    sourceIds: ["adw", "britannica", "smithsonian"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "pig-vs-wild-boar",
    animalA: { slug: "pig", name: "Pig" },
    animalB: { slug: "wild-boar", name: "Wild Boar" },
    title: "Pig vs Wild Boar",
    metaTitle: "Pig vs Wild Boar — Domestication, Tusks, Coat & Feral Pigs",
    metaDescription:
      "Domestic pigs descend from wild boar. Body shape, coat, tusks, litter size and behaviour differ — and feral pigs revert toward boar traits within generations.",
    shortAnswer:
      "Domestic pigs descend from the wild boar, so this is a domestication comparison rather than one between separate species. Selective breeding produced heavier, faster-growing animals with shorter legs and snouts, sparser coats and larger litters. Wild boar are leaner and longer-legged with dense bristly coats, prominent tusks, and striped piglets. Feral pigs revert toward boar-like traits within a few generations.",
    primaryCategory: "pets-domestic",
    secondaryCategories: ["mammals", "taxonomy"],
    relationship: "domestic-vs-wild",
    confidence: "strong",
    searchIntent: "taxonomy",
    whyCompare:
      "It is one of the clearest cases of what domestication changes and what it does not, made vivid by how quickly feral pigs revert toward the wild form.",
    centralDifference:
      "Domestic pigs are the domesticated form of the wild boar, bred for growth and fecundity, and feral populations revert toward boar-like traits within generations.",
    dimensions: [
      {
        id: "relationship",
        label: "Relationship",
        animalAValue: "The domesticated form of the wild boar",
        animalBValue: "The wild ancestor",
        interpretation: "Same species lineage, not two separate animals.",
      },
      {
        id: "build",
        label: "Build",
        animalAValue: "Heavier-bodied with shorter legs and a shorter snout in most breeds",
        animalBValue: "Leaner and longer-legged with a long snout and high shoulders",
        interpretation: "Domestic build reflects selection for growth rate and meat yield, not mobility.",
      },
      {
        id: "coat",
        label: "Coat",
        animalAValue: "Sparse, often pale or pink, varying widely by breed",
        animalBValue: "Dense and bristly, brown to black, with a mane along the back",
        interpretation: "Coat is one of the first traits to revert in feral populations.",
      },
      {
        id: "tusks",
        label: "Tusks",
        animalAValue: "Reduced or removed in managed animals",
        animalBValue: "Prominent, continuously growing and self-sharpening in males",
        interpretation: "Tusks are used in male competition and defence.",
      },
      {
        id: "piglets",
        label: "Piglets",
        animalAValue: "Plain-coloured, in larger litters",
        animalBValue: "Striped, in smaller litters",
        interpretation: "The striped coat is camouflage and is lost within the first months.",
      },
      {
        id: "reversion",
        label: "Behaviour when feral",
        animalAValue: "Reverts toward wild traits — bristles, tusks and leaner build — within a few generations",
        animalBValue: "Already wild",
        interpretation: "Rapid reversion shows domestication traits are shallow rather than fixed.",
      },
    ],
    narrative: {
      taxonomy:
        "Domestic pigs descend from the wild boar and are generally treated as a domesticated form of the same species. Domestication occurred independently in more than one region, and there has been repeated gene flow between domestic and wild populations since, so the two are not cleanly separated even genetically.",
      identification:
        "Wild boar are leaner and longer-legged with high shoulders sloping to lower hindquarters, dense bristly dark coats with a mane along the back, long snouts and visible tusks in males. Domestic pigs are heavier and shorter-legged with sparse coats. Piglet coat settles it: striped means wild boar or a feral animal with boar ancestry.",
      habitat:
        "Wild boar occupy forest, woodland, scrub and farmland across Eurasia and North Africa and have been introduced widely elsewhere, expanding rapidly in many regions. Domestic pigs are kept worldwide, and feral pig populations descended from escaped or released domestic animals are established on several continents, often mixed with boar ancestry.",
      diet:
        "Both are omnivores taking roots, tubers, fungi, fallen fruit, invertebrates, eggs and carrion, and both root extensively in soil with the snout. That rooting turns over ground substantially, which can benefit woodland regeneration in native systems and cause severe damage to crops, pasture and native vegetation where the animals are introduced.",
      behavior:
        "Wild boar are largely nocturnal where hunted, live in matriarchal groups of females and young called sounders while mature males are solitary, and are highly alert. Domestic pigs retain much of the underlying behavioural repertoire, including rooting, wallowing and complex social interaction, which is why enrichment matters in husbandry.",
      humanRelationship:
        "Pigs are among the most numerous farmed mammals worldwide and are also used extensively in biomedical research. Wild boar and feral pigs are simultaneously game animals, agricultural pests and, in some regions, serious invasive species causing substantial crop and ecosystem damage. They also carry diseases of significant concern to livestock, including African swine fever.",
      whichIsWhich:
        "Lean, long-legged, dark and bristly with a shoulder mane and visible tusks, in woodland: wild boar. Heavier, shorter-legged, sparse-coated, on a farm: domestic pig. Striped piglets indicate wild boar or a feral animal carrying boar ancestry, and adults of feral populations often look intermediate.",
      petContext:
        "Pigs are sometimes kept as companion animals, including so-called miniature breeds, and this frequently goes wrong: the animals grow far larger than buyers expect, are highly intelligent and need substantial enrichment and space, and are subject to livestock regulations in many jurisdictions. Keeping wild boar is restricted or prohibited in many places. Care decisions belong with a veterinarian and local regulations.",
    },
    faqs: [
      {
        question: "Are domestic pigs and wild boar the same species?",
        answer:
          "Effectively yes. Domestic pigs descend from the wild boar and are generally treated as a domesticated form of the same species. Domestication happened independently in more than one region, and there has been repeated interbreeding between domestic and wild populations since, so the two are not cleanly separated genetically either. They interbreed readily wherever they meet.",
      },
      {
        question: "Why do feral pigs start to look like wild boar?",
        answer:
          "Because the domestic traits are shallow. Within a few generations of living wild, feral pigs typically develop denser bristly coats, longer snouts, leaner and more muscular builds and more prominent tusks. Selection in the wild rewards the ancestral form immediately, and the underlying genetic variation is still present. It is one of the clearest illustrations of how reversible domestication traits can be.",
      },
      {
        question: "Why are wild boar piglets striped?",
        answer:
          "Camouflage. The pale longitudinal stripes break up the outline of a small animal lying still among vegetation and leaf litter, and they fade within the first months as the piglet becomes mobile enough to rely on the group and on flight instead. Domestic piglets have lost the pattern, so striping is a reliable indicator of wild boar or feral ancestry.",
      },
      {
        question: "Do pigs make good pets?",
        answer:
          "They are frequently acquired as pets and frequently surrendered. So-called miniature breeds routinely grow far larger than buyers expect, and pigs are highly intelligent animals needing substantial space, rooting opportunity and enrichment. Many jurisdictions also treat them as livestock, with regulations on housing, movement and what they may be fed. This page does not advise on keeping them.",
      },
    ],
    commonConfusions: [
      "Treating domestic pigs and wild boar as separate species.",
      "Assuming miniature pig breeds stay small.",
      "Expecting feral pigs to remain domestic in appearance and behaviour.",
    ],
    similarities: [
      "Both belong to the same species lineage and interbreed readily.",
      "Both are omnivores that root extensively in soil with the snout.",
      "Both are intelligent and socially complex, with a shared behavioural repertoire.",
      "Both wallow in mud, which regulates temperature and helps control parasites.",
    ],
    keyDifferences: [
      "Domestic pigs are the domesticated form; wild boar are the wild ancestor.",
      "Wild boar are leaner and longer-legged with high shoulders and long snouts.",
      "Wild boar have dense bristly coats and prominent tusks in males.",
      "Wild boar piglets are striped, while domestic piglets are plain.",
      "Domestic breeds produce larger litters and grow faster than wild boar.",
    ],
    petBoundary:
      "Pigs are subject to livestock regulation in many jurisdictions, including rules on what they may be fed, and miniature breeds routinely grow far larger than expected. Keeping wild boar is restricted or prohibited in many places. This page gives no husbandry or veterinary guidance — consult local regulations and a veterinarian experienced with pigs.",
    relatedComparisonSlugs: ["goat-vs-sheep", "horse-vs-zebra", "cow-vs-african-buffalo"],
    relatedHubPaths: ["/animal-domestication", "/domestic-animals", "/animal-encyclopedia/mammals"],
    sourceIds: ["adw", "britannica", "iucn"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "cow-vs-african-buffalo",
    animalA: { slug: "cow", name: "Cow" },
    animalB: { slug: "african-buffalo", name: "African Buffalo" },
    title: "Cow vs African Buffalo",
    metaTitle: "Cow vs African Buffalo — Why Buffalo Were Never Domesticated",
    metaDescription:
      "Cattle were domesticated from the aurochs; African buffalo never were. Horns, temperament, herd defence and disease reservoirs compared.",
    shortAnswer:
      "Cattle descend from the aurochs, a Eurasian wild ox, while the African buffalo is a separate genus that was never domesticated — its temperament and herd defence made it unsuitable. Physically, mature male African buffalo have heavy horns fused across the forehead into a boss, which cattle never develop. African buffalo are also a significant reservoir for diseases affecting livestock.",
    primaryCategory: "pets-domestic",
    secondaryCategories: ["mammals", "taxonomy"],
    relationship: "domestic-vs-wild",
    confidence: "strong",
    searchIntent: "taxonomy",
    whyCompare:
      "Both are large bovids and the African buffalo is often assumed to be simply a wild cow, which obscures why one lineage was domesticated and the other never could be.",
    centralDifference:
      "Cattle were domesticated from the aurochs, while the African buffalo is a separate genus whose temperament and herd defence prevented domestication.",
    dimensions: [
      {
        id: "ancestry",
        label: "Ancestry",
        animalAValue: "Domesticated from the aurochs, a Eurasian wild ox now extinct",
        animalBValue: "A separate African genus, never domesticated",
        interpretation: "The two are relatives within Bovidae rather than domestic and wild forms of one animal.",
      },
      {
        id: "horns",
        label: "Horns",
        animalAValue: "Variable by breed, often absent through breeding or disbudding",
        animalBValue: "Heavy and sweeping, fused across the forehead into a boss in mature males",
        interpretation: "The boss is diagnostic and forms only in fully mature African buffalo bulls.",
      },
      {
        id: "temperament",
        label: "Temperament",
        animalAValue: "Tractable enough for handling, milking and working over millennia",
        animalBValue: "Highly defensive, with strong collective herd response to threats",
        interpretation: "Collective defence is effective against predators and makes handling impractical.",
      },
      {
        id: "herd-behaviour",
        label: "Herd behaviour",
        animalAValue: "Follows and can be driven, which is what makes herding practical",
        animalBValue: "Responds to threat as a coordinated group rather than dispersing or following",
        interpretation: "Domestication generally needs a herd that can be led, not one that closes ranks.",
      },
      {
        id: "habitat",
        label: "Habitat",
        animalAValue: "Kept worldwide across a very wide range of conditions",
        animalBValue: "Sub-Saharan African savanna, floodplain, swamp and forest, tied to water",
        interpretation: "African buffalo must drink daily, which shapes their movements closely.",
      },
      {
        id: "disease",
        label: "Disease significance",
        animalAValue: "Susceptible to several diseases the buffalo carries",
        animalBValue: "A significant wildlife reservoir for diseases including bovine tuberculosis and foot-and-mouth",
        interpretation: "This is a major reason contact between the two is managed carefully in Africa.",
      },
    ],
    narrative: {
      taxonomy:
        "Domestic cattle descend from the aurochs, a large wild ox that ranged across Eurasia and North Africa and became extinct in the seventeenth century. The African buffalo belongs to a separate genus within the same family. They are relatives within Bovidae but not close enough to interbreed, and the African buffalo has no domesticated form anywhere.",
      identification:
        "Horns settle it in mature animals: a heavy boss fused across the forehead indicates an adult male African buffalo, and no cattle breed develops one. African buffalo are also uniformly dark with a heavier build and a distinctly wild bearing, while cattle vary enormously in colour, size and horn shape across breeds.",
      habitat:
        "Cattle are kept worldwide from arid rangeland to intensive indoor systems. African buffalo occupy savanna, floodplain, swamp and forest across sub-Saharan Africa and are strongly tied to water, needing to drink daily, which constrains how far they range from rivers and pans and concentrates them in the dry season.",
      diet:
        "Both are grazing ruminants consuming large quantities of grass, and both shape vegetation structure where they occur in numbers. African buffalo take coarser grass than many co-occurring grazers, opening shorter growth for species that follow them. Cattle grazing is managed, and overstocking is a significant driver of land degradation in many regions.",
      behavior:
        "African buffalo herds respond to threats collectively, and groups have been recorded turning on predators to recover a calf. Mature bulls often form separate bachelor groups. Cattle retain herd behaviour and social structure but have been selected over thousands of years for tractability, which is what allows handling, milking and draught work.",
      humanRelationship:
        "Cattle are among the most economically significant domestic animals in the world, providing milk, meat, hide and draught power, and they carry considerable cultural weight in many societies. African buffalo are important game and wildlife-viewing animals and a serious management concern as a disease reservoir, which is why buffer zones and fencing separate them from livestock in several countries.",
      whichIsWhich:
        "Fused horn boss, uniformly dark, in African savanna near water: African buffalo. Variable colour, breed-specific horn shape or none, in managed pasture or rangeland: cattle. The African buffalo is not a wild cow — the wild ancestor of cattle was the aurochs, and it no longer exists.",
      conservation:
        "African buffalo remain widespread but are declining in places through habitat loss, hunting and disease, with populations concentrated in protected areas. Cattle are not a conservation concern as a domestic species, though the aurochs from which they descend is extinct. Check the IUCN Red List for current African buffalo status.",
    },
    faqs: [
      {
        question: "Is the African buffalo a wild cow?",
        answer:
          "No. Cattle were domesticated from the aurochs, a Eurasian wild ox that became extinct in the seventeenth century, while the African buffalo belongs to a separate genus and was never domesticated. They are relatives within the same family but not close enough to interbreed. The wild ancestor of cattle no longer exists, which is part of why the buffalo is mistaken for it.",
      },
      {
        question: "Why were African buffalo never domesticated?",
        answer:
          "Temperament and herd behaviour. African buffalo are highly defensive and respond to threats as a coordinated group rather than dispersing or following, which makes them extremely difficult to handle and drive. Domestication generally requires a herd that can be led and animals that tolerate close human management. The Asian water buffalo, a different species, was domesticated successfully.",
      },
      {
        question: "What is the boss on a buffalo's head?",
        answer:
          "It is the fused base of the horns, forming a continuous shield of bone across the forehead in mature African buffalo bulls. It develops with age and is used in head-to-head contests between males, and it also provides substantial protection. No cattle breed develops one, which makes it a reliable diagnostic feature in fully mature animals.",
      },
      {
        question: "Why are African buffalo a problem for cattle farming?",
        answer:
          "They are a significant wildlife reservoir for diseases affecting livestock, including bovine tuberculosis and foot-and-mouth disease. Contact between buffalo and cattle can transmit infection, with serious consequences for herds and for export trade. This is why several southern African countries maintain veterinary fences and buffer zones separating wildlife areas from livestock farming land.",
      },
    ],
    commonConfusions: [
      "Describing the African buffalo as a wild cow, when cattle descend from the extinct aurochs.",
      "Assuming any large bovid can be domesticated with sufficient effort.",
      "Confusing the African buffalo with the Asian water buffalo, which was domesticated.",
    ],
    similarities: [
      "Both are large grazing ruminants in the family Bovidae.",
      "Both live in herds with social structure and both are protective of calves.",
      "Both consume large quantities of grass and shape vegetation where numerous.",
      "Both are susceptible to several of the same livestock diseases.",
    ],
    keyDifferences: [
      "Cattle were domesticated from the aurochs; African buffalo never were.",
      "Mature male African buffalo have horns fused into a forehead boss.",
      "African buffalo respond to threats collectively rather than following or dispersing.",
      "African buffalo must drink daily, which constrains their movements.",
      "African buffalo are a significant wildlife reservoir for livestock diseases.",
    ],
    safetyBoundary:
      "African buffalo are large, powerful and highly defensive, and should never be approached. This page gives no guidance on encounters or viewing distances — follow park signage and the instructions of local wildlife authorities.",
    petBoundary:
      "Cattle are livestock, not companion animals, and keeping them carries legal, land, housing, disease-reporting and welfare obligations that differ by jurisdiction. African buffalo are wild animals and are not kept as livestock anywhere. This page gives no husbandry, feeding, breeding or veterinary guidance — consult a veterinarian, your national animal health authority and local agricultural regulations.",
    relatedComparisonSlugs: ["bison-vs-african-buffalo", "goat-vs-sheep", "horse-vs-zebra"],
    relatedHubPaths: ["/domestic-animals", "/animal-domestication", "/wildlife"],
    sourceIds: ["adw", "iucn", "britannica"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "goldfish-vs-koi",
    animalA: { slug: "goldfish", name: "Goldfish" },
    animalB: { slug: "koi", name: "Koi" },
    title: "Goldfish vs Koi",
    metaTitle: "Goldfish vs Koi — Barbels, Adult Size & Different Ancestors",
    metaDescription:
      "Koi have barbels at the mouth and grow far larger; goldfish have none. Different wild ancestors, different space requirements, and why both outgrow tanks.",
    shortAnswer:
      "Look for barbels. Koi have a pair of fleshy whisker-like barbels at each side of the mouth, and goldfish have none — the single most reliable way to tell young fish apart. They also descend from different wild ancestors: goldfish from a wild carp species domesticated in China, koi from the common carp. Koi grow far larger, commonly reaching well over half a metre.",
    primaryCategory: "fish-marine",
    secondaryCategories: ["pets-domestic"],
    relationship: "commonly-confused",
    confidence: "strong",
    searchIntent: "identification",
    whyCompare:
      "Young koi and goldfish look genuinely similar and are frequently sold side by side, and the adult size difference has serious consequences for anyone who buys the wrong one.",
    centralDifference:
      "Koi have barbels at the mouth and grow far larger than goldfish, and the two descend from different wild carp ancestors.",
    dimensions: [
      {
        id: "barbels",
        label: "Barbels",
        animalAValue: "Absent",
        animalBValue: "A pair of fleshy barbels at each side of the mouth",
        interpretation: "The most reliable cue, and it works on juveniles when size does not.",
      },
      {
        id: "adult-size",
        label: "Adult size",
        animalAValue: "Varies by variety, commonly 15–30 cm with good conditions",
        animalBValue: "Commonly 60 cm or more",
        interpretation: "Adult size is the practical difference that matters most and is routinely underestimated.",
        caveat: "Growth in both depends heavily on water volume, quality, temperature and diet.",
      },
      {
        id: "ancestor",
        label: "Wild ancestor",
        animalAValue: "A wild carp species domesticated in China over a thousand years ago",
        animalBValue: "The common carp, selectively bred for colour in Japan",
        interpretation: "Different domestication histories, though both are cyprinids.",
      },
      {
        id: "body-shape",
        label: "Body shape",
        animalAValue: "Varies enormously by variety, from slim to extremely rounded fancy forms",
        animalBValue: "Consistently torpedo-shaped and streamlined",
        interpretation: "Some fancy goldfish varieties have body shapes that affect swimming and welfare.",
      },
      {
        id: "environment",
        label: "Typical environment",
        animalAValue: "Ponds and, for some varieties, large aquaria",
        animalBValue: "Ponds only — koi outgrow any practical aquarium",
        interpretation: "Housing requirements differ by an order of magnitude.",
      },
      {
        id: "lifespan",
        label: "Typical lifespan",
        animalAValue: "Commonly 10–15 years, with well-kept fish living longer",
        animalBValue: "Commonly several decades",
        interpretation: "Koi routinely outlive the arrangements made for them when bought.",
        caveat: "Exceptional individual ages are widely reported and often poorly documented.",
      },
    ],
    narrative: {
      taxonomy:
        "Both are cyprinids — the carp and minnow family — but they descend from different wild species. Goldfish were domesticated in China from a wild carp over a thousand years ago, initially for colour mutations observed in food fish. Koi are ornamental common carp, developed in Japan by selecting colour variants of fish kept for food.",
      identification:
        "Barbels are decisive. Koi have a pair of fleshy whisker-like barbels at each side of the mouth; goldfish have none at any age. This matters because juvenile koi and goldfish look very similar and are often sold together, and the person who cannot tell them apart may be buying a fish that will outgrow their pond entirely.",
      habitat:
        "Both are pond fish in practice. Goldfish tolerate a wide temperature range and lower oxygen levels than many species, which is part of why they became so widespread. Koi need substantially more water volume, good filtration and depth, and are unsuitable for aquaria at adult size. Both have established damaging feral populations where released.",
      diet:
        "Both are omnivorous bottom-oriented feeders taking plant material, invertebrates, detritus and prepared foods, and both root through substrate, which stirs sediment and clouds water. In feral populations this rooting behaviour damages aquatic vegetation and degrades water quality, one of the main reasons released ornamental carp are so ecologically harmful.",
      behavior:
        "Both are social and generally peaceable, and both learn to associate people with food readily, with koi in particular becoming notably responsive to their keepers. Both grow throughout life, with growth rate strongly influenced by water volume, quality and temperature — which is the source of the persistent myth that they only grow to the size of their container.",
      humanRelationship:
        "Both are among the most widely kept ornamental fish in the world, and both carry substantial cultural significance, koi especially in Japan where specific varieties are highly valued. Both are also serious invasive species where released, and releasing ornamental fish into wild water is illegal in many jurisdictions for exactly that reason.",
      whichIsWhich:
        "Barbels at the mouth, torpedo-shaped, large: koi. No barbels, body shape varying from slim to very rounded: goldfish. If you are buying a small fish and cannot see barbels clearly, that is the question to resolve before purchase rather than after.",
      petContext:
        "The practical issue with both is adult size and lifespan. Koi require pond volumes and filtration well beyond what most buyers anticipate and can live for decades, while goldfish also outgrow small bowls and tanks and live far longer than commonly assumed. Neither should ever be released into wild water. This page gives no stocking, water parameter, feeding or health guidance — consult species-specific aquatic care references and an aquatic veterinarian.",
      lifespan:
        "Goldfish commonly live ten to fifteen years and often considerably longer under good conditions, while koi routinely live for several decades. Both figures are far higher than most buyers expect, and both depend heavily on water volume, quality and diet. Exceptional individual ages are widely reported for koi and are frequently poorly documented.",
    },
    faqs: [
      {
        question: "How do I tell a young koi from a goldfish?",
        answer:
          "Look at the mouth. Koi have a pair of short fleshy barbels at each side of the mouth, and goldfish have none at any age or size. It is the only reliable cue on juveniles, since colour and body shape overlap considerably when the fish are small. Getting it right at purchase matters, because an unrecognised koi will outgrow a goldfish pond entirely.",
      },
      {
        question: "Do goldfish only grow to the size of their tank?",
        answer:
          "No, and the belief causes real harm. Growth is affected by water volume, quality, temperature and diet, and stunted growth in a small container reflects poor conditions and accumulated waste rather than a natural adjustment. Fish kept that way frequently show internal organ growth that continues regardless, and shortened lifespans. Housing decisions should follow the species' adult size.",
      },
      {
        question: "Are koi and goldfish the same species?",
        answer:
          "No. Both are cyprinids, but goldfish were domesticated in China from a wild carp species, while koi are ornamental common carp developed in Japan. They can interbreed, producing offspring that are usually sterile and typically drab rather than attractively coloured, which is one reason keeping the two together is discouraged where breeding matters.",
      },
      {
        question: "Why is releasing them into wild water so damaging?",
        answer:
          "Both are hardy, long-lived, prolific and tolerant of poor conditions, and both root through sediment while feeding, which uproots aquatic plants and clouds water. Feral populations have degraded wetlands and waterways on several continents. Releasing ornamental fish is illegal in many jurisdictions, and unwanted fish should be rehomed through aquatic retailers or societies instead.",
      },
    ],
    commonConfusions: [
      "Believing fish grow only to the size of their container.",
      "Assuming any orange pond fish is a goldfish.",
      "Underestimating koi adult size and lifespan at the point of purchase.",
    ],
    similarities: [
      "Both are cyprinid fish domesticated from wild carp for ornamental colour.",
      "Both are omnivorous bottom-oriented feeders that root through substrate.",
      "Both are long-lived and continue growing throughout life.",
      "Both are damaging invasive species where released into wild water.",
    ],
    keyDifferences: [
      "Koi have barbels at the mouth; goldfish have none.",
      "Koi grow far larger, commonly exceeding 60 cm.",
      "The two descend from different wild carp ancestors.",
      "Koi are consistently torpedo-shaped, while goldfish varieties vary enormously in body form.",
      "Koi commonly live for several decades, longer than most goldfish.",
    ],
    petBoundary:
      "Both outgrow the containers they are commonly sold for and both live far longer than buyers usually expect, and neither should ever be released into wild water. This page gives no stocking densities, water parameters, feeding quantities or health guidance — consult species-specific aquatic care references and a veterinarian experienced with fish.",
    relatedComparisonSlugs: ["betta-fish-vs-guppy", "salmon-vs-trout", "eel-vs-electric-eel"],
    relatedHubPaths: ["/aquarium-care", "/fish", "/domestic-animals"],
    sourceIds: ["adw", "britannica", "worms"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "betta-fish-vs-guppy",
    animalA: { slug: "betta-fish", name: "Betta Fish" },
    animalB: { slug: "guppy", name: "Guppy" },
    title: "Betta Fish vs Guppy",
    metaTitle: "Betta vs Guppy — Air Breathing, Aggression & Live Birth",
    metaDescription:
      "Bettas breathe air through a labyrinth organ and males cannot be housed together; guppies are social livebearers that reproduce prolifically. Compared in detail.",
    shortAnswer:
      "Bettas breathe atmospheric air through a labyrinth organ and must reach the surface, and males are highly territorial toward each other. Guppies are social schooling fish that bear live young rather than laying eggs, and they reproduce so readily that population control becomes the main practical issue. Both are small tropical freshwater fish, and their temperaments are close to opposite.",
    primaryCategory: "fish-marine",
    secondaryCategories: ["pets-domestic", "behavior-adaptations"],
    relationship: "pet-decision",
    confidence: "strong",
    searchIntent: "pet-decision",
    whyCompare:
      "Both are among the most commonly kept beginner aquarium fish and are sold side by side, yet their social requirements and reproduction differ so much that the care implications diverge immediately.",
    centralDifference:
      "Bettas are air-breathing, territorial fish that cannot be housed with other males; guppies are social livebearers that reproduce prolifically.",
    dimensions: [
      {
        id: "breathing",
        label: "Breathing",
        animalAValue: "Has a labyrinth organ allowing atmospheric air to be used; must reach the surface",
        animalBValue: "Gills only",
        interpretation: "Surface access is a hard requirement for bettas, not an optional extra.",
      },
      {
        id: "sociality",
        label: "Social behaviour",
        animalAValue: "Males are highly territorial and cannot be housed together",
        animalBValue: "Social and shoaling, kept in groups",
        interpretation: "Opposite requirements, which is why the shared beginner-fish label misleads.",
      },
      {
        id: "reproduction",
        label: "Reproduction",
        animalAValue: "Egg-laying, with the male building a bubble nest and guarding the eggs",
        animalBValue: "Livebearer — young are born free-swimming",
        interpretation: "Guppy reproduction is so rapid that population control becomes the main issue.",
      },
      {
        id: "appearance",
        label: "Appearance",
        animalAValue: "Males have long flowing fins and intense colour; females are shorter-finned",
        animalBValue: "Males are small and brightly patterned; females are larger and plainer",
        interpretation: "Both are strongly dimorphic, with ornamentation concentrated in males.",
      },
      {
        id: "origin",
        label: "Wild origin",
        animalAValue: "Shallow slow waters and rice paddies of South-East Asia",
        animalBValue: "Fresh and brackish waters of north-eastern South America",
        interpretation: "Both have been introduced far beyond their native ranges through release.",
      },
      {
        id: "lifespan",
        label: "Typical lifespan",
        animalAValue: "Commonly around 2–4 years",
        animalBValue: "Commonly around 1–3 years",
        interpretation: "Both are short-lived, and both are frequently kept in conditions that shorten this further.",
        caveat: "Figures vary considerably with water quality, temperature, genetics and diet.",
      },
    ],
    narrative: {
      taxonomy:
        "They are not close relatives. Bettas are anabantoids, the labyrinth fish, related to gouramis. Guppies are poeciliids, the livebearing toothcarps, related to mollies, platies and swordtails. The two families differ fundamentally in breathing and reproduction, which is exactly where the care implications diverge.",
      identification:
        "No confusion arises between adults: a male betta is unmistakable with long flowing fins and intense colour, while guppies are much smaller with a distinctive fan-shaped tail in ornamental males. Females of both are plainer, but a female betta is still noticeably larger and more solid-bodied than any guppy.",
      habitat:
        "Wild bettas occupy shallow, warm, slow or still water including rice paddies and floodplain, where oxygen levels are low — the conditions that made air breathing advantageous. Guppies occupy fresh and brackish streams and pools in north-eastern South America. Both have been introduced widely elsewhere, guppies deliberately for mosquito control with mixed and sometimes harmful results.",
      diet:
        "Both are micropredators taking small invertebrates, insect larvae and zooplankton in the wild, and both are often fed inappropriately in captivity on plant-based flake alone. Bettas in particular are substantially carnivorous. Specific feeding decisions are a matter for species-specific aquatic care references rather than a comparison page.",
      behavior:
        "Male bettas display intensely to rivals, flaring gill covers and spreading fins, and will fight if housed together — the trait behind their historical use in staged contests, which is illegal in many jurisdictions. Guppies shoal, with males performing continuous courtship displays to females. Female guppies can store sperm and produce successive broods from a single mating.",
      humanRelationship:
        "Both are among the most traded ornamental fish in the world, and both are commonly sold with misleading care information — bettas notoriously in tiny unheated containers that do not meet their needs. Guppies introduced for mosquito control have established feral populations that displace native fish in several regions. Neither should be released into wild water.",
      whichIsWhich:
        "Larger, long flowing fins, intense colour, coming to the surface to gulp air, alone: betta. Small, fan-tailed, brightly patterned, in a group, with new young appearing regularly: guppy. Both are tropical freshwater fish, and their social requirements are essentially opposite.",
      petContext:
        "The two are not interchangeable beginner fish. Male bettas must be housed apart from other males and need heated water with surface access; guppies need company and reproduce so readily that population control becomes a planning issue from the outset. Both need heated, filtered, cycled water rather than an unheated bowl. This page gives no tank sizes, water parameters, feeding quantities or health guidance — consult species-specific aquatic references and a veterinarian experienced with fish.",
    },
    faqs: [
      {
        question: "Why do bettas come to the surface for air?",
        answer:
          "They have a labyrinth organ, a folded structure above the gills that allows atmospheric oxygen to be absorbed directly. It evolved for life in warm, shallow, oxygen-poor water such as rice paddies, and it means a betta must be able to reach the surface — a covered or overfilled container without air space is genuinely dangerous. Guppies have gills only and cannot use air this way.",
      },
      {
        question: "Can male bettas be kept together?",
        answer:
          "No. Males are strongly territorial toward one another and will fight, often causing serious injury or death. This is the trait behind the species' historical use in staged contests, which is illegal in many jurisdictions. Females can sometimes be kept in groups under specific conditions, but that requires experienced management and is not a general recommendation.",
      },
      {
        question: "Why do guppies multiply so quickly?",
        answer:
          "They are livebearers with a short generation time, and females can store sperm from a single mating to produce several successive broods without mating again. A mixed-sex group therefore expands rapidly, and population management becomes the main practical issue rather than getting them to breed. Anyone keeping guppies should plan for that from the outset.",
      },
      {
        question: "Which is easier for a beginner?",
        answer:
          "Neither is straightforwardly easy, and this page does not rank them. Both need heated, filtered, cycled water rather than the unheated bowls they are often sold with. Their requirements differ in opposite directions: bettas need territorial separation and surface access, guppies need company and a plan for rapid reproduction. Suitability depends on what the keeper is prepared to provide.",
      },
    ],
    commonConfusions: [
      "Treating both as undemanding fish suitable for unheated bowls.",
      "Assuming a fish coming to the surface is short of oxygen, when bettas do so normally.",
      "Keeping a mixed-sex guppy group without planning for rapid population growth.",
    ],
    similarities: [
      "Both are small tropical freshwater fish widely kept in home aquaria.",
      "Both are strongly sexually dimorphic, with ornamentation concentrated in males.",
      "Both are micropredators taking small invertebrates in the wild.",
      "Both have established feral populations outside their native ranges through release.",
    ],
    keyDifferences: [
      "Bettas breathe atmospheric air through a labyrinth organ; guppies use gills only.",
      "Male bettas cannot be housed together, while guppies are social shoalers.",
      "Bettas lay eggs in a bubble nest guarded by the male; guppies bear live young.",
      "Guppies reproduce prolifically, with females storing sperm for successive broods.",
      "The two belong to entirely different fish families.",
    ],
    petBoundary:
      "Neither species is suited to the unheated bowls they are frequently sold with, and neither should be released into wild water. This page gives no tank sizes, water parameters, feeding quantities, breeding protocols or health guidance — consult species-specific aquatic care references and a veterinarian experienced with fish.",
    relatedComparisonSlugs: ["goldfish-vs-koi", "salmon-vs-trout", "eel-vs-electric-eel"],
    relatedHubPaths: ["/aquarium-care", "/fish", "/animal-encyclopedia"],
    sourceIds: ["adw", "britannica", "worms"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "salmon-vs-trout",
    animalA: { slug: "salmon", name: "Salmon" },
    animalB: { slug: "brown-trout", name: "Brown Trout" },
    title: "Salmon vs Trout",
    metaTitle: "Salmon vs Trout — Migration, Spawning & Same Family",
    metaDescription:
      "Salmon and trout are close salmonid relatives. Sea migration, spawning survival, body form and the fact that the same trout species can be resident or migratory.",
    shortAnswer:
      "Both are salmonids and closer relatives than the separate names suggest. The clearest difference is life history: Atlantic and Pacific salmon migrate to sea and return to fresh water to spawn, and Pacific species die after spawning. Brown trout are more variable — some populations stay in fresh water for life while others migrate to sea as sea trout, and the same species does both.",
    primaryCategory: "fish-marine",
    secondaryCategories: ["taxonomy", "habitat-ecology"],
    relationship: "close-relatives",
    confidence: "supported",
    searchIntent: "taxonomy",
    whyCompare:
      "The names imply a clean split that does not exist: the two are close relatives, and the same trout species can live either as a resident or as a sea-going migrant.",
    centralDifference:
      "Salmon are strongly migratory, and Pacific species die after spawning, while brown trout include both resident freshwater and sea-going forms of the same species.",
    dimensions: [
      {
        id: "migration",
        label: "Migration",
        animalAValue: "Strongly anadromous — migrates to sea and returns to fresh water to spawn",
        animalBValue: "Variable — resident freshwater populations and sea-going sea trout occur within one species",
        interpretation: "Life history flexibility is the trout's defining feature.",
      },
      {
        id: "post-spawn",
        label: "Survival after spawning",
        animalAValue: "Pacific species die after spawning; Atlantic salmon may survive and spawn again",
        animalBValue: "Generally survives and can spawn in multiple years",
        interpretation: "Dying after a single spawning is a Pacific salmon trait, not a salmon trait generally.",
      },
      {
        id: "body",
        label: "Body form",
        animalAValue: "Streamlined and deep-bodied, with a narrow wrist before the tail",
        animalBValue: "Stockier with a broader tail wrist and a squarer tail",
        interpretation: "Tail wrist and shape are among the more practical structural cues.",
      },
      {
        id: "spots",
        label: "Markings",
        animalAValue: "Spots generally above the lateral line, often absent from the tail in Atlantic salmon",
        animalBValue: "Spots above and below the lateral line, often with red spots surrounded by pale halos",
        interpretation: "Spot distribution is used in the field, though it varies with population and condition.",
      },
      {
        id: "habitat",
        label: "Habitat",
        animalAValue: "Cold clean rivers for spawning and rearing, with adult life at sea",
        animalBValue: "Cold clean rivers and lakes, with some populations also using the sea",
        interpretation: "Both depend on cold, well-oxygenated fresh water for reproduction.",
      },
      {
        id: "introduction",
        label: "Introduced range",
        animalAValue: "Farmed and introduced widely, with escapes affecting wild populations",
        animalBValue: "Introduced worldwide for angling, and invasive in several regions",
        interpretation: "Brown trout are among the more damaging introduced freshwater fish in some countries.",
      },
    ],
    narrative: {
      taxonomy:
        "Both belong to Salmonidae. Atlantic salmon and brown trout are in the same genus and are close relatives, while Pacific salmon sit in a separate genus. So the everyday split between salmon and trout does not track a clean taxonomic boundary — an Atlantic salmon is more closely related to a brown trout than to a Pacific salmon.",
      identification:
        "Where both occur, look at the tail wrist and spot distribution. Atlantic salmon are more streamlined with a narrow wrist before a slightly forked tail and spots concentrated above the lateral line. Brown trout are stockier with a broader wrist, a squarer tail, and spots both above and below the lateral line, often with pale-haloed red spots.",
      habitat:
        "Both need cold, clean, well-oxygenated fresh water with clean gravel for spawning, and both are sensitive indicators of river health. Salmon spend most of their adult growth at sea before returning. Brown trout occupy rivers and lakes, and sea trout populations of the same species use estuaries and coastal waters before returning to spawn.",
      diet:
        "Juveniles of both take aquatic invertebrates and insect larvae in fresh water. At sea, salmon feed on crustaceans, small fish and squid, growing rapidly on that richer diet. Resident brown trout continue on invertebrates and small fish, while sea trout gain the same marine growth advantage, which is why sea-going individuals are typically much larger.",
      behavior:
        "Salmon show strong homing to natal rivers, navigating using magnetic information at sea and scent as they approach fresh water, and Pacific species undergo dramatic physical changes before spawning. Brown trout are territorial in rivers, holding feeding positions, and populations vary substantially in whether individuals migrate — a decision influenced by growth conditions.",
      humanRelationship:
        "Both are enormously important to fisheries, angling and aquaculture. Salmon farming is a major industry and a source of controversy over sea lice, escapes and effects on wild stocks. Brown trout have been introduced worldwide for angling and are invasive in several regions, displacing native fish. Both are affected by dams, water abstraction, warming and habitat degradation.",
      whichIsWhich:
        "Streamlined, narrow tail wrist, spots mostly above the lateral line, returning from the sea: salmon. Stockier, broad tail wrist, spots above and below with red pale-haloed spots: brown trout. Bear in mind that a large silvery sea trout is the same species as a small spotted river trout.",
      conservation:
        "Wild Atlantic salmon have declined substantially across much of their range through dams, habitat loss, warming and interactions with aquaculture, and several populations are of serious concern. Brown trout are secure in their native range and invasive elsewhere. Status should be checked per population against the IUCN Red List and national fisheries authorities.",
    },
    faqs: [
      {
        question: "Are salmon and trout the same kind of fish?",
        answer:
          "They are close relatives in the family Salmonidae, and the everyday names do not track a clean taxonomic boundary. The Atlantic salmon and the brown trout sit in the same genus and are more closely related to each other than the Atlantic salmon is to Pacific salmon, which belong to a separate genus. The split is largely a matter of naming convention and life history.",
      },
      {
        question: "Do all salmon die after spawning?",
        answer:
          "No. Pacific salmon species do — they undergo dramatic physical changes, spawn once and die, and their bodies deliver a substantial nutrient input to river systems. Atlantic salmon can survive spawning and return to sea, and some individuals spawn in more than one year, though the proportion doing so is generally small. Dying after spawning is a Pacific trait, not a salmon trait.",
      },
      {
        question: "What is a sea trout?",
        answer:
          "A brown trout that migrates to sea rather than staying in fresh water. It is the same species as the resident river trout, not a different one, and the two can occur in the same river system and interbreed. Sea-going individuals grow much larger on the richer marine diet and take on a silvery appearance, which is why they look so different from resident fish.",
      },
      {
        question: "How do salmon find their way back to the right river?",
        answer:
          "Evidence points to two mechanisms working in sequence. At sea they appear to use the Earth's magnetic field to navigate toward the general coastal region, apparently having imprinted on the magnetic signature of their natal area. As they approach fresh water, scent takes over, with the fish recognising the specific chemical signature of the river they left. Homing accuracy is high but not perfect.",
      },
    ],
    commonConfusions: [
      "Assuming salmon and trout are cleanly separate groups, when the naming cuts across the classification.",
      "Believing all salmon die after spawning, which is specific to Pacific species.",
      "Treating sea trout as a different species from resident brown trout.",
    ],
    similarities: [
      "Both are salmonids requiring cold, clean, well-oxygenated fresh water with clean gravel to spawn.",
      "Both begin life in fresh water feeding on aquatic invertebrates.",
      "Both are important to fisheries, angling and aquaculture worldwide.",
      "Both are sensitive indicators of river health and are affected by dams and warming.",
    ],
    keyDifferences: [
      "Salmon are strongly migratory, while brown trout include both resident and sea-going forms.",
      "Pacific salmon die after spawning, whereas brown trout can spawn in multiple years.",
      "Salmon are more streamlined with a narrower tail wrist.",
      "Brown trout have spots above and below the lateral line, often with pale-haloed red spots.",
      "Brown trout have been introduced worldwide for angling and are invasive in several regions.",
    ],
    conservationCaveat:
      "Wild Atlantic salmon have declined substantially across much of their range. Confirm current status per population against the IUCN Red List and national fisheries authorities.",
    relatedComparisonSlugs: ["eel-vs-electric-eel", "goldfish-vs-koi", "shark-vs-ray"],
    relatedHubPaths: ["/fish", "/fauna", "/animal-encyclopedia"],
    sourceIds: ["noaa", "iucn", "adw"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "eel-vs-electric-eel",
    animalA: { slug: "eel", name: "Eel" },
    animalB: { slug: "electric-eel", name: "Electric Eel" },
    title: "Eel vs Electric Eel",
    metaTitle: "Eel vs Electric Eel — Not the Same Fish at All",
    metaDescription:
      "The electric eel is not an eel: it is a knifefish related to catfish. True eels migrate to spawn at sea; electric eels breathe air and generate strong discharges.",
    shortAnswer:
      "The electric eel is not an eel. It is a South American knifefish, more closely related to catfish and carp than to true eels, and it acquired the name purely from its elongated shape. True eels are marine-spawning fish that migrate enormous distances to reproduce. Electric eels breathe air at the surface and generate strong electrical discharges used for hunting, navigation and defence.",
    primaryCategory: "fish-marine",
    secondaryCategories: ["taxonomy", "behavior-adaptations"],
    relationship: "taxonomy-clarification",
    confidence: "strong",
    searchIntent: "taxonomy",
    whyCompare:
      "The name guarantees the misconception, and correcting it opens up two genuinely remarkable biologies that would otherwise be conflated.",
    centralDifference:
      "The electric eel is a South American knifefish related to catfish, not an eel; true eels are a separate order that migrates to sea to spawn.",
    dimensions: [
      {
        id: "relatedness",
        label: "Relatedness",
        animalAValue: "Order Anguilliformes — the true eels",
        animalBValue: "A knifefish, more closely related to catfish and carp than to true eels",
        interpretation: "The shared name reflects body shape alone.",
      },
      {
        id: "electricity",
        label: "Electric organs",
        animalAValue: "Absent",
        animalBValue: "Three electric organs generating both weak navigational and strong hunting discharges",
        interpretation: "Electric organs make up the majority of the electric eel's body length.",
      },
      {
        id: "breathing",
        label: "Breathing",
        animalAValue: "Gills, with some species able to absorb oxygen through the skin in damp conditions",
        animalBValue: "Obligate air breather — must surface regularly or it drowns",
        interpretation: "Air breathing suits the oxygen-poor waters it inhabits.",
      },
      {
        id: "reproduction",
        label: "Reproduction",
        animalAValue: "Migrates enormous distances to spawn at sea, with a transparent larval stage",
        animalBValue: "Spawns in fresh water, with the male building a nest of saliva-bound material",
        interpretation: "Eel migration is one of the most remarkable and least understood in fish.",
      },
      {
        id: "habitat",
        label: "Habitat",
        animalAValue: "Fresh water, estuaries and ocean depending on life stage and species",
        animalBValue: "Slow, murky, oxygen-poor fresh water in the Amazon and Orinoco basins",
        interpretation: "The electric eel never leaves fresh water at any life stage.",
      },
      {
        id: "sensing",
        label: "How prey is found",
        animalAValue: "Acute sense of smell and lateral line detection of water movement",
        animalBValue: "Weak electrical discharges used as an active sensing field",
        interpretation: "Electrolocation works in murky water where vision is useless.",
      },
    ],
    narrative: {
      taxonomy:
        "True eels form the order Anguilliformes, a large group including freshwater, moray and conger eels. The electric eel is a gymnotiform knifefish from South America, sitting closer to catfish and carp than to any true eel. Recent work has also split what was long treated as a single electric eel species into more than one.",
      identification:
        "Both are elongated, but the details differ. True eels have continuous dorsal and anal fins running much of the body and no pelvic fins. The electric eel has a long anal fin running most of the underside used for undulating propulsion, no dorsal fin, and it surfaces regularly to gulp air — a behaviour no true eel performs.",
      habitat:
        "Freshwater eels live in rivers and lakes as adults and migrate to sea to spawn, while moray and conger eels are marine. The electric eel lives in slow, murky, oxygen-poor water in the Amazon and Orinoco basins, including swamps and floodplain, conditions in which air breathing and electrolocation are both highly advantageous.",
      diet:
        "True eels are predators and scavengers taking fish, crustaceans and invertebrates, hunting largely by smell. Electric eels use weak electrical pulses to detect prey in murky water and then deliver strong discharges that cause involuntary muscle contraction in nearby fish, immobilising them before they are swallowed whole.",
      behavior:
        "The freshwater eel life cycle involves migration of thousands of kilometres to specific ocean spawning areas, with larvae drifting back on currents over months or years — a journey only partly understood, since spawning has rarely been directly observed. Electric eels are largely solitary, surfacing every few minutes to breathe and using electricity continuously to sense their surroundings.",
      humanRelationship:
        "European and American eel populations have declined severely and are of serious conservation concern, affected by dams, habitat loss, parasites and fishing, and their complex life cycle makes farming from eggs impractical. Electric eels are of research interest for their electrical biology, which contributed historically to the development of the battery, and they are not a major fishery.",
      whichIsWhich:
        "Elongated fish surfacing regularly to gulp air in murky South American water: electric eel, which is a knifefish. Elongated fish in a European or North American river, or in a reef crevice, with continuous fins along the body: a true eel. The two are not close relatives at all.",
      sensesAdaptations:
        "The electric eel's three electric organs occupy most of its body. A weak discharge creates a field it monitors for distortions, allowing navigation and prey detection in water where vision is useless, while a strong discharge triggers involuntary muscle contraction in prey. Some individuals have been observed leaping from the water to deliver discharges directly to a threat above the surface.",
      conservation:
        "European and American eels have declined severely and are of serious conservation concern, with complex life cycles that make recovery difficult and farming from eggs impractical. Electric eel populations are not currently of comparable concern, though Amazon habitat loss affects them. Check the IUCN Red List for current status per species.",
    },
    faqs: [
      {
        question: "Is an electric eel actually an eel?",
        answer:
          "No. It is a knifefish from South America, more closely related to catfish and carp than to any true eel. The name comes purely from its elongated body shape. True eels belong to a separate order and differ in fin arrangement, breathing, reproduction and habitat. Recent work has also split what was long treated as one electric eel species into more than one.",
      },
      {
        question: "How does the electric eel generate electricity?",
        answer:
          "Through three specialised organs made of stacked cells that each produce a small voltage, arranged so the voltages sum — the same principle as cells in a battery. Weak discharges are used continuously for navigation and prey detection in murky water, while strong discharges cause involuntary muscle contraction in nearby fish. The organs occupy most of the animal's body length.",
      },
      {
        question: "Why do true eels migrate so far to spawn?",
        answer:
          "The full answer is still unknown, which is part of what makes it remarkable. European and American eels travel thousands of kilometres to spawning areas in the Sargasso Sea, and their transparent larvae drift back on ocean currents over months or years. Spawning has rarely been directly observed. The migration is generally explained as a legacy of continental positions when the pattern first established.",
      },
      {
        question: "Can an electric eel drown?",
        answer:
          "Yes. It is an obligate air breather, taking oxygen at the surface through a specialised vascularised mouth lining, and it will drown if prevented from surfacing. The adaptation suits the warm, stagnant, oxygen-poor water it inhabits, where gill breathing alone would be inadequate. True eels breathe with gills, and some can additionally absorb oxygen through the skin in damp conditions.",
      },
    ],
    commonConfusions: [
      "Assuming the electric eel is a kind of eel.",
      "Expecting all elongated fish to be closely related.",
      "Believing electric eels use only strong discharges, when weak sensing pulses are constant.",
    ],
    similarities: [
      "Both are elongated fish that move by undulating the body.",
      "Both live in fresh water for at least part of their lives.",
      "Both are predators that locate prey without relying on vision.",
      "Both are affected by freshwater habitat degradation.",
    ],
    keyDifferences: [
      "The electric eel is a knifefish related to catfish, not a true eel.",
      "Electric eels generate strong and weak electrical discharges; true eels generate none.",
      "Electric eels must surface to breathe air, while true eels use gills.",
      "True eels migrate to sea to spawn, whereas electric eels spawn in fresh water.",
      "Electric eels are confined to the Amazon and Orinoco basins.",
    ],
    safetyBoundary:
      "Electric eel discharges are powerful and can cause injury. This page gives no handling, capture or first-aid guidance — treat any electrical injury as a medical emergency and contact emergency services.",
    relatedComparisonSlugs: ["salmon-vs-trout", "goldfish-vs-koi", "shark-vs-ray"],
    relatedHubPaths: ["/fish", "/fauna", "/animal-senses-and-adaptations"],
    sourceIds: ["adw", "worms", "iucn"],
    lastReviewed: REVIEWED,
  }),
];
