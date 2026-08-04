/**
 * Comparison batch 05 — birds.
 *
 * Emphasis throughout is on cues that survive real viewing conditions:
 * structure, flight action and voice ahead of fine plumage detail.
 */
import { defineComparison, REVIEWED } from "./define.ts";

export const BATCH_05 = [
  defineComparison({
    slug: "owl-vs-hawk",
    animalA: { slug: "owl", name: "Owl" },
    animalB: { slug: "hawk", name: "Hawk" },
    title: "Owl vs Hawk",
    metaTitle: "Owl vs Hawk — Silent Flight, Facial Disc & Activity",
    metaDescription:
      "Owls have forward-set eyes in a facial disc, asymmetric ears and silent flight; hawks hunt by day using vision. Two unrelated raptor groups compared.",
    shortAnswer:
      "They are not close relatives, despite both being birds of prey. Owls have large forward-set eyes in a facial disc that channels sound to asymmetrically placed ear openings, and specialised feather structure that makes their flight almost silent. Hawks hunt by day using exceptional vision and fly with audible wingbeats. Owls also swallow prey more whole, casting indigestible pellets.",
    primaryCategory: "birds",
    secondaryCategories: ["behavior-adaptations", "taxonomy"],
    relationship: "similar-ecological-role",
    confidence: "strong",
    searchIntent: "general-comparison",
    whyCompare:
      "Both are predatory birds occupying similar niches at opposite ends of the day, and the differences between them are almost all consequences of hunting in darkness rather than light.",
    centralDifference:
      "Owls are nocturnal hunters built around hearing and silent flight; hawks are diurnal hunters built around vision, and the two are not closely related.",
    dimensions: [
      {
        id: "activity",
        label: "Activity period",
        animalAValue: "Mostly nocturnal or crepuscular, though some species hunt by day",
        animalBValue: "Almost entirely diurnal",
        interpretation: "Time of day is the single biggest driver of every other difference here.",
      },
      {
        id: "eyes",
        label: "Eyes and head",
        animalAValue: "Very large forward-set eyes fixed in the skull, set in a facial disc; head rotates far instead",
        animalBValue: "Eyes set more laterally, with some independent movement and a bony brow ridge",
        interpretation: "Immobile eyes are why owls turn their heads so far — the eyes cannot move in the socket.",
      },
      {
        id: "hearing",
        label: "Hearing",
        animalAValue: "Exceptional, with asymmetric ear openings in many species allowing prey to be located in total darkness",
        animalBValue: "Good, but secondary to vision",
        interpretation: "Vertical asymmetry in ear placement lets an owl pinpoint elevation as well as direction.",
      },
      {
        id: "flight-sound",
        label: "Flight sound",
        animalAValue: "Almost silent, through comb-like leading feather edges and velvety surfaces",
        animalBValue: "Audible wingbeats",
        interpretation: "Silence matters both for surprising prey and for hearing it while flying.",
      },
      {
        id: "feeding",
        label: "Feeding",
        animalAValue: "Often swallows small prey whole, casting pellets of bone and fur",
        animalBValue: "Tears prey into pieces with the bill",
        interpretation: "Pellets beneath a roost are a reliable sign of owls rather than hawks.",
      },
      {
        id: "relatedness",
        label: "Relatedness",
        animalAValue: "Order Strigiformes",
        animalBValue: "Family Accipitridae, in a separate order",
        interpretation: "Their similarity is convergent — both are shaped by predation, not by shared ancestry.",
      },
    ],
    narrative: {
      taxonomy:
        "Owls form their own order, Strigiformes, divided into the barn owls and the typical owls. Hawks belong to Accipitridae within a separate order alongside eagles, kites and Old World vultures. The two are not close relatives, and their shared features — hooked bills, taloned feet, carnivorous diet — are convergent adaptations to predation rather than inherited from a common predatory ancestor.",
      identification:
        "Head shape and posture settle it. An owl has a large rounded head with a flat facial disc and forward-set eyes, and perches upright with a compact outline. A hawk has a smaller head with laterally set eyes and a more horizontal, streamlined posture. Time of day helps, though several owls hunt in daylight and some hawks are active at dusk.",
      habitat:
        "Both occupy forest, farmland, grassland, wetland and urban areas worldwide. Because they hunt at different times, an owl and a hawk can share the same fields and woodland while rarely encountering one another, effectively dividing the same prey base between day and night. Some species pairs occupy almost identical territory on this basis.",
      diet:
        "Both take small mammals, birds, reptiles and large insects, with prey size scaling to the bird. Owls swallow small prey whole and later regurgitate a compact pellet of indigestible bone and fur, which makes their diet unusually easy to study. Hawks tear prey with the bill and produce nothing comparable.",
      behavior:
        "Owls hunt largely by sound, sitting still on a perch and listening before dropping onto prey they may never see, and their silent flight preserves that acoustic picture during the approach. Hawks hunt visually, either soaring over open ground or ambushing through cover, and rely on speed and surprise rather than silence.",
      humanRelationship:
        "Both suffered severely from organochlorine pesticides in the mid-twentieth century and both are protected across much of their range. Both consume large numbers of rodents and are valuable in agricultural landscapes, with barn owls in particular encouraged through nest box schemes. Secondary poisoning from rodenticides remains a documented threat to both groups.",
      whichIsWhich:
        "Big round head, flat face, forward-set eyes, upright posture, active at night, flying silently: owl. Smaller head, lateral eyes, horizontal posture, active by day, audible wingbeats: hawk. Pellets of bone and fur beneath a roost indicate owls; plucked feathers at a plucking post indicate a hawk.",
      sensesAdaptations:
        "Owl silent flight comes from three features working together: comb-like serrations on the leading edge of the primary feathers that break up turbulent airflow, a soft fringe on the trailing edge, and a velvety surface across the wing that absorbs remaining sound. Asymmetric ear openings in several species let the bird compare arrival times vertically as well as horizontally, giving a full three-dimensional fix.",
    },
    faqs: [
      {
        question: "Why can owls turn their heads so far?",
        answer:
          "Because their eyes cannot move. An owl's eyes are large tubular structures fixed in the skull rather than spheres that rotate in a socket, so the only way to look elsewhere is to move the whole head. Owls have far more neck vertebrae than mammals, along with vascular adaptations that keep blood flowing to the brain during extreme rotation. They cannot turn their heads all the way round.",
      },
      {
        question: "How does silent flight actually work?",
        answer:
          "Three feather features combine. Comb-like serrations along the leading edge of the outer primaries break large air vortices into smaller ones, a soft fringe on the trailing edge reduces the noise those make as they leave the wing, and a velvety surface across the wing absorbs what remains. The benefit runs both ways: prey does not hear the owl, and the owl can keep hearing the prey.",
      },
      {
        question: "Are owls and hawks related?",
        answer:
          "Not closely. Owls form their own order, Strigiformes, while hawks sit in Accipitridae within a separate order alongside eagles and kites. Their shared hooked bills, taloned feet and carnivorous diet are convergent adaptations to a predatory life rather than inherited from a common predatory ancestor. Genetic work has consistently supported keeping the groups well apart.",
      },
      {
        question: "Do owls and hawks compete?",
        answer:
          "Less than their overlapping diets suggest, because they hunt at different times. An owl and a hawk can use the same fields and woodland and take similar prey while rarely encountering one another, effectively splitting the same resource between night and day. Direct interactions do occur — larger owls will take smaller raptors, and hawks mob owls found roosting in daylight.",
      },
    ],
    commonConfusions: [
      "Assuming all owls are strictly nocturnal, when several species hunt in daylight.",
      "Believing owls can rotate their heads a full turn.",
      "Grouping owls with hawks and eagles as close relatives.",
    ],
    similarities: [
      "Both are birds of prey with hooked bills and taloned feet used to seize live prey.",
      "Both take small mammals, birds and reptiles and are valuable rodent predators.",
      "Both suffered mid-twentieth-century pesticide declines and remain at risk from rodenticides.",
      "Both defend a hunting territory, but an owl advertises the claim by voice through the dark while many hawks do it visually, in conspicuous soaring display over the ground they hold.",
    ],
    keyDifferences: [
      "Owls hunt mainly at night, while hawks hunt by day.",
      "Owls locate prey largely by hearing; hawks rely on vision.",
      "Owl flight is nearly silent, whereas hawk wingbeats are audible.",
      "Owls swallow small prey whole and cast pellets; hawks tear prey apart.",
      "Owls form their own order and are not close relatives of hawks.",
    ],
    relatedComparisonSlugs: ["eagle-vs-hawk", "eagle-vs-vulture", "raven-vs-crow"],
    relatedHubPaths: ["/animal-encyclopedia/birds", "/birds", "/animal-senses-and-adaptations"],
    sourceIds: ["cornell", "audubon", "adw"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "eagle-vs-vulture",
    animalA: { slug: "eagle", name: "Eagle" },
    animalB: { slug: "vulture", name: "Vulture" },
    title: "Eagle vs Vulture",
    metaTitle: "Eagle vs Vulture — Hunting vs Scavenging, Head & Flight",
    metaDescription:
      "Eagles hunt with powerful feet; vultures scavenge with weak feet, bare heads and exceptional soaring. Old and New World vultures are not close relatives.",
    shortAnswer:
      "The difference is what the feet are for. Eagles have thick powerful toes and long talons built to seize and kill live prey. Vultures have comparatively weak, flat feet suited to walking on carcasses rather than gripping, along with bare or sparsely feathered heads that stay cleaner when feeding inside a carcass. Vultures also soar for very long periods with minimal wingbeats.",
    primaryCategory: "birds",
    secondaryCategories: ["habitat-ecology", "taxonomy"],
    relationship: "contrasting-adaptations",
    confidence: "strong",
    searchIntent: "identification",
    whyCompare:
      "Both are large soaring birds seen at a distance in the same skies, and the hunting-versus-scavenging split explains almost every structural difference between them.",
    centralDifference:
      "Eagles have powerful gripping feet for killing live prey, while vultures have weak walking feet and bare heads suited to scavenging carcasses.",
    dimensions: [
      {
        id: "feet",
        label: "Feet",
        animalAValue: "Thick powerful toes with long curved talons for seizing and killing",
        animalBValue: "Flatter, weaker feet suited to standing and walking on carcasses",
        interpretation: "Foot structure is the clearest functional difference between hunter and scavenger.",
      },
      {
        id: "head",
        label: "Head",
        animalAValue: "Fully feathered",
        animalBValue: "Bare or sparsely feathered in most species",
        interpretation: "A bare head stays cleaner when reaching inside a carcass and is easier to keep free of bacteria.",
      },
      {
        id: "diet",
        label: "Diet",
        animalAValue: "Live prey — mammals, birds, fish and reptiles — with some scavenging",
        animalBValue: "Almost entirely carrion",
        interpretation: "Vultures are among the few vertebrates that specialise almost wholly on carrion.",
      },
      {
        id: "flight",
        label: "Flight",
        animalAValue: "Powerful soaring with more active flapping, and stooping onto prey",
        animalBValue: "Prolonged soaring on thermals with very few wingbeats",
        interpretation: "Efficient soaring lets vultures search enormous areas for a scarce, unpredictable resource.",
      },
      {
        id: "relatedness",
        label: "Relatedness",
        animalAValue: "Accipitridae",
        animalBValue: "Old World vultures are accipitrids; New World vultures are a separate lineage",
        interpretation: "Vulture is a role rather than a group — two lineages arrived at it independently.",
      },
      {
        id: "smell",
        label: "Sense of smell",
        animalAValue: "Poorly developed; hunting is visual",
        animalBValue: "Poor in Old World species, but acute in several New World species such as the turkey vulture",
        interpretation: "Smell-based carrion detection evolved only in part of the vulture assemblage.",
      },
    ],
    narrative: {
      taxonomy:
        "Old World vultures belong to Accipitridae alongside eagles, so those vultures genuinely are close relatives of eagles. New World vultures — including condors and the turkey vulture — belong to a separate lineage, and their resemblance to Old World vultures is convergent. Vulture therefore describes an ecological role that two different groups fill.",
      identification:
        "At distance, watch the flight. A vulture soars for long periods with barely a wingbeat, often holding the wings in a shallow V, and rocks slightly as it rides thermals. An eagle flies more powerfully with flatter wings and more active flapping. Closer up, a bare head means vulture and a fully feathered one means eagle.",
      habitat:
        "Both use open country, mountains and savanna where thermals form reliably, and both need large areas. Vultures are especially associated with landscapes supporting large grazing mammals, since that is where carrion is produced. Eagles range more widely into forest, coast and wetland depending on species and prey.",
      diet:
        "Eagles take live prey appropriate to their size, with some species specialised on fish, snakes or canopy mammals, and most will also scavenge opportunistically. Vultures are carrion specialists, and their digestive systems tolerate bacteria that would sicken most animals. This makes them a genuine public health service, removing carcasses before disease spreads.",
      behavior:
        "Vultures often gather at carcasses in numbers and follow one another to food, so a descending bird can draw others from a wide area. Several species have a feeding order at a carcass determined by size and bill strength. Eagles are more solitary and territorial, though some gather at concentrated food sources such as salmon runs.",
      humanRelationship:
        "Vultures have suffered catastrophic declines in South Asia and parts of Africa, driven substantially by veterinary drug residues in livestock carcasses and by deliberate poisoning, and the loss has had documented public health consequences. Eagles were persecuted and hit by pesticides, and many have recovered under protection. Both remain at risk from poisoning and habitat loss.",
      whichIsWhich:
        "Bare head, weak flat feet, soaring endlessly on a shallow V, gathering at a carcass: vulture. Feathered head, heavy gripping talons, powerful flight, hunting alone: eagle. Old World vultures are relatives of eagles, while New World vultures only look like them.",
      conservation:
        "Several vulture species are critically endangered following declines of well over ninety per cent in parts of South Asia, and African species have declined sharply through poisoning. Eagle status varies widely by species. Because these trends are severe and regionally specific, current status should be checked against the IUCN Red List.",
    },
    faqs: [
      {
        question: "Why do vultures have bare heads?",
        answer:
          "It is generally explained as a hygiene and thermoregulation adaptation. A bird that pushes its head inside a carcass would foul head feathers repeatedly, and bare skin is easier to keep clean and can be exposed to sunlight, which helps reduce bacterial load. Experimental work also indicates the bare head plays a significant role in regulating body temperature in hot open country.",
      },
      {
        question: "Are all vultures related to each other?",
        answer:
          "No, and this is one of the better examples of convergent evolution in birds. Old World vultures belong to Accipitridae, the family containing eagles and hawks. New World vultures, including condors, belong to a separate lineage entirely. Both groups arrived independently at bare heads, weak feet and soaring carrion search because the scavenging role imposes the same requirements.",
      },
      {
        question: "Can vultures smell carrion?",
        answer:
          "Some can. Several New World vultures, notably the turkey vulture, have an acute sense of smell and locate carcasses beneath forest canopy where sight would fail — an ability documented when gas companies found the birds gathering at pipeline leaks. Old World vultures rely overwhelmingly on vision, and on watching the behaviour of other vultures, since they have no comparable olfactory ability.",
      },
      {
        question: "Why do vulture declines matter?",
        answer:
          "Because they remove carcasses fast, before decomposition and disease spread. Where South Asian vulture populations collapsed following exposure to a veterinary drug in livestock carcasses, carcasses persisted far longer, feral dog numbers rose, and documented public health consequences followed. It is one of the clearest demonstrations that a scavenging guild provides a service that is only noticed once it is gone.",
      },
    ],
    commonConfusions: [
      "Assuming all vultures form one natural group, when two separate lineages fill the role.",
      "Expecting vultures to have powerful talons like eagles, when their feet are built for walking.",
      "Believing all vultures find food by smell, when only some New World species do.",
    ],
    similarities: [
      "Both are large soaring birds that use thermals to cover great distances efficiently.",
      "Both have hooked bills suited to tearing flesh.",
      "Both need large areas and both have been affected by poisoning and habitat loss.",
      "Old World vultures and eagles are genuine close relatives in the same family.",
    ],
    keyDifferences: [
      "Eagles have powerful gripping talons; vultures have weak, flat walking feet.",
      "Vultures have bare or sparsely feathered heads, unlike eagles.",
      "Vultures specialise on carrion, while eagles take live prey.",
      "Vultures soar for long periods with very few wingbeats.",
      "New World vultures are not closely related to eagles at all.",
    ],
    conservationCaveat:
      "Several vulture species have declined catastrophically in South Asia and Africa. Confirm current status per species against the IUCN Red List.",
    relatedComparisonSlugs: ["eagle-vs-hawk", "owl-vs-hawk", "raven-vs-crow"],
    relatedHubPaths: ["/animal-encyclopedia/birds", "/endangered-animals", "/birds"],
    sourceIds: ["cornell", "iucn", "audubon"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "magpie-vs-crow",
    animalA: { slug: "magpie", name: "Magpie" },
    animalB: { slug: "crow", name: "Crow" },
    title: "Magpie vs Crow",
    metaTitle: "Magpie vs Crow — Tail, Plumage, Voice & Corvid Behaviour",
    metaDescription:
      "Magpies have long graduated tails and bold pied plumage with iridescence; crows are uniformly black and compact. Two corvids compared, plus the shiny-objects myth.",
    shortAnswer:
      "Both are corvids, and appearance separates them instantly. A Eurasian magpie is boldly pied — black and white with an iridescent blue-green sheen — and has a very long graduated tail often longer than its body. A crow is uniformly black and compact with a short fanned tail. Their voices differ too: a magpie chatters harshly, while a crow gives a flat repeated caw.",
    primaryCategory: "birds",
    secondaryCategories: ["look-alikes"],
    relationship: "close-relatives",
    confidence: "strong",
    searchIntent: "identification",
    whyCompare:
      "Both are conspicuous corvids sharing gardens, farmland and towns, and the comparison is also a chance to correct the persistent myth that magpies steal shiny objects.",
    centralDifference:
      "A magpie is a pied corvid with a very long graduated tail; a crow is uniformly black and compact with a short tail.",
    dimensions: [
      {
        id: "plumage",
        label: "Plumage",
        animalAValue: "Boldly pied black and white, with iridescent blue-green and purple sheen in good light",
        animalBValue: "Uniformly black, with a variable gloss depending on light",
        interpretation: "Colour alone settles the identification, unlike most corvid pairs.",
      },
      {
        id: "tail",
        label: "Tail",
        animalAValue: "Very long and graduated, often longer than the body",
        animalBValue: "Short and fanned",
        interpretation: "Tail length is obvious in flight and in silhouette.",
      },
      {
        id: "flight",
        label: "Flight",
        animalAValue: "Undulating and somewhat laboured, with the long tail streaming behind",
        animalBValue: "Steady and direct with regular rowing wingbeats",
        interpretation: "Flight style distinguishes them at distance even when colour is hard to see.",
      },
      {
        id: "voice",
        label: "Voice",
        animalAValue: "A harsh rattling chatter",
        animalBValue: "A flat repeated caw",
        interpretation: "Both are distinctive and both work when the bird is hidden.",
      },
      {
        id: "nest",
        label: "Nest",
        animalAValue: "A large domed structure with a roof of sticks",
        animalBValue: "An open cup of sticks, usually high in a tree",
        interpretation: "The roofed nest is characteristic of magpies and unusual among corvids.",
      },
      {
        id: "sociality",
        label: "Social behaviour",
        animalAValue: "Pairs holding territory, with loose gatherings outside the breeding season",
        animalBValue: "More gregarious, feeding in flocks and roosting communally in large numbers",
        interpretation: "Crows form far larger aggregations than magpies typically do.",
      },
    ],
    narrative: {
      taxonomy:
        "Both belong to Corvidae, the crow family, which also includes ravens, jays, jackdaws, rooks and nutcrackers. Magpie is applied to several species across more than one genus, and not all of them are close relatives — Australian magpies, for instance, belong to a different family entirely and are named for a superficial resemblance.",
      identification:
        "Plumage and tail settle it immediately. A Eurasian magpie is unmistakably pied with a very long graduated tail, while a crow is uniformly black and compact. In poor light, watch the flight: magpies fly with an undulating, slightly laboured action and a streaming tail, while crows fly directly with steady rowing wingbeats.",
      habitat:
        "Both occupy farmland, woodland edge, parks, gardens and urban areas across Eurasia, and both have adapted well to human landscapes. Magpies favour habitat with scattered trees and hedgerow for nesting, while crows use a wider range including open fields, coasts and city centres, often roosting communally in very large numbers outside the breeding season.",
      diet:
        "Both are highly adaptable omnivores taking invertebrates, small vertebrates, eggs, grain, fruit, carrion and human food waste, and both cache surplus food. Predation on songbird eggs and nestlings attracts criticism, though studies generally find corvid predation is not the main driver of songbird population declines, which are more strongly linked to habitat and agricultural change.",
      behavior:
        "Magpies build a distinctive large domed nest with a stick roof, which is unusual in the family and highly visible in bare winter trees. Crows build open cup nests. Both mob predators, both are territorial in the breeding season, and both perform strongly on cognitive tasks, with magpies among the few non-mammals to have shown mirror self-recognition in published experiments.",
      humanRelationship:
        "Both have been persecuted as pests and both feature heavily in folklore, with magpies especially associated with superstition across Europe. The belief that magpies compulsively steal shiny objects has been tested experimentally and was not supported; the birds tended to avoid unfamiliar shiny items rather than take them. Both are protected in many jurisdictions.",
      whichIsWhich:
        "Black and white with a long streaming tail and an iridescent sheen: magpie. Wholly black, compact, short-tailed, in a flock: crow. If the nest is a large ball of sticks with a roof, it belongs to magpies; an open cup high in a tree is more likely a crow.",
      sensesAdaptations:
        "Both belong to a family with exceptionally large brains relative to body size and both show sophisticated behaviour, including food caching with recall of locations. The Eurasian magpie is notable for having passed a mirror mark test in published work, one of very few non-mammalian species to do so, though such results rest on small numbers of individuals.",
    },
    faqs: [
      {
        question: "Do magpies really steal shiny things?",
        answer:
          "The evidence does not support it. Experimental work presenting magpies with shiny and non-shiny objects found the birds were generally wary of unfamiliar shiny items and often avoided them, rather than being drawn to collect them. The reputation appears to be cultural, reinforced by folklore and opera, rather than a documented behaviour. Corvids do cache food, which may contribute to the impression.",
      },
      {
        question: "Are magpies and crows related?",
        answer:
          "Yes, both are corvids in the crow family alongside ravens, jays, jackdaws and rooks. They are relatives within one family rather than close kin. A complication is that magpie is applied to several species across more than one genus, and Australian magpies belong to a completely different family, having been named for a superficial resemblance to the European bird.",
      },
      {
        question: "How can I tell them apart in flight?",
        answer:
          "The tail does it. A magpie's very long graduated tail streams behind it and the flight is undulating and slightly laboured. A crow has a short fanned tail and flies directly with steady rowing wingbeats. Even in silhouette against a bright sky, where the magpie's pied plumage is hard to make out, tail length and flight action are unambiguous.",
      },
      {
        question: "Do corvids cause songbird declines?",
        answer:
          "They do take eggs and nestlings, but large-scale studies generally find corvid predation is not the main driver of songbird population trends. Habitat loss, agricultural intensification and reduced insect abundance are more strongly implicated. Corvid numbers and songbird numbers do not track each other in the way the predation explanation would predict, which is why the link is not supported.",
      },
    ],
    commonConfusions: [
      "Believing magpies collect shiny objects, which experiments do not support.",
      "Assuming Australian magpies are close relatives of European ones — they are a different family.",
      "Blaming corvids for songbird declines that studies attribute mainly to habitat change.",
    ],
    similarities: [
      "Both are corvids with large brains relative to body size and sophisticated behaviour.",
      "The black in both is glossed rather than flat — blue-green iridescence across a magpie's wing and tail, a subtler purple-green sheen over a crow — so both change appearance with the angle of the light.",
      "Both thrive around human settlement and both mob predators.",
      "Both have been persecuted as pests and both feature heavily in folklore.",
    ],
    keyDifferences: [
      "Magpies are boldly pied with iridescence; crows are uniformly black.",
      "A magpie's tail is very long and graduated, while a crow's is short and fanned.",
      "Magpies build domed nests with a stick roof; crows build open cups.",
      "Magpie flight is undulating with a streaming tail, whereas crow flight is direct.",
      "Crows form much larger flocks and communal roosts than magpies.",
    ],
    relatedComparisonSlugs: ["raven-vs-crow", "parrot-vs-crow", "eagle-vs-hawk"],
    relatedHubPaths: ["/animal-encyclopedia/birds", "/birds", "/animal-intelligence-and-behavior"],
    sourceIds: ["cornell", "audubon", "adw"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "parrot-vs-crow",
    animalA: { slug: "parrot", name: "Parrot" },
    animalB: { slug: "crow", name: "Crow" },
    title: "Parrot vs Crow",
    metaTitle: "Parrot vs Crow — Two Clever Birds, Two Different Toolkits",
    metaDescription:
      "Parrots have hooked bills, grasping zygodactyl feet and vocal mimicry; crows have straight bills and use external tools. Cognition compared without ranking.",
    shortAnswer:
      "Both are among the most cognitively capable birds, and they solve problems with different equipment. Parrots have a strong hooked bill, feet with two toes forward and two back for grasping, and remarkable vocal flexibility including mimicry. Crows have a straight bill, conventional perching feet, and are known for using and shaping external tools. They are not close relatives despite both being intelligent.",
    primaryCategory: "birds",
    secondaryCategories: ["behavior-adaptations", "pets-domestic"],
    relationship: "similar-ecological-role",
    confidence: "supported",
    searchIntent: "behavior",
    whyCompare:
      "These are the two bird groups most often described as intelligent, and comparing them shows that avian cognition took at least two independent routes.",
    centralDifference:
      "Parrots manipulate with a hooked bill and grasping feet and excel at vocal flexibility; crows manipulate with a straight bill and are notable for external tool use.",
    dimensions: [
      {
        id: "bill",
        label: "Bill",
        animalAValue: "Strong, hooked and highly mobile, used almost as a third limb",
        animalBValue: "Straight and stout, used for probing, tearing and manipulating",
        interpretation: "Bill shape determines what kind of manipulation each is good at.",
      },
      {
        id: "feet",
        label: "Feet",
        animalAValue: "Zygodactyl — two toes forward, two back — allowing objects to be held and brought to the bill",
        animalBValue: "Conventional perching arrangement with three toes forward and one back",
        interpretation: "Grasping feet let parrots hold and rotate food in a way crows cannot.",
      },
      {
        id: "vocal",
        label: "Vocal ability",
        animalAValue: "Exceptional flexibility, including accurate mimicry of other species and human speech",
        animalBValue: "Varied and capable of some mimicry, but far less flexible",
        interpretation: "Vocal learning is unusually developed in parrots even among birds that learn song.",
      },
      {
        id: "tool-use",
        label: "Tool use",
        animalAValue: "Documented in some species, including using objects to reach or grind",
        animalBValue: "Extensive in some species, including manufacturing and modifying hooked tools",
        interpretation: "New Caledonian crows manufacture tools to a standard rare outside primates.",
      },
      {
        id: "diet",
        label: "Diet",
        animalAValue: "Mainly seeds, nuts, fruit and flowers, with the bill built to crack hard shells",
        animalBValue: "Omnivorous — invertebrates, small vertebrates, eggs, grain, fruit and carrion",
        interpretation: "Crows are far more generalist, which supports their success in modified landscapes.",
      },
      {
        id: "lifespan",
        label: "Lifespan",
        animalAValue: "Long — large species can live for many decades",
        animalBValue: "Long for a bird, though generally shorter than large parrots",
        interpretation: "Longevity has real welfare consequences where parrots are kept in captivity.",
      },
    ],
    narrative: {
      taxonomy:
        "Parrots form the order Psittaciformes and crows sit within the songbird order as part of Corvidae. Genetic work has shown these two orders are more closely related to each other than either is to most other birds, and falcons sit near them too — a rearrangement that surprised ornithologists. Even so, their cognitive abilities developed largely independently.",
      identification:
        "No confusion is likely. A parrot has a short strongly hooked bill, grasping zygodactyl feet and, in most species, bright plumage. A crow is uniformly black with a straight stout bill and conventional perching feet. The comparison is about capability rather than telling two similar birds apart.",
      habitat:
        "Parrots are concentrated in tropical and subtropical regions, particularly in Australasia and South America, with a few temperate species and several introduced urban populations. Crows are found across most of the world outside the polar regions and are among the most successful birds in agricultural and urban landscapes.",
      diet:
        "Parrots are largely granivorous and frugivorous, with powerful bills for cracking hard seeds and nuts, and many are important seed dispersers and seed predators. Crows are broad omnivores taking invertebrates, small vertebrates, eggs, grain, fruit, carrion and human refuse, and that flexibility is central to how widely they have spread.",
      behavior:
        "Both show problem-solving, social learning and, in some species, planning for future needs. Crows in some populations manufacture and modify tools, shaping hooks and barbed probes to extract insects. Parrots excel at manipulation using bill and feet together, and at vocal learning, with some individuals demonstrating use of learned words in contextually appropriate ways under experimental conditions.",
      humanRelationship:
        "Parrots are heavily represented in the pet trade and many species are threatened by habitat loss and capture, with several among the most endangered birds in the world. Crows are largely unprotected in some jurisdictions and persecuted as pests, while being abundant. The contrast is stark: one group is loved and traded to its detriment, the other disliked and thriving.",
      whichIsWhich:
        "Hooked bill, grasping feet, usually colourful, often noisy with varied vocalisations: parrot. Straight bill, perching feet, uniformly black, flat repeated caw: crow. Both are exceptionally capable birds, and it is more useful to describe what each is good at than to rank them.",
      sensesAdaptations:
        "Both have unusually high densities of neurons in the forebrain — comparable in number to some primates despite much smaller brains — which is thought to underlie their cognitive performance. Parrots additionally have a vocal apparatus and neural circuitry supporting exceptional vocal learning, while several crow species show specialised motor control for tool manufacture.",
      petContext:
        "Parrots are widely kept and are among the most demanding companion animals: they are long-lived, highly social, need extensive enrichment and space, and are frequently rehomed when those needs prove unmanageable. Wild capture continues to threaten some species. Crows are wild birds and are not kept as pets, and keeping native wild birds is illegal in many jurisdictions.",
    },
    faqs: [
      {
        question: "Which is more intelligent, a parrot or a crow?",
        answer:
          "That question has no meaningful answer, and this page does not attempt one. There is no single scale of animal intelligence, and the two groups excel at different things: crows are outstanding at physical problem-solving and tool manufacture, parrots at manipulation and vocal learning. Describing what each has been shown to do, and under what test conditions, is both more accurate and more informative.",
      },
      {
        question: "Do parrots understand the words they say?",
        answer:
          "Most vocal mimicry is imitation rather than comprehension. However, controlled work with individual parrots — most famously a long-running study with an African grey — demonstrated use of learned words to label objects, colours and quantities in contextually appropriate ways. Those results came from intensive training with single birds and should not be generalised to parrots as a whole.",
      },
      {
        question: "Are parrots and crows closely related?",
        answer:
          "More closely than was long assumed, though still not close. Genetic work has placed parrots and songbirds, including corvids, nearer to each other than to most other bird orders, with falcons in the same broad grouping. Even so, their cognitive abilities appear to have developed largely independently, which makes the parallels between them a case of convergence.",
      },
      {
        question: "What kind of tools do crows use?",
        answer:
          "New Caledonian crows are the best documented, manufacturing hooked twigs and barbed probes from leaves to extract insects from crevices, and shaping them rather than simply selecting them. Some populations show local variation in tool design that appears to be transmitted socially. Other crow species use tools more opportunistically, so the ability is not uniform across the family.",
      },
    ],
    commonConfusions: [
      "Assuming vocal mimicry indicates comprehension.",
      "Ranking bird species on a single intelligence scale.",
      "Generalising results from a few intensively trained individuals to a whole species.",
    ],
    similarities: [
      "Both have unusually high forebrain neuron densities linked to cognitive performance.",
      "Both show problem-solving, social learning and, in some species, planning ahead.",
      "Both are long-lived for birds and both form lasting social bonds.",
      "Both include species that have adapted successfully to urban environments.",
    ],
    keyDifferences: [
      "Parrots have hooked bills and grasping zygodactyl feet; crows have straight bills and perching feet.",
      "Parrots excel at vocal learning and mimicry, which crows do far less.",
      "Some crow species manufacture and modify external tools to a rare standard.",
      "Crows are broad omnivores, while parrots are mainly seed and fruit eaters.",
      "Parrots are concentrated in the tropics, whereas crows are near-global.",
    ],
    petBoundary:
      "Parrots are long-lived, highly social and demanding companion animals whose needs are frequently underestimated, and wild capture continues to threaten some species. Crows are wild birds and keeping native wild birds is illegal in many jurisdictions. This page gives no care guidance — consult species-specific welfare resources and an avian veterinarian.",
    relatedComparisonSlugs: ["magpie-vs-crow", "raven-vs-crow", "owl-vs-hawk"],
    relatedHubPaths: ["/animal-intelligence-and-behavior", "/bird-care", "/birds"],
    sourceIds: ["cornell", "adw", "iucn"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "duck-vs-goose",
    animalA: { slug: "duck", name: "Duck" },
    animalB: { slug: "goose", name: "Goose" },
    title: "Duck vs Goose",
    metaTitle: "Duck vs Goose — Neck, Size, Feeding & Pair Bonds",
    metaDescription:
      "Geese are larger with long necks and graze on land; ducks are smaller with short necks and feed in water. Pair bonds, plumage and migration compared.",
    shortAnswer:
      "Geese are larger and longer-necked, graze extensively on land, and form long-term pair bonds with both parents raising the young. Ducks are smaller and shorter-necked, feed mainly in water by dabbling or diving, and in most species the female raises the brood alone. Duck plumage is often strongly different between the sexes, while geese generally look alike.",
    primaryCategory: "birds",
    secondaryCategories: ["pets-domestic", "habitat-ecology"],
    relationship: "close-relatives",
    confidence: "strong",
    searchIntent: "identification",
    whyCompare:
      "Both are familiar waterfowl sharing the same ponds and both are kept domestically, and the differences in feeding and family structure are more interesting than the size gap.",
    centralDifference:
      "Geese are larger, longer-necked land grazers with long-term pair bonds and shared parental care; ducks are smaller water feeders where the female usually raises the brood alone.",
    dimensions: [
      {
        id: "size-neck",
        label: "Size and neck",
        animalAValue: "Smaller, with a short neck",
        animalBValue: "Larger, with a long neck",
        interpretation: "Neck length supports grazing on land and reaching underwater vegetation.",
      },
      {
        id: "feeding",
        label: "Feeding",
        animalAValue: "Dabbling at the surface or diving, taking plants, invertebrates and small aquatic animals",
        animalBValue: "Grazing grass and crops on land, plus aquatic vegetation",
        interpretation: "Geese spend far more time out of water than most ducks.",
      },
      {
        id: "pair-bonds",
        label: "Pair bonds",
        animalAValue: "Usually seasonal, re-formed each year",
        animalBValue: "Long-term, frequently lasting for life",
        interpretation: "Lasting bonds go with both parents defending the brood together.",
      },
      {
        id: "parental-care",
        label: "Parental care",
        animalAValue: "Female usually raises the brood alone",
        animalBValue: "Both parents accompany and defend the goslings",
        interpretation: "Shared care is one reason geese are so conspicuously defensive around young.",
      },
      {
        id: "plumage",
        label: "Sex differences in plumage",
        animalAValue: "Often strongly different, with brightly patterned males in many species",
        animalBValue: "Generally similar between the sexes",
        interpretation: "Bright males go with seasonal bonds and female-only care; monomorphic plumage with lasting pairs.",
      },
      {
        id: "voice",
        label: "Voice",
        animalAValue: "Quacking in many species, though the range is wider than assumed",
        animalBValue: "Honking, carrying long distances, used heavily in flight",
        interpretation: "Contact calls in flight are central to how geese hold formation on migration.",
      },
    ],
    narrative: {
      taxonomy:
        "Both belong to Anatidae, the waterfowl family, along with swans. Geese form a group within it, and duck covers a much larger and looser assemblage of species across several tribes rather than a single natural group. So the pair is not a comparison of two equivalent branches; duck is the broader and less coherent of the two terms.",
      identification:
        "Neck and size do most of the work. A goose is larger with a distinctly long neck and often stands and walks on land readily. A duck is smaller and shorter-necked and generally sits lower in the water. In flight, geese fly in ordered formations with regular honking, while ducks fly faster with quicker wingbeats and less formal structure.",
      habitat:
        "Both use lakes, rivers, marshes, coasts and farmland. Geese spend substantial time grazing on grassland, crops and amenity turf, which is why they are so often found on parks and playing fields. Ducks are more strongly tied to water, using it for feeding, resting and escape, with dabbling species in shallows and diving species in deeper water.",
      diet:
        "Geese graze grass, cereal shoots and aquatic vegetation, and their digestive systems process large volumes of relatively low-quality plant material. Ducks are more varied, with dabbling species taking seeds, plants and invertebrates from the surface and shallows, and diving species taking molluscs, crustaceans and fish from deeper water.",
      behavior:
        "Geese form long-term pair bonds and both parents accompany goslings, defending them assertively, which is the source of most human-goose conflict. Most ducks pair seasonally and the female incubates and raises the brood alone. Both undertake substantial migrations in many populations, with geese famous for V formations that reduce the energetic cost of flight.",
      humanRelationship:
        "Both were domesticated, geese notably early, and both are kept for eggs, meat and down. Wild goose populations have increased substantially in several regions, creating conflict over grazing damage and fouling of amenity land. Both are hunted under regulation, and both are affected by wetland loss and avian influenza outbreaks.",
      whichIsWhich:
        "Long neck, large, grazing on grass, honking, with two adults escorting young: goose. Short neck, smaller, on the water, quacking, with one adult leading ducklings: duck. If the birds are flying in an ordered V calling continuously, they are geese.",
      petContext:
        "Both are kept domestically and have needs that are frequently underestimated: access to water, secure housing against predators, appropriate forage and, in geese, substantial grazing area. Both are long-lived and geese are notably assertive in the breeding season. This page gives no husbandry guidance — consult species-specific welfare resources and a veterinarian experienced with poultry.",
    },
    faqs: [
      {
        question: "What is the main difference between a duck and a goose?",
        answer:
          "Size, neck and lifestyle. Geese are larger with long necks and graze extensively on land, forming long-term pair bonds in which both parents raise the young. Ducks are smaller and shorter-necked, feed mainly in or on water, and in most species the female raises the brood alone. Duck plumage often differs markedly between the sexes, while geese generally look alike.",
      },
      {
        question: "Why are geese so aggressive near their young?",
        answer:
          "Because both parents invest heavily in a small brood and stay with it. Where a duck relies on concealment and the female alone, a goose pair actively defends goslings, and their size makes that defence effective. The behaviour peaks during nesting and while goslings are small. Keeping a respectful distance during that period avoids almost all conflict.",
      },
      {
        question: "Do all ducks quack?",
        answer:
          "No. Quacking is characteristic of female mallards and closely related species, and it is far from universal across ducks. Many species whistle, grunt, growl or produce mechanical sounds, and males of several species sound nothing like females. The assumption that all ducks quack comes from the mallard being the most familiar species across much of the northern hemisphere.",
      },
      {
        question: "Why do geese fly in a V?",
        answer:
          "The formation reduces the energetic cost of flight. Each bird flies slightly behind and to the side of the one ahead, gaining lift from the trailing vortex the leading bird produces, and birds rotate through the demanding lead position. The constant honking helps maintain contact and spacing. Ducks migrate too but form looser flocks, since the benefit scales with size and wing loading.",
      },
    ],
    commonConfusions: [
      "Assuming all ducks quack, which is specific to a few species.",
      "Treating duck as a single natural group, when it covers several loosely related tribes.",
      "Expecting a lone adult with young to be a goose, when that pattern indicates a duck.",
    ],
    similarities: [
      "Both are waterfowl in the family Anatidae with webbed feet and waterproof plumage.",
      "Both use lakes, rivers, marshes and coasts and both migrate in many populations.",
      "Both were domesticated and both are kept for eggs, meat and down.",
      "Both are hunted under regulation and both are affected by wetland loss and avian influenza.",
    ],
    keyDifferences: [
      "Geese are larger with long necks; ducks are smaller and shorter-necked.",
      "Geese graze extensively on land, while ducks feed mainly in water.",
      "Geese form long-term pair bonds, whereas most ducks pair seasonally.",
      "Both goose parents raise the young, while most duck broods are raised by the female alone.",
      "Duck plumage often differs strongly between the sexes; geese generally look alike.",
    ],
    relatedComparisonSlugs: ["swan-vs-goose", "magpie-vs-crow", "owl-vs-hawk"],
    relatedHubPaths: ["/birds", "/domestic-animals", "/animal-encyclopedia/birds"],
    sourceIds: ["cornell", "audubon", "adw"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "swan-vs-goose",
    animalA: { slug: "swan", name: "Swan" },
    animalB: { slug: "goose", name: "Goose" },
    title: "Swan vs Goose",
    metaTitle: "Swan vs Goose — Size, Neck Length, Feeding & Bonds",
    metaDescription:
      "Swans are much larger with very long necks used to reach underwater plants; geese are smaller land grazers. Plumage, cygnets and behaviour compared.",
    shortAnswer:
      "Swans are the largest waterfowl, with necks long enough to reach vegetation on the bed of deep water while floating, and adults of most species are white. Geese are smaller with shorter necks and graze grass on land, and most are patterned in grey, brown, black and white. Both form long-term pair bonds, and both defend young assertively.",
    primaryCategory: "birds",
    secondaryCategories: ["habitat-ecology", "look-alikes"],
    relationship: "close-relatives",
    confidence: "strong",
    searchIntent: "identification",
    whyCompare:
      "They are the two largest waterfowl on most lakes and rivers, they share habitat closely, and their differences come down to how far each can reach for food.",
    centralDifference:
      "Swans are larger with very long necks for reaching submerged vegetation in deep water; geese are smaller and graze grass on land.",
    dimensions: [
      {
        id: "size",
        label: "Size",
        animalAValue: "The largest waterfowl, with wingspans well over two metres in the biggest species",
        animalBValue: "Large but clearly smaller",
        interpretation: "Size is obvious when both are on the same water.",
      },
      {
        id: "neck",
        label: "Neck",
        animalAValue: "Very long, allowing the bird to reach the bed of deep water while floating",
        animalBValue: "Long relative to a duck, but far shorter than a swan's",
        interpretation: "Neck length determines how deep each can feed without diving.",
      },
      {
        id: "plumage",
        label: "Adult plumage",
        animalAValue: "White in most northern species, with black or black-and-white species elsewhere",
        animalBValue: "Usually patterned in grey, brown, black and white",
        interpretation: "Colour separates them instantly across most of the northern hemisphere.",
      },
      {
        id: "feeding",
        label: "Feeding",
        animalAValue: "Upending in water to reach submerged plants, with some grazing",
        animalBValue: "Grazing grass and crops on land, plus aquatic vegetation",
        interpretation: "Swans access food that geese and ducks cannot reach.",
      },
      {
        id: "young",
        label: "Young",
        animalAValue: "Cygnets, often grey-brown and sometimes carried on a parent's back",
        animalBValue: "Goslings, typically yellow-green and always following on foot or water",
        interpretation: "Back-carrying of young is characteristic of some swans and not of geese.",
      },
      {
        id: "flight",
        label: "Flight",
        animalAValue: "Heavy, with a long take-off run and audible wingbeats in some species",
        animalBValue: "Strong and agile, in ordered formations with continuous calling",
        interpretation: "Swan take-off from water requires a long run because of their mass.",
      },
    ],
    narrative: {
      taxonomy:
        "Both belong to Anatidae and sit close together within it, with swans and geese more closely related to each other than either is to most ducks. Swan covers a small number of species, and geese a larger set across two main genera. The two share long-term pair bonding and shared parental care, which sets them apart from most ducks.",
      identification:
        "Size and colour settle it across most of the northern hemisphere: an all-white waterfowl with a very long neck is a swan, while a smaller patterned bird with a shorter neck is a goose. Elsewhere, note that black swans and black-necked swans exist, so neck length and overall size are the more portable cues.",
      habitat:
        "Both use lakes, rivers, estuaries and coastal waters, and both are found on urban park water. Swans favour water deep enough to reward their reach and open enough for take-off. Geese spend far more time on grassland, crops and amenity turf, which is why they are so often encountered away from water entirely.",
      diet:
        "Swans feed mainly on submerged aquatic vegetation, upending to reach the bed of water too deep for other waterfowl, and they also graze on land. Geese graze grass, cereal shoots and aquatic plants. Where both feed on the same water body, the swan's reach gives it access to a resource the geese cannot exploit.",
      behavior:
        "Both form long-term pair bonds and both defend young assertively, with swans particularly conspicuous in driving intruders from nesting territory. Cygnets of some swan species ride on a parent's back, a behaviour geese do not show. Both are highly territorial in the breeding season and both may form large non-breeding flocks outside it.",
      humanRelationship:
        "Both are protected in many jurisdictions, and mute swans in Britain carry additional traditional legal status. Both are affected by lead poisoning from ingested fishing tackle and shot, by collision with power lines, and by wetland loss. Introduced mute swans are managed as invasive in parts of North America, while several goose populations have grown substantially and cause agricultural conflict.",
      whichIsWhich:
        "Very large, all white in most regions, with a very long neck, upending in deep water: swan. Smaller, patterned, shorter-necked, grazing on grass: goose. Both are protective parents, and both should be given space during the nesting season.",
      conservation:
        "Most northern swan and goose populations are secure or increasing, and in several cases management focuses on overabundance rather than scarcity. Some species remain of concern, particularly those with restricted ranges. Both are vulnerable to avian influenza outbreaks, and status should be checked per species against the current IUCN Red List.",
    },
    faqs: [
      {
        question: "How do I tell a swan from a goose?",
        answer:
          "Size and neck. A swan is substantially larger with a very long neck it uses to reach vegetation on the bed of deep water while floating, and in most northern species adults are entirely white. A goose is smaller with a shorter neck and is usually patterned in grey, brown, black and white, and spends far more time grazing on land.",
      },
      {
        question: "Why do swans have such long necks?",
        answer:
          "To reach food other waterfowl cannot. By upending and extending the neck, a swan can graze submerged vegetation on the bed of water far too deep for a goose or a dabbling duck, without needing to dive. It opens a food supply that is effectively unavailable to competitors, and it explains why swans favour deeper open water than geese do.",
      },
      {
        question: "Do cygnets really ride on their parents' backs?",
        answer:
          "In some swan species, yes. Young cygnets climb onto a parent's back among the folded wings, which keeps them warm, saves energy and offers protection from predators below the surface. It is characteristic of certain swans and is not a goose behaviour — goslings always follow on foot or swim alongside their parents from the outset.",
      },
      {
        question: "Are swans dangerous?",
        answer:
          "They are large and strongly territorial during nesting, and a defending adult will hiss, spread its wings and advance, which can be intimidating. Serious injury is uncommon and almost always follows someone approaching a nest or young. The reliable approach with both swans and geese is to keep distance during the breeding season and not to feed them.",
      },
    ],
    commonConfusions: [
      "Assuming all swans are white, when black and black-necked species exist.",
      "Expecting swans and geese to feed in the same way, when their reach differs greatly.",
      "Treating an intimidating display as an attack, when it is territorial warning behaviour.",
    ],
    similarities: [
      "Neither dives for its food: both reach it by extending a long neck, the goose down to the sward and the swan down to the bed of water too deep for other waterfowl.",
      "Both form long-term pair bonds and both parents care for the young.",
      "Both are strongly territorial during nesting and defend young assertively.",
      "Both are affected by lead from fishing tackle, power line collisions and wetland loss.",
    ],
    keyDifferences: [
      "Swans are substantially larger than geese.",
      "A swan's neck is long enough to reach the bed of deep water while floating.",
      "Most northern swans are all white, while geese are patterned.",
      "Geese graze extensively on land, whereas swans feed mainly in water.",
      "Cygnets of some swan species ride on a parent's back, which goslings never do.",
    ],
    relatedComparisonSlugs: ["duck-vs-goose", "magpie-vs-crow", "eagle-vs-vulture"],
    relatedHubPaths: ["/birds", "/animal-encyclopedia/birds", "/birdwatching"],
    sourceIds: ["cornell", "audubon", "iucn"],
    lastReviewed: REVIEWED,
  }),
];
