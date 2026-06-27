import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/mussel";
const TITLE = "Mussel: Blue Mussel Facts, Habitat, and Ecology";
const DESC =
  "Learn about mussels, bivalve molluscs like the blue mussel (Mytilus edulis). Explore their shells, byssal threads, filter feeding, habitat, and ecological role.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("mussel"),
});

export default function MusselPage() {
  return (
    <AnimalProfileLayout
      commonName="Mussel"
      scientificName="bivalve molluscs (e.g. Mytilus edulis)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Mollusk","Bivalve","Filter feeder"]}
      image={getAnimalImage("mussel") ?? undefined}
      galleryImages={getAnimalGalleryImages("mussel")}
      sources={ANIMAL_SOURCES.mussel}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            Mussels are bivalve molluscs with two hinged shell halves protecting a soft body inside. The most familiar reference is the blue mussel (<em>Mytilus edulis</em>), a marine species found along many temperate coasts. Marine mussels commonly live attached to rocks and other hard surfaces in the intertidal and shallow subtidal zones, where they anchor themselves with strong protein fibres known as byssal threads, sometimes called the &quot;beard.&quot;
          </p>
          <p>
            As filter feeders, mussels draw in water and strain out plankton and organic particles. Dense mussel beds can help filter coastal water and provide structure and shelter for many other animals, making them an important part of nearshore ecosystems. There are also freshwater mussels, a separate group, which are among the most imperilled animals in some regions.
          </p>
          <p>
            Details such as exact range, life span, and conservation status vary widely by species and region, and any specific figures should be checked against authoritative sources such as the Smithsonian, Animal Diversity Web, WoRMS, or NOAA. This page is educational and is not a culinary, harvesting, or foraging guide.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Mussels are molluscs in the class Bivalvia, the same broad group that includes clams, oysters, and scallops. \&quot;Mussel\&quot; is a common name applied to several families rather than a single species; marine mussels such as the blue mussel (<em>Mytilus edulis</em>) belong to the family Mytilidae, while freshwater mussels form separate lineages. Because the name spans many species, biology and ecology differ considerably across the group, and characteristics described for one species should not be assumed to apply to all.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            A mussel has two hinged, roughly symmetrical shell halves (valves) that close around a soft body. The blue mussel (<em>Mytilus edulis</em>) typically shows an elongated, somewhat wedge-shaped shell that is often dark blue, blue-black, or brownish, sometimes with a smoother surface than many other bivalves. A distinctive feature is the cluster of byssal threads, tough protein fibres the animal secretes to attach itself firmly to rocks and other hard surfaces. Shell size, colour, and shape vary by species, age, and local conditions.
          </p>
        </>
      }
      habitat={
        <p>
          Marine mussels are commonly associated with the intertidal and shallow subtidal zones, where they attach to rocks, pilings, and other hard surfaces, often forming dense beds. The blue mussel is widely reported along temperate coasts in the Northern Hemisphere, though precise distributions differ among species and regions. Freshwater mussels live in rivers, streams, and lakes and represent a distinct group with their own habitat needs. For authoritative range and habitat details, consult sources such as WoRMS, the Smithsonian, or regional marine and wildlife agencies.
        </p>
      }
      diet={
        <p>
          Mussels are filter feeders. They draw water in through their bodies and strain out plankton and suspended organic particles, then expel the filtered water. Because each mussel processes a continuous flow of water, large mussel beds can play a meaningful role in filtering and clarifying coastal water. This feeding activity also links mussels closely to the productivity and water quality of the habitats they occupy, and the specifics of their diet vary with location and the plankton available.
        </p>
      }
      behavior={
        <p>
          Mussels are largely sessile as adults, anchoring in place with byssal threads while remaining capable of slow repositioning in some species. They tend to live in aggregations, and dense beds create three-dimensional structure that shelters smaller invertebrates and other animals. Many marine mussels release eggs and sperm into the water, where fertilised eggs develop into free-swimming larvae that drift before settling onto a hard surface and growing into attached adults. Life cycles, reproductive timing, and longevity vary by species and region.
        </p>
      }
      humanInteraction={
        <p>
          Mussels have long been gathered as a seafood and are also valued by scientists as indicators of coastal water quality, since their filter feeding reflects local conditions. Researchers have studied the strong, water-resistant byssal threads for insights into natural adhesives. This profile is educational and does not provide harvesting, foraging, preparation, or food-safety guidance; collection and consumption of wild shellfish are regulated in many areas and can carry health considerations, so anyone with questions should consult local authorities or qualified professionals. Many freshwater mussel species are of conservation concern, and observing rather than disturbing wild individuals helps protect them.
        </p>
      }
      faqs={[
        {
          question: "What is a mussel?",
          answer:
            "A mussel is a bivalve mollusc with two hinged shell halves enclosing a soft body. The most familiar example is the blue mussel (Mytilus edulis), a marine species. The name \"mussel\" covers both marine and freshwater groups, so biology varies by species.",
        },
        {
          question: "What are byssal threads, or the \"beard\"?",
          answer:
            "Byssal threads are tough protein fibres that a mussel secretes to anchor itself to rocks and other hard surfaces. They are sometimes collectively called the \"beard.\" Their strength and water resistance have made them a subject of scientific interest in the study of natural adhesives.",
        },
        {
          question: "What do mussels eat?",
          answer:
            "Mussels are filter feeders that draw in water and strain out plankton and suspended organic particles. Because they continuously process water, dense mussel beds can help filter coastal water. The specifics of their diet vary with location and the plankton present.",
        },
        {
          question: "Are freshwater mussels the same as marine mussels?",
          answer:
            "No, freshwater mussels are a separate group from marine mussels such as the blue mussel, though both are bivalve molluscs. Freshwater mussels live in rivers, streams, and lakes and have their own distinct biology. Many freshwater species are among the most imperilled animals in some regions.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Bivalve molluscs (mussels); reference species blue mussel (Mytilus edulis)" },
        { label: "Higher classification", value: "Class Bivalvia; marine mussels in family Mytilidae" },
        { label: "Diet", value: "Filter feeders straining plankton and organic particles from water" },
        { label: "Notable trait", value: "Attach to hard surfaces with strong protein byssal threads (the \"beard\")" },
        { label: "Habitat", value: "Intertidal and shallow subtidal hard surfaces (marine); rivers and lakes (freshwater group)" },
        { label: "Distribution", value: "Widespread; varies by species and region — check authoritative sources" },
        { label: "Human interaction", value: "Long-used seafood and water-quality indicators; this page is educational, not a harvesting guide" },
        { label: "Conservation status", value: "Varies by species; many marine species common, but many freshwater mussels are imperilled" },
      ]}
      relatedLinks={[
        { label: "Clam Profile", href: "/animals/clam", description: "Another burrowing bivalve mollusc" },
        { label: "Oyster Profile", href: "/animals/oyster", description: "A reef-building bivalve mollusc" },
        { label: "Nautilus Profile", href: "/animals/nautilus", description: "A shelled cephalopod mollusc" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "How marine life changes with depth" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
