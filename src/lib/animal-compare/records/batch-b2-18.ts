/**
 * Batch B2-18 — invertebrates, one pair.
 *
 * A single anomuran pair whose point is a family relationship most readers miss:
 * the coconut crab is not a giant true crab but a member of the land hermit crab
 * family that carries a borrowed shell as a juvenile and then abandons it for a
 * hardened abdomen of its own. Sizes, ages and statuses are hedged throughout,
 * and the land hermit crab pet trade is handled as a responsibility boundary.
 */
import { defineComparison, REVIEWED } from "./define.ts";

export const BATCH_B2_18 = [
  defineComparison({
    slug: "coconut-crab-vs-hermit-crab",
    animalA: { slug: "coconut-crab", name: "Coconut Crab" },
    animalB: { slug: "hermit-crab", name: "Hermit Crab" },
    title: "Coconut Crab vs Hermit Crab",
    metaTitle: "Coconut Crab vs Hermit Crab — Shell, Size & Family Ties",
    metaDescription:
      "The coconut crab is a hermit crab that outgrew the habit: adults harden the abdomen and drop the shell, while hermit crabs keep swapping shells for life.",
    shortAnswer:
      "A coconut crab is a hermit crab by descent but not by habit. It sits in Coenobitidae, the land hermit crab family, and juveniles do carry borrowed gastropod shells. Past a certain size the abdomen hardens, the shell is discarded permanently, and the animal keeps growing into the largest land-living arthropod known. Hermit crab, in contrast, is a common name covering hundreds of mostly marine species that keep a borrowed shell their whole lives and swap up as they grow.",
    primaryCategory: "insects-invertebrates",
    secondaryCategories: [],
    relationship: "close-relatives",
    confidence: "representative",
    searchIntent: "identification",
    whyCompare:
      "The coconut crab is usually written up as a giant curiosity rather than as what it actually is — a land hermit crab relative that outgrew the shell habit. Placing it beside ordinary hermit crabs makes both the family link and the shell-abandoning life history obvious.",
    centralDifference:
      "Adult coconut crabs discard the borrowed shell and harden their own abdomen, while hermit crabs keep moving into progressively larger gastropod shells for life.",
    dimensions: [
      {
        id: "shell-use",
        label: "Use of borrowed shells",
        animalAValue:
          "Juveniles occupy gastropod shells; past a size threshold the shell is abandoned permanently",
        animalBValue: "Occupied lifelong, exchanged for a roomier shell as the animal grows",
        interpretation:
          "The shell habit is a life stage in one animal and a lifelong constraint in the other.",
      },
      {
        id: "abdomen",
        label: "Abdomen",
        animalAValue: "Hardened in adults and folded tightly beneath the body, needing no cover",
        animalBValue: "Soft, asymmetric and spirally curved to fit the inside of a coiled shell",
        interpretation:
          "Growing its own armour is exactly what frees the adult coconut crab from shell hunting.",
      },
      {
        id: "adult-size",
        label: "Adult size",
        animalAValue:
          "The largest land arthropod known; heavy adults are commonly cited around three to four kilograms, with leg spans approaching a metre in exceptional individuals",
        animalBValue:
          "Most species are a few centimetres across and are limited by the largest shell they can carry",
        interpretation:
          "No shelled hermit crab approaches coconut crab size, because no available gastropod shell would hold it.",
        caveat:
          "Quoted maxima come from a small number of exceptional animals; typical adults on most islands are considerably smaller, and size varies with population and harvesting history.",
      },
      {
        id: "name-scope",
        label: "What the name covers",
        animalAValue: "One species, Birgus latro, the only member of its genus",
        animalBValue:
          "A common name for hundreds of species across several anomuran families, including marine and land groups",
        interpretation:
          "One side of this comparison is a species; the other is a whole assemblage, so overlap statements have to be phrased loosely.",
      },
      {
        id: "water-relationship",
        label: "Relationship with water",
        animalAValue:
          "Adults breathe air through a modified gill chamber and drown if held under water; females return to the shore only to release larvae",
        animalBValue:
          "Many species are fully marine; land species still need humid air and a marine larval stage",
        interpretation:
          "Both begin life in the sea, but only the coconut crab ends up unable to survive in it.",
      },
      {
        id: "chemical-senses",
        label: "Detecting food",
        animalAValue:
          "Antennae carry olfactory structures convergent with those of insects, tuned to scent travelling through air",
        animalBValue:
          "Marine species rely largely on chemical cues dissolved in water, with land species intermediate",
        interpretation:
          "Smelling in air rather than water is one of the least visible but most consequential differences between them.",
      },
      {
        id: "diet-focus",
        label: "Feeding focus",
        animalAValue:
          "Fallen fruit, nuts, seeds, pith and carrion, with heavy claws that can work into fibrous husks over long sessions",
        animalBValue:
          "Mostly scavenging and grazing on detritus, algae, carrion scraps and whatever the tide delivers",
        interpretation:
          "Both scavenge, but only the coconut crab can open food that other beach scavengers have to leave alone.",
        caveat:
          "Husk opening is reported from some individuals and not others, and it is slow work rather than the quick feat the common name implies.",
      },
    ],
    narrative: {
      taxonomy:
        "Both sit in Anomura, the decapod group that is not the true crabs despite the shared word. Hermit crab is a common name spread across hundreds of species in families such as Paguridae, Diogenidae and the land-dwelling Coenobitidae. The coconut crab, Birgus latro, is a single species and the only member of its genus, and it sits inside Coenobitidae beside the land hermit crabs of the genus Coenobita. The largest land arthropod is therefore a family member of the hermit crabs rather than a distant cousin.",
      identification:
        "The abdomen settles it once the animal is grown. A hermit crab normally hides the rear half of its body inside a borrowed gastropod shell, and the soft curled abdomen is visible only when the animal is out of it. An adult coconut crab carries no shell at all: the abdomen is hardened and folded flat beneath a heavy body, the legs are thick, and colouring runs from blue-grey through purplish to orange-red depending on the island population. Juvenile coconut crabs, confusingly, still wear shells.",
      habitat:
        "Hermit crabs occupy nearly every marine setting, from tide pools and reef rubble to deep water, and the Coenobita species add coastal scrub and beach forest above the tideline. Coconut crabs live on islands and coastlines through the Indian Ocean and western Pacific, sheltering in burrows and rock crevices by day and ranging inland after dark. The two genuinely overlap on many tropical shores, so a single beach can hold small shelled land hermit crabs and a full-grown shell-less coconut crab within a few hundred metres.",
      diet:
        "Both are opportunistic scavengers, which is why their feeding overlaps along the strandline. Hermit crabs largely graze detritus, algae, carrion scraps and stranded material, and some marine species sift fine particles from sediment or water. Coconut crabs take fallen fruit, nuts, seeds, pith and carrion, and their heavy claws let them work into fibrous husks that other beach scavengers cannot open, though the process is slow and by no means universal. Reports of coconut crabs taking small live animals exist, but scavenging dominates the picture.",
      behavior:
        "Shell exchange organises much of a hermit crab's social life: individuals inspect empty shells, and vacancy chains form in which a queue of crabs each moves up as a larger shell becomes free. Coconut crabs pass through that world as juveniles and then leave it behind. Adults are largely solitary and nocturnal, hold burrows, and climb trunks and rock faces with a grip that supports their considerable weight. Both must moult to grow, and both are at their most vulnerable while the new cuticle hardens.",
      humanRelationship:
        "Land hermit crabs are collected in quantity for the pet trade, and empty shells are collected from beaches too, which can leave wild populations short of the housing they depend on. Coconut crabs are harvested for food on many islands and are also affected by coastal development and introduced predators. Because they grow slowly and mature late, harvest pressure on coconut crabs plays out over decades rather than seasons, and several island jurisdictions run size limits, closed seasons or outright protection that differ sharply from one another.",
      whichIsWhich:
        "Shell present, soft curled abdomen, small body: a hermit crab of one species or another. No shell, hardened abdomen tucked beneath a heavy body, and larger than any other land arthropod you are likely to meet: a coconut crab. If the animal is small and shelled but on a tropical Indo-Pacific island, it could honestly be either a land hermit crab or a young coconut crab, and the truthful answer is that size and location narrow it without settling it.",
      sensesAdaptations:
        "Moving onto land reworked the senses. Coconut crabs detect scent carried in air using antennal structures convergent with those of insects, a real shift away from the water-borne chemical detection that marine hermit crabs use. Both breathe with modified gill chambers rather than true lungs; in the coconut crab that chamber is lined with tissue that functions in air, and adults suffocate if kept submerged. Land hermit crabs occupy the middle ground, needing humid air to keep their gill chambers damp enough to work.",
      lifespan:
        "Coconut crabs grow slowly and are widely described as long-lived, with estimates often quoted in the range of several decades. Those numbers are estimates rather than measurements: crustaceans shed the hard parts that might otherwise record age, so figures come from growth-rate modelling and mark-recapture work rather than direct reading. Hermit crab lifespans vary enormously across hundreds of species, with small marine species living only a few years while some land hermit crabs are reported to persist far longer under favourable conditions.",
      conservation:
        "The coconut crab has been assessed as Vulnerable on the IUCN Red List, reflecting harvesting, habitat loss and introduced predators acting on an animal that matures late and recovers slowly. Hermit crabs, being a large assemblage rather than a species, carry no single status; many species are common or unassessed, while collection for the pet trade and the removal of empty shells from beaches are recognised local pressures. Assessments are revised as new work is published, so any status quoted here is a pointer.",
      petContext:
        "Land hermit crabs are widely sold, and most are wild-caught, because the marine larval stage makes captive breeding rare in the trade. Coconut crabs are wildlife rather than a pet animal, and in several jurisdictions they are protected or harvest-restricted. Whether any animal suits a particular household depends on local law, welfare capacity, the conditions a species genuinely requires and a commitment measured in years or decades. Those judgements belong with a qualified veterinarian and the relevant wildlife authority, not with a comparison page.",
    },
    faqs: [
      {
        question: "Is a coconut crab actually a hermit crab?",
        answer:
          "By descent, yes. Birgus latro sits in Coenobitidae, the same family as the land hermit crabs of the genus Coenobita, and juveniles carry borrowed gastropod shells exactly as their relatives do. What changes is the adult: the abdomen hardens, the shell is discarded for good, and the animal keeps growing well past anything a shell could house. It is a hermit crab lineage that abandoned the hermit crab habit partway through life.",
      },
      {
        question: "Why do adult coconut crabs stop carrying a shell?",
        answer:
          "Growth outpaces the available housing. A shelled crab is capped by the largest empty gastropod shell it can find and drag around, and a body heading toward several kilograms has no such shell waiting for it. The coconut crab instead hardens its own abdomen and folds it beneath the body, so no borrowed cover is needed. Losing the shell also makes climbing and moving over rough ground far easier.",
      },
      {
        question: "Can a coconut crab really open a coconut?",
        answer:
          "Some individuals can, and it is nothing like the quick feat the name suggests. Crabs have been recorded working into husks over long sessions, sometimes across more than one visit, tearing at fibres with the heavy claws and then prising at weak points. Not every crab does it, and fallen fruit, seeds, pith and carrion make up much of the ordinary diet. The name reflects an association with coconut palms as much as any technique.",
      },
      {
        question: "Do coconut crabs and land hermit crabs share the same beaches?",
        answer:
          "Frequently, yes. Land hermit crabs of the genus Coenobita occupy coastal scrub and strandline across the tropics, and coconut crabs share many of those Indian Ocean and western Pacific islands, burrowing by day and foraging inland at night. Marine hermit crabs work the water below the same shore. That overlap is one reason small shelled coconut crabs get logged as ordinary land hermit crabs by casual observers.",
      },
      {
        question: "Why does a coconut crab drown when hermit crabs live in the sea?",
        answer:
          "The gill chamber changed. Adult coconut crabs breathe air through a modified branchial chamber lined with tissue suited to air rather than water, and an adult held under suffocates. Fully marine hermit crabs kept the aquatic arrangement, while land hermit crabs sit between the two and need humid air to keep the chamber damp. Coconut crab larvae are still marine, so the species starts life in water it later cannot survive in.",
      },
      {
        question: "How do you tell a young coconut crab from a land hermit crab?",
        answer:
          "Often you cannot at a glance, and that is worth saying plainly rather than pretending otherwise. At the shelled stage both are small, both are active on tropical shores and both use the same kinds of gastropod shells. Adults are trivial to separate, because only the coconut crab reaches a size at which no shell is carried and the abdomen is hardened. For juveniles, a confident answer usually needs a specialist examining claw and body detail.",
      },
    ],
    commonConfusions: [
      "Treating the coconut crab as a giant true crab, when it is an anomuran in the land hermit crab family.",
      "Assuming hermit crab names one species, when it covers hundreds across several families.",
      "Reading the shell-less adult as proof the two are unrelated, when shell use is simply a juvenile stage in Birgus latro.",
      "Expecting a coconut crab to swim because hermit crabs are associated with the sea.",
    ],
    similarities: [
      "Both are anomuran decapods rather than true crabs, despite what the names suggest.",
      "Both begin life as marine larvae and both start their bottom-dwelling stage inside a borrowed gastropod shell.",
      "Both are opportunistic scavengers that work the strandline, and both are largely nocturnal on land.",
      "Both must moult to grow, and both are most vulnerable while the new cuticle is still soft.",
    ],
    keyDifferences: [
      "Adult coconut crabs abandon borrowed shells permanently; hermit crabs keep trading up for life.",
      "The adult coconut crab abdomen is hardened and folded under the body, while a hermit crab's stays soft and spirally curved.",
      "Coconut crab names one species, Birgus latro, whereas hermit crab covers hundreds of species across several families.",
      "Adult coconut crabs breathe air and drown if submerged, while many hermit crabs are fully marine.",
      "Coconut crabs reach a body size no shelled hermit crab can approach, since no available shell would hold them.",
      "Coconut crabs smell food carried in air using insect-like antennal receptors; marine hermit crabs read chemical cues in water.",
    ],
    safetyBoundary:
      "Coconut crabs are powerful animals and are protected or harvest-restricted in parts of their range. Observe them at a distance and leave any handling to researchers and local wildlife authorities. If a person is injured by any animal, contact local emergency services or a medical professional.",
    petBoundary:
      "Land hermit crabs are sold as pets and are mostly wild-caught; coconut crabs are wildlife and are restricted or protected in several jurisdictions. Nothing here recommends acquiring either. Suitability depends on the household, local law, welfare capacity and a commitment measured in years, and care decisions belong with a qualified veterinarian.",
    taxonomyCaveat:
      "Hermit crab is a common name for hundreds of species across several anomuran families, not a single species. This page compares the coconut crab, Birgus latro, with typical hermit crabs and flags where marine and land families diverge.",
    conservationCaveat:
      "Conservation assessments are revised over time. Check the current IUCN Red List entry for Birgus latro, and for any individual hermit crab species, rather than relying on a status quoted here.",
    relatedComparisonSlugs: [
      "hermit-crab-vs-crab",
      "crab-vs-lobster",
      "horseshoe-crab-vs-crab",
      "krill-vs-shrimp",
    ],
    relatedHubPaths: ["/animal-taxonomy/invertebrates", "/animal-encyclopedia/marine-animals", "/fauna"],
    sourceIds: ["adw", "iucn", "worms"],
    lastReviewed: REVIEWED,
  }),
];
