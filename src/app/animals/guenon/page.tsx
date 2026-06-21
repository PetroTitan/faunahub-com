import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/guenon";
const TITLE = "Guenon — Profile, Colourful African Monkeys & Behavior";
const DESC =
  "Explore guenons (genus Cercopithecus): a diverse group of strikingly marked African forest monkeys — using De Brazza's monkey, famous for its white beard and orange brow.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("guenon"),
});

export default function GuenonPage() {
  return (
    <AnimalProfileLayout
      commonName="Guenon"
      scientificName="Cercopithecus neglectus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "Africa"]}
      image={getAnimalImage("guenon") ?? undefined}
      galleryImages={getAnimalGalleryImages("guenon")}
      sources={ANIMAL_SOURCES.guenon}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Guenons (genus <em>Cercopithecus</em>) are a large and varied group of African
            monkeys, many of them among the most colourful and ornately marked of all
            primates. They are slim, long-tailed, agile monkeys of forests and woodlands,
            and different species sport bold facial patterns, beards, brow bands, nose
            spots, and ear tufts. De Brazza&apos;s monkey (<em>Cercopithecus neglectus</em>),
            shown here, is a striking example, with a white beard, an orange crescent across
            the brow, and a grizzled grey body.
          </p>
          <p>
            These distinctive face patterns are thought to help guenons recognise their own
            species — important because several different guenons often share the same
            forest.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;guenon&rdquo; covers many species; details here use
            De Brazza&apos;s monkey as a reference. Treat general statements as approximate
            and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Guenons live across sub-Saharan Africa, mostly in forests — rainforest, swamp
          forest, gallery forest, and montane forest — though some species also use
          woodland and savanna edges. De Brazza&apos;s monkey favours swampy and riverside
          forest in central Africa, keeping close to water and dense cover.
        </p>
      }
      diet={
        <p>
          Most guenons are omnivores that lean heavily on fruit, supplemented by leaves,
          flowers, seeds, gum, insects, and other small animals; the balance varies by
          species. They often carry food in cheek pouches while foraging. De Brazza&apos;s
          monkey eats mainly fruit and seeds, along with leaves and invertebrates.
        </p>
      }
      behavior={
        <p>
          Guenons are typically social, living in groups usually led by a single adult male
          with several females and young, and they are agile, mostly tree-dwelling, and
          active by day. Many species form mixed-species troops, foraging alongside other
          guenons (and sometimes other monkeys), which improves predator detection — and
          their bold, species-specific face markings help individuals tell the species
          apart. De Brazza&apos;s monkey is quieter and more secretive than many guenons,
          relying on camouflage and stillness when threatened.
        </p>
      }
      humanInteraction={
        <p>
          Guenons are important seed dispersers and a colourful part of African forests, and
          many people know them as some of the most beautiful monkeys. Several species are
          common, but a number of forest-restricted guenons are threatened by deforestation
          and hunting for bushmeat. Consult the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "What is a guenon?",
          answer:
            "A guenon is an African monkey of the genus Cercopithecus, a large group known for slim builds, long tails, and especially their colourful, ornately patterned faces. They are mostly forest-dwelling, fruit-eating Old World monkeys, and include well-known species such as De Brazza's monkey, the mona monkey, and the blue monkey.",
        },
        {
          question: "Why do guenons have such colourful faces?",
          answer:
            "Their bold, species-specific face patterns — beards, brow bands, nose spots, ear tufts — are thought to help guenons recognise members of their own species. This matters because several guenon species often live and forage together in the same forest, so clear visual 'badges' help avoid confusion and interbreeding.",
        },
        {
          question: "Do guenons live with other monkey species?",
          answer:
            "Often, yes. Many guenons form mixed-species groups, foraging and travelling alongside other guenons and sometimes other monkeys. Living together gives more eyes to watch for predators, and their distinctive face markings help the different species keep track of one another.",
        },
        {
          question: "What do guenons eat?",
          answer:
            "Most guenons are omnivores that rely heavily on fruit, adding leaves, flowers, seeds, gum, insects, and small animals depending on the species and season. Many use cheek pouches to gather food quickly while foraging, and as fruit-eaters they help disperse seeds.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Cercopithecus (guenons)" },
        { label: "Reference species", value: "Cercopithecus neglectus (De Brazza's monkey)" },
        { label: "Class", value: "Mammalia (Old World monkey)" },
        { label: "Diet", value: "Omnivore (fruit-leaning)" },
        { label: "Signature trait", value: "Colourful, species-specific face patterns" },
        { label: "Society", value: "Often one-male groups; mixed-species troops" },
        { label: "Range", value: "Sub-Saharan Africa" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Baboon Profile", href: "/animals/baboon", description: "A larger African Old World monkey" },
        { label: "Colobus Profile", href: "/animals/colobus", description: "An African leaf monkey" },
        { label: "Mandrill Profile", href: "/animals/mandrill", description: "The world's largest, vividly coloured monkey" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "African fauna in context" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
