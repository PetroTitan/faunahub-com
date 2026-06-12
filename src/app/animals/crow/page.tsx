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

const title = "Crow — Profile, Habitat, Diet & Behavior";
const description =
  "Crows are intelligent black birds in the genus Corvus. A group-level overview using the American crow as a reference: appearance, omnivorous diet, and behaviour.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/crow",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("crow"),
});

export default function CrowPage() {
  return (
    <AnimalProfileLayout
      commonName="Crow"
      pageTitle={title}
      description={description}
      path="/animals/crow"
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Corvid", "Wild"]}
      image={getAnimalImage("crow") ?? undefined}
      galleryImages={getAnimalGalleryImages("crow")}
      factsHeaderNote="“Crow” covers several species in the genus Corvus. The reference shown is the American crow (Corvus brachyrhynchos). The closely related raven is larger; the two are covered separately."
      overview={
        <>
          <p>
            Crows are medium-to-large, all-black birds in the genus
            <em> Corvus</em>, part of the corvid family that also includes
            ravens, jays, and magpies. This page is a group-level overview; the
            American crow (<em>Corvus brachyrhynchos</em>) is used as a familiar
            reference. Crows are widely regarded as among the most intelligent
            birds, known for problem-solving, tool use in some species, and
            complex social behaviour.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Crows are highly adaptable and occur in woodland, farmland,
            grassland, coasts, and towns and cities across much of the world.
            Many thrive alongside people. Ranges and habitats differ between the
            various crow species, so a description of one does not apply to all.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Crows are opportunistic omnivores with a broad and flexible diet
            that can include invertebrates, small animals, eggs, seeds, fruit,
            carrion, and human food waste. This adaptability is part of why they
            are so successful. Diet varies by species, season, and what is
            locally available.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Crows are social and often form large communal roosts outside the
            breeding season. They are noted for intelligence — including memory
            of individual human faces in studies of some species — and for
            varied vocalisations. Some crows use and even shape tools. Behaviour
            varies across the group, from highly social species to more
            territorial ones.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Crows are wild birds, not pets, and are protected by wildlife law in
            many regions. They feature widely in culture and folklore. Most crow
            species are common, though some island species are threatened;
            conservation status varies and should be checked against current
            sources. Do not disturb nests or roosts, and contact a licensed
            wildlife rehabilitator or local authority for any injured wild bird.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Crows are sturdy black birds with strong legs and a stout,
                straight bill. The American crow is glossy black all over with a
                fan-shaped tail. Crows are most often confused with ravens, which
                are larger, with a heavier bill, shaggier throat feathers, and a
                wedge-shaped tail, and tend to give a deeper, croaking call.
                Size, tail shape, and voice are useful ways to tell crows and
                ravens apart.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Crows are corvids, the same family as the raven covered separately on
          FaunaHub, along with jays, magpies, and rooks. The raven is the bird
          most often confused with a crow; the two differ in size, bill, tail
          shape, and voice.
        </p>
      }
      comparisonCallouts={[
        { href: "/birdwatching", label: "Birdwatching hub" },
      ]}
      faqs={[
        {
          question: "What is the difference between a crow and a raven?",
          answer:
            "Ravens are larger than crows, with a heavier bill, shaggy throat feathers, a wedge-shaped (rather than fan-shaped) tail, and a deeper croaking call. Both are black corvids in the genus Corvus, but these features help tell them apart. FaunaHub covers the raven separately.",
        },
        {
          question: "Are crows really intelligent?",
          answer:
            "Crows are widely studied for their intelligence. Research on some species documents problem-solving, tool use, and the ability to recognise individual human faces. Intelligence varies across the group, but corvids as a whole are considered among the most cognitively capable birds.",
        },
        {
          question: "Why do crows gather in large groups?",
          answer:
            "Outside the breeding season, many crows form large communal roosts, which may offer benefits such as safety in numbers and information-sharing about food. Roosting and flocking behaviour varies by species and season.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Crows (genus Corvus)" },
        { label: "Reference species", value: "American crow (Corvus brachyrhynchos)" },
        { label: "Family", value: "Corvidae (corvids)" },
        { label: "Diet", value: "Opportunistic omnivore" },
        { label: "Notable trait", value: "High intelligence; social roosts" },
        { label: "Conservation", value: "Most common; some island species threatened" },
      ]}
      relatedLinks={[
        { label: "Raven Profile", href: "/animals/raven", description: "The larger corvid relative" },
        { label: "Sparrow Profile", href: "/animals/sparrow" },
        { label: "Birdwatching Hub", href: "/birdwatching" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES.crow}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
