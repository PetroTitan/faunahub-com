import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/tody";
const TITLE = "Tody — Profile, the Tiny Jewel-Birds of the Caribbean";
const DESC =
  "Explore todies (family Todidae): minuscule, big-headed, emerald-green Caribbean birds with red throats that dart out to snatch insects — among the smallest birds of the West Indies.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("tody"),
});

export default function TodyPage() {
  return (
    <AnimalProfileLayout
      commonName="Tody"
      scientificName="family Todidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Caribbean", "Insectivore"]}
      image={getAnimalImage("tody") ?? undefined}
      galleryImages={getAnimalGalleryImages("tody")}
      sources={ANIMAL_SOURCES.tody}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Todies (family Todidae) are tiny, jewel-like birds found only in the Caribbean — among the
            smallest birds of the West Indies. Plump and big-headed with a short tail, a long flat bill, and
            dazzling emerald-green upperparts set off by a bright red throat, a tody looks like a living
            gem. The five species are split among Cuba, Jamaica (the Jamaican tody, <em>Todus todus</em>),
            Puerto Rico, and Hispaniola, with the Cuban tody (<em>Todus multicolor</em>) shown here.
          </p>
          <p>
            Despite their small size, todies are conspicuous and confiding, often perching low and allowing
            a close approach, and they are surprisingly energetic insect-hunters with a distinctive way of
            catching prey.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;tody&rdquo; covers the five Todidae species; details here describe
            the group broadly. Treat general statements as approximate and verify against authoritative
            sources.
          </p>
        </>
      }
      habitat={
        <p>
          Todies live only on the islands of the Greater Antilles in the Caribbean, each species confined to
          one or two islands. They occupy a range of wooded habitats — rainforest, dry forest, scrub,
          woodland, plantations, and gardens — where they perch in the understorey and forest edge, generally
          favouring areas with good insect life and suitable banks for nesting.
        </p>
      }
      diet={
        <p>
          Todies are insectivores that feed mainly on insects and other small invertebrates, and occasionally
          tiny fruit. They use a characteristic hunting technique called &ldquo;underleaf-sallying&rdquo;:
          perching quietly, then flying up to snatch an insect from the underside of a leaf with their long
          bill before returning to a perch. They are remarkably busy feeders, catching large numbers of small
          prey for their size.
        </p>
      }
      behavior={
        <p>
          Todies are active, perky little birds, often sitting with the bill tilted upward and the throat
          puffed, then darting out in quick sallies to grab insects from foliage. They are usually seen alone
          or in pairs, and some make a soft whirring sound with their wings in flight or display. A striking
          part of their biology is nesting: todies dig a long, narrow tunnel into an earthen bank or roadside
          cutting and lay their eggs in a chamber at the end — an unusual nest for such a tiny bird. Relatives
          of the motmots and kingfishers, they share that group&apos;s habit of burrow-nesting.
        </p>
      }
      humanInteraction={
        <p>
          Todies are beloved by birdwatchers and are cherished island endemics, and they help control insects
          in forests and gardens. Most remain reasonably common within their small ranges, but because each
          species is confined to one or a few islands, they are inherently vulnerable to habitat loss and
          other island-scale pressures, so conserving Caribbean forest matters for their future. Consult the
          IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Where do todies live?",
          answer:
            "Only in the Caribbean, on the islands of the Greater Antilles. The five species are confined to Cuba, Jamaica, Puerto Rico, and Hispaniola (Hispaniola has two), with each species restricted to one or two islands. This makes todies special Caribbean endemics found nowhere else on Earth.",
        },
        {
          question: "How do todies catch their food?",
          answer:
            "With a technique called 'underleaf-sallying.' A tody perches quietly, often with its bill tilted up, then flies out to snatch an insect from the underside of a leaf with its long, flat bill before returning to a perch. For such a tiny bird it catches a remarkable number of small insects this way.",
        },
        {
          question: "Why do such tiny birds dig long nest tunnels?",
          answer:
            "Todies are relatives of kingfishers and motmots, and like them they're burrow-nesters. A pair digs a long, narrow tunnel into an earthen bank or roadside cutting and nests in a chamber at the end. The hidden, underground nest helps protect the eggs and chicks — an impressive feat of excavation for a bird so small.",
        },
        {
          question: "What does a tody look like?",
          answer:
            "Like a living jewel: a tiny, plump, big-headed bird with a short tail, brilliant emerald-green upperparts, and a vivid red throat, plus a long, flattened bill. Todies are among the smallest birds of the West Indies, and their bright colours and confiding nature make them favourites with anyone lucky enough to see one.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Todidae (todies)" },
        { label: "Reference species", value: "Todus multicolor / Todus todus" },
        { label: "Class", value: "Aves" },
        { label: "Size", value: "Tiny (among the smallest West Indian birds)" },
        { label: "Look", value: "Emerald green, red throat, big head, long bill" },
        { label: "Diet", value: "Insectivore ('underleaf-sallying')" },
        { label: "Nests", value: "In tunnels dug into earth banks" },
        { label: "Range", value: "Greater Antilles, Caribbean (endemic)" },
      ]}
      relatedLinks={[
        { label: "Motmot Profile", href: "/animals/motmot", description: "A close, burrow-nesting relative" },
        { label: "Kingfisher Profile", href: "/animals/kingfisher", description: "Another tunnel-nesting relative" },
        { label: "Bee-eater Profile", href: "/animals/bee-eater", description: "Another jewel-toned insect-hunter" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Caribbean fauna in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
