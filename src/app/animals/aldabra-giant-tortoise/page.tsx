import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/aldabra-giant-tortoise";
const TITLE = "Aldabra Giant Tortoise: Facts & Profile";
const DESC =
  "Meet the Aldabra giant tortoise (Aldabrachelys gigantea), a huge long-lived grazing tortoise of Aldabra Atoll, Seychelles. Habitat, diet, ecology and status.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("aldabra-giant-tortoise"),
});

export default function AldabraGiantTortoisePage() {
  return (
    <AnimalProfileLayout
      commonName="Aldabra Giant Tortoise"
      scientificName="Aldabrachelys gigantea"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Tortoise","Seychelles"]}
      image={getAnimalImage("aldabra-giant-tortoise") ?? undefined}
      galleryImages={getAnimalGalleryImages("aldabra-giant-tortoise")}
      sources={ANIMAL_SOURCES["aldabra-giant-tortoise"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The Aldabra giant tortoise (<em>Aldabrachelys gigantea</em>) is one of the largest living tortoises and is often described as one of only two surviving groups of giant tortoises, the other being the Galápagos giants of the Pacific. A tortoise is a land-dwelling member of the turtle order (Testudines), and this species is a heavy-bodied, dome-shelled terrestrial reptile native to the Aldabra Atoll in the Seychelles, in the western Indian Ocean.
          </p>
          <p>
            These tortoises are slow-moving, long-lived grazers and browsers that have reached great size in isolation, an example of the pattern biologists call island gigantism. On Aldabra they occur in very large numbers and function as ecosystem engineers, cropping vegetation, dispersing seeds, and shaping the structure of the atoll&#39;s plant communities. Despite their abundance on that single atoll, their naturally restricted range is a central theme of their conservation story.
          </p>
          <p>
            This is an educational wildlife profile. It is not a pet-keeping, handling, or husbandry guide. Conservation status is summarised from published assessments and can change, so readers should consult the IUCN Red List for the current listing.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Aldabra giant tortoise is the reptile species <em>Aldabrachelys gigantea</em>, in the family Testudinidae (the tortoises) within the order Testudines (turtles and tortoises). Tortoises are turtles, but not all turtles are tortoises: the term &quot;tortoise&quot; refers specifically to land-dwelling testudines, distinct from freshwater turtles and from marine turtles such as the green and leatherback sea turtles. Some sources place the species in the genus <em>Aldabrachelys</em>, while older literature used names such as <em>Geochelone</em> or <em>Dipsochelys</em>; the genus-level classification of giant tortoises has been revised over time. As reptiles, tortoises are an entirely separate group from amphibians.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Aldabra giant tortoises are massive, with a high, domed carapace (upper shell) that is typically brownish to grey, supported by stout, column-like, heavily scaled legs adapted to bearing great weight on land. Large mature males can substantially outweigh females and are generally larger overall. The neck is notably long for the group, which helps the tortoise reach vegetation above the ground. The skin of the head and limbs is thick and scaly, and the overall build is robust and low-slung. Their large size, domed shell, and elephantine legs distinguish them from smaller mainland tortoises, though precise dimensions vary between individuals and populations.
          </p>
        </>
      }
      habitat={
        <p>
          The native wild population lives on Aldabra Atoll, a raised coral atoll in the Seychelles in the western Indian Ocean, where the tortoises occupy grasslands, scrub, mangrove edges, and low coastal vegetation. Aldabra is a low-lying, isolated atoll, and the tortoises range across its islands and open &quot;platin&quot; grasslands. Introduced and managed populations also exist elsewhere, including on other islands and in collections, but the heart of the species&#39; range remains this single atoll. As with any species, this is a cautious summary and not a complete range map; distribution is best understood as found in parts of the Seychelles, centred on Aldabra.
        </p>
      }
      diet={
        <p>
          Aldabra giant tortoises are primarily herbivores, grazing on grasses, sedges, and herbaceous plants and browsing on leaves, stems, and woody vegetation within reach of their long necks. On Aldabra, their intensive, sustained grazing has helped create a distinctive short turf of grasses and herbs sometimes called &quot;tortoise turf.&quot; They obtain much of their water from food and from rainwater pools. Like many large reptiles, they can opportunistically consume other material on rare occasions, but their feeding ecology is overwhelmingly that of a bulk plant grazer and browser, which underpins their role in shaping island vegetation.
        </p>
      }
      behavior={
        <>
          <p>
            These tortoises are generally placid and slow-moving, spending much of the day grazing and resting. They are most active in the cooler parts of the day and seek shade or shallow pools to avoid overheating during the hottest hours, since they cannot regulate body temperature internally and rely on their environment. They are long-lived; individuals can survive for many decades, and credible records describe some living well over a century, though exact ages are difficult to verify. Breeding involves the female laying eggs in nests dug in the ground, with development depending on environmental conditions. Behaviour is described here at a general, educational level.
          </p>
          <p>
            On Aldabra the giant tortoise is a keystone grazer and ecosystem engineer: by cropping vegetation, trampling, and dispersing seeds in their dung, the tortoises influence which plants thrive and maintain open, grazed landscapes that other atoll species depend on. Their presence in great density makes them one of the most important large herbivores of the atoll, occupying an ecological role that large mammals fill in many other ecosystems. Because giant tortoises were lost from many other Indian Ocean islands historically, the surviving Aldabra population is also studied as a model for how such grazers shape island ecology, and analogues have been used in ecological restoration projects elsewhere.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Aldabra giant tortoises are gentle, slow herbivores and are not regarded as dangerous to people; they are wild animals and a flagship for island conservation rather than pets. Aldabra Atoll is a protected area and UNESCO World Heritage Site, and access is restricted, so most people encounter these tortoises in well-managed sanctuaries, reserves, or accredited zoos. Visitors to such places should follow the guidance of site staff and local authorities. This profile does not offer pet-keeping, feeding, breeding, or handling advice; questions about wildlife regulations, permits, or conservation should be directed to the relevant wildlife authorities or qualified professionals.
        </p>
      }
      extraSections={[
        {
          heading: "Defenses",
          body: (
            <p>
              The Aldabra giant tortoise is neither venomous nor poisonous. It has no venom apparatus, no fangs, and no toxic secretions, and it poses no chemical hazard. As a slow-moving herbivore, it defends itself mainly by withdrawing into its large, heavy shell rather than by biting or chemical means. There are no venom or toxicity statistics to report for this species because none exist; this profile does not provide any medical, first-aid, or handling information.
            </p>
          ),
        },
        {
          heading: "Conservation context",
          body: (
            <p>
              The Aldabra giant tortoise has been assessed by the IUCN as Vulnerable, reflecting that almost the entire wild population is concentrated on a single low-lying atoll and is therefore highly exposed to threats such as sea-level rise, climate change, and chance disasters, even though numbers there are large and the trend has been reported as stable. Historically, giant tortoises across the Indian Ocean were heavily exploited, and the Aldabra population&#39;s survival and recovery is considered a notable conservation success. Conservation assessments can change over time, so readers should consult the IUCN Red List for the current status. Concerns about the species or its habitat are best raised with qualified conservation organisations and local authorities.
            </p>
          ),
        },
      ]}
      faqs={[
        {
          question: "How big do Aldabra giant tortoises get?",
          answer:
            "They are among the largest living tortoises, with a high domed shell and heavy, column-like legs; large mature males are generally the biggest individuals. Exact sizes vary, but the species is firmly in the giant-tortoise category alongside the Galápagos giants.",
        },
        {
          question: "How is the Aldabra giant tortoise different from the Galápagos giant tortoise?",
          answer:
            "They are separate giant tortoises on opposite sides of the world: Aldabra (Aldabrachelys gigantea) lives in the Indian Ocean, and the Galápagos giants live in the Pacific. Both independently reached great size on isolated islands, an example of island gigantism.",
        },
        {
          question: "Why is the Aldabra giant tortoise considered Vulnerable if there are so many?",
          answer:
            "Almost the whole wild population lives on one low-lying atoll, so the species is highly exposed to sea-level rise and other disasters despite its large numbers. The IUCN has assessed it as Vulnerable; consult the IUCN Red List for the current assessment.",
        },
        {
          question: "Are Aldabra giant tortoises dangerous or venomous?",
          answer:
            "No. They are placid, slow-moving herbivores with no venom or toxins. This profile is educational and does not provide handling, keeping, or medical advice.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Aldabrachelys gigantea (reptile)" },
        { label: "Group", value: "Tortoise (turtle order, Testudines)" },
        { label: "Range", value: "Native to Aldabra Atoll, Seychelles; found in parts of the western Indian Ocean (not a complete range map)" },
        { label: "Habitat", value: "Low-lying atoll grasslands, scrub, and coastal vegetation" },
        { label: "Diet", value: "Herbivore: grasses, sedges, herbs, and browse" },
        { label: "Conservation", value: "Assessed by the IUCN as Vulnerable; status can change, so check the IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Reptiles & Amphibians", href: "/animal-taxonomy/reptiles-amphibians", description: "Snakes, lizards, turtles, crocodilians, frogs & salamanders" },
        { label: "Tortoise", href: "/animals/tortoise", description: "Tortoises as a group" },
        { label: "Galapagos Tortoise", href: "/animals/galapagos-tortoise", description: "Another giant tortoise" },
        { label: "Box Turtle", href: "/animals/box-turtle", description: "A smaller turtle" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
