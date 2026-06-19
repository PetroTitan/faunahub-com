import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/cassowary";
const TITLE = "Cassowary — Profile, Habitat, Diet & Casque";
const DESC =
  "Explore the cassowary (genus Casuarius): a large, powerful flightless rainforest bird of New Guinea and northern Australia, known for its bony casque and vivid neck colours.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("cassowary"),
});

export default function CassowaryPage() {
  return (
    <AnimalProfileLayout
      commonName="Cassowary"
      scientificName="genus Casuarius"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Ratite", "Flightless"]}
      image={getAnimalImage("cassowary") ?? undefined}
      galleryImages={getAnimalGalleryImages("cassowary")}
      sources={ANIMAL_SOURCES.cassowary}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Cassowaries are large, powerful flightless birds of the genus
            <em> Casuarius</em>, native to the tropical rainforests of New Guinea
            and northern Australia. The animal shown here is the southern cassowary
            (<em>Casuarius casuarius</em>), the largest of the three species and one
            of the heaviest birds on Earth.
          </p>
          <p>
            Cassowaries are unmistakable, with glossy black plumage, a vivid blue
            and red neck, and a tall, bony helmet-like crest called a casque. They
            are shy forest birds but are powerful and should always be treated with
            caution and given space.
          </p>
          <p>
            <strong>Conservation note:</strong> the southern cassowary is of
            conservation concern in parts of its range, affected by habitat loss,
            road mortality, and other pressures. Verify current status at
            iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Cassowaries live in tropical rainforest, and nearby woodland and swamp
          forest, in New Guinea, nearby islands, and the wet tropics of
          northeastern Australia. They depend on healthy, fruit-rich forest and are
          sensitive to its fragmentation.
        </p>
      }
      diet={
        <p>
          Cassowaries are mainly frugivores, eating large quantities of fallen
          fruit, along with some fungi, invertebrates, and small animals. Because
          they swallow large fruit whole and travel through the forest, they are
          important seed dispersers — some rainforest plants rely heavily on
          cassowaries to spread their seeds.
        </p>
      }
      behavior={
        <p>
          Cassowaries are solitary and territorial outside breeding. As with other
          ratites in this group, the male incubates the eggs and raises the striped
          chicks. They are generally shy and avoid people, but they are strong birds
          with powerful legs and a dagger-like inner claw, and can defend themselves
          if cornered or provoked — so a respectful distance is essential.
        </p>
      }
      humanInteraction={
        <p>
          The main threats to cassowaries are loss and fragmentation of rainforest,
          vehicle strikes, and other human-related hazards; feeding them is strongly
          discouraged because it changes their behaviour and increases risk. Their
          role as seed dispersers makes them ecologically important. For current
          status, consult authoritative sources such as the IUCN Red List.
        </p>
      }
      faqs={[
        {
          question: "What is a cassowary's casque?",
          answer:
            "The casque is the tall, helmet-like crest on top of a cassowary's head, made of a spongy, keratin-covered structure. Its exact function is still studied, with suggested roles including signalling, helping push through dense vegetation, and possibly sound or heat regulation.",
        },
        {
          question: "Are cassowaries dangerous?",
          answer:
            "Cassowaries are usually shy and avoid people, but they are large, powerful birds with strong legs and a sharp inner claw, and can injure a person if cornered, provoked, or habituated to being fed. The standard guidance is to keep a safe distance and never feed them.",
        },
        {
          question: "Can cassowaries fly?",
          answer:
            "No. Cassowaries are flightless ratites, related to emus, ostriches, and kiwis. They are adapted for moving through dense rainforest on foot rather than for flight.",
        },
        {
          question: "Why are cassowaries important to the forest?",
          answer:
            "Cassowaries are key seed dispersers. By eating large fruits whole and moving through the forest, they spread the seeds of many rainforest plants — some of which depend on cassowaries to disperse and germinate effectively.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Casuarius (3 species)" },
        { label: "Reference species", value: "Casuarius casuarius" },
        { label: "Class", value: "Aves" },
        { label: "Type", value: "Ratite (flightless)" },
        { label: "Diet", value: "Mainly fruit (frugivore)" },
        { label: "Notable feature", value: "Bony casque; key seed disperser" },
        { label: "Habitat", value: "Tropical rainforest" },
        { label: "Range", value: "New Guinea & NE Australia" },
        { label: "IUCN Status", value: "Verify by species" },
      ]}
      relatedLinks={[
        { label: "Emu Profile", href: "/animals/emu", description: "Australia's large ratite" },
        { label: "Ostrich Profile", href: "/animals/ostrich", description: "The world's largest bird" },
        { label: "Kiwi Profile", href: "/animals/kiwi", description: "A small flightless relative" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Oceania fauna in context" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
