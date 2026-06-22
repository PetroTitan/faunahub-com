import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/antpitta";
const TITLE = "Antpitta — Profile, the Round, Long-Legged Birds of the Forest Floor";
const DESC =
  "Explore antpittas (family Grallariidae): plump, almost tailless, long-legged Neotropical birds that hop along the forest floor — elusive 'voices in the undergrowth' beloved by birders.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("antpitta"),
});

export default function AntpittaPage() {
  return (
    <AnimalProfileLayout
      commonName="Antpitta"
      scientificName="family Grallariidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Neotropical", "Forest floor"]}
      image={getAnimalImage("antpitta") ?? undefined}
      galleryImages={getAnimalGalleryImages("antpitta")}
      sources={ANIMAL_SOURCES.antpitta}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Antpittas (family Grallariidae) are a group of rotund, upright, long-legged birds of
            the forests of Central and South America, with such short tails that they look almost
            tailless — giving them an endearing, egg-on-stilts appearance. They range from tiny
            species to the aptly named giant antpitta (<em>Grallaria gigantea</em>). Most are
            cryptically coloured in browns, greys, and rufous, perfectly suited to a life spent
            largely on or near the dim forest floor.
          </p>
          <p>
            Antpittas are famously elusive — often heard far more than seen — and are something of a
            holy grail for birdwatchers, who may spend years catching a glimpse of these shy
            &ldquo;voices in the undergrowth.&rdquo;
          </p>
          <p>
            <strong>Note:</strong> &ldquo;antpitta&rdquo; covers a large family; details here
            describe the group broadly. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Antpittas live in the forests of the Neotropics — from Central America through the Andes
          and Amazonia and into South America — many in humid montane and cloud forest, others in
          lowland rainforest. They keep to dense undergrowth and the forest floor, where their
          camouflage and shy habits make them hard to spot. Some species have small ranges
          restricted to particular mountains.
        </p>
      }
      diet={
        <p>
          Antpittas feed mainly on invertebrates — earthworms, insects, and other small creatures —
          which they hunt by hopping over the leaf litter and probing the ground. Despite the name,
          they do not specialise in following army ants the way some related birds do; the name
          comes from their resemblance to true pittas and a loose association with the antbird
          group. At some reserves, antpittas have famously been coaxed into taking earthworms at
          feeding sites, giving birders rare close views.
        </p>
      }
      behavior={
        <p>
          Antpittas are shy, ground-loving birds that move with a distinctive series of hops and
          quick runs over the forest floor on their long legs, often pausing upright to look around,
          then bobbing on. Their short tails and round bodies suit threading through dense
          undergrowth rather than flying far. They are usually detected by their voices — clear
          whistles, trills, or hooting series that carry through the forest — long before they are
          seen. Many are thought to be territorial and to nest in cup nests in low vegetation. Their
          elusiveness is legendary, and some species were poorly known to science until recently.
        </p>
      }
      humanInteraction={
        <p>
          Antpittas have become star attractions of Neotropical ecotourism, especially where
          reserves have habituated certain birds to feeding stations, allowing visitors to see these
          normally hidden species. Many antpittas depend on intact forest, so deforestation and
          habitat fragmentation are the main threats, and several restricted-range or montane
          species are of conservation concern, while others remain reasonably widespread. Protecting
          cloud forest is key. Consult the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why do antpittas look almost tailless?",
          answer:
            "Antpittas have very short tails and plump, upright bodies, which together give them a rounded, almost tailless 'egg on long legs' look. This body plan suits their life on the forest floor, where they hop and run through dense undergrowth rather than flying long distances, so a long tail would offer little advantage.",
        },
        {
          question: "Do antpittas follow army ants?",
          answer:
            "Not really — despite the name, most antpittas don't specialise in following army-ant swarms the way some true antbirds do. The 'ant' in their name reflects their loose relationship to that group of birds and a resemblance to pittas. Antpittas mainly hunt earthworms and other invertebrates on the forest floor on their own.",
        },
        {
          question: "Why are antpittas so hard to see?",
          answer:
            "They're shy, cryptically coloured, and live in dense undergrowth on the dim forest floor, so they're usually heard — through clear whistles or trills — far more often than seen. This elusiveness makes them a prized challenge for birdwatchers, some of whom travel great distances just for a glimpse. At certain reserves, worm-feeding stations now offer rare close views.",
        },
        {
          question: "What do antpittas eat?",
          answer:
            "Mainly invertebrates such as earthworms, insects, and other small creatures, which they find by hopping over the leaf litter and probing the ground. Their ground-foraging, worm-hunting habits are exactly why some reserves can attract them to feeding sites with earthworms.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Grallariidae (antpittas)" },
        { label: "Reference genus", value: "Grallaria" },
        { label: "Class", value: "Aves (perching birds)" },
        { label: "Look", value: "Round, upright, long-legged, near-tailless" },
        { label: "Habits", value: "Shy; hops on the forest floor" },
        { label: "Diet", value: "Invertebrates (worms, insects)" },
        { label: "Detected by", value: "Voice (often heard, rarely seen)" },
        { label: "Range", value: "Neotropical forests (esp. Andes)" },
      ]}
      relatedLinks={[
        { label: "Cock-of-the-rock Profile", href: "/animals/cock-of-the-rock", description: "Another Andean forest bird" },
        { label: "Cotinga Profile", href: "/animals/cotinga", description: "Other Neotropical forest birds" },
        { label: "Manakin Profile", href: "/animals/manakin", description: "Other understorey forest birds" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Neotropical fauna in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
