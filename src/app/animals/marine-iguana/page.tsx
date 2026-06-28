import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/marine-iguana";
const TITLE = "Marine Iguana: The Sea-Foraging Galapagos Lizard";
const DESC =
  "Learn about the marine iguana, a lizard endemic to the Galapagos Islands that grazes on algae underwater, basks on lava rocks, and \"sneezes\" out salt.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("marine-iguana"),
});

export default function MarineIguanaPage() {
  return (
    <AnimalProfileLayout
      commonName="Marine Iguana"
      scientificName="Amblyrhynchus cristatus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Lizard","Galápagos endemic"]}
      image={getAnimalImage("marine-iguana") ?? undefined}
      galleryImages={getAnimalGalleryImages("marine-iguana")}
      sources={ANIMAL_SOURCES["marine-iguana"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The marine iguana (<em>Amblyrhynchus cristatus</em>) is a reptile endemic to the Galapagos Islands, a volcanic archipelago that belongs to Ecuador. It holds a distinctive place in the natural world as the only lizard known to forage in the sea, grazing on marine algae growing on submerged and intertidal rocks. Between feeding bouts, it basks on dark lava shorelines to recover the body heat lost in cool ocean water.
          </p>
          <p>
            Adapted to a coastal and partly aquatic life, the marine iguana is a familiar sight along the rocky shores of many Galapagos islands. One of its most recognizable behaviors is the way it expels excess salt taken in while feeding, producing a fine spray through a sneeze-like motion that often leaves pale crusts on its head. This combination of sea grazing, sun basking, and salt expulsion makes it one of the most studied and instantly recognizable animals of the islands.
          </p>
          <p>
            The IUCN Red List classifies the marine iguana as Vulnerable, an assessment that reflects current understanding and that can be revised as conditions and research change. Its restriction to a single island group means the species is closely tied to the health of Galapagos coastal habitats.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The marine iguana is a reptile in the order Squamata and the family Iguanidae, the iguanas and their relatives. Its scientific name is <em>Amblyrhynchus cristatus</em>, and it is the only species placed in the genus <em>Amblyrhynchus</em>, making it a distinctive member of the iguana lineage. It is related to the Galapagos land iguanas (genus <em>Conolophus</em>), but its sea-foraging way of life sets it apart from all other living lizards. Several subspecies or island forms have been described, reflecting differences among populations on the various islands of the archipelago.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            The marine iguana is a stocky, robust lizard with a blunt, short snout suited to scraping algae from rock surfaces. Its skin is usually dark gray to black, which helps it absorb heat while basking on the islands&#39; lava rocks, though some populations take on reddish, greenish, or blotched coloring at certain times of year. A row of low spines runs along the back, and a long, flattened tail aids swimming, while strong limbs and claws help it cling to rocks against the surge of waves. Adults vary considerably in size between islands, and males are typically larger and more heavily built than females.
          </p>
        </>
      }
      habitat={
        <p>
          The marine iguana is endemic to the Galapagos Islands, the volcanic archipelago in the eastern Pacific Ocean that forms part of Ecuador. It occurs on rocky coastlines, intertidal zones, and shallow nearshore waters across parts of the island group, rather than across mainland South America. Individuals are associated with lava shorelines, tide pools, and mangrove-fringed shores where algae grow and where sun-warmed rock is available for basking. Because the species is found only in this single archipelago, its distribution is naturally restricted and closely linked to the islands&#39; coastal environments.
        </p>
      }
      diet={
        <p>
          The marine iguana is primarily herbivorous and feeds almost entirely on marine algae and seaweed. Larger individuals may dive and graze on algae growing on submerged rocks below the tide line, while smaller animals often feed in the intertidal zone where algae are exposed at low tide. Feeding in cool seawater is energetically demanding, so individuals must balance foraging time against the need to return to shore and warm up. Salt taken in with this diet is concentrated by specialized glands and expelled through the nostrils, producing the characteristic sneeze-like spray.
        </p>
      }
      behavior={
        <>
          <p>
            Marine iguanas are most active by day and rely heavily on basking to regulate their body temperature, often gathering in large numbers on warm rocks. As ectotherms entering cold water, they limit and time their dives carefully, returning to shore to recover heat afterward. During the breeding season males may defend small territories and display to one another, and females travel to suitable sandy or soft ground to dig burrows in which they lay their eggs. After an incubation period set by the warmth of the nest, hatchlings emerge and make their own way to the shoreline, where they begin the basking-and-grazing routine of adults.
          </p>
          <p>
            As a sea-grazing herbivore, the marine iguana links the marine and terrestrial systems of the Galapagos, drawing nutrients from algae growing on coastal rocks and returning them to the shore. Its grazing can influence the abundance and distribution of intertidal and shallow-water algae, and its eggs, hatchlings, and adults form part of the food web for native predators and introduced animals. Populations are sensitive to changes in ocean conditions, since shifts in water temperature can affect the algae they depend on, making the species a useful indicator of coastal ecosystem health in the archipelago.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The marine iguana is a protected species within the Galapagos, where access and activities are regulated to safeguard wildlife, and the IUCN Red List lists it as Vulnerable, an assessment that may change with new information. It is a calm, plant-eating reptile and is not a pet; observing wild populations should be done from a respectful distance without feeding, touching, or disturbing the animals, and visitors should follow the guidance of local authorities and conservation managers. Introduced predators, pollution, and disturbance of nesting areas are among the recognized pressures on the species. Anyone encountering an injured iguana or a wildlife concern in the islands should contact local wildlife authorities or park staff rather than intervening directly.
        </p>
      }
      faqs={[
        {
          question: "Where do marine iguanas live?",
          answer:
            "They are endemic to the Galapagos Islands, a volcanic archipelago that belongs to Ecuador, where they occupy rocky coastlines and shallow nearshore waters across parts of the island group. They are not found on the South American mainland.",
        },
        {
          question: "Why do marine iguanas \"sneeze\"?",
          answer:
            "While grazing on algae they take in a lot of salt, which specialized glands concentrate and expel through the nostrils in a sneeze-like spray. This leaves the pale, salty crusts often seen on their heads.",
        },
        {
          question: "What do marine iguanas eat?",
          answer:
            "They are herbivores that feed almost entirely on marine algae and seaweed, grazing either on submerged rocks while diving or in the intertidal zone at low tide. They are the only lizard known to forage in the sea.",
        },
        {
          question: "Are marine iguanas endangered?",
          answer:
            "The IUCN Red List classifies the marine iguana as Vulnerable, an assessment that can be revised as conditions and research change. Its restriction to a single island group makes it sensitive to local pressures and changing ocean conditions.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Amblyrhynchus cristatus" },
        { label: "Animal group", value: "Reptile (lizard)" },
        { label: "Family / order", value: "Iguanidae; Squamata" },
        { label: "Size", value: "Varies by island; males generally larger than females" },
        { label: "Diet", value: "Herbivore; marine algae and seaweed" },
        { label: "Habitat", value: "Rocky coasts, intertidal zones, shallow nearshore waters" },
        { label: "Range", value: "Endemic to the Galapagos Islands (Ecuador)" },
        { label: "Conservation status", value: "Vulnerable (IUCN Red List); subject to change" },
      ]}
      relatedLinks={[
        { label: "Iguana", href: "/animals/iguana", description: "Iguanas more broadly" },
        { label: "Galapagos Tortoise", href: "/animals/galapagos-tortoise", description: "Another Galápagos reptile" },
        { label: "Komodo Dragon", href: "/animals/komodo-dragon", description: "A large lizard, for contrast" },
        { label: "South American fauna", href: "/fauna/continents/south-america", description: "Animals of South America" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
