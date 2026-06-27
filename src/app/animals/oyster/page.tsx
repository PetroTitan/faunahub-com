import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/oyster";
const TITLE = "Oyster: Filter-Feeding Marine Bivalve Mollusc Facts";
const DESC =
  "Learn about oysters, marine bivalve molluscs like the eastern and Pacific oyster, including their shells, filter feeding, reef-building role, and ecology.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("oyster"),
});

export default function OysterPage() {
  return (
    <AnimalProfileLayout
      commonName="Oyster"
      scientificName="bivalve molluscs (e.g. Crassostrea, Magallana)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Mollusk","Bivalve","Filter feeder"]}
      image={getAnimalImage("oyster") ?? undefined}
      galleryImages={getAnimalGalleryImages("oyster")}
      sources={ANIMAL_SOURCES.oyster}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            Oysters are marine bivalve molluscs known for their rough, irregular shells and their habit of cementing themselves to hard surfaces in estuaries and shallow coastal waters. Familiar examples include the eastern oyster (<em>Crassostrea virginica</em>) and the Pacific oyster (<em>Magallana gigas</em>, formerly <em>Crassostrea gigas</em>). &quot;Oyster&quot; is a common name applied across several groups of bivalves, so traits described here are general and vary by species.
          </p>
          <p>
            As filter feeders, oysters strain plankton and fine particles from large volumes of water. Where they gather in dense reefs, they can improve water clarity and create habitat, shoreline protection, and food for many other animals, which is why oysters are widely used in coastal restoration. Some oysters can produce pearls, although the prized gem-quality pearls come mainly from certain pearl oysters rather than the common edible kinds.
          </p>
          <p>
            Details such as size, range, behaviour, and conservation status vary by species and region, and the names applied to &quot;oysters&quot; cover several distinct lineages. Treat the figures here as general orientation and check specifics against authoritative sources such as the Smithsonian, WoRMS, NOAA, and Animal Diversity Web. This page is educational and is not a culinary, harvesting, or handling guide.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Oysters are members of the phylum Mollusca and the class Bivalvia, the bivalves, which have a body enclosed by a two-part hinged shell. The term \&quot;oyster\&quot; spans several families and genera rather than a single species; the edible true oysters include genera such as <em>Crassostrea</em>, <em>Magallana</em>, and <em>Ostrea</em>, while the pearl oysters belong to a separate group. Because the name is applied broadly, classification and biology vary by species and region, and exact placements are best confirmed against taxonomic references such as WoRMS.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            Oysters have rough, irregular, often asymmetrical shells made of two valves joined at a hinge, with surfaces that can be layered, flaky, or encrusted with other organisms. Shell colour ranges from grey and brown to off-white, and the interior is typically smoother and paler. The eastern oyster (<em>Crassostrea virginica</em>) and the Pacific oyster (<em>Magallana gigas</em>) both show this rugged, sculptured form, though shape varies widely depending on species and on the surface to which the animal is attached. Their irregular outlines reflect a life spent cemented in place rather than moving freely.
          </p>
        </>
      }
      habitat={
        <p>
          Oysters are commonly associated with estuaries and shallow coastal waters, where they attach to hard surfaces such as rocks, pilings, or the shells of other oysters. They often build dense aggregations known as oyster reefs or beds in brackish to marine conditions. Distribution varies by species: the eastern oyster is associated with Atlantic and Gulf coasts of the Americas, while the Pacific oyster originates in the western Pacific and has been introduced to many regions. Specific ranges, depths, and tolerances differ between species and locations, so local sources are the best guide.
        </p>
      }
      diet={
        <p>
          Oysters are filter feeders that draw water across their gills and strain out plankton, algae, and suspended particles. A single oyster can process large volumes of water, and dense reefs collectively filter substantial amounts, which can improve water clarity in the surrounding area. This feeding activity links oysters closely to the health of their ecosystems, and the structure of their reefs also provides habitat and shelter for many other coastal animals. Their ecological role in filtration and reef-building is a major reason they feature in coastal restoration efforts.
        </p>
      }
      behavior={
        <p>
          Adult oysters are largely sessile, cementing themselves to a surface and remaining fixed in place, opening and closing their valves to feed and respire. Their life cycle typically begins with free-swimming larvae that drift in the water before settling and attaching to a suitable hard surface, after which they grow their characteristic shell. Many oysters can reproduce in great numbers, and successive generations settling on one another help form reefs. Specific reproductive timing, growth rates, and life-history details vary by species and region.
        </p>
      }
      humanInteraction={
        <p>
          Oysters have long been eaten by people and are widely cultivated, and they also draw interest for their role in coastal restoration and water filtration. This profile is educational and does not provide culinary, harvesting, cultivation, or handling instructions. It is best to avoid disturbing wild oyster reefs, which are sensitive habitats, and to consult local authorities or qualified specialists for any questions about harvesting rules, water quality, or food safety in a given area.
        </p>
      }
      faqs={[
        {
          question: "What is an oyster?",
          answer:
            "An oyster is a marine bivalve mollusc with a rough, two-part hinged shell that typically cements itself to hard surfaces in estuaries and shallow coastal waters. The name covers several groups, including edible true oysters such as the eastern oyster (Crassostrea virginica) and Pacific oyster (Magallana gigas). Traits vary by species and region.",
        },
        {
          question: "Do all oysters make pearls?",
          answer:
            "Some oysters can produce pearls, but the prized gem-quality pearls come mainly from certain pearl oysters rather than from the common edible kinds. Any pearls formed by edible oysters are usually small and not valued as gems. Pearl formation varies by species.",
        },
        {
          question: "How do oysters help their ecosystems?",
          answer:
            "Oysters are filter feeders that strain plankton and particles from large volumes of water, which can improve water clarity where reefs are dense. Their reefs also create habitat, shoreline protection, and food for many other animals. These qualities are why oysters are widely used in coastal restoration.",
        },
        {
          question: "What is the difference between the eastern and Pacific oyster?",
          answer:
            "The eastern oyster (Crassostrea virginica) is associated with Atlantic and Gulf coasts of the Americas, while the Pacific oyster (Magallana gigas, formerly Crassostrea gigas) originates in the western Pacific and has been introduced elsewhere. Both are rugged, reef-building filter feeders, but shell shape, range, and other details vary by species and region.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Marine bivalve molluscs (oysters)" },
        { label: "Higher classification", value: "Phylum Mollusca, class Bivalvia" },
        { label: "Diet", value: "Filter feeders straining plankton and suspended particles from water" },
        { label: "Notable trait", value: "Cement to hard surfaces and build reefs; some species can form pearls" },
        { label: "Habitat", value: "Estuaries and shallow coastal waters; attached to hard surfaces" },
        { label: "Distribution", value: "Coastal and estuarine; varies by species (e.g., Americas, western Pacific)" },
        { label: "Human interaction", value: "Long eaten and cultivated, and used in coastal restoration; this page is educational, not a harvesting or food-safety guide" },
        { label: "Conservation status", value: "Varies by species and region; some reefs reduced or restored, not assessed as a single group" },
      ]}
      relatedLinks={[
        { label: "Mussel Profile", href: "/animals/mussel", description: "Another attached bivalve mollusc" },
        { label: "Clam Profile", href: "/animals/clam", description: "A burrowing bivalve mollusc" },
        { label: "Nautilus Profile", href: "/animals/nautilus", description: "A shelled cephalopod mollusc" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "How marine life changes with depth" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
