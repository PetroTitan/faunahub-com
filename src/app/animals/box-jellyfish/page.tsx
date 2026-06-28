import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/box-jellyfish";
const TITLE = "Box Jellyfish: Cubozoa Facts and Biology";
const DESC =
  "Box jellyfish (class Cubozoa) are cube-bodied marine invertebrates with stinging tentacles, including Chironex fleckeri. Learn their biology and ecology.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("box-jellyfish"),
});

export default function BoxJellyfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Box Jellyfish"
      scientificName="Cubozoa (e.g. Chironex fleckeri)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Invertebrate","Cnidarian","Marine"]}
      image={getAnimalImage("box-jellyfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("box-jellyfish")}
      sources={ANIMAL_SOURCES["box-jellyfish"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            Box jellyfish are a group of marine invertebrates that make up the class Cubozoa, named for their distinctive cube-shaped or boxy bell. Unlike the rounded bells of most other jellyfish, cubozoans have a four-sided body with tentacles trailing from the corners, and they are notable among jellyfish for their relatively complex sensory structures, including image-forming eyes.
          </p>
          <p>
            The class includes many different species that vary widely in size, distribution and the potency of their stinging cells. The best known is the large Australian box jellyfish (<em>Chironex fleckeri</em>), found in parts of northern Australian and Indo-Pacific coastal waters, whose venom is considered medically very significant. Because &quot;box jellyfish&quot; spans so many species, no single description of size, range or sting severity applies to all of them.
          </p>
          <p>
            This profile presents box jellyfish as a biological group, summarising what is generally understood about their anatomy, ecology and behaviour. Any risk associated with their stinging cells is described calmly and factually, and people with sting or medical concerns should contact qualified medical professionals or local health authorities rather than relying on general information.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Box jellyfish form the class Cubozoa within the phylum Cnidaria, the same broad group that includes other jellyfish, sea anemones and corals. They are distinguished from the more familiar &quot;true&quot; jellyfish of the class Scyphozoa by their cube-shaped bell, their well-developed sensory organs and details of their life cycle. The class contains numerous genera and species; the large Australian box jellyfish, <em>Chironex fleckeri</em>, is one of the most studied, but the name &quot;box jellyfish&quot; is applied across the whole class rather than to a single species. Because cubozoans are such a varied group, statements about them should generally be made at the level of the class or of named species rather than treated as a single uniform animal.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Box jellyfish are recognised by their roughly cube-shaped, transparent to pale bluish bell, which sets them apart from the dome- or saucer-shaped bells of many other jellyfish. From the corners of the bell hang one or more tentacles, which in larger species such as <em>Chironex fleckeri</em> can be numerous and trail well behind the swimming animal. The tentacles bear specialised stinging cells called cnidocytes, containing microscopic capsules known as nematocysts. Cubozoans also possess clusters of sensory structures, called rhopalia, set into the sides of the bell, some of which contain surprisingly complex eyes with lenses. Sizes range considerably across the class, from small species only a few centimetres across to larger forms whose bell may reach the size of a person&#39;s hand or larger.
          </p>
        </>
      }
      habitat={
        <p>
          Box jellyfish are marine animals found in warm coastal and oceanic waters in various parts of the world, with many species associated with tropical and subtropical seas. The large Australian box jellyfish, <em>Chironex fleckeri</em>, occurs in parts of northern Australian and broader Indo-Pacific coastal waters, where it is often linked with shallow, sheltered areas such as beaches, estuaries and mangrove-fringed coasts, particularly during warmer months. Other cubozoan species are distributed across parts of the Indo-Pacific, the Atlantic and elsewhere, so the group as a whole is not limited to any one region. Their presence inshore can vary seasonally and with local conditions, and distribution differs from species to species rather than following a single pattern.
        </p>
      }
      diet={
        <p>
          Box jellyfish are active carnivores that capture prey using the stinging cells on their tentacles. Depending on the species, their diet typically includes small fish, shrimp and other small crustaceans, and similar drifting or swimming animals. When prey contacts the tentacles, the nematocysts discharge and help subdue it, after which the tentacles draw the food toward the bell for digestion. Larger, more powerful swimmers such as <em>Chironex fleckeri</em> are capable of pursuing comparatively mobile prey, which is unusual among jellyfish and reflects the group&#39;s relatively well-developed senses and coordinated swimming.
        </p>
      }
      behavior={
        <>
          <p>
            Compared with many drifting jellyfish, box jellyfish are notably active swimmers that can move in a directed way, pulsing their bell to travel and apparently using their eyes to respond to their surroundings and avoid obstacles. Like other cnidarians, cubozoans generally have a life cycle that alternates between a small, attached polyp stage and the free-swimming medusa, the familiar bell-shaped adult; the polyp can give rise to the medusa form, and timing is often influenced by water temperature and season. Adults are typically most encountered inshore during warmer periods in many regions. Much remains to be learned about the detailed behaviour and full life cycles of many cubozoan species.
          </p>
          <p>
            As predators of small fish and invertebrates, box jellyfish form part of the food web in the coastal and open-water habitats where they occur, helping to link smaller animals to the larger marine community. They may in turn be eaten by some specialised predators, such as certain sea turtles and fish that are adapted to feed on gelatinous animals. Their seasonal appearance inshore can also influence the local movements and behaviour of other species. As with other jellyfish, cubozoans contribute to the broader functioning of marine ecosystems, though the specific ecological roles of individual species are still incompletely understood.
          </p>
        </>
      }
      humanInteraction={
        <p>
          Some box jellyfish, including the large Australian box jellyfish (<em>Chironex fleckeri</em>), have venom that is medically very significant, and stings can be serious; this is a calm, factual point rather than a reason for alarm. Box jellyfish are not pets and should not be handled, captured or kept. Anyone who is stung, or who has questions about stings or symptoms, should seek help from qualified medical professionals or local health authorities, and should follow signage and advice from local lifeguards and wildlife authorities where box jellyfish may be present. The class Cubozoa as a whole has not been assessed by the IUCN Red List as a group, and conservation status varies by species rather than applying uniformly; assessments can change over time as more is learned.
        </p>
      }
      faqs={[
        {
          question: "What is a box jellyfish?",
          answer:
            "Box jellyfish are marine invertebrates of the class Cubozoa, named for their distinctive cube-shaped bell with tentacles trailing from the corners. The name covers many species that differ in size, range and sting potency.",
        },
        {
          question: "Are all box jellyfish equally dangerous?",
          answer:
            "No. \"Box jellyfish\" refers to many species of varying potency, and only some, such as the large Australian box jellyfish (Chironex fleckeri), are considered to have medically very significant venom. The risk should not be generalised across the whole group.",
        },
        {
          question: "What should someone do about a box jellyfish sting?",
          answer:
            "Sting or medical concerns should be directed to qualified medical professionals or local health authorities, who can give appropriate guidance. People should also follow local signage and advice from lifeguards and wildlife authorities where these animals may occur.",
        },
        {
          question: "What is the conservation status of box jellyfish?",
          answer:
            "Box jellyfish are not assessed by the IUCN Red List as a single group, and any status varies by species rather than applying to the whole class. Conservation assessments can change over time as more information becomes available.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Class Cubozoa (e.g. Chironex fleckeri)" },
        { label: "Animal group", value: "Invertebrate (cnidarian jellyfish)" },
        { label: "Family/order", value: "Class Cubozoa, phylum Cnidaria" },
        { label: "Size", value: "Varies by species; bell from a few cm to hand-sized or larger" },
        { label: "Diet", value: "Carnivorous; small fish, shrimp and other small crustaceans" },
        { label: "Habitat", value: "Warm coastal and oceanic marine waters" },
        { label: "Range", value: "Many species worldwide; Chironex fleckeri in parts of northern Australian and Indo-Pacific waters" },
        { label: "Conservation status", value: "Not assessed by the IUCN as a group; varies by species" },
      ]}
      relatedLinks={[
        { label: "Jellyfish", href: "/animals/jellyfish", description: "Jellyfish more broadly" },
        { label: "Blue-ringed Octopus", href: "/animals/blue-ringed-octopus", description: "Another venomous marine animal" },
        { label: "Coral", href: "/animals/coral", description: "Another cnidarian" },
        { label: "Oceania fauna", href: "/fauna/continents/oceania", description: "Animals of Oceania" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
