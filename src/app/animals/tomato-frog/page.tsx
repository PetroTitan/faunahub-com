import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/tomato-frog";
const TITLE = "Tomato Frog — Profile, the Red Frog of Madagascar & Its Sticky Defense";
const DESC =
  "Explore the tomato frog (Dyscophus antongilii): a plump, tomato-red frog found only in Madagascar that puffs up and oozes a sticky, irritating glue when threatened.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("tomato-frog"),
});

export default function TomatoFrogPage() {
  return (
    <AnimalProfileLayout
      commonName="Tomato Frog"
      scientificName="Dyscophus antongilii"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Frog", "Madagascar"]}
      image={getAnimalImage("tomato-frog") ?? undefined}
      galleryImages={getAnimalGalleryImages("tomato-frog")}
      sources={ANIMAL_SOURCES["tomato-frog"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The tomato frog (<em>Dyscophus antongilii</em>) is a round, plump frog found only
            on Madagascar, named for its colour: the females are a vivid tomato-red to
            orange, while males tend to be smaller and a duller yellow-orange. With its
            smooth skin and almost spherical shape when inflated, the tomato frog is one of
            the most recognisable amphibians of Madagascar.
          </p>
          <p>
            That bright red is a warning. When threatened, a tomato frog can puff itself up to
            look bigger and secrete a thick, sticky, white substance from its skin that gums
            up a predator&apos;s mouth and can irritate the eyes and skin — a very effective
            deterrent.
          </p>
          <p>
            <strong>Note:</strong> there are a few tomato frog species; details here use
            Dyscophus antongilii as a reference. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Tomato frogs live in northeastern Madagascar, in lowland rainforest, swampy areas,
          and slow waters, including disturbed and human-modified habitats such as ditches and
          gardens near towns. They favour humid spots with shallow, still water for breeding,
          and they spend much of their time on the ground or partly buried.
        </p>
      }
      diet={
        <p>
          Tomato frogs are insectivores and ambush feeders. They sit and wait, often partly
          buried in leaf litter or soil, and snap up insects and other small invertebrates —
          such as beetles, worms, and other ground-dwelling prey — that come within reach. They
          have hearty appetites suited to their stout build.
        </p>
      }
      behavior={
        <p>
          The tomato frog&apos;s main defences are its warning colour, body inflation, and
          sticky secretion. When grabbed, it produces a gluey skin fluid that can stick a
          predator&apos;s jaws together and cause irritation, usually making the attacker
          release and avoid it. Tomato frogs are mostly nocturnal and spend dry periods quietly
          hidden, becoming active and breeding after rains, when males call from shallow water
          to attract the larger females. The tadpoles develop in temporary pools.
        </p>
      }
      humanInteraction={
        <p>
          The tomato frog is a popular and charismatic species, well known from zoos and the
          pet trade, and it adapts to some human-altered habitats. However, collection for the
          trade and habitat loss have raised conservation concerns, and the species is legally
          protected. As an animal with an irritating skin secretion, it should be handled with
          care if at all. Consult the IUCN Red List and AmphibiaWeb for current status.
        </p>
      }
      faqs={[
        {
          question: "Why is the tomato frog so red?",
          answer:
            "Its bright tomato-red colour is a warning (aposematism). It signals to predators that the frog is unpleasant or risky to eat — and indeed, if attacked, the tomato frog oozes a sticky, irritating secretion. Females are the most vividly red; males are usually smaller and duller orange-yellow.",
        },
        {
          question: "How does a tomato frog defend itself?",
          answer:
            "With colour, bluff, and glue. When threatened, it puffs up its body to look bigger and harder to swallow, and it secretes a thick, sticky white substance from its skin that can gum up a predator's mouth and irritate the eyes and skin. This usually makes the attacker spit it out and leave it alone.",
        },
        {
          question: "What does a tomato frog eat?",
          answer:
            "It's an insectivore and ambush feeder, sitting still — often partly buried — and snapping up insects, worms, and other small invertebrates that wander close. Its plump build suits a sit-and-wait lifestyle rather than active chasing of prey.",
        },
        {
          question: "Where do tomato frogs live?",
          answer:
            "Only on Madagascar, mainly in the northeast, in lowland rainforest, swamps, and slow waters, including some disturbed areas like ditches and gardens near towns. They need shallow, still water for breeding and are mostly active at night, especially after rains.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Dyscophus antongilii" },
        { label: "Class", value: "Amphibia (frog)" },
        { label: "Colour", value: "Vivid red (warning); females reddest" },
        { label: "Defence", value: "Inflates; oozes sticky irritant secretion" },
        { label: "Diet", value: "Insectivore (ambush feeder)" },
        { label: "Range", value: "NE Madagascar only" },
        { label: "Activity", value: "Mostly nocturnal" },
        { label: "Status", value: "Protected (verify)" },
      ]}
      relatedLinks={[
        { label: "Mantella Profile", href: "/animals/mantella", description: "Another vivid Madagascan frog" },
        { label: "Poison Dart Frog Profile", href: "/animals/poison-dart-frog", description: "Another brightly warning frog" },
        { label: "Bullfrog Profile", href: "/animals/bullfrog", description: "A large, very different frog" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Madagascan fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
