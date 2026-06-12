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

const title = "Lynx — Profile, Habitat, Diet & Behavior";
const description =
  "Lynx are medium-sized wild cats with tufted ears and short tails. A group-level overview using the Eurasian lynx as a reference species: forest habitat and hunting.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/lynx",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("lynx"),
});

export default function LynxPage() {
  return (
    <AnimalProfileLayout
      commonName="Lynx"
      pageTitle={title}
      description={description}
      path="/animals/lynx"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Wild Cat", "Carnivore"]}
      image={getAnimalImage("lynx") ?? undefined}
      galleryImages={getAnimalGalleryImages("lynx")}
      factsHeaderNote="“Lynx” covers four wild-cat species in the genus Lynx. The reference species below is the Eurasian lynx (Lynx lynx). Ranges and conservation status vary by species and region."
      overview={
        <>
          <p>
            Lynx are medium-sized wild cats of the genus <em>Lynx</em>,
            comprising four species: the Eurasian lynx, the Canada lynx, the
            bobcat, and the Iberian lynx. They are recognised by their tufted
            ears, short &quot;bobbed&quot; tails, and (in most species) broad,
            furry paws. This page is a group-level overview; the Eurasian lynx
            (<em>Lynx lynx</em>) is used as a familiar reference species. The
            species differ markedly in size, range, and status.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Lynx are mostly associated with forest, woodland, scrub, and rocky
            terrain across the Northern Hemisphere. The Eurasian lynx ranges
            across forests of Europe and Asia, the Canada lynx lives in
            northern boreal forest, the bobcat occupies varied habitats across
            North America, and the Iberian lynx is restricted to parts of
            Spain and Portugal. Habitat and range vary substantially by
            species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Lynx are carnivores and ambush hunters. Diet varies by species and
            region: the Canada lynx specialises heavily on snowshoe hares, the
            Iberian lynx depends largely on rabbits, and the larger Eurasian
            lynx takes a broader range of prey including small deer. Lynx
            typically hunt by stalking and pouncing rather than long pursuit.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Lynx are generally solitary and largely active at dusk and night.
            They hold and patrol territories, marking them with scent, and are
            elusive animals that are rarely seen in the wild. Their keen
            eyesight and hearing — aided by the prominent ear tufts — support
            their hunting. Behaviour and home-range size differ across the four
            species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Lynx have been affected historically by hunting, habitat loss, and
            declines in their prey. Conservation status differs sharply between
            species: the Iberian lynx has been the focus of intensive recovery
            efforts after being highly endangered, while other lynx are more
            widespread. Because status varies so much, it should always be
            checked against current IUCN Red List data. Lynx are wildlife, not
            pets.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Lynx are compact cats with long legs, large paws, a short
                black-tipped tail, and distinctive black tufts on the tips of
                the ears. Many have a ruff of longer fur framing the face. Coat
                colour ranges from greyish to reddish-brown, often with
                spotting that is more pronounced in some species (such as the
                Iberian lynx) than others. The Eurasian lynx is the largest of
                the four.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Lynx belong to the cat family, Felidae, alongside the big cats and
          smaller wild cats covered elsewhere on FaunaHub, such as the leopard,
          jaguar, and cheetah. The bobcat is itself a member of the lynx genus.
          Their tufted ears and short tails help distinguish lynx from other
          wild cats.
        </p>
      }
      faqs={[
        {
          question: "How many species of lynx are there?",
          answer:
            "Four: the Eurasian lynx, the Canada lynx, the bobcat, and the Iberian lynx. They share the genus Lynx but differ in size, range, prey, and conservation status.",
        },
        {
          question: "What are the tufts on a lynx's ears for?",
          answer:
            "The exact function of the black ear tufts is not fully settled, but they are a hallmark of lynx and may play a role in hearing or communication. Whatever their purpose, they make lynx easy to recognise.",
        },
        {
          question: "Is the Iberian lynx still endangered?",
          answer:
            "The Iberian lynx was once among the most threatened cats in the world and has been the subject of major recovery programmes. Its status has changed over time, so the current designation should be verified directly against the IUCN Red List rather than assumed.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Lynx (genus Lynx, 4 species)" },
        { label: "Reference species", value: "Eurasian lynx (Lynx lynx)" },
        { label: "Family", value: "Felidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Diet", value: "Carnivore (ambush hunter)" },
        { label: "Social structure", value: "Solitary" },
        { label: "Conservation", value: "Varies by species — verify on IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Leopard Profile", href: "/animals/leopard", description: "Another spotted wild cat" },
        { label: "Cheetah Profile", href: "/animals/cheetah" },
        { label: "Fox Profile", href: "/animals/fox" },
        { label: "Animal Encyclopedia — Mammals", href: "/animal-encyclopedia/mammals" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.lynx}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
