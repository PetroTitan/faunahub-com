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

const title = "Woodpecker — Profile, Habitat, Diet & Behavior";
const description =
  "Woodpeckers are tree-climbing birds that drum and chisel into wood. A group-level overview using the great spotted woodpecker as a reference: habitat, diet, and behaviour.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/woodpecker",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("woodpecker"),
});

export default function WoodpeckerPage() {
  return (
    <AnimalProfileLayout
      commonName="Woodpecker"
      pageTitle={title}
      description={description}
      path="/animals/woodpecker"
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Woodland", "Wild"]}
      image={getAnimalImage("woodpecker") ?? undefined}
      galleryImages={getAnimalGalleryImages("woodpecker")}
      factsHeaderNote="“Woodpecker” covers many species in the family Picidae. The reference shown is the great spotted woodpecker (Dendrocopos major). Size, colour, and range vary by species."
      overview={
        <>
          <p>
            Woodpeckers are birds of the family Picidae, known for climbing tree
            trunks and using their bills to drum, excavate nest holes, and reach
            food under bark. There are many species across much of the world.
            This page is a group-level overview; the great spotted woodpecker
            (<em>Dendrocopos major</em>) is used as a familiar reference.
            Woodpeckers have remarkable adaptations for a life spent hammering
            into wood.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Most woodpeckers live in woodland and forest, but the family also
            includes species of parkland, gardens, deserts, and grasslands.
            Woodpeckers are found across the Americas, Europe, Asia, and Africa,
            though not in Australia or some islands. They typically need trees or
            other structures to forage and nest in. Habitat and range vary by
            species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Many woodpeckers feed on insects and their larvae extracted from
            wood and bark, using a long, often barbed tongue, but the family is
            varied: some eat ants, others take fruit, nuts, or sap, and a few
            store food. Diet varies by species and season; this page describes
            general feeding ecology rather than feeder advice.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Woodpeckers are famous for drumming — rapidly striking wood to signal
            and claim territory — and for excavating nest cavities, which later
            benefit many other animals. They are adapted to absorb the forces of
            repeated impacts and climb vertical trunks using stiff tail feathers
            for support. Most are not strong long-distance fliers. Behaviour
            varies among the many species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Woodpeckers are wild birds, not pets, and are protected by wildlife
            law in many places. They are valuable to ecosystems, controlling some
            insects and creating cavities used by other species. Some woodpeckers
            are common while others are threatened by the loss of mature trees and
            dead wood; conservation status varies by species and should be checked
            against current sources. Do not disturb nesting woodpeckers.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                The great spotted woodpecker is a striking black-and-white bird
                with bold white shoulder patches and red under the tail (and, in
                males, a red nape patch). Woodpeckers in general have strong,
                chisel-like bills, short legs with gripping feet, and stiff tail
                feathers used as a prop against tree trunks. Their undulating
                flight and the sound of drumming are useful clues to their
                presence.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Woodpeckers are most closely related to the toucans and barbets — the
          toucan is covered separately on FaunaHub. Within the woodpecker family
          are smaller relatives such as the wrynecks and piculets. Their
          tree-climbing, drumming lifestyle distinguishes them from other
          woodland birds.
        </p>
      }
      comparisonCallouts={[
        { href: "/birdwatching", label: "Birdwatching hub" },
      ]}
      faqs={[
        {
          question: "Why don't woodpeckers hurt their heads?",
          answer:
            "Woodpeckers have a suite of adaptations — including skull and bill structure and the way forces are distributed — that help them withstand the repeated impacts of pecking and drumming. The details are an active area of scientific study, but these adaptations let them hammer wood without obvious injury.",
        },
        {
          question: "Why do woodpeckers drum on wood (and sometimes houses)?",
          answer:
            "Drumming is mainly a way to signal and claim territory and attract mates, rather than to find food. Birds may drum on resonant surfaces, which can include buildings. Excavating for food or nest holes is a separate behaviour.",
        },
        {
          question: "Are all woodpeckers the same?",
          answer:
            "No. \"Woodpecker\" covers many species that differ in size, colour, diet, and habitat — from insect-eaters to sap- and fruit-eaters. This page is a group-level overview using the great spotted woodpecker as a reference.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Woodpeckers (family Picidae)" },
        { label: "Reference species", value: "Great spotted woodpecker (Dendrocopos major)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Often insects; varies (ants, fruit, sap, nuts)" },
        { label: "Notable trait", value: "Drumming; excavates nest cavities" },
        { label: "Conservation", value: "Varies by species — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Toucan Profile", href: "/animals/toucan", description: "A close relative" },
        { label: "Robin Profile", href: "/animals/robin" },
        { label: "Birdwatching Hub", href: "/birdwatching" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.woodpecker}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
