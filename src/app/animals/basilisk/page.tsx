import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/basilisk";
const TITLE = "Basilisk — Profile, the Lizard That Runs on Water";
const DESC =
  "Explore basilisks (genus Basiliscus): Central American lizards famous for sprinting across water on their hind legs — the 'Jesus Christ lizard' — using the green basilisk as a reference.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("basilisk"),
});

export default function BasiliskPage() {
  return (
    <AnimalProfileLayout
      commonName="Basilisk"
      scientificName="Basiliscus plumifrons"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Lizard", "Central America"]}
      image={getAnimalImage("basilisk") ?? undefined}
      galleryImages={getAnimalGalleryImages("basilisk")}
      sources={ANIMAL_SOURCES.basilisk}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Basilisks (genus <em>Basiliscus</em>) are lizards of Central and northern South
            America best known for an almost magical ability: they can sprint across the
            surface of water on their hind legs without sinking. This has earned them the
            nickname &ldquo;Jesus Christ lizard.&rdquo; The green basilisk
            (<em>Basiliscus plumifrons</em>), shown here, is a vivid emerald species with
            tall crests on the head, back, and tail, especially in males.
          </p>
          <p>
            The water-running trick is real physics, not myth: young, light basilisks slap
            the water with their broad-toed hind feet fast enough to create pockets of air
            and push off before they sink.
          </p>
          <p>
            <strong>Note:</strong> there are several basilisk species; details here use the
            green basilisk as a reference. Treat general statements as approximate and verify
            against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Basilisks live in tropical rainforests and along rivers, streams, and ponds of
          Central America (the green basilisk ranges from southern Mexico through Costa Rica
          and into Panama). They are usually found in vegetation close to water, which they
          use both for feeding and as an escape route.
        </p>
      }
      diet={
        <p>
          Basilisks are omnivores, eating mostly insects and other invertebrates along with
          small vertebrates (such as small lizards, fish, or frogs) and a fair amount of
          plant matter, including fruit and flowers. They forage in vegetation and along the
          water&apos;s edge, snapping up whatever suitable prey they encounter.
        </p>
      }
      behavior={
        <p>
          The basilisk&apos;s signature escape is to drop into water and run across the
          surface on its hind legs — fringes of skin on the toes spread to increase surface
          area, and rapid slapping strokes create momentary air pockets that keep it from
          sinking, at least until its speed drops, when it simply swims. Basilisks are also
          excellent swimmers and divers and can stay underwater for a time. They are agile
          climbers, active by day, and rely on speed and water to evade the many predators
          of the rainforest.
        </p>
      }
      humanInteraction={
        <p>
          Basilisks are harmless to people and a favourite sight for rainforest visitors,
          who are often amazed to see one dash across a stream. They are sometimes kept as
          exotic pets (where legal). Green basilisks remain reasonably widespread but depend
          on healthy waterside forest. Consult authoritative sources for species-specific
          status.
        </p>
      }
      faqs={[
        {
          question: "How does a basilisk run on water?",
          answer:
            "It uses speed and physics, not magic. A basilisk drops onto the water and runs upright on its hind legs, spreading fringed toes to increase foot area and slapping the surface rapidly. Each slap creates a momentary air pocket the lizard pushes off before it collapses. Light young basilisks can run several metres this way; once they slow down, they swim.",
        },
        {
          question: "Why is it called the 'Jesus Christ lizard'?",
          answer:
            "Because of its apparent ability to walk (run) on water. The sight of a basilisk sprinting across the surface of a stream led to the affectionate nickname 'Jesus Christ lizard' or 'Jesus lizard.' It's a real, well-understood behaviour used mainly to escape predators.",
        },
        {
          question: "What do basilisks eat?",
          answer:
            "Basilisks are omnivores. They eat mostly insects and other invertebrates, plus small vertebrates like little lizards, fish, or frogs, and a good amount of plant material such as fruit and flowers. They forage in waterside vegetation and along stream banks.",
        },
        {
          question: "Are basilisks dangerous?",
          answer:
            "No — basilisks are completely harmless to humans. They are shy, fast lizards that flee from danger (often by running across water or diving in). The name 'basilisk' comes from a mythical reptile, but the real animal poses no threat to people.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Basiliscus plumifrons (green basilisk)" },
        { label: "Class", value: "Reptilia (lizard)" },
        { label: "Famous for", value: "Running on water ('Jesus lizard')" },
        { label: "Diet", value: "Omnivore (insects, small prey, plants)" },
        { label: "Skills", value: "Runs on water; swims & dives well" },
        { label: "Habitat", value: "Waterside tropical forest" },
        { label: "Range", value: "Central America" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Iguana Profile", href: "/animals/iguana", description: "A larger relative in the same broad group" },
        { label: "Anole Profile", href: "/animals/anole", description: "Another agile American lizard" },
        { label: "Chameleon Profile", href: "/animals/chameleon", description: "A very different specialised lizard" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Central American fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
