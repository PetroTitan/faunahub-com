import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/sugar-glider";
const TITLE = "Sugar Glider — Profile, Gliding, Diet & Behavior";
const DESC =
  "Explore the sugar glider (Petaurus breviceps): a small, nocturnal, gliding marsupial of Australia and New Guinea that soars between trees on a furry membrane and lives in social groups.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-20",
  modifiedTime: "2026-06-20",
  ogImage: getAnimalOgImage("sugar-glider"),
});

export default function SugarGliderPage() {
  return (
    <AnimalProfileLayout
      commonName="Sugar Glider"
      scientificName="Petaurus breviceps"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Marsupial", "Gliding"]}
      image={getAnimalImage("sugar-glider") ?? undefined}
      galleryImages={getAnimalGalleryImages("sugar-glider")}
      sources={ANIMAL_SOURCES["sugar-glider"]}
      publishedDate="2026-06-20"
      modifiedDate="2026-06-20"
      overview={
        <>
          <p>
            The sugar glider (<em>Petaurus breviceps</em>) is a small, nocturnal,
            tree-dwelling marsupial of Australia and New Guinea, famous for its ability to
            glide between trees. A stretchy membrane of skin called the patagium runs from
            its wrists to its ankles; when the glider leaps and spreads its limbs, this
            membrane turns it into a living parachute that can carry it long distances
            through the canopy. Large eyes, a long bushy tail, and a dark dorsal stripe
            complete its distinctive look.
          </p>
          <p>
            Sugar gliders are highly social and live in family groups, communicating with a
            range of calls and scents.
          </p>
          <p>
            <strong>Note:</strong> sugar gliders are sometimes kept as exotic pets, which is
            restricted or regulated in many places and demands very specialised care; this
            profile focuses on the wild animal. Verify status and local laws with
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Sugar gliders live in forests and woodlands across parts of mainland Australia
          and New Guinea (and nearby islands), favouring areas with trees that provide
          both food and nesting hollows. They den in leaf-lined tree hollows, often shared
          by a social group.
        </p>
      }
      diet={
        <p>
          Sugar gliders are omnivores with a sweet tooth that gives them their name. They
          feed on sap and gum from trees (such as acacia and eucalyptus), nectar and
          pollen, and a great many insects and other small invertebrates, especially when
          protein demand is high. Their diet shifts with the seasons and what each forest
          offers.
        </p>
      }
      behavior={
        <p>
          Sugar gliders are nocturnal and social, typically living in groups that share a
          nest and defend a territory, scent-marked by dominant males. They glide from tree
          to tree to travel and forage efficiently, steering with their limbs and tail and
          landing with a controlled swoop. In cold weather or food shortages, they can
          enter short bouts of torpor to save energy, huddling together for warmth.
        </p>
      }
      humanInteraction={
        <p>
          Wild sugar gliders depend on forests with suitable hollows, so logging and land
          clearing can reduce their habitat. They are also widely traded as exotic pets —
          something that is illegal or restricted in many regions and requires expert,
          species-appropriate care to meet their social and dietary needs. The wild species
          is generally widespread. Consult authoritative sources and local regulations.
        </p>
      }
      faqs={[
        {
          question: "How does a sugar glider glide?",
          answer:
            "It has a gliding membrane (the patagium) stretching from its wrists to its ankles. When the glider leaps and spreads its legs, the membrane opens like a parachute, letting it glide long distances between trees. It steers using its limbs and bushy tail and lands with a controlled upward swoop.",
        },
        {
          question: "Why is it called a sugar glider?",
          answer:
            "The name combines its gliding ability with its fondness for sweet foods. Sugar gliders feed heavily on sugary tree sap and gum, nectar, and pollen (along with insects), so \"sugar\" reflects diet and \"glider\" reflects how it moves.",
        },
        {
          question: "Are sugar gliders good pets?",
          answer:
            "They are demanding animals with specialised needs — they are highly social, nocturnal, require a particular diet, and can live a long time — and keeping them is illegal or restricted in many places. This profile focuses on the wild animal; anyone considering one should first check local laws and seek expert guidance.",
        },
        {
          question: "What do sugar gliders eat?",
          answer:
            "They are omnivores, feeding on tree sap and gum, nectar and pollen, and plenty of insects and other small invertebrates. Their diet changes with the seasons, leaning more on sweet plant foods or on insects depending on availability and their needs.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Petaurus breviceps" },
        { label: "Class", value: "Mammalia (marsupial)" },
        { label: "Signature trait", value: "Glides on a wrist-to-ankle membrane" },
        { label: "Diet", value: "Omnivore (sap, nectar, insects)" },
        { label: "Activity", value: "Nocturnal & highly social" },
        { label: "Energy-saving", value: "Can enter torpor" },
        { label: "Range", value: "Australia & New Guinea" },
        { label: "Note", value: "Pet trade restricted in many areas" },
      ]}
      relatedLinks={[
        { label: "Quokka Profile", href: "/animals/quokka", description: "Another small Australian marsupial" },
        { label: "Koala Profile", href: "/animals/koala", description: "An iconic tree-dwelling marsupial" },
        { label: "Colugo Profile", href: "/animals/colugo", description: "A larger, unrelated gliding mammal" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Australian fauna in context" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
