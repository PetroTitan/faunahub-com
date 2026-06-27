import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/scallop";
const TITLE = "Scallop: Swimming Bivalve With Dozens of Eyes";
const DESC =
  "Learn about scallops (family Pectinidae), fan-shaped bivalve molluscs that can swim by clapping their shells and have rows of tiny eyes along the mantle.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("scallop"),
});

export default function ScallopPage() {
  return (
    <AnimalProfileLayout
      commonName="Scallop"
      scientificName="family Pectinidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Mollusk","Bivalve","Filter feeder"]}
      image={getAnimalImage("scallop") ?? undefined}
      galleryImages={getAnimalGalleryImages("scallop")}
      sources={ANIMAL_SOURCES["scallop"]}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            Scallops are marine bivalve molluscs of the family Pectinidae, easily recognised by their fan-shaped, often ribbed shells and the small projecting &quot;ears&quot; beside the hinge. Unlike most bivalves, which stay anchored or buried, many scallops can actively swim. By rapidly clapping their two shell valves together they jet water and propel themselves through the water, a behaviour they often use to escape predators such as sea stars.
          </p>
          <p>
            Another striking feature is their vision. Along the edge of the fleshy mantle, many scallops carry rows of dozens of tiny eyes, each built with a lens and a curved internal mirror. These eyes detect movement, shadow, and changes in light, helping the animal sense approaching threats. As filter feeders, scallops strain plankton from the water and live on sandy and gravelly seabeds across many seas.
          </p>
          <p>
            Details such as size, exact range, behaviour, and conservation standing vary by species and region, so specifics should be checked against authoritative sources like Animal Diversity Web, Smithsonian Ocean, NOAA, WoRMS, and the IUCN. Scallops are widely fished and eaten by people; this page is educational and does not provide medical, food-safety, harvesting, or treatment advice. For any food-safety, allergy, or harvesting questions, contact a qualified professional or local authority.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Scallops are true bivalve molluscs, members of the family Pectinidae within the class Bivalvia. Like clams, oysters, and mussels, they have a body enclosed between two hinged shell valves and feed by filtering water, but the swimming ability and the rows of mantle eyes set many scallops apart from their relatives. A familiar example used to represent the group is the great scallop, <em>Pecten maximus</em>. The family contains many species across the world&#39;s oceans, and the common name &quot;scallop&quot; is applied broadly across these pectinid bivalves.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            A scallop&#39;s shell is typically fan- or disc-shaped, frequently marked with raised ribs that radiate out from the hinge, and bears a pair of flattened wing-like extensions called &quot;ears&quot; on either side of the hinge line. The two valves may differ slightly in curvature, with one often flatter than the other. Colour and patterning vary widely between species. Around the rim of the mantle sit numerous small eyes, sometimes appearing as a row of tiny bright dots, together with sensory tentacles that respond to the surrounding water.
          </p>
        </>
      }
      habitat={
        <p>
          Scallops live on the seabed in marine waters, generally favouring sandy and gravelly bottoms where they can rest or move across open substrate. Different species occupy different depths and regions, from coastal shallows to deeper offshore grounds, and their precise distribution varies by species. Some lie loosely on the bottom while others may attach when young. Because habitat and range differ across the family, specific details for a given species should be confirmed against authoritative marine references.
        </p>
      }
      diet={
        <p>
          Scallops are filter feeders. They draw seawater across their gills and strain out plankton and other fine suspended particles, which they then pass toward the mouth. Through this constant filtering they take part in the broader cycling of nutrients and particles in their seabed communities. As prey, scallops are eaten by predators such as sea stars, and their swimming escape response is closely tied to this predator-prey relationship.
        </p>
      }
      behavior={
        <p>
          The most distinctive scallop behaviour is swimming. By snapping the valves shut and expelling jets of water, the animal can lift off the bottom and move in a series of clapping pulses, an unusual ability among bivalves that is mainly used to flee predators. Their many mantle eyes help them detect the movement and shadows of approaching threats, triggering this escape. Scallops are filter-feeding bivalves that spend much of their time resting on the seabed between such movements; reproductive and life-cycle details vary by species.
        </p>
      }
      humanInteraction={
        <p>
          Scallops are widely fished and eaten by people around the world, and they are a familiar bivalve in many coastal economies. This page, however, is an educational profile rather than a food or fishing guide. Shellfish harvesting rules vary by location and authority, and fishing seasons and limits should be checked with local regulators. For any food-safety, allergy, or poisoning concerns, contact a qualified medical professional or local health authority. This page is educational and does not provide medical, food-safety, harvesting, or treatment advice.
        </p>
      }
      faqs={[
        {
          question: "Can scallops really swim?",
          answer:
            "Yes. Unlike most bivalves, many scallops can swim by rapidly clapping their two shell valves together, jetting out water and propelling themselves through the sea. They commonly use this clapping motion to escape predators such as sea stars. The exact swimming ability varies by species.",
        },
        {
          question: "Do scallops have eyes?",
          answer:
            "Many scallops have rows of dozens of small eyes spaced along the edge of the mantle. Each eye contains a lens and a curved internal mirror, and they help detect movement, light, and shadows. This vision helps the animal sense and react to approaching threats.",
        },
        {
          question: "What do scallops eat?",
          answer:
            "Scallops are filter feeders. They draw in seawater and strain out plankton and other fine suspended particles using their gills. Through this feeding they take part in cycling nutrients within their seabed communities.",
        },
        {
          question: "Are scallops eaten by people?",
          answer:
            "Scallops are widely fished and eaten by people in many parts of the world. This profile is educational and does not offer food-safety, allergy, or harvesting guidance. For such questions, contact a qualified professional or local authority, as harvesting rules vary by location.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Scallops (marine bivalve molluscs)" },
        { label: "Higher classification", value: "Family Pectinidae, class Bivalvia" },
        { label: "Diet", value: "Filter feeder; strains plankton and fine particles" },
        { label: "Notable trait", value: "Can swim by clapping shells; rows of tiny mantle eyes" },
        { label: "Habitat", value: "Sandy and gravelly seabeds in marine waters" },
        { label: "Distribution", value: "Many seas worldwide; varies by species" },
        { label: "Human interaction", value: "Widely fished and eaten; harvesting rules vary by authority" },
        { label: "Conservation status", value: "Varies by species; some assessed" },
      ]}
      relatedLinks={[
        { label: "Clam Profile", href: "/animals/clam", description: "A burrowing bivalve mollusc" },
        { label: "Oyster Profile", href: "/animals/oyster", description: "A reef-building bivalve" },
        { label: "Giant Clam Profile", href: "/animals/giant-clam", description: "The largest living bivalve" },
        { label: "Mussel Profile", href: "/animals/mussel", description: "An attached bivalve" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
