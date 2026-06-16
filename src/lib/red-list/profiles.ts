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
