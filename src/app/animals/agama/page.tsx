import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/agama";
const TITLE = "Agama — Profile, Colour-Changing Rock Lizards & Behavior";
const DESC =
  "Explore agamas (genus Agama): bold African rock lizards in which dominant males flush brilliant red-and-blue, doing 'push-ups' to display — using the red-headed rock agama.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("agama"),
});

export default function AgamaPage() {
  return (
    <AnimalProfileLayout
      commonName="Agama"
      scientificName="Agama agama"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Reptile", "Lizard", "Africa"]}
      image={getAnimalImage("agama") ?? undefined}
      galleryImages={getAnimalGalleryImages("agama")}
      sources={ANIMAL_SOURCES.agama}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Agamas (genus <em>Agama</em>) are common, conspicuous lizards of Africa, often
            seen basking on rocks, walls, and buildings in the open sun. The red-headed rock
            agama (<em>Agama agama</em>), shown here, is a famous example: a dominant breeding
            male sports a brilliant orange or red head and a deep blue body, while females and
            non-dominant males are a duller brown. Remarkably, the male can switch his bright
            colours on and off depending on his mood, temperature, and social situation.
          </p>
          <p>
            Agamas are social, day-active lizards, and males constantly signal their status
            with vigorous head-bobbing &ldquo;push-ups&rdquo; from prominent perches.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;agama&rdquo; covers many species; details here use
            the red-headed rock agama as a reference. Treat general statements as approximate
            and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Agamas live across much of sub-Saharan Africa in savanna, scrub, rocky areas, and —
          very often — around human settlements, where walls, roofs, and rubble make ideal
          basking and lookout spots. The red-headed rock agama in particular thrives in towns
          and villages, making it one of the most frequently seen African lizards.
        </p>
      }
      diet={
        <p>
          Agamas are mainly insectivores, eating ants, beetles, grasshoppers, termites, and
          other small invertebrates, and larger individuals may take small vertebrates and
          some plant matter such as flowers and fruit. They often sit and watch from a perch,
          then dash out to snap up passing insects — and around people they readily eat insects
          attracted to buildings.
        </p>
      }
      behavior={
        <p>
          Agama social life revolves around colour and display. A dominant male holds a
          territory with several females and shows off his vivid red-and-blue coloration,
          performing rapid head-bobbing and body &ldquo;push-ups&rdquo; to assert dominance
          and court females; if he loses a fight or feels threatened, his bright colours can
          quickly fade to drab brown. Agamas bask to warm up and are most colourful and active
          on hot, sunny days. They are agile and quick, darting into rock crevices to escape
          danger.
        </p>
      }
      humanInteraction={
        <p>
          Agamas live closely and harmlessly alongside people across Africa, often
          brightening up walls and courtyards, and they help control insects around homes.
          They are common and adaptable, not generally of conservation concern, and are a
          familiar, welcome part of the African scene. Consult authoritative sources for
          species-specific details.
        </p>
      }
      faqs={[
        {
          question: "Why is the male agama so brightly coloured?",
          answer:
            "The dominant male's brilliant orange-red head and blue body are signals of status, used to defend his territory and attract females. Colour intensity reflects his mood, temperature, and social standing — a confident, dominant male in the hot sun is brightest, while a stressed or subordinate one turns drab brown.",
        },
        {
          question: "Can agamas change colour?",
          answer:
            "Yes, to a degree. Dominant male red-headed rock agamas can switch their vivid red-and-blue coloration on and off depending on temperature, time of day, and social situation — flushing bright when displaying or dominant, and fading to brown when cool, stressed, or defeated. Females and non-dominant males stay mostly brown.",
        },
        {
          question: "What do agamas eat?",
          answer:
            "Mainly insects — ants, beetles, grasshoppers, termites, and other small invertebrates — with larger agamas sometimes taking small vertebrates and a little plant material. They often hunt by watching from a perch and dashing out to grab prey, and around buildings they feast on insects drawn to lights and walls.",
        },
        {
          question: "Why do agamas do 'push-ups'?",
          answer:
            "The rapid head-bobbing and body push-up movements are territorial and courtship displays. A male performs them from a prominent perch to advertise his presence, warn off rival males, and signal to females. Combined with his bright colours, the push-ups make him highly conspicuous to other agamas.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Agama agama (red-headed rock agama)" },
        { label: "Class", value: "Reptilia (lizard)" },
        { label: "Signature trait", value: "Dominant males flush red-and-blue" },
        { label: "Display", value: "Head-bobbing 'push-ups'" },
        { label: "Diet", value: "Mainly insectivore" },
        { label: "Habitat", value: "African savanna, rocks & towns" },
        { label: "Range", value: "Sub-Saharan Africa" },
        { label: "Status", value: "Common (verify by species)" },
      ]}
      relatedLinks={[
        { label: "Chameleon Profile", href: "/animals/chameleon", description: "Another colour-changing lizard" },
        { label: "Anole Profile", href: "/animals/anole", description: "A displaying lizard with a dewlap" },
        { label: "Gecko Profile", href: "/animals/gecko", description: "Another lizard that lives near people" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
