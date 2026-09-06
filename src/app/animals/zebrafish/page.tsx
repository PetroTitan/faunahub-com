import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/zebrafish";
const TITLE = "Zebrafish — Profile, Stripes, Regeneration & Research Role";
const DESC =
  "Explore the zebrafish (Danio rerio): a small striped South Asian fish whose transparent embryos and regenerative ability made it a key model organism.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("zebrafish"),
});

export default function ZebrafishPage() {
  return (
    <AnimalProfileLayout
      commonName="Zebrafish"
      scientificName="Danio rerio"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish","Freshwater","Model Organism"]}
      image={getAnimalImage("zebrafish") ?? undefined}
      galleryImages={getAnimalGalleryImages("zebrafish")}
      sources={ANIMAL_SOURCES.zebrafish}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The zebrafish (<em>Danio rerio</em>) is a small freshwater cyprinid from South Asia, marked with horizontal blue-silver stripes running the length of the body — the pattern that gives it its name.
        </p>
        <p>
          In the wild it is an unremarkable little shoaling fish of slow, shallow water. Its significance lies elsewhere: the zebrafish is one of the most important <strong>model organisms</strong> in biology, alongside the fruit fly, the mouse and the nematode worm.
        </p>
        <p>
          Two properties made that possible. Zebrafish embryos develop <strong>outside the mother and are transparent</strong>, so organ formation can be watched directly under a microscope, and the fish has a remarkable capacity to <strong>regenerate</strong> tissue including fins, spinal cord and heart muscle.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Zebrafish are native to South Asia — the Ganges and Brahmaputra basins across India, Bangladesh, Nepal and neighbouring areas. They live in shallow, slow-moving or still fresh water: streams, canals, ponds, ditches and seasonally flooded rice paddies, typically with silty bottoms and some vegetation, and they tolerate a wide range of temperature and water conditions.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Zebrafish are omnivores, feeding mainly on small invertebrates — zooplankton, insects and insect larvae, especially mosquito larvae — along with algae and organic detritus. They feed throughout the water column and are opportunistic, which is one reason they are straightforward to maintain in laboratories.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Zebrafish are shoaling fish, and their strong preference for company has itself become a subject of behavioural research. They spawn readily, scattering eggs over the substrate at dawn with no parental care, and produce large numbers of embryos frequently — a major practical reason for their adoption as a research animal. In the wild they are active by day and are prey for larger fish and birds.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          The zebrafish is central to modern developmental biology, genetics, toxicology and disease modelling. Because its embryos are transparent and develop externally, researchers can watch organs form in a living animal, and its regenerative abilities are studied for what they might reveal about repair in animals that lack them. Zebrafish are also kept in home aquaria, where several ornamental varieties exist. This profile is educational and offers no aquarium husbandry advice. In the wild the species remains widespread; verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Why is the zebrafish so important in research?",
          answer:
            "Because of how easy it is to observe and work with. Its embryos develop outside the mother and are transparent, so organ formation can be watched directly in a living animal; it breeds readily and produces many embryos; it is a vertebrate, so findings are more transferable to humans than those from insects; and it regenerates tissue that mammals cannot.",
        },
        {
          question: "Can zebrafish regenerate body parts?",
          answer:
            "Yes, to a striking degree. Zebrafish can regenerate fins, parts of the spinal cord, retinal tissue and heart muscle — capacities that mammals largely lack. This is a major reason the species is studied in regenerative medicine research.",
        },
        {
          question: "Where do zebrafish come from?",
          answer:
            "South Asia — the Ganges and Brahmaputra river basins across India, Bangladesh, Nepal and neighbouring areas. They live in shallow, slow or still fresh water such as streams, canals, ponds, ditches and seasonally flooded rice paddies.",
        },
        {
          question: "What do zebrafish eat?",
          answer:
            "They are omnivores. In the wild they take small invertebrates — zooplankton, insects and insect larvae, including mosquito larvae — along with algae and organic detritus, feeding opportunistically through the water column.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Danio rerio" },
        { label: "Family", value: "Cyprinidae" },
        { label: "Class", value: "Actinopterygii" },
        { label: "Native range", value: "South Asia — Ganges/Brahmaputra basins" },
        { label: "Embryos", value: "Develop externally and are transparent" },
        { label: "Regeneration", value: "Fins, spinal cord, retina, heart muscle" },
        { label: "Role", value: "Major biological model organism" },
        { label: "Diet", value: "Omnivore — small invertebrates and algae" },
      ]}
      relatedLinks={[
        { label: "Guppy Profile", href: "/animals/guppy" },
        { label: "Tetra Profile", href: "/animals/tetra" },
        { label: "Goldfish Profile", href: "/animals/goldfish" },
        { label: "Aquarium Care Guides", href: "/aquarium-care" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
