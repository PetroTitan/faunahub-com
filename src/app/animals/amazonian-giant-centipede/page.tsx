import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/amazonian-giant-centipede";
const TITLE = "Amazonian Giant Centipede: Facts & Profile";
const DESC =
  "Learn about the Amazonian giant centipede (Scolopendra gigantea), a large predatory arthropod of parts of northern South America, its biology and ecology.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("amazonian-giant-centipede"),
});

export default function AmazonianGiantCentipedePage() {
  return (
    <AnimalProfileLayout
      commonName="Amazonian Giant Centipede"
      scientificName="Scolopendra gigantea"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Invertebrate","Centipede","Predator"]}
      image={getAnimalImage("amazonian-giant-centipede") ?? undefined}
      galleryImages={getAnimalGalleryImages("amazonian-giant-centipede")}
      sources={ANIMAL_SOURCES["amazonian-giant-centipede"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The Amazonian giant centipede (<em>Scolopendra gigantea</em>) is one of the largest centipedes known, a long-bodied, fast-moving predatory arthropod associated with parts of northern South America and some nearby areas. Like other centipedes, it has a segmented body lined with many pairs of legs and a pair of modified front limbs, called forcipules, that deliver venom to subdue prey. It is an active hunter rather than a passive feeder, relying on speed and grip to capture a range of small animals.
          </p>
          <p>
            Despite its size and predatory habits, this species is best understood as a specialized invertebrate that plays a role in the food webs of its habitats. Its bite can be painful and is considered medically significant to people, but it is rarely life-threatening. This profile presents that fact calmly and focuses on biology and ecology rather than encounters or handling.
          </p>
          <p>
            Because the Amazonian giant centipede has not been formally evaluated in a single conservation assessment, much about its wider population and trends remains uncertain. What is described here reflects general observations about the species and its close relatives rather than precise figures.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The Amazonian giant centipede is classified as <em>Scolopendra gigantea</em>, a species within the genus <em>Scolopendra</em>, the family Scolopendridae, and the order Scolopendromorpha. Centipedes belong to the class Chilopoda within the arthropods, a group distinct from insects and from millipedes. Members of <em>Scolopendra</em> are sometimes called tropical or giant centipedes, and <em>Scolopendra gigantea</em> is among the largest in the genus. As with many centipede groups, the boundaries between similar populations and closely related forms can be a subject of ongoing study by specialists.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            This is a large centipede with a flattened, elongated body divided into many segments, each bearing a single pair of legs, giving it the characteristic many-legged appearance of its order. Reported coloration tends toward reddish, brownish, or coppery tones, sometimes with contrasting legs, though shades can vary. At the front of the body sits a pair of antennae and the forcipules, the curved venom-bearing claws that are a defining feature of centipedes. Its considerable length relative to most other centipedes is one of the most commonly noted features used to recognize the species.
          </p>
        </>
      }
      habitat={
        <p>
          The Amazonian giant centipede is associated with parts of northern South America and some nearby areas, where it occurs in warm, generally humid environments. It is typically found in places that offer shelter and moisture, such as leaf litter, soil, crevices, fallen wood, and similar concealed microhabitats. Like many centipedes, it tends to avoid open, exposed conditions and is more active in sheltered or low-light settings. Its distribution should be understood cautiously, as occurrence varies across the region and detailed range data for the species remain incomplete.
        </p>
      }
      diet={
        <p>
          As a predator, the Amazonian giant centipede feeds on a variety of small animals. Its diet includes insects and other invertebrates, and it is also recorded taking small vertebrates within its size range. It uses its speed to overtake prey and its forcipules to inject venom that subdues the captured animal before feeding. This active, opportunistic predatory strategy is typical of large centipedes and reflects its position as a hunter within its habitat.
        </p>
      }
      behavior={
        <>
          <p>
            The Amazonian giant centipede is a fast, ground-dwelling arthropod that is generally more active during darker, sheltered periods and spends much of its time in concealed retreats. Movement is rapid and coordinated across its many legs, aiding both in pursuing prey and in retreating from disturbance. Like other centipedes in its order, it reproduces by laying eggs, and females of many related species are known to guard their eggs and young for a period. Specific details of its life cycle in the wild are not fully documented and can vary with local conditions.
          </p>
          <p>
            Within its habitats, the Amazonian giant centipede functions as a predator of smaller animals, helping to shape local invertebrate communities and contributing to the regulation of prey populations. As a sizable arthropod hunter, it occupies a notable place in soil and litter food webs. It may in turn serve as prey for larger animals. In this way it participates in the broader cycling of energy through the ecosystems where it occurs.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The bite of the Amazonian giant centipede can be painful and is regarded as medically significant to people, though it is rarely life-threatening; it is best described calmly rather than sensationally. This profile does not provide handling, capture, or first-aid instructions. Anyone bitten, or experiencing a reaction, should contact qualified medical professionals or local health authorities, and any concern about wildlife in or around homes should be directed to local wildlife authorities. The species has not been assessed by the IUCN, so its conservation standing is best described as not yet evaluated rather than placed in a defined category.
        </p>
      }
      faqs={[
        {
          question: "Is the Amazonian giant centipede dangerous to people?",
          answer:
            "Its bite can be painful and is considered medically significant, but it is rarely life-threatening. Anyone bitten or experiencing a reaction should contact qualified medical professionals or local health authorities.",
        },
        {
          question: "Where is the Amazonian giant centipede found?",
          answer:
            "It is associated with parts of northern South America and some nearby areas, where it lives in warm, generally humid, sheltered environments. Its exact range is not fully documented and varies across the region.",
        },
        {
          question: "What does the Amazonian giant centipede eat?",
          answer:
            "It is a predator that feeds on insects and other invertebrates, and it can also take small vertebrates within its size range. It uses venom delivered through its forcipules to subdue prey.",
        },
        {
          question: "What is the conservation status of the Amazonian giant centipede?",
          answer:
            "It has not been assessed by the IUCN Red List, so it has no defined conservation category at this time. Conservation assessments can change as more information becomes available.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Scolopendra gigantea" },
        { label: "Animal group", value: "Invertebrate (centipede, class Chilopoda)" },
        { label: "Family/order", value: "Scolopendridae; order Scolopendromorpha" },
        { label: "Size", value: "One of the largest centipede species; long, many-segmented body" },
        { label: "Diet", value: "Predatory; insects, other invertebrates, and some small vertebrates" },
        { label: "Habitat", value: "Warm, humid, sheltered microhabitats such as litter, soil, and crevices" },
        { label: "Range", value: "Associated with parts of northern South America and nearby areas" },
        { label: "Conservation status", value: "Not assessed by the IUCN Red List" },
      ]}
      relatedLinks={[
        { label: "Centipede", href: "/animals/centipede", description: "Centipedes more broadly" },
        { label: "Millipede", href: "/animals/millipede", description: "A many-legged relative, for contrast" },
        { label: "Goliath Birdeater", href: "/animals/goliath-birdeater", description: "Another large Amazon invertebrate" },
        { label: "South American fauna", href: "/fauna/continents/south-america", description: "Animals of South America" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
