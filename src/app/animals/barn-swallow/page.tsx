import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/barn-swallow";
const TITLE = "Barn Swallow — Profile, Migration, Mud Nests & Aerial Hunting";
const DESC =
  "Explore the barn swallow (Hirundo rustica): the world's most widespread swallow, an aerial insect hunter that builds mud nests on farm buildings.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("barn-swallow"),
});

export default function BarnSwallowPage() {
  return (
    <AnimalProfileLayout
      commonName="Barn Swallow"
      scientificName="Hirundo rustica"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Migratory","Aerial Insectivore"]}
      image={getAnimalImage("barn-swallow") ?? undefined}
      galleryImages={getAnimalGalleryImages("barn-swallow")}
      sources={ANIMAL_SOURCES["barn-swallow"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The barn swallow (<em>Hirundo rustica</em>) is the most widespread swallow in the world, breeding across North America, Europe, Asia and North Africa and wintering across the southern hemisphere. Few songbirds are so closely tied to human buildings.
        </p>
        <p>
          It is built entirely for flight: long pointed wings, a deeply forked tail with long outer streamers, and a wide gape for catching insects on the wing. The upperparts are glossy blue-black, the throat and forehead rufous.
        </p>
        <p>
          Barn swallows are among the most familiar long-distance migrants in the world, and their arrival is treated as a marker of spring across much of the northern hemisphere.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Barn swallows breed in open and semi-open country — farmland, meadows, pasture, marsh edges and around villages and towns — almost always near structures they can nest on and open water or damp ground that supplies mud and insects. They have become so associated with human buildings that natural nest sites such as caves and cliff ledges are now rarely used across much of the range.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Barn swallows are aerial insectivores, catching flying insects in flight: flies, midges, beetles, aphids, flying ants, grasshoppers and moths. They hunt low over fields, water and livestock, often following grazing animals or farm machinery that flush insects into the air, and they drink by skimming the surface of water in flight.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          The nest is a cup of mud pellets mixed with plant fibre, built up on a ledge, beam or wall inside or on a barn, bridge, porch or culvert, and lined with feathers. Both parents build it and feed the young, and pairs frequently raise more than one brood in a season. Outside breeding, barn swallows gather in large roosting flocks, often in reedbeds, before and during migration.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Few wild birds live so closely alongside people. Barn swallows nest almost exclusively on human structures across much of the range, which makes them vulnerable to changes in farm buildings — sealed barns, converted outbuildings and fewer livestock all reduce nest sites and insect prey. Broader declines in flying-insect abundance and pressures along migration routes are also implicated in regional declines. This profile offers no guidance on handling birds or nests, which are legally protected in many countries. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "How far do barn swallows migrate?",
          answer:
            "Very far — they are among the longest-distance migrants of any songbird, breeding across the northern hemisphere and wintering in the southern. European breeders, for example, winter in sub-Saharan Africa. Exact distances vary by population, so it is better to describe the pattern than to quote a single figure.",
        },
        {
          question: "What are barn swallow nests made of?",
          answer:
            "Mud. The birds collect mud pellets, mix them with plant fibre, and build a cup on a ledge, beam or wall, lining it with feathers. Both members of the pair build and both feed the young, and a pair will often raise more than one brood in a season.",
        },
        {
          question: "What do barn swallows eat?",
          answer:
            "Flying insects, caught in the air — flies, midges, beetles, aphids, flying ants and moths. They hunt low over fields and water, often following grazing livestock or farm machinery that disturb insects into flight, and they drink by skimming the water's surface as they fly.",
        },
        {
          question: "Why do barn swallows nest on buildings?",
          answer:
            "Because buildings replicate the sheltered ledges they originally used in caves and on cliffs, and they offer better protection. The association is now so complete that across much of the range barn swallows nest almost exclusively on structures — which is also why changes to farm buildings affect them so directly.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Hirundo rustica" },
        { label: "Family", value: "Hirundinidae" },
        { label: "Class", value: "Aves" },
        { label: "Distribution", value: "The most widespread swallow" },
        { label: "Tail", value: "Deeply forked with long streamers" },
        { label: "Nest", value: "Mud cup on a building ledge or beam" },
        { label: "Diet", value: "Flying insects, caught on the wing" },
        { label: "Migration", value: "Long-distance, between hemispheres" },
      ]}
      relatedLinks={[
        { label: "Swift Profile", href: "/animals/swift", description: "Another aerial insectivore" },
        { label: "Hummingbird Profile", href: "/animals/hummingbird" },
        { label: "Migration & Navigation", href: "/animal-senses-and-adaptations/migration-and-navigation" },
        { label: "Sparrow Profile", href: "/animals/sparrow" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
