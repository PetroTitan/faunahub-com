import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/sea-fan";
const TITLE = "Sea Fan — Profile, Soft Coral Biology & Reef Role";
const DESC =
  "Explore sea fans (gorgonians, e.g. Gorgonia ventalina): flexible, fan-shaped soft corals that stand across the current to filter-feed on plankton.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("sea-fan"),
});

export default function SeaFanPage() {
  return (
    <AnimalProfileLayout
      commonName="Sea Fan"
      scientificName="gorgonians, e.g. Gorgonia ventalina"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine invertebrate", "Cnidarian", "Soft coral"]}
      image={getAnimalImage("sea-fan") ?? undefined}
      galleryImages={getAnimalGalleryImages("sea-fan")}
      sources={ANIMAL_SOURCES["sea-fan"]}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Sea fans are soft corals — specifically gorgonians — that grow as flat,
            flexible, net-like fans, often in striking purples, reds, or yellows. The
            common sea fan (<em>Gorgonia ventalina</em>) of the Caribbean is a familiar
            example. Unlike the stony reef-builders, gorgonians have a flexible internal
            skeleton, so they bend and sway with the water rather than forming rigid rock.
          </p>
          <p>
            A sea fan is a colony of many tiny polyps, and gorgonians belong to the
            octocorals — soft corals whose polyps each bear eight feathery tentacles.
          </p>
          <p>
            <strong>Note:</strong> sea fans are part of reef communities and share many
            of the pressures facing reefs, including warming, disease, and damage from
            contact. Treat details as general and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Sea fans grow on tropical and subtropical reefs, typically attached to hard
          surfaces where currents are reliable. They orient their broad face across the
          prevailing current — a position that maximises their ability to filter food
          from passing water.
        </p>
      }
      diet={
        <p>
          Sea fans are filter feeders. The polyps along their branches extend tiny
          tentacles to capture plankton and suspended particles carried by the current.
          Many gorgonians also host symbiotic algae that contribute energy through
          photosynthesis, though the balance varies between species.
        </p>
      }
      behavior={
        <p>
          Because the colony stands across the current to feed, sea fans often grow in a
          single plane aligned with water flow. Their flexible skeleton lets them flex
          in surge and waves instead of snapping. Like other corals, they grow slowly,
          and the polyps can withdraw for protection.
        </p>
      }
      humanInteraction={
        <p>
          Sea fans add structure, colour, and feeding habitat to reefs and shelter many
          small animals. They are sensitive to being touched or broken by divers and
          anchors, and to reef-wide stressors such as warming water and disease. As with
          all reef life, careful interaction and reef conservation matter. Consult
          authoritative sources for current status.
        </p>
      }
      faqs={[
        {
          question: "Is a sea fan a coral or a plant?",
          answer:
            "A sea fan is an animal — a soft coral (gorgonian), and a colony of many tiny polyps. Its branching, plant-like shape and sometimes algae-assisted nutrition can make it look plant-like, but it belongs to the same broad group as other corals and sea anemones.",
        },
        {
          question: "Why do sea fans grow flat, facing the current?",
          answer:
            "Sea fans are filter feeders, so growing as a flat fan oriented across the prevailing current maximises the water — and the plankton it carries — that passes through the colony. This positioning makes feeding far more efficient.",
        },
        {
          question: "How is a sea fan different from a stony coral?",
          answer:
            "Stony (hard) corals build a rigid calcium-carbonate skeleton that forms reef rock, while sea fans are soft corals with a flexible internal skeleton that bends with the water. Sea fans are octocorals, with polyps that each have eight tentacles.",
        },
        {
          question: "What do sea fans eat?",
          answer:
            "They filter plankton and fine particles from the water using their polyps' tentacles. Many also gain some energy from symbiotic algae living in their tissues, depending on the species.",
        },
      ]}
      quickFacts={[
        { label: "Type", value: "Soft coral (gorgonian / octocoral)" },
        { label: "Example species", value: "Gorgonia ventalina" },
        { label: "Class", value: "Anthozoa (cnidarians)" },
        { label: "Skeleton", value: "Flexible (bends with current)" },
        { label: "Feeding", value: "Filter-feeds on plankton" },
        { label: "Polyps", value: "Eight tentacles each (octocoral)" },
        { label: "Habitat", value: "Tropical & subtropical reefs" },
        { label: "Status", value: "Varies; reef pressures apply" },
      ]}
      relatedLinks={[
        { label: "Coral Profile", href: "/animals/coral", description: "Corals as a whole" },
        { label: "Brain Coral Profile", href: "/animals/brain-coral", description: "A stony reef coral" },
        { label: "Sea Anemone Profile", href: "/animals/sea-anemone", description: "Another anthozoan" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Reef habitats in context" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
