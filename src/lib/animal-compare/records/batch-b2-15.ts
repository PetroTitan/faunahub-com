/**
 * Comparison batch B2-15 — marine invertebrates and open-water fish.
 *
 * Three threads run through this batch. The first is cephalopod architecture:
 * shelled versus shell-less, and one deep-sea giant inside a 300-species group.
 * The second is scombrid and salmonid naming, where a market label and a
 * scientific name rarely line up. The third is the sessile and slow-moving
 * end of reef life — lure-fishing ambush predators, tetraodontiform armour,
 * anthozoan skeletons, and a coral-eating sea star inside a huge class.
 */
import { defineComparison, REVIEWED } from "./define.ts";

export const BATCH_B2_15 = [
  defineComparison({
    slug: "octopus-vs-nautilus",
    animalA: { slug: "octopus", name: "Octopus" },
    animalB: { slug: "nautilus", name: "Nautilus" },
    title: "Octopus vs Nautilus",
    metaTitle: "Octopus vs Nautilus — Shell, Arms, Eyes and Lifespan",
    metaDescription:
      "A nautilus keeps an external chambered shell, pinhole eyes and dozens of suckerless tentacles. An octopus lost the shell and gained eight suckered arms.",
    shortAnswer:
      "Both are cephalopods, but they sit on opposite branches of the class. A nautilus keeps the ancestral external shell, a coiled gas-filled buoyancy device, and gathers food with dozens of small suckerless tentacles while seeing through a pinhole eye that has no lens. An octopus has no external shell at all, eight suckered arms, a camera-type eye, an ink sac, and skin that changes colour and texture within a second. Nautiluses are slow and long-lived Indo-Pacific animals; most octopuses live a year or two.",
    primaryCategory: "fish-marine",
    secondaryCategories: [],
    relationship: "close-relatives",
    confidence: "strong",
    searchIntent: "taxonomy",
    whyCompare:
      "The nautilus is routinely introduced as an octopus that kept its shell, which gets the relationship backwards: it is the surviving branch of an older shelled lineage, and almost everything about the two bodies follows from whether the shell was retained or abandoned.",
    centralDifference:
      "A nautilus carries an external chambered shell and dozens of suckerless tentacles, while an octopus has no shell, eight suckered arms and colour-changing skin.",
    dimensions: [
      {
        id: "shell",
        label: "Shell",
        animalAValue:
          "None; the body is entirely soft, with no external or internal shell remaining",
        animalBValue:
          "External coiled shell of aragonite divided into gas-filled chambers, linked by a tissue cord called the siphuncle",
        interpretation:
          "The shell is the fastest way to separate them, and it sets everything downstream: buoyancy, depth limit and swimming style.",
        caveat:
          "Female argonauts, often called paper nautiluses, secrete a thin egg case with two arms; it is not a chambered shell and argonauts are octopods.",
      },
      {
        id: "appendages",
        label: "Appendages",
        animalAValue: "Eight arms, each lined with muscular suckers that grip and taste what they touch",
        animalBValue:
          "Roughly sixty to ninety slender tentacles called cirri, with no suckers, sticky rather than gripping",
        interpretation:
          "Suckered arms allow fine manipulation and prey handling; the nautilus rakes items toward its beak instead.",
      },
      {
        id: "eyes",
        label: "Eyes",
        animalAValue: "Camera-type eye with a lens and iris, resolving detail well",
        animalBValue: "Open pinhole eye with no lens or cornea, flooded with seawater",
        interpretation:
          "Nautiluses navigate mainly by smell, while octopuses are strongly visual animals.",
        caveat:
          "Cephalopod eyes lack the multiple colour receptors most vertebrates use, and how octopuses perceive colour is still argued over.",
      },
      {
        id: "skin",
        label: "Skin and display",
        animalAValue:
          "Chromatophores, reflective iridophores and raisable papillae allow near-instant colour and texture change",
        animalBValue: "Fixed pattern of orange-brown stripes on a pale shell; no chromatophores",
        interpretation:
          "Octopus concealment is a behaviour performed second by second; nautilus concealment is a fixed countershaded pattern it cannot alter.",
      },
      {
        id: "range-depth",
        label: "Range and depth",
        animalAValue: "All oceans, from tide pools and reefs to abyssal plains, depending on species",
        animalBValue:
          "Tropical Indo-Pacific only, mostly on steep fore-reef slopes around 100 to 500 metres, rising shallower at night",
        interpretation:
          "The shell fails under pressure past a few hundred metres, so the nautilus is fenced in by its own buoyancy device.",
        caveat: "Quoted depth bands differ between nautilus species and between localities.",
      },
      {
        id: "life-cycle",
        label: "Life cycle",
        animalAValue:
          "Usually one to two years, with a single terminal reproductive episode and many small eggs",
        animalBValue:
          "Estimated fifteen to twenty years, maturing slowly and laying a few very large eggs at a time",
        interpretation:
          "Slow replacement means nautilus populations recover from collection far more slowly than octopus populations do.",
        caveat:
          "Nautilus ages come from growth studies and captive animals rather than long-term marked wild individuals.",
      },
    ],
    narrative: {
      taxonomy:
        "Both belong to the class Cephalopoda, but they split near its base. Nautiluses sit in Nautiloidea, the surviving remnant of a long-lived lineage of externally shelled cephalopods with a rich fossil record. Octopuses sit in Coleoidea alongside squid and cuttlefish, where the shell was first internalised and then, in octopods, lost altogether. Neither common name covers a single species: about six living nautilus species across two genera are usually recognised, while octopus covers roughly three hundred described species worldwide.",
      identification:
        "Nothing else is needed once the shell is visible. A nautilus swims inside a coiled cream-and-orange striped shell, with a leathery hood and a fringe of thin tentacles protruding from the opening. An octopus is a bag-shaped, boneless animal with eight visible arms lined with suckers, two prominent eyes with slit or rectangular pupils, and a muscular funnel below the head. Octopus skin also shifts colour and texture continuously, whereas the striped pattern on a nautilus shell never changes.",
      habitat:
        "Nautiluses are restricted to the tropical Indo-Pacific, from northern Australia and the Philippines through to Fiji and Palau, where they hug steep fore-reef slopes at depths usually quoted between about 100 and 500 metres and move into shallower water at night. Octopuses occur in every ocean and at almost every depth, from rock pools and seagrass beds to hydrothermal vents and abyssal sediment, with each species tied to a particular depth band and substrate rather than the group as a whole.",
      diet:
        "An octopus is an active predator that prises open bivalves, drills shells, and takes crabs and other crustaceans, subduing them with saliva before the beak breaks them apart. Nautiluses feed far more opportunistically, following scent trails to carrion, shed crustacean moults and slow-moving items on the bottom, then sweeping them toward the beak with sticky cirri. The contrast reflects an energy budget: the octopus spends heavily and grows fast, while the nautilus runs on a very low metabolic rate.",
      behavior:
        "Octopuses are strikingly exploratory in the wild and in captivity, opening containers, carrying coconut halves and shells as portable shelter, and learning routes back to a den. Nautiluses show nothing comparable. They drift at neutral buoyancy, jet slowly, and organise their behaviour around chemical searching rather than manipulation. Laboratory work on nautilus memory has found short-term and longer-term retention of odour associations, but the behavioural range remains narrow beside that of any coleoid cephalopod.",
      humanRelationship:
        "Octopuses are fished commercially across the world, displayed in public aquaria, and are now covered by animal welfare provisions in several jurisdictions on the strength of evidence for their cognitive complexity. Nautiluses are collected mainly for the ornamental shell trade, and Nautilus pompilius was added to CITES Appendix II in 2016 so that trade could be regulated. Because nautiluses mature slowly and lay few eggs, sustained collection is far harder for a local population to absorb.",
      whichIsWhich:
        "Shell on the outside, coiled and striped, with a mass of thin tentacles at the opening: nautilus. No shell, eight suckered arms, skin that shifts colour while you watch: octopus. On a deep Indo-Pacific reef slope a nautilus is genuinely possible. Anywhere else in the world, a small floating shelled cephalopod is far more likely to be an argonaut egg case, which belongs to an octopod despite the paper nautilus name.",
      sensesAdaptations:
        "The nautilus eye is an open pinhole flooded with seawater, with no lens or cornea, producing a dim low-resolution image; olfaction dominates instead, and paired rhinophores track scent plumes over long distances. Buoyancy is managed through the siphuncle, which moves salts and water between shell chambers. The octopus invests in the opposite direction: a lens eye, sensitivity to polarised light, and chemotactile suckers that taste surfaces directly, with a large share of its nervous system distributed into the arms.",
      lifespan:
        "Most octopus species live roughly one to two years, growing quickly and dying after a single reproductive episode, though cold deep-sea species live longer and one brooding female in the northeast Pacific was observed guarding eggs for more than four years. Nautilus estimates run very differently: slow growth, maturity often placed somewhere around ten to fifteen years, and total lifespans commonly estimated at fifteen to twenty. Both sets of figures carry wide uncertainty and depend on species and temperature.",
      conservation:
        "Nautilus trade regulation reflects concern about localised depletion around fished island groups rather than one uniform global picture, and status differs between species and countries. Octopus assessments also vary by species, with fishery pressure rising as global demand grows. Neither group should be given a single blanket label, so check the current IUCN Red List entry for the particular species rather than relying on a general statement about cephalopods.",
      petContext:
        "Octopuses are sometimes kept by experienced marine aquarists and are demanding in ways that are easy to underestimate: naturally short lives, persistent escape behaviour, sensitivity to water chemistry, and a need for enrichment. Nautiluses are effectively a public-aquarium animal with cold deep-water requirements. Whether any cephalopod belongs in a given household depends on local law, welfare capacity and long-term responsibility, and those decisions belong with a qualified veterinarian and an experienced aquarium professional.",
    },
    faqs: [
      {
        question: "Is a nautilus just an octopus that kept its shell?",
        answer:
          "No, and the phrasing reverses the history. The external shell is the older cephalopod condition, and nautiluses are the surviving branch that retained it. Octopuses descend from a separate lineage in which the shell was internalised, as it still is in cuttlefish, and then lost entirely. A nautilus is not a modified octopus; the two are distant cousins within one class, separated by a very long stretch of cephalopod evolution.",
      },
      {
        question: "Why can a nautilus not change colour like an octopus?",
        answer:
          "It has no chromatophores. Octopus skin carries pigment sacs that muscles expand and contract, backed by reflective cells and by papillae that alter surface texture, all under direct nervous control. A nautilus has none of that machinery, and its visible surface is a hard shell rather than living skin. Its concealment is instead a fixed countershaded pattern, dark stripes above and pale below, which works against a lit surface when seen from below.",
      },
      {
        question: "How deep can a nautilus go before the shell gives way?",
        answer:
          "Published implosion depths sit in the region of several hundred metres beyond its normal range, which is why nautiluses are usually recorded between about 100 and 500 metres and move up the reef slope at night. The chambered shell is a pressure vessel, so it sets a hard ceiling on depth that a shell-less octopus does not face. Exact figures vary with species, shell thickness and the individual animal.",
      },
      {
        question: "Is the paper nautilus a real nautilus?",
        answer:
          "No. Paper nautilus is a common name for argonauts, which are open-ocean octopods. The female secretes a thin, brittle egg case using two specialised arms, and that case is not a chambered buoyancy shell and is not homologous with the nautilus shell. It also is not permanently attached in the same way. The resemblance is a coincidence of shape, and the name has confused shell collectors for centuries.",
      },
      {
        question: "Why do octopuses live only a year or two when nautiluses last decades?",
        answer:
          "The two run opposite life strategies. Octopuses grow fast on a high metabolic rate, reproduce once, and die soon after, with females typically ceasing to feed while brooding. Nautiluses grow slowly, mature late, and lay a few large eggs repeatedly over many years. Deep, cold-water octopuses live longer than shallow ones, so the contrast is a tendency rather than an absolute rule, and every figure here is an estimate with real spread.",
      },
    ],
    commonConfusions: [
      "Calling the argonaut a paper nautilus and assuming it is a small nautilus rather than an octopod.",
      "Describing the nautilus as a primitive octopus, when the shell is the ancestral cephalopod feature the octopus lineage lost.",
      "Assuming a nautilus can camouflage or ink like other cephalopods; it has neither chromatophores nor an ink sac.",
    ],
    similarities: [
      "Both are cephalopods with a chitinous beak, a radula and a muscular funnel used for jet propulsion.",
      "Both are marine-only animals with no freshwater representatives anywhere in the group.",
      "Both are predators or scavengers that locate food partly by chemical cues in the water.",
      "Both names cover several species rather than one animal, so figures are ranges across a group.",
    ],
    keyDifferences: [
      "The nautilus has an external chambered shell; the octopus has no shell at all.",
      "Octopuses have eight suckered arms, while nautiluses have dozens of suckerless cirri.",
      "The octopus eye has a lens; the nautilus eye is an open pinhole flooded with seawater.",
      "Only the octopus can change colour and skin texture, and only the octopus has an ink sac.",
      "Nautiluses are confined to the tropical Indo-Pacific, while octopuses occur in every ocean.",
      "Octopus lives are usually one or two years, whereas nautilus lifespans are estimated in the decades.",
    ],
    petBoundary:
      "Neither animal is a casual aquarium purchase. Suitability depends on household, local law, welfare capacity and long-term responsibility, and care decisions belong with a qualified veterinarian rather than a comparison page.",
    taxonomyCaveat:
      "Octopus covers roughly three hundred species in the order Octopoda, and nautilus covers about six living species in two genera. Both names describe groups, so every figure on this page is a range across members rather than a fixed value.",
    conservationCaveat:
      "Trade in Nautilus pompilius is regulated under CITES Appendix II, but status differs by species and region and assessments change. Check the current IUCN Red List entry for the species you are researching.",
    relatedComparisonSlugs: ["octopus-vs-squid", "octopus-vs-cuttlefish", "squid-vs-cuttlefish"],
    relatedHubPaths: [
      "/animal-encyclopedia/marine-animals",
      "/animal-taxonomy/marine-animal-groups",
      "/animal-taxonomy/invertebrates",
    ],
    sourceIds: ["smithsonian-ocean", "britannica", "adw"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "squid-vs-giant-squid",
    animalA: { slug: "squid", name: "Squid" },
    animalB: { slug: "giant-squid", name: "Giant Squid" },
    title: "Squid vs Giant Squid",
    metaTitle: "Squid vs Giant Squid — One Deep-Sea Species in a Group",
    metaDescription:
      "Squid names about 300 species; giant squid means Architeuthis, a deep-ocean animal known mostly from strandings, whale stomachs and a few live encounters.",
    shortAnswer:
      "Squid is a group name for roughly three hundred species across two orders, ranging from animals a few centimetres long to open-ocean hunters. Giant squid means Architeuthis, one deep-sea genus that genetic work suggests may be a single global species. It shares the standard squid body plan of eight arms plus two long feeding tentacles, but reaches total lengths often cited around ten to thirteen metres, carries eyes among the largest known in any animal, and is known mainly from strandings rather than observation.",
    primaryCategory: "taxonomy",
    secondaryCategories: ["fish-marine"],
    relationship: "species-vs-group",
    confidence: "supported",
    searchIntent: "taxonomy",
    whyCompare:
      "Giant squid is treated in popular writing as a category of large squid rather than a particular deep-ocean animal, which makes reported lengths and behaviour difficult to interpret and lets a legendary reputation stand in for what is actually documented.",
    centralDifference:
      "Squid is a group name for hundreds of species, while giant squid refers specifically to Architeuthis, a bathypelagic animal with the largest known eyes and no light organs.",
    dimensions: [
      {
        id: "scope",
        label: "What the name covers",
        animalAValue: "Roughly 300 species across the orders Myopsida and Oegopsida",
        animalBValue:
          "The genus Architeuthis; genetic work published in the 2010s indicated a single worldwide species",
        interpretation:
          "One label is a whole group of animals, the other is a single deep-ocean lineage, so they are not comparable ranks.",
        caveat:
          "Species counts within squid are revised regularly as deep-sea material is described and re-examined.",
      },
      {
        id: "size",
        label: "Reported size",
        animalAValue:
          "Most familiar species have mantles of about 20 to 60 cm, with some species maturing at only a few centimetres",
        animalBValue:
          "Mantle around two metres, with total lengths commonly cited near ten to thirteen metres for large females",
        interpretation:
          "The headline length comes largely from the two elastic feeding tentacles, not from the body itself.",
        caveat:
          "Many historical maxima were measured on stranded animals whose tissues stretch after death, so quoted records should be treated cautiously.",
      },
      {
        id: "eyes",
        label: "Eyes",
        animalAValue: "Large for the body but broadly typical of an active marine predator",
        animalBValue:
          "Among the largest eyes recorded in any animal, with published diameters around 25 to 27 cm",
        interpretation:
          "Enormous eyes suit a lightless habitat where detecting faint bioluminescence at distance is the main visual task.",
      },
      {
        id: "depth",
        label: "Depth and habitat",
        animalAValue:
          "Coastal shelves, kelp, reefs and open water; many species undertake nightly vertical migrations",
        animalBValue:
          "Deep open ocean, most records falling roughly between 300 and 1,000 metres in most ocean basins",
        interpretation:
          "The giant squid is a deep pelagic animal, which is why almost nobody encounters one alive.",
      },
      {
        id: "buoyancy",
        label: "Buoyancy",
        animalAValue: "Mostly denser than seawater, holding position by continuous swimming and fin action",
        animalBValue:
          "Tissues loaded with ammonium ions that give near-neutral buoyancy and a strong ammonia taste",
        interpretation:
          "Neutral buoyancy points to a drifting, energy-conserving ambush lifestyle rather than sustained pursuit.",
      },
      {
        id: "observation",
        label: "How it is known",
        animalAValue:
          "Fished commercially in large volumes, studied alive, and kept briefly in research aquaria",
        animalBValue:
          "Known mostly from strandings, sperm whale stomach contents and bycatch, with the first footage in its own habitat obtained only in the last two decades",
        interpretation:
          "The evidence base differs so much that confident statements about giant squid behaviour deserve scepticism.",
      },
    ],
    narrative: {
      taxonomy:
        "Squid are decapodiform cephalopods, usually divided into Myopsida, the mostly coastal squid with a corneal covering over the eye, and Oegopsida, the open-ocean group with an open eye. Architeuthis sits in Oegopsida, in its own family Architeuthidae. That makes the giant squid a squid in the ordinary sense, not a separate kind of animal. How many Architeuthis species exist has been argued over for a century; mitochondrial work published in the 2010s found little geographic structure and supported a single species.",
      identification:
        "Every squid shows the same layout: a tubular mantle, a pair of fins, eight arms, and two longer retractile feeding tentacles ending in expanded clubs. Architeuthis is recognised on proportions rather than novelty, with a heavy two-metre mantle, relatively small fins and extremely long tentacles bearing club suckers ringed with sharp chitinous teeth. It carries no photophores, which separates it from many other large deep-sea squid whose bodies are studded with light organs.",
      habitat:
        "Familiar squid occupy continental shelves, reefs and surface waters, and many rise at night to feed and descend by day. Architeuthis lives in deep open ocean and has been recorded from the North Atlantic, the seas around New Zealand and Japan, the South Atlantic and elsewhere, with most reliable records falling roughly between 300 and 1,000 metres. Strandings cluster in a few regions, which reflects currents and coastal geography rather than where the animals are most abundant.",
      diet:
        "Coastal squid take fish, crustaceans and other squid, striking with the two feeding tentacles and passing prey to the arms and beak. Stomach contents from Architeuthis point to deep-sea fish and to other squid, including its own kind, taken in the dark. Because the animal appears close to neutrally buoyant, most researchers picture it hanging in the water and seizing prey that comes within reach of the tentacles rather than chasing it down over distance.",
      behavior:
        "Behaviour in familiar squid is well described: schooling in many species, rapid chromatophore signalling, jetting escape and inking. For Architeuthis almost nothing was observed directly until baited deep-sea camera work produced still images in the mid-2000s and moving footage in its own habitat a few years later. Those encounters showed an animal that approached and grasped a lure with its tentacles, which is consistent with an ambush pattern but rests on a very small number of sightings.",
      humanRelationship:
        "Squid support enormous global fisheries and are a staple food across many cuisines. Architeuthis has no fishery: its ammonium-laden tissue is unpalatable, and it reaches people through strandings, trawler bycatch and museum specimens. Its cultural weight is out of all proportion to what is known about it, since accounts of sea monsters attached themselves to the animal long before a body was described. Sperm whales carry circular sucker scars, and giant squid remains turn up in their stomachs.",
      whichIsWhich:
        "If the animal is on a fish counter, in a school over a reef, or in a research tank, it is one of the many ordinary squid species. Giant squid means Architeuthis specifically, and a genuine one arrives as a stranded carcass, as bycatch, or on deep-sea camera footage. Length alone is not enough to name it either, because several other deep-sea squid are large, and the heaviest of all is the colossal squid, a different genus entirely.",
      sensesAdaptations:
        "The giant squid eye is its signature adaptation, with published diameters around 25 to 27 centimetres and a pupil to match. One well-known hypothesis is that an eye this large is worth its cost mainly for detecting the faint bioluminescent glow stirred up by a large moving body at distance in dark water. Ordinary squid, living in lit or twilight water, get by with smaller eyes and lean far more on chromatophore signalling and on fast, visually guided strikes.",
      lifespan:
        "Many familiar squid species live around a year, growing very fast, spawning and dying, which is why squid stocks fluctuate sharply between seasons. Age estimates for Architeuthis rely on growth increments in the statoliths of stranded animals, and published readings have suggested a life measured in a few years rather than decades, with rapid growth to a very large size. These estimates come from small samples of dead specimens, so they should be read as provisional.",
      conservation:
        "There is no targeted fishery for the giant squid and no reliable abundance estimate, which is the central difficulty in assessing it at all. Many commercially fished squid species are managed with catch limits that are revised as stock assessments change, and their short lives make populations responsive to both fishing and ocean conditions. Rather than relying on a general claim, check the current IUCN Red List entry for the species you are researching.",
    },
    faqs: [
      {
        question: "How long is a giant squid really?",
        answer:
          "Total lengths near ten to thirteen metres are commonly cited for large females, but most of that is the pair of elastic feeding tentacles, which stretch considerably in a dead animal being measured on a beach. Mantle length is the more stable figure and sits around two metres in the largest well-documented specimens. Historical claims of twenty metres or more rest on poor measurement practice and are generally not accepted.",
      },
      {
        question: "Is the giant squid the largest squid of all?",
        answer:
          "It is the longest known, but not the heaviest. The colossal squid, Mesonychoteuthis hamiltoni, is a Southern Ocean animal in a different family with a shorter but far bulkier body and swivelling hooks on its arms, and intact specimens have weighed more than any Architeuthis on record. So the answer depends on whether you rank by length or by mass, and the two questions give different winners.",
      },
      {
        question: "Why was a live giant squid not filmed until recently?",
        answer:
          "It lives in deep, dark, open water where conventional survey gear rarely encounters it, and bright lights and thruster noise appear to drive large deep-sea animals away. The breakthroughs came from quiet, baited camera platforms using dim red illumination, which produced still images in the mid-2000s and footage in the animal's own habitat a few years afterwards. Before that, essentially all knowledge came from dead specimens.",
      },
      {
        question: "Does a giant squid have the same body plan as a market squid?",
        answer:
          "Yes, in every essential respect. Both have a tubular mantle, fins, a chitinous internal pen, a funnel for jet propulsion, eight arms and two longer retractile feeding tentacles, plus a beak and radula. The differences are of proportion and of deep-sea specialisation: enormous eyes, tentacle clubs with toothed sucker rings, ammonium-loaded tissue for buoyancy, and an absence of the photophores many deep-sea squid carry.",
      },
      {
        question: "Why do giant squid tissues smell and taste of ammonia?",
        answer:
          "The animal maintains near-neutral buoyancy by holding ammonium chloride solution in its tissues, which is lighter than seawater. That chemistry keeps it hanging in the water column without constant swimming, but it also makes the flesh unpalatable, which is one reason no fishery targets the species. Several other deep-sea squid use the same trick, and it is a useful clue that a large stranded squid belongs to a deep pelagic group.",
      },
    ],
    commonConfusions: [
      "Treating giant squid as a size category rather than the genus Architeuthis, so any large squid gets the name.",
      "Confusing the giant squid with the colossal squid, which is a heavier Southern Ocean animal in a different family.",
      "Repeating historical length records taken from stretched tentacles on stranded carcasses as if they were measured on live animals.",
    ],
    similarities: [
      "Both have the decapodiform layout of eight arms plus two retractile feeding tentacles.",
      "Both use jet propulsion through a funnel and carry a chitinous internal pen rather than a shell.",
      "Both are predators that seize prey with the tentacles and process it with a beak and radula.",
      "Both grow fast and appear to be short-lived relative to their size.",
    ],
    keyDifferences: [
      "Squid names roughly 300 species, whereas giant squid names a single deep-sea genus.",
      "Architeuthis lives in deep open ocean, while most familiar squid are shelf or surface animals.",
      "Giant squid eyes are among the largest recorded in any animal; ordinary squid eyes are unremarkable by comparison.",
      "Architeuthis floats on ammonium-rich tissue, whereas most squid hold position by swimming.",
      "Squid support huge fisheries, while the giant squid is known mainly from strandings and bycatch.",
    ],
    taxonomyCaveat:
      "Squid is not a single clade in everyday use; it spans Myopsida and Oegopsida and excludes cuttlefish and octopuses. Giant squid means Architeuthis, and whether the genus holds one species or several has been debated for over a century.",
    conservationCaveat:
      "There is no abundance estimate for the giant squid, and status for commercially fished squid species is revised with each stock assessment. Consult the current IUCN Red List entry rather than treating any figure here as fixed.",
    relatedComparisonSlugs: [
      "octopus-vs-squid",
      "squid-vs-cuttlefish",
      "jellyfish-vs-squid",
      "shark-vs-great-white-shark",
    ],
    relatedHubPaths: [
      "/animal-encyclopedia/marine-animals",
      "/animal-taxonomy/marine-animal-groups",
      "/fauna",
    ],
    sourceIds: ["smithsonian-ocean", "britannica", "worms"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "tuna-vs-mackerel",
    animalA: { slug: "tuna", name: "Tuna" },
    animalB: { slug: "mackerel", name: "Mackerel" },
    title: "Tuna vs Mackerel",
    metaTitle: "Tuna vs Mackerel — Size, Warm Blood, Body Shape",
    metaDescription:
      "Tunas and mackerels share the scombrid family, finlets and a keeled tail. Tunas run far bigger and keep muscle warmer than the water around them.",
    shortAnswer:
      "Both sit in the family Scombridae and share finlets behind the dorsal and anal fins plus a keeled tail base. Tunas belong to the tribe Thunnini and are deep-bodied, torpedo-shaped ocean fish that use counter-current heat exchangers to hold swimming muscle, and in some species the eyes and viscera, above the surrounding water temperature. Mackerels are slimmer, usually far smaller, patterned with bars or spots, and the common Atlantic kinds stay at water temperature throughout.",
    primaryCategory: "fish-marine",
    secondaryCategories: [],
    relationship: "close-relatives",
    confidence: "representative",
    searchIntent: "identification",
    whyCompare:
      "Fish counters, menus and market names use tuna and mackerel loosely, and both cover several genera, so readers often want to know whether a mackerel is simply a small tuna and what actually separates the two groups within one family.",
    centralDifference:
      "Tunas are deep-bodied Thunnini that keep swimming muscle warmer than the sea, whereas mackerels are slimmer scombrids that generally stay at ambient temperature.",
    dimensions: [
      {
        id: "group-scope",
        label: "What each name covers",
        animalAValue:
          "The tribe Thunnini, around fifteen species in genera such as Thunnus, Katsuwonus, Euthynnus and Auxis",
        animalBValue:
          "Several separate scombrid genera, including Scomber, Scomberomorus and Rastrelliger",
        interpretation:
          "Tuna is a reasonably tight group, while mackerel is a looser label applied across parts of the family.",
        caveat:
          "Regional markets stretch both names further, and some fish sold as mackerel or as tuna belong to neither group.",
      },
      {
        id: "size",
        label: "Typical size",
        animalAValue:
          "From skipjack at under a metre to Atlantic bluefin regularly over two metres and several hundred kilograms",
        animalBValue:
          "Atlantic mackerel usually about 30 to 45 cm; king and Spanish mackerels reach well over a metre",
        interpretation:
          "Size separates the extremes reliably but fails in the middle, where a large Scomberomorus overlaps small tunas.",
      },
      {
        id: "thermoregulation",
        label: "Body temperature",
        animalAValue:
          "Regionally endothermic, using retia mirabilia to keep muscle and often eyes and viscera above ambient",
        animalBValue: "Ectothermic in the common Scomber mackerels, tracking surrounding water temperature",
        interpretation:
          "Warm muscle lets tunas sustain speed in cold water and range into higher latitudes than most scombrids.",
        caveat:
          "Endothermy is not uniform across Thunnini; the degree and the tissues warmed differ between species.",
      },
      {
        id: "body-shape",
        label: "Body shape",
        animalAValue:
          "Deep, robust, tapering sharply to a narrow keeled peduncle, with fins that fold into body grooves",
        animalBValue: "Slender and near-cylindrical, less deep-bodied, with a comparatively slim profile",
        interpretation:
          "Tuna proportions are shaped for continuous high-speed cruising; mackerels are built for a more variable pace.",
      },
      {
        id: "markings",
        label: "Markings",
        animalAValue:
          "Mostly plain metallic blue to dark above and silver below, sometimes with pale spots or bars on the flanks",
        animalBValue:
          "Usually strongly marked, with wavy dark bars in Atlantic mackerel or spots in Spanish and king mackerels",
        interpretation:
          "Flank pattern is the quickest field or counter check when size is not decisive.",
      },
      {
        id: "swimming",
        label: "Swimming and ventilation",
        animalAValue:
          "Continuous swimming with a stiff body and lunate tail, relying on ram ventilation to move water over the gills",
        animalBValue:
          "Also a fast schooling swimmer, though with a more flexible body; Atlantic mackerel lacks a swim bladder",
        interpretation:
          "Both are built to keep moving, but the tuna carries that requirement much further into its anatomy.",
      },
    ],
    narrative: {
      taxonomy:
        "Both belong to Scombridae, the mackerel and tuna family, within the wider group that also holds bonitos and wahoo. Tunas form the tribe Thunnini, roughly fifteen species across genera including Thunnus, Katsuwonus, Euthynnus and Auxis. Mackerel is applied across several separate genera, so it is a looser label than tuna and not a single lineage. That means a mackerel is not a small tuna, but they are relatives inside one family with a great deal of shared anatomy.",
      identification:
        "Look first at depth of body and at flank pattern. A tuna is a thick, deep-bodied fish that narrows abruptly to a slim tail base carrying lateral keels, with a stiff crescent tail and mostly plain metallic sides. A mackerel is slimmer and more cylindrical, and usually well marked, with wavy dark bars across the back in Atlantic mackerel or rows of yellowish spots in Spanish and king mackerels. Both show the small separate finlets behind the dorsal and anal fins.",
      habitat:
        "Tunas are largely oceanic, crossing basins and diving through the thermocline, with bluefin ranging into cold northern water and skipjack concentrated in the tropics. Mackerels are more coastal and shelf-associated, schooling in surface and mid-water over continental shelves and moving seasonally along coastlines. The ranges overlap widely, and both groups turn up in the same fisheries, but a fish taken far offshore in deep blue water is more likely a tuna than a Scomber mackerel.",
      diet:
        "Both are pursuit predators of the open water. Mackerels feed heavily on zooplankton, small crustaceans and larval and small schooling fish, with Atlantic mackerel filtering copepods at some sizes and switching to fish as it grows. Tunas take fish, squid and crustaceans, with larger species specialising on schooling fish and cephalopods and diving deep to feed. Both groups sit mid-chain, eating abundant small prey and in turn feeding sharks, billfish, seabirds and marine mammals.",
      behavior:
        "Schooling defines both. Mackerels form dense surface schools that shift shape rapidly and often mix with other small pelagic fish. Tunas school by size and species, sometimes in association with floating objects, dolphins or seamounts, and undertake long directed migrations that tagging has traced across whole ocean basins. Neither group holds territory. Movement in both is driven by temperature fronts, prey concentrations and spawning, so distribution changes between seasons and between years.",
      humanRelationship:
        "Both are among the most heavily fished marine fish in the world and both are central to global seafood markets, from canned skipjack to salted and smoked mackerel. That pressure has driven decades of management effort through regional fisheries bodies, with quota systems, gear rules and stock assessments. Some populations have rebuilt after tight management while others remain depleted, and status varies by stock, not just by species, which is why blanket claims about either group are unhelpful.",
      whichIsWhich:
        "Thick-bodied, plain silver flanks, a very narrow keeled tail base and fins that tuck into grooves: tuna. Slimmer, strongly barred or spotted flanks, less bulk through the shoulder: mackerel. Both show finlets, so finlets alone will not settle it. If the fish is over two metres and deep-bodied, it is a tuna; if it is a well-marked half-metre schooling fish from the shelf, mackerel is the safer call.",
      sensesAdaptations:
        "The tuna heat-exchange system is the standout adaptation: dense networks of small arteries and veins, the retia mirabilia, run counter to one another so that heat from working muscle is retained rather than lost at the gills. Several species also warm the eyes and brain, which is thought to keep vision responsive during rapid dives into cold water. Mackerels lack that arrangement and rely instead on manoeuvrability, schooling and large surface area of gill for oxygen uptake.",
      lifespan:
        "Lifespans differ by roughly an order of magnitude across the two labels. Atlantic mackerel is often aged to somewhere around ten to twenty years, with growth slowing markedly after maturity. Large tunas live longer, and Atlantic bluefin has been aged well beyond twenty years using otolith and spine sections. Skipjack, at the small end of the tuna tribe, is short-lived and fast-growing by comparison. All ageing estimates depend on method, region and the sample of fish examined.",
      conservation:
        "Assessment for both groups is done stock by stock rather than species by species, since an eastern and a western population of the same fish can be in very different condition. Several tuna stocks have shown rebuilding under stricter quotas, while others remain a concern, and mackerel stocks fluctuate with recruitment and with disputes over shared quotas. Consult the current IUCN Red List entry and the relevant regional fisheries assessment rather than assuming a fixed status.",
    },
    faqs: [
      {
        question: "Is a mackerel just a small tuna?",
        answer:
          "No. Both are scombrids, but tunas form the tribe Thunnini while mackerel is applied across several other genera in the family, so the two labels are not nested. Size supports the impression, since most mackerels are far smaller, but it breaks down with king and Spanish mackerels that outgrow small tunas. The real division is anatomical: body depth, tail base structure and the presence or absence of heat exchangers.",
      },
      {
        question: "Which tunas are warm-bodied, and are any mackerels?",
        answer:
          "Regional endothermy is characteristic of the tuna tribe, though the degree varies: bluefin species warm muscle, viscera and eyes substantially, while smaller tunas warm less tissue. Among mackerels the familiar Scomber species are ectothermic. Elsewhere in the family the butterfly kingfish has cranial heat-exchange tissue, so the trait is not perfectly aligned with the tuna label. Treat endothermy as a strong tendency in tunas rather than an absolute rule.",
      },
      {
        question: "What separates a Spanish mackerel from a small tuna on the counter?",
        answer:
          "Look at body depth and flank pattern. Spanish and king mackerels are elongate and comparatively slim, with rows of spots or bars along the sides and a long low second dorsal. Small tunas such as skipjack or little tunny are noticeably deeper through the shoulder, plainer on the flanks apart from stripes low on the belly in skipjack, and have a stouter tail base with prominent keels.",
      },
      {
        question: "Why must tunas keep swimming continuously?",
        answer:
          "They rely on ram ventilation, driving water over the gills by forward motion rather than pumping it with the mouth and opercula, so stopping means losing oxygen flow. Continuous swimming also maintains lift, since tunas are denser than seawater and several species have reduced or absent swim bladders. Many mackerels swim near-continuously too, and Atlantic mackerel lacks a swim bladder, so this is a family-wide tendency taken furthest by tunas.",
      },
      {
        question: "Do tuna and mackerel both have those little fins behind the dorsal?",
        answer:
          "Yes. The small separate finlets running from the second dorsal and anal fins back to the tail are a shared scombrid feature present in both groups, along with a narrow keeled caudal peduncle. They are thought to influence flow along the tail and reduce drag at speed. Because both groups have them, finlets confirm you are looking at a scombrid but do not distinguish a tuna from a mackerel.",
      },
    ],
    commonConfusions: [
      "Assuming mackerel is simply the small end of the tuna group, when it spans several separate scombrid genera.",
      "Using finlets as a diagnostic, when both groups carry them as a shared family feature.",
      "Treating all tunas as equally warm-bodied, when the extent of endothermy differs between species.",
    ],
    similarities: [
      "Both belong to Scombridae and share finlets, a keeled caudal peduncle and a stiff crescent tail.",
      "Both are fast schooling pelagic predators that feed on small fish, squid and crustaceans.",
      "Both support very large commercial fisheries managed through regional assessment bodies.",
      "Both cover multiple species, so any single figure is a range across a group.",
    ],
    keyDifferences: [
      "Tunas are deep-bodied and heavy through the shoulder; mackerels are slim and near-cylindrical.",
      "Tunas use counter-current heat exchangers to hold muscle above ambient temperature; common mackerels do not.",
      "Mackerels are usually strongly barred or spotted, while tunas are mostly plain metallic on the flanks.",
      "The largest tunas exceed two metres, whereas most mackerels stay well under one.",
      "Tuna is a defined tribe, Thunnini, while mackerel is applied across several unrelated scombrid genera.",
    ],
    taxonomyCaveat:
      "Both names cover groups. Tuna refers to the tribe Thunnini, but mackerel is a market and vernacular label spread across Scomber, Scomberomorus, Rastrelliger and others, and some fish sold under either name are not scombrids at all.",
    conservationCaveat:
      "Tuna and mackerel status is assessed by stock as well as by species and changes with each assessment cycle. Check the current IUCN Red List entry and the relevant regional fisheries management assessment.",
    relatedComparisonSlugs: ["salmon-vs-atlantic-salmon", "salmon-vs-trout", "shark-vs-ray"],
    relatedHubPaths: ["/animal-encyclopedia/fish", "/fish", "/animal-encyclopedia/marine-animals"],
    sourceIds: ["noaa", "britannica", "adw"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "salmon-vs-atlantic-salmon",
    animalA: { slug: "salmon", name: "Salmon" },
    animalB: { slug: "atlantic-salmon", name: "Atlantic Salmon" },
    title: "Salmon vs Atlantic Salmon",
    metaTitle: "Salmon vs Atlantic Salmon — One Species, Two Genera",
    metaDescription:
      "Salmon spans two genera: Salmo and Oncorhynchus. Atlantic salmon is a single species that can survive spawning, unlike its Pacific relatives.",
    shortAnswer:
      "Salmon is a common name shared by two genera. Atlantic salmon is one species, Salmo salar, closer to brown trout than to any Pacific fish. The Pacific salmon are Oncorhynchus, a separate genus holding chinook, coho, sockeye, pink, chum and masu. The most useful distinction is what happens after spawning: Pacific salmon die, whereas Atlantic salmon can survive, return to sea and spawn again, though the proportion that manages it is small and varies between rivers.",
    primaryCategory: "taxonomy",
    secondaryCategories: ["fish-marine"],
    relationship: "species-vs-group",
    confidence: "supported",
    searchIntent: "taxonomy",
    whyCompare:
      "Almost everything sold, farmed or written about as salmon belongs to one of two genera with different life histories, and the single word hides a split that matters for anyone reading about spawning, farming or river restoration.",
    centralDifference:
      "Atlantic salmon is one species in the genus Salmo that can survive spawning, while the Pacific salmon are a separate genus, Oncorhynchus, in which spawning is terminal.",
    dimensions: [
      {
        id: "scope",
        label: "What the name covers",
        animalAValue:
          "A common name spanning two genera: Salmo in the Atlantic and Oncorhynchus across the Pacific",
        animalBValue: "A single species, Salmo salar, native to the North Atlantic basin",
        interpretation:
          "One word is a group label across two lineages; the other is a species, so they sit at different ranks.",
        caveat:
          "Market names stretch this further, with some farmed trout and unrelated fish sold under salmon-style labels.",
      },
      {
        id: "after-spawning",
        label: "Survival after spawning",
        animalAValue:
          "Pacific species are semelparous: adults spawn once and die, their carcasses feeding the river system",
        animalBValue:
          "Iteroparous: some adults survive as kelts, return to sea and spawn in a later year",
        interpretation:
          "This is the sharpest life-history split between the two genera and shapes river ecology in each region.",
        caveat:
          "Repeat spawning rates in Atlantic salmon are typically low and differ greatly between rivers and years.",
      },
      {
        id: "anal-fin",
        label: "Anal fin rays",
        animalAValue: "Pacific species generally carry about 13 to 19 rays in the anal fin",
        animalBValue: "Usually about 8 to 12 rays, the same low count seen in trout of the genus Salmo",
        interpretation:
          "A countable feature that separates the two genera without relying on colour, which changes with maturity.",
      },
      {
        id: "closest-relative",
        label: "Nearest relatives",
        animalAValue:
          "Pacific salmon share their genus with rainbow trout and steelhead, Oncorhynchus mykiss",
        animalBValue: "Shares the genus Salmo with brown trout, Salmo trutta, its closest common relative",
        interpretation:
          "Salmon and trout are not separate categories; each genus contains both kinds of common name.",
      },
      {
        id: "range",
        label: "Native range",
        animalAValue:
          "Pacific rim rivers from California and Japan north to Alaska and Kamchatka, plus the North Atlantic",
        animalBValue:
          "Rivers draining to the North Atlantic in Europe and eastern North America, plus landlocked lake populations",
        interpretation:
          "The Atlantic and Pacific groups did not naturally overlap, though introductions and escapes have blurred the picture.",
      },
      {
        id: "aquaculture",
        label: "Role in aquaculture",
        animalAValue:
          "Pacific species reach markets largely through wild capture fisheries, with some hatchery enhancement",
        animalBValue:
          "The dominant farmed salmon worldwide, raised in sea pens in Norway, Chile, Scotland and elsewhere",
        interpretation:
          "Most salmon sold outside the Pacific rim is farmed Salmo salar, which is why the two names get used interchangeably.",
      },
    ],
    narrative: {
      taxonomy:
        "Salmon is a common name, not a taxonomic rank. It is applied to one species of Salmo, the Atlantic salmon, and to several species of Oncorhynchus in the Pacific, including chinook, coho, sockeye, pink, chum and masu. Both genera sit in the family Salmonidae with trout, charr, grayling and whitefish. Atlantic salmon is genetically closer to brown trout than to any Pacific salmon, which is the clearest sign that the shared common name reflects lifestyle rather than ancestry.",
      identification:
        "In fresh silver condition the two look similar, so counts help more than colour. Atlantic salmon carry roughly eight to twelve anal fin rays, matching trout, whereas Pacific species usually show thirteen or more. Atlantic salmon are typically marked with dark spots above the lateral line and few or none on the tail, and have a narrow tail base. Spawning Pacific species transform dramatically, with humped backs, hooked jaws and, in sockeye, deep red bodies with green heads.",
      habitat:
        "Both are anadromous, hatching in fresh water, migrating to sea and returning to spawn. Atlantic salmon use rivers draining to the North Atlantic on both European and North American coasts, with feeding grounds off Greenland and the Norwegian Sea. Pacific species use rivers around the Pacific rim from California and Japan to Alaska and Kamchatka. Landlocked populations of Atlantic salmon exist in lakes such as those of Maine and eastern Canada and complete the whole cycle in fresh water.",
      diet:
        "At sea both feed heavily on small schooling fish, crustaceans and squid, and the carotenoid pigments in that prey give the flesh its colour. In fresh water juveniles of both take insect larvae and drifting invertebrates. Returning adults largely stop feeding as they move upriver and run down their fat reserves. The difference is what follows: Pacific carcasses deliver a large pulse of marine nutrients to the river, while surviving Atlantic kelts carry some of that energy back to sea.",
      behavior:
        "Homing is the defining behaviour in both, with adults returning to natal rivers using a combination of geomagnetic cues at sea and olfactory memory of the home stream. Spawning behaviour is broadly similar, with the female cutting a gravel redd with her tail and covering the eggs after fertilisation. The divergence comes afterwards. Pacific adults deteriorate rapidly and die in the river, whereas some Atlantic females in particular drop back downstream, recover at sea and return.",
      humanRelationship:
        "Atlantic salmon is the backbone of global salmon farming, produced in sea pens on a very large scale, while most Pacific salmon in commerce comes from managed wild fisheries. Both carry deep cultural weight, from indigenous fisheries around the Pacific to centuries of river rights and angling tradition in Europe. Farming raises its own issues, including escapes interbreeding with wild fish, sea lice transfer and feed sourcing, all of which are active areas of regulation and research.",
      whichIsWhich:
        "If a text says salmon without qualification, ask which ocean. Atlantic salmon means one species, Salmo salar, wild or farmed. Sockeye, chinook, coho, pink and chum are Pacific salmon in the genus Oncorhynchus. A quick check on a whole fish is the anal fin: a low ray count in the eight to twelve range points to Atlantic salmon or a trout, while thirteen or more points to the Pacific genus.",
      sensesAdaptations:
        "Both genera perform the same physiological feat twice over, remodelling gill and kidney function during smolting to move from fresh water to seawater and reversing it on return. Olfaction is central to homing, with juveniles imprinting on the chemical signature of their natal stream and adults following it upriver. Vision shifts too, as retinal pigments change between marine and freshwater phases. These adaptations are shared, which is part of why the common name spread across two genera in the first place.",
      lifespan:
        "Pink salmon complete a strict two-year cycle, while chinook may spend several years at sea before returning, so Pacific lifespans differ sharply between species and end at spawning. Atlantic salmon commonly spend one to several winters at sea, returning as grilse after one winter or as larger multi-sea-winter fish, and a small fraction survive to spawn in more than one year. Landlocked populations follow different schedules again, so any single figure needs its population attached.",
      conservation:
        "Status varies enormously by river and by stock rather than by species alone, since neighbouring rivers can hold healthy and collapsed populations. Pressures on both groups include dams and barriers to migration, habitat loss, warming water, and interactions with aquaculture. Atlantic salmon has been the subject of major reassessment in recent years and several Pacific stocks are listed under national legislation. Check the current IUCN Red List entry and the relevant national listing for the population concerned.",
    },
    faqs: [
      {
        question: "Is Atlantic salmon a kind of Pacific salmon?",
        answer:
          "No. Atlantic salmon is Salmo salar, in the genus Salmo, whereas the Pacific salmon are all in Oncorhynchus. Atlantic salmon is more closely related to brown trout than to sockeye or chinook. The shared common name reflects a shared way of life, anadromous fish that spawn in gravel rivers, rather than shared ancestry within one genus, which is a common pattern for fish names built around lifestyle.",
      },
      {
        question: "What is a kelt, and why do Pacific salmon never become one?",
        answer:
          "A kelt is an Atlantic salmon that has spawned and survived, dropping back downstream, feeding again at sea and potentially returning to spawn in a later year. Pacific species never reach that stage: they are semelparous, deteriorating rapidly after spawning and dying in the river, where their carcasses deliver marine nutrients to the whole catchment. Kelt survival is usually a small minority and varies widely between rivers, years and sexes, with females more often surviving.",
      },
      {
        question: "Why is most farmed salmon Atlantic salmon?",
        answer:
          "Salmo salar adapted well to sea-pen culture and became the species around which the industry was built, first in Norway and then in Chile, Scotland, Canada and elsewhere. That is why farmed salmon on sale outside the Pacific rim is usually Atlantic salmon regardless of where it was raised, including farms in the Pacific. Most Pacific salmon in commerce, by contrast, comes from managed wild fisheries with hatchery support in some systems.",
      },
      {
        question: "How do anal fin rays tell Atlantic from Pacific salmon?",
        answer:
          "Counting the soft rays in the anal fin is a long-established check. Species of Oncorhynchus generally carry about thirteen to nineteen, while Atlantic salmon and the trout of the genus Salmo usually show about eight to twelve. It is more reliable than colour, which changes dramatically with maturity and with time in fresh water. Counts overlap at the margins, so it is best used alongside spotting pattern and tail shape.",
      },
      {
        question: "Are landlocked Atlantic salmon still the same species?",
        answer:
          "Yes. Populations in lakes of Maine, eastern Canada and parts of Scandinavia complete the entire life cycle in fresh water, using the lake in place of the sea for feeding and running into tributaries to spawn. They are the same species as sea-run Atlantic salmon, generally smaller, and carry local names such as ouananiche and Sebago salmon. Genetically distinct populations exist, but they are not a separate species.",
      },
    ],
    commonConfusions: [
      "Reading salmon as a single species when the word spans Salmo salar and several Oncorhynchus species.",
      "Reading semelparity as a salmon-wide rule, when it applies to Oncorhynchus and not to Salmo salar.",
      "Treating salmon and trout as separate categories, when both genera contain fish carrying each common name.",
    ],
    similarities: [
      "Both are salmonids that spawn in gravel redds cut by the female in flowing fresh water.",
      "Both are typically anadromous, remodelling gill and kidney function to move between fresh water and the sea.",
      "Both home to natal rivers using olfactory memory of the home stream.",
      "Both take carotenoid pigments from marine prey, which colours the flesh.",
    ],
    keyDifferences: [
      "Atlantic salmon is one species; salmon as a word covers two genera and several species.",
      "Pacific salmon die after spawning, while some Atlantic salmon survive and spawn again.",
      "Anal fin ray counts are about eight to twelve in Atlantic salmon and generally thirteen or more in Pacific species.",
      "Atlantic salmon dominates world aquaculture, whereas Pacific salmon reaches markets mostly from wild fisheries.",
      "The Atlantic species is closest to brown trout, while Pacific salmon share a genus with rainbow trout.",
    ],
    taxonomyCaveat:
      "Salmon is a vernacular label rather than a clade. It covers Salmo salar and multiple Oncorhynchus species, and the same genera also contain fish called trout, so the salmon and trout names cut across genetic relationships.",
    conservationCaveat:
      "Salmon status is assessed by river and population as well as by species and has been revised in recent years. Consult the current IUCN Red List entry and the relevant national listing for the stock you are researching.",
    relatedComparisonSlugs: ["salmon-vs-trout", "tuna-vs-mackerel", "koi-vs-carp"],
    relatedHubPaths: ["/animal-encyclopedia/fish", "/fish", "/animal-taxonomy/vertebrates"],
    sourceIds: ["noaa", "iucn", "britannica"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "anglerfish-vs-frogfish",
    animalA: { slug: "anglerfish", name: "Anglerfish" },
    animalB: { slug: "frogfish", name: "Frogfish" },
    title: "Anglerfish vs Frogfish",
    metaTitle: "Anglerfish vs Frogfish — Lure, Depth and Body Plan",
    metaDescription:
      "Frogfish are anglerfish. Deep-sea ceratioids glow with bacterial light and have dwarf males; frogfish walk on reef rubble and wave a fleshy lure.",
    shortAnswer:
      "Frogfish are anglerfish, which is the first thing to fix. Both sit in the order Lophiiformes and both fish with a modified first dorsal spine tipped by a lure. The difference is which part of the order you mean. Deep-sea ceratioid anglerfish live in dark midwater, light their lure with symbiotic bacteria, and in many families have tiny males that attach to the female. Frogfish are shallow reef ambush predators that walk on their fins and wave an unlit fleshy lure.",
    primaryCategory: "fish-marine",
    secondaryCategories: ["look-alikes"],
    relationship: "similar-appearance",
    confidence: "representative",
    searchIntent: "taxonomy",
    whyCompare:
      "Popular usage treats anglerfish as the deep-sea fish with a glowing bulb and frogfish as something else entirely, when frogfish sit inside the same order; separating the formal group from the everyday image clears up most of the confusion.",
    centralDifference:
      "Frogfish are shallow-water anglerfish with an unlit fleshy lure, whereas the deep-sea ceratioids everyone pictures light their lure with symbiotic bacteria.",
    dimensions: [
      {
        id: "placement",
        label: "Where each name sits",
        animalAValue:
          "In everyday use, the deep-sea ceratioids; formally, the whole order Lophiiformes",
        animalBValue: "The family Antennariidae, one shallow-water family inside that same order",
        interpretation:
          "The names overlap rather than exclude one another, which is why the comparison is a taxonomy question first.",
        caveat:
          "Lophiiformes also holds goosefish, batfishes and handfishes, so the order is much broader than either popular image.",
      },
      {
        id: "lure",
        label: "Lure",
        animalAValue:
          "In ceratioids, an esca lit from within by symbiotic luminous bacteria housed in the bulb",
        animalBValue:
          "A fleshy esca mimicking a worm, shrimp or small fish, moved by muscle and not luminous",
        interpretation:
          "Light works in a dark abyss; a wriggling fake invertebrate works on a sunlit reef.",
      },
      {
        id: "habitat-depth",
        label: "Habitat and depth",
        animalAValue:
          "Bathypelagic open water, commonly cited across roughly 300 to 4,000 metres depending on family",
        animalBValue:
          "Tropical and subtropical reefs, rubble, sponge gardens and harbours, mostly in shallow water",
        interpretation:
          "The two occupy almost opposite marine environments despite a shared hunting method.",
      },
      {
        id: "locomotion",
        label: "Locomotion",
        animalAValue:
          "Slow drifting and weak swimming in midwater, with flabby watery tissue and reduced musculature",
        animalBValue:
          "Walks and clambers on modified pectoral and pelvic fins, and can jet water from small gill openings",
        interpretation:
          "One conserves energy in a food-poor void; the other stays glued to structure and never leaves it.",
      },
      {
        id: "sexes",
        label: "Males and females",
        animalAValue:
          "Many ceratioid families have dwarf males that attach to the female, in some cases fusing permanently",
        animalBValue: "Males and females are broadly similar in form, with no attachment or fusion",
        interpretation:
          "Sexual parasitism is a solution to finding a mate in vast dark water, and reef fish never faced that problem.",
        caveat: "Attachment is not universal across ceratioids; several families have free-living males.",
      },
      {
        id: "camouflage",
        label: "Camouflage",
        animalAValue:
          "Dark, often near-black or brown skin that absorbs the little light present in deep water",
        animalBValue:
          "Textured skin with spinules and filaments imitating sponges and algae, with colour shifting over days or weeks",
        interpretation:
          "Concealment in the deep is about not reflecting light; on a reef it is about matching a specific background.",
      },
    ],
    narrative: {
      taxonomy:
        "Both belong to Lophiiformes, the anglerfish order, which also holds the goosefish or monkfish of family Lophiidae, the flattened batfishes, and the handfishes of Australian waters. Frogfish form Antennariidae within that order. In strict usage every frogfish is an anglerfish, and the deep-sea fish with the glowing bulb belong to the suborder Ceratioidei, one branch among many. Popular usage narrowed anglerfish to that branch, which is where the apparent contradiction between the two names comes from.",
      identification:
        "Both are squat, large-mouthed, loose-skinned fish with the first dorsal spine converted into a rod. A frogfish looks like an encrusted lump on the reef, with pectoral fins bent into limbs, a upward-angled mouth and skin covered in filaments and spinules. A deep-sea ceratioid female is dark, globular, has needle-like teeth and a stalked illuminated lure, and is usually much smaller than photographs suggest, since most are only a few centimetres long.",
      habitat:
        "Ceratioid anglerfish live in the open bathypelagic zone, generally cited between a few hundred and several thousand metres, where there is no sunlight and prey encounters are rare. Frogfish live in shallow tropical and subtropical seas across the Indo-Pacific, Atlantic and Caribbean, sitting motionless among sponges, rubble, coral and even harbour debris. Their ranges do not meaningfully overlap, so any encounter with a live frogfish on a reef is not an encounter with a deep-sea anglerfish.",
      diet:
        "Both hunt by ambush and by luring, letting prey come to them rather than chasing. Frogfish take fish and crustaceans with an exceptionally fast strike, expanding the mouth cavity to draw in water and prey in a matter of milliseconds, and can swallow items close to their own length. Deep-sea anglerfish take whatever passes, including fish and crustaceans, and their large mouths and distensible stomachs suit a habitat where meals are infrequent and unpredictable.",
      behavior:
        "Frogfish spend most of their time motionless, changing position only to reach a better ambush spot, and wave the lure in a species-specific pattern that mimics small prey. Deep-sea anglerfish hang in midwater with the lure extended, and their swimming is slow and economical. Neither is social. Reproduction differs sharply: frogfish spawn eggs in a floating gelatinous raft in many species, while ceratioid reproduction hinges on males locating females in near-total darkness.",
      humanRelationship:
        "Neither is a significant food fish, though other members of the order certainly are, since the goosefish sold as monkfish is a lophiiform. Frogfish are prized by underwater photographers and are collected for the marine aquarium trade, which puts pressure on some local populations. Deep-sea anglerfish reach people almost entirely through trawl bycatch and museum collections, and occasional footage from submersibles, which is why so much of the popular image comes from a small number of specimens.",
      whichIsWhich:
        "If the fish is sitting on a reef looking like a sponge, walking on its pectoral fins in shallow water and waving a small fleshy tassel, it is a frogfish, and it is also an anglerfish in the formal sense. If it is a dark globular fish from deep water with a lit bulb on a stalk, it is a ceratioid, the animal most people mean by anglerfish. The order is the same; the depth and the light are not.",
      sensesAdaptations:
        "The two illustrate different solutions to the same problem of getting prey within reach. Ceratioids run a light source that depends on symbiotic bacteria acquired from seawater, housed in the esca, with the fish controlling exposure of the glow. Frogfish rely on visual mimicry instead, with skin texture and colour matched to a chosen background over days, and on suction feeding so fast that the strike is difficult to see without high-speed video.",
      lifespan:
        "Reliable ages are hard to obtain in both. Frogfish are usually described as relatively short-lived, and captive individuals are often reported to live a few years, with growth to adult size fairly quick. Deep-sea anglerfish are known mainly from preserved specimens, and life histories are inferred rather than measured; the deep-sea pattern of slow growth in cold water suggests longer lives than a reef ambusher, but the evidence base is thin.",
      conservation:
        "Assessment differs sharply between the two. Many deep-sea anglerfish are data deficient simply because they are rarely encountered, and pressure on them is indirect, through deep trawling and wider ocean change. Frogfish face localised collection for aquaria plus the general decline in reef and rubble habitat. Because status changes and varies by species, check the current IUCN Red List entry rather than assuming that a rarely-seen fish is either safe or threatened.",
      petContext:
        "Frogfish are occasionally kept in marine aquaria, and they present specific challenges that are easy to underestimate, including a diet of whole live or prepared prey, a tendency to swallow tankmates of surprising size, and sensitivity to water quality. Deep-sea anglerfish cannot be kept at all outside specialist facilities. Whether any marine fish suits a particular household depends on law, welfare capacity and long-term commitment, and care decisions belong with a qualified veterinarian.",
    },
    faqs: [
      {
        question: "Is a frogfish actually an anglerfish?",
        answer:
          "Yes, in the formal sense. Frogfish are the family Antennariidae within the order Lophiiformes, which is the anglerfish order, and they fish with the same modified first dorsal spine. Everyday usage has narrowed anglerfish to the deep-sea ceratioids with glowing lures, so the two names appear to describe different animals. Both statements can be true at once: a frogfish is an anglerfish, but it is not a deep-sea ceratioid.",
      },
      {
        question: "Does a frogfish lure glow like a deep-sea anglerfish lure?",
        answer:
          "No. The frogfish esca is a fleshy structure that mimics a worm, a shrimp or a small fish and is animated by muscle, with no light production at all. Bioluminescence in the ceratioids comes from symbiotic bacteria housed inside the esca, which the fish acquires from seawater rather than inheriting. Light would be useless to a frogfish, which hunts on sunlit reefs where a visual lure works perfectly well.",
      },
      {
        question: "Do frogfish males attach to females the way deep-sea anglerfish do?",
        answer:
          "No. Sexual parasitism, where a dwarf male bites onto a female and in some families fuses with her tissue and circulation, is a ceratioid specialisation tied to the difficulty of finding a mate in vast dark water. Frogfish males and females are similar in size and live independently, meeting to spawn. Even among ceratioids, attachment is not universal, and several families retain free-living males.",
      },
      {
        question: "How fast is the frogfish strike?",
        answer:
          "Extremely fast. High-speed studies of antennariids report mouth expansion and prey capture on a scale of a few milliseconds, among the quickest suction feeding measured in fish. The mechanism is a rapid expansion of the mouth cavity that pulls in a volume of water carrying the prey, rather than a lunge. It is far too quick to follow with the naked eye, which is why the animal appears to sit motionless and simply have eaten.",
      },
      {
        question: "Where would I realistically see each of these fish?",
        answer:
          "A frogfish is a shallow-water animal of tropical reefs, rubble slopes, sponge gardens and even harbour pilings, and divers find them by scanning for a lump with the wrong outline. Deep-sea ceratioids live hundreds to thousands of metres down and are almost never seen alive, reaching people through trawl bycatch, museum collections and rare submersible footage. Aquarium displays of glowing deep-sea anglerfish are models, not living animals.",
      },
    ],
    commonConfusions: [
      "Treating anglerfish and frogfish as separate groups, when frogfish sit inside the anglerfish order.",
      "Assuming every anglerfish has a glowing lure, when bioluminescence is limited to the deep-sea ceratioids.",
      "Picturing deep-sea anglerfish as very large, when most species are only a few centimetres long.",
    ],
    similarities: [
      "Both belong to Lophiiformes and fish with a modified first dorsal spine tipped by a lure.",
      "Both are ambush predators with huge mouths and highly distensible stomachs.",
      "Both are poor swimmers that conserve energy rather than pursuing prey.",
      "Both have loose, scaleless skin rather than the ordinary scaled covering of most fish.",
    ],
    keyDifferences: [
      "Deep-sea ceratioid lures are lit by symbiotic bacteria; frogfish lures are fleshy and unlit.",
      "Frogfish walk on modified pectoral and pelvic fins, while ceratioids drift in open midwater.",
      "Many ceratioid families have dwarf attaching males, which frogfish do not.",
      "Frogfish live on shallow tropical reefs, whereas ceratioids inhabit the deep bathypelagic zone.",
      "Frogfish camouflage matches a specific background, while deep-sea species are simply dark.",
    ],
    petBoundary:
      "Frogfish appear in the marine aquarium trade, but that is not a recommendation. Suitability depends on the household, local law, welfare capacity and long-term responsibility, and care decisions belong with a qualified veterinarian.",
    taxonomyCaveat:
      "Anglerfish is used both for the whole order Lophiiformes and, colloquially, for the deep-sea suborder Ceratioidei. Frogfish means the family Antennariidae, which contains many species. Both labels cover groups rather than single animals.",
    conservationCaveat:
      "Many lophiiform species are data deficient because they are rarely encountered. Check the current IUCN Red List entry for the species you are researching rather than generalising from the order.",
    relatedComparisonSlugs: [
      "seahorse-vs-leafy-seadragon",
      "pufferfish-vs-boxfish",
      "eel-vs-moray-eel",
    ],
    relatedHubPaths: [
      "/animal-encyclopedia/fish",
      "/animal-encyclopedia/marine-animals",
      "/animal-senses-and-adaptations",
    ],
    sourceIds: ["smithsonian-ocean", "britannica", "adw"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "pufferfish-vs-boxfish",
    animalA: { slug: "pufferfish", name: "Pufferfish" },
    animalB: { slug: "boxfish", name: "Boxfish" },
    title: "Pufferfish vs Boxfish",
    metaTitle: "Pufferfish vs Boxfish — Inflation, Armour and Toxins",
    metaDescription:
      "A pufferfish inflates a stretchy stomach with water; a boxfish cannot, because its body is locked inside a rigid carapace of fused bony plates.",
    shortAnswer:
      "Both are tetraodontiform reef fish that answered the same problem in opposite ways. A pufferfish has elastic skin and a hugely distensible stomach, so it can pump in water and swell into a barely swallowable sphere, and many species carry tetrodotoxin in the skin and organs. A boxfish cannot inflate at all: its body is permanently locked inside a rigid carapace of fused bony plates, with openings only for the mouth, eyes, gills and fins, and it releases a toxic mucus when stressed.",
    primaryCategory: "fish-marine",
    secondaryCategories: [],
    relationship: "close-relatives",
    confidence: "supported",
    searchIntent: "identification",
    whyCompare:
      "Both are slow, boxy-looking reef fish in the same order that are widely assumed to be variations on the same animal, when their defences are structurally opposite and each carries a different kind of chemical risk.",
    centralDifference:
      "A pufferfish is a soft-bodied fish that inflates with water, while a boxfish is permanently rigid inside a fused bony carapace that cannot expand.",
    dimensions: [
      {
        id: "body-wall",
        label: "Body wall",
        animalAValue:
          "Elastic, scaleless skin with modified scales forming spines in many species, over a highly distensible stomach",
        animalBValue:
          "Rigid carapace of fused hexagonal bony plates, with fixed openings for mouth, eyes, gills and fins",
        interpretation:
          "This one structural choice explains almost every other difference between the two families.",
      },
      {
        id: "inflation",
        label: "Inflation",
        animalAValue: "Draws water into the stomach to swell dramatically, deflating once the threat passes",
        animalBValue: "Cannot inflate; the armour is already in place and does not change shape",
        interpretation:
          "One defence is deployed on demand and costs energy; the other is permanent and costs manoeuvrability.",
        caveat:
          "Inflation is a stress response, not a display; repeatedly provoking it is harmful to the fish.",
      },
      {
        id: "swimming",
        label: "Swimming style",
        animalAValue:
          "Sculls with pectoral, dorsal and anal fins for precise slow movement, using the tail as a rudder or for bursts",
        animalBValue:
          "Ostraciiform swimming, with the body held completely still and propulsion from fin sculling alone",
        interpretation:
          "Both are slow and hoverable, but the boxfish has no option to flex the trunk at all.",
      },
      {
        id: "jaws",
        label: "Jaws and teeth",
        animalAValue:
          "Four fused tooth plates forming a parrot-like beak, which gives Tetraodontidae its name",
        animalBValue: "Small mouth with rows of small conical teeth, used for picking at the substrate",
        interpretation:
          "The puffer beak handles hard-shelled prey; the boxfish mouth is a precision picking and blowing tool.",
      },
      {
        id: "chemical-defence",
        label: "Chemical defence",
        animalAValue:
          "Many species carry tetrodotoxin in skin, liver and gonads, acquired through the food chain from bacteria",
        animalBValue:
          "Releases a toxic mucus, generally called pahutoxin or ostracitoxin, from the skin when stressed",
        interpretation:
          "Both are chemically defended, but the compounds, their location and how they are delivered are unrelated.",
        caveat:
          "Toxicity varies with species, season, tissue and locality; do not treat any individual as safe.",
      },
      {
        id: "family-scope",
        label: "Family and diversity",
        animalAValue:
          "Family Tetraodontidae, with roughly 200 species including marine, brackish and freshwater puffers",
        animalBValue:
          "Family Ostraciidae, a much smaller group of about two dozen species including cowfishes and trunkfishes",
        interpretation:
          "Puffers are a far larger and more ecologically varied radiation than the boxfishes.",
      },
    ],
    narrative: {
      taxonomy:
        "Both belong to Tetraodontiformes, the order that also contains triggerfish, filefish, porcupinefish, molas and others. Pufferfish are Tetraodontidae, named for the four fused tooth plates in the jaws, with roughly two hundred species spanning marine, brackish and freshwater habitats. Boxfish are Ostraciidae, a much smaller family that includes trunkfishes and the horned cowfishes. They are relatives within an order, not close kin, and the porcupinefish that many people call a puffer belong to yet another family.",
      identification:
        "A relaxed pufferfish looks like a soft, tapering, big-eyed fish with a small beaked mouth and loose skin, sometimes with visible spines lying flat. A boxfish looks like exactly what its name says: an angular box or triangle in cross-section, hard-edged, with the fins protruding through gaps in a plated shell. Run a glance along the outline. A puffer curves; a boxfish has corners and, in cowfishes, a pair of forward-pointing horns above the eyes.",
      habitat:
        "Both occupy warm shallow seas, with puffers ranging much more widely. Marine puffers occur across tropical and subtropical reefs, seagrass and estuaries in the Atlantic, Indian and Pacific oceans, and several genera live entirely in fresh water in Africa, South Asia and Southeast Asia. Boxfish are restricted to marine tropical and subtropical waters, typically over reef, rubble and seagrass, where their slow deliberate movement over structure is characteristic and easy to recognise.",
      diet:
        "Both feed on hard or attached food that faster fish cannot easily process. Puffers use the beak to crush molluscs, crustaceans, urchins and coral, and their continually growing tooth plates depend on that abrasive diet. Boxfish work more delicately, picking sponges, tunicates, algae and small invertebrates from the substrate, and some species blow jets of water at sand to expose buried prey. Neither is a pursuit predator, and both take a wide range of items.",
      behavior:
        "Both are slow, deliberate and confident in the open, which is what chemically defended and armoured animals can afford to be. Puffers inflate only under real threat, and repeated inflation is stressful and can be harmful, so it is not a behaviour to provoke. Boxfish rely on the carapace and on advertising with bold spotted or honeycomb patterns. Some boxfish release their skin toxin when severely stressed, which is why confinement in a small volume of water is dangerous for tankmates.",
      humanRelationship:
        "Puffers have the more complicated relationship with people. In Japan, fugu is prepared only by specifically licensed chefs under regulation because of tetrodotoxin, and poisoning cases still occur elsewhere from improperly handled fish. This page gives no preparation guidance of any kind. Both families appear in the marine aquarium trade, boxfish notoriously so because of the tankmate risk from their skin secretion, and both are photographed constantly by divers on tropical reefs.",
      whichIsWhich:
        "Soft outline, loose skin, big beaked mouth, and it can swell: pufferfish. Hard angular body with visible corners, fins poking through a fixed shell, body held rigid while the fins do the work: boxfish. If the fish has two horns above the eyes it is a cowfish, which is a boxfish. If it has long obvious spines that stand out when it swells, it is a porcupinefish, a third family in the same order.",
      sensesAdaptations:
        "The two carapace-and-balloon solutions are worth reading as engineering. Puffer skin is remarkably extensible, and the stomach has lost its digestive role in favour of expansion, with the whole system driven by buccal pumping. Boxfish trade all body flexibility for a fused shell and compensate with unusually fine fin control, letting them hover and pivot in tight reef spaces. Both also rely on chemical defence, which reduces the need for speed in the first place.",
      lifespan:
        "Figures for both are patchy and mostly come from aquarium records rather than wild populations. Small puffers are often reported to live a few years, while larger marine species are credited with rather longer, and the freshwater species differ again by genus. Boxfish are generally reported as living several years in captivity. Wild lifespans are rarely measured directly in either family, so any number should be treated as an approximate captive figure rather than a species constant.",
      conservation:
        "Most puffers and boxfish are not the target of major fisheries, though puffers are taken for food in several regions and both families are collected for aquaria. Pressure on both comes mainly through reef degradation, coastal development and warming water. Status differs greatly between species and some are poorly known, so check the current IUCN Red List entry for the species in question rather than assuming reef fish of these families share one outlook.",
      petContext:
        "Both families appear in the aquarium trade and both raise specific concerns. Puffers need hard-shelled food to manage continually growing tooth plates, and species sold as freshwater puffers vary widely in their actual salinity needs. Boxfish can release a skin toxin under stress that endangers everything sharing the water, including themselves. Suitability depends on household, law, welfare capacity and long-term responsibility, and care decisions belong with a qualified veterinarian.",
    },
    faqs: [
      {
        question: "Can a boxfish puff up like a pufferfish?",
        answer:
          "No, and it is structurally impossible. The boxfish trunk is enclosed in a carapace of fused bony plates with fixed openings, so there is nothing to expand. A pufferfish achieves inflation with elastic skin and a stomach that has given up digestion in favour of stretching, filling with water through buccal pumping. The two families solved the same predation problem in opposite ways: one built permanent armour, the other built a deployable balloon.",
      },
      {
        question: "Are pufferfish and boxfish toxic in the same way?",
        answer:
          "No. Many puffers carry tetrodotoxin concentrated in the liver, gonads and skin, acquired through the food chain from bacteria rather than made by the fish, and it is dangerous if ingested. Boxfish instead release a toxic mucus from the skin when severely stressed, which acts on other fish in the water around them. Different compounds, different tissues and different routes, so the two risks are not interchangeable.",
      },
      {
        question: "What is the boxfish carapace actually made of?",
        answer:
          "It is a shell of modified dermal scales, developed into hexagonal bony plates that fuse together into a rigid box. Only the mouth, eyes, gill openings, fins and tail base pass through it, and the trunk itself cannot bend. Puffer spines are also modified scales, which is a shared tetraodontiform theme, but in puffers they stay separate and lie flat against elastic skin instead of fusing into a fixed structure.",
      },
      {
        question: "Why do pufferfish and boxfish move so differently?",
        answer:
          "A puffer can still flex its body, so it sculls with the pectoral, dorsal and anal fins for slow precision and keeps the tail available for a burst. A boxfish is locked rigid and uses ostraciiform swimming, where only the fins move and the trunk stays completely still. That makes the boxfish look like it is being driven rather than swimming, and it accounts for the remarkable hovering and pivoting it manages in tight reef spaces.",
      },
      {
        question: "Did a boxfish really inspire a car design?",
        answer:
          "A concept car was publicised in the mid-2000s as being modelled on the boxfish body for low drag and stability. Later fluid dynamics research on actual boxfish shapes found the carapace is not inherently stabilising and in fact tends to generate destabilising forces, which the fish counteracts with constant fin correction. The likely benefit is manoeuvrability rather than passive stability, so the popular version of the story overstates the case.",
      },
    ],
    commonConfusions: [
      "Calling a porcupinefish a pufferfish; it inflates similarly but belongs to a separate family, Diodontidae.",
      "Assuming a boxfish can inflate because it looks superficially like a puffer at rest.",
      "Treating tetrodotoxin as something the fish manufactures, when it is acquired through the food chain from bacteria.",
    ],
    similarities: [
      "Both belong to Tetraodontiformes and both are slow, deliberate swimmers over reef and seagrass.",
      "Both rely on chemical defence rather than speed, and both are conspicuously patterned.",
      "Both have scales modified into something other than an ordinary scaled covering.",
      "Both are collected for the marine aquarium trade and both raise real welfare concerns there.",
    ],
    keyDifferences: [
      "Pufferfish inflate with water; boxfish are permanently rigid and cannot expand at all.",
      "Boxfish skin plates are fused into a carapace, whereas puffer scales form separate spines over elastic skin.",
      "Puffers carry tetrodotoxin in internal tissues, while boxfish release a toxic skin mucus.",
      "The puffer beak is four fused tooth plates, while boxfish have small separate conical teeth.",
      "Tetraodontidae holds around 200 species including freshwater ones; Ostraciidae holds only about two dozen marine species.",
    ],
    safetyBoundary:
      "Tetrodotoxin poisoning from pufferfish and reactions to boxfish skin secretions are medical emergencies. This page gives no preparation, handling or treatment guidance; in a suspected poisoning contact emergency services or a poison control centre immediately.",
    petBoundary:
      "Mentioning that these fish appear in the aquarium trade is not a recommendation to acquire one. Suitability depends on household, local law, welfare capacity and long-term responsibility, and care decisions belong with a qualified veterinarian.",
    taxonomyCaveat:
      "Pufferfish here means the family Tetraodontidae and boxfish the family Ostraciidae. Porcupinefish, which also inflate, are a separate family, and both common names cover many species with differing biology.",
    conservationCaveat:
      "Status varies by species and several are poorly documented. Check the current IUCN Red List entry for the species you are researching before drawing any conclusion.",
    relatedComparisonSlugs: [
      "angelfish-vs-clownfish",
      "anglerfish-vs-frogfish",
      "seahorse-vs-leafy-seadragon",
    ],
    relatedHubPaths: [
      "/animal-encyclopedia/fish",
      "/animal-encyclopedia/marine-animals",
      "/aquarium-care",
    ],
    sourceIds: ["adw", "britannica", "noaa"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "coral-vs-sea-anemone",
    animalA: { slug: "coral", name: "Coral" },
    animalB: { slug: "sea-anemone", name: "Sea Anemone" },
    title: "Coral vs Sea Anemone",
    metaTitle: "Coral vs Sea Anemone — Skeleton, Colony and Movement",
    metaDescription:
      "Stony corals build an aragonite skeleton and live in colonies; sea anemones are large solitary polyps with no skeleton that can detach and relocate.",
    shortAnswer:
      "Both are anthozoan cnidarians built on the same polyp body plan, with a ring of stinging tentacles around a central mouth. The working difference is the skeleton. Stony corals secrete a calcium carbonate cup beneath each polyp and usually grow as colonies of connected clones, which is how reefs are built. A sea anemone is a single large polyp with no hard skeleton at all, gripping the substrate with a muscular pedal disc that lets it detach and move to somewhere better.",
    primaryCategory: "fish-marine",
    secondaryCategories: [],
    relationship: "close-relatives",
    confidence: "representative",
    searchIntent: "taxonomy",
    whyCompare:
      "Anemones are often described as corals without skeletons, which is close enough to be misleading: it hides the fact that anemones are more closely related to stony corals than stony corals are to the soft corals also sold under the coral name.",
    centralDifference:
      "A stony coral secretes an aragonite skeleton and grows as a colony, while a sea anemone is one skeleton-free polyp that can release its grip and relocate.",
    dimensions: [
      {
        id: "skeleton",
        label: "Skeleton",
        animalAValue:
          "Stony corals secrete an aragonite cup under each polyp; octocorals build internal spicules or a horny axis instead",
        animalBValue: "None; the body is supported hydrostatically by a fluid-filled cavity",
        interpretation:
          "The skeleton is what turns coral into reef framework that persists long after the animal dies.",
        caveat: "Coral is a broad label; not every animal called coral builds a stony skeleton.",
      },
      {
        id: "colony",
        label: "Colonial or solitary",
        animalAValue:
          "Mostly colonial, with polyps connected by shared tissue and a common gut cavity across the colony",
        animalBValue: "Solitary in almost all cases, although some species form dense clonal aggregations",
        interpretation:
          "Colony organisation lets a coral grow indefinitely in area, which a single anemone cannot do.",
      },
      {
        id: "polyp-size",
        label: "Polyp size",
        animalAValue: "Individual polyps are usually millimetres across, even in massive colonies",
        animalBValue:
          "A single polyp can be centimetres to tens of centimetres across, with the largest host anemones bigger still",
        interpretation:
          "Anemones put everything into one large polyp while corals spread the same investment across thousands of small ones.",
      },
      {
        id: "movement",
        label: "Movement",
        animalAValue: "Sessile once the larva settles; a coral colony stays where it cemented itself",
        animalBValue:
          "Can detach, glide slowly on the pedal disc, and a few species swim or somersault away from threats",
        interpretation:
          "Anemone mobility is limited but real, and it means a disturbed anemone has options a coral does not.",
      },
      {
        id: "symbiosis",
        label: "Symbiotic partners",
        animalAValue:
          "Reef-building species host Symbiodiniaceae algae in their tissues and depend heavily on them for energy",
        animalBValue:
          "Many species also host the same algae, and around ten species host anemonefish in a mutual arrangement",
        interpretation:
          "Photosymbiosis is shared, so it cannot be used to tell the two apart, but only anemones host clownfish.",
      },
      {
        id: "taxonomic-position",
        label: "Position within Anthozoa",
        animalAValue:
          "Stony corals are hexacorals; soft corals and sea fans are octocorals with eight pinnate tentacles",
        animalBValue: "Order Actiniaria, also hexacorals, with tentacles in multiples of six",
        interpretation:
          "Anemones and stony corals share a subclass, so an anemone is closer to a brain coral than a sea fan is.",
      },
    ],
    narrative: {
      taxonomy:
        "Both are Anthozoa within the phylum Cnidaria, the group that also contains jellyfish and hydroids. Sea anemones form the order Actiniaria. Coral is a much looser word covering stony corals of Scleractinia, the octocorals that include soft corals and sea fans, and black corals of Antipatharia. Anemones and stony corals both sit in the subclass Hexacorallia, so an anemone is more closely related to a staghorn coral than a sea fan is, despite what the names suggest.",
      identification:
        "A stony coral is recognisable as a hard structure with a stony feel and a repeating pattern of small cups, whether it grows as a branch, a plate or a boulder, and its polyps are tiny and often extended only at night. A sea anemone is a single soft column topped by one crown of tentacles, attached by a broad foot, and it collapses into a blob when disturbed. Size of the individual polyp is usually the quickest cue.",
      habitat:
        "Reef-building corals are limited by their algal partners to clear, warm, well-lit shallow water, which is why tropical reefs form where they do, although azooxanthellate corals grow in cold deep water without light. Sea anemones are far less restricted, occurring from intertidal rock pools and temperate kelp forests to polar seas and deep-sea vents. Where both occur on a tropical reef they often sit side by side, competing for space on the same substrate.",
      diet:
        "Both capture food with nematocysts, stinging organelles fired from the tentacles, and both absorb dissolved organic matter and sugars from symbiotic algae where those are present. Coral polyps take mostly small zooplankton at night and rely on photosynthesis for much of their energy budget. Anemones catch larger items, including small fish and crustaceans, and their bigger polyp makes that possible. Neither should be described as a plant; both are predatory animals with an added photosynthetic subsidy.",
      behavior:
        "Corals compete for space aggressively for sessile animals, deploying sweeper tentacles and mesenterial filaments against neighbours and growing over rivals. Anemones do something comparable, and some species carry specialised acrorhagi used in territorial contact with unrelated clones. Anemones can also relocate, gliding on the pedal disc, and a few species detach and swim in response to predatory sea stars. Both retract tentacles when disturbed, and both expand them when conditions favour feeding.",
      humanRelationship:
        "Corals are the framework of reef systems that support fisheries, coastlines and tourism, and their decline is one of the most closely watched issues in marine science. Anemones are collected for the aquarium trade, sometimes alongside the anemonefish that live in them, which can strip local populations. Both are cultured for restoration and for the trade. Coral bleaching and anemone bleaching are the same process, a breakdown of the algal partnership under stress, most often heat.",
      whichIsWhich:
        "One big soft column with a single crown of tentacles and a foot you could slide a blade under: sea anemone. A hard structure with hundreds or thousands of small openings, each holding a tiny polyp: stony coral. If the thing is soft and fleshy but clearly made of many small polyps on a shared branching body, it is likely a soft coral, which is an octocoral and a more distant relative of both.",
      sensesAdaptations:
        "Neither has a brain, and both run on a diffuse nerve net that coordinates tentacle movement, retraction and feeding responses to chemical and mechanical cues. Both fire nematocysts on contact through a mechanism triggered locally rather than centrally. The great shared adaptation is photosymbiosis: hosting dinoflagellate algae inside the tissue in exchange for photosynthetic products. That partnership is also the shared vulnerability, since it breaks down under thermal stress and produces bleaching in either animal.",
      lifespan:
        "Coral colonies can be extraordinarily long-lived, with massive Porites heads dated to several centuries and some deep-sea black coral colonies aged in the thousands of years, though individual polyps within them are much shorter-lived. Anemones are harder to pin down, and there are long-standing reports of individuals surviving decades in aquaria, with clonal groups persisting far longer as they divide. Both blur the idea of a lifespan because clonal growth makes the individual hard to define.",
      conservation:
        "Reef-building corals face repeated mass bleaching, disease, ocean acidification and local pressures such as sedimentation, and many species have been assessed as threatened. Anemones are less studied, and the main documented pressure is aquarium collection alongside general reef decline. Because assessments are updated as bleaching events accumulate, check the current IUCN Red List entry for the species in question rather than relying on a general claim about the health of corals.",
      petContext:
        "Both are kept in reef aquaria, which is a demanding form of animal keeping involving lighting, water chemistry, flow and long timescales. Some zoanthids sold alongside corals contain palytoxin, one of the most hazardous marine compounds, and serious poisonings have been reported from aquarium contact. Whether a reef system suits a particular household depends on law, welfare capacity and long-term responsibility, and health questions belong with a qualified medical or veterinary professional.",
    },
    faqs: [
      {
        question: "Is a sea anemone just a coral without a skeleton?",
        answer:
          "It is a fair first approximation and a poor final answer. Anemones and stony corals do share the polyp body plan and the subclass Hexacorallia, so the skeleton is a genuine difference. But anemones are not derived from corals, and coral is a much broader label spanning stony corals, octocorals and black corals. Calling an anemone a skeleton-free coral makes the word coral do work it cannot support.",
      },
      {
        question: "Which is closer to a stony coral: a sea anemone or a soft coral?",
        answer:
          "The sea anemone. Stony corals and anemones both belong to Hexacorallia, with tentacles in multiples of six, while soft corals and sea fans are octocorals with eight pinnate tentacles and a separate history within Anthozoa. So the common names group animals by appearance rather than ancestry, and a sea fan called coral is further from a brain coral than an anemone that is not called coral at all.",
      },
      {
        question: "Do sea anemones bleach the way corals do?",
        answer:
          "Yes, where they host the same symbiotic algae. Bleaching is the loss or expulsion of Symbiodiniaceae from the host tissue under stress, most often elevated temperature, and it leaves the animal pale and energy-poor. Host anemones on tropical reefs have been recorded bleaching during the same heat events that bleach corals, with consequences for the anemonefish that depend on them. Not all anemones host algae, so not all can bleach.",
      },
      {
        question: "Can a sea anemone move once it has settled?",
        answer:
          "Yes, slowly. The muscular pedal disc can release its grip and glide over the substrate, letting an anemone shift position over hours or days to better light, flow or feeding. Some species go further and detach entirely, with a few able to swim or somersault away when contacted by predatory sea stars. Stony corals have no such option: once the larva cements itself, the colony stays where it is for life.",
      },
      {
        question: "Is fire coral a true coral?",
        answer:
          "No. Fire coral is Millepora, a hydrozoan, which puts it in a different cnidarian class from both stony corals and anemones despite building a calcareous skeleton that looks reef-like. It is a good example of how the word coral tracks appearance and skeleton-building rather than relationship. Its potent sting is what earned the name, and contact reactions on reefs are common enough that divers learn to recognise its smooth mustard-coloured branches.",
      },
    ],
    commonConfusions: [
      "Assuming soft corals are closer to stony corals than anemones are, when anemones share the same subclass.",
      "Calling fire coral a true coral, when Millepora is a hydrozoan in a different cnidarian class.",
      "Treating photosymbiosis as the coral signature, when many sea anemones host the same algae.",
    ],
    similarities: [
      "Both are anthozoan cnidarians built on the polyp body plan, with a mouth ringed by tentacles.",
      "Both capture prey using nematocysts fired on contact and both lack any centralised brain.",
      "Many members of both groups host symbiotic Symbiodiniaceae algae and can bleach when stressed.",
      "Both compete aggressively for hard substrate on reefs using specialised tentacles and filaments.",
    ],
    keyDifferences: [
      "Stony corals secrete an aragonite skeleton; sea anemones build no hard skeleton at all.",
      "Corals are usually colonial with tiny connected polyps, while anemones are single large polyps.",
      "A coral colony is fixed for life, whereas an anemone can detach and relocate on its pedal disc.",
      "Only sea anemones host anemonefish; corals have no comparable fish partnership.",
      "Coral spans several anthozoan orders, while sea anemone means the single order Actiniaria.",
    ],
    safetyBoundary:
      "Some anemones and reef organisms sting significantly, and palytoxin in zoanthids sold for aquaria has caused serious poisonings. This page offers no first aid or handling method; treat suspected exposure as a medical matter and contact emergency services or a poison control centre.",
    petBoundary:
      "Reef aquarium keeping is mentioned as context, not as encouragement. Suitability depends on household, local law, welfare capacity and long-term responsibility, and health or care questions belong with a qualified professional.",
    taxonomyCaveat:
      "Coral is not a single group. It covers stony corals in Scleractinia, octocorals such as soft corals and sea fans, and black corals in Antipatharia, and the hydrozoan fire corals are not anthozoans at all. Sea anemone means the order Actiniaria.",
    conservationCaveat:
      "Coral assessments change as bleaching events accumulate and anemones are less thoroughly evaluated. Consult the current IUCN Red List entry for the species you are researching.",
    relatedComparisonSlugs: [
      "jellyfish-vs-comb-jelly",
      "starfish-vs-sea-urchin",
      "angelfish-vs-clownfish",
    ],
    relatedHubPaths: [
      "/animal-taxonomy/invertebrates",
      "/animal-encyclopedia/marine-animals",
      "/animal-taxonomy/marine-animal-groups",
    ],
    sourceIds: ["noaa", "smithsonian-ocean", "worms"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "starfish-vs-crown-of-thorns-starfish",
    animalA: { slug: "starfish", name: "Starfish" },
    animalB: { slug: "crown-of-thorns-starfish", name: "Crown-of-Thorns Starfish" },
    title: "Starfish vs Crown-of-Thorns Starfish",
    metaTitle: "Starfish vs Crown-of-Thorns — Arms, Spines, Coral Diet",
    metaDescription:
      "Starfish names a class of about 1,900 species. Crown-of-thorns is a coral-eating Indo-Pacific group with venomous spines and many more arms than most.",
    shortAnswer:
      "Starfish, or sea star, is a class-level name covering roughly 1,900 species of echinoderm, most with five arms and a diet of molluscs, detritus or encrusting life. Crown-of-thorns is a small group of Indo-Pacific species in the genus Acanthaster that sits inside that class. It carries many more arms than the typical sea star, usually somewhere between ten and twenty, a dense covering of long venomous spines, and a specialised diet of living stony coral.",
    primaryCategory: "taxonomy",
    secondaryCategories: ["fish-marine"],
    relationship: "species-vs-group",
    confidence: "supported",
    searchIntent: "taxonomy",
    whyCompare:
      "Reef reporting refers to the crown-of-thorns as though it were a category of starfish rather than one genus inside a class of nearly two thousand, which makes both its coral diet and its outbreak behaviour sound like general sea star traits.",
    centralDifference:
      "Crown-of-thorns is one Indo-Pacific genus of spiny, many-armed coral specialists inside the class Asteroidea, which otherwise contains around 1,900 mostly five-armed species.",
    dimensions: [
      {
        id: "scope",
        label: "What each name covers",
        animalAValue: "The class Asteroidea, roughly 1,900 described species in all oceans",
        animalBValue:
          "The genus Acanthaster, now generally treated as a species complex of several regional species",
        interpretation:
          "One name is a whole class, the other a genus within it, so they are not comparable ranks.",
        caveat:
          "What was long called Acanthaster planci has been split, with different species recognised in the Indian and Pacific oceans.",
      },
      {
        id: "arms",
        label: "Arm count",
        animalAValue: "Usually five, though some families carry more and a few reach into the twenties",
        animalBValue: "Typically about ten to twenty, occasionally more, in adult animals",
        interpretation:
          "A high arm count narrows the options quickly but does not identify the animal on its own.",
        caveat:
          "The sunflower sea star of the northeast Pacific also carries many arms and is a completely different animal.",
      },
      {
        id: "spines",
        label: "Spines",
        animalAValue:
          "Usually short tubercles, granules or blunt spines set in the body wall, varying by family",
        animalBValue:
          "Long sharp venom-bearing spines covering the upper surface, in larger animals reaching several centimetres",
        interpretation:
          "The spination is the single most recognisable feature and the reason contact carries real risk.",
      },
      {
        id: "diet",
        label: "Diet",
        animalAValue:
          "Bivalves, gastropods, detritus, sponges, encrusting invertebrates and carrion, depending on the family",
        animalBValue: "Living stony coral tissue, digested externally after everting the stomach onto the colony",
        interpretation:
          "External digestion is a general sea star trick, but specialising it on reef-building coral is not.",
      },
      {
        id: "size",
        label: "Body size",
        animalAValue:
          "Enormously variable, from a couple of centimetres across to large predatory species of several tens of centimetres",
        animalBValue:
          "One of the larger sea stars, commonly around 25 to 35 cm across and occasionally much wider",
        interpretation:
          "Size supports identification but overlaps with several other large sea stars, so it is not decisive.",
      },
      {
        id: "population-dynamics",
        label: "Population behaviour",
        animalAValue:
          "Most species maintain relatively steady densities, though some suffer mass mortality from wasting disease",
        animalBValue:
          "Prone to large episodic outbreaks on Indo-Pacific reefs, with densities rising far above background",
        interpretation:
          "Outbreak dynamics are what make this genus a reef management issue rather than just another predator.",
      },
    ],
    narrative: {
      taxonomy:
        "Both are echinoderms in the class Asteroidea, alongside brittle stars, urchins, sea cucumbers and crinoids in the wider phylum. Crown-of-thorns belongs to the genus Acanthaster in the family Acanthasteridae. Long treated as a single widespread species, Acanthaster planci, the group has been divided on genetic evidence into several regional species across the Indian and Pacific oceans. So the comparison is a genus against the class that contains it, and figures for the class are averages over an enormous range of animals.",
      identification:
        "Most sea stars present as a flattened five-armed disc with a fairly smooth or granular upper surface and tube feet in grooves underneath. A crown-of-thorns looks entirely different at a glance: a large, many-armed, flexible animal whose upper surface is densely covered in long sharp spines, often mottled in red, purple, grey or green depending on locality. It sits directly on living coral, and pale feeding scars on the colony beneath it are a strong supporting clue.",
      habitat:
        "Sea stars occur in every ocean and at every depth, from intertidal rock and sandy shallows to abyssal plains and polar seas, with individual species narrowly tied to their habitats. Crown-of-thorns is restricted to tropical Indo-Pacific coral reefs, from the Red Sea and East Africa through the Indian Ocean and across the Pacific to Central America. It sits on reef slopes, flats and lagoons wherever there is abundant stony coral, sheltering in crevices by day in some populations.",
      diet:
        "Everting the stomach over food and digesting it outside the body is a widespread asteroid trait, used by species that open bivalves and by those that graze films and encrusting life. What sets Acanthaster apart is applying that method to living reef-building coral, spreading the stomach across the colony surface and leaving bare white skeleton behind. Most other sea stars take molluscs, detritus, sponges or carrion, and coral-eating specialists are a small minority within the class.",
      behavior:
        "Ordinary sea stars move slowly on hydraulic tube feet, right themselves when overturned, and regenerate lost arms, with a few species able to regrow a whole animal from a fragment attached to part of the central disc. Crown-of-thorns shares all of this and adds episodic population irruptions, where numbers on a reef rise from a handful to thousands. Outbreaks are linked in the literature to nutrient enrichment boosting larval survival and to reduced predation, and both explanations remain under study.",
      humanRelationship:
        "Sea stars are familiar from rock pools, aquarium displays and shell shops, and one recent conservation concern is the wasting disease that devastated northeast Pacific populations, including the sunflower sea star. Crown-of-thorns is instead a reef management problem, and organised control programmes operate on the Great Barrier Reef and elsewhere. Those programmes are conducted by trained and permitted teams. This page does not describe removal, culling or handling methods of any kind.",
      whichIsWhich:
        "Five arms, modest size, smooth or granular surface, on rock, sand or in a pool: an ordinary sea star. Many arms, a dense forest of long sharp spines, sitting on tropical Indo-Pacific coral with white feeding scars nearby: crown-of-thorns. Arm count alone will not settle it, because the sunflower sea star and several other species also carry many arms without any of the spination or the coral diet.",
      sensesAdaptations:
        "Both run on the echinoderm water vascular system, a hydraulic network driving hundreds of tube feet, with a madreporite on the upper surface acting as the intake. Eyespots at the arm tips detect light and coarse shapes, which is enough for slow navigation toward structure. Crown-of-thorns adds chemical sensitivity to coral and the venom-bearing spination that deters most predators. Both regenerate damaged arms, an ability that also complicates any physical control attempt.",
      lifespan:
        "Sea star lifespans vary widely across the class and are usually estimated rather than measured directly, with larger predatory species generally credited with several years to well over a decade. Crown-of-thorns is often described as living somewhere in the range of several years up to around a decade, with rapid growth to adult size after settlement. Because ageing echinoderms is difficult and most figures come from limited studies, treat any single number as provisional.",
      conservation:
        "The class contains species under real pressure, most visibly the sunflower sea star following the wasting disease outbreaks in the northeast Pacific. Crown-of-thorns is not itself threatened, and the conservation concern runs the other way: outbreaks are one of the recognised drivers of coral loss on Indo-Pacific reefs alongside bleaching and storms. Status changes and is assessed species by species, so check the current IUCN Red List entry rather than generalising from either name.",
    },
    faqs: [
      {
        question: "Is the crown-of-thorns one species or several?",
        answer:
          "Several. It was long treated as a single widespread species, Acanthaster planci, but genetic work has divided the group into regional species across the Indian and Pacific oceans, and a separate short-spined species, Acanthaster brevispinus, was already recognised. Papers vary in how they apply the new names, so older sources use the single-species framing while newer reef literature increasingly refers to a species complex or to the regional species directly.",
      },
      {
        question: "Do all sea stars eat coral the way crown-of-thorns do?",
        answer:
          "No. Everting the stomach to digest food externally is common across the class, but the food differs enormously: bivalves, gastropods, sponges, detritus, encrusting growth and carrion. Coral specialists are a small minority, and Acanthaster is the one with reef-scale consequences because of the volume it consumes during outbreaks. A typical rock pool sea star will never encounter reef-building coral, let alone feed on it.",
      },
      {
        question: "Why do crown-of-thorns numbers explode on some reefs?",
        answer:
          "Two explanations dominate the literature and they are not mutually exclusive. One links outbreaks to nutrient enrichment from land runoff, which boosts the plankton that larvae feed on and raises survival to settlement. The other points to reduced predation on juveniles and adults, including loss of the giant triton. Both remain under active study, and outbreak history on individual reefs is patchy enough that no single explanation fully accounts for it.",
      },
      {
        question: "Is a high arm count enough to identify a crown-of-thorns?",
        answer:
          "No. Several sea stars carry many arms without being related, and the sunflower sea star of the northeast Pacific reaches around two dozen arms and a very large diameter. The reliable combination is many arms plus dense long spines plus a tropical Indo-Pacific reef setting plus white feeding scars on coral beneath the animal. Any one of those on its own leaves too many alternatives open.",
      },
      {
        question: "Do crown-of-thorns starfish regenerate like other sea stars?",
        answer:
          "Yes. Regeneration of damaged or lost arms is general across the class, and Acanthaster is no exception, which is one reason that physical damage is an unreliable way to reduce numbers. Formal control on reefs such as the Great Barrier Reef is carried out by trained and permitted teams using approved protocols. This page gives no removal, injection or handling method, and any encounter should be left to those programmes.",
      },
    ],
    commonConfusions: [
      "Treating crown-of-thorns as a general type of large spiny starfish rather than one Indo-Pacific genus.",
      "Assuming any many-armed sea star is a crown-of-thorns, when the sunflower sea star and others also have many arms.",
      "Reading Acanthaster planci as a single global species, when the group is now treated as a species complex.",
    ],
    similarities: [
      "Both are asteroid echinoderms moving on tube feet driven by a water vascular system.",
      "Both digest food outside the body by everting the stomach over it.",
      "Both regenerate damaged or lost arms, given an intact portion of the central disc.",
      "Both broadcast spawn into the water column, with a planktonic larval stage before settlement.",
    ],
    keyDifferences: [
      "Starfish names a class of about 1,900 species, while crown-of-thorns is a single genus within it.",
      "Most sea stars have five arms, whereas crown-of-thorns adults usually carry ten to twenty.",
      "Crown-of-thorns is covered in long venom-bearing spines that ordinary sea stars lack.",
      "Its diet is living stony coral, unlike the molluscs, detritus and encrusting life most sea stars take.",
      "Crown-of-thorns is confined to tropical Indo-Pacific reefs, while sea stars occur in every ocean.",
    ],
    safetyBoundary:
      "Crown-of-thorns spines are venomous and puncture wounds are painful and can become serious. This page describes no handling, removal or treatment method; seek medical attention through emergency services after any puncture, and leave reef control work to trained and permitted programmes.",
    taxonomyCaveat:
      "Starfish and sea star both refer to the class Asteroidea, which is not a fish group at all. Crown-of-thorns refers to Acanthaster, formerly treated as the single species Acanthaster planci and now generally recognised as a complex of regional species.",
    conservationCaveat:
      "Crown-of-thorns outbreaks are a driver of coral loss rather than a conservation concern for the starfish itself, while some other sea stars have declined steeply. Check the current IUCN Red List entry for the species in question.",
    relatedComparisonSlugs: [
      "starfish-vs-sea-urchin",
      "coral-vs-sea-anemone",
      "nudibranch-vs-sea-slug",
    ],
    relatedHubPaths: [
      "/animal-taxonomy/invertebrates",
      "/animal-encyclopedia/marine-animals",
      "/animal-taxonomy/marine-animal-groups",
    ],
    sourceIds: ["noaa", "worms", "iucn"],
    lastReviewed: REVIEWED,
  }),
];
