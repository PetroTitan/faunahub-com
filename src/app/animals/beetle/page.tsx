import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/beetle";
const TITLE = "Beetle — Profile, Diversity, Diet & Life Cycle";
const DESC =
  "Explore beetles (order Coleoptera): the most species-rich group of animals on Earth, with hardened wing cases, complete metamorphosis, and roles in almost every habitat.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("beetle"),
});

export default function BeetlePage() {
  return (
    <AnimalProfileLayout
      commonName="Beetle"
      scientificName="order Coleoptera"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Invertebrate", "Insect", "Most diverse order"]}
      image={getAnimalImage("beetle") ?? undefined}
      galleryImages={getAnimalGalleryImages("beetle")}
      sources={ANIMAL_SOURCES.beetle}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Beetles (order Coleoptera) make up the most species-rich group of animals
            on Earth — by described species, more kinds of beetle are known than of any
            other animal order. Their defining feature is a pair of hardened front
            wings, called elytra, that fold over the back like a protective case and
            meet in a straight line down the middle. The reference species shown here
            is the European stag beetle (<em>Lucanus cervus</em>).
          </p>
          <p>
            From tiny species to large, horned giants, beetles occupy nearly every
            land and freshwater habitat and fill an enormous range of ecological
            roles.
          </p>
          <p>
            <strong>Note:</strong> beetles are extraordinarily diverse, and exact
            species totals vary by source and keep rising as new species are
            described. Figures should be treated as approximate.
          </p>
        </>
      }
      habitat={
        <p>
          Beetles are found almost everywhere on land and in fresh water, from
          forests, grasslands, and deserts to ponds and streams, and from the tropics
          to cold regions. Different beetles live in soil, leaf litter, wood, dung,
          fungi, flowers, and many other microhabitats.
        </p>
      }
      diet={
        <p>
          As a group, beetles eat almost anything. There are plant-eaters that feed on
          leaves, roots, seeds, wood, or pollen; predators that hunt other
          invertebrates; scavengers and recyclers that consume dung, carrion, and
          decaying matter; and fungus-feeders. This dietary range is part of why
          beetles are so successful.
        </p>
      }
      behavior={
        <p>
          Beetles undergo complete metamorphosis, passing through egg, larva, pupa,
          and adult stages — the larvae often look completely different from the
          adults and may live in different places. Many beetles can both walk and fly,
          unfolding membranous hind wings from beneath the elytra. Behaviours range
          from the dung-rolling of dung beetles to the light displays of fireflies
          (which are beetles).
        </p>
      }
      humanInteraction={
        <p>
          Beetles matter enormously to people and ecosystems: dung beetles and
          carrion beetles recycle waste, many beetles pollinate plants or control
          pests, and others are themselves crop pests or wood-borers. Most species are
          harmless and ecologically valuable. As with all invertebrates, habitat loss
          and pesticide use are broad concerns. Consult authoritative sources for
          specific species.
        </p>
      }
      faqs={[
        {
          question: "Why are there so many kinds of beetle?",
          answer:
            "Beetles are the most species-rich order of animals, with more described species than any other. Their success is linked to features like protective wing cases, complete metamorphosis, the ability to exploit almost every habitat and food source, and a long evolutionary history — together these have allowed beetles to diversify enormously.",
        },
        {
          question: "What are a beetle's hard wing cases?",
          answer:
            "The hardened front wings are called elytra. They protect the delicate flying hind wings and the body, and meet in a straight line down the back — a key way to recognise a beetle. To fly, a beetle lifts the elytra and unfolds the membranous hind wings beneath.",
        },
        {
          question: "Are fireflies and ladybugs beetles?",
          answer:
            "Yes. Both are beetles. Fireflies (which produce light) and ladybugs/ladybirds (often helpful aphid predators) are members of the order Coleoptera, despite their very different appearances.",
        },
        {
          question: "What do beetles eat?",
          answer:
            "It depends on the species. Beetles include plant-eaters, predators of other invertebrates, scavengers that recycle dung and carrion, and fungus-feeders. This huge dietary range is one reason beetles are found almost everywhere.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Order Coleoptera" },
        { label: "Reference species", value: "Lucanus cervus (stag beetle)" },
        { label: "Class", value: "Insecta" },
        { label: "Claim to fame", value: "Most species-rich animal order" },
        { label: "Key feature", value: "Hardened wing cases (elytra)" },
        { label: "Life cycle", value: "Complete metamorphosis" },
        { label: "Diet", value: "Extremely varied by species" },
        { label: "Habitat", value: "Almost all land & freshwater habitats" },
      ]}
      relatedLinks={[
        { label: "Ladybug Profile", href: "/animals/ladybug", description: "A familiar beetle" },
        { label: "Ant Profile", href: "/animals/ant", description: "Another major insect group" },
        { label: "Butterfly Profile", href: "/animals/butterfly", description: "Insects with complete metamorphosis" },
        { label: "Animal Taxonomy — Invertebrates", href: "/animal-taxonomy/invertebrates", description: "How invertebrates are grouped" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
