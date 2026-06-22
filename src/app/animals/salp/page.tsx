import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/salp";
const TITLE = "Salp — Profile, the Jet-Propelled Jelly That Forms Living Chains";
const DESC =
  "Explore salps (class Thaliacea): transparent, barrel-shaped ocean drifters that jet through the water filtering plankton, form long glowing chains — and are surprising relatives of vertebrates.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("salp"),
});

export default function SalpPage() {
  return (
    <AnimalProfileLayout
      commonName="Salp"
      scientificName="class Thaliacea"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Invertebrate", "Tunicate", "Plankton"]}
      image={getAnimalImage("salp") ?? undefined}
      galleryImages={getAnimalGalleryImages("salp")}
      sources={ANIMAL_SOURCES.salp}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Salps are transparent, gelatinous, barrel-shaped animals that drift through the open ocean,
            often mistaken for jellyfish but in fact something far more surprising. They are tunicates —
            relatives of the sea squirts — and, like them, belong to the same broad group as the
            backboned animals, making these jelly-like drifters unexpected cousins of the vertebrates.
            A salp moves by pumping water through its hollow body, which both propels it along by jet
            and filters tiny plankton from the water to eat.
          </p>
          <p>
            Salps are famous for their life cycle: they alternate between solitary individuals and long,
            connected chains of clones, so that under the right conditions they can multiply explosively
            and form spectacular ribbons and wheels of linked, glassy bodies stretching through the sea.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;salp&rdquo; covers several species in the class Thaliacea;
            details here describe them broadly. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Salps live in the open ocean worldwide, drifting in the plankton from the surface down into
          deeper water, and they are especially abundant in cooler and productive seas, including around
          the Southern Ocean. They are creatures of open water rather than the seabed, carried by
          currents but able to swim by jet propulsion as they feed.
        </p>
      }
      diet={
        <p>
          Salps are filter feeders that strain phytoplankton (tiny drifting algae) and other small
          particles from the water. As a salp pumps water through its body for propulsion, an internal
          mucus net captures the plankton, which is then passed to the gut. Because salps can feed and
          grow extremely fast and bloom in huge numbers, they consume vast quantities of plankton, and
          their dense, sinking droppings and dead bodies carry carbon down into the deep sea — giving
          these humble drifters a real role in the ocean&apos;s carbon cycle.
        </p>
      }
      behavior={
        <p>
          The salp&apos;s signature is its alternation of generations. A single, solitary salp
          reproduces by budding off a long chain of genetically identical clones, which break free and
          swim and feed together before themselves reproducing sexually to start new solitary salps. This
          quick-cloning strategy lets salp populations explode when plankton is plentiful, forming the
          long chains, ribbons, and wheels for which they are famous — sometimes turning patches of sea
          into a soup of glassy bodies. Salps are among the fastest-growing of all animals, and many can
          glow with bioluminescence. They swim continuously by jet propulsion, pumping water through the
          body, so feeding and movement are one and the same action.
        </p>
      }
      humanInteraction={
        <p>
          Salps are harmless to people — they have no sting — and they are increasingly recognised as
          important players in marine ecosystems and the ocean carbon cycle, even drawing scientific
          interest for how their blooms affect food webs and how carbon is transported to the deep. Their
          numbers swing dramatically with ocean conditions, and large blooms can sometimes clog fishing
          gear or intake screens. As open-ocean drifters, they are not exploited and are not of
          conservation concern, though they reflect the health of the plankton they depend on. Consult
          authoritative sources for details.
        </p>
      }
      faqs={[
        {
          question: "Is a salp a jellyfish?",
          answer:
            "No — though it looks like one. Salps are transparent, gelatinous drifters, but they're not jellyfish; they're tunicates, related to sea squirts. Astonishingly, that places them in the same broad group as the backboned animals, so a salp is a closer relative of vertebrates than a jellyfish is. The jelly-like appearance is just convergence on a drifting, watery body.",
        },
        {
          question: "How does a salp move and feed at the same time?",
          answer:
            "By jet propulsion through its hollow body. A salp pumps water in one end and out the other, which both pushes it forward and draws plankton-laden water through an internal mucus net that traps the food. So every pump does double duty — swimming and filter-feeding are the same motion.",
        },
        {
          question: "Why do salps form long chains?",
          answer:
            "Because of their unusual life cycle. A solitary salp buds off a long chain of identical clones, which detach and swim and feed together before reproducing sexually to make new solitary salps. This rapid cloning lets salp populations explode when food is abundant, producing the spectacular ribbons, chains, and wheels of linked, glassy bodies they're known for.",
        },
        {
          question: "Are salps important to the ocean?",
          answer:
            "Yes, more than their humble appearance suggests. Salps filter huge amounts of plankton, grow and multiply extremely fast, and produce dense droppings (and bodies) that sink, carrying carbon into the deep sea. This makes them meaningful players in marine food webs and the ocean carbon cycle, which is why scientists study their blooms closely.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Class Thaliacea (salps; tunicates)" },
        { label: "Big surprise", value: "A tunicate — kin of vertebrates, not a jellyfish" },
        { label: "Body", value: "Transparent, barrel-shaped, gelatinous" },
        { label: "Movement", value: "Jet propulsion (which also filter-feeds)" },
        { label: "Diet", value: "Filter feeder (phytoplankton)" },
        { label: "Life cycle", value: "Alternates solitary & cloned chains" },
        { label: "Role", value: "Fast-growing; aids ocean carbon transport" },
        { label: "To humans", value: "Harmless (no sting)" },
      ]}
      relatedLinks={[
        { label: "Sea Squirt Profile", href: "/animals/sea-squirt", description: "Its close tunicate relative" },
        { label: "Jellyfish Profile", href: "/animals/jellyfish", description: "The look-alike it's often confused with" },
        { label: "Comb Jelly Profile", href: "/animals/comb-jelly", description: "Another gelatinous drifter" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Open-ocean plankton in context" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
