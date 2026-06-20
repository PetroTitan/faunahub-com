import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/langur";
const TITLE = "Langur — Profile, Leaf-Eating Monkeys & Behavior";
const DESC =
  "Explore langurs (leaf monkeys of the subfamily Colobinae): slender, long-tailed Asian monkeys that ferment leaves to digest them — using the sacred gray langur as a reference.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("langur"),
});

export default function LangurPage() {
  return (
    <AnimalProfileLayout
      commonName="Langur"
      scientificName="Semnopithecus entellus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "Asia"]}
      image={getAnimalImage("langur") ?? undefined}
      galleryImages={getAnimalGalleryImages("langur")}
      sources={ANIMAL_SOURCES.langur}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Langurs are slender, long-tailed Asian monkeys of the leaf-eating subfamily
            Colobinae. The gray langurs of the Indian subcontinent (genus
            <em> Semnopithecus</em>), shown here, are the most familiar — pale-bodied
            monkeys with black faces and very long tails, often seen around temples, towns,
            and forests. In India they are widely regarded as sacred and associated with the
            Hindu deity Hanuman, which has long given them a degree of protection.
          </p>
          <p>
            Like other colobines, langurs are specialised leaf-eaters with a complex
            stomach, and they are agile, highly social, and largely arboreal.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;langur&rdquo; covers many species across South and
            Southeast Asia; details here use the gray langur as a reference. Treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Langurs occupy a huge range of habitats across South and Southeast Asia, from
          tropical rainforest and mountain forest to dry scrub, farmland, and the edges of
          towns and temples. Gray langurs are especially adaptable and are found from sea
          level to high in the Himalayas, often living close to people.
        </p>
      }
      diet={
        <p>
          Langurs are mainly folivores, eating leaves (both mature and young), along with
          fruit, flowers, buds, and seeds. Their large, chambered stomach uses microbial
          fermentation to break down tough, fibrous foliage — and even to handle some
          toxins in leaves that other animals avoid — which lets them exploit a food source
          many monkeys cannot.
        </p>
      }
      behavior={
        <p>
          Langurs are social, living in groups that range from one-male harems to larger
          multi-male troops depending on species and place. They are agile leapers and
          climbers with long limbs and tails. Gray langurs are known to forage on the
          ground as well as in trees, and they sometimes form mixed associations with deer,
          which benefit from the langurs&apos; alarm calls and the food they drop. Like many
          monkeys, langurs have complex social lives, including grooming and, in some cases,
          intense competition between males.
        </p>
      }
      humanInteraction={
        <p>
          Gray langurs live closely alongside people in much of India and are often tolerated
          or revered for their religious associations, though crop-raiding and urban conflict
          can cause friction. Many langur species are common, but a number of forest-dwelling
          langurs are threatened by habitat loss and hunting. Consult authoritative sources
          for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "What is a langur?",
          answer:
            "Langurs are Asian leaf-eating monkeys in the subfamily Colobinae. They are typically slender, long-tailed, and largely tree-dwelling, with specialised stomachs for digesting leaves. The term covers many species; the gray langurs of India, associated with the deity Hanuman, are the best known.",
        },
        {
          question: "How do langurs digest tough leaves?",
          answer:
            "Like cattle and other colobine monkeys, langurs have a large, chambered stomach where microbes ferment the leaves they eat. This lets them break down fibrous foliage — and even neutralise some plant toxins — extracting nutrients from a food source that would be hard for most monkeys to use.",
        },
        {
          question: "Why are gray langurs considered sacred in India?",
          answer:
            "Gray langurs are associated with the Hindu deity Hanuman, the monkey god, and are therefore widely revered and often protected in India. This cultural status has helped them thrive around temples and towns, where people frequently tolerate or even feed them.",
        },
        {
          question: "Are langurs endangered?",
          answer:
            "It depends on the species. Gray langurs are adaptable and remain common, but several forest-specialist langurs across Asia are threatened by deforestation and hunting. Status varies widely, so it should be checked against current IUCN Red List assessments for each species.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Semnopithecus entellus (gray langur)" },
        { label: "Class", value: "Mammalia (Old World monkey)" },
        { label: "Group", value: "Colobinae (leaf monkeys)" },
        { label: "Diet", value: "Folivore (leaves; also fruit & flowers)" },
        { label: "Digestion", value: "Chambered, fermenting stomach" },
        { label: "Culture", value: "Gray langur sacred (Hanuman)" },
        { label: "Range", value: "South & Southeast Asia" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Proboscis Monkey Profile", href: "/animals/proboscis-monkey", description: "A related leaf-eating colobine" },
        { label: "Douc Profile", href: "/animals/douc", description: "A colourful Asian leaf monkey" },
        { label: "Gibbon Profile", href: "/animals/gibbon", description: "A small Asian ape" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Asian fauna in context" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
