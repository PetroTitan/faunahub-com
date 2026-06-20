import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/galago";
const TITLE = "Galago (Bushbaby) — Profile, Leaping, Diet & Calls";
const DESC =
  "Explore galagos or bushbabies (family Galagidae): small, wide-eyed nocturnal African primates that make spectacular leaps and call with eerie, baby-like cries.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("galago"),
});

export default function GalagoPage() {
  return (
    <AnimalProfileLayout
      commonName="Galago (Bushbaby)"
      scientificName="Galago moholi"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "Nocturnal"]}
      image={getAnimalImage("galago") ?? undefined}
      galleryImages={getAnimalGalleryImages("galago")}
      sources={ANIMAL_SOURCES.galago}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Galagos — better known as bushbabies — are small, nocturnal African primates of
            the family Galagidae, with large round eyes, big mobile ears, soft fur, and long
            powerful hind legs. The Mohol bushbaby (<em>Galago moholi</em>), shown here, is a
            typical small species. Like lemurs and lorises, galagos belong to the more
            &ldquo;primitive&rdquo; branch of primates, and they are superbly adapted to a
            life of leaping through trees in the dark.
          </p>
          <p>
            Bushbabies likely owe their name to their loud, wailing calls, which can sound
            eerily like a crying human infant echoing through the African night.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;galago&rdquo; covers many species of different
            sizes; details here use the Mohol bushbaby as a reference. Treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Galagos are found across much of sub-Saharan Africa, in habitats from savanna
          woodland and acacia scrub to dense forest, depending on the species. The Mohol
          bushbaby favours drier savanna woodlands of southern Africa, sheltering by day in
          tree hollows, dense foliage, or nests and emerging at night to feed.
        </p>
      }
      diet={
        <p>
          Galagos are omnivores whose diet centres on insects and tree gum (sap), with the
          balance varying by species and season; they also take fruit, nectar, and small
          animals. The Mohol bushbaby relies heavily on acacia gum and on insects it snatches
          with quick, accurate grabs, often catching them in mid-air.
        </p>
      }
      behavior={
        <p>
          Galagos are spectacular leapers, springing many times their body length between
          branches with their long, muscular hind legs and landing precisely thanks to keen
          night vision and large, independently swivelling ears. They are mostly active alone
          at night but maintain social networks through scent (including a habit of
          &ldquo;urine-washing&rdquo; their hands and feet) and a rich variety of calls.
          The loud cries that carry through the dark give the bushbaby its name.
        </p>
      }
      humanInteraction={
        <p>
          Bushbabies are widespread and many species remain common, though some forest
          specialists are less well known and depend on intact habitat. They are sometimes
          captured for the pet trade, which is discouraged given their specialised nocturnal,
          active lifestyle. Ecologically they help control insects and pollinate or disperse
          some plants. Consult authoritative sources for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why are galagos called 'bushbabies'?",
          answer:
            "The name is usually linked to their calls: galagos give loud, wailing cries in the night that can sound remarkably like a crying human baby. Combined with their large, infant-like eyes, this earned them the affectionate name 'bushbaby.'",
        },
        {
          question: "How far can a galago jump?",
          answer:
            "Remarkably far for their size. Powered by long, muscular hind legs, galagos can leap many times their own body length between branches, and they string together rapid jumps to move through the trees. Precise landings rely on their excellent night vision and large, steerable ears.",
        },
        {
          question: "What do galagos eat?",
          answer:
            "They are omnivores, with insects and tree gum forming the core of the diet for many species, supplemented by fruit, nectar, and small animals. The Mohol bushbaby, for example, depends heavily on acacia gum and on insects it grabs quickly, sometimes in mid-air.",
        },
        {
          question: "Are galagos monkeys?",
          answer:
            "Not exactly. Galagos are primates, but they belong to the same broad branch as lemurs and lorises (the strepsirrhines) rather than to the monkeys. They share that group's features, such as a strong reliance on smell and a reflective layer in the eyes for night vision.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Galagidae (bushbabies)" },
        { label: "Reference species", value: "Galago moholi (Mohol bushbaby)" },
        { label: "Class", value: "Mammalia (primate)" },
        { label: "Diet", value: "Omnivore (insects & tree gum core)" },
        { label: "Signature traits", value: "Big eyes/ears; powerful leaping" },
        { label: "Activity", value: "Nocturnal" },
        { label: "Name origin", value: "Baby-like wailing calls" },
        { label: "Range", value: "Sub-Saharan Africa" },
      ]}
      relatedLinks={[
        { label: "Slow Loris Profile", href: "/animals/slow-loris", description: "A related nocturnal primate (Asia)" },
        { label: "Lemur Profile", href: "/animals/lemur", description: "Another strepsirrhine primate group" },
        { label: "Tarsier Profile", href: "/animals/tarsier", description: "Another big-eyed nocturnal primate" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African fauna in context" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
