import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/grasshopper";
const TITLE = "Grasshopper — Profile, Jumping, Diet & Song";
const DESC =
  "Explore grasshoppers (suborder Caelifera): plant-eating insects with powerful jumping legs that chirp, leap many times their length, and — in some species — swarm as locusts.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("grasshopper"),
});

export default function GrasshopperPage() {
  return (
    <AnimalProfileLayout
      commonName="Grasshopper"
      scientificName="suborder Caelifera"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Invertebrate", "Insect", "Herbivore"]}
      image={getAnimalImage("grasshopper") ?? undefined}
      galleryImages={getAnimalGalleryImages("grasshopper")}
      sources={ANIMAL_SOURCES.grasshopper}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Grasshoppers (suborder Caelifera) are plant-eating insects best known for two
            things: their powerful hind legs, which launch them in long jumps, and the
            chirping &ldquo;songs&rdquo; many produce on warm days. They have short
            antennae (unlike their long-antennaed cricket and katydid relatives) and most
            have wings as adults, so they can fly as well as leap.
          </p>
          <p>
            Grasshoppers are abundant in grasslands and other open habitats, where they
            are both important plant-eaters and a major food source for birds, reptiles,
            and other animals.
          </p>
          <p>
            <strong>Note:</strong> the group is large and varied; some grasshoppers can,
            under certain conditions, change form and swarm as locusts. Treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Grasshoppers live across most of the world in grasslands, meadows, scrub,
          farmland, and other open, sunny habitats with plenty of plants. They are most
          active in warm weather, basking to raise their body temperature before becoming
          fully active.
        </p>
      }
      diet={
        <p>
          Grasshoppers are herbivores, feeding mainly on grasses and other plants. Some
          are generalists that eat many plant types, while others specialise. Where they
          become very abundant — especially the swarming locust forms — their feeding can
          have a major impact on vegetation and crops.
        </p>
      }
      behavior={
        <p>
          The grasshopper&apos;s signature move is the jump: large, muscular hind legs
          store and release energy to fling the insect many times its own body length,
          often followed by a burst of flight. Many males &ldquo;sing&rdquo; by rubbing a
          hind leg against a wing (stridulation) to attract mates. Grasshoppers grow
          through gradual metamorphosis, hatching as wingless nymphs that resemble small
          adults and developing wings as they moult.
        </p>
      }
      humanInteraction={
        <p>
          Grasshoppers are a natural part of grassland food webs and are eaten as food by
          people in many cultures. Most are harmless, but some species can become serious
          agricultural pests, and the swarming locust phases of certain grasshoppers have
          historically caused devastating crop losses. Consult authoritative sources for
          specific species and regional context.
        </p>
      }
      faqs={[
        {
          question: "What's the difference between a grasshopper and a cricket?",
          answer:
            "Both are jumping insects, but grasshoppers (suborder Caelifera) typically have short antennae and are active by day, while crickets and katydids (suborder Ensifera) have long, thread-like antennae and many are active at night. They also make sound in different ways.",
        },
        {
          question: "How do grasshoppers jump so far?",
          answer:
            "Their large hind legs work like a spring: the insect slowly builds up tension in leg muscles and structures, then releases it all at once, catapulting itself many times its body length. Many grasshoppers add a burst of flight to extend the leap.",
        },
        {
          question: "Are grasshoppers and locusts the same thing?",
          answer:
            "Locusts are certain grasshopper species that can change their behaviour and appearance under crowded conditions and form migrating swarms. So a locust is a kind of grasshopper in a special \"swarming\" phase; most grasshoppers, however, never swarm.",
        },
        {
          question: "How do grasshoppers make their chirping sound?",
          answer:
            "Many male grasshoppers sing by stridulation — rubbing a row of tiny pegs on the hind leg against a hardened edge of the wing — to attract females and signal to rivals. Different species produce different songs.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Suborder Caelifera" },
        { label: "Class", value: "Insecta" },
        { label: "Diet", value: "Herbivore (grasses & plants)" },
        { label: "Signature trait", value: "Powerful jumping hind legs" },
        { label: "Antennae", value: "Short (vs long in crickets)" },
        { label: "Life cycle", value: "Gradual metamorphosis (nymphs)" },
        { label: "Note", value: "Some species swarm as locusts" },
        { label: "Habitat", value: "Grasslands & open habitats worldwide" },
      ]}
      relatedLinks={[
        { label: "Praying Mantis Profile", href: "/animals/praying-mantis", description: "A predatory insect of similar habitats" },
        { label: "Dragonfly Profile", href: "/animals/dragonfly", description: "A fast aerial insect" },
        { label: "Beetle Profile", href: "/animals/beetle", description: "The most diverse insect group" },
        { label: "Animal Taxonomy — Invertebrates", href: "/animal-taxonomy/invertebrates", description: "How invertebrates are grouped" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
