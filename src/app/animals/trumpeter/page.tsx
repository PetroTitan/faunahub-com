import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/trumpeter";
const TITLE = "Trumpeter — Profile, Social Amazon Ground Birds & Calls";
const DESC =
  "Explore trumpeters (genus Psophia): rounded, social ground birds of Amazonian forests named for their deep trumpeting calls, with unusually cooperative group lives.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("trumpeter"),
});

export default function TrumpeterPage() {
  return (
    <AnimalProfileLayout
      commonName="Trumpeter"
      scientificName="Psophia crepitans"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Amazon", "Ground bird"]}
      image={getAnimalImage("trumpeter") ?? undefined}
      galleryImages={getAnimalGalleryImages("trumpeter")}
      sources={ANIMAL_SOURCES.trumpeter}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Trumpeters (genus <em>Psophia</em>) are chunky, rounded ground birds of the
            Amazon rainforest, roughly the size of a chicken, with velvety black plumage, a
            hunched posture, and a short bill. The grey-winged trumpeter
            (<em>Psophia crepitans</em>), shown here, is a typical species. Their name comes
            from the males&apos; deep, resonant, trumpeting or booming calls, produced with
            the help of an elongated, coiled windpipe.
          </p>
          <p>
            Trumpeters are highly social and notable for their unusually cooperative group
            life, in which several adults help raise the young together.
          </p>
          <p>
            <strong>Note:</strong> there are several trumpeter species; details here use the
            grey-winged trumpeter as a reference. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Trumpeters live in lowland tropical rainforest of the Amazon basin and the Guiana
          Shield in northern South America. They are birds of the forest floor and lower
          levels, keeping to humid, shady interior forest, and they roost in trees at night
          but spend the day foraging on the ground.
        </p>
      }
      diet={
        <p>
          Trumpeters are mainly frugivores, eating fallen fruit from the forest floor, and
          they also take insects and other small invertebrates. They often follow groups of
          monkeys, picking up fruit the monkeys drop, and they may attend swarms of army ants
          to grab fleeing insects. By eating and moving fruit, trumpeters help disperse seeds
          in the forest.
        </p>
      }
      behavior={
        <p>
          Trumpeters live in tight social groups and are famous for cooperative breeding:
          a group may include several breeding adults, and group members share in defending
          territory and caring for chicks. They are mostly poor fliers, preferring to run and
          to roost in trees, and they keep in contact with loud trumpeting calls — also used
          as alarms, which makes them effective sentinels that other animals heed. They can be
          quite bold and curious.
        </p>
      }
      humanInteraction={
        <p>
          Trumpeters are characterful, social forest birds and are sometimes kept around
          rural homes in their range as semi-tame &ldquo;watch birds&rdquo; for their loud
          alarms. In the wild they depend on intact rainforest and can be affected by hunting
          and deforestation, with several species declining. Consult authoritative sources for
          species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why are they called trumpeters?",
          answer:
            "For their calls. Male trumpeters give deep, resonant, trumpeting or booming sounds, produced with the help of an unusually long, coiled windpipe. These far-carrying calls are used to keep the group together, claim territory, and raise the alarm, and they give the birds their name.",
        },
        {
          question: "Are trumpeters good fliers?",
          answer:
            "Not really. Trumpeters are primarily ground birds that run rather than fly, using their legs to move around the forest floor and only flying up to roost in trees or to escape danger. They are built for a terrestrial, social life in the rainforest understorey.",
        },
        {
          question: "How do trumpeters raise their young?",
          answer:
            "Cooperatively. Trumpeters live in groups that often include several breeding adults, and group members work together to defend the territory and care for the chicks. This cooperative breeding is one of the most interesting aspects of their social behaviour.",
        },
        {
          question: "What do trumpeters eat?",
          answer:
            "Mainly fallen fruit, which they gather on the forest floor, along with insects and other small invertebrates. They often follow fruit-eating monkeys to catch dropped fruit and may attend army-ant swarms to snap up fleeing insects, helping disperse seeds as they go.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Psophia crepitans (grey-winged trumpeter)" },
        { label: "Class", value: "Aves (family Psophiidae)" },
        { label: "Diet", value: "Mainly fallen fruit; also insects" },
        { label: "Signature trait", value: "Deep trumpeting calls (coiled windpipe)" },
        { label: "Society", value: "Social; cooperative breeding" },
        { label: "Flight", value: "Poor; mostly runs on the ground" },
        { label: "Range", value: "Amazon & Guiana Shield forests" },
        { label: "Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Guan Profile", href: "/animals/guan", description: "Another large Neotropical forest bird" },
        { label: "Hoatzin Profile", href: "/animals/hoatzin", description: "An unusual Amazonian bird" },
        { label: "Cassowary Profile", href: "/animals/cassowary", description: "A large ground-dwelling forest bird" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
