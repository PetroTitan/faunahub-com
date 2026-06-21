import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/howler-monkey";
const TITLE = "Howler Monkey — Profile, the Loudest Land Animal & Diet";
const DESC =
  "Explore howler monkeys (genus Alouatta): among the loudest land animals, New World monkeys whose dawn roars carry for kilometres, with a strong prehensile tail and a leafy diet.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("howler-monkey"),
});

export default function HowlerMonkeyPage() {
  return (
    <AnimalProfileLayout
      commonName="Howler Monkey"
      scientificName="Alouatta palliata"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Primate", "Americas"]}
      image={getAnimalImage("howler-monkey") ?? undefined}
      galleryImages={getAnimalGalleryImages("howler-monkey")}
      sources={ANIMAL_SOURCES["howler-monkey"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Howler monkeys (genus <em>Alouatta</em>) are large New World monkeys of Central
            and South American forests, and they are among the loudest land animals on
            Earth. The mantled howler (<em>Alouatta palliata</em>), shown here, is a typical
            species — a stocky, mostly black monkey with a long, strongly prehensile tail
            that acts as a fifth limb. Their fame comes from their voices: at dawn and dusk,
            males produce deep, resonant roars that can carry for several kilometres through
            the forest.
          </p>
          <p>
            That astonishing call is made possible by a specially enlarged throat bone (the
            hyoid), which works like a resonating chamber.
          </p>
          <p>
            <strong>Note:</strong> there are several howler species; details here use the
            mantled howler as a reference. Treat general statements as approximate and verify
            against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Howler monkeys range from southern Mexico through Central America and across much
          of tropical South America, in rainforest, dry forest, mangroves, and gallery
          forest. They are highly arboreal, spending almost all their time in the trees, and
          different species occupy a wide variety of forest types across this large range.
        </p>
      }
      diet={
        <p>
          Howlers are folivores — among the most leaf-dependent of New World monkeys —
          supplementing leaves with fruit, flowers, and buds. Leaves are low in energy, so
          howlers conserve energy by resting a great deal, spending much of the day quietly
          digesting their fibrous diet. They help disperse seeds of the fruits they do eat.
        </p>
      }
      behavior={
        <p>
          Howler monkeys live in groups and are best known for their dawn chorus: males
          (and sometimes females) roar to advertise their group&apos;s presence and spacing,
          allowing neighbouring groups to avoid costly direct confrontation. The enlarged
          hyoid bone amplifies these calls into some of the loudest sounds any land animal
          makes. Otherwise howlers are relatively slow, deliberate movers, using their
          prehensile tail to hang and feed, and they spend much of their time resting.
        </p>
      }
      humanInteraction={
        <p>
          Howler monkeys are iconic voices of the Neotropical forest and a highlight for
          ecotourists. Many remain reasonably widespread, but they depend on forest cover and
          are affected by deforestation, fragmentation, hunting, and disease (such as yellow
          fever outbreaks); some species and populations are of conservation concern. Consult
          the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "How loud are howler monkeys?",
          answer:
            "Extremely loud — they are among the loudest land animals, and their deep roars can carry for several kilometres through dense forest. The sound is produced with the help of a specially enlarged throat bone (the hyoid) that acts as a resonating chamber, amplifying the call far beyond what the monkey's size would suggest.",
        },
        {
          question: "Why do howler monkeys howl?",
          answer:
            "The roaring choruses, given especially at dawn and dusk, mainly advertise a group's location and territory. By calling, neighbouring groups can space themselves out and avoid direct, risky confrontations over food and range. It's a way of settling disputes by voice rather than by fighting.",
        },
        {
          question: "What do howler monkeys eat?",
          answer:
            "Howlers are among the most leaf-eating of New World monkeys, living largely on leaves and supplementing them with fruit, flowers, and buds. Because leaves give little energy, howlers rest a lot to conserve energy while digesting their fibrous diet.",
        },
        {
          question: "Do howler monkeys have prehensile tails?",
          answer:
            "Yes. Like several other New World monkeys, howlers have a strong prehensile tail that can grip branches and bear their weight, acting like a fifth limb. They use it to hang while feeding and to move and balance safely high in the canopy.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Alouatta palliata (mantled howler)" },
        { label: "Class", value: "Mammalia (New World monkey)" },
        { label: "Claim to fame", value: "Among the loudest land animals" },
        { label: "How", value: "Enlarged hyoid (throat) bone" },
        { label: "Diet", value: "Folivore (leaves; also fruit/flowers)" },
        { label: "Tail", value: "Strong & prehensile (a 'fifth limb')" },
        { label: "Range", value: "S. Mexico to South America" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Spider Monkey Profile", href: "/animals/spider-monkey", description: "Another prehensile-tailed New World monkey" },
        { label: "Saki Monkey Profile", href: "/animals/saki-monkey", description: "A New World monkey" },
        { label: "Uakari Profile", href: "/animals/uakari", description: "An Amazonian monkey" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Neotropical fauna in context" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
