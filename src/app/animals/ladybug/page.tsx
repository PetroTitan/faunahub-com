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

const title = "Ladybug — Profile, Habitat, Diet & Behavior";
const description =
  "Ladybugs (ladybirds) are small beetles, many of them helpful predators of aphids. A group-level overview of Coccinellidae: appearance, diet, and garden benefit.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/ladybug",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("ladybug"),
});

export default function LadybugPage() {
  return (
    <AnimalProfileLayout
      commonName="Ladybug"
      pageTitle={title}
      description={description}
      path="/animals/ladybug"
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect", "Beetle", "Invertebrate"]}
      image={getAnimalImage("ladybug") ?? undefined}
      galleryImages={getAnimalGalleryImages("ladybug")}
      factsHeaderNote="“Ladybug” (ladybird) refers to beetles in the family Coccinellidae, with thousands of species. The reference shown is the seven-spot ladybird (Coccinella septempunctata). Colour and spot patterns vary; not all are red."
      overview={
        <>
          <p>
            Ladybugs — known as ladybirds in much of the world and as lady
            beetles to entomologists — are small, often brightly coloured
            beetles in the family Coccinellidae. There are thousands of species
            worldwide. This page is a group-level overview; the seven-spot
            ladybird (<em>Coccinella septempunctata</em>) is shown as a familiar
            reference. Many species are welcomed by gardeners because they prey
            on plant pests such as aphids.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Ladybugs are found in many habitats — gardens, grasslands,
            woodlands, farmland, and hedgerows — wherever their prey and host
            plants occur, on every continent except Antarctica. Many species
            gather in sheltered places to pass the winter, sometimes in large
            aggregations. Habitat preferences vary by species, with some closely
            tied to particular plants or prey.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Most familiar ladybugs are predators as both larvae and adults,
            feeding heavily on aphids and other small, soft-bodied insects,
            which is why they are valued in pest control. Some also eat pollen
            and nectar, and a minority of coccinellid species are plant-feeders
            or fungus-feeders rather than predators. Because the family is
            diverse, diet should not be assumed to be the same for every
            species.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Ladybugs use bright warning colours and can release a bitter,
            yellowish fluid when threatened, signalling to predators that they
            taste unpleasant. Some species gather in large numbers to
            overwinter. They develop through complete metamorphosis — egg,
            larva, pupa, and adult — with the larvae often looking very
            different from the spotted adults. Specific behaviour varies between
            species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Ladybugs are widely regarded as beneficial insects and helpful
            natural pest controllers in gardens and on farms, and they feature
            warmly in many cultures. Some introduced ladybird species, however,
            have spread widely and can affect native ladybugs, so not every
            ladybug story is positive. Most species are common; conservation
            attention focuses on particular native species that have declined.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Ladybugs are small, rounded or dome-shaped beetles, typically a
                few millimetres long, with hardened wing cases (elytra) over
                membranous flight wings. Many are red or orange with black
                spots, but colours and spot numbers vary widely — some are
                yellow, black, or patterned, and spot counts differ by species,
                so the number of spots is not a reliable guide to age. The head
                is small and often partly hidden beneath the pronotum.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Ladybugs are beetles, the order Coleoptera, and are unrelated to the
          bee or butterfly covered separately on FaunaHub despite sharing
          gardens with them. A few unrelated beetles and bugs mimic the rounded,
          spotted ladybug shape, and some leaf beetles can be mistaken for them.
        </p>
      }
      faqs={[
        {
          question: "Do a ladybug's spots show its age?",
          answer:
            "No. The number of spots is determined by species, not age. A seven-spot ladybird, for example, has seven spots throughout its adult life. Different ladybug species naturally have different colours and spot patterns.",
        },
        {
          question: "Why are ladybugs good for gardens?",
          answer:
            "Many ladybug species are predators of aphids and other small soft-bodied pests, as both larvae and adults. By eating large numbers of these insects, they help keep pest populations down, which is why gardeners often welcome them.",
        },
        {
          question: "Are ladybugs harmful to people?",
          answer:
            "Ladybugs are not dangerous to people. When threatened they can release a bitter fluid as a defence and may occasionally gather indoors to overwinter, but they do not pose a meaningful risk to humans.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Ladybugs / ladybirds (family Coccinellidae)" },
        { label: "Reference species", value: "Seven-spot ladybird (Coccinella septempunctata)" },
        { label: "Order", value: "Coleoptera (beetles)" },
        { label: "Type", value: "Insect (invertebrate)" },
        { label: "Diet", value: "Mostly predatory (aphids); some otherwise" },
        { label: "Defence", value: "Warning colours; bitter fluid" },
        { label: "Conservation", value: "Most common — some native species declining" },
      ]}
      relatedLinks={[
        { label: "Bee Profile", href: "/animals/bee", description: "Another beneficial garden insect" },
        { label: "Ant Profile", href: "/animals/ant" },
        { label: "Butterfly Profile", href: "/animals/butterfly" },
        { label: "Animal Encyclopedia — Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.ladybug}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
