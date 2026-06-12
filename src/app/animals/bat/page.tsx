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

const title = "Bat — Profile, Habitat, Diet & Behavior";
const description =
  "Bats are the only mammals capable of true flight. A group-level overview of order Chiroptera: echolocation, varied diets, roosting, and ecological importance.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/bat",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("bat"),
});

export default function BatPage() {
  return (
    <AnimalProfileLayout
      commonName="Bat"
      pageTitle={title}
      description={description}
      path="/animals/bat"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Flying", "Nocturnal"]}
      image={getAnimalImage("bat") ?? undefined}
      galleryImages={getAnimalGalleryImages("bat")}
      factsHeaderNote="“Bat” is the common name for the whole order Chiroptera, with well over a thousand species. The photos here show flying foxes (fruit bats); diet, size, and habits vary enormously across the group. Do not handle wild bats."
      overview={
        <>
          <p>
            Bats make up the order Chiroptera and are the only mammals capable
            of true, sustained flight. With well over a thousand species, they
            are one of the most diverse mammal groups, ranging from tiny
            insect-eating bats to large fruit-eating flying foxes. This page is
            a group-level overview; the photographs show flying foxes as a
            recognisable example. Bats are found on every continent except
            Antarctica.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Bats occupy an enormous range of habitats — forests, grasslands,
            deserts, wetlands, and urban areas — roosting in caves, trees,
            rock crevices, foliage, and buildings. Many species are colonial,
            gathering in large numbers at roost sites, while others roost
            singly. Ranges and habitat preferences differ greatly between
            species, so no single description covers all bats.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Diet varies widely across the group. The majority of bats are
            insectivores that hunt flying insects, often using echolocation;
            fruit bats and flying foxes feed on fruit and nectar and are
            important pollinators and seed dispersers; and a few specialised
            species feed on nectar, fish, or (in three species) blood. Because
            of this variety, group-level statements about &quot;what bats
            eat&quot; should be made cautiously.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Most bats are nocturnal or active at twilight. Many insect-eating
            bats navigate and hunt in darkness using echolocation, emitting
            high-frequency calls and interpreting the echoes; fruit bats more
            often rely on keen eyesight and smell. Bats may roost in colonies,
            migrate seasonally, or hibernate in cold climates. Social and
            roosting behaviour differs markedly between species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Bats provide major ecological benefits, including controlling
            insect populations and pollinating and dispersing the seeds of many
            plants. Some species face serious threats from habitat loss,
            disturbance of roosts, and disease. Bats can also carry pathogens
            of public-health concern, so wildlife and health authorities advise
            never handling wild bats; report a grounded or injured bat to a
            licensed rehabilitator. Conservation status varies by species and
            should be verified against current sources.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                A bat&apos;s wing is formed by a thin membrane stretched between
                greatly elongated finger bones, the body, and (in many species)
                the legs and tail — an anatomy unique among mammals. Sizes
                range from tiny bats weighing a few grams to large flying foxes
                with wingspans over a metre. Insect-eating bats often have
                elaborate ears and facial structures linked to echolocation,
                while fruit bats typically have larger eyes and dog-like faces.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Despite flying, bats are mammals, not birds, and they nurse their
          young with milk. They are not closely related to other small flying
          animals. The &quot;flying&quot; squirrels and gliding possums only
          glide rather than fly, and birds achieve flight with feathered wings
          rather than a skin membrane.
        </p>
      }
      faqs={[
        {
          question: "Are bats blind?",
          answer:
            "No. The saying \"blind as a bat\" is a myth. All bats can see; many insect-eating species also use echolocation to navigate and hunt in the dark, and fruit bats have particularly good eyesight.",
        },
        {
          question: "Do all bats use echolocation?",
          answer:
            "No. Most insect-eating bats echolocate, but many fruit bats and flying foxes rely mainly on vision and smell. Echolocation is widespread in the group but not universal.",
        },
        {
          question: "Should I handle a bat I find?",
          answer:
            "No. Wildlife and health authorities advise never handling wild bats, because some can carry diseases. If you find a grounded, injured, or trapped bat, contact a licensed wildlife rehabilitator or local authority rather than picking it up.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Bats (order Chiroptera)" },
        { label: "Notable trait", value: "Only mammals with true flight" },
        { label: "Class", value: "Mammalia" },
        { label: "Diet", value: "Insects, fruit, nectar (varies by species)" },
        { label: "Activity", value: "Mostly nocturnal" },
        { label: "Ecological role", value: "Pest control, pollination, seed dispersal" },
        { label: "Conservation", value: "Varies by species — verify on IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Owl Profile", href: "/animals/owl", description: "Another nocturnal flyer" },
        { label: "Fox Profile", href: "/animals/fox" },
        { label: "Hedgehog Profile", href: "/animals/hedgehog" },
        { label: "Animal Encyclopedia — Mammals", href: "/animal-encyclopedia/mammals" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.bat}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
