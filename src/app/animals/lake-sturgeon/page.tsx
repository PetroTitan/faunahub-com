import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/lake-sturgeon";
const TITLE = "Lake Sturgeon: Ancient North American Fish";
const DESC =
  "Discover the lake sturgeon, an ancient, slow-growing freshwater fish of North America with bony scutes, barbels, a shark-like tail, and long lifespan.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-28",
  modifiedTime: "2026-06-28",
  ogImage: getAnimalOgImage("lake-sturgeon"),
});

export default function LakeSturgeonPage() {
  return (
    <AnimalProfileLayout
      commonName="Lake Sturgeon"
      scientificName="Acipenser fulvescens"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish","Ancient lineage","Long-lived"]}
      image={getAnimalImage("lake-sturgeon") ?? undefined}
      galleryImages={getAnimalGalleryImages("lake-sturgeon")}
      sources={ANIMAL_SOURCES["lake-sturgeon"]}
      publishedDate="2026-06-28"
      modifiedDate="2026-06-28"
      overview={
        <>
          <p>
            The lake sturgeon (<em>Acipenser fulvescens</em>) is a large, long-lived, bottom-feeding freshwater fish that belongs to one of the oldest surviving lineages of fishes. With its rows of bony plates, sensory barbels, and an upturned, shark-like tail, it carries an unmistakably ancient appearance that has changed relatively little over a very long span of evolutionary time. It is associated with large rivers and lakes in parts of North America.
          </p>
          <p>
            One of the most defining features of the lake sturgeon is its slow pace of life. It grows gradually, matures late, and can live for many decades, traits that make individual fish remarkable but also leave populations slow to rebuild once reduced. This biology is central to understanding why the species has attracted ongoing conservation attention across much of its range, and why it is historically depleted and treated as a species of conservation concern in many jurisdictions.
          </p>
          <p>
            This profile is educational and ecological in focus. It does not offer fishing, angling, harvesting, caviar, cooking, or food guidance of any kind, and is intended only to help readers understand the lake sturgeon as a living part of North American freshwater ecosystems.
          </p>
          <h3>Taxonomy and animal group</h3>
          <p>
            The lake sturgeon is classified scientifically as <em>Acipenser fulvescens</em> and belongs to the family Acipenseridae, the sturgeons, within the order Acipenseriformes. Sturgeons are ray-finned fishes whose lineage is ancient, and they retain a number of features considered primitive compared with many modern bony fishes, including a largely cartilaginous skeleton and a heterocercal (asymmetrical, shark-like) tail. The genus <em>Acipenser</em> includes several sturgeon species across the Northern Hemisphere, and the lake sturgeon is the representative most strongly associated with interior freshwater systems of North America.
          </p>
          <h3>Appearance and recognition</h3>
          <p>
            A lake sturgeon is recognized by its elongated, torpedo-shaped body and the rows of bony, ridged plates called scutes that run along its back and sides, giving it an armored profile rather than the smooth scales of typical fishes. The snout is long and somewhat shovel-like in younger fish, and beneath it hang four whisker-like barbels positioned just ahead of a protrusible, toothless, downward-facing mouth suited to feeding along the bottom. The tail is heterocercal, with the upper lobe longer than the lower, lending a shark-like silhouette. Coloration is generally olive to grayish-brown above and paler below, and large individuals can reach substantial lengths and weights, reflecting the species&#39; capacity for long, slow growth.
          </p>
        </>
      }
      habitat={
        <p>
          The lake sturgeon occurs in parts of North America, where it is associated with large freshwater rivers and lakes, including waters within the Great Lakes, Mississippi, and Hudson Bay drainages, as well as portions of the St. Lawrence system. It is generally a bottom-oriented fish that favors deeper channels, lake floors, and river reaches with suitable substrate, moving into flowing water over rocky or gravelly areas during spawning periods. Its distribution across these interior basins is uneven and has been shaped over time by changes to river connectivity and habitat, so it is best described as found in parts of these systems rather than throughout any single watershed.
        </p>
      }
      diet={
        <p>
          As a bottom feeder, the lake sturgeon uses its sensitive barbels to detect prey along the substrate and then extends its protrusible, toothless mouth to suck up food items. Its diet centers on small bottom-dwelling invertebrates such as aquatic insect larvae, crustaceans, mollusks, and other small organisms found in sediment and on the lake or river floor. Because it lacks teeth, it does not capture large active prey but instead gathers and ingests small items, sometimes taking in sediment along with food, a feeding style well matched to its slow, methodical movement near the bottom.
        </p>
      }
      behavior={
        <>
          <p>
            The lake sturgeon is generally a slow-moving, bottom-associated fish that lives a long life marked by gradual growth and late maturity. Reproduction is infrequent rather than annual for a given individual, and adults typically migrate to flowing water over rocky substrate to spawn, releasing large numbers of eggs that adhere to the bottom; the young fish then develop without parental care. Because individuals may take many years to reach reproductive age and may not spawn every year, the species&#39; life history unfolds over decades, which is one reason its populations respond slowly to changes in their environment.
          </p>
          <p>
            Within its freshwater ecosystems, the lake sturgeon functions as a long-lived benthic, or bottom-dwelling, consumer that helps process small invertebrate prey within river and lake food webs. By feeding along the substrate, it interacts with the bottom community and forms one link among the many organisms that make up these large freshwater systems. Its eggs and young also represent a food resource for other aquatic animals, so the species participates in the broader cycling of energy through the habitats it occupies as both a consumer and, at vulnerable life stages, a prey resource.
          </p>
        </>
      }
      humanInteraction={
        <p>
          The lake sturgeon has a long history of human interaction in North America and was historically depleted across much of its range. Its global conservation status on the IUCN Red List has been revised over time as assessments have been updated, so any single category is best treated as attributed and subject to change rather than fixed; readers should consult the current IUCN Red List entry for the species&#39; present global classification. Independent of the global category, the lake sturgeon is widely recognized as historically depleted and remains protected or treated as a species of conservation concern in many U.S. states and Canadian provinces. Because the species grows slowly, matures late, and recovers gradually, ongoing protection and habitat management are commonly emphasized. This page is strictly educational and provides no fishing, harvesting, caviar, or food guidance; people with questions about local rules or the status of nearby populations should consult the relevant fish and wildlife authorities.
        </p>
      }
      faqs={[
        {
          question: "Is the lake sturgeon endangered?",
          answer:
            "Its global conservation status on the IUCN Red List has been revised over time, so the current category should be checked against the present IUCN Red List entry rather than treated as fixed. Regardless of the global listing, the lake sturgeon was historically depleted and remains protected or treated as a species of conservation concern in many U.S. states and Canadian provinces.",
        },
        {
          question: "Why do lake sturgeon populations recover so slowly?",
          answer:
            "Lake sturgeon grow slowly, mature late, and may take many years to reach reproductive age, and individuals do not necessarily spawn every year. Because their life history unfolds over decades, populations are slow to rebuild once reduced.",
        },
        {
          question: "What does a lake sturgeon eat?",
          answer:
            "It is a bottom feeder that uses sensory barbels to locate prey and a toothless, protrusible mouth to suck up food. Its diet centers on small bottom-dwelling invertebrates such as insect larvae, crustaceans, and mollusks.",
        },
        {
          question: "Where is the lake sturgeon found?",
          answer:
            "It occurs in parts of North America and is associated with large rivers and lakes, including waters within the Great Lakes, Mississippi, and Hudson Bay drainages. Its distribution within these basins is uneven rather than continuous.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Acipenser fulvescens" },
        { label: "Animal group", value: "Fish (ray-finned, sturgeon)" },
        { label: "Family or order", value: "Acipenseridae; order Acipenseriformes" },
        { label: "Size", value: "Large; capable of long, slow growth over many years" },
        { label: "Diet", value: "Bottom-dwelling invertebrates (insect larvae, crustaceans, mollusks)" },
        { label: "Habitat", value: "Large freshwater rivers and lakes; bottom-oriented" },
        { label: "Range", value: "Parts of North America (Great Lakes, Mississippi, Hudson Bay drainages)" },
        { label: "Conservation status", value: "IUCN Red List status has changed over time (attributed; check current entry); protected or of conservation concern in many states/provinces" },
      ]}
      relatedLinks={[
        { label: "Sturgeon Profile", href: "/animals/sturgeon", description: "Sturgeons more broadly" },
        { label: "Alligator Gar", href: "/animals/alligator-gar", description: "Another ancient North American fish" },
        { label: "Chinook Salmon", href: "/animals/chinook-salmon", description: "Another North American freshwater fish" },
        { label: "North American fauna", href: "/fauna/continents/north-america", description: "Animals of North America" },
        { label: "Fish", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
