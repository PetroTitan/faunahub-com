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

const title = "Jellyfish — Profile, Habitat, Diet & Behavior";
const description =
  "Jellyfish are soft-bodied, drifting marine animals with stinging tentacles. A group-level overview using the moon jelly as a reference: anatomy, diet, and caution.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/jellyfish",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("jellyfish"),
});

export default function JellyfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Jellyfish"
      pageTitle={title}
      description={description}
      path="/animals/jellyfish"
      parentCategory="Marine Animals"
      parentCategoryHref="/animal-encyclopedia/marine-animals"
      tags={["Marine", "Cnidarian", "Invertebrate"]}
      image={getAnimalImage("jellyfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("jellyfish")}
      factsHeaderNote="“Jellyfish” covers many cnidarian species. The reference species shown is the moon jelly (Aurelia aurita). Sting severity varies hugely between species; never handle unknown jellyfish."
      overview={
        <>
          <p>
            Jellyfish (often called &quot;jellies&quot; by scientists) are
            soft-bodied marine animals in the phylum Cnidaria, the same group
            as corals and sea anemones. This page is a group-level overview;
            the moon jelly (<em>Aurelia aurita</em>) is shown as a familiar
            reference. Jellyfish have a gelatinous bell-shaped body and
            trailing tentacles armed with specialised stinging cells. They are
            not fish and have no brain, bones, or heart.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Jellyfish are found in oceans worldwide, from warm surface waters
            to the cold deep sea, and a few live in fresh or brackish water.
            Many drift with currents in open water, while some live near coasts
            and can form large seasonal aggregations known as &quot;blooms&quot;.
            Habitat and depth vary widely across the many jellyfish species.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Most jellyfish are carnivorous, capturing small prey such as
            plankton, fish eggs, larvae, and tiny crustaceans with their
            stinging tentacles before moving the food to the central mouth.
            Some larger species take bigger prey. A number of jellyfish also
            host symbiotic algae in their tissues that provide additional
            energy from sunlight. Diet varies by species.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Jellyfish swim weakly by rhythmically pulsing the bell, but largely
            drift with ocean currents. Their stinging cells, called
            nematocysts, fire automatically on contact to subdue prey and deter
            predators. Many jellyfish have complex life cycles that alternate
            between a swimming &quot;medusa&quot; (the familiar form) and an
            attached &quot;polyp&quot; stage. Some species form enormous blooms
            under favourable conditions.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Jellyfish are an important part of marine food webs and are prey
            for animals such as sea turtles. For people, the main caution is
            their sting: severity ranges from mild to, in a few species,
            medically serious, so unknown jellyfish — whether in the water or
            washed up on a beach — should never be handled. Follow local safety
            advice. Conservation status for most species is not well
            established and should not be assumed.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                A typical jellyfish has a translucent, dome- or bell-shaped body
                made largely of a jelly-like material, with tentacles and
                frilly oral arms hanging beneath. The moon jelly is recognisable
                by the four horseshoe-shaped gonads visible through its clear
                bell. Other jellyfish range from tiny, nearly invisible species
                to large ones with long, trailing tentacles. Bodies are over 90
                percent water, so beached jellyfish quickly collapse.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Jellyfish are cnidarians, related to corals and sea anemones. They
          are sometimes confused with other drifting gelatinous animals such as
          comb jellies (a separate phylum) and siphonophores like the
          Portuguese man o&apos; war, which is actually a colony of organisms
          rather than a single jellyfish.
        </p>
      }
      faqs={[
        {
          question: "Are jellyfish fish?",
          answer:
            "No. Despite the name, jellyfish are not fish. They are invertebrates in the phylum Cnidaria, with no backbone, brain, bones, or heart. Many scientists prefer the term \"jellies\" to avoid the confusion.",
        },
        {
          question: "Do all jellyfish sting badly?",
          answer:
            "No. Sting severity varies enormously by species, from barely noticeable to medically serious in a few. Because it is hard to tell species apart and even beached or dead jellyfish can sting, the safe approach is never to touch unknown jellyfish and to follow local safety advice.",
        },
        {
          question: "What is a jellyfish bloom?",
          answer:
            "A bloom is a large, sometimes sudden increase in jellyfish numbers in an area, often seasonal. Blooms can be driven by factors such as water temperature, currents, and food availability, and they can affect fisheries, tourism, and other marine life.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Jellyfish (phylum Cnidaria)" },
        { label: "Reference species", value: "Moon jelly (Aurelia aurita)" },
        { label: "Type", value: "Marine invertebrate" },
        { label: "Body", value: "Over 90% water; no brain or bones" },
        { label: "Diet", value: "Mostly carnivorous (plankton and small prey)" },
        { label: "Defence", value: "Stinging cells (nematocysts)" },
        { label: "Conservation", value: "Mostly not well established — verify per species" },
      ]}
      relatedLinks={[
        { label: "Sea Turtle Profile", href: "/animals/sea-turtle", description: "A predator of jellyfish" },
        { label: "Octopus Profile", href: "/animals/octopus" },
        { label: "Starfish Profile", href: "/animals/starfish" },
        { label: "Animal Encyclopedia — Marine Animals", href: "/animal-encyclopedia/marine-animals" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.jellyfish}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
