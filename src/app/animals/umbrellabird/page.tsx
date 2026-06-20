import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/umbrellabird";
const TITLE = "Umbrellabird — Profile, Crest, Wattle & Booming Calls";
const DESC =
  "Explore umbrellabirds (genus Cephalopterus): large black Neotropical cotingas with an umbrella-like crest and a long throat wattle, whose males boom to attract mates.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("umbrellabird"),
});

export default function UmbrellabirdPage() {
  return (
    <AnimalProfileLayout
      commonName="Umbrellabird"
      scientificName="Cephalopterus ornatus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Neotropical", "Cotinga"]}
      image={getAnimalImage("umbrellabird") ?? undefined}
      galleryImages={getAnimalGalleryImages("umbrellabird")}
      sources={ANIMAL_SOURCES.umbrellabird}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Umbrellabirds (genus <em>Cephalopterus</em>) are large, all-black birds of
            Central and South American forests, among the biggest members of the cotinga
            family. They are named for the male&apos;s remarkable crest, a forward-curving
            crown of feathers that can spread over the head and bill like an umbrella. The
            Amazonian umbrellabird (<em>Cephalopterus ornatus</em>), shown here, also sports
            a long, feathered wattle that hangs from the throat.
          </p>
          <p>
            Both the crest and the wattle play a part in the male&apos;s courtship, along
            with deep, booming calls that carry through the forest.
          </p>
          <p>
            <strong>Note:</strong> there are three umbrellabird species; details here use the
            Amazonian umbrellabird as a reference. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Umbrellabirds live in humid tropical forests of Central and South America,
          depending on the species — the Amazonian umbrellabird ranges across forests of the
          Amazon basin and nearby regions, often near rivers and in tall, mature forest. They
          favour the canopy and forest edges and may move seasonally between elevations.
        </p>
      }
      diet={
        <p>
          Umbrellabirds are mainly frugivores, eating large fruits — which they can swallow
          whole thanks to a wide gape — and they help disperse the seeds of many forest
          trees. They also take insects and other small animals, including the occasional
          small vertebrate, especially when feeding young. Their fruit-eating makes them
          important seed dispersers in their forests.
        </p>
      }
      behavior={
        <p>
          During courtship, the male umbrellabird raises and spreads his umbrella-like crest
          and dangles or inflates his long throat wattle while giving deep, resonant, booming
          calls — among the lowest-pitched sounds of any forest bird — to attract females and
          deter rivals. Some umbrellabirds display at loose leks. They are otherwise fairly
          quiet, canopy-dwelling birds that can be hard to spot despite their size, and the
          female alone builds the nest and raises the chick.
        </p>
      }
      humanInteraction={
        <p>
          Umbrellabirds are spectacular but elusive, prized sightings for birdwatchers in
          Neotropical forests. They depend on large areas of intact forest, so deforestation
          and fragmentation are the main threats; the Amazonian umbrellabird remains
          relatively widespread, while some relatives (such as the bare-necked umbrellabird)
          are of greater conservation concern. Consult authoritative sources for
          species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why is it called an umbrellabird?",
          answer:
            "Because of the male's crest. Umbrellabirds have a crown of forward-curving feathers that the male can raise and spread out over his head and bill, forming a shape like an open umbrella. This distinctive crest is the bird's most recognisable feature.",
        },
        {
          question: "What is the long wattle on the throat for?",
          answer:
            "The Amazonian umbrellabird male has a long, feather-covered wattle hanging from his throat that he uses in display — dangling or inflating it during courtship, often alongside his booming calls and raised crest. It helps him attract females and signal to rival males.",
        },
        {
          question: "Why do umbrellabirds make such deep booming sounds?",
          answer:
            "The male's call is a deep, resonant boom — among the lowest-pitched of any bird — produced with the help of his wattle and an expandable throat. Low sounds travel well through dense forest, so the booming call carries far to reach females and warn off competitors during the breeding season.",
        },
        {
          question: "What do umbrellabirds eat?",
          answer:
            "They are mainly fruit-eaters, swallowing large fruits whole with their wide gape and dispersing the seeds, which benefits the forest. They also eat insects and other small animals, especially when raising young, making them both impressive and ecologically valuable birds.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Cephalopterus ornatus (Amazonian umbrellabird)" },
        { label: "Class", value: "Aves (a cotinga)" },
        { label: "Diet", value: "Mainly fruit (seed disperser); some animals" },
        { label: "Signature traits", value: "Umbrella crest; throat wattle" },
        { label: "Call", value: "Deep, far-carrying boom" },
        { label: "Habitat", value: "Humid Neotropical forest" },
        { label: "Range", value: "Central & South America" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Cock-of-the-Rock Profile", href: "/animals/cock-of-the-rock", description: "Another spectacular cotinga relative" },
        { label: "Toucan Profile", href: "/animals/toucan", description: "Another large fruit-eating forest bird" },
        { label: "Hoatzin Profile", href: "/animals/hoatzin", description: "Another unusual Amazonian bird" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
