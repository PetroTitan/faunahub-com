/**
 * Batch B3-10 — the rook opportunists and the mule hybrid set.
 *
 * Two pages place the new rook profile beside birds it shares fields and towns
 * with, one a family-level name (seagull) and one a whole order away (pigeon).
 * The remaining four are built on the mule, which is a sterile donkey-sire-on-
 * horse-mare cross rather than a species: against each parent, against the wild
 * zebras that never became working stock, and against an Andean pack camelid.
 * Ecology, inheritance and husbandry history only — no control, no care advice.
 */
import { defineComparison, REVIEWED } from "./define.ts";

export const BATCH_B3_10 = [
  defineComparison({
    slug: "rook-vs-seagull",
    animalA: { slug: "rook", name: "Rook" },
    animalB: { slug: "seagull", name: "Seagull" },
    title: "Rook vs Seagull",
    metaTitle: "Rook vs Seagull — Bill, Feet, Foraging & Family",
    metaDescription:
      "A rook is a black corvid that walks ploughed fields probing for soil grubs; a gull is a webbed-footed seabird that swims, soars and scavenges far inland.",
    shortAnswer:
      "No bird is officially a seagull: the name covers the gull family, Laridae, which includes many species and several that rarely see the sea. A gull has webbed feet, long pointed wings, a hook-tipped bill and grey, white and black adult plumage. A rook is a single species, Corvus frugilegus, a glossy black corvid and a songbird by classification, with unwebbed perching feet and a long pale bill set in a bare greyish face on adults. Both flock behind the plough, but only the gull swims.",
    primaryCategory: "birds",
    secondaryCategories: ["habitat-ecology"],
    relationship: "similar-ecological-role",
    confidence: "representative",
    searchIntent: "ecology",
    whyCompare:
      "Both turn up in the same places for the same reason — freshly turned soil, stubble, refuse tips and playing fields — so anyone watching a mixed feeding flock wants to know what separates the black birds from the grey-and-white ones, and whether either is really a farmland bird or a seabird.",
    centralDifference:
      "A rook is a black corvid songbird that walks and probes soil with a long pale bill; a gull is a webbed-footed member of Laridae built to swim, soar and scavenge.",
    dimensions: [
      {
        id: "taxonomic-family",
        label: "Family and order",
        animalAValue: "Corvidae, a perching songbird in the order Passeriformes",
        animalBValue: "Laridae, in the shorebird order Charadriiformes",
        interpretation:
          "They sit in different orders, so everything they share on a field is opportunism rather than inheritance.",
        caveat: "Seagull is a colloquial umbrella for many gull species rather than the name of one bird.",
      },
      {
        id: "bill-and-face",
        label: "Bill and face",
        animalAValue: "Long, straight, pale grey bill; adults show bare whitish skin around its base",
        animalBValue: "Shorter, deeper bill with a hooked tip, and in many species a coloured spot near the tip of the lower mandible",
        interpretation:
          "One bill is a soil probe, the other a general-purpose grasping and tearing tool.",
        caveat: "Juvenile rooks have fully feathered faces and are routinely mistaken for carrion crows.",
      },
      {
        id: "foot-structure",
        label: "Feet",
        animalAValue: "Unwebbed perching toes, three forward and one back",
        animalBValue: "Fully webbed front toes",
        interpretation:
          "Webbing settles the question outright: a rook cannot swim, while a gull rests and feeds on open water as a matter of routine.",
      },
      {
        id: "wing-shape-and-flight",
        label: "Wings and flight",
        animalAValue: "Broad wings with fingered tips, steady flapping, and tumbling aerobatics over roost woods on windy evenings",
        animalBValue: "Long, narrow, pointed wings that glide and soar on wind and updraught for long periods",
        interpretation:
          "Wing shape reflects where each earns its living — over fields and treetops, or over open water and windward cliffs.",
      },
      {
        id: "foraging-method",
        label: "How each finds food",
        animalAValue: "Walks over pasture and tillage probing turf and soil for earthworms and insect larvae, adding grain, seeds and scraps",
        animalBValue: "Swims, dips, patrols shorelines and follows boats and machinery, taking fish, invertebrates, eggs, carrion and discarded food",
        interpretation:
          "The rook's staple comes out of the ground, while a gull's comes off water surfaces and from open scavenging.",
        caveat: "Diets shift with season and locality, and farmland gulls take plenty of soil invertebrates too.",
      },
      {
        id: "breeding-colony",
        label: "Colony and nest site",
        animalAValue: "Rookeries of bulky stick nests high in the crowns of tall trees, often in the same wood for many years",
        animalBValue: "Ground and ledge colonies on islands, dunes, shingle and cliffs, and increasingly on flat rooftops",
        interpretation:
          "Both nest socially, so it is the height and surface of the colony rather than its sociability that tells you which bird you are under.",
      },
    ],
    narrative: {
      taxonomy:
        "The rook is one species, Corvus frugilegus, in the crow family Corvidae and, like every corvid, a passerine or perching bird. Seagull is not a taxonomic term at all. The birds people mean belong to the family Laridae within Charadriiformes, the order that also holds waders, terns, skuas and auks, and it covers dozens of species from small black-headed gulls to large herring and great black-backed gulls. Comparing them is comparing one species with a whole family.",
      identification:
        "Colour is the first cue and the feet are the confirmation. A rook is wholly black with a purple-blue gloss, and adults carry a patch of bare, pale, roughened skin at the bill base that makes the face look pointed and the crown look peaked. Loose feathering over the thighs gives a baggy-trousered look. Adult gulls are pale grey above and white below with dark wingtips, and immatures stay mottled brown for two to four years depending on species. Only the gull has webbed feet.",
      habitat:
        "Rooks are birds of lowland agricultural country across Europe and temperate Asia, needing tall trees for rookeries and open grass or tillage within reach; they were also introduced to New Zealand. Gulls as a family span coasts, estuaries, inland lakes, rivers, reservoirs, farmland and city centres across much of the world, and several species breed far from salt water. The two overlap most obviously on stubble, on freshly ploughed ground and around waste-handling sites, where mixed flocks are ordinary.",
      diet:
        "The rook's staple is soil and surface invertebrates such as earthworms, leatherjackets and beetle larvae, taken by driving that long bill into turf, and supplemented heavily with cereal grain, seeds, fruit and scraps. Gulls are broader still, taking fish and marine invertebrates, insects, the eggs and chicks of other birds, carrion, discarded human food, and in some species food robbed from other birds in flight. Both are flexible enough that local diet reflects what is available rather than any fixed preference.",
      behavior:
        "Rooks are colonial to a degree unusual even among crows: they nest in noisy communal rookeries, forage in flocks and gather at very large shared winter roosts, frequently alongside jackdaws. Gulls are colonial breeders too, and highly vocal, with long-call displays and vigorous mobbing of intruders near nests. Both learn quickly by watching other individuals, which is why both exploit new food sources, from machinery turning soil to fishing activity to outdoor eating areas, within a season or two of those sources appearing.",
      humanRelationship:
        "Both have long been treated as nuisances around agriculture and settlement, and both are protected under wildlife law in many countries regardless of that reputation. Rooks have been bound up with arable farming for centuries, and counting rookeries remains a familiar volunteer survey. Gulls draw complaint where they nest on roofs or feed near seafront food outlets, behaviour that tracks the availability of food rather than any change in the birds themselves. FaunaHub covers the ecology of both and does not cover control or removal.",
      whichIsWhich:
        "Black bird walking a field with a long pale bill, a bare pale face and stick nests in the trees above: rook. Grey-and-white or mottled brown bird with webbed feet, a hooked bill tip, long pointed wings and a habit of resting on water: gull. If it is swimming, it is not a rook. If it has a bare whitish face patch and perches in a treetop colony, it is not a gull.",
      sensesAdaptations:
        "The rook's bill and the bare skin around it work as a unit: the bird drives the bill deep into turf, and the unfeathered face is generally read as an adaptation associated with that probing habit. Gulls carry salt glands above the eyes that excrete concentrated salt, which is what allows marine species to drink seawater, and their webbed feet double as paddles and as tools for pattering on soft mud to bring invertebrates within reach.",
      lifespan:
        "Both are long-lived for birds of their size, and ringing recoveries rather than captive records supply most of what is known. Rooks that survive their first year commonly live several years, with ringed individuals recorded well beyond a decade. Large gull species are among the longer-lived birds of temperate regions, with ringed birds recorded into their twenties and beyond in some studies. First-year mortality is high in both, so average life expectancy falls far short of these maximum records.",
      conservation:
        "Neither is uniformly doing well or badly. Rook numbers respond to changes in arable practice, tree cover and grassland, and regional trends differ across a very wide range. Several gull species that look abundant in towns have declined at their natural coastal colonies, which is exactly why an urban impression is a poor guide to population health. Because assessments are revised, current status for any particular species should be read from the IUCN Red List rather than inferred from local abundance.",
    },
    faqs: [
      {
        question: "Is a seagull a real species?",
        answer:
          "No. Seagull is an everyday word rather than a name used in the ornithological literature. The birds it refers to are members of the family Laridae, and each is a distinct species — herring gull, black-headed gull, common gull, great black-backed gull and many more. Several of them live and breed well inland, which is part of why field guides prefer the plain word gull.",
      },
      {
        question: "Why do rooks and gulls feed on the same ploughed field?",
        answer:
          "Turning soil exposes earthworms, leatherjackets and beetle larvae at the surface for a short window, and both birds have learned to follow the machinery that does it. The rook is working its normal food supply out of a normally hidden layer, while the gull is exploiting a temporary glut of the kind it would otherwise find along a tideline. The mixed flock breaks up once the field settles.",
      },
      {
        question: "Can a rook swim like a gull?",
        answer:
          "No. A rook has an ordinary perching foot with three toes forward and one back and no webbing at all, so it wades at most in shallow puddles and bathes at the edge of water. Gulls have fully webbed front toes and rest, bathe and feed on open water, including at sea in several species. Checking the feet is the quickest test when both are on wet ground.",
      },
      {
        question: "Do rooks and gulls ever nest in the same place?",
        answer:
          "Very rarely. Rooks build stick nests in the tops of tall trees and return to the same rookery wood year after year, so their colonies are loud and high overhead. Gulls nest on the ground or on ledges — islands, dunes, shingle, cliffs and now flat roofs in many towns. Both are colonial, but one colony sits in the canopy and the other on a flat surface.",
      },
      {
        question: "Which of the two has moved further into towns?",
        answer:
          "Gulls have. Roof-nesting gull colonies are established in many coastal and some inland towns, and gulls feed readily in streets, car parks and parks. Rooks remain tied to tall trees and open ground, so they are usually birds of villages, farmland edges and parkland rather than dense city centres, though they will use large urban green spaces where mature trees and mown grass sit close together.",
      },
    ],
    commonConfusions: [
      "Treating seagull as the name of one bird when it covers the whole gull family, several members of which nest far inland.",
      "Calling any black bird on a stubble field a crow, when adult rooks are told by the bare pale skin at the bill base.",
      "Assuming a rook must be a farmland specialist and a gull a coastal one, when both work farmland, refuse sites and playing fields.",
    ],
    similarities: [
      "Both are colonial breeders that also gather in large communal roosts outside the nesting season.",
      "Both are flexible opportunists that switch food sources as soil is turned, crops ripen or waste becomes available.",
      "Both learn quickly from watching other individuals and take up new feeding opportunities within a season or two.",
      "Both are long-lived birds for their size, with ringed individuals recorded well past ten years.",
      "Both are widely regarded as nuisances near people while being legally protected in many countries.",
    ],
    keyDifferences: [
      "A rook is one species, Corvus frugilegus, while seagull is a loose name covering an entire family.",
      "Rooks are perching songbirds in Passeriformes; gulls sit in Charadriiformes with waders, terns and auks.",
      "Only gulls have webbed feet and swim, because a rook's foot is a perching foot.",
      "The rook's long pale bill probes soil, whereas a gull's shorter hooked bill grasps and tears.",
      "Rooks nest in treetop rookeries while gulls nest on ground, ledges and rooftops.",
      "Gulls have salt glands that let marine species drink seawater, and rooks have no such adaptation.",
    ],
    safetyBoundary:
      "Gulls nesting on roofs or shingle call and fly close when people approach a nest in the breeding season, and gulls near seafront food outlets have learned to come very near people. Both are ordinary foraging and nest-defence behaviour. This page describes ecology only and offers no deterrence, handling or control guidance.",
    taxonomyCaveat:
      "Seagull is a colloquial umbrella term. No species carries the name; it is applied across the family Laridae, whose members differ in size, plumage sequence, habitat and behaviour, so anything said about gulls here describes the family broadly rather than one fixed bird.",
    conservationCaveat:
      "Status differs by species and by region and is periodically reassessed, and several familiar gulls are declining at natural colonies despite conspicuous urban numbers. Check the current IUCN Red List entry for the particular species before treating anything here as a status statement.",
    relatedComparisonSlugs: ["rook-vs-crow", "rook-vs-raven", "osprey-vs-seagull"],
    relatedHubPaths: ["/animal-encyclopedia/birds", "/birds", "/birdwatching"],
    sourceIds: ["britannica", "adw", "cornell"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "rook-vs-pigeon",
    animalA: { slug: "rook", name: "Rook" },
    animalB: { slug: "pigeon", name: "Pigeon" },
    title: "Rook vs Pigeon",
    metaTitle: "Rook vs Pigeon — Order, Bill, Drinking & Crop Milk",
    metaDescription:
      "Rooks are corvid songbirds that probe soil for grubs; pigeons are Columbidae seed-eaters that suck water and feed squabs on crop milk. Two flock birds compared.",
    shortAnswer:
      "They are not close relatives. A rook is a corvid — Corvus frugilegus, a perching songbird with a long pale bill, black glossy plumage and, on adults, bare pale skin around the bill base. A pigeon belongs to Columbidae in a separate order, with a small bill topped by a fleshy cere, a stout body and short legs. The clearest behavioural split shows at the water's edge: a pigeon draws water up without lifting its head, while a rook scoops and tips back like most birds.",
    primaryCategory: "birds",
    secondaryCategories: ["habitat-ecology"],
    relationship: "similar-ecological-role",
    confidence: "representative",
    searchIntent: "ecology",
    whyCompare:
      "Stubble fields, town squares and grain spills draw both in numbers, and the shared habit of flocking around people hides how differently the two make a living — one pulling invertebrates out of the ground, the other living on plants and raising its young on a secretion no songbird can make.",
    centralDifference:
      "A rook is a soil-probing corvid songbird that raises chicks on invertebrates; a pigeon is a seed-eating columbid that drinks by suction and raises squabs on crop milk.",
    dimensions: [
      {
        id: "bird-order",
        label: "Order and family",
        animalAValue: "Passeriformes, family Corvidae",
        animalBValue: "Columbiformes, family Columbidae",
        interpretation:
          "Two different orders, so the farmland habits they share arose separately rather than being handed down from a recent common ancestor.",
        caveat: "Pigeon covers many species; the town bird is the feral form of the rock dove.",
      },
      {
        id: "bill-shape",
        label: "Bill",
        animalAValue: "Long, straight, pale and dagger-like, driven into turf to reach buried prey",
        animalBValue: "Short and slender, with a soft swollen cere sitting over the nostrils",
        interpretation:
          "Bill shape maps directly onto whether food is dug out of the ground or picked up off it.",
      },
      {
        id: "drinking",
        label: "How each drinks",
        animalAValue: "Scoops a billful and tilts the head back to swallow",
        animalBValue: "Immerses the bill and draws water up continuously without tipping back",
        interpretation:
          "Suction drinking is a columbid speciality that lets a pigeon finish at an exposed puddle in a few seconds.",
      },
      {
        id: "feeding-young",
        label: "What the young are fed",
        animalAValue: "Nestlings fed invertebrates and grain, carried to the nest by both parents in a throat pouch",
        animalBValue: "Squabs fed crop milk, a protein-rich secretion produced by both parents",
        interpretation:
          "Crop milk frees pigeons from waiting on an insect flush, so they can raise broods across much more of the year.",
      },
      {
        id: "nest-placement",
        label: "Nest placement",
        animalAValue: "Stick nests packed into the crowns of tall trees in a shared, reused rookery",
        animalBValue: "A thin platform on a ledge, beam, cliff shelf or dense fork, built by a single pair",
        interpretation:
          "One advertises its nesting with a visible colony overhead, the other conceals single nests in structures.",
      },
      {
        id: "flight-and-wingbeat",
        label: "Flight",
        animalAValue: "Broad fingered wings, unhurried flapping, and tumbling play over roost woods on windy days",
        animalBValue: "Pointed wings, fast direct flight, and a loud clatter of wings on take-off in several species",
        interpretation:
          "Getting clear of trouble works differently for each: one manoeuvres in open air, the other accelerates hard away from cover.",
      },
    ],
    narrative: {
      taxonomy:
        "The rook sits in Corvidae, the crow family, inside the enormous order of perching birds, Passeriformes. Pigeons belong to Columbidae in their own order, Columbiformes, alongside doves — a split of custom and size rather than biology, since dove and pigeon are both used for members of the same family. The town pigeon is the feral descendant of the rock dove, Columba livia, while the woodpigeon of European farmland, Columba palumbus, is a separate and larger species.",
      identification:
        "A rook is black throughout with a purple sheen, long-billed, peak-crowned and loose-feathered over the thighs, and adults show a pale bare face patch. Pigeons are compact and small-headed, with a bill that looks short because the fleshy white cere sits across its base. Feral pigeons vary enormously, from blue-grey with two black wingbars to chequered, red, pied and near-white. A woodpigeon adds a white neck patch and a broad white wing bar visible in flight.",
      habitat:
        "Both use farmland and settlement heavily. Rooks need tall trees to nest in and open grass or tillage to feed on, so they concentrate in lowland mixed country across Europe and temperate Asia. Rock doves originally nested on sea cliffs and inland crags, and their feral descendants treat ledges, bridges and buildings as cliffs, which is why pigeons are so completely at home in cities. Woodpigeons occupy woodland, farmland, parks and gardens across a broadly similar European range.",
      diet:
        "The split is invertebrate against plant. Rooks work soil and short grass for earthworms and insect larvae, then add cereal grain, seeds, fruit and food waste, especially through winter. Pigeons are overwhelmingly plant feeders, taking seeds, grain, buds, leaves and fruit, with invertebrates picked up only incidentally. Both concentrate on spilled grain after harvest, which is where they most often share a field, and both feed on scraps wherever people gather in numbers.",
      behavior:
        "Rooks are intensely colonial, building close-packed nests in shared rookeries and gathering into very large mixed winter roosts, often with jackdaws. Pigeons flock to feed and roost but nest as separate pairs, and a pair may raise several broods over a long season because crop milk removes any dependence on an insect peak. Pigeon courtship is a conspicuous business of bowing, cooing and tail-dragging, while rook display is quieter and centred on defending a nest site inside a crowded colony.",
      humanRelationship:
        "Both are woven deep into human landscapes. Rookeries have been counted, protected, felled and laden with folklore for centuries, and the rook is a fixture of European agricultural writing. The pigeon's relationship runs further: rock doves were domesticated long ago, and racing, show and messenger breeds all descend from them, with today's town birds largely escapees and their offspring. Both draw complaints in built-up areas, and FaunaHub covers their biology without offering control or removal advice.",
      whichIsWhich:
        "All-black, walking, long pale bill, bare whitish face, colonial stick nests overhead: rook. Compact grey or mottled bird with a small head, a white cere, a bobbing walk and a clattering take-off: pigeon. At a puddle, watch the head — a pigeon keeps its bill down and drinks continuously while a rook lifts and tips. On the nest, a rookery is unmistakable and a pigeon nest is usually not visible at all.",
      sensesAdaptations:
        "Pigeons are among the most studied birds in navigation research, and homing performance appears to draw on several cues together, including the sun, magnetic information and olfactory features of the landscape, with the balance between them still debated. Rooks are studied for a different reason: corvid problem-solving. Captive rooks have performed well on physical-reasoning tasks involving tools and water displacement, though wild rooks are not known for routine tool use, so laboratory ability and natural behaviour should not be equated.",
      lifespan:
        "Both are short-lived on average and long-lived at the extreme. Most rooks and most pigeons die within their first year, so mean life expectancy is low, while ringed rooks have been recorded past a decade and ringed feral and wood pigeons have reached broadly comparable ages. Domestic and racing pigeons kept in good conditions can live considerably longer than free-living birds, which is exactly why kept-bird figures should never be quoted as a wild average.",
      conservation:
        "Neither is globally threatened, and neither is static. Rook numbers track arable practice, grassland and tree cover, with regional increases and declines across a very wide range. The wild rock dove is a genuine conservation concern in parts of its range, because interbreeding with feral birds erodes distinct wild populations — a problem that the sheer abundance of town pigeons hides completely. Current assessments for any of these species are published on the IUCN Red List and are revised over time.",
    },
    faqs: [
      {
        question: "Are rooks and pigeons related?",
        answer:
          "Only distantly, as birds. A rook is a passerine in the crow family, while a pigeon belongs to Columbidae in a separate order. Everything they share on a stubble field — flocking, grain feeding, tolerance of people — evolved independently in response to the same opportunity. There is no close common ancestry behind the resemblance in habit, and their bills, chick diets and nesting arrangements all differ.",
      },
      {
        question: "Why can pigeons drink without lifting their heads?",
        answer:
          "Columbids can draw water up with the bill immersed instead of scooping and tipping back, which is unusual among birds and is a family trait shared with doves. It lets a pigeon finish drinking in a few seconds at an exposed puddle. A rook drinks the ordinary way, taking a billful and raising its head so the water runs down.",
      },
      {
        question: "What is crop milk, and do rooks produce anything like it?",
        answer:
          "Crop milk is a protein- and fat-rich secretion sloughed from the lining of the crop, produced by both pigeon parents and fed to squabs. Rooks produce nothing of the kind, and adult rooks carry worms, insects and grain to the nest in a throat pouch instead. The difference matters ecologically, because pigeons can breed outside the insect season while rook breeding is timed close to the spring flush of soil invertebrates.",
      },
      {
        question: "Do rooks and pigeons compete for the same food?",
        answer:
          "They overlap mainly on spilled and sown grain and on stubble after harvest, where large flocks of both feed within metres of each other. Away from that overlap they diverge sharply: the rook's core food is soil and surface invertebrates a pigeon cannot extract, and the pigeon's core food includes buds, leaves and fruit a rook takes only opportunistically. Sharing a field does not mean sharing a niche.",
      },
      {
        question: "How can I tell a rookery from a pigeon nest?",
        answer:
          "A rookery is obvious: dozens of bulky stick nests clustered in the bare crowns of tall trees, loud from first light, and used again in successive years. Pigeon nests are the opposite — a thin platform of stems tucked onto a ledge, beam, cliff shelf or dense branch fork, built by a single pair and easy to overlook entirely. Colony against concealment is the reliable difference.",
      },
    ],
    commonConfusions: [
      "Assuming that two birds sharing a stubble field must be relatives, when a rook and a pigeon sit in different orders.",
      "Reading pigeon as one species when the town bird, the wild rock dove and the woodpigeon are all different birds within Columbidae.",
      "Expecting rooks to raise their young on grain the way pigeons do, when nestling rooks are fed largely on soil invertebrates.",
    ],
    similarities: [
      "Both feed in flocks on farmland and both concentrate on spilled grain once a crop is cut.",
      "Both have adapted thoroughly to human landscapes and are common around villages, farms and towns.",
      "Both pair for the breeding season, with both parents provisioning the young at the nest.",
      "Both suffer heavy first-year mortality yet include ringed individuals recorded past ten years.",
    ],
    keyDifferences: [
      "The rook is a passerine corvid, while the pigeon belongs to Columbiformes, a separate order.",
      "A rook probes soil with a long pale bill, whereas a pigeon picks food up with a short bill set behind a fleshy cere.",
      "Pigeons feed squabs on crop milk, while rook nestlings are brought invertebrates and grain.",
      "Rooks nest colonially in treetop rookeries; pigeons nest as scattered pairs on ledges and in cover.",
      "Pigeons drink by suction with the bill immersed, whereas rooks scoop and tip the head back.",
      "Rook breeding is tied to the spring invertebrate flush, while pigeons can raise broods across much of the year.",
    ],
    taxonomyCaveat:
      "Pigeon and dove are used interchangeably within Columbidae, and pigeon on its own may mean the feral town bird descended from the rock dove or a species such as the woodpigeon. Rook, by contrast, is a single species. Statements about pigeons here describe the family and the familiar feral bird rather than one fixed species.",
    conservationCaveat:
      "The wild rock dove faces genetic swamping from feral birds in parts of its range even though pigeons look abundant everywhere, and rook trends differ by region. Consult the current IUCN Red List entry for the species concerned rather than relying on apparent local abundance.",
    relatedComparisonSlugs: ["rook-vs-crow", "rat-vs-pigeon", "chicken-vs-pigeon"],
    relatedHubPaths: ["/animal-encyclopedia/birds", "/birds", "/animal-intelligence-and-behavior"],
    sourceIds: ["cornell", "audubon", "adw"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "mule-vs-horse",
    animalA: { slug: "mule", name: "Mule" },
    animalB: { slug: "horse", name: "Horse" },
    title: "Mule vs Horse",
    metaTitle: "Mule vs Horse — Hybrid, Chromosomes, Ears & Voice",
    metaDescription:
      "A mule is not a species: it is a sterile hybrid of a donkey sire and a horse mare, with 63 chromosomes, long ears and a horse's frame. Here is what it inherits.",
    shortAnswer:
      "A horse is a species, Equus caballus, that breeds and produces fertile foals. A mule is not a species at all: it is the first-generation cross between a donkey sire and a horse mare, produced anew each time that cross is made. Horses carry 64 chromosomes and donkeys 62, so a mule inherits 32 from its dam and 31 from its sire and ends with an odd 63. That odd number disrupts the chromosome pairing needed to form viable eggs and sperm, which is why mules are treated as sterile.",
    primaryCategory: "pets-domestic",
    secondaryCategories: [],
    relationship: "domestic-vs-wild",
    confidence: "strong",
    searchIntent: "identification",
    whyCompare:
      "A mule standing on its own reads as an odd-looking horse, and half of it genuinely is one. Setting the two side by side shows exactly which traits come down the horse line, which arrive from the donkey sire, and why the animal cannot pass any of them on.",
    centralDifference:
      "A horse is a breeding species; a mule is a sterile first-cross hybrid that carries a horse's size and frame on a donkey's ears, feet and constitution.",
    dimensions: [
      {
        id: "origin-and-chromosomes",
        label: "Origin and chromosomes",
        animalAValue: "Hybrid with 63 chromosomes; every individual is bred from a donkey sire on a horse mare",
        animalBValue: "A species with 64 chromosomes that reproduces on its own",
        interpretation:
          "This single fact drives most of the page, including why mule numbers rise and fall with human demand for the cross.",
      },
      {
        id: "fertility",
        label: "Fertility",
        animalAValue: "Effectively sterile; a very small number of foals born to female mules have been reported and genetically verified",
        animalBValue: "Fully fertile, with mares usually carrying a single foal after roughly eleven months",
        interpretation:
          "A hybrid that cannot found a population is a repeated act of husbandry rather than a lineage.",
        caveat: "Male mules are not known to have sired offspring; the documented exceptions all involve females.",
      },
      {
        id: "ear-length",
        label: "Ears",
        animalAValue: "Long ears, clearly longer than a horse's, set on a heavier and straighter head",
        animalBValue: "Comparatively short, highly mobile ears on a finer head",
        interpretation:
          "Ear length is the fastest check on an animal that otherwise reads as broadly horse-shaped.",
      },
      {
        id: "mane-and-tail",
        label: "Mane and tail",
        animalAValue: "Short, upright, sparse mane with little or no forelock, and a tail short-haired at the top above a switch of long hair",
        animalBValue: "Long falling mane with a forelock, and a tail carrying long hair from the dock downward",
        interpretation:
          "Mane and tail carry the donkey inheritance even where the body outline reads as horse.",
        caveat: "Manes are also clipped, pulled and hogged for management reasons, so grooming can imitate this difference.",
      },
      {
        id: "voice",
        label: "Voice",
        animalAValue: "A call that often opens like a whinny and breaks into a bray part-way through",
        animalBValue: "A repertoire of whinnies, nickers and squeals, with no bray",
        interpretation:
          "Voice is the one trait where mixed parentage can be heard rather than seen.",
      },
      {
        id: "hooves-and-footing",
        label: "Hooves and footing",
        animalAValue: "Small, narrow, upright and hard hooves inherited from the donkey side",
        animalBValue: "Larger, rounder hooves, varying considerably between breeds and types",
        interpretation:
          "Foot shape underlies the mule's long-standing reputation for deliberate movement on rough or narrow ground.",
      },
    ],
    narrative: {
      taxonomy:
        "A horse is a domestic species, written Equus caballus or Equus ferus caballus depending on the authority followed, and it belongs to Equidae along with donkeys, zebras and the Asiatic wild asses. A mule has no binomial of its own because it is not a species: it is the first-generation hybrid of a donkey sire, Equus asinus, on a horse mare. Reverse the parents — a horse stallion on a donkey mare — and the animal is a hinny, which is a different cross rather than a synonym.",
      identification:
        "Look at the extremities first. A mule keeps broadly horse-like body proportions and height while showing the donkey in its long ears, narrow upright hooves, short bristly mane with little forelock, and a tail that is short-haired at the top before the switch begins. The head is usually heavier and straighter in profile than a comparably sized horse's. Coat colours are largely horse colours, and pale rings around the muzzle and eyes are common inheritances from the sire.",
      habitat:
        "Neither is a wild animal, so range is a matter of husbandry rather than ecology. Domestic horses are kept across almost every climate people occupy, and free-roaming populations descended from domestic stock exist on several continents. Mules are made wherever both parent species are kept together, and they are most numerous in mountainous, arid and rough country where sure-footed transport still earns its keep. Because mules do not breed, no self-sustaining feral mule population establishes itself the way feral horse herds do.",
      diet:
        "Both are hindgut fermenters, processing fibrous plant material through a large caecum and colon rather than a ruminant stomach, and both need near-continuous access to forage for that system to work properly. The practical difference comes down the sire's line: mules generally handle coarser, lower-quality forage and less water than many horse types, a legacy of ancestry adapted to dry country. FaunaHub publishes no rations or feeding quantities; those decisions belong with a veterinarian or qualified equine nutritionist.",
      behavior:
        "The mule's temperament is the trait most often described and most often misread. Where a startled horse tends to move first and assess afterwards, a mule more often stops, looks and refuses, behaviour that reads as stubbornness but is better described as a stronger self-preservation response inherited from the donkey. Horses are strongly social herd animals with clear affiliative bonds, and mules keep that sociability, attaching to people and to other equids. Both learn quickly and both remember handling experiences for years.",
      humanRelationship:
        "Horses were domesticated in Eurasia several thousand years ago and reshaped transport, farming and warfare wherever they spread. Mule breeding is nearly as old as keeping both parents in the same place, and mules have carried loads on trails, worked fields and hauled in mines and forests across many cultures. Because each mule must be bred deliberately, mule numbers follow demand for animal power. Both now serve as companion and sport animals as well, and both are covered by welfare law in many countries.",
      whichIsWhich:
        "Long ears, small upright hooves, a stubby standing mane, a tail with a bare-looking top and a call that turns into a bray: mule. Shorter ears, larger rounder hooves, a long flowing mane with a forelock, a full-haired tail from the dock and a clean whinny: horse. If there is a foal at foot that resembles the animal beside it, you are looking at a horse, because a mule will not have produced it.",
      sensesAdaptations:
        "Both are prey-shaped animals with laterally placed eyes giving a very wide field of view, ears that swivel toward sound independently, and strong low-light vision. The mule's larger ear surface traces to the donkey's desert ancestry, where big ears shed heat as well as gather sound. Both investigate footing through whiskers and muzzle as much as by sight, and mules are widely described as more deliberate about testing a surface before committing weight to it.",
      lifespan:
        "Both are long-lived domestic animals, and quoted figures depend far more on workload, veterinary care and management than on hybrid status. Horses commonly live into their twenties, with many reaching their thirties under good care. Mules are frequently described as long-lived and long-working, with working lives extending well into their twenties in some regions. Outliers are reported for both, but such records come from managed animals and should not be read as an expected lifespan.",
      petContext:
        "Both are large, long-lived animals with daily requirements for forage, space, companionship, foot care and veterinary attention, and a commitment that can run for decades. Suitability is never a property of the animal alone: it depends on land, local law, finances, experience and who will care for the animal if circumstances change. FaunaHub does not recommend acquiring any equid, and all health, nutrition and management decisions belong with a qualified veterinarian and experienced local advisers.",
    },
    faqs: [
      {
        question: "Why are mules sterile?",
        answer:
          "Because the chromosome numbers do not match. A horse contributes 32 chromosomes and a donkey 31, so a mule carries 63. During the cell division that makes eggs and sperm, chromosomes must pair up, and an odd, mismatched set generally cannot do so reliably. The result is that mules almost never produce viable gametes. A very small number of foals born to female mules have been reported and genetically verified, but these are exceptional.",
      },
      {
        question: "Is a mule half horse?",
        answer:
          "Genetically yes, in that it receives one chromosome set from a horse mare and one from a donkey sire. What it looks like is not a straight average, though. Body size and general frame follow the horse side quite strongly, while ears, mane, tail, hooves and much of the voice follow the donkey. Traits are not inherited as a simple fifty-fifty blend of appearance.",
      },
      {
        question: "What is the difference between a mule and a hinny?",
        answer:
          "The direction of the cross. A mule has a donkey sire and a horse dam, while a hinny has a horse sire and a donkey dam. Hinnies are less common, partly because the cross is harder to achieve, and they often look more horse-like about the head and ears while standing smaller overall. Both carry 63 chromosomes and both are treated as sterile.",
      },
      {
        question: "Can a mule be registered as a breed the way a horse can?",
        answer:
          "Not as a breed, because a breed is a population that reproduces itself. Mule registries do exist and record individual animals, their parentage and their performance, but they cannot maintain a closed breeding population the way a horse studbook does. Every registered mule traces back to a fresh donkey-on-horse cross, so its characteristics depend on the two parents chosen rather than on generations of selection within mules.",
      },
      {
        question: "Do mules and horses behave differently under work?",
        answer:
          "Descriptions across working traditions are consistent: mules are more inclined to stop and evaluate, less inclined to bolt, and harder to push past what they judge unsafe, while horses more readily move first. This is a description of temperament, not a ranking of intelligence, and variation within each group is large. Handling, training history and the individual animal matter more than the mule-or-horse label in any given case.",
      },
    ],
    commonConfusions: [
      "Calling a mule a species or hunting for its scientific name, when a mule is a cross with no binomial of its own.",
      "Using mule and hinny as synonyms, when the two differ in which parent was the horse.",
      "Reading a mule's refusal to move as plain stubbornness rather than the caution its donkey ancestry contributes.",
    ],
    similarities: [
      "Both are equids standing on a single weight-bearing toe per foot with the same basic hindgut digestion.",
      "Both are herd-minded animals that form lasting bonds with companions and with handlers.",
      "Both have been central to transport, farming and haulage across many cultures.",
      "Both are long-lived domestic animals whose realistic age depends far more on management than on anything inherent.",
    ],
    keyDifferences: [
      "A horse is a species that reproduces, while a mule must be bred afresh from two parent species.",
      "Horses carry 64 chromosomes and mules 63, which is why mules are treated as sterile.",
      "A mule's ears are conspicuously longer than a horse's and its head is usually heavier.",
      "Mule hooves are small, narrow and upright, whereas horse hooves are larger and rounder.",
      "A mule's call typically starts as a whinny and breaks into a bray, and a horse does not bray at all.",
      "Feral horse populations sustain themselves, while no feral mule population ever can.",
    ],
    petBoundary:
      "Horses and mules are large animals with care commitments measured in decades, covering forage, space, companionship, hoof care and veterinary attention. Suitability depends on the household, the land available, local law, finances and who will take responsibility for the animal's whole life. This page does not recommend acquiring either, and care, health and nutrition decisions belong with a qualified veterinarian.",
    taxonomyCaveat:
      "A mule is a hybrid, not a species, and has no scientific name of its own; it is written as a cross of an Equus asinus sire on an Equus caballus dam. The horse is a domestic form whose name appears as both Equus caballus and Equus ferus caballus depending on the authority followed.",
    relatedComparisonSlugs: ["mule-vs-donkey", "donkey-vs-horse", "horse-vs-zebra"],
    relatedHubPaths: ["/domestic-animals", "/animal-domestication", "/animal-encyclopedia/mammals"],
    sourceIds: ["adw", "britannica"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "mule-vs-donkey",
    animalA: { slug: "mule", name: "Mule" },
    animalB: { slug: "donkey", name: "Donkey" },
    title: "Mule vs Donkey",
    metaTitle: "Mule vs Donkey — Parentage, Size, Ears & Bray",
    metaDescription:
      "A donkey is a species with 62 chromosomes; a mule is its sterile hybrid offspring on a horse mare, taller, horse-framed and only part donkey in voice and ear.",
    shortAnswer:
      "The donkey is the parent species and the mule is its hybrid son or daughter. A donkey, Equus asinus, is a domestic species with 62 chromosomes that breeds true and sustains free-roaming populations. A mule results from a donkey sire covering a horse mare, carries 63 chromosomes, and is effectively sterile. In appearance the mule is usually taller and more horse-shaped through the body and neck, while the long ears, upright mane, tufted tail, narrow hooves and part-bray call are the donkey showing through.",
    primaryCategory: "pets-domestic",
    secondaryCategories: [],
    relationship: "domestic-vs-wild",
    confidence: "strong",
    searchIntent: "identification",
    whyCompare:
      "People meeting a long-eared working animal often reach for donkey as the default label, and mules are the animals most often filed there. One is the father of the other, which makes the shared traits obvious and the inherited limits — height, outline, voice and fertility — worth setting out plainly.",
    centralDifference:
      "A donkey is a self-reproducing species and the sire of every mule; the mule is the sterile offspring that keeps donkey extremities on a larger, horse-shaped body.",
    dimensions: [
      {
        id: "parentage",
        label: "Parentage",
        animalAValue: "Bred from a donkey sire on a horse mare, carrying 63 chromosomes",
        animalBValue: "A species in its own right with 62 chromosomes, descended from the African wild ass",
        interpretation:
          "The donkey exists independently of the mule, while no mule exists at all without a donkey.",
      },
      {
        id: "self-sustaining-population",
        label: "Ability to sustain a population",
        animalAValue: "Cannot found a population; every individual is bred deliberately by people",
        animalBValue: "Breeds freely and has established free-roaming populations on several continents",
        interpretation:
          "Sterility turns the mule into a product of husbandry, while donkeys behave like any other domestic species once turned loose.",
        caveat: "Free-roaming donkeys are managed very differently between countries and their status is contested in several.",
      },
      {
        id: "size-and-build",
        label: "Size and build",
        animalAValue: "Usually taller and heavier than its sire, with a longer neck and a more horse-like barrel and croup",
        animalBValue: "Ranges from miniature to large breeds, typically with a straighter back, upright shoulder and short croup",
        interpretation:
          "Body outline is where the horse dam shows most clearly in the hybrid.",
        caveat: "Donkey breeds vary widely in height, so a large donkey can stand taller than a mule out of a small mare.",
      },
      {
        id: "dorsal-and-shoulder-stripe",
        label: "Dorsal and shoulder markings",
        animalAValue: "A dorsal line and faint shoulder cross appear in some individuals but are inconsistent",
        animalBValue: "A dark dorsal stripe crossed at the withers by a shoulder stripe is common, though not universal",
        interpretation:
          "The cross marking is a donkey signature that only sometimes carries through the hybrid.",
      },
      {
        id: "ear-proportion",
        label: "Ear proportion",
        animalAValue: "Long ears, but usually shorter in proportion to the head than a donkey's",
        animalBValue: "Very long ears relative to head size, among the most distinctive features of the species",
        interpretation:
          "Both look long-eared beside a horse, so it is the proportion rather than the length that separates them.",
      },
      {
        id: "call-and-voice",
        label: "Call",
        animalAValue: "A mixed call, often opening like a whinny and finishing as a bray",
        animalBValue: "A full two-phase bray with drawn-in and pushed-out portions that carries a long way",
        interpretation:
          "A clean bray with no whinny in it points to the donkey, and a broken one to the hybrid.",
      },
    ],
    narrative: {
      taxonomy:
        "The donkey is the domesticated form of the African wild ass and is written Equus asinus, or Equus africanus asinus by authorities that keep the domestic form inside the wild species. It is a full member of Equidae. A mule is the hybrid produced when a donkey sire is put to a horse mare, and it carries no scientific name because hybrids are not species. Reverse the parents and the animal is a hinny rather than a mule, a distinction some registries take seriously.",
      identification:
        "Side by side, the mule reads as a horse that has borrowed donkey parts. Its body, neck and hindquarters follow the mare's shape, while the head is longer and heavier, the ears long, the mane short and upright, and the tail short-haired at the top before the switch. A donkey has a shorter, blockier outline, a straighter back, a very upright shoulder, ears longer relative to the head, and frequently a pale muzzle and eye rings over a grey-dun coat.",
      habitat:
        "Both are domestic animals whose distribution is set by people. Donkeys are kept most heavily in dry and mountainous regions of Africa, Asia, southern Europe and the Americas, where drought tolerance and low forage requirements suit them, and free-roaming populations persist in several arid areas. Mules are produced wherever donkeys and horses are kept in the same places, concentrated in steep and rough country used for pack transport. Only the donkey establishes populations that continue without breeders.",
      diet:
        "Both process fibrous forage through a large hindgut, and both descend on the sire's side from a lineage adapted to sparse dry vegetation. Donkeys are notably efficient on coarse, stemmy material and tolerate water restriction better than most horses, and mules inherit a good share of that. In practice this means both can run into trouble on rich pasture laid out for horses. Specific rations, quantities and any health concern are matters for a veterinarian or qualified equine nutritionist.",
      behavior:
        "Donkeys are known for stopping to assess rather than fleeing, forming intense bonds with a single companion, and reacting badly to separation from it. Mules carry much of that forward: they too are deliberate, they too bond strongly, and they too are described as difficult to force. Where they differ is sociability inherited from the horse side, since mules often integrate into mixed groups more readily. Both vocalise a great deal, and both are reported to remember places, routes and people over long periods.",
      humanRelationship:
        "The donkey has carried water, grain, people and goods for thousands of years and remains essential to smallholder economies in much of the world, often with far less veterinary and welfare attention than horses receive. Mules were bred for the same tasks where more height and reach were wanted. Both have retreated in industrialised countries as machinery replaced animal power, and both now appear in leisure, conservation grazing and sanctuary settings. Neither should be taken on without a plan for decades of care.",
      whichIsWhich:
        "Very long ears on a short blocky body, a straight back, a pale muzzle, a dark cross over the shoulders and a full two-phase bray: donkey. Long ears on a taller, horse-shaped body with a longer neck, heavier head, short upright mane and a whinny that collapses into a bray: mule. A foal running alongside settles it immediately, since a mule will not have bred one.",
      sensesAdaptations:
        "Both carry the donkey's oversized ears, which serve hearing and also help shed heat, a useful combination in the hot open country the African wild ass inhabits. Both have wide-set eyes giving nearly panoramic vision, and both are noted for careful placement of the feet on broken ground. The donkey's narrow, upright, hard hoof is built for rock rather than soft turf, and the mule inherits that foot shape, which is much of the basis for its reputation on mountain trails.",
      lifespan:
        "Both are among the longer-lived domestic mammals, and quoted figures depend heavily on workload, climate and access to care. Donkeys in well-resourced settings frequently live into their thirties, while working donkeys in harsh conditions often live far shorter lives, and that gap is a welfare issue rather than a biological one. Mules are similarly long-lived and are often still in work in their twenties. Neither figure should be read as a promise for any individual animal.",
      conservation:
        "The domestic donkey is not a conservation concern, but its wild ancestor is. The African wild ass survives in very small numbers in the Horn of Africa and is assessed as Critically Endangered, with interbreeding with domestic donkeys among the pressures on it. Global donkey numbers have also been affected by trade in donkey hides, which has driven rapid declines in some countries. Current assessments and figures should be taken from the IUCN Red List rather than from this page.",
      petContext:
        "Donkeys and mules are decades-long commitments, and both are highly social animals for whom losing a bonded companion is a serious welfare event. Anyone considering either needs suitable land, shelter, routine hoof care, appropriate forage, local legal permission and a realistic plan for the animal's whole life, including who takes over if circumstances change. FaunaHub does not recommend acquiring either animal, and health and management decisions belong with a qualified veterinarian.",
    },
    faqs: [
      {
        question: "Is a mule just a big donkey?",
        answer:
          "No. A mule has a donkey father and a horse mother, so half its genome comes from each. The extra height and the horse-shaped body come from the mare, while the ears, mane, tail, hooves and much of the temperament come from the sire. A large donkey breed can stand taller than a small mule, so size by itself is never the test; body outline and ear proportion are far more reliable.",
      },
      {
        question: "Can two mules produce a foal together?",
        answer:
          "Effectively no. Mules carry 63 chromosomes, an odd number that disrupts the pairing required to form eggs and sperm, and male mules are not known to have sired offspring at all. A very small number of foals born to female mules have been reported and genetically confirmed, always with a horse or donkey as the sire. Mule breeding therefore always returns to the two parent species.",
      },
      {
        question: "Do mules bray like donkeys?",
        answer:
          "Not exactly. A donkey's bray is a loud two-phase call with a drawn-in and a pushed-out portion, carrying over long distances and used to keep contact with companions. Mules produce something intermediate, and many begin with a horse-like whinny that breaks into a bray part-way through. A clean full bray with no whinny in front of it almost always means a donkey.",
      },
      {
        question: "Why do donkeys and mules stop instead of running?",
        answer:
          "Both inherit a response that favours assessment over flight, which suits an ancestor living in open rocky country where scattering works poorly. Handlers often call it stubbornness, but the animal is evaluating whether the ground, the load or the situation is acceptable. Horses, whose ancestors used open grassland, more readily move first. Individual variation is wide, and training history matters as much as ancestry.",
      },
      {
        question: "Which came first as a domestic animal, the donkey or the mule?",
        answer:
          "The donkey, necessarily, because a mule cannot exist until both parents are kept together. Donkeys were domesticated from the African wild ass in north-eastern Africa long before mule breeding could begin, and mule production followed once horses and donkeys were managed side by side across the same regions. Every mule ever born still depends on that sequence being repeated by people.",
      },
    ],
    commonConfusions: [
      "Assuming the mule is simply a larger donkey breed rather than a cross with a horse mare.",
      "Expecting a mule to show the donkey's shoulder cross, which carries through only inconsistently.",
      "Treating the domestic donkey and the wild ass it descends from as interchangeable when one is common and the other is not.",
    ],
    similarities: [
      "Both have long ears, narrow upright hooves and a hindgut suited to coarse dry forage.",
      "Both are described across working traditions as deliberate animals that stop to assess rather than bolt.",
      "Both form intense attachments to a companion and cope poorly with sudden separation.",
      "Both are long-lived working animals whose realistic age depends on workload and access to care.",
    ],
    keyDifferences: [
      "The donkey is a species that breeds true, while the mule is a sterile cross with a horse mare.",
      "Donkeys carry 62 chromosomes and mules 63.",
      "Mules usually stand taller with a horse-shaped body, whereas donkeys keep a shorter, blockier outline.",
      "A donkey brays cleanly, while a mule's call often begins as a whinny before breaking.",
      "Donkeys sustain free-roaming populations, and no mule population can persist without breeders.",
      "Ears are proportionally longer on a donkey than on a mule of comparable height.",
    ],
    petBoundary:
      "Donkeys and mules are large, social, long-lived animals needing land, shelter, companionship, routine foot care and veterinary attention for decades. Suitability depends on household circumstances, local law, finances and welfare capacity rather than on the animal itself. Nothing here is a recommendation to acquire either, and every health, feeding or management decision should go to a qualified veterinarian.",
    taxonomyCaveat:
      "Donkey is written Equus asinus, or Equus africanus asinus where the domestic form is kept within the wild species. Mule has no scientific name at all, because it names a first-generation cross rather than a species, and reversing which parent is the horse produces a hinny instead.",
    conservationCaveat:
      "The African wild ass, wild ancestor of the domestic donkey, is assessed as Critically Endangered and its remaining numbers are small, while domestic donkeys are not themselves threatened but are affected by trade pressures in some regions. Check the current IUCN Red List entry rather than relying on any figure quoted here.",
    relatedComparisonSlugs: ["mule-vs-horse", "donkey-vs-horse", "donkey-vs-zebra"],
    relatedHubPaths: ["/domestic-animals", "/animal-domestication", "/animal-lifespans"],
    sourceIds: ["adw", "britannica", "iucn"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "mule-vs-zebra",
    animalA: { slug: "mule", name: "Mule" },
    animalB: { slug: "zebra", name: "Zebra" },
    title: "Mule vs Zebra",
    metaTitle: "Mule vs Zebra — Hybrid, Wild Species, Stripes & Zebroids",
    metaDescription:
      "A mule is a bred hybrid with no wild ancestry; zebras are three wild African species. Crossing a zebra with a horse or donkey makes a zebroid, not a mule.",
    shortAnswer:
      "Zebras are wild species and a mule is not a species at all. Three zebras survive — the plains zebra, the mountain zebra and Grevy's zebra — all African, all striped, and none of them domesticated. A mule is a bred hybrid of a donkey sire and a horse mare, carrying 63 chromosomes and no zebra ancestry whatsoever. Zebras do hybridise with horses and donkeys in captivity, but those crosses are called zebroids, zorses or zedonks, and they are separate animals from the mule.",
    primaryCategory: "taxonomy",
    secondaryCategories: ["mammals"],
    relationship: "taxonomy-clarification",
    confidence: "representative",
    searchIntent: "taxonomy",
    whyCompare:
      "Both are equids with upright manes and long faces, and the words hybrid, zebroid and mule get used interchangeably in casual writing. Placing a bred cross beside three wild species clears up what a mule actually is, what a zebroid is, and why faint leg bars on a mule mean nothing about zebra ancestry.",
    centralDifference:
      "Zebras are wild African equid species that reproduce in the wild, while a mule is a human-made cross between two domestic equids and carries no zebra ancestry.",
    dimensions: [
      {
        id: "hybrid-or-species",
        label: "Hybrid or species",
        animalAValue: "A first-generation cross with no scientific name and no wild population anywhere",
        animalBValue: "Three living species, each with its own binomial and its own wild range",
        interpretation:
          "One is a category of animal husbandry, the other a set of naturally occurring species with their own evolutionary histories.",
      },
      {
        id: "ancestry",
        label: "Ancestry",
        animalAValue: "A donkey sire on a horse mare, both of them domestic animals",
        animalBValue: "No domestic ancestry at all; zebras have never been domesticated as a sustained population",
        interpretation:
          "Attempts to work zebras produced trained individuals but never a domestic stock, which is why no zebra equivalent of the mule exists.",
        caveat: "Individual zebras have been harnessed and ridden historically, which is taming rather than domestication.",
      },
      {
        id: "chromosome-number",
        label: "Chromosome number",
        animalAValue: "63, from a 64-chromosome dam and a 62-chromosome sire",
        animalBValue: "Differs sharply between species, reported at around 32 in the mountain zebra and in the mid-forties in Grevy's zebra",
        interpretation:
          "Chromosome mismatch is why equid crosses of every kind, mules and zebroids alike, are generally sterile.",
        caveat: "Published counts vary a little between studies and between subspecies.",
      },
      {
        id: "coat-pattern",
        label: "Coat pattern",
        animalAValue: "Ordinary horse colours, sometimes with a faint dorsal line and leg barring inherited from the donkey",
        animalBValue: "Bold black-and-white striping over the body, differing by species, with each individual's pattern unique",
        interpretation:
          "Faint leg barring on a mule is an ancestral equid trace, not a sign of zebra parentage.",
      },
      {
        id: "social-system",
        label: "Social system",
        animalAValue: "Kept in mixed domestic groups, with social arrangements decided by people",
        animalBValue: "Plains and mountain zebras form stable harem groups, while Grevy's zebra uses territorial males and fluid female associations",
        interpretation:
          "Zebra society varies by species and shapes how each moves through the landscape, whereas a mule's grouping reflects husbandry.",
      },
      {
        id: "native-range",
        label: "Native range",
        animalAValue: "No natural range; found wherever donkeys and horses are bred together",
        animalBValue: "Eastern and southern Africa, with Grevy's zebra restricted to a small part of the Horn of Africa",
        interpretation:
          "Range is a meaningful conservation unit for zebras and a meaningless idea for a hybrid that occurs only where people make it.",
      },
    ],
    narrative: {
      taxonomy:
        "All of these animals are equids in the genus Equus. Three zebra species survive: the plains zebra, Equus quagga, the mountain zebra, Equus zebra, and Grevy's zebra, Equus grevyi. A fourth form, the quagga, was lost in the nineteenth century and is now understood as a population of the plains zebra. A mule occupies no place on that list at all, being the cross of a donkey sire, Equus asinus, on a horse mare, Equus caballus, and hybrids do not receive species names.",
      identification:
        "There is no real risk of confusing the animals themselves. A zebra is boldly striped from muzzle to tail, with patterns that separate the species: plains zebras have broad stripes that often carry fainter shadow stripes and fade on the legs in southern populations, mountain zebras have a dewlap and a gridiron pattern above the tail, and Grevy's zebra shows narrow dense stripes, a white belly and very large rounded ears. A mule is a plain-coated animal in ordinary horse colours with long ears.",
      habitat:
        "Zebras occupy African grassland, savanna and scrub, and in the case of the mountain zebra dry rocky uplands, with movements that follow rainfall and grazing quality and, in some populations, long seasonal journeys. Grevy's zebra lives in arid country in the Horn of Africa and its range has contracted considerably. Mules have no natural habitat whatsoever. They live where people breed and work them, and because they cannot reproduce they never establish free-living populations even where individuals escape.",
      diet:
        "Both are hindgut-fermenting grazers built to process large volumes of fibrous grass. Zebras take coarse, tall, low-protein grasses that many ruminants pass over, which is part of why zebras often move ahead of wildebeest and other grazers, cropping the tough upper growth. Mules live on grass, hay and browse and inherit from the donkey side a tolerance for stemmy low-quality forage. Feeding regimes for kept equids are veterinary matters and are deliberately not covered here.",
      behavior:
        "Zebra social organisation differs by species. Plains and mountain zebras live in stable family groups of a stallion with mares and their young, with bachelor groups alongside, held together by contact calls, mutual grooming and coordinated vigilance. Grevy's zebra instead has territorial stallions and looser, changeable female associations. A mule's social life is arranged by whoever keeps it, though mules retain equid social behaviour and form strong attachments to particular companions and handlers.",
      humanRelationship:
        "Zebras were never domesticated as a lasting stock despite repeated attempts during the colonial period, and the trained zebras and zebroids of that era were exceptions rather than the start of a domestic lineage. The relationship today is largely one of conservation, tourism and competition over grazing and water. The mule sits at the opposite pole: it exists only because people breed it, and it has worked in agriculture, transport and haulage for thousands of years. Zebras are wild animals and are not pets.",
      whichIsWhich:
        "Striped, in Africa, in a wild herd: zebra. Plain-coloured with long ears, in a yard, on a trail or in harness: mule. If a striped animal stands in a paddock outside Africa with an unstriped face or only partial striping, consider a zebroid — a zebra crossed with a horse or donkey — rather than either. A mule never shows zebra striping, although faint leg bars can appear through ordinary donkey inheritance.",
      sensesAdaptations:
        "Zebra striping has been tested experimentally, and the best-supported explanation is that it disrupts the landing behaviour of biting flies such as tabanids and tsetse, while proposals about heat regulation and confusing predators have found less support. Zebras also have wide-set eyes, acute hearing and, in Grevy's zebra, notably large ears suited to hot open country. A mule inherits the donkey's large ears and hard upright hooves and is widely described as unusually careful about placing its feet on broken ground.",
      lifespan:
        "Comparable figures need care, because one animal is wild and one is managed throughout life. Zebras commonly live into their late teens or twenties in the wild where predation, drought and disease allow, and captive individuals have exceeded that. Mules are managed animals and are often still working into their twenties, with veterinary care and workload determining age far more than anything intrinsic. Setting a protected domestic animal's age against a wild one's is always an unequal comparison.",
      conservation:
        "The three zebras sit in very different positions. Grevy's zebra has a small, fragmented population and is assessed as Endangered; the mountain zebra has recovered from very low numbers under protection; and the plains zebra is far more numerous but declining in parts of its range through habitat loss, fencing of migration routes and hunting. None of this applies to mules, which have no wild population to conserve. Current status for each zebra species should be read from the IUCN Red List.",
      petContext:
        "Mules are kept as working and companion animals and need decades of land, forage, foot care, companionship and veterinary attention. Zebras are wild animals whose private keeping is restricted or prohibited in many jurisdictions and which require specialist facilities and experienced staff where it is permitted at all. FaunaHub does not recommend acquiring either animal, and decisions about the care of a kept equid belong with a qualified veterinarian, or with licensed specialists for wild species.",
    },
    faqs: [
      {
        question: "Is a zebra a kind of mule?",
        answer:
          "No. A zebra is a wild species and a mule is a domestic hybrid, and neither is a form of the other. The confusion usually comes from both being equids with long faces and upright manes. Zebras have never been domesticated as a population, so nothing in a mule's ancestry is zebra: its parents are a donkey and a horse, both of them domestic animals.",
      },
      {
        question: "What is a zebroid, and how does it differ from a mule?",
        answer:
          "A zebroid is any cross involving a zebra: a zorse from a zebra and a horse, a zedonk or zonkey from a zebra and a donkey. Like mules, zebroids are hybrids and are generally sterile, but they descend from a wild species and usually show partial striping, often strongest on the legs and hindquarters. A mule has no zebra parent and never shows that pattern.",
      },
      {
        question: "Why were zebras never turned into working animals the way donkeys were?",
        answer:
          "Individual zebras have been broken to harness and ridden, but no lasting domestic population followed. The usual explanations point to zebra social structure, a strong flight and evasion response, and the absence of the tractable temperament that made donkeys and horses workable across generations. Domestication requires a species that breeds reliably in captivity over many generations under human selection, and zebras have not done that.",
      },
      {
        question: "Do mules have stripes because of a zebra ancestor?",
        answer:
          "No. Faint leg barring, a dark line along the spine or a shoulder marking on a mule comes from the donkey side and represents ancestral equid patterning shared across the genus. The same primitive markings appear on dun-coloured horses with no hybrid background at all. Zebra striping is a different thing entirely: bold, high-contrast and covering the whole body rather than a few faint bars.",
      },
      {
        question: "Do zebras and mules ever meet?",
        answer:
          "Ranges can overlap where donkeys, horses and mules are kept alongside zebra country in parts of Africa, and contact around water and grazing does occur. What follows is competition and concern about disease transmission rather than hybrids, since the zebroids that exist were produced by deliberate pairing in captivity. Away from Africa there is no natural contact of any kind, because zebras occur wild nowhere else.",
      },
    ],
    commonConfusions: [
      "Believing a mule's leg barring or spinal line indicates zebra ancestry rather than ordinary donkey inheritance.",
      "Using zebra as though it names one animal, when three living species with different stripe patterns and social systems carry the name.",
      "Assuming any striped equid in a paddock must be a zebra, when zebroids are bred and are usually only partly striped.",
    ],
    similarities: [
      "Both belong to Equus, the single surviving genus of a family that was once far more diverse.",
      "Both process coarse fibrous grass in bulk rather than selecting rich, soft forage.",
      "Both have wide-set eyes, highly mobile ears and strong social attachments within their groups.",
      "Both belong to a genus in which crosses between species are possible but almost always sterile.",
    ],
    keyDifferences: [
      "Zebras are wild species with African ranges, while a mule has no wild population and no natural range.",
      "Zebras were never domesticated, whereas both of a mule's parents are domestic animals.",
      "Zebra chromosome counts differ between the three species, while every mule carries 63.",
      "Bold body-wide striping belongs to zebras, and a mule shows at most faint donkey leg bars.",
      "Zebra society ranges from stable harems to territorial systems, while a mule's grouping is arranged by keepers.",
      "A zebra crossed with a horse or donkey is a zebroid, which is a different hybrid from a mule.",
    ],
    safetyBoundary:
      "Zebras are large wild animals and behave as wild animals in captivity as much as in the field, which is why reserves and collections set enclosure standards and viewing distances. This page describes biology, taxonomy and ecology only, and offers no approach, handling or management guidance for either animal.",
    petBoundary:
      "Mules are kept as working and companion animals, while zebras are wild animals whose private keeping is restricted or prohibited in many places and demands specialist facilities. Where keeping is lawful at all, suitability depends on land, law, welfare capacity and a commitment measured in decades. Nothing here recommends acquiring either, and care decisions belong with a qualified veterinarian or licensed specialist.",
    taxonomyCaveat:
      "Zebra covers three living species — plains, mountain and Grevy's — differing in stripe pattern, ear shape, chromosome number and social system, so statements here describe the group unless a species is named. Mule is not a taxon at all, but the name of a specific first-generation cross.",
    conservationCaveat:
      "Zebra status differs by species and is revised periodically, with Grevy's zebra in a far more precarious position than the plains zebra. Check the current IUCN Red List assessment for the species in question rather than treating anything here as current.",
    relatedComparisonSlugs: ["mule-vs-horse", "mule-vs-donkey", "donkey-vs-zebra", "horse-vs-zebra"],
    relatedHubPaths: ["/animal-taxonomy", "/animal-encyclopedia/mammals", "/wildlife"],
    sourceIds: ["adw", "iucn", "britannica"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "mule-vs-llama",
    animalA: { slug: "mule", name: "Mule" },
    animalB: { slug: "llama", name: "Llama" },
    title: "Mule vs Llama",
    metaTitle: "Mule vs Llama — Order, Feet, Digestion & Pack Work",
    metaDescription:
      "Both carry loads, but a mule is an odd-toed hybrid equid with hooves and a llama is a two-toed South American camelid on padded feet with a chambered stomach.",
    shortAnswer:
      "They are pack animals from different orders. A mule is an equid, odd-toed, standing on a single hoof per foot, and is the sterile cross of a donkey sire and a horse mare. A llama, Lama glama, is an even-toed camelid domesticated in the Andes from the wild guanaco, standing on two padded toes tipped with nails rather than hooves. The llama also ferments its food in a chambered forestomach, while the mule ferments in an enlarged hindgut.",
    primaryCategory: "habitat-ecology",
    secondaryCategories: ["mammals"],
    relationship: "similar-ecological-role",
    confidence: "supported",
    searchIntent: "general-comparison",
    whyCompare:
      "Two continents solved the same problem — moving goods on foot over hard ground — with animals from opposite branches of the hoofed mammals. Comparing them shows how far the same job can be done by different feet, different stomachs and different social signals.",
    centralDifference:
      "A mule is a hoofed odd-toed equid hybrid that digests in the hindgut, while a llama is a two-toed, pad-footed Andean camelid that ferments in a chambered forestomach.",
    dimensions: [
      {
        id: "mammal-order",
        label: "Order and family",
        animalAValue: "Perissodactyla, family Equidae, as a hybrid within that family rather than a species",
        animalBValue: "Artiodactyla, family Camelidae, alongside alpacas, guanacos, vicunas and the true camels",
        interpretation:
          "The odd-toed and even-toed lineages split deep in mammal history, so every working trait these two share is convergence on the same task.",
      },
      {
        id: "foot-and-toes",
        label: "Feet",
        animalAValue: "A single hard hoof on each foot, narrow and upright, inherited from the donkey side",
        animalBValue: "Two toes resting on a broad leathery pad, each toe tipped with a nail",
        interpretation:
          "A soft pad leaves less damage on thin high-altitude soils, while a hard hoof grips and wears well on rock.",
      },
      {
        id: "digestion",
        label: "Digestion",
        animalAValue: "Hindgut fermenter, breaking fibre down in a large caecum and colon after the small intestine",
        animalBValue: "Foregut fermenter with a three-compartment stomach, chewing cud without being a true ruminant",
        interpretation:
          "Foregut fermentation extracts more from each mouthful, which suits sparse high grazing, while hindgut fermentation favours processing bulk quickly.",
      },
      {
        id: "domestication-origin",
        label: "Where each came from",
        animalAValue: "Bred wherever donkeys and horses were kept together, across Eurasia, Africa and later the Americas",
        animalBValue: "Domesticated in the high Andes from the guanaco, thousands of years before European contact",
        interpretation:
          "One is a cross any equid-keeping culture could repeat, the other a regional domestication from a single wild ancestor.",
      },
      {
        id: "working-terrain",
        label: "Working terrain and role",
        animalAValue: "Used on mountain trails, farms, forest tracks and roads across many climates, in pack and draft roles",
        animalBValue: "Used chiefly on high Andean routes, and now also placed with sheep and goats as a guard animal in some countries",
        interpretation:
          "Both were shaped for moving goods on foot, but altitude and terrain produced very different bodies for the same task.",
        caveat: "Loads for any working animal are a welfare matter set by condition, training and veterinary advice, never by species.",
      },
      {
        id: "social-signalling",
        label: "Social signalling",
        animalAValue: "Ears, tail, posture and a mixed whinny-bray call carry most of the signalling",
        animalBValue: "Ear position, neck posture, a soft hum and, in disputes, spitting, with communal dung piles marking shared ground",
        interpretation:
          "Spitting is mainly llama-to-llama social business over rank, food and space, and is very often misread by people as directed at them.",
      },
    ],
    narrative: {
      taxonomy:
        "These two sit either side of one of the oldest divisions among hoofed mammals. The mule belongs to Equidae in the order Perissodactyla, the odd-toed ungulates that also include rhinoceroses and tapirs, and it is a hybrid within that family rather than a species. The llama, Lama glama, is a camelid in Artiodactyla, the even-toed ungulates, and is the domesticated descendant of the guanaco. Its closest domestic relative is the alpaca, and its wild relatives are the guanaco and the vicuna.",
      identification:
        "Nothing about them is genuinely alike close up. A mule is horse-shaped, short-coated in most cases, with long ears, a mane along the crest and a single hoof at the end of each leg. A llama holds a long neck upright, has a small head with banana-shaped ears curving inward, wears a dense fleece, carries no mane and has a short tail, and stands on two padded toes. Llamas are also much lighter framed and carry the head far higher relative to the body.",
      habitat:
        "Neither has a wild range, but their working ranges differ sharply. Llamas are animals of the high Andes, at home on cold, dry, thin-aired puna grassland above the tree line, with a physiology suited to altitude. Mules are used almost anywhere people move loads on foot or by cart, from tropical lowlands to alpine passes, and their tolerance is broad rather than specialised. Llamas have also been introduced to farms in North America, Europe and Australasia for fibre, showing and guarding stock.",
      diet:
        "Both live on grass and coarse browse, and both keep working on forage that would not sustain a more selective feeder. The mule inherits from its donkey sire the ability to do well on stemmy, low-protein material, processing bulk through the hindgut. The llama takes a smaller volume and extracts more from it, chewing cud and fermenting in a three-compartment stomach. Rations, quantities and any dietary problem are veterinary questions and are deliberately not covered here.",
      behavior:
        "Llamas are herd animals with an ordering worked out through neck wrestling, ear pinning and spitting, and they use communal dung piles that double as boundaries. They hum in contact and give a shrill alarm call, which is one reason some farms place them with sheep against foxes and loose dogs. Mules keep equid herd behaviour, forming attachments and reacting badly to isolation, and they are known for stopping to evaluate rather than pressing forward when something looks wrong.",
      humanRelationship:
        "Both are working animals with deep cultural roots, and both are now as often kept for pleasure as for labour. Llamas carried goods along Andean routes long before the Spanish arrival and supplied fibre, meat and dung for fuel, and they remain central to highland herding economies. Mules moved armies, ore, timber and harvests across many continents and still work where machinery cannot go. Both now also appear in trekking, therapy and hobby-farm settings in wealthier countries.",
      whichIsWhich:
        "Single hooves, long ears, a mane and a horse's outline: mule. Two padded toes, a long upright neck, inward-curving ears, a fleece and no mane: llama. If the animal is chewing cud, it is the llama, because equids do not chew cud. If it brays or half-whinnies, it is the mule, since a llama hums, clucks and, when it has a dispute with another llama, spits.",
      sensesAdaptations:
        "The llama's adaptations are largely about altitude: camelid red blood cells are small and oval rather than round, and camelid haemoglobin binds oxygen readily, which together support work in thin air, while the dense fleece handles wide day-to-night temperature swings. The mule's adaptations are inherited ones — large ears that gather sound and shed heat, hard narrow hooves for rock, and wide-set eyes giving near-panoramic vision. Both are noted for careful foot placement, which is precisely what pack work on narrow ground demands.",
      lifespan:
        "Both are long-lived by domestic-animal standards, and realistic figures for either depend on care rather than on species. Llamas commonly live into their late teens and twenties in well-managed herds. Mules are often still in work in their twenties and can live beyond that with veterinary attention and a manageable workload. Records for individual animals in both groups come from managed settings and should not be treated as an expectation for any particular animal.",
      petContext:
        "Both are herd animals that should not be kept alone, and both need land, shelter, appropriate forage, routine foot care and, for the llama, fleece care, along with veterinary attention over decades. Whether either fits a particular situation depends entirely on household circumstances, local law, land, finances and welfare capacity rather than on the animal's reputation. FaunaHub does not recommend acquiring either, and all health, nutrition and management decisions belong with a qualified veterinarian.",
    },
    faqs: [
      {
        question: "Are mules and llamas related?",
        answer:
          "Only as hoofed mammals. The mule is an equid in the odd-toed order Perissodactyla, while the llama is a camelid in the even-toed order Artiodactyla. That split is one of the deeper divisions among mammals, and the two lineages differ in feet, teeth, digestion and reproduction. Their shared history as pack animals is a human choice repeated on two continents, not a sign of kinship.",
      },
      {
        question: "Can a mule and a llama interbreed?",
        answer:
          "No. They belong to different orders, and hybridisation is limited to close relatives within a genus or occasionally within a family. Mules are themselves hybrids of two Equus species, and llamas can cross with alpacas, guanacos and vicunas inside Camelidae. Nothing bridges the gap between an equid and a camelid, and a mule is sterile in any case.",
      },
      {
        question: "Why do llamas spit when mules do not?",
        answer:
          "Spitting is a camelid social signal, used mainly between llamas over food, space and rank, and a llama normally gives lower-level warnings first with ears and posture. It is not a defence that evolved against people, though a llama that has been mishandled may direct it at them. Equids have no equivalent behaviour and signal with ears, tail, posture and voice instead.",
      },
      {
        question: "Which was domesticated first, and where?",
        answer:
          "They come from separate domestication events on different continents. The llama was domesticated in the high Andes from the guanaco, thousands of years before European contact, and remained a South American animal until then. The mule depends on donkeys and horses being kept together, which happened in the Old World, so mule breeding began there and reached the Americas with European livestock.",
      },
      {
        question: "Do llamas really guard sheep?",
        answer:
          "Guard llamas are used on some farms in North America and elsewhere, usually a single gelded male placed with a flock. The behaviour relied on is the llama's own alarm response: an upright stare, a shrill call and moving toward an intruding fox or loose dog. It is not universal, it does not work against every threat, and its use is a management decision for the farm and its veterinary advisers.",
      },
    ],
    commonConfusions: [
      "Grouping mules and llamas together as one kind of pack animal when they belong to different mammal orders.",
      "Assuming a llama is a ruminant because it chews cud, when camelids ferment in a three-compartment stomach and are not true ruminants.",
      "Reading a llama's spit as aggression toward people when it is mostly aimed at other llamas.",
    ],
    similarities: [
      "Both were shaped by people into pack animals that move goods on foot over hard country.",
      "Both are herd animals that do badly kept alone and form attachments to particular companions.",
      "Both were adopted partly because they keep working on forage a fussier animal would refuse.",
      "Both routinely outlast the working arrangements they were acquired for, which makes them long commitments rather than short ones.",
    ],
    keyDifferences: [
      "A mule is an odd-toed equid while a llama is an even-toed camelid, from a different mammal order.",
      "Mules stand on one hoof per foot, whereas llamas stand on two nailed toes over a soft pad.",
      "Llamas ferment in a three-compartment forestomach and chew cud, while mules ferment in the hindgut.",
      "The llama is a domesticated species that breeds, and a mule is a sterile cross bred anew each time.",
      "Llamas were domesticated in the Andes, whereas mule breeding began where donkeys and horses were kept together in the Old World.",
      "Llamas spit and hum as social signals, while mules signal with ears, posture and a whinny-bray call.",
    ],
    petBoundary:
      "Mules and llamas are herd animals with land, shelter, companionship, foot-care and veterinary needs that run for decades. Whether either fits a particular home depends on local law, acreage, finances, experience and long-term responsibility rather than on any general claim about the species. This page is not a recommendation to acquire either, and care and health decisions belong with a qualified veterinarian.",
    taxonomyCaveat:
      "Llama, alpaca, guanaco and vicuna are four South American camelids, of which two are domesticated; llama here means Lama glama specifically. Mule is not a species name but the name of a donkey-sire-on-horse-mare cross, so it carries no binomial of its own.",
    relatedComparisonSlugs: ["horse-vs-llama", "camel-vs-llama", "mule-vs-alpaca", "alpaca-vs-llama"],
    relatedHubPaths: ["/domestic-animals", "/animal-encyclopedia/mammals", "/animal-taxonomy/vertebrates"],
    sourceIds: ["adw", "britannica", "smithsonian"],
    lastReviewed: REVIEWED,
  }),
];
