import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/atlas-moth";
const TITLE = "Atlas Moth — Profile, Wing Size, Snake-Head Tips & Short Adult Life";
const DESC =
  "Explore the atlas moth (Attacus atlas): one of the largest moths in the world, with snake-head wingtip markings and an adult stage that cannot feed.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("atlas-moth"),
});

export default function AtlasMothPage() {
  return (
    <AnimalProfileLayout
      commonName="Atlas Moth"
      scientificName="Attacus atlas"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect","Moth","Southeast Asia"]}
      image={getAnimalImage("atlas-moth") ?? undefined}
      galleryImages={getAnimalGalleryImages("atlas-moth")}
      sources={ANIMAL_SOURCES["atlas-moth"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The atlas moth (<em>Attacus atlas</em>) is a giant saturniid moth of South and Southeast Asia and among the largest moths in the world by wing surface area. Its wings are a rich rust-brown with triangular translucent windows and bold cream and black banding.
        </p>
        <p>
          The most remarkable detail is at the wingtips. The upper corner of each forewing is <strong>shaped and marked to resemble a snake&apos;s head</strong>, complete with an eye-like spot and a curved outline — a resemblance that, when the moth moves its wings, appears to deter predators.
        </p>
        <p>
          The adult atlas moth <strong>cannot feed</strong>. It emerges with only vestigial mouthparts and lives entirely on the reserves accumulated during its caterpillar stage, which gives the adult a life measured in a small number of days devoted to reproduction.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Atlas moths occur across tropical and subtropical forests of South and Southeast Asia — India, Sri Lanka, southern China, Southeast Asia and the Indonesian archipelago. They are associated with forest and secondary growth where their larval host plants are available, and adults are nocturnal, resting by day among foliage.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Caterpillars are the only feeding stage, browsing on the leaves of a wide range of trees and shrubs, including citrus, cinnamon, guava and many others. They grow to a large size, are pale green with fleshy projections and a waxy white coating, and store the reserves that the adult will live on. Adults do not feed at all.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Because adults cannot feed, everything about the adult stage is compressed into mating. Females emerge and release pheromones; males, with large feathery antennae that detect those pheromones at extremely low concentration, fly considerable distances to find them. The moth is nocturnal and, at rest by day, relies on its cryptic brown colouring and the snake-head wingtips for protection.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Atlas moth cocoons are made of a coarse, durable brown silk sometimes known as fagara, which is harvested on a small scale in parts of Asia, and empty cocoons have been used as purses in Taiwan. The moth is a popular exhibit in butterfly houses because of its size and appearance. Its dependence on forest habitat makes it sensitive to habitat loss. This profile offers no rearing, collecting or handling guidance; wild insects and their habitats are protected in various jurisdictions.
        </p>
        </>
      }
      faqs={[
        {
          question: "Is the atlas moth the largest moth in the world?",
          answer:
            "It is among the largest, and is usually cited as having one of the greatest wing surface areas of any moth. Different species hold different records — some have longer wingspans, others heavier bodies — so it is more accurate to call it one of the largest than to give it a single outright title.",
        },
        {
          question: "Why do atlas moth wingtips look like snakes?",
          answer:
            "The upper corner of each forewing is shaped and marked to resemble a snake's head, including an eye-like spot and a curved profile. When the moth moves its wings the resemblance appears to startle or deter predators — a form of mimicry that works at a distance rather than under close inspection.",
        },
        {
          question: "Do adult atlas moths eat?",
          answer:
            "No. Adults emerge with only vestigial mouthparts and cannot feed at all. They live entirely on reserves built up during the caterpillar stage, which is why the adult life is short and devoted almost entirely to finding a mate and reproducing.",
        },
        {
          question: "How do male atlas moths find females?",
          answer:
            "By scent. Females release pheromones, and males have large feathery antennae capable of detecting those chemicals at extremely low concentrations, allowing them to track a female across considerable distances at night.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Attacus atlas" },
        { label: "Family", value: "Saturniidae" },
        { label: "Class", value: "Insecta" },
        { label: "Size", value: "Among the largest moths by wing area" },
        { label: "Wingtips", value: "Marked to resemble a snake's head" },
        { label: "Adult feeding", value: "None — vestigial mouthparts" },
        { label: "Male antennae", value: "Large and feathery; detect pheromones" },
        { label: "Range", value: "South and Southeast Asia" },
      ]}
      relatedLinks={[
        { label: "Luna Moth Profile", href: "/animals/luna-moth", description: "Another giant saturniid" },
        { label: "Silkworm Profile", href: "/animals/silkworm" },
        { label: "Moth Profile", href: "/animals/moth", description: "Group-level overview" },
        { label: "Camouflage & Mimicry", href: "/animal-senses-and-adaptations/camouflage-and-mimicry" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
