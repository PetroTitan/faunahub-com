import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/army-ant";
const TITLE = "Army Ant — Profile, Swarm Raids, Living Bivouacs & Followers";
const DESC =
  "Explore the army ant (Eciton burchellii): a Neotropical ant that nests in a bivouac of its own bodies, raids in swarms, and is followed by birds.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("army-ant"),
});

export default function ArmyAntPage() {
  return (
    <AnimalProfileLayout
      commonName="Army Ant"
      scientificName="Eciton burchellii"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect","Ant","Neotropical"]}
      image={getAnimalImage("army-ant") ?? undefined}
      galleryImages={getAnimalGalleryImages("army-ant")}
      sources={ANIMAL_SOURCES["army-ant"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          <em>Eciton burchellii</em> is the best-known of the New World army ants, a species of Central and South American forests whose colonies can contain hundreds of thousands of workers. Unlike most ants, it builds no permanent nest.
        </p>
        <p>
          Instead the colony forms a <strong>bivouac</strong>: a temporary nest constructed from the bodies of the ants themselves, which link legs to form a living structure around the queen and brood, often beneath a log or in a tree buttress.
        </p>
        <p>
          The colony alternates between a nomadic phase, moving almost daily and raiding heavily, and a stationary phase while the queen lays and the larvae develop. Its raids are the defining spectacle: a swarm front advancing across the forest floor, flushing invertebrates ahead of it.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          <em>Eciton burchellii</em> lives in humid lowland tropical forest from Mexico through Central America into South America. Colonies need extensive intact forest floor to raid across, and they shift bivouac sites frequently during the nomadic phase, using sheltered spots such as hollows beneath fallen trunks, cavities and tree buttresses.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Army ants are predators. Swarm raids take a wide range of arthropods — spiders, crickets, cockroaches, scorpions, other ants and their brood — and occasionally small vertebrates that cannot escape. Prey is overwhelmed by numbers, cut up, and carried back along the raid columns to the bivouac.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          A raid begins as a fan-shaped swarm front spreading across the forest floor, with columns feeding prey back to the bivouac behind. Workers are strongly differentiated by size, from small workers to large soldiers with prominent hooked jaws. The colony cycle alternates between nomadic and stationary phases tied to brood development. Army ants also build living bridges, workers linking bodies to span gaps so the column can cross.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Army ant swarms are one of the most striking phenomena of Neotropical forests, and they support an entire community of associated animals. <strong>Ant-following birds</strong> — antbirds, woodcreepers and others — track raids not to eat the ants but to catch the insects fleeing ahead of the swarm, and some are so dependent on this that they are considered obligate ant-followers. Butterflies feed on the droppings of those birds, and various arthropods live inside the bivouac. Because colonies need large areas of continuous forest, they are sensitive to fragmentation, and their loss cascades to the species that depend on them. This profile offers no pest-control or handling guidance.
        </p>
        </>
      }
      faqs={[
        {
          question: "Do army ants build nests?",
          answer:
            "Not conventional ones. The colony forms a bivouac — a temporary nest made of the ants' own bodies, with workers linking legs to create a living structure around the queen and brood. During the nomadic phase the colony relocates almost daily, so no permanent nest is built at all.",
        },
        {
          question: "What are ant-following birds?",
          answer:
            "Birds that track army ant raids to feed. They are not eating the ants; they catch the insects and other invertebrates that flee ahead of the advancing swarm. Some antbirds are so reliant on this that they are considered obligate ant-followers, which makes them vulnerable wherever army ant colonies disappear.",
        },
        {
          question: "What do army ants eat?",
          answer:
            "Other arthropods, mostly — spiders, crickets, cockroaches, scorpions and other ants and their brood — plus the occasional small vertebrate that cannot get away. Prey is overwhelmed by sheer numbers during a swarm raid, cut up, and carried back to the bivouac.",
        },
        {
          question: "Do army ants really build bridges?",
          answer:
            "Yes. Workers link their bodies together to span gaps in the raiding column's path, forming living bridges that other ants walk across. The structure assembles and disassembles as the raid needs it — the same principle as the bivouac, applied to crossing a gap.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Eciton burchellii" },
        { label: "Family", value: "Formicidae (ants)" },
        { label: "Class", value: "Insecta" },
        { label: "Nest", value: "A bivouac made of the ants' own bodies" },
        { label: "Colony cycle", value: "Alternating nomadic and stationary phases" },
        { label: "Raids", value: "Fan-shaped swarm front across the forest floor" },
        { label: "Associates", value: "Ant-following birds, butterflies, arthropods" },
        { label: "Habitat", value: "Humid Neotropical lowland forest" },
      ]}
      relatedLinks={[
        { label: "Ant Profile", href: "/animals/ant", description: "Group-level overview" },
        { label: "Leafcutter Ant Profile", href: "/animals/leafcutter-ant" },
        { label: "Fire Ant Profile", href: "/animals/fire-ant" },
        { label: "Termite Profile", href: "/animals/termite" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
