import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/sea-spider";
const TITLE = "Sea Spider — Profile, the Marine Arthropod That Is Almost All Legs";
const DESC =
  "Explore sea spiders (class Pycnogonida): bizarre marine arthropods so thin-bodied they digest and breathe through their legs — not true spiders, but a strange, ancient lineage of their own.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("sea-spider"),
});

export default function SeaSpiderPage() {
  return (
    <AnimalProfileLayout
      commonName="Sea Spider"
      scientificName="class Pycnogonida"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Invertebrate", "Arthropod", "Deep sea"]}
      image={getAnimalImage("sea-spider") ?? undefined}
      galleryImages={getAnimalGalleryImages("sea-spider")}
      sources={ANIMAL_SOURCES["sea-spider"]}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Sea spiders (class Pycnogonida) are among the strangest animals in the ocean: marine
            arthropods with such tiny, thread-thin bodies and such long, spindly legs that they look
            like little more than a set of walking legs. Their body is so slender that there isn&apos;t
            room inside for full-sized organs, so sea spiders have pushed parts of their digestive
            and reproductive systems out into the legs themselves. They range from tiny species a few
            millimetres across to deep-sea giants with leg spans of tens of centimetres.
          </p>
          <p>
            Despite the name and a passing resemblance, sea spiders are not true spiders. They belong
            to their own ancient lineage of arthropods, and their unusual anatomy makes them a puzzle
            that scientists are still working to place on the tree of life.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;sea spider&rdquo; covers the whole class Pycnogonida;
            details here describe the group broadly. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Sea spiders live only in the sea, and they are found throughout the world&apos;s oceans —
          from shallow tide pools, rocky shores, and reefs to the abyssal deep sea. They are
          especially diverse in cold waters, and the largest species live in the deep and in polar
          seas (an example of &ldquo;polar gigantism&rdquo;). They are bottom-dwellers, clambering
          slowly over the seabed, rocks, seaweed, and other animals.
        </p>
      }
      diet={
        <p>
          Sea spiders are carnivores that feed mostly on soft-bodied, slow or stationary prey such as
          sea anemones, soft corals, hydroids, sponges, and sea slugs. They feed using a prominent
          tube-like mouthpart called a proboscis, which they use to suck up the soft tissues or fluids
          of their prey. Their slow, deliberate lifestyle suits feeding on animals that cannot escape.
        </p>
      }
      behavior={
        <p>
          Almost everything about a sea spider is shaped by its extreme thinness. With too little room
          in the narrow trunk, the gut branches out into the legs to digest food, and the animals are
          thought to take in oxygen largely by diffusion across their long legs rather than through
          dedicated breathing organs. They move slowly over the bottom on their stilt-like legs, and
          many can swim feebly or drift. A striking feature is paternal care: in most sea spiders the
          male carries the developing eggs, holding clutches on a special pair of legs (the ovigers)
          until they hatch. Sea spiders are harmless to people and, because of their odd anatomy, are
          of great interest to biologists studying arthropod evolution.
        </p>
      }
      humanInteraction={
        <p>
          Sea spiders are little-known to most people but are an important part of seabed communities
          and a fascinating subject for researchers, thanks to their bizarre body plan, leg-based
          organs, and the giant forms found in cold and deep waters. They are harmless, not exploited
          commercially, and most are not of particular conservation concern, though, like all marine
          life, they depend on healthy oceans. Consult authoritative sources for details.
        </p>
      }
      faqs={[
        {
          question: "Is a sea spider a real spider?",
          answer:
            "No. Despite the name and a superficial resemblance — a small body and long legs — sea spiders are not true spiders. They belong to their own distinct class of marine arthropods (Pycnogonida), and their exact relationship to spiders and other arthropods is still debated by scientists. The 'spider' in the name simply reflects their leggy appearance.",
        },
        {
          question: "How can a sea spider live with almost no body?",
          answer:
            "By outsourcing its organs to its legs. A sea spider's trunk is so thin that there isn't room for full-sized internal organs, so parts of the digestive system (and reproductive system) extend out into the long legs. They're also thought to absorb oxygen largely through the surface of their legs rather than with dedicated breathing organs — so the legs do far more than just walking.",
        },
        {
          question: "What do sea spiders eat?",
          answer:
            "Mostly soft-bodied, slow or stationary prey — sea anemones, soft corals, hydroids, sponges, and sea slugs. A sea spider feeds with a long, tube-like mouthpart called a proboscis, using it to suck up the soft tissues or fluids of its prey. Its slow lifestyle suits feeding on animals that can't get away.",
        },
        {
          question: "Do male sea spiders carry the eggs?",
          answer:
            "Yes — paternal care is a hallmark of the group. In most sea spiders the male carries the developing eggs, holding the clutches on a special pair of legs called ovigers until they hatch. This makes the father, rather than the mother, responsible for guarding the next generation.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Class Pycnogonida (sea spiders)" },
        { label: "Type", value: "Marine arthropod (NOT a true spider)" },
        { label: "Body", value: "Tiny; organs extend into the legs" },
        { label: "Size", value: "Millimetres to deep-sea giants (tens of cm)" },
        { label: "Feeding", value: "Sucks soft prey via a proboscis" },
        { label: "Parenting", value: "Males carry the eggs (on ovigers)" },
        { label: "Habitat", value: "All oceans, shallows to the deep sea" },
        { label: "To humans", value: "Harmless" },
      ]}
      relatedLinks={[
        { label: "Sea Squirt Profile", href: "/animals/sea-squirt", description: "Another strange seabed invertebrate" },
        { label: "Horseshoe Crab Profile", href: "/animals/horseshoe-crab", description: "Another ancient marine arthropod" },
        { label: "Sea Anemone Profile", href: "/animals/sea-anemone", description: "Common sea spider prey" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Seabed & deep-sea habitats in context" },
        { label: "Marine Animals", href: "/animal-encyclopedia/marine-animals" },
      ]}
    />
  );
}
