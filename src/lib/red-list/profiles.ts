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
};
