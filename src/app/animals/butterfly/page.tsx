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

const title = "Butterfly — Profile, Habitat, Diet & Behavior";
const description =
  "Butterflies are day-flying insects with scaled wings and a four-stage life cycle. A group-level overview using the monarch as a reference: metamorphosis and diet.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/butterfly",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("butterfly"),
});

export default function ButterflyPage() {
  return (
    <AnimalProfileLayout
      commonName="Butterfly"
      pageTitle={title}
      description={description}
      path="/animals/butterfly"
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect", "Pollinator", "Invertebrate"]}
      image={getAnimalImage("butterfly") ?? undefined}
      galleryImages={getAnimalGalleryImages("butterfly")}
      factsHeaderNote="“Butterfly” covers thousands of species in the order Lepidoptera. The reference species shown is the monarch (Danaus plexippus). Habitats, host plants, and migration differ greatly between species."
      overview={
        <>
          <p>
            Butterflies are day-flying insects in the order Lepidoptera, the
            same order as moths, distinguished by wings covered in tiny scales.
            There are thousands of species worldwide. This page is a
            group-level overview; the monarch (<em>Danaus plexippus</em>) is
            used as a familiar reference species. Butterflies undergo complete
            metamorphosis, transforming from caterpillar to winged adult, and
            many are important pollinators.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Butterflies are found in a wide range of habitats — meadows,
            forests, wetlands, mountains, gardens, and tropical rainforests —
            on every continent except Antarctica. Many species are closely tied
            to specific &quot;host plants&quot; that their caterpillars eat, so
            their distribution often follows the availability of those plants.
            Habitat needs and ranges vary widely between species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            The diet changes completely between life stages. Caterpillars are
            usually plant-eaters that feed on the leaves of particular host
            plants — monarch caterpillars, for example, feed on milkweed. Adult
            butterflies typically drink nectar from flowers through a coiled,
            straw-like mouthpart called a proboscis, and some also take fluids
            from fruit, sap, or damp ground. As they visit flowers, adults help
            pollinate plants.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Butterflies are mostly active by day and rely on warmth to fly,
            often basking with open wings to absorb heat. Their life cycle has
            four stages — egg, caterpillar (larva), chrysalis (pupa), and adult.
            Some species, most famously the monarch, undertake long seasonal
            migrations across generations. Many use colour and pattern for
            camouflage, warning, or mate signalling. Behaviour varies greatly
            across the group.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Butterflies are widely valued for their beauty and as pollinators,
            and they are useful indicators of the health of habitats. Many
            species face declines from habitat loss, pesticide use, and climate
            change, and the loss of host plants such as milkweed has been linked
            to falls in some monarch populations. Conservation status varies by
            species and should be checked against current sources such as the
            Xerces Society and the IUCN.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Adult butterflies have two pairs of wings covered in
                overlapping scales that create their colours and patterns, a
                slender body, clubbed antennae, and a coiled proboscis. They are
                generally distinguished from moths by their clubbed (rather than
                feathery) antennae and by being mostly day-active, though there
                are exceptions. Wing size, shape, and colour vary enormously,
                from tiny blues to large swallowtails.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Butterflies share the order Lepidoptera with moths, which are often
          (though not always) night-flying and have feathery or tapering
          antennae. Within the insects, butterflies are pollinators alongside
          the bee covered separately on FaunaHub. Day-flying moths and some
          skippers can blur the line between the groups.
        </p>
      }
      faqs={[
        {
          question: "What is the difference between a butterfly and a moth?",
          answer:
            "Both are in the order Lepidoptera. Butterflies usually fly by day, have clubbed antennae, and often rest with wings closed, while many moths fly at night, have feathery or tapering antennae, and rest with wings flat. There are exceptions, so the distinction is a general guide rather than a strict rule.",
        },
        {
          question: "What are the stages of a butterfly's life cycle?",
          answer:
            "Butterflies undergo complete metamorphosis with four stages: egg, caterpillar (larva), chrysalis (pupa), and adult. The caterpillar feeds and grows, then transforms inside the chrysalis into the winged adult.",
        },
        {
          question: "Do all butterflies migrate like monarchs?",
          answer:
            "No. Long-distance migration is unusual; the monarch is a famous example, but most butterfly species do not migrate over such distances. This page is a group-level overview, and behaviour like migration should be checked per species.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Butterflies (order Lepidoptera)" },
        { label: "Reference species", value: "Monarch (Danaus plexippus)" },
        { label: "Type", value: "Insect (invertebrate)" },
        { label: "Life cycle", value: "Egg → caterpillar → chrysalis → adult" },
        { label: "Adult diet", value: "Mainly nectar (proboscis)" },
        { label: "Ecological role", value: "Pollinators; habitat indicators" },
        { label: "Conservation", value: "Varies by species — verify (Xerces / IUCN)" },
      ]}
      relatedLinks={[
        { label: "Bee Profile", href: "/animals/bee", description: "A fellow pollinator" },
        { label: "Dragonfly Profile", href: "/animals/dragonfly" },
        { label: "Ladybug Profile", href: "/animals/ladybug" },
        { label: "Animal Encyclopedia — Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.butterfly}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
