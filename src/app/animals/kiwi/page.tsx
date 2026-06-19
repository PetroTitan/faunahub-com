import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/kiwi";
const TITLE = "Kiwi — Profile, Habitat, Diet & Behavior";
const DESC =
  "Explore kiwi (genus Apteryx): the small, flightless, nocturnal birds found only in New Zealand, famous for their long bills, hair-like feathers, and unusually large eggs.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("kiwi"),
});

export default function KiwiPage() {
  return (
    <AnimalProfileLayout
      commonName="Kiwi"
      scientificName="genus Apteryx"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Ratite", "Nocturnal"]}
      image={getAnimalImage("kiwi") ?? undefined}
      galleryImages={getAnimalGalleryImages("kiwi")}
      sources={ANIMAL_SOURCES.kiwi}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Kiwi are small, flightless, nocturnal birds of the genus
            <em> Apteryx</em>, found only in New Zealand. Roughly chicken-sized,
            they are very different from their giant ratite relatives — covered in
            soft, hair-like feathers, with tiny vestigial wings, strong legs, and a
            long, slender bill with nostrils unusually placed at the tip. The animal
            shown here is the North Island brown kiwi (<em>Apteryx mantelli</em>).
          </p>
          <p>
            A beloved national symbol of New Zealand, the kiwi is also famous for
            laying one of the largest eggs relative to body size of any bird.
          </p>
          <p>
            <strong>Conservation note:</strong> several kiwi species and populations
            are of conservation concern, mainly because of introduced predators and
            habitat loss, and are the focus of intensive protection. Status varies by
            species, so verify specifics at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Kiwi live in a range of New Zealand habitats — native forest, scrub,
          tussock grassland, and even some farmland and exotic forest — sheltering
          in burrows, hollow logs, or dense vegetation by day. Different species
          occupy different parts of the North and South Islands and nearby islands.
        </p>
      }
      diet={
        <p>
          Kiwi forage at night, probing soil and leaf litter for earthworms,
          insect larvae, and other invertebrates, along with some fallen fruit and
          seeds. With nostrils at the tip of the bill, kiwi have an unusually good
          sense of smell for a bird, which helps them locate hidden prey.
        </p>
      }
      behavior={
        <p>
          Kiwi are nocturnal and largely solitary or live in pairs, defending
          territories. They are best known for their enormous egg, which can be a
          very large fraction of the female&apos;s body weight; in many kiwi the male
          does much of the incubation. Their calls — including the shrill cry that
          gives the male his name — carry through the night forest.
        </p>
      }
      humanInteraction={
        <p>
          Kiwi declined sharply after the arrival of introduced mammalian predators
          such as stoats, cats, and dogs, along with habitat loss. They are now the
          focus of major conservation programmes — predator control, protected
          reserves, and egg-rearing initiatives. For current, species-specific
          status, consult authoritative sources such as the IUCN Red List.
        </p>
      }
      faqs={[
        {
          question: "Why can't kiwi fly?",
          answer:
            "Kiwi are flightless ratites with tiny, vestigial wings. They evolved in New Zealand, which historically had no native land mammals, filling ground-dwelling roles elsewhere taken by mammals. Their feathers are soft and hair-like rather than suited to flight.",
        },
        {
          question: "How big is a kiwi egg?",
          answer:
            "Remarkably large for the bird's size — a kiwi egg is one of the largest relative to body size of any bird, taking up a great deal of room inside the female before laying. In many kiwi, the male takes on much of the lengthy incubation.",
        },
        {
          question: "Where do kiwi live?",
          answer:
            "Only in New Zealand. Different species are found across the North and South Islands and some offshore islands, in forest, scrub, tussock grassland, and other habitats, sheltering in burrows by day.",
        },
        {
          question: "Are kiwi endangered?",
          answer:
            "Several kiwi species and populations are of conservation concern, primarily due to introduced predators and habitat loss, and are protected through intensive conservation efforts. The precise status differs by species and should be checked against current IUCN Red List data.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Apteryx" },
        { label: "Reference species", value: "Apteryx mantelli" },
        { label: "Class", value: "Aves" },
        { label: "Type", value: "Ratite (flightless)" },
        { label: "Diet", value: "Invertebrates; some fruit & seeds" },
        { label: "Activity", value: "Nocturnal; keen sense of smell" },
        { label: "Notable for", value: "Very large egg; NZ icon" },
        { label: "Range", value: "New Zealand only" },
        { label: "IUCN Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Emu Profile", href: "/animals/emu", description: "A large flightless relative" },
        { label: "Cassowary Profile", href: "/animals/cassowary", description: "A powerful rainforest ratite" },
        { label: "Tuatara Profile", href: "/animals/tuatara", description: "Another unique New Zealand species" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Oceania fauna in context" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
