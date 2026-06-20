import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/skink";
const TITLE = "Skink — Profile, Smooth Scales, Diet & Behavior";
const DESC =
  "Explore skinks (family Scincidae): one of the largest lizard families — smooth-scaled, often short-limbed lizards — using the blue-tongued skink as a colourful reference.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("skink"),
});

export default function SkinkPage() {
  return (
    <AnimalProfileLayout
      commonName="Skink"
      scientificName="family Scincidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Lizard", "Scincidae"]}
      image={getAnimalImage("skink") ?? undefined}
      galleryImages={getAnimalGalleryImages("skink")}
      sources={ANIMAL_SOURCES.skink}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Skinks (family Scincidae) make up one of the largest and most diverse families
            of lizards, with well over a thousand species worldwide. They typically have
            smooth, shiny, closely overlapping scales, a long body, and relatively short
            legs (some species have tiny or no limbs at all), giving many skinks a sleek,
            polished look and a slightly snake-like way of moving. The blue-tongued skink
            (<em>Tiliqua</em>), shown here, is a large, familiar example that flashes a
            bright blue tongue to startle predators.
          </p>
          <p>
            Skinks live on every continent except Antarctica and fill a huge variety of
            roles, from leaf-litter hunters to burrowers to basking ground lizards.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;skink&rdquo; spans an enormous, varied family;
            details here use the blue-tongued skink as a reference. Treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Skinks occur worldwide except Antarctica, in habitats from rainforests, grasslands,
          and deserts to gardens and rocky areas. Many live among leaf litter or in
          burrows, while others bask in the open. Their wide distribution and varied
          lifestyles are part of what makes the family so successful and species-rich.
        </p>
      }
      diet={
        <p>
          Most skinks are insectivores or omnivores, eating insects, snails, worms, and
          other small invertebrates; larger species such as blue-tongued skinks also take
          a good deal of plant matter, including leaves, flowers, and fruit, along with
          the occasional small animal. Diet varies widely across the family.
        </p>
      }
      behavior={
        <p>
          Many skinks can shed their tail (autotomy) to escape a predator, leaving the
          wriggling tail behind as a distraction before later regrowing it. Blue-tongued
          skinks add another trick: when alarmed they open the mouth wide and stick out a
          startling blue tongue as a bluff. Skinks regulate their temperature by basking
          and seeking shade, and breeding strategies vary — some lay eggs while others
          give birth to live young.
        </p>
      }
      humanInteraction={
        <p>
          Skinks are common and often live close to people, including in gardens, where
          they help control insects and other invertebrate pests. Some, such as
          blue-tongued skinks, are popular in the pet trade (where kept responsibly and
          legally). Many species are widespread, but some restricted-range skinks are of
          conservation concern. Consult authoritative sources for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Are skinks snakes or lizards?",
          answer:
            "Skinks are lizards, part of the family Scincidae. Some have very short legs or none at all and move in a snake-like way, which can cause confusion, but they are true lizards — most have eyelids and external ear openings, which snakes lack.",
        },
        {
          question: "Why do blue-tongued skinks have a blue tongue?",
          answer:
            "It's a defensive bluff. When threatened, a blue-tongued skink opens its mouth and thrusts out its bright blue tongue, which can startle or confuse a predator long enough for the slow-moving lizard to escape. The vivid colour stands out as a sudden warning display.",
        },
        {
          question: "Can skinks lose their tails?",
          answer:
            "Many can. Like a number of lizards, skinks can deliberately shed their tail (a process called autotomy) when grabbed by a predator. The detached tail keeps wriggling to distract the attacker while the skink escapes, and the tail later regrows, though often differently from the original.",
        },
        {
          question: "What do skinks eat?",
          answer:
            "It depends on the species. Most skinks eat insects and other small invertebrates, while larger ones such as blue-tongued skinks are omnivores that also eat plenty of plant material — leaves, flowers, and fruit — plus the occasional small animal.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Scincidae" },
        { label: "Reference", value: "Blue-tongued skink (Tiliqua)" },
        { label: "Class", value: "Reptilia (lizard)" },
        { label: "Scales", value: "Smooth, shiny, overlapping" },
        { label: "Diet", value: "Insectivore/omnivore (varies)" },
        { label: "Defences", value: "Tail-shedding; blue-tongue bluff" },
        { label: "Range", value: "Worldwide except Antarctica" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Gecko Profile", href: "/animals/gecko", description: "Another widespread lizard family" },
        { label: "Iguana Profile", href: "/animals/iguana", description: "A large plant-eating lizard" },
        { label: "Chameleon Profile", href: "/animals/chameleon", description: "Lizards famed for colour change" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Lizard fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
