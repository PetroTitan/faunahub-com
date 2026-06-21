import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/colobus";
const TITLE = "Colobus Monkey — Profile, Leaf Diet & Behavior";
const DESC =
  "Explore colobus monkeys (genera Colobus and relatives): striking black-and-white African leaf monkeys with a reduced thumb and a leaf-fermenting stomach — graceful canopy leapers.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("colobus"),
});

export default function ColobusPage() {
  return (
    <AnimalProfileLayout
      commonName="Colobus Monkey"
      scientificName="Colobus guereza"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "Africa"]}
      image={getAnimalImage("colobus") ?? undefined}
      galleryImages={getAnimalGalleryImages("colobus")}
      sources={ANIMAL_SOURCES.colobus}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Colobus monkeys are African leaf-eating monkeys (colobines), best known for the
            striking black-and-white colobus species such as the mantled guereza
            (<em>Colobus guereza</em>), shown here. These elegant monkeys have glossy black
            fur set off by a long white mantle along the flanks and a flowing white-tipped
            tail. A distinctive feature gives the group its name: colobus monkeys have only
            a tiny stump of a thumb (or none), &ldquo;colobus&rdquo; coming from a Greek word
            for &ldquo;mutilated.&rdquo;
          </p>
          <p>
            They are highly arboreal, agile leapers, and specialised leaf-eaters with a
            complex, fermenting stomach.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;colobus&rdquo; covers several black-and-white, red,
            and olive colobus species; details here use the mantled guereza as a reference.
            Treat general statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Colobus monkeys live in forests and wooded areas across much of sub-Saharan
          Africa, from rainforest and montane forest to gallery forest and wooded savanna,
          depending on the species. The mantled guereza is widespread in central and eastern
          Africa and is fairly adaptable, occurring in a range of forest types.
        </p>
      }
      diet={
        <p>
          Colobus monkeys are folivores, feeding mainly on leaves — especially young
          leaves — along with some fruit, seeds, and flowers. Like other colobines they have
          a large, chambered stomach where microbes ferment tough, fibrous foliage, letting
          them live on a leaf-heavy diet that many monkeys could not digest.
        </p>
      }
      behavior={
        <p>
          Colobus monkeys are highly arboreal and rarely come to the ground, moving through
          the canopy with spectacular leaps and using the long tail for balance; the reduced
          thumb is thought to help them swing and grip branches smoothly. They live in
          groups, usually with one or a few males, and males give loud, far-carrying roaring
          calls at dawn and to advertise territory. Newborn guerezas are pure white,
          contrasting sharply with the adults.
        </p>
      }
      humanInteraction={
        <p>
          Colobus monkeys have long been hunted for their beautiful fur and for meat, and
          they are affected by deforestation; while the mantled guereza remains relatively
          widespread, some colobus species — especially certain red colobus — are highly
          threatened. As major leaf-eaters they play an important role in forest ecosystems.
          Consult the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why do colobus monkeys have almost no thumb?",
          answer:
            "It's a defining trait — the name 'colobus' comes from a Greek word meaning 'mutilated,' referring to the reduced or absent thumb. A small thumb is thought to help these monkeys move swiftly through the canopy, letting the hand act like a hook over branches during their fast, leaping travel.",
        },
        {
          question: "What do colobus monkeys eat?",
          answer:
            "Colobus monkeys are leaf-eaters (folivores), favouring young leaves and also taking some fruit, seeds, and flowers. They have a large, chambered, fermenting stomach — like other colobine monkeys — that lets them digest tough foliage other monkeys can't use well.",
        },
        {
          question: "Why are baby colobus monkeys white?",
          answer:
            "In the black-and-white guereza, newborns are entirely white, standing out vividly against the black adults. This may help the group keep track of and care for infants (which are often handled by several group members), with the adult black-and-white coloration developing as they grow.",
        },
        {
          question: "Are colobus monkeys endangered?",
          answer:
            "It depends on the species. The mantled guereza is relatively widespread, but several colobus species — particularly some red colobus — are seriously threatened by hunting and habitat loss, with a few among the most endangered primates. Status varies, so it should be checked against current IUCN Red List assessments.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Colobus guereza (mantled guereza)" },
        { label: "Class", value: "Mammalia (Old World monkey)" },
        { label: "Group", value: "Colobinae (leaf monkeys)" },
        { label: "Diet", value: "Folivore (mainly young leaves)" },
        { label: "Signature trait", value: "Reduced/absent thumb; white mantle" },
        { label: "Babies", value: "Born pure white (guereza)" },
        { label: "Range", value: "Sub-Saharan Africa" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Langur Profile", href: "/animals/langur", description: "An Asian leaf-eating colobine" },
        { label: "Mandrill Profile", href: "/animals/mandrill", description: "Another African monkey" },
        { label: "Gorilla Profile", href: "/animals/gorilla", description: "A great ape of African forests" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
