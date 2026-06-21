import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/tamandua";
const TITLE = "Tamandua — Profile, the Tree Anteater, Diet & Behavior";
const DESC =
  "Explore tamanduas (genus Tamandua): medium-sized tree-climbing anteaters of the Americas with a prehensile tail and a long sticky tongue for raiding ant and termite nests.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("tamandua"),
});

export default function TamanduaPage() {
  return (
    <AnimalProfileLayout
      commonName="Tamandua"
      scientificName="Tamandua tetradactyla"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Anteater", "Americas"]}
      image={getAnimalImage("tamandua") ?? undefined}
      galleryImages={getAnimalGalleryImages("tamandua")}
      sources={ANIMAL_SOURCES.tamandua}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Tamanduas (genus <em>Tamandua</em>) are medium-sized anteaters of Central and
            South America, often called &ldquo;lesser anteaters&rdquo; to distinguish them
            from the much larger giant anteater. The southern tamandua
            (<em>Tamandua tetradactyla</em>), shown here, has a long snout, a tubular
            toothless mouth, powerful clawed forelimbs, and a strong prehensile tail. Many
            tamanduas wear a distinctive dark &ldquo;vest&rdquo; of fur over the shoulders
            and back.
          </p>
          <p>
            Unlike the ground-dwelling giant anteater, tamanduas are at home in the trees as
            well as on the ground, climbing skilfully to find food.
          </p>
          <p>
            <strong>Note:</strong> there are two tamandua species; details here use the
            southern tamandua as a reference. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Tamanduas live across a wide range of habitats in Central and South America —
          rainforest, dry forest, savanna, mangroves, and gallery forest — wherever ants and
          termites are plentiful. The southern tamandua is widespread east of the Andes,
          using both the trees and the ground and sheltering in hollow trees or burrows.
        </p>
      }
      diet={
        <p>
          Tamanduas are insectivores specialising in ants and termites. They tear open nests
          with strong claws and lap up the insects with a very long, sticky tongue, often
          avoiding the most heavily defended or chemically protected species and moving on
          before a colony&apos;s soldiers overwhelm them. They also take some bees and honey.
          Having no teeth, they rely on a muscular stomach to grind their food.
        </p>
      }
      behavior={
        <p>
          Tamanduas are mostly solitary and active by day or night depending on the area.
          The prehensile tail and curved claws make them able climbers, and they forage both
          in the canopy and on the ground. When threatened, a tamandua may rear up on its
          hind legs and tail and slash with its powerful front claws — a real deterrent to
          predators. They have poor eyesight but a keen sense of smell for locating insect
          nests.
        </p>
      }
      humanInteraction={
        <p>
          Tamanduas are generally widespread and help control ants and termites, but they
          can be affected by habitat loss, road deaths, and hunting in places, and are
          sometimes kept (inappropriately) as exotic pets. They are shy, specialised animals
          best left in the wild. Consult authoritative sources for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Is a tamandua the same as a giant anteater?",
          answer:
            "No — they are related but different. Tamanduas are medium-sized 'lesser anteaters' that climb trees using a prehensile tail, while the giant anteater is much larger and lives entirely on the ground. Both share the long snout, toothless tube-mouth, and sticky tongue of anteaters.",
        },
        {
          question: "What do tamanduas eat?",
          answer:
            "Mainly ants and termites. A tamandua rips open nests with strong claws and laps up the insects with its long, sticky tongue, often taking a little from many nests rather than destroying one. It also eats some bees and honey, and grinds food in a muscular stomach since it has no teeth.",
        },
        {
          question: "How does a tamandua defend itself?",
          answer:
            "If cornered, a tamandua can rear up on its hind legs, bracing with its tail, and slash with its large, sharp front claws. These claws — primarily tools for tearing into insect nests — make a formidable defence that can deter predators.",
        },
        {
          question: "Can tamanduas climb trees?",
          answer:
            "Yes, very well. Unlike the ground-dwelling giant anteater, tamanduas are skilled climbers, using a prehensile tail and curved claws to move through the trees as well as forage on the ground. This lets them reach ant and termite nests both high and low.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Tamandua tetradactyla (southern tamandua)" },
        { label: "Class", value: "Mammalia (anteater)" },
        { label: "Also called", value: "Lesser anteater" },
        { label: "Diet", value: "Ants & termites (sticky tongue)" },
        { label: "Traits", value: "Prehensile tail; strong claws; no teeth" },
        { label: "Lifestyle", value: "Climbs trees & forages on ground" },
        { label: "Range", value: "Central & South America" },
        { label: "Status", value: "Generally widespread (verify)" },
      ]}
      relatedLinks={[
        { label: "Aardvark Profile", href: "/animals/aardvark", description: "An African ant-and-termite eater" },
        { label: "Pangolin Profile", href: "/animals/pangolin", description: "A scaly ant-and-termite specialist" },
        { label: "Sloth Profile", href: "/animals/sloth", description: "A related slow-moving Neotropical mammal" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Neotropical fauna in context" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
