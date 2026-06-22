import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/antlion";
const TITLE = "Antlion — Profile, the 'Doodlebug' Larva That Digs Deadly Sand Traps";
const DESC =
  "Explore antlions (family Myrmeleontidae): insects whose larvae dig conical sand pits to trap ants — then transform into delicate, lacewing-like winged adults.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("antlion"),
});

export default function AntlionPage() {
  return (
    <AnimalProfileLayout
      commonName="Antlion"
      scientificName="family Myrmeleontidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect", "Predator", "Trap-builder"]}
      image={getAnimalImage("antlion") ?? undefined}
      galleryImages={getAnimalGalleryImages("antlion")}
      sources={ANIMAL_SOURCES.antlion}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Antlions (family Myrmeleontidae) are insects famous not for the adult but for the
            ingenious, fearsome larva. The adult antlion is a slender, delicate, lacewing-like insect
            with long, net-veined wings and clubbed antennae, often active at dusk and easily
            mistaken for a damselfly or lacewing. The larva, by contrast, is a squat, bristly,
            big-jawed ambush predator — and in many species it builds one of the most remarkable
            traps in the insect world.
          </p>
          <p>
            These larvae, nicknamed &ldquo;doodlebugs&rdquo; for the meandering trails they leave in
            sand, dig steep-sided conical pits and lie buried at the bottom, waiting for ants and
            other small insects to slip in — then seize them with huge, sickle-shaped jaws.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;antlion&rdquo; covers a family; details here describe the
            group broadly (not all antlion larvae build pits). Treat general statements as
            approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Antlions are found across much of the world, especially in warm, dry regions. The
          pit-building larvae need loose, dry, fine soil or sand sheltered from rain and wind — under
          overhangs, beneath trees, at the base of walls, and in other sandy, sheltered spots — where
          their funnel traps will hold their shape. The winged adults are found in similar areas,
          often resting in vegetation by day.
        </p>
      }
      diet={
        <p>
          Antlion larvae are carnivores that prey on ants and other small ground-dwelling insects
          and invertebrates. A pit-building larva waits buried at the bottom of its trap and seizes
          prey that tumbles in with its large jaws, through which it injects digestive juices and
          then sucks out the liquefied contents. Adult antlions are short-lived; depending on the
          species they may feed lightly on pollen and nectar or take small insects, with the main
          feeding and growth happening during the long larval stage.
        </p>
      }
      behavior={
        <p>
          The pit-trap is the antlion larva&apos;s masterpiece. It digs a steep, conical pit in loose
          sand by crawling backwards in a spiral and flicking out soil with its head, then buries
          itself at the bottom with only its jaws exposed. When an ant blunders over the edge, the
          loose, sloping walls collapse under it, and the larva may even fling sand to trigger further
          slides, dragging the victim down. The larva is also notable for crawling backwards (hence
          the &ldquo;doodlebug&rdquo; trails) and for having no connected rear opening during the
          larval stage, storing waste until it emerges as an adult. After a larval life that can last
          a year or more, it spins a spherical silk cocoon in the sand and pupates, emerging as the
          delicate winged adult that flies, mates, and lives only a short time.
        </p>
      }
      humanInteraction={
        <p>
          Antlions are harmless to people and are a favourite of curious children and naturalists,
          who often discover the little funnel pits in dry, sandy, sheltered ground and watch the
          &ldquo;doodlebug&rdquo; at work. Ecologically they help control ants and other small
          insects. They are widespread and not generally of conservation concern, though like all
          insects they depend on suitable habitat. Consult authoritative sources for details on
          specific species.
        </p>
      }
      faqs={[
        {
          question: "What is a 'doodlebug'?",
          answer:
            "'Doodlebug' is a common nickname for the antlion larva. It comes from the looping, doodle-like trails the larva leaves as it crawls backwards through loose sand looking for a place to dig its trap. So a doodlebug and an antlion (larva) are the same creature — the famous pit-digging predator.",
        },
        {
          question: "How does an antlion's pit trap work?",
          answer:
            "The larva digs a steep, conical pit in loose, dry sand and buries itself at the bottom with only its huge jaws exposed. When an ant or other small insect wanders over the rim, the loose, sloping walls give way and the prey slides down — and the larva may flick sand upward to trigger more slides and pull the victim within reach of its jaws. It's a deadly, gravity-powered trap.",
        },
        {
          question: "Is the antlion the winged insect or the pit-digger?",
          answer:
            "Both — at different life stages. The famous pit-digging 'doodlebug' is the larva. After a long larval life it pupates in a silk cocoon in the sand and emerges as the adult: a slender, delicate, lacewing- or damselfly-like insect with long net-veined wings and clubbed antennae. The adult is short-lived, while most of the antlion's life and feeding happen as the larva.",
        },
        {
          question: "Are antlions dangerous to people?",
          answer:
            "Not at all. Antlions are completely harmless to humans — the larva's fearsome jaws are for catching ants and other tiny insects, not for biting people, and the delicate adult is harmless too. They're a safe and fascinating insect to observe, and watching a doodlebug's sand trap in action is a classic bit of backyard natural history.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Myrmeleontidae (antlions)" },
        { label: "Class", value: "Insecta (related to lacewings)" },
        { label: "Larva nickname", value: "'Doodlebug'" },
        { label: "Larva", value: "Big-jawed ambush predator; digs sand-pit traps" },
        { label: "Adult", value: "Delicate, lacewing-like, net-veined wings" },
        { label: "Prey", value: "Ants & other small insects" },
        { label: "Habitat", value: "Warm regions; dry, sheltered sandy ground" },
        { label: "To humans", value: "Harmless" },
      ]}
      relatedLinks={[
        { label: "Lacewing Profile", href: "/animals/lacewing", description: "Close relatives with predatory larvae" },
        { label: "Ant Profile", href: "/animals/ant", description: "The antlion larva's main prey" },
        { label: "Dragonfly Profile", href: "/animals/dragonfly", description: "Another net-winged insect predator" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
        { label: "Invertebrates Taxonomy", href: "/animal-taxonomy/invertebrates" },
      ]}
    />
  );
}
