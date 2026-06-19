import type { SourceLink } from "@/lib/educational/types";

/**
 * Content for /fauna/evolution/from-water-to-land.
 *
 * Scientific framing rules (important):
 *  - Early life is understood to have originated in aquatic environments; the
 *    detailed origin-of-life mechanism is NOT presented as settled.
 *  - We distinguish "origin of life in water" from "evolution of land
 *    vertebrates from aquatic ancestors".
 *  - Cautious, educational language; no sensationalism, no religious/political
 *    framing, no overstated certainty. Authoritative sources only.
 */

export const FROM_WATER_TO_LAND_UPDATED = "2026-06-16";

export interface EvoSection {
  heading: string;
  paragraphs: string[];
}

export const FROM_WATER_TO_LAND_INTRO =
  "Land animals are part of a much older story that began in water. The scientific consensus is that life originated in aquatic environments and that the animals living on land today descend, over hundreds of millions of years, from aquatic ancestors. This page summarises that broad picture in plain language and points to authoritative sources for the detail.";

export const FROM_WATER_TO_LAND_SECTIONS: EvoSection[] = [
  {
    heading: "Life's deep connection to water",
    paragraphs: [
      "Every major group of land animals is, evolutionarily, a descendant of aquatic life. Water is where the earliest life is understood to have arisen and where animals first diversified, long before any lineage moved permanently onto land.",
      "This is why so many land animals still depend on water for drinking, breeding, or cooling, and why the bodies of land vertebrates carry features inherited from aquatic ancestors.",
    ],
  },
  {
    heading: "Early life and aquatic environments",
    paragraphs: [
      "Life is understood to have originated in water in the deep geological past. Exactly how the first living systems arose remains an active area of scientific research, and the detailed origin-of-life mechanism is not considered settled. What is widely accepted is that early life and the first animals were aquatic.",
      "Over vast spans of time, changes such as the rise of oxygen in the oceans and atmosphere, new ecological pressures, and ongoing evolutionary adaptation shaped increasingly complex life.",
    ],
  },
  {
    heading: "From aquatic vertebrates to early tetrapods",
    paragraphs: [
      "The vertebrate move onto land is one of the best-studied transitions in evolution. It involved fish-like aquatic ancestors and, later, the early tetrapods — four-limbed vertebrates whose lineage gave rise to amphibians, reptiles, birds, and mammals.",
      "Fossils and comparative anatomy show a gradual transition over deep time rather than a single sudden event. FaunaHub presents this as accepted scientific framing while linking to research-based sources for the specifics.",
    ],
  },
  {
    heading: "Amphibians as a water-land bridge",
    paragraphs: [
      "Modern amphibians — frogs, toads, salamanders, and newts — are a visible reminder of this water-to-land connection. Many begin life in water as eggs and larvae and later live partly on land.",
      "Amphibians are not 'ancestors' of other land animals living today, but their life cycles illustrate how closely early land vertebrates remained tied to water.",
    ],
  },
  {
    heading: "Reptiles, birds, and mammals on land",
    paragraphs: [
      "Reptiles, birds, and mammals represent later terrestrial diversification. Adaptations such as the amniotic egg, water-conserving skin and kidneys, and varied reproduction allowed some lineages to live more independently of standing water.",
      "These groups went on to fill habitats from deserts to mountains — the land fauna explored across FaunaHub's continent pages.",
    ],
  },
  {
    heading: "Why oceans still matter for land fauna",
    paragraphs: [
      "Even fully terrestrial animals remain connected to the sea. Oceans help regulate climate and the water cycle that sustains freshwater habitats, and many coastal land animals depend on the boundary between land and sea.",
      "This connection is one reason FaunaHub plans an ocean-fauna layer organised by depth zones as a future companion to these land pages.",
    ],
  },
  {
    heading: "What scientists still study",
    paragraphs: [
      "Many details remain under active investigation: precisely how the first life arose, the exact sequence of anatomical changes in the water-to-land transition, and how environmental change drove diversification. New fossils and genetic studies continually refine the picture.",
      "FaunaHub treats these as open scientific questions and avoids presenting speculative detail as settled fact.",
    ],
  },
];

export const FROM_WATER_TO_LAND_FAQ: { question: string; answer: string }[] = [
  {
    question: "Did all land animals come from the sea?",
    answer:
      "Land animals descend, over very long timescales, from aquatic ancestors. Early life and the first animals were aquatic, and the vertebrate lineages on land today trace back to fish-like ancestors and early tetrapods.",
  },
  {
    question: "Is the origin of life settled science?",
    answer:
      "No. It is widely accepted that life originated in aquatic environments, but the precise mechanism by which the first living systems arose is still an active area of research. FaunaHub does not present a detailed origin-of-life account as settled.",
  },
  {
    question: "Are amphibians the ancestors of mammals?",
    answer:
      "Not directly. Living amphibians are their own group, not the ancestors of today's reptiles, birds, or mammals. Their water-linked life cycles simply illustrate how early land vertebrates stayed connected to water.",
  },
  {
    question: "How long did the move onto land take?",
    answer:
      "It unfolded over hundreds of millions of years of deep geological time, as a gradual transition documented by fossils and anatomy — not a single sudden event.",
  },
];

export const FROM_WATER_TO_LAND_SOURCES: SourceLink[] = [
  {
    label: "Understanding Evolution — University of California, Berkeley",
    url: "https://evolution.berkeley.edu/",
    type: "university",
    note: "Research-based evolution education resource",
  },
  {
    label: "University of California Museum of Paleontology (UCMP)",
    url: "https://ucmp.berkeley.edu/",
    type: "university",
    note: "Paleontology and the history of life",
  },
  {
    label: "Smithsonian Ocean — Smithsonian Institution",
    url: "https://ocean.si.edu/",
    type: "wildlife",
    note: "Institutional resource on ocean life and Earth history",
  },
  {
    label: "American Museum of Natural History — Vertebrate Origins",
    url: "https://www.amnh.org/",
    type: "wildlife",
    note: "Museum resource on vertebrate evolution",
  },
];
