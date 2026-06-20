import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/douc";
const TITLE = "Douc — Profile, the 'Costumed Ape' Leaf Monkey & Conservation";
const DESC =
  "Explore doucs (genus Pygathrix): vividly coloured leaf-eating monkeys of Southeast Asia, sometimes called the most beautiful primates — using the red-shanked douc. Endangered.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("douc"),
});

export default function DoucPage() {
  return (
    <AnimalProfileLayout
      commonName="Douc"
      scientificName="Pygathrix nemaeus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "Southeast Asia"]}
      image={getAnimalImage("douc") ?? undefined}
      galleryImages={getAnimalGalleryImages("douc")}
      sources={ANIMAL_SOURCES.douc}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            Doucs (genus <em>Pygathrix</em>) are strikingly colourful leaf-eating monkeys
            of the forests of Southeast Asia, often described as among the most beautiful of
            all primates. The red-shanked douc (<em>Pygathrix nemaeus</em>), shown here,
            looks almost as if it is wearing a costume: grey body, white forearms, a golden
            face, and brilliant maroon-red &ldquo;stockings&rdquo; on the lower legs. They
            belong to the colobine (leaf-monkey) group, related to langurs.
          </p>
          <p>
            For all their beauty, doucs are little known and increasingly rare, and they are
            an emblem of the threatened forests of Indochina.
          </p>
          <p>
            <strong>Conservation note:</strong> doucs are threatened — the red-shanked douc
            is Endangered (and other doucs Critically Endangered) due to habitat loss and
            hunting. Verify each species&apos; status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Doucs live in the tropical forests of Vietnam, Laos, and Cambodia, in evergreen
          and semi-evergreen forest from lowlands into the hills. They are highly arboreal,
          spending almost all their time in the trees, and depend on relatively intact,
          connected forest canopy for feeding and travel.
        </p>
      }
      diet={
        <p>
          Doucs are folivores, eating mainly leaves — especially young, tender ones — along
          with unripe fruit, seeds, flowers, and buds. Like other colobines they have a
          large, chambered stomach with fermenting microbes to break down fibrous foliage.
          They are gentle, slow feeders and often share food peacefully within the group.
        </p>
      }
      behavior={
        <p>
          Doucs are social, living in groups that move through the canopy by walking and
          impressive leaping. They are generally quiet and unaggressive, spending much of
          the day resting and digesting their leafy diet. Their bright coloration may help
          group members recognise one another in dense forest. Sadly, their habit of
          freezing in the trees when alarmed — effective against natural predators — makes
          them easy targets for hunters with guns.
        </p>
      }
      humanInteraction={
        <p>
          Doucs are flagship animals for Indochinese forest conservation, but they face
          serious threats from deforestation (including for agriculture and logging) and
          from hunting for food, traditional medicine, and the pet trade. Their small
          ranges and specialised needs make them especially vulnerable. Consult the IUCN
          Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why is the douc so colourful?",
          answer:
            "The red-shanked douc's vivid mix of grey, white, gold, and maroon-red has earned it the nickname 'costumed ape.' The exact function isn't fully understood, but such bold, distinctive coloration may help doucs recognise members of their own species and group in dense forest. It also makes them one of the most beautiful primates.",
        },
        {
          question: "What do doucs eat?",
          answer:
            "Doucs are leaf-eaters (folivores), favouring young leaves, plus unripe fruit, seeds, flowers, and buds. They have a large, chambered, fermenting stomach — like langurs and other colobines — that lets them digest tough, fibrous foliage.",
        },
        {
          question: "Where do doucs live?",
          answer:
            "Doucs live in the forests of Vietnam, Laos, and Cambodia, spending almost all their time high in the trees. They need relatively intact, connected forest, which is part of why they are so vulnerable as those forests are cleared.",
        },
        {
          question: "Are doucs endangered?",
          answer:
            "Yes. The red-shanked douc is Endangered, and its close relatives (the grey-shanked and black-shanked doucs) are even more threatened, some Critically Endangered. Habitat loss and hunting are the main causes, made worse by the doucs' habit of freezing in place when alarmed. Status should be checked against the IUCN Red List.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Pygathrix nemaeus (red-shanked douc)" },
        { label: "Class", value: "Mammalia (Old World monkey)" },
        { label: "Group", value: "Colobinae (leaf monkeys)" },
        { label: "Diet", value: "Folivore (mainly young leaves)" },
        { label: "Nickname", value: "'Costumed ape'" },
        { label: "Habitat", value: "Indochinese forests (arboreal)" },
        { label: "Range", value: "Vietnam, Laos, Cambodia" },
        { label: "IUCN Status", value: "Endangered+ (verify by species)" },
      ]}
      relatedLinks={[
        { label: "Langur Profile", href: "/animals/langur", description: "A related leaf-eating colobine" },
        { label: "Proboscis Monkey Profile", href: "/animals/proboscis-monkey", description: "Another colobine monkey" },
        { label: "Gibbon Profile", href: "/animals/gibbon", description: "A small Asian ape" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
