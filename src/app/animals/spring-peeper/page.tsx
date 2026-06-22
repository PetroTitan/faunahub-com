import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/spring-peeper";
const TITLE = "Spring Peeper — Profile, the Tiny Frog That Sings in the Spring";
const DESC =
  "Explore the spring peeper (Pseudacris crucifer): a tiny North American tree frog marked with an X on its back, whose ringing 'peep' chorus is a famous herald of spring.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("spring-peeper"),
});

export default function SpringPeeperPage() {
  return (
    <AnimalProfileLayout
      commonName="Spring Peeper"
      scientificName="Pseudacris crucifer"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Frog", "North America"]}
      image={getAnimalImage("spring-peeper") ?? undefined}
      galleryImages={getAnimalGalleryImages("spring-peeper")}
      sources={ANIMAL_SOURCES["spring-peeper"]}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            The spring peeper (<em>Pseudacris crucifer</em>) is a tiny tree frog of eastern North
            America, no bigger than a thumbnail, tan to brown in colour and marked with a dark,
            X-shaped cross on its back — a pattern that gives it its species name, <em>crucifer</em>
            (&ldquo;cross-bearer&rdquo;). For its size it is astonishingly loud: in late winter and
            spring, choruses of calling males fill wetlands and woodlands with a ringing,
            sleigh-bell-like sound that is one of the classic signs that spring has arrived.
          </p>
          <p>
            Despite being abundant and famously noisy, spring peepers are small, nocturnal, and
            well camouflaged, so they are far more often heard than seen.
          </p>
          <p>
            <strong>Note:</strong> details here cover the spring peeper as a species; treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Spring peepers live across much of eastern North America, in woodlands, marshes, and
          shrubby or grassy areas near water. They breed in temporary and permanent wetlands —
          ponds, ditches, swamps, and flooded fields, especially fish-free pools — and outside the
          breeding season they live among leaf litter and low vegetation in nearby woods and
          fields.
        </p>
      }
      diet={
        <p>
          Spring peepers are insectivores, eating small invertebrates such as ants, beetles, flies,
          spiders, and other tiny arthropods that they catch among the vegetation and on the
          ground, mostly at night. Their tadpoles feed in the water on algae and organic matter
          before transforming into tiny froglets.
        </p>
      }
      behavior={
        <p>
          The spring peeper&apos;s fame rests on its voice. In the breeding season, males gather at
          wetlands and call — a high, clear, repeated &ldquo;peep&rdquo; — inflating a balloon-like
          vocal sac under the chin; together, large choruses produce a ringing, jingling wall of
          sound that carries far on early spring nights. Tiny adhesive toe pads let peepers climb,
          though they often stay low in vegetation. They are nocturnal and secretive outside of
          breeding, and remarkably cold-tolerant: spring peepers can survive partial freezing of
          their bodies in winter, helped by natural antifreeze compounds, which lets them emerge and
          call very early in the year. After breeding, females lay eggs in the water and the adults
          disperse into surrounding habitat.
        </p>
      }
      humanInteraction={
        <p>
          Spring peepers are beloved harbingers of spring across eastern North America, and their
          chorus is a cherished seasonal sound; they are also helpful eaters of insects. They remain
          common and widespread, though like all amphibians they depend on clean breeding wetlands
          and can be affected by habitat loss, pollution, and disease. Protecting small woodland
          ponds helps them. Consult AmphibiaWeb and the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "Why is it called a spring peeper?",
          answer:
            "Because of when and how it calls. In late winter and spring, male spring peepers gather at wetlands and give a high, clear, repeated 'peep,' and large choruses ring out on early spring nights — one of the classic signs that spring has arrived. The 'peep' is the call, and 'spring' is the season it announces.",
        },
        {
          question: "What is the X on a spring peeper's back?",
          answer:
            "It's a dark, roughly X- or cross-shaped marking on the frog's tan-to-brown back, and it's the easiest way to recognise the species. This cross pattern even gives the frog its scientific name, Pseudacris crucifer — 'crucifer' meaning 'cross-bearer.' The colour and marking also help camouflage it among leaf litter.",
        },
        {
          question: "How can such a tiny frog be so loud?",
          answer:
            "Male spring peepers have a balloon-like vocal sac under the chin that they inflate to amplify their 'peep.' Individually each frog is loud for its size, and when many call together the chorus becomes a ringing, sleigh-bell-like wall of sound that can be heard from a long way off — impressive for a frog smaller than a thumbnail.",
        },
        {
          question: "How do spring peepers survive winter?",
          answer:
            "They're remarkably cold-hardy. Spring peepers can endure partial freezing of their bodies during winter, protected by natural 'antifreeze' compounds (like glucose) that limit ice damage to their cells. This tolerance lets them overwinter under leaf litter and emerge to call very early in the year, sometimes while it's still quite cold.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Pseudacris crucifer" },
        { label: "Class", value: "Amphibia (tree frog)" },
        { label: "Size", value: "Tiny (about thumbnail-sized)" },
        { label: "Mark", value: "Dark X / cross on the back" },
        { label: "Voice", value: "Ringing 'peep' chorus; herald of spring" },
        { label: "Diet", value: "Insectivore (small invertebrates)" },
        { label: "Winter", value: "Tolerates partial body freezing" },
        { label: "Range", value: "Eastern North America" },
      ]}
      relatedLinks={[
        { label: "Tree Frog Profile", href: "/animals/tree-frog", description: "Other climbing frogs with toe pads" },
        { label: "Bullfrog Profile", href: "/animals/bullfrog", description: "A large, loud North American frog" },
        { label: "Wood Frog relatives — Frog Profile", href: "/animals/frog", description: "Frogs as a group" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "North American fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
