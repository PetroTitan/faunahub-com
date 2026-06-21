import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/curassow";
const TITLE = "Curassow — Profile, Large Crested Forest Birds & Conservation";
const DESC =
  "Explore curassows (family Cracidae): big, crested, turkey-like birds of Neotropical forests — using the great curassow. Spectacular but heavily hunted, several are threatened.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("curassow"),
});

export default function CurassowPage() {
  return (
    <AnimalProfileLayout
      commonName="Curassow"
      scientificName="Crax rubra"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Neotropical", "Forest"]}
      image={getAnimalImage("curassow") ?? undefined}
      galleryImages={getAnimalGalleryImages("curassow")}
      sources={ANIMAL_SOURCES.curassow}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Curassows are large, impressive birds of Central and South American forests,
            members of the family Cracidae (alongside guans and chachalacas). The great
            curassow (<em>Crax rubra</em>), shown here, is among the biggest — a heavy,
            turkey-sized bird, the male glossy black with a curly forward-curling crest and
            a bright yellow knob at the base of the bill, while the female is browner and
            barred. Unlike the more arboreal guans, curassows spend much of their time
            walking on the forest floor.
          </p>
          <p>
            Striking and conspicuous, curassows are also among the first large forest birds
            to vanish from over-hunted areas, making several species a serious conservation
            concern.
          </p>
          <p>
            <strong>Conservation note:</strong> several curassows are threatened — the great
            curassow is assessed as Vulnerable, and some relatives are Endangered or worse,
            chiefly from hunting and habitat loss. Verify each species&apos; status at
            iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Curassows live in tropical and subtropical forests from Mexico through Central
          America and across much of South America, depending on the species. The great
          curassow inhabits humid lowland rainforest, foraging mostly on the ground in
          mature, relatively undisturbed forest and roosting in trees at night.
        </p>
      }
      diet={
        <p>
          Curassows are mainly frugivores, eating fallen fruit from the forest floor along
          with seeds, leaves, buds, and some invertebrates and small animals. By consuming
          fruit and dispersing (or sometimes destroying) seeds, they play a meaningful role
          in the ecology of their forests.
        </p>
      }
      behavior={
        <p>
          Curassows forage on the ground but roost and nest in trees, and they are strong
          walkers though somewhat reluctant fliers. Males of many species give very deep,
          low-pitched booming or humming calls — produced with the help of an elongated
          windpipe — to advertise territory; in the great curassow the male&apos;s curled
          crest and yellow bill-knob feature in display. They are usually wary, especially
          where hunted, slipping away quietly through the undergrowth.
        </p>
      }
      humanInteraction={
        <p>
          Curassows are large, conspicuous, and slow-breeding, which makes them prime targets
          for hunting — and they quickly disappear from forests where hunting is heavy,
          serving as an indicator of forest health. Several species are threatened, with a
          few among the most endangered birds in the Americas. Protecting intact, lightly
          hunted forest is essential. Consult the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "What is a curassow?",
          answer:
            "A curassow is a large, crested, turkey-like bird of Neotropical forests in the family Cracidae, alongside guans and chachalacas. The great curassow male is glossy black with a curly crest and a yellow bill-knob; females are browner. Unlike the more tree-dwelling guans, curassows forage largely on the forest floor.",
        },
        {
          question: "Why do male curassows make such deep sounds?",
          answer:
            "Males of many curassows give very low, booming or humming calls to advertise their territory, produced with the help of an unusually long, coiled windpipe that lets them generate deep, far-carrying notes. These low sounds travel well through dense forest to reach rivals and mates.",
        },
        {
          question: "What do curassows eat?",
          answer:
            "Curassows are mainly fruit-eaters, gathering fallen fruit on the forest floor along with seeds, leaves, buds, and some invertebrates and small animals. Their fruit-eating makes them part of the seed cycle of their forests, sometimes dispersing and sometimes consuming seeds.",
        },
        {
          question: "Why are curassows threatened?",
          answer:
            "They are large, visible, and slow to reproduce, so they are heavily hunted and cannot quickly replace their numbers — meaning they vanish early from over-hunted forests. Combined with deforestation, this has left several curassows threatened, some critically. Their presence is a sign of a healthy, lightly hunted forest. Status should be checked against the IUCN Red List.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Crax rubra (great curassow)" },
        { label: "Class", value: "Aves (family Cracidae)" },
        { label: "Relatives", value: "Guans & chachalacas" },
        { label: "Diet", value: "Mainly fruit; also seeds & invertebrates" },
        { label: "Male traits", value: "Curly crest; yellow bill-knob; deep calls" },
        { label: "Lifestyle", value: "Forages on the ground; roosts in trees" },
        { label: "Range", value: "Mexico to South America" },
        { label: "IUCN Status", value: "Several threatened (verify by species)" },
      ]}
      relatedLinks={[
        { label: "Guan Profile", href: "/animals/guan", description: "A more arboreal cracid relative" },
        { label: "Trumpeter Profile", href: "/animals/trumpeter", description: "Another large Neotropical forest bird" },
        { label: "Peacock Profile", href: "/animals/peacock", description: "Another large, showy fowl-like bird" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
