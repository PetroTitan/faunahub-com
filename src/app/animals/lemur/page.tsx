import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-06-12";
const MODIFIED = "2026-06-12";

const title = "Lemur — Profile, Habitat, Diet & Behavior";
const description =
  "Lemurs are primates found only on Madagascar. A group-level overview using the ring-tailed lemur as a reference — habitat, diet, social behaviour, and conservation concern.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/lemur",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("lemur"),
});

export default function LemurPage() {
  return (
    <AnimalProfileLayout
      commonName="Lemur"
      pageTitle={title}
      description={description}
      path="/animals/lemur"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "Wild"]}
      image={getAnimalImage("lemur") ?? undefined}
      galleryImages={getAnimalGalleryImages("lemur")}
      factsHeaderNote="“Lemur” covers many primate species found only on Madagascar; the reference shown is the ring-tailed lemur. Lemurs are wild primates, not pets, and many are highly threatened — check current IUCN sources."
      overview={
        <>
          <p>
            Lemurs are primates found in the wild only on the island of Madagascar
            (and the nearby Comoros), where they have diversified into many
            species. This page is a group-level overview; the ring-tailed lemur
            (<em>Lemur catta</em>), with its distinctive black-and-white ringed
            tail, is used as a familiar reference. As primates, lemurs are
            relatives of monkeys, apes, and humans, but they belong to an early-
            branching primate group.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Lemurs live in a range of Madagascan habitats — rainforest, dry
            forest, spiny forest, and scrub — depending on the species. Because
            they are found naturally only on Madagascar, they are especially
            vulnerable to habitat loss on the island. The ring-tailed lemur
            favours drier, more open forest and is more terrestrial than many
            other lemurs. Habitat and range vary widely by species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Lemurs have varied diets across the group, including fruit, leaves,
            flowers, nectar, and some invertebrates or other small animals. The
            ring-tailed lemur is an opportunistic feeder taking fruit, leaves, and
            more. This dietary variety helps different lemurs occupy different
            niches. This page describes general feeding ecology, not care or
            feeding instructions.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Many lemurs are social, and the ring-tailed lemur lives in groups led
            by females, using scent and visual signals — including waving the
            tail — to communicate. Lemurs are active climbers, and ring-tailed
            lemurs often bask in the sun. They are wild primates with complex
            social lives; this page describes their behaviour educationally and
            does not frame lemurs as pets.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Lemurs are wild primates, not pets, and keeping them privately is
            harmful and widely illegal. As a group, lemurs are among the most
            threatened mammals in the world, with many species endangered due to
            habitat loss and other pressures on Madagascar. Because conservation
            status varies by species and is actively monitored, it should be
            verified against current IUCN Red List sources rather than assumed.
            This page is educational, not care or veterinary advice.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Lemurs vary enormously, from tiny mouse lemurs to larger species,
                but most have forward-facing eyes, grasping hands and feet, and
                long tails (in most species). The ring-tailed lemur is grey with a
                white face, dark eye patches, and an unmistakable long tail ringed
                in black and white. The diversity of lemurs is part of what makes
                Madagascar&apos;s wildlife so distinctive.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Lemurs are primates, like the gorilla and chimpanzee covered on
          FaunaHub, but they belong to an early-branching primate group
          (lemuriforms) rather than to the monkeys and apes. They are found
          naturally only on Madagascar, which sets them apart from primates
          elsewhere.
        </p>
      }
      faqs={[
        {
          question: "Where do lemurs live in the wild?",
          answer:
            "Lemurs are found in the wild only on Madagascar and the nearby Comoros islands. This isolation is why they are so diverse and also why they are so vulnerable to habitat loss on the island.",
        },
        {
          question: "Are lemurs monkeys?",
          answer:
            "No. Lemurs are primates, like monkeys and apes, but they belong to an early-branching primate group (the lemuriforms) rather than to the monkeys. They are relatives of, not members of, the monkey group.",
        },
        {
          question: "Can lemurs be kept as pets?",
          answer:
            "No. Lemurs are wild primates with complex needs, many are highly threatened, and private keeping is harmful and widely illegal. This page is educational, not care advice; lemurs should be supported through conservation and seen in the wild or at accredited facilities.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Lemurs (primates of Madagascar)" },
        { label: "Reference species", value: "Ring-tailed lemur (Lemur catta)" },
        { label: "Class", value: "Mammalia (primate)" },
        { label: "Diet", value: "Varies — fruit, leaves, flowers, invertebrates" },
        { label: "Range", value: "Madagascar (and Comoros)" },
        { label: "Conservation", value: "Many threatened — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Gorilla Profile", href: "/animals/gorilla", description: "A fellow primate" },
        { label: "Chimpanzee Profile", href: "/animals/chimpanzee" },
        { label: "Sloth Profile", href: "/animals/sloth" },
        { label: "Animal Encyclopedia — Mammals", href: "/animal-encyclopedia/mammals" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.lemur}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
