import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/coral";
const TITLE = "Coral — Profile, Polyps, Reefs & Conservation";
const DESC =
  "Explore corals (class Anthozoa): colonial cnidarian animals whose tiny polyps build reefs, partner with algae for energy, and underpin some of the richest habitats in the sea.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("coral"),
});

export default function CoralPage() {
  return (
    <AnimalProfileLayout
      commonName="Coral"
      scientificName="class Anthozoa"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine invertebrate", "Cnidarian", "Reef builder"]}
      image={getAnimalImage("coral") ?? undefined}
      galleryImages={getAnimalGalleryImages("coral")}
      sources={ANIMAL_SOURCES.coral}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Corals are animals — a point that often surprises people. They are
            cnidarians (class Anthozoa), related to sea anemones and jellyfish, and each
            coral is built from many tiny individual animals called polyps. Reef-building
            (&ldquo;hard&rdquo;) corals secrete a stony calcium-carbonate skeleton, and
            over time countless colonies build the vast structures we call coral reefs.
          </p>
          <p>
            Most reef-building corals live in partnership with microscopic algae
            (zooxanthellae) inside their tissues: the algae photosynthesise and supply
            much of the coral&apos;s energy, which is why these corals thrive in clear,
            sunlit, warm waters.
          </p>
          <p>
            <strong>Conservation note:</strong> coral reefs are among the most
            threatened ecosystems on Earth, affected by warming seas (which cause coral
            bleaching), pollution, and other pressures. Many corals are of serious
            conservation concern; verify specifics at authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Reef-building corals live mainly in warm, clear, shallow tropical and
          subtropical seas where sunlight reaches their algal partners. Other corals,
          including many soft corals and deep-water (cold-water) corals, live without
          light-dependent algae and can occur in deeper, colder waters far from the
          tropics.
        </p>
      }
      diet={
        <p>
          Corals feed in two ways. Their polyps capture tiny drifting animals
          (plankton) with stinging tentacles, especially at night. In addition,
          reef-building corals receive much of their energy from the photosynthetic
          algae living in their tissues — a partnership that makes them highly
          efficient in nutrient-poor tropical waters.
        </p>
      }
      behavior={
        <p>
          A coral colony grows as its polyps divide and add to the shared skeleton.
          Many corals reproduce in spectacular synchronised mass-spawning events,
          releasing eggs and sperm into the water on particular nights. When stressed —
          most importantly by unusually warm water — corals can expel their algae and
          turn white, a process called bleaching; bleached corals are not dead but are
          weakened and can die if stress continues.
        </p>
      }
      humanInteraction={
        <p>
          Coral reefs support an enormous share of marine biodiversity and provide
          people with fisheries, coastal protection, tourism, and more. They are also
          highly vulnerable: rising sea temperatures, pollution, destructive fishing,
          and other pressures have damaged reefs worldwide. Conservation, reef
          restoration, and reducing these pressures are major global priorities. Consult
          authoritative sources for current status.
        </p>
      }
      faqs={[
        {
          question: "Is coral a plant, a rock, or an animal?",
          answer:
            "Coral is an animal. Each coral is a colony of tiny animals called polyps, which are cnidarians related to sea anemones and jellyfish. Reef-building corals also make a stony skeleton (which can look like rock) and host photosynthetic algae (which can make them seem plant-like), but the coral itself is an animal.",
        },
        {
          question: "What is coral bleaching?",
          answer:
            "Bleaching happens when corals are stressed — most importantly by unusually warm water — and expel the microscopic algae living in their tissues, losing both colour and a key energy source. Bleached corals turn white and are weakened; they can recover if conditions improve, but may die if the stress continues.",
        },
        {
          question: "How do coral reefs form?",
          answer:
            "Reef-building corals secrete a hard calcium-carbonate skeleton. As polyps grow and divide, colonies expand, and over very long periods the accumulated skeletons of countless colonies build the large structures we call coral reefs.",
        },
        {
          question: "Why are coral reefs so important?",
          answer:
            "Although they cover a small fraction of the ocean floor, coral reefs support a large proportion of marine species and provide people with food, coastal protection from waves, tourism income, and more. This combination of biodiversity and human value is why their decline is such a serious concern.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Class Anthozoa (cnidarians)" },
        { label: "Reference", value: "Reef-building corals (e.g. Acropora)" },
        { label: "Made of", value: "Colonies of tiny polyps" },
        { label: "Key partnership", value: "Symbiotic algae (zooxanthellae)" },
        { label: "Builds", value: "Coral reefs (stony skeleton)" },
        { label: "Diet", value: "Plankton capture + algal photosynthesis" },
        { label: "Main threat", value: "Warming seas / bleaching" },
        { label: "Status", value: "Many of concern (verify)" },
      ]}
      relatedLinks={[
        { label: "Jellyfish Profile", href: "/animals/jellyfish", description: "A fellow cnidarian" },
        { label: "Clownfish Profile", href: "/animals/clownfish", description: "An iconic reef fish" },
        { label: "Sea Urchin Profile", href: "/animals/sea-urchin", description: "Another reef invertebrate" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Reef habitats in context" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
