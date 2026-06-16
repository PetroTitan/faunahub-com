/**
 * Original, cautious narrative content for the detailed endangered-species
 * profiles. Written in FaunaHub's own words — no IUCN assessment text is
 * reproduced, and no population numbers are stated. Threats and ranges shown on
 * these pages are also recorded (and sourced) on the matching species record in
 * `species.ts`.
 */

export interface RedListProfileContent {
  /** One or two short paragraphs of conservation/natural-history context. */
  summary: string[];
  /** A single cautious sentence on ecological importance. */
  whyItMatters: string;
  faq: { question: string; answer: string }[];
  /** Optional link to an existing FaunaHub animal profile. */
  relatedAnimal?: { label: string; href: string };
}

export const RED_LIST_PROFILES: Record<string, RedListProfileContent> = {
  "sumatran-orangutan": {
    summary: [
      "The Sumatran orangutan is one of three orangutan species and lives only in the forests of northern Sumatra, Indonesia. It is assessed as Critically Endangered on the IUCN Red List.",
      "Orangutans are slow-reproducing great apes with unusually long intervals between births, so populations recover slowly once they decline.",
    ],
    whyItMatters:
      "As large, fruit-eating apes, orangutans disperse the seeds of many rainforest trees, giving them an outsized role in keeping Sumatran forests diverse.",
    faq: [
      {
        question: "How many orangutan species are there?",
        answer:
          "Three: the Sumatran orangutan (Pongo abelii), the Bornean orangutan (Pongo pygmaeus), and the Tapanuli orangutan (Pongo tapanuliensis), which was described in 2017. All three are assessed as Critically Endangered.",
      },
      {
        question: "Why is the Sumatran orangutan Critically Endangered?",
        answer:
          "Published assessments point to habitat loss from agriculture and logging, forest fragmentation, and illegal capture for the pet trade. For the current assessment and full detail, see the IUCN Red List.",
      },
    ],
  },
  "california-condor": {
    summary: [
      "The California condor is one of the largest flying birds in North America. After declining to a tiny remnant in the 1980s, every remaining wild bird was brought into a captive-breeding programme, and condors have since been released back into the wild.",
      "It remains Critically Endangered and dependent on active management, but its population trend has been increasing thanks to that sustained recovery effort.",
    ],
    whyItMatters:
      "As a scavenger, the condor helps remove carrion from the landscape, and its rescue is one of the most closely studied examples of intensive species recovery.",
    faq: [
      {
        question:
          "Why is the California condor still Critically Endangered if numbers are rising?",
        answer:
          "Recovery from near-extinction is fragile. The population remains small and dependent on ongoing management, so the species is still Critically Endangered even though its trend is increasing.",
      },
      {
        question: "What is the biggest threat to condors?",
        answer:
          "Lead poisoning from spent ammunition in the carcasses they scavenge is widely reported as a leading threat, alongside habitat pressures and collisions.",
      },
    ],
  },
  "hawksbill-turtle": {
    summary: [
      "The hawksbill is a small sea turtle of tropical reefs around the world, named for its narrow, hawk-like beak. It is assessed as Critically Endangered.",
      "Hawksbills feed heavily on sponges, which shapes the make-up of the reef communities they live on.",
    ],
    whyItMatters:
      "By grazing sponges, hawksbills help maintain the balance of coral-reef ecosystems; they were also hunted historically for the 'tortoiseshell' of their shells.",
    faq: [
      {
        question: "Why are hawksbill turtles Critically Endangered?",
        answer:
          "Published assessments cite the historical and ongoing tortoiseshell trade, loss of nesting beaches and reef habitat, egg collection, and fisheries bycatch.",
      },
      {
        question: "How is the hawksbill different from other sea turtles?",
        answer:
          "Its narrow, pointed beak and overlapping shell scutes set it apart. It specialises on sponges, unlike the largely plant-eating green turtle.",
      },
    ],
    relatedAnimal: { label: "Sea turtle profile", href: "/animals/sea-turtle" },
  },
  "whale-shark": {
    summary: [
      "The whale shark is the largest living fish — a gentle filter-feeder that strains plankton and small fish from warm oceans. It is assessed as Endangered.",
      "Despite its size it is harmless to people, and it gathers seasonally at predictable feeding sites in several parts of the world.",
    ],
    whyItMatters:
      "Whale sharks grow slowly and mature late, which makes their populations slow to rebuild and especially sensitive to fishing pressure and vessel strikes.",
    faq: [
      {
        question: "Is the whale shark a shark or a whale?",
        answer:
          "A shark — the largest fish in the world. It is called a 'whale' shark for its great size and filter-feeding habit, not because it is a mammal.",
      },
      {
        question: "Why is the whale shark Endangered?",
        answer:
          "Published assessments point to targeted and incidental fishing, vessel strikes, and disturbance at the sites where the species gathers to feed.",
      },
    ],
  },
  "staghorn-coral": {
    summary: [
      "Staghorn coral is a fast-growing branching coral that once built much of the structure of Caribbean reefs. It is assessed as Critically Endangered.",
      "Corals are colonial animals, not plants: each branch is constructed by tiny polyps living in partnership with symbiotic algae.",
    ],
    whyItMatters:
      "Branching corals like staghorn create the three-dimensional habitat that reef fish and other animals depend on, so their loss reshapes entire reef communities.",
    faq: [
      {
        question: "Is coral an animal?",
        answer:
          "Yes. Corals are colonial animals related to sea anemones. Reef-building corals host symbiotic algae that supply much of their colour and energy.",
      },
      {
        question: "Why is staghorn coral Critically Endangered?",
        answer:
          "Published assessments cite warming-driven bleaching, coral disease, ocean acidification, and storm damage to reefs.",
      },
    ],
  },
  "snow-leopard": {
    summary: [
      "The snow leopard is an elusive big cat of the high mountains of Central and South Asia, superbly adapted to cold, rugged terrain. It is assessed as Vulnerable on the IUCN Red List.",
      "Its thick coat, long tail, and broad paws suit a life among cliffs and alpine meadows, where it preys mainly on wild sheep and goats.",
    ],
    whyItMatters:
      "As a top predator of high-mountain ecosystems, the snow leopard is an indicator of the health of some of Asia's most important watersheds.",
    faq: [
      {
        question: "Why is the snow leopard Vulnerable rather than Endangered?",
        answer:
          "It was reassessed from Endangered to Vulnerable in 2017 using updated population estimates and criteria. It remains threatened — confirm the current category on the IUCN Red List.",
      },
      {
        question: "Where do snow leopards live?",
        answer:
          "Across the mountains of Central and South Asia, including the Himalaya and Tibetan Plateau, spanning around a dozen countries.",
      },
    ],
  },
  "polar-bear": {
    summary: [
      "The polar bear is the largest living land carnivore — a marine mammal that hunts seals from Arctic sea ice. It is assessed as Vulnerable.",
      "It depends on sea ice to hunt, so the timing and extent of ice strongly shape where and how well polar bears can feed.",
    ],
    whyItMatters:
      "The polar bear sits at the top of the Arctic food web and has become a widely recognised indicator of change in that environment.",
    faq: [
      {
        question: "Why is the polar bear Vulnerable?",
        answer:
          "Published assessments link its outlook to the loss of the sea-ice habitat it depends on for hunting. For the current assessment, see the IUCN Red List.",
      },
      {
        question: "Are polar bears marine mammals?",
        answer:
          "Yes. They are classified as marine mammals because they depend on the sea-ice environment and hunt marine prey.",
      },
    ],
    relatedAnimal: { label: "Bear profile", href: "/animals/bear" },
  },
  "african-wild-dog": {
    summary: [
      "The African wild dog, or painted wolf, is a highly social, pack-hunting canid of sub-Saharan Africa. It is assessed as Endangered.",
      "Packs cooperate closely to hunt and to raise pups, and they range over very large territories.",
    ],
    whyItMatters:
      "As wide-ranging social predators, African wild dogs need large, connected landscapes, so their presence reflects room for wildlife to move.",
    faq: [
      {
        question: "Why is the African wild dog Endangered?",
        answer:
          "Published assessments point to habitat fragmentation, conflict with livestock farmers, disease, and road deaths. See the IUCN Red List for the current assessment.",
      },
      {
        question: "Is the African wild dog a kind of domestic dog?",
        answer:
          "No. It is a distinct species (Lycaon pictus), the only member of its genus, and not closely related enough to domestic dogs to interbreed.",
      },
    ],
  },
  "giant-otter": {
    summary: [
      "The giant otter is the largest otter in the world, a social river predator of tropical South America. It is assessed as Endangered.",
      "Family groups are noisy and conspicuous, fishing together in rivers and oxbow lakes of the Amazon and Pantanal.",
    ],
    whyItMatters:
      "As a top predator of South American waterways, the giant otter reflects the health of those freshwater systems.",
    faq: [
      {
        question: "Why is the giant otter Endangered?",
        answer:
          "Published assessments cite habitat degradation, historical hunting for pelts, pollution, and conflict with fisheries.",
      },
      {
        question: "How big is a giant otter?",
        answer:
          "It is the longest member of the weasel family, noticeably larger than the otters familiar from Europe and North America.",
      },
    ],
    relatedAnimal: { label: "Otter profile", href: "/animals/otter" },
  },
  "andean-condor": {
    summary: [
      "The Andean condor is one of the largest flying birds in the world, a high-soaring scavenger of South America. It is assessed as Vulnerable.",
      "It rides mountain updrafts over the Andes and adjacent coasts, feeding mainly on carrion.",
    ],
    whyItMatters:
      "As a scavenger, the condor helps recycle nutrients across vast Andean landscapes, and it is a cultural icon across the region.",
    faq: [
      {
        question: "Why is the Andean condor Vulnerable?",
        answer:
          "Published assessments point to poisoning — often secondary, from baited carcasses — along with persecution and reduced food availability.",
      },
      {
        question: "How large is the Andean condor?",
        answer:
          "It has one of the largest wingspans of any land bird, letting it soar long distances with little flapping.",
      },
    ],
  },
  kakapo: {
    summary: [
      "The kākāpō is a large, flightless, nocturnal parrot endemic to New Zealand and one of the world's most intensively managed birds. It is assessed as Critically Endangered.",
      "Every known individual is monitored, and the population survives on predator-free islands.",
    ],
    whyItMatters:
      "The kākāpō is a flagship for island conservation and a striking example of how isolated species suffer when mammalian predators arrive.",
    faq: [
      {
        question: "Why can't the kākāpō fly?",
        answer:
          "It evolved in New Zealand without ground predators and became flightless, which left it highly vulnerable once mammals were introduced.",
      },
      {
        question: "Is the kākāpō population growing?",
        answer:
          "Intensive management has increased numbers in recent years, but the species remains Critically Endangered and dependent on that management.",
      },
    ],
    relatedAnimal: { label: "Parrot profile", href: "/animals/parrot" },
  },
  "leatherback-turtle": {
    summary: [
      "The leatherback is the largest sea turtle and the only one without a hard shell, instead having a leathery, ridged carapace. It is assessed as Vulnerable globally.",
      "It makes some of the longest migrations of any reptile and feeds largely on jellyfish.",
    ],
    whyItMatters:
      "By feeding on jellyfish across ocean basins, leatherbacks fill a role in marine food webs that few other reptiles do.",
    faq: [
      {
        question: "Why is the leatherback only Vulnerable globally?",
        answer:
          "The global assessment is Vulnerable, but several regional sub-populations are assessed as Critically Endangered. Check the relevant entry on the IUCN Red List.",
      },
      {
        question: "What do leatherback turtles eat?",
        answer:
          "Mainly jellyfish and other soft-bodied animals, which makes floating plastic a particular hazard for them.",
      },
    ],
    relatedAnimal: { label: "Sea turtle profile", href: "/animals/sea-turtle" },
  },
  "great-white-shark": {
    summary: [
      "The great white shark is a large, powerful predatory fish found in temperate and subtropical seas worldwide. It is assessed as Vulnerable.",
      "It is slow-growing and late-maturing, which makes its populations slow to recover from losses.",
    ],
    whyItMatters:
      "As an apex predator, the great white helps shape marine communities; its slow life history also makes it sensitive to fishing pressure.",
    faq: [
      {
        question: "Why is the great white shark Vulnerable?",
        answer:
          "Published assessments point to targeted and incidental fishing, bycatch, and demand for jaws, teeth, and fins.",
      },
      {
        question: "Are great white sharks common?",
        answer:
          "They are naturally uncommon apex predators, and their slow reproduction means populations recover slowly — part of why they are considered Vulnerable.",
      },
    ],
    relatedAnimal: { label: "Shark profile", href: "/animals/shark" },
  },
  axolotl: {
    summary: [
      "The axolotl is a salamander famous for keeping its larval form — including feathery external gills — throughout life, a trait called neoteny. Its wild population is assessed as Critically Endangered.",
      "Although axolotls are common in aquariums and laboratories worldwide, the wild population survives only in the remnant lake and canal system of Xochimilco near Mexico City.",
    ],
    whyItMatters:
      "The axolotl is a key model animal for studying regeneration, and its situation shows how a species can be abundant in captivity yet nearly gone in the wild.",
    faq: [
      {
        question: "If axolotls are everywhere in pet shops, why are they endangered?",
        answer:
          "The captive and pet populations are large, but the IUCN assessment concerns the wild population in Xochimilco, which is Critically Endangered due to habitat loss, water pollution, and invasive fish.",
      },
      {
        question: "Why does the axolotl keep its gills?",
        answer:
          "It is neotenic — it reaches adulthood while retaining larval features such as external gills, instead of metamorphosing onto land like most salamanders.",
      },
    ],
  },
};
