import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/bellbird";
const TITLE = "Bellbird — Profile, the Wattled Bird with One of the Loudest Calls";
const DESC =
  "Explore bellbirds (genus Procnias): Neotropical cotinga relatives whose males produce some of the loudest bird calls on Earth — clanging, bell-like notes — and sport bizarre fleshy wattles.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("bellbird"),
});

export default function BellbirdPage() {
  return (
    <AnimalProfileLayout
      commonName="Bellbird"
      scientificName="genus Procnias"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Neotropical", "Record-holder"]}
      image={getAnimalImage("bellbird") ?? undefined}
      galleryImages={getAnimalGalleryImages("bellbird")}
      sources={ANIMAL_SOURCES.bellbird}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Bellbirds (genus <em>Procnias</em>) are remarkable birds of the American tropics,
            members of the cotinga family famous above all for their voices: the males produce some
            of the loudest calls of any bird in the world — ringing, clanging, bell-like or
            metallic notes that carry far through the forest. The three-wattled bellbird
            (<em>Procnias tricarunculatus</em>), shown here, adds a bizarre touch, the male
            sporting three long, worm-like fleshy wattles dangling from the base of his bill.
          </p>
          <p>
            Males are usually boldly coloured or patterned and call from high, exposed perches to
            attract females, while females are drab, greenish, and well camouflaged — a classic
            pattern in this display-driven family.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;bellbird&rdquo; here refers to the Neotropical Procnias
            bellbirds; details describe the group broadly. (Some unrelated birds elsewhere also
            share the name.) Treat general statements as approximate and verify against authoritative
            sources.
          </p>
        </>
      }
      habitat={
        <p>
          Procnias bellbirds live in the forests of Central and South America, many in humid
          montane and cloud forest, others in lowland and foothill rainforest. Several undertake
          seasonal movements up and down mountains or between regions, following the fruiting of
          trees, and all depend on healthy, fruit-rich tropical forest.
        </p>
      }
      diet={
        <p>
          Bellbirds are primarily frugivores, eating large amounts of fruit, which they often
          pluck in flight or while perched and swallow whole, later dispersing the seeds. This
          fruit-rich diet ties their movements and breeding to the fruiting cycles of forest trees,
          and makes bellbirds important seed-dispersers that help regenerate their forests.
        </p>
      }
      behavior={
        <p>
          The heart of bellbird life is the male&apos;s extraordinarily loud call, used to claim a
          calling perch and attract females; the sound can be almost deafening at close range and
          carries over long distances through the forest. Males display at traditional perches —
          sometimes near other males — calling persistently and, in the three-wattled bellbird,
          showing off their dangling wattles. After mating, the female alone builds the nest and
          raises the young, while the colourful, noisy males play no part in parenting. Several
          bellbirds migrate altitudinally, tracking ripening fruit through the year.
        </p>
      }
      humanInteraction={
        <p>
          Bellbirds are iconic forest birds, prized by birdwatchers for their astonishing calls and
          strange appearance, and valued ecologically as seed-dispersers. Because they depend on
          large areas of fruiting forest and often move seasonally across them, deforestation and
          fragmentation are serious threats, and some species — including the three-wattled bellbird
          — are of conservation concern. Protecting connected forest across elevations is key.
          Consult the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "How loud is a bellbird's call?",
          answer:
            "Extremely loud — bellbirds produce some of the loudest calls of any bird on Earth. The male's ringing, clanging, bell-like or metallic notes can be almost painful to hear up close and carry a long way through the forest. The volume helps a male advertise his perch and attract females across the dense, noisy tropical forest.",
        },
        {
          question: "What are the three-wattled bellbird's wattles?",
          answer:
            "They're three long, slender, worm-like flaps of fleshy skin that hang from the base of the male's bill. They're used in display alongside his loud calls to impress females. Only the male has them; the drab green female does not. They give the three-wattled bellbird one of the most distinctive looks of any bird.",
        },
        {
          question: "Are bellbirds related to other famous singing birds?",
          answer:
            "The Neotropical bellbirds belong to the cotinga family, which also includes other birds known for extraordinary sounds and displays, such as the screaming piha. So their incredible voices fit a family theme of loud, display-driven males. (Note that a few unrelated birds in other parts of the world are also called 'bellbirds.')",
        },
        {
          question: "What do bellbirds eat?",
          answer:
            "Mostly fruit. Bellbirds are frugivores that swallow fruit whole and later disperse the seeds, which makes them important for forest regeneration. Their reliance on fruit means their movements and breeding follow the fruiting cycles of forest trees, and several species migrate up and down mountains to track ripening fruit.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Procnias (cotinga family)" },
        { label: "Reference species", value: "Procnias tricarunculatus (three-wattled)" },
        { label: "Class", value: "Aves (perching birds)" },
        { label: "Claim to fame", value: "Among the loudest bird calls on Earth" },
        { label: "Male oddity", value: "Fleshy dangling wattles (three-wattled sp.)" },
        { label: "Diet", value: "Mostly fruit (seed-disperser)" },
        { label: "Breeding", value: "Males display & call; females nest alone" },
        { label: "Range", value: "Central & South American forests" },
      ]}
      relatedLinks={[
        { label: "Cotinga Profile", href: "/animals/cotinga", description: "Its colourful family" },
        { label: "Cock-of-the-rock Profile", href: "/animals/cock-of-the-rock", description: "Another striking cotinga relative" },
        { label: "Manakin Profile", href: "/animals/manakin", description: "Other displaying Neotropical birds" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
