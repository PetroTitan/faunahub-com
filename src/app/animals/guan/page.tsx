import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/guan";
const TITLE = "Guan — Profile, Tree-Dwelling Game Birds & Diet";
const DESC =
  "Explore guans (family Cracidae): large, long-tailed Neotropical forest birds related to chachalacas and curassows — arboreal fruit-eaters and important seed dispersers.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("guan"),
});

export default function GuanPage() {
  return (
    <AnimalProfileLayout
      commonName="Guan"
      scientificName="Penelope purpurascens"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Neotropical", "Forest"]}
      image={getAnimalImage("guan") ?? undefined}
      galleryImages={getAnimalGalleryImages("guan")}
      sources={ANIMAL_SOURCES.guan}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Guans are large, long-tailed birds of the Central and South American forests,
            members of the family Cracidae, which also includes the chachalacas and
            curassows. The crested guan (<em>Penelope purpurascens</em>), shown here, is a
            typical species — a dark, slender, turkey-like bird with a bushy crest, a bare
            red throat wattle (dewlap), and a long tail, usually seen high in the trees. Guans
            are mostly arboreal, clambering and walking along branches through the canopy.
          </p>
          <p>
            As large fruit-eaters that move through the forest, guans are valuable seed
            dispersers — and, as &ldquo;cracid&rdquo; game birds, they are also among the
            first species to disappear where forests are heavily hunted.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;guan&rdquo; covers many species; details here use
            the crested guan as a reference. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Guans live in tropical and subtropical forests from Mexico through Central America
          and across much of South America, depending on the species. The crested guan
          inhabits humid lowland and foothill forest, keeping mainly to the canopy and middle
          levels of mature, relatively undisturbed forest, where it finds fruit and cover.
        </p>
      }
      diet={
        <p>
          Guans are mainly frugivores, eating a wide variety of fruits, along with leaves,
          buds, flowers, and seeds, and some invertebrates. By consuming fruit in the canopy
          and dispersing the seeds across the forest, they play an important role in
          regenerating the trees they depend on.
        </p>
      }
      behavior={
        <p>
          Guans are mostly arboreal, walking and clambering along branches and flying between
          trees with noisy wingbeats; they descend to the ground less often. They are usually
          seen alone, in pairs, or in small groups, and are often detected by loud calls,
          including, in some species, a far-carrying wing-rattling or drumming display given
          at dawn. Guans tend to be wary, especially where hunted, and slip quietly away
          through the canopy when disturbed.
        </p>
      }
      humanInteraction={
        <p>
          Guans are widely hunted for food across their range, and because they are large,
          conspicuous, and slow-breeding, they are quickly reduced or wiped out in
          over-hunted forests — making them useful indicators of forest health. Several
          cracids are threatened, and protecting intact, lightly hunted forest is key. The
          crested guan remains fairly widespread but is sensitive to hunting and habitat loss.
          Consult the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "What kind of bird is a guan?",
          answer:
            "A guan is a large, long-tailed Neotropical bird in the family Cracidae, alongside chachalacas and curassows. Turkey-like but more slender and arboreal, guans live mainly in the trees of Central and South American forests and are sometimes grouped loosely as 'cracid' game birds.",
        },
        {
          question: "What do guans eat?",
          answer:
            "Guans are mainly fruit-eaters, also taking leaves, buds, flowers, seeds, and some invertebrates. As big canopy frugivores that move around the forest, they disperse many seeds and help the forest regenerate, making them ecologically important.",
        },
        {
          question: "Why do guans disappear from hunted forests?",
          answer:
            "Guans are large, visible, and relatively slow to reproduce, so they are heavily targeted by hunters and cannot easily replace their numbers. As a result, they are often among the first birds to vanish where forests are intensively hunted — which is why their presence is a useful sign of a healthy, lightly disturbed forest.",
        },
        {
          question: "Are guans related to turkeys and chickens?",
          answer:
            "They belong to the same broad group of fowl-like birds (Galliformes) as turkeys, chickens, and pheasants, but guans are in their own family, Cracidae. They are more arboreal and tropical than typical gamefowl, spending much of their lives up in rainforest trees.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Penelope purpurascens (crested guan)" },
        { label: "Class", value: "Aves (family Cracidae)" },
        { label: "Relatives", value: "Chachalacas & curassows" },
        { label: "Diet", value: "Mainly fruit (key seed disperser)" },
        { label: "Lifestyle", value: "Mostly arboreal (canopy)" },
        { label: "Sensitivity", value: "Quickly lost to over-hunting" },
        { label: "Range", value: "Mexico to South America" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Trumpeter Profile", href: "/animals/trumpeter", description: "Another large Neotropical forest bird" },
        { label: "Peacock Profile", href: "/animals/peacock", description: "Another large fowl-like bird" },
        { label: "Toucan Profile", href: "/animals/toucan", description: "Another canopy fruit-eater" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
