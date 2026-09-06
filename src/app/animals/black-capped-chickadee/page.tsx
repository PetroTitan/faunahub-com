import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/black-capped-chickadee";
const TITLE = "Black-Capped Chickadee — Profile, Alarm Calls & Winter Survival";
const DESC =
  "Explore the black-capped chickadee (Poecile atricapillus): a songbird whose alarm call encodes threat level and that survives winter nights in torpor.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("black-capped-chickadee"),
});

export default function BlackCappedChickadeePage() {
  return (
    <AnimalProfileLayout
      commonName="Black-Capped Chickadee"
      scientificName="Poecile atricapillus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Songbird","North America"]}
      image={getAnimalImage("black-capped-chickadee") ?? undefined}
      galleryImages={getAnimalGalleryImages("black-capped-chickadee")}
      sources={ANIMAL_SOURCES["black-capped-chickadee"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The black-capped chickadee (<em>Poecile atricapillus</em>) is a small, round, active songbird of North American woodlands, instantly recognisable from its black cap and bib, white cheeks and soft grey back. It is one of the most familiar birds at winter feeders across Canada and the northern United States.
        </p>
        <p>
          Chickadees are members of the tit family. They are famous for being tame around people, for hanging acrobatically from twigs while feeding, and for a call that carries a surprising amount of information.
        </p>
        <p>
          The <strong>chick-a-dee-dee</strong> call is one of the best-studied vocalisations of any bird. The number of &apos;dee&apos; notes at the end tends to increase with the level of threat, and other species listen in on it.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Black-capped chickadees live in deciduous and mixed woodland, forest edges, willow thickets, parks and wooded gardens across Canada and the northern United States. They are year-round residents rather than migrants, and they nest in cavities — excavating their own in soft rotten wood, or using old woodpecker holes and nest boxes.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Chickadees are omnivores whose diet shifts with the season: insects, spiders and other invertebrates dominate in summer, especially caterpillars fed to nestlings, while seeds, berries and fat become far more important in winter. They cache food extensively, hiding individual seeds and insects and recovering them later.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Chickadees form winter flocks with a clear dominance structure, often joined by other small woodland birds that follow their alarm calls. Two behaviours stand out. First, food caching backed by strong spatial memory — the hippocampus of food-caching chickadees changes seasonally. Second, <strong>nightly torpor</strong>: on cold winter nights a chickadee lowers its body temperature substantially to save energy, a critical adaptation for a bird this small at those latitudes.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Chickadees are among the most-watched birds in North America, readily using feeders and nest boxes and often becoming confident enough to take food from a hand. That familiarity has made them a valuable research subject, and much of what is known about avian vocal complexity, food caching and winter energy management comes from work on this species. They remain common and widespread; verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "What does the chick-a-dee call mean?",
          answer:
            "It is an alarm and contact call that carries information about threat. Broadly, the more 'dee' notes a chickadee adds to the end, the greater the danger it is signalling — with small, agile predators typically provoking more notes than large ones. Other bird species listen to these calls and respond to them.",
        },
        {
          question: "How do chickadees survive freezing nights?",
          answer:
            "Partly through nightly torpor. On cold winter nights a chickadee lowers its body temperature well below its daytime level, which greatly reduces the energy it burns. Combined with dense winter plumage, sheltered roost cavities, and food cached earlier, this is what lets so small a bird survive northern winters.",
        },
        {
          question: "Do chickadees store food?",
          answer:
            "Yes, extensively. They hide individual seeds and insects in bark crevices, moss and other spots, and recover them later using spatial memory. The brain region involved in that memory changes seasonally in food-caching chickadees, which has made them an important species for memory research.",
        },
        {
          question: "What do chickadees eat?",
          answer:
            "Insects and spiders in summer — especially caterpillars, which are fed to nestlings — and seeds, berries and fat in winter. This seasonal switch, plus their willingness to use feeders, is why they are such a familiar winter garden bird.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Poecile atricapillus" },
        { label: "Family", value: "Paridae (tits and chickadees)" },
        { label: "Class", value: "Aves" },
        { label: "Identification", value: "Black cap and bib, white cheeks" },
        { label: "Alarm call", value: "'Dee' notes scale with threat level" },
        { label: "Winter survival", value: "Nightly torpor" },
        { label: "Food caching", value: "Extensive, with strong spatial memory" },
        { label: "Residency", value: "Year-round resident, not migratory" },
      ]}
      relatedLinks={[
        { label: "Woodpecker Profile", href: "/animals/woodpecker" },
        { label: "Robin Profile", href: "/animals/robin" },
        { label: "Sparrow Profile", href: "/animals/sparrow" },
        { label: "Hibernation & Torpor", href: "/animal-senses-and-adaptations/hibernation-and-torpor" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
