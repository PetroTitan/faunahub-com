import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/galapagos-tortoise";
const TITLE = "Galapagos Tortoise: Giant Reptile of the Islands";
const DESC =
  "Learn about the Galapagos tortoise, a complex of giant tortoise species endemic to the Galapagos Islands, including its ecology, biology, and conservation.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("galapagos-tortoise"),
});

export default function GalapagosTortoisePage() {
  return (
    <AnimalProfileLayout
      commonName="Galapagos Tortoise"
      scientificName="Chelonoidis (species complex)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile","Giant tortoise","Galápagos endemic"]}
      image={getAnimalImage("galapagos-tortoise") ?? undefined}
      galleryImages={getAnimalGalleryImages("galapagos-tortoise")}
      sources={ANIMAL_SOURCES["galapagos-tortoise"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The Galapagos tortoise is one of the most recognizable reptiles in the world: a giant, slow-moving land tortoise endemic to the Galapagos Islands of Ecuador. It is famous both for its great size and for being among the longest-lived land animals known. Rather than a single species, the name refers to a complex of multiple species and island populations grouped under the genus <em>Chelonoidis</em>, and biologists continue to study and revise how these populations are classified.
          </p>
          <p>
            Because the Galapagos tortoise is a complex of distinct lineages spread across different islands and volcanoes, its conservation situation is best understood island by island rather than as a single figure. Several of these tortoise species and populations are threatened, with some assessed as Critically Endangered, while at least one famous lineage has been lost: the Pinta Island tortoise, whose last known individual, known as Lonesome George, died in 2012.
          </p>
          <p>
            These tortoises have long been a focus of scientific interest and of major conservation and captive-breeding programs in the Galapagos. This profile is intended as an educational overview of the group&#39;s biology, ecology, and the challenges it faces, rather than a guide to keeping or handling wild reptiles.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Galapagos tortoise belongs to the genus <em>Chelonoidis</em>, within the family Testudinidae, the family of land tortoises, in the order Testudines (turtles, terrapins, and tortoises). It is not a single species but a species complex: several recognized species and island-specific populations are grouped together under the common name, and their precise number and boundaries have been revised as genetic studies clarify their relationships. The various lineages are thought to descend from ancestral tortoises that reached the Galapagos Islands long ago and diversified across the archipelago. Because classification within <em>Chelonoidis</em> remains an area of active research, the group is best described at the genus and complex level rather than tied to one definitive species name.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Galapagos tortoises are large, heavy-bodied reptiles with a domed or, in some populations, more flattened &quot;saddleback&quot; shell, sturdy elephantine legs, and a long neck. Adults are among the largest living tortoises, and the shape of the carapace varies between island populations: dome-shelled forms tend to occur in wetter, more vegetated highlands, while saddleback forms, with a shell raised at the front of the neck, are associated with drier, lower islands where vegetation is sparser. Their coloration is generally dull brown or grey, helping them blend into rocky and scrubby surroundings. The combination of immense size, a high-domed or saddle-shaped shell, and slow, deliberate movement makes the group easy to recognize.
          </p>
        </>
      }
      habitat={
        <p>
          The Galapagos tortoise is endemic to the Galapagos Islands, a volcanic archipelago that is part of Ecuador in the eastern Pacific Ocean, and it is found in parts of this island group rather than anywhere on the South American mainland. Different species and populations are associated with different islands and volcanoes within the archipelago, and within an island they may occupy habitats ranging from arid lowland scrub to humid highland zones with denser vegetation. Some populations make seasonal movements between lower and higher elevations as conditions and food availability change. Because each lineage is tied to particular islands, the group as a whole is a classic example of an animal whose entire natural range is confined to one small set of oceanic islands.
        </p>
      }
      diet={
        <p>
          Galapagos tortoises are herbivores, feeding on a variety of plant material including grasses, leaves, cacti, fallen fruit, and other vegetation available in their habitat. The specific diet varies with island and season, and tortoises in arid zones may rely on drought-tolerant plants such as cactus pads, while those in humid highlands graze on softer vegetation. They are able to go for long periods with little food or fresh water, drawing on stored fat and water reserves, which historically helped them survive in dry conditions. Their slow metabolism suits this low-energy, plant-based way of life.
        </p>
      }
      behavior={
        <>
          <p>
            These tortoises are slow-moving, largely solitary animals that spend much of the day grazing, resting, and regulating their body temperature by basking or seeking shade and water. They are noted for their longevity, ranking among the longest-lived land animals, and they grow and mature slowly over many years. Reproduction involves females digging nest chambers in suitable ground and laying eggs that incubate in the warmth of the soil, with hatchlings emerging to face high natural mortality in their early life. As cold-blooded reptiles, their activity levels rise and fall with temperature and the availability of food and water.
          </p>
          <p>
            As large herbivores, Galapagos tortoises play an important role in their island ecosystems. Through grazing and browsing they influence which plants grow and persist, and by moving across the landscape and eating fruit they help disperse seeds, contributing to the distribution of certain plants. Their movements and trampling can shape vegetation and small-scale habitat structure, and their presence is closely interwoven with the plant communities of the islands they inhabit. As a result, the loss or decline of tortoise populations on an island can have wider effects on that island&#39;s ecology, which is one reason their conservation is considered significant.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Galapagos tortoises have a long and difficult history with people: past exploitation and the introduction of non-native animals and plants to the islands contributed to steep declines in several populations. Today the group is the subject of major conservation and captive-breeding efforts aimed at protecting and recovering island populations. Conservation status varies by island and species: the IUCN Red List assesses these tortoises individually rather than as a single group, and several are listed as threatened, some as Critically Endangered, while the Pinta Island lineage is now considered lost. These assessments are made by recognized authorities and can change as populations and threats are re-evaluated. Galapagos tortoises are protected wild animals, not pets, and observation in the wild is managed under strict rules; questions about wildlife conflict or protected-species concerns should be directed to local wildlife authorities.
        </p>
      }
      faqs={[
        {
          question: "Is the Galapagos tortoise a single species?",
          answer:
            "No. \"Galapagos tortoise\" refers to a complex of multiple species and island populations in the genus Chelonoidis. Scientists continue to revise how many distinct species and lineages it contains.",
        },
        {
          question: "Where do Galapagos tortoises live?",
          answer:
            "They are endemic to the Galapagos Islands, a volcanic archipelago belonging to Ecuador. Different species and populations are tied to particular islands and volcanoes within the group, not to the South American mainland.",
        },
        {
          question: "What is the conservation status of the Galapagos tortoise?",
          answer:
            "It varies by island and species rather than being a single category. The IUCN Red List assesses these tortoises individually, and several are threatened, with some Critically Endangered; the Pinta Island lineage, represented by Lonesome George, is now considered lost.",
        },
        {
          question: "Why are Galapagos tortoises famous for living so long?",
          answer:
            "They are among the longest-lived land animals, growing and maturing slowly over many years. Their slow metabolism and ability to endure periods with little food or water are part of this long lifespan.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Chelonoidis (species complex)" },
        { label: "Animal group", value: "Reptile (giant land tortoise)" },
        { label: "Family/order", value: "Testudinidae; Testudines" },
        { label: "Size", value: "Among the largest living tortoises" },
        { label: "Diet", value: "Herbivore (grasses, cacti, leaves, fruit)" },
        { label: "Habitat", value: "Arid lowland scrub to humid highlands" },
        { label: "Range", value: "Endemic to the Galapagos Islands, Ecuador" },
        { label: "Conservation status", value: "Varies by island/species (IUCN); some Critically Endangered, one lineage lost" },
      ]}
      relatedLinks={[
        { label: "Tortoise", href: "/animals/tortoise", description: "Tortoises more broadly" },
        { label: "Turtle", href: "/animals/turtle", description: "Turtles, for contrast" },
        { label: "Marine Iguana", href: "/animals/marine-iguana", description: "Another Galápagos reptile" },
        { label: "South American fauna", href: "/fauna/continents/south-america", description: "Animals of South America" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "Conservation status & the Red List" },
      ]}
    />
  );
}
