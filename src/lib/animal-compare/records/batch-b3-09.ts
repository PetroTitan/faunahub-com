/**
 * Batch B3-09 — the osprey against two very different birds, and the rook
 * against four.
 *
 * Two pages test how far the raptor label stretches: the osprey beside gulls,
 * which share its coastline but not its order, and beside the secretary bird,
 * the other one-species family in Accipitriformes. Four pages work the corvid
 * problem the newly published rook profile creates — the bare adult face that
 * fails on juveniles, the size and voice gap to a raven, the pied contrast with
 * a magpie, and the parallel cognition story that parrots tell. Nothing here
 * ranks, pits or scores a bird, and no page carries management advice.
 */
import { defineComparison, REVIEWED } from "./define.ts";

export const BATCH_B3_09 = [
  defineComparison({
    slug: "osprey-vs-seagull",
    animalA: { slug: "osprey", name: "Osprey" },
    animalB: { slug: "seagull", name: "Seagull" },
    title: "Osprey vs Seagull",
    metaTitle: "Osprey vs Seagull — Fish Hawk and Coastal Generalist",
    metaDescription:
      "One is a plunge-diving raptor in its own family; seagull is shorthand for dozens of Laridae species. Feet, bill, diet and wing outline compared.",
    shortAnswer:
      "The osprey is a single raptor species, Pandion haliaetus, and the only living member of the family Pandionidae. Seagull is not a scientific term at all: it is everyday shorthand for roughly fifty gull species in the family Laridae, which sit in the shorebird order Charadriiformes. Behaviour follows that split. An osprey hovers over open water and drops feet-first to lift live fish clear of the surface with curved talons, while gulls swim, walk, dip, snatch floating scraps and feed across an unusually wide menu.",
    primaryCategory: "birds",
    secondaryCategories: ["habitat-ecology"],
    relationship: "similar-ecological-role",
    confidence: "representative",
    searchIntent: "identification",
    whyCompare:
      "They share estuaries, harbours and reservoirs, and a distant osprey with white underparts and long angled wings is regularly written off as a big gull by people scanning from the same sea wall.",
    centralDifference:
      "The osprey is one fish-hunting raptor species that dives feet-first for live prey, while seagull is a loose name for many gull species that feed opportunistically at or near the surface.",
    dimensions: [
      {
        id: "lineage",
        label: "Order and family",
        animalAValue: "Order Accipitriformes, family Pandionidae, containing one living species found on every continent except Antarctica",
        animalBValue: "Order Charadriiformes, family Laridae, containing roughly fifty gull species spread across several genera",
        interpretation:
          "Shared shorelines here reflect shared food and shared water, not shared ancestry — these lineages parted long before either specialised.",
      },
      {
        id: "feet",
        label: "Feet and toes",
        animalAValue: "Deeply curved talons, spiny scales on the footpads, and an outer toe that swivels backwards to lock around a fish",
        animalBValue: "Webbed forward toes suited to paddling on water and standing on flat ground, mud, roofs and shingle",
        interpretation:
          "Foot anatomy is the cleanest structural summary of the pair: one set of feet is built to carry struggling prey, the other to float and walk.",
      },
      {
        id: "prey-capture",
        label: "How food is taken",
        animalAValue: "Hovers on stalled wingbeats, then plunges feet-first and may submerge briefly before hauling clear",
        animalBValue: "Picks items from the surface, dips in flight, upends briefly, walks after prey and follows boats and ploughs",
        interpretation:
          "Only one of the two commits its whole body below the waterline, and that commitment is what the osprey's dense plumage and closable nostrils exist to support.",
      },
      {
        id: "bill",
        label: "Bill",
        animalAValue: "Short, dark and deeply hooked, used to tear fish apart after the catch has been carried to a perch",
        animalBValue: "Longer and much straighter, with at most a shallow downcurve at the tip in the larger species",
        interpretation:
          "A hooked raptor bill is a butchering tool used after capture; the gull bill is a general-purpose grabber used during it.",
      },
      {
        id: "diet-breadth",
        label: "Range of foods",
        animalAValue: "Live fish account for the great majority of recorded prey, with other items noted only occasionally",
        animalBValue: "Fish, marine invertebrates, worms, eggs, chicks, carrion, grain and discarded human food",
        interpretation:
          "One diet is narrow enough to define the bird outright; the other is defined precisely by refusing to be narrow.",
        caveat:
          "Diet studies differ by region and season, and gull menus in particular shift with what is locally available.",
      },
      {
        id: "flight-profile",
        label: "Wing outline in flight",
        animalAValue: "Long wings carried with a pronounced kink at the wrist, giving a shallow M, with dark patches at the bend",
        animalBValue: "Long wings held far straighter, with buoyant gliding and easy soaring on coastal updraughts",
        interpretation:
          "The kinked wing and dark carpal patches resolve the overhead confusion faster than plumage colour ever will.",
        caveat:
          "Both look pale-bellied against a bright sky, so read the wing outline before judging by underpart colour.",
      },
    ],
    narrative: {
      taxonomy:
        "These birds are not close relatives. The osprey occupies the family Pandionidae alone, within the order Accipitriformes that also holds hawks, kites, harriers and true eagles. Gulls belong to the family Laridae inside Charadriiformes, the order of waders, terns, skuas and auks. Seagull itself has no taxonomic standing: birdwatchers and ornithologists use gull, and specify a species, because head pattern, leg colour, wingtip markings and bill markings differ sharply between them.",
      identification:
        "From below, an osprey shows clean white underparts, a dark line through the eye, and long wings bent sharply at the wrist with a dark patch at each bend. Gulls show straighter wings, grey or black mantles depending on species, and no facial stripe. Perched, the difference is immediate: the osprey has a short hooked bill and heavy taloned feet, while a gull has a straighter bill and obvious webbed feet.",
      habitat:
        "Their ranges overlap constantly. Ospreys use lakes, large rivers, reservoirs, estuaries and sheltered coasts wherever fish swim within a few metres of the surface, and northern populations migrate long distances. Gulls occupy coasts, estuaries, inland lakes, farmland, rubbish tips, city roofs and open sea, with species differing widely in how far offshore they go. A harbour on a summer morning can hold both, feeding within sight of each other on entirely different terms.",
      diet:
        "The osprey is close to a single-prey specialist: live fish taken near the surface make up the overwhelming majority of recorded meals, which is why its whole body plan reads as a fishing rig. Gulls are among the most flexible feeders in the bird world, taking marine invertebrates, fish, carrion, eggs, chicks, earthworms behind a plough and food discarded by people. Scavenging and piracy are normal gull behaviour, not aberrations.",
      behavior:
        "An osprey typically hunts alone, quartering water at fifteen to forty metres, hovering when something surfaces and then dropping. Gulls are highly social feeders: a productive patch draws a noisy crowd, and individuals routinely chase each other for food already caught. Ospreys build bulky stick nests on dead trees, cliffs, poles and purpose-built platforms, often reused and enlarged for years. Many gulls nest in dense colonies on cliffs, islands, dunes or flat rooftops.",
      humanRelationship:
        "Ospreys declined badly in parts of North America and Europe during the era of organochlorine pesticides and have since recovered in many regions, helped by artificial nest platforms and legal protection. Gulls have moved into towns and are often resented there, yet several familiar species have declining populations at sea and are of real conservation concern. Both relationships are managed through wildlife law rather than through anything a member of the public should attempt.",
      whichIsWhich:
        "Hovering over open water and dropping feet-first for a fish, with a dark eye-stripe and kinked wings: osprey. Swimming, walking on a beach or roof, or milling around a boat with straight wings and webbed feet: a gull. If you see the bird carry a fish head-first in both feet on a long, purposeful flight to a stick nest, that is an osprey rather than any gull.",
      sensesAdaptations:
        "The osprey carries a set of features for entering water: dense oily plumage that sheds it, nostrils that close during the plunge, spiny footpads that grip slippery scales, and a reversible outer toe that lets both feet close in a two-front, two-back grip. Gulls instead have webbed feet, salt-excreting glands above the eyes that let them drink seawater, and a generalist's tolerance for whatever the tide or the town provides.",
      lifespan:
        "Both are long-lived by bird standards once past their first year, which is the dangerous one for each. Ringing recoveries include ospreys past twenty years old and large gulls beyond that, but these are the survivors rather than the norm, and mortality in the first twelve months is high for both. Figures vary by population, and recovery data are biased towards birds that are found and reported.",
      conservation:
        "Osprey numbers have improved across much of the northern hemisphere, though the picture is regional rather than uniform. Gull conservation is counterintuitive: the species most visible in towns can be the ones losing ground at sea, where changes in fisheries and prey availability matter more than urban abundance suggests. Neither status should be treated as fixed, since assessments are periodically revised.",
    },
    faqs: [
      {
        question: "Is the osprey simply a large fish-eating gull?",
        answer:
          "No. The osprey is a bird of prey in the order Accipitriformes and the sole living member of the family Pandionidae. Gulls belong to Laridae in the order Charadriiformes, alongside terns, waders and auks. The resemblance people notice is a matter of shape and setting — long wings, white underparts and a life spent over water — rather than any close relationship between the two lineages.",
      },
      {
        question: "Why do people call the osprey a fish hawk or sea hawk?",
        answer:
          "Both are old vernacular names describing what the bird does rather than where it sits taxonomically. It hunts almost exclusively for live fish and is most often seen over coastal water, so fishing communities named it accordingly. The same habit explains the misleading label fish eagle, which is unhelpful because the osprey is not an eagle and does not share a family with any of them.",
      },
      {
        question: "Do gulls ever catch live fish themselves?",
        answer:
          "Regularly, though not the way an osprey does. Gulls take fish at or just below the surface by dipping in flight, seizing them while swimming, or making shallow plunges that barely wet the body. They also take fish discarded from boats and chase other birds to make them drop a catch. What they do not do is dive feet-first and submerge to lift a fish from below.",
      },
      {
        question: "How do I separate an osprey from a large gull directly overhead?",
        answer:
          "Watch the wing outline rather than the underpart colour, because both look pale from beneath. An osprey holds its wings with a sharp bend at the wrist, producing a shallow M, and shows a dark patch at each bend plus a dark stripe through the eye. A gull holds its wings much straighter and shows a clean face. Flight rhythm helps too: gulls glide more buoyantly.",
      },
      {
        question: "Is seagull a real name for a bird?",
        answer:
          "It is a real everyday word but not a species. No bird is called the seagull in scientific usage, because the term covers dozens of gulls that differ in size, mantle shade, leg colour, wingtip pattern, bill markings and habitat. Some rarely go near the sea at all. Watchers use gull plus a species name for exactly that reason, and identification guides are organised the same way.",
      },
    ],
    commonConfusions: [
      "Reading the osprey's white underside and long angled wings as a large gull when the bird passes directly overhead.",
      "Treating seagull as the name of one species when it stands for many gulls that differ in size, voice and head pattern.",
      "Assuming any bird carrying a fish across a harbour must be a gull, when the two-footed head-first carry is an osprey habit.",
      "Expecting the osprey's fish diet to make it a seabird, when it depends on fresh water across much of its range.",
    ],
    similarities: [
      "Both are strongly associated with coasts, estuaries, reservoirs and large rivers, and both are commonly watched from the same harbour wall.",
      "Both carry long, narrow wings that let them cover wide stretches of open water cheaply and soar in rising air.",
      "Both nest in the open — on platforms, poles, cliffs, islands, dunes or bare ground — rather than inside cavities.",
      "Both raise chicks that stay dependent on their parents for weeks after hatching, and both defend the nest site noisily.",
      "Both have long lifespans for birds once they survive a first year in which mortality is high.",
    ],
    keyDifferences: [
      "The osprey is one species in the family Pandionidae, whereas seagull is a loose label for dozens of species in Laridae.",
      "Osprey feet carry curved talons, spiny pads and a reversible outer toe, while gull feet are webbed for swimming.",
      "An osprey plunges feet-first and may submerge, but gulls take food at or just under the surface.",
      "Live fish dominate the osprey's diet, while gull diets are famously broad and shift with local opportunity.",
      "In silhouette the osprey's wing is sharply kinked at the wrist, whereas a gull's is held much straighter.",
      "Ospreys usually hunt alone, while gulls feed, roost and nest in noisy aggregations.",
    ],
    taxonomyCaveat:
      "Seagull is a vernacular umbrella, not a taxon. Gull covers roughly fifty species across several genera in the family Laridae, and identification always depends on which gull is meant. The osprey, by contrast, is a single species with a small number of described subspecies.",
    conservationCaveat:
      "Osprey recovery and gull declines are both regional and both under periodic review, and several urban-familiar gulls are of higher conservation concern than their visibility suggests. Check the current IUCN Red List entry for the species you mean rather than relying on impressions of abundance.",
    relatedComparisonSlugs: ["osprey-vs-pelican", "osprey-vs-frigatebird", "osprey-vs-kingfisher", "rook-vs-seagull"],
    relatedHubPaths: ["/animal-encyclopedia/birds", "/birds", "/birdwatching"],
    sourceIds: ["cornell", "audubon", "adw"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "osprey-vs-secretary-bird",
    animalA: { slug: "osprey", name: "Osprey" },
    animalB: { slug: "secretary-bird", name: "Secretary Bird" },
    title: "Osprey vs Secretary Bird",
    metaTitle: "Osprey vs Secretary Bird — Talons, Long Legs, Two Families",
    metaDescription:
      "Two raptors that each own a family alone: one dives feet-first for fish, the other walks African grassland on crane-like legs. Feet, legs and range compared.",
    shortAnswer:
      "Both sit in the order Accipitriformes and each is the only living member of its own family, yet they abandoned the standard raptor build in opposite directions. The osprey, Pandion haliaetus, became a water specialist with a compact body, long angled wings and hooked talons that lift live fish clear of the surface. The secretary bird, Sagittarius serpentarius, became a walker: an African grassland raptor standing over a metre tall on crane-like legs, taking small animals on the ground with short, blunt toes.",
    primaryCategory: "birds",
    secondaryCategories: ["behavior-adaptations"],
    relationship: "contrasting-adaptations",
    confidence: "strong",
    searchIntent: "identification",
    whyCompare:
      "Placing them side by side shows how much variation the word raptor conceals: two birds of prey in one order, each alone in its family, one of which almost never lands on water and one of which almost never leaves the ground.",
    centralDifference:
      "The osprey is a compact plunge-diver that seizes fish in curved talons, while the secretary bird is a tall, long-legged terrestrial hunter that finds nearly all its food while walking.",
    dimensions: [
      {
        id: "leg-proportions",
        label: "Leg proportions",
        animalAValue: "Short, thick legs held tucked in flight and used almost entirely as grappling gear",
        animalBValue: "Extremely long, stilt-like legs that lift the body well clear of grass, giving a standing height above a metre",
        interpretation:
          "Leg length is the first clue to where each bird earns its living — one hunts in a medium it enters, the other across a surface it strides over.",
      },
      {
        id: "toe-and-claw",
        label: "Toes and claws",
        animalAValue: "Long, strongly curved talons, spiny footpads and an outer toe that reverses to lock around slippery prey",
        animalBValue: "Short, stubby toes with comparatively blunt claws, better suited to striking downwards than to carrying",
        interpretation:
          "The secretary bird gave up the gripping foot that defines most raptors, which is why it deals with prey where it stands instead of carrying it away.",
      },
      {
        id: "foraging-arena",
        label: "Where prey is found",
        animalAValue: "The top few metres of lakes, rivers, estuaries and sheltered coastal water",
        animalBValue: "Open savanna, grassland and lightly wooded plains, searched at walking pace",
        interpretation:
          "One bird's hunting surface is liquid and the other's is soil, and almost every anatomical difference between them follows from that.",
      },
      {
        id: "head-pattern",
        label: "Head and face",
        animalAValue: "White crown with a broad dark stripe through the yellow eye, and a short slightly raised crest",
        animalBValue: "Bare orange-red facial skin, a heavy hooked bill and a loose fan of long black quills at the nape",
        interpretation:
          "Head pattern is the fastest field separation, and the secretary bird's quill crest is unlike anything else in the order.",
      },
      {
        id: "locomotion",
        label: "How the day is spent",
        animalAValue: "Flying and hovering over water, with northern populations undertaking long seasonal migrations",
        animalBValue: "Walking steadily across open country for much of the day, flying mainly to roost, display or move between patches",
        interpretation:
          "Time budgets diverge as sharply as anatomy: sustained flight for one, sustained walking for the other.",
        caveat:
          "Secretary birds do soar strongly, especially in display, so seeing one high overhead is not unusual.",
      },
      {
        id: "geographic-range",
        label: "Distribution",
        animalAValue: "Near-global, breeding across much of the northern hemisphere and wintering into the tropics and southern continents",
        animalBValue: "Restricted to sub-Saharan Africa, in open habitats south of the Sahara",
        interpretation:
          "One of the two is among the most widespread birds on Earth while the other is a single continent's speciality, so their paths cross only in Africa.",
      },
    ],
    narrative: {
      taxonomy:
        "Both belong to Accipitriformes, and both are taxonomic loners within it. The osprey is the only living species in Pandionidae; the secretary bird is the only living species in Sagittariidae. Neither is an eagle, a hawk or a kite, and neither has close living relatives to compare against, which is why each is treated as its own branch in modern classifications rather than being folded into the larger accipitrid family.",
      identification:
        "There is no realistic risk of mixing them in the field, and the value of the pair lies elsewhere. A perched osprey is a brown-and-white bird a little over half a metre long with a dark eye-mask. A standing secretary bird is grey and black, taller than a heron, with a bare red face, black flight feathers, black thigh feathering resembling breeches, and a spray of dark quills behind the head.",
      habitat:
        "The osprey follows fish, so it occupies almost any water body with clear shallows: reservoirs, lakes, slow rivers, estuaries, mangroves and sheltered coasts across most of the world. The secretary bird occupies open sub-Saharan grassland and savanna and avoids dense forest, needing ground it can walk through and scattered thorn trees to roost and nest in. Their ranges meet only where wintering ospreys pass through African wetlands.",
      diet:
        "The osprey takes live fish almost to the exclusion of everything else, which is unusual even among fish-eating birds. The secretary bird is a broad terrestrial predator, recorded taking grasshoppers and other large insects, rodents, lizards, snakes, amphibians, ground-nesting birds' eggs and nestlings. Insects and small mammals form much of the intake in most studies, and snakes, despite the bird's reputation, are only one part of a varied diet.",
      behavior:
        "An osprey hunts by quartering water at height, hovering when it detects a fish, then dropping with its feet thrown forward. A secretary bird hunts by walking, flushing prey from grass and delivering fast downward strikes with its feet before swallowing small items whole. Both build large stick nests reused across seasons — the osprey's on a pole, dead tree, platform or cliff, the secretary bird's on the flat crown of a thorny tree.",
      humanRelationship:
        "The osprey is watched intensively at nest platforms and webcam sites, and it recovered across much of its northern range after pesticide restrictions and legal protection. The secretary bird is a national emblem in parts of Africa and appears on coats of arms, but has declined and is treated as a bird of serious conservation concern, with habitat conversion, grassland loss and disturbance among the causes discussed in the literature.",
      whichIsWhich:
        "Over water, hovering, then folding into a feet-first plunge: osprey. Walking through knee-high grass on long bare legs with quills trailing from the back of the head: secretary bird. If the bird is in Europe, Asia, the Americas or Australasia it cannot be a secretary bird; if it is striding across African savanna rather than flying over water, it is not an osprey.",
      sensesAdaptations:
        "The osprey is built to survive immersion — dense oily plumage, closable nostrils, gripping footpads and a reversible toe. The secretary bird is built for a long day on foot: elongated tarsi, a short-toed foot that tolerates repeated impact, and eyes set to scan grass ahead. Both have the sharp forward-facing vision typical of raptors, but one uses it to look down through a water surface and the other along a moving grass line.",
      lifespan:
        "Neither is short-lived. Ringing and captive records include ospreys past twenty years and secretary birds of comparable age, though wild averages are much lower than these maxima and first-year mortality dominates the statistics for both. Captive figures should not be read as wild expectations, and published maxima describe exceptional individuals rather than a typical bird's prospects in either species.",
      conservation:
        "These two illustrate divergent trajectories. Osprey populations have recovered strongly in several regions since the mid-twentieth century, aided by protection and artificial nest sites. The secretary bird has been assessed as declining across its African range, and its status has been revised upwards in threat category in recent decades. Statuses are reassessed periodically, so current listings should be checked rather than assumed.",
    },
    faqs: [
      {
        question: "Do these two birds of prey belong to the same family?",
        answer:
          "They share an order, Accipitriformes, but nothing closer. Each is the sole living member of its own family — Pandionidae for the osprey, Sagittariidae for the secretary bird — so both branch off separately from the main accipitrid group of hawks, kites and eagles. Sharing an order is a loose relationship: it means they descend from a common bird-of-prey ancestor, not that they are near kin.",
      },
      {
        question: "Why does the secretary bird have such long legs?",
        answer:
          "Its legs let it hunt while walking through grassland instead of striking from the air. Height keeps the body and eyes above the grass line so prey can be spotted ahead, and long strides make covering large distances on foot cheap. The trade-off is a foot that grips poorly, which is why the species handles food where it finds it rather than lifting prey to a perch.",
      },
      {
        question: "Does the osprey ever hunt on land like the secretary bird?",
        answer:
          "Very rarely. Records exist of ospreys taking small mammals, birds, reptiles or carrion, but these are exceptions noted precisely because they are unusual. The osprey's whole toolkit — reversible toe, spiny pads, water-shedding plumage, hovering flight — is committed to lifting fish from open water, and land prey does not reward that equipment the way a surfacing fish does.",
      },
      {
        question: "Where would someone see each bird?",
        answer:
          "The osprey is one of the world's most widely distributed birds, breeding across much of the northern hemisphere and wintering south, so it can turn up at almost any large water body on migration. The secretary bird is confined to sub-Saharan Africa and to open habitat within it. Africa is the only continent where both occur, and even there they use entirely different ground.",
      },
      {
        question: "Is the secretary bird really a bird of prey?",
        answer:
          "Yes, on both anatomy and behaviour. It carries the hooked bill and forward-facing eyes of a raptor and takes live vertebrate and invertebrate prey, and molecular work places it inside Accipitriformes. What it lacks is the grasping foot most people associate with the group, having traded gripping talons for short toes suited to a hunting style carried out on foot rather than in the air.",
      },
      {
        question: "Why is it called a secretary bird?",
        answer:
          "The traditional explanation is that the loose black quills at the back of the head resemble the quill pens a nineteenth-century clerk might tuck behind an ear, with the grey and black plumage read as formal dress. An alternative derivation from an Arabic phrase for hunting bird has also been proposed. The origin is genuinely disputed, so the story is best repeated as one of several possibilities.",
      },
    ],
    commonConfusions: [
      "Assuming every member of Accipitriformes shares the gripping taloned foot, when the secretary bird's short blunt toes show otherwise.",
      "Treating the secretary bird as a crane or a stork because of its height and long legs, rather than as a raptor.",
      "Believing the secretary bird eats mainly snakes, when insects and small mammals dominate most published diet records.",
      "Calling the osprey a fish eagle, which implies a family relationship with eagles that does not exist.",
    ],
    similarities: [
      "Each sits alone at the end of its own branch — one family, one genus, one living species apiece — which is unusual among birds of prey.",
      "Both build bulky stick nests that are reused and enlarged across seasons rather than rebuilt each year.",
      "Both carry the hooked bill and forward-facing eyes that define birds of prey, whatever their feet look like.",
      "Both hunt live animals located by sight rather than scavenging as a primary strategy.",
      "Both are broad-winged birds capable of sustained soaring despite spending their days very differently.",
    ],
    keyDifferences: [
      "The osprey hunts by plunging feet-first into water, while the secretary bird hunts on foot across dry grassland.",
      "Osprey toes end in long curved talons with spiny pads; secretary bird toes are short and blunt-clawed.",
      "The secretary bird stands over a metre tall on stilt-like legs, whereas the osprey has short legs tucked in flight.",
      "The osprey occurs on almost every continent, but the secretary bird is restricted to sub-Saharan Africa.",
      "Live fish make up nearly the whole osprey diet, while the secretary bird takes insects, rodents, reptiles and eggs.",
      "The secretary bird carries a fan of long nape quills and bare red facial skin, features the osprey entirely lacks.",
    ],
    taxonomyCaveat:
      "Both names refer to single species, but the shared label raptor does not imply close kinship. Pandionidae and Sagittariidae are separate families whose placement within Accipitriformes has been revised as molecular data accumulated, and older books may show different arrangements.",
    conservationCaveat:
      "The two are moving in different directions, and the secretary bird's threat category has been revised in recent decades. Consult the current IUCN Red List assessment for each species rather than treating any status quoted here as settled.",
    relatedComparisonSlugs: ["osprey-vs-shoebill", "osprey-vs-vulture", "osprey-vs-harpy-eagle"],
    relatedHubPaths: ["/animal-encyclopedia/birds", "/birds", "/animal-senses-and-adaptations"],
    sourceIds: ["cornell", "iucn", "britannica"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "rook-vs-crow",
    animalA: { slug: "rook", name: "Rook" },
    animalB: { slug: "crow", name: "Crow" },
    title: "Rook vs Crow",
    metaTitle: "Rook vs Crow — Bare Face, Bill Shape and Flock Habits",
    metaDescription:
      "Adult rooks show bare pale skin at the bill base and a peaked crown; crows are fully feathered and flat-headed. Bill, trousers, nests and flocking compared.",
    shortAnswer:
      "An adult rook, Corvus frugilegus, shows bare greyish-white skin around the base of a slim, pointed, pale bill, giving it a distinctly bald-faced look. A crow is feathered right up to the nostrils and carries a stouter, more arched, all-dark bill. Rooks also have a peaked crown and loose, shaggy thigh feathering that hangs like baggy trousers, and they nest and feed in colonies. Crows have a flatter head, neat flanks, and are usually seen alone or in pairs.",
    primaryCategory: "look-alikes",
    secondaryCategories: ["birds"],
    relationship: "commonly-confused",
    confidence: "strong",
    searchIntent: "identification",
    whyCompare:
      "This is the corvid confusion that trips up most people in Europe, and the standard shortcut — look for the bare white face — quietly fails on juvenile rooks, which is exactly when a second set of cues matters.",
    centralDifference:
      "An adult rook has bare pale skin at the base of a slim pointed bill plus shaggy thigh feathering, while a crow is fully feathered to the bill with a stouter arched bill and tidy flanks.",
    dimensions: [
      {
        id: "face-skin",
        label: "Skin at the bill base",
        animalAValue: "Bare greyish-white skin surrounding the bill base and extending onto the face in adults",
        animalBValue: "Feathered right up to the nostrils, with bristly feathers covering the bill base at all ages",
        interpretation:
          "This is the classic first-glance cue, and it is decisive when it is present — but only on birds that have completed their first full year.",
        caveat:
          "Juvenile rooks have fully feathered faces and look convincingly crow-like, so never rest an identification on this feature alone.",
      },
      {
        id: "bill-shape",
        label: "Bill shape",
        animalAValue: "Slimmer, straighter and more sharply pointed, often looking pale towards the base",
        animalBValue: "Stouter and deeper with a more evenly arched upper edge, uniformly dark",
        interpretation:
          "Bill shape works on juveniles too, which is what makes it the cue to reach for when the face cue is unavailable.",
      },
      {
        id: "crown-shape",
        label: "Head profile",
        animalAValue: "Crown noticeably peaked, giving a steep forehead and a high-domed look",
        animalBValue: "Crown flatter, so the head reads as a smooth continuation of the bill line",
        interpretation:
          "Silhouette cues survive bad light and distance, which is when plumage detail is least useful.",
      },
      {
        id: "thigh-feathering",
        label: "Thigh feathering",
        animalAValue: "Loose, shaggy feathers hanging over the legs like baggy trousers",
        animalBValue: "Tight, close-cropped flank and thigh feathering giving a neat, trim outline",
        interpretation:
          "The shaggy trousers are visible on a walking bird at surprising distance and hold true regardless of age.",
      },
      {
        id: "voice",
        label: "Voice",
        animalAValue: "A harsh, drier, slightly higher call, usually heard as part of a chorus from many birds at once",
        animalBValue: "A flatter, deeper, more measured call, typically repeated in short bursts from one or two birds",
        interpretation:
          "In practice the number of voices tells you as much as the tone: a wall of calling almost always means the colonial species.",
      },
      {
        id: "nest-density",
        label: "Nesting arrangement",
        animalAValue: "Dense treetop colonies where dozens of nests may be packed into a small stand of trees",
        animalBValue: "Solitary nesting, with a single nest per territory and pairs holding space against neighbours",
        interpretation:
          "Nest spacing is the most reliable separation of all, because it does not depend on seeing the bird well.",
      },
      {
        id: "flock-behaviour",
        label: "Feeding groups",
        animalAValue: "Feeds in flocks on open farmland, often spread across a field in loose formation",
        animalBValue: "Feeds singly, in pairs or in small loose gatherings at a food source",
        interpretation:
          "The old countryside test — a solitary bird is usually the territorial one, a crowd is usually the colonial one — encodes a genuine difference in social structure.",
        caveat:
          "Crows do gather at abundant food and at winter roosts, so a group is suggestive rather than conclusive.",
      },
    ],
    narrative: {
      taxonomy:
        "Both are Corvus species in the family Corvidae. The rook is a single species, Corvus frugilegus, of Europe and temperate Asia. Crow is the harder word: it covers many Corvus species including the carrion crow of western Europe, the hooded crow of the north and east, and the American crow. Comparisons like this one are usually made against the carrion crow, since that is the species rooks overlap with most closely.",
      identification:
        "Work through the cues in order. On an adult, the bare pale skin at the bill base settles it immediately. If the face is feathered, check the bill for slimness and a sharp point, then the crown for a peak, then the thighs for loose shaggy feathering. Finally, note the company: a single black corvid stalking a lawn and a hundred birds spread across a ploughed field are usually different species.",
      habitat:
        "Rooks are birds of farmland with tall trees, needing arable or grazed fields to feed on and a copse, shelter belt or churchyard stand for the colony. Crows are far more catholic, using farmland, moorland, woodland, coast, parks and city centres, and they tolerate ground that would not support a rookery. Where the two overlap, rooks concentrate near their colonies while crows spread thinly across the wider landscape.",
      diet:
        "Both are omnivores, but their emphasis differs. Rooks take a great deal of soil invertebrate food, especially earthworms and the larvae of crane flies, probing pasture and stubble with that long pointed bill, alongside cereal grain, seeds and other invertebrates. Crows are more strongly opportunistic, taking carrion, eggs, nestlings, small vertebrates, invertebrates, grain and food waste, and they scavenge along shorelines and roadsides more readily than rooks do.",
      behavior:
        "Sociality is the deepest difference between them. Rooks live colonially year-round, nesting in tightly packed rookeries that become noisy from late winter, feeding in flocks and gathering at large communal roosts. Crows hold territories as pairs through the breeding season and defend them actively, joining others only at rich food or at winter roost sites. Both cache food, both mob predators, and both are quick to exploit new opportunities.",
      humanRelationship:
        "Both have long histories in European farming culture and folklore, and both have been regarded with suspicion around crops and livestock. Studies of rook diet consistently show a large soil-invertebrate component, which complicates the older view of the species. Legal protection differs between countries and has changed over time, so the status of either bird in any particular place is a matter for current national wildlife law.",
      whichIsWhich:
        "Bare pale face, slim pointed bill, peaked crown, baggy thigh feathers, and dozens of neighbours: rook. Fully feathered face, stout arched bill, flat crown, tidy flanks, and usually alone or with one companion: crow. If you are watching a treetop colony of stick nests in February, you are almost certainly watching rooks, because crows do not nest that way.",
      sensesAdaptations:
        "Both belong to a family with unusually large brains for their body size and both perform well on problem-solving tasks in captivity. The rook's slim, pointed bill functions as a probe for soft ground, letting it reach invertebrates below the surface, while the crow's deeper bill is a more general tool for tearing and levering. Both cache surplus food and both show good spatial recall of where items were hidden.",
      lifespan:
        "Ringing recoveries for both include birds that lived into their late teens, but such individuals are exceptional. Typical survival is far shorter, with the first year carrying much the highest mortality, and averages differ between populations and study periods. Recovery data are also biased towards birds whose rings are found and reported, so published maxima should be read as records rather than as expectations.",
    },
    faqs: [
      {
        question: "Does the bare white face always identify a rook?",
        answer:
          "Only on adults. Rooks hatch with fully feathered faces and dark bill bases, and young birds keep that look through their first months, which makes them genuinely crow-like. The bare skin develops as they mature. For a juvenile, work from bill slimness, the peaked crown, the shaggy thigh feathering and the company the bird is keeping instead of looking for bare skin that has not appeared yet.",
      },
      {
        question: "Is the old saying about lone birds and flocks actually true?",
        answer:
          "The countryside test — one bird alone is usually a crow, a crowd is usually rooks — reflects a real difference in social structure rather than folklore. Rooks are colonial through the year, nesting and feeding in groups. Crows hold pair territories and disperse more thinly. It is a useful default rather than a rule, since crows do assemble at abundant food and at winter roosts.",
      },
      {
        question: "How do their nests differ?",
        answer:
          "Dramatically, and it is often the easiest separation of all. Rooks build dense treetop colonies, sometimes dozens of nests in a handful of adjacent trees, and repair them noisily from late winter. Crows build a single nest per territory, well spaced from any other pair, usually in a fork lower in the canopy. A cluster of stick nests visible from a road in bare February trees means a rookery.",
      },
      {
        question: "Which crow species is usually meant in this comparison?",
        answer:
          "In western Europe it is normally the carrion crow, the all-black species whose range overlaps the rook most closely. Further north and east the hooded crow, with its grey body and black hood, replaces it and is much easier to separate. In North America, where rooks are only a rare vagrant, crow means the American crow and the comparison seldom arises in practice.",
      },
      {
        question: "Do rooks and crows compete for the same food?",
        answer:
          "They overlap without matching. Rooks specialise more on soil invertebrates taken by probing pasture and stubble, with grain and seeds an important supplement. Crows lean further towards carrion, eggs, small vertebrates and scavenged material, and they will feed in places a flock of rooks would not use. The result is broad dietary overlap with real differences in emphasis, which lets both share the same farmland.",
      },
    ],
    commonConfusions: [
      "Relying on the bare pale face when the bird in view is a juvenile rook that has not developed it yet.",
      "Reading any group of black corvids as rooks, when crows also gather at abundant food and at winter roosts.",
      "Assuming crow names one species, when it covers the carrion crow, hooded crow, American crow and others.",
      "Mistaking a jackdaw for either, when its smaller size, grey nape and pale eye separate it from both.",
    ],
    similarities: [
      "Both are all-black Corvus species of similar overall length, which is why the confusion arises in the first place.",
      "Both take a wide mix of animal and plant food, and both hide surplus items and retrieve them later.",
      "Both mob predators noisily and both exploit farmland created and maintained by people.",
      "Both belong to a family known for large relative brain size and strong performance on captive problem-solving tasks.",
      "Both have long histories in European folklore and both have been regarded with suspicion by farmers.",
    ],
    keyDifferences: [
      "Adult rooks show bare pale skin at the bill base, while crows are feathered right up to the nostrils at every age.",
      "The rook's bill is slimmer, straighter and more pointed; the crow's is stouter with a more arched upper edge.",
      "A rook's crown is peaked and its thigh feathers hang loose, whereas a crow is flat-crowned and trim-flanked.",
      "Rooks nest in dense treetop colonies, but crows nest singly within a defended pair territory.",
      "Rooks feed in flocks on open farmland, while crows more often forage alone or in twos.",
      "Rook diets lean heavily on probed soil invertebrates, while crow diets lean further towards carrion and scavenging.",
    ],
    taxonomyCaveat:
      "Rook refers to one species, Corvus frugilegus, but crow is a common name shared by many Corvus species. Unless stated otherwise, comparisons of this kind mean the carrion crow, since that is the species whose range and appearance overlap the rook most closely.",
    relatedComparisonSlugs: ["raven-vs-crow", "magpie-vs-crow", "rook-vs-raven", "rook-vs-magpie"],
    relatedHubPaths: ["/animal-encyclopedia/birds", "/birds", "/birdwatching"],
    sourceIds: ["cornell", "britannica", "adw"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "rook-vs-raven",
    animalA: { slug: "rook", name: "Rook" },
    animalB: { slug: "raven", name: "Raven" },
    title: "Rook vs Raven",
    metaTitle: "Rook vs Raven — Size, Bill Base, Voice and Nesting",
    metaDescription:
      "A raven is far bulkier with shaggy throat hackles and a croaking call; the rook is mid-sized, bare-faced as an adult, and nests in packed colonies.",
    shortAnswer:
      "Size settles most sightings. A common raven is the bulkiest perching bird in the northern hemisphere, with a massive deep bill, shaggy throat hackles and a wingspan around a metre and a quarter. A rook is a good deal smaller and slimmer, and an adult carries bare greyish-white skin around the base of a pointed bill instead of feathering. Voice separates them even when size is hard to judge: ravens give a deep resonant croak, rooks a harsher, drier, higher call from many birds at once.",
    primaryCategory: "look-alikes",
    secondaryCategories: ["birds"],
    relationship: "commonly-confused",
    confidence: "strong",
    searchIntent: "identification",
    whyCompare:
      "Both are large all-black corvids that share upland farmland, coastal fields and woodland edge in Europe, and a lone rook on a distant fence post is regularly upgraded to a raven by observers with nothing nearby to judge scale against.",
    centralDifference:
      "A raven is a much bulkier corvid with a heavy bill, shaggy throat hackles and a croaking voice, while a rook is mid-sized with a slim pointed bill, bare pale facial skin as an adult, and colonial habits.",
    dimensions: [
      {
        id: "size-and-build",
        label: "Size and build",
        animalAValue: "Mid-sized and comparatively slim, at roughly the bulk of a common farmland corvid",
        animalBValue: "Very large and heavily built, the biggest passerine of the northern hemisphere, with a wingspan around 1.2 metres",
        interpretation:
          "Bulk is the single most useful cue when both are present, but it collapses the moment a bird is alone with nothing to compare against.",
        caveat:
          "Judging size in isolation is unreliable, so treat lone-bird size impressions with caution and confirm with bill and voice.",
      },
      {
        id: "bill-base",
        label: "Bill and its base",
        animalAValue: "Slim, straight and pointed, with bare greyish-white skin around the base in adults",
        animalBValue: "Very deep and heavy with a strongly curved culmen, feathered at the base and uniformly black",
        interpretation:
          "The bills belong to different jobs — one probes soft ground, the other levers and tears — and the contrast holds at any distance the bird's head is visible.",
      },
      {
        id: "throat-feathering",
        label: "Throat feathering",
        animalAValue: "Smooth throat, with the shagginess concentrated instead on the thighs",
        animalBValue: "Long, loose hackles on the throat that flare visibly when the bird calls or displays",
        interpretation:
          "Flared throat hackles are a raven signature and appear in no other black corvid of the region.",
      },
      {
        id: "voice-quality",
        label: "Call quality",
        animalAValue: "A dry, harsh, relatively high call, usually one of many overlapping voices",
        animalBValue: "A deep, resonant, far-carrying croak, often delivered as a slow series from a single bird",
        interpretation:
          "Pitch and depth are so different that voice alone will resolve a bird heard but never seen.",
      },
      {
        id: "flight-and-soaring",
        label: "Flight style",
        animalAValue: "Direct rowing flight with fingered wingtips, usually travelling as part of a moving group",
        animalBValue: "Powerful flight with frequent soaring, gliding and rolling or tumbling display manoeuvres",
        interpretation:
          "Watching a black corvid roll onto its back in mid-air is diagnostic, because rooks do not perform that display.",
      },
      {
        id: "nest-spacing",
        label: "Nest spacing",
        animalAValue: "Dozens of nests packed into the tops of a few adjacent trees, occupied from late winter",
        animalBValue: "A single well-spaced nest per pair, often on a crag, quarry face, sea cliff or isolated tall tree",
        interpretation:
          "Colonial versus solitary nesting reflects genuinely different social systems rather than just different real estate.",
      },
    ],
    narrative: {
      taxonomy:
        "Both sit in the genus Corvus within Corvidae. The rook is Corvus frugilegus, a single species of Europe and temperate Asia. Raven is used for several Corvus species worldwide, but in Europe and across most of the northern hemisphere it means the common raven, Corvus corax, which has an enormous range spanning Eurasia, North America and North Africa. They are congeners, not close sister species.",
      identification:
        "If both are in view, bulk resolves it instantly. If only one is present, start with the bill: heavy, deep and curved with a feathered base points one way; slim, pointed and pale-based points the other. Then check the throat for loose flaring hackles, and watch the flight for soaring and tumbling. Company is the final check, since a bird embedded in a large travelling flock is rarely the solitary species.",
      habitat:
        "The rook needs a combination of tall trees for its colony and open farmland within reach for feeding, which ties it closely to lowland agricultural country. The common raven is far less particular, occupying sea cliffs, mountains, moorland, forest, tundra, desert edge and increasingly some towns across an enormous range. Their distributions overlap widely in Europe, but ravens occupy plenty of rugged ground where no rookery could exist.",
      diet:
        "Rooks concentrate on soil invertebrates such as earthworms and crane fly larvae, probing pasture and stubble, with grain, seeds and other invertebrate prey filling out the diet. Ravens are wide-ranging omnivores with a strong scavenging component, taking carrion at all scales, small animals, eggs, insects, plant material and human refuse. The raven's association with carrion is one reason it looms so large in mythology across the northern hemisphere.",
      behavior:
        "The rook's life is communal: colonies are noisy from late winter, feeding parties spread over fields, and roosts can pull in birds from a wide area. Ravens live mainly as long-term territorial pairs, though non-breeders form flocks and gatherings build at large carcasses. Ravens are also notable for aerial display, including rolling and tumbling flight, and for a rich vocal repertoire that goes well beyond the familiar croak.",
      humanRelationship:
        "Both feature heavily in northern European tradition, the raven especially so in Norse and Celtic material and in the folklore attached to prominent castles and towers. Both have also been treated as unwelcome around farmland at various times, and legal protection now differs by country and has changed repeatedly. Ravens have recolonised lowland areas in parts of their range in recent decades after long absence.",
      whichIsWhich:
        "Enormous, heavy-billed, shaggy-throated, croaking, soaring and usually with one companion at most: raven. Mid-sized, slim pointed bill with a bare pale base, baggy thigh feathers, and part of a chorus of dozens: rook. A treetop cluster of stick nests belongs to rooks, while a nest on a crag or sea cliff belongs to a raven pair.",
      sensesAdaptations:
        "Both come from a family with high relative brain size, and the raven in particular has been the subject of extensive cognitive research on caching, social knowledge and problem solving. The rook's probing bill is a feeding specialisation the raven lacks, giving it access to invertebrates below the surface of pasture, while the raven's heavier bill handles tougher material at carcasses and in rocky terrain.",
      lifespan:
        "Ravens are long-lived for passerines, with wild ringing records extending well past a decade and captive individuals considerably longer. Rook recoveries also include birds in their late teens. In both species these are exceptional survivors, and typical life expectancy is far shorter because first-year mortality dominates. Captive maxima in particular should never be read as a guide to how long a wild bird of either species lives.",
    },
    faqs: [
      {
        question: "How much bigger is a raven than a rook?",
        answer:
          "Substantially, though exact figures vary with region and sex. A common raven is the largest passerine of the northern hemisphere, noticeably bulkier in body, head and bill, with a wingspan around a metre and a quarter. A rook is a mid-sized corvid of ordinary farmland proportions. The gap is obvious when both are in view and much harder to judge on a lone bird against open sky.",
      },
      {
        question: "Can I tell them apart by call alone?",
        answer:
          "Usually yes, and it is one of the most reliable methods. The raven's call is a deep, resonant, far-carrying croak, often given as a slow series and audible over long distances in open country. The rook's is drier, harsher and higher, and it almost never arrives as a single voice — a rookery produces continuous overlapping calling from many birds at once.",
      },
      {
        question: "Do rooks and ravens ever nest near each other?",
        answer:
          "They can share a landscape but not a nesting style. Rooks build dense treetop colonies where many nests sit within a few adjacent trees, while raven pairs space themselves widely and often choose crags, quarry faces, sea cliffs or isolated tall trees. Seeing a packed cluster of stick nests high in bare February branches effectively rules out ravens, whatever else is flying nearby.",
      },
      {
        question: "Does the raven's throat really look different?",
        answer:
          "It does, and the feature is worth learning. Ravens carry long loose hackles on the throat that flare outward when the bird calls or displays, giving the front of the neck a shaggy, bearded appearance. A rook's throat is smooth, and its own loose feathering sits on the thighs instead, hanging over the legs. On a perched calling bird the difference is easy to see through binoculars.",
      },
      {
        question: "Is raven the name of one species?",
        answer:
          "Not globally. Several Corvus species carry the name, including forms in Africa and Australia, so raven is a common name shared across a group rather than a single taxon. In Europe, North America and northern Asia it normally means the common raven, Corvus corax, which is the bird meant whenever a rook comparison is made, since that is the species whose range overlaps.",
      },
    ],
    commonConfusions: [
      "Upgrading a lone distant rook to a raven because there is nothing nearby to judge its size against.",
      "Expecting every raven to look obviously huge, when a perched bird against open sky offers no scale reference.",
      "Treating raven as one worldwide species when the name is applied to several Corvus species outside Europe.",
      "Assuming a flock of large black birds must be ravens, when non-breeding ravens flock and rooks are habitually gregarious.",
    ],
    similarities: [
      "Both are all-black members of the genus Corvus and both look uniformly dark at any distance.",
      "Both are omnivorous, both cache food, and both readily exploit farmland and other human-modified landscapes.",
      "Both come from a lineage with large relative brain size and both perform strongly in captive problem-solving work.",
      "Both build substantial stick nests that are repaired and reused across seasons.",
      "Both carry heavy loads of folklore in northern Europe and both have been persecuted around agriculture at times.",
    ],
    keyDifferences: [
      "The raven is far bulkier, with a wingspan around 1.2 metres against the rook's markedly smaller frame.",
      "An adult rook has bare pale skin at the bill base, whereas a raven's bill base is feathered and all black.",
      "Ravens carry shaggy flaring throat hackles, while the rook's loose feathering hangs on the thighs instead.",
      "The raven's call is a deep resonant croak; the rook's is drier, higher and heard as a chorus.",
      "Rooks nest in packed treetop colonies, but raven pairs nest alone and widely spaced, often on crags or cliffs.",
      "Ravens soar and perform rolling display flight, which rooks do not do.",
    ],
    taxonomyCaveat:
      "Rook denotes a single species, while raven is a common name shared by several Corvus species around the world. This page compares the rook with the common raven, Corvus corax, which is the species that shares its European range.",
    relatedComparisonSlugs: ["raven-vs-crow", "rook-vs-crow", "rook-vs-magpie", "magpie-vs-crow"],
    relatedHubPaths: ["/birds", "/birdwatching", "/animal-intelligence-and-behavior"],
    sourceIds: ["cornell", "britannica", "adw"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "rook-vs-magpie",
    animalA: { slug: "rook", name: "Rook" },
    animalB: { slug: "magpie", name: "Magpie" },
    title: "Rook vs Magpie",
    metaTitle: "Rook vs Magpie — Black Gloss, Pied Tail, Colony Nests",
    metaDescription:
      "Two corvids of the same farmland with opposite strategies: glossy black and colonial against boldly pied, long-tailed and territorial. Nests and feeding compared.",
    shortAnswer:
      "Appearance separates them at a glance and social life separates them at every other level. A rook is entirely black with a purple-blue gloss, a slim pointed bill with bare pale skin at its base in adults, and a short tail. A Eurasian magpie is boldly pied in black and white with a green-blue iridescent sheen and a very long graduated tail. Rooks nest in packed treetop colonies and feed in flocks; magpies hold pair territories and build roofed nests.",
    primaryCategory: "birds",
    secondaryCategories: [],
    relationship: "close-relatives",
    confidence: "strong",
    searchIntent: "identification",
    whyCompare:
      "They are two corvids of the same hedgerow-and-field country that took opposite routes — one conspicuously patterned and territorial, the other uniformly black and intensely colonial — which makes the pair a useful lesson in how much variation one bird family contains.",
    centralDifference:
      "A rook is a uniformly black colonial corvid with a probing bill and a short tail, while a magpie is a pied, long-tailed territorial corvid that builds a domed nest.",
    dimensions: [
      {
        id: "plumage-pattern",
        label: "Plumage pattern",
        animalAValue: "Wholly black with a purple-blue gloss in good light, broken only by bare pale skin at the bill base in adults",
        animalBValue: "Bold black-and-white blocks with a green-blue iridescent sheen across wings and tail",
        interpretation:
          "One bird advertises itself with high-contrast blocks visible across a whole field, while the other resolves into colour only when light catches it.",
      },
      {
        id: "tail-proportion",
        label: "Tail proportion",
        animalAValue: "Short and squared, contributing little to overall length",
        animalBValue: "Very long and graduated, frequently longer than the rest of the bird",
        interpretation:
          "Tail proportion changes the whole silhouette, so the two are separable even as distant shapes crossing a hedge line.",
      },
      {
        id: "nest-architecture",
        label: "Nest construction",
        animalAValue: "An open cup of sticks placed in the very top of a tall tree",
        animalBValue: "A bulky domed ball of sticks with a roof and a side entrance, often placed in a thorny hedge or small tree",
        interpretation:
          "The roofed nest is unusual within the family and gives the magpie's breeding sites away even after the birds have left.",
      },
      {
        id: "breeding-spacing",
        label: "How pairs are spaced",
        animalAValue: "Dozens of pairs packed into one stand of trees, defending only the immediate nest",
        animalBValue: "Well-separated pairs holding and defending a territory across the surrounding hedgerows",
        interpretation:
          "Colonial and territorial breeding produce completely different sounds and sightings in the same landscape.",
      },
      {
        id: "feeding-substrate",
        label: "Where food is taken",
        animalAValue: "Probing pasture, stubble and freshly turned soil for invertebrates below the surface",
        animalBValue: "Working hedge bases, verges, lawns and scrub for surface invertebrates, scraps, eggs and carrion",
        interpretation:
          "One species reaches food the other cannot, which is a large part of why both persist on the same farm.",
      },
      {
        id: "movement-on-ground",
        label: "Movement on the ground",
        animalAValue: "A steady walk across open ground, usually within a spread-out feeding party",
        animalBValue: "A mix of walking, sidling and bounding hops, usually alone or with one or two others",
        interpretation:
          "Gait and group size together identify a bird on a distant field long before plumage detail becomes readable.",
        caveat:
          "Magpies do gather in larger loose groups outside the breeding season, so party size is a guide rather than a rule.",
      },
    ],
    narrative: {
      taxonomy:
        "Both are corvids, but they sit in different genera. The rook is Corvus frugilegus, in the genus that also holds the crows and ravens; the jackdaw, often listed with them in older sources, is now usually placed in its own genus Coloeus. The Eurasian magpie is Pica pica, in a separate genus again. Magpie is also a much-abused name applied to species in more than one family — Australian magpies, for instance, are unrelated birds named for a superficial resemblance to the European species.",
      identification:
        "Colour does almost all the work here, which is unusual for two members of this family. Nothing about a pied bird with a streaming tail can be confused with a uniformly black one. If light is poor, use structure instead: a very long graduated tail and an undulating flight belong to one, while a short square tail, fingered wingtips and direct rowing flight within a moving flock belong to the other.",
      habitat:
        "Both use mixed farmland, parkland, orchards and the edges of settlements across Europe and temperate Asia. Their requirements differ in detail. The rook needs open feeding fields near a stand of tall trees that can hold a colony, and it does poorly where those trees are absent. The magpie needs hedgerow, scrub and scattered thorny cover for its nest and adapts readily to gardens, road verges and suburban parks.",
      diet:
        "The rook's long pointed bill is a probe, letting it extract earthworms and crane fly larvae from below the surface of pasture and stubble, supplemented with grain and seeds. The magpie feeds more from the surface, taking beetles, caterpillars, worms, fruit, scraps, carrion and, in the breeding season, some eggs and nestlings. Both cache food, and both adjust readily to what a season and a field make available.",
      behavior:
        "The rook's year is organised around the colony, with nest repair beginning in late winter and a constant background of calling from occupied treetops. Magpies pair for long periods and stay in their territory, giving harsh chattering calls when disturbed. Magpies also gather in loose groups outside the breeding season, and dramatic assemblies of many birds at one site have been recorded, though these are brief rather than a stable social structure.",
      humanRelationship:
        "Both are conspicuous around farms and villages and both have been viewed unfavourably at times, magpies particularly for taking songbird eggs and nestlings. Large-scale studies generally place habitat change and agricultural intensification ahead of corvid predation as drivers of songbird declines. Both species also feature prominently in European superstition, with the magpie carrying an unusually elaborate body of counting rhymes and omens.",
      whichIsWhich:
        "Black and white with a streaming tail, bounding along a verge or diving into a thorny hedge: magpie. All black with a pale bare face patch, walking steadily across a ploughed field among dozens of others: rook. A domed nest with a roof belongs to magpies, while a treetop cluster of open stick cups belongs to a rookery.",
      sensesAdaptations:
        "Both come from a family with large relative brain size and good spatial memory for cached food. Their feeding equipment diverges: the rook's slim probing bill gives it access to a subsurface invertebrate supply, while the magpie's shorter, stouter bill suits surface picking and tearing. The Eurasian magpie is also notable in published work for responses in mirror-mark tests, though such results rest on small numbers of individuals.",
      lifespan:
        "Both are relatively short-lived on average despite occasional long-lived individuals in ringing records, some of which reach the late teens. Most birds of either species die in their first year, so mean figures sit far below the maxima that get quoted. Population, region and study period all affect the numbers, and recovery-based data over-represent birds whose rings happen to be found and reported.",
    },
    faqs: [
      {
        question: "Are rooks and magpies closely related?",
        answer:
          "They share a family but not a genus. Both are corvids, yet the rook belongs to Corvus and the magpie to Pica, so they are relatives at family level rather than close kin. The gap in appearance reflects that distance: uniform black plumage with a short tail on one side, high-contrast pied blocks and a very long graduated tail on the other.",
      },
      {
        question: "Why does one nest in colonies and the other alone?",
        answer:
          "Their breeding systems differ fundamentally. Rooks defend only the immediate nest and gain from nesting close together in tall trees near shared feeding fields, producing rookeries of many pairs. Magpies hold and defend a territory across surrounding hedgerows and build a single roofed nest within it. The result is that one landscape can hold a dense noisy colony and several widely separated magpie pairs simultaneously.",
      },
      {
        question: "Can I recognise their nests without seeing the birds?",
        answer:
          "Usually. A magpie nest is a bulky ball of sticks with a roof and a side entrance, often low in a thorny hedge or small tree and very obvious once leaves have fallen. A rookery is a cluster of open stick cups packed into the highest branches of tall trees. Structure and placement together make the two unmistakable in bare winter branches.",
      },
      {
        question: "Does the rook reach food that a magpie cannot?",
        answer:
          "Largely yes, and that is why both persist on one farm. The rook's probing bill reaches earthworms and crane fly larvae below the surface of pasture, a resource the magpie mostly cannot access. Magpies work the surface for beetles, caterpillars, fruit, scraps and carrion, and take some eggs and nestlings in spring. Sharing a farm is straightforward when two species harvest different layers of it.",
      },
      {
        question: "Is a rook or a magpie more likely to appear in a suburban garden?",
        answer:
          "The magpie, by a wide margin. It uses hedges, scrub, road verges and small trees for nesting and feeds readily on lawns and verges, so it settles into suburbs easily. Rooks need open feeding fields within reach of a stand of tall trees for the colony, so they visit built-up areas far less and are a bird of farmland edges rather than gardens.",
      },
    ],
    commonConfusions: [
      "Assuming the magpie name always refers to a close relative, when Australian magpies belong to an entirely different family.",
      "Expecting all corvids to be black, when the family also contains boldly pied, blue and green species.",
      "Reading a treetop cluster of stick nests as ordinary tree nests rather than the diagnostic mark of a rookery.",
      "Blaming magpies for songbird declines that large-scale studies attribute mainly to habitat and agricultural change.",
    ],
    similarities: [
      "Both are corvids of the same farmland, parkland and village-edge country across Europe and temperate Asia.",
      "Both are omnivores that cache surplus food and recover it later using good spatial memory.",
      "Both build stick nests, both mob predators noisily, and both are quick to use opportunities that people create.",
      "Both carry iridescence in their plumage that only becomes visible when direct light strikes it.",
      "Both are woven deeply into European folklore and both have been regarded with suspicion around farms.",
    ],
    keyDifferences: [
      "The rook is uniformly black, while the magpie is boldly pied in high-contrast black and white.",
      "The magpie carries a graduated tail that can exceed its own body length, whereas the rook's is short and blunt.",
      "Rooks nest in packed treetop colonies; magpies build a single domed nest inside a defended territory.",
      "The rook probes soft ground for subsurface invertebrates, while the magpie feeds mainly from the surface.",
      "Rooks are seen in flocks on open fields, but magpies are usually alone or in twos during the breeding season.",
      "Adult rooks show bare pale skin at the bill base, a feature the magpie does not have at any age.",
    ],
    taxonomyCaveat:
      "Magpie is applied to species in more than one family, and Australian magpies are not close relatives of the Eurasian bird. This page means the Eurasian magpie, Pica pica, which is the species that shares the rook's range.",
    relatedComparisonSlugs: ["magpie-vs-crow", "rook-vs-crow", "rook-vs-raven"],
    relatedHubPaths: ["/animal-encyclopedia/birds", "/birds", "/birdwatching"],
    sourceIds: ["cornell", "adw", "britannica"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "rook-vs-parrot",
    animalA: { slug: "rook", name: "Rook" },
    animalB: { slug: "parrot", name: "Parrot" },
    title: "Rook vs Parrot",
    metaTitle: "Rook vs Parrot — Two Routes to Bird Problem-Solving",
    metaDescription:
      "A colonial farmland corvid and an order of tropical birds reached complex cognition separately. Bills, feet, vocal learning and social structure compared.",
    shortAnswer:
      "They are not related and they arrived at complex behaviour by different routes. The rook is one corvid species, Corvus frugilegus, a colonial farmland bird that manipulates objects with a slim pointed bill and ordinary perching feet. Parrot names an entire order, Psittaciformes, of several hundred mostly tropical species whose hooked, hinged bill and grasping two-forward, two-back feet let them hold and work objects directly. Both show strong problem-solving in captivity, but the equipment and the social settings behind it differ.",
    primaryCategory: "behavior-adaptations",
    secondaryCategories: ["birds"],
    relationship: "similar-ecological-role",
    confidence: "representative",
    searchIntent: "behavior",
    whyCompare:
      "Corvids and parrots are the two bird groups most often called intelligent, and setting a single well-studied corvid beside the parrot order shows that avian problem-solving evolved more than once, with different hardware each time.",
    centralDifference:
      "The rook works on objects with a slim probing bill and no grasping foot, while parrots combine a hooked hinged bill with feet that hold items up to it, and only parrots learn to reproduce novel sounds.",
    dimensions: [
      {
        id: "lineage-and-order",
        label: "Lineage",
        animalAValue: "One species in Corvus, family Corvidae, within the perching birds of Passeriformes",
        animalBValue: "An entire order, Psittaciformes, containing several hundred species across several families",
        interpretation:
          "The comparison is one species against a whole order, so parrot statements describe a range rather than a fixed bird.",
        caveat:
          "Molecular work places parrots relatively near the passerines, but they remain a separate order with their own long history.",
      },
      {
        id: "manipulation-toolkit",
        label: "How objects are handled",
        animalAValue: "A slim, straight, pointed bill used to probe, lever, carry and position items, with feet used only for perching",
        animalBValue: "A deep hooked bill with a mobile upper mandible, working with feet that lift objects up to the mouth",
        interpretation:
          "One group can hold an object and inspect it at leisure, while the other must brace it against a surface, which shapes what each finds easy.",
      },
      {
        id: "vocal-learning",
        label: "Vocal flexibility",
        animalAValue: "A varied repertoire of calls with individual and colony context, but no notable reproduction of unfamiliar sounds",
        animalBValue: "Open-ended vocal learning in many species, including accurate imitation of sounds heard in captivity",
        interpretation:
          "Vocal learning is the clearest capability gap between them and is the reason one group became famous for talking.",
        caveat:
          "Mimicry is far more prominent in captive parrots than in wild ones, where learned calls mostly serve flock and pair communication.",
      },
      {
        id: "social-organisation",
        label: "Social structure",
        animalAValue: "Colonial year-round, breeding in dense rookeries and feeding in flocks with strong long-term pair bonds",
        animalBValue: "Highly variable — strong pair bonds in most species, with flock sizes ranging from a few birds to enormous aggregations",
        interpretation:
          "Both are social, but one has a single well-described system while the other spans nearly every arrangement the order contains.",
      },
      {
        id: "problem-solving-evidence",
        label: "What the research shows",
        animalAValue: "Captive studies report success on physical tasks including tool use and water displacement, though wild tool use has not been reported",
        animalBValue: "Studies across several species report tool use, object manipulation and concept learning, with some field observations too",
        interpretation:
          "The captive-wild gap matters: capability shown in an experiment is not proof that a species uses it in daily life.",
        caveat:
          "Most cognitive results rest on small samples of individuals, so they should be read as demonstrations rather than species-wide averages.",
      },
      {
        id: "lifespan-span",
        label: "Length of life",
        animalAValue: "Ringing recoveries reach the late teens, but most individuals live far shorter lives in the wild",
        animalBValue: "Ranges enormously by size, with small species living years and some large species recorded living for decades",
        interpretation:
          "Long life gives an animal time to accumulate learned behaviour, which is one reason cognition and longevity are often discussed together.",
      },
    ],
    narrative: {
      taxonomy:
        "These birds are not close relatives. The rook is a single species in the family Corvidae, part of the enormous order of perching birds. Parrots make up Psittaciformes, an order of several hundred species usually divided among a handful of families and concentrated in the tropics and southern hemisphere. Genetic work suggests parrots sit closer to the perching birds than was once thought, but the two groups are still separated by very deep time.",
      identification:
        "There is no field confusion here, and the pair exists to compare capability rather than appearance. A rook is an all-black bird of European and Asian farmland with a slim pointed bill and, in adults, bare pale skin at its base. Parrots are mostly tropical, frequently colourful, and instantly recognisable by their short deep hooked bill and by feet that carry two toes forward and two back.",
      habitat:
        "The rook is a bird of open temperate farmland with tall trees for its colonies, spread across Europe and temperate Asia. Parrots are overwhelmingly tropical and subtropical, occupying rainforest, dry woodland, savanna, island scrub and, in some cases, high-altitude and temperate habitats in New Zealand and South America. Several parrot species have also established populations in cities well outside their native range.",
      diet:
        "The rook is an omnivore that probes soil for earthworms and crane fly larvae and takes grain, seeds and other invertebrates from farmland. Most parrots are primarily plant feeders, working on seeds, nuts, fruit, nectar, flowers and buds, with the hooked bill handling hard shells and tough husks. Some parrots take invertebrates or other animal matter, so the group is less uniformly vegetarian than its reputation suggests.",
      behavior:
        "The rook's social life is built around the colony: nests packed into treetops, communal feeding, and long-term pair bonds that persist outside the breeding season. Parrot social systems vary widely across the order, but strong pair bonds and prolonged parental care are common, and many species travel in flocks and roost communally. Both groups show play, object manipulation and rapid learning from watching what other individuals do.",
      humanRelationship:
        "The relationship is asymmetric. The rook is a wild bird nobody keeps, familiar mainly to people who live near farmland and rookeries, and its legal status varies by country. Parrots are among the most widely kept birds in the world, which has driven serious conservation problems through trapping for trade alongside habitat loss, and many species are protected by international trade regulation as a result.",
      whichIsWhich:
        "All black, bare-faced, walking a ploughed field in a flock of dozens in temperate Europe or Asia: rook. Hooked bill, zygodactyl feet, usually tropical and often brightly coloured, climbing with bill and feet together: a parrot. If a bird is holding food up to its mouth with one foot, it is a parrot, because rooks do not manipulate food that way.",
      sensesAdaptations:
        "Both lineages carry high densities of forebrain neurons relative to brain size, which comparative studies link to their behavioural flexibility. The mechanical solutions differ. Parrots have a craniofacial hinge that gives the upper mandible independent movement, and a grasping foot that turns the bill into a precision tool with a built-in vice. The rook's slim bill instead works as a probe, reaching invertebrate prey below the surface of pasture.",
      lifespan:
        "The contrast is real but easy to overstate. Rook ringing recoveries include birds into their late teens, while typical wild survival is much shorter and first-year mortality is high. Parrot lifespans span the order: small species live a handful of years, while some large macaws and cockatoos have been recorded living for decades in captivity. Captive maxima should never be treated as wild expectations for any parrot species.",
      petContext:
        "Parrots are commonly kept, and that fact carries weight rather than convenience. A long-lived, highly social, vocal bird with complex behavioural needs may outlive the arrangements made for it, and suitability depends on the individual household, local law, welfare capacity and a commitment measured in decades. Care and health decisions belong with a qualified avian veterinarian. Nothing here recommends acquiring a parrot, and rooks are wild birds that are not kept at all.",
      conservation:
        "Their positions differ sharply. The rook remains widespread across its range, though local trends respond to changes in farming practice. Parrots as a group are among the more threatened bird orders, with trapping for the pet trade and habitat loss both implicated, and island species are especially vulnerable. Status varies enormously between parrot species, so no single statement covers the order.",
    },
    faqs: [
      {
        question: "Are corvids and parrots related?",
        answer:
          "Not closely. The rook is a perching bird in the family Corvidae, while parrots form their own order, Psittaciformes. Genetic studies place parrots nearer the perching birds than older classifications did, but the two lineages have been separate for a very long time. Their shared reputation for problem-solving is a case of similar abilities arising independently rather than an inherited trait.",
      },
      {
        question: "Why can parrots imitate speech when rooks cannot?",
        answer:
          "Parrots have open-ended vocal learning, meaning they can acquire and reproduce novel sounds throughout life, supported by specialised brain circuitry for vocal production. Rooks have a varied call repertoire but are not known for reproducing unfamiliar sounds. It is also worth noting that mimicry is far more prominent in captive parrots than in wild ones, where learned vocalisations mostly serve flock and pair communication.",
      },
      {
        question: "Do wild rooks use tools?",
        answer:
          "Captive rooks have solved tasks involving bending wire, dropping stones to raise a water level and using sticks to reach food, which is why the species appears in cognition literature. Tool use has not been reported from wild rooks, and researchers generally treat these results as showing latent capability rather than a natural behaviour. The distinction between what an animal can do and what it does matters here.",
      },
      {
        question: "Which of the two manipulates objects more precisely?",
        answer:
          "They are precise in different ways rather than ranked. A parrot can hold an object in one foot and work it with a hooked bill whose upper mandible moves independently, which suits shelling, prising and fine adjustment. A rook must brace items against the ground or a branch and work with a slim bill, which suits probing, levering and carrying. Each toolkit fits its own ecology.",
      },
      {
        question: "Does the ability to solve puzzles say anything about keeping a bird?",
        answer:
          "It says the animal has demanding needs, not that it makes a suitable companion. Cognitive complexity implies a bird that requires social contact, occupation and long-term commitment, and parrots in particular can live for decades. Whether keeping one is appropriate depends on the household, local law and welfare capacity, and health and care decisions belong with a qualified avian veterinarian rather than a comparison page.",
      },
      {
        question: "Is parrot a scientific grouping?",
        answer:
          "Yes, as an order. Psittaciformes is a genuine clade of several hundred species usually split among a few families, including cockatoos and the New Zealand parrots as distinct lineages. But because the order is so large and varied, statements about parrots describe a range rather than a single bird — size, diet, lifespan and conservation status all differ enormously between its members.",
      },
    ],
    commonConfusions: [
      "Treating parrot as if it named one kind of bird, when Psittaciformes spans several hundred species with very different biology.",
      "Reading a captive experiment as proof of everyday behaviour, when rook tool use has not been reported in the wild.",
      "Assuming that shared problem-solving ability implies a close evolutionary relationship between the two lineages.",
      "Equating talking ability with general intelligence, when vocal learning is a specific capability rather than a global measure.",
    ],
    similarities: [
      "Both come from lineages with high forebrain neuron densities that comparative studies link to behavioural flexibility.",
      "Both form long-term pair bonds and both give their young extended parental care after fledging.",
      "Both manipulate objects, play, and learn quickly by watching what other individuals of their kind do.",
      "Both are social birds that gather in flocks and roost communally outside the immediate breeding effort.",
      "Both have been the subject of published cognition experiments whose results rest on small numbers of individuals.",
    ],
    keyDifferences: [
      "The rook is one species in Corvidae, while parrot names an entire order of several hundred species.",
      "Parrots hold food and objects in a grasping zygodactyl foot, but the rook's feet are for perching only.",
      "The parrot bill is deep, hooked and hinged for prising; the rook's is slim and pointed for probing soil.",
      "Many parrots learn and reproduce novel sounds, whereas rooks are not known for imitating unfamiliar noises.",
      "Rooks are temperate farmland birds of Eurasia, while parrots are concentrated in the tropics and southern hemisphere.",
      "Parrots are among the most widely kept birds in the world, whereas the rook is a wild bird that is not kept.",
    ],
    petBoundary:
      "Parrots are kept in large numbers, and this page does not advise doing so. Suitability depends on the individual household, local law, welfare capacity and a commitment that can run for decades, and all care and health decisions belong with a qualified avian veterinarian. Rooks are wild birds and are not pets.",
    taxonomyCaveat:
      "Rook is a single species, Corvus frugilegus, while parrot covers the whole order Psittaciformes. Any statement about parrots here describes a range across several hundred species rather than the biology of one bird.",
    conservationCaveat:
      "Parrot conservation status varies enormously between species, and several are of high concern while others remain widespread. Check the current IUCN Red List entry for the particular species in question rather than generalising from the order.",
    relatedComparisonSlugs: ["parrot-vs-crow", "rook-vs-crow", "parrot-vs-african-grey-parrot", "macaw-vs-african-grey-parrot"],
    relatedHubPaths: ["/animal-intelligence-and-behavior", "/birds", "/bird-care"],
    sourceIds: ["cornell", "adw", "iucn"],
    lastReviewed: REVIEWED,
  }),
];
