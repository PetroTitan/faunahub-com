import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/clam";
const TITLE = "Clam: Burrowing Bivalve Molluscs Explained";
const DESC =
  "Learn about clams, burrowing bivalve molluscs like the hard clam (quahog). Explore their shells, filter-feeding, habitat, and ecological role.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-27",
  modifiedTime: "2026-06-27",
  ogImage: getAnimalOgImage("clam"),
});

export default function ClamPage() {
  return (
    <AnimalProfileLayout
      commonName="Clam"
      scientificName="bivalve molluscs (e.g. Mercenaria mercenaria)"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Mollusk","Bivalve","Filter feeder"]}
      image={getAnimalImage("clam") ?? undefined}
      galleryImages={getAnimalGalleryImages("clam")}
      sources={ANIMAL_SOURCES.clam}
      publishedDate="2026-06-27"
      modifiedDate="2026-06-27"
      overview={
        <>
          <p>
            &quot;Clam&quot; is a common name for many burrowing bivalve molluscs that have two roughly equal, hinged shell halves. A familiar reference species is the hard clam, or northern quahog (<em>Mercenaria mercenaria</em>), recognised by its rounded, ridged shell. The name covers a wide range of marine and freshwater animals rather than a single species, so descriptions tend to be general.
          </p>
          <p>
            Most clams live buried in sand or mud, either on the seabed or in freshwater sediments. They extend tube-like siphons up to the surface to draw in water, and they are filter feeders that strain plankton and small particles. Many use a muscular &quot;foot&quot; to burrow. Clams range from tiny species to the giant clams (<em>Tridacna</em>) of tropical reefs, which are among the largest bivalves and host symbiotic algae, and some clams are very long-lived.
          </p>
          <p>
            Because &quot;clam&quot; spans many species, specific details of size, habitat, range, and longevity vary by species and region, and figures should be checked against authoritative sources such as the Smithsonian, WoRMS, and Animal Diversity Web. This page is educational and is not a culinary, harvesting, or collecting guide.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            Clams are bivalve molluscs, a group within the phylum Mollusca whose members have a shell made of two hinged halves (valves). Bivalves also include mussels, oysters, scallops, and cockles. The hard clam (<em>Mercenaria mercenaria</em>) is one widely cited reference for what people mean by a typical clam, while giant clams (<em>Tridacna</em>) sit at the large end of the group. Because \&quot;clam\&quot; is a common name rather than a formal taxonomic rank, the animals it describes belong to several different bivalve families, and their classification varies by species.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            A clam&#39;s most recognisable feature is its pair of roughly equal shell halves, joined at a hinge and able to close together to protect the soft body inside. The hard clam or quahog has a rounded, thick shell marked with concentric ridges, as shown in the hero photograph. Inside the shell, a clam has a muscular foot used for burrowing and one or two siphons that reach toward the sediment surface to move water in and out. Shell shape, size, colour, and texture differ considerably from one clam species to another.
          </p>
        </>
      }
      habitat={
        <p>
          Many clams live buried in soft sediments such as sand or mud, on the seabed in marine settings or within freshwater bottoms. From this buried position they extend siphons upward to reach the water above. Habitats range widely across the group: some clams occur in coastal and estuarine areas, while giant clams (<em>Tridacna</em>) are associated with tropical reefs. Specific distribution and preferred conditions vary by species and region and are best confirmed through authoritative sources rather than generalised across all clams.
        </p>
      }
      diet={
        <p>
          Clams are filter feeders. They draw water in through a siphon and strain out plankton and suspended particles, which provides their food, before passing the water back out. By filtering large volumes of water, clams can play a role in their ecosystems as part of the community of organisms that process suspended material in marine and freshwater sediments. Giant clams (<em>Tridacna</em>) supplement their feeding through symbiotic algae living in their tissues, an arrangement that varies across clam species.
        </p>
      }
      behavior={
        <p>
          Clams are generally slow-moving, spending much of their lives partly or fully buried in sediment. Many use the muscular foot to dig and reposition themselves, while the siphons remain extended toward the surface for feeding and respiration. When disturbed, a clam can withdraw its siphons and foot and close its two shell halves. Life-cycle details, growth rates, and longevity differ by species; some clams are noted for being very long-lived, but specifics should be checked against authoritative sources.
        </p>
      }
      humanInteraction={
        <p>
          People have a long-standing interest in clams, and many clam species are eaten or harvested, though this profile is educational and does not serve as a culinary, collecting, or harvesting guide. Clams are also studied for their role in filtering water and, in the case of some long-lived species, for what their shells can reveal about past environmental conditions. As with any wild animal, it is best to observe clams in their natural setting and avoid disturbing them. This page does not provide handling, harvesting, or preparation instructions.
        </p>
      }
      faqs={[
        {
          question: "What exactly is a clam?",
          answer:
            "\"Clam\" is a common name for many burrowing bivalve molluscs that have two roughly equal, hinged shell halves. A familiar reference is the hard clam or northern quahog (Mercenaria mercenaria). The term covers many different species rather than a single animal.",
        },
        {
          question: "How do clams feed?",
          answer:
            "Clams are filter feeders. They draw in water through a tube-like siphon and strain out plankton and small particles, then return the water. Some, such as giant clams, also benefit from symbiotic algae living in their tissues.",
        },
        {
          question: "Where do clams live?",
          answer:
            "Many clams live buried in sand or mud on the seabed or in freshwater sediments, extending siphons up to the surface. Habitats range from coastal and estuarine areas to tropical reefs in the case of giant clams. Specific distribution varies by species and region.",
        },
        {
          question: "How big can clams get?",
          answer:
            "Clams range from very small species to the giant clams (Tridacna) of tropical reefs, which are among the largest bivalves. Size varies widely across the group, so exact figures depend on the species and should be checked against authoritative sources.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Bivalve molluscs (clams)" },
        { label: "Higher classification", value: "Phylum Mollusca, class Bivalvia" },
        { label: "Diet", value: "Filter feeders straining plankton and particles" },
        { label: "Notable trait", value: "Two hinged shell halves; burrow with a muscular foot and extend siphons" },
        { label: "Habitat", value: "Buried in sand or mud in marine or freshwater sediments; varies by species" },
        { label: "Distribution", value: "Wide-ranging; varies by species and region" },
        { label: "Human interaction", value: "Long studied and widely harvested as food; this is an educational profile, not a harvesting guide" },
        { label: "Conservation status", value: "Varies by species; many common, some assessed" },
      ]}
      relatedLinks={[
        { label: "Mussel Profile", href: "/animals/mussel", description: "An attached bivalve mollusc" },
        { label: "Oyster Profile", href: "/animals/oyster", description: "A reef-building bivalve mollusc" },
        { label: "Nautilus Profile", href: "/animals/nautilus", description: "A shelled cephalopod mollusc" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "How marine life changes with depth" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
