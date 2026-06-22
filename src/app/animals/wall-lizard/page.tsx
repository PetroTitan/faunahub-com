import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/wall-lizard";
const TITLE = "Wall Lizard — Profile, the Agile Sun-Basker of Walls and Rocks";
const DESC =
  "Explore wall lizards (genus Podarcis): small, quick, sun-loving European lizards that scamper over walls, rocks, and ruins — adaptable enough to thrive right alongside people.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("wall-lizard"),
});

export default function WallLizardPage() {
  return (
    <AnimalProfileLayout
      commonName="Wall Lizard"
      scientificName="genus Podarcis"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Lizard", "Europe"]}
      image={getAnimalImage("wall-lizard") ?? undefined}
      galleryImages={getAnimalGalleryImages("wall-lizard")}
      sources={ANIMAL_SOURCES["wall-lizard"]}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Wall lizards (genus <em>Podarcis</em>) are small, slim, agile lizards of Europe, North
            Africa, and the Mediterranean, named for their fondness for basking and scampering on
            walls, rocks, and stony ground. The common wall lizard (<em>Podarcis muralis</em>),
            shown here, is one of the most familiar, often seen darting over old walls, ruins,
            railway embankments, and sunny rockeries. Usually brown or grey with mottled or striped
            markings, wall lizards are quick, alert, and superbly adapted to clambering over vertical
            surfaces.
          </p>
          <p>
            They are great sun-lovers, spending much of the day basking to warm up, and they are so
            adaptable that several species thrive in towns and cities — and a few have established
            themselves well outside their native range.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;wall lizard&rdquo; covers many Podarcis species; details
            here use the common wall lizard as a reference. Treat general statements as approximate
            and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Wall lizards live across Europe (especially southern and central Europe), the
          Mediterranean, and North Africa, in rocky and stony habitats — cliffs, scree, dry-stone
          walls, ruins, vineyards, gardens, and railway and roadside banks. They favour warm, sunny,
          well-drained spots with crevices for shelter, and they readily live in towns and around
          human structures. Some, like the common wall lizard, have been introduced and become
          established in parts of North America and northern Europe.
        </p>
      }
      diet={
        <p>
          Wall lizards are insectivores, eating insects, spiders, and other small invertebrates that
          they catch by actively foraging over walls, rocks, and ground vegetation, and they also take
          a little soft fruit at times. Quick and visually sharp, they dash out to seize prey and
          retreat to a basking spot or crevice.
        </p>
      }
      behavior={
        <p>
          Wall lizards are day-active and heat-loving, basking in the sun to raise their body
          temperature before foraging and quickly diving into a crack or under a stone at any threat.
          They are remarkably nimble climbers, running up vertical walls and across rocks with ease.
          Males are territorial and, in the breeding season, often develop brighter colours and
          perform displays, and many wall lizards show striking colour variation between populations.
          Like most lizards they can shed the tail to escape a predator, later regrowing a shorter
          one. They shelter and hibernate in crevices through the cold months.
        </p>
      }
      humanInteraction={
        <p>
          Wall lizards are harmless, engaging little animals that live happily alongside people,
          brightening up gardens, walls, and ruins, and helping control insects. Many species are
          common and adaptable, though some island and restricted-range species are of conservation
          concern, and introduced wall lizards can sometimes compete with native reptiles where they
          have been released. Providing sunny rock piles and walls helps them. Consult authoritative
          sources for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why are they called wall lizards?",
          answer:
            "Because they're so often seen basking and scampering on walls, as well as rocks, ruins, and stony banks. Their agility on vertical surfaces and love of warm, sunny stonework make old walls a classic place to spot them, which is exactly how the group got its name.",
        },
        {
          question: "Where do wall lizards live?",
          answer:
            "Mainly in Europe, the Mediterranean, and North Africa, favouring warm, sunny, rocky places — cliffs, scree, dry-stone walls, ruins, vineyards, gardens, and railway banks — with crevices to shelter in. They thrive around human structures, and some, like the common wall lizard, have been introduced and now live in parts of North America and beyond.",
        },
        {
          question: "What do wall lizards eat?",
          answer:
            "Mostly insects, spiders, and other small invertebrates, which they catch by darting after them over walls, rocks, and low vegetation; they'll also nibble a little soft fruit occasionally. They're quick, sharp-eyed foragers that dash out to grab prey and retreat to a safe basking spot.",
        },
        {
          question: "Are wall lizards harmful?",
          answer:
            "Not at all — they're completely harmless to people and are actually helpful, eating insects around gardens and walls. They're non-venomous and shy, quick to flee into a crevice rather than confront anything. The main caution is ecological: introduced wall lizards can sometimes compete with native reptiles where they've been released outside their natural range.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Podarcis (wall lizards)" },
        { label: "Reference species", value: "Podarcis muralis (common wall lizard)" },
        { label: "Class", value: "Reptilia (lizard)" },
        { label: "Loves", value: "Basking on walls, rocks & ruins" },
        { label: "Diet", value: "Insectivore (insects, spiders)" },
        { label: "Traits", value: "Agile climber; sheds tail; sun-lover" },
        { label: "Range", value: "Europe, Mediterranean & N. Africa" },
        { label: "Note", value: "Some introduced beyond native range" },
      ]}
      relatedLinks={[
        { label: "Gecko Profile", href: "/animals/gecko", description: "Another wall-climbing lizard near people" },
        { label: "Agama Profile", href: "/animals/agama", description: "Another rock- and wall-basking lizard" },
        { label: "Alligator Lizard Profile", href: "/animals/alligator-lizard", description: "Another small ground lizard" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "European fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
