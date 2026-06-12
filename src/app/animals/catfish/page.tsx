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

const title = "Catfish — Profile, Habitat, Diet & Behavior";
const description =
  "Catfish are a huge group of barbel-bearing fish. A group-level overview using the channel catfish as a reference species: habitat, diet, behaviour, and aquarium context.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/catfish",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("catfish"),
});

export default function CatfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Catfish"
      pageTitle={title}
      description={description}
      path="/animals/catfish"
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Freshwater", "Bottom-dweller"]}
      image={getAnimalImage("catfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("catfish")}
      factsHeaderNote="“Catfish” covers the very large order Siluriformes — thousands of species from tiny aquarium corydoras to giant river fish. The reference shown is the channel catfish. Size and needs vary enormously across the group."
      overview={
        <>
          <p>
            Catfish make up the order Siluriformes, a very large and diverse
            group of mostly freshwater fish named for the whisker-like barbels
            around the mouth. There are thousands of species worldwide, ranging
            from tiny aquarium corydoras to giant river catfish. This page is a
            group-level overview; the channel catfish
            (<em>Ictalurus punctatus</em>) is used as a familiar reference. Most
            catfish lack scales and many are bottom-oriented.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Catfish occupy an enormous range of mostly freshwater habitats —
            rivers, lakes, streams, and ponds — on every continent except
            Antarctica, with a few species living in brackish or marine waters.
            Many are bottom-dwellers adapted to slow or still water, and some
            tolerate low-oxygen conditions. Habitat and range vary greatly by
            species, so no single description fits all catfish.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Most catfish are omnivores or scavengers, using their barbels and
            keen senses of taste and smell to find food along the bottom,
            including invertebrates, plant matter, detritus, and other fish.
            Some are specialised predators. Diet varies widely by species; this
            page describes general feeding ecology rather than aquarium feeding
            amounts.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Many catfish are most active at night or in low light, relying on
            their barbels and senses rather than vision in murky water. Behaviour
            ranges widely: some are solitary, some shoal, and some show parental
            care of eggs and young. Certain catfish have spines or, in a few
            species, mild venom used in defence, so wild and aquarium catfish
            should be handled with care. Behaviour depends strongly on the
            species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Catfish are important to people as food fish in fisheries and
            aquaculture, as angling targets, and — for smaller species like
            corydoras — as popular aquarium fish. Released or introduced catfish
            can become invasive in some regions. Because the group is so large,
            conservation status varies enormously by species and should be
            checked against current sources rather than assumed. Aquarium catfish
            are pets, not wildlife to be released.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                The defining feature of catfish is the set of barbels — fleshy,
                whisker-like sensory organs around the mouth that give the group
                its name. Most catfish have smooth, scaleless skin or bony plates
                rather than typical scales, and many have a sturdy spine at the
                front of the dorsal and pectoral fins. Body shape ranges from the
                small, armoured corydoras to long, powerful river giants.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Catfish are ray-finned fish like the other fish covered on FaunaHub,
          but their barbels and (usually) scaleless skin set them apart. Small
          aquarium catfish such as corydoras are often kept with community fish
          like tetras and guppies, while large wild catfish share rivers with
          carp and other big freshwater fish.
        </p>
      }
      comparisonCallouts={[
        { href: "/aquarium-care/freshwater-aquarium-beginners", label: "Freshwater aquarium basics" },
        { href: "/aquarium-care", label: "Aquarium care hub" },
      ]}
      faqs={[
        {
          question: "Why do catfish have whiskers?",
          answer:
            "The \"whiskers\" are barbels — sensory organs rich in taste and smell receptors that help catfish find food in murky water or at night, often along the bottom. They are the feature that gives catfish their name.",
        },
        {
          question: "Are aquarium catfish and giant river catfish the same?",
          answer:
            "They belong to the same broad group (order Siluriformes) but are very different. Aquarium species such as corydoras stay small, while some wild river catfish grow very large. This is why the page is a group-level overview rather than a single-species account.",
        },
        {
          question: "Can catfish sting?",
          answer:
            "Many catfish have stiff spines on the dorsal and pectoral fins, and some species have mildly venomous spines used in defence. For this reason, wild and aquarium catfish should be handled carefully and with appropriate guidance.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Catfish (order Siluriformes)" },
        { label: "Reference species", value: "Channel catfish (Ictalurus punctatus)" },
        { label: "Type", value: "Mostly freshwater fish" },
        { label: "Key feature", value: "Barbels (\"whiskers\"); usually scaleless" },
        { label: "Diet", value: "Mostly omnivore/scavenger" },
        { label: "Conservation", value: "Varies enormously by species — verify per species" },
      ]}
      relatedLinks={[
        { label: "Carp Profile", href: "/animals/carp", description: "Another large freshwater fish" },
        { label: "Tetra Profile", href: "/animals/tetra" },
        { label: "Aquarium Care Hub", href: "/aquarium-care", description: "Responsible fishkeeping basics" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
      sources={ANIMAL_SOURCES.catfish}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
