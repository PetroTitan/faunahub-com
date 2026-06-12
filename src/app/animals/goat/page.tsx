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

const title = "Goat — Profile, Habitat, Diet & Behavior";
const description =
  "Domestic goat (Capra hircus): an educational overview of one of the earliest domesticated animals — browsing diet, agile climbing, herd behaviour, and farm context.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/goat",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("goat"),
});

export default function GoatPage() {
  return (
    <AnimalProfileLayout
      commonName="Goat"
      scientificName="Capra hircus"
      pageTitle={title}
      description={description}
      path="/animals/goat"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Domestic", "Herbivore"]}
      image={getAnimalImage("goat") ?? undefined}
      galleryImages={getAnimalGalleryImages("goat")}
      factsHeaderNote="This page covers the domestic goat (Capra hircus). Breeds and farm/domestic contexts vary; wild goats and ibex are different. Educational only — not husbandry or veterinary advice."
      overview={
        <>
          <p>
            The domestic goat (<em>Capra hircus</em>) is one of the earliest
            animals domesticated by humans, descended from the wild bezoar
            ibex of western Asia. Goats are kept worldwide for milk, meat,
            fibre, and as companion or vegetation-management animals. They are
            small, agile ruminants known for surefooted climbing and
            inquisitive behaviour.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Domestic goats are farm and smallholding animals found across most
            of the world. They are notably adaptable and thrive in many
            environments, including dry, rocky, and hilly terrain that suits
            their climbing ability. As with other livestock, their
            distribution reflects human agriculture rather than a wild range,
            and conditions vary widely between regions and farming systems.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Goats are ruminant herbivores and primarily browsers, meaning they
            prefer leaves, shrubs, twigs, and a wide variety of plants rather
            than grazing grass alone like cattle and sheep. This browsing
            habit and curious feeding behaviour make them effective at
            clearing brush, but it also means they can damage gardens and
            young trees if unmanaged. Specific diets depend on local forage
            and farm management.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Goats are social herd animals that form hierarchies and bond with
            herd-mates and handlers. They are agile and excellent climbers,
            sometimes scaling steep rock or even leaning structures. Goats are
            widely regarded as curious and intelligent, exploring objects with
            their mouths and learning routines quickly. They communicate
            through bleats, body posture, and the position of their tails and
            ears.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Goats have a long shared history with people and remain important
            in agriculture worldwide, especially in smallholder and
            subsistence systems. As a domestic species, the goat is not
            assigned a wild conservation status; relevant concerns are welfare,
            breed diversity, and responsible grazing management. This page is
            educational and is not a substitute for qualified husbandry or
            veterinary guidance.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Goats are small to medium ruminants with a narrow muzzle,
                horizontal slit-shaped pupils, and (in many breeds) a beard
                and backward-curving horns in both sexes. Coat length, colour,
                and ear shape vary widely by breed — from short-haired dairy
                goats to long-fleeced fibre breeds such as Angora and
                cashmere-producing types. Many goats also have fleshy neck
                appendages called wattles.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Goats and sheep are both small domestic ruminants in the family
          Bovidae and are sometimes confused, but they differ in behaviour
          (goats browse and climb; sheep graze and flock), tail carriage, and
          coat. Goats are also related to wild ibex and mountain goats, which
          are separate species with their own ecology.
        </p>
      }
      faqs={[
        {
          question: "What is the difference between a goat and a sheep?",
          answer:
            "Goats and sheep are closely related domestic ruminants but differ in several ways. Goats tend to browse shrubs and leaves, are agile climbers, and usually hold their tails up; sheep graze grass, flock tightly, and usually hold their tails down. Coats also differ — most sheep grow wool, while goats have hair or specialised fibre.",
        },
        {
          question: "Are goats wild animals?",
          answer:
            "The domestic goat is a domesticated species, not wildlife. It descends from wild goats of western Asia. Feral goat populations exist in some regions, but the farm goat itself is domestic.",
        },
        {
          question: "Why do goats climb so well?",
          answer:
            "Goats have flexible, cloven hooves with a soft inner pad and a hard outer rim that grip uneven surfaces, plus a strong sense of balance. These traits suit their ancestral mountain habitats and let domestic goats climb rocks and steep slopes with ease.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Capra hircus" },
        { label: "Family", value: "Bovidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Status", value: "Domesticated livestock" },
        { label: "Diet", value: "Herbivore (ruminant browser)" },
        { label: "Social structure", value: "Herd animal" },
        { label: "Distribution", value: "Worldwide on farms and smallholdings" },
      ]}
      relatedLinks={[
        { label: "Sheep Profile", href: "/animals/sheep", description: "The other classic small farm ruminant" },
        { label: "Cow Profile", href: "/animals/cow" },
        { label: "Pig Profile", href: "/animals/pig" },
        { label: "Animal Encyclopedia — Mammals", href: "/animal-encyclopedia/mammals" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
      sources={ANIMAL_SOURCES.goat}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
