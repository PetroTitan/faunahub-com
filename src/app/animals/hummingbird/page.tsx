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

const title = "Hummingbird — Profile, Habitat, Diet & Behavior";
const description =
  "Hummingbirds are tiny, fast-flying nectar specialists. A group-level overview using Anna's hummingbird as a reference: hovering flight, diet, and behaviour.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/hummingbird",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("hummingbird"),
});

export default function HummingbirdPage() {
  return (
    <AnimalProfileLayout
      commonName="Hummingbird"
      pageTitle={title}
      description={description}
      path="/animals/hummingbird"
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Nectar Feeder", "Wild"]}
      image={getAnimalImage("hummingbird") ?? undefined}
      galleryImages={getAnimalGalleryImages("hummingbird")}
      factsHeaderNote="“Hummingbird” covers more than 300 species in the family Trochilidae, all in the Americas. The reference shown is Anna's hummingbird (Calypte anna). Size, colour, and range vary by species."
      overview={
        <>
          <p>
            Hummingbirds are tiny, fast-flying birds of the family Trochilidae,
            found only in the Americas, with more than three hundred species.
            This page is a group-level overview; Anna&apos;s hummingbird
            (<em>Calypte anna</em>) is used as a familiar reference. Hummingbirds
            are famous for hovering in mid-air and for the iridescent, jewel-like
            colours of many species, and they include some of the smallest birds
            in the world.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Hummingbirds occur across the Americas, from Alaska and Canada to the
            southern tip of South America, in habitats ranging from gardens and
            forests to high mountains and deserts — wherever there are suitable
            flowers. Many species migrate, sometimes over remarkable distances
            for their size. Habitat and range vary widely across the family.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Hummingbirds feed largely on nectar, which they take from flowers
            using a long bill and extendable tongue, and they also eat small
            insects and spiders for protein. Their high-energy lifestyle demands
            frequent feeding. As they visit flowers, hummingbirds pollinate many
            plants. Diet varies by species and season; this page describes
            general feeding ecology, not feeder recipes.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Hummingbirds are extraordinary fliers: they beat their wings very
            rapidly, can hover precisely, and are among the few birds able to fly
            backwards. Their hearts and metabolism run extremely fast, and many
            enter a deep, energy-saving state called torpor at night or in cold
            conditions. Many are territorial around rich nectar sources.
            Behaviour varies across the many species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Hummingbirds are wild birds, not pets, and are protected by wildlife
            law in many places. They are popular garden visitors where flowers or
            feeders are available, but feeders should be kept scrupulously clean
            to avoid spreading disease, and feeding practices should follow local
            guidance. Some hummingbird species are of conservation concern due to
            habitat loss; status varies by species and should be checked against
            current sources.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Hummingbirds are very small, with slender bills, short legs, and
                often dazzling iridescent plumage — males of many species have
                brilliant throat patches (gorgets) that flash in the light. Male
                Anna&apos;s hummingbirds, for example, have a rose-pink head and
                throat. The combination of tiny size, hovering flight, and
                iridescence makes hummingbirds easy to recognise as a group,
                though species can be hard to tell apart.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Hummingbirds are most closely related to the swifts. They are sometimes
          confused with large nectar-feeding insects such as hawk-moths, which
          hover at flowers in a similar way but are insects, not birds.
          Hummingbirds are unique among FaunaHub&apos;s birds for their hovering,
          nectar-based lifestyle.
        </p>
      }
      comparisonCallouts={[
        { href: "/birdwatching", label: "Birdwatching hub" },
        { href: "/birdwatching/bird-feeding-basics", label: "Bird feeding basics" },
      ]}
      faqs={[
        {
          question: "How do hummingbirds hover?",
          answer:
            "Hummingbirds beat their wings very rapidly and move them in a figure-eight pattern that generates lift on both the forward and backward strokes, letting them hover in place and even fly backwards. This precise flight is energetically costly and is supported by a very fast metabolism.",
        },
        {
          question: "Should I put up a hummingbird feeder?",
          answer:
            "Feeders can attract hummingbirds where they occur, but they must be kept scrupulously clean to avoid spreading disease, and feeding should follow local guidance. This page is educational and does not give feeder recipes or universal feeding instructions — check trusted local bird organisations.",
        },
        {
          question: "Are hummingbirds found outside the Americas?",
          answer:
            "No. Hummingbirds are found only in the Americas, from Alaska and Canada to southern South America. Birds elsewhere that hover at flowers, such as sunbirds or hawk-moths, are not hummingbirds.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Hummingbirds (family Trochilidae)" },
        { label: "Reference species", value: "Anna's hummingbird (Calypte anna)" },
        { label: "Class", value: "Aves" },
        { label: "Diet", value: "Nectar; also small insects" },
        { label: "Range", value: "The Americas only" },
        { label: "Notable trait", value: "Hovering flight; very fast metabolism" },
        { label: "Conservation", value: "Varies by species — verify on IUCN" },
      ]}
      relatedLinks={[
        { label: "Robin Profile", href: "/animals/robin", description: "Another small bird" },
        { label: "Toucan Profile", href: "/animals/toucan" },
        { label: "Birdwatching Hub", href: "/birdwatching" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.hummingbird}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
