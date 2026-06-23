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
  okapi: {
    summary: [
      "The okapi is a forest-dwelling relative of the giraffe, endemic to the rainforests of the Democratic Republic of the Congo. It is assessed as Endangered.",
      "Its dark coat and boldly striped hindquarters provide camouflage in dense forest; it was unknown to Western science until the early 1900s.",
    ],
    whyItMatters:
      "Found nowhere else, the shy okapi is a flagship for Congo Basin rainforest and an indicator of how secure that forest is.",
    faq: [
      { question: "Is the okapi related to the zebra?", answer: "No. Despite its striped legs, the okapi is the only living relative of the giraffe, not a member of the horse or zebra family." },
      { question: "Why is the okapi Endangered?", answer: "Published assessments point to habitat loss from logging and settlement, hunting, and instability in parts of its range." },
    ],
    relatedAnimal: { label: "Giraffe profile", href: "/animals/giraffe" },
  },
  bonobo: {
    summary: [
      "The bonobo is, with the chimpanzee, one of humanity's two closest living relatives. It lives only south of the Congo River in the Democratic Republic of the Congo and is assessed as Endangered.",
      "Bonobos are known for cooperative, female-centred societies.",
    ],
    whyItMatters:
      "As a great ape found in just one country, the bonobo is a flagship for Congo Basin conservation and key to understanding our own evolution.",
    faq: [
      { question: "What is the difference between a bonobo and a chimpanzee?", answer: "They are separate species. Bonobos are slightly more slender, live only south of the Congo River, and are noted for more cooperative social behaviour." },
      { question: "Why is the bonobo Endangered?", answer: "Published assessments cite poaching for bushmeat, habitat loss and fragmentation, and civil instability across its range." },
    ],
    relatedAnimal: { label: "Chimpanzee profile", href: "/animals/chimpanzee" },
  },
  "proboscis-monkey": {
    summary: [
      "The proboscis monkey is a large, pot-bellied monkey endemic to Borneo, famous for the male's pendulous nose. It is assessed as Endangered.",
      "It lives in coastal mangrove, swamp, and riverside forest and is an accomplished swimmer.",
    ],
    whyItMatters:
      "As a specialist of Borneo's coastal forests, the proboscis monkey reflects the health of mangrove and riverine habitats that also help protect coastlines.",
    faq: [
      { question: "Why do male proboscis monkeys have such large noses?", answer: "The big nose is a sexual signal that amplifies calls and is thought to attract females. Only males develop the prominent nose." },
      { question: "Why is the proboscis monkey Endangered?", answer: "Published assessments cite loss of mangrove and lowland forest, conversion of habitat to oil-palm plantations, and hunting." },
    ],
  },
  dhole: {
    summary: [
      "The dhole, or Asiatic wild dog, is a social pack-hunting canid found across parts of South, Southeast, and East Asia. It is assessed as Endangered.",
      "Packs are highly cooperative and keep in contact with distinctive whistles.",
    ],
    whyItMatters:
      "As a wide-ranging social predator, the dhole needs large, prey-rich landscapes, so its presence signals intact forest ecosystems.",
    faq: [
      { question: "Is the dhole the same as a wolf or jackal?", answer: "No. The dhole is a distinct species (Cuon alpinus), the only member of its genus, though it belongs to the dog family." },
      { question: "Why is the dhole Endangered?", answer: "Published assessments cite habitat loss and fragmentation, depletion of wild prey, and persecution and disease linked to domestic dogs." },
    ],
  },
  gharial: {
    summary: [
      "The gharial is a fish-eating crocodilian with an extremely long, narrow snout, restricted to a few river systems of the northern Indian subcontinent. It is assessed as Critically Endangered.",
      "Males develop a bulbous growth, the 'ghara', at the tip of the snout.",
    ],
    whyItMatters:
      "As a specialist of clean, flowing rivers with sandbanks, the gharial is an indicator of healthy river systems across South Asia.",
    faq: [
      { question: "How is a gharial different from a crocodile?", answer: "The gharial has a much thinner, longer snout adapted for catching fish and rarely takes large prey. It sits in its own family within the crocodilians." },
      { question: "Why is the gharial Critically Endangered?", answer: "Published assessments cite loss of riverine sandbank habitat, dams and water extraction, and deaths in fishing nets." },
    ],
    relatedAnimal: { label: "Crocodile profile", href: "/animals/crocodile" },
  },
  shoebill: {
    summary: [
      "The shoebill is a tall wading bird of central African wetlands, instantly recognisable by its enormous shoe-shaped bill. It is assessed as Vulnerable.",
      "It hunts fish — especially lungfish — with patient, motionless stalking.",
    ],
    whyItMatters:
      "As a wetland specialist, the shoebill depends on extensive undisturbed swamps, making it a flagship for African wetland conservation.",
    faq: [
      { question: "Is the shoebill a stork?", answer: "It was long grouped with storks, but it is now placed in its own family, more closely allied with pelicans and herons." },
      { question: "Why is the shoebill Vulnerable?", answer: "Published assessments cite wetland degradation and drainage, disturbance and nest destruction, and capture for the bird trade." },
    ],
  },
  "amur-leopard": {
    summary: [
      "The Amur leopard is a rare northern subspecies of the leopard that lives in the cold temperate forests of the Russian Far East and adjacent north-east China. It is assessed as Critically Endangered on the IUCN Red List.",
      "Adapted to snowy winters, it grows a thick, pale coat with widely spaced rosettes — a striking contrast to leopards of the tropics.",
    ],
    whyItMatters:
      "As the top cat of its forests, the Amur leopard helps keep deer and other prey populations in balance, and its recovery is a high-profile test of cross-border conservation.",
    faq: [
      {
        question: "How many Amur leopards are left?",
        answer:
          "It remains one of the rarest big cats, but coordinated protection across Russia and China has reportedly lifted numbers from a few dozen to over a hundred. For the current assessment, see the IUCN Red List.",
      },
      {
        question: "Is the Amur leopard a separate species?",
        answer:
          "No. It is a subspecies of the leopard (Panthera pardus orientalis), adapted to a far colder climate than most leopards, with a thicker coat and paler colouring.",
      },
    ],
    relatedAnimal: { label: "Leopard profile", href: "/animals/leopard" },
  },
  "iberian-lynx": {
    summary: [
      "The Iberian lynx is a medium-sized, heavily spotted cat of Spain and Portugal, with bold ear tufts and a ruff of facial fur. After teetering on the edge of extinction, it is now assessed as Vulnerable — a rare conservation success story.",
      "It is a specialist hunter that depends heavily on a single prey animal, the European rabbit.",
    ],
    whyItMatters:
      "The Iberian lynx is one of the clearest examples that intensive, sustained conservation — captive breeding, habitat restoration, and prey recovery — can pull a species back from the brink.",
    faq: [
      {
        question: "Why did the Iberian lynx nearly go extinct?",
        answer:
          "Published assessments point to crashes in its main prey (the European rabbit, hit by disease), along with habitat loss, fragmentation, and deaths on roads. At its low point only a few hundred remained.",
      },
      {
        question: "Is the Iberian lynx recovering?",
        answer:
          "Yes. It was reportedly down-listed from Endangered to Vulnerable in 2024 after years of recovery. Confirm the current category on the live IUCN Red List entry.",
      },
    ],
    relatedAnimal: { label: "Lynx profile", href: "/animals/lynx" },
  },
  "philippine-eagle": {
    summary: [
      "The Philippine eagle is one of the largest and most powerful eagles in the world, endemic to old-growth rainforest in the Philippines. It is assessed as Critically Endangered on the IUCN Red List.",
      "A forest apex predator, it hunts animals as large as flying lemurs, monkeys, and other birds, and pairs raise a single chick over a long period.",
    ],
    whyItMatters:
      "As the national bird of the Philippines and a top forest predator, it is a flagship for protecting the country's remaining old-growth rainforest.",
    faq: [
      {
        question: "Why is the Philippine eagle Critically Endangered?",
        answer:
          "Published assessments cite the loss of old-growth forest to logging and agriculture, hunting and shooting, and a naturally very low reproductive rate. See the IUCN Red List for the current assessment.",
      },
      {
        question: "How big is the Philippine eagle?",
        answer:
          "It is among the largest eagles on Earth by length and wing surface, with a tall shaggy crest and a massive bill. Each breeding pair needs a large territory of intact forest.",
      },
    ],
    relatedAnimal: { label: "Eagle profile", href: "/animals/eagle" },
  },
  addax: {
    summary: [
      "The addax is a pale desert antelope of the Sahara, with long, gently spiralled horns and wide hooves suited to soft sand. It is assessed as Critically Endangered, and is now extremely rare in the wild.",
      "Superbly adapted to extreme desert, it can survive long periods without drinking, drawing moisture from its food.",
    ],
    whyItMatters:
      "The addax is one of the most desert-adapted large mammals alive, and its near-disappearance is a stark indicator of how heavily the Sahara's wildlife has been hunted.",
    faq: [
      {
        question: "Why is the addax Critically Endangered?",
        answer:
          "Published assessments cite uncontrolled hunting, disturbance from oil exploration, and drought and habitat degradation. Only a tiny wild population is thought to remain, though it is also kept in captivity. See the IUCN Red List.",
      },
      {
        question: "How does the addax survive in the desert?",
        answer:
          "It can go for long periods without drinking, getting most of its water from the desert plants it eats, and its splayed hooves help it walk on loose sand.",
      },
    ],
  },
  vaquita: {
    summary: [
      "The vaquita is a tiny porpoise found only in the northern Gulf of California in Mexico — the smallest range of any marine mammal. It is assessed as Critically Endangered and is widely reported to be the most endangered marine mammal in the world.",
      "It is rarely seen, with distinctive dark rings around the eyes and dark lip patches.",
    ],
    whyItMatters:
      "The vaquita's plight shows how a single, indirect pressure — drowning in fishing nets set for other species — can drive an animal to the edge of extinction.",
    faq: [
      {
        question: "Why is the vaquita so endangered?",
        answer:
          "Published assessments point to drowning as accidental bycatch in illegal gillnets, especially those set for the totoaba fish. Because the population is now extremely small, every loss matters. See the IUCN Red List.",
      },
      {
        question: "Where do vaquitas live?",
        answer:
          "Only in the shallow, murky waters of the northern Gulf of California (Sea of Cortez), Mexico. They are found nowhere else on Earth.",
      },
    ],
  },
  "sumatran-rhinoceros": {
    summary: [
      "The Sumatran rhinoceros is the smallest living rhino and the only Asian rhino with two horns. Notably hairy, it is a relative of the extinct woolly rhinoceros. It is assessed as Critically Endangered.",
      "It survives only in small, scattered rainforest populations, which makes finding mates very difficult.",
    ],
    whyItMatters:
      "As a browsing forest rhino, it helps shape rainforest vegetation, and its survival now depends on bringing isolated animals together to breed.",
    faq: [
      {
        question: "Why is the Sumatran rhinoceros Critically Endangered?",
        answer:
          "Published assessments cite very small, fragmented populations with few breeding opportunities, a history of poaching for horn, and habitat loss. See the IUCN Red List for the current assessment.",
      },
      {
        question: "What makes the Sumatran rhino unusual?",
        answer:
          "It is the smallest rhino, has two horns, and is covered in coarse hair — features that link it to the Ice Age woolly rhinoceros.",
      },
    ],
    relatedAnimal: { label: "Rhinoceros profile", href: "/animals/rhinoceros" },
  },
  "javan-rhinoceros": {
    summary: [
      "The Javan rhinoceros is one of the rarest large mammals on Earth, now confined to a single protected area on Java, Indonesia. It is assessed as Critically Endangered.",
      "It is a solitary, browsing forest rhino with a single horn, and its entire survival depends on one small population.",
    ],
    whyItMatters:
      "With the species reduced to one site, the Javan rhino is a stark reminder of how a single threat — disease, a tsunami, or poaching — could end an entire species.",
    faq: [
      {
        question: "Where do Javan rhinos still live?",
        answer:
          "Only in Ujung Kulon National Park on the Indonesian island of Java. The species once ranged across Southeast Asia but is now restricted to this one site.",
      },
      {
        question: "Why is the Javan rhino so endangered?",
        answer:
          "Published assessments cite its single, very small population (vulnerable to disease and natural disaster), a history of poaching for horn, and habitat pressures. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Rhinoceros profile", href: "/animals/rhinoceros" },
  },
  "black-rhinoceros": {
    summary: [
      "The black rhinoceros is a browsing African rhino with a hooked upper lip for feeding on shrubs. It is assessed as Critically Endangered, though intensive protection has helped some populations recover.",
      "It is generally solitary and, despite the name, is grey rather than black.",
    ],
    whyItMatters:
      "As a large browser, the black rhino shapes the vegetation of African savannas, and it is a flagship for anti-poaching and protected-area efforts.",
    faq: [
      {
        question: "What is the difference between black and white rhinos?",
        answer:
          "Both are grey; the names do not reflect colour. The black rhino has a pointed, hooked lip for browsing shrubs, while the white rhino has a wide, square lip for grazing grass.",
      },
      {
        question: "Why are black rhinos Critically Endangered?",
        answer:
          "Published assessments point to poaching for horn and habitat loss. Numbers crashed dramatically in the 20th century, though protection has since helped some populations recover. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Rhinoceros profile", href: "/animals/rhinoceros" },
  },
  "asian-elephant": {
    summary: [
      "The Asian elephant is the largest land animal in Asia and is smaller-eared than its African relatives. It is assessed as Endangered.",
      "It is a highly social, intelligent herbivore that lives in family groups led by older females.",
    ],
    whyItMatters:
      "As a 'megagardener' that disperses seeds and shapes forests over huge areas, the Asian elephant is both an ecological keystone and a deep cultural symbol across Asia.",
    faq: [
      {
        question: "How is the Asian elephant different from the African elephant?",
        answer:
          "Asian elephants are generally smaller with much smaller ears, a more domed head, and usually only males carry large tusks. They are a separate species from Africa's elephants.",
      },
      {
        question: "Why is the Asian elephant Endangered?",
        answer:
          "Published assessments cite habitat loss and fragmentation, conflict with people as elephants and farms overlap, and poaching and capture. See the IUCN Red List for detail.",
      },
    ],
    relatedAnimal: { label: "Elephant profile", href: "/animals/elephant" },
  },
  "sea-otter": {
    summary: [
      "The sea otter is a marine mammal of the North Pacific that famously uses tools and wraps itself in kelp to rest. It is assessed as Endangered.",
      "It has the densest fur of any animal and eats sea urchins and other invertebrates.",
    ],
    whyItMatters:
      "By eating sea urchins, sea otters protect kelp forests from being overgrazed — a classic example of a keystone species shaping an entire ecosystem.",
    faq: [
      {
        question: "Why are sea otters important to kelp forests?",
        answer:
          "They eat sea urchins, which would otherwise overgraze and destroy kelp. By keeping urchin numbers down, sea otters allow kelp forests — and the many species that depend on them — to thrive.",
      },
      {
        question: "Why is the sea otter Endangered?",
        answer:
          "Published assessments note that, although recovering from near-extinction caused by the historical fur trade, sea otters remain vulnerable to oil spills, entanglement, and other pressures. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Otter profile", href: "/animals/otter" },
  },
  "sunda-pangolin": {
    summary: [
      "The Sunda pangolin is a scale-covered, ant- and termite-eating mammal of Southeast Asia. It is assessed as Critically Endangered.",
      "When threatened it rolls into an armoured ball, but this is no defence against human hunters.",
    ],
    whyItMatters:
      "Pangolins are among the most heavily trafficked wild mammals in the world, making the Sunda pangolin a symbol of the global fight against the illegal wildlife trade.",
    faq: [
      {
        question: "Why are pangolins so heavily trafficked?",
        answer:
          "They are hunted for their keratin scales, used in some traditional medicines, and for their meat. This demand has made pangolins among the most trafficked wild mammals on Earth.",
      },
      {
        question: "Why is the Sunda pangolin Critically Endangered?",
        answer:
          "Published assessments cite intense poaching and trafficking together with habitat loss. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Pangolin profile", href: "/animals/pangolin" },
  },
  "blue-whale": {
    summary: [
      "The blue whale is the largest animal known to have ever lived, reaching around 30 metres. It is assessed as Endangered.",
      "It feeds almost entirely on tiny krill, filtering vast amounts of seawater through baleen plates.",
    ],
    whyItMatters:
      "As the largest animal ever, the blue whale's slow recovery from industrial whaling is one of conservation's most important tests, and the species helps cycle nutrients through the oceans.",
    faq: [
      {
        question: "How big is a blue whale?",
        answer:
          "It is the largest animal known to have lived, reaching roughly 30 metres long and weighing well over 100 tonnes — larger than any dinosaur for which we have good evidence.",
      },
      {
        question: "Why is the blue whale Endangered?",
        answer:
          "Industrial whaling drastically reduced blue whale numbers in the 20th century. Although now protected and slowly recovering, they remain threatened by ship strikes and entanglement. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Whale profile", href: "/animals/whale" },
  },
  "north-atlantic-right-whale": {
    summary: [
      "The North Atlantic right whale is one of the most endangered large whales, with only a few hundred individuals left. It is assessed as Critically Endangered.",
      "It is a slow-moving coastal baleen whale that skims plankton at the surface.",
    ],
    whyItMatters:
      "With so few individuals remaining and deaths from ships and fishing gear outpacing births in some years, this whale is a high-stakes test of whether shipping and fisheries can be made wildlife-safe.",
    faq: [
      {
        question: "Why is the North Atlantic right whale so endangered?",
        answer:
          "Published assessments cite ship strikes and entanglement in fishing gear as leading causes of death, against a backdrop of a very small population. See the IUCN Red List for the current assessment.",
      },
      {
        question: "Why is it called a 'right' whale?",
        answer:
          "Whalers reportedly considered it the 'right' whale to hunt because it is slow, floats when killed, and stays near coasts — the very traits that made it easy to overhunt.",
      },
    ],
    relatedAnimal: { label: "Whale profile", href: "/animals/whale" },
  },
  "red-wolf": {
    summary: [
      "The red wolf is a slender North American canid, smaller than the grey wolf. It is assessed as Critically Endangered and survives largely through captive breeding and reintroduction.",
      "Once declared extinct in the wild, it was reintroduced from captive animals.",
    ],
    whyItMatters:
      "The red wolf is one of the world's most threatened canids and a landmark — and contested — case study in captive breeding, reintroduction, and managing hybridisation.",
    faq: [
      {
        question: "Is the red wolf a separate species?",
        answer:
          "Its exact status has been debated, but it is widely managed as a distinct, critically endangered North American wolf. Hybridisation with coyotes is one of the challenges to its recovery.",
      },
      {
        question: "Why is the red wolf Critically Endangered?",
        answer:
          "Published assessments cite its very small population, hybridisation with coyotes, and human-caused mortality. It survives largely thanks to captive breeding and reintroduction. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Wolf profile", href: "/animals/wolf" },
  },
  "ethiopian-wolf": {
    summary: [
      "The Ethiopian wolf is Africa's most threatened carnivore and rarest canid, found only in the high mountains of Ethiopia. It is assessed as Endangered.",
      "It is a specialist hunter of Afroalpine rodents and lives in packs.",
    ],
    whyItMatters:
      "As Africa's rarest canid and a specialist of fragile mountain ecosystems, the Ethiopian wolf is a flagship for protecting the threatened Afroalpine 'roof of Africa'.",
    faq: [
      {
        question: "What does the Ethiopian wolf eat?",
        answer:
          "It specialises in hunting Afroalpine rodents, such as giant mole-rats and grass rats, which are abundant in its high mountain habitat.",
      },
      {
        question: "Why is the Ethiopian wolf Endangered?",
        answer:
          "Published assessments cite its tiny, fragmented range, deadly diseases such as rabies caught from domestic dogs, and habitat loss to high-altitude farming. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Wolf profile", href: "/animals/wolf" },
  },
  "saola": {
    summary: [
      "The saola is one of the world's rarest and least-known large mammals, a forest-dwelling relative of wild cattle with two long, parallel horns. It is assessed as Critically Endangered.",
      "Discovered by science only in 1992, it is so rarely seen that it is sometimes called the 'Asian unicorn'.",
    ],
    whyItMatters:
      "Found nowhere else on Earth and barely glimpsed since its discovery, the saola is a symbol of how much remains unknown — and how easily a species can vanish before we understand it.",
    faq: [
      {
        question: "When was the saola discovered?",
        answer:
          "It was discovered by science only in 1992, in the Annamite Mountains of Vietnam and Laos — one of the most remarkable large-mammal discoveries of the 20th century.",
      },
      {
        question: "Why is the saola Critically Endangered?",
        answer:
          "Published assessments highlight snaring (wire traps set for other animals), hunting, and its tiny, elusive population. It is so rarely seen that even confirming its status is difficult. See the IUCN Red List.",
      },
    ],
  },
  "golden-lion-tamarin": {
    summary: [
      "The golden lion tamarin is a small, brilliantly orange monkey of Brazil's Atlantic Forest, named for its lion-like mane. It is assessed as Endangered.",
      "It lives in family groups and was brought back from the brink by captive breeding and reintroduction.",
    ],
    whyItMatters:
      "The golden lion tamarin is one of the best-known conservation success stories, showing how zoos, reintroduction, and forest restoration can rebuild a species — yet it remains dependent on protecting the highly fragmented Atlantic Forest.",
    faq: [
      {
        question: "Why is the golden lion tamarin famous in conservation?",
        answer:
          "It is a celebrated example of recovery: captive breeding in zoos, reintroduction to the wild, and forest protection helped rebuild the population from a very low point.",
      },
      {
        question: "Why is it still Endangered?",
        answer:
          "Published assessments cite the loss and fragmentation of its Atlantic Forest home, which leaves small, isolated populations. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Tamarin profile", href: "/animals/tamarin" },
  },
  "bornean-orangutan": {
    summary: [
      "The Bornean orangutan is one of three orangutan species, a large, mostly solitary, tree-dwelling great ape. It is assessed as Critically Endangered.",
      "Like all orangutans it reproduces very slowly, so populations recover only gradually.",
    ],
    whyItMatters:
      "As a large, fruit-eating ape, the Bornean orangutan disperses rainforest seeds and is a flagship for protecting Borneo's threatened forests.",
    faq: [
      {
        question: "How many orangutan species are there?",
        answer:
          "Three: the Bornean, Sumatran, and Tapanuli orangutans. All three are assessed as Critically Endangered.",
      },
      {
        question: "Why is the Bornean orangutan Critically Endangered?",
        answer:
          "Published assessments cite deforestation (including for palm oil), habitat fragmentation, and killing or capture, compounded by a naturally slow reproductive rate. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Orangutan profile", href: "/animals/orangutan" },
  },
  "spixs-macaw": {
    summary: [
      "Spix's macaw is a small blue parrot from Brazil, made famous as the inspiration for the film 'Rio'. It is assessed as Critically Endangered and was for years considered Extinct in the Wild.",
      "It survives thanks to captive breeding, with reintroductions returning birds to their native range.",
    ],
    whyItMatters:
      "Spix's macaw is a defining case of a species saved from total loss by captive breeding — and of how hard it is to rebuild a wild population once it disappears.",
    faq: [
      {
        question: "Is Spix's macaw extinct?",
        answer:
          "It was considered Extinct in the Wild for years, surviving only in captivity. Captive breeding and reintroduction efforts have since returned birds to Brazil, but the species remains Critically Endangered.",
      },
      {
        question: "Why did Spix's macaw disappear from the wild?",
        answer:
          "Published assessments cite trapping for the cage-bird trade and the loss of its specialised dry-forest habitat. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Parrot profile", href: "/animals/parrot" },
  },
  "harpy-eagle": {
    summary: [
      "The harpy eagle is one of the largest and most powerful eagles in the world, a top predator of Neotropical rainforests. It is assessed as Vulnerable.",
      "It hunts tree-dwelling mammals such as sloths and monkeys with enormous talons.",
    ],
    whyItMatters:
      "As a rainforest apex predator that needs large areas of intact forest, the harpy eagle is a flagship for protecting the lowland forests of the Americas.",
    faq: [
      {
        question: "How powerful is the harpy eagle?",
        answer:
          "It is among the most powerful raptors on Earth, with massive talons it uses to seize tree-dwelling prey such as sloths and monkeys.",
      },
      {
        question: "Why is the harpy eagle declining?",
        answer:
          "Published assessments cite deforestation, shooting, and a naturally slow reproductive rate (pairs raise few young). See the IUCN Red List for detail.",
      },
    ],
    relatedAnimal: { label: "Eagle profile", href: "/animals/eagle" },
  },
  "african-penguin": {
    summary: [
      "The African penguin is the only penguin that breeds in Africa, recognisable by its braying call and the black band across its chest. It is assessed as Critically Endangered.",
      "Its numbers have fallen sharply as the small fish it eats have become scarcer near its colonies.",
    ],
    whyItMatters:
      "A fast-declining seabird off southern Africa, the African penguin is a visible indicator of the health of the region's fisheries and marine ecosystem.",
    faq: [
      {
        question: "Why does a penguin live in Africa?",
        answer:
          "Cool, nutrient-rich currents along southern Africa's coast support the fish that African penguins eat, allowing penguins to breed there despite the warm continent.",
      },
      {
        question: "Why is the African penguin Critically Endangered?",
        answer:
          "Published assessments cite shortages of the small prey fish it depends on, along with oil pollution and historical exploitation. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Penguin profile", href: "/animals/penguin" },
  },
  "whooping-crane": {
    summary: [
      "The whooping crane is the tallest bird in North America and one of its most famous conservation cases. It is assessed as Endangered.",
      "It nearly vanished to a few birds in the mid-20th century and has slowly recovered through intensive protection.",
    ],
    whyItMatters:
      "Brought back from around two dozen birds, the whooping crane is a landmark in modern conservation and a test of long-term, cross-border recovery efforts.",
    faq: [
      {
        question: "How close did the whooping crane come to extinction?",
        answer:
          "Its population fell to roughly two dozen birds in the mid-20th century. Decades of intensive protection and captive breeding have since helped numbers slowly recover.",
      },
      {
        question: "Why is the whooping crane still Endangered?",
        answer:
          "Published assessments cite its small population, dependence on specific wetland habitats along long migration routes, and risks such as collisions. See the IUCN Red List.",
      },
    ],
  },
  "grey-parrot": {
    summary: [
      "The grey parrot (African grey) is a highly intelligent parrot renowned for its ability to mimic speech. It is assessed as Endangered.",
      "Wild populations have been heavily reduced by capture for the pet trade.",
    ],
    whyItMatters:
      "One of the most popular pet birds in the world, the grey parrot shows how demand for wild-caught pets can drive a common, intelligent species toward decline.",
    faq: [
      {
        question: "Why are grey parrots Endangered?",
        answer:
          "Published assessments cite intense trapping for the international pet trade together with habitat loss. Huge numbers have been removed from the wild. See the IUCN Red List.",
      },
      {
        question: "Are grey parrots really that intelligent?",
        answer:
          "They are famous for advanced mimicry and problem-solving, and some have been studied for apparent understanding of words and concepts — part of why they are so sought after as pets.",
      },
    ],
    relatedAnimal: { label: "Parrot profile", href: "/animals/parrot" },
  },
  "helmeted-hornbill": {
    summary: [
      "The helmeted hornbill is a large Southeast Asian hornbill with a solid casque on its bill, unusual among hornbills. It is assessed as Critically Endangered.",
      "Its casque is carved like ivory, which has made it a target for poachers.",
    ],
    whyItMatters:
      "As a large fruit-eater, the helmeted hornbill disperses rainforest seeds, and its plight highlights a lesser-known but severe form of wildlife trafficking.",
    faq: [
      {
        question: "Why is the helmeted hornbill poached?",
        answer:
          "Unlike other hornbills, it has a solid casque that can be carved like ivory ('red ivory'), making it a target for the illegal wildlife trade.",
      },
      {
        question: "Why is it Critically Endangered?",
        answer:
          "Published assessments cite heavy poaching for its casque alongside deforestation across its range. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Hornbill profile", href: "/animals/hornbill" },
  },
  "spoon-billed-sandpiper": {
    summary: [
      "The spoon-billed sandpiper is a small migratory shorebird with a unique spatula-shaped bill. It is assessed as Critically Endangered.",
      "Its long migration depends on a chain of coastal wetlands that are rapidly being lost.",
    ],
    whyItMatters:
      "This tiny, distinctive shorebird is a flagship for protecting the threatened intertidal wetlands of the East Asian–Australasian Flyway, on which countless migratory birds depend.",
    faq: [
      {
        question: "What makes the spoon-billed sandpiper unique?",
        answer:
          "Its bill is flattened into a small spoon or spatula shape at the tip, which it sweeps side to side while feeding — unlike any other sandpiper.",
      },
      {
        question: "Why is it Critically Endangered?",
        answer:
          "Published assessments cite the loss of coastal stopover wetlands along its migration route, trapping, and its very small population. See the IUCN Red List.",
      },
    ],
  },
  "hyacinth-macaw": {
    summary: [
      "The hyacinth macaw is the largest flying parrot in the world, a striking cobalt-blue bird of South America. It is assessed as Vulnerable.",
      "It has a massive bill adapted to crack hard palm nuts.",
    ],
    whyItMatters:
      "As a large, specialised seed-eater and the biggest of the macaws, the hyacinth macaw is both a flagship for South American wetlands and a conservation recovery story.",
    faq: [
      {
        question: "How big is the hyacinth macaw?",
        answer:
          "It is the largest flying parrot in the world by length, with a wingspan over a metre and a powerful bill that can crack very hard palm nuts.",
      },
      {
        question: "Why is the hyacinth macaw Vulnerable?",
        answer:
          "Published assessments cite past heavy trapping for the pet trade and ongoing habitat loss, though conservation work has helped some populations. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Parrot profile", href: "/animals/parrot" },
  },
  "kemps-ridley-turtle": {
    summary: [
      "Kemp's ridley is the smallest and one of the most endangered sea turtles, assessed as Critically Endangered.",
      "It is famous for synchronised mass nesting events called 'arribadas', where many females come ashore together.",
    ],
    whyItMatters:
      "As the most endangered sea turtle, Kemp's ridley is a focus of international nesting-beach protection and efforts to make fisheries turtle-safe.",
    faq: [
      {
        question: "What is an 'arribada'?",
        answer:
          "It is a synchronised mass-nesting event in which large numbers of female ridley turtles come ashore to lay eggs at the same time — a remarkable but vulnerable spectacle.",
      },
      {
        question: "Why is Kemp's ridley Critically Endangered?",
        answer:
          "Published assessments cite bycatch in fishing gear, past egg collection, and coastal threats. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Sea turtle profile", href: "/animals/sea-turtle" },
  },
  "chinese-giant-salamander": {
    summary: [
      "The Chinese giant salamander is among the largest amphibians on Earth, reaching well over a metre. It is assessed as Critically Endangered.",
      "It is a fully aquatic, slow-moving predator of cool, fast rivers, and wild populations have collapsed.",
    ],
    whyItMatters:
      "As a giant 'living fossil' amphibian, the Chinese giant salamander is both an evolutionary marvel and a stark example of how the wildlife-food trade can hollow out wild populations even of farmed species.",
    faq: [
      {
        question: "How big is the Chinese giant salamander?",
        answer:
          "It is one of the largest living amphibians, able to exceed a metre in length — far larger than typical salamanders.",
      },
      {
        question: "Why is it Critically Endangered?",
        answer:
          "Published assessments cite heavy collection for food (including to stock farms), habitat loss, and pollution, which have devastated wild populations. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Salamander profile", href: "/animals/salamander" },
  },
  "panamanian-golden-frog": {
    summary: [
      "The Panamanian golden frog is a bright yellow toad and a national symbol of Panama. It is assessed as Critically Endangered and may be extinct in the wild.",
      "It communicates partly with a hand-waving 'semaphore' because of the noisy streams it lives near.",
    ],
    whyItMatters:
      "Devastated by amphibian chytrid disease, the Panamanian golden frog is an emblem of the global amphibian extinction crisis and now survives largely in captive 'ark' programmes.",
    faq: [
      {
        question: "Why does the golden frog wave its hands?",
        answer:
          "Living near loud, fast streams where calls are hard to hear, it uses a hand-waving display ('semaphore') to signal to rivals and mates.",
      },
      {
        question: "Why is it Critically Endangered?",
        answer:
          "Published assessments cite the deadly amphibian fungal disease chytridiomycosis along with habitat loss. It may survive mainly in captivity. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Frog profile", href: "/animals/frog" },
  },
  "chinese-alligator": {
    summary: [
      "The Chinese alligator is a small, shy alligator found only in eastern China — one of just two alligator species. It is assessed as Critically Endangered in the wild.",
      "Far smaller than the American alligator, it spends winters in burrows.",
    ],
    whyItMatters:
      "As one of only two alligator species and a survivor of the densely populated Yangtze basin, the Chinese alligator depends on wetland restoration and reintroduction from captive stock.",
    faq: [
      {
        question: "How does the Chinese alligator differ from the American alligator?",
        answer:
          "It is much smaller, more heavily armoured, and far rarer, and it is restricted to a small part of eastern China rather than a wide range.",
      },
      {
        question: "Why is it Critically Endangered?",
        answer:
          "Published assessments cite the loss of its wetland habitat to farming in a densely populated region, leaving a tiny wild range. Captive breeding is substantial. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Alligator profile", href: "/animals/alligator" },
  },
  "ploughshare-tortoise": {
    summary: [
      "The ploughshare tortoise (angonoka) is a striking, high-domed tortoise from Madagascar and one of the rarest tortoises in the world. It is assessed as Critically Endangered.",
      "Its beautiful golden shell has made it a target for collectors.",
    ],
    whyItMatters:
      "Among the world's rarest tortoises, the ploughshare tortoise is on the front line of the fight against the illegal high-value pet trade.",
    faq: [
      {
        question: "Why is the ploughshare tortoise so valuable to collectors?",
        answer:
          "Its distinctive high-domed, golden shell makes it prized in the illegal pet trade, which drives intense poaching despite its rarity.",
      },
      {
        question: "Why is it Critically Endangered?",
        answer:
          "Published assessments cite poaching for the pet trade, habitat fires, and an extremely small natural range in north-western Madagascar. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Tortoise profile", href: "/animals/tortoise" },
  },
  "american-crocodile": {
    summary: [
      "The American crocodile is a large, relatively shy crocodile of the Americas' coasts and estuaries. It is assessed as Vulnerable.",
      "It tolerates salt water well and is found from Florida to South America.",
    ],
    whyItMatters:
      "As a top coastal predator that has recovered in places like Florida, the American crocodile shows how protection can rebuild reptile populations while raising questions about coexistence.",
    faq: [
      {
        question: "Is the American crocodile dangerous to people?",
        answer:
          "It is generally more shy and less aggressive than some other large crocodilians, but it is a large wild predator and should always be treated with caution and respect.",
      },
      {
        question: "Why is the American crocodile Vulnerable?",
        answer:
          "Published assessments cite habitat loss, coastal development, and a history of hunting for skins, though some populations have recovered with protection. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Crocodile profile", href: "/animals/crocodile" },
  },
  "golden-poison-frog": {
    summary: [
      "The golden poison frog is one of the most toxic animals on Earth, a small, brilliantly coloured frog from Colombia. It is assessed as Endangered.",
      "Its bright colour warns predators of the potent toxins in its skin.",
    ],
    whyItMatters:
      "Both a symbol of rainforest chemistry and a culturally important species, the golden poison frog highlights how a tiny range makes even an abundant-seeming animal vulnerable.",
    faq: [
      {
        question: "How toxic is the golden poison frog?",
        answer:
          "It is considered one of the most toxic animals known; its skin carries powerful alkaloid toxins. Its bright colour is an aposematic warning to predators.",
      },
      {
        question: "Why is it Endangered?",
        answer:
          "Published assessments cite deforestation and habitat degradation within its very small range on Colombia's Pacific coast. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Poison dart frog profile", href: "/animals/poison-dart-frog" },
  },
  "scalloped-hammerhead": {
    summary: [
      "The scalloped hammerhead is a wide-ranging shark with a distinctive hammer-shaped head. It is assessed as Critically Endangered.",
      "Young sharks often gather in coastal nurseries, and adults sometimes form large schools.",
    ],
    whyItMatters:
      "As a heavily fished apex predator, the scalloped hammerhead is a flagship for shark conservation and for tackling the fin trade.",
    faq: [
      {
        question: "Why do hammerheads have such strange heads?",
        answer:
          "The wide, flattened head (cephalofoil) is thought to improve sensory perception and manoeuvrability, helping the shark detect and track prey.",
      },
      {
        question: "Why is the scalloped hammerhead Critically Endangered?",
        answer:
          "Published assessments cite overfishing — including demand for fins — and bycatch. Hammerheads are particularly vulnerable because of their fins. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Hammerhead shark profile", href: "/animals/hammerhead-shark" },
  },
  "european-eel": {
    summary: [
      "The European eel is a snake-like fish with an extraordinary life cycle spanning the open Atlantic and Europe's rivers. It is assessed as Critically Endangered.",
      "Its numbers have fallen dramatically, and much of its life remains mysterious.",
    ],
    whyItMatters:
      "A once-common fish now in steep decline, the European eel links the health of the open ocean, rivers, and fisheries across an entire continent.",
    faq: [
      {
        question: "Where are European eels born?",
        answer:
          "They are thought to spawn in the Sargasso Sea in the Atlantic; tiny larvae drift to Europe, grow in rivers and coasts for years, then migrate back to the ocean to breed.",
      },
      {
        question: "Why is the European eel Critically Endangered?",
        answer:
          "Published assessments cite barriers to migration such as dams, overfishing of young eels, disease, and changing ocean conditions. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Eel profile", href: "/animals/eel" },
  },
  "beluga-sturgeon": {
    summary: [
      "The beluga sturgeon is a giant, long-lived fish of the Caspian and Black Sea region and the source of the most prized caviar. It is assessed as Critically Endangered.",
      "It can reach enormous sizes and takes many years to mature, making it slow to recover.",
    ],
    whyItMatters:
      "A living link to ancient fish lineages, the beluga sturgeon shows how the luxury caviar trade and dammed rivers can push even a giant, ancient species toward extinction.",
    faq: [
      {
        question: "Why is beluga caviar linked to the species' decline?",
        answer:
          "Beluga sturgeon are killed for their roe (caviar), which is highly valuable. Combined with their slow maturation, this overharvest — and poaching — has driven steep declines.",
      },
      {
        question: "Why is the beluga sturgeon Critically Endangered?",
        answer:
          "Published assessments cite overfishing for caviar, poaching, and dams that block the long river migrations it needs to spawn. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Sturgeon profile", href: "/animals/sturgeon" },
  },
  "largetooth-sawfish": {
    summary: [
      "The largetooth sawfish is a large ray with a long, tooth-studded snout (rostrum). It is assessed as Critically Endangered.",
      "It uses its saw to sense and strike prey, but the same saw makes it highly prone to entanglement in nets.",
    ],
    whyItMatters:
      "Once widespread and now vanished from much of its range, the largetooth sawfish is among the most threatened of all sharks and rays and a priority for marine and river conservation.",
    faq: [
      {
        question: "What does a sawfish use its saw for?",
        answer:
          "The saw (rostrum) is studded with sensory organs and teeth; the sawfish uses it to detect and stun prey. Unfortunately, it also snags easily in fishing nets.",
      },
      {
        question: "Why is the largetooth sawfish Critically Endangered?",
        answer:
          "Published assessments cite entanglement in fishing gear, habitat loss, and past targeted fishing, which have wiped it out across much of its former range. See the IUCN Red List.",
      },
    ],
  },
  "giant-manta-ray": {
    summary: [
      "The giant manta ray is the largest ray in the world, a gentle filter-feeder with a wingspan that can exceed seven metres. It is assessed as Endangered.",
      "It feeds on plankton and is famous for acrobatic leaps.",
    ],
    whyItMatters:
      "A wide-ranging, slow-breeding ocean giant, the giant manta ray is a flagship for protecting open-ocean wildlife and curbing fisheries that target rays.",
    faq: [
      {
        question: "How big is the giant manta ray?",
        answer:
          "It is the largest ray, with a 'wingspan' (disc width) that can exceed seven metres. Despite its size, it feeds on tiny plankton.",
      },
      {
        question: "Why is the giant manta ray Endangered?",
        answer:
          "Published assessments cite targeted fishing (notably for their gill plates), bycatch, and a very low reproductive rate that makes recovery slow. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Ray profile", href: "/animals/ray" },
  },
  "migratory-monarch-butterfly": {
    summary: [
      "The migratory monarch is a population of the monarch butterfly famous for one of the most spectacular insect migrations on Earth. It is assessed (as the migratory subspecies) as Endangered.",
      "Generations of monarchs travel thousands of kilometres between breeding and overwintering grounds.",
    ],
    whyItMatters:
      "An icon of insect migration, the monarch is a flagship for pollinator conservation and a visible barometer of habitat loss across an entire continent.",
    faq: [
      {
        question: "What makes the monarch migration special?",
        answer:
          "Monarchs travel thousands of kilometres across North America, with overwintering generations massing in forests in Mexico and coastal California — a multi-generational journey unmatched among butterflies.",
      },
      {
        question: "Why is the migratory monarch Endangered?",
        answer:
          "Published assessments cite the loss of milkweed (its caterpillar food) and breeding habitat, degradation of overwintering forests, pesticides, and climate extremes. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Butterfly profile", href: "/animals/butterfly" },
  },
  "rusty-patched-bumble-bee": {
    summary: [
      "The rusty-patched bumble bee is a North American bumblebee named for the rusty mark on the workers' abdomen. It is assessed as Critically Endangered.",
      "Once widespread, it has vanished from most of its former range in just a few decades.",
    ],
    whyItMatters:
      "A once-common pollinator now nearly gone, the rusty-patched bumble bee is a warning sign for insect declines and the pollination services wild bees provide.",
    faq: [
      {
        question: "Why are bumblebees important?",
        answer:
          "Bumblebees are major pollinators of wild plants and crops; some plants are pollinated especially effectively by their 'buzz pollination'. Losing them affects ecosystems and agriculture.",
      },
      {
        question: "Why is the rusty-patched bumble bee Critically Endangered?",
        answer:
          "Published assessments cite disease spread from managed bees, pesticide use, and habitat loss, which have erased it from most of its former range. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Bee profile", href: "/animals/bee" },
  },
  "white-abalone": {
    summary: [
      "The white abalone is a marine snail of the eastern Pacific and one of the first marine invertebrates listed as endangered in the United States. It is assessed as Critically Endangered.",
      "Overfishing left survivors too scattered to breed successfully in the wild.",
    ],
    whyItMatters:
      "The white abalone is a landmark case for marine invertebrate conservation, showing how overharvest can collapse a slow-recovering species and how captive breeding is being used to rebuild it.",
    faq: [
      {
        question: "Why can't white abalone simply recover on their own?",
        answer:
          "Abalone reproduce by releasing eggs and sperm into the water, so individuals must be close together to breed. Overfishing left survivors too far apart, so captive breeding is being used to help.",
      },
      {
        question: "Why is the white abalone Critically Endangered?",
        answer:
          "Published assessments cite past overfishing, very low numbers that hamper reproduction, and disease. See the IUCN Red List for the current assessment.",
      },
    ],
  },
  "eastern-gorilla": {
    summary: [
      "The eastern gorilla is the largest living primate, including the famous mountain gorilla subspecies. It is assessed as Critically Endangered.",
      "It lives in close-knit family groups led by a dominant silverback male.",
    ],
    whyItMatters:
      "As a large, plant-eating ape that shapes its forest, the eastern gorilla is a flagship for protecting central Africa's threatened mountain and lowland forests.",
    faq: [
      {
        question: "What is the difference between eastern and western gorillas?",
        answer:
          "They are two separate species. The eastern gorilla (which includes mountain gorillas) lives in eastern central Africa, while the western gorilla lives farther west. Both are threatened.",
      },
      {
        question: "Why is the eastern gorilla Critically Endangered?",
        answer:
          "Published assessments cite poaching, habitat loss, civil unrest across its range, and disease. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Gorilla profile", href: "/animals/gorilla" },
  },
  "indri": {
    summary: [
      "The indri is the largest living lemur, famous for its loud, haunting songs that carry through Madagascar's forests. It is assessed as Critically Endangered.",
      "It is a leaf-eating, tree-dwelling primate that lives in small family groups and does not survive well in captivity.",
    ],
    whyItMatters:
      "As a large leaf-eater found only in Madagascar, the indri is both an evolutionary treasure and a flagship for the island's vanishing eastern rainforests.",
    faq: [
      {
        question: "Why is the indri famous for singing?",
        answer:
          "Indri families produce loud, wailing songs that carry for long distances through the forest, used to mark territory and keep groups in contact — among the most striking voices of any primate.",
      },
      {
        question: "Why is the indri Critically Endangered?",
        answer:
          "Published assessments cite deforestation, hunting, and habitat fragmentation across its small range in eastern Madagascar. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Indri profile", href: "/animals/indri" },
  },
  "aye-aye": {
    summary: [
      "The aye-aye is a bizarre nocturnal lemur with rodent-like teeth and a long, thin middle finger for extracting grubs from wood. It is assessed as Endangered.",
      "It taps on branches to find hollow tunnels left by insect larvae, then gnaws in and hooks them out.",
    ],
    whyItMatters:
      "A one-of-a-kind primate that fills the ecological role of a woodpecker, the aye-aye is an irreplaceable branch of Madagascar's unique fauna.",
    faq: [
      {
        question: "What is the aye-aye's strange finger for?",
        answer:
          "Its elongated, thin middle finger is used for 'percussive foraging': it taps wood to locate grubs in hollow tunnels, gnaws an opening, then hooks the larvae out — a niche elsewhere filled by woodpeckers.",
      },
      {
        question: "Why is the aye-aye Endangered?",
        answer:
          "Published assessments cite habitat loss and fragmentation, plus killing driven by local superstition that treats the animal as an ill omen. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Aye-aye profile", href: "/animals/aye-aye" },
  },
  "tasmanian-devil": {
    summary: [
      "The Tasmanian devil is the largest living carnivorous marsupial, known for its powerful bite and loud screeches. It is assessed as Endangered.",
      "Its populations have been devastated by a rare contagious cancer.",
    ],
    whyItMatters:
      "As Tasmania's top marsupial predator and scavenger, the devil's fight against a transmissible cancer is a globally important conservation and disease-research story.",
    faq: [
      {
        question: "What is devil facial tumour disease?",
        answer:
          "It is a rare contagious cancer spread when devils bite one another, causing fatal facial tumours. It has caused steep population declines and is central to the species' Endangered status.",
      },
      {
        question: "Why is the Tasmanian devil Endangered?",
        answer:
          "Published assessments cite the facial-tumour disease above all, along with road deaths and historical persecution. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Tasmanian devil profile", href: "/animals/tasmanian-devil" },
  },
  "dugong": {
    summary: [
      "The dugong is a large, slow-moving marine mammal that grazes on seagrass, a relative of the manatees. It is assessed as Vulnerable.",
      "It is the only fully marine mammal that feeds almost exclusively on plants.",
    ],
    whyItMatters:
      "As a seagrass grazer, the dugong helps keep these underwater meadows healthy, and its decline signals the loss of vital coastal seagrass habitat.",
    faq: [
      {
        question: "What does a dugong eat?",
        answer:
          "Almost entirely seagrass. The dugong is the only strictly marine mammal that is essentially a plant-eater, grazing seagrass meadows like an underwater cow.",
      },
      {
        question: "Why is the dugong Vulnerable?",
        answer:
          "Published assessments cite loss of seagrass meadows, entanglement and bycatch in fishing gear, boat strikes, and hunting in places. See the IUCN Red List.",
      },
    ],
  },
  "west-indian-manatee": {
    summary: [
      "The West Indian manatee is a large, gentle, plant-eating marine mammal, including the well-known Florida manatee. It is assessed as Vulnerable.",
      "It grazes water plants in warm shallow coasts and rivers and must avoid cold water.",
    ],
    whyItMatters:
      "A slow-moving coastal grazer, the manatee is a flagship for protecting warm-water refuges and reducing boat collisions in busy waterways.",
    faq: [
      {
        question: "Why are manatees often injured by boats?",
        answer:
          "Manatees are slow, surface-feeding animals in busy coastal waterways, which makes collisions with boats a leading cause of injury and death — many bear propeller scars.",
      },
      {
        question: "Why is the West Indian manatee Vulnerable?",
        answer:
          "Published assessments cite boat strikes, habitat loss, cold stress when warm-water refuges fail, and entanglement. See the IUCN Red List.",
      },
    ],
  },
  "amazon-river-dolphin": {
    summary: [
      "The Amazon river dolphin, or boto, is a freshwater dolphin famous for its pink colouring and flexible neck. It is assessed as Endangered.",
      "It navigates flooded forests and murky rivers using echolocation.",
    ],
    whyItMatters:
      "As a top predator of Amazon waterways and a creature of local legend, the boto is an indicator of the health of South America's great river systems.",
    faq: [
      {
        question: "Why is the Amazon river dolphin pink?",
        answer:
          "Many adults, especially males, develop a pink hue; the exact reasons are debated and may relate to age, skin, and behaviour. Younger animals are greyer.",
      },
      {
        question: "Why is the boto Endangered?",
        answer:
          "Published assessments cite killing for use as fishing bait, entanglement, dams fragmenting rivers, and pollution such as mercury from mining. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Dolphin profile", href: "/animals/dolphin" },
  },
  "fin-whale": {
    summary: [
      "The fin whale is the second-largest animal on Earth after the blue whale, a fast-swimming baleen whale. It is assessed as Vulnerable.",
      "It feeds on small fish and krill, lunging through prey swarms.",
    ],
    whyItMatters:
      "A giant of the open ocean recovering from industrial whaling, the fin whale is both a conservation success in progress and still at risk from shipping.",
    faq: [
      {
        question: "How big is the fin whale?",
        answer:
          "It is the second-largest animal alive, after the blue whale, reaching around 20-plus metres — and is known for its speed, earning it the nickname 'greyhound of the sea'.",
      },
      {
        question: "Why is the fin whale Vulnerable?",
        answer:
          "Industrial whaling greatly reduced its numbers; though now recovering, it still faces ship strikes, entanglement, and ocean noise. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Whale profile", href: "/animals/whale" },
  },
  "pygmy-hippopotamus": {
    summary: [
      "The pygmy hippopotamus is a small, secretive forest relative of the common hippo. It is assessed as Endangered.",
      "Far smaller and more solitary than the common hippo, it spends more time on land in dense forest.",
    ],
    whyItMatters:
      "A rare and elusive forest species, the pygmy hippo is a flagship for protecting the threatened Upper Guinean forests of West Africa.",
    faq: [
      {
        question: "How is the pygmy hippo different from the common hippo?",
        answer:
          "It is much smaller, more solitary, and lives in dense forests and swamps rather than open rivers, spending comparatively more time on land.",
      },
      {
        question: "Why is the pygmy hippopotamus Endangered?",
        answer:
          "Published assessments cite deforestation, hunting, and a small, fragmented population in West Africa. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Hippopotamus profile", href: "/animals/hippopotamus" },
  },
  "black-footed-ferret": {
    summary: [
      "The black-footed ferret is North America's only native ferret and one of its most endangered mammals. It is assessed as Endangered.",
      "Once thought extinct, it was rescued through captive breeding and reintroduced to the prairies.",
    ],
    whyItMatters:
      "Tightly tied to prairie dogs and prairie habitat, the black-footed ferret is a landmark recovery story and a symbol of North American grassland conservation.",
    faq: [
      {
        question: "Why does the black-footed ferret depend on prairie dogs?",
        answer:
          "Prairie dogs are its main prey, and it shelters in their burrows. When prairie dog colonies decline, ferrets lose both food and homes.",
      },
      {
        question: "Why is the black-footed ferret Endangered?",
        answer:
          "Published assessments cite the loss of prairie dogs, disease such as plague and distemper, and habitat loss. It survives through captive breeding and reintroduction. See the IUCN Red List.",
      },
    ],
  },
  "grevys-zebra": {
    summary: [
      "Grevy's zebra is the largest wild equid and the most threatened of the zebras, with narrow stripes and large rounded ears. It is assessed as Endangered.",
      "It lives in arid country and can survive several days without water.",
    ],
    whyItMatters:
      "As the most endangered zebra and a large grazer of East African drylands, Grevy's zebra is a flagship for arid-rangeland conservation shared with pastoral communities.",
    faq: [
      {
        question: "How is Grevy's zebra different from other zebras?",
        answer:
          "It is the largest zebra, with narrower stripes, a white belly, and big rounded ears, and it has a more arid range and looser social structure than the plains zebra.",
      },
      {
        question: "Why is Grevy's zebra Endangered?",
        answer:
          "Published assessments cite competition with livestock for scarce water and grazing, habitat loss, and hunting. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Zebra profile", href: "/animals/zebra" },
  },
  "giant-anteater": {
    summary: [
      "The giant anteater is a large, bushy-tailed mammal that feeds on ants and termites using a long sticky tongue. It is assessed as Vulnerable.",
      "It has no teeth and laps up tens of thousands of insects a day.",
    ],
    whyItMatters:
      "By controlling ant and termite numbers, the giant anteater plays a useful role in its ecosystems, and it is a flagship for South American grassland and savanna conservation.",
    faq: [
      {
        question: "How does the giant anteater eat without teeth?",
        answer:
          "It has no teeth at all. It uses powerful claws to open insect nests and a long, sticky tongue to lap up ants and termites — many thousands per day.",
      },
      {
        question: "Why is the giant anteater Vulnerable?",
        answer:
          "Published assessments cite habitat loss and fires, road collisions, and hunting. See the IUCN Red List for the current assessment.",
      },
    ],
  },
  "clouded-leopard": {
    summary: [
      "The clouded leopard is a secretive, medium-sized wild cat with large cloud-shaped markings and exceptional climbing skills. It is assessed as Vulnerable.",
      "It has the longest canine teeth relative to skull size of any living cat.",
    ],
    whyItMatters:
      "An elusive forest predator, the clouded leopard is a flagship for protecting the dwindling forests of South and Southeast Asia.",
    faq: [
      {
        question: "What makes the clouded leopard such a good climber?",
        answer:
          "It has flexible ankles, a long tail for balance, and a strong grip, letting it climb down trunks head-first and even hang from branches — unusual agility among cats.",
      },
      {
        question: "Why is the clouded leopard Vulnerable?",
        answer:
          "Published assessments cite deforestation, poaching for its skin and other parts, and loss of prey. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Clouded leopard profile", href: "/animals/clouded-leopard" },
  },
  "andean-bear": {
    summary: [
      "The Andean bear (spectacled bear) is South America's only bear, named for the pale markings around its eyes. It is assessed as Vulnerable.",
      "It is mostly vegetarian and an excellent climber of the Andes' forests.",
    ],
    whyItMatters:
      "As the only bear in South America and a disperser of seeds in Andean forests, the Andean bear is a flagship for conserving the tropical Andes.",
    faq: [
      {
        question: "Why is it called the spectacled bear?",
        answer:
          "Many individuals have pale cream markings around the eyes and on the muzzle that can resemble eyeglasses, though the pattern varies between bears.",
      },
      {
        question: "Why is the Andean bear Vulnerable?",
        answer:
          "Published assessments cite habitat loss and fragmentation in the Andes, conflict with farmers, and hunting. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Bear profile", href: "/animals/bear" },
  },
  "galapagos-penguin": {
    summary: [
      "The Galápagos penguin is the only penguin found north of the equator and the rarest penguin species. It is assessed as Endangered.",
      "It depends on cool, food-rich currents around the islands.",
    ],
    whyItMatters:
      "Living at the very edge of where penguins can survive, the Galápagos penguin is acutely sensitive to ocean change and a barometer for the islands' marine ecosystem.",
    faq: [
      {
        question: "How can a penguin live on the equator?",
        answer:
          "Cool, nutrient-rich currents (such as the Humboldt and Cromwell currents) bring cold, fish-filled water to the Galápagos, allowing penguins to survive on the equator.",
      },
      {
        question: "Why is the Galápagos penguin Endangered?",
        answer:
          "Published assessments cite ocean changes such as El Niño that cut food supply, introduced predators and disease, and bycatch. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Penguin profile", href: "/animals/penguin" },
  },
  "atlantic-puffin": {
    summary: [
      "The Atlantic puffin is a small, colourful-billed seabird that nests in burrows on North Atlantic coasts. It is assessed as Vulnerable.",
      "It carries several small fish at once crosswise in its bright bill.",
    ],
    whyItMatters:
      "A much-loved seabird that depends on small forage fish, the puffin is a visible indicator of the changing North Atlantic and its fisheries.",
    faq: [
      {
        question: "How does a puffin carry so many fish at once?",
        answer:
          "Backward-pointing spines on its tongue and palate let a puffin hold several small fish crosswise in its bill while still catching more — sometimes a dozen or more at a time.",
      },
      {
        question: "Why is the Atlantic puffin Vulnerable?",
        answer:
          "Published assessments cite shortages of the small fish it feeds on, changing ocean conditions, and invasive predators at some colonies. See the IUCN Red List.",
      },
    ],
  },
  "secretarybird": {
    summary: [
      "The secretarybird is a tall, long-legged bird of prey that hunts on foot, famous for stamping on snakes and other prey. It is assessed as Endangered.",
      "It strides across open grassland rather than hunting mainly from the air.",
    ],
    whyItMatters:
      "A unique ground-hunting raptor, the secretarybird is both an icon of African grasslands and an indicator of their decline.",
    faq: [
      {
        question: "How does the secretarybird hunt?",
        answer:
          "It walks across grassland and kills prey — including snakes, insects, and small animals — with powerful, rapid stamps of its long legs, an unusual technique among birds of prey.",
      },
      {
        question: "Why is the secretarybird Endangered?",
        answer:
          "Published assessments cite the loss and degradation of grassland habitat, disturbance, and threats such as collisions and poisoning. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Secretary bird profile", href: "/animals/secretary-bird" },
  },
  "red-crowned-crane": {
    summary: [
      "The red-crowned crane is one of the rarest and most revered cranes, with a patch of bare red skin on its crown. It is assessed as Vulnerable.",
      "It is a deep cultural symbol of luck and longevity in East Asia.",
    ],
    whyItMatters:
      "A wetland specialist and a powerful cultural symbol in East Asia, the red-crowned crane is a flagship for conserving the region's threatened marshes.",
    faq: [
      {
        question: "Why is the red-crowned crane culturally important?",
        answer:
          "In East Asian cultures it is a long-standing symbol of luck, fidelity, and long life, appearing widely in art and folklore — which has helped drive conservation interest.",
      },
      {
        question: "Why is the red-crowned crane Vulnerable?",
        answer:
          "Published assessments cite the loss and drainage of wetlands, disturbance, and its small population. See the IUCN Red List for the current assessment.",
      },
    ],
  },
  "kea": {
    summary: [
      "The kea is a large alpine parrot of New Zealand, famous for its intelligence and bold curiosity. It is assessed as Endangered.",
      "It is one of the few parrots adapted to cold mountain environments.",
    ],
    whyItMatters:
      "A highly intelligent alpine parrot found only in New Zealand, the kea is both a research subject for animal cognition and a flagship for the country's mountain wildlife.",
    faq: [
      {
        question: "Why is the kea considered so intelligent?",
        answer:
          "Keas are renowned for problem-solving, tool-related behaviour, play, and mischief — investigating (and often dismantling) human objects — making them a focus of animal-cognition research.",
      },
      {
        question: "Why is the kea Endangered?",
        answer:
          "Published assessments cite introduced predators, conflict with people (including past culling), and hazards such as lead poisoning from old buildings. See the IUCN Red List.",
      },
    ],
  },
  "great-indian-bustard": {
    summary: [
      "The great Indian bustard is one of the heaviest flying birds and among the most endangered birds in the world. It is assessed as Critically Endangered.",
      "It is a tall, ground-dwelling bird of open grasslands, now reduced to very few individuals.",
    ],
    whyItMatters:
      "A grassland giant on the edge of extinction, the great Indian bustard is a flagship for India's neglected grassland habitats and for making power infrastructure wildlife-safe.",
    faq: [
      {
        question: "Why are power lines such a threat to the great Indian bustard?",
        answer:
          "As a large, heavy bird with limited frontal vision in flight, it is highly prone to colliding with overhead power lines that cross its open grassland habitat.",
      },
      {
        question: "Why is the great Indian bustard Critically Endangered?",
        answer:
          "Published assessments cite power-line collisions, habitat loss to agriculture and development, and a very small remaining population. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Bustard profile", href: "/animals/bustard" },
  },
  "wandering-albatross": {
    summary: [
      "The wandering albatross has the largest wingspan of any living bird and roams vast distances over the Southern Ocean. It is assessed as Vulnerable.",
      "It can glide for hours and travel thousands of kilometres on a single foraging trip.",
    ],
    whyItMatters:
      "A long-lived ocean wanderer, the wandering albatross is a powerful symbol of the threat that longline fishing poses to the world's seabirds.",
    faq: [
      {
        question: "How big is the wandering albatross's wingspan?",
        answer:
          "It has the largest wingspan of any living bird — commonly over three metres — letting it glide enormous distances across the Southern Ocean with little effort.",
      },
      {
        question: "Why is the wandering albatross Vulnerable?",
        answer:
          "Published assessments cite drowning on longline fishing hooks above all, along with plastic pollution and invasive predators at breeding colonies. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Albatross profile", href: "/animals/albatross" },
  },
  "egyptian-vulture": {
    summary: [
      "The Egyptian vulture is a small, white scavenging vulture known for using stones as tools to crack eggs. It is assessed as Endangered.",
      "It is one of the few birds that uses tools in the wild.",
    ],
    whyItMatters:
      "As scavengers, vultures clean up carcasses and limit disease, so the Egyptian vulture's decline — part of a wider vulture crisis — has real consequences for ecosystems and people.",
    faq: [
      {
        question: "Does the Egyptian vulture really use tools?",
        answer:
          "Yes. It is well known for picking up stones and throwing them at large eggs, such as ostrich eggs, to crack them open — a rare example of tool use in birds.",
      },
      {
        question: "Why is the Egyptian vulture Endangered?",
        answer:
          "Published assessments cite poisoning, harmful veterinary drugs in livestock carcasses, electrocution on power infrastructure, and habitat change. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Vulture profile", href: "/animals/vulture" },
  },
  "bali-myna": {
    summary: [
      "The Bali myna is a striking white starling with blue eye-skin, found only on Bali. It is assessed as Critically Endangered.",
      "Prized as a cage bird, it was driven to the brink and survives largely through captive breeding and release.",
    ],
    whyItMatters:
      "A dazzling island endemic devastated by the songbird trade, the Bali myna is a flagship for Indonesia's cage-bird crisis and for captive-breeding recovery.",
    faq: [
      {
        question: "Why is the Bali myna so threatened?",
        answer:
          "Its beauty made it highly sought after for the cage-bird trade, and trapping drove the wild population to extremely low numbers within a very small range.",
      },
      {
        question: "Is the Bali myna recovering?",
        answer:
          "Captive breeding and reintroduction have helped maintain and supplement the wild population, but it remains Critically Endangered. See the IUCN Red List for the current assessment.",
      },
    ],
  },
  "siberian-crane": {
    summary: [
      "The Siberian crane is a large white crane that undertakes one of the longest migrations of any crane. It is assessed as Critically Endangered.",
      "The main population depends on a single key wintering wetland in China.",
    ],
    whyItMatters:
      "Reliant on a chain of wetlands across a vast migration, the Siberian crane is a flagship for international cooperation on wetland conservation.",
    faq: [
      {
        question: "Why is the Siberian crane so vulnerable on migration?",
        answer:
          "It depends on a network of wetland stopover sites and, for the main population, largely on a single wintering wetland — so the loss of even one key site is devastating.",
      },
      {
        question: "Why is the Siberian crane Critically Endangered?",
        answer:
          "Published assessments cite loss of wetland stopover and wintering habitat, dams altering river systems, and disturbance. See the IUCN Red List.",
      },
    ],
  },
  "loggerhead-turtle": {
    summary: [
      "The loggerhead is a large sea turtle with a powerful head and jaws for crushing hard-shelled prey. It is assessed as Vulnerable.",
      "It undertakes long ocean migrations between feeding and nesting areas.",
    ],
    whyItMatters:
      "A wide-ranging ocean traveller, the loggerhead links the health of beaches and open seas across whole ocean basins.",
    faq: [
      {
        question: "Why does the loggerhead have such a big head?",
        answer:
          "Its large head houses powerful jaws used to crush hard-shelled prey such as crabs, conchs, and other invertebrates.",
      },
      {
        question: "Why is the loggerhead turtle Vulnerable?",
        answer:
          "Published assessments cite bycatch in fishing gear, loss and disturbance of nesting beaches, pollution, and climate effects on nests. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Sea turtle profile", href: "/animals/sea-turtle" },
  },
  "olive-ridley-turtle": {
    summary: [
      "The olive ridley is a small sea turtle famous, like its relative the Kemp's ridley, for synchronised mass-nesting 'arribadas'. It is assessed as Vulnerable.",
      "It is one of the most abundant sea turtles, yet still threatened.",
    ],
    whyItMatters:
      "Despite being relatively numerous, the olive ridley's reliance on a few mass-nesting beaches makes it a focus for nesting-site protection and turtle-safe fishing.",
    faq: [
      {
        question: "What is special about olive ridley nesting?",
        answer:
          "Like the Kemp's ridley, olive ridleys can nest in huge synchronised events called arribadas, when thousands of females come ashore together — spectacular but vulnerable to disturbance.",
      },
      {
        question: "Why is the olive ridley Vulnerable?",
        answer:
          "Published assessments cite bycatch in fishing gear, egg collection, coastal development, and pollution. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Sea turtle profile", href: "/animals/sea-turtle" },
  },
  "radiated-tortoise": {
    summary: [
      "The radiated tortoise is a strikingly patterned tortoise from Madagascar, with bright star-like markings on its high-domed shell. It is assessed as Critically Endangered.",
      "Its beauty and rarity have made it a heavy target for traffickers.",
    ],
    whyItMatters:
      "One of the most beautiful and trafficked tortoises in the world, the radiated tortoise is a flagship against the illegal pet and bushmeat trade in Madagascar.",
    faq: [
      {
        question: "What makes the radiated tortoise so distinctive?",
        answer:
          "Its high-domed shell carries vivid yellow lines radiating from the centre of each plate, creating a star-like pattern that is highly prized — and a magnet for poachers.",
      },
      {
        question: "Why is the radiated tortoise Critically Endangered?",
        answer:
          "Published assessments cite heavy poaching for food and the pet trade, together with habitat loss in southern Madagascar. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Tortoise profile", href: "/animals/tortoise" },
  },
  "japanese-giant-salamander": {
    summary: [
      "The Japanese giant salamander is one of the largest amphibians in the world, a fully aquatic river-dweller. It is assessed as Vulnerable.",
      "It can live for decades and breathes largely through its wrinkled skin.",
    ],
    whyItMatters:
      "A giant 'living fossil' amphibian, the Japanese giant salamander is an indicator of clean, well-connected rivers and a cultural icon in Japan.",
    faq: [
      {
        question: "How big is the Japanese giant salamander?",
        answer:
          "It is among the largest living amphibians, able to exceed a metre in length, and can live for many decades in cool, flowing rivers.",
      },
      {
        question: "Why is it Vulnerable?",
        answer:
          "Published assessments cite river alteration such as dams and concrete works, hybridisation with introduced Chinese giant salamanders, and pollution. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Salamander profile", href: "/animals/salamander" },
  },
  "galapagos-marine-iguana": {
    summary: [
      "The marine iguana is the only lizard in the world that forages in the sea, found solely in the Galápagos. It is assessed as Vulnerable.",
      "It dives to graze on algae and sneezes out excess salt.",
    ],
    whyItMatters:
      "A unique sea-foraging lizard found nowhere else, the marine iguana is an emblem of the Galápagos and of evolution's capacity to adapt animals to new niches.",
    faq: [
      {
        question: "How does a lizard feed in the sea?",
        answer:
          "The marine iguana dives and clings to rocks to graze on marine algae, then basks to rewarm; it expels the extra salt it swallows by 'sneezing' it out through special glands.",
      },
      {
        question: "Why is the marine iguana Vulnerable?",
        answer:
          "Published assessments cite introduced predators such as cats and rats, oil spills and pollution, and ocean changes such as El Niño that reduce its algae food. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Iguana profile", href: "/animals/iguana" },
  },
  "orinoco-crocodile": {
    summary: [
      "The Orinoco crocodile is one of the largest predators in the Americas and among the most endangered crocodilians. It is assessed as Critically Endangered.",
      "Heavy hunting for its hide in the 20th century left only small populations.",
    ],
    whyItMatters:
      "A top river predator reduced to a fraction of its former numbers, the Orinoco crocodile is a focus for crocodilian recovery and river conservation in northern South America.",
    faq: [
      {
        question: "How big is the Orinoco crocodile?",
        answer:
          "It is one of the largest living crocodilians and a top predator of the Orinoco basin, with large males reaching several metres in length.",
      },
      {
        question: "Why is the Orinoco crocodile Critically Endangered?",
        answer:
          "Published assessments cite intensive past hunting for its skin, egg and habitat loss, and a very small remaining population. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Crocodile profile", href: "/animals/crocodile" },
  },
  "purple-frog": {
    summary: [
      "The purple frog is a bloated, burrowing frog with a pointed snout that spends almost its whole life underground. It is assessed as Endangered.",
      "It surfaces only briefly to breed during the monsoon and represents an ancient, distinct lineage.",
    ],
    whyItMatters:
      "A 'living fossil' frog of the Western Ghats, the purple frog highlights the unique, ancient amphibian life of one of the world's biodiversity hotspots.",
    faq: [
      {
        question: "Why is the purple frog so unusual?",
        answer:
          "It is a stout, burrowing frog that lives almost entirely underground, emerging only briefly to breed. It belongs to an ancient lineage with few living relatives, making it evolutionarily special.",
      },
      {
        question: "Why is the purple frog Endangered?",
        answer:
          "Published assessments cite habitat loss to agriculture, dams and land-use change in the Western Ghats, and local collection. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Frog profile", href: "/animals/frog" },
  },
  "titicaca-water-frog": {
    summary: [
      "The Titicaca water frog is a fully aquatic frog famous for its baggy, folded skin, an adaptation to the high-altitude lake. It is assessed as Endangered.",
      "The loose skin increases surface area to absorb oxygen from the cold water.",
    ],
    whyItMatters:
      "An extreme high-altitude specialist found in a single lake, the Titicaca water frog is an indicator of the health of one of the world's highest large lakes.",
    faq: [
      {
        question: "Why does the Titicaca water frog have such saggy skin?",
        answer:
          "Its loose, folded skin greatly increases surface area, helping it absorb enough oxygen directly from the cold, high-altitude lake water where it lives almost entirely underwater.",
      },
      {
        question: "Why is it Endangered?",
        answer:
          "Published assessments cite harvesting for food and 'frog juice' drinks, pollution of the lake, and pressures from introduced trout and disease. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Frog profile", href: "/animals/frog" },
  },
  "great-hammerhead": {
    summary: [
      "The great hammerhead is the largest of the hammerhead sharks, with a broad, straight-edged head. It is assessed as Critically Endangered.",
      "It is a powerful predator that favours rays as prey.",
    ],
    whyItMatters:
      "As a large apex predator that is highly valued for its fins and slow to reproduce, the great hammerhead is a priority for shark conservation.",
    faq: [
      {
        question: "What does the great hammerhead eat?",
        answer:
          "It is a strong predator that particularly favours stingrays, pinning them with its broad head, along with other fish and invertebrates.",
      },
      {
        question: "Why is the great hammerhead Critically Endangered?",
        answer:
          "Published assessments cite overfishing (including for fins), bycatch, and a low reproductive rate that makes recovery slow. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Hammerhead shark profile", href: "/animals/hammerhead-shark" },
  },
  "oceanic-whitetip-shark": {
    summary: [
      "The oceanic whitetip is a wide-ranging open-ocean shark with distinctive rounded, white-tipped fins. It is assessed as Critically Endangered.",
      "Once among the most abundant large open-ocean predators, it has declined steeply.",
    ],
    whyItMatters:
      "A formerly abundant high-seas predator now in steep decline, the oceanic whitetip is a stark example of how fishing has transformed open-ocean ecosystems.",
    faq: [
      {
        question: "How do you recognise an oceanic whitetip shark?",
        answer:
          "By its long, rounded pectoral and dorsal fins with mottled white tips, and its open-ocean lifestyle far from coasts.",
      },
      {
        question: "Why is the oceanic whitetip Critically Endangered?",
        answer:
          "Published assessments cite overfishing — including high demand for its large fins — and bycatch, which have caused dramatic declines. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Shark profile", href: "/animals/shark" },
  },
  "shortfin-mako": {
    summary: [
      "The shortfin mako is the fastest shark in the world, a sleek, powerful open-ocean predator. It is assessed as Endangered.",
      "It is warm-bodied, which helps power its high-speed bursts.",
    ],
    whyItMatters:
      "As the fastest shark and a heavily fished apex predator, the shortfin mako is a high-profile case for sustainable management of high-seas sharks.",
    faq: [
      {
        question: "How fast is the shortfin mako?",
        answer:
          "It is widely regarded as the fastest shark, capable of remarkable bursts of speed, helped by its streamlined shape and warm-bodied physiology.",
      },
      {
        question: "Why is the shortfin mako Endangered?",
        answer:
          "Published assessments cite overfishing, both targeted and as bycatch, demand for meat and fins, and a slow reproductive rate. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Shark profile", href: "/animals/shark" },
  },
  "coelacanth": {
    summary: [
      "The coelacanth is a 'living fossil' fish once thought extinct for millions of years until rediscovered in 1938. The African species is assessed as Critically Endangered.",
      "It has fleshy, limb-like fins and belongs to a lineage close to the ancestors of land vertebrates.",
    ],
    whyItMatters:
      "A famous living link to deep evolutionary history, the coelacanth is a scientific treasure whose tiny, slow-breeding population leaves it acutely vulnerable.",
    faq: [
      {
        question: "Why is the coelacanth called a 'living fossil'?",
        answer:
          "Its lineage was known only from fossils and thought to have died out tens of millions of years ago — until a living coelacanth was caught off South Africa in 1938, astonishing scientists.",
      },
      {
        question: "Why is the coelacanth Critically Endangered?",
        answer:
          "Published assessments cite accidental capture in deep-set fishing gear and a very small, slow-reproducing population. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Coelacanth profile", href: "/animals/coelacanth" },
  },
  "basking-shark": {
    summary: [
      "The basking shark is the second-largest fish in the world, a gentle filter-feeder that strains plankton with its huge open mouth. It is assessed as Endangered.",
      "Despite its enormous size, it is harmless to people.",
    ],
    whyItMatters:
      "A giant, slow-reproducing filter-feeder, the basking shark is a flagship for protecting plankton-rich seas and recovering from historical overfishing.",
    faq: [
      {
        question: "What does the basking shark eat?",
        answer:
          "Plankton. It swims slowly with its huge mouth open, filtering tiny organisms from the water through its gill rakers — it is harmless to humans despite its size.",
      },
      {
        question: "Why is the basking shark Endangered?",
        answer:
          "Published assessments cite past targeted fishing, bycatch and disturbance, and a very slow reproductive rate that makes recovery slow. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Shark profile", href: "/animals/shark" },
  },
  "elkhorn-coral": {
    summary: [
      "Elkhorn coral is a large, branching coral that built much of the structure of shallow Caribbean reefs. It is assessed as Critically Endangered.",
      "Like other corals, it is a colony of tiny animals living with symbiotic algae.",
    ],
    whyItMatters:
      "A former reef-building powerhouse of the Caribbean, elkhorn coral's collapse reshapes reefs and the coastlines they protect, making it a flagship for reef recovery.",
    faq: [
      {
        question: "Is elkhorn coral a plant or an animal?",
        answer:
          "An animal — a colony of tiny coral polyps related to sea anemones, hosting symbiotic algae that give the coral much of its colour and energy.",
      },
      {
        question: "Why is elkhorn coral Critically Endangered?",
        answer:
          "Published assessments cite warming-driven bleaching, coral disease, and damage from storms and pollution, which have caused dramatic declines on Caribbean reefs. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Elkhorn coral profile", href: "/animals/elkhorn-coral" },
  },
  "american-burying-beetle": {
    summary: [
      "The American burying beetle is a large, striking carrion beetle that buries small animal carcasses to feed its young. It is assessed (regionally) as Critically Endangered and has vanished from most of its former range.",
      "Both parents care for the larvae on the buried carcass — unusual among insects.",
    ],
    whyItMatters:
      "A once-widespread recycler of carrion that now survives in scattered pockets, the American burying beetle is a reminder that even common insects can collapse across a continent.",
    faq: [
      {
        question: "What does the American burying beetle do with carcasses?",
        answer:
          "A pair locates a small carcass, buries it, and raises their larvae on it, with both parents feeding the young — a rare level of parental care for an insect.",
      },
      {
        question: "Why has the American burying beetle declined?",
        answer:
          "Published assessments cite habitat loss and fragmentation, fewer suitable carcasses, and other pressures such as light pollution, which have erased it from most of its former range. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Beetle profile", href: "/animals/beetle" },
  },
  "lion-tailed-macaque": {
    summary: [
      "The lion-tailed macaque is a striking monkey with a silver-grey mane and a tufted, lion-like tail, found only in India's Western Ghats. It is assessed as Endangered.",
      "It is shy, lives high in the forest canopy, and avoids open ground.",
    ],
    whyItMatters:
      "A canopy specialist of one of the world's biodiversity hotspots, the lion-tailed macaque is a flagship for the threatened rainforests of the Western Ghats.",
    faq: [
      {
        question: "What makes the lion-tailed macaque distinctive?",
        answer:
          "Its silver-grey mane framing a black face and its tufted, lion-like tail set it apart from other macaques. It is also unusually shy and canopy-dwelling.",
      },
      {
        question: "Why is the lion-tailed macaque Endangered?",
        answer:
          "Published assessments cite the fragmentation of its rainforest habitat, roads and disturbance, and small isolated populations. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Macaque profile", href: "/animals/macaque" },
  },
  "siamang": {
    summary: [
      "The siamang is the largest of the gibbons, a black, tree-swinging ape with a throat sac that amplifies its booming calls. It is assessed as Endangered.",
      "Pairs sing loud duets that carry far through the forest.",
    ],
    whyItMatters:
      "As an agile fruit-eater that swings through the canopy and disperses seeds, the siamang is a flagship for Southeast Asia's threatened rainforests.",
    faq: [
      {
        question: "What is the siamang's throat sac for?",
        answer:
          "Its large, inflatable throat sac resonates and amplifies its calls, helping the booming duets of a pair carry over long distances through dense forest.",
      },
      {
        question: "Why is the siamang Endangered?",
        answer:
          "Published assessments cite deforestation, capture for the pet trade, and habitat fragmentation across Sumatra and the Malay Peninsula. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Gibbon profile", href: "/animals/gibbon" },
  },
  "gaur": {
    summary: [
      "The gaur is the largest wild cattle species in the world, a massive, powerfully built bovine of Asian forests. It is assessed as Vulnerable.",
      "Despite its size it is generally shy and lives in herds.",
    ],
    whyItMatters:
      "As the largest wild bovine and a major grazer-browser, the gaur shapes Asian forest and grassland ecosystems and is an important prey species for big cats.",
    faq: [
      {
        question: "How big is the gaur?",
        answer:
          "It is the largest of the wild cattle, with big bulls standing very tall at the shoulder and weighing over a tonne — more massive than the wild buffalo or bison in body build.",
      },
      {
        question: "Why is the gaur Vulnerable?",
        answer:
          "Published assessments cite hunting and poaching, habitat loss, and diseases caught from domestic cattle. See the IUCN Red List for the current assessment.",
      },
    ],
  },
  "mandrill": {
    summary: [
      "The mandrill is the largest monkey in the world, famous for the vivid red and blue colouring on the faces of adult males. It is assessed as Vulnerable.",
      "It travels in very large groups on the forest floor.",
    ],
    whyItMatters:
      "As a large, seed-dispersing forest primate that forms some of the biggest primate groups known, the mandrill is a flagship for central African rainforest conservation.",
    faq: [
      {
        question: "Why are male mandrills so colourful?",
        answer:
          "Dominant males develop bright red and blue facial and rump colouring, which signals status and health; the more dominant the male, the more vivid the colours tend to be.",
      },
      {
        question: "Why is the mandrill Vulnerable?",
        answer:
          "Published assessments cite hunting for bushmeat, habitat loss, and fragmentation across west-central Africa. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Mandrill profile", href: "/animals/mandrill" },
  },
  "cotton-top-tamarin": {
    summary: [
      "The cotton-top tamarin is a tiny monkey with a shock of white hair on its head, found only in Colombia. It is assessed as Critically Endangered.",
      "It lives in small family groups and is one of the smallest primates.",
    ],
    whyItMatters:
      "A tiny, charismatic primate with a very small range, the cotton-top tamarin is a flagship for protecting the dwindling tropical forests of north-western Colombia.",
    faq: [
      {
        question: "How did the cotton-top tamarin get its name?",
        answer:
          "From the long, flowing crest of white hair on its head, which resembles a tuft of cotton — a striking feature on a monkey that weighs only a few hundred grams.",
      },
      {
        question: "Why is the cotton-top tamarin Critically Endangered?",
        answer:
          "Published assessments cite deforestation within its small Colombian range and a history of capture. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Tamarin profile", href: "/animals/tamarin" },
  },
  "scimitar-horned-oryx": {
    summary: [
      "The scimitar-horned oryx is a desert antelope with long, curved horns that was once declared Extinct in the Wild. It is now assessed as Endangered following reintroduction.",
      "It is superbly adapted to heat and can go long periods without water.",
    ],
    whyItMatters:
      "Brought back from Extinct in the Wild through captive breeding and reintroduction, the scimitar-horned oryx is a landmark example of a species being returned to its desert home.",
    faq: [
      {
        question: "Was the scimitar-horned oryx really extinct in the wild?",
        answer:
          "Yes. It was considered Extinct in the Wild for years, surviving only in captivity, before reintroduction programmes returned it to Chad — leading to an improved Red List status.",
      },
      {
        question: "Why is it still Endangered?",
        answer:
          "Published assessments cite its history of overhunting, ongoing drought and habitat pressures, and the small size of the reintroduced population. See the IUCN Red List.",
      },
    ],
  },
  "malayan-tapir": {
    summary: [
      "The Malayan tapir is the largest tapir and the only Old World species, with a bold black-and-white pattern. It is assessed as Endangered.",
      "Its striking two-tone coat is camouflage that breaks up its outline at night.",
    ],
    whyItMatters:
      "As a large browser that disperses seeds, the Malayan tapir helps regenerate Southeast Asian forests and is a flagship for their conservation.",
    faq: [
      {
        question: "Why is the Malayan tapir black and white?",
        answer:
          "The bold pattern is thought to be disruptive camouflage: in moonlight it breaks up the animal's shape, helping it avoid predators such as tigers.",
      },
      {
        question: "Why is the Malayan tapir Endangered?",
        answer:
          "Published assessments cite deforestation, road collisions, and hunting across the Malay Peninsula and Sumatra. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Tapir profile", href: "/animals/tapir" },
  },
  "ganges-river-dolphin": {
    summary: [
      "The Ganges river dolphin is a freshwater dolphin that is effectively blind and navigates entirely by echolocation. It is assessed as Endangered.",
      "It is the national aquatic animal of India.",
    ],
    whyItMatters:
      "As a top predator of South Asia's great rivers, the Ganges river dolphin is a sensitive indicator of river health and a flagship for freshwater conservation.",
    faq: [
      {
        question: "Is the Ganges river dolphin really blind?",
        answer:
          "Its eyes lack a lens and it cannot form images, so it relies almost entirely on echolocation to navigate and hunt in murky river water.",
      },
      {
        question: "Why is the Ganges river dolphin Endangered?",
        answer:
          "Published assessments cite dams and barrages that fragment rivers, bycatch in fishing nets, pollution, and reduced water flow. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Dolphin profile", href: "/animals/dolphin" },
  },
  "verreauxs-sifaka": {
    summary: [
      "Verreaux's sifaka is a lemur famous for 'dancing' sideways across open ground on its hind legs. It is assessed as Critically Endangered.",
      "In the trees it leaps powerfully between trunks in an upright posture.",
    ],
    whyItMatters:
      "An iconic leaping lemur found only in Madagascar, Verreaux's sifaka is a flagship for the island's threatened dry forests and spiny thickets.",
    faq: [
      {
        question: "Why does Verreaux's sifaka 'dance'?",
        answer:
          "Its body is built for vertical leaping between tree trunks, so on the ground it cannot walk on all fours easily; instead it springs sideways on its hind legs in a bounding 'dance'.",
      },
      {
        question: "Why is Verreaux's sifaka Critically Endangered?",
        answer:
          "Published assessments cite deforestation, slash-and-burn agriculture, hunting in places, and drought across southern Madagascar. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Sifaka profile", href: "/animals/sifaka" },
  },
  "lears-macaw": {
    summary: [
      "Lear's macaw is a deep-blue parrot of Brazil's caatinga, once on the edge of extinction. It is assessed as Endangered, having recovered with protection.",
      "It depends heavily on the nuts of licuri palms for food.",
    ],
    whyItMatters:
      "A blue macaw brought back from the brink, Lear's macaw is both a conservation success in progress and a flagship for Brazil's distinctive dry caatinga habitat.",
    faq: [
      {
        question: "What does Lear's macaw eat?",
        answer:
          "It relies heavily on the nuts of the licuri palm, so protecting these palms is central to the species' survival, alongside curbing trapping.",
      },
      {
        question: "Why is Lear's macaw Endangered?",
        answer:
          "Published assessments cite past trapping for the pet trade, habitat loss, and its very small range, though protection has helped numbers recover. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Parrot profile", href: "/animals/parrot" },
  },
  "yellow-crested-cockatoo": {
    summary: [
      "The yellow-crested cockatoo is a white cockatoo with a bright yellow crest, found on islands of Indonesia and Timor-Leste. It is assessed as Critically Endangered.",
      "Heavy trapping for the pet trade has caused steep declines.",
    ],
    whyItMatters:
      "A dazzling island parrot devastated by the cage-bird trade, the yellow-crested cockatoo is a flagship for tackling the songbird and parrot trade in Southeast Asia.",
    faq: [
      {
        question: "Why is the yellow-crested cockatoo Critically Endangered?",
        answer:
          "Published assessments cite intense trapping for the cage-bird trade together with habitat loss across its island range. See the IUCN Red List for the current assessment.",
      },
      {
        question: "How is it different from other white cockatoos?",
        answer:
          "It is smaller than the better-known sulphur-crested cockatoo and has a distinctive yellow (or orange, in one subspecies) crest.",
      },
    ],
    relatedAnimal: { label: "Parrot profile", href: "/animals/parrot" },
  },
  "orange-bellied-parrot": {
    summary: [
      "The orange-bellied parrot is a small grass parrot that migrates across the sea between Tasmania and mainland Australia. It is assessed as Critically Endangered.",
      "It is one of the few parrots in the world that migrates, and one of the rarest.",
    ],
    whyItMatters:
      "One of the world's rarest and only migratory parrots, the orange-bellied parrot is a high-stakes Australian recovery effort reliant on captive breeding.",
    faq: [
      {
        question: "What is unusual about the orange-bellied parrot?",
        answer:
          "It is one of the very few migratory parrot species, crossing Bass Strait between its Tasmanian breeding grounds and mainland wintering areas.",
      },
      {
        question: "Why is the orange-bellied parrot Critically Endangered?",
        answer:
          "Published assessments cite its extremely small population, loss of coastal habitat, and predation and competition. It depends heavily on captive breeding. See the IUCN Red List.",
      },
    ],
  },
  "regent-honeyeater": {
    summary: [
      "The regent honeyeater is a striking black-and-yellow songbird of south-eastern Australia. It is assessed as Critically Endangered.",
      "It feeds on nectar from flowering eucalypts and was once far more common.",
    ],
    whyItMatters:
      "A nectar-feeding bird whose decline has become so severe that young males are reportedly losing their song culture, the regent honeyeater is a stark symbol of Australia's woodland bird crisis.",
    faq: [
      {
        question: "Why are regent honeyeaters 'forgetting' their songs?",
        answer:
          "As the population has crashed, some young males reportedly grow up with too few adults to learn the species' song from, and may mimic other birds instead — a sign of how far numbers have fallen.",
      },
      {
        question: "Why is the regent honeyeater Critically Endangered?",
        answer:
          "Published assessments cite the loss of its woodland habitat and a small, scattered population. See the IUCN Red List for the current assessment.",
      },
    ],
  },
  "crested-ibis": {
    summary: [
      "The crested ibis is a white wading bird with a red face and a wispy crest, once thought nearly extinct. It is assessed as Endangered, recovering from a handful of birds.",
      "Its recovery began from just a few individuals rediscovered in China in 1981.",
    ],
    whyItMatters:
      "Rebuilt from a tiny remnant flock, the crested ibis is a celebrated East Asian recovery story and a flagship for wetland and farmland conservation.",
    faq: [
      {
        question: "How close did the crested ibis come to extinction?",
        answer:
          "It was feared extinct until just a handful of wild birds were rediscovered in central China in 1981; careful protection and breeding have since rebuilt the population.",
      },
      {
        question: "Why is the crested ibis still Endangered?",
        answer:
          "Published assessments cite its recovery from a very small founder population, past habitat loss and hunting, and pressures such as pesticides. See the IUCN Red List.",
      },
    ],
  },
  "steller-sea-eagle": {
    summary: [
      "Steller's sea eagle is one of the heaviest eagles in the world, a massive raptor with a huge orange bill. It is assessed as Vulnerable.",
      "It feeds largely on fish, especially salmon, along northern coasts.",
    ],
    whyItMatters:
      "A giant coastal eagle dependent on healthy rivers and fish runs, Steller's sea eagle is a flagship for conserving the coasts and salmon of north-east Asia.",
    faq: [
      {
        question: "How big is Steller's sea eagle?",
        answer:
          "It is among the heaviest eagles in the world, with a massive deep-orange bill and a broad wingspan, built for hauling large fish from cold northern waters.",
      },
      {
        question: "Why is Steller's sea eagle Vulnerable?",
        answer:
          "Published assessments cite habitat alteration along rivers and coasts, lead poisoning from carcasses, and overfishing of its prey. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Eagle profile", href: "/animals/eagle" },
  },
  "white-rumped-vulture": {
    summary: [
      "The white-rumped vulture was once one of the most abundant large birds of prey in the world. It is now assessed as Critically Endangered after a catastrophic crash.",
      "Its numbers fell by an estimated huge percentage within a few years.",
    ],
    whyItMatters:
      "The collapse of the white-rumped vulture — driven by a veterinary drug — is one of the fastest declines of any bird and a stark lesson in unintended chemical impacts on wildlife.",
    faq: [
      {
        question: "What caused the white-rumped vulture's collapse?",
        answer:
          "Published accounts point above all to the veterinary anti-inflammatory drug diclofenac, which poisoned vultures that fed on the carcasses of treated livestock, causing a catastrophic decline across South Asia.",
      },
      {
        question: "Why are vultures so important?",
        answer:
          "As scavengers, vultures rapidly clean up carcasses and limit the spread of disease; their loss has had knock-on effects for sanitation and other scavengers. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Vulture profile", href: "/animals/vulture" },
  },
  "olm": {
    summary: [
      "The olm is a blind, cave-dwelling salamander that lives its whole life underground in the waters of European karst caves. It is assessed as Vulnerable.",
      "Pale and eyeless, it can live for many decades and survive long periods without food.",
    ],
    whyItMatters:
      "A remarkable cave specialist sometimes called a 'baby dragon', the olm is an indicator of the health of fragile underground water systems.",
    faq: [
      {
        question: "Why is the olm blind and pale?",
        answer:
          "Living in total darkness underground, it has lost functional eyes and skin pigment, while developing acute senses of smell and electroreception to find prey.",
      },
      {
        question: "Why is the olm Vulnerable?",
        answer:
          "Published assessments cite water pollution that seeps into its aquifers, disturbance of cave systems, and its naturally restricted habitat. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Olm profile", href: "/animals/olm" },
  },
  "grand-cayman-blue-iguana": {
    summary: [
      "The Grand Cayman blue iguana is a large, strikingly blue-grey lizard found only on Grand Cayman. It is assessed as Endangered, recovering from near-extinction.",
      "It was reduced to a handful of animals before an intensive breeding programme.",
    ],
    whyItMatters:
      "Rescued from the very edge of extinction by a captive-breeding and release programme, the blue iguana is a celebrated island-reptile recovery story.",
    faq: [
      {
        question: "How endangered was the blue iguana?",
        answer:
          "It was reduced to a tiny number of animals in the wild before a dedicated breeding-and-release programme began returning iguanas to protected areas on Grand Cayman.",
      },
      {
        question: "Why is the Grand Cayman blue iguana still Endangered?",
        answer:
          "Published assessments cite its history of habitat loss and introduced predators, road deaths, and a small island range, even as numbers recover. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Iguana profile", href: "/animals/iguana" },
  },
  "golden-mantella": {
    summary: [
      "The golden mantella is a tiny, brilliant orange frog found only in Madagascar. It is assessed as Critically Endangered.",
      "Its bright colour warns of toxins in its skin, like the unrelated poison frogs of the Americas.",
    ],
    whyItMatters:
      "A jewel-like amphibian with a tiny range, the golden mantella is a flagship for Madagascar's threatened wetlands and a focus of captive-breeding insurance programmes.",
    faq: [
      {
        question: "Is the golden mantella related to poison dart frogs?",
        answer:
          "No — it is a Madagascan frog, not a relative of the American poison frogs, but it has evolved similar bright warning colours and skin toxins (an example of convergence).",
      },
      {
        question: "Why is the golden mantella Critically Endangered?",
        answer:
          "Published assessments cite the loss and degradation of its specialised breeding wetlands within a very small range. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Mantella profile", href: "/animals/mantella" },
  },
  "mountain-chicken-frog": {
    summary: [
      "The mountain chicken is one of the world's largest frogs, named because its meat was once eaten like chicken. It is assessed as Critically Endangered.",
      "Disease has devastated its last island populations.",
    ],
    whyItMatters:
      "A giant island frog brought to the brink chiefly by amphibian disease, the mountain chicken is an emblem of the global amphibian crisis and of island-species fragility.",
    faq: [
      {
        question: "Why is it called the mountain chicken?",
        answer:
          "Because the large frog was traditionally hunted for its meat, which was said to taste like chicken — a practice that, along with disease, contributed to its decline.",
      },
      {
        question: "Why is the mountain chicken Critically Endangered?",
        answer:
          "Published assessments cite the amphibian fungal disease chytridiomycosis above all, along with past hunting and volcanic and habitat impacts. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Frog profile", href: "/animals/frog" },
  },
  "smalltooth-sawfish": {
    summary: [
      "The smalltooth sawfish is a large ray with a long, tooth-studded snout, related to the largetooth sawfish. It is assessed as Critically Endangered.",
      "Its saw is lined with sensory organs but also makes it highly prone to entanglement.",
    ],
    whyItMatters:
      "Vanished from much of its former range, the smalltooth sawfish is among the most threatened of all sharks and rays and a priority for coastal and estuary conservation.",
    faq: [
      {
        question: "What is the sawfish's saw used for?",
        answer:
          "The toothed snout is packed with sensory organs to detect prey and is used to slash and pin fish; unfortunately it also tangles easily in fishing nets.",
      },
      {
        question: "Why is the smalltooth sawfish Critically Endangered?",
        answer:
          "Published assessments cite entanglement in fishing gear, habitat loss, and past targeted fishing, which erased it from much of its range. See the IUCN Red List.",
      },
    ],
  },
  "humphead-wrasse": {
    summary: [
      "The humphead (Napoleon) wrasse is one of the largest reef fish, with thick lips and a prominent forehead bump in adults. It is assessed as Endangered.",
      "It can change sex and lives a long time, so it recovers slowly.",
    ],
    whyItMatters:
      "A huge, long-lived reef fish prized in the luxury seafood trade, the humphead wrasse is a flagship for sustainable reef-fish management in the Indo-Pacific.",
    faq: [
      {
        question: "Why is the humphead wrasse so vulnerable to fishing?",
        answer:
          "It grows large, matures late, lives a long time, and can change sex, so heavy fishing — especially for the luxury live-reef-fish trade — removes big breeders faster than they can be replaced.",
      },
      {
        question: "Why is the humphead wrasse Endangered?",
        answer:
          "Published assessments cite overfishing for the live-reef-food-fish trade, destructive fishing methods, and its slow reproduction. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Wrasse profile", href: "/animals/wrasse" },
  },
  "mekong-giant-catfish": {
    summary: [
      "The Mekong giant catfish is one of the largest freshwater fish in the world, a huge, scaleless catfish of the Mekong. It is assessed as Critically Endangered.",
      "It migrates long distances along the river and has become extremely rare.",
    ],
    whyItMatters:
      "A giant of one of the world's great rivers, the Mekong giant catfish is a flagship for keeping the Mekong connected and healthy for migratory fish and the people who depend on them.",
    faq: [
      {
        question: "How big is the Mekong giant catfish?",
        answer:
          "It is among the largest freshwater fish on Earth, historically reaching around three metres and several hundred kilograms — though such giants are now extremely rare.",
      },
      {
        question: "Why is the Mekong giant catfish Critically Endangered?",
        answer:
          "Published assessments cite dams that block its long migrations, overfishing, and habitat change and reduced river flow. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Catfish profile", href: "/animals/catfish" },
  },
  "lord-howe-stick-insect": {
    summary: [
      "The Lord Howe stick insect, or 'tree lobster', is a large, heavy-bodied stick insect once thought extinct for decades. It is assessed as Critically Endangered.",
      "It was rediscovered surviving on a single sea stack, Ball's Pyramid, and is now bred in captivity.",
    ],
    whyItMatters:
      "Famously rediscovered after being declared extinct, the Lord Howe stick insect is an icon of invertebrate conservation and of the damage introduced rats can do to island life.",
    faq: [
      {
        question: "Why was the Lord Howe stick insect thought extinct?",
        answer:
          "Introduced rats wiped it out on Lord Howe Island, and for decades it was presumed extinct — until a tiny population was found surviving on the nearby sea stack Ball's Pyramid.",
      },
      {
        question: "Why is it Critically Endangered?",
        answer:
          "Published assessments cite its tiny natural range and the small size of the surviving population, with introduced rats the original cause of its collapse. Captive breeding now supports it. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Stick insect profile", href: "/animals/stick-insect" },
  },
  "greater-one-horned-rhinoceros": {
    summary: [
      "The greater one-horned rhinoceros (Indian rhino) is a massive, single-horned rhino with armour-like skin folds. It is assessed as Vulnerable, having recovered strongly from near-extinction.",
      "Most live in a small number of well-guarded reserves.",
    ],
    whyItMatters:
      "A conservation success rebuilt through strict protection, the greater one-horned rhino is a flagship for India and Nepal's floodplain grasslands.",
    faq: [
      {
        question: "Why does the Indian rhino look armoured?",
        answer:
          "Its thick skin falls into deep folds that look like riveted plates of armour, a distinctive feature of this single-horned Asian rhino.",
      },
      {
        question: "Why is it only Vulnerable now?",
        answer:
          "Strict protection helped numbers recover from a few hundred to several thousand, improving its status — though it remains threatened by poaching and habitat loss. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Rhinoceros profile", href: "/animals/rhinoceros" },
  },
  "african-forest-elephant": {
    summary: [
      "The African forest elephant is a smaller, straighter-tusked elephant of Africa's rainforests, now recognised as a separate species. It is assessed as Critically Endangered.",
      "It plays a vital role spreading the seeds of forest trees.",
    ],
    whyItMatters:
      "As a 'forest gardener' that disperses the seeds of many rainforest trees, the African forest elephant is crucial to the health and carbon storage of central African forests.",
    faq: [
      {
        question: "How is the forest elephant different from the savanna elephant?",
        answer:
          "It is smaller, with straighter, downward-pointing tusks and rounder ears, and lives in dense rainforest. It is now treated as a separate species from the African savanna elephant.",
      },
      {
        question: "Why is the African forest elephant Critically Endangered?",
        answer:
          "Published assessments cite heavy poaching for ivory, habitat loss, and very slow reproduction. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Elephant profile", href: "/animals/elephant" },
  },
  "indus-river-dolphin": {
    summary: [
      "The Indus river dolphin is a freshwater dolphin that is essentially blind and navigates by echolocation. It is assessed as Endangered.",
      "It is restricted largely to the lower Indus, fragmented by irrigation barrages.",
    ],
    whyItMatters:
      "A blind river dolphin surviving in a heavily engineered river, the Indus river dolphin is a flagship for balancing irrigation with freshwater wildlife.",
    faq: [
      {
        question: "Why is the Indus river dolphin nearly blind?",
        answer:
          "Like its Ganges relative, it lives in murky river water and relies on echolocation rather than sight, with eyes that cannot form clear images.",
      },
      {
        question: "Why is the Indus river dolphin Endangered?",
        answer:
          "Published assessments cite barrages that fragment the river, bycatch, reduced water flow, and pollution. Targeted protection has helped some numbers recover. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Dolphin profile", href: "/animals/dolphin" },
  },
  "chinese-pangolin": {
    summary: [
      "The Chinese pangolin is a scale-covered, ant-eating mammal of Asia. It is assessed as Critically Endangered.",
      "Like other pangolins it rolls into a ball when threatened and is heavily trafficked.",
    ],
    whyItMatters:
      "Among the most trafficked mammals on Earth, the Chinese pangolin is a frontline species in the global fight against the illegal wildlife trade.",
    faq: [
      {
        question: "Why are Chinese pangolins so threatened?",
        answer:
          "They are hunted intensely for their keratin scales (used in some traditional medicines) and their meat, making them among the most trafficked mammals, on top of habitat loss.",
      },
      {
        question: "What do pangolins eat?",
        answer:
          "Ants and termites, which they lap up with a long, sticky tongue after tearing open nests with strong claws. See the IUCN Red List for the species' status.",
      },
    ],
    relatedAnimal: { label: "Pangolin profile", href: "/animals/pangolin" },
  },
  "numbat": {
    summary: [
      "The numbat is a small, striped marsupial that feeds almost entirely on termites. It is assessed as Endangered.",
      "Unusually for a marsupial, it is active by day, tracking termites as they move near the surface.",
    ],
    whyItMatters:
      "A termite specialist and emblem of Western Australia, the numbat is a flagship for controlling introduced predators and restoring Australian woodlands.",
    faq: [
      {
        question: "What does the numbat eat?",
        answer:
          "Almost exclusively termites — it can eat many thousands a day, licking them up with a long tongue, and does not need to dig deep because it follows termites near the surface.",
      },
      {
        question: "Why is the numbat Endangered?",
        answer:
          "Published assessments cite predation by introduced foxes and cats, habitat loss and fragmentation, and a small population. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Numbat profile", href: "/animals/numbat" },
  },
  "drill": {
    summary: [
      "The drill is a stocky forest monkey closely related to the mandrill, with a dark face and colourful rump. It is assessed as Endangered.",
      "It lives in large groups on the forest floor of west-central Africa.",
    ],
    whyItMatters:
      "One of Africa's most threatened primates with a small range, the drill is a flagship for protecting the forests of the Nigeria-Cameroon border region.",
    faq: [
      {
        question: "How is the drill related to the mandrill?",
        answer:
          "They are close relatives in the same genus, both large, ground-dwelling forest monkeys; the drill has a black face, while the mandrill has the famous red-and-blue face.",
      },
      {
        question: "Why is the drill Endangered?",
        answer:
          "Published assessments cite hunting for bushmeat, habitat loss, and fragmentation across its small range. See the IUCN Red List for the current assessment.",
      },
    ],
  },
  "barbary-macaque": {
    summary: [
      "The Barbary macaque is the only macaque in Africa and the only wild monkey in Europe (on Gibraltar). It is assessed as Endangered.",
      "It lives in cedar and oak forests and, unusually for a macaque, has only a stub of a tail.",
    ],
    whyItMatters:
      "The only African macaque and Europe's only wild primate, the Barbary macaque is a flagship for North African mountain forests and against the primate pet trade.",
    faq: [
      {
        question: "Why are there monkeys on Gibraltar?",
        answer:
          "A population of Barbary macaques lives on Gibraltar, the only wild monkeys in Europe; they are descended from animals from North Africa and are now a famous local attraction.",
      },
      {
        question: "Why is the Barbary macaque Endangered?",
        answer:
          "Published assessments cite capture for the illegal pet trade, habitat loss and overgrazing, and conflict with people. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Macaque profile", href: "/animals/macaque" },
  },
  "red-shanked-douc": {
    summary: [
      "The red-shanked douc is one of the most colourful primates, a leaf-eating monkey with maroon 'stockings' and a golden face. It is assessed as Critically Endangered.",
      "It lives high in the forest canopy and rarely comes to the ground.",
    ],
    whyItMatters:
      "A spectacularly coloured leaf-eater of Indochina, the red-shanked douc is a flagship for Southeast Asian forest conservation.",
    faq: [
      {
        question: "Why is the red-shanked douc so colourful?",
        answer:
          "Adults have maroon-red lower legs, white forearms, a golden-orange face, and grey body — among the most vividly patterned of all monkeys, earning doucs the nickname 'costumed apes'.",
      },
      {
        question: "Why is the red-shanked douc Critically Endangered?",
        answer:
          "Published assessments cite hunting, habitat loss, and capture for trade across Vietnam, Laos, and Cambodia. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Douc profile", href: "/animals/douc" },
  },
  "fossa": {
    summary: [
      "The fossa is Madagascar's largest carnivore, a slender, cat-like predator related to the mongoose family. It is assessed as Vulnerable.",
      "It is the main predator of lemurs and is an agile climber.",
    ],
    whyItMatters:
      "As the top predator of Madagascar's forests, the fossa shapes lemur populations and is a flagship for the island's threatened ecosystems.",
    faq: [
      {
        question: "Is the fossa a cat?",
        answer:
          "No. Although it looks and hunts like a cat, the fossa belongs to a Madagascar-specific carnivore family related to mongooses — a striking case of an animal evolving cat-like traits independently.",
      },
      {
        question: "Why is the fossa Vulnerable?",
        answer:
          "Published assessments cite deforestation, persecution by people protecting livestock, and habitat fragmentation. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Fossa profile", href: "/animals/fossa" },
  },
  "hawaiian-monk-seal": {
    summary: [
      "The Hawaiian monk seal is one of the world's most endangered seals, found only around Hawaii. It is assessed as Endangered.",
      "It is one of the few seals adapted to warm tropical waters.",
    ],
    whyItMatters:
      "A tropical seal found nowhere else, the Hawaiian monk seal is a flagship for protecting Hawaii's marine ecosystems and tackling ocean plastic.",
    faq: [
      {
        question: "Why is the Hawaiian monk seal unusual among seals?",
        answer:
          "Most seals live in cold waters, but the Hawaiian monk seal is adapted to warm tropical seas and is found only around the Hawaiian Islands.",
      },
      {
        question: "Why is it Endangered?",
        answer:
          "Published assessments cite entanglement in marine debris, food shortages for young seals, disease, and human disturbance, though careful management has helped numbers. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Seal profile", href: "/animals/seal" },
  },
  "great-green-macaw": {
    summary: [
      "The great green macaw is a large, mostly green macaw of Central and South American forests. It is assessed as Critically Endangered.",
      "It depends closely on certain large trees for nesting and food.",
    ],
    whyItMatters:
      "A large rainforest parrot tied to specific trees, the great green macaw is a flagship for protecting and connecting the forests of Central America.",
    faq: [
      {
        question: "Why does the great green macaw depend on particular trees?",
        answer:
          "It relies heavily on certain large trees (such as the almendro) for nesting cavities and food, so losing those trees directly threatens the macaw.",
      },
      {
        question: "Why is the great green macaw Critically Endangered?",
        answer:
          "Published assessments cite deforestation, trapping for the pet trade, and loss of key nesting trees. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Parrot profile", href: "/animals/parrot" },
  },
  "philippine-cockatoo": {
    summary: [
      "The Philippine cockatoo (red-vented cockatoo) is a white cockatoo found only in the Philippines. It is assessed as Critically Endangered.",
      "It has been devastated by trapping for the pet trade.",
    ],
    whyItMatters:
      "An island cockatoo pushed to the brink by the cage-bird trade, the Philippine cockatoo is a flagship for Philippine forest and mangrove conservation.",
    faq: [
      {
        question: "Why is the Philippine cockatoo Critically Endangered?",
        answer:
          "Published assessments cite intense trapping for the cage-bird trade and habitat loss, including the loss of mangroves it uses. See the IUCN Red List.",
      },
      {
        question: "How is it recognised?",
        answer:
          "It is a medium-sized white cockatoo with reddish feathers under the tail (hence 'red-vented'), found only in the Philippines.",
      },
    ],
    relatedAnimal: { label: "Parrot profile", href: "/animals/parrot" },
  },
  "yellow-eyed-penguin": {
    summary: [
      "The yellow-eyed penguin (hoiho) is a rare New Zealand penguin with a band of yellow around its eyes. It is assessed as Endangered.",
      "Unlike many penguins it nests in dispersed, hidden sites rather than dense colonies.",
    ],
    whyItMatters:
      "One of the world's rarest penguins and a New Zealand icon, the yellow-eyed penguin is a flagship for coastal forest restoration and predator control.",
    faq: [
      {
        question: "What is unusual about how the yellow-eyed penguin nests?",
        answer:
          "Rather than packing into dense colonies, it nests in dispersed, sheltered sites in coastal vegetation, often out of sight of other nests.",
      },
      {
        question: "Why is the yellow-eyed penguin Endangered?",
        answer:
          "Published assessments cite disease and food shortages, introduced predators, habitat disturbance, and bycatch. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Penguin profile", href: "/animals/penguin" },
  },
  "humboldt-penguin": {
    summary: [
      "The Humboldt penguin is a medium-sized penguin of the cold Humboldt Current off South America. It is assessed as Vulnerable.",
      "It depends on the rich fish populations the current supports.",
    ],
    whyItMatters:
      "A penguin tied to one of the world's most productive currents, the Humboldt penguin is a barometer for the health of the Peru-Chile marine ecosystem.",
    faq: [
      {
        question: "Why does the Humboldt penguin live in such a warm region?",
        answer:
          "The cold, nutrient-rich Humboldt Current flows up the coasts of Peru and Chile, supporting huge fish populations that allow penguins to thrive despite the warm latitude.",
      },
      {
        question: "Why is the Humboldt penguin Vulnerable?",
        answer:
          "Published assessments cite overfishing of its prey, ocean changes such as El Niño, and disturbance and bycatch. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Penguin profile", href: "/animals/penguin" },
  },
  "white-backed-vulture": {
    summary: [
      "The white-backed vulture is the most widespread vulture in Africa, yet has suffered a dramatic collapse. It is assessed as Critically Endangered.",
      "Large numbers can die at once when carcasses are poisoned.",
    ],
    whyItMatters:
      "As Africa's most common vulture in steep decline, the white-backed vulture is central to the continent's vulture crisis and the loss of nature's clean-up crew.",
    faq: [
      {
        question: "Why do so many vultures die from poisoning?",
        answer:
          "Vultures feed together in large numbers on carcasses, so a single poisoned carcass — set deliberately or to hide poaching — can kill dozens or hundreds at once.",
      },
      {
        question: "Why is the white-backed vulture Critically Endangered?",
        answer:
          "Published assessments cite poisoning, killing linked to poaching, and loss of food and habitat, which have caused a steep, rapid decline. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Vulture profile", href: "/animals/vulture" },
  },
  "sarus-crane": {
    summary: [
      "The sarus crane is the tallest flying bird in the world, a grey crane with a red head and neck. It is assessed as Vulnerable.",
      "It often nests in and around farmland and is famous for lifelong pair bonds.",
    ],
    whyItMatters:
      "The world's tallest flying bird and a symbol of fidelity, the sarus crane is a flagship for conserving wetlands within farmed landscapes.",
    faq: [
      {
        question: "How tall is the sarus crane?",
        answer:
          "It is the tallest flying bird in the world, standing up to around 1.8 metres — taller than many people — with a striking red head and upper neck.",
      },
      {
        question: "Why is the sarus crane Vulnerable?",
        answer:
          "Published assessments cite wetland loss and drainage, collisions and poisoning, and agricultural change. See the IUCN Red List for the current assessment.",
      },
    ],
  },
  "black-faced-spoonbill": {
    summary: [
      "The black-faced spoonbill is a rare wading bird with a black face and a spoon-shaped bill. It is assessed as Endangered.",
      "It sweeps its bill side to side through shallow water to catch prey.",
    ],
    whyItMatters:
      "A coastal specialist of East Asia's vanishing tidal flats, the black-faced spoonbill is a flagship for the threatened wetlands of the Yellow Sea region.",
    faq: [
      {
        question: "How does a spoonbill feed?",
        answer:
          "It sweeps its flattened, spoon-tipped bill from side to side through shallow water, snapping it shut when it touches small fish or invertebrates.",
      },
      {
        question: "Why is the black-faced spoonbill Endangered?",
        answer:
          "Published assessments cite the loss of coastal wetlands and tidal flats, pollution, and disturbance, though coordinated protection has helped numbers rise. See the IUCN Red List.",
      },
    ],
  },
  "kagu": {
    summary: [
      "The kagu is a near-flightless, ghost-grey bird found only in New Caledonia, with a shaggy crest. It is assessed as Endangered.",
      "It is the sole survivor of an ancient bird lineage and nests on the ground.",
    ],
    whyItMatters:
      "An ancient, near-flightless island bird with no close relatives, the kagu is a flagship for New Caledonia's unique forests and the danger introduced predators pose.",
    faq: [
      {
        question: "Why is the kagu so vulnerable to introduced predators?",
        answer:
          "It is near-flightless and nests on the ground, so dogs, cats, rats, and pigs can easily take eggs, chicks, and adults — a common fate for island birds that evolved without such predators.",
      },
      {
        question: "Why is the kagu Endangered?",
        answer:
          "Published assessments cite introduced predators, habitat loss, and its small island range. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Kagu profile", href: "/animals/kagu" },
  },
  "galapagos-land-iguana": {
    summary: [
      "The Galápagos land iguana is a large yellowish iguana found only on the Galápagos Islands. It is assessed as Vulnerable.",
      "It eats cactus pads and other plants and basks on volcanic rock.",
    ],
    whyItMatters:
      "A Galápagos endemic that helped inspire ideas about island evolution, the land iguana is a flagship for the archipelago's restoration and predator control.",
    faq: [
      {
        question: "What does the Galápagos land iguana eat?",
        answer:
          "Mostly plants, including the pads and fruit of prickly-pear cactus, which also provide much of the water it needs in the dry islands.",
      },
      {
        question: "Why is the Galápagos land iguana Vulnerable?",
        answer:
          "Published assessments cite introduced predators and grazers and past habitat damage within a restricted island range, though restoration has helped. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Iguana profile", href: "/animals/iguana" },
  },
  "siamese-crocodile": {
    summary: [
      "The Siamese crocodile is a small freshwater crocodile of Southeast Asia, nearly extinct in the wild. It is assessed as Critically Endangered.",
      "Many more live on farms than in the wild.",
    ],
    whyItMatters:
      "A freshwater crocodile that survives mainly on farms, the Siamese crocodile is a focus for wetland protection and careful reintroduction of pure wild stock.",
    faq: [
      {
        question: "Why are there more Siamese crocodiles on farms than in the wild?",
        answer:
          "The species was heavily collected for crocodile farming, and wild populations collapsed, so farmed animals now greatly outnumber the few left in the wild.",
      },
      {
        question: "Why is the Siamese crocodile Critically Endangered?",
        answer:
          "Published assessments cite past collection, habitat loss, hybridisation concerns, and a very small wild population. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Crocodile profile", href: "/animals/crocodile" },
  },
  "tomistoma": {
    summary: [
      "The tomistoma, or false gharial, is a slender-snouted crocodilian of Southeast Asian swamps. It is assessed as Vulnerable.",
      "Its very narrow snout suits catching fish, like the true gharial it resembles.",
    ],
    whyItMatters:
      "A specialised freshwater crocodilian of vanishing peat swamps, the tomistoma is a flagship for Southeast Asia's threatened wetland forests.",
    faq: [
      {
        question: "Is the tomistoma a true gharial?",
        answer:
          "No. It is called the 'false gharial' because its long, slender snout resembles the gharial's, but it is a separate species; its exact relationships have long been debated.",
      },
      {
        question: "Why is the tomistoma Vulnerable?",
        answer:
          "Published assessments cite habitat loss (especially drainage of peat swamps), entanglement in fishing nets, and egg collection. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Gharial profile", href: "/animals/gharial" },
  },
  "lemur-leaf-frog": {
    summary: [
      "The lemur leaf frog is a small, slender tree frog that is green by day and turns brown at night. It is assessed as Critically Endangered.",
      "It clings to vegetation with a slow, deliberate, lemur-like climb.",
    ],
    whyItMatters:
      "A delicate Central American tree frog hit hard by amphibian disease, the lemur leaf frog is part of the wider amphibian extinction crisis and captive 'ark' efforts.",
    faq: [
      {
        question: "Why does the lemur leaf frog change colour?",
        answer:
          "It is bright green and active-looking by day and turns reddish-brown at night, a colour change linked to camouflage and its daily rhythm.",
      },
      {
        question: "Why is the lemur leaf frog Critically Endangered?",
        answer:
          "Published assessments cite the amphibian fungal disease chytridiomycosis and habitat loss, which have caused steep declines. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Tree frog profile", href: "/animals/tree-frog" },
  },
  "archeys-frog": {
    summary: [
      "Archey's frog is a tiny, ancient New Zealand frog that has changed little over a very long evolutionary history. It is assessed as Critically Endangered.",
      "It has no free tadpole stage — young develop on the male's back.",
    ],
    whyItMatters:
      "One of the most evolutionarily distinct amphibians alive, Archey's frog is a living link to deep frog history and a flagship for New Zealand's native frogs.",
    faq: [
      {
        question: "What makes Archey's frog special?",
        answer:
          "It belongs to an ancient lineage of New Zealand frogs that has changed little over a very long time, and it skips the free-swimming tadpole stage — froglets develop on the male's back.",
      },
      {
        question: "Why is Archey's frog Critically Endangered?",
        answer:
          "Published assessments cite the amphibian fungal disease chytridiomycosis, introduced predators, and its tiny range. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Frog profile", href: "/animals/frog" },
  },
  "nassau-grouper": {
    summary: [
      "The Nassau grouper is a large Caribbean reef fish once central to local fisheries. It is assessed as Critically Endangered.",
      "It gathers in large spawning aggregations that are easily overfished.",
    ],
    whyItMatters:
      "A reef predator whose predictable spawning gatherings make it acutely vulnerable, the Nassau grouper is a flagship for protecting fish spawning sites.",
    faq: [
      {
        question: "Why are spawning aggregations so risky for the Nassau grouper?",
        answer:
          "The fish gather in large, predictable numbers at the same places and times to spawn, which makes them extremely easy to catch in bulk — quickly depleting breeding adults.",
      },
      {
        question: "Why is the Nassau grouper Critically Endangered?",
        answer:
          "Published assessments cite overfishing, especially at spawning aggregations, and habitat loss. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Grouper profile", href: "/animals/grouper" },
  },
  "southern-bluefin-tuna": {
    summary: [
      "The southern bluefin tuna is a large, fast, warm-bodied ocean fish prized for sushi and sashimi. It is assessed as Endangered.",
      "Heavy fishing drove a severe decline, with cautious signs of recovery under quotas.",
    ],
    whyItMatters:
      "A high-value ocean predator hammered by fishing, the southern bluefin tuna is a key test of whether international quota management can rebuild a depleted fishery.",
    faq: [
      {
        question: "Why is southern bluefin tuna so heavily fished?",
        answer:
          "It is highly valued for sushi and sashimi, which drove intense fishing and a severe population decline; international quotas now aim to rebuild the stock.",
      },
      {
        question: "Why is the southern bluefin tuna Endangered?",
        answer:
          "Published assessments cite past severe overfishing, continued fishing pressure, and slow maturation that makes recovery gradual. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Tuna profile", href: "/animals/tuna" },
  },
  "banggai-cardinalfish": {
    summary: [
      "The Banggai cardinalfish is a striking black-and-silver reef fish with a very small natural range. It is assessed as Endangered.",
      "Males brood the eggs and young in their mouths.",
    ],
    whyItMatters:
      "A beautiful reef fish heavily collected for aquariums from a tiny range, the Banggai cardinalfish is a flagship for sustainable aquarium-trade practices.",
    faq: [
      {
        question: "How do Banggai cardinalfish raise their young?",
        answer:
          "Males are mouthbrooders: they hold the eggs and then the tiny young in their mouths until the juveniles are ready to fend for themselves.",
      },
      {
        question: "Why is the Banggai cardinalfish Endangered?",
        answer:
          "Published assessments cite heavy collection for the aquarium trade from a very small natural range, plus habitat damage. See the IUCN Red List.",
      },
    ],
  },
  "giant-freshwater-stingray": {
    summary: [
      "The giant freshwater stingray is one of the largest freshwater fish in the world, a huge ray with a long venomous tail spine. It is assessed as Endangered.",
      "It lives buried on the beds of large rivers.",
    ],
    whyItMatters:
      "A river giant that is rarely seen, the giant freshwater stingray is a flagship for the health of Southeast Asia's great rivers and their megafauna.",
    faq: [
      {
        question: "How big is the giant freshwater stingray?",
        answer:
          "It is among the largest freshwater fish on Earth, with a body disc that can be around two metres across and a total length, including the tail, that is much greater.",
      },
      {
        question: "Why is the giant freshwater stingray Endangered?",
        answer:
          "Published assessments cite overfishing and bycatch, habitat degradation, and dams and pollution in its river systems. See the IUCN Red List. Its tail bears a venomous spine, so it should never be handled.",
      },
    ],
    relatedAnimal: { label: "Ray profile", href: "/animals/ray" },
  },
  "pillar-coral": {
    summary: [
      "Pillar coral is a distinctive coral that grows in tall, finger-like columns on Caribbean reefs. It is assessed as Vulnerable, and has declined sharply with disease.",
      "Like all corals it is a colony of tiny animals living with symbiotic algae.",
    ],
    whyItMatters:
      "A distinctive reef-building coral hit hard by disease and warming, pillar coral is part of the wider Caribbean reef crisis and a focus of coral-restoration work.",
    faq: [
      {
        question: "Why is pillar coral easy to recognise?",
        answer:
          "It grows in tall, rounded, finger-like pillars rising from the reef, unlike the branching or boulder shapes of many other corals.",
      },
      {
        question: "Why is pillar coral Vulnerable?",
        answer:
          "Published assessments cite warming-driven bleaching, coral disease (which has spread rapidly in the Caribbean), and pollution and reef degradation. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Coral profile", href: "/animals/coral" },
  },
  "tapanuli-orangutan": {
    summary: [
      "The Tapanuli orangutan, described as a separate species only in 2017, is the rarest of the great apes. It is assessed as Critically Endangered.",
      "It survives in a single isolated forest block with a very small population.",
    ],
    whyItMatters:
      "The most recently described and rarest great ape, the Tapanuli orangutan is a flagship for protecting one small, irreplaceable Sumatran forest.",
    faq: [
      {
        question: "When was the Tapanuli orangutan recognised?",
        answer:
          "It was described as a distinct species in 2017, making it the most recently named great ape — and immediately one of the rarest, with a very small population.",
      },
      {
        question: "Why is the Tapanuli orangutan Critically Endangered?",
        answer:
          "Published assessments cite habitat loss and fragmentation, a planned hydroelectric project in its range, and killing or capture. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Orangutan profile", href: "/animals/orangutan" },
  },
  "sei-whale": {
    summary: [
      "The sei whale is a large, fast baleen whale of the open ocean. It is assessed as Endangered.",
      "It feeds by both skimming and gulping plankton and small fish near the surface.",
    ],
    whyItMatters:
      "A swift ocean giant heavily hunted during industrial whaling, the sei whale is a species slowly recovering under protection.",
    faq: [
      {
        question: "How fast is the sei whale?",
        answer:
          "It is among the fastest of the great whales, capable of sustained high-speed swimming — one reason it was hunted later than slower species, once faster whaling ships existed.",
      },
      {
        question: "Why is the sei whale Endangered?",
        answer:
          "Published assessments cite the heavy toll of 20th-century commercial whaling, with ongoing threats from ship strikes and entanglement. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Whale profile", href: "/animals/whale" },
  },
  "hectors-dolphin": {
    summary: [
      "Hector's dolphin is one of the smallest and rarest marine dolphins, found only around New Zealand. It is assessed as Endangered.",
      "It has a distinctive rounded dorsal fin and lives close to shore.",
    ],
    whyItMatters:
      "A tiny coastal dolphin found nowhere else, Hector's dolphin is a flagship for making New Zealand's inshore fisheries dolphin-safe.",
    faq: [
      {
        question: "How do you recognise Hector's dolphin?",
        answer:
          "It is very small, with a distinctive rounded, almost Mickey-Mouse-ear-shaped dorsal fin, and lives in shallow coastal waters around New Zealand.",
      },
      {
        question: "Why is Hector's dolphin Endangered?",
        answer:
          "Published assessments cite entanglement in fishing nets above all, plus a small, fragmented population, disease, and disturbance. The Maui subspecies is even more imperilled. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Dolphin profile", href: "/animals/dolphin" },
  },
  "banteng": {
    summary: [
      "The banteng is a wild cattle species of Southeast Asia, ancestor of domestic Bali cattle. It is assessed as Endangered.",
      "Bulls are dark with white 'stockings'; cows are reddish-brown.",
    ],
    whyItMatters:
      "A wild bovine that has been domesticated in part of its range, the banteng is both an agricultural ancestor and a flagship for Southeast Asian forest conservation.",
    faq: [
      {
        question: "How is the banteng related to domestic cattle?",
        answer:
          "It is the wild ancestor of the domesticated Bali cattle of Southeast Asia, and can interbreed with domestic cattle — which is also one of the threats to wild banteng.",
      },
      {
        question: "Why is the banteng Endangered?",
        answer:
          "Published assessments cite hunting and poaching, habitat loss, and hybridisation with domestic cattle. See the IUCN Red List for the current assessment.",
      },
    ],
  },
  "giant-armadillo": {
    summary: [
      "The giant armadillo is by far the largest armadillo, a powerful digger with enormous claws. It is assessed as Vulnerable.",
      "It excavates large burrows that many other animals also use.",
    ],
    whyItMatters:
      "As an 'ecosystem engineer' whose burrows shelter dozens of other species, the giant armadillo plays an outsized role in South American ecosystems.",
    faq: [
      {
        question: "Why is the giant armadillo called an ecosystem engineer?",
        answer:
          "Its large burrows are used by many other animals for shelter, temperature regulation, and foraging, so a single giant armadillo benefits a whole community of species.",
      },
      {
        question: "Why is the giant armadillo Vulnerable?",
        answer:
          "Published assessments cite hunting, habitat loss, and its naturally low density and slow reproduction, which make recovery difficult. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Armadillo profile", href: "/animals/armadillo" },
  },
  "greater-bamboo-lemur": {
    summary: [
      "The greater bamboo lemur is a specialist that feeds largely on a single type of bamboo, including parts that are rich in cyanide. It is assessed as Critically Endangered.",
      "It was once thought extinct before being rediscovered.",
    ],
    whyItMatters:
      "An extreme dietary specialist found only in Madagascar, the greater bamboo lemur is a flagship for the island's threatened bamboo forests.",
    faq: [
      {
        question: "How can the greater bamboo lemur eat toxic bamboo?",
        answer:
          "It feeds heavily on giant bamboo, including parts that contain cyanide in amounts that would be dangerous to many animals; how it copes with this toxin is still studied.",
      },
      {
        question: "Why is the greater bamboo lemur Critically Endangered?",
        answer:
          "Published assessments cite the loss of its bamboo forest, slash-and-burn agriculture, and hunting. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Lemur profile", href: "/animals/lemur" },
  },
  "pygmy-slow-loris": {
    summary: [
      "The pygmy slow loris is a small, slow-moving nocturnal primate with a toxic bite — rare among mammals. It is assessed as Endangered.",
      "It moves deliberately through the trees and feeds on insects, sap, and fruit.",
    ],
    whyItMatters:
      "A venomous, slow-moving primate heavily targeted by the wildlife trade, the pygmy slow loris is a flagship against the illegal pet and medicine trade in Southeast Asia.",
    faq: [
      {
        question: "Is it true that slow lorises are venomous?",
        answer:
          "Yes. Slow lorises are among the very few venomous mammals: they produce a toxin from glands on the arm that, combined with saliva, can deliver a venomous bite.",
      },
      {
        question: "Why is the pygmy slow loris Endangered?",
        answer:
          "Published assessments cite capture for the pet and traditional-medicine trade and habitat loss. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Slow loris profile", href: "/animals/slow-loris" },
  },
  "dama-gazelle": {
    summary: [
      "The dama gazelle is the largest gazelle and one of the most endangered, a tall, long-necked antelope of the Sahara. It is assessed as Critically Endangered.",
      "Only small remnant groups survive in the wild.",
    ],
    whyItMatters:
      "The largest gazelle and now barely clinging on in the wild, the dama gazelle is a stark indicator of how heavily Saharan wildlife has been hunted.",
    faq: [
      {
        question: "What makes the dama gazelle distinctive?",
        answer:
          "It is the largest gazelle, with long legs and neck and a mostly white body with a reddish-brown back and neck, suited to the open Sahara and Sahel.",
      },
      {
        question: "Why is the dama gazelle Critically Endangered?",
        answer:
          "Published assessments cite uncontrolled hunting, habitat loss and drought, and a tiny fragmented population. See the IUCN Red List.",
      },
    ],
  },
  "wild-bactrian-camel": {
    summary: [
      "The wild Bactrian camel is the rare wild relative of the domestic two-humped camel, surviving in remote deserts. It is assessed as Critically Endangered.",
      "It can drink salty water that other large mammals cannot tolerate.",
    ],
    whyItMatters:
      "A genuinely wild camel of some of the harshest deserts on Earth, the wild Bactrian camel is a flagship for protecting Central Asia's remote arid wilderness.",
    faq: [
      {
        question: "How is the wild Bactrian camel different from domestic camels?",
        answer:
          "It is a separate, genuinely wild population (not feral), generally slimmer with smaller humps, and remarkably it can drink salty water that would harm most mammals.",
      },
      {
        question: "Why is the wild Bactrian camel Critically Endangered?",
        answer:
          "Published assessments cite hunting, competition with livestock and hybridisation with domestic camels, and scarce water and habitat loss. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Camel profile", href: "/animals/camel" },
  },
  "blue-throated-macaw": {
    summary: [
      "The blue-throated macaw is a rare blue-and-yellow macaw found only in a small part of Bolivia. It is assessed as Critically Endangered.",
      "It nests in palm cavities and depends on specific palm habitats.",
    ],
    whyItMatters:
      "A Bolivian endemic reduced to a tiny wild population, the blue-throated macaw is a flagship for protecting the palm savannas of the Bolivian lowlands.",
    faq: [
      {
        question: "How is the blue-throated macaw told apart from the blue-and-yellow macaw?",
        answer:
          "It is similar but has a blue (rather than green-and-black) throat and face markings, and a much smaller, restricted range in Bolivia.",
      },
      {
        question: "Why is the blue-throated macaw Critically Endangered?",
        answer:
          "Published assessments cite past heavy trapping for the pet trade, loss of nesting palms, and its very small range. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Parrot profile", href: "/animals/parrot" },
  },
  "military-macaw": {
    summary: [
      "The military macaw is a large green macaw with a red forehead, named for its uniform-like colouring. It is assessed as Vulnerable.",
      "It lives in scattered populations across a wide but patchy range.",
    ],
    whyItMatters:
      "A widespread but patchily distributed macaw, the military macaw is a flagship for connecting and protecting the dry and humid forests it depends on.",
    faq: [
      {
        question: "Why is it called the military macaw?",
        answer:
          "Its mostly green plumage with a red forehead was likened to a military uniform, giving the bird its name.",
      },
      {
        question: "Why is the military macaw Vulnerable?",
        answer:
          "Published assessments cite trapping for the pet trade, habitat loss, and fragmentation across its scattered range. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Parrot profile", href: "/animals/parrot" },
  },
  "swift-parrot": {
    summary: [
      "The swift parrot is a fast-flying migratory parrot that breeds in Tasmania and winters on mainland Australia. It is assessed as Critically Endangered.",
      "It depends on flowering eucalypts and tree hollows for nesting.",
    ],
    whyItMatters:
      "A migratory parrot squeezed between logging and introduced predators, the swift parrot is a flagship for Australia's threatened temperate woodlands.",
    faq: [
      {
        question: "What threatens swift parrots while they nest?",
        answer:
          "On parts of Tasmania, introduced sugar gliders prey on nesting females and chicks in tree hollows, a major and unusual threat alongside the loss of nesting and feeding trees.",
      },
      {
        question: "Why is the swift parrot Critically Endangered?",
        answer:
          "Published assessments cite loss of breeding and foraging habitat, predation by introduced sugar gliders, and a small population. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Parrot profile", href: "/animals/parrot" },
  },
  "night-parrot": {
    summary: [
      "The night parrot is an elusive, ground-dwelling nocturnal parrot of the Australian outback, once feared extinct for decades. It is assessed as Endangered.",
      "It shelters in dense spinifex grass and is almost never seen.",
    ],
    whyItMatters:
      "One of the world's most mysterious birds, rediscovered after decades, the night parrot is a flagship for arid-zone conservation and predator and fire management.",
    faq: [
      {
        question: "Why was the night parrot thought extinct?",
        answer:
          "It is nocturnal, ground-dwelling, and lives in remote, hard-to-survey country, so for much of the 20th century there were almost no confirmed sightings — until photographic proof emerged in recent years.",
      },
      {
        question: "Why is the night parrot Endangered?",
        answer:
          "Published assessments cite introduced cats and foxes, altered fire regimes, and its extremely small, scattered population. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Parrot profile", href: "/animals/parrot" },
  },
  "hooded-vulture": {
    summary: [
      "The hooded vulture is a small, widespread African vulture often seen near settlements. It is assessed as Critically Endangered after steep declines.",
      "It is a scavenger that helps clean up waste and carcasses.",
    ],
    whyItMatters:
      "A familiar African scavenger now in crisis, the hooded vulture is part of the continent-wide collapse of vultures and the loss of their sanitation role.",
    faq: [
      {
        question: "Why are hooded vultures often seen near people?",
        answer:
          "Unlike some larger vultures, the hooded vulture frequently scavenges around towns, markets, and abattoirs, helping clean up scraps and waste.",
      },
      {
        question: "Why is the hooded vulture Critically Endangered?",
        answer:
          "Published assessments cite poisoning, killing for belief-based use and bushmeat, and habitat change, which have driven steep declines. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Vulture profile", href: "/animals/vulture" },
  },
  "martial-eagle": {
    summary: [
      "The martial eagle is the largest eagle in Africa, a powerful predator of open country. It is assessed as Endangered.",
      "It hunts prey as large as small antelopes, gamebirds, and monitor lizards.",
    ],
    whyItMatters:
      "As Africa's largest eagle and a wide-ranging apex predator, the martial eagle is an indicator of the health of large, open landscapes.",
    faq: [
      {
        question: "How powerful is the martial eagle?",
        answer:
          "It is Africa's largest eagle and strong enough to take prey such as small antelopes, large gamebirds, and monitor lizards, hunting over vast territories.",
      },
      {
        question: "Why is the martial eagle Endangered?",
        answer:
          "Published assessments cite persecution by farmers (who may see it as a threat to livestock), collisions and electrocution on power infrastructure, and prey and habitat loss. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Eagle profile", href: "/animals/eagle" },
  },
  "grey-crowned-crane": {
    summary: [
      "The grey-crowned crane is a striking grey crane with a golden crown of feathers, the national bird of Uganda. It is assessed as Endangered.",
      "It performs elaborate dancing displays.",
    ],
    whyItMatters:
      "A flagship of African wetlands and a national symbol, the grey-crowned crane is an indicator of the health of the marshes and grasslands it depends on.",
    faq: [
      {
        question: "What is the grey-crowned crane's crown?",
        answer:
          "It has a spray of stiff golden feathers on its head, giving it a distinctive 'crown' — a feature that also makes it popular, and sadly targeted, in the captive-bird trade.",
      },
      {
        question: "Why is the grey-crowned crane Endangered?",
        answer:
          "Published assessments cite the loss and drainage of wetlands, capture for the live-bird trade, and disturbance. See the IUCN Red List for the current assessment.",
      },
    ],
  },
  "short-tailed-albatross": {
    summary: [
      "The short-tailed albatross is a large North Pacific albatross once hunted nearly to extinction for its feathers. It is assessed as Vulnerable, recovering from a tiny remnant.",
      "Most of the population breeds on a single volcanic island.",
    ],
    whyItMatters:
      "Rebuilt from near-extinction, the short-tailed albatross is a recovery success still at risk because so much of it nests on one volcanic island.",
    faq: [
      {
        question: "How close did the short-tailed albatross come to extinction?",
        answer:
          "It was hunted in huge numbers for its feathers and was thought possibly extinct in the mid-20th century before a small breeding group was found and protected.",
      },
      {
        question: "Why is the short-tailed albatross still Vulnerable?",
        answer:
          "Published assessments cite its recovery from a tiny remnant, the volcanic risk at its main colony, and threats such as longline bycatch and plastic. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Albatross profile", href: "/animals/albatross" },
  },
  "macaroni-penguin": {
    summary: [
      "The macaroni penguin is a crested penguin with showy yellow head plumes, one of the most numerous penguins yet still declining. It is assessed as Vulnerable.",
      "It breeds in enormous colonies on sub-Antarctic islands.",
    ],
    whyItMatters:
      "Despite huge numbers, the macaroni penguin's decline signals shifts in the Southern Ocean's krill-based food web.",
    faq: [
      {
        question: "Why is it called the macaroni penguin?",
        answer:
          "Its flamboyant yellow-orange head crest reminded early observers of the elaborate 'macaroni' fashion of the 18th century, giving the penguin its name.",
      },
      {
        question: "Why is the macaroni penguin Vulnerable?",
        answer:
          "Published assessments cite changes in the availability of its prey (krill and small fish), ocean change, and disturbance, which have driven declines despite large total numbers. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Penguin profile", href: "/animals/penguin" },
  },
  "jamaican-iguana": {
    summary: [
      "The Jamaican iguana is a large lizard once believed extinct, rediscovered in 1990. It is assessed as Critically Endangered.",
      "It survives in a single dry-forest area and is supported by a head-start breeding programme.",
    ],
    whyItMatters:
      "A 'Lazarus' reptile brought back from presumed extinction, the Jamaican iguana is a flagship for Caribbean island conservation and predator control.",
    faq: [
      {
        question: "Was the Jamaican iguana really rediscovered?",
        answer:
          "Yes. It was thought extinct for much of the 20th century until a small population was found in the Hellshire Hills in 1990, prompting an intensive recovery programme.",
      },
      {
        question: "Why is the Jamaican iguana Critically Endangered?",
        answer:
          "Published assessments cite introduced predators such as mongooses, habitat loss, and its tiny range, even as careful management helps numbers recover. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Iguana profile", href: "/animals/iguana" },
  },
  "philippine-crocodile": {
    summary: [
      "The Philippine crocodile is a small freshwater crocodile found only in the Philippines. It is assessed as Critically Endangered.",
      "It is one of the most threatened crocodilians, with very few left in the wild.",
    ],
    whyItMatters:
      "A small freshwater crocodile found nowhere else, the Philippine crocodile is a flagship for changing attitudes toward crocodilians and protecting Philippine wetlands.",
    faq: [
      {
        question: "Is the Philippine crocodile dangerous to people?",
        answer:
          "It is a relatively small freshwater crocodile and far less dangerous than the large saltwater crocodile; community-based conservation has worked to reduce fear and killing.",
      },
      {
        question: "Why is the Philippine crocodile Critically Endangered?",
        answer:
          "Published assessments cite past killing and persecution, habitat loss, entanglement in fishing gear, and a very small population. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Crocodile profile", href: "/animals/crocodile" },
  },
  "yangtze-giant-softshell-turtle": {
    summary: [
      "The Yangtze giant softshell turtle is one of the largest freshwater turtles and may be the rarest turtle in the world, with only a few known individuals. It is assessed as Critically Endangered.",
      "It has a soft, leathery shell and a pig-like snout.",
    ],
    whyItMatters:
      "Possibly the rarest turtle on Earth, the Yangtze giant softshell turtle is a sobering symbol of how close a species can come to vanishing.",
    faq: [
      {
        question: "Why is the Yangtze giant softshell turtle so rare?",
        answer:
          "Only a tiny number of individuals are known to survive, and efforts to breed them have repeatedly failed, leaving the species on the very edge of extinction.",
      },
      {
        question: "Why is it Critically Endangered?",
        answer:
          "Published assessments cite its extremely small known population, past hunting and habitat loss, and failed reproduction. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Turtle profile", href: "/animals/turtle" },
  },
  "southern-corroboree-frog": {
    summary: [
      "The southern corroboree frog is a tiny, brilliant yellow-and-black alpine frog of Australia. It is assessed as Critically Endangered.",
      "Its striking pattern warns of toxins it makes itself, rather than obtaining from food.",
    ],
    whyItMatters:
      "A jewel-like alpine frog devastated by amphibian disease, the southern corroboree frog is one of Australia's most urgent amphibian recovery efforts.",
    faq: [
      {
        question: "What is special about the corroboree frog's toxin?",
        answer:
          "Unlike poison frogs that get toxins from their diet, the corroboree frog can produce its own toxic alkaloid — unusual among frogs — advertised by its bold yellow-and-black stripes.",
      },
      {
        question: "Why is the southern corroboree frog Critically Endangered?",
        answer:
          "Published assessments cite the amphibian fungal disease chytridiomycosis, habitat change and drought, and a tiny range. It depends heavily on captive breeding. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Frog profile", href: "/animals/frog" },
  },
  "lehmanns-poison-frog": {
    summary: [
      "Lehmann's poison frog is a small, boldly banded poison frog found only in a tiny area of Colombia. It is assessed as Critically Endangered.",
      "Its bright red, orange, or yellow bands warn of toxins in its skin.",
    ],
    whyItMatters:
      "A vividly coloured poison frog with one of the smallest ranges of any amphibian, Lehmann's poison frog is a flagship against habitat loss and the illegal pet trade.",
    faq: [
      {
        question: "Why is Lehmann's poison frog so brightly coloured?",
        answer:
          "Its bold bands of red, orange, or yellow on black are aposematic — a warning that its skin carries toxins, deterring predators.",
      },
      {
        question: "Why is Lehmann's poison frog Critically Endangered?",
        answer:
          "Published assessments cite habitat loss, collection for the illegal pet trade, and an extremely small range. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Poison dart frog profile", href: "/animals/poison-dart-frog" },
  },
  "reef-manta-ray": {
    summary: [
      "The reef manta ray is a large, gentle filter-feeding ray of tropical reefs, smaller than the giant manta. It is assessed as Vulnerable.",
      "It visits 'cleaning stations' where small fish remove parasites.",
    ],
    whyItMatters:
      "A charismatic reef giant and a major draw for marine tourism, the reef manta ray is a flagship for protecting reefs and curbing fisheries that target rays.",
    faq: [
      {
        question: "What are cleaning stations?",
        answer:
          "These are spots on the reef where small cleaner fish gather; manta rays visit them to have parasites and dead skin removed, and the same individuals return repeatedly.",
      },
      {
        question: "Why is the reef manta ray Vulnerable?",
        answer:
          "Published assessments cite fishing for their gill plates, bycatch, and a very low reproductive rate that makes recovery slow. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Ray profile", href: "/animals/ray" },
  },
  "american-eel": {
    summary: [
      "The American eel is a snake-like fish with a remarkable life cycle spanning the open Atlantic and North America's rivers. It is assessed as Endangered.",
      "Like the European eel, it spawns in the Sargasso Sea and grows in continental waters.",
    ],
    whyItMatters:
      "A once-abundant migratory fish now in decline, the American eel links the health of the open ocean, rivers, and fisheries across eastern North America.",
    faq: [
      {
        question: "Where is the American eel born?",
        answer:
          "It is thought to spawn in the Sargasso Sea; tiny larvae drift to North America, where eels grow for years in rivers and estuaries before returning to the ocean to breed.",
      },
      {
        question: "Why is the American eel Endangered?",
        answer:
          "Published assessments cite barriers such as dams, overfishing of young eels, habitat loss, and changing ocean conditions. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Eel profile", href: "/animals/eel" },
  },
  "knysna-seahorse": {
    summary: [
      "The Knysna seahorse is one of the most range-restricted seahorses in the world, found in just a few South African estuaries. It is assessed as Endangered.",
      "It clings to estuary plants with its prehensile tail.",
    ],
    whyItMatters:
      "A seahorse confined to a handful of estuaries, the Knysna seahorse is a flagship for protecting fragile estuarine habitats.",
    faq: [
      {
        question: "Why is the Knysna seahorse so vulnerable?",
        answer:
          "It lives in only a few South African estuaries, so pollution, development, or degradation of even one estuary can threaten a large share of the entire species.",
      },
      {
        question: "Why is the Knysna seahorse Endangered?",
        answer:
          "Published assessments cite estuary degradation and pollution, development and disturbance, and its very small range. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Seahorse profile", href: "/animals/seahorse" },
  },
  "bumphead-parrotfish": {
    summary: [
      "The bumphead parrotfish is the largest parrotfish, a massive reef fish with a bulbous forehead. It is assessed as Vulnerable.",
      "It bites off chunks of coral and helps produce reef sand.",
    ],
    whyItMatters:
      "A huge reef grazer that shapes coral reefs and produces sand, the bumphead parrotfish is a flagship for reef health and sustainable reef fishing.",
    faq: [
      {
        question: "Why is the bumphead parrotfish important to reefs?",
        answer:
          "It eats coral and algae in large amounts, controlling algae and grinding up coral into fine sand — a single big fish can produce a lot of the white sand found on reef beaches.",
      },
      {
        question: "Why is the bumphead parrotfish Vulnerable?",
        answer:
          "Published assessments cite overfishing — it is easy to catch in numbers, especially by night spearfishing while it sleeps — and reef degradation. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Parrotfish profile", href: "/animals/parrotfish" },
  },
  "black-abalone": {
    summary: [
      "The black abalone is a marine snail of the eastern Pacific rocky intertidal. It is assessed as Critically Endangered.",
      "A disease called withering syndrome has caused mass die-offs.",
    ],
    whyItMatters:
      "A once-common shoreline snail devastated by disease and overfishing, the black abalone is a flagship for marine invertebrate conservation along the Pacific coast.",
    faq: [
      {
        question: "What is withering syndrome?",
        answer:
          "It is a fatal bacterial disease that causes the abalone's foot to shrivel so it can no longer cling to rock; it has caused mass die-offs of black abalone along the coast.",
      },
      {
        question: "Why is the black abalone Critically Endangered?",
        answer:
          "Published assessments cite withering syndrome, past overfishing, and slow recovery. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Snail profile", href: "/animals/snail" },
  },
  "golden-snub-nosed-monkey": {
    summary: [
      "The golden snub-nosed monkey is a striking primate with golden-orange fur and an upturned nose, adapted to cold Chinese mountains. It is assessed as Endangered.",
      "It lives in large troops and eats lichen through harsh winters.",
    ],
    whyItMatters:
      "A cold-adapted, lichen-eating primate of China's mountain forests, the golden snub-nosed monkey is a flagship for protecting those high-altitude habitats.",
    faq: [
      {
        question: "How does the golden snub-nosed monkey survive cold winters?",
        answer:
          "It is one of the few primates living in seasonally snowy mountains, with thick fur and a diet that includes lichen, which is available when other food is scarce.",
      },
      {
        question: "Why is it Endangered?",
        answer:
          "Published assessments cite habitat loss and fragmentation, past hunting, and small isolated populations. See the IUCN Red List.",
      },
    ],
  },
  "indian-pangolin": {
    summary: [
      "The Indian pangolin is a large, scale-covered, ant-eating mammal of South Asia. It is assessed as Endangered.",
      "It rolls into an armoured ball when threatened, but this is no defence against hunters.",
    ],
    whyItMatters:
      "Heavily targeted by the illegal wildlife trade, the Indian pangolin is part of the global pangolin crisis and a flagship against trafficking.",
    faq: [
      {
        question: "Why are Indian pangolins poached?",
        answer:
          "They are hunted for their keratin scales (used in some traditional medicines) and meat, which has made pangolins among the most trafficked mammals worldwide.",
      },
      {
        question: "Why is the Indian pangolin Endangered?",
        answer:
          "Published assessments cite poaching and trafficking together with habitat loss across South Asia. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Pangolin profile", href: "/animals/pangolin" },
  },
  "northern-muriqui": {
    summary: [
      "The northern muriqui is one of the largest monkeys in the Americas and among the rarest primates, known for its unusually peaceful, egalitarian society. It is assessed as Critically Endangered.",
      "It is also called the woolly spider monkey.",
    ],
    whyItMatters:
      "A peaceful, seed-dispersing ape-like monkey found only in Brazil's Atlantic Forest, the northern muriqui is a flagship for one of the world's most threatened forests.",
    faq: [
      {
        question: "Why is the northern muriqui famous among primates?",
        answer:
          "It is known for its remarkably peaceful, cooperative social life, with little aggression between males — unusual among monkeys and of great interest to researchers.",
      },
      {
        question: "Why is the northern muriqui Critically Endangered?",
        answer:
          "Published assessments cite the loss and fragmentation of the Atlantic Forest, small isolated populations, and past hunting. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Muriqui profile", href: "/animals/muriqui" },
  },
  "hainan-gibbon": {
    summary: [
      "The Hainan gibbon is the rarest ape — and one of the rarest mammals — in the world, with only a few dozen individuals. It is assessed as Critically Endangered.",
      "It survives in a single patch of forest on Hainan Island.",
    ],
    whyItMatters:
      "The world's rarest ape, surviving in one forest, the Hainan gibbon is a stark example of how close a primate can come to extinction.",
    faq: [
      {
        question: "How rare is the Hainan gibbon?",
        answer:
          "It is the rarest ape on Earth, with only a few dozen individuals left, all in a single forest reserve on Hainan Island in China.",
      },
      {
        question: "Why is the Hainan gibbon Critically Endangered?",
        answer:
          "Published assessments cite its extremely small population confined to one location, a history of habitat loss, and vulnerability to any local disaster. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Gibbon profile", href: "/animals/gibbon" },
  },
  "black-footed-cat": {
    summary: [
      "The black-footed cat is one of the smallest wild cats in the world and a remarkably effective hunter. It is assessed as Vulnerable.",
      "Despite its tiny size, it hunts intensively through the night.",
    ],
    whyItMatters:
      "A tiny but ferociously effective hunter of African drylands, the black-footed cat is a flagship for conserving southern Africa's grassland and scrub.",
    faq: [
      {
        question: "How small is the black-footed cat?",
        answer:
          "It is among the smallest of all wild cats, weighing only one to two kilograms, yet it is an intense and successful nocturnal hunter of small prey.",
      },
      {
        question: "Why is the black-footed cat Vulnerable?",
        answer:
          "Published assessments cite habitat degradation, indirect poisoning and persecution, and loss of prey. See the IUCN Red List for the current assessment.",
      },
    ],
  },
  "flat-headed-cat": {
    summary: [
      "The flat-headed cat is a small, wetland-dwelling wild cat with a long, low head, adapted for catching fish and frogs. It is assessed as Endangered.",
      "It has partly webbed feet and is one of the most water-loving cats.",
    ],
    whyItMatters:
      "A specialised fishing cat tied to vanishing lowland wetlands, the flat-headed cat is a flagship for Southeast Asia's freshwater habitats.",
    faq: [
      {
        question: "Why is the flat-headed cat suited to water?",
        answer:
          "It has a long, flat head, partly webbed feet, and teeth adapted for slippery prey, and it hunts fish, frogs, and crustaceans in and beside wetlands.",
      },
      {
        question: "Why is the flat-headed cat Endangered?",
        answer:
          "Published assessments cite the destruction of lowland wetlands, water pollution, and reduced fish stocks. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Flat-headed cat profile", href: "/animals/flat-headed-cat" },
  },
  "darwins-fox": {
    summary: [
      "Darwin's fox is a small, dark fox found only in Chile, first noted by Charles Darwin. It is assessed as Endangered.",
      "It is a forest specialist with a very limited range.",
    ],
    whyItMatters:
      "A rare forest fox named for Darwin and found only in Chile, Darwin's fox is a flagship for the country's threatened temperate forests.",
    faq: [
      {
        question: "Why is it called Darwin's fox?",
        answer:
          "Charles Darwin collected a specimen of this small dark fox on Chiloe Island during the voyage of the Beagle, and it was later recognised as a distinct species named in his honour.",
      },
      {
        question: "Why is Darwin's fox Endangered?",
        answer:
          "Published assessments cite its small, fragmented population, disease and attacks from domestic dogs, and habitat loss. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Fox profile", href: "/animals/fox" },
  },
  "mountain-tapir": {
    summary: [
      "The mountain tapir is the smallest tapir and the only one adapted to high mountains, with a thick woolly coat. It is assessed as Endangered.",
      "It lives in cold Andean cloud forest and paramo.",
    ],
    whyItMatters:
      "A high-altitude seed disperser of the Andes, the mountain tapir is a flagship for conserving cloud forest and paramo watersheds.",
    faq: [
      {
        question: "How is the mountain tapir adapted to the cold?",
        answer:
          "Unlike its lowland relatives, it has a thick, woolly coat that lets it live in cold high-Andean cloud forest and paramo grassland.",
      },
      {
        question: "Why is the mountain tapir Endangered?",
        answer:
          "Published assessments cite habitat loss to agriculture, hunting, and a fragmented range. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Tapir profile", href: "/animals/tapir" },
  },
  "greater-bilby": {
    summary: [
      "The greater bilby is a long-eared, burrowing marsupial of the Australian deserts. It is assessed as Vulnerable.",
      "It digs extensive burrows and has become an Australian symbol, including an 'Easter Bilby'.",
    ],
    whyItMatters:
      "A burrowing marsupial that aerates soil and shelters other species, the bilby is a flagship for Australia's arid-zone conservation and predator control.",
    faq: [
      {
        question: "What is the 'Easter Bilby'?",
        answer:
          "To raise awareness of this native species and discourage introduced rabbits, Australia promotes the bilby as an Easter symbol in place of the Easter bunny.",
      },
      {
        question: "Why is the greater bilby Vulnerable?",
        answer:
          "Published assessments cite introduced foxes and cats, competition from rabbits and livestock, and habitat change, which have shrunk its range. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Bilby profile", href: "/animals/bilby" },
  },
  "red-fronted-macaw": {
    summary: [
      "The red-fronted macaw is a medium-sized green macaw with red on the forehead and shoulders, found only in Bolivia. It is assessed as Critically Endangered.",
      "It lives in arid valleys and nests on cliffs.",
    ],
    whyItMatters:
      "A cliff-nesting macaw with a tiny Bolivian range, the red-fronted macaw is a flagship for protecting inter-Andean dry valley habitats.",
    faq: [
      {
        question: "Where does the red-fronted macaw nest?",
        answer:
          "Unusually for a macaw, it nests in holes and ledges on cliffs in Bolivia's dry inter-Andean valleys, rather than in tree cavities.",
      },
      {
        question: "Why is the red-fronted macaw Critically Endangered?",
        answer:
          "Published assessments cite trapping for the pet trade, persecution as a crop pest, and its very small range. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Parrot profile", href: "/animals/parrot" },
  },
  "golden-parakeet": {
    summary: [
      "The golden parakeet (golden conure) is a brilliant yellow parrot of the Brazilian Amazon. It is assessed as Vulnerable.",
      "It is unusually social, with helpers assisting at the nest.",
    ],
    whyItMatters:
      "A vivid yellow Amazon parrot prized in the pet trade, the golden parakeet is a flagship for protecting lowland Brazilian rainforest.",
    faq: [
      {
        question: "What is unusual about golden parakeet breeding?",
        answer:
          "It often breeds cooperatively, with several birds helping to defend the nest and care for the young, which is unusual among parrots.",
      },
      {
        question: "Why is the golden parakeet Vulnerable?",
        answer:
          "Published assessments cite trapping for the pet trade and deforestation across its Amazon range. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Parrot profile", href: "/animals/parrot" },
  },
  "indian-vulture": {
    summary: [
      "The Indian vulture suffered one of the fastest declines of any bird after poisoning by a veterinary drug. It is assessed as Critically Endangered.",
      "It is a large scavenging vulture of South Asia.",
    ],
    whyItMatters:
      "Part of the catastrophic South Asian vulture collapse, the Indian vulture shows how a single veterinary drug can devastate wildlife and the sanitation vultures provide.",
    faq: [
      {
        question: "What caused the Indian vulture's collapse?",
        answer:
          "Published accounts point above all to the veterinary anti-inflammatory drug diclofenac, which poisoned vultures feeding on the carcasses of treated livestock, causing a catastrophic decline.",
      },
      {
        question: "Why are vultures so important?",
        answer:
          "As scavengers they rapidly remove carcasses and limit disease; their loss in South Asia had serious knock-on effects for sanitation and other scavengers. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Vulture profile", href: "/animals/vulture" },
  },
  "cape-vulture": {
    summary: [
      "The Cape vulture is a large scavenging vulture of southern Africa that breeds on cliffs in colonies. It is assessed as Vulnerable.",
      "It feeds on the carcasses of large animals.",
    ],
    whyItMatters:
      "A cliff-nesting scavenger of southern Africa, the Cape vulture is part of the continent's vulture crisis and a flagship for safe power infrastructure and poison-free landscapes.",
    faq: [
      {
        question: "Where do Cape vultures nest?",
        answer:
          "They breed colonially on cliff ledges in southern Africa, returning to traditional sites year after year.",
      },
      {
        question: "Why is the Cape vulture Vulnerable?",
        answer:
          "Published assessments cite poisoning, collisions and electrocution on power lines, and reduced food and disturbance. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Vulture profile", href: "/animals/vulture" },
  },
  "saker-falcon": {
    summary: [
      "The saker falcon is a large, powerful falcon of open steppe and desert. It is assessed as Endangered.",
      "It is highly prized in falconry, which drives heavy capture from the wild.",
    ],
    whyItMatters:
      "A steppe falcon caught up in the falconry trade, the saker falcon is a flagship for Central Asian grasslands and for making power infrastructure safe for raptors.",
    faq: [
      {
        question: "Why is the saker falcon captured?",
        answer:
          "It is highly valued in falconry, especially in parts of the Middle East, and wild birds are trapped to supply that demand — a major pressure on the species.",
      },
      {
        question: "Why is the saker falcon Endangered?",
        answer:
          "Published assessments cite capture for falconry, electrocution on power lines, and habitat change and reduced prey. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Falcon profile", href: "/animals/falcon" },
  },
  "spanish-imperial-eagle": {
    summary: [
      "The Spanish imperial eagle is a large eagle found only on the Iberian Peninsula. It is assessed as Vulnerable, recovering from a very low point.",
      "It depends heavily on rabbits as prey.",
    ],
    whyItMatters:
      "An Iberian endemic eagle recovering through dedicated protection, the Spanish imperial eagle is a flagship for Mediterranean ecosystems and safe power lines.",
    faq: [
      {
        question: "What does the Spanish imperial eagle depend on for food?",
        answer:
          "It relies heavily on the European rabbit, so crashes in rabbit numbers (from disease) have historically hit the eagle hard.",
      },
      {
        question: "Why is the Spanish imperial eagle still Vulnerable?",
        answer:
          "Published assessments cite electrocution on power lines, poisoning, and past prey loss, even as targeted protection has helped numbers recover. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Eagle profile", href: "/animals/eagle" },
  },
  "giant-ibis": {
    summary: [
      "The giant ibis is the largest ibis in the world and the national bird of Cambodia. It is assessed as Critically Endangered.",
      "It is a shy bird of remote lowland forests and seasonal wetlands.",
    ],
    whyItMatters:
      "A huge, shy ibis reduced to a tiny population, the giant ibis is a flagship for protecting the remaining lowland forests and wetlands of northern Cambodia.",
    faq: [
      {
        question: "How big is the giant ibis?",
        answer:
          "It is the largest of the ibises, a tall, heavy-bodied bird far bigger than the familiar ibises of city parks and wetlands elsewhere.",
      },
      {
        question: "Why is the giant ibis Critically Endangered?",
        answer:
          "Published assessments cite habitat loss and drainage, hunting and disturbance, and a very small population. See the IUCN Red List for the current assessment.",
      },
    ],
  },
  "northern-rockhopper-penguin": {
    summary: [
      "The northern rockhopper penguin is a small crested penguin with spiky yellow head plumes, found on a few remote islands. It is assessed as Endangered.",
      "Much of the world population breeds on the Tristan da Cunha group.",
    ],
    whyItMatters:
      "A crested penguin concentrated on a handful of remote islands, the northern rockhopper is a barometer for the South Atlantic and Indian Ocean ecosystems.",
    faq: [
      {
        question: "Why is the northern rockhopper penguin so dependent on a few islands?",
        answer:
          "A large share of the entire world population breeds on the remote Tristan da Cunha island group, so problems there affect much of the species at once.",
      },
      {
        question: "Why is the northern rockhopper penguin Endangered?",
        answer:
          "Published assessments cite changes in food supply, ocean change, and past exploitation and disturbance. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Penguin profile", href: "/animals/penguin" },
  },
  "bengal-florican": {
    summary: [
      "The Bengal florican is a rare grassland bustard famous for the male's spectacular leaping courtship display. It is assessed as Critically Endangered.",
      "It depends on increasingly scarce natural grasslands.",
    ],
    whyItMatters:
      "A grassland bustard on the edge of extinction, the Bengal florican is a flagship for protecting the threatened grasslands of South and Southeast Asia.",
    faq: [
      {
        question: "What is the Bengal florican's courtship display?",
        answer:
          "Males leap into the air above the grass in a bouncing, fluttering display to attract females, one of the most striking courtship performances among grassland birds.",
      },
      {
        question: "Why is the Bengal florican Critically Endangered?",
        answer:
          "Published assessments cite the loss and conversion of grassland, disturbance and collisions, and a very small population. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Bustard profile", href: "/animals/bustard" },
  },
  "cuban-crocodile": {
    summary: [
      "The Cuban crocodile is a small, agile, brightly patterned crocodile found only in Cuba. It is assessed as Critically Endangered.",
      "It is one of the most terrestrial and behaviourally distinctive crocodiles.",
    ],
    whyItMatters:
      "A small, charismatic crocodile confined to a couple of Cuban swamps, the Cuban crocodile is a flagship for Caribbean wetland conservation.",
    faq: [
      {
        question: "What makes the Cuban crocodile unusual?",
        answer:
          "It is relatively small but agile and alert, can move well on land, and has bold colouring and behaviour that set it apart from larger, more sluggish crocodiles.",
      },
      {
        question: "Why is the Cuban crocodile Critically Endangered?",
        answer:
          "Published assessments cite its very small range, hybridisation with American crocodiles, and past hunting. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Crocodile profile", href: "/animals/crocodile" },
  },
  "geometric-tortoise": {
    summary: [
      "The geometric tortoise is a small, intricately patterned tortoise found only in a small part of South Africa. It is assessed as Critically Endangered.",
      "Its shell bears striking yellow star-like markings.",
    ],
    whyItMatters:
      "A jewel-patterned tortoise confined to threatened fynbos, the geometric tortoise is a flagship for one of the world's most biodiverse but shrinking habitats.",
    faq: [
      {
        question: "Why is it called the geometric tortoise?",
        answer:
          "Its shell carries bold yellow lines radiating in star-like, geometric patterns on a dark background, making it one of the most distinctively marked tortoises.",
      },
      {
        question: "Why is the geometric tortoise Critically Endangered?",
        answer:
          "Published assessments cite the loss of its lowland fynbos habitat, fires, and a tiny fragmented range. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Tortoise profile", href: "/animals/tortoise" },
  },
  "chinese-crocodile-lizard": {
    summary: [
      "The Chinese crocodile lizard is a semi-aquatic lizard with crocodile-like ridges along its tail. It is assessed as Endangered.",
      "It rests on branches over water and drops in to escape danger.",
    ],
    whyItMatters:
      "A 'living fossil' semi-aquatic lizard, the Chinese crocodile lizard is a flagship for protecting clean forest streams in southern China and Vietnam.",
    faq: [
      {
        question: "Why is it called a crocodile lizard?",
        answer:
          "Two raised ridges of enlarged, bony scales run along its tail, resembling the armoured tail of a crocodile, though it is a true lizard.",
      },
      {
        question: "Why is the Chinese crocodile lizard Endangered?",
        answer:
          "Published assessments cite collection for the pet trade, habitat loss, and pollution of its stream habitats. See the IUCN Red List.",
      },
    ],
  },
  "table-mountain-ghost-frog": {
    summary: [
      "The Table Mountain ghost frog is found only on and around Table Mountain in South Africa, one of the smallest ranges of any frog. It is assessed as Critically Endangered.",
      "Its tadpoles cling to rocks in fast streams with sucker-like mouths.",
    ],
    whyItMatters:
      "A frog confined to the streams of a single iconic mountain, the Table Mountain ghost frog is a flagship for protecting fragile mountain watercourses.",
    faq: [
      {
        question: "How do ghost frog tadpoles survive fast streams?",
        answer:
          "Their tadpoles have large sucker-like mouths that let them cling to rocks in fast-flowing water, where they graze without being swept away.",
      },
      {
        question: "Why is the Table Mountain ghost frog Critically Endangered?",
        answer:
          "Published assessments cite altered stream flow and dams, fires and erosion, and an extremely small range on Table Mountain. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Frog profile", href: "/animals/frog" },
  },
  "california-tiger-salamander": {
    summary: [
      "The California tiger salamander is a stocky black-and-yellow salamander that breeds in seasonal pools. It is assessed (in parts of its range) as Vulnerable to Endangered.",
      "It spends much of the year underground in burrows.",
    ],
    whyItMatters:
      "A burrow-dwelling salamander dependent on vanishing seasonal wetlands, the California tiger salamander is a flagship for protecting California's grasslands and vernal pools.",
    faq: [
      {
        question: "Where does the California tiger salamander spend most of its life?",
        answer:
          "Underground, often in burrows dug by ground squirrels and other animals, emerging mainly in the rainy season to breed in temporary pools.",
      },
      {
        question: "Why is the California tiger salamander threatened?",
        answer:
          "Published assessments cite the loss of breeding pools and habitat, hybridisation with introduced salamanders, and roads and development. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Salamander profile", href: "/animals/salamander" },
  },
  "green-sawfish": {
    summary: [
      "The green sawfish is one of the largest sawfishes, a ray with a long tooth-studded snout. It is assessed as Critically Endangered.",
      "Its saw snags easily in nets, making it highly vulnerable to fishing.",
    ],
    whyItMatters:
      "Vanished from much of its former range, the green sawfish is among the most threatened of all sharks and rays and a priority for coastal conservation.",
    faq: [
      {
        question: "Why are sawfishes so vulnerable to fishing?",
        answer:
          "Their long, toothed snouts tangle very easily in fishing nets and lines, so even fishing aimed at other species frequently kills sawfishes.",
      },
      {
        question: "Why is the green sawfish Critically Endangered?",
        answer:
          "Published assessments cite entanglement in fishing gear, habitat loss, and past targeted fishing, which erased it from much of its range. See the IUCN Red List.",
      },
    ],
  },
  "sand-tiger-shark": {
    summary: [
      "The sand tiger shark is a large coastal shark with a fearsome, snaggle-toothed look but a generally placid nature. It is assessed as Critically Endangered.",
      "It has one of the lowest reproductive rates of any shark.",
    ],
    whyItMatters:
      "A slow-breeding coastal shark popular in aquariums, the sand tiger shark is a flagship for shark conservation and the dangers of overfishing low-reproduction species.",
    faq: [
      {
        question: "Is the sand tiger shark dangerous despite its teeth?",
        answer:
          "Its protruding teeth look ferocious, but it is generally a slow, placid shark not considered a significant threat to people; its teeth are suited to gripping fish.",
      },
      {
        question: "Why is the sand tiger shark Critically Endangered?",
        answer:
          "Published assessments cite overfishing and bycatch, an extremely low reproductive rate (often only a couple of pups per litter), and past culling. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Shark profile", href: "/animals/shark" },
  },
  "atlantic-goliath-grouper": {
    summary: [
      "The Atlantic goliath grouper is a massive reef fish that can exceed two metres and several hundred kilograms. It is assessed as Vulnerable, recovering under fishing bans.",
      "Juveniles depend on mangrove nurseries.",
    ],
    whyItMatters:
      "A giant reef predator hammered by spearfishing and now slowly recovering under protection, the goliath grouper is a flagship for reef and mangrove conservation.",
    faq: [
      {
        question: "How big is the Atlantic goliath grouper?",
        answer:
          "It is one of the largest groupers, able to exceed two metres in length and several hundred kilograms — large enough to swallow sizable prey whole.",
      },
      {
        question: "Why is it Vulnerable rather than worse now?",
        answer:
          "Published assessments note that fishing bans have helped numbers recover from severe overfishing, though it remains threatened by mangrove loss and its slow maturation. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Grouper profile", href: "/animals/grouper" },
  },
  "japanese-eel": {
    summary: [
      "The Japanese eel is a migratory fish central to East Asian cuisine, with a life cycle spanning the open Pacific and Asia's rivers. It is assessed as Endangered.",
      "Wild populations have declined sharply.",
    ],
    whyItMatters:
      "A culturally and commercially important eel now in decline, the Japanese eel links the health of the open ocean, rivers, and fisheries across East Asia.",
    faq: [
      {
        question: "Where does the Japanese eel breed?",
        answer:
          "It spawns far out in the western Pacific near the Mariana Islands; the tiny larvae drift to East Asia, grow in rivers and coasts, then return to the ocean to breed.",
      },
      {
        question: "Why is the Japanese eel Endangered?",
        answer:
          "Published assessments cite overfishing of young eels, barriers such as dams, and habitat loss and ocean change. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Eel profile", href: "/animals/eel" },
  },
  "franklins-bumble-bee": {
    summary: [
      "Franklin's bumble bee had one of the smallest ranges of any bumblebee and has not been reliably seen in years. It is assessed as Critically Endangered (and feared possibly extinct).",
      "It was a distinctive black-and-yellow bumblebee of the US West Coast.",
    ],
    whyItMatters:
      "Possibly already lost, Franklin's bumble bee is a stark warning about pollinator declines and the speed with which an insect can vanish.",
    faq: [
      {
        question: "Has Franklin's bumble bee gone extinct?",
        answer:
          "It has not been reliably recorded for many years and is feared possibly extinct, though it is still formally listed; surveys continue in the hope of rediscovery.",
      },
      {
        question: "Why did Franklin's bumble bee decline?",
        answer:
          "Published assessments point to disease spread from managed bees, pesticides, and habitat loss, compounded by its naturally tiny range. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Bee profile", href: "/animals/bee" },
  },
  "black-and-white-ruffed-lemur": {
    summary: [
      "The black-and-white ruffed lemur is a large, boldly patterned lemur with a loud, raucous call. It is assessed as Critically Endangered.",
      "It is one of the most important pollinators among primates, feeding on nectar from large flowers.",
    ],
    whyItMatters:
      "As a fruit- and nectar-feeder that pollinates and disperses seeds, the black-and-white ruffed lemur is a flagship for Madagascar's eastern rainforests.",
    faq: [
      {
        question: "How does a lemur act as a pollinator?",
        answer:
          "The black-and-white ruffed lemur feeds on nectar from large flowers (such as the traveller's palm), carrying pollen on its face and fur between blooms — an unusual pollinating role for a primate.",
      },
      {
        question: "Why is it Critically Endangered?",
        answer:
          "Published assessments cite deforestation, slash-and-burn agriculture, hunting, and fragmentation across eastern Madagascar. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Lemur profile", href: "/animals/lemur" },
  },
  "common-hippopotamus": {
    summary: [
      "The common hippopotamus is a massive, mostly aquatic mammal that spends its days in water and grazes on land at night. It is assessed as Vulnerable.",
      "Despite a placid look, it is among Africa's most dangerous large animals.",
    ],
    whyItMatters:
      "As a huge grazer that moves nutrients between land and water, the hippo shapes African river ecosystems, and its decline reflects pressure on those waterways.",
    faq: [
      {
        question: "Why do hippos spend so much time in water?",
        answer:
          "Their skin loses moisture quickly and is sensitive to sun, so they rest in water by day to stay cool and protected, emerging at night to graze on land.",
      },
      {
        question: "Why is the common hippopotamus Vulnerable?",
        answer:
          "Published assessments cite poaching for meat and the ivory of their teeth, habitat loss and water diversion, and conflict with people. See the IUCN Red List. Hippos are dangerous and should never be approached.",
      },
    ],
    relatedAnimal: { label: "Hippopotamus profile", href: "/animals/hippopotamus" },
  },
  "fishing-cat": {
    summary: [
      "The fishing cat is a stocky, water-loving wild cat that hunts fish and other aquatic prey. It is assessed as Vulnerable.",
      "It dives and swims readily and has partly webbed feet.",
    ],
    whyItMatters:
      "A wetland specialist that hunts in and around water, the fishing cat is a flagship for protecting the marshes and mangroves of South and Southeast Asia.",
    faq: [
      {
        question: "Do fishing cats really catch fish?",
        answer:
          "Yes. The fishing cat hunts fish and other aquatic prey, will wade and swim, and may scoop fish from the water or dive after them — unusual behaviour for a cat.",
      },
      {
        question: "Why is the fishing cat Vulnerable?",
        answer:
          "Published assessments cite the destruction and drainage of wetlands, persecution and hunting, and pollution and reduced fish stocks. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Fishing cat profile", href: "/animals/fishing-cat" },
  },
  "lar-gibbon": {
    summary: [
      "The lar (white-handed) gibbon is a small, agile ape that swings rapidly through the forest canopy. It is assessed as Endangered.",
      "It is known for loud morning songs and lifelong pair bonds.",
    ],
    whyItMatters:
      "A fast-moving canopy ape that disperses seeds, the lar gibbon is a flagship for Southeast Asian rainforest conservation.",
    faq: [
      {
        question: "How does the lar gibbon move through the forest?",
        answer:
          "It travels by brachiation — swinging hand-over-hand beneath branches — with great speed and agility, rarely coming to the ground.",
      },
      {
        question: "Why is the lar gibbon Endangered?",
        answer:
          "Published assessments cite deforestation, capture for the pet trade, and hunting. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Gibbon profile", href: "/animals/gibbon" },
  },
  "european-mink": {
    summary: [
      "The European mink is a small semi-aquatic mustelid of riverbanks and wetlands. It is assessed as Critically Endangered.",
      "It has declined dramatically and now survives only in scattered pockets.",
    ],
    whyItMatters:
      "A riverside hunter squeezed by an introduced competitor, the European mink is a flagship for Europe's freshwater wildlife.",
    faq: [
      {
        question: "What is pushing the European mink toward extinction?",
        answer:
          "Published assessments highlight competition (and other pressures) from the introduced American mink, along with habitat loss, pollution, and a small, fragmented population.",
      },
      {
        question: "How is it different from the American mink?",
        answer:
          "It is a separate species, generally smaller, and native to Europe; the larger American mink, introduced via fur farming, has spread and contributed to the European mink's decline. See the IUCN Red List.",
      },
    ],
  },
  "geoffroys-spider-monkey": {
    summary: [
      "Geoffroy's spider monkey is a long-limbed, prehensile-tailed monkey that swings through the rainforest canopy. It is assessed as Endangered.",
      "It uses its tail like a fifth limb and disperses many forest seeds.",
    ],
    whyItMatters:
      "As a large, agile seed disperser, Geoffroy's spider monkey helps regenerate Central American forests and is a flagship for their protection.",
    faq: [
      {
        question: "Why is it called a spider monkey?",
        answer:
          "Its very long, slender limbs and prehensile tail give it a spider-like look as it spreads across branches; the tail can grip like an extra hand.",
      },
      {
        question: "Why is Geoffroy's spider monkey Endangered?",
        answer:
          "Published assessments cite deforestation, hunting, and habitat fragmentation. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Spider monkey profile", href: "/animals/spider-monkey" },
  },
  "grey-headed-flying-fox": {
    summary: [
      "The grey-headed flying fox is a large fruit bat of eastern Australia, with a wingspan of around a metre. It is assessed as Vulnerable.",
      "It pollinates and disperses seeds over long distances as it feeds on nectar and fruit at night.",
    ],
    whyItMatters:
      "A large fruit bat that pollinates and spreads the seeds of native trees, the grey-headed flying fox is a keystone for Australian forests despite often being seen as a nuisance.",
    faq: [
      {
        question: "Are flying foxes dangerous to have around?",
        answer:
          "They are important pollinators and seed dispersers, not predators; like all wild animals they should not be handled, but their ecological role is highly beneficial.",
      },
      {
        question: "Why is the grey-headed flying fox Vulnerable?",
        answer:
          "Published assessments cite habitat loss, mass die-offs during extreme heat, and conflict and persecution where colonies meet people. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Bat profile", href: "/animals/bat" },
  },
  "pere-davids-deer": {
    summary: [
      "Pere David's deer is a large wetland deer that was saved from total extinction only by captive herds, having been lost in the wild. It is assessed as Extinct in the Wild.",
      "Chinese herds have been re-established from animals kept in Europe.",
    ],
    whyItMatters:
      "A deer that survived solely in captivity and is now being returned to China, Pere David's deer is a remarkable example of a species rescued from oblivion.",
    faq: [
      {
        question: "How did Pere David's deer avoid extinction?",
        answer:
          "After disappearing in the wild, the species survived only because animals had been kept in parks abroad (notably in England); descendants were later sent back to China to re-establish herds.",
      },
      {
        question: "What does 'Extinct in the Wild' mean for this deer?",
        answer:
          "It means it survives only in captivity or managed/reintroduced populations rather than as a self-sustaining wild population. Reintroduction efforts continue. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Deer profile", href: "/animals/deer" },
  },
  "blue-crane": {
    summary: [
      "The blue crane is a pale blue-grey crane with elegant trailing wing feathers, the national bird of South Africa. It is assessed as Vulnerable.",
      "It is strongly tied to grasslands and farmland.",
    ],
    whyItMatters:
      "A national symbol and grassland specialist, the blue crane is a flagship for conserving South Africa's grasslands and reducing power-line and poisoning hazards.",
    faq: [
      {
        question: "What does the blue crane look like?",
        answer:
          "It is a graceful pale blue-grey crane with long, trailing inner wing feathers that look like a sweeping tail, and it stands about a metre tall.",
      },
      {
        question: "Why is the blue crane Vulnerable?",
        answer:
          "Published assessments cite poisoning, collisions with power lines, and habitat change across its grassland and farmland range. See the IUCN Red List.",
      },
    ],
  },
  "madagascar-fish-eagle": {
    summary: [
      "The Madagascar fish eagle is one of the rarest birds of prey in the world, found only in Madagascar. It is assessed as Critically Endangered.",
      "It hunts fish along rivers, lakes, and coasts.",
    ],
    whyItMatters:
      "A top fish-eating raptor found nowhere else, the Madagascar fish eagle is a flagship for the island's threatened wetlands and coasts.",
    faq: [
      {
        question: "How rare is the Madagascar fish eagle?",
        answer:
          "It is among the rarest raptors in the world, with only a small number of breeding pairs left, all in western Madagascar.",
      },
      {
        question: "Why is it Critically Endangered?",
        answer:
          "Published assessments cite habitat loss and disturbance, competition with people for fish and nest sites, and a very small population. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Eagle profile", href: "/animals/eagle" },
  },
  "christmas-frigatebird": {
    summary: [
      "The Christmas frigatebird is a large seabird that breeds only on Christmas Island. It is assessed as Critically Endangered.",
      "Males inflate a bright red throat pouch in courtship, like other frigatebirds.",
    ],
    whyItMatters:
      "A seabird that nests on a single small island, the Christmas frigatebird is a flagship for island and ocean conservation in the Indian Ocean.",
    faq: [
      {
        question: "Why does the Christmas frigatebird breed in only one place?",
        answer:
          "It nests only on Christmas Island, so the entire breeding population is concentrated in one small area, making it highly vulnerable to local threats.",
      },
      {
        question: "Why is it Critically Endangered?",
        answer:
          "Published assessments cite its tiny breeding range, past habitat disturbance, and pressures such as pollution and introduced species. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Frigatebird profile", href: "/animals/frigatebird" },
  },
  "northern-royal-albatross": {
    summary: [
      "The northern royal albatross is one of the largest albatrosses, with a wingspan around three metres. It is assessed as Endangered.",
      "Most breed on remote islands, with a famous accessible colony on mainland New Zealand.",
    ],
    whyItMatters:
      "A giant ocean wanderer threatened mainly by fishing, the northern royal albatross is a flagship for seabird-safe fisheries in the Southern Ocean.",
    faq: [
      {
        question: "Where can people see northern royal albatrosses?",
        answer:
          "Most nest on remote islands, but a well-known, accessible breeding colony exists on the mainland at Taiaroa Head near Dunedin, New Zealand.",
      },
      {
        question: "Why is the northern royal albatross Endangered?",
        answer:
          "Published assessments cite longline fishing bycatch, storms and disturbance at colonies, and plastic and pollution. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Albatross profile", href: "/animals/albatross" },
  },
  "white-naped-crane": {
    summary: [
      "The white-naped crane is a large grey crane with a white nape and red face, breeding in north-east Asia. It is assessed as Vulnerable.",
      "It depends on a network of wetlands across several countries.",
    ],
    whyItMatters:
      "A migratory crane reliant on shared wetlands across borders, the white-naped crane is a flagship for international wetland cooperation in East Asia.",
    faq: [
      {
        question: "Why are migratory cranes so dependent on cooperation between countries?",
        answer:
          "They breed, stop over, and winter in different countries, so protecting them requires safeguarding a chain of wetlands across international borders.",
      },
      {
        question: "Why is the white-naped crane Vulnerable?",
        answer:
          "Published assessments cite the loss and drainage of wetlands, disturbance, and its reliance on a few key sites. See the IUCN Red List.",
      },
    ],
  },
  "red-headed-vulture": {
    summary: [
      "The red-headed vulture is a striking scavenger with a bare red head, once widespread in Asia. It is assessed as Critically Endangered after steep declines.",
      "Like other Asian vultures it was hit hard by drug poisoning.",
    ],
    whyItMatters:
      "Part of the South Asian vulture collapse, the red-headed vulture underscores how scavengers — and the clean-up they provide — can vanish quickly.",
    faq: [
      {
        question: "Why have Asian vultures declined so sharply?",
        answer:
          "Published accounts point to poisoning, including the veterinary drug diclofenac in livestock carcasses, which devastated several Asian vulture species within a few years.",
      },
      {
        question: "Why is the red-headed vulture Critically Endangered?",
        answer:
          "Published assessments cite poisoning, reduced food, and habitat change. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Vulture profile", href: "/animals/vulture" },
  },
  "northern-bald-ibis": {
    summary: [
      "The northern bald ibis is a dark, glossy ibis with a bald red head and a shaggy ruff. It is assessed as Endangered, recovering from a very low point.",
      "Once widespread, it was reduced to small relict populations.",
    ],
    whyItMatters:
      "A once-revered bird (known since ancient Egypt) brought back through conservation and reintroduction, the northern bald ibis is a flagship for recovery efforts across its range.",
    faq: [
      {
        question: "Is the northern bald ibis an ancient species in human culture?",
        answer:
          "Yes. It appears in ancient Egyptian art and was historically widespread; its later collapse and ongoing recovery make it a notable conservation story.",
      },
      {
        question: "Why is the northern bald ibis Endangered?",
        answer:
          "Published assessments cite past hunting and habitat loss, pesticides and disturbance, and a small population, though protection and reintroduction have helped numbers. See the IUCN Red List.",
      },
    ],
  },
  "egyptian-tortoise": {
    summary: [
      "The Egyptian tortoise is one of the smallest tortoises in the world, a pale desert species. It is assessed as Critically Endangered.",
      "It has been almost wiped out across much of its former range.",
    ],
    whyItMatters:
      "A tiny desert tortoise nearly lost to the pet trade and habitat loss, the Egyptian tortoise is a flagship for North African and Middle Eastern dryland conservation.",
    faq: [
      {
        question: "How small is the Egyptian tortoise?",
        answer:
          "It is among the smallest tortoises in the world, with adults only around 10-13 cm long, and a pale shell that helps it cope with desert heat.",
      },
      {
        question: "Why is the Egyptian tortoise Critically Endangered?",
        answer:
          "Published assessments cite collection for the pet trade, habitat loss to agriculture, and a tiny remaining range. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Tortoise profile", href: "/animals/tortoise" },
  },
  "fiji-crested-iguana": {
    summary: [
      "The Fiji crested iguana is a vivid green iguana with white bands, found only on a few Fijian islands. It is assessed as Critically Endangered.",
      "It can change shade and has a low crest along its back.",
    ],
    whyItMatters:
      "A brilliant island iguana found only in Fiji, the Fiji crested iguana is a flagship for South Pacific island conservation and predator control.",
    faq: [
      {
        question: "How is the Fiji crested iguana recognised?",
        answer:
          "It is bright green with narrow white or pale bands and a row of small spiny crests along its back; it can darken its colour when stressed.",
      },
      {
        question: "Why is the Fiji crested iguana Critically Endangered?",
        answer:
          "Published assessments cite habitat loss and fires, introduced predators and browsing goats, and its tiny island range. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Iguana profile", href: "/animals/iguana" },
  },
  "slender-snouted-crocodile": {
    summary: [
      "The slender-snouted crocodile is a fish-eating African crocodile with a very narrow snout. It is assessed as Critically Endangered.",
      "Its slim jaws are suited to catching fish in forest rivers.",
    ],
    whyItMatters:
      "A specialised fish-eating crocodile of African forest rivers, the slender-snouted crocodile is a flagship for protecting those waterways.",
    faq: [
      {
        question: "Why does the slender-snouted crocodile have such a narrow snout?",
        answer:
          "Its slim, elongated jaws are adapted to swiftly catching fish in water, much like the gharial's, reducing resistance as it snaps sideways.",
      },
      {
        question: "Why is the slender-snouted crocodile Critically Endangered?",
        answer:
          "Published assessments cite hunting and bycatch, habitat loss, and a declining population across West and Central Africa. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Crocodile profile", href: "/animals/crocodile" },
  },
  "darwins-frog": {
    summary: [
      "Darwin's frog is a small, leaf-mimicking frog famous for the male brooding tadpoles inside his vocal sac. It is assessed as Endangered.",
      "It was first noted by Charles Darwin in Chile.",
    ],
    whyItMatters:
      "A frog with one of the most extraordinary forms of parental care, Darwin's frog is a flagship for the temperate forests of southern South America and the amphibian crisis.",
    faq: [
      {
        question: "How does Darwin's frog care for its young?",
        answer:
          "The male takes the developing eggs into his vocal sac, where the tadpoles grow and are eventually released as tiny froglets from his mouth — a remarkable form of parental care.",
      },
      {
        question: "Why is Darwin's frog Endangered?",
        answer:
          "Published assessments cite the amphibian fungal disease chytridiomycosis, habitat loss, and fragmentation. A close relative may already be extinct. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Frog profile", href: "/animals/frog" },
  },
  "central-american-river-turtle": {
    summary: [
      "The Central American river turtle is a large, almost fully aquatic turtle that rarely leaves the water. It is assessed as Critically Endangered.",
      "It is heavily hunted for its meat.",
    ],
    whyItMatters:
      "A river turtle hunted to the brink for food, the Central American river turtle is a flagship for freshwater turtle conservation in the region.",
    faq: [
      {
        question: "Why is the Central American river turtle so easy to overhunt?",
        answer:
          "It is highly aquatic and lives in predictable river and lake habitats, where it can be netted in numbers; demand for its meat has driven heavy harvest.",
      },
      {
        question: "Why is it Critically Endangered?",
        answer:
          "Published assessments cite hunting for meat and eggs, habitat loss, and its vulnerability to netting. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Turtle profile", href: "/animals/turtle" },
  },
  "chinese-sturgeon": {
    summary: [
      "The Chinese sturgeon is a large, ancient migratory fish of the Yangtze. It is assessed as Critically Endangered.",
      "Dams have blocked the long upstream journeys it needs to spawn.",
    ],
    whyItMatters:
      "An ancient river giant whose migrations are cut off by dams, the Chinese sturgeon is a flagship for the embattled wildlife of the Yangtze.",
    faq: [
      {
        question: "Why have dams hit the Chinese sturgeon so hard?",
        answer:
          "It must migrate far up the Yangtze to spawn; large dams block those routes, preventing natural reproduction, so the species now depends heavily on hatchery releases.",
      },
      {
        question: "Why is the Chinese sturgeon Critically Endangered?",
        answer:
          "Published assessments cite dams blocking spawning migrations, pollution and habitat loss, and past overfishing. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Sturgeon profile", href: "/animals/sturgeon" },
  },
  "porbeagle": {
    summary: [
      "The porbeagle is a powerful, warm-bodied shark related to the great white and mako. It is assessed as Vulnerable.",
      "Heavy fishing for its valued meat caused steep declines.",
    ],
    whyItMatters:
      "A warm-bodied open-water shark depleted by fishing, the porbeagle is a case study in managing slow-reproducing sharks toward recovery.",
    faq: [
      {
        question: "How is the porbeagle related to other sharks?",
        answer:
          "It belongs to the mackerel shark family alongside the great white and mako, and like them it is warm-bodied, which helps power its active swimming in cold seas.",
      },
      {
        question: "Why is the porbeagle Vulnerable?",
        answer:
          "Published assessments cite overfishing for its valuable meat and fins, bycatch, and a low reproductive rate. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Shark profile", href: "/animals/shark" },
  },
  "angelshark": {
    summary: [
      "The angelshark is a flattened, ray-like shark that buries itself in sand to ambush prey. It is assessed as Critically Endangered.",
      "Once widespread, it has vanished from much of its range.",
    ],
    whyItMatters:
      "A flattened, bottom-dwelling shark wiped out across much of its range by trawling, the angelshark is a priority for coastal and seabed conservation.",
    faq: [
      {
        question: "Is the angelshark a shark or a ray?",
        answer:
          "It is a true shark, but its flattened body and broad fins make it look ray-like; it lies buried in sand and ambushes prey that swims past.",
      },
      {
        question: "Why is the angelshark Critically Endangered?",
        answer:
          "Published assessments cite bycatch in trawls and nets, habitat disturbance, and slow reproduction, which together erased it from much of its range. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Shark profile", href: "/animals/shark" },
  },
  "smooth-hammerhead": {
    summary: [
      "The smooth hammerhead is a large hammerhead shark with a smoothly curved head lacking a central notch. It is assessed as Vulnerable.",
      "Like other hammerheads it is heavily targeted for its fins.",
    ],
    whyItMatters:
      "A wide-ranging hammerhead pressured by the fin trade, the smooth hammerhead is part of the broader case for shark conservation.",
    faq: [
      {
        question: "How is the smooth hammerhead told apart from other hammerheads?",
        answer:
          "Its head is broad and smoothly curved across the front, without the central notch seen in the scalloped hammerhead, and it tolerates cooler waters than some relatives.",
      },
      {
        question: "Why is the smooth hammerhead Vulnerable?",
        answer:
          "Published assessments cite overfishing — including high demand for fins — and bycatch. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Hammerhead shark profile", href: "/animals/hammerhead-shark" },
  },
  "spiny-dogfish": {
    summary: [
      "The spiny dogfish is a small, schooling shark with sharp spines in front of its dorsal fins. It is assessed (globally) as Vulnerable.",
      "It has one of the longest pregnancies of any vertebrate.",
    ],
    whyItMatters:
      "A small, heavily fished shark with extraordinarily slow reproduction, the spiny dogfish shows how even abundant-seeming sharks can be overfished.",
    faq: [
      {
        question: "What is remarkable about the spiny dogfish's reproduction?",
        answer:
          "It has one of the longest gestation periods of any vertebrate — well over a year and a half — which makes it very slow to recover from overfishing.",
      },
      {
        question: "Why is the spiny dogfish Vulnerable?",
        answer:
          "Published assessments cite overfishing, its slow reproductive rate and long gestation, and bycatch. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Shark profile", href: "/animals/shark" },
  },
  "totoaba": {
    summary: [
      "The totoaba is a large fish found only in the Gulf of California, hunted illegally for its valuable swim bladder. It is assessed as Vulnerable.",
      "The gillnets set for totoaba also drown the critically endangered vaquita.",
    ],
    whyItMatters:
      "A large endemic fish whose illegal trade drives the vaquita toward extinction, the totoaba sits at the centre of one of the world's most urgent marine conservation crises.",
    faq: [
      {
        question: "How is the totoaba linked to the vaquita?",
        answer:
          "Illegal gillnets set to catch totoaba for their high-value swim bladders also entangle and drown the vaquita, making the totoaba trade the main driver of the vaquita's collapse.",
      },
      {
        question: "Why is the totoaba threatened?",
        answer:
          "Published assessments cite illegal fishing for its swim bladder, bycatch, and habitat change in the Gulf of California. See the IUCN Red List.",
      },
    ],
  },
  "giant-sea-bass": {
    summary: [
      "The giant sea bass is a huge reef fish of the eastern Pacific that can exceed two metres. It is assessed as Critically Endangered, with signs of recovery under protection.",
      "It is long-lived and slow to mature.",
    ],
    whyItMatters:
      "A giant, long-lived reef predator hammered by historical fishing, the giant sea bass is a flagship for kelp-forest and reef recovery off California.",
    faq: [
      {
        question: "How big does the giant sea bass get?",
        answer:
          "It is one of the largest bony fishes of its region, able to exceed two metres in length and well over a hundred kilograms, living for many decades.",
      },
      {
        question: "Why is the giant sea bass Critically Endangered?",
        answer:
          "Published assessments cite past severe overfishing, slow maturation, and bycatch, though fishing limits have allowed some recovery. See the IUCN Red List.",
      },
    ],
  },
  "boulder-star-coral": {
    summary: [
      "Boulder star coral is a major reef-building coral that forms large mounds on Caribbean reefs. It is assessed as Endangered.",
      "Like all corals it is a colony of tiny animals living with symbiotic algae.",
    ],
    whyItMatters:
      "A key Caribbean reef-builder hit hard by bleaching and disease, boulder star coral is central to the wider reef crisis and to coral-restoration efforts.",
    faq: [
      {
        question: "Is boulder star coral one animal or many?",
        answer:
          "It is a colony of many tiny coral polyps building a shared stony skeleton, hosting symbiotic algae that provide much of its colour and energy.",
      },
      {
        question: "Why is boulder star coral Endangered?",
        answer:
          "Published assessments cite warming-driven bleaching, coral disease, and pollution and reef degradation. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Coral profile", href: "/animals/coral" },
  },
  "amazonian-manatee": {
    summary: [
      "The Amazonian manatee is the only manatee that lives entirely in fresh water, found in the rivers of the Amazon basin. It is assessed as Vulnerable.",
      "It is a slow, plant-eating mammal that grazes on aquatic vegetation.",
    ],
    whyItMatters:
      "As the only fully freshwater manatee, the Amazonian manatee helps keep river vegetation in check and is a flagship for Amazon freshwater conservation.",
    faq: [
      {
        question: "What makes the Amazonian manatee unique?",
        answer:
          "It is the only manatee species that lives entirely in fresh water, never entering the sea, and is found only in the Amazon basin.",
      },
      {
        question: "Why is the Amazonian manatee Vulnerable?",
        answer:
          "Published assessments cite hunting for meat, bycatch and habitat change, and pollution. See the IUCN Red List for the current assessment.",
      },
    ],
  },
  "maned-three-toed-sloth": {
    summary: [
      "The maned three-toed sloth is a leaf-eating sloth named for the dark mane of hair around its neck and shoulders. It is assessed as Vulnerable.",
      "It is found only in Brazil's threatened Atlantic Forest.",
    ],
    whyItMatters:
      "A slow, leaf-eating sloth restricted to the Atlantic Forest, the maned sloth is a flagship for one of the world's most fragmented biodiversity hotspots.",
    faq: [
      {
        question: "Why is it called the maned sloth?",
        answer:
          "Adults, especially males, have a distinctive mane of long dark hair around the neck and shoulders, unlike other three-toed sloths.",
      },
      {
        question: "Why is the maned three-toed sloth Vulnerable?",
        answer:
          "Published assessments cite the loss and fragmentation of the Atlantic Forest and small, isolated populations. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Sloth profile", href: "/animals/sloth" },
  },
  "european-hamster": {
    summary: [
      "The European (common) hamster is a large, boldly coloured wild hamster of farmland, once so common it was treated as a pest. It is now assessed as Critically Endangered.",
      "Its numbers have crashed dramatically in just a few decades.",
    ],
    whyItMatters:
      "A once-abundant farmland animal now on the edge of extinction, the European hamster is a striking warning about the impact of intensive agriculture on common wildlife.",
    faq: [
      {
        question: "How can a former pest become Critically Endangered?",
        answer:
          "Intensive modern agriculture has removed the food and cover the European hamster needs and is linked to a steep drop in how many young it raises, causing a rapid collapse across its range.",
      },
      {
        question: "Why is the European hamster Critically Endangered?",
        answer:
          "Published assessments cite intensive agriculture, loss of habitat and food, and a collapsing reproductive rate. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Hamster profile", href: "/animals/hamster" },
  },
  "vancouver-island-marmot": {
    summary: [
      "The Vancouver Island marmot is one of the rarest mammals in the world, found only on Vancouver Island. It is assessed as Endangered.",
      "It was reduced to a handful of animals before captive breeding and release.",
    ],
    whyItMatters:
      "A Canadian endemic rescued from the brink by captive breeding, the Vancouver Island marmot is a landmark recovery effort for a mountain mammal.",
    faq: [
      {
        question: "How rare is the Vancouver Island marmot?",
        answer:
          "It is among the rarest mammals on Earth; the wild population fell to only a few dozen animals before an intensive captive-breeding and release programme began rebuilding it.",
      },
      {
        question: "Why is the Vancouver Island marmot Endangered?",
        answer:
          "Published assessments cite its tiny population, predation, and habitat change including the effects of past logging. See the IUCN Red List.",
      },
    ],
  },
  "northern-hairy-nosed-wombat": {
    summary: [
      "The northern hairy-nosed wombat is one of the rarest large mammals in the world, a burrowing marsupial of Queensland. It is assessed as Critically Endangered.",
      "Almost the entire species lives in one small protected area.",
    ],
    whyItMatters:
      "A burrowing marsupial reduced to a single core site, the northern hairy-nosed wombat is a flagship for intensive recovery of Australia's rarest mammals.",
    faq: [
      {
        question: "How rare is the northern hairy-nosed wombat?",
        answer:
          "It is among the rarest large mammals on Earth; for years almost the entire population lived in one small reserve, making the species extremely vulnerable.",
      },
      {
        question: "Why is it Critically Endangered?",
        answer:
          "Published assessments cite its extremely small range, predation and competition, and vulnerability to any local disaster. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Wombat profile", href: "/animals/wombat" },
  },
  "leadbeaters-possum": {
    summary: [
      "Leadbeater's possum is a small, fast-moving marsupial and a faunal emblem of the Australian state of Victoria. It is assessed as Critically Endangered.",
      "It depends on old trees with hollows for nesting.",
    ],
    whyItMatters:
      "Tied to old-growth mountain ash forest, Leadbeater's possum is a flagship for protecting Australia's tall wet forests from logging and fire.",
    faq: [
      {
        question: "Why does Leadbeater's possum need old forests?",
        answer:
          "It nests in hollows that form only in very old, large trees, so the loss of old-growth forest to logging and fire directly removes its homes.",
      },
      {
        question: "Why is Leadbeater's possum Critically Endangered?",
        answer:
          "Published assessments cite the loss of hollow-bearing old-growth forest, bushfires, and logging. See the IUCN Red List for the current assessment.",
      },
    ],
  },
  "matschies-tree-kangaroo": {
    summary: [
      "Matschie's tree-kangaroo is a stocky, reddish tree-dwelling kangaroo found only on the Huon Peninsula of Papua New Guinea. It is assessed as Endangered.",
      "Unlike ground kangaroos, it climbs and lives in the forest canopy.",
    ],
    whyItMatters:
      "A canopy-dwelling kangaroo found only in New Guinea, Matschie's tree-kangaroo is a flagship for the island's threatened mountain rainforests.",
    faq: [
      {
        question: "How does a kangaroo live in trees?",
        answer:
          "Tree-kangaroos have shorter legs, strong forelimbs, and long tails for balance, letting them climb and move through the forest canopy rather than hopping across open ground.",
      },
      {
        question: "Why is Matschie's tree-kangaroo Endangered?",
        answer:
          "Published assessments cite hunting, habitat loss, and a small, restricted range. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Kangaroo profile", href: "/animals/kangaroo" },
  },
  "western-hoolock-gibbon": {
    summary: [
      "The western hoolock gibbon is a small ape with striking white brows, the only ape native to India. It is assessed as Endangered.",
      "Pairs sing loud duets and swing through the canopy.",
    ],
    whyItMatters:
      "The only ape found in India and a fast-moving seed disperser, the western hoolock gibbon is a flagship for north-east India's threatened forests.",
    faq: [
      {
        question: "What is distinctive about hoolock gibbons?",
        answer:
          "They have prominent white brow markings, and males and females differ in colour; like other gibbons they sing loud duets and swing rapidly through the trees.",
      },
      {
        question: "Why is the western hoolock gibbon Endangered?",
        answer:
          "Published assessments cite deforestation and fragmentation, hunting, and capture. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Gibbon profile", href: "/animals/gibbon" },
  },
  "brown-spider-monkey": {
    summary: [
      "The brown spider monkey is a long-limbed, prehensile-tailed monkey and one of the most endangered primates in the Americas. It is assessed as Critically Endangered.",
      "Some individuals have unusual pale blue eyes.",
    ],
    whyItMatters:
      "A large, agile seed disperser of northern South American forests, the brown spider monkey is a flagship for protecting those fast-disappearing habitats.",
    faq: [
      {
        question: "What is unusual about the brown spider monkey?",
        answer:
          "Besides the long limbs and gripping tail typical of spider monkeys, some individuals have striking pale blue eyes, which is rare among monkeys.",
      },
      {
        question: "Why is the brown spider monkey Critically Endangered?",
        answer:
          "Published assessments cite deforestation, hunting, and capture for the pet trade. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Spider monkey profile", href: "/animals/spider-monkey" },
  },
  "north-pacific-right-whale": {
    summary: [
      "The North Pacific right whale is one of the rarest large whales, especially its eastern population. It is assessed as Endangered.",
      "Illegal whaling in the 20th century devastated already-reduced numbers.",
    ],
    whyItMatters:
      "Among the rarest of all great whales, the North Pacific right whale is a sobering example of how slowly heavily depleted whale populations recover.",
    faq: [
      {
        question: "Why is the eastern North Pacific right whale so rare?",
        answer:
          "Heavy historical whaling, including illegal catches in the 20th century, reduced an already small population to a tiny number, and recovery has been extremely slow.",
      },
      {
        question: "Why is the North Pacific right whale Endangered?",
        answer:
          "Published assessments cite the legacy of whaling, ship strikes, and entanglement. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Whale profile", href: "/animals/whale" },
  },
  "hooded-crane": {
    summary: [
      "The hooded crane is a small, dark crane with a white head and neck, breeding in north-east Asia. It is assessed as Vulnerable.",
      "Most of the world population winters at a few sites in Japan.",
    ],
    whyItMatters:
      "A crane that crowds into a handful of wintering wetlands, the hooded crane is a flagship for spreading and protecting wintering habitat in East Asia.",
    faq: [
      {
        question: "Why is concentrating at few sites risky for the hooded crane?",
        answer:
          "A large share of the world population winters at just a few sites, so disease or habitat loss at one location could affect much of the species at once.",
      },
      {
        question: "Why is the hooded crane Vulnerable?",
        answer:
          "Published assessments cite the loss of wetlands, dependence on few wintering sites, and disturbance and disease risk. See the IUCN Red List.",
      },
    ],
  },
  "wattled-crane": {
    summary: [
      "The wattled crane is the largest crane in Africa, named for the fleshy wattles hanging from its throat. It is assessed as Vulnerable.",
      "It depends closely on large, healthy wetlands.",
    ],
    whyItMatters:
      "A wetland specialist and Africa's largest crane, the wattled crane is a flagship for conserving the continent's great floodplains and marshes.",
    faq: [
      {
        question: "What are the wattled crane's wattles?",
        answer:
          "They are two feathered, fleshy flaps that hang from the upper throat, giving the bird its name and a distinctive appearance among cranes.",
      },
      {
        question: "Why is the wattled crane Vulnerable?",
        answer:
          "Published assessments cite the loss and alteration of wetlands, dams and changed water flow, and disturbance. See the IUCN Red List.",
      },
    ],
  },
  "eastern-imperial-eagle": {
    summary: [
      "The eastern imperial eagle is a large eagle of open steppe and farmland. It is assessed as Vulnerable.",
      "It often nests in lone trees in otherwise open landscapes.",
    ],
    whyItMatters:
      "A steppe eagle threatened mainly by power lines and poison, the eastern imperial eagle is a flagship for safe infrastructure and grassland conservation across Eurasia.",
    faq: [
      {
        question: "Why are power lines dangerous to large eagles?",
        answer:
          "Big eagles that perch on poles in open country can be electrocuted by poorly designed power infrastructure, a leading cause of death for several eagle species.",
      },
      {
        question: "Why is the eastern imperial eagle Vulnerable?",
        answer:
          "Published assessments cite electrocution on power lines, poisoning, and habitat loss and persecution. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Eagle profile", href: "/animals/eagle" },
  },
  "erect-crested-penguin": {
    summary: [
      "The erect-crested penguin is a crested penguin with upright yellow brow plumes, breeding only on a couple of remote sub-Antarctic islands. It is assessed as Endangered.",
      "Its breeding biology is little known because its colonies are so remote.",
    ],
    whyItMatters:
      "A crested penguin confined to a few remote islands, the erect-crested penguin is a barometer for the southern ocean's productivity.",
    faq: [
      {
        question: "What is distinctive about the erect-crested penguin?",
        answer:
          "Its yellow head crests stand upright rather than drooping, unlike those of related crested penguins — a feature reflected in its name.",
      },
      {
        question: "Why is the erect-crested penguin Endangered?",
        answer:
          "Published assessments cite ocean change affecting food supply, its tiny breeding range, and disturbance. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Penguin profile", href: "/animals/penguin" },
  },
  "fiordland-penguin": {
    summary: [
      "The Fiordland penguin (tawaki) is a crested penguin that, unusually, nests in dense coastal rainforest. It is assessed as Vulnerable.",
      "It comes ashore through temperate rainforest rather than on open beaches.",
    ],
    whyItMatters:
      "A rare forest-nesting penguin found only in New Zealand, the Fiordland penguin is a flagship for protecting its coastal rainforest and surrounding seas.",
    faq: [
      {
        question: "Why is it unusual for a penguin to nest in rainforest?",
        answer:
          "Most penguins nest on open ground or rock, but the Fiordland penguin breeds in dense, dripping temperate rainforest along New Zealand's south-west coast.",
      },
      {
        question: "Why is the Fiordland penguin Vulnerable?",
        answer:
          "Published assessments cite introduced predators, disturbance, and ocean change. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Penguin profile", href: "/animals/penguin" },
  },
  "waved-albatross": {
    summary: [
      "The waved albatross is the only tropical albatross, breeding almost entirely on one Galapagos island. It is assessed as Critically Endangered.",
      "It performs an elaborate, clattering courtship dance.",
    ],
    whyItMatters:
      "The only albatross of the tropics, breeding on a single island, the waved albatross is a flagship for Galapagos and eastern Pacific marine conservation.",
    faq: [
      {
        question: "Why is the waved albatross unusual among albatrosses?",
        answer:
          "It is essentially the only albatross that breeds in the tropics, with almost the entire population nesting on Espanola Island in the Galapagos.",
      },
      {
        question: "Why is the waved albatross Critically Endangered?",
        answer:
          "Published assessments cite longline fishing bycatch, reliance on a single main breeding site, and disturbance and disease. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Albatross profile", href: "/animals/albatross" },
  },
  "forest-owlet": {
    summary: [
      "The forest owlet is a small, day-active owl of central India that was feared extinct for over a century before its rediscovery in 1997. It is assessed as Endangered.",
      "It hunts lizards and other small prey, often in daylight.",
    ],
    whyItMatters:
      "A small owl famously rediscovered after being lost to science for decades, the forest owlet is a flagship for India's dry forests.",
    faq: [
      {
        question: "Why was the forest owlet thought extinct?",
        answer:
          "After very few historical records, it went unseen for over a hundred years and was feared extinct until it was rediscovered in central India in 1997.",
      },
      {
        question: "Why is the forest owlet Endangered?",
        answer:
          "Published assessments cite habitat loss and degradation, a small fragmented range, and disturbance. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Owl profile", href: "/animals/owl" },
  },
  "burmese-roofed-turtle": {
    summary: [
      "The Burmese roofed turtle is a large river turtle that was brought back from the very edge of extinction by captive breeding. It is assessed as Critically Endangered.",
      "Males develop bright colours in the breeding season.",
    ],
    whyItMatters:
      "A river turtle rescued from near-total loss through breeding programmes, the Burmese roofed turtle is a flagship for Myanmar's river conservation.",
    faq: [
      {
        question: "How close did the Burmese roofed turtle come to extinction?",
        answer:
          "It was nearly lost, with only a handful of wild animals known, before captive breeding dramatically increased numbers in protected facilities.",
      },
      {
        question: "Why is it Critically Endangered?",
        answer:
          "Published assessments cite past egg collection and hunting, habitat change, and a tiny wild population, even as captive breeding helps. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Turtle profile", href: "/animals/turtle" },
  },
  "bog-turtle": {
    summary: [
      "The bog turtle is the smallest turtle in North America, with an orange blotch on each side of its head. It is assessed as Critically Endangered.",
      "It lives in small, spring-fed wetlands and bogs.",
    ],
    whyItMatters:
      "A tiny wetland turtle dependent on vanishing bogs and fens, the bog turtle is a flagship for protecting small freshwater wetlands in the eastern US.",
    faq: [
      {
        question: "How small is the bog turtle?",
        answer:
          "It is the smallest turtle in North America, only around 8-11 cm long, with a distinctive orange patch on each side of the head.",
      },
      {
        question: "Why is the bog turtle Critically Endangered?",
        answer:
          "Published assessments cite the loss and drainage of its wetland habitat, collection for the pet trade, and invasive plants choking its bogs. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Turtle profile", href: "/animals/turtle" },
  },
  "spider-tortoise": {
    summary: [
      "The spider tortoise is a small Madagascan tortoise named for the spider-web-like yellow lines on its shell. It is assessed as Critically Endangered.",
      "It lives in the unique spiny forest of the south-west.",
    ],
    whyItMatters:
      "A small, intricately patterned tortoise of Madagascar's spiny forest, the spider tortoise is a flagship for that distinctive, threatened habitat.",
    faq: [
      {
        question: "Why is it called the spider tortoise?",
        answer:
          "Its shell carries fine yellow lines radiating in a web-like, spider's-web pattern on each plate, giving the tortoise its name.",
      },
      {
        question: "Why is the spider tortoise Critically Endangered?",
        answer:
          "Published assessments cite habitat loss to agriculture and charcoal production, collection for food and the pet trade, and a shrinking range. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Tortoise profile", href: "/animals/tortoise" },
  },
  "aruba-island-rattlesnake": {
    summary: [
      "The Aruba island rattlesnake is a rare rattlesnake found only on the small island of Aruba. It is assessed as Critically Endangered.",
      "It is one of the most range-restricted rattlesnakes in the world.",
    ],
    whyItMatters:
      "A rattlesnake confined to a single small island, the Aruba island rattlesnake is a flagship for conserving Aruba's remaining dry wilderness.",
    faq: [
      {
        question: "Why is the Aruba island rattlesnake so threatened?",
        answer:
          "It lives only on the small island of Aruba, so habitat loss to development on such a limited area puts the entire species at risk.",
      },
      {
        question: "Why is it Critically Endangered?",
        answer:
          "Published assessments cite habitat loss to development, its tiny range, and persecution and road deaths. As a venomous snake it should never be handled. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Rattlesnake profile", href: "/animals/rattlesnake" },
  },
  "dusky-gopher-frog": {
    summary: [
      "The dusky gopher frog is one of the most endangered amphibians in North America, surviving around a few ponds in Mississippi. It is assessed as Critically Endangered.",
      "It shelters in burrows and breeds in seasonal ponds.",
    ],
    whyItMatters:
      "A frog reduced to a handful of ponds, the dusky gopher frog is a flagship for restoring the longleaf pine ecosystem of the US Southeast.",
    faq: [
      {
        question: "Why is the dusky gopher frog so rare?",
        answer:
          "It survives around only a few seasonal breeding ponds in Mississippi, having lost almost all of its historic longleaf pine habitat — leaving a tiny, vulnerable population.",
      },
      {
        question: "Why is the dusky gopher frog Critically Endangered?",
        answer:
          "Published assessments cite the loss of its breeding ponds and pine habitat, a tiny population, and disease. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Frog profile", href: "/animals/frog" },
  },
  "mountain-yellow-legged-frog": {
    summary: [
      "The mountain yellow-legged frog lives in high mountain lakes and streams of California. It is assessed as Endangered.",
      "It has declined sharply as introduced fish and disease spread through its habitat.",
    ],
    whyItMatters:
      "A high-mountain frog squeezed by introduced fish and amphibian disease, the mountain yellow-legged frog is a flagship for restoring fishless alpine waters.",
    faq: [
      {
        question: "How did introduced fish harm this frog?",
        answer:
          "Trout were stocked into naturally fishless mountain lakes for angling, and they eat the frog's tadpoles, wiping out populations in many lakes.",
      },
      {
        question: "Why is the mountain yellow-legged frog Endangered?",
        answer:
          "Published assessments cite introduced trout, the amphibian fungal disease chytridiomycosis, and habitat change. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Frog profile", href: "/animals/frog" },
  },
  "bigeye-tuna": {
    summary: [
      "The bigeye tuna is a large, deep-diving tuna prized for sashimi. It is assessed as Vulnerable.",
      "It can dive to cooler, deeper water than many other tunas to find food.",
    ],
    whyItMatters:
      "A valuable, deep-diving ocean predator under heavy fishing pressure, the bigeye tuna is a key test of sustainable management for high-seas fisheries.",
    faq: [
      {
        question: "What is special about the bigeye tuna?",
        answer:
          "It can dive deeper and tolerate cooler water than many tunas, following prey into the ocean's twilight zone, and its large eyes suit these dim depths.",
      },
      {
        question: "Why is the bigeye tuna Vulnerable?",
        answer:
          "Published assessments cite overfishing, including catches of juveniles around fish-aggregating devices, and high overall fishing pressure. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Tuna profile", href: "/animals/tuna" },
  },
  "dwarf-sawfish": {
    summary: [
      "The dwarf sawfish is the smallest sawfish, a ray with a tooth-studded snout. It is assessed as Endangered.",
      "Like other sawfishes, its saw snags easily in fishing gear.",
    ],
    whyItMatters:
      "One of the threatened sawfishes, the dwarf sawfish is a priority for protecting tropical coasts and estuaries from destructive fishing.",
    faq: [
      {
        question: "How is the dwarf sawfish different from other sawfishes?",
        answer:
          "It is the smallest of the sawfishes, though still a sizeable ray, and shares the long, tooth-edged snout that makes all sawfishes prone to entanglement.",
      },
      {
        question: "Why is the dwarf sawfish Endangered?",
        answer:
          "Published assessments cite entanglement in fishing nets, habitat loss, and past fishing. See the IUCN Red List for the current assessment.",
      },
    ],
  },
  "silky-shark": {
    summary: [
      "The silky shark is a sleek, abundant open-ocean shark named for its smooth-feeling skin. It is assessed as Vulnerable.",
      "It is among the most heavily traded sharks for fins.",
    ],
    whyItMatters:
      "One of the most common sharks in the global fin trade, the silky shark is a flagship for managing high-seas shark fisheries.",
    faq: [
      {
        question: "Why is it called the silky shark?",
        answer:
          "Its name comes from the smooth, silky texture of its skin, produced by fine dermal denticles, compared with the rougher skin of some other sharks.",
      },
      {
        question: "Why is the silky shark Vulnerable?",
        answer:
          "Published assessments cite overfishing and the fin trade and bycatch, especially around fish-aggregating devices used in tuna fisheries. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Shark profile", href: "/animals/shark" },
  },
  "kaluga": {
    summary: [
      "The kaluga is one of the largest freshwater fish in the world, a giant sturgeon of the Amur River. It is assessed as Critically Endangered.",
      "It is hunted for its valuable caviar.",
    ],
    whyItMatters:
      "A giant, ancient river fish driven down by the caviar trade, the kaluga is a flagship for conserving the Amur River and its megafauna.",
    faq: [
      {
        question: "How big is the kaluga?",
        answer:
          "It is among the largest freshwater fish on Earth, historically reaching several metres and very large weights, and can live for decades.",
      },
      {
        question: "Why is the kaluga Critically Endangered?",
        answer:
          "Published assessments cite overfishing and poaching for caviar, dams and habitat change, and slow maturation. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Sturgeon profile", href: "/animals/sturgeon" },
  },
  "mountainous-star-coral": {
    summary: [
      "Mountainous star coral is a major reef-building coral that forms large, mounded colonies on Caribbean reefs. It is assessed as Endangered.",
      "Like all corals it is a colony of tiny animals with symbiotic algae.",
    ],
    whyItMatters:
      "A key Caribbean reef-builder threatened by bleaching and disease, mountainous star coral is part of the wider reef crisis and a focus of restoration.",
    faq: [
      {
        question: "What role does mountainous star coral play on reefs?",
        answer:
          "Its large mounded colonies help build the solid structure of Caribbean reefs, providing habitat for many other species, so its loss reshapes whole reefs.",
      },
      {
        question: "Why is mountainous star coral Endangered?",
        answer:
          "Published assessments cite warming-driven bleaching, coral disease, and pollution and reef degradation. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Coral profile", href: "/animals/coral" },
  },
  "kihansi-spray-toad": {
    summary: [
      "The Kihansi spray toad is a tiny toad that lived only in the mist of a single Tanzanian waterfall. It is assessed as Extinct in the Wild.",
      "It was saved by captive colonies and has been the subject of reintroduction efforts.",
    ],
    whyItMatters:
      "A toad from one waterfall's spray zone, the Kihansi spray toad shows how a single dam can erase a microhabitat — and how captive breeding can keep a species alive.",
    faq: [
      {
        question: "Why did the Kihansi spray toad disappear from the wild?",
        answer:
          "It depended on the constant mist of the Kihansi waterfall; a dam upstream reduced that spray, and amphibian disease struck, leading to its loss in the wild. Captive colonies preserved the species.",
      },
      {
        question: "What does 'Extinct in the Wild' mean here?",
        answer:
          "It means the toad survives only in captivity (and via reintroduction efforts) rather than as a self-sustaining wild population. See the IUCN Red List for the current status.",
      },
    ],
    relatedAnimal: { label: "Toad profile", href: "/animals/toad" },
  },
  "wyoming-toad": {
    summary: [
      "The Wyoming toad is one of North America's most endangered amphibians, assessed as Extinct in the Wild.",
      "It survives through captive breeding, with toads released back into protected wetlands.",
    ],
    whyItMatters:
      "A toad that vanished in the wild and persists through intensive captive breeding, the Wyoming toad is a flagship for North American amphibian recovery.",
    faq: [
      {
        question: "Why is the Wyoming toad Extinct in the Wild?",
        answer:
          "Published accounts cite the amphibian fungal disease chytridiomycosis along with past habitat change and pesticides; the wild population collapsed and the species now depends on captive breeding and reintroduction.",
      },
      {
        question: "Is the Wyoming toad being returned to the wild?",
        answer:
          "Yes — captive-bred toads are released into protected wetlands, though establishing self-sustaining wild populations remains difficult. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Toad profile", href: "/animals/toad" },
  },
  "round-island-keel-scaled-boa": {
    summary: [
      "The Round Island keel-scaled boa is a small snake found only on Round Island near Mauritius. It is assessed as Endangered, recovering after island restoration.",
      "A related boa from the same island is already extinct.",
    ],
    whyItMatters:
      "A small-island boa recovering after invasive grazers were removed, this species is a flagship for island habitat restoration in the Indian Ocean.",
    faq: [
      {
        question: "How did removing goats and rabbits help the boa?",
        answer:
          "Introduced goats and rabbits had stripped Round Island's vegetation; once they were removed and the habitat recovered, the boa and other native species were able to rebound.",
      },
      {
        question: "Why is the Round Island keel-scaled boa Endangered?",
        answer:
          "Published assessments cite its tiny island range and the legacy of habitat damage, even as numbers recover after restoration. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Boa profile", href: "/animals/boa" },
  },
  "houston-toad": {
    summary: [
      "The Houston toad is a rare toad of sandy pine and oak woodlands in Texas. It is assessed as Endangered.",
      "It depends on specific soils for burrowing and on seasonal ponds for breeding.",
    ],
    whyItMatters:
      "A Texas endemic dependent on a vanishing woodland-and-pond habitat, the Houston toad is a flagship for conserving the region's sandy uplands.",
    faq: [
      {
        question: "Why is the Houston toad so particular about habitat?",
        answer:
          "It needs loose sandy soils to burrow into and nearby seasonal ponds to breed, a specific combination that has been lost or fragmented across much of its range.",
      },
      {
        question: "Why is the Houston toad Endangered?",
        answer:
          "Published assessments cite habitat loss and fragmentation, drought and altered fire regimes, and a tiny fragmented population. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Toad profile", href: "/animals/toad" },
  },
  "yosemite-toad": {
    summary: [
      "The Yosemite toad is a high-mountain toad of the Sierra Nevada, where males are strikingly different in colour from females. It is assessed as Endangered.",
      "It breeds in shallow snowmelt pools in alpine meadows.",
    ],
    whyItMatters:
      "A high-elevation toad sensitive to disease and a changing climate, the Yosemite toad is an indicator of the health of Sierra Nevada meadows.",
    faq: [
      {
        question: "What is unusual about the Yosemite toad's appearance?",
        answer:
          "Males and females look strikingly different: males are often plain yellow-green, while females and young have bold dark blotches — a marked difference for a toad.",
      },
      {
        question: "Why is the Yosemite toad Endangered?",
        answer:
          "Published assessments cite disease, habitat change and drought, and the legacy of grazing and pesticide drift. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Toad profile", href: "/animals/toad" },
  },
  "lake-oku-clawed-frog": {
    summary: [
      "The Lake Oku clawed frog is a fully aquatic frog found only in one crater lake in Cameroon. It is assessed as Critically Endangered.",
      "It is unusual among its relatives for having extra sets of chromosomes.",
    ],
    whyItMatters:
      "A clawed frog confined to a single mountain lake, the Lake Oku clawed frog is a flagship for protecting isolated montane freshwater habitats.",
    faq: [
      {
        question: "Why is the Lake Oku clawed frog so vulnerable?",
        answer:
          "Its entire world is one small crater lake, so any change there — introduced fish, pollution, or disease — could threaten the whole species at once.",
      },
      {
        question: "Why is it Critically Endangered?",
        answer:
          "Published assessments cite its single-lake range, introduced fish and disturbance, and disease risk. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "African clawed frog profile", href: "/animals/clawed-frog" },
  },
  "variable-harlequin-frog": {
    summary: [
      "The variable harlequin frog is a brightly coloured toad (a harlequin toad) of Central America. It is assessed as Critically Endangered.",
      "Its vivid colours, which vary between populations, warn of skin toxins.",
    ],
    whyItMatters:
      "A jewel-coloured harlequin toad hit hard by amphibian disease, the variable harlequin frog is emblematic of the Central American amphibian crisis.",
    faq: [
      {
        question: "Why is it called the variable harlequin frog?",
        answer:
          "Its bright warning colours vary widely between populations — different combinations of black with orange, red, yellow, or green — hence 'variable'.",
      },
      {
        question: "Why is the variable harlequin frog Critically Endangered?",
        answer:
          "Published assessments cite the amphibian fungal disease chytridiomycosis above all, along with habitat loss and climate change. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Frog profile", href: "/animals/frog" },
  },
  "northern-corroboree-frog": {
    summary: [
      "The northern corroboree frog is a tiny black-and-yellow alpine frog of Australia, closely related to the southern corroboree frog. It is assessed as Critically Endangered.",
      "Like its relative, it makes its own skin toxin.",
    ],
    whyItMatters:
      "A striped alpine frog devastated by amphibian disease, the northern corroboree frog is an urgent focus of Australian captive-breeding programmes.",
    faq: [
      {
        question: "How is it different from the southern corroboree frog?",
        answer:
          "They are closely related and both boldly striped in yellow and black, but they are separate species occupying different parts of the Australian alps.",
      },
      {
        question: "Why is the northern corroboree frog Critically Endangered?",
        answer:
          "Published assessments cite the amphibian fungal disease chytridiomycosis, habitat change and drought, and a tiny range. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Frog profile", href: "/animals/frog" },
  },
  "morelets-tree-frog": {
    summary: [
      "Morelet's tree frog is a striking tree frog with bold eyes and smooth green skin. It is assessed as Critically Endangered.",
      "It breeds in pools and ponds in Central American forests.",
    ],
    whyItMatters:
      "A handsome Central American tree frog hit by disease and habitat loss, Morelet's tree frog is part of the wider amphibian extinction crisis.",
    faq: [
      {
        question: "What does Morelet's tree frog look like?",
        answer:
          "It is a smooth-skinned green tree frog with large, dark-rimmed eyes and pale underparts, found in the forests of Mexico and northern Central America.",
      },
      {
        question: "Why is Morelet's tree frog Critically Endangered?",
        answer:
          "Published assessments cite the amphibian fungal disease chytridiomycosis, habitat loss, and past collection. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Tree frog profile", href: "/animals/tree-frog" },
  },
  "lobed-star-coral": {
    summary: [
      "Lobed star coral is a reef-building coral that forms domed and plate-like colonies on Caribbean reefs. It is assessed as Vulnerable.",
      "Like all corals it is a colony of tiny animals with symbiotic algae.",
    ],
    whyItMatters:
      "A Caribbean reef-builder under pressure from bleaching and disease, lobed star coral is part of the wider reef crisis and a focus for restoration.",
    faq: [
      {
        question: "Is lobed star coral a single creature?",
        answer:
          "No — it is a colony of many tiny coral polyps building a shared stony skeleton, hosting symbiotic algae that supply much of its colour and energy.",
      },
      {
        question: "Why is lobed star coral Vulnerable?",
        answer:
          "Published assessments cite warming-driven bleaching, coral disease, and pollution and reef degradation. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Coral profile", href: "/animals/coral" },
  },
  "rough-cactus-coral": {
    summary: [
      "Rough cactus coral is a reef coral with meandering, ridged surfaces, found on Caribbean reefs. It is assessed as Vulnerable.",
      "It has been hit hard by coral diseases spreading across the region.",
    ],
    whyItMatters:
      "A distinctive Caribbean coral vulnerable to fast-spreading disease, rough cactus coral is part of the broader reef-conservation challenge.",
    faq: [
      {
        question: "Why is it called rough cactus coral?",
        answer:
          "Its colony surface is covered in meandering ridges and valleys with a rough texture, giving it a cactus-like appearance compared with smoother corals.",
      },
      {
        question: "Why is rough cactus coral Vulnerable?",
        answer:
          "Published assessments cite coral disease, warming-driven bleaching, and pollution and reef degradation. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Coral profile", href: "/animals/coral" },
  },
  "bowmouth-guitarfish": {
    summary: [
      "The bowmouth guitarfish is a striking, ridge-backed ray that looks part-shark, part-ray. It is assessed as Critically Endangered.",
      "Its large fins are highly valued in the fin trade.",
    ],
    whyItMatters:
      "A shark-like ray prized for its fins, the bowmouth guitarfish is among the most threatened of all sharks and rays and a priority for coastal conservation.",
    faq: [
      {
        question: "Is the bowmouth guitarfish a shark or a ray?",
        answer:
          "It is a ray, but with a shark-like body and tall fins it looks like a cross between the two — sometimes called a 'shark ray'. Its fins are highly valued, driving overfishing.",
      },
      {
        question: "Why is the bowmouth guitarfish Critically Endangered?",
        answer:
          "Published assessments cite overfishing for fins and meat, bycatch, and habitat loss. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Ray profile", href: "/animals/ray" },
  },
  "russian-sturgeon": {
    summary: [
      "The Russian sturgeon is a large, long-lived fish of the Caspian and Black Sea region, a major source of caviar. It is assessed as Critically Endangered.",
      "It migrates up rivers to spawn and matures slowly.",
    ],
    whyItMatters:
      "An ancient, slow-maturing fish hammered by the caviar trade and dammed rivers, the Russian sturgeon is a flagship for sturgeon conservation.",
    faq: [
      {
        question: "Why is the Russian sturgeon so valued?",
        answer:
          "It is a key source of caviar, which drives both legal fishing and poaching; combined with its slow maturation, this has caused severe declines.",
      },
      {
        question: "Why is the Russian sturgeon Critically Endangered?",
        answer:
          "Published assessments cite overfishing for caviar, poaching, and dams blocking the river migrations it needs to spawn. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Sturgeon profile", href: "/animals/sturgeon" },
  },
  "sterlet": {
    summary: [
      "The sterlet is a small sturgeon of Eurasian rivers, valued for its meat and caviar. It is assessed as Vulnerable.",
      "Unlike many sturgeons it can complete its life cycle within rivers.",
    ],
    whyItMatters:
      "A river-dwelling sturgeon and a long-exploited fishery species, the sterlet is a flagship for the health of Eurasia's great rivers.",
    faq: [
      {
        question: "How is the sterlet different from other sturgeons?",
        answer:
          "It is smaller than most sturgeons and is largely a freshwater fish that can live and breed within rivers rather than migrating from the sea.",
      },
      {
        question: "Why is the sterlet Vulnerable?",
        answer:
          "Published assessments cite overfishing, dams and habitat change, and pollution. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Sturgeon profile", href: "/animals/sturgeon" },
  },
  "indonesian-coelacanth": {
    summary: [
      "The Indonesian coelacanth is a 'living fossil' fish, the second coelacanth species, discovered off Indonesia in the late 1990s. It is assessed as Vulnerable.",
      "Like the African coelacanth it has fleshy, limb-like fins.",
    ],
    whyItMatters:
      "A second living coelacanth, a window onto deep evolutionary history, the Indonesian coelacanth is a scientific treasure with a tiny, vulnerable population.",
    faq: [
      {
        question: "How many coelacanth species are there?",
        answer:
          "Two: the well-known African coelacanth and the Indonesian coelacanth, the latter discovered off Sulawesi in the late 1990s — both 'living fossils' from a lineage once thought long extinct.",
      },
      {
        question: "Why is the Indonesian coelacanth Vulnerable?",
        answer:
          "Published assessments cite accidental capture in deep fishing gear and a very small, slow-breeding population. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Coelacanth profile", href: "/animals/coelacanth" },
  },
  "chinese-paddlefish": {
    summary: [
      "The Chinese paddlefish was one of the largest freshwater fish in the world, a giant of the Yangtze with a long paddle-shaped snout. It has been declared Extinct.",
      "It has not been reliably recorded for many years and is now considered lost.",
    ],
    whyItMatters:
      "A giant Yangtze fish now declared extinct, the Chinese paddlefish is a stark reminder of how dams and overfishing can erase even the largest river animals.",
    faq: [
      {
        question: "Is the Chinese paddlefish really extinct?",
        answer:
          "Yes — it has been declared extinct, with no reliable records for many years. It is a sobering example of the loss of a giant freshwater fish.",
      },
      {
        question: "What caused the Chinese paddlefish's extinction?",
        answer:
          "Published accounts cite overfishing, dams that blocked its spawning migrations, and habitat loss along the Yangtze. See the IUCN Red List for the assessment.",
      },
    ],
    relatedAnimal: { label: "Paddlefish profile", href: "/animals/paddlefish" },
  },
  "shortnose-sturgeon": {
    summary: [
      "The shortnose sturgeon is a small sturgeon of eastern North American rivers and estuaries. It is assessed as Vulnerable.",
      "It moves between fresh and brackish water and matures slowly.",
    ],
    whyItMatters:
      "A river-and-estuary sturgeon affected by dams and pollution, the shortnose sturgeon is a flagship for restoring connected, clean coastal rivers.",
    faq: [
      {
        question: "Where does the shortnose sturgeon live?",
        answer:
          "In rivers and estuaries along the Atlantic coast of North America, moving between fresh and brackish water rather than ranging far out to sea.",
      },
      {
        question: "Why is the shortnose sturgeon Vulnerable?",
        answer:
          "Published assessments cite dams blocking migration, pollution and habitat change, and past overfishing and bycatch. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Sturgeon profile", href: "/animals/sturgeon" },
  },
  "dusky-shark": {
    summary: [
      "The dusky shark is a large, wide-ranging coastal shark. It is assessed as Endangered.",
      "It is one of the slowest-reproducing sharks, maturing very late.",
    ],
    whyItMatters:
      "A large coastal shark with exceptionally slow reproduction, the dusky shark is highly sensitive to fishing and a focus for shark management.",
    faq: [
      {
        question: "Why is the dusky shark so slow to recover from fishing?",
        answer:
          "It matures very late and produces few young over a long lifespan, so populations rebuild extremely slowly once reduced — making overfishing especially damaging.",
      },
      {
        question: "Why is the dusky shark Endangered?",
        answer:
          "Published assessments cite overfishing and the fin trade, bycatch, and its very slow reproductive rate. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Shark profile", href: "/animals/shark" },
  },
  "tope-shark": {
    summary: [
      "The tope (school shark) is a slim, migratory coastal shark. It is assessed as Critically Endangered.",
      "It undertakes long migrations and has long been targeted by fisheries.",
    ],
    whyItMatters:
      "A migratory coastal shark heavily fished across its range, the tope is a flagship for coordinated international shark management.",
    faq: [
      {
        question: "Why is the tope shark also called the school shark?",
        answer:
          "It often travels and feeds in groups ('schools') and undertakes long coastal migrations, which historically made it easy to catch in numbers.",
      },
      {
        question: "Why is the tope shark Critically Endangered?",
        answer:
          "Published assessments cite overfishing for meat, fins, and liver oil, bycatch, and slow reproduction. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Shark profile", href: "/animals/shark" },
  },
  "ganges-shark": {
    summary: [
      "The Ganges shark is a rare river shark of the Indian subcontinent, adapted to murky fresh and coastal waters. It is assessed as Critically Endangered.",
      "It is genuinely a freshwater-associated shark, unlike the bull shark it is sometimes confused with.",
    ],
    whyItMatters:
      "A true river shark that is poorly known and rarely seen, the Ganges shark is a flagship for South Asian river conservation.",
    faq: [
      {
        question: "Is the Ganges shark the shark behind river-attack stories?",
        answer:
          "Many such stories actually involve the wider-ranging bull shark. The Ganges shark is a separate, genuinely river-associated species that is rare and poorly known.",
      },
      {
        question: "Why is the Ganges shark Critically Endangered?",
        answer:
          "Published assessments cite overfishing and bycatch, habitat degradation and pollution, and a small, poorly known population. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Shark profile", href: "/animals/shark" },
  },
  "speartooth-shark": {
    summary: [
      "The speartooth shark is a rare river shark of northern Australia and New Guinea, with young that live in tidal rivers. It is assessed as Endangered.",
      "It has distinctive spear-shaped lower teeth.",
    ],
    whyItMatters:
      "A little-known river shark whose young depend on tidal rivers, the speartooth shark is a flagship for tropical river and estuary conservation.",
    faq: [
      {
        question: "Where do young speartooth sharks live?",
        answer:
          "Juveniles live in tidal stretches of rivers and estuaries in northern Australia and New Guinea, making these waterways crucial nurseries for the species.",
      },
      {
        question: "Why is the speartooth shark Endangered?",
        answer:
          "Published assessments cite bycatch in fisheries, habitat change, and a small, restricted population. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Shark profile", href: "/animals/shark" },
  },
  "maugean-skate": {
    summary: [
      "The Maugean skate is a rare skate found only in a couple of brackish harbours in Tasmania. It is assessed as Critically Endangered.",
      "It is a relict species confined to a very small area.",
    ],
    whyItMatters:
      "A relict ray confined to a few harbours, the Maugean skate is a flagship for managing the water quality of small, enclosed coastal ecosystems.",
    faq: [
      {
        question: "Why is the Maugean skate so vulnerable?",
        answer:
          "It lives only in a couple of small Tasmanian harbours, so changes there — especially falling oxygen levels in the water — threaten essentially the whole species.",
      },
      {
        question: "Why is the Maugean skate Critically Endangered?",
        answer:
          "Published assessments cite declining oxygen in its harbour habitat, its tiny range, and environmental change linked to human activity. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Ray profile", href: "/animals/ray" },
  },
  "chinese-bahaba": {
    summary: [
      "The Chinese bahaba is a large coastal fish hunted intensely for its extremely valuable swim bladder. It is assessed as Critically Endangered.",
      "Its swim bladder is among the most expensive fish products in the world.",
    ],
    whyItMatters:
      "A large coastal fish driven down by the extraordinary value of its swim bladder, the Chinese bahaba is a stark example of luxury-driven overfishing.",
    faq: [
      {
        question: "Why is the Chinese bahaba so heavily fished?",
        answer:
          "Its swim bladder is extraordinarily valuable in some markets, which has driven intense targeted fishing despite the species' collapse.",
      },
      {
        question: "Why is the Chinese bahaba Critically Endangered?",
        answer:
          "Published assessments cite overfishing for its swim bladder, habitat loss, and a collapsing population. See the IUCN Red List for the current assessment.",
      },
    ],
  },
  "adriatic-sturgeon": {
    summary: [
      "The Adriatic sturgeon is a sturgeon native to rivers of the Adriatic basin. It is assessed as Critically Endangered.",
      "It now depends heavily on restocking from captive-bred fish.",
    ],
    whyItMatters:
      "A regional sturgeon surviving largely through restocking, the Adriatic sturgeon is a flagship for restoring connected, healthy rivers in southern Europe.",
    faq: [
      {
        question: "Why does the Adriatic sturgeon depend on restocking?",
        answer:
          "Dams and past overfishing left very few wild-spawning fish, so populations are maintained largely by releasing captive-bred sturgeon into rivers such as the Po.",
      },
      {
        question: "Why is the Adriatic sturgeon Critically Endangered?",
        answer:
          "Published assessments cite dams blocking migration, past overfishing, and habitat change. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Sturgeon profile", href: "/animals/sturgeon" },
  },
  "sakhalin-sturgeon": {
    summary: [
      "The Sakhalin sturgeon is a rare sturgeon of the north-western Pacific, spawning in only a small number of rivers. It is assessed as Critically Endangered.",
      "Very few mature fish are thought to remain.",
    ],
    whyItMatters:
      "A rare Pacific sturgeon clinging to a few rivers, the Sakhalin sturgeon is a flagship for protecting spawning rivers in the Russian Far East.",
    faq: [
      {
        question: "Why is the Sakhalin sturgeon so rare?",
        answer:
          "It spawns in only a small number of rivers, and overfishing and habitat change have left very few mature fish, concentrating the species' survival in a tiny area.",
      },
      {
        question: "Why is the Sakhalin sturgeon Critically Endangered?",
        answer:
          "Published assessments cite overfishing and poaching, dams and habitat change, and a tiny spawning population. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Sturgeon profile", href: "/animals/sturgeon" },
  },
  "ship-sturgeon": {
    summary: [
      "The ship sturgeon is a migratory sturgeon of the Caspian and Black Sea basins. It is assessed as Critically Endangered.",
      "Like other sturgeons it is long-lived, slow to mature, and prized for caviar.",
    ],
    whyItMatters:
      "Another caviar-bearing sturgeon devastated by fishing and dams, the ship sturgeon is part of the wider collapse of Eurasian sturgeons.",
    faq: [
      {
        question: "Why are so many sturgeons Critically Endangered?",
        answer:
          "Sturgeons are long-lived, slow to mature, prized for caviar, and dependent on long river migrations to spawn — a combination that makes them extremely vulnerable to fishing and dams.",
      },
      {
        question: "Why is the ship sturgeon Critically Endangered?",
        answer:
          "Published assessments cite overfishing for caviar, dams blocking migration, and pollution and habitat change. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Sturgeon profile", href: "/animals/sturgeon" },
  },
  "murray-cod": {
    summary: [
      "The Murray cod is one of Australia's largest freshwater fish and an iconic river predator. It is assessed as Vulnerable.",
      "Despite the name it is not a true cod but a large native perch-like fish.",
    ],
    whyItMatters:
      "A giant native predator of Australia's largest river system, the Murray cod is a flagship for restoring the health and flow of the Murray-Darling.",
    faq: [
      {
        question: "Is the Murray cod a true cod?",
        answer:
          "No. Despite its name it is not related to the marine cods; it is a large Australian freshwater fish in a different family, named 'cod' by early settlers.",
      },
      {
        question: "Why is the Murray cod Vulnerable?",
        answer:
          "Published assessments cite past overfishing, dams, weirs and altered river flow, and habitat degradation across the Murray-Darling system. See the IUCN Red List.",
      },
    ],
  },
  "spotted-handfish": {
    summary: [
      "The spotted handfish is an unusual fish that 'walks' on the seabed using hand-like fins. It is assessed as Critically Endangered.",
      "It lays eggs around objects on the seabed and has a very small range in Tasmania.",
    ],
    whyItMatters:
      "A walking fish confined to a couple of Tasmanian estuaries, the spotted handfish is a flagship for conserving fragile seabed habitats.",
    faq: [
      {
        question: "How does the spotted handfish 'walk'?",
        answer:
          "Instead of swimming much, it uses its hand-shaped pectoral fins to clamber and 'walk' across the seabed, an unusual way of moving for a fish.",
      },
      {
        question: "Why is the spotted handfish Critically Endangered?",
        answer:
          "Published assessments cite habitat disturbance and loss of spawning sites, an introduced seastar that disturbs its egg-laying, and its tiny range. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Anglerfish profile", href: "/animals/anglerfish" },
  },
  "aquatic-warbler": {
    summary: [
      "The aquatic warbler is a small, streaky songbird and one of the most threatened migratory songbirds in mainland Europe. It is assessed as Vulnerable.",
      "It breeds only in specific open fen-mire wetlands.",
    ],
    whyItMatters:
      "A wetland songbird dependent on vanishing fen mires, the aquatic warbler is a flagship for protecting Europe's lowland wetlands.",
    faq: [
      {
        question: "Why is the aquatic warbler so dependent on fens?",
        answer:
          "It breeds only in particular open, wet fen-mire habitats, which have been widely drained for agriculture, leaving the warbler with few suitable sites.",
      },
      {
        question: "Why is the aquatic warbler Vulnerable?",
        answer:
          "Published assessments cite the loss and drainage of fen wetlands, habitat change along its migration and wintering range, and a fragmented population. See the IUCN Red List.",
      },
    ],
  },
  "hooded-grebe": {
    summary: [
      "The hooded grebe is a rare waterbird discovered only in the 1970s, breeding on remote Patagonian lakes. It is assessed as Critically Endangered.",
      "It performs an elaborate courtship dance.",
    ],
    whyItMatters:
      "A recently discovered grebe already in crisis, the hooded grebe is a flagship for the fragile lake ecosystems of Patagonia.",
    faq: [
      {
        question: "When was the hooded grebe discovered?",
        answer:
          "Remarkably, it was discovered by science only in the 1970s on remote lakes in Patagonia — yet within decades it had become Critically Endangered.",
      },
      {
        question: "Why is the hooded grebe Critically Endangered?",
        answer:
          "Published assessments cite introduced predators such as mink and gulls, climate and habitat change at its breeding lakes, and a small population. See the IUCN Red List.",
      },
    ],
  },
  "slender-billed-vulture": {
    summary: [
      "The slender-billed vulture is an Asian scavenging vulture that suffered a catastrophic decline alongside other South Asian vultures. It is assessed as Critically Endangered.",
      "It was hit hard by poisoning from a veterinary drug.",
    ],
    whyItMatters:
      "Part of the South Asian vulture collapse, the slender-billed vulture underscores how a single drug devastated the continent's scavengers.",
    faq: [
      {
        question: "What caused the slender-billed vulture's decline?",
        answer:
          "Published accounts point above all to the veterinary drug diclofenac in livestock carcasses, which poisoned several Asian vulture species and caused catastrophic declines.",
      },
      {
        question: "Why is the slender-billed vulture Critically Endangered?",
        answer:
          "Published assessments cite poisoning, reduced food, and habitat change. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Vulture profile", href: "/animals/vulture" },
  },
  "tristan-albatross": {
    summary: [
      "The Tristan albatross is a great albatross that breeds almost entirely on one remote South Atlantic island. It is assessed as Critically Endangered.",
      "Its chicks are attacked by introduced mice.",
    ],
    whyItMatters:
      "A great albatross threatened by introduced mice and fishing, the Tristan albatross is a flagship for island restoration and seabird-safe fisheries.",
    faq: [
      {
        question: "How can mice threaten a huge albatross?",
        answer:
          "Introduced house mice on Gough Island attack and kill albatross chicks, which have no defence against them — a major cause of breeding failure for the Tristan albatross.",
      },
      {
        question: "Why is the Tristan albatross Critically Endangered?",
        answer:
          "Published assessments cite introduced mice attacking chicks, longline fishing bycatch, and reliance on a single main breeding island. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Albatross profile", href: "/animals/albatross" },
  },
  "junin-grebe": {
    summary: [
      "The Junin grebe is a flightless waterbird found only on Lake Junin high in the Peruvian Andes. It is assessed as Critically Endangered.",
      "It cannot fly and lives entirely on one lake.",
    ],
    whyItMatters:
      "A flightless grebe confined to a single Andean lake, the Junin grebe is a flagship for cleaning up and stabilising that lake's ecosystem.",
    faq: [
      {
        question: "Why is the Junin grebe so vulnerable?",
        answer:
          "It is flightless and lives only on Lake Junin, so pollution or water-level changes at that one lake threaten the entire species, with no way for it to relocate.",
      },
      {
        question: "Why is the Junin grebe Critically Endangered?",
        answer:
          "Published assessments cite pollution from mining, fluctuating water levels, and its single-lake range. See the IUCN Red List for the current assessment.",
      },
    ],
  },
  "pileated-gibbon": {
    summary: [
      "The pileated gibbon is a small ape in which males are black and females pale, both with a cap of crown hair. It is assessed as Endangered.",
      "Pairs sing loud duets and swing through the canopy.",
    ],
    whyItMatters:
      "A canopy ape of Indochina that disperses seeds, the pileated gibbon is a flagship for protecting Southeast Asian forests.",
    faq: [
      {
        question: "Why do male and female pileated gibbons look so different?",
        answer:
          "Males are mostly black while females are pale buff, both with a distinct cap of crown hair — a marked colour difference between the sexes seen in several gibbons.",
      },
      {
        question: "Why is the pileated gibbon Endangered?",
        answer:
          "Published assessments cite deforestation, hunting, and capture for the pet trade. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Gibbon profile", href: "/animals/gibbon" },
  },
  "tonkin-snub-nosed-monkey": {
    summary: [
      "The Tonkin snub-nosed monkey is one of the rarest primates in the world, with an upturned nose and pale face, found only in northern Vietnam. It is assessed as Critically Endangered.",
      "It was rediscovered in the late 20th century after being feared lost.",
    ],
    whyItMatters:
      "A snub-nosed monkey surviving in a tiny corner of Vietnam, the Tonkin snub-nosed monkey is a flagship for the country's most threatened forests.",
    faq: [
      {
        question: "How rare is the Tonkin snub-nosed monkey?",
        answer:
          "It is among the rarest primates on Earth, with only a small number left in a restricted area of northern Vietnam, after being feared lost before its rediscovery.",
      },
      {
        question: "Why is it Critically Endangered?",
        answer:
          "Published assessments cite hunting, habitat loss and fragmentation, and a tiny population. See the IUCN Red List for the current assessment.",
      },
    ],
  },
  "franciscana": {
    summary: [
      "The franciscana is a small dolphin with a very long, slender beak, living in coastal waters and estuaries of South America. It is assessed as Vulnerable.",
      "It is one of the most bycatch-threatened small cetaceans.",
    ],
    whyItMatters:
      "A long-beaked coastal dolphin highly prone to net entanglement, the franciscana is a flagship for reducing bycatch in South American fisheries.",
    faq: [
      {
        question: "What is distinctive about the franciscana?",
        answer:
          "It has one of the longest, most slender beaks of any dolphin relative to its size, and lives in shallow coastal and estuarine waters rather than the open ocean.",
      },
      {
        question: "Why is the franciscana Vulnerable?",
        answer:
          "Published assessments cite entanglement in fishing nets as the leading threat, along with habitat degradation and pollution. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Dolphin profile", href: "/animals/dolphin" },
  },
  "przewalskis-horse": {
    summary: [
      "Przewalski's horse is the only truly wild horse never to have been fully domesticated, a stocky, dun-coloured horse of the Central Asian steppe. It is assessed as Endangered.",
      "It was once Extinct in the Wild and has been brought back through captive breeding and reintroduction to Mongolia.",
    ],
    whyItMatters:
      "The last wild horse and a flagship of the Mongolian steppe, Przewalski's horse is a landmark example of a species returned to the wild from captivity.",
    faq: [
      {
        question: "Is Przewalski's horse just a feral domestic horse?",
        answer:
          "No. Unlike mustangs or brumbies (feral domestic horses), Przewalski's horse is a distinct wild horse that was never fully domesticated, and it even has a different chromosome count from the domestic horse.",
      },
      {
        question: "How was Przewalski's horse saved?",
        answer:
          "It died out in the wild in the 20th century, surviving only in zoos; descendants of those animals have since been reintroduced to Mongolia, lifting it from Extinct in the Wild to Endangered. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Horse profile", href: "/animals/horse" },
  },
  "galapagos-giant-tortoise": {
    summary: [
      "The Galápagos giant tortoise is among the largest tortoises in the world and can live well over a century. The complex of forms is generally assessed as Vulnerable, with some island populations more imperilled.",
      "Different islands evolved distinct shell shapes, which helped inspire ideas about evolution.",
    ],
    whyItMatters:
      "An icon of the Galápagos and of evolutionary science, the giant tortoise is a flagship for island restoration and the removal of introduced species.",
    faq: [
      {
        question: "How long do Galápagos giant tortoises live?",
        answer:
          "They are among the longest-lived land animals, frequently living over 100 years, and some captive individuals have reached well beyond that.",
      },
      {
        question: "Why are Galápagos tortoises important to science?",
        answer:
          "The way shell shape and size vary between islands helped inform early ideas about how species adapt to local conditions — a cornerstone of evolutionary thinking. See the IUCN Red List for conservation status.",
      },
    ],
    relatedAnimal: { label: "Tortoise profile", href: "/animals/tortoise" },
  },
  "sumatran-tiger": {
    summary: [
      "The Sumatran tiger is the smallest living tiger subspecies and the only one surviving in the Indonesian islands. It is assessed as Critically Endangered.",
      "It lives in dwindling rainforest and is darker and more closely striped than mainland tigers.",
    ],
    whyItMatters:
      "The last of Indonesia's island tigers, the Sumatran tiger is a flagship for protecting Sumatra's rapidly shrinking rainforests.",
    faq: [
      {
        question: "How is the Sumatran tiger different from other tigers?",
        answer:
          "It is the smallest tiger subspecies, with darker fur and narrower, more closely set stripes — adaptations to its dense island rainforest. The Bali and Javan tigers, also island tigers, are already extinct.",
      },
      {
        question: "Why is the Sumatran tiger Critically Endangered?",
        answer:
          "Published assessments cite poaching for skins and body parts, deforestation including for palm oil, and conflict with people. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Tiger profile", href: "/animals/tiger" },
  },
  "sumatran-elephant": {
    summary: [
      "The Sumatran elephant is a subspecies of the Asian elephant found only on Sumatra. It is assessed as Critically Endangered.",
      "It has lost much of its lowland forest home to rapid land conversion.",
    ],
    whyItMatters:
      "A forest elephant that disperses seeds across Sumatra, the Sumatran elephant is a flagship for keeping the island's lowland forests intact and connected.",
    faq: [
      {
        question: "How is the Sumatran elephant different from other Asian elephants?",
        answer:
          "It is a subspecies of the Asian elephant, generally smaller and restricted to the island of Sumatra, where it has suffered especially severe habitat loss.",
      },
      {
        question: "Why is the Sumatran elephant Critically Endangered?",
        answer:
          "Published assessments cite the loss of lowland forest to plantations, conflict with people, and habitat fragmentation. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Elephant profile", href: "/animals/elephant" },
  },
  "cross-river-gorilla": {
    summary: [
      "The Cross River gorilla is the rarest gorilla, a subspecies of the western gorilla found only on the Nigeria-Cameroon border. It is assessed as Critically Endangered.",
      "Only a few hundred are thought to remain, in scattered groups.",
    ],
    whyItMatters:
      "The most threatened of all gorillas, the Cross River gorilla is a flagship for protecting and connecting the forests of the Nigeria-Cameroon highlands.",
    faq: [
      {
        question: "How many Cross River gorillas are left?",
        answer:
          "Only a few hundred are thought to survive, scattered across forested hills on the Nigeria-Cameroon border, making it the rarest of the gorilla subspecies.",
      },
      {
        question: "Why is the Cross River gorilla Critically Endangered?",
        answer:
          "Published assessments cite poaching, habitat loss and fragmentation, and its very small population. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Gorilla profile", href: "/animals/gorilla" },
  },
  "temmincks-pangolin": {
    summary: [
      "Temminck's pangolin (the ground pangolin) is a scale-covered, ant- and termite-eating mammal of African savannas. It is assessed as Vulnerable.",
      "Like all pangolins it rolls into an armoured ball when threatened and is heavily trafficked.",
    ],
    whyItMatters:
      "An African pangolin caught up in the global trafficking crisis, Temminck's pangolin is a flagship against the illegal wildlife trade.",
    faq: [
      {
        question: "Why are pangolins so heavily trafficked?",
        answer:
          "They are hunted for their keratin scales (used in some traditional medicines) and for meat, which has made pangolins among the most trafficked wild mammals on Earth.",
      },
      {
        question: "Why is Temminck's pangolin Vulnerable?",
        answer:
          "Published assessments cite poaching and trafficking, electrocution on electric fences, and habitat loss. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Pangolin profile", href: "/animals/pangolin" },
  },
  "takahe": {
    summary: [
      "The takahe is a large, flightless, brilliantly blue-green rail of New Zealand. It is assessed as Endangered.",
      "It was thought extinct for decades before being rediscovered in 1948.",
    ],
    whyItMatters:
      "A flightless bird brought back from presumed extinction, the takahe is a celebrated New Zealand recovery story and a flagship for predator control.",
    faq: [
      {
        question: "Was the takahe really thought extinct?",
        answer:
          "Yes. It was believed extinct for around 50 years until a population was famously rediscovered in a remote South Island valley in 1948, prompting intensive conservation.",
      },
      {
        question: "Why is the takahe Endangered?",
        answer:
          "Published assessments cite introduced predators such as stoats, competition with introduced deer for food, and its small population, though careful management has helped numbers grow. See the IUCN Red List.",
      },
    ],
  },
  "baiji": {
    summary: [
      "The baiji, or Yangtze river dolphin, was a pale freshwater dolphin of China's Yangtze River. It is assessed as Critically Endangered (Possibly Extinct).",
      "It has not been reliably recorded since the early 2000s, and a major survey in 2006 failed to find any.",
    ],
    whyItMatters:
      "Likely the first dolphin driven to extinction by people, the baiji is a stark warning about the toll of fishing, dams, and pollution on great rivers.",
    faq: [
      {
        question: "Is the baiji extinct?",
        answer:
          "It is assessed as Critically Endangered (Possibly Extinct). It has not been reliably confirmed since the early 2000s, and a dedicated 2006 survey found none, leading many scientists to consider it functionally extinct.",
      },
      {
        question: "What happened to the baiji?",
        answer:
          "Published accounts cite drowning as bycatch in fishing gear, the impact of dams and intense river traffic, and pollution along the heavily developed Yangtze. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Dolphin profile", href: "/animals/dolphin" },
  },
  "dodo": {
    summary: [
      "The dodo was a large, flightless pigeon-relative of Mauritius that was driven to extinction in the late 17th century, within decades of human arrival. It is assessed as Extinct.",
      "It has become the world's best-known symbol of human-caused extinction.",
    ],
    whyItMatters:
      "The dodo is the defining emblem of extinction caused by people — a reminder of how quickly island species can vanish once humans and their animals arrive.",
    faq: [
      {
        question: "What was the dodo related to?",
        answer:
          "Despite its bulky look, the dodo was a member of the pigeon and dove family; its closest living relatives are pigeons. It had become large and flightless on a predator-free island.",
      },
      {
        question: "Why did the dodo go extinct?",
        answer:
          "Published accounts cite hunting by arriving sailors, introduced animals (pigs, rats, monkeys) eating its eggs and chicks, and habitat loss. It was gone within roughly a century of humans reaching Mauritius.",
      },
    ],
    relatedAnimal: { label: "Pigeon profile", href: "/animals/pigeon" },
  },
  "thylacine": {
    summary: [
      "The thylacine, or Tasmanian tiger, was a striped, dog-like marsupial carnivore of Tasmania. It is assessed as Extinct, with the last known individual dying in 1936.",
      "Despite its dog-like look, it was a marsupial that carried young in a pouch.",
    ],
    whyItMatters:
      "A marsupial predator hunted to extinction within living memory, the thylacine is a powerful symbol of preventable species loss.",
    faq: [
      {
        question: "Was the thylacine a tiger or a dog?",
        answer:
          "Neither. It was a carnivorous marsupial whose striped back earned it the name 'Tasmanian tiger' and whose shape recalled a dog — an example of unrelated animals evolving similar forms. It carried young in a pouch.",
      },
      {
        question: "When did the thylacine go extinct?",
        answer:
          "The last known thylacine died in a Hobart zoo in 1936, after decades of hunting, bounties, habitat loss, and disease. It is assessed as Extinct. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Tasmanian devil profile", href: "/animals/tasmanian-devil" },
  },
  "hirola": {
    summary: [
      "The hirola is a slender, sandy-coloured antelope of East Africa, the only living member of its genus. It is assessed as Critically Endangered.",
      "Pale 'spectacle' markings around its eyes give it the nickname 'four-eyed antelope'.",
    ],
    whyItMatters:
      "The sole survivor of an ancient antelope lineage, the hirola is a flagship for the threatened grasslands of the Kenya-Somalia border.",
    faq: [
      {
        question: "Why is the hirola called the 'four-eyed antelope'?",
        answer:
          "Pale markings and prominent preorbital scent glands below each eye create the impression of a second pair of eyes, giving rise to the nickname.",
      },
      {
        question: "Why is the hirola Critically Endangered?",
        answer:
          "Published assessments cite habitat loss and degradation, drought, and disease and predation acting on a very small population. See the IUCN Red List for the current assessment.",
      },
    ],
  },
  "aldabra-giant-tortoise": {
    summary: [
      "The Aldabra giant tortoise is one of the largest tortoises in the world and survives in large numbers on a single Indian Ocean atoll. It is assessed as Vulnerable.",
      "It is a long-lived grazer that shapes its island's vegetation.",
    ],
    whyItMatters:
      "One of only two surviving giant tortoise lineages on Earth, the Aldabra giant tortoise is a flagship for island conservation and a grazing 'ecosystem engineer'.",
    faq: [
      {
        question: "How is the Aldabra giant tortoise different from the Galápagos giant tortoise?",
        answer:
          "They are unrelated giant tortoises on opposite sides of the world: Aldabra in the Indian Ocean, Galápagos in the Pacific. Both reached great size on isolated islands, an example of island gigantism.",
      },
      {
        question: "Why is the Aldabra giant tortoise Vulnerable despite large numbers?",
        answer:
          "Almost the whole wild population lives on one atoll, so it is highly exposed to disasters and sea-level rise. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Tortoise profile", href: "/animals/tortoise" },
  },
  "giant-ground-pangolin": {
    summary: [
      "The giant ground pangolin is the largest of all pangolins, a scale-covered, ant- and termite-eating mammal of Africa. It is assessed as Endangered.",
      "Like all pangolins it rolls into an armoured ball when threatened and is heavily trafficked.",
    ],
    whyItMatters:
      "The biggest pangolin and, like its relatives, a major target of trafficking, the giant ground pangolin is a flagship against the illegal wildlife trade.",
    faq: [
      {
        question: "How big is the giant ground pangolin?",
        answer:
          "It is the largest pangolin species, substantially bigger than the others, though still a shy, slow-moving insect-eater.",
      },
      {
        question: "Why is the giant ground pangolin Endangered?",
        answer:
          "Published assessments cite poaching and trafficking for scales and meat, alongside habitat loss. Pangolins are among the most trafficked wild mammals. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Pangolin profile", href: "/animals/pangolin" },
  },
  "philippine-pangolin": {
    summary: [
      "The Philippine pangolin is a scale-covered ant-eater found only in the Palawan area of the Philippines. It is assessed as Critically Endangered.",
      "It is heavily targeted by traffickers despite its small, island-restricted range.",
    ],
    whyItMatters:
      "An island-endemic pangolin pushed to the brink by trafficking, the Philippine pangolin is a flagship for Philippine wildlife protection.",
    faq: [
      {
        question: "Where is the Philippine pangolin found?",
        answer:
          "Only in the Palawan region of the Philippines, giving it a small, island-restricted range that makes trafficking pressure especially damaging.",
      },
      {
        question: "Why is the Philippine pangolin Critically Endangered?",
        answer:
          "Published assessments cite poaching and trafficking, habitat loss, and its restricted range. See the IUCN Red List for the current assessment.",
      },
    ],
    relatedAnimal: { label: "Pangolin profile", href: "/animals/pangolin" },
  },
  "asiatic-cheetah": {
    summary: [
      "The Asiatic cheetah is a critically endangered cheetah subspecies that survives only in Iran, with only a few dozen thought to remain. It is assessed as Critically Endangered.",
      "It once ranged across South-West and Central Asia but is now confined to Iranian deserts.",
    ],
    whyItMatters:
      "The last cheetahs of Asia, reduced to a tiny Iranian population, are a flagship for arid-land conservation and a stark measure of the species' retreat.",
    faq: [
      {
        question: "How many Asiatic cheetahs are left?",
        answer:
          "Only a few dozen are thought to survive, all in Iran, making it one of the most endangered big cats in the world.",
      },
      {
        question: "How is the Asiatic cheetah different from African cheetahs?",
        answer:
          "It is a distinct subspecies that historically ranged across Asia; today it clings on only in Iran, while cheetahs elsewhere live in Africa. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Cheetah profile", href: "/animals/cheetah" },
  },
  "quagga": {
    summary: [
      "The quagga was a southern African zebra, striped only on the front half of its body, that was hunted to extinction in the 19th century. It is assessed as Extinct.",
      "The last known quagga died in an Amsterdam zoo in 1883.",
    ],
    whyItMatters:
      "Hunted out within a human lifetime, the quagga is a classic case of extinction by overhunting — and the inspiration for a selective-breeding project to recreate its look.",
    faq: [
      {
        question: "What did the quagga look like?",
        answer:
          "It was a zebra with bold stripes on its head and neck that faded into a plain brown rear, unlike the fully striped plains zebra. It is now considered a subspecies/population of the plains zebra.",
      },
      {
        question: "Is the quagga being brought back?",
        answer:
          "A South African project selectively breeds plains zebras for quagga-like reduced striping, but this recreates the appearance rather than reviving the exact extinct animal. The quagga itself is assessed as Extinct.",
      },
    ],
    relatedAnimal: { label: "Zebra profile", href: "/animals/zebra" },
  },
  "great-auk": {
    summary: [
      "The great auk was a large, flightless North Atlantic seabird that looked and lived much like a penguin. It is assessed as Extinct, with the last birds killed in 1844.",
      "It was hunted relentlessly for its meat, eggs, down, and oil.",
    ],
    whyItMatters:
      "A flightless seabird hunted to extinction, the great auk is a powerful early lesson in how relentless exploitation can erase even an abundant species.",
    faq: [
      {
        question: "Was the great auk a penguin?",
        answer:
          "No, but it strongly resembled one and even shared the name origin: it was a large, flightless, black-and-white North Atlantic seabird, an example of unrelated animals evolving similar forms.",
      },
      {
        question: "When and why did the great auk go extinct?",
        answer:
          "Published accounts cite relentless hunting for meat, eggs, down, and oil — and intensified collecting as it grew rare — with the last known birds killed in 1844.",
      },
    ],
  },
  "passenger-pigeon": {
    summary: [
      "The passenger pigeon was once possibly the most abundant bird on Earth, flying over North America in flocks of billions. It is assessed as Extinct.",
      "The last individual, named Martha, died at the Cincinnati Zoo in 1914.",
    ],
    whyItMatters:
      "From billions to none in decades, the passenger pigeon is the defining example of how even the most abundant species can be driven extinct by people.",
    faq: [
      {
        question: "How abundant was the passenger pigeon?",
        answer:
          "It is thought to have been one of the most numerous birds ever, with flocks of hundreds of millions to billions darkening the sky for hours as they passed.",
      },
      {
        question: "How did such an abundant bird go extinct?",
        answer:
          "Published accounts cite mass commercial hunting and the destruction of its forest habitat; its survival may also have depended on huge flocks, so once numbers fell it collapsed. The last bird died in 1914.",
      },
    ],
    relatedAnimal: { label: "Pigeon profile", href: "/animals/pigeon" },
  },
  "golden-toad": {
    summary: [
      "The golden toad was a tiny, brilliant orange toad of Costa Rica's Monteverde cloud forest. It is assessed as Extinct, last seen in 1989.",
      "Its sudden disappearance became a symbol of the global amphibian crisis.",
    ],
    whyItMatters:
      "Vanishing within a few years from a protected cloud forest, the golden toad is an emblem of the amphibian extinction crisis and of climate and disease pressures on wildlife.",
    faq: [
      {
        question: "Why is the golden toad so famous?",
        answer:
          "Its sudden disappearance from a seemingly protected cloud forest in the late 1980s became one of the first high-profile signs of a worldwide collapse of amphibian populations.",
      },
      {
        question: "What caused the golden toad's extinction?",
        answer:
          "Published accounts point to climate-linked drying of its breeding pools and disease, acting on a species with an extremely small range. It was last seen in 1989 and is assessed as Extinct.",
      },
    ],
    relatedAnimal: { label: "Toad profile", href: "/animals/toad" },
  },
  "western-black-rhinoceros": {
    summary: [
      "The western black rhinoceros was a subspecies of the black rhino found in west-central Africa. It was declared Extinct, with no confirmed sightings after the early 2000s.",
      "Relentless poaching for horn wiped out the last animals.",
    ],
    whyItMatters:
      "Declared extinct in 2011, the western black rhinoceros is a recent, stark reminder that poaching can erase even large, iconic animals within living memory.",
    faq: [
      {
        question: "When was the western black rhinoceros declared extinct?",
        answer:
          "It was declared Extinct in 2011 after surveys failed to find any survivors; it had not been reliably recorded since the early 2000s.",
      },
      {
        question: "What caused its extinction?",
        answer:
          "Published accounts cite relentless poaching for rhino horn and the failure of protection across its range. The black rhinoceros as a whole survives and is the subject of intensive conservation. See the IUCN Red List.",
      },
    ],
    relatedAnimal: { label: "Rhinoceros profile", href: "/animals/rhinoceros" },
  },
};
