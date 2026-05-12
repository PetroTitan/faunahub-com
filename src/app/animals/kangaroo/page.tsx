import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-05-12";
const MODIFIED = "2026-05-12";

const title = "Kangaroo — Profile, Habitat, Diet & Behavior";
const description =
  "Macropus / Osphranter: Australian marsupial macropods. Hopping locomotion, mobs, herbivorous grazing, pouch-rearing biology, and modern conservation context.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/kangaroo",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
});

export default function KangarooPage() {
  return (
    <AnimalProfileLayout
      commonName="Kangaroo"
      pageTitle={title}
      description={description}
      path="/animals/kangaroo"
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Marsupial", "Macropod"]}
      factsHeaderNote='"Kangaroo" is commonly applied to the four large macropod species: red, eastern grey, western grey and antilopine. Many other macropods (wallabies, tree-kangaroos, etc.) are related but distinct.'
      overview={
        <>
          <p>
            Kangaroos are large marsupial mammals of the family Macropodidae, endemic to
            Australia. The term &quot;kangaroo&quot; is generally used for the largest species —
            the red kangaroo (<em>Osphranter rufus</em>), eastern grey kangaroo (
            <em>Macropus giganteus</em>), western grey kangaroo (<em>M. fuliginosus</em>),
            and antilopine kangaroo (<em>O. antilopinus</em>) — but the broader family also
            includes wallabies and a number of smaller related species.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Kangaroos occupy a wide range of habitats. Red kangaroos prefer arid and
            semi-arid open country across inland Australia. Eastern grey kangaroos are
            found in grassland, open forest and woodland across eastern Australia. Western
            grey kangaroos occupy a wide band across southern Australia. Antilopine
            kangaroos are restricted to the tropical savannas of the far north.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Kangaroos are herbivores, feeding primarily on grasses and herbaceous plants.
            Their digestive system — fore-stomach fermentation — is a separate evolutionary
            solution to plant digestion to that found in ruminant mammals such as cattle and
            sheep. Kangaroos can survive in very dry conditions and reduce activity in the
            hottest parts of the day.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Kangaroos move using a distinctive bipedal hopping gait that is highly efficient
            at speed. They also use the tail and forelimbs in slower &quot;pentapedal&quot;
            movement when grazing. Kangaroos typically live in loose groups known as
            &quot;mobs&quot;. Reproduction includes the marsupial pouch-rearing strategy: a
            very small newborn climbs to the mother&apos;s pouch and continues development
            attached to a teat over a period of many months.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Several large kangaroo species have stable or expanding populations in many parts
            of Australia and are managed in some regions as harvestable wildlife under
            regulated quotas. Some smaller macropod species are threatened or critically
            endangered, with pressures including introduced predators (notably foxes and
            cats), land-use change, and habitat loss. Status should be checked species-by-
            species on the IUCN Red List and Australian government sources.
          </p>
        </>
      }
      similarAnimals={
        <p>
          Kangaroos are most closely related to other macropods including wallabies, wallaroos
          and tree-kangaroos. Outside the macropods, their closest broader relatives are
          other marsupial mammals including possums and koalas.
        </p>
      }
      faqs={[
        {
          question: "Are kangaroos and wallabies the same animal?",
          answer:
            "Kangaroos and wallabies belong to the same family (Macropodidae) but are different species. The terms are partly distinguished by size — 'kangaroo' is usually applied to the larger species and 'wallaby' to smaller ones — although the boundary is not strict and other species, such as wallaroos and tree-kangaroos, sit in between.",
        },
        {
          question: "Are kangaroos dangerous?",
          answer:
            "Large kangaroos are powerful animals and can injure people, particularly when stressed, cornered, or habituated to humans. Most encounters are uneventful, but kangaroos should not be approached, fed, or surrounded. Mothers with joeys are particularly defensive.",
        },
        {
          question: "How does the pouch actually work?",
          answer:
            "Newborn marsupials are very small and developmentally immature. After a short gestation, the newborn climbs from the birth canal into the mother's pouch, where it attaches to a teat and continues development for many months. Mothers can also have offspring of different ages at different developmental stages simultaneously.",
        },
        {
          question: "Can kangaroos hop backwards?",
          answer:
            "Kangaroos cannot easily hop backwards. The structure of their hindlegs and tail makes forward bipedal hopping efficient but reverses awkward; this is sometimes cited as part of the reason the kangaroo features on Australia's coat of arms — as an animal that 'moves forward'.",
        },
      ]}
      quickFacts={[
        { label: "Family", value: "Macropodidae" },
        { label: "Class", value: "Mammalia" },
        { label: "Infraclass", value: "Marsupialia" },
        { label: "Diet", value: "Herbivore (grasses and herbs)" },
        { label: "Locomotion", value: "Bipedal hopping; pentapedal at low speed" },
        { label: "Social structure", value: "Loose groups (mobs)" },
        { label: "Primary habitat", value: "Grassland, open woodland, arid scrub" },
        { label: "Range", value: "Mainland Australia (some species also Tasmania, New Guinea)" },
        { label: "IUCN Status", value: "Varies by species (verify per species)" },
      ]}
      relatedLinks={[
        { label: "Koala Profile", href: "/animals/koala", description: "Another iconic Australian marsupial" },
        { label: "Mammal Encyclopedia", href: "/animal-encyclopedia/mammals" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
        { label: "Animal Comparisons", href: "/compare" },
      ]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
