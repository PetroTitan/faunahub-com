import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/mushroom-coral";
const TITLE = "Mushroom Coral — Profile, Solitary Polyp & Biology";
const DESC =
  "Explore mushroom corals (Fungia and relatives): unusual stony corals that live as a single large, free-living polyp, often able to right themselves and even move a little.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("mushroom-coral"),
});

export default function MushroomCoralPage() {
  return (
    <AnimalProfileLayout
      commonName="Mushroom Coral"
      scientificName="Fungia and relatives"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine invertebrate", "Cnidarian", "Stony coral"]}
      image={getAnimalImage("mushroom-coral") ?? undefined}
      galleryImages={getAnimalGalleryImages("mushroom-coral")}
      sources={ANIMAL_SOURCES["mushroom-coral"]}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Mushroom corals (genus <em>Fungia</em> and related genera) are unusual
            among reef corals: most are not colonies but a single, large polyp, with a
            rounded or oval disc and radiating ridges (septa) that recall the gills on
            the underside of a mushroom. Many are also free-living as adults — resting
            loose on the seabed rather than being cemented down.
          </p>
          <p>
            Like other stony corals, they have a hard skeleton and usually host
            symbiotic algae, but their solitary, often mobile lifestyle sets them apart
            from the reef-building colony corals.
          </p>
          <p>
            <strong>Note:</strong> there are many mushroom coral species with varying
            shapes and habits; treat general statements accordingly and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Mushroom corals live on tropical reefs, often on reef slopes, sandy patches,
          and rubble between reef structures, where free-living individuals can rest on
          the bottom. They favour the warm, clear, sunlit waters that suit their
          symbiotic algae.
        </p>
      }
      diet={
        <p>
          Mushroom corals feed both by capturing plankton with the stinging tentacles
          of their large polyp and by drawing energy from symbiotic algae in their
          tissues. Some are known to be capable of taking relatively large food items
          for a coral.
        </p>
      }
      behavior={
        <p>
          One of the most remarkable things about many mushroom corals is that, as
          free-living animals, they can right themselves if flipped over and even shift
          their position slightly by inflating tissue and using tentacle movements — a
          rare degree of mobility for a coral. They can also reproduce both sexually and
          by budding off small new individuals.
        </p>
      }
      humanInteraction={
        <p>
          Mushroom corals are part of healthy reef communities and face the same broad
          pressures as other corals, including warming-driven bleaching and habitat
          damage. Their distinctive form makes them popular in aquariums, where
          responsibly sourced specimens are preferred. Consult authoritative sources for
          current status.
        </p>
      }
      faqs={[
        {
          question: "Is a mushroom coral a single animal or a colony?",
          answer:
            "Unlike most reef corals, many mushroom corals are a single large polyp rather than a colony of many small ones. The radiating ridges across the disc are part of that one animal's skeleton, and resemble the underside of a mushroom — hence the name.",
        },
        {
          question: "Can mushroom corals move?",
          answer:
            "To a limited degree, yes. Many mushroom corals are free-living rather than cemented to the reef, and they can right themselves if overturned and even shift position slightly using tissue inflation and tentacle movements — unusual abilities for a coral.",
        },
        {
          question: "Do mushroom corals build reefs?",
          answer:
            "Not in the way colonial corals do. Because they are typically solitary and often free-living, mushroom corals don't form large reef framework themselves, though they are part of the broader reef community and contribute to its diversity.",
        },
        {
          question: "What do mushroom corals eat?",
          answer:
            "They capture plankton with stinging tentacles and also rely on energy from symbiotic algae in their tissues. Some can handle comparatively large prey items for a coral.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Fungia and relatives" },
        { label: "Type", value: "Stony coral (often solitary)" },
        { label: "Class", value: "Anthozoa (cnidarians)" },
        { label: "Unusual trait", value: "Single large polyp; often free-living" },
        { label: "Mobility", value: "Can right itself; shift slightly" },
        { label: "Energy", value: "Plankton + symbiotic algae" },
        { label: "Habitat", value: "Tropical reefs & rubble" },
        { label: "Status", value: "Varies; reef pressures apply" },
      ]}
      relatedLinks={[
        { label: "Coral Profile", href: "/animals/coral", description: "Corals as a whole" },
        { label: "Brain Coral Profile", href: "/animals/brain-coral", description: "A colonial reef coral" },
        { label: "Sea Anemone Profile", href: "/animals/sea-anemone", description: "A skeleton-less relative" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Reef habitats in context" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
