/**
 * Comparison batch B2-05 — aquarium fish and parrots.
 *
 * Four ornamental-fish pairs and four parrot pairs, all filed under
 * pets-domestic. Most are nested-name problems rather than contrasts: koi are
 * domesticated carp, the African grey and the macaws sit inside the parrot
 * order, and the galah is a cockatoo. The remaining pairs separate groups that
 * share an aquarium shelf but not a family.
 */
import { defineComparison, REVIEWED } from "./define.ts";

export const BATCH_B2_05 = [
  defineComparison({
    slug: "koi-vs-carp",
    animalA: { slug: "koi", name: "Koi" },
    animalB: { slug: "carp", name: "Carp" },
    title: "Koi vs Carp",
    metaTitle: "Koi vs Carp — Ornamental Form, Wild Fish & Naming",
    metaDescription:
      "Koi are domesticated carp bred for colour, not a separate species. How the ornamental form differs from wild carp, and why carp names cover several fishes.",
    shortAnswer:
      "Koi are not a separate species. They are ornamental colour forms of a domesticated carp lineage, selected in East Asia over generations for pigment, pattern and scale type. A wild carp is an olive-bronze bottom-feeding cyprinid with two pairs of barbels at the mouth and no bold patterning. Carp is also a loose common name stretched across several cyprinid fishes, so the honest comparison sets one ornamental lineage against a broad group of relatives rather than two fixed species.",
    primaryCategory: "pets-domestic",
    secondaryCategories: [],
    relationship: "species-vs-group",
    confidence: "representative",
    searchIntent: "taxonomy",
    whyCompare:
      "Pond keepers and anglers meet the same fish under two names, and the shopping question of whether koi are a distinct species has a containment answer rather than a contrast answer.",
    centralDifference:
      "Koi are a domesticated ornamental form selected out of carp stock; carp is the wider common name for the wild and farmed cyprinids that form is descended from.",
    dimensions: [
      {
        id: "taxonomic-status",
        label: "Taxonomic status",
        animalAValue: "A domesticated ornamental form, described by variety name rather than by a species of its own",
        animalBValue: "A common name covering several cyprinid species, most often the common carp",
        interpretation: "Koi sit inside carp the way a breed sits inside a domesticated animal, so no species-level split exists.",
        caveat: "Which wild species East Asian ornamental stock descends from has been revised in recent literature and is not fully settled.",
      },
      {
        id: "colour",
        label: "Colour and pattern",
        animalAValue: "White, red, orange, yellow, black, blue-grey and metallic patterns in named varieties",
        animalBValue: "Olive, bronze or brassy overall, paler below, with dark-edged scales",
        interpretation: "Pattern is the whole point of koi selection and the single fastest way to tell a pond fish from a river fish.",
      },
      {
        id: "scales",
        label: "Scale arrangement",
        animalAValue: "Fully scaled, mirror-type with scattered large scales, or near-scaleless lines, depending on variety",
        animalBValue: "Usually fully scaled, though mirror and leather forms occur in long-farmed European stock",
        interpretation: "Scale mutations are shared with food-carp breeding, so scale pattern alone does not prove a fish is koi.",
      },
      {
        id: "body-form",
        label: "Body and mouth",
        animalAValue: "Deep-bodied, with the same downturned mouth and two pairs of barbels as its wild ancestors",
        animalBValue: "Robust and deep-bodied, with a protrusible downturned mouth and two pairs of barbels",
        interpretation: "The barbels are the useful cue: they separate both from goldfish, which have none.",
      },
      {
        id: "where-seen",
        label: "Where you meet them",
        animalAValue: "Designed ornamental ponds, water gardens, temple and show ponds",
        animalBValue: "Slow lowland rivers, canals, lakes and farm ponds across a wide introduced range",
        interpretation: "Setting usually settles the identification before any feature does.",
      },
      {
        id: "ecological-footprint",
        label: "Ecological footprint",
        animalAValue: "Contained in managed water, but released fish can establish and revert toward wild colouring",
        animalBValue: "Widely introduced beyond its native range and treated as a problem species in several countries",
        interpretation: "The ornamental form carries the ecological baggage of the wild form once it reaches open water.",
      },
    ],
    narrative: {
      taxonomy:
        "Koi are a product of domestication, not of speciation, so they carry variety names rather than a binomial of their own. The wild stock they came from belongs to the carp genus Cyprinus, and recent work has moved East Asian populations away from the European common carp toward a separate Amur lineage, which is why sources differ. Carp meanwhile is applied far more loosely, covering grass carp, silver carp, bighead carp and crucian carp, which sit in other genera entirely.",
      identification:
        "Colour does almost all the work. A koi shows deliberate blocks of white, red, black, yellow or metallic sheen arranged into recognised varieties, while a wild-type carp is olive to brassy with dark scale edges and no pattern. Body shape, fin arrangement and the downturned protrusible mouth are the same in both. Look for two pairs of barbels at the corners of the mouth: they confirm carp ancestry and rule out goldfish, which lack them entirely.",
      habitat:
        "Carp are native to Eurasia and have been moved by people into rivers, lakes, canals and reservoirs on most continents, favouring warm, slow, turbid lowland water and tolerating conditions that many fishes cannot. Koi live in managed ornamental ponds with filtration and controlled depth, which is a habitat built for them rather than one they occupy naturally. Released koi turn up in the same warm still waters as feral carp, because they need nothing different.",
      diet:
        "Both are benthic omnivores that root through soft sediment for insect larvae, worms, crustaceans, seeds, plant fragments and detritus, using a protrusible mouth and pharyngeal teeth rather than teeth in the jaws. That grubbing habit is ecologically consequential: it uproots rooted plants and lifts fine sediment into the water column, which is a large part of why introduced carp populations change the character of shallow lakes.",
      behavior:
        "Carp are loosely social, moving in groups over feeding grounds and spawning in spring or early summer in warm shallow margins, where broadcast eggs stick to submerged vegetation and are then abandoned. Koi behave the same way, which is why unmanaged ponds produce unplanned broods. Pond fish that gather when a keeper appears are showing learned association with routine rather than affection, and reading it as recognition of a person goes beyond what the behaviour supports.",
      humanRelationship:
        "Carp have been farmed for food in China and across Europe for many centuries and remain among the most widely cultured freshwater fishes in the world. Ornamental selection is far younger: coloured mutants picked out of food-carp ponds in northern Japan during the nineteenth century became the foundation of modern koi varieties and the judged-show culture built around them. Elsewhere, introduced carp are managed as an invasive problem, so the same fish is prized and controlled in different places.",
      whichIsWhich:
        "A patterned fish in a built pond with clear water and filtration is a koi. An olive-bronze fish with dark-edged scales in a river, canal or farm lake is a carp. Both have four barbels at the mouth. If the fish is orange with no barbels at all, it is a goldfish, which is a separate domestication from a different genus.",
      sensesAdaptations:
        "The barbels are covered in taste receptors and are used to locate food in sediment where sight is useless, which suits life in turbid water. Like other cyprinids, carp have a Weberian apparatus, a chain of small bones linking the swim bladder to the inner ear that gives the group unusually good hearing for fishes. They also tolerate low dissolved oxygen and wide temperature swings better than most pond fishes.",
      lifespan:
        "Carp are long-lived by fish standards, with individuals in unfished waters commonly reaching well past two decades, and koi in well-run ponds often living several decades. Growth and longevity depend heavily on water temperature, water quality and stocking density rather than on variety. A frequently repeated claim of a single koi living more than two centuries rests on one scale-ring analysis and has not been independently confirmed, so it is best treated as tradition rather than data.",
      conservation:
        "The picture is split in a way that surprises most readers. Wild carp populations in parts of the native Eurasian range have declined through habitat modification, river regulation and hybridisation with escaped farmed stock, while introduced populations on other continents are abundant enough to be targeted for large-scale removal programmes. Assessments of the wild form are therefore not interchangeable with the obvious abundance of farmed and ornamental fish, and a status quoted for one context should never be applied to the other.",
      petContext:
        "Koi are long-lived outdoor animals whose water volume, filtration, winter conditions and veterinary needs are commitments measured in decades, and release into local waterways is illegal in many places as well as ecologically harmful. Whether a household can meet that is a question about that household, its site and local law, and any health question belongs with a veterinarian experienced in fish.",
    },
    faqs: [
      {
        question: "Are koi just goldfish bred bigger?",
        answer:
          "No. Goldfish are a separate domestication from the genus Carassius, while koi come from carp in the genus Cyprinus. The quickest field check is the mouth: koi and other carp have two pairs of fleshy barbels at the corners, and goldfish have none. Body proportions differ too, with koi growing longer and more torpedo-shaped than most goldfish varieties.",
      },
      {
        question: "Do escaped koi turn back into ordinary-looking carp?",
        answer:
          "Their descendants tend to. Ornamental colour is maintained by people selecting which fish breed, and in open water the bright patterns offer no advantage and considerable exposure to predators. Over generations, feral populations founded by released koi drift back toward drab olive-bronze carp colouring. The individual fish does not change colour; the population does, through selection and interbreeding with wild-type stock.",
      },
      {
        question: "Is a mirror carp the same thing as a koi?",
        answer:
          "No, though they share ancestry. Mirror carp are a scale mutation long established in European food-carp farming, showing scattered large scales on otherwise bare skin. Koi are an East Asian ornamental tradition selected primarily for colour and pattern, and some koi varieties happen to carry mirror-type or near-scaleless skin as well. Scale arrangement alone therefore does not tell you which breeding tradition a fish came from.",
      },
      {
        question: "Why is carp a delicacy in some countries and a pest in others?",
        answer:
          "Because the same tolerance that makes carp easy to farm makes them successful where they were never native. In much of Europe and Asia carp are a long-established food and festival fish raised in managed ponds. In parts of North America and Australia, introduced carp reach high densities, stir up sediment while feeding and alter shallow lake ecosystems, so the same species is managed as a problem rather than a resource.",
      },
      {
        question: "Can koi and wild carp interbreed?",
        answer:
          "Yes, and that is part of the point: they are the same domesticated lineage rather than separate species, so crosses are fertile. Where ornamental fish are released into waters holding wild-type carp, the offspring are typically dull-coloured and indistinguishable from local stock within a generation or two. This is one reason release is discouraged or prohibited even in places where carp are already established.",
      },
    ],
    commonConfusions: [
      "Assuming koi are a distinct species rather than a domesticated form of carp.",
      "Mistaking large orange goldfish for koi, when barbels separate them at a glance.",
      "Treating all carp as one fish, when the name also covers grass, silver and crucian carp from other genera.",
    ],
    similarities: [
      "Both have the deep body, protrusible downturned mouth and pharyngeal teeth of cyprinids.",
      "Both carry two pairs of barbels used to taste food in soft sediment.",
      "Both spawn by scattering adhesive eggs over shallow vegetation with no parental care.",
      "Both tolerate warm, turbid, low-oxygen water that many other freshwater fishes cannot.",
    ],
    keyDifferences: [
      "Koi are a selected ornamental form; carp is the broader common name for the wild and farmed fish.",
      "Koi show deliberate colour varieties, while wild-type carp are uniformly olive to brassy.",
      "Koi occupy built and filtered ponds; carp occupy rivers, canals and lakes across a wide introduced range.",
      "Carp are a major food fish worldwide, whereas koi are bred and judged for appearance.",
      "The name carp also covers grass, silver and crucian carp in other genera; koi does not stretch that far.",
    ],
    petBoundary:
      "Nothing here is a recommendation to acquire koi. Pond fish are decades-long responsibilities whose suitability depends on site, water volume, local law and the keeper's capacity to maintain conditions and seek qualified veterinary help.",
    taxonomyCaveat:
      "Carp is a common name applied to several cyprinid species in different genera, and the wild ancestry of East Asian ornamental stock has been reassigned in recent literature. Treat this page as a comparison of one ornamental lineage with a group.",
    conservationCaveat:
      "Wild and introduced carp populations are assessed very differently depending on region. Check the current IUCN Red List entry rather than assuming abundance anywhere means abundance everywhere.",
    relatedComparisonSlugs: ["goldfish-vs-koi", "goldfish-vs-betta-fish", "salmon-vs-trout"],
    relatedHubPaths: ["/animal-encyclopedia/fish", "/fish", "/aquarium-care"],
    sourceIds: ["adw", "britannica"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "betta-fish-vs-angelfish",
    animalA: { slug: "betta-fish", name: "Betta Fish" },
    animalB: { slug: "angelfish", name: "Angelfish" },
    title: "Betta Fish vs Angelfish",
    metaTitle: "Betta Fish vs Angelfish — Labyrinth Fish vs Cichlid",
    metaDescription:
      "A betta breathes air through a labyrinth organ and nests in bubbles; a freshwater angelfish is a tall Amazonian cichlid that guards eggs as a pair.",
    shortAnswer:
      "A betta is a labyrinth fish from Southeast Asia that gulps air at the surface through an accessory breathing organ, and whose males build floating bubble nests and guard the eggs alone. A freshwater angelfish is a South American cichlid with a tall, laterally flattened disc body, trailing filamentous fins and vertical bars, which spawns on an upright surface and guards the brood as a bonded pair. Different families, different breathing, different parenting.",
    primaryCategory: "pets-domestic",
    secondaryCategories: [],
    relationship: "pet-decision",
    confidence: "supported",
    searchIntent: "pet-decision",
    whyCompare:
      "They are two of the most recognisable ornamental freshwater fishes and are often considered against each other, yet they come from separate families on separate continents with genuinely different biology behind their reputations.",
    centralDifference:
      "The betta is an air-breathing anabantoid whose males tend bubble nests; the freshwater angelfish is a deep-bodied cichlid whose pairs guard eggs laid on a vertical surface.",
    dimensions: [
      {
        id: "family",
        label: "Family",
        animalAValue: "A gourami relative in the labyrinth-fish group, native to the Mekong basin and neighbouring Southeast Asia",
        animalBValue: "A cichlid from the Amazon basin, related to discus and to African rift-lake cichlids",
        interpretation: "Almost every other difference on this page follows from this split.",
      },
      {
        id: "breathing",
        label: "Breathing",
        animalAValue: "Uses a labyrinth organ above the gills to take atmospheric air at the surface",
        animalBValue: "Relies on gills alone and takes no air from the surface",
        interpretation: "A fish that repeatedly rises to gulp air is behaving normally if it is a betta and unusually if it is an angelfish.",
      },
      {
        id: "body-shape",
        label: "Body shape",
        animalAValue: "Short and compact, with fin size in ornamental strains ranging from modest to extravagantly long",
        animalBValue: "Tall and disc-shaped, with elongated dorsal and anal fins and thread-like ventral fins",
        interpretation: "Silhouette alone separates them at any distance, before colour is visible.",
      },
      {
        id: "breeding",
        label: "Breeding behaviour",
        animalAValue: "Male builds a raft of mucus-coated bubbles at the surface and tends the eggs there alone",
        animalBValue: "A bonded pair cleans a leaf, stem or flat vertical surface, spawns on it and guards together",
        interpretation: "Bubble nest versus vertical spawning site is the clearest behavioural signature of each.",
      },
      {
        id: "social-structure",
        label: "Social tolerance",
        animalAValue: "Males are strongly intolerant of other males and display with flared gill covers",
        animalBValue: "Sociable when young, becoming territorial around a chosen spawning site as pairs form",
        interpretation: "Both are territorial, but the trigger differs: rival males for one, defended breeding space for the other.",
        caveat: "Individual temperament varies widely in both, and captive-bred strains do not behave identically to wild stock.",
      },
      {
        id: "colour-origin",
        label: "Where the colour comes from",
        animalAValue: "Ornamental strains carry colours and fin types not seen in the drab wild-type fish",
        animalBValue: "Selective breeding has produced marbled, gold and veil forms alongside the barred wild pattern",
        interpretation: "Both are heavily domesticated, so shop fish are a poor guide to what wild populations look like.",
      },
    ],
    narrative: {
      taxonomy:
        "The betta usually meant by the name is one species in a genus holding dozens of others, most of them small, plain and little known outside specialist circles. It belongs to the labyrinth fishes alongside gouramis. The freshwater angelfish belongs to the cichlid family and to a small South American genus, making it a relative of discus and of the rift-lake cichlids. The two share no recent common ancestry, and the name angelfish is also used for an unrelated marine family.",
      identification:
        "Look at outline first. An angelfish is taller than it is long, flattened side to side, with a swept dorsal and anal fin and two long thread-like ventral fins trailing beneath. A betta is a short, thickset little fish whose ornamental strains carry heavy fin extensions but whose body stays compact. Angelfish show vertical dark bars that fade and intensify with mood and background; bettas show solid or blended colour blocks rather than banding.",
      habitat:
        "Wild bettas occupy shallow, warm, slow or still water in the Mekong region, including flooded fields, ditches and marshes where oxygen levels swing and vegetation is dense. Wild angelfish live in the Amazon basin among flooded forest, submerged roots and standing stems in quieter blackwater and whitewater margins, where a tall flattened body slips easily between vertical structures. Neither range overlaps the other, and neither natural habitat resembles an open unplanted tank.",
      diet:
        "Both are largely carnivorous in the wild rather than plant feeders. Bettas take small insects, larvae and zooplankton from the surface and the water column, which suits an upward-facing mouth. Angelfish take invertebrates, insect larvae and small fishes from among submerged vegetation, hunting by slow approach between stems. Feeding regimes for either fish in captivity are a husbandry matter for a qualified aquatic veterinarian or an experienced keeper rather than something to copy from a comparison page.",
      behavior:
        "The betta's common name of Siamese fighting fish comes from a long history of staged contests in Southeast Asia, a practice this page does not describe further; what is relevant biologically is that males respond to rival males with flared opercula and spread fins. Angelfish are calmer in general company but form pairs that hold and defend a spawning site, driving other fish away from it. Both are visual, display-driven animals, and both change intensity of colour with context.",
      humanRelationship:
        "Both have been in the ornamental trade for the better part of a century and both are now overwhelmingly captive-bred rather than wild-caught, which has taken direct collection pressure off wild populations. Selective breeding has gone furthest in the betta, where fin type and colour form a formal show vocabulary. Wild betta populations nevertheless face habitat loss through drainage and agricultural conversion in their native range, which is a separate issue from trade.",
      whichIsWhich:
        "Tall, flat, disc-shaped, with trailing threads under the chest and vertical bars: angelfish. Short-bodied, with large flowing fins and no banding, rising to the surface for air: betta. If the fish takes a visible gulp at the surface and then sinks back down, that is the labyrinth organ at work and it points to the betta immediately.",
      sensesAdaptations:
        "The labyrinth organ is a folded, richly vascularised structure above the gill chamber that lets a betta extract oxygen from air, an adaptation to warm shallow water where dissolved oxygen falls low. Angelfish have no such organ, and instead trade on manoeuvrability: a tall compressed body and long trailing fins allow precise hovering and turning among vertical stems, with the thread-like ventral fins acting partly as touch sensors.",
      lifespan:
        "Ornamental bettas are comparatively short-lived, with a few years being typical in good conditions, and heavily finned show strains are not necessarily the longest lived. Freshwater angelfish generally live longer, with a decade reported in well-managed aquaria, though figures vary with strain, water quality and how early a fish is bred from. All of these numbers describe captive fish; wild lifespans in either species are poorly documented.",
      petContext:
        "Neither fish is a beginner verdict to be handed out. Suitability depends on the household, on water conditions the keeper can genuinely maintain, on the social mix already present, and on a willingness to seek qualified veterinary help when something goes wrong. Nothing here recommends acquiring either species, and no housing, stocking or feeding figures are given because those decisions belong with a professional.",
    },
    faqs: [
      {
        question: "Why does a betta rise to gulp air when an angelfish never does?",
        answer:
          "The betta has a labyrinth organ, a folded vascular structure above the gills that absorbs oxygen from atmospheric air. It evolved in shallow, warm, poorly oxygenated water where gills alone struggle, and surfacing is normal behaviour rather than a sign of distress. Angelfish have no equivalent structure and take all their oxygen from the water, so persistent surface gasping in an angelfish is a different situation entirely.",
      },
      {
        question: "Is a freshwater angelfish really a cichlid like an Oscar or a discus?",
        answer:
          "Yes. Despite the delicate outline, the freshwater angelfish sits squarely in the cichlid family alongside Oscars, discus and the African rift-lake species. The pair bonding, the site cleaning before spawning and the shared guarding of eggs and fry are classic cichlid traits. Its disc shape is an adaptation to moving among submerged stems and roots, not evidence of a separate lineage.",
      },
      {
        question: "What is a betta bubble nest and does an angelfish build one?",
        answer:
          "A bubble nest is a raft of mucus-coated air bubbles a male betta blows at the water surface, usually beneath a floating leaf, and it is where eggs are placed and tended by him alone. It is normal male behaviour and appears with or without a female present. Angelfish build nothing of the kind: a pair cleans a vertical surface and lays directly on it.",
      },
      {
        question: "Do the long fins on show bettas and veil angelfish mean the same thing?",
        answer:
          "They are separate results of the same process. Both species have been selectively bred for exaggerated finnage, but the structures involved differ: betta strains extend the caudal, dorsal and anal fins into named show types, while veil angelfish extend already-elongated dorsal and anal fins further. In both, heavy finnage adds drag and can complicate swimming, which is a welfare consideration rather than a cosmetic one.",
      },
      {
        question: "Which of these two is a saltwater fish?",
        answer:
          "Neither. Both are freshwater fishes, and the confusion comes from the name angelfish being shared with an unrelated marine family found on coral reefs. Those reef angelfish are not close relatives of the Amazonian cichlid sold under the same name. If a source refers to an angelfish on a reef, it means the marine group, not the tall barred fish in a freshwater aquarium.",
      },
    ],
    commonConfusions: [
      "Reading a betta's surface gulping as a symptom, when it is normal labyrinth-organ breathing.",
      "Assuming the freshwater angelfish is related to the marine angelfishes that share its name.",
      "Treating both species' shop colours as natural, when wild-type fish of each are far plainer.",
    ],
    similarities: [
      "Both are tropical freshwater fishes long established in the ornamental trade and now mostly captive-bred.",
      "Both are largely carnivorous, taking invertebrates rather than grazing on plants.",
      "Both defend space and both signal with posture, fin spread and shifts in colour intensity.",
      "Both have selectively bred strains that look nothing like wild populations of the same species.",
    ],
    keyDifferences: [
      "Bettas breathe atmospheric air through a labyrinth organ; angelfish rely entirely on gills.",
      "Bettas are Southeast Asian labyrinth fishes; freshwater angelfish are South American cichlids.",
      "A male betta tends a floating bubble nest alone, while angelfish guard eggs as a bonded pair.",
      "Angelfish are tall and disc-shaped with trailing ventral threads; bettas are short-bodied with heavy finnage.",
      "Angelfish show vertical bars that shift with mood; bettas show solid or blended colour without banding.",
    ],
    petBoundary:
      "This page compares biology, not suitability. Whether either fish belongs in a particular home depends on the household, local law, the conditions the keeper can sustain long term, and access to a veterinarian competent with fish. No acquisition is recommended here.",
    taxonomyCaveat:
      "Betta is a large genus and this page describes the species usually meant by the name in the aquarium trade. Angelfish is also the common name of an unrelated marine family, so always check which fish a source means.",
    conservationCaveat:
      "Wild populations of the ornamental betta face habitat loss in their native range and are assessed separately from the abundant captive-bred trade. Check the current IUCN Red List entry for the wild status.",
    relatedComparisonSlugs: [
      "goldfish-vs-betta-fish",
      "betta-fish-vs-guppy",
      "angelfish-vs-clownfish",
      "guppy-vs-tetra",
    ],
    relatedHubPaths: ["/aquarium-care", "/fish", "/domestic-animals"],
    sourceIds: ["adw", "britannica"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "guppy-vs-tetra",
    animalA: { slug: "guppy", name: "Guppy" },
    animalB: { slug: "tetra", name: "Tetra" },
    title: "Guppy vs Tetra",
    metaTitle: "Guppy vs Tetra — Livebearer, Egg Scatterer & Shoaling",
    metaDescription:
      "Guppies bear live young and have showy males; tetras scatter eggs, look alike in both sexes and shoal. A livebearer and a characin compared feature by feature.",
    shortAnswer:
      "Guppies are livebearers: fertilisation is internal, and females release free-swimming young rather than eggs. Males are small, ornate and obviously different from the larger, plainer females. Tetras are characins that scatter adhesive eggs among plants and give no parental care, and in most species the sexes look broadly alike. Tetras also shoal as a rule, while guppies form looser, more shifting aggregations. Tetra is a group name covering many species, not one fish.",
    primaryCategory: "pets-domestic",
    secondaryCategories: [],
    relationship: "pet-decision",
    confidence: "representative",
    searchIntent: "pet-decision",
    whyCompare:
      "They occupy the same shelf as small, colourful, widely kept community fishes, but they sit in different families with opposite reproductive strategies, and one of the two names covers a whole group rather than a species.",
    centralDifference:
      "Guppies give birth to free-swimming young and show strong male-female difference; tetras scatter eggs, abandon them, and usually show little difference between the sexes.",
    dimensions: [
      {
        id: "group-scope",
        label: "What the name covers",
        animalAValue: "One species of livebearing poeciliid, plus its many domesticated strains",
        animalBValue: "An informal label for dozens of small characin species across several genera",
        interpretation: "Statements about tetras are generalisations across a group, while statements about guppies point at one species.",
      },
      {
        id: "reproduction",
        label: "Reproduction",
        animalAValue: "Internal fertilisation and live birth, with females able to store sperm between broods",
        animalBValue: "External fertilisation, with adhesive eggs scattered over plants or substrate and then left",
        interpretation: "This is the defining split and it explains why guppy populations build up so quickly.",
      },
      {
        id: "sexual-dimorphism",
        label: "Male and female appearance",
        animalAValue: "Males smaller, brightly patterned, with the anal fin modified into a rod-like gonopodium",
        animalBValue: "Sexes similar in most species, with females often slightly deeper-bodied when carrying eggs",
        interpretation: "Sexing a guppy is trivial at a glance; sexing most tetras is not.",
      },
      {
        id: "adipose-fin",
        label: "Fins",
        animalAValue: "No adipose fin; males carry a modified anal fin used in mating",
        animalBValue: "Most species carry a small fleshy adipose fin between the dorsal fin and the tail",
        interpretation: "The little unrayed fin on the back is a quick way to place a fish among the characins.",
        caveat: "The adipose fin is absent or reduced in some characins, so its absence alone does not rule the group out.",
      },
      {
        id: "social-structure",
        label: "Social structure",
        animalAValue: "Loose, shifting groups with persistent male courtship display toward females",
        animalBValue: "Cohesive shoals that tighten under disturbance, which many species need to behave normally",
        interpretation: "Shoal cohesion is a welfare-relevant trait for tetras in a way it is not for guppies.",
      },
      {
        id: "native-range",
        label: "Native range",
        animalAValue: "Northeastern South America and nearby Caribbean islands, now introduced on most continents",
        animalBValue: "Mainly South and Central America, with a related characin radiation in Africa",
        interpretation: "The guppy is one of the most widely introduced freshwater fishes; tetras have largely stayed put.",
      },
    ],
    narrative: {
      taxonomy:
        "The guppy is a single species in the livebearing family Poeciliidae, alongside mollies, platies and swordtails. Tetra is not a taxonomic rank at all: it is a trade and hobby label attached to many small characins, including the neon and cardinal tetras of South American blackwater and, confusingly, some African species in related families. That means a comparison against a guppy is always a comparison against a representative tetra rather than a fixed one.",
      identification:
        "Sex the fish first. A brightly patterned, small-bodied fish with a stiff rod-like anal fin is a male guppy; the plainer, larger, deeper-bodied fish beside it is a female of the same species. Tetras of both sexes usually look alike, and most carry a small fleshy adipose fin between the dorsal fin and the tail. Neon and cardinal tetras add an unmistakable horizontal blue stripe that guppies never show.",
      habitat:
        "Guppies come from streams, ditches and coastal drainages in northeastern South America and nearby islands, often in warm shallow water with variable flow. Many popular tetras come from Amazonian blackwater, where tannin-stained, acidic, dimly lit water and heavy leaf litter dominate. The two water types are quite different, which matters more than the shared label of tropical freshwater fish suggests, and it explains why the two groups look adapted to different light regimes.",
      diet:
        "Both are small omnivores that take insect larvae, small crustaceans, algae and plant material, working mainly in the upper and middle water column. Guppies feed opportunistically at the surface and are effective at taking mosquito larvae, which is why they were moved around the world. Tetras generally take drifting invertebrates within the shoal. Quantities and schedules for captive fish are husbandry decisions for an experienced keeper or aquatic veterinarian, not something to generalise here.",
      behavior:
        "Guppy males court continuously, displaying with sigmoid body postures and colour, and females exercise choice among them, which is why the species became a workhorse of behavioural and evolutionary research. Field studies in Trinidad comparing streams above and below barriers to predators are the best known example. Tetras behave as shoals: they align, respond collectively to disturbance and lose normal behaviour when kept in numbers too small to form a group.",
      humanRelationship:
        "Guppies have been deliberately released into wetlands and drains in many countries as part of mosquito-control programmes, with mixed results and documented harm to native small fishes in some regions. Tetras have mostly travelled through the ornamental trade instead, and several species support long-established fisheries in the Rio Negro region where wild collection provides local income. Both are now bred commercially at very large scale.",
      whichIsWhich:
        "If the males are gaudy and the females plain, and young fish appear without eggs ever being visible, you are looking at guppies. If every adult looks much the same, there is a small fleshy fin between the dorsal fin and the tail, and the group moves as one, you are looking at a tetra of some kind.",
      sensesAdaptations:
        "Neon and cardinal tetras owe their blue stripe to iridophores, layered reflective cells that produce structural colour rather than pigment, which is why the stripe shifts with viewing angle and dims at night. Guppy males combine carotenoid-based orange spots with structural iridescence, and the balance is diet-dependent, so colour carries information about condition. Both groups also share the cyprinid-style hearing advantage of the Weberian apparatus found in ostariophysan fishes.",
      lifespan:
        "Guppies are short-lived and fast-breeding, with a couple of years being usual in captivity and often less in the wild where predation is heavy. Small tetras vary more, and several popular species regularly exceed the guppy in well-run aquaria. In both, longevity depends strongly on temperature, water quality and how intensively a strain has been line-bred, so figures quoted for shop fish should not be read as fixed species traits.",
      petContext:
        "Both are commonly kept, and neither should be described as easy without qualification. Guppies reproduce readily and unmanaged numbers become a real problem, while most tetras only behave normally in a proper shoal, which is a stocking commitment rather than a preference. Suitability depends on the household, local law, welfare capacity and long-term responsibility, and health questions belong with a veterinarian experienced in fish.",
    },
    faqs: [
      {
        question: "Why are male and female guppies so different when neon tetras look alike?",
        answer:
          "Guppy reproduction runs on female choice, so males are under strong selection for colour and display while females are under selection for size and fecundity, producing an obvious difference between the sexes. Most tetras spawn by scattering eggs in a group with no courtship of that kind, so there is little selective pressure pulling the sexes apart. Both patterns are ordinary outcomes of different mating systems.",
      },
      {
        question: "Do any tetras give birth to live young like guppies do?",
        answer:
          "No. Live birth in the aquarium trade is the domain of the poeciliids, which include guppies, mollies, platies and swordtails. Characins, the group the tetras belong to, are egg scatterers: adhesive eggs are released among plants or over substrate, fertilised externally and then left entirely. If a small fish in a tank appears to produce free-swimming young directly, it is not a tetra.",
      },
      {
        question: "Is the neon tetra the only real tetra?",
        answer:
          "Far from it. Tetra is a hobby label rather than a taxonomic group, and it covers dozens of small characins, including the cardinal, ember, rummy-nose, black and lemon tetras among many others. Some fishes marketed as tetras belong to related African families rather than the South American characins. Because of that spread, general claims about tetra size, colour or water preference always need a species attached.",
      },
      {
        question: "What is the small extra fin on a tetra's back?",
        answer:
          "That is the adipose fin, a small fleshy unrayed fin sitting between the dorsal fin and the tail. It is characteristic of characins and also of salmon and catfish, and its function is still debated, with hydrodynamic and sensory roles both proposed. Guppies have no adipose fin at all, so its presence is a quick way to place a small unfamiliar aquarium fish in the right camp.",
      },
      {
        question: "Why do guppies turn up in drains and ditches worldwide when tetras do not?",
        answer:
          "Guppies were deliberately introduced into many countries for mosquito control and are unusually tolerant of warm, shallow, polluted and variable water. Combined with live birth and rapid maturation, that lets small releases establish quickly. Tetras have mostly moved through the ornamental trade rather than through control programmes, and most species need more specific water conditions, so established feral populations outside their range are far rarer.",
      },
    ],
    commonConfusions: [
      "Treating tetra as if it named one species, when it covers many characins across several genera.",
      "Expecting tetra fry to appear without eggs, because guppy live birth is taken as the aquarium norm.",
      "Assuming plain fish in a guppy group are a separate species rather than females of the same one.",
    ],
    similarities: [
      "Both are small, colourful tropical freshwater fishes bred commercially in very large numbers.",
      "Both are omnivores taking small invertebrates and plant material in the upper water column.",
      "Both belong to ostariophysan lineages that hear well through the Weberian apparatus.",
      "Both include selectively bred strains whose colours exceed anything seen in wild populations.",
    ],
    keyDifferences: [
      "Guppies bear live young; tetras scatter eggs externally and provide no parental care.",
      "Male and female guppies look very different, whereas most tetras show little sexual dimorphism.",
      "Male guppies have a rod-like gonopodium, while most tetras carry an adipose fin guppies lack.",
      "Tetras form cohesive shoals; guppies form looser, courtship-driven aggregations.",
      "Guppy is one species, but tetra is a hobby label covering dozens across several genera.",
    ],
    petBoundary:
      "No suitability verdict is offered here. Both fishes make demands, from unmanaged guppy population growth to the shoal sizes most tetras need, and any decision depends on household, local law, welfare capacity and access to qualified veterinary advice.",
    taxonomyCaveat:
      "Tetra is a trade label, not a taxonomic rank, and includes South American characins alongside some African fishes in related families. Every general statement about tetras on this page describes typical members rather than all of them.",
    relatedComparisonSlugs: [
      "betta-fish-vs-guppy",
      "goldfish-vs-guppy",
      "betta-fish-vs-angelfish",
      "goldfish-vs-koi",
    ],
    relatedHubPaths: ["/aquarium-care", "/fish", "/animal-encyclopedia/fish"],
    sourceIds: ["adw", "britannica"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "angelfish-vs-clownfish",
    animalA: { slug: "angelfish", name: "Angelfish" },
    animalB: { slug: "clownfish", name: "Clownfish" },
    title: "Angelfish vs Clownfish",
    metaTitle: "Angelfish vs Clownfish — Freshwater, Reef & Anemones",
    metaDescription:
      "Angelfish names two unrelated groups, one an Amazonian cichlid and one a reef family; clownfish are damselfishes that shelter in sea anemones.",
    shortAnswer:
      "The name angelfish covers two unrelated groups: a tall barred cichlid from Amazonian freshwater and a family of disc-shaped marine fishes on coral reefs. Clownfish are neither. They are anemonefishes in the damselfish family, living in mutualism with sea anemones on Indo-Pacific reefs and changing sex as they move up a colony hierarchy. Only the marine angelfishes share a reef with clownfish, and even they belong to a separate family.",
    primaryCategory: "pets-domestic",
    secondaryCategories: [],
    relationship: "taxonomy-clarification",
    confidence: "supported",
    searchIntent: "identification",
    whyCompare:
      "Both are aquarium-famous fishes with bold vertical banding, and the pairing exposes a genuine naming trap: angelfish refers to two separate groups in two different kinds of water, only one of which shares habitat with clownfish.",
    centralDifference:
      "Clownfish are anemone-dwelling damselfishes with a single identity, whereas angelfish is a name shared by an Amazonian cichlid and an unrelated marine reef family.",
    dimensions: [
      {
        id: "which-water",
        label: "Fresh or salt water",
        animalAValue: "Freshwater in the cichlid sense; fully marine in the reef-family sense",
        animalBValue: "Marine only, on shallow tropical reefs",
        interpretation: "Asking which water a source means is the first step in reading anything about angelfish.",
      },
      {
        id: "family",
        label: "Family",
        animalAValue: "Cichlidae for the Amazonian fish, Pomacanthidae for the reef fish; the two are not close",
        animalBValue: "Pomacentridae, the damselfishes, within the anemonefish group",
        interpretation: "Three families are in play across two common names, which is why the confusion persists.",
      },
      {
        id: "anemone-association",
        label: "Anemone association",
        animalAValue: "None; neither the freshwater nor the marine angelfish shelters in anemones",
        animalBValue: "Obligate in the wild, living among the tentacles of a small number of host anemone species",
        interpretation: "The anemone is the single most diagnostic thing about a clownfish in the field.",
      },
      {
        id: "banding",
        label: "Body banding",
        animalAValue: "Dark vertical bars on a pale body in the freshwater fish; varied bands, spots and scribbles in the reef family",
        animalBValue: "One to three white or pale vertical bars edged in black over orange, red or dark ground colour",
        interpretation: "Both show vertical bars, so band colour and background separate them rather than band presence.",
      },
      {
        id: "sex-change",
        label: "Sex change",
        animalAValue: "Absent in the freshwater cichlid; several marine angelfishes change from female to male",
        animalBValue: "Change from male to female, with the dominant fish in a group becoming the breeding female",
        interpretation: "The direction of change differs, which is a real distinction rather than a shared curiosity.",
        caveat: "Sex change is documented in some but not all marine angelfishes, and details differ between species.",
      },
      {
        id: "cheek-spine",
        label: "Diagnostic hard part",
        animalAValue: "Marine angelfishes carry a strong spine at the lower rear corner of the cheek plate",
        animalBValue: "No such cheek spine; damselfishes are identified instead by body shape and a single nostril on each side",
        interpretation: "That cheek spine is what separates marine angelfishes from the butterflyfishes they resemble.",
      },
    ],
    narrative: {
      taxonomy:
        "Three separate groups sit behind these two names. The freshwater angelfish is a South American cichlid, related to discus. The marine angelfishes are a reef family of their own, related more closely to butterflyfishes than to anything in fresh water. Clownfish, properly anemonefishes, sit inside the damselfish family and form a group of roughly thirty species. No two of these three groups are close relatives, despite sharing shelf space and body plans.",
      identification:
        "For the freshwater fish, look for a tall flattened disc with long trailing threads under the chest and dark bars over silver. For the marine angelfishes, look for a deep oval body, a small mouth and the hard spine at the base of the cheek plate. Clownfish are much rounder and thicker in profile, orange to dark red or black, crossed by one to three white bars with black edging, and are almost always beside an anemone.",
      habitat:
        "Clownfish live on shallow Indo-Pacific reefs and lagoons, tied to particular sea anemone species, and rarely stray far from a host once settled. Marine angelfishes occupy the same reefs but roam over coral, rubble and drop-offs feeding on sessile life. The freshwater angelfish is nowhere near either, living in Amazonian flooded forest, slow river margins and among submerged roots and stems. The absent Atlantic clownfish is a useful check: anemonefishes are Indo-Pacific.",
      diet:
        "Marine angelfishes are specialised grazers on sessile reef organisms, with sponges and tunicates forming a large part of the diet in many species, which is precisely why they are difficult to sustain outside a reef. The freshwater cichlid takes invertebrates and small fishes among vegetation. Clownfish feed on zooplankton picked from the water passing their anemone, along with algae and scraps, staying within darting distance of shelter throughout.",
      behavior:
        "Clownfish live in a size-based hierarchy within a single anemone: one large breeding female, one breeding male and several smaller non-breeders, with eggs laid on cleaned rock beside the host and guarded by the male. Freshwater angelfish pairs clean a vertical surface and guard the brood together. Marine angelfishes are often territorial and some hold harems. All three defend space, but only the clownfish organises its entire social system around a host animal.",
      humanRelationship:
        "Clownfish became globally famous through animation, and demand rose sharply afterwards, which is one reason captive breeding of anemonefishes was pushed hard and is now well established. Marine angelfishes remain much harder to breed and are still largely wild-collected, with dietary specialisation adding to the problem. The freshwater angelfish, by contrast, has been captive-bred for generations and now exists in colour strains that no wild population has ever shown.",
      whichIsWhich:
        "Orange with white black-edged bars, sitting in a mass of anemone tentacles: clownfish. Tall, flattened, silver with dark bars and long chest threads, in fresh water: the cichlid angelfish. Deep-bodied, small-mouthed, boldly patterned, grazing over coral with a spine at the cheek corner: a marine angelfish. The habitat resolves it before any fin count is needed.",
      sensesAdaptations:
        "The clownfish tolerance of anemone stinging cells is the headline adaptation, associated with the composition of the mucus coat and with an acclimation process when a fish first meets a host; the mechanism is still not fully resolved and simple explanations should be treated cautiously. Larval anemonefishes use sound and chemical cues from reefs to navigate back to suitable habitat after a planktonic phase. Marine angelfishes instead show strong colour change between juvenile and adult.",
      lifespan:
        "Clownfish are long-lived for small reef fishes, with individuals holding a host anemone for many years and captive fish reported past a decade. Marine angelfishes also live long in the wild, though captive figures depend heavily on whether a species can be fed adequately. Freshwater angelfish commonly reach several years to a decade in well-managed aquaria. Comparing captive numbers across the three requires caution, because husbandry difficulty differs so much.",
      conservation:
        "The pressure on these fishes is mostly indirect. Anemonefishes depend on host anemones, which bleach when reef waters warm, so heat events threaten the partnership rather than the fish alone. Marine angelfishes are affected by both reef degradation and collection for the trade. Freshwater angelfish face habitat change in the Amazon basin, though the ornamental supply is overwhelmingly captive-bred.",
      petContext:
        "All three groups are kept, and none of them is a casual acquisition. Marine angelfishes in particular have specialised diets that many aquaria cannot meet, and clownfish welfare is bound up with whether a system supports them properly over years. Suitability depends on the household, local law, welfare capacity and long-term responsibility, and any health question belongs with a veterinarian experienced in fish.",
    },
    faqs: [
      {
        question: "Is the freshwater angelfish related to the angelfish on coral reefs?",
        answer:
          "No. The freshwater fish is a South American cichlid and the reef fishes belong to a separate marine family whose closest relatives are the butterflyfishes. They share a common name because both are deep-bodied, laterally flattened and showy, which was enough for early trade naming. Nothing about the freshwater fish's biology, from its pair spawning to its water chemistry, transfers to the marine group.",
      },
      {
        question: "Why do clownfish live in anemones when angelfish never do?",
        answer:
          "Anemonefishes evolved a tolerance for the stinging cells of a small number of host anemone species and gained near-permanent shelter from predators in exchange for defending and cleaning the host. Neither angelfish group has that tolerance, so an anemone offers them nothing but risk. The partnership also shapes clownfish social structure, because the host defines the territory the whole group lives in.",
      },
      {
        question: "Do clownfish really change sex, and do angelfish do the same?",
        answer:
          "Clownfish are protandrous: all mature fish start as males, and when the breeding female of a group is lost the dominant male changes to female while the next fish in line matures to breed. Several marine angelfishes change sex in the opposite direction, from female to male. The freshwater cichlid angelfish does not change sex at all, so this trait cannot be generalised across the name.",
      },
      {
        question: "Are Atlantic and Caribbean clownfish a thing?",
        answer:
          "No. Anemonefishes are restricted to the Indo-Pacific and the Red Sea, with none native to the Atlantic or the Caribbean. Marine angelfishes, by contrast, do occur in the Caribbean, which is one reason the two get muddled in holiday photographs. If an image is described as a clownfish on a Caribbean reef, either the location or the identification is wrong.",
      },
      {
        question: "Both have vertical bars, so how do I tell them apart in a photograph?",
        answer:
          "Compare band colour and background rather than band presence. Clownfish have white or pale bars edged in black over orange, red or near-black, on a rounded thickset body. Freshwater angelfish have dark bars over silver on a tall disc with long chest threads. Marine angelfishes vary far more, with scribbles, spots and curved bands, and are deeper-bodied with a small mouth and a cheek spine.",
      },
    ],
    commonConfusions: [
      "Reading angelfish as one kind of fish when it names both a freshwater cichlid and a marine reef family.",
      "Placing clownfish on Caribbean reefs, where anemonefishes do not naturally occur.",
      "Assuming any brightly barred reef fish beside an anemone must be a clownfish rather than a passing damselfish.",
    ],
    similarities: [
      "Both names cover laterally flattened, boldly patterned fishes popular in the ornamental trade.",
      "Both show vertical banding that helps break up outline against structured backgrounds.",
      "Both defend territory and both lay adhesive eggs on a cleaned surface guarded by parents.",
      "Both have been bred in captivity, though with very different degrees of success by group.",
    ],
    keyDifferences: [
      "Clownfish are damselfishes; the angelfish name spans an unrelated cichlid and an unrelated reef family.",
      "Clownfish live in obligate partnership with sea anemones, which no angelfish does.",
      "Clownfish change from male to female, while sex change in marine angelfishes runs the other way.",
      "Marine angelfishes carry a diagnostic spine on the cheek plate that damselfishes lack.",
      "Clownfish are Indo-Pacific only, whereas marine angelfishes also occur in the Atlantic and Caribbean.",
    ],
    petBoundary:
      "Nothing here recommends keeping any of these fishes. Marine species in particular have demanding dietary and water requirements, and any decision depends on the household, local law, welfare capacity and access to a veterinarian experienced with fish.",
    taxonomyCaveat:
      "Angelfish is a shared common name for two unrelated groups, and clownfish covers roughly thirty anemonefish species. Statements on this page describe typical members and should be checked against the specific species a source names.",
    conservationCaveat:
      "Reef warming, host-anemone bleaching and collection pressure affect these groups differently and change over time. Consult the current IUCN Red List entry for any individual species rather than generalising from the group.",
    relatedComparisonSlugs: [
      "betta-fish-vs-angelfish",
      "coral-vs-sea-anemone",
      "seahorse-vs-leafy-seadragon",
      "pufferfish-vs-boxfish",
    ],
    relatedHubPaths: ["/animal-encyclopedia/marine-animals", "/fish", "/aquarium-care"],
    sourceIds: ["adw", "smithsonian-ocean", "worms"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "parrot-vs-african-grey-parrot",
    animalA: { slug: "parrot", name: "Parrot" },
    animalB: { slug: "african-grey-parrot", name: "African Grey Parrot" },
    title: "Parrot vs African Grey Parrot",
    metaTitle: "Parrot vs African Grey Parrot — Order, Species & Range",
    metaDescription:
      "The African grey is one species of West and Central African forest parrot inside an order of several hundred. How the nested names actually fit together.",
    shortAnswer:
      "Parrot is an order of birds holding several hundred species across four families, spread through the tropics and reaching temperate South America, Africa, Asia and Australasia. The African grey is a single species within it: a medium-large forest parrot of West and Central Africa, scalloped grey with a bare white face patch, a black bill and a scarlet tail. Every African grey is a parrot, but the great majority of parrots are not greys.",
    primaryCategory: "pets-domestic",
    secondaryCategories: [],
    relationship: "species-vs-group",
    confidence: "strong",
    searchIntent: "taxonomy",
    whyCompare:
      "The African grey is often discussed as though it were a category of its own rather than one species in a very large order, and the containment relationship is what a reader searching these two terms together actually needs.",
    centralDifference:
      "Parrot names an entire order of several hundred species, while African grey names one African forest species inside it.",
    dimensions: [
      {
        id: "rank",
        label: "Rank of the name",
        animalAValue: "An order of birds, divided into four families and several hundred living species",
        animalBValue: "A single species, with a close relative usually treated as a separate species",
        interpretation: "One name sits several levels above the other, so they are not alternatives.",
        caveat: "Species totals for the order differ between authorities as populations are split or merged.",
      },
      {
        id: "range",
        label: "Range",
        animalAValue: "Tropical and southern regions of the Americas, Africa, Asia and Australasia, plus introduced city populations",
        animalBValue: "Lowland rainforest and forest edge across West and Central Africa",
        interpretation: "The grey occupies a small slice of a distribution that spans most warm continents.",
      },
      {
        id: "plumage",
        label: "Plumage",
        animalAValue: "Highly variable, including greens, reds, blues, yellows, black, white and pink across the order",
        animalBValue: "Grey with pale scalloped feather edges, bare whitish facial skin and a scarlet tail",
        interpretation: "The order's palette is enormous; the grey's is one of the most restrained in it.",
      },
      {
        id: "size",
        label: "Size span",
        animalAValue: "From tiny pygmy parrots barely longer than a finger to macaws approaching a metre in total length",
        animalBValue: "Medium-large, roughly a third of a metre in body length, stockily built",
        interpretation: "Any size statement about parrots in general is meaningless without a species attached.",
      },
      {
        id: "voice",
        label: "Voice and mimicry",
        animalAValue: "Vocal learning is widespread in the order, but skill at imitating human speech varies enormously",
        animalBValue: "Widely regarded as among the clearest mimics, reproducing speech, whistles and household sounds",
        interpretation: "The grey's reputation is real but should not be projected onto parrots as a whole.",
      },
      {
        id: "trade-status",
        label: "Position in trade regulation",
        animalAValue: "Regulated species by species, with many parrots restricted and some traded widely",
        animalBValue: "Subject to the strictest international commercial trade controls following heavy wild capture",
        interpretation: "The grey is a specific regulatory case rather than an example of how all parrots are treated.",
      },
    ],
    narrative: {
      taxonomy:
        "Parrots form the order Psittaciformes, conventionally split into the New Zealand parrots, the cockatoos, the true parrots and the Old World parrots and allies. The African grey sits in the true parrot family, in an African genus of its own. What was once treated as a single grey species with a western subspecies is now generally split, with the Timneh recognised separately, so sources published before and after that split describe the birds differently.",
      identification:
        "An African grey is unmistakable within the order: pale-edged grey body feathers giving a scaled look, bare whitish skin around a pale yellow eye, a heavy black bill and a bright scarlet tail. The Timneh is smaller and darker with a maroon tail and a horn-coloured patch on the upper bill. No other parrot combines grey plumage with a red tail, so identification is straightforward once the possibility of a grey is in mind.",
      habitat:
        "Parrots as a whole occupy rainforest, dry woodland, savanna, mangrove, montane scrub, grassland and increasingly cities, with feral populations established well outside native ranges. The African grey is far narrower: lowland moist forest, forest edge, gallery forest and cultivated ground near forest across a broad West and Central African band, with a strong association with oil palm and with large trees offering nesting cavities.",
      diet:
        "Most parrots are seed and fruit specialists with strong bills for crushing hard casings and a mobile tongue for manipulating food, and some take nectar, buds, bark or insects seasonally. The African grey feeds heavily on the fruit of oil palm alongside other seeds, nuts and fruits, foraging in the canopy in pairs or small parties that gather into larger numbers at roosts and at good food sources.",
      behavior:
        "Across the order, parrots are long-lived, socially complex, cavity-nesting birds with slow reproduction and considerable vocal learning. African greys gather at communal roosts, sometimes in substantial numbers, dispersing to forage by day and returning at dusk, and pairs nest in tree cavities. Captive greys are known for close attachment to routine and for behavioural problems when kept without company or occupation, which is a welfare matter rather than a character trait.",
      humanRelationship:
        "Parrots have been kept and traded for millennia and many species have suffered for it, through capture for the pet trade and through loss of the mature trees they need for nesting. The African grey is the sharpest example: sustained heavy capture from the wild led to the strictest tier of international trade restriction, which was adopted after a long period of unsustainable export. Enforcement remains uneven and domestic markets persist in some range states.",
      whichIsWhich:
        "A grey bird with a scaled look, a bare pale face and a red tail is an African grey. Any other parrot is still a parrot, but it is not a grey. If a source treats parrot and African grey as two comparable options, it has made a rank error: one name is the order and the other is one species inside it.",
      sensesAdaptations:
        "Parrots share a zygodactyl foot with two toes forward and two back, used to hold and manipulate food with a dexterity almost unique among birds, and a hinged upper bill that increases crushing power. Greys add unusually flexible vocal learning; published work with individual captive birds has shown categorisation and label use, though these studies involve very small numbers of intensively trained individuals and should not be read as species-wide ability.",
      lifespan:
        "Parrots are long-lived for their size across the order, and large species regularly outlast the households that acquire them. African greys are commonly cited as living several decades in captivity, with individual claims running higher and wild figures poorly documented. Longevity depends on diet, social conditions and veterinary care, and quoted maxima describe exceptional captive individuals rather than what an average bird can be expected to reach.",
      conservation:
        "Many parrots are declining, and the order contains a disproportionate share of threatened bird species relative to its size, driven by habitat loss and capture. The African grey has been assessed at a high threat level following steep declines in parts of its range, with local extirpations reported. Status assessments are periodically revised as new survey data arrives.",
      petContext:
        "An African grey is a decades-long commitment for a highly social, intelligent, loud animal with substantial behavioural needs, and legal ownership requires documented captive-bred origin in most countries. Suitability depends on the household, local law, welfare capacity and long-term responsibility, including provision for the bird outliving its keeper. Health and behaviour questions belong with a veterinarian experienced in birds.",
    },
    faqs: [
      {
        question: "Is every grey-coloured parrot an African grey?",
        answer:
          "No. Several parrots have grey in the plumage, including the galah, which is pink and grey, and various duller-coloured species. The African grey is defined by the full combination: uniformly grey scalloped body feathers, bare pale facial skin, a black bill and a scarlet tail. Grey plumage alone is not enough, and the red tail is the feature most often missing from lookalike claims.",
      },
      {
        question: "What separates a Congo African grey from a Timneh?",
        answer:
          "The Timneh is smaller and darker overall, with a maroon or dark chestnut tail rather than scarlet, and a horn-coloured patch on the upper bill instead of solid black. It occupies a more westerly range within West Africa. Formerly treated as a subspecies, it is now generally recognised as a separate species, which is why older and newer sources present the group differently.",
      },
      {
        question: "Why is the African grey singled out in international trade rules?",
        answer:
          "Because wild capture on a very large scale, sustained over decades, was linked to sharp declines and local disappearances across parts of its range. That evidence led to the species being moved to the strictest tier of international trade control, which bars commercial trade in wild-caught birds between signatory countries. Enforcement varies and domestic trade within range states remains a documented pressure.",
      },
      {
        question: "Do all parrots mimic speech as clearly as African greys?",
        answer:
          "No. Vocal learning is widespread across the order, but the clarity and range of human speech imitation varies enormously between species and between individuals of the same species. Greys and some mynah-like mimics outside the order are exceptional cases. Many parrots imitate very little, and no parrot's mimicry should be taken as evidence of language use, since imitation and comprehension are separate questions.",
      },
      {
        question: "Is an African grey a kind of cockatoo?",
        answer:
          "No. Cockatoos are a separate family within the parrot order, distinguished by an erectile crest, powder down and a colour palette dominated by white, black, grey and pink rather than green. The African grey belongs to the true parrot family and has no crest. The two lineages diverged well before either reached its present form, so the resemblance is one of order, not of family.",
      },
    ],
    commonConfusions: [
      "Treating parrot and African grey as two comparable kinds of bird rather than an order and a species inside it.",
      "Assuming any grey parrot is an African grey without checking for the scarlet tail and bare face.",
      "Reading older sources that treat the Timneh as a subspecies rather than a separate species.",
    ],
    similarities: [
      "The African grey shares every defining parrot trait: hooked bill, zygodactyl feet and cavity nesting.",
      "Both the order in general and the grey in particular are long-lived and slow to reproduce.",
      "Both show vocal learning, with calls varying between populations across many parrot species.",
      "Both are affected by the same twin pressures of habitat loss and capture for trade.",
    ],
    keyDifferences: [
      "Parrot is an order of several hundred species; African grey is one species within it.",
      "The order spans several continents, while the grey is confined to West and Central African forest.",
      "Parrot plumage covers the full spectrum, whereas the grey is grey with a scarlet tail.",
      "Parrot sizes run from finger-length to nearly a metre; the grey is medium-large and stocky.",
      "The grey carries the strictest international trade restriction, which does not apply to parrots generally.",
    ],
    petBoundary:
      "This page does not recommend acquiring a parrot of any species. Greys are loud, long-lived, highly social animals whose suitability depends on household, local law, documented legal origin, welfare capacity and long-term responsibility, with care questions directed to an avian veterinarian.",
    taxonomyCaveat:
      "Parrot names an order whose species total varies between authorities, and the grey group has been split into two species in recent treatments. Compare like with like by naming the species a source means.",
    conservationCaveat:
      "Parrot conservation statuses change as surveys and trade data are updated, and the African grey has been reassessed within the last decade. Check the current IUCN Red List entry rather than relying on a figure quoted here.",
    relatedComparisonSlugs: [
      "parrot-vs-macaw",
      "macaw-vs-african-grey-parrot",
      "parrot-vs-galah",
      "parrot-vs-crow",
    ],
    relatedHubPaths: ["/birds", "/bird-care", "/animal-encyclopedia/birds"],
    sourceIds: ["adw", "iucn", "britannica"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "parrot-vs-macaw",
    animalA: { slug: "parrot", name: "Parrot" },
    animalB: { slug: "macaw", name: "Macaw" },
    title: "Parrot vs Macaw",
    metaTitle: "Parrot vs Macaw — Order, Tail, Bare Face & Range",
    metaDescription:
      "Macaws are long-tailed New World parrots with bare facial skin, forming a group inside the parrot order rather than an alternative to it.",
    shortAnswer:
      "Macaws are parrots. The name picks out a set of large, long-tailed parrots of Central and South America, spread across several genera and united chiefly by size, a very long graduated tail and an area of bare facial skin marked with fine lines of tiny feathers. Parrot, meanwhile, is the whole order, covering everything from finger-sized pygmy parrots in New Guinea to cockatoos, lorikeets and the flightless kakapo.",
    primaryCategory: "pets-domestic",
    secondaryCategories: [],
    relationship: "species-vs-group",
    confidence: "representative",
    searchIntent: "taxonomy",
    whyCompare:
      "Macaw is used so often as if it were a category parallel to parrot that the containment gets lost, and the group's own boundary is worth explaining because it rests partly on convention rather than on a clean branch of the family tree.",
    centralDifference:
      "Macaw is a shape-and-size grouping of long-tailed, bare-faced New World parrots; parrot is the order that contains them along with every other parrot lineage.",
    dimensions: [
      {
        id: "scope",
        label: "What the name covers",
        animalAValue: "The full order, four families, several hundred species across the warmer parts of the world",
        animalBValue: "Around a dozen and a half living species spread across several closely related genera",
        interpretation: "Macaws are a slice of one family, not a rank sitting beside the order.",
        caveat: "The exact number of macaw species depends on how the smaller green species are treated by an authority.",
      },
      {
        id: "tail",
        label: "Tail",
        animalAValue: "Ranges from very short and square, as in many cockatoos, to long and pointed",
        animalBValue: "Very long and strongly graduated, often as long as or longer than the body",
        interpretation: "Tail length is the most reliable field cue that a large parrot is a macaw.",
      },
      {
        id: "facial-skin",
        label: "Face",
        animalAValue: "Usually feathered to the bill, with bare skin restricted to particular groups",
        animalBValue: "A conspicuous bare patch of pale skin crossed by fine lines of minute feathers",
        interpretation: "The bare, lined face is the single most macaw-specific external feature.",
      },
      {
        id: "range",
        label: "Native range",
        animalAValue: "South and Central America, Africa, southern Asia, Australasia and many islands",
        animalBValue: "Central and South America only, mainly lowland forest, gallery woodland and wooded savanna",
        interpretation: "Macaws are exclusively New World, so an African or Australian bird is never one.",
      },
      {
        id: "bill-and-food",
        label: "Bill and food handling",
        animalAValue: "Hooked bills built for seeds, fruit, nectar, buds or bark depending on lineage",
        animalBValue: "Exceptionally deep and powerful bills used on hard palm nuts and large seeds",
        interpretation: "Macaws sit at the heavy-duty end of a food-processing range the order spans.",
      },
      {
        id: "clay-licks",
        label: "Clay licks",
        animalAValue: "Soil eating is recorded in several parrot groups but is not a general order-wide behaviour",
        animalBValue: "Regular gatherings at exposed riverbank clay are a well-documented feature in parts of Amazonia",
        interpretation: "The clay lick is a recognisable macaw spectacle rather than something all parrots do.",
        caveat: "Explanations for soil eating include mineral supplementation and buffering of plant compounds; the balance of causes is still debated.",
      },
    ],
    narrative: {
      taxonomy:
        "Macaws belong to the true parrot family and, within it, to the New World parrot radiation that also contains conures, amazons and parrotlets. They are spread across several genera rather than confined to one, and the boundary between the smallest macaws and the largest conures is partly a matter of convention. That makes macaw a useful descriptive grouping rather than a formal rank, unlike parrot, which names the order Psittaciformes itself.",
      identification:
        "Size and tail do most of the work. A macaw in flight shows a long, tapering, strongly graduated tail streaming behind broad wings, and at rest the tail often reaches or passes the perch. Close to, the bare facial skin, crossed by fine lines of tiny feathers, confirms it. Colour varies enormously across the group, from deep cobalt in the largest species to scarlet, blue and gold, and green in the smaller ones.",
      habitat:
        "The order occupies rainforest, dry woodland, savanna, montane scrub, mangrove, island forest and increasingly urban parks where feral flocks have established. Macaws are tied to the Neotropics, favouring lowland humid forest, seasonally flooded forest, palm swamp and wooded savanna, with several species dependent on particular palms both for food and for nest cavities in dead palm stubs. A few use cliff faces rather than trees for nesting.",
      diet:
        "Parrots span seed eating, fruit eating, nectar feeding, bark stripping and, in a few cases, more unusual diets, with bill shape tracking the strategy. Macaws specialise at the hard end, opening palm nuts and large seeds that few other animals can process, which makes them significant seed predators and, through dropped and cached items, occasional dispersers. Several species depend heavily on specific palm species across the year.",
      behavior:
        "Parrots as a group are social, long-lived, cavity-nesting birds with slow reproduction and strong pair bonds. Macaws show this pattern strongly: pairs fly close together within larger flocks, keep contact with loud far-carrying calls, and in several Amazonian regions gather in mixed flocks at exposed clay banks in the morning. Nesting depends on large cavities in mature or dead trees, which are a limiting resource in logged landscapes.",
      humanRelationship:
        "Both the order and this group have been shaped by capture for trade and by loss of the mature trees they nest in. Macaws are conspicuous, valuable and slow-breeding, a combination that has driven several species to very small numbers, including one that survives essentially through captive breeding and reintroduction after disappearing from the wild. Nest protection, community monitoring and artificial cavities have produced local recoveries in some areas.",
      whichIsWhich:
        "A very large parrot with a streaming graduated tail and a bare, finely lined face, seen in the Americas, is a macaw. Any parrot lacking that combination is still a parrot but not a macaw. Comparing the two as alternatives is a rank error: one is the order, the other is a group of large species within a single family in it.",
      sensesAdaptations:
        "The macaw bill is a powerful lever with a hinged upper mandible, a heavy keratin edge and a muscular tongue that positions nuts precisely, letting the bird open casings that resist most other animals. Colour vision in parrots extends into the ultraviolet, and some plumage patches reflect ultraviolet light, which means the birds see one another differently from how people see them. Both traits are order-wide, but the macaw bill is an extreme case.",
      lifespan:
        "Large parrots are among the longest-lived birds relative to their size, and macaws are frequently cited as living several decades. Well-attested captive individuals have reached advanced ages, but figures circulated for exceptional birds are often unverified, and wild lifespans are much less well documented than captive ones. Small parrots live far shorter lives, so no single number describes the order as a whole.",
      conservation:
        "Parrots contain a high proportion of threatened species for their number, and macaws are among the most affected because they combine large body size, slow reproduction, dependence on mature nesting trees and high value in trade. Some species remain locally common across large areas while others persist in tiny fragmented populations, so group-level statements about macaw conservation are unreliable and a status quoted for one species tells you nothing dependable about another.",
      petContext:
        "Macaws are among the largest, loudest and longest-lived birds kept in homes, with needs for space, occupation and social contact that most households cannot meet, and legal origin documentation matters. Suitability depends on the household, local law, welfare capacity and long-term responsibility, including planning for a bird that may outlive its keeper. Care questions belong with an avian veterinarian.",
    },
    faqs: [
      {
        question: "Is a macaw a parrot, or a separate kind of bird?",
        answer:
          "A macaw is a parrot. The name identifies a set of large, long-tailed, bare-faced species within the New World branch of the true parrot family, which itself sits inside the parrot order. Treating macaw and parrot as alternatives is like contrasting spaniels with dogs. Every trait that defines the order, from the hooked bill to the two-forward two-back toe arrangement, is present in macaws.",
      },
      {
        question: "What makes a macaw a macaw rather than a conure?",
        answer:
          "Chiefly size, tail proportion and the bare facial skin. Macaws are large with very long graduated tails and conspicuous unfeathered faces marked by fine feather lines, while conures are smaller and generally feathered to the bill. The two groups are close relatives within the same radiation, and the smaller green macaws sit near the boundary, so the division reflects convention as much as a sharp break in the family tree.",
      },
      {
        question: "Why do macaws gather at riverbank clay banks?",
        answer:
          "Large flocks visit exposed clay in parts of Amazonia, often in the early morning, and eat the soil directly. Two explanations dominate the literature: obtaining sodium and other minerals scarce in a seed and fruit diet, and binding plant compounds present in unripe seeds. Evidence has been offered for both, they are not mutually exclusive, and the relative importance is still an open question.",
      },
      {
        question: "Are all macaws blue and gold?",
        answer:
          "No. The group includes a deep cobalt species that is the longest of all parrots, a predominantly scarlet species, a red and green species, several smaller mostly green birds, and the pale blue species that vanished from the wild and has been the focus of a reintroduction programme. Colour therefore identifies the species, not the group; tail length and bare facial skin identify the group.",
      },
      {
        question: "Do macaws need big old trees the way other parrots do?",
        answer:
          "Even more so. Almost all parrots nest in cavities they cannot excavate themselves, so they depend on holes formed by decay in mature trees. Because macaws are large, the cavities they need are correspondingly large and therefore rarer, and several species use dead palm stubs or cliff faces instead. Selective logging that removes big old trees can suppress breeding long before adult birds disappear.",
      },
    ],
    commonConfusions: [
      "Contrasting macaws with parrots as though they were parallel categories rather than a group inside an order.",
      "Assuming a long-tailed green parrot in Africa or Asia might be a macaw, when the group is exclusively American.",
      "Treating the boundary between the smallest macaws and the largest conures as sharper than it is.",
    ],
    similarities: [
      "Macaws carry every order-level parrot trait: hooked bill, zygodactyl feet, cavity nesting and vocal learning.",
      "Both the order broadly and macaws specifically are long-lived with slow reproductive rates.",
      "Both form strong pair bonds within larger flocks and keep contact with loud calls.",
      "Both are heavily affected by trade capture and by the loss of mature nesting trees.",
    ],
    keyDifferences: [
      "Parrot is the whole order; macaw is a group of large species within one family in it.",
      "Macaws have very long graduated tails, while the order includes many short square-tailed species.",
      "Bare, finely lined facial skin is typical of macaws and unusual elsewhere among parrots.",
      "Macaws are restricted to Central and South America, whereas parrots occur across several continents.",
      "Macaw bills are built for palm nuts and hard seeds at the extreme end of the order's range.",
    ],
    petBoundary:
      "No recommendation to acquire a macaw is made here. These are very large, loud, decades-long commitments whose suitability depends on household, local law, documented legal origin, welfare capacity and long-term responsibility, with care questions directed to an avian veterinarian.",
    taxonomyCaveat:
      "Macaw is a descriptive grouping across several genera rather than a formal rank, and the species total varies with how smaller green species are treated. Parrot names the order, whose species count also differs between authorities.",
    conservationCaveat:
      "Macaw species range from locally common to critically reduced, and statuses are revised as surveys and trade data change. Check the current IUCN Red List entry for the individual species concerned.",
    relatedComparisonSlugs: [
      "parrot-vs-african-grey-parrot",
      "macaw-vs-african-grey-parrot",
      "parrot-vs-galah",
      "toucan-vs-hornbill",
    ],
    relatedHubPaths: ["/animal-encyclopedia/birds", "/birds", "/animal-taxonomy/vertebrates"],
    sourceIds: ["adw", "britannica", "iucn"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "macaw-vs-african-grey-parrot",
    animalA: { slug: "macaw", name: "Macaw" },
    animalB: { slug: "african-grey-parrot", name: "African Grey Parrot" },
    title: "Macaw vs African Grey Parrot",
    metaTitle: "Macaw vs African Grey Parrot — Size, Colour & Voice",
    metaDescription:
      "Neotropical macaws are big, bright and long-tailed; the African grey is a stocky forest bird known for clear mimicry. Two large parrots compared honestly.",
    shortAnswer:
      "Macaws are large Neotropical parrots with very long graduated tails, bare lined faces and vivid plumage, and their voices are loud far-carrying screeches rather than fine imitation. The African grey is a stockier, shorter-tailed African forest bird, scalloped grey with a scarlet tail, and it is the one with the reputation for reproducing human speech and household sounds clearly. Different continents, different lineages within the same family, different vocal profiles.",
    primaryCategory: "pets-domestic",
    secondaryCategories: [],
    relationship: "close-relatives",
    confidence: "representative",
    searchIntent: "pet-decision",
    whyCompare:
      "These are the two large parrots most often weighed against each other, and the honest comparison is about continent, body plan, vocal profile and the very different demands each places on a household over decades.",
    centralDifference:
      "The macaw group is a set of long-tailed, bright, loud American parrots, while the African grey is a single grey African species known instead for clear vocal imitation.",
    dimensions: [
      {
        id: "geography",
        label: "Where they come from",
        animalAValue: "Lowland forest, palm swamp and wooded savanna in Central and South America",
        animalBValue: "Lowland rainforest and forest edge across West and Central Africa",
        interpretation: "Two independent parrot radiations on two continents, which is why the body plans diverge.",
      },
      {
        id: "size-and-tail",
        label: "Size and tail",
        animalAValue: "Large to very large, with a graduated tail often as long as the body",
        animalBValue: "Medium-large and stocky, with a short square scarlet tail",
        interpretation: "Silhouette separates them instantly, even before colour registers.",
        caveat: "Macaw sizes vary greatly between species, and the smaller green macaws are far closer to a grey in bulk.",
      },
      {
        id: "plumage",
        label: "Plumage",
        animalAValue: "Vivid, with cobalt, scarlet, gold, green and red combinations across the group",
        animalBValue: "Grey with pale feather edging giving a scaled appearance, plus a scarlet tail",
        interpretation: "One group advertises with colour, the other is cryptic against forest canopy shadow.",
      },
      {
        id: "face",
        label: "Face",
        animalAValue: "Large bare patch of pale skin crossed by fine lines of minute feathers",
        animalBValue: "Bare whitish skin restricted to a mask around a pale yellow eye",
        interpretation: "Both show bare facial skin, but the extent and pattern differ clearly.",
      },
      {
        id: "voice",
        label: "Vocal profile",
        animalAValue: "Loud, harsh, far-carrying screeches used for contact across forest distances",
        animalBValue: "Whistles, clicks and notably clear imitation of speech and household sounds",
        interpretation: "Volume and imitation are different abilities, and the two birds sit at different points on each.",
        caveat: "Individual variation is large in both, and no bird can be assumed to imitate speech at all.",
      },
      {
        id: "foraging",
        label: "Foraging",
        animalAValue: "Hard palm nuts and large seeds opened with an exceptionally deep bill",
        animalBValue: "Oil palm fruit, other fruits, seeds and nuts taken in the canopy",
        interpretation: "Both are canopy feeders, but the macaw bill handles a harder class of food.",
      },
      {
        id: "trade-pressure",
        label: "Pressure from trade",
        animalAValue: "Long-standing capture and habitat loss, with several species reduced to small populations",
        animalBValue: "Sustained large-scale wild capture led to the strictest tier of international trade control",
        interpretation: "Both groups have been shaped by demand, in different regulatory contexts.",
      },
    ],
    narrative: {
      taxonomy:
        "Both sit in the true parrot family but in different branches of it: macaws belong to the New World radiation alongside conures and amazons, while the African grey belongs to an African lineage in a genus of its own. Macaw covers several genera and roughly a dozen and a half living species, whereas grey covers one species, with the Timneh now usually recognised as a second. So this compares a group against a species.",
      identification:
        "There is no real risk of confusing them in life. A macaw is large, brilliantly coloured, and trails a long graduated tail with a broad bare face patch marked by fine feather lines. An African grey is stockier, uniformly grey with pale-edged feathers producing a scaled look, has a short square scarlet tail, and shows bare whitish skin only as a mask around a pale eye. Bill colour differs too: black in the grey, varying in macaws.",
      habitat:
        "Macaws occupy Neotropical lowland humid forest, seasonally flooded forest, palm swamp and wooded savanna, and several species are closely tied to particular palms for food and nest sites. African greys occupy West and Central African lowland moist forest, forest edge, gallery forest and nearby cultivation, with a strong association with oil palm. Both need large cavities in mature trees, and both suffer when logging removes those trees.",
      diet:
        "Both are canopy feeders on fruit, seeds and nuts, and both are largely seed predators rather than dispersers, though dropped items disperse incidentally. Macaws process harder material, opening palm nuts and armoured seeds that most animals cannot. Greys take oil palm fruit heavily alongside other fruits and seeds. Neither diet translates into feeding advice for captive birds, which is a matter for an avian veterinarian.",
      behavior:
        "Both form strong pair bonds inside larger flocks and both use loud contact calls, but the social pattern differs in emphasis. Macaws are often seen as tight pairs flying within flocks, with mixed gatherings at clay banks in parts of Amazonia. Greys form large communal roosts, dispersing to forage by day and returning at dusk, sometimes in substantial numbers. Both are cavity nesters with slow reproduction and extended parental care.",
      humanRelationship:
        "Both have been captured for the international pet trade at scale and both are limited by loss of the mature trees they nest in. The African grey's case led to the strictest international commercial trade restriction after decades of very heavy export. Several macaws have been reduced to small fragmented populations, with one surviving through captive breeding and reintroduction after disappearing from the wild. Nest protection projects have produced local improvements for both.",
      whichIsWhich:
        "Long streaming tail, bright colour, broad lined bare face, American forest: macaw. Compact grey bird with scaled feather edges, a short scarlet tail and a pale-eyed mask, African forest: African grey. If the striking feature is colour, it is a macaw; if the striking feature is the clarity of an imitated phrase, a grey is the more likely source.",
      sensesAdaptations:
        "Both share parrot colour vision extending into the ultraviolet, which means plumage they see is not the plumage people see, and both have the hinged upper bill and dexterous zygodactyl feet of the order. The macaw bill is an extreme lever built for hard casings. The grey's specialism is vocal: published work with individual intensively trained captive birds has shown label use and categorisation, though such findings rest on very few individuals.",
      lifespan:
        "Both are long-lived, which is the single most underestimated fact about either. Large macaws and African greys are both commonly described as reaching several decades in captivity, with individual claims running higher and wild figures far less well documented. Longevity depends on diet, social conditions, and veterinary care, and headline maxima describe exceptional birds rather than an expectation. Either bird can outlive the household that acquires it.",
      conservation:
        "Both groups carry a high threat burden relative to their numbers. Several macaw species persist in small or fragmented populations while others remain locally common, so group statements mislead. The African grey has been assessed at a high threat level following steep declines in parts of its range. Assessments are revised as new survey and trade data arrive.",
      petContext:
        "Neither bird is a lifestyle accessory and no ranking between them is offered. Both are loud, socially demanding, long-lived animals that require documented legal origin, sustained occupation and company, and planning for decades of care. Suitability depends entirely on the household, local law, welfare capacity and long-term responsibility, and every health or behaviour question belongs with a veterinarian experienced in birds.",
    },
    faqs: [
      {
        question: "Do African greys really imitate speech better than macaws?",
        answer:
          "Greys have a strong and long-standing reputation for clear imitation of speech, whistles and household sounds, and macaws are generally described as louder but less precise. Individual variation is large in both, and many birds of either group imitate little or nothing. It is also worth separating imitation from comprehension: reproducing a phrase accurately is not by itself evidence that a bird understands it.",
      },
      {
        question: "How much bigger is a macaw than an African grey?",
        answer:
          "The largest macaws substantially exceed a grey in both length and bulk, with much of that length in a long graduated tail, while a grey is a compact bird with a short square tail. The gap narrows considerably for the smaller green macaws, which approach a grey in body mass. Because macaw covers several genera, size comparisons need a named species to mean anything.",
      },
      {
        question: "Are macaws and African greys close relatives?",
        answer:
          "They are in the same family but on different branches of it. Macaws belong to the New World parrot radiation that also includes conures and amazons, while the African grey belongs to an African lineage. That places them closer to each other than either is to a cockatoo, but they are not near relatives, and their similarities are mostly order-level parrot traits rather than shared recent ancestry.",
      },
      {
        question: "Why are both under international trade restriction?",
        answer:
          "Because both combine high demand with slow reproduction and dependence on mature nesting trees. The African grey was moved to the strictest tier of control after decades of very heavy wild capture linked to steep declines. Several macaws are similarly restricted, including species reduced to small populations. Restriction targets commercial trade in wild-caught birds rather than legitimately documented captive-bred stock.",
      },
      {
        question: "Which of the two is the louder bird in a home?",
        answer:
          "Large macaws are generally described as producing the greater volume, with harsh screeches evolved to carry across forest, and that carries into domestic settings. Greys are quieter in raw volume but persistent and varied, and imitated sounds including alarms and telephones can be equally disruptive. Neither is a quiet animal, and volume is one of the most commonly underestimated aspects of keeping either.",
      },
    ],
    commonConfusions: [
      "Treating macaw as a single species when it spans several genera of very different size.",
      "Assuming any large parrot that imitates speech must be an African grey, when mimicry occurs across the order.",
      "Reading colour as the main difference and missing that tail proportion separates them more reliably.",
    ],
    similarities: [
      "Both are true parrots with hooked bills, zygodactyl feet and ultraviolet-sensitive colour vision.",
      "Both are canopy feeders on fruit, seeds and nuts in tropical lowland forest.",
      "Both nest in cavities in mature trees and reproduce slowly with extended parental care.",
      "Both have been heavily affected by capture for the international pet trade and by logging.",
    ],
    keyDifferences: [
      "Macaws are Neotropical; the African grey is confined to West and Central African forest.",
      "Macaws have very long graduated tails, whereas the grey's tail is short and square.",
      "Macaw plumage is vivid, while the grey is scalloped grey with a scarlet tail.",
      "Macaw voices are loud screeches; the grey is known instead for clear imitation.",
      "Macaw covers several genera and species, while African grey names a single species.",
    ],
    petBoundary:
      "No better-pet verdict is given here, and nothing on this page recommends acquiring either bird. Both are decades-long commitments whose suitability depends on household, local law, documented legal origin, welfare capacity and access to an avian veterinarian.",
    taxonomyCaveat:
      "Macaw is a descriptive grouping spanning several genera, so this page compares typical macaws with one species. The grey group has also been split, with the Timneh usually treated as a separate species.",
    conservationCaveat:
      "Statuses for individual macaw species and for the African grey differ and are revised periodically. Consult the current IUCN Red List entry for the specific species rather than the group.",
    relatedComparisonSlugs: [
      "parrot-vs-macaw",
      "parrot-vs-african-grey-parrot",
      "parrot-vs-galah",
      "toucan-vs-hornbill",
    ],
    relatedHubPaths: ["/bird-care", "/birds", "/animal-intelligence-and-behavior"],
    sourceIds: ["adw", "britannica", "iucn"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "parrot-vs-galah",
    animalA: { slug: "parrot", name: "Parrot" },
    animalB: { slug: "galah", name: "Galah" },
    title: "Parrot vs Galah",
    metaTitle: "Parrot vs Galah — Cockatoo Family, Crest & Colour",
    metaDescription:
      "The galah is an Australian cockatoo, and cockatoos are one family inside the parrot order. Crest, powder down and a green-free palette explain the split.",
    shortAnswer:
      "A galah is a parrot, specifically a pink and grey cockatoo of open Australian country. Cockatoos form one of the four families inside the parrot order and differ from other parrots in three visible ways: a mobile erectile crest, powder down that leaves a fine dust on the feathers, and a palette of white, black, grey, pink and yellow with no true green. The galah shows all three.",
    primaryCategory: "pets-domestic",
    secondaryCategories: [],
    relationship: "species-vs-group",
    confidence: "strong",
    searchIntent: "taxonomy",
    whyCompare:
      "Cockatoos are often spoken about as though they sat outside the parrots, and the galah is the most familiar member in Australia, so this pairing is the clearest way to show where a whole family fits inside the order.",
    centralDifference:
      "The galah is one species in the cockatoo family, and cockatoos are a family within the parrot order rather than a group standing apart from parrots.",
    dimensions: [
      {
        id: "scope",
        label: "What the name covers",
        animalAValue: "An order of several hundred species across four families and several continents",
        animalBValue: "One species of cockatoo, widespread across mainland Australia",
        interpretation: "The galah is a single species inside a family inside the order.",
      },
      {
        id: "crest",
        label: "Crest",
        animalAValue: "Absent or fixed in most families, with a few exceptions outside the cockatoos",
        animalBValue: "A short mobile crest of pale pink and white feathers, raised in display and alarm",
        interpretation: "An erectile crest that can be raised and lowered is the cockatoo family signature.",
      },
      {
        id: "colour-chemistry",
        label: "Colour",
        animalAValue: "Greens and blues are widespread, produced by pigment combined with feather nanostructure",
        animalBValue: "Rose pink underparts and face with a grey back and wings, and no green anywhere",
        interpretation: "Cockatoos generally lack the structural element that turns yellow pigment into green.",
        caveat: "Colour production in feathers is complex and this is a general pattern rather than an absolute rule.",
      },
      {
        id: "powder-down",
        label: "Feather maintenance",
        animalAValue: "Most parrots rely on a preen gland and ordinary preening",
        animalBValue: "Produces powder down, specialised feathers that break into a fine keratin dust used in grooming",
        interpretation: "Powder down is characteristic of cockatoos and is noticeable on anything they perch near.",
      },
      {
        id: "range",
        label: "Range",
        animalAValue: "The Neotropics, Africa, southern Asia and Australasia, plus established feral city flocks",
        animalBValue: "Most of mainland Australia, including farmland, town parks and inland watercourses",
        interpretation: "The galah occupies a fraction of the order's range but almost all of one continent.",
      },
      {
        id: "flocking",
        label: "Flocking and feeding",
        animalAValue: "Group sizes vary from solitary pairs to large communal roosts depending on species",
        animalBValue: "Feeds on the ground in large noisy flocks, especially on grass seed and spilled grain",
        interpretation: "Ground feeding in the open is unusual among parrots and very typical of galahs.",
      },
    ],
    narrative: {
      taxonomy:
        "The parrot order divides conventionally into the New Zealand parrots, the cockatoos, the true parrots and the Old World parrots and allies. The galah sits in the cockatoo family in a genus of its own, and its exact placement relative to the white cockatoos and the cockatiel has moved between analyses. What is not in doubt is that cockatoos are parrots: they share the hooked bill, the zygodactyl feet, cavity nesting and vocal learning that define the order.",
      identification:
        "The galah is one of the easiest parrots in the world to name. Adults show deep rose pink on the face, neck and underparts against a pale grey back and wings, with a short pale pink and white crest that lifts when the bird is alert. Eye colour differs between the sexes, with dark eyes in males and lighter reddish eyes in females. Other parrots may be pink, but none combines this pink-and-grey division with a mobile crest.",
      habitat:
        "Parrots overall occupy rainforest, dry woodland, savanna, montane scrub, mangrove and increasingly cities. The galah is a bird of open country: grassland, farmland, scattered woodland, inland watercourses lined with river red gum, and town parks and sports grounds across almost all of mainland Australia. Its spread has been helped by grain agriculture and by artificial water points, which opened arid districts it once used only sparsely.",
      diet:
        "Where many parrots feed in the canopy on fruit, nuts and nectar, the galah works the ground. Flocks walk over pasture and stubble taking grass and herb seeds, cereal grain, roots and occasional insect material, which is why the species is regarded as an agricultural pest in some districts. This ground-feeding habit is unusual within the order and helps explain both the galah's abundance and its friction with grain growers.",
      behavior:
        "Galahs are gregarious throughout the year, forming large noisy flocks that feed in the morning and evening and shelter in trees through the heat of the day. Pairs nest in tree hollows, and the species is well known for stripping bark from around the entrance and lining the cavity with fresh eucalypt leaves. Young birds gather in flocks of their own. Parrots as a whole are social and slow-breeding, and the galah follows that pattern.",
      humanRelationship:
        "Most parrot species have declined under habitat loss and capture, and the galah is a conspicuous exception: clearing, cropping and artificial water have suited it, and it has spread and increased. That success brings conflict, since flocks damage grain crops and chew fittings in towns, and it has also made the bird a fixture of Australian speech, where the name doubles as a mild term for a fool. Trade in wild-caught Australian parrots is prohibited.",
      whichIsWhich:
        "A pink and grey bird with a short mobile crest feeding on the ground in Australian open country is a galah. It is a cockatoo, and therefore a parrot. If a source contrasts galahs or cockatoos with parrots, it is treating a family as if it stood outside the order that contains it, which is a rank error rather than a real distinction.",
      sensesAdaptations:
        "Powder down is the most tangible cockatoo adaptation: modified feathers that disintegrate continuously into fine keratin particles worked through the plumage during preening, keeping feathers clean without heavy reliance on a preen gland. Cockatoos also share the order's ultraviolet-sensitive colour vision and the mobile hinged upper bill. The crest adds a fast visual signal that carries across an open flock better than plumage colour alone.",
      lifespan:
        "Parrots are long-lived for their size, and cockatoos are at the upper end. Galahs are commonly described as living for decades in captivity, with wild birds facing far higher mortality from vehicles, predators and drought. Well-attested very old captive cockatoos exist, but circulated maxima usually describe exceptional individuals rather than an expectation, and record claims for particular birds are often difficult to verify.",
      petContext:
        "Galahs and other cockatoos are kept, and they are demanding animals: loud, socially dependent, destructive to soft furnishings, and long-lived enough that provision beyond the keeper's own life may be needed. Australian wildlife law strictly controls keeping and trade, and rules differ by country and state. Suitability depends on the household, local law, welfare capacity and long-term responsibility, and care questions belong with an avian veterinarian.",
    },
    faqs: [
      {
        question: "Is a galah a cockatoo or a parrot?",
        answer:
          "Both, and there is no contradiction. Cockatoos are one of the four families that make up the parrot order, so every cockatoo is by definition a parrot. The galah is a cockatoo within that family, carrying the erectile crest and powder down that mark the group. Saying a galah is a cockatoo and not a parrot is like saying a robin is a thrush and not a bird.",
      },
      {
        question: "Why are there no green cockatoos when so many parrots are green?",
        answer:
          "Green in most parrots comes from combining yellow psittacofulvin pigment with a feather nanostructure that scatters blue light, and cockatoos generally lack that structural component. The result is a family palette built from white, black, grey, pink, red and yellow instead. The galah's rose and grey is a clear example. Feather colour production is intricate, so this is a strong general pattern rather than an absolute law.",
      },
      {
        question: "What is the galah's crest actually for?",
        answer:
          "It is a signal. The short pale crest can be raised and lowered rapidly, and it is lifted during display, alarm and social interaction, making a bird's state visible to flock members at a distance. In a species that feeds in the open in large groups, a fast visual signal above the head carries better than subtle plumage changes. Crest position alone should not be read as a fixed emotional label.",
      },
      {
        question: "Are galahs and cockatiels related?",
        answer:
          "Molecular work places the cockatiel inside the cockatoo family rather than among the true parrots, so it is a relative of the galah at family level. Its precise position within the family, and how close it sits to the galah specifically, has shifted between analyses. Both share the erectile crest and powder down; the cockatiel is much smaller and retains a long pointed tail the galah lacks.",
      },
      {
        question: "Why has the galah increased while many parrots are declining?",
        answer:
          "Because the changes that harm forest parrots suited a ground-feeding seed eater of open country. Clearing created more open habitat, cereal cropping supplied abundant seed, and stock watering points made arid districts usable year round. The galah spread and increased as a result. It is a genuine exception rather than evidence that parrots in general are doing well, since most declining species depend on mature forest.",
      },
    ],
    commonConfusions: [
      "Contrasting cockatoos with parrots, when cockatoos are a family inside the parrot order.",
      "Assuming any pink parrot is a galah, when other species carry pink without the grey back and mobile crest.",
      "Reading the galah's abundance as a sign that Australian parrots in general are secure.",
    ],
    similarities: [
      "The galah has every order-level parrot trait: hooked bill, zygodactyl feet and cavity nesting.",
      "Both the order broadly and the galah specifically are social, vocal and slow to reproduce.",
      "Both include species that have adapted to farmland and to towns rather than retreating from them.",
      "Both rely on tree hollows they cannot excavate, making mature trees a limiting resource.",
    ],
    keyDifferences: [
      "Parrot is the whole order, while galah is one species in the cockatoo family within it.",
      "The galah has an erectile crest, which most parrots outside the cockatoos lack.",
      "Cockatoos produce powder down, whereas other parrots rely mainly on a preen gland.",
      "Green is common across the order but absent in the galah and in cockatoos generally.",
      "The galah feeds mainly on the ground in open country, unlike most canopy-feeding parrots.",
    ],
    petBoundary:
      "Nothing here recommends keeping a galah or any cockatoo. These are loud, destructive, decades-long commitments governed by strict wildlife law in Australia and varying rules elsewhere, and suitability depends on household, local law, welfare capacity and long-term responsibility.",
    taxonomyCaveat:
      "Parrot names an order whose species total varies between authorities, and the galah's placement within the cockatoo family, particularly relative to the cockatiel, has shifted between molecular analyses.",
    relatedComparisonSlugs: [
      "parrot-vs-macaw",
      "parrot-vs-african-grey-parrot",
      "macaw-vs-african-grey-parrot",
      "parrot-vs-crow",
    ],
    relatedHubPaths: ["/birds", "/animal-encyclopedia/birds", "/birdwatching"],
    sourceIds: ["adw", "britannica", "cornell"],
    lastReviewed: REVIEWED,
  }),
];
