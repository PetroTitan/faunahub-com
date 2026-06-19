import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/brain-coral";
const TITLE = "Brain Coral — Profile, Reef Role & Biology";
const DESC =
  "Explore brain corals (e.g. Diploria): slow-growing stony corals whose maze-like, grooved surface resembles a brain — long-lived, boulder-shaped reef builders.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("brain-coral"),
});

export default function BrainCoralPage() {
  return (
    <AnimalProfileLayout
      commonName="Brain Coral"
      scientificName="e.g. Diploria labyrinthiformis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine invertebrate", "Cnidarian", "Stony coral"]}
      image={getAnimalImage("brain-coral") ?? undefined}
      galleryImages={getAnimalGalleryImages("brain-coral")}
      sources={ANIMAL_SOURCES["brain-coral"]}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Brain corals are stony (hard) corals named for their rounded, boulder-like
            shape and the winding grooves and ridges that cover their surface — a
            pattern that strikingly resembles the folds of a brain. Several species and
            genera are called brain corals; the grooved brain coral
            (<em>Diploria labyrinthiformis</em>) is a familiar Caribbean example.
          </p>
          <p>
            Like other reef-building corals, a brain coral is a colony of tiny animals
            (polyps) sharing a hard calcium-carbonate skeleton, and most rely on
            symbiotic algae in their tissues for much of their energy.
          </p>
          <p>
            <strong>Conservation note:</strong> brain corals are slow-growing and, like
            reef corals generally, are vulnerable to warming seas, bleaching, disease,
            and pollution. Verify specifics at authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Brain corals live on warm, clear, shallow tropical and subtropical reefs,
          where there is enough sunlight for their symbiotic algae. Their sturdy,
          dome-like growth form helps them withstand wave action, so they are often
          found on exposed parts of reefs.
        </p>
      }
      diet={
        <p>
          Brain corals feed in two ways: their polyps capture tiny drifting plankton
          with stinging tentacles, mostly at night, and they also receive much of their
          energy from the photosynthetic algae (zooxanthellae) living within their
          tissues. This dual strategy lets them thrive in nutrient-poor tropical waters.
        </p>
      }
      behavior={
        <p>
          A brain coral grows very slowly as its polyps lay down skeleton and divide,
          and large colonies can be many decades — even centuries — old. The grooves
          house rows of polyps that extend their tentacles to feed. Brain corals can
          also defend their space against neighbouring corals using specialised
          stinging structures.
        </p>
      }
      humanInteraction={
        <p>
          As durable, long-lived reef builders, brain corals contribute to the
          structure and resilience of coral reefs that support marine life and protect
          coastlines. They face the same broad threats as other reef corals — heat
          stress and bleaching, disease, and pollution — making reef conservation
          important. Consult authoritative sources for current status.
        </p>
      }
      faqs={[
        {
          question: "Why is it called a brain coral?",
          answer:
            "The name comes from its appearance: a rounded, boulder-like colony covered in winding grooves and ridges that look remarkably like the surface of a brain. The grooves hold rows of the coral's tiny feeding polyps.",
        },
        {
          question: "Is a brain coral one animal or many?",
          answer:
            "Many. A brain coral is a colony made up of large numbers of tiny animals called polyps, all connected and sharing a single hard skeleton. Together they build and maintain the dome-shaped structure.",
        },
        {
          question: "How old can brain corals get?",
          answer:
            "Brain corals grow slowly, so big colonies can be very old — often many decades and, for the largest, potentially centuries. This slow growth is one reason damage to them is so serious.",
        },
        {
          question: "How do brain corals feed?",
          answer:
            "They capture plankton with stinging tentacles, mainly at night, and also get much of their energy from symbiotic algae living in their tissues, which photosynthesise in sunlight. This combination suits the clear, nutrient-poor waters where reefs grow.",
        },
      ]}
      quickFacts={[
        { label: "Type", value: "Stony (hard) coral" },
        { label: "Example species", value: "Diploria labyrinthiformis" },
        { label: "Class", value: "Anthozoa (cnidarians)" },
        { label: "Made of", value: "Colony of polyps; shared skeleton" },
        { label: "Energy", value: "Plankton + symbiotic algae" },
        { label: "Growth", value: "Very slow; long-lived" },
        { label: "Habitat", value: "Warm, shallow reefs" },
        { label: "Main threat", value: "Warming seas / bleaching" },
      ]}
      relatedLinks={[
        { label: "Coral Profile", href: "/animals/coral", description: "Corals as a whole" },
        { label: "Staghorn Coral Profile", href: "/animals/staghorn-coral", description: "A branching reef coral" },
        { label: "Sea Anemone Profile", href: "/animals/sea-anemone", description: "A skeleton-less coral relative" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Reef habitats in context" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
