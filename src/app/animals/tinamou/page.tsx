import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/tinamou";
const TITLE = "Tinamou — Profile, Ancient Ground Birds, Eggs & Behavior";
const DESC =
  "Explore tinamous (family Tinamidae): plump, ground-dwelling South American birds related to the flightless ratites, known for glossy enamel-like eggs and role-reversed parenting.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("tinamou"),
});

export default function TinamouPage() {
  return (
    <AnimalProfileLayout
      commonName="Tinamou"
      scientificName="Eudromia elegans"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Ground bird", "Americas"]}
      image={getAnimalImage("tinamou") ?? undefined}
      galleryImages={getAnimalGalleryImages("tinamou")}
      sources={ANIMAL_SOURCES.tinamou}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Tinamous (family Tinamidae) are plump, rounded, ground-dwelling birds of Central
            and South America, superficially resembling partridges or small gamebirds. The
            elegant crested tinamou (<em>Eudromia elegans</em>), shown here, is a typical
            example, with finely patterned brown plumage and a slender, forward-curving
            crest. Tinamous can fly, but only in short, reluctant bursts; they spend their
            lives walking and running on the forest or grassland floor.
          </p>
          <p>
            Despite their gamebird looks, tinamous are actually relatives of the flightless
            ratites — ostriches, emus, rheas, and kiwis — making them an ancient and
            evolutionarily important group, and the only members of that lineage that can
            truly fly.
          </p>
          <p>
            <strong>Note:</strong> there are many tinamou species; details here use the
            elegant crested tinamou as a reference. Treat general statements as approximate
            and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Tinamous live across Central and South America in a wide variety of habitats —
          tropical rainforest, dry forest, scrub, grassland, and high Andean páramo —
          depending on the species. The elegant crested tinamou is a bird of open scrub and
          grassland in southern South America, while many other tinamous keep to dense
          forest understorey.
        </p>
      }
      diet={
        <p>
          Tinamous are mostly omnivores, foraging on the ground for fruit, seeds, buds, and
          roots, along with insects and other small invertebrates and occasionally small
          vertebrates. They feed quietly as they walk, picking food from the ground and low
          vegetation.
        </p>
      }
      behavior={
        <p>
          Tinamous are shy, well-camouflaged birds that rely on stillness and cryptic
          plumage to avoid predators, flushing into short, whirring flight only as a last
          resort. They are best known for two things: their beautiful eggs — glossy, hard,
          and brightly coloured (blue, green, purple, or chocolate) with an almost porcelain
          or enamel-like sheen — and their reversed parental roles. In many tinamous a
          female mates with several males, and each male incubates a clutch (often from
          several females) and raises the chicks largely alone.
        </p>
      }
      humanInteraction={
        <p>
          Tinamous are hunted for food in parts of their range and are valued as game birds,
          and their striking eggs attract attention from naturalists. Many species are
          common, but some forest tinamous are sensitive to habitat loss and hunting.
          Scientifically, they are important for understanding the evolution of birds and
          the ratite lineage. Consult authoritative sources for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Are tinamous related to ostriches and emus?",
          answer:
            "Yes — surprisingly closely. Although tinamous look like partridges and can fly, they belong to the same broad lineage as the flightless ratites (ostriches, emus, rheas, kiwis, and cassowaries). Tinamous are essentially the flying members of that ancient group, which makes them very important for understanding bird evolution.",
        },
        {
          question: "Why are tinamou eggs so striking?",
          answer:
            "Tinamou eggs are famous for their glossy, hard shells in vivid colours — blues, greens, purples, or deep chocolate — with an almost porcelain or enamel-like sheen. They are considered some of the most beautiful eggs of any bird. The reasons for the bright colours and high gloss are still studied.",
        },
        {
          question: "Who incubates the eggs in tinamous?",
          answer:
            "Usually the male. Many tinamous have reversed parental roles: a female may mate with several males, and each male incubates a clutch — sometimes containing eggs from more than one female — and then raises the chicks largely on his own. The female plays a smaller role in caring for the young.",
        },
        {
          question: "Can tinamous fly?",
          answer:
            "They can, but poorly and reluctantly. Tinamous spend their lives on the ground, walking and running, and take to the air only in short, fast, whirring bursts to escape danger. They tire quickly in flight and prefer to rely on camouflage and running instead.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Eudromia elegans (elegant crested tinamou)" },
        { label: "Class", value: "Aves (family Tinamidae)" },
        { label: "Relatives", value: "Ratites (ostrich, emu, rhea, kiwi)" },
        { label: "Diet", value: "Omnivore (fruit, seeds, insects)" },
        { label: "Famous for", value: "Glossy, colourful eggs" },
        { label: "Parenting", value: "Often role-reversed (males incubate)" },
        { label: "Flight", value: "Short, reluctant bursts only" },
        { label: "Range", value: "Central & South America" },
      ]}
      relatedLinks={[
        { label: "Rhea relatives — Ostrich Profile", href: "/animals/ostrich", description: "A flightless ratite relative" },
        { label: "Emu Profile", href: "/animals/emu", description: "Another ratite relative" },
        { label: "Guan Profile", href: "/animals/guan", description: "A Neotropical fowl-like bird" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
