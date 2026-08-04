/**
 * The ten Compare Center category hubs.
 *
 * Every hub owns its own explanatory copy. Nothing in this file may be shared
 * verbatim between two categories — a duplicate-paragraph test enforces it.
 * Hubs live under /animal-compare/categories/<slug> so that a category slug can
 * never collide with a comparison slug under /animal-compare/<slug>.
 */
import type { ComparisonCategory, ComparisonCategoryDefinition } from "./types.ts";

export const COMPARISON_CATEGORIES: ComparisonCategoryDefinition[] = [
  {
    id: "pets-domestic",
    slug: "pets-and-domestic-animals",
    name: "Pets & Domestic Animals",
    h1: "Pet and Domestic Animal Comparisons",
    metaTitle: "Pet & Domestic Animal Comparisons — Species Differences",
    metaDescription:
      "Compare pets, small mammals, aquarium fish, poultry and livestock species side by side: care demands, natural history and what actually differs between them.",
    intro: [
      "Most pet comparisons online are really shopping guides. This shelf is not. Every page here compares two animals as animals — what they are, where they came from, how their bodies and behaviour differ, and what those differences imply about living alongside them. A rabbit and a guinea pig are not two versions of the same product; they sit in different mammalian orders, evolved under different pressures, and have genuinely different social and dietary biology. That is the story these pages tell.",
      "The practical reason this matters is that most avoidable problems in animal keeping come from species mismatch rather than owner effort. Housing a crepuscular burrowing lagomorph the way you would house a diurnal cavy produces a stressed animal even when the keeper is doing everything conscientiously. Understanding the species first is what makes the care information elsewhere on FaunaHub usable.",
      "Domestic-versus-wild pairings also live here, because they are among the most misunderstood comparisons of all. Domestication is a multigenerational population-level process, not a description of an individual animal's temperament, and a wild relative of a domestic species is not a 'wilder version' of a pet.",
    ],
    scopeNote:
      "These pages describe species, not purchases. They do not rank animals as pets, name a best beginner species, quote prices, recommend suppliers, prescribe diets or portion sizes, or give housing, breeding or veterinary instructions. Suitability depends on the household, local law, available time and the individual animal, and care decisions belong with a qualified veterinarian or an experienced species-specific professional.",
    howToRead: [
      "Read the taxonomy section before the care implications — order-level differences drive almost everything downstream.",
      "Treat every welfare statement as a floor, not a target: meeting a species' minimum documented needs is where responsible keeping starts.",
      "Where a page notes that two species have similar diets or similar housing, that is a statement about broad category, never a licence to swap one animal's regime for the other.",
      "Legal status varies enormously by country and even by municipality; nothing on these pages establishes whether an animal may be kept where you live.",
    ],
    faqs: [
      {
        question: "Do these pages say which animal is the better pet?",
        answer:
          "No, and that is deliberate. 'Better' depends on the household, the time available, the space, local law, allergies, the other animals present and the individual animal's own temperament. What these comparisons do is set out how two species genuinely differ in social biology, activity pattern, diet type, handling tolerance and typical lifespan, so that a reader can judge fit for themselves rather than being handed a verdict.",
      },
      {
        question: "Why are wild animals compared with domestic ones here?",
        answer:
          "Because the comparison is one of the most commonly searched and most commonly misunderstood. Pairings such as a domestic species against its closest wild relative explain what domestication actually changed — and, just as importantly, what it did not. These pages exist to clarify that relationship. They never present a wild animal as a pet, and a wild animal being closely related to a domestic one has no bearing on whether it can or should be kept.",
      },
      {
        question: "Is there feeding or health guidance on these pages?",
        answer:
          "There is dietary category information — whether a species is a hindgut-fermenting herbivore, an obligate carnivore, an omnivore, and what that implies about its digestive biology. There are no portion sizes, feeding schedules, supplement recommendations, symptom checklists or treatment guidance. Those are veterinary decisions that depend on the individual animal, and FaunaHub routes them to a qualified professional rather than answering them.",
      },
    ],
    relatedHubPaths: [
      { label: "Domestic animals", href: "/domestic-animals" },
      { label: "Small pets", href: "/small-pets" },
      { label: "Aquarium care", href: "/aquarium-care" },
      { label: "Bird care", href: "/bird-care" },
      { label: "Animal domestication", href: "/animal-domestication" },
    ],
  },

  {
    id: "mammals",
    slug: "mammals",
    name: "Mammals",
    h1: "Mammal Comparisons",
    metaTitle: "Mammal Comparisons — Big Cats, Canids, Bears, Hoofed Animals",
    metaDescription:
      "Side-by-side mammal comparisons covering big cats, wild canids, bears, deer, whales and primates: taxonomy, range, body form and ecological role.",
    intro: [
      "Mammals attract more confusion than almost any other group, partly because the familiar ones are so variable. A domestic-scale mental model — one name, one animal, one size — breaks down immediately when a species spans continents. Tigers from the Russian Far East and tigers from Sumatra differ in mass by a factor that would look like a different species on paper, and lion, leopard and wolf all show the same pattern. Every mammal page on this shelf therefore treats size as a range with a stated source of variation rather than a single headline number.",
      "The second recurring problem is convergence. Hyenas look like large dogs and are not closely related to them; the maned wolf is neither a wolf nor a fox; a thylacine-shaped body plan has evolved more than once. Superficial resemblance in mammals is an unreliable guide to relatedness, so these comparisons state the family and order relationship explicitly before discussing appearance.",
      "Where two mammals genuinely overlap in range, the pages describe how they partition the habitat — by prey size, by activity period, by vertical layer, by season. Coexistence is usually a story about division of resources rather than direct conflict, and it is a far more useful lens than the confrontation framing these pairs usually attract.",
    ],
    scopeNote:
      "These comparisons cover identification, relatedness, distribution, body form, diet and behaviour. They do not stage fights, rank strength, publish bite-force league tables, or offer any guidance on approaching, tracking, deterring, handling or hunting wild mammals. Encounters with large wild mammals are a matter for local wildlife authorities, not a comparison page.",
    howToRead: [
      "Check whether both names refer to single species — several common mammal names cover whole genera or groups.",
      "Read mass and length figures as population ranges; sex, subspecies, season and region all move them substantially.",
      "Where a page reports overlapping ranges, look for the partitioning explanation rather than assuming direct competition.",
      "Conservation status given as context should be re-checked against the current IUCN Red List before being relied on.",
    ],
    faqs: [
      {
        question: "Why do these pages avoid saying which mammal is stronger?",
        answer:
          "Because the question has no honest answer and the framing is misleading. Strength comparisons between wild mammals rest on captive anecdotes, unrepresentative individuals and measurements taken under conditions that do not transfer. More importantly, the answer would not help a reader identify an animal, understand its ecology, or grasp how it is related to anything else — which is what these pages are for.",
      },
      {
        question: "Why are the size ranges so wide?",
        answer:
          "Because they are honest. Widely distributed mammal species show substantial variation across their range: northern populations of many species run heavier than southern ones, males and females can differ markedly in the same population, and subspecies differ again. A single figure would look more authoritative and be less true. Where a specific population is unusually large or small, the page names it rather than folding it into an average.",
      },
      {
        question: "How are look-alike mammals that are not related handled?",
        answer:
          "Explicitly. When two mammals resemble each other through convergent evolution rather than shared ancestry — similar bodies shaped by similar ecological roles — the comparison says so in the taxonomy section and explains which traits are inherited and which are convergent. Treating resemblance as evidence of relatedness is the single most common error in mammal identification, so these pages address it directly.",
      },
    ],
    relatedHubPaths: [
      { label: "Mammals encyclopedia", href: "/animal-encyclopedia/mammals" },
      { label: "Animal taxonomy", href: "/animal-taxonomy" },
      { label: "Wildlife", href: "/wildlife" },
      { label: "Animal lifespans", href: "/animal-lifespans" },
    ],
  },

  {
    id: "birds",
    slug: "birds",
    name: "Birds",
    h1: "Bird Comparisons",
    metaTitle: "Bird Comparisons — Raptors, Corvids, Waterfowl & Look-Alikes",
    metaDescription:
      "Compare birds that are easily confused: raptors, corvids, waterfowl, seabirds and parrots. Structure, flight style, voice, range and taxonomy explained.",
    intro: [
      "Bird identification is a skill built on a small number of reliable cues, and comparison pages are an efficient way to learn them. Field observers rarely identify a bird from a single feature; they read a combination of structure, proportion, flight action, voice and habitat, and they weight those cues differently depending on viewing conditions. These pages are organised the same way, leading with the cues that survive poor light and distance rather than the plumage details that only work in the hand.",
      "Several of the most-searched bird pairs are not close relatives at all. Falcons and hawks were reclassified into separate orders once genetic evidence accumulated; falcons turn out to be nearer to parrots and songbirds than to the broad-winged raptors they superficially resemble. Vultures on different continents are a similar story. Where taxonomy has changed, these comparisons explain what changed and why, because older field guides still in circulation say something different.",
      "Voice deserves particular attention. For a large number of confusable bird pairs, the call is the most reliable single discriminator available in the field, and it works when the bird is silhouetted, distant or hidden. Where that is true, the page says so rather than burying it beneath plumage description.",
    ],
    scopeNote:
      "These pages cover identification, relatedness, range, flight and behaviour. They do not give guidance on approaching nests, handling wild birds, keeping native species, trapping, deterrence, or feeding wildlife, and they do not present captive care information for wild species. Injured or grounded wild birds are a matter for a licensed wildlife rehabilitator or your local wildlife authority.",
    howToRead: [
      "Work from structure and proportion first — wing shape, tail length, bill depth and head profile hold up at distance where colour does not.",
      "Treat flight action as a primary cue for raptors and seabirds; wingbeat rhythm distinguishes groups that look alike perched.",
      "Check the range and season before committing to an identification, since many confusable pairs barely overlap.",
      "Where a page names voice as the decisive cue, weight it above plumage — it is usually the most reliable feature available.",
    ],
    faqs: [
      {
        question: "Why do some of these bird pairs turn out to be unrelated?",
        answer:
          "Because flight imposes strong constraints, and birds solving the same aerial problem tend to converge on similar shapes regardless of ancestry. A long-winged soaring bird looks like other long-winged soaring birds. Molecular work over the past two decades has repeatedly shown that visually similar birds sit in quite different parts of the family tree, and several textbook groupings have been substantially rearranged as a result.",
      },
      {
        question: "Can I identify these birds reliably from a photograph?",
        answer:
          "Sometimes, but a still image loses the cues experienced observers rely on most: flight action, call, behaviour and true scale. A photograph taken at an unusual angle can make a small raptor look large and a long tail look short. These pages flag which cues are photograph-friendly and which really need a live observation, so that a tentative identification is recognised as tentative.",
      },
      {
        question: "Are plumage differences between males and females covered?",
        answer:
          "Where the pair requires it, yes. In strongly dimorphic groups such as ducks, a female of one species can resemble a female of another far more closely than she resembles her own mate, so a comparison that only described breeding males would be actively misleading. Seasonal and juvenile plumages are noted where they are a documented source of confusion for that specific pair.",
      },
    ],
    relatedHubPaths: [
      { label: "Birds encyclopedia", href: "/animal-encyclopedia/birds" },
      { label: "Birds hub", href: "/birds" },
      { label: "Birdwatching", href: "/birdwatching" },
      { label: "Bird care", href: "/bird-care" },
    ],
  },

  {
    id: "reptiles-amphibians",
    slug: "reptiles-and-amphibians",
    name: "Reptiles & Amphibians",
    h1: "Reptile and Amphibian Comparisons",
    metaTitle: "Reptile & Amphibian Comparisons — Crocodilians, Snakes, Frogs",
    metaDescription:
      "Compare reptiles and amphibians that are routinely confused: crocodilians, snakes, lizards, turtles, frogs and salamanders. Taxonomy and identification.",
    intro: [
      "Reptiles and amphibians are grouped together by convention rather than by biology, and the pairing is itself a useful starting point. They are not close relatives: amphibians branched off long before the lineage that produced reptiles, birds and mammals, and the differences run right through the skin, the eggs, the life cycle and the physiology. Several pages on this shelf exist mainly to separate the two groups clearly.",
      "Within reptiles, the most valuable comparisons are the crocodilian and squamate ones, because those are where casual identification most often goes wrong and where the stakes of getting it wrong are highest. This shelf treats those pages carefully. It describes documented structural differences — snout profile, tooth arrangement, scale patterns, pupil shape — as biology, while stating plainly that field identification of a live animal is not a safety procedure and must never be used as one.",
      "Amphibian comparisons carry a different emphasis. Permeable skin makes amphibians unusually sensitive to their environment, which is why they feature so heavily in conservation monitoring, and it also explains why the frog-versus-toad and newt-versus-salamander distinctions are ecological stories about moisture and habitat rather than taxonomic ones.",
    ],
    scopeNote:
      "Identification information here is educational. It is not a safety procedure, not a substitute for expert assessment, and never a basis for approaching, handling, capturing, relocating or provoking a wild animal. These pages give no first-aid, no bite or envenomation guidance, and no treatment advice. A suspected bite or sting is a medical emergency — contact emergency services or a poison control centre immediately.",
    howToRead: [
      "Never use an identification cue from this or any page to decide whether an animal is safe to approach — assume it is not.",
      "Note whether a name refers to a species, a genus or a whole family, since several reptile names cover large groups.",
      "Read amphibian pages with skin permeability in mind; it explains most of the habitat and behaviour differences that follow.",
      "Check range before applying a cue, because several diagnostic differences only hold where the two animals actually co-occur.",
    ],
    faqs: [
      {
        question: "Can I use these pages to tell whether an animal is dangerous?",
        answer:
          "No. Please do not. Structural differences described here are documented biology, but applying them to a live animal in the field requires a clear, close, unhurried view that a real encounter rarely provides, and several rules that hold across most of a group have exceptions. Treat any unidentified reptile or amphibian as one to leave alone, keep your distance, and contact your local wildlife authority if an animal needs to be moved.",
      },
      {
        question: "Are reptiles and amphibians closely related?",
        answer:
          "Not particularly. Amphibians split from the lineage leading to reptiles very early in tetrapod evolution, and modern reptiles are more closely related to birds than to any amphibian. The two are usually taught together for historical and practical reasons — overlapping habitats, similar survey methods, shared field-guide coverage — rather than because they form a natural group.",
      },
      {
        question: "Why is venomous versus poisonous distinguished so carefully?",
        answer:
          "Because the two words describe different delivery routes and the distinction matters. Venom is actively introduced through a bite, sting or spine; a poison is harmful when it is eaten, absorbed or touched. Many amphibians are poisonous through skin secretions and are not venomous at all. Using the terms interchangeably makes descriptions of an animal's biology, and of the risk it actually presents, materially wrong.",
      },
    ],
    relatedHubPaths: [
      { label: "Reptiles encyclopedia", href: "/animal-encyclopedia/reptiles" },
      { label: "Reptiles & amphibians taxonomy", href: "/animal-taxonomy/reptiles-amphibians" },
      { label: "Reptiles hub", href: "/reptiles" },
      { label: "Animal senses & adaptations", href: "/animal-senses-and-adaptations" },
    ],
  },

  {
    id: "fish-marine",
    slug: "fish-and-marine-animals",
    name: "Fish & Marine Animals",
    h1: "Fish and Marine Animal Comparisons",
    metaTitle: "Fish & Marine Comparisons — Sharks, Rays, Salmon & Reef Fish",
    metaDescription:
      "Compare marine and freshwater animals: sharks and rays, salmon and trout, aquarium fish, and marine mammals against fish. Anatomy, habitat and ecology.",
    intro: [
      "The single most productive comparison in this category is the one between a fish and a marine mammal, because it corrects a misconception that a great many readers carry without realising it. Dolphins and whales are air-breathing mammals that returned to the sea; sharks are cartilaginous fish that never left it. Everything else follows from that split — how they breathe, how they thermoregulate, how they reproduce, how their tails move, how long they live. Several pages here are built around exactly that divide.",
      "Within fish, the cartilaginous-versus-bony division does comparable work. Sharks, rays and chimaeras have skeletons of cartilage, tooth-like dermal denticles instead of true scales, and no swim bladder, which constrains buoyancy and shapes their whole way of moving. Bony fish took a different route. Pairs that look superficially similar across this divide differ in almost every internal detail.",
      "Freshwater and aquarium comparisons make up the rest of the shelf. These are frequently searched by people setting up a tank, so the pages are careful to describe water chemistry, adult size and social biology as species facts while leaving stocking and husbandry decisions to the dedicated aquarium care cluster.",
    ],
    scopeNote:
      "These pages describe biology, habitat and ecology. They do not give stocking plans, tank parameters as instructions, feeding quantities, breeding protocols, disease treatment, or fishing, capture and handling guidance. Aquarium decisions should be checked against species-specific care references and, where an animal is unwell, a veterinarian experienced with aquatic species.",
    howToRead: [
      "Establish first whether both animals are fish at all — several popular marine pairs cross the fish/mammal or fish/invertebrate line.",
      "Where a page gives adult size for an aquarium species, read it as the size the animal reaches, not the size it is sold at.",
      "Cartilaginous and bony fish differ internally far more than their outward shape suggests; the taxonomy section carries that weight.",
      "Marine range descriptions are depth-and-temperature statements as much as geographic ones.",
    ],
    faqs: [
      {
        question: "Why do dolphins and sharks look so similar if they are unrelated?",
        answer:
          "It is one of the clearest cases of convergent evolution in the animal world. A fast-swimming open-water predator faces the same physical problem regardless of ancestry, and the streamlined, torpedo-shaped body with stabilising fins is an efficient solution to it. Dolphins arrived at that shape from a four-limbed land ancestor and sharks from a fish lineage. The tail gives it away: dolphin flukes are horizontal and beat up and down, shark tails are vertical and sweep side to side.",
      },
      {
        question: "Are aquarium comparisons here care guides?",
        answer:
          "No. They cover what the species is — where it lives naturally, what it eats in the wild, how large it grows, how it behaves toward its own kind and others, and how long it can live. They do not prescribe tank sizes, water parameters, feeding schedules or treatments as instructions. Adult size and social biology are included precisely because they are the facts most often overlooked when an animal is acquired small.",
      },
      {
        question: "Why are size figures for fish given as ranges?",
        answer:
          "Because fish growth is unusually plastic. Many species keep growing through life, and final size responds to temperature, food availability, water chemistry, population density and genetics. Wild adults and captive adults of the same species can differ substantially in both directions. A range with its conditions stated is a more honest description than a single maximum length, which is usually an exceptional record rather than a typical animal.",
      },
    ],
    relatedHubPaths: [
      { label: "Fish hub", href: "/fish" },
      { label: "Aquarium care", href: "/aquarium-care" },
      { label: "Ocean fauna by depth", href: "/fauna" },
      { label: "Animal encyclopedia", href: "/animal-encyclopedia" },
    ],
  },

  {
    id: "insects-invertebrates",
    slug: "insects-and-invertebrates",
    name: "Insects & Invertebrates",
    h1: "Insect and Invertebrate Comparisons",
    metaTitle: "Insect & Invertebrate Comparisons — Bees, Wasps & Spiders",
    metaDescription:
      "Compare insects and invertebrates that look alike: bees and wasps, ants and termites, butterflies and moths, octopus and squid, centipedes and millipedes.",
    intro: [
      "Invertebrates account for the overwhelming majority of animal species, and the everyday names we use for them are correspondingly coarse. 'Bug', 'worm' and 'shellfish' each span groups separated by hundreds of millions of years of evolution. Comparison pages are an efficient corrective, because setting two familiar invertebrates side by side makes the actual boundaries visible in a way that a taxonomic chart does not.",
      "Several of the pairs here separate animals that are not merely different species but different phyla. A centipede and a millipede are both myriapods but belong to separate classes with different body plans and completely different lifestyles — one a fast predator, the other a slow detritivore. An octopus and a squid are both cephalopod molluscs, yet differ in arm count, body support and habitat. Getting these boundaries right changes how the animal is understood.",
      "Pollinator comparisons carry particular practical weight. Distinguishing bees from wasps and from the hoverflies that mimic both is genuinely useful for anyone interested in gardens or food systems, and it also corrects the common assumption that every striped flying insect is a threat. Most are not, and many are pollinators.",
    ],
    scopeNote:
      "These pages cover identification, biology and ecological role. They contain no pest-control, extermination, repellent, trapping or nest-removal instructions, no advice on handling or keeping venomous invertebrates, and no first-aid or treatment guidance for bites and stings. A sting or bite causing a severe or spreading reaction is a medical emergency — contact emergency services immediately.",
    howToRead: [
      "Note the rank being compared: several invertebrate names cover an order or a class rather than a species.",
      "Body-segment counts, leg counts and antenna form are the most reliable structural cues in this group.",
      "Mimicry is common — a harmless species resembling a defended one is a documented strategy, not a coincidence.",
      "Ecological role is often the most useful distinction, and it is frequently the opposite of what the animals' appearance suggests.",
    ],
    faqs: [
      {
        question: "Why do so many harmless insects look like stinging ones?",
        answer:
          "Because resembling a defended animal is an effective defence in itself. Predators that have learned to avoid a stinging insect also avoid anything that looks sufficiently like one, so mimics gain protection without investing in a sting. Hoverflies mimicking bees and wasps are the textbook example, and they can be told apart by wing count, eye size, antenna length and flight behaviour — hovering flight being one of the more accessible cues.",
      },
      {
        question: "Are insects and spiders the same kind of animal?",
        answer:
          "No. Both are arthropods, but insects and arachnids are separate classes that diverged very early. Insects have six legs, bodies in three sections and usually antennae and wings. Spiders have eight legs, bodies in two sections, no antennae and no wings. The difference is easily as significant as the one between a bird and a mammal, and calling both 'bugs' obscures it entirely.",
      },
      {
        question: "Do these pages say which invertebrates are dangerous?",
        answer:
          "They give calm, general context where risk is a documented part of an animal's biology, and no more than that. They do not rank species by danger, publish venom league tables, or provide identification as a safety procedure. Sensational framing tends to make people more likely to interact with an animal rather than less, and the reliable advice for any unfamiliar invertebrate is simply to leave it alone.",
      },
    ],
    relatedHubPaths: [
      { label: "Animal encyclopedia", href: "/animal-encyclopedia" },
      { label: "Pollinators", href: "/wildlife/pollinators" },
      { label: "Animal taxonomy", href: "/animal-taxonomy" },
      { label: "Animal senses & adaptations", href: "/animal-senses-and-adaptations" },
    ],
  },

  {
    id: "look-alikes",
    slug: "look-alike-animals",
    name: "Look-Alike Animals",
    h1: "Look-Alike Animal Comparisons",
    metaTitle: "Look-Alike Animals — Telling Commonly Confused Species Apart",
    metaDescription:
      "Animals that look alike but are not the same: practical identification cues for the species pairs people mix up most, with the reasons they resemble each other.",
    intro: [
      "This shelf collects the pairs people actually mix up. Some resemble each other because they are close relatives that recently diverged; others because unrelated lineages arrived independently at the same solution to the same problem. The distinction matters, because it changes which features can be trusted as identification cues. Inherited similarity tends to run right through the animal, while convergent similarity is usually skin-deep and breaks down as soon as you look at skeletal or developmental detail.",
      "Every page here is organised around cue reliability rather than a list of every difference that exists. A difference only earns its place if it is observable under realistic conditions — visible at distance, stable across the animal's range, present in both sexes and in immature animals, and not dependent on having the animal in the hand. Differences that fail those tests are noted as supplementary rather than presented as diagnostics.",
      "A recurring theme is that regional context does much of the work. A pair that is difficult to separate in the small area where both occur may be trivial to separate anywhere else, simply because only one of them is present. Where that is true, the page leads with range.",
    ],
    scopeNote:
      "Identification here is educational, not a safety or medical procedure. These pages must not be used to decide whether an animal is safe to approach, touch, keep or move, and they give no handling, capture, deterrence, first-aid or treatment guidance. If an animal needs to be moved or is causing a problem, contact your local wildlife authority.",
    howToRead: [
      "Start with range and habitat — geography settles a large share of look-alike questions before any feature is examined.",
      "Prefer cues that hold at distance and in poor light over fine detail that needs the animal in the hand.",
      "Check whether a cue holds for juveniles and both sexes, since many diagnostics only apply to adult males.",
      "Where a page says a single feature is decisive, that feature has been chosen because it survives real viewing conditions.",
    ],
    faqs: [
      {
        question: "Why do unrelated animals end up looking so similar?",
        answer:
          "Convergent evolution. When separate lineages face the same physical problem — moving fast through water, catching insects on the wing, digging through soil, staying hidden on bark — the range of workable solutions is narrow, and natural selection tends to find the same ones repeatedly. The resemblance is real but superficial, and internal anatomy, development and genetics usually reveal the shared ancestry that outward appearance conceals.",
      },
      {
        question: "Is one feature ever enough to tell a pair apart?",
        answer:
          "Occasionally, but it is safer to treat single features as strong evidence rather than proof. Individual animals vary, features can be obscured by posture, lighting, wear or moult, and unusual individuals exist in every population. Where a genuinely decisive feature exists, these pages name it — and they still recommend confirming with a second cue, which is standard practice among experienced field observers.",
      },
      {
        question: "Are commonly confused names always about appearance?",
        answer:
          "No. A good deal of confusion is linguistic rather than visual. Some pairs are mixed up because the same common name is applied to different animals in different countries, some because a name that once described a group has been narrowed by scientists but not in everyday speech, and some because two animals share a name that reflects habitat rather than relatedness. These pages address the naming problem directly where it is the real source of the confusion.",
      },
    ],
    relatedHubPaths: [
      { label: "Animal encyclopedia", href: "/animal-encyclopedia" },
      { label: "Animal taxonomy", href: "/animal-taxonomy" },
      { label: "Animal research sources", href: "/animal-research-sources" },
      { label: "Wildlife", href: "/wildlife" },
    ],
  },

  {
    id: "taxonomy",
    slug: "taxonomy-and-related-groups",
    name: "Taxonomy & Related Groups",
    h1: "Taxonomy and Related Group Comparisons",
    metaTitle: "Animal Taxonomy Comparisons — Species, Groups & Relationships",
    metaDescription:
      "Comparisons that clarify how animal names map onto real groups: species against broader categories, nested names, and pairs whose relationship is misunderstood.",
    intro: [
      "A large share of animal confusion is not about the animals at all — it is about how names map onto groups. Two names may refer to the same rank, or one may sit inside the other, or they may sit at completely different levels of the hierarchy. Comparing a species with a family as though they were equivalent produces nonsense, and this shelf exists to make those mismatches explicit before anything else is said.",
      "The nested case is the most common and the most quietly misleading. Asking how a particular species differs from a broader group it belongs to is a category error in the form of a reasonable question. The honest answer is not a list of differences but an explanation of containment: the species is one member of the group, so it shares the group's defining traits and adds its own on top. Pages of this kind restate the question before answering it.",
      "Taxonomy also moves. Molecular evidence has substantially rearranged several familiar groups within living memory, and older field guides and school textbooks still in circulation reflect the earlier arrangement. Where a comparison sits on ground that has shifted, the page says what changed, roughly when, and what the current consensus is — while noting that consensus is provisional by design.",
    ],
    scopeNote:
      "These pages explain relationships and naming. They do not assert taxonomic rankings as settled where they are actively debated, invent classifications, or present any single authority as final. Where a group is contested, the page reports the disagreement rather than resolving it, and readers who need a current authoritative placement should consult a specialist database for that group.",
    howToRead: [
      "Establish the rank of each name first: species, genus, family and order are not interchangeable.",
      "Where one name contains the other, expect an explanation of containment rather than a list of contrasts.",
      "Treat classification as a current best reconstruction that new evidence can revise, not a fixed fact.",
      "Common names and scientific names often disagree — the page will say which one is doing the misleading.",
    ],
    faqs: [
      {
        question: "Why can't some of these pages give a simple list of differences?",
        answer:
          "Because for nested pairs a difference list would be false. When one name sits inside the other, the species is not an alternative to the group — it is an example of it, and it possesses the group's traits by definition. Presenting them as contrasting options would teach the reader something incorrect. These pages instead explain the containment, then describe what distinguishes that particular member from other members of the same group, which is the question the reader usually meant to ask.",
      },
      {
        question: "How current is the classification used here?",
        answer:
          "It reflects the arrangement in widely used reference databases at the time of the last review, and each page carries that review date. Taxonomy is revised continuously, particularly in groups where molecular data is still accumulating, so a placement stated here may be superseded. Where a group is known to be contested or recently rearranged, the page flags it rather than presenting a single answer with more confidence than the evidence supports.",
      },
      {
        question: "Do common names ever map cleanly onto scientific groups?",
        answer:
          "Sometimes, but far less often than people expect. Common names arose from appearance, habitat, use and folklore long before evolutionary relationships were understood, so they cut across the tree in unpredictable ways. One name can cover several unrelated animals, one animal can have a dozen names, and a name can mean different species in different countries. Each of these pages states which situation applies to the pair in question.",
      },
    ],
    relatedHubPaths: [
      { label: "Animal taxonomy", href: "/animal-taxonomy" },
      { label: "Taxonomy databases", href: "/animal-research-sources/taxonomy-databases" },
      { label: "Animal research sources", href: "/animal-research-sources" },
      { label: "Animal encyclopedia", href: "/animal-encyclopedia" },
    ],
  },

  {
    id: "behavior-adaptations",
    slug: "behavior-and-adaptations",
    name: "Behavior & Adaptations",
    h1: "Behavior and Adaptation Comparisons",
    metaTitle: "Animal Behavior & Adaptation Comparisons — Senses & Movement",
    metaDescription:
      "Compare how animals solve the same problem differently: echolocation, vision, camouflage, migration, social structure and movement, across unrelated lineages.",
    intro: [
      "The comparisons on this shelf are built around a problem rather than a resemblance. Two animals are placed side by side because they face the same challenge — navigating in darkness, hiding in plain sight, crossing a continent, surviving a season without food — and solved it differently, or arrived at similar solutions from different starting points. That framing reveals more about how adaptation works than a straight morphological contrast can.",
      "Convergence is the recurring theme. Echolocation evolved independently in bats and in toothed whales, and comparing the two shows both the shared logic of biological sonar and the different anatomical routes each lineage took to it. Colour change appears in cephalopods and in some lizards through entirely different cellular machinery and for partly different reasons. Placing these side by side is far more informative than treating each in isolation.",
      "These pages are also where FaunaHub is most careful about overstatement. Adaptation attracts superlatives, and superlatives are usually where accuracy goes. Sensory abilities are described in terms of what an animal is documented to detect and under what conditions, not as rankings, and behaviour is described without borrowed human motive.",
    ],
    scopeNote:
      "These pages describe documented behaviour and physiology. They avoid sensory and intelligence rankings, do not attribute human motives, emotions or reasoning to animals beyond what evidence supports, and do not present captive observations as though they were wild behaviour. Where a mechanism is incompletely understood, the page says so rather than filling the gap with a tidy explanation.",
    howToRead: [
      "Note whether an ability is inherited from a shared ancestor or evolved independently — it changes what the comparison means.",
      "Sensory descriptions are about what an animal detects and under what conditions, not about which animal is superior.",
      "Watch for the captive-versus-wild distinction, since much behavioural data comes from captive study and does not always transfer.",
      "Where a mechanism is unresolved, the page reports the uncertainty rather than choosing a clean answer.",
    ],
    faqs: [
      {
        question: "Why are there no rankings of which animal has the best senses?",
        answer:
          "Because sensory systems are specialised rather than ranked. An eye optimised for resolving detail in bright light is not a better eye than one optimised for detecting movement at dusk; they are answers to different problems, and each performs poorly at the other's task. Ranking them requires choosing a single yardstick that suits one animal's ecology and penalises the other's. Describing what each system does well, and under what conditions, is both more accurate and more interesting.",
      },
      {
        question: "Does similar behaviour mean the animals are related?",
        answer:
          "Not reliably. Similar ecological pressures produce similar behaviour across quite unrelated lineages — cooperative hunting, tool use, seasonal migration and long-term pair bonds have all appeared multiple times independently. Behaviour is generally a poorer guide to relatedness than anatomy or genetics. Where these pages compare a behaviour across distant relatives, they say explicitly that the similarity is convergent.",
      },
      {
        question: "How do these pages handle animal intelligence?",
        answer:
          "Carefully, and without scores. There is no meaningful single scale of animal intelligence, and attempts to build one mostly measure how closely a species' cognition resembles our own. These pages describe specific documented capacities — what an animal has been shown to remember, discriminate, learn or solve, and under what test conditions — and note where results come from a small number of captive individuals rather than broad study.",
      },
    ],
    relatedHubPaths: [
      { label: "Animal intelligence & behavior", href: "/animal-intelligence-and-behavior" },
      { label: "Animal senses & adaptations", href: "/animal-senses-and-adaptations" },
      { label: "Animal lifespans", href: "/animal-lifespans" },
      { label: "Wildlife", href: "/wildlife" },
    ],
  },

  {
    id: "habitat-ecology",
    slug: "habitat-and-ecology",
    name: "Habitat & Ecology",
    h1: "Habitat and Ecology Comparisons",
    metaTitle: "Habitat & Ecology Comparisons — Shared Ranges & Roles",
    metaDescription:
      "Compare animals by where they live and what they do there: shared habitats, partitioned niches, equivalent roles on different continents, and range overlap.",
    intro: [
      "This shelf compares animals by their place in an ecosystem rather than by their appearance or ancestry. Two kinds of pairing dominate. The first is animals that genuinely share a habitat and divide it between them — by prey size, by activity period, by vertical layer, by season. The second is ecological equivalents: animals filling closely similar roles on different continents, often from entirely different lineages, which is one of the clearest demonstrations that ecosystems have recurring structures.",
      "Coexistence is the more useful frame for the first group, and it is usually the opposite of what such pairings are assumed to be about. Predators sharing a landscape are typically separated by what they hunt and when they hunt it far more than by direct confrontation. Describing that partitioning explains what each animal actually does all day, which a conflict framing never does.",
      "Range is treated as a dynamic property throughout. Distributions shift with climate, land use, introductions and recovery from historical persecution, so several pairs that barely met a century ago now overlap substantially, and others have been pulled apart. Where a page gives a range, it describes the current documented picture and notes that it is moving.",
    ],
    scopeNote:
      "These pages describe distribution and ecological role. They are not guides to finding, approaching, attracting, feeding, deterring or hunting wildlife, and they do not give location-specific advice about encounters. Range and status information changes; current distribution and conservation data should be confirmed with the IUCN Red List or the relevant national wildlife agency.",
    howToRead: [
      "Look for the partitioning explanation wherever ranges overlap — it is usually the substance of the comparison.",
      "Ecological equivalents on different continents are rarely close relatives; the similarity is in role, not ancestry.",
      "Treat range statements as current and provisional, since distributions move with climate and land use.",
      "Habitat descriptions often carry more identification value than appearance for animals that are hard to observe closely.",
    ],
    faqs: [
      {
        question: "What does it mean for two animals to share a niche?",
        answer:
          "Strictly, two species cannot occupy an identical niche indefinitely in the same place — one eventually displaces the other. What is usually observed instead is close but partitioned overlap: two animals using much of the same habitat while differing in prey size, hunting time, preferred microhabitat or seasonal movement. These pages describe that partitioning specifically, because it is what allows the coexistence to persist.",
      },
      {
        question: "Why compare animals from different continents?",
        answer:
          "Because ecological equivalents reveal structure that a single ecosystem cannot show. When unrelated animals on separate landmasses converge on the same role — a large grazing herbivore, a mid-sized nocturnal insectivore, an apex predator of open country — it demonstrates that ecosystems have recurring functional slots that get filled by whichever lineage is locally available. It is one of the strongest arguments that ecology has general rules rather than only local histories.",
      },
      {
        question: "How current is the range information on these pages?",
        answer:
          "It reflects the documented distribution at the last review, and each page carries that date. Ranges genuinely move: species recovering from historical persecution are recolonising former territory, climate is shifting suitable habitat, and introductions have established populations far outside native ranges. For anything time-sensitive, the IUCN Red List and national wildlife agencies hold more current distribution data than any static page can.",
      },
    ],
    relatedHubPaths: [
      { label: "Wildlife", href: "/wildlife" },
      { label: "Fauna by region", href: "/fauna" },
      { label: "Endangered animals", href: "/endangered-animals" },
      { label: "Animal encyclopedia", href: "/animal-encyclopedia" },
    ],
  },
];

const CATEGORY_BY_ID = new Map<ComparisonCategory, ComparisonCategoryDefinition>(
  COMPARISON_CATEGORIES.map((c) => [c.id, c]),
);
const CATEGORY_BY_SLUG = new Map<string, ComparisonCategoryDefinition>(
  COMPARISON_CATEGORIES.map((c) => [c.slug, c]),
);

export function categoryById(id: ComparisonCategory): ComparisonCategoryDefinition | undefined {
  return CATEGORY_BY_ID.get(id);
}

export function categoryBySlug(slug: string): ComparisonCategoryDefinition | undefined {
  return CATEGORY_BY_SLUG.get(slug);
}

export function categoryPath(category: ComparisonCategory): string {
  const def = CATEGORY_BY_ID.get(category);
  return def ? `/animal-compare/categories/${def.slug}` : "/animal-compare";
}

export function categoryName(category: ComparisonCategory): string {
  return CATEGORY_BY_ID.get(category)?.name ?? category;
}

export const ALL_CATEGORY_IDS: ComparisonCategory[] = COMPARISON_CATEGORIES.map((c) => c.id);
