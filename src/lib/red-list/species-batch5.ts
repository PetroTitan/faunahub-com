import type { RedListSpeciesRecord } from "./types";
import {
  adw,
  noaa,
  birdlife,
  fishbase,
  amphibiaweb,
  reptiledb,
  rec,
} from "./_builders";

/**
 * Red List Batch 5 — additional verified index records (controlled expansion
 * toward the 600 milestone). Same compliance posture as earlier batches:
 * confident, widely published IUCN categories; every sourceUrl confirmed
 * reachable; no invented status/numbers/trends/threats/ranges/taxonomy. Region
 * assignments live in regions.ts. All records are index-only.
 */
export const RED_LIST_SPECIES_BATCH5: readonly RedListSpeciesRecord[] = [
  // ===========================================================================
  // MAMMALS
  // ===========================================================================
  rec({ slug: "hainan-gibbon", commonName: "Hainan Gibbon", scientificName: "Nomascus hainanus", taxonGroup: "mammals", redListCategory: "CR",
    populationTrend: "stable",
    rangeSummary:
      "A single forest reserve on Hainan Island, China.",
    primaryThreats: [
      "An extremely small population in one location",
      "Past habitat loss",
      "Vulnerability to disasters",
    ], sourceUrls: [adw("Nomascus_hainanus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned", notes: "Often cited as the world's rarest ape." }),
  rec({ slug: "western-hoolock-gibbon", commonName: "Western Hoolock Gibbon", scientificName: "Hoolock hoolock", taxonGroup: "mammals", redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "Forests of north-eastern India, Bangladesh, and western Myanmar.",
    primaryThreats: [
      "Deforestation and fragmentation",
      "Hunting",
      "Capture",
    ], sourceUrls: [adw("Bunopithecus_hoolock")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned", notes: "Reference uses the former genus Bunopithecus." }),
  rec({ slug: "pileated-gibbon", commonName: "Pileated Gibbon", scientificName: "Hylobates pileatus", taxonGroup: "mammals", redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "Forests of Cambodia, Laos, Thailand, and Vietnam.",
    primaryThreats: [
      "Deforestation",
      "Hunting",
      "Capture for the pet trade",
    ], sourceUrls: [adw("Hylobates_pileatus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "drill", commonName: "Drill", scientificName: "Mandrillus leucophaeus", taxonGroup: "mammals", redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "Forests of Cameroon, Nigeria, and Bioko Island (Equatorial Guinea).",
    primaryThreats: [
      "Hunting for bushmeat",
      "Habitat loss",
      "Fragmentation",
    ], sourceUrls: [adw("Mandrillus_leucophaeus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "mandrill", commonName: "Mandrill", scientificName: "Mandrillus sphinx", taxonGroup: "mammals", redListCategory: "VU",
    populationTrend: "decreasing",
    rangeSummary:
      "Rainforests of west-central Africa, including Cameroon, Gabon, and the Congo.",
    primaryThreats: [
      "Hunting for bushmeat",
      "Habitat loss",
      "Fragmentation",
    ], sourceUrls: [adw("Mandrillus_sphinx")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "has-image" }),
  rec({ slug: "barbary-macaque", commonName: "Barbary Macaque", scientificName: "Macaca sylvanus", taxonGroup: "mammals", redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "Mountain forests of Morocco and Algeria, with a famous introduced group on Gibraltar.",
    primaryThreats: [
      "Capture for the illegal pet trade",
      "Habitat loss and overgrazing",
      "Conflict with people",
    ], sourceUrls: [adw("Macaca_sylvanus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "has-image" }),
  rec({ slug: "geoffroys-spider-monkey", commonName: "Geoffroy's Spider Monkey", scientificName: "Ateles geoffroyi", taxonGroup: "mammals", redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "Forests of Central America and far northern South America.",
    primaryThreats: [
      "Deforestation",
      "Hunting",
      "Fragmentation",
    ], sourceUrls: [adw("Ateles_geoffroyi")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "brown-spider-monkey", commonName: "Brown Spider Monkey", scientificName: "Ateles hybridus", taxonGroup: "mammals", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Forests of northern Colombia and north-western Venezuela.",
    primaryThreats: [
      "Deforestation",
      "Hunting",
      "Capture for the pet trade",
    ], sourceUrls: [adw("Ateles_hybridus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "red-shanked-douc", commonName: "Red-shanked Douc", scientificName: "Pygathrix nemaeus", taxonGroup: "mammals", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Forests of Vietnam, Laos, and Cambodia.",
    primaryThreats: [
      "Hunting",
      "Habitat loss",
      "Capture for trade",
    ], sourceUrls: [adw("Pygathrix_nemaeus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "has-image" }),
  rec({ slug: "verreauxs-sifaka", commonName: "Verreaux's Sifaka", scientificName: "Propithecus verreauxi", taxonGroup: "mammals", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Dry forests and spiny thickets of southern and south-western Madagascar.",
    primaryThreats: [
      "Deforestation and slash-and-burn agriculture",
      "Hunting in places",
      "Drought",
    ], sourceUrls: [adw("Propithecus_verreauxi")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "has-image" }),
  rec({ slug: "greater-bamboo-lemur", commonName: "Greater Bamboo Lemur", scientificName: "Prolemur simus", taxonGroup: "mammals", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Rainforests of south-eastern Madagascar.",
    primaryThreats: [
      "Loss of bamboo forest",
      "Slash-and-burn agriculture",
      "Hunting",
    ], sourceUrls: [adw("Prolemur_simus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "pygmy-slow-loris", commonName: "Pygmy Slow Loris", scientificName: "Xanthonycticebus pygmaeus", taxonGroup: "mammals", redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "Forests of Vietnam, Laos, Cambodia, and southern China.",
    primaryThreats: [
      "Capture for the pet and traditional-medicine trade",
      "Habitat loss",
    ], sourceUrls: [adw("Nycticebus_pygmaeus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned", notes: "Recently moved to the genus Xanthonycticebus; the linked reference uses the former Nycticebus name." }),
  rec({ slug: "tonkin-snub-nosed-monkey", commonName: "Tonkin Snub-nosed Monkey", scientificName: "Rhinopithecus avunculus", taxonGroup: "mammals", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "A small area of forest in northern Vietnam.",
    primaryThreats: [
      "Hunting",
      "Habitat loss and fragmentation",
      "A tiny population",
    ], sourceUrls: [adw("Rhinopithecus_avunculus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "black-footed-cat", commonName: "Black-footed Cat", scientificName: "Felis nigripes", taxonGroup: "mammals", redListCategory: "VU",
    populationTrend: "decreasing",
    rangeSummary:
      "Dry grasslands and scrub of southern Africa.",
    primaryThreats: [
      "Habitat degradation",
      "Indirect poisoning and persecution",
      "Loss of prey",
    ], sourceUrls: [adw("Felis_nigripes")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "has-image" }),
  rec({ slug: "flat-headed-cat", commonName: "Flat-headed Cat", scientificName: "Prionailurus planiceps", taxonGroup: "mammals", redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "Wetlands and lowland forests of the Malay Peninsula, Sumatra, and Borneo.",
    primaryThreats: [
      "Destruction of lowland wetlands",
      "Water pollution",
      "Reduced fish stocks",
    ], sourceUrls: [adw("Prionailurus_planiceps")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "darwins-fox", commonName: "Darwin's Fox", scientificName: "Lycalopex fulvipes", taxonGroup: "mammals", redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "Forests of Chile, including Chiloe Island and a mainland population.",
    primaryThreats: [
      "A small, fragmented population",
      "Disease and attacks from domestic dogs",
      "Habitat loss",
    ], sourceUrls: [adw("Lycalopex_fulvipes")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "fossa", commonName: "Fossa", scientificName: "Cryptoprocta ferox", taxonGroup: "mammals", redListCategory: "VU",
    populationTrend: "decreasing",
    rangeSummary:
      "Forests across Madagascar.",
    primaryThreats: [
      "Deforestation",
      "Persecution as a livestock predator",
      "Fragmentation",
    ], sourceUrls: [adw("Cryptoprocta_ferox")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "has-image", notes: "Madagascar's largest carnivore." }),
  rec({ slug: "north-pacific-right-whale", commonName: "North Pacific Right Whale", scientificName: "Eubalaena japonica", taxonGroup: "mammals", redListCategory: "EN",
    populationTrend: "stable",
    rangeSummary:
      "The North Pacific, with a tiny eastern population in the Bering Sea and Gulf of Alaska.",
    primaryThreats: [
      "Past whaling (including illegal catches)",
      "Ship strikes",
      "Entanglement",
    ], sourceUrls: [noaa("north-pacific-right-whale")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "hectors-dolphin", commonName: "Hector's Dolphin", scientificName: "Cephalorhynchus hectori", taxonGroup: "mammals", redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "Coastal waters of New Zealand.",
    primaryThreats: [
      "Entanglement in fishing nets",
      "A small, fragmented population",
      "Disease and disturbance",
    ], sourceUrls: [adw("Cephalorhynchus_hectori")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned", notes: "The Maui dolphin sub-population is assessed at even higher risk." }),
  rec({ slug: "franciscana", commonName: "Franciscana", scientificName: "Pontoporia blainvillei", taxonGroup: "mammals", redListCategory: "VU",
    populationTrend: "decreasing",
    rangeSummary:
      "Coastal waters of south-eastern South America (Brazil, Uruguay, Argentina).",
    primaryThreats: [
      "Entanglement in fishing nets (bycatch)",
      "Habitat degradation",
      "Pollution",
    ], sourceUrls: [adw("Pontoporia_blainvillei")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "indus-river-dolphin", commonName: "Indus River Dolphin", scientificName: "Platanista minor", taxonGroup: "mammals", redListCategory: "EN",
    populationTrend: "increasing",
    rangeSummary:
      "The Indus River system of Pakistan and India.",
    primaryThreats: [
      "Dams and barrages fragmenting the river",
      "Bycatch",
      "Reduced water flow and pollution",
    ], sourceUrls: [adw("Platanista_minor")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "grey-headed-flying-fox", commonName: "Grey-headed Flying Fox", scientificName: "Pteropus poliocephalus", taxonGroup: "mammals", redListCategory: "VU",
    populationTrend: "decreasing",
    rangeSummary:
      "Forests and urban areas of eastern Australia.",
    primaryThreats: [
      "Habitat loss",
      "Heat-stress die-offs",
      "Conflict and persecution",
    ], sourceUrls: [adw("Pteropus_poliocephalus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "has-image" }),
  rec({ slug: "scimitar-horned-oryx", commonName: "Scimitar-horned Oryx", scientificName: "Oryx dammah", taxonGroup: "mammals", redListCategory: "EN",
    populationTrend: "increasing",
    rangeSummary:
      "The Sahel region of North Africa; reintroduced to Chad after being lost in the wild.",
    primaryThreats: [
      "Past overhunting",
      "Drought and habitat loss",
      "Small reintroduced population",
    ], sourceUrls: [adw("Oryx_dammah")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "has-image", notes: "Formerly Extinct in the Wild; reassessed Endangered in 2023 following reintroduction in Chad." }),
  rec({ slug: "dama-gazelle", commonName: "Dama Gazelle", scientificName: "Nanger dama", taxonGroup: "mammals", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "The Sahara and Sahel of North Africa, now in tiny remnant populations.",
    primaryThreats: [
      "Uncontrolled hunting",
      "Habitat loss and drought",
      "A tiny, fragmented population",
    ], sourceUrls: [adw("Nanger_dama")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "mountain-tapir", commonName: "Mountain Tapir", scientificName: "Tapirus pinchaque", taxonGroup: "mammals", redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "High Andean cloud forests and paramo of Colombia, Ecuador, and Peru.",
    primaryThreats: [
      "Habitat loss to agriculture",
      "Hunting",
      "A fragmented range",
    ], sourceUrls: [adw("Tapirus_pinchaque")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "has-image" }),
  rec({ slug: "malayan-tapir", commonName: "Malayan Tapir", scientificName: "Tapirus indicus", taxonGroup: "mammals", redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "Forests of the Malay Peninsula and Sumatra.",
    primaryThreats: [
      "Deforestation",
      "Roads and vehicle collisions",
      "Hunting",
    ], sourceUrls: [adw("Tapirus_indicus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "has-image" }),
  rec({ slug: "pere-davids-deer", commonName: "Père David's Deer", scientificName: "Elaphurus davidianus", taxonGroup: "mammals", redListCategory: "EW",
    populationTrend: "increasing",
    rangeSummary:
      "Native to China; survives in managed and reintroduced herds after being lost in the wild.",
    primaryThreats: [
      "Historical loss of wild habitat",
      "Past near-total loss",
      "Dependence on managed populations",
    ], sourceUrls: [adw("Elaphurus_davidianus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "has-image", notes: "Listed Extinct in the Wild; survives in managed and reintroduced herds in China." }),
  rec({ slug: "greater-bilby", commonName: "Greater Bilby", scientificName: "Macrotis lagotis", taxonGroup: "mammals", redListCategory: "VU",
    populationTrend: "decreasing",
    rangeSummary:
      "Arid and semi-arid Australia, in a much-reduced range.",
    primaryThreats: [
      "Introduced foxes and cats",
      "Competition from rabbits and livestock",
      "Habitat change",
    ], sourceUrls: [adw("Macrotis_lagotis")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "has-image" }),

  // ===========================================================================
  // BIRDS (BirdLife International DataZone)
  // ===========================================================================
  rec({ slug: "hooded-crane", commonName: "Hooded Crane", scientificName: "Grus monacha", taxonGroup: "birds", redListCategory: "VU",
    populationTrend: "decreasing",
    rangeSummary:
      "Breeds in Siberia and China and winters mainly in Japan and Korea.",
    primaryThreats: [
      "Loss of wetlands",
      "Concentration at few wintering sites",
      "Disturbance and disease risk",
    ], sourceUrls: [birdlife("hooded-crane-grus-monacha")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "white-naped-crane", commonName: "White-naped Crane", scientificName: "Antigone vipio", taxonGroup: "birds", redListCategory: "VU",
    populationTrend: "decreasing",
    rangeSummary:
      "Breeds in north-east Asia and winters in China, Korea, and Japan.",
    primaryThreats: [
      "Loss and drainage of wetlands",
      "Disturbance",
      "Dependence on a few key sites",
    ], sourceUrls: [birdlife("white-naped-crane-grus-vipio")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "sarus-crane", commonName: "Sarus Crane", scientificName: "Antigone antigone", taxonGroup: "birds", redListCategory: "VU",
    populationTrend: "decreasing",
    rangeSummary:
      "Wetlands and farmland of South Asia, Southeast Asia, and northern Australia.",
    primaryThreats: [
      "Loss and drainage of wetlands",
      "Collisions and poisoning",
      "Agricultural change",
    ], sourceUrls: [birdlife("sarus-crane-grus-antigone")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "has-image" }),
  rec({ slug: "wattled-crane", commonName: "Wattled Crane", scientificName: "Bugeranus carunculatus", taxonGroup: "birds", redListCategory: "VU",
    populationTrend: "decreasing",
    rangeSummary:
      "Wetlands of sub-Saharan Africa, with a stronghold in south-central Africa.",
    primaryThreats: [
      "Loss and alteration of wetlands",
      "Dams and changed water flow",
      "Disturbance",
    ], sourceUrls: [birdlife("wattled-crane-bugeranus-carunculatus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "red-headed-vulture", commonName: "Red-headed Vulture", scientificName: "Sarcogyps calvus", taxonGroup: "birds", redListCategory: "CR",
    populationTrend: "stable",
    rangeSummary:
      "South and Southeast Asia.",
    primaryThreats: [
      "Poisoning, including veterinary drugs in carcasses",
      "Reduced food",
      "Habitat change",
    ], sourceUrls: [birdlife("red-headed-vulture-sarcogyps-calvus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "slender-billed-vulture", commonName: "Slender-billed Vulture", scientificName: "Gyps tenuirostris", taxonGroup: "birds", redListCategory: "CR",
    populationTrend: "stable",
    rangeSummary:
      "South and Southeast Asia.",
    primaryThreats: [
      "Poisoning, including veterinary drugs in carcasses",
      "Reduced food",
      "Habitat change",
    ], sourceUrls: [birdlife("slender-billed-vulture-gyps-tenuirostris")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "cape-vulture", commonName: "Cape Vulture", scientificName: "Gyps coprotheres", taxonGroup: "birds", redListCategory: "VU",
    populationTrend: "stable",
    rangeSummary:
      "Southern Africa.",
    primaryThreats: [
      "Poisoning",
      "Collisions and electrocution on power lines",
      "Reduced food and disturbance",
    ], sourceUrls: [birdlife("cape-vulture-gyps-coprotheres")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "has-image" }),
  rec({ slug: "spanish-imperial-eagle", commonName: "Spanish Imperial Eagle", scientificName: "Aquila adalberti", taxonGroup: "birds", redListCategory: "VU",
    populationTrend: "increasing",
    rangeSummary:
      "The Iberian Peninsula (Spain and Portugal).",
    primaryThreats: [
      "Electrocution on power lines",
      "Poisoning",
      "Past loss of its rabbit prey",
    ], sourceUrls: [birdlife("spanish-imperial-eagle-aquila-adalberti")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "has-image" }),
  rec({ slug: "eastern-imperial-eagle", commonName: "Eastern Imperial Eagle", scientificName: "Aquila heliaca", taxonGroup: "birds", redListCategory: "VU",
    populationTrend: "decreasing",
    rangeSummary:
      "Steppe and open country from south-eastern Europe across Central Asia.",
    primaryThreats: [
      "Electrocution on power lines",
      "Poisoning",
      "Habitat loss and persecution",
    ], sourceUrls: [birdlife("eastern-imperial-eagle-aquila-heliaca")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "red-fronted-macaw", commonName: "Red-fronted Macaw", scientificName: "Ara rubrogenys", taxonGroup: "birds", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "A small area of dry inter-Andean valleys in Bolivia.",
    primaryThreats: [
      "Trapping for the pet trade",
      "Persecution as a crop pest",
      "A very small range",
    ], sourceUrls: [birdlife("red-fronted-macaw-ara-rubrogenys")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "military-macaw", commonName: "Military Macaw", scientificName: "Ara militaris", taxonGroup: "birds", redListCategory: "VU",
    populationTrend: "decreasing",
    rangeSummary:
      "Scattered forests from Mexico through Central America to South America.",
    primaryThreats: [
      "Trapping for the pet trade",
      "Habitat loss",
      "Fragmentation",
    ], sourceUrls: [birdlife("military-macaw-ara-militaris")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "has-image" }),
  rec({ slug: "golden-parakeet", commonName: "Golden Parakeet", scientificName: "Guaruba guarouba", taxonGroup: "birds", redListCategory: "VU",
    populationTrend: "decreasing",
    rangeSummary:
      "Lowland Amazon rainforest of northern Brazil.",
    primaryThreats: [
      "Trapping for the pet trade",
      "Deforestation",
    ], sourceUrls: [birdlife("golden-parakeet-guaruba-guarouba")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "philippine-cockatoo", commonName: "Philippine Cockatoo", scientificName: "Cacatua haematuropygia", taxonGroup: "birds", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Islands of the Philippines.",
    primaryThreats: [
      "Trapping for the cage-bird trade",
      "Habitat loss including mangroves",
    ], sourceUrls: [birdlife("philippine-cockatoo-cacatua-haematuropygia")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "northern-rockhopper-penguin", commonName: "Northern Rockhopper Penguin", scientificName: "Eudyptes moseleyi", taxonGroup: "birds", redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "A few remote islands in the South Atlantic and southern Indian Oceans.",
    primaryThreats: [
      "Changes in food supply",
      "Ocean change",
      "Past exploitation and disturbance",
    ], sourceUrls: [birdlife("northern-rockhopper-penguin-eudyptes-moseleyi")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "macaroni-penguin", commonName: "Macaroni Penguin", scientificName: "Eudyptes chrysolophus", taxonGroup: "birds", redListCategory: "VU",
    populationTrend: "decreasing",
    rangeSummary:
      "Sub-Antarctic islands and the Antarctic Peninsula.",
    primaryThreats: [
      "Changes in prey (krill and fish) availability",
      "Ocean change",
      "Disturbance",
    ], sourceUrls: [birdlife("macaroni-penguin-eudyptes-chrysolophus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "has-image" }),
  rec({ slug: "erect-crested-penguin", commonName: "Erect-crested Penguin", scientificName: "Eudyptes sclateri", taxonGroup: "birds", redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "Breeds on the remote Bounty and Antipodes Islands south of New Zealand.",
    primaryThreats: [
      "Ocean change affecting food",
      "A tiny breeding range",
      "Disturbance",
    ], sourceUrls: [birdlife("erect-crested-penguin-eudyptes-sclateri")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "fiordland-penguin", commonName: "Fiordland Penguin", scientificName: "Eudyptes pachyrhynchus", taxonGroup: "birds", redListCategory: "VU",
    populationTrend: "decreasing",
    rangeSummary:
      "Forested coasts of south-western New Zealand and nearby islands.",
    primaryThreats: [
      "Introduced predators",
      "Disturbance",
      "Ocean change",
    ], sourceUrls: [birdlife("fiordland-penguin-eudyptes-pachyrhynchus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "tristan-albatross", commonName: "Tristan Albatross", scientificName: "Diomedea dabbenena", taxonGroup: "birds", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Breeds almost entirely on Gough Island in the South Atlantic.",
    primaryThreats: [
      "Introduced house mice that attack chicks",
      "Longline fishing bycatch",
      "A single main breeding site",
    ], sourceUrls: [birdlife("tristan-albatross-diomedea-dabbenena")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "waved-albatross", commonName: "Waved Albatross", scientificName: "Phoebastria irrorata", taxonGroup: "birds", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Breeds almost entirely on Espanola Island in the Galapagos and forages off South America.",
    primaryThreats: [
      "Longline fishing bycatch",
      "A single main breeding site",
      "Disturbance and disease",
    ], sourceUrls: [birdlife("waved-albatross-phoebastria-irrorata")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "short-tailed-albatross", commonName: "Short-tailed Albatross", scientificName: "Phoebastria albatrus", taxonGroup: "birds", redListCategory: "VU",
    populationTrend: "increasing",
    rangeSummary:
      "The North Pacific, breeding on a few islands off Japan.",
    primaryThreats: [
      "Past feather hunting (now recovering)",
      "Volcanic risk at key colony",
      "Longline bycatch and plastic",
    ], sourceUrls: [birdlife("short-tailed-albatross-phoebastria-albatrus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "giant-ibis", commonName: "Giant Ibis", scientificName: "Thaumatibis gigantea", taxonGroup: "birds", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Lowland forests and wetlands of northern Cambodia and adjacent areas.",
    primaryThreats: [
      "Habitat loss and drainage",
      "Hunting and disturbance",
      "A tiny population",
    ], sourceUrls: [birdlife("giant-ibis-thaumatibis-gigantea")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "northern-bald-ibis", commonName: "Northern Bald Ibis", scientificName: "Geronticus eremita", taxonGroup: "birds", redListCategory: "EN",
    populationTrend: "increasing",
    rangeSummary:
      "North Africa and the Middle East, with reintroduced populations in Europe.",
    primaryThreats: [
      "Past hunting and habitat loss",
      "Pesticides and disturbance",
      "A small population",
    ], sourceUrls: [birdlife("northern-bald-ibis-geronticus-eremita")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "bengal-florican", commonName: "Bengal Florican", scientificName: "Houbaropsis bengalensis", taxonGroup: "birds", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Grasslands of the Indian subcontinent and Southeast Asia.",
    primaryThreats: [
      "Loss and conversion of grassland",
      "Disturbance and collisions",
      "A tiny population",
    ], sourceUrls: [birdlife("bengal-florican-houbaropsis-bengalensis")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "forest-owlet", commonName: "Forest Owlet", scientificName: "Athene blewitti", taxonGroup: "birds", redListCategory: "EN",
    populationTrend: "stable",
    rangeSummary:
      "Forests of central India.",
    primaryThreats: [
      "Habitat loss and degradation",
      "A small, fragmented range",
      "Disturbance",
    ], sourceUrls: [birdlife("forest-owlet-athene-blewitti")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "kagu", commonName: "Kagu", scientificName: "Rhynochetos jubatus", taxonGroup: "birds", redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "The forests of New Caledonia in the South Pacific.",
    primaryThreats: [
      "Introduced predators (dogs, cats, rats, pigs)",
      "Habitat loss",
      "A small range",
    ], sourceUrls: [birdlife("kagu-rhynochetos-jubatus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "has-image" }),
  rec({ slug: "junin-grebe", commonName: "Junín Grebe", scientificName: "Podiceps taczanowskii", taxonGroup: "birds", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Lake Junin in the high Andes of Peru.",
    primaryThreats: [
      "Pollution from mining",
      "Fluctuating water levels",
      "A single-lake range",
    ], sourceUrls: [birdlife("junin-grebe-podiceps-taczanowskii")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),

  // ===========================================================================
  // REPTILES & AMPHIBIANS
  // ===========================================================================
  rec({ slug: "tomistoma", commonName: "Tomistoma", scientificName: "Tomistoma schlegelii", taxonGroup: "reptiles-amphibians", redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "Freshwater swamps and rivers of the Malay Peninsula, Sumatra, and Borneo.",
    primaryThreats: [
      "Habitat loss including peat-swamp drainage",
      "Fishing-net entanglement",
      "Egg collection",
    ], sourceUrls: [reptiledb("Tomistoma", "schlegelii")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "yangtze-giant-softshell-turtle", commonName: "Yangtze Giant Softshell Turtle", scientificName: "Rafetus swinhoei", taxonGroup: "reptiles-amphibians", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "The Yangtze and Red River regions of China and Vietnam.",
    primaryThreats: [
      "An extremely small number of known individuals",
      "Past hunting and habitat loss",
      "Failed reproduction",
    ], sourceUrls: [reptiledb("Rafetus", "swinhoei")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned", notes: "Among the rarest turtles on Earth." }),
  rec({ slug: "burmese-roofed-turtle", commonName: "Burmese Roofed Turtle", scientificName: "Batagur trivittata", taxonGroup: "reptiles-amphibians", redListCategory: "CR",
    populationTrend: "increasing",
    rangeSummary:
      "Rivers of Myanmar.",
    primaryThreats: [
      "Past egg collection and hunting",
      "Habitat change",
      "A tiny wild population",
    ], sourceUrls: [reptiledb("Batagur", "trivittata")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "central-american-river-turtle", commonName: "Central American River Turtle", scientificName: "Dermatemys mawii", taxonGroup: "reptiles-amphibians", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Rivers and lakes of southern Mexico and northern Central America.",
    primaryThreats: [
      "Hunting for meat and eggs",
      "Habitat loss",
      "A largely aquatic life that makes it easy to net",
    ], sourceUrls: [reptiledb("Dermatemys", "mawii")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "bog-turtle", commonName: "Bog Turtle", scientificName: "Glyptemys muhlenbergii", taxonGroup: "reptiles-amphibians", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Wetlands of the eastern United States.",
    primaryThreats: [
      "Loss and drainage of wetlands",
      "Collection for the pet trade",
      "Invasive plants",
    ], sourceUrls: [reptiledb("Glyptemys", "muhlenbergii")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "spider-tortoise", commonName: "Spider Tortoise", scientificName: "Pyxis arachnoides", taxonGroup: "reptiles-amphibians", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Dry spiny forest of south-western Madagascar.",
    primaryThreats: [
      "Habitat loss to agriculture and charcoal",
      "Collection for food and the pet trade",
      "A shrinking range",
    ], sourceUrls: [reptiledb("Pyxis", "arachnoides")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "chinese-crocodile-lizard", commonName: "Chinese Crocodile Lizard", scientificName: "Shinisaurus crocodilurus", taxonGroup: "reptiles-amphibians", redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "Streams and forests of southern China and northern Vietnam.",
    primaryThreats: [
      "Collection for the pet trade",
      "Habitat loss",
      "Pollution",
    ], sourceUrls: [reptiledb("Shinisaurus", "crocodilurus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "round-island-keel-scaled-boa", commonName: "Round Island Keel-scaled Boa", scientificName: "Casarea dussumieri", taxonGroup: "reptiles-amphibians", redListCategory: "EN",
    populationTrend: "increasing",
    rangeSummary:
      "Round Island, off Mauritius in the Indian Ocean.",
    primaryThreats: [
      "Past habitat damage by introduced goats and rabbits",
      "A tiny island range",
      "Vulnerability of a small population",
    ], sourceUrls: [reptiledb("Casarea", "dussumieri")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "aruba-island-rattlesnake", commonName: "Aruba Island Rattlesnake", scientificName: "Crotalus unicolor", taxonGroup: "reptiles-amphibians", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "The island of Aruba in the Caribbean.",
    primaryThreats: [
      "Habitat loss to development",
      "A tiny range",
      "Persecution and road deaths",
    ], sourceUrls: [reptiledb("Crotalus", "unicolor")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "slender-snouted-crocodile", commonName: "West African Slender-snouted Crocodile", scientificName: "Mecistops cataphractus", taxonGroup: "reptiles-amphibians", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Rivers and forests of West and Central Africa.",
    primaryThreats: [
      "Hunting and bycatch",
      "Habitat loss",
      "A declining population",
    ], sourceUrls: [reptiledb("Mecistops", "cataphractus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "houston-toad", commonName: "Houston Toad", scientificName: "Anaxyrus houstonensis", taxonGroup: "reptiles-amphibians", redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "A few areas of eastern Texas, USA.",
    primaryThreats: [
      "Habitat loss and fragmentation",
      "Drought and altered fire regimes",
      "A tiny, fragmented population",
    ], sourceUrls: [amphibiaweb("Anaxyrus", "houstonensis")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "yosemite-toad", commonName: "Yosemite Toad", scientificName: "Anaxyrus canorus", taxonGroup: "reptiles-amphibians", redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "High meadows of the Sierra Nevada in California, USA.",
    primaryThreats: [
      "Disease",
      "Habitat change and drought",
      "Past grazing and pesticides drifting from farmland",
    ], sourceUrls: [amphibiaweb("Anaxyrus", "canorus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "dusky-gopher-frog", commonName: "Dusky Gopher Frog", scientificName: "Lithobates sevosus", taxonGroup: "reptiles-amphibians", redListCategory: "CR",
    populationTrend: "stable",
    rangeSummary:
      "A tiny area of Mississippi in the southern United States.",
    primaryThreats: [
      "Loss of its breeding ponds and longleaf pine habitat",
      "A tiny population",
      "Disease",
    ], sourceUrls: [amphibiaweb("Lithobates", "sevosus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "darwins-frog", commonName: "Darwin's Frog", scientificName: "Rhinoderma darwinii", taxonGroup: "reptiles-amphibians", redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "Forest streams of southern Chile and Argentina.",
    primaryThreats: [
      "The amphibian fungal disease chytridiomycosis",
      "Habitat loss",
      "Fragmentation",
    ], sourceUrls: [amphibiaweb("Rhinoderma", "darwinii")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "lake-oku-clawed-frog", commonName: "Lake Oku Clawed Frog", scientificName: "Xenopus longipes", taxonGroup: "reptiles-amphibians", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Lake Oku, a single crater lake in the mountains of Cameroon.",
    primaryThreats: [
      "Its single-lake range",
      "Introduced fish and disturbance",
      "Disease risk",
    ], sourceUrls: [amphibiaweb("Xenopus", "longipes")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "variable-harlequin-frog", commonName: "Variable Harlequin Frog", scientificName: "Atelopus varius", taxonGroup: "reptiles-amphibians", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Forests and streams of Costa Rica and Panama.",
    primaryThreats: [
      "The amphibian fungal disease chytridiomycosis",
      "Habitat loss",
      "Climate change",
    ], sourceUrls: [amphibiaweb("Atelopus", "varius")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "archeys-frog", commonName: "Archey's Frog", scientificName: "Leiopelma archeyi", taxonGroup: "reptiles-amphibians", redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "A few forested areas of the North Island of New Zealand.",
    primaryThreats: [
      "The amphibian fungal disease chytridiomycosis",
      "Introduced predators",
      "A tiny range",
    ], sourceUrls: [amphibiaweb("Leiopelma", "archeyi")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "mountain-yellow-legged-frog", commonName: "Mountain Yellow-legged Frog", scientificName: "Rana muscosa", taxonGroup: "reptiles-amphibians", redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "High mountain lakes and streams of the Sierra Nevada and southern California, USA.",
    primaryThreats: [
      "Introduced trout eating tadpoles",
      "The amphibian fungal disease chytridiomycosis",
      "Habitat change",
    ], sourceUrls: [amphibiaweb("Rana", "muscosa")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "northern-corroboree-frog", commonName: "Northern Corroboree Frog", scientificName: "Pseudophryne pengilleyi", taxonGroup: "reptiles-amphibians", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Alpine and sub-alpine areas of south-eastern Australia.",
    primaryThreats: [
      "The amphibian fungal disease chytridiomycosis",
      "Habitat change and drought",
      "A tiny range",
    ], sourceUrls: [amphibiaweb("Pseudophryne", "pengilleyi")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "morelets-tree-frog", commonName: "Morelet's Tree Frog", scientificName: "Agalychnis moreletii", taxonGroup: "reptiles-amphibians", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Forests of Central America, including Mexico, Belize, and Guatemala.",
    primaryThreats: [
      "The amphibian fungal disease chytridiomycosis",
      "Habitat loss",
      "Collection in the past",
    ], sourceUrls: [amphibiaweb("Agalychnis", "moreletii")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),

  // ===========================================================================
  // FISH
  // ===========================================================================
  rec({ slug: "dusky-shark", commonName: "Dusky Shark", scientificName: "Carcharhinus obscurus", taxonGroup: "fish", redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "Warm and temperate coastal and offshore waters worldwide.",
    primaryThreats: [
      "Overfishing and the fin trade",
      "Bycatch",
      "An extremely slow reproductive rate",
    ], sourceUrls: [fishbase("Carcharhinus-obscurus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "silky-shark", commonName: "Silky Shark", scientificName: "Carcharhinus falciformis", taxonGroup: "fish", redListCategory: "VU",
    populationTrend: "decreasing",
    rangeSummary:
      "Tropical open oceans worldwide.",
    primaryThreats: [
      "Overfishing and the fin trade",
      "Bycatch around fish-aggregating devices",
    ], sourceUrls: [fishbase("Carcharhinus-falciformis")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "tope-shark", commonName: "Tope Shark", scientificName: "Galeorhinus galeus", taxonGroup: "fish", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Temperate coastal waters worldwide.",
    primaryThreats: [
      "Overfishing for meat, fins, and liver oil",
      "Bycatch",
      "Slow reproduction",
    ], sourceUrls: [fishbase("Galeorhinus-galeus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "smooth-hammerhead", commonName: "Smooth Hammerhead", scientificName: "Sphyrna zygaena", taxonGroup: "fish", redListCategory: "VU",
    populationTrend: "decreasing",
    rangeSummary:
      "Temperate and tropical seas worldwide.",
    primaryThreats: [
      "Overfishing, including for fins",
      "Bycatch",
    ], sourceUrls: [fishbase("Sphyrna-zygaena")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "spiny-dogfish", commonName: "Spiny Dogfish", scientificName: "Squalus acanthias", taxonGroup: "fish", redListCategory: "VU",
    populationTrend: "decreasing",
    rangeSummary:
      "Temperate coastal waters worldwide.",
    primaryThreats: [
      "Overfishing",
      "A very slow reproductive rate and long gestation",
      "Bycatch",
    ], sourceUrls: [fishbase("Squalus-acanthias")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "ganges-shark", commonName: "Ganges Shark", scientificName: "Glyphis gangeticus", taxonGroup: "fish", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Rivers and coastal waters of the Indian subcontinent.",
    primaryThreats: [
      "Overfishing and bycatch",
      "Habitat degradation and pollution",
      "A poorly known, small population",
    ], sourceUrls: [fishbase("Glyphis-gangeticus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "speartooth-shark", commonName: "Speartooth Shark", scientificName: "Glyphis glyphis", taxonGroup: "fish", redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "Rivers and estuaries of northern Australia and New Guinea.",
    primaryThreats: [
      "Bycatch in fisheries",
      "Habitat change",
      "A small, restricted population",
    ], sourceUrls: [fishbase("Glyphis-glyphis")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "maugean-skate", commonName: "Maugean Skate", scientificName: "Zearaja maugeana", taxonGroup: "fish", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "A couple of harbours on the west coast of Tasmania, Australia.",
    primaryThreats: [
      "Falling oxygen levels in its harbour habitat",
      "A tiny range",
      "Environmental change linked to human activity",
    ], sourceUrls: [fishbase("Zearaja-maugeana")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "totoaba", commonName: "Totoaba", scientificName: "Totoaba macdonaldi", taxonGroup: "fish", redListCategory: "VU",
    populationTrend: "increasing",
    rangeSummary:
      "Endemic to the northern Gulf of California, Mexico.",
    primaryThreats: [
      "Illegal fishing for its swim bladder",
      "Bycatch",
      "Habitat change",
    ], sourceUrls: [noaa("totoaba"), fishbase("Totoaba-macdonaldi")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned", notes: "Endemic to the Gulf of California; its swim-bladder trade also drives vaquita bycatch." }),
  rec({ slug: "chinese-bahaba", commonName: "Chinese Bahaba", scientificName: "Bahaba taipingensis", taxonGroup: "fish", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Coastal waters of south-eastern China.",
    primaryThreats: [
      "Overfishing for its swim bladder",
      "Habitat loss",
      "A collapsing population",
    ], sourceUrls: [fishbase("Bahaba-taipingensis")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "adriatic-sturgeon", commonName: "Adriatic Sturgeon", scientificName: "Acipenser naccarii", taxonGroup: "fish", redListCategory: "CR",
    populationTrend: "stable",
    rangeSummary:
      "Rivers draining to the Adriatic Sea, especially the Po basin in Italy.",
    primaryThreats: [
      "Dams blocking migration",
      "Past overfishing",
      "Habitat change",
    ], sourceUrls: [fishbase("Acipenser-naccarii")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "kaluga", commonName: "Kaluga", scientificName: "Huso dauricus", taxonGroup: "fish", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "The Amur River basin on the border of Russia and China.",
    primaryThreats: [
      "Overfishing and poaching for caviar",
      "Dams and habitat change",
      "Slow maturation",
    ], sourceUrls: [fishbase("Huso-dauricus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "sakhalin-sturgeon", commonName: "Sakhalin Sturgeon", scientificName: "Acipenser mikadoi", taxonGroup: "fish", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Rivers and coastal waters of the north-western Pacific, including around the Tumnin River in Russia.",
    primaryThreats: [
      "Overfishing and poaching",
      "Dams and habitat change",
      "A tiny spawning population",
    ], sourceUrls: [fishbase("Acipenser-mikadoi")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "ship-sturgeon", commonName: "Ship Sturgeon", scientificName: "Acipenser nudiventris", taxonGroup: "fish", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "The Caspian, Black, and Aral Sea basins and their rivers.",
    primaryThreats: [
      "Overfishing for caviar",
      "Dams blocking migration",
      "Pollution and habitat change",
    ], sourceUrls: [fishbase("Acipenser-nudiventris")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "murray-cod", commonName: "Murray Cod", scientificName: "Maccullochella peelii", taxonGroup: "fish", redListCategory: "VU",
    populationTrend: "decreasing",
    rangeSummary:
      "The Murray-Darling river system of south-eastern Australia.",
    primaryThreats: [
      "Past overfishing",
      "Dams, weirs, and altered river flow",
      "Habitat degradation",
    ], sourceUrls: [fishbase("Maccullochella-peelii")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),
  rec({ slug: "spotted-handfish", commonName: "Spotted Handfish", scientificName: "Brachionichthys hirsutus", taxonGroup: "fish", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "The estuary of the Derwent River and nearby waters in Tasmania, Australia.",
    primaryThreats: [
      "Habitat disturbance and loss of spawning sites",
      "An introduced seastar that eats its eggs' anchoring stalks",
      "A tiny range",
    ], sourceUrls: [fishbase("Brachionichthys-hirsutus")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),

  // ===========================================================================
  // INVERTEBRATES
  // ===========================================================================
  rec({ slug: "black-abalone", commonName: "Black Abalone", scientificName: "Haliotis cracherodii", taxonGroup: "invertebrates", redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Rocky shores of California, USA, and Baja California, Mexico.",
    primaryThreats: [
      "A fatal disease (withering syndrome)",
      "Past overfishing",
      "Slow recovery",
    ], sourceUrls: [noaa("black-abalone")], dataConfidence: "partial", profileStatus: "detailed-profile", imageStatus: "not-planned" }),

  // ── New species (beyond Phase-1..5 index) — added 2026-06-23 ──
  rec({
    slug: "przewalskis-horse",
    commonName: "Przewalski's Horse",
    scientificName: "Equus ferus przewalskii",
    taxonGroup: "mammals",
    redListCategory: "EN",
    populationTrend: "increasing",
    rangeSummary:
      "Steppes of Mongolia and central Asia; reintroduced from captivity after being Extinct in the Wild.",
    primaryThreats: [
      "A small, formerly captive-only population",
      "Hybridisation with domestic horses",
      "Habitat loss and harsh winters",
    ],
    sourceUrls: [adw("Equus_przewalskii")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "galapagos-giant-tortoise",
    commonName: "Galápagos Giant Tortoise",
    scientificName: "Chelonoidis niger",
    taxonGroup: "reptiles-amphibians",
    redListCategory: "VU",
    populationTrend: "increasing",
    rangeSummary:
      "The Galápagos Islands of Ecuador, with different forms on different islands.",
    primaryThreats: [
      "Historical exploitation by sailors",
      "Introduced animals (goats, rats, pigs)",
      "Past habitat damage",
    ],
    sourceUrls: [adw("Chelonoidis_niger")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "sumatran-tiger",
    commonName: "Sumatran Tiger",
    scientificName: "Panthera tigris sumatrae",
    taxonGroup: "mammals",
    redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "The island of Sumatra, Indonesia.",
    primaryThreats: [
      "Poaching for skins and parts",
      "Deforestation (including for palm oil)",
      "Human-tiger conflict",
    ],
    sourceUrls: [adw("Panthera_tigris")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "sumatran-elephant",
    commonName: "Sumatran Elephant",
    scientificName: "Elephas maximus sumatranus",
    taxonGroup: "mammals",
    redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "The island of Sumatra, Indonesia.",
    primaryThreats: [
      "Deforestation for plantations",
      "Human-elephant conflict",
      "Habitat fragmentation",
    ],
    sourceUrls: [adw("Elephas_maximus")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "cross-river-gorilla",
    commonName: "Cross River Gorilla",
    scientificName: "Gorilla gorilla diehli",
    taxonGroup: "mammals",
    redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "A small area of forested hills on the Nigeria-Cameroon border.",
    primaryThreats: [
      "Poaching",
      "Habitat loss and fragmentation",
      "A very small population",
    ],
    sourceUrls: [adw("Gorilla_gorilla")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "not-planned",
  }),
  rec({
    slug: "temmincks-pangolin",
    commonName: "Temminck's Pangolin",
    scientificName: "Smutsia temminckii",
    taxonGroup: "mammals",
    redListCategory: "VU",
    populationTrend: "decreasing",
    rangeSummary:
      "Savannas and woodlands of eastern and southern Africa.",
    primaryThreats: [
      "Poaching and trafficking for scales and meat",
      "Electrocution on fences",
      "Habitat loss",
    ],
    sourceUrls: [adw("Smutsia_temminckii")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "takahe",
    commonName: "Takahe",
    scientificName: "Porphyrio hochstetteri",
    taxonGroup: "birds",
    redListCategory: "EN",
    populationTrend: "increasing",
    rangeSummary:
      "Grasslands of the South Island of New Zealand, plus predator-free islands.",
    primaryThreats: [
      "Introduced predators (stoats)",
      "Competition with introduced deer",
      "A small population",
    ],
    sourceUrls: [adw("Porphyrio_hochstetteri")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "baiji",
    commonName: "Baiji",
    scientificName: "Lipotes vexillifer",
    taxonGroup: "mammals",
    redListCategory: "CR",
    populationTrend: "unknown",
    rangeSummary:
      "Formerly the Yangtze River of China.",
    primaryThreats: [
      "Drowning as bycatch in fishing gear",
      "Dams and heavy river traffic",
      "Pollution",
    ],
    sourceUrls: [adw("Lipotes_vexillifer")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "not-planned",
  }),
  rec({
    slug: "dodo",
    commonName: "Dodo",
    scientificName: "Raphus cucullatus",
    taxonGroup: "birds",
    redListCategory: "EX",
    populationTrend: "unknown",
    rangeSummary:
      "Formerly the island of Mauritius in the Indian Ocean.",
    primaryThreats: [
      "Hunting by arriving humans",
      "Introduced animals eating eggs and young",
      "Habitat loss",
    ],
    sourceUrls: [adw("Raphus_cucullatus")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "thylacine",
    commonName: "Thylacine",
    scientificName: "Thylacinus cynocephalus",
    taxonGroup: "mammals",
    redListCategory: "EX",
    populationTrend: "unknown",
    rangeSummary:
      "Formerly Tasmania, with earlier populations on mainland Australia and New Guinea.",
    primaryThreats: [
      "Hunting and government bounties",
      "Habitat loss and disease",
      "Competition with introduced dogs",
    ],
    sourceUrls: [adw("Thylacinus_cynocephalus")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),

  // ── New species batch 2 — added 2026-06-23 ──
  rec({
    slug: "hirola",
    commonName: "Hirola",
    scientificName: "Beatragus hunteri",
    taxonGroup: "mammals",
    redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "A small area of grassland on the Kenya-Somalia border.",
    primaryThreats: [
      "Habitat loss and degradation",
      "Drought",
      "Disease and predation on a tiny population",
    ],
    sourceUrls: [adw("Beatragus_hunteri")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "aldabra-giant-tortoise",
    commonName: "Aldabra Giant Tortoise",
    scientificName: "Aldabrachelys gigantea",
    taxonGroup: "reptiles-amphibians",
    redListCategory: "VU",
    populationTrend: "stable",
    rangeSummary:
      "Aldabra Atoll in the Seychelles, Indian Ocean, with introduced populations elsewhere.",
    primaryThreats: [
      "A range concentrated on one atoll",
      "Vulnerability to sea-level rise and disasters",
      "Past historical exploitation",
    ],
    sourceUrls: [adw("Aldabrachelys_gigantea")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "giant-ground-pangolin",
    commonName: "Giant Ground Pangolin",
    scientificName: "Smutsia gigantea",
    taxonGroup: "mammals",
    redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "Forests and savannas of central and western Africa.",
    primaryThreats: [
      "Poaching and trafficking for scales and meat",
      "Habitat loss",
    ],
    sourceUrls: [adw("Smutsia_gigantea")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "not-planned",
  }),
  rec({
    slug: "philippine-pangolin",
    commonName: "Philippine Pangolin",
    scientificName: "Manis culionensis",
    taxonGroup: "mammals",
    redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "The Palawan region of the Philippines.",
    primaryThreats: [
      "Poaching and trafficking",
      "Habitat loss",
      "A restricted island range",
    ],
    sourceUrls: [adw("Manis_culionensis")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "not-planned",
  }),
  rec({
    slug: "asiatic-cheetah",
    commonName: "Asiatic Cheetah",
    scientificName: "Acinonyx jubatus venaticus",
    taxonGroup: "mammals",
    redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "A few arid areas of Iran.",
    primaryThreats: [
      "An extremely small population",
      "Prey depletion",
      "Road deaths and habitat loss",
    ],
    sourceUrls: [adw("Acinonyx_jubatus")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "quagga",
    commonName: "Quagga",
    scientificName: "Equus quagga quagga",
    taxonGroup: "mammals",
    redListCategory: "EX",
    populationTrend: "unknown",
    rangeSummary:
      "Formerly the grasslands of South Africa.",
    primaryThreats: [
      "Hunting for hides and meat",
      "Competition with livestock",
      "Loss of grazing land",
    ],
    sourceUrls: [adw("Equus_quagga")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "not-planned",
  }),
  rec({
    slug: "great-auk",
    commonName: "Great Auk",
    scientificName: "Pinguinus impennis",
    taxonGroup: "birds",
    redListCategory: "EX",
    populationTrend: "unknown",
    rangeSummary:
      "Formerly islands and coasts of the North Atlantic.",
    primaryThreats: [
      "Hunting for meat, eggs, feathers, and oil",
      "Collecting as it became rare",
      "Loss of safe island colonies",
    ],
    sourceUrls: [adw("Pinguinus_impennis")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "passenger-pigeon",
    commonName: "Passenger Pigeon",
    scientificName: "Ectopistes migratorius",
    taxonGroup: "birds",
    redListCategory: "EX",
    populationTrend: "unknown",
    rangeSummary:
      "Formerly eastern North America.",
    primaryThreats: [
      "Mass commercial hunting",
      "Destruction of forest habitat",
      "The collapse of its huge flocks",
    ],
    sourceUrls: [adw("Ectopistes_migratorius")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "golden-toad",
    commonName: "Golden Toad",
    scientificName: "Incilius periglenes",
    taxonGroup: "reptiles-amphibians",
    redListCategory: "EX",
    populationTrend: "unknown",
    rangeSummary:
      "Formerly the cloud forest of Monteverde, Costa Rica.",
    primaryThreats: [
      "Climate-linked drying of its breeding pools",
      "Disease",
      "An extremely small range",
    ],
    sourceUrls: [adw("Incilius_periglenes")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "western-black-rhinoceros",
    commonName: "Western Black Rhinoceros",
    scientificName: "Diceros bicornis longipes",
    taxonGroup: "mammals",
    redListCategory: "EX",
    populationTrend: "unknown",
    rangeSummary:
      "Formerly the savannas of west-central Africa.",
    primaryThreats: [
      "Poaching for horn",
      "Loss of habitat",
      "Failure of protection in its range",
    ],
    sourceUrls: [adw("Diceros_bicornis")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "not-planned",
  }),

  // ── New species batch 3 — added 2026-06-23 ──
  rec({
    slug: "asiatic-lion",
    commonName: "Asiatic Lion",
    scientificName: "Panthera leo persica",
    taxonGroup: "mammals",
    redListCategory: "EN",
    populationTrend: "increasing",
    rangeSummary:
      "The Gir Forest and surrounding areas of Gujarat, India.",
    primaryThreats: [
      "A single, concentrated population",
      "Disease risk and inbreeding",
      "Human-lion conflict and habitat pressure",
    ],
    sourceUrls: [adw("Panthera_leo")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "mountain-gorilla",
    commonName: "Mountain Gorilla",
    scientificName: "Gorilla beringei beringei",
    taxonGroup: "mammals",
    redListCategory: "EN",
    populationTrend: "increasing",
    rangeSummary:
      "High forests of the Virunga volcanoes and Bwindi, in Rwanda, Uganda, and the DR Congo.",
    primaryThreats: [
      "Poaching and snares",
      "Disease caught from people",
      "Habitat loss and civil unrest",
    ],
    sourceUrls: [adw("Gorilla_beringei")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "african-wild-ass",
    commonName: "African Wild Ass",
    scientificName: "Equus africanus",
    taxonGroup: "mammals",
    redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Arid deserts of the Horn of Africa, including parts of Eritrea and Ethiopia.",
    primaryThreats: [
      "Hunting for food and traditional medicine",
      "Competition with livestock for water",
      "Interbreeding with domestic donkeys",
    ],
    sourceUrls: [adw("Equus_africanus")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "mountain-zebra",
    commonName: "Mountain Zebra",
    scientificName: "Equus zebra",
    taxonGroup: "mammals",
    redListCategory: "VU",
    populationTrend: "increasing",
    rangeSummary:
      "Mountainous and rugged country of south-western Africa (South Africa, Namibia, Angola).",
    primaryThreats: [
      "Past hunting and habitat loss",
      "Fragmentation into small populations",
      "Competition with livestock",
    ],
    sourceUrls: [adw("Equus_zebra")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "kouprey",
    commonName: "Kouprey",
    scientificName: "Bos sauveli",
    taxonGroup: "mammals",
    redListCategory: "CR",
    populationTrend: "unknown",
    rangeSummary:
      "Formerly the forests and savannas of Indochina, chiefly Cambodia.",
    primaryThreats: [
      "Hunting",
      "War and unrest across its range",
      "Habitat loss",
    ],
    sourceUrls: [adw("Bos_sauveli")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "not-planned",
  }),
  rec({
    slug: "carolina-parakeet",
    commonName: "Carolina Parakeet",
    scientificName: "Conuropsis carolinensis",
    taxonGroup: "birds",
    redListCategory: "EX",
    populationTrend: "unknown",
    rangeSummary:
      "Formerly the eastern and central United States.",
    primaryThreats: [
      "Hunting (as a crop pest and for feathers)",
      "Habitat loss",
      "Capture for the cage-bird trade",
    ],
    sourceUrls: [adw("Conuropsis_carolinensis")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "pyrenean-ibex",
    commonName: "Pyrenean Ibex",
    scientificName: "Capra pyrenaica pyrenaica",
    taxonGroup: "mammals",
    redListCategory: "EX",
    populationTrend: "unknown",
    rangeSummary:
      "Formerly the Pyrenees mountains of Spain and France.",
    primaryThreats: [
      "Hunting",
      "Competition with livestock",
      "A tiny final population",
    ],
    sourceUrls: [adw("Capra_pyrenaica")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "steller-sea-cow",
    commonName: "Steller's Sea Cow",
    scientificName: "Hydrodamalis gigas",
    taxonGroup: "mammals",
    redListCategory: "EX",
    populationTrend: "unknown",
    rangeSummary:
      "Formerly the cold waters around the Commander Islands in the North Pacific.",
    primaryThreats: [
      "Hunting by sailors and fur traders",
      "A tiny relict range",
      "Loss of the kelp it fed on",
    ],
    sourceUrls: [adw("Hydrodamalis_gigas")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "not-planned",
  }),
  rec({
    slug: "bramble-cay-melomys",
    commonName: "Bramble Cay Melomys",
    scientificName: "Melomys rubicola",
    taxonGroup: "mammals",
    redListCategory: "EX",
    populationTrend: "unknown",
    rangeSummary:
      "Formerly Bramble Cay, a tiny island in the Torres Strait between Australia and New Guinea.",
    primaryThreats: [
      "Sea-level rise and storm surges flooding its low island",
      "Loss of vegetation",
      "An extremely tiny range",
    ],
    sourceUrls: [adw("Melomys_rubicola")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "not-planned",
  }),

  // ── New species batch 4 — added 2026-06-23 ──
  rec({
    slug: "asiatic-black-bear",
    commonName: "Asiatic Black Bear",
    scientificName: "Ursus thibetanus",
    taxonGroup: "mammals",
    redListCategory: "VU",
    populationTrend: "decreasing",
    rangeSummary:
      "Forests across much of Asia, from Iran and the Himalayas to Southeast Asia, China, and Japan.",
    primaryThreats: [
      "Poaching for bile, paws, and parts",
      "Habitat loss",
      "Capture for bile farms",
    ],
    sourceUrls: [adw("Ursus_thibetanus")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "sloth-bear",
    commonName: "Sloth Bear",
    scientificName: "Melursus ursinus",
    taxonGroup: "mammals",
    redListCategory: "VU",
    populationTrend: "decreasing",
    rangeSummary:
      "Forests and grasslands of the Indian subcontinent.",
    primaryThreats: [
      "Habitat loss and fragmentation",
      "Human-bear conflict",
      "Poaching and past capture for performance",
    ],
    sourceUrls: [adw("Melursus_ursinus")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "andean-cat",
    commonName: "Andean Cat",
    scientificName: "Leopardus jacobita",
    taxonGroup: "mammals",
    redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "High Andes and Patagonian steppe of South America.",
    primaryThreats: [
      "A naturally sparse, fragmented population",
      "Hunting and persecution",
      "Loss of prey and habitat",
    ],
    sourceUrls: [adw("Leopardus_jacobita")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "white-bellied-pangolin",
    commonName: "White-bellied Pangolin",
    scientificName: "Phataginus tricuspis",
    taxonGroup: "mammals",
    redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "Forests of western and central Africa.",
    primaryThreats: [
      "Poaching and trafficking for scales and meat",
      "Habitat loss",
    ],
    sourceUrls: [adw("Phataginus_tricuspis")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "short-tailed-chinchilla",
    commonName: "Short-tailed Chinchilla",
    scientificName: "Chinchilla chinchilla",
    taxonGroup: "mammals",
    redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "High Andes of South America (parts of Chile, Argentina, Bolivia, Peru).",
    primaryThreats: [
      "Historical hunting for its extremely soft fur",
      "A tiny, fragmented population",
      "Habitat degradation",
    ],
    sourceUrls: [adw("Chinchilla_chinchilla")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "not-planned",
  }),
  rec({
    slug: "pygmy-three-toed-sloth",
    commonName: "Pygmy Three-toed Sloth",
    scientificName: "Bradypus pygmaeus",
    taxonGroup: "mammals",
    redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "A single small island, Isla Escudo de Veraguas, off Panama.",
    primaryThreats: [
      "An extremely tiny island range",
      "Habitat disturbance",
      "A very small population",
    ],
    sourceUrls: [adw("Bradypus_pygmaeus")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "not-planned",
  }),
  rec({
    slug: "hawaiian-crow",
    commonName: "Hawaiian Crow",
    scientificName: "Corvus hawaiiensis",
    taxonGroup: "birds",
    redListCategory: "EW",
    populationTrend: "unknown",
    rangeSummary:
      "Formerly the forests of Hawaii; now survives in captivity and careful reintroduction.",
    primaryThreats: [
      "Introduced predators and disease",
      "Past habitat loss",
      "A tiny founder population",
    ],
    sourceUrls: [adw("Corvus_hawaiiensis")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "guam-kingfisher",
    commonName: "Guam Kingfisher",
    scientificName: "Todiramphus cinnamominus",
    taxonGroup: "birds",
    redListCategory: "EW",
    populationTrend: "unknown",
    rangeSummary:
      "Formerly the island of Guam; now survives only in captivity, with reintroduction begun on a predator-free island.",
    primaryThreats: [
      "The introduced brown tree snake",
      "A tiny captive founder population",
      "Loss of safe habitat",
    ],
    sourceUrls: [adw("Todiramphus_cinnamominus")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "galapagos-pink-land-iguana",
    commonName: "Galápagos Pink Land Iguana",
    scientificName: "Conolophus marthae",
    taxonGroup: "reptiles-amphibians",
    redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "The slopes of Wolf Volcano on Isabela Island in the Galápagos.",
    primaryThreats: [
      "A single, tiny population on one volcano",
      "Introduced predators",
      "Limited reproduction",
    ],
    sourceUrls: [adw("Conolophus_marthae")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "not-planned",
  }),
  rec({
    slug: "european-sturgeon",
    commonName: "European Sturgeon",
    scientificName: "Acipenser sturio",
    taxonGroup: "fish",
    redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Once across European coasts and rivers; now reduced to a remnant population centred on France.",
    primaryThreats: [
      "Dams blocking spawning migrations",
      "Past overfishing for caviar",
      "Pollution and habitat loss",
    ],
    sourceUrls: [adw("Acipenser_sturio")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "not-planned",
  }),

  // ── New species batch 5 — added 2026-06-23 ──
  rec({
    slug: "asian-small-clawed-otter",
    commonName: "Asian Small-clawed Otter",
    scientificName: "Aonyx cinereus",
    taxonGroup: "mammals",
    redListCategory: "VU",
    populationTrend: "decreasing",
    rangeSummary:
      "Wetlands, rivers, and coasts of South and Southeast Asia.",
    primaryThreats: [
      "Habitat loss and wetland drainage",
      "Pollution",
      "Capture for the pet trade",
    ],
    sourceUrls: [adw("Aonyx_cinereus")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "sunda-slow-loris",
    commonName: "Sunda Slow Loris",
    scientificName: "Nycticebus coucang",
    taxonGroup: "mammals",
    redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "Forests of the Malay Peninsula, Sumatra, and nearby areas.",
    primaryThreats: [
      "Capture for the pet and traditional-medicine trade",
      "Habitat loss",
    ],
    sourceUrls: [adw("Nycticebus_coucang")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "northern-white-cheeked-gibbon",
    commonName: "Northern White-cheeked Gibbon",
    scientificName: "Nomascus leucogenys",
    taxonGroup: "mammals",
    redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "Forests of Vietnam, Laos, and southern China.",
    primaryThreats: [
      "Deforestation",
      "Hunting",
      "Capture for the pet trade",
    ],
    sourceUrls: [adw("Nomascus_leucogenys")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "grey-shanked-douc",
    commonName: "Grey-shanked Douc",
    scientificName: "Pygathrix cinerea",
    taxonGroup: "mammals",
    redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "A small area of forest in central Vietnam.",
    primaryThreats: [
      "Hunting",
      "Habitat loss",
      "Capture for trade",
    ],
    sourceUrls: [adw("Pygathrix_cinerea")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "not-planned",
  }),
  rec({
    slug: "yangtze-finless-porpoise",
    commonName: "Yangtze Finless Porpoise",
    scientificName: "Neophocaena asiaeorientalis",
    taxonGroup: "mammals",
    redListCategory: "CR",
    populationTrend: "decreasing",
    rangeSummary:
      "The middle and lower Yangtze River of China.",
    primaryThreats: [
      "Bycatch in fishing gear",
      "Heavy river traffic and dams",
      "Pollution and prey decline",
    ],
    sourceUrls: [adw("Neophocaena_asiaeorientalis")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "not-planned",
  }),
  rec({
    slug: "rhinoceros-hornbill",
    commonName: "Rhinoceros Hornbill",
    scientificName: "Buceros rhinoceros",
    taxonGroup: "birds",
    redListCategory: "VU",
    populationTrend: "decreasing",
    rangeSummary:
      "Rainforests of the Malay Peninsula, Borneo, Sumatra, and Java.",
    primaryThreats: [
      "Deforestation",
      "Hunting",
      "Loss of large nesting trees",
    ],
    sourceUrls: [adw("Buceros_rhinoceros")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "not-planned",
  }),
  rec({
    slug: "javan-hawk-eagle",
    commonName: "Javan Hawk-eagle",
    scientificName: "Nisaetus bartelsi",
    taxonGroup: "birds",
    redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "Forests of the island of Java, Indonesia.",
    primaryThreats: [
      "Deforestation",
      "Capture for the bird trade",
      "A small, fragmented population",
    ],
    sourceUrls: [adw("Nisaetus_bartelsi")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "not-planned",
  }),
  rec({
    slug: "king-cobra",
    commonName: "King Cobra",
    scientificName: "Ophiophagus hannah",
    taxonGroup: "reptiles-amphibians",
    redListCategory: "VU",
    populationTrend: "decreasing",
    rangeSummary:
      "Forests of South and Southeast Asia.",
    primaryThreats: [
      "Deforestation",
      "Killing out of fear and for trade",
      "Collection for skins and traditional medicine",
    ],
    sourceUrls: [adw("Ophiophagus_hannah")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "has-image",
  }),
  rec({
    slug: "south-andean-huemul",
    commonName: "South Andean Huemul",
    scientificName: "Hippocamelus bisulcus",
    taxonGroup: "mammals",
    redListCategory: "EN",
    populationTrend: "decreasing",
    rangeSummary:
      "The southern Andes of Chile and Argentina.",
    primaryThreats: [
      "Habitat loss and competition with livestock",
      "Disease",
      "Past hunting and a fragmented population",
    ],
    sourceUrls: [adw("Hippocamelus_bisulcus")],
    dataConfidence: "partial",
    profileStatus: "detailed-profile",
    imageStatus: "not-planned",
  }),
];
