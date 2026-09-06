import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/northern-lapwing";
const TITLE = "Northern Lapwing — Profile, Crest, Tumbling Display & Farmland";
const DESC =
  "Explore the northern lapwing (Vanellus vanellus): a crested wader with iridescent plumage, a tumbling display flight, and a decline tied to farmland.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("northern-lapwing"),
});

export default function NorthernLapwingPage() {
  return (
    <AnimalProfileLayout
      commonName="Northern Lapwing"
      scientificName="Vanellus vanellus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird","Wader","Farmland"]}
      image={getAnimalImage("northern-lapwing") ?? undefined}
      galleryImages={getAnimalGalleryImages("northern-lapwing")}
      sources={ANIMAL_SOURCES["northern-lapwing"]}
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          The northern lapwing (<em>Vanellus vanellus</em>) is a distinctive wader of open farmland and wet grassland across Europe and Asia. At a distance it looks black and white; close up the upperparts are a deep iridescent green and purple, and the head carries a long, thin, upturned crest.
        </p>
        <p>
          Its flight is unmistakable — broad, rounded, almost paddle-shaped wings and a slow flapping action, quite unlike the fast pointed-winged flight of most waders. In spring, males perform a <strong>tumbling display flight</strong>, twisting and diving while giving a wheezy call that gives the bird its old name of peewit.
        </p>
        <p>
          <strong>Conservation note:</strong> the lapwing is a species whose decline is closely tied to changes in farming. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Lapwings breed on open ground with short or sparse vegetation — spring-sown arable fields, wet meadows, damp pasture, moorland edges and marshes — across Europe and temperate Asia. They need bare or short ground to nest on and damp soil nearby where chicks can feed. In winter they gather in large flocks on pasture, stubble and estuaries, moving in response to hard weather.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Lapwings feed on soil invertebrates — earthworms, beetles, leatherjackets, larvae and other insects — taken from the surface using a run-stop-peck technique. They also foot-tremble on soft ground, vibrating a foot against the surface to bring worms up. Chicks feed themselves from hatching and need damp ground where invertebrates are accessible.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          The spring display flight is the species&apos; signature: the male climbs, then twists, rolls and dives with throbbing wingbeats while calling. Lapwings nest in a simple scrape on bare ground and defend it vigorously, mobbing crows, gulls and even much larger animals that come near. Chicks are precocial, leaving the nest soon after hatching and feeding themselves under the parents&apos; guard.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          The lapwing&apos;s decline across much of Europe is one of the clearest examples of farmland biodiversity loss. The shift from spring-sown to autumn-sown cereals means crops are already too tall when lapwings need bare ground, while drainage removes the damp areas chicks depend on and mechanised operations destroy nests. Agri-environment schemes that create nesting plots and retain damp features are used to address this. This profile offers no guidance on handling birds or nests, which are legally protected in many countries. Verify current status at the IUCN Red List.
        </p>
        </>
      }
      faqs={[
        {
          question: "Why is the lapwing called a peewit?",
          answer:
            "The name imitates its call — a wheezy, rising two-note cry given especially during the male's spring display flight. 'Lapwing' itself is generally traced to the lapping or flapping sound and action of its broad, rounded wings.",
        },
        {
          question: "What does a lapwing's display flight look like?",
          answer:
            "The male climbs, then throws himself into a series of twists, rolls and dives with slow throbbing wingbeats, calling as he goes. Combined with the broad paddle-shaped wings and flashing black-and-white pattern, it makes the display visible and audible across a whole field.",
        },
        {
          question: "Why are lapwings declining?",
          answer:
            "Largely because of changes in farming. The move from spring-sown to autumn-sown cereals means crops are too tall by the time lapwings need open ground to nest, drainage has removed the damp areas chicks feed in, and mechanised field operations destroy nests. Current status should be checked at the IUCN Red List.",
        },
        {
          question: "What do lapwings eat?",
          answer:
            "Soil invertebrates — earthworms, beetles, leatherjackets and other larvae — taken from the surface in a run-stop-peck pattern. They also foot-tremble, vibrating a foot against soft ground to bring worms to the surface.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Vanellus vanellus" },
        { label: "Family", value: "Charadriidae (plovers)" },
        { label: "Class", value: "Aves" },
        { label: "Also called", value: "Peewit, green plover" },
        { label: "Crest", value: "Long, thin and upturned" },
        { label: "Wings", value: "Broad and rounded — unusual for a wader" },
        { label: "Nest", value: "Scrape on bare or short ground" },
        { label: "Status", value: "Declining in Europe — verify" },
      ]}
      relatedLinks={[
        { label: "Sandhill Crane Profile", href: "/animals/sandhill-crane" },
        { label: "Painted Snipe Profile", href: "/animals/painted-snipe" },
        { label: "Pratincole Profile", href: "/animals/pratincole" },
        { label: "Endangered Animals", href: "/endangered-animals" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
