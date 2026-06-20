import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/shrew";
const TITLE = "Shrew — Profile, High Metabolism, Diet & Behavior";
const DESC =
  "Explore shrews (family Soricidae): tiny, frantic-living insectivores with a non-stop metabolism — using the common shrew as a reference. Not rodents, despite the resemblance.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("shrew"),
});

export default function ShrewPage() {
  return (
    <AnimalProfileLayout
      commonName="Shrew"
      scientificName="family Soricidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Insectivore", "Tiny"]}
      image={getAnimalImage("shrew") ?? undefined}
      galleryImages={getAnimalGalleryImages("shrew")}
      sources={ANIMAL_SOURCES.shrew}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Shrews are tiny, mouse-like mammals of the family Soricidae, among the
            smallest mammals on Earth. The common shrew (<em>Sorex araneus</em>), shown
            here, has a long, pointed, twitching snout, small eyes, velvety fur, and
            sharp, often red-tipped teeth. Despite looking like mice, shrews are not
            rodents — they are insectivores, more closely related to moles and hedgehogs.
          </p>
          <p>
            Shrews live life at an extraordinary pace: their hearts beat very fast and
            their metabolism is so high that they must eat almost constantly, day and
            night, or they will starve within hours.
          </p>
          <p>
            <strong>Note:</strong> there are hundreds of shrew species worldwide with
            varied habits; details here use the common shrew as a reference. Treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Shrews are found across much of the world, in habitats ranging from woodland,
          grassland, and hedgerows to wetlands and gardens. The common shrew is widespread
          in Europe, favouring places with thick ground cover — leaf litter, long grass,
          and undergrowth — where it can hunt small prey and stay hidden from predators.
        </p>
      }
      diet={
        <p>
          Shrews are voracious carnivores/insectivores, feeding on insects, earthworms,
          spiders, slugs, and other small invertebrates. Because of their very high
          metabolism, they must eat huge amounts relative to their size and cannot survive
          long without food. Some shrews have a venomous bite that helps subdue prey, and
          a few even cache immobilised prey to eat later.
        </p>
      }
      behavior={
        <p>
          Shrews are mostly solitary, territorial, and active in short bursts around the
          clock rather than being strictly day- or night-active, fitting frequent feeding
          around brief rests. They have poor eyesight and rely on smell, touch, and
          hearing; some species use a simple form of echolocation. Their frantic,
          energy-hungry lifestyle means they live fast and, typically, only a year or so.
        </p>
      }
      humanInteraction={
        <p>
          Shrews are valuable natural controllers of insect and other invertebrate pests
          in gardens, fields, and woodlands. They are largely harmless to people, though
          cats often catch them and then leave them uneaten — partly because some shrews
          have unpleasant-tasting scent glands. Many shrew species are common, but some
          are restricted or poorly known. Consult authoritative sources for
          species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Is a shrew a mouse or a rodent?",
          answer:
            "No, despite the resemblance. Shrews are not rodents at all — they belong to the family Soricidae and are insectivores, more closely related to moles and hedgehogs than to mice. Their pointed snout and small, sharp teeth distinguish them from the gnawing front teeth of true rodents.",
        },
        {
          question: "Why do shrews have to eat so much?",
          answer:
            "Shrews have an exceptionally high metabolism and a very fast heartbeat, so they burn energy extremely quickly. To keep up, many must eat close to their own body weight in food each day and can starve within just a few hours without eating, which is why they forage almost constantly.",
        },
        {
          question: "Are shrews venomous?",
          answer:
            "Some are. A number of shrew species produce venom in their saliva that helps subdue invertebrate prey (and, in some, keep it alive but immobilised for later). The venom is adapted to small prey and is not considered dangerous to humans, though a bite can be unpleasant.",
        },
        {
          question: "How long do shrews live?",
          answer:
            "Not long. Their fast, energy-intensive lifestyle takes a toll, and many shrews live only around a year, often dying after a single breeding season. This short, frantic life is a direct consequence of their tiny size and very high metabolism.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Soricidae" },
        { label: "Reference species", value: "Sorex araneus (common shrew)" },
        { label: "Class", value: "Mammalia (insectivore)" },
        { label: "Not a", value: "Rodent (related to moles/hedgehogs)" },
        { label: "Diet", value: "Insects, worms & invertebrates" },
        { label: "Metabolism", value: "Very high; must eat almost constantly" },
        { label: "Lifespan", value: "Often about a year" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Mole Profile", href: "/animals/mole", description: "A close insectivore relative" },
        { label: "Hedgehog Profile", href: "/animals/hedgehog", description: "Another spiny insectivore relative" },
        { label: "Bat Profile", href: "/animals/bat", description: "Another small, high-metabolism mammal" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Small mammal fauna in context" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
