/**
 * Batch B2-11 — birds, eight pairs.
 *
 * Three long-legged waterbird pairs where neck posture in flight and bill
 * architecture do the identification work, three ratite pairs separated by toe
 * count, casque and continent, plus one waterfowl-versus-seabird pair and one
 * textbook case of nectar-feeding convergence across hemispheres.
 */
import { defineComparison, REVIEWED } from "./define.ts";

export const BATCH_B2_11 = [
  defineComparison({
    slug: "flamingo-vs-stork",
    animalA: { slug: "flamingo", name: "Flamingo" },
    animalB: { slug: "stork", name: "Stork" },
    title: "Flamingo vs Stork",
    metaTitle: "Flamingo vs Stork — Bill Kink, Colour & Filter Feeding",
    metaDescription:
      "A flamingo has a kinked bill held upside down to strain food from water; a stork grasps whole prey with a long straight bill. Colour and flight compared.",
    shortAnswer:
      "The bill settles it. A flamingo carries a thick, sharply kinked bill that it holds upside down in the water, pumping with its tongue so comb-like plates strain algae, diatoms and small invertebrates out of the mud. A stork has a long, heavy, essentially straight bill used to seize fish, frogs, insects and carrion one item at a time. Flamingo plumage is pink to crimson from pigments in the diet, while storks are built from white, black and grey. Both fly with the neck stretched out.",
    primaryCategory: "birds",
    secondaryCategories: ["look-alikes"],
    relationship: "similar-appearance",
    confidence: "representative",
    searchIntent: "identification",
    whyCompare:
      "Both are tall, pale, long-legged waterbirds that turn up in the same shallow wetlands and get lumped together in holiday photographs, yet they sit in different orders and gather food in completely different ways.",
    centralDifference:
      "A flamingo filters tiny food from water with a kinked bill held upside down; a stork grasps whole prey with a long straight bill.",
    dimensions: [
      {
        id: "bill-shape",
        label: "Bill shape",
        animalAValue: "Thick and abruptly kinked downward about halfway along, with comb-like lamellae inside",
        animalBValue: "Long, heavy and essentially straight in most species, tapering to a blunt point",
        interpretation: "The kink is unique to flamingos and is the fastest field mark at any distance.",
        caveat: "A few storks have distinctly shaped bills — openbills leave a gap between the mandibles — but none carries the flamingo kink.",
      },
      {
        id: "feeding-method",
        label: "How food is gathered",
        animalAValue: "Head inverted in shallow water, tongue pumping water through the bill so plates trap small particles",
        animalBValue: "Walks or stands and takes individual prey items with a quick strike or a probe",
        interpretation: "Filter feeding ties flamingos to a few very productive shallow waters, while grasping lets storks work marshes, floodplains, farmland and refuse tips.",
      },
      {
        id: "plumage-colour",
        label: "Plumage colour",
        animalAValue: "Pale pink through to deep crimson, with black flight feathers that show in flight",
        animalBValue: "Usually white, black, grey or a bold combination, some species with bare coloured head skin",
        interpretation: "Flamingo pink comes from carotenoid pigments taken up through food, so intensity shifts with diet, season and species.",
        caveat: "Young flamingos are grey-white and take a few years to develop adult colour.",
      },
      {
        id: "flight-silhouette",
        label: "Flight",
        animalAValue: "Neck and legs fully extended, wings beating almost continuously, often in long ragged lines",
        animalBValue: "Neck extended, but broad wings with fingered tips used to soar for long periods on thermals",
        interpretation: "A flock circling high without flapping is far more likely to be storks; flamingos are near-constant flappers.",
      },
      {
        id: "habitat",
        label: "Typical water",
        animalAValue: "Saline and alkaline lakes, coastal lagoons, salt pans and estuaries",
        animalBValue: "Freshwater marshes, floodplains, wet grassland, farmland, and for some species town rooftops",
        interpretation: "Water chemistry, not just depth, is what keeps the two apart across much of their shared regions.",
      },
      {
        id: "nest",
        label: "Nest",
        animalAValue: "A truncated cone of mud raised above the water surface, packed into dense colonies",
        animalBValue: "A bulky platform of sticks on a tree, cliff, pole, roof or chimney, often reused and enlarged for years",
        interpretation: "Nest structure alone identifies an occupied site, even with no adults present.",
      },
      {
        id: "voice",
        label: "Voice",
        animalAValue: "Goose-like honking and constant low chatter through the colony",
        animalBValue: "Adults of many species are close to voiceless; loud bill-clattering serves as the main display",
        interpretation: "A noisy pink crowd and a silent clattering rooftop bird are unlikely ever to be mistaken by ear.",
      },
    ],
    narrative: {
      taxonomy:
        "Flamingos form the family Phoenicopteridae in their own order, with six recognised living species. Storks form the family Ciconiidae, with roughly nineteen or twenty species, in a separate order. They are not close relatives. Molecular work has repeatedly recovered flamingos as sister to grebes, an alliance that surprised ornithologists because grebes are compact diving birds with lobed toes. The long legs, long neck and wading habit shared with storks therefore reflect convergence on shallow-water life rather than shared ancestry.",
      identification:
        "Start with the bill: if it bends sharply downward halfway along, the bird is a flamingo. Colour usually confirms it, though juveniles are grey-white and can puzzle. A stork shows a long, straight, heavy bill, often red, yellow or black depending on species, and a body built from clean blocks of white and black. Storks stand with a fairly upright, thickset posture; flamingos hold a thin, snaking neck that repeatedly loops down into the water.",
      habitat:
        "Flamingos concentrate on saline and alkaline lakes, coastal lagoons and salt pans, water so mineral-rich that few other birds exploit it, from East African rift lakes to Andean salars and Caribbean flats. Storks use freshwater marshes, floodplains, rice fields, wet grassland and dry savanna, and several species have moved comfortably into farmland and settlements. The two do overlap in some estuaries and shallow lakes, which is where the identification question usually arises.",
      diet:
        "A flamingo strains cyanobacteria, diatoms, small crustaceans, molluscs and insect larvae from water and soft mud, and the carotenoid pigments in that food are what make the plumage pink. A stork is a generalist carnivore, taking fish, amphibians, reptiles, insects, small mammals and, in several species, carrion and human food waste. One is a filter feeder locked to particular water bodies; the other is an opportunist that follows plough, fire and flood.",
      behavior:
        "Flamingos are intensely colonial and perform synchronised group displays — head-flagging, wing salutes and marching — before breeding, and single colonies can hold thousands of mud-cone nests. Storks are far less demonstrative, but nesting pairs greet one another with loud bill-clattering and head-throwing, and many species migrate in soaring flocks that use thermals to cross continents with little flapping. Both stand on one leg for long periods, a posture linked to heat conservation.",
      humanRelationship:
        "White storks nesting on chimneys, church towers and purpose-built platforms are among the most watched birds in Europe, and the folklore that they deliver babies has kept them culturally protected in many communities. Flamingos are a major draw for wetland tourism and appear on currency, flags and advertising across the tropics. Both groups depend on wetlands, so drainage, water abstraction, salt-pan conversion and disturbance at colonies are the shared pressures.",
      whichIsWhich:
        "Pink bird with a bent bill, head upside down in shallow salty water: flamingo. Big pale bird with a long straight bill striding through a field or standing on a rooftop nest: stork. In the air both hold the neck out, so look at colour and wing action — constant flapping and black wing tips against pink for flamingos, long soaring circles for storks.",
      sensesAdaptations:
        "A flamingo's bill is a pump and sieve in one: rows of lamellae line both mandibles while a spiny tongue drives water through them, and salt glands let the bird cope with water far too saline for most species. Storks are built for energy-cheap travel, with long broad wings that hold soaring flight for hours, and several species excrete on their own legs, a cooling behaviour known as urohidrosis that leaves the characteristic white staining.",
      lifespan:
        "Both groups are long-lived by bird standards. Ringed white storks have been recorded into their twenties and beyond, though most die far younger, with the first migration the single biggest hurdle. Flamingos in managed collections have reached ages well past forty in documented cases, and wild birds are also thought to be long-lived. All such figures come from small numbers of marked individuals and should not be read as typical.",
      conservation:
        "Status varies enormously within each group. Some flamingos have restricted high-altitude ranges and small populations, while others number in the millions; among storks, several Asian species have declined sharply while the white stork has recovered in parts of Europe with nest-platform and habitat schemes. Because these assessments are revised as new survey data arrives, treat any status statement here as a pointer rather than a fixed fact.",
      petContext:
        "Neither is a pet. Flamingos and storks appear in zoos and wetland centres, where keeping them requires flock-scale water, specialist diets, veterinary support and legal permits, and many species are additionally protected by national wildlife law. Nothing on this page is a recommendation to acquire, hold or hand-rear either bird; welfare and health decisions belong with a qualified avian veterinarian and the relevant licensing authority.",
    },
    faqs: [
      {
        question: "Why is a flamingo pink when a stork never is?",
        answer:
          "Flamingo colour comes from carotenoid pigments in the algae and small invertebrates it filters from the water, which are deposited in growing feathers. A stork eats fish, frogs, insects and carrion, which do not supply those pigments in the same way, so its plumage stays white, black or grey. Flamingo intensity varies with species, diet and season, and chicks hatch grey-white before colour develops.",
      },
      {
        question: "Why does a flamingo feed with its head upside down?",
        answer:
          "The kinked bill only works inverted. Held upside down in shallow water, the larger lower mandible sits on top and the fine lamellae inside line up so the tongue can pump water through them, trapping cyanobacteria, diatoms and tiny invertebrates. The head posture is not a quirk but the mechanical requirement of a filter that evolved to face downward while the bird walks slowly through soft mud.",
      },
      {
        question: "Are flamingos and storks closely related?",
        answer:
          "No. They belong to separate orders, and molecular studies place flamingos next to grebes rather than anywhere near storks. The shared long legs, long neck and wading habit are convergent solutions to standing in shallow water. It is a good reminder that body shape in waterbirds tracks the job the bird does far more reliably than it tracks family relationships.",
      },
      {
        question: "How do you separate a flying flamingo from a flying stork?",
        answer:
          "Both fly with the neck extended, so the tell is wing action and colour. Flamingos flap almost continuously, showing black flight feathers against pink, and travel in long wavering lines with legs trailing far past the tail. Storks hold long broad wings with clearly fingered tips and soar in circles on thermals, sometimes for many minutes without a wingbeat, in loose thermalling flocks.",
      },
      {
        question: "Do storks really nest on chimneys and flamingos on mud?",
        answer:
          "Yes, and the nests are diagnostic. White storks build bulky stick platforms on chimneys, roofs, poles and purpose-built frames, adding to them year after year until they become very heavy. Flamingos build low truncated cones of mud raised above the water surface in dense colonies, spaced roughly a pecking distance apart. Finding either structure identifies the occupant even when no adult is present.",
      },
    ],
    commonConfusions: [
      "Assuming any tall long-legged bird in a lagoon belongs to the same family as the others standing beside it.",
      "Believing captive flamingos are dyed, when the colour comes from pigments in what they eat.",
      "Expecting a stork to filter-feed because it wades in the same shallow water as flamingos.",
      "Reading a grey-white juvenile flamingo as a different species entirely.",
    ],
    similarities: [
      "Both are tall, long-legged, long-necked birds that feed in shallow water.",
      "Both fly with the neck extended rather than folded back.",
      "Both nest colonially and both depend on wetlands that are vulnerable to drainage.",
      "Both stand on one leg for long periods, a posture linked to heat conservation.",
    ],
    keyDifferences: [
      "A flamingo bill is sharply kinked and lined with filtering plates; a stork bill is long, straight and heavy.",
      "Flamingos strain tiny food from water; storks seize whole prey one item at a time.",
      "Flamingo plumage is pigmented pink by diet; storks are white, black and grey.",
      "Storks soar for long periods on thermals, while flamingos flap almost constantly.",
      "Flamingos favour saline and alkaline water; storks favour fresh water, farmland and settlements.",
      "Flamingos honk and chatter constantly; many storks are near-silent and clatter their bills instead.",
    ],
    taxonomyCaveat:
      "Both names cover families rather than single species — six living flamingos and roughly twenty storks — so the page compares typical members, and details such as bill colour and exact habitat vary between species.",
    conservationCaveat:
      "Conservation status differs sharply between species in both families and is revised as new survey data arrives; check the current IUCN Red List entry for the particular species rather than relying on a family-level statement.",
    petBoundary:
      "Neither bird is a pet. Both are held only in licensed collections with flock-scale facilities and specialist veterinary support, and both are protected by wildlife law across much of their range.",
    relatedComparisonSlugs: ["heron-vs-stork", "heron-vs-sandhill-crane", "swan-vs-pelican"],
    relatedHubPaths: ["/birds", "/animal-encyclopedia/birds", "/birdwatching"],
    sourceIds: ["cornell", "britannica", "adw"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "heron-vs-stork",
    animalA: { slug: "heron", name: "Heron" },
    animalB: { slug: "stork", name: "Stork" },
    title: "Heron vs Stork",
    metaTitle: "Heron vs Stork — Neck in Flight, Bill and Voice",
    metaDescription:
      "In flight a heron folds its neck into a tight S while a stork holds it straight ahead. Bill weight, hunting style and voice separate them on the ground.",
    shortAnswer:
      "Watch the neck in the air. A heron flies with its neck folded back into a tight S against the shoulders, a posture allowed by a specially modified vertebra, while a stork flies with the neck stretched straight ahead. On the ground a heron is slimmer, with a fine dagger bill used to strike at fish while standing motionless in shallow water. A stork is bulkier, with a much heavier bill, and walks steadily through fields and marsh. Herons croak harshly; most storks clatter their bills instead.",
    primaryCategory: "birds",
    secondaryCategories: ["look-alikes"],
    relationship: "commonly-confused",
    confidence: "supported",
    searchIntent: "identification",
    whyCompare:
      "These two families produce the classic misidentification in wetland photographs, because both are large pale long-legged birds with dagger-shaped bills, and a single flight posture separates them reliably once a viewer knows to look for it.",
    centralDifference:
      "A heron retracts its neck into an S in flight; a stork keeps it fully extended, and the rule holds right across both families.",
    dimensions: [
      {
        id: "neck-in-flight",
        label: "Neck in flight",
        animalAValue: "Folded back into a tight S so the head rests close to the shoulders",
        animalBValue: "Held straight out ahead of the body, level with the spine",
        interpretation: "This is the single most reliable separation at long range and works in pure silhouette.",
        caveat: "Herons may extend the neck briefly on take-off, when landing, or on very short low flights between perches.",
      },
      {
        id: "bill",
        label: "Bill",
        animalAValue: "Slim, straight, laterally compressed dagger, often yellowish or dark",
        animalBValue: "Long, thick and heavy, blunter through the base, often red, yellow or black",
        interpretation: "Bill weight matches technique: a rapier for spearing fish versus a pair of tongs for handling varied prey.",
      },
      {
        id: "hunting-style",
        label: "Feeding style",
        animalAValue: "Stands motionless or stalks very slowly in shallow water, then strikes at fish and amphibians",
        animalBValue: "Walks steadily across grassland, marsh and shallows, picking and probing a wide range of prey",
        interpretation: "A patient statue at the water margin is a heron; a bird pacing purposefully across a field is more likely a stork.",
      },
      {
        id: "flight-style",
        label: "Wing action",
        animalAValue: "Steady deep flapping on bowed wings, soaring only occasionally",
        animalBValue: "Long spells of soaring on thermals with broad wings and clearly fingered tips",
        interpretation: "Migrating storks cross continents largely without flapping, which herons do not do to anything like the same degree.",
      },
      {
        id: "voice",
        label: "Voice",
        animalAValue: "Harsh croaking and grating calls, most often heard when a bird is flushed",
        animalBValue: "Adults of many species are close to voiceless; loud bill-clattering replaces calling",
        interpretation: "An unseen bird that croaks from a reedbed is a heron; a rooftop bird that rattles like castanets is a stork.",
      },
      {
        id: "plumage-detail",
        label: "Plumage detail",
        animalAValue: "Fine trailing plumes on head, breast and back in breeding condition, plus patches of powder down",
        animalBValue: "Bold blocks of black and white in many species, several with bare coloured skin on head or throat",
        interpretation: "Plumes and powder down are family traits of herons; bare-skinned heads are a stork speciality.",
      },
      {
        id: "nesting",
        label: "Nest site",
        animalAValue: "Colonial nests in treetops or reedbeds, forming heronries that are reused for many years",
        animalBValue: "Bulky stick platforms on trees, cliffs, poles, roofs and chimneys, enlarged season after season",
        interpretation: "Storks tolerate and even prefer human structures far more readily than most herons.",
      },
    ],
    narrative: {
      taxonomy:
        "Herons belong to Ardeidae, a family of more than sixty species that also contains egrets and bitterns, placed in modern arrangements alongside pelicans, ibises, the hamerkop and the shoebill. Storks belong to Ciconiidae, roughly nineteen or twenty species, standing largely on their own in a separate order. The two families are not each other's closest relatives, and the resemblance is a shared answer to the problem of feeding on foot in shallow water.",
      identification:
        "Take the bird in flight if you can. A folded S-neck with the head tucked back is a heron; an outstretched neck is a stork. Perched or wading, compare build: herons look narrow and angular, with a fine compressed bill and often trailing plumes, while storks look heavy-chested with a thick bill and, in several species, bare skin on the head. Leg colour and wing pattern then narrow the species.",
      habitat:
        "Herons hold to water margins — river banks, lake edges, reedbeds, estuaries, mangroves, flooded fields and garden ponds — because their technique needs water to hunt in. Storks range far more widely from water, working dry grassland, ploughed fields, rice paddies, savanna and rubbish tips as well as marshes. The families overlap constantly at floodplains and shallow lakes, which is exactly where the confusion arises.",
      diet:
        "A heron takes mostly fish and amphibians, with insects, crustaceans, reptiles, small mammals and nestlings added opportunistically, and swallows prey whole after a rapid stab or grab. Storks are broader still, and several species take substantial carrion or forage at landfill. The heron's diet is tied to what lives in water; the stork's diet is tied to what a walking bird can find across an open landscape.",
      behavior:
        "Herons hunt alone and defend feeding spots, then gather to nest in noisy colonies where neighbours squabble constantly. Storks are more sociable when feeding, following ploughs and grass fires in loose parties, and their pair displays centre on bill-clattering and head-throwing at the nest. Both families migrate in many populations, but storks organise migration around thermal soaring and so funnel through narrow land crossings.",
      humanRelationship:
        "Storks have the closer everyday relationship with people: white storks nest on buildings, are welcomed as a good omen and have been helped back into parts of their former range with platforms and habitat work. Herons are more often noticed at garden ponds and fisheries, where they attract mixed feelings. Several Asian storks and a number of heron species face serious pressure from wetland loss, hunting and disturbance at colonies.",
      whichIsWhich:
        "If the neck is folded back in flight, it is a heron, and no amount of size or colour overrides that. If the neck is straight out and the bird is circling on motionless wings, it is a stork. On foot, a motionless bird poised at the water's edge is a heron; a bird striding across dry grass with a heavy bill is a stork.",
      sensesAdaptations:
        "Herons have an elongated sixth cervical vertebra and associated musculature that lets the neck coil and then fire straight, powering the strike, and the same mechanism folds the neck away in flight. They also carry powder-down patches whose crumbling feathers help clean fish slime from plumage. Storks are built instead for economical travel, with long broad wings for soaring, and several cool themselves by excreting onto their own legs.",
      lifespan:
        "Ringing data give both families potential lifespans well into the twenties, with individual white storks recorded beyond that, but averages are far lower because mortality in the first year is heavy for both. Migration, cold snaps, collisions with power lines and drought at stopover sites all take a toll. Any single long-lived record describes an exceptional individual rather than a typical bird.",
      petContext:
        "Neither family is kept as a pet. Both appear in zoos and rehabilitation centres, where housing, diet and handling are governed by permits and professional protocols, and both are protected by wildlife legislation across much of their range. Injured birds should be reported to a licensed rehabilitator or wildlife authority rather than taken in, and any treatment decision belongs with a qualified veterinarian.",
    },
    faqs: [
      {
        question: "Is a great blue heron a kind of stork?",
        answer:
          "No. Great blue heron is an Ardeidae species and storks are a separate family in their own order. In North America the confusion is common because both are tall grey-and-white waders, but the great blue folds its neck into an S in flight, which storks never do. North America has only one regularly occurring stork, the wood stork, which shows a bare dark head and a heavy decurved bill.",
      },
      {
        question: "Why can a heron fold its neck when a stork cannot?",
        answer:
          "Herons have a modified sixth cervical vertebra and matching muscle arrangement that lets the neck kink into a tight coil. The same anatomy that snaps the head forward when striking at a fish also allows the neck to be stowed against the shoulders in flight. Storks lack that specialisation, so their neck stays extended and their head leads the body throughout the flight.",
      },
      {
        question: "Do storks make any sound at all?",
        answer:
          "Adults of many stork species are effectively voiceless, producing little more than hisses. Their main sound is bill-clattering, a loud rapid rattle made by snapping the mandibles together, usually with the head thrown back over the body during greeting displays at the nest. Chicks are noisier and beg vocally. Herons, by contrast, croak, grate and squawk, especially at colonies and when flushed.",
      },
      {
        question: "Are egrets herons or storks?",
        answer:
          "Egrets are herons. The name is a plumage label rather than a taxonomic one, historically applied to white members of Ardeidae valued for their breeding plumes. Egrets fold the neck in flight exactly like other herons, which is the quickest way to check a distant white bird that might otherwise be taken for a stork, spoonbill or ibis.",
      },
      {
        question: "Which of the two is more likely to be circling high overhead?",
        answer:
          "A stork. Storks migrate by soaring on thermals with long broad wings, and flocks can spiral for many minutes without a wingbeat, concentrating at narrow land crossings on migration. Herons do soar occasionally, but rarely in large thermalling flocks, and they normally travel with steady deep flapping on bowed wings and the neck kept firmly tucked back.",
      },
    ],
    commonConfusions: [
      "Calling any tall grey wader a crane or a stork without checking the neck in flight.",
      "Treating egrets as a separate family from herons rather than as white members of the same one.",
      "Assuming a silent bird cannot be a stork, when adults of many stork species barely vocalise at all.",
      "Expecting bill colour to identify the family, when it varies widely between species in both.",
    ],
    similarities: [
      "Both are large, long-legged, long-billed waterbirds that feed on foot.",
      "Both nest in bulky stick structures and both include colonial nesters.",
      "Both swallow prey whole rather than tearing it apart.",
      "Both include strongly migratory populations and both depend on wetlands.",
    ],
    keyDifferences: [
      "Herons fold the neck into an S in flight; storks fly with the neck extended.",
      "A heron bill is a slim compressed dagger; a stork bill is thick and heavy.",
      "Herons ambush from the water margin; storks walk and forage across open land.",
      "Storks soar on thermals for long periods, while herons mostly flap.",
      "Herons croak and squawk; many adult storks are near-silent and clatter their bills.",
      "Storks nest readily on human structures, which most herons do not.",
    ],
    taxonomyCaveat:
      "Heron covers a family of more than sixty species including egrets and bitterns, and stork covers roughly twenty species, so the comparison describes family-level traits rather than two fixed birds.",
    conservationCaveat:
      "Several Asian storks and a number of heron species face serious declines while others are stable or increasing; consult the current IUCN Red List assessment for the species in question rather than generalising from the family.",
    petBoundary:
      "Herons and storks are wild protected birds, not pets. Injured individuals are a matter for a licensed wildlife rehabilitator or wildlife authority, and any care decision belongs with a qualified veterinarian.",
    relatedComparisonSlugs: ["heron-vs-sandhill-crane", "flamingo-vs-stork", "eagle-vs-vulture"],
    relatedHubPaths: ["/birds", "/birdwatching", "/animal-encyclopedia/birds"],
    sourceIds: ["cornell", "audubon", "adw"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "heron-vs-sandhill-crane",
    animalA: { slug: "heron", name: "Heron" },
    animalB: { slug: "sandhill-crane", name: "Sandhill Crane" },
    title: "Heron vs Sandhill Crane",
    metaTitle: "Heron vs Sandhill Crane — Neck, Bustle and Bugling",
    metaDescription:
      "A sandhill crane flies with its neck straight out, bugles loudly and grazes dry fields; a heron folds its neck, croaks and hunts alone at the water edge.",
    shortAnswer:
      "A sandhill crane is not a grey heron, and three features separate them. In the air the crane carries its neck straight out and often circles in noisy flocks, while a heron folds its neck into an S and flaps steadily on its own. Standing, the crane shows a shaggy bustle of drooping feathers over the tail and bare red skin on the crown. The crane's rolling bugle carries for kilometres, whereas a heron gives a harsh croak. Cranes graze stubble and meadow; herons hunt shallow water.",
    primaryCategory: "birds",
    secondaryCategories: ["look-alikes"],
    relationship: "commonly-confused",
    confidence: "supported",
    searchIntent: "identification",
    whyCompare:
      "Across North America the great blue heron and the sandhill crane are reported interchangeably by casual observers, yet they belong to different orders, feed in different places and behave so differently that a few seconds of watching resolves it.",
    centralDifference:
      "A sandhill crane extends its neck in flight, wears a feathered bustle over the tail and bugles; a heron folds its neck, carries fine plumes and croaks.",
    dimensions: [
      {
        id: "neck-in-flight",
        label: "Neck in flight",
        animalAValue: "Folded into a tight S with the head drawn back onto the shoulders",
        animalBValue: "Stretched fully forward, with legs trailing well beyond the tail",
        interpretation: "One glance at a flying bird decides the question before any plumage detail is visible.",
        caveat: "Herons may briefly extend the neck as they take off or drop into a marsh, so judge sustained flight.",
      },
      {
        id: "rear-profile",
        label: "Rear profile at rest",
        animalAValue: "Sleek rear end, with fine trailing back plumes in breeding condition",
        animalBValue: "A shaggy bustle of drooping inner wing feathers curving over the tail",
        interpretation: "The bustle is a crane signature and gives a standing bird a distinctly bulky, ruffled back end.",
      },
      {
        id: "head",
        label: "Head and bare skin",
        animalAValue: "Fully feathered head, usually with a dark crown stripe or crest and a long compressed bill",
        animalBValue: "Bare red skin across the forecrown in adults, with a shorter, straighter, heavier bill",
        interpretation: "Red skin on the crown is a reliable adult crane mark and is visible through binoculars at distance.",
        caveat: "Young cranes lack the red crown and show rusty-brown feathering on the head and body.",
      },
      {
        id: "voice",
        label: "Voice",
        animalAValue: "A harsh grating croak, usually a single note as the bird flushes",
        animalBValue: "A loud rolling bugle or rattle that carries a long way across open country",
        interpretation: "Cranes are among the most far-carrying birds in an open landscape; herons are simply gruff.",
      },
      {
        id: "feeding-habitat",
        label: "Where it feeds",
        animalAValue: "Shallow margins of ponds, rivers, marshes and estuaries, striking at prey in water",
        animalBValue: "Grain stubble, wet meadow, prairie, bog and marsh edge, walking and probing the ground",
        interpretation: "A tall grey bird striding across a dry harvested field is far more likely to be a crane.",
      },
      {
        id: "diet",
        label: "Main diet",
        animalAValue: "Fish and amphibians, plus insects, crustaceans, reptiles and small mammals",
        animalBValue: "Largely plant material — waste grain, tubers, roots and berries — with invertebrates and small vertebrates added",
        interpretation: "The crane is much the more vegetarian of the two, which is why farmland matters so much to it.",
      },
      {
        id: "sociality",
        label: "Company",
        animalAValue: "Usually forages alone and defends a feeding spot, although it nests in colonies",
        animalBValue: "Highly social outside the breeding season, staging in flocks of many thousands at traditional stopovers",
        interpretation: "Enormous noisy flocks in open country point to cranes, not herons.",
      },
    ],
    narrative: {
      taxonomy:
        "Sandhill crane is a single species, Antigone canadensis, in the family Gruidae and the order Gruiformes, whose other members include rails, crakes and the limpkin. Heron is a family name, Ardeidae, covering more than sixty species of herons, egrets and bitterns in an order that also holds pelicans and ibises. Cranes and herons are therefore not close relatives at all; the shared tall grey wading build is convergent, and their nearest kin lie in completely different directions.",
      identification:
        "In flight, neck posture ends it: extended for the crane, folded for the heron. On the ground, look for the crane's shaggy bustle over the tail, its bare red crown and its shorter, heavier bill, against the heron's sleek profile, feathered head and long dagger. Cranes often walk in loose groups across open ground; a heron more often stands alone and motionless with the neck coiled ready to strike.",
      habitat:
        "Sandhill cranes breed in bogs, wet meadows, tundra and prairie marsh, then move to agricultural landscapes and river roosts for winter, with famous staging concentrations on shallow river channels in central North America. Herons live wherever there is fishable shallow water, from tidal creeks and reservoirs to ditches and garden ponds. The two do meet at marsh edges, but cranes spend far more of the day well away from open water.",
      diet:
        "The crane's bill is a digging and picking tool, and its diet leans heavily on plant matter: waste corn and other grain, tubers, roots, seeds and berries, supplemented with insects, snails, amphibians, small mammals and occasionally eggs. A heron is a predator first, taking fish and amphibians with a fast strike and swallowing them whole. Diet explains the habitat split more clearly than size or plumage do.",
      behavior:
        "Cranes are famously demonstrative, performing leaping, bowing, wing-spreading dances that occur outside courtship as well as within it, and pairs give unison calls together. They migrate in large flocks that soar high on thermals while bugling. Herons hunt alone with long motionless waits, defend feeding territories from other herons, and reserve their noise for the breeding colony, where nesting neighbours squabble almost continuously.",
      humanRelationship:
        "Sandhill cranes are a major wildlife-watching draw, and river staging sites support local economies built around spring viewing; they also feed on waste grain, which creates friction where they use sprouting crops. Herons attract attention at fish ponds and hatcheries. Both benefit from wetland protection, and both are covered by migratory bird legislation in North America that makes disturbance and taking illegal without a permit.",
      whichIsWhich:
        "Neck folded in flight, standing alone at the water's edge, harsh croak: heron. Neck stretched out in flight, bare red crown, shaggy bustle over the tail, rolling bugle from a flock in a stubble field: sandhill crane. If the bird is walking steadily across dry ground well away from water, cranes should be your first thought rather than herons.",
      sensesAdaptations:
        "A crane's windpipe is greatly elongated and coils within the breastbone, which is what gives the call its low, resonant, far-carrying quality — an anatomical amplifier rather than sheer lung power. Herons instead specialise in the strike, using a modified neck vertebra to coil and release the head at speed, and some species hunt in low light, with night-herons foraging largely after dusk.",
      lifespan:
        "Cranes are long-lived birds and marked individuals have been recorded well into their twenties, with captive birds reported older still; pairs are long-term and slow to replace losses, so adult survival matters a great deal to populations. Herons can also reach their twenties in exceptional cases, but average lifespan is much shorter because first-year mortality is high. Treat both sets of figures as maxima, not norms.",
      conservation:
        "The sandhill crane as a species is numerous and widespread across its migratory range, but that headline hides small non-migratory populations, including resident forms in the southeastern United States and Cuba, that are far more vulnerable to habitat loss. Heron species range from abundant to seriously threatened. Population assessments are revised regularly, so check the current listing for the particular population rather than assuming.",
      petContext:
        "Neither bird is a pet. Cranes and herons are held only in zoos, research collections and licensed rehabilitation facilities, where they need large enclosures, specialist diets and permits, and in North America both are protected under migratory bird law. If you find an injured bird, contact a licensed rehabilitator or wildlife authority; medical decisions belong with a qualified veterinarian.",
    },
    faqs: [
      {
        question: "Is a sandhill crane just a grey heron with a different name?",
        answer:
          "No. They are in different orders. The sandhill crane belongs to Gruidae, whose closest relatives include rails and the limpkin, while herons belong to Ardeidae alongside egrets, bitterns and, more distantly, pelicans. Both are tall grey waders because both make a living walking on long legs, but the crane extends its neck in flight and the heron folds it, which no amount of size overlap changes.",
      },
      {
        question: "Why do sandhill cranes look rusty in spring?",
        answer:
          "Many sandhill cranes preen with mud rich in iron compounds, which stains the grey feathers a rusty brown, especially on the back and wing coverts. The effect is strongest on breeding birds using iron-rich wetlands and fades as feathers are replaced. Juveniles are also naturally washed with rusty brown. A heron never acquires this colour, so a rust-stained grey bird is a strong crane clue.",
      },
      {
        question: "What is the shaggy bump over a sandhill crane's tail?",
        answer:
          "It is the bustle, formed by long drooping inner wing feathers called tertials that arch over the tail when the wings are folded. It gives a standing crane a bulky, ruffled rear that no heron shows. Herons instead carry fine trailing plumes on the back and breast in breeding condition, which lie flat and look wispy rather than forming a rounded mass.",
      },
      {
        question: "Which bird is making the rolling bugle over the marsh?",
        answer:
          "That is a sandhill crane. Its windpipe is elongated and coiled inside the breastbone, giving a low, resonant, rattling bugle that carries for a long distance across open country, and paired birds often call in a coordinated duet. A heron's flight call is a short harsh croak or squawk, gruff rather than musical, and rarely audible more than a few hundred metres away.",
      },
      {
        question: "Do herons and sandhill cranes feed in the same places?",
        answer:
          "They overlap at marsh edges, but their main feeding grounds differ. Cranes spend much of the day walking harvested fields, wet meadows and prairie, digging tubers and picking waste grain, and roost in shallow water at night. Herons stay close to fishable water, standing motionless at pond margins, creeks and estuaries. A tall grey bird in dry stubble is far more likely to be a crane.",
      },
    ],
    commonConfusions: [
      "Reporting any tall grey wader in North America as a heron without checking neck posture in flight.",
      "Assuming the rusty colour on a spring crane means it is a different species.",
      "Thinking cranes hunt fish like herons, when most of their diet is plant material.",
      "Treating sandhill crane abundance as proof that every crane population is secure.",
    ],
    similarities: [
      "Both are tall grey long-legged birds that feed by walking rather than swimming.",
      "Both include strongly migratory populations that gather at traditional sites.",
      "Both swallow food whole and take a mix of animal and, in the crane, plant material.",
      "Both are protected under migratory bird legislation in North America.",
    ],
    keyDifferences: [
      "Cranes fly with the neck extended; herons fly with the neck folded into an S.",
      "A crane shows a bustle of drooping feathers over the tail; a heron does not.",
      "Adult cranes have bare red skin on the crown; heron heads are fully feathered.",
      "Cranes eat mostly plant material; herons are predators of fish and amphibians.",
      "Cranes bugle far across open country, while herons give short harsh croaks.",
      "Cranes gather in very large flocks; herons usually feed alone.",
    ],
    taxonomyCaveat:
      "Sandhill crane is one species, but heron is a family name covering more than sixty species including egrets and bitterns, so the heron column describes shared family traits rather than a single bird.",
    conservationCaveat:
      "Overall sandhill crane numbers are large, yet small resident populations are assessed very differently; check the current IUCN Red List and national listings for the specific population before drawing conclusions.",
    petBoundary:
      "Cranes and herons are wild protected birds, never pets. Both are held only under permit in professional facilities, and injured birds are a matter for licensed rehabilitators and qualified veterinarians.",
    relatedComparisonSlugs: ["heron-vs-stork", "flamingo-vs-stork", "swan-vs-goose"],
    relatedHubPaths: ["/birdwatching", "/birds", "/wildlife"],
    sourceIds: ["cornell", "audubon", "adw"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "ostrich-vs-emu",
    animalA: { slug: "ostrich", name: "Ostrich" },
    animalB: { slug: "emu", name: "Emu" },
    title: "Ostrich vs Emu",
    metaTitle: "Ostrich vs Emu — Toes, Size, Range and Plumage",
    metaDescription:
      "An ostrich has two toes, a bare neck and stands taller than any other bird; an emu has three toes and shaggy hair-like brown plumage. Africa versus Australia.",
    shortAnswer:
      "Count the toes. An ostrich is the only living bird with just two toes on each foot, while an emu has three. Size follows the same order: adult ostriches commonly stand somewhere around 2.1 to 2.8 metres, emus roughly 1.5 to 1.9 metres, with sex and condition shifting both. An ostrich has a bare neck and thighs, and breeding males are black with white wing and tail plumes. An emu is uniformly shaggy grey-brown. Ostriches are African, emus only Australian.",
    primaryCategory: "birds",
    secondaryCategories: [],
    relationship: "close-relatives",
    confidence: "strong",
    searchIntent: "identification",
    whyCompare:
      "They are the two flightless birds most people can name, they are farmed side by side outside their native ranges, and a single foot character separates them absolutely even when size and posture look similar in a photograph.",
    centralDifference:
      "An ostrich has two toes, bare neck and thigh skin and is the tallest living bird; an emu has three toes and shaggy hair-like brown plumage.",
    dimensions: [
      {
        id: "toes",
        label: "Toes per foot",
        animalAValue: "Two, a large weight-bearing inner toe and a smaller outer one",
        animalBValue: "Three, all forward-facing",
        interpretation: "No other living bird has two toes, so a clear view of the foot is conclusive.",
      },
      {
        id: "size",
        label: "Height and mass",
        animalAValue: "Commonly around 2.1 to 2.8 metres tall and roughly 100 to 150 kg in adults",
        animalBValue: "Commonly around 1.5 to 1.9 metres tall and roughly 30 to 55 kg in adults",
        interpretation: "An ostrich looks over the roof of a car; an emu looks a tall person in the eye.",
        caveat: "Figures vary with sex, subspecies, population and captive conditions, and males and females differ in both species.",
      },
      {
        id: "plumage",
        label: "Feather texture and colour",
        animalAValue: "Loose plumes; breeding males black with white wing and tail plumes, females and immatures grey-brown",
        animalBValue: "Double-shafted shaggy grey-brown feathers that hang like coarse hair over the whole body",
        interpretation: "Emu feathers grow two vanes from one shaft, which is why the bird looks furred rather than feathered.",
      },
      {
        id: "neck-and-head",
        label: "Neck and head",
        animalAValue: "Long bare neck of pink, grey or bluish skin depending on population, with a small flat head and very large eyes",
        animalBValue: "Neck sparsely feathered with bluish skin showing through, head small and dull-coloured",
        interpretation: "Bare skin the colour of the population is an ostrich trait; an emu neck looks scruffy rather than naked.",
      },
      {
        id: "range",
        label: "Native range",
        animalAValue: "Africa, in savanna, semi-desert and open scrub, with a separate species in the Horn of Africa",
        animalBValue: "Mainland Australia, across woodland, scrub, grassland and the semi-arid interior",
        interpretation: "Outside farms and parks the ranges never meet, so location alone usually answers the question.",
      },
      {
        id: "breeding-roles",
        label: "Who incubates",
        animalAValue: "A communal nest scraped by the male, with a dominant hen and the male sharing incubation between them",
        animalBValue: "The male incubates alone for around eight weeks, eating and drinking very little, then rears the chicks",
        interpretation: "Both are male-heavy systems, but only the emu leaves the job entirely to one bird.",
      },
      {
        id: "voice",
        label: "Loudest sound",
        animalAValue: "Deep booming produced by males, sometimes mistaken at distance for a large mammal",
        animalBValue: "A low resonant drumming and booming produced mainly by females using an inflatable neck pouch",
        interpretation: "The sexes producing the signature sound are reversed between the two species.",
      },
    ],
    narrative: {
      taxonomy:
        "Both are palaeognaths, the ancient branch of birds usually called ratites, but they sit in different orders: ostriches in Struthioniformes and emus in Casuariiformes, where their closest living relatives are the cassowaries. Molecular work generally recovers ostriches as the earliest-diverging living palaeognath lineage, and places the flying tinamous within the group, which implies flight was lost more than once rather than in a single ancestor.",
      identification:
        "Look at the feet first, then the skin. Two toes means ostrich, three means emu, and no other living bird shares the ostrich condition. An ostrich also shows a long bare neck and bare thighs, with breeding males in striking black and white. An emu has no bare thighs, its neck is only sparsely feathered, and its plumage hangs in coarse grey-brown strands that read as hair from a distance.",
      habitat:
        "Ostriches occupy African savanna, open scrub, semi-desert and short grassland where long sightlines suit a bird that relies on vision. Emus range across most of mainland Australia except dense rainforest and heavily built-up areas, moving nomadically over long distances in response to rainfall and the food it produces. Both tolerate arid conditions, but the emu's habit of tracking rain across a continent has no close ostrich equivalent.",
      diet:
        "Both are broad herbivores that also take invertebrates and small animals opportunistically. Ostriches eat seeds, shoots, leaves, flowers and succulents, plus insects and occasional small vertebrates, and swallow grit and stones that help grind food in the gizzard. Emus take fruits, seeds, flowers, young shoots and large numbers of insects, and their long movements make them significant seed dispersers across Australian landscapes.",
      behavior:
        "Ostriches live in loose groups that shift in size with season, rely heavily on eyesight to detect disturbance across open ground, and use their wings for balance and steering when running as well as for display. Emus are more often seen singly, in pairs or in loose aggregations at food and water. In both species the male takes the leading parental role, and emu males famously go without much food or drink through incubation.",
      humanRelationship:
        "Both are farmed well outside their native ranges for meat, leather, feathers and oil, and ostrich plumes drove an intense international trade in the early twentieth century that collapsed with fashion. The emu is a national symbol in Australia, appearing on the coat of arms, and has a long history of conflict with cereal farming, including a widely reported government culling operation in 1932 that failed conspicuously.",
      whichIsWhich:
        "Two toes, bare neck, enormous, black-and-white male, African: ostrich. Three toes, shaggy brown coat of hair-like feathers, mid-sized, Australian: emu. If you are looking at a farm bird outside either continent and cannot see the feet, use plumage texture, because the emu's double-shafted feathers never look like the ostrich's loose plumes. Neck skin helps too: an ostrich neck is genuinely naked, while an emu's is merely thinly covered.",
      sensesAdaptations:
        "Ostriches have exceptionally large eyes for a land vertebrate and a visual system suited to spotting movement far across open country, and the reduced two-toed foot is widely interpreted as a running specialisation, with sustained speeds among the highest recorded for any bird. Emus conserve water and heat with a nasal system that recovers moisture from exhaled air, and their double feathers insulate against both heat and cold.",
      lifespan:
        "Ostriches are commonly reported to live into their thirties or forties, with farmed birds monitored over long productive lives, while emus are usually cited at around ten to twenty years in the wild and longer in captivity. Both estimates rest on managed populations far more than on marked wild birds, and predation on eggs and chicks means most individuals in either species never reach adulthood.",
      petContext:
        "These are large livestock or exhibit birds, not pets. Keeping either normally requires secure land, specialist fencing, veterinary access and, in many jurisdictions, licences and welfare compliance, and both can be dangerous to handle inexpertly. Nothing here is a recommendation to acquire an ostrich or emu; anyone considering it should consult the relevant agricultural authority and a veterinarian experienced with ratites.",
    },
    faqs: [
      {
        question: "How many toes does an ostrich have compared with an emu?",
        answer:
          "An ostrich has two toes on each foot, a large inner one that carries most of the weight and a smaller outer one, and it is the only living bird built that way. An emu has three forward-facing toes, as do cassowaries and rheas. Because no other bird shares the ostrich condition, a clear view of a footprint or foot is enough to settle the identification on its own.",
      },
      {
        question: "Which is taller, an ostrich or an emu?",
        answer:
          "The ostrich, by a clear margin. Adults commonly stand around 2.1 to 2.8 metres and weigh roughly 100 to 150 kilograms, making it the tallest and heaviest living bird. Emus usually reach about 1.5 to 1.9 metres and 30 to 55 kilograms, second among living birds by height. All these figures shift with sex, population and captive conditions and should be read as typical ranges.",
      },
      {
        question: "Are ostriches and emus close relatives?",
        answer:
          "They are related as palaeognaths, the ancient lineage often called ratites, but they sit in different orders and are not each other's nearest kin. The emu's closest living relatives are the cassowaries. Molecular studies generally place ostriches as the earliest branch among living palaeognaths and put the flying tinamous inside the group, implying that flightlessness arose more than once.",
      },
      {
        question: "Which parent incubates the eggs in each species?",
        answer:
          "Male emus do it alone, sitting for roughly eight weeks and eating and drinking very little through the period, then leading the striped chicks for months afterwards. Ostriches share the work: the male scrapes a communal nest that several hens lay into, and he and the dominant hen take turns, with the male generally covering the night shift and the hen the day.",
      },
      {
        question: "Do ostriches really bury their heads in the sand?",
        answer:
          "No. The image appears to come from the bird lowering its head to the ground, either to turn eggs in a shallow nest scrape or to lie flat with the neck stretched out on the ground, which at distance can look as if the head has vanished. An ostrich relies on excellent long-distance vision, so hiding its own eyes would be the opposite of useful.",
      },
    ],
    commonConfusions: [
      "Calling any large flightless bird an ostrich regardless of continent or toe count.",
      "Believing ostriches bury their heads in sand.",
      "Assuming ratites form a single tidy group that lost flight once, when tinamous complicate the picture.",
      "Reading a female or immature ostrich as an emu because it is grey-brown rather than black and white.",
    ],
    similarities: [
      "Both are large flightless palaeognaths with strong legs and reduced wings.",
      "Both are broad herbivores that also take invertebrates and swallow grit.",
      "In both, the male takes the leading role in incubation and chick rearing.",
      "Both are farmed internationally for meat, leather and other products.",
    ],
    keyDifferences: [
      "Ostriches have two toes; emus have three.",
      "Ostriches are substantially taller and heavier than emus.",
      "An ostrich has a bare neck and thighs; an emu is shaggily feathered with a sparsely feathered neck.",
      "Breeding male ostriches are black and white; emus of both sexes are grey-brown.",
      "Ostriches are African, emus exclusively Australian in the wild.",
      "Male ostriches boom, while in emus the deep drumming comes mainly from females.",
    ],
    safetyBoundary:
      "Both are powerful birds that can injure people, particularly around nests and chicks or when confined. Keep well back at farms, parks and reserves, follow the operator's instructions, and report a loose or distressed bird to the site staff or local wildlife authority rather than approaching it.",
    petBoundary:
      "Ostriches and emus are farmed livestock, not pets. Suitability depends on land, secure infrastructure, local law, welfare capacity and a very long-term commitment, and all health and husbandry decisions belong with a veterinarian experienced in ratites.",
    relatedComparisonSlugs: ["emu-vs-cassowary", "ostrich-vs-rhea", "penguin-vs-albatross"],
    relatedHubPaths: ["/animal-encyclopedia/birds", "/birds", "/animal-taxonomy/vertebrates"],
    sourceIds: ["adw", "britannica", "smithsonian"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "emu-vs-cassowary",
    animalA: { slug: "emu", name: "Emu" },
    animalB: { slug: "cassowary", name: "Cassowary" },
    title: "Emu vs Cassowary",
    metaTitle: "Emu vs Cassowary — Casque, Habitat and Plumage",
    metaDescription:
      "A cassowary wears a tall keratin casque and vivid blue neck skin in rainforest; an emu has no casque, shaggy brown plumage and roams open Australian country.",
    shortAnswer:
      "The head answers it. A cassowary carries a tall helmet-like casque of keratin over a bony core, with vivid bare blue and red skin on the neck and, in most species, hanging wattles. An emu has no casque, a small plain head and a bluish neck showing through thin feathering. Adult cassowary plumage is glossy black and coarse; emu plumage is shaggy grey-brown. Cassowaries are rainforest birds of New Guinea and far north Queensland, while emus range across open Australian country.",
    primaryCategory: "birds",
    secondaryCategories: [],
    relationship: "close-relatives",
    confidence: "supported",
    searchIntent: "identification",
    whyCompare:
      "These are the two Australasian ratites, close relatives that share a continent's edge, yet one is a nomad of dry open country and the other a sedentary rainforest fruit specialist, and the head furniture separates them instantly.",
    centralDifference:
      "A cassowary has a keratin casque, glossy black plumage and rainforest habits; an emu is casque-free, grey-brown and shaggy, and lives in open country.",
    dimensions: [
      {
        id: "casque",
        label: "Casque",
        animalAValue: "Absent; the head is small, rounded and unadorned",
        animalBValue: "A tall keratin casque over a bony and spongy core, shape varying by species and individual",
        interpretation: "The casque is the fastest separation and is visible in silhouette through dense vegetation.",
        caveat: "Casque size grows with age, so young cassowaries show only a low ridge.",
      },
      {
        id: "bare-skin",
        label: "Bare skin colour",
        animalAValue: "Dull bluish grey skin showing through sparse neck feathering",
        animalBValue: "Bright blue neck with red or orange patches, and one or two hanging wattles in most species",
        interpretation: "Cassowary colour is a display feature; the emu's exposed skin is simply skin.",
      },
      {
        id: "plumage",
        label: "Plumage",
        animalAValue: "Shaggy grey-brown double-shafted feathers that hang like coarse hair",
        animalBValue: "Glossy black, stiff and coarse in adults, resembling a dense curtain of quills",
        interpretation: "Adult colour alone separates them even when the head is hidden.",
        caveat: "Cassowary chicks are striped and juveniles brown, so age matters when using colour.",
      },
      {
        id: "habitat",
        label: "Habitat",
        animalAValue: "Woodland, mallee, heath, grassland and semi-arid interior, favouring open sightlines",
        animalBValue: "Tropical rainforest and adjoining swamp forest, mangrove and fruiting woodland",
        interpretation: "Habitat rarely leaves room for doubt, because the two hardly ever occupy the same ground.",
      },
      {
        id: "range",
        label: "Range",
        animalAValue: "Mainland Australia, widely distributed and highly mobile",
        animalBValue: "New Guinea and nearby islands, with the southern species reaching far north Queensland",
        interpretation: "The only overlap is a narrow band of wet tropical Queensland at the edge of both ranges.",
      },
      {
        id: "diet",
        label: "Diet",
        animalAValue: "Fruit, seeds, flowers, shoots and large numbers of insects, taken across open habitats",
        animalBValue: "Overwhelmingly fallen rainforest fruit, plus fungi, invertebrates and carrion when found",
        interpretation: "The cassowary swallows large fruit whole and passes big seeds intact, making it a key rainforest disperser.",
      },
      {
        id: "movement",
        label: "Movement",
        animalAValue: "Nomadic over long distances, following rainfall and the food it produces",
        animalBValue: "Sedentary within a home range, using regular paths through dense forest",
        interpretation: "One tracks a continent's weather; the other patrols a patch of forest for decades.",
      },
    ],
    narrative: {
      taxonomy:
        "Both belong to the order Casuariiformes within the palaeognaths, and they are one another's closest living relatives. Emus are usually placed in Dromaiidae as a single living species, Dromaius novaehollandiae, while cassowaries form the genus Casuarius with three recognised species: southern, dwarf and northern. Some classifications sink the emu into Casuariidae with the cassowaries, so a source that lists one family rather than two is not making an error.",
      identification:
        "Head first: a tall keratin casque, bright blue neck and dangling wattles mean cassowary, and no emu has any of these. Body colour confirms it, with glossy black stiff plumage on adult cassowaries against the emu's shaggy grey-brown. Build differs too — cassowaries are stockier and lower-slung, emus lankier and longer-legged. Chicks of both are striped, so juveniles need care and habitat context to place.",
      habitat:
        "Emus cross almost every mainland Australian habitat except dense rainforest and heavily built land, and thrive where sightlines are long. Cassowaries are rainforest specialists, living in wet tropical forest of New Guinea, nearby islands and a restricted strip of far north Queensland, where they depend on continuous fruiting forest and on corridors that let them move between fragments. Genuine range overlap is limited to that narrow wet tropical band.",
      diet:
        "The cassowary is one of the most important frugivores in its forest, swallowing large fruits whole and passing seeds intact and often far from the parent tree, including seeds too big for most other animals to move. Some rainforest plants are strongly linked to this service. Emus also disperse seeds, but across open landscapes, and take a much higher proportion of insects, flowers and green shoots.",
      behavior:
        "Both are solitary for most of the year and both leave incubation and chick rearing to the male, who sits for roughly seven to eight weeks and then guards striped chicks for months. Cassowaries communicate partly with very low-frequency booms near the bottom of human hearing, useful in dense forest, while emus produce deep drumming that comes mainly from females. Cassowaries hold and defend forest home ranges; emus keep moving.",
      humanRelationship:
        "The emu is embedded in Australian national imagery and farmed for meat, leather and oil, and it has a long recorded history of conflict with grain agriculture. Cassowaries have a far more delicate relationship with people: their Queensland population is squeezed by forest clearing, vehicle strikes on roads through habitat, dog attacks and feeding by residents, and management focuses on corridors, road measures and asking the public not to feed them.",
      whichIsWhich:
        "Helmet on the head, blue neck, red wattles, black glossy body, deep forest: cassowary. No helmet, dull neck, brown shaggy coat, open country: emu. In far north Queensland, where both occur, habitat is the practical shortcut — a large ratite inside closed rainforest is a cassowary, one striding across cleared or dry country is an emu.",
      sensesAdaptations:
        "The cassowary casque has been linked to several possible roles, including thermal regulation as a heat window, reception or production of low-frequency sound, display, and pushing through vegetation; the evidence supports more than one, and no single explanation is settled. Emus are adapted for water economy in dry country, recovering moisture from exhaled air, and their double-shafted feathers insulate against extreme heat and cold alike.",
      lifespan:
        "Both are long-lived for birds. Cassowaries in managed collections have been reported into their forties, and wild birds are thought to live for decades given how slowly they reproduce. Emus are usually cited at roughly ten to twenty years in the wild with longer records in captivity. Wild data for both are thin, because marked individuals are few and rainforest birds are hard to follow.",
      conservation:
        "The southern cassowary's Australian population is treated as a conservation priority because rainforest clearing, road mortality, dogs and cyclone damage all hit a small, slow-breeding population; New Guinea populations face hunting and habitat pressure. The emu remains widespread on the mainland, although island forms in Tasmania and King Island were lost historically. Statuses are reassessed regularly, so verify before quoting one.",
      petContext:
        "Neither is a pet. Emus are kept as farmed livestock under agricultural rules, and cassowary keeping is tightly regulated and restricted to experienced institutions because of the risk and the specialist rainforest diet involved. Nothing here recommends acquiring either bird; welfare, housing and health decisions belong with the relevant wildlife authority and a veterinarian experienced with large ratites.",
    },
    faqs: [
      {
        question: "What is the casque on a cassowary actually for?",
        answer:
          "There is no single agreed answer. Research has linked the casque to shedding body heat, since it is well supplied with blood vessels, and to sound, both in producing and receiving the very low-frequency booms cassowaries use in dense forest. Display and pushing through vegetation have also been proposed. The structure is keratin over a spongy bony core and grows with age, so young birds show only a low ridge.",
      },
      {
        question: "Do emus have a casque like cassowaries?",
        answer:
          "No. An emu's head is small, rounded and unadorned, with only sparse feathering and dull bluish skin on the neck. That absence is the quickest way to separate the two Australasian ratites, because every adult cassowary carries a conspicuous casque. If you can see the head at all and there is no helmet, no wattle and no bright blue skin, the bird is an emu.",
      },
      {
        question: "Where in Australia do emus and cassowaries overlap?",
        answer:
          "Only in the wet tropics of far north Queensland, at the edge of both ranges. Southern cassowaries there live inside closed rainforest and adjoining swamp and mangrove forest, while emus keep to more open woodland, farmland and drier country nearby. Because the two rarely use the same vegetation, habitat is a practical identification shortcut even before you get a look at the head.",
      },
      {
        question: "Why is the cassowary called a rainforest gardener?",
        answer:
          "It swallows large fruits whole and passes the seeds intact, often well away from the parent tree, and some rainforest species produce fruit too large for most other animals to move. Losing cassowaries from a patch of forest therefore weakens the dispersal of those plants over time. Emus disperse seeds too, but across open landscapes and with a diet containing far more insects and shoots.",
      },
      {
        question: "Do male emus and male cassowaries both raise the chicks alone?",
        answer:
          "Yes, and the pattern is a family trait. In both, the female lays a clutch of large dark green eggs and departs, sometimes to lay again with another male, while the male incubates for roughly seven to eight weeks with little food or drink. He then leads and defends the striped chicks for months. It is one of the strongest similarities between the two birds.",
      },
    ],
    commonConfusions: [
      "Assuming any large black flightless bird in Australia is an emu.",
      "Reading a brown juvenile cassowary as an emu because the casque has not yet grown.",
      "Treating the casque as a settled adaptation with one known function.",
      "Expecting cassowaries throughout Australia when their Australian range is a narrow wet tropical strip.",
    ],
    similarities: [
      "Both are Australasian palaeognaths in the same order and are each other's closest living relatives.",
      "In both, the male incubates alone and raises the striped chicks.",
      "Both lay large dark green eggs and both are important seed dispersers.",
      "Both produce very low-frequency sounds rather than typical bird calls.",
    ],
    keyDifferences: [
      "Cassowaries carry a keratin casque; emus have none.",
      "Cassowary adults are glossy black with bright blue and red bare skin; emus are shaggy grey-brown.",
      "Cassowaries are rainforest specialists; emus favour open and semi-arid country.",
      "Cassowaries are sedentary within a home range, while emus are long-distance nomads.",
      "The cassowary diet is dominated by fallen rainforest fruit; the emu takes far more insects and shoots.",
      "Emus occur across mainland Australia, cassowaries mainly in New Guinea with a small Queensland range.",
    ],
    safetyBoundary:
      "Cassowaries are large, powerful birds and wildlife authorities advise keeping well back, never feeding them and giving any bird with chicks a very wide berth. Emus deserve the same distance. Report a bird on a road, a fed bird or an injured one to the local wildlife authority or park staff rather than approaching it yourself.",
    petBoundary:
      "Neither bird belongs in a household. Emus are farmed under agricultural regulation and cassowary keeping is restricted to licensed institutions; suitability turns on law, land, welfare capacity and specialist veterinary access, and nothing here recommends acquiring either.",
    conservationCaveat:
      "The southern cassowary's Australian population and the various New Guinea populations are assessed separately and revised as survey work continues; check the current IUCN Red List and Australian listings before quoting a status.",
    relatedComparisonSlugs: ["ostrich-vs-emu", "ostrich-vs-rhea", "toucan-vs-hornbill"],
    relatedHubPaths: ["/birds", "/wildlife", "/animal-encyclopedia/birds"],
    sourceIds: ["adw", "iucn", "britannica"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "ostrich-vs-rhea",
    animalA: { slug: "ostrich", name: "Ostrich" },
    animalB: { slug: "rhea", name: "Rhea" },
    title: "Ostrich vs Rhea",
    metaTitle: "Ostrich vs Rhea — Continent, Size, Toes and Neck",
    metaDescription:
      "Rheas are three-toed South American ratites with feathered upper necks and no black-and-white males; ostriches are far larger African birds with two toes.",
    shortAnswer:
      "Continent and size do most of the work. Ostriches are African and much the larger, standing well above head height on most people, with a bare neck and only two toes on each foot. Rheas are South American grassland and steppe birds, reaching roughly half an ostrich height, feathered over the upper neck and body, and carrying three toes. Ostrich males in breeding condition are black with white plumes, while rheas of both sexes stay a muted grey-brown throughout.",
    primaryCategory: "birds",
    secondaryCategories: ["look-alikes"],
    relationship: "similar-appearance",
    confidence: "supported",
    searchIntent: "taxonomy",
    whyCompare:
      "Rheas are routinely described as South American ostriches, and the label hides a real taxonomic question: how two big flightless grassland birds on separate continents came to look so alike, and how modern molecular work has changed the answer.",
    centralDifference:
      "Ostriches are the far larger African ratite with two toes and a bare neck; rheas are smaller South American birds with three toes and feathered upper necks.",
    dimensions: [
      {
        id: "continent",
        label: "Native continent",
        animalAValue: "Africa, in savanna, semi-desert and open scrub",
        animalBValue: "South America, in pampas, cerrado, chaco, and Patagonian steppe or high altiplano for the lesser species",
        interpretation: "Geography alone resolves almost every wild sighting, since neither occurs naturally in the other's range.",
      },
      {
        id: "toes",
        label: "Toes per foot",
        animalAValue: "Two, the inner one much larger and taking most of the load",
        animalBValue: "Three, all forward-facing",
        interpretation: "The two-toed foot is unique to ostriches among all living birds and is diagnostic on its own.",
      },
      {
        id: "size",
        label: "Height and mass",
        animalAValue: "Commonly around 2.1 to 2.8 metres and roughly 100 to 150 kg",
        animalBValue: "Greater rhea commonly around 1.3 to 1.7 metres and roughly 20 to 30 kg; the lesser rhea is smaller again",
        interpretation: "A rhea is a large bird by any normal standard, but stands beside an ostrich as a clearly smaller animal.",
        caveat: "Ranges shift with species, sex, population and captive conditions, and published figures differ between sources.",
      },
      {
        id: "neck-feathering",
        label: "Neck",
        animalAValue: "Long and bare, the skin pink, grey or bluish depending on population",
        animalBValue: "Feathered over the upper neck, with only the base and head area more thinly covered",
        interpretation: "A feathered neck on a big flightless bird points away from ostrich immediately.",
      },
      {
        id: "plumage-sexes",
        label: "Plumage and sexes",
        animalAValue: "Breeding males black with white wing and tail plumes; females and immatures grey-brown",
        animalBValue: "Both sexes grey-brown, males only slightly darker around the neck base in the greater species",
        interpretation: "Strong black-and-white sexual difference is an ostrich feature that rheas do not show.",
      },
      {
        id: "wings",
        label: "Wing use",
        animalAValue: "Broad plumed wings raised in display and used for balance and steering at speed",
        animalBValue: "Relatively long loose wings, one often raised like a sail while running and turning",
        interpretation: "Both use flightless wings as running and display equipment, but the rhea's one-wing running posture is distinctive.",
      },
      {
        id: "nesting",
        label: "Nesting system",
        animalAValue: "A communal nest with a dominant hen, and incubation shared between her and the male",
        animalBValue: "The male alone incubates a communal clutch laid by several females and then rears the chicks",
        interpretation: "Both build shared clutches, but the rhea removes the female from incubation entirely.",
      },
    ],
    narrative: {
      taxonomy:
        "Ostriches form Struthionidae in the order Struthioniformes, with the common ostrich and the Somali ostrich now generally treated as separate species. Rheas form Rheidae in Rheiformes, with the greater rhea and the lesser or Darwin's rhea. Both are palaeognaths, the group long called ratites, but the old idea of a single tidy flightless lineage has been revised: molecular studies place ostriches as the earliest-diverging living branch and recover the flying tinamous inside the group.",
      identification:
        "Take the continent, then the foot, then the neck. A wild bird in Africa with two toes and a naked neck is an ostrich; a wild bird in South American grassland with three toes and a feathered neck is a rhea. In collections outside both ranges, use size and sexual plumage: an adult black-and-white male can only be an ostrich, and a uniformly grey-brown bird of moderate size is far more likely a rhea.",
      habitat:
        "Ostriches use African savanna, short grassland, open scrub and semi-desert where visibility is good. Rheas occupy South American open country from the humid pampas and cerrado through the dry chaco, with the lesser rhea reaching Patagonian steppe and high Andean plateau. Both are birds of horizons rather than cover, and both have adapted to grazed pasture and cropland, which brings them into contact with farming.",
      diet:
        "Both are generalist herbivores that add animal food opportunistically. Ostriches take seeds, leaves, shoots, flowers and succulents plus insects and small vertebrates. Rheas eat broad-leaved plants, seeds, fruit and roots and consume large numbers of insects, including agricultural pests, and will take small vertebrates. Both swallow grit that helps the gizzard grind fibrous material, a common solution among large ground-feeding birds.",
      behavior:
        "Ostriches live in fluid groups whose size changes with season and disturbance, and rely on long-range vision across open ground. Rheas gather in loose flocks outside the breeding season and split as males become solitary and defensive around their nests. In both, a communal clutch is central, but the male rhea takes on the whole job of incubating and rearing, while ostriches split shifts between the male and a dominant hen.",
      humanRelationship:
        "Both are farmed for meat, leather and feathers, and both have long histories of feather use in fashion and household goods, with rhea plumes traditionally made into dusters. Escapes from farms have produced a free-living greater rhea population in northern Germany, which is now managed as an introduced species. In their native ranges both come into conflict with agriculture and both are affected by grassland conversion.",
      whichIsWhich:
        "African, enormous, bare-necked, two toes, males black and white: ostrich. South American, mid-sized, feathered upper neck, three toes, both sexes grey-brown: rhea. The nickname South American ostrich is a description of shape, not a statement of relationship, and the two belong to separate families that have been apart for a very long time. In a mixed collection, check the foot first, since toe count settles it whatever the bird's age or condition.",
      sensesAdaptations:
        "Ostriches have unusually large eyes for a land animal and a foot reduced to two toes, both consistent with life as a fast-running open-country bird; their long-distance vision is central to how groups detect disturbance. Rheas rely on similar sightlines but retain three toes and comparatively long wings, which are raised and spread to help with balance and sharp turns during a run and used in male display.",
      lifespan:
        "Ostriches are frequently reported to live into their thirties or forties, particularly under farm management. Greater rheas are commonly cited at roughly ten to fifteen years in the wild with longer captive records. In both cases most of the data come from managed birds, and mortality of eggs and chicks in the wild is heavy, so average life expectancy at hatching is far below any published maximum.",
      conservation:
        "Rhea populations have declined in parts of South America through grassland conversion, egg collection and hunting pressure, and the two species are assessed separately. Among ostriches, the Somali ostrich is treated as being of greater concern than the widespread common ostrich. Because ranges and assessments both change, treat these as pointers and consult the current Red List entry for the specific species.",
      petContext:
        "Both are farmed birds rather than pets. Keeping either requires substantial secure land, specialist fencing, licences in many jurisdictions and access to veterinary care for large ratites, and escapes have real ecological consequences, as the German rhea population shows. Nothing here is a recommendation to acquire one; the decision belongs with agricultural authorities and a suitably experienced veterinarian.",
    },
    faqs: [
      {
        question: "Is a rhea just a small ostrich?",
        answer:
          "No. Rheas belong to their own family and order, separated from ostriches by a very long evolutionary history, and the nickname South American ostrich describes shape rather than kinship. The differences are concrete: rheas have three toes to the ostrich's two, feathering over the upper neck, no black-and-white male plumage, and a body mass that is a fraction of an adult ostrich's.",
      },
      {
        question: "How many toes does a rhea have compared with an ostrich?",
        answer:
          "A rhea has three forward-facing toes, like emus and cassowaries. An ostrich has two, with a large inner toe carrying most of the weight and a smaller outer one, a condition unique among all living birds and generally interpreted as a running specialisation. If you can see a clear footprint or foot, this single character settles the identification without reference to size or colour.",
      },
      {
        question: "Why do ostriches and rheas look so similar on separate continents?",
        answer:
          "Both are large flightless herbivores of open country, and that way of life favours the same package: long legs, a long neck for watching over grass, reduced wings, a small head and a broad grazing bill. Shared palaeognath ancestry supplies the starting material, but the detailed resemblance is convergence, which is why the diagnostic characters that do differ, such as toe count, are so useful.",
      },
      {
        question: "How do ostrich and rhea nesting arrangements differ?",
        answer:
          "Both use communal clutches, but the division of labour differs. A male rhea builds a scrape, several females lay into it, and he then incubates and rears the chicks entirely alone, becoming markedly defensive around the nest. In ostriches the male scrapes the nest and shares incubation with a dominant hen, who typically covers daylight hours while he sits through the night.",
      },
      {
        question: "Are there wild rheas living outside South America?",
        answer:
          "Yes. Greater rheas that escaped from captivity established a free-living breeding population in northern Germany, which has persisted and grown and is now managed as an introduced species with monitoring and control of its effect on crops and grassland. It is a useful reminder that farmed ratites can establish outside their native range when climate and habitat happen to suit them.",
      },
    ],
    commonConfusions: [
      "Taking the name South American ostrich as evidence that rheas are ostriches.",
      "Assuming all ratites descend from one flightless ancestor, when tinamous fly and sit within the group.",
      "Using size alone to identify a captive bird, since immature ostriches overlap with adult rheas.",
      "Expecting a rhea male to be boldly black and white like a breeding ostrich.",
    ],
    similarities: [
      "Both are large flightless palaeognaths of open country with long legs and reduced wings.",
      "Both are generalist herbivores that also take insects and swallow grit.",
      "Both use communal clutches with strong male involvement in incubation.",
      "Both are farmed for meat, leather and feathers well beyond their native ranges.",
    ],
    keyDifferences: [
      "Ostriches have two toes; rheas have three.",
      "Ostriches are African, rheas South American.",
      "An ostrich neck is bare skin; a rhea's upper neck is feathered.",
      "Breeding male ostriches are black and white, while rheas of both sexes remain grey-brown.",
      "Ostriches are substantially taller and heavier than either rhea species.",
      "Male rheas incubate and rear entirely alone, whereas ostriches share incubation with a dominant hen.",
    ],
    taxonomyCaveat:
      "Rhea covers two living species, the greater and the lesser or Darwin's rhea, and ostrich is now usually split into common and Somali species, so the figures here describe typical members rather than single fixed birds.",
    conservationCaveat:
      "Rhea species and the two ostrich species are assessed individually and their statuses change with new survey data; check the current IUCN Red List entry rather than applying one status to the whole group.",
    safetyBoundary:
      "Both are large birds that can injure people, and male rheas are notably defensive around a nest. Keep a generous distance at farms, parks and reserves, follow site instructions, and report loose or distressed birds to staff or the local wildlife authority instead of approaching.",
    petBoundary:
      "Ostriches and rheas are farmed livestock, not pets. Suitability depends on land, secure fencing, local law, welfare capacity and long-term commitment, and health and husbandry decisions belong with a veterinarian experienced in ratites.",
    relatedComparisonSlugs: ["ostrich-vs-emu", "emu-vs-cassowary", "penguin-vs-albatross"],
    relatedHubPaths: ["/animal-taxonomy/vertebrates", "/animal-encyclopedia/birds", "/birds"],
    sourceIds: ["adw", "britannica", "iucn"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "swan-vs-pelican",
    animalA: { slug: "swan", name: "Swan" },
    animalB: { slug: "pelican", name: "Pelican" },
    title: "Swan vs Pelican",
    metaTitle: "Swan vs Pelican — Bill, Pouch, Neck and Diet",
    metaDescription:
      "A swan grazes water plants with a flat waterfowl bill and flies neck-out; a pelican scoops fish with a pouched bill and folds its neck back in flight.",
    shortAnswer:
      "Look at the bill and what it collects. A swan has a flat, blunt, duck-like bill with fine comb edges, used to graze and strain water plants, and a very long neck that reaches down to feed below the surface. A pelican has an enormous bill with a stretchy skin pouch slung beneath it, worked like a dip net to scoop fish and drain the water away. Swans are waterfowl, related to ducks and geese; pelicans belong with fish-eating waterbirds and have all four toes webbed.",
    primaryCategory: "birds",
    secondaryCategories: ["look-alikes"],
    relationship: "similar-appearance",
    confidence: "supported",
    searchIntent: "identification",
    whyCompare:
      "Both are very large, mostly white waterbirds that share lakes, lagoons and city parks, so they get grouped by size and colour, yet one is a grazing waterfowl and the other a fish-catching specialist with entirely different equipment.",
    centralDifference:
      "A swan grazes water plants with a flat waterfowl bill and flies with the neck out; a pelican scoops fish with a pouched bill and flies with the neck folded back.",
    dimensions: [
      {
        id: "bill",
        label: "Bill",
        animalAValue: "Flat, blunt and duck-like with fine lamellae along the edges, often orange, yellow or black",
        animalBValue: "Very long and broad with a distensible skin pouch beneath the lower mandible",
        interpretation: "The pouch has no equivalent in waterfowl, so it identifies a pelican even from a distance.",
      },
      {
        id: "diet",
        label: "Main food",
        animalAValue: "Aquatic plants, algae, grasses and grain, with small invertebrates taken incidentally",
        animalBValue: "Fish, with amphibians, crustaceans and occasionally other prey",
        interpretation: "One is essentially a grazing herbivore of the water surface and bank; the other is a fish specialist.",
      },
      {
        id: "neck-in-flight",
        label: "Neck in flight",
        animalAValue: "Stretched fully out ahead, giving a long straight cross-shaped silhouette",
        animalBValue: "Drawn back so the head rests on the shoulders and the bill lies along the breast",
        interpretation: "In the air the difference is unmistakable and does not require seeing colour or size.",
      },
      {
        id: "feet",
        label: "Feet",
        animalAValue: "Webbing between three forward toes, with the hind toe free",
        animalBValue: "All four toes joined by webbing, the totipalmate condition",
        interpretation: "Foot structure reflects deep relationships, not just swimming ability.",
      },
      {
        id: "flight-style",
        label: "Flight style",
        animalAValue: "Heavy continuous flapping with a long running take-off, and in some species audible singing wings",
        animalBValue: "Long spells of soaring in lines and V formations, alternating flaps and glides",
        interpretation: "Pelicans travel cheaply on thermals; swans effectively power the whole way.",
      },
      {
        id: "feeding-method",
        label: "Feeding method",
        animalAValue: "Dips the head, upends the body, and grazes on land, using the long neck for reach",
        animalBValue: "Scoops from the surface, several species herding fish cooperatively, and one species plunge-diving",
        interpretation: "Cooperative herding and plunge-diving are pelican behaviours with no swan equivalent.",
      },
      {
        id: "posture-on-land",
        label: "On land",
        animalAValue: "Walks awkwardly but confidently on relatively long legs set well under the body",
        animalBValue: "Short-legged and waddling, often loafing in groups on sandbars, posts and jetties",
        interpretation: "A very large white bird standing tall on a bank is a swan; a squat one hunched on a sandbar is a pelican.",
      },
    ],
    narrative: {
      taxonomy:
        "Swans belong to Anatidae, the duck, goose and swan family, in the order Anseriformes, with roughly six or seven living species in the genus Cygnus plus the coscoroba, which is swan-like but not a true Cygnus. Pelicans form Pelecanidae in Pelecaniformes, roughly eight species, alongside herons, ibises and the shoebill in modern arrangements. The two are not close relatives, and their shared size and pale plumage say nothing about kinship.",
      identification:
        "The bill decides it at any range you can see it. A swan bill is flat and blunt with comb edges and a hard nail at the tip; a pelican bill is a long broad scoop with a pouch of loose skin beneath. Neck length also differs: the swan's is extremely long and often held in a curve, the pelican's shorter and thicker. In flight, watch whether the neck goes out or folds back.",
      habitat:
        "Swans use fresh and brackish water — lakes, slow rivers, flooded meadows, sheltered coasts and park lakes — and many populations migrate between breeding wetlands and milder wintering waters. Pelicans use large lakes, deltas, estuaries, lagoons and coasts, and depend on shallow productive water with good fish supply plus safe islands or banks to loaf and breed on. They meet regularly on big lakes and coastal wetlands.",
      diet:
        "A swan grazes: pondweed, algae, aquatic grasses, waterside vegetation and, where offered, grain, using serrated bill edges to cut and strain plant material, with a long neck that lets it reach submerged growth without diving. A pelican fishes: the pouch is a net rather than a store, and prey is manoeuvred and swallowed almost at once. Several species herd fish into the shallows as a coordinated group.",
      behavior:
        "Swans form long-term pairs, defend territories vigorously against other swans and gather in large herds on wintering waters. Pelicans are strongly colonial, breeding in dense groups on islands and sandbars and often fishing in coordinated lines, and their long soaring formations are one of the most recognisable sights on a big lake. Both are conspicuous, but pelicans are the more cooperative and swans the more territorial.",
      humanRelationship:
        "Both have deep cultural profiles: mute swans have been managed and counted in Britain for centuries and remain closely associated with the Crown, while pelicans have been kept in London's St James's Park since a seventeenth-century diplomatic gift. Both attract conflict with fisheries, both are affected by wetland loss, and both suffer from discarded fishing tackle and lead in some regions.",
      whichIsWhich:
        "Pouch under a long broad bill, short legs, head folded back in flight, soaring in a line: pelican. Flat duck-like bill, extremely long neck, neck stretched out in flight, upending to graze pondweed: swan. If you cannot see the head, note the wing action, because pelicans glide and soar for long stretches while swans keep flapping.",
      sensesAdaptations:
        "A pelican's pouch is supported by a flexible lower jaw that bows outward, and brown pelicans additionally plunge-dive, cushioned by air sacs beneath the skin that also help the bird resurface. Swans are built for reach and buoyancy, with an extremely long neck for feeding below the surface, dense insulating down and lamellae for straining plant material; several species also cope with brackish water.",
      lifespan:
        "Both are long-lived by bird standards. Ringed swans have been recorded into their twenties and occasionally beyond, and marked pelicans have produced comparable and sometimes longer records, particularly in managed collections. As with most large waterbirds, average life expectancy is far lower than these maxima because mortality in the first year, from weather, predation and collisions, is high in both groups.",
      conservation:
        "Status varies by species. Some pelicans have recovered substantially after protection and habitat work, while others remain restricted to a small number of breeding sites; several swan species are widespread, and a few have small or declining populations. Both groups are sensitive to wetland drainage and disturbance at breeding colonies. Assessments change, so check the current listing for the species in front of you.",
      petContext:
        "Neither is a household pet. Swans are kept on ornamental waters and pelicans in zoos and parks, and in both cases the birds need open water, specialist diets, veterinary support and legal permission, with mute swans additionally protected by law in many countries. Nothing here recommends acquiring or feeding either bird; welfare and health questions belong with a qualified avian veterinarian.",
    },
    faqs: [
      {
        question: "Does a pelican actually store fish in its pouch?",
        answer:
          "Not for long. The pouch works as a dip net: it scoops fish along with a large volume of water, the bird tips the bill down to drain the water out, and the fish is manoeuvred and swallowed shortly afterwards. Chicks are fed by regurgitation rather than by carrying whole fish about in the pouch, so the cartoon image of a pelican using it as a lunch box is misleading.",
      },
      {
        question: "Why does a pelican fly with its head pulled back when a swan does not?",
        answer:
          "The pelican's bill and pouch are heavy, and drawing the head back onto the shoulders keeps that mass close to the body's centre, which suits its long soaring glides. A swan's bill is comparatively light and its very long neck streams out ahead in fast powered flight. The contrast is reliable in silhouette and works even when colour and size are hard to judge.",
      },
      {
        question: "Do swans ever eat fish like pelicans?",
        answer:
          "Swans are essentially herbivorous, taking pondweed, algae, aquatic grasses, waterside plants and grain, with small invertebrates swallowed incidentally along with vegetation. They are not equipped to pursue fish, having a flat straining bill rather than a hooked or pouched one. Pelicans, by contrast, are fish specialists whose entire feeding apparatus is built around scooping prey out of shallow productive water.",
      },
      {
        question: "Are swans and pelicans related at all?",
        answer:
          "Only distantly, as birds. Swans sit in Anatidae with ducks and geese in the order Anseriformes, while pelicans sit in Pelecanidae in Pelecaniformes, closer to herons, ibises and the shoebill. Their shared size and white plumage are the result of both being large conspicuous waterbirds, not of common ancestry, and their feet differ too: swans have three webbed toes, pelicans four.",
      },
      {
        question: "Which of these large white birds soars over the lake in a line?",
        answer:
          "That is pelicans. They travel in lines and V formations, alternating flaps with long glides and circling on thermals to gain height with very little effort, and their folded-back heads give the flock a blunt-fronted look. Swans do not soar in this way; they fly with continuous powerful wingbeats, necks fully extended, and in several species the wings make an audible singing or throbbing sound.",
      },
    ],
    commonConfusions: [
      "Grouping every large white waterbird on a lake into one family.",
      "Believing pelicans carry fish around in the pouch to eat later.",
      "Assuming swans take fish because they feed in the same water as pelicans.",
      "Using colour to identify swans, when black swans and dark-plumaged pelicans both exist.",
    ],
    similarities: [
      "Both are very large waterbirds that swim well and take off with a running start.",
      "Both are highly social outside the breeding season and gather in conspicuous groups.",
      "Both depend on wetlands and are affected by drainage, disturbance and discarded fishing tackle.",
      "Both are long-lived birds with records extending into their twenties.",
    ],
    keyDifferences: [
      "A swan bill is flat with straining edges; a pelican bill carries a large skin pouch.",
      "Swans graze water plants while pelicans catch fish.",
      "Swans fly with the neck extended, pelicans with the head folded back onto the shoulders.",
      "Pelicans have all four toes webbed; swans have webbing between three toes only.",
      "Pelicans soar and glide in formation, while swans use continuous powered flight.",
      "Swans are territorial pair-nesters, whereas pelicans breed in dense colonies.",
    ],
    taxonomyCaveat:
      "Swan covers around six or seven Cygnus species plus the swan-like coscoroba, and pelican covers roughly eight species, so bill colour, plumage and exact habits differ between members of each group.",
    conservationCaveat:
      "Some pelican and swan species have recovered under protection while others remain restricted or declining; consult the current IUCN Red List entry for the individual species rather than the group.",
    safetyBoundary:
      "Nesting swans defend their territory and pelicans at colonies are easily disturbed. Keep a calm distance, keep dogs under control near waterside nests, and report an injured or entangled bird to a wildlife rescue organisation or local authority rather than intervening yourself.",
    petBoundary:
      "Swans and pelicans are not household pets. Both are held only where there is open water, specialist diet, veterinary support and legal permission, and mute swans are additionally protected by law in many countries.",
    relatedComparisonSlugs: ["duck-vs-swan", "swan-vs-goose", "puffin-vs-pelican", "flamingo-vs-stork"],
    relatedHubPaths: ["/birds", "/animal-encyclopedia/birds", "/birdwatching"],
    sourceIds: ["cornell", "audubon", "britannica"],
    lastReviewed: REVIEWED,
  }),

  defineComparison({
    slug: "hummingbird-vs-sunbird",
    animalA: { slug: "hummingbird", name: "Hummingbird" },
    animalB: { slug: "sunbird", name: "Sunbird" },
    title: "Hummingbird vs Sunbird",
    metaTitle: "Hummingbird vs Sunbird — Hovering, Family and Range",
    metaDescription:
      "Hummingbirds hover in sustained flight and live only in the Americas; sunbirds are Old World songbirds that usually perch at flowers. Convergence explained.",
    shortAnswer:
      "Geography settles it before anything else: hummingbirds occur only in the Americas and sunbirds only across Africa, Asia and Australasia, with no natural overlap anywhere. Hummingbirds belong to the swift order and hold sustained hovering flight, the wing tracing a figure of eight so the bird can hang still or back away from a flower. Sunbirds are songbirds that normally cling or perch to feed and hover only in brief bursts. Both flash iridescent colour, which in both is structural rather than pigment.",
    primaryCategory: "birds",
    secondaryCategories: ["look-alikes"],
    relationship: "similar-appearance",
    confidence: "representative",
    searchIntent: "taxonomy",
    whyCompare:
      "Small, glittering, long-billed nectar feeders evolved twice on opposite sides of the world, and the pair is the standard textbook illustration of convergent evolution, which makes the differences worth stating precisely.",
    centralDifference:
      "Hummingbirds are American swift relatives built for sustained hovering; sunbirds are Old World songbirds that mostly perch to reach the same nectar.",
    dimensions: [
      {
        id: "range",
        label: "Natural range",
        animalAValue: "The Americas only, from Alaska and Canada south to Tierra del Fuego, with greatest diversity in the tropical Andes",
        animalBValue: "Africa, the Middle East, South and Southeast Asia, New Guinea and northern Australia",
        interpretation: "No wild population of either lives in the other's range, so location alone identifies the family.",
      },
      {
        id: "order",
        label: "Where each belongs",
        animalAValue: "Family Trochilidae in the order Apodiformes, alongside swifts and treeswifts",
        animalBValue: "Family Nectariniidae within Passeriformes, the perching birds or songbirds",
        interpretation: "Their nearest relatives are completely different kinds of bird, which is what makes the resemblance convergent.",
      },
      {
        id: "feeding-posture",
        label: "Posture at a flower",
        animalAValue: "Sustained hovering in front of the bloom, often without touching the plant at all",
        animalBValue: "Usually perched or clinging to the flower or a nearby stem, hovering only briefly",
        interpretation: "This is the behaviour most often mistaken, because a sunbird can hover just long enough to look like a hummingbird.",
        caveat: "Some hummingbirds perch to feed at sturdy flowers, and a few sunbirds hover more readily than others.",
      },
      {
        id: "flight-mechanics",
        label: "Wing mechanics",
        animalAValue: "Wing rotates at the shoulder and generates lift on both the forward and backward stroke, allowing backward flight",
        animalBValue: "A conventional passerine wing generating lift chiefly on the downstroke",
        interpretation: "Only the hummingbird stroke supports hanging in one place indefinitely or flying in reverse.",
      },
      {
        id: "tongue",
        label: "Tongue",
        animalAValue: "Forked and grooved, springing open inside nectar and trapping it as the tongue is drawn back",
        animalBValue: "Tubular with a brush-like tip that draws nectar up by capillary action",
        interpretation: "Both solve the same problem, but with different anatomy, exactly as the convergence story predicts.",
      },
      {
        id: "voice",
        label: "Voice",
        animalAValue: "Mostly chips, squeaks, twitters and mechanical wing or tail sounds, with true song in relatively few species",
        animalBValue: "Songbird vocal apparatus producing varied musical songs and calls",
        interpretation: "A small iridescent nectar feeder delivering a sustained musical song is a sunbird.",
      },
      {
        id: "nest",
        label: "Nest",
        animalAValue: "A tiny cup of plant down bound with spider silk and camouflaged with lichen, saddled on a twig",
        animalBValue: "A hanging purse-shaped woven nest with a side entrance, suspended from a twig",
        interpretation: "Nest architecture separates the two families as decisively as geography.",
      },
    ],
    narrative: {
      taxonomy:
        "Hummingbirds are Trochilidae, more than three hundred and fifty species, placed in Apodiformes with swifts and treeswifts. Sunbirds are Nectariniidae, roughly one hundred and forty-five species, sitting within Passeriformes, the songbirds. The families are not close relatives, and the resemblance is a textbook case of convergence, repeated again in Australasian honeyeaters and in the Hawaiian honeycreepers, all of which converged on similar bills for the same reward.",
      identification:
        "In the field, geography usually answers the question outright, since the families do not overlap naturally. Where the bird is unfamiliar, watch how it feeds: sustained hovering with the body held level and the tail fanned for balance points strongly to a hummingbird, while a bird that lands on the flower or a nearby twig and leans in is far more likely a sunbird. Listen too, because sunbirds sing properly.",
      habitat:
        "Hummingbirds occupy nearly every American habitat that flowers, from Andean paramo and cloud forest to desert scrub, temperate woodland and city gardens, with diversity peaking in the northern Andes. Sunbirds occupy African savanna and forest, Asian tropical woodland, Himalayan foothills, mangroves and gardens across their range. Both families concentrate where nectar-rich plants flower reliably, and both follow flowering seasons through altitudinal or local movements.",
      diet:
        "Both live on nectar plus a substantial proportion of small arthropods, and the insects and spiders matter as much as the sugar because nectar supplies energy but little protein. Both act as pollinators for plants with tubular flowers, and both sometimes rob nectar by piercing the base of a corolla and bypassing the pollen entirely. Nestlings in both families are fed heavily on invertebrates rather than nectar alone.",
      behavior:
        "Both defend rich flower patches aggressively for their size, chasing off intruders including much larger birds, and some hummingbirds instead run long trapline routes between scattered plants. Sunbird males display glittering plumage from exposed perches while singing, whereas hummingbird display flights are often steep dives with sound produced mechanically by the tail or wings. In both families the female typically builds the nest and raises the young.",
      humanRelationship:
        "Hummingbirds are a major focus of garden bird-watching in the Americas, where feeders are widespread and best set up according to guidance from local conservation organisations. Sunbirds visit garden flowers across Africa and Asia and appear in local art and naming traditions. Both are protected in most of their range, and capture or trade is illegal in many countries; habitat loss and pesticide effects on their insect food are shared pressures.",
      whichIsWhich:
        "Hovering, in the Americas, related to swifts, tiny lichen-covered cup nest: hummingbird. Perching to feed, in Africa, Asia or Australasia, a true songbird, hanging purse nest: sunbird. If you are looking at a photograph with no location, the giveaway is behaviour and nest rather than colour, because both families produce dazzling iridescent males with long curved bills.",
      sensesAdaptations:
        "Both families run high metabolic rates for their size, and both include species that use torpor, dropping body temperature overnight to save energy, best documented in hummingbirds but recorded in some sunbirds too. Hummingbird colour vision has been shown experimentally to include ultraviolet-containing combinations that people cannot perceive, and iridescence in both families is produced by feather nanostructure, which is why the colours vanish as the bird turns.",
      lifespan:
        "Very small birds usually live short lives, but marked individuals in both families have surprised researchers. Some ringed hummingbirds have been recovered more than a decade after banding, well beyond typical expectation, and sunbird longevity is thought to be broadly comparable although the data are much thinner. In both cases most individuals die within their first year, so record ages describe exceptional survivors rather than normal lifespans.",
      conservation:
        "Hummingbirds include many narrow-range Andean and island species that are vulnerable to forest clearance and climate shifts on mountain slopes, while others are abundant and expanding. Most sunbirds are widespread, but island and montane forms face habitat pressure. Because nectar specialists depend on particular plant communities, changes in flowering timing matter to both groups; check current assessments before quoting any species status.",
      petContext:
        "Neither family belongs in a cage. Hummingbirds and sunbirds are wild protected birds in most of their range, capture and trade are illegal in many countries, and their nectar-and-insect diets and metabolic demands are extremely difficult to meet outside specialist institutions. Nothing here recommends acquiring either; feeder and garden practice should follow local conservation guidance, and any injured bird is a matter for a licensed rehabilitator.",
    },
    faqs: [
      {
        question: "Are sunbirds a kind of hummingbird?",
        answer:
          "No. Sunbirds are songbirds in Nectariniidae, part of Passeriformes, while hummingbirds are in Trochilidae within Apodiformes, whose closest relatives are swifts. The two families are only distantly related and the similarity comes from both feeding on nectar. It is one of the clearest available examples of convergent evolution, and it repeats again in honeyeaters and Hawaiian honeycreepers.",
      },
      {
        question: "Can a sunbird hover the way a hummingbird does?",
        answer:
          "Briefly, but not in the same way. Sunbirds can hold position for a moment at a flower, yet they normally perch or cling and lean in to feed. A hummingbird wing rotates at the shoulder and produces lift on both strokes, which is what allows sustained station-keeping and even backward flight. That mechanical difference, not effort, is why sunbirds perch and hummingbirds hang.",
      },
      {
        question: "Why did two unrelated bird families end up looking so similar?",
        answer:
          "Because tubular nectar-bearing flowers pose the same engineering problem everywhere: reach deep, extract liquid, stay small enough to be cheap to run, and be conspicuous to rivals and mates. Long thin bills, brush or trap tongues, tiny bodies and structural iridescence are recurring answers. Australasian honeyeaters and Hawaiian honeycreepers converged on parts of the same package independently again.",
      },
      {
        question: "Do hummingbirds and sunbirds ever meet in the wild?",
        answer:
          "Not naturally. Hummingbirds are confined to the Americas and sunbirds to Africa, Asia, New Guinea and northern Australia, and there is no region where wild populations of both occur. That is why a photograph's location resolves the identification instantly, and why hummingbirds reported from Africa or Asia are almost always sunbirds, or sometimes hawk-moths feeding at dusk.",
      },
      {
        question: "Do either of them eat anything besides nectar?",
        answer:
          "Yes, and it matters. Both families take small arthropods, including flies, gnats, aphids and spiders, gleaned from foliage, snatched in the air or lifted from webs. Nectar supplies fuel but very little protein, so insects are essential for growth and feather replacement, and nestlings in both families are fed largely on invertebrates rather than on sugar alone.",
      },
    ],
    commonConfusions: [
      "Calling any small glittering nectar feeder in Africa or Asia a hummingbird.",
      "Assuming a bird that hovers for a second at a flower must be a hummingbird.",
      "Mistaking a hawk-moth hovering at dusk for either bird family.",
      "Treating iridescent colour as pigment, when in both families it is produced by feather structure.",
    ],
    similarities: [
      "Both are small, long-billed nectar feeders with iridescent plumage in males.",
      "Both supplement nectar with small arthropods, which supply the protein nectar lacks.",
      "Both are pollinators of tubular flowers and both sometimes rob nectar by piercing the corolla.",
      "Both defend flower patches aggressively for their size and include species that use torpor.",
    ],
    keyDifferences: [
      "Hummingbirds live only in the Americas; sunbirds only in Africa, Asia and Australasia.",
      "Hummingbirds are in the swift order, whereas sunbirds are songbirds.",
      "Hummingbirds hover in sustained flight; sunbirds usually perch or cling to feed.",
      "Hummingbird wings generate lift on both strokes, allowing backward flight, which sunbirds cannot do.",
      "Sunbirds sing true songs, while most hummingbirds chip, squeak and make mechanical sounds.",
      "Hummingbird nests are tiny lichen-covered cups; sunbird nests are hanging woven purses.",
    ],
    taxonomyCaveat:
      "Both names cover large families — more than three hundred and fifty hummingbirds and around one hundred and forty-five sunbirds — so bill shape, size and behaviour vary widely within each, and the page describes family-level contrasts.",
    conservationCaveat:
      "Many narrow-range hummingbirds and some island or montane sunbirds are assessed very differently from their widespread relatives; consult the current IUCN Red List for the individual species before drawing conclusions.",
    petBoundary:
      "Neither family is suitable for keeping. Both are protected wild birds in most of their range, capture and trade are illegal in many countries, and injured birds should go to a licensed rehabilitator rather than into private care.",
    relatedComparisonSlugs: ["parrot-vs-galah", "toucan-vs-hornbill", "magpie-vs-crow"],
    relatedHubPaths: ["/birds", "/wildlife/pollinators", "/animal-senses-and-adaptations"],
    sourceIds: ["cornell", "adw", "britannica"],
    lastReviewed: REVIEWED,
  }),
];
