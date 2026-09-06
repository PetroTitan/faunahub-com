import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/swallowtail-butterfly";
const TITLE = "Swallowtail Butterfly — Profile, Osmeterium Defence & Host Plants";
const DESC =
  "Explore the Old World swallowtail (Papilio machaon): a large yellow-and-black butterfly whose caterpillar everts a forked orange gland to repel attack.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("swallowtail-butterfly"),
});

export default function SwallowtailButterflyPage() {
  return (
    <AnimalProfileLayout
      commonName="Swallowtail Butterfly"
      scientificName="Papilio machaon"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect","Butterfly","Lepidoptera"]}
      image={getAnimalImage("swallowtail-butterfly") ?? undefined}
      galleryImages={getAnimalGalleryImages("swallowtail-butterfly")}
      sources={ANIMAL_SOURCES["swallowtail-butterfly"]}
      factsHeaderNote="“Swallowtail” covers the large family Papilionidae. The species described here is the Old World swallowtail, Papilio machaon; other swallowtails differ in host plants, range and appearance."
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The Old World swallowtail (<em>Papilio machaon</em>) is a large, striking butterfly of Europe, Asia, North Africa and parts of North America. It is pale yellow with bold black veining and margins, blue lunules and a red eyespot on the hindwing, which is drawn out into the pointed <strong>tail</strong> that gives the group its name.
        </p>
        <p>
          It belongs to the family Papilionidae, the swallowtails — a group of large, often spectacular butterflies found worldwide.
        </p>
        <p>
          Its most distinctive feature is not on the adult but on the caterpillar. When threatened, a swallowtail larva everts a bright orange forked organ from behind its head — the <strong>osmeterium</strong> — which releases a strong smell and startles or repels attackers.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          The Old World swallowtail is widespread across Europe, temperate Asia and North Africa, with populations in North America. It uses open, flowery habitats — meadows, grassland, hillsides, marshes and fens — wherever its larval host plants grow. In Britain the species is confined to fenland where its single host plant, milk-parsley, survives, which makes that population far more restricted than the species as a whole.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Adults feed on nectar from a range of flowers, and are strong fliers that visit widely scattered blooms. Caterpillars feed on plants in the carrot family, Apiaceae — fennel, wild carrot, milk-parsley and relatives — and in some regions on rue. Host plant choice varies between populations, and the specificity of that choice is what constrains the butterfly&apos;s distribution.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Males often perform <strong>hilltopping</strong>, gathering on high ground where they patrol and wait for females — a mate-locating strategy used by a number of butterflies. Caterpillars pass through dramatic changes: early instars resemble bird droppings, an effective disguise, before becoming the familiar green larva banded with black and marked with orange spots. The osmeterium is deployed only under threat. The species overwinters as a pupa attached to vegetation.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Swallowtails are among the most admired butterflies and are widely used as flagship species in insect conservation. Their dependence on specific host plants makes them sensitive to habitat change: the British population, restricted to fens where milk-parsley grows, is a clear example of how a widespread species can be highly vulnerable at the edge of its range. Habitat management for the host plant is the central conservation measure. Status varies regionally; verify at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "What is the osmeterium?",
          answer:
            "A defensive organ found in swallowtail caterpillars. When threatened, the larva everts a bright orange, forked, fleshy structure from behind its head, which releases a strong smell that startles or repels predators such as ants and parasitic wasps. It is withdrawn once the threat passes.",
        },
        {
          question: "Why is it called a swallowtail?",
          answer:
            "Because of the pointed extensions trailing from the hindwings, which resemble the long tail streamers of a swallow. The tails are characteristic of the family Papilionidae, though not every species in it has them.",
        },
        {
          question: "What do swallowtail caterpillars eat?",
          answer:
            "Plants in the carrot family, Apiaceae — fennel, wild carrot, milk-parsley and their relatives — and in some regions rue. Which host plants a population uses varies geographically, and that specificity is a major constraint on where the butterfly can live.",
        },
        {
          question: "What is hilltopping?",
          answer:
            "A mate-locating behaviour in which males gather on high ground — a hilltop or ridge — and patrol there waiting for females to arrive. It gives widely dispersed individuals a predictable meeting point, and several butterfly species besides swallowtails use the strategy.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Papilio machaon" },
        { label: "Family", value: "Papilionidae (swallowtails)" },
        { label: "Class", value: "Insecta" },
        { label: "Larval defence", value: "Osmeterium — everted forked orange gland" },
        { label: "Early instars", value: "Mimic bird droppings" },
        { label: "Host plants", value: "Carrot family (Apiaceae); rue in places" },
        { label: "Male behaviour", value: "Hilltopping" },
        { label: "Overwinters", value: "As a pupa" },
      ]}
      relatedLinks={[
        { label: "Butterfly Profile", href: "/animals/butterfly", description: "Group-level overview" },
        { label: "Monarch Butterfly Profile", href: "/animals/monarch-butterfly" },
        { label: "Blue Morpho Butterfly Profile", href: "/animals/blue-morpho-butterfly" },
        { label: "Atlas Moth Profile", href: "/animals/atlas-moth" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
