import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/marbled-newt";
const TITLE = "Marbled Newt — Profile, the Green-and-Black Newt & Its Life Cycle";
const DESC =
  "Explore the marbled newt (Triturus marmoratus): a striking green-and-black newt of western Europe that breeds in ponds and spends much of the year hidden on land.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("marbled-newt"),
});

export default function MarbledNewtPage() {
  return (
    <AnimalProfileLayout
      commonName="Marbled Newt"
      scientificName="Triturus marmoratus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Newt", "Europe"]}
      image={getAnimalImage("marbled-newt") ?? undefined}
      galleryImages={getAnimalGalleryImages("marbled-newt")}
      sources={ANIMAL_SOURCES["marbled-newt"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The marbled newt (<em>Triturus marmoratus</em>) is one of Europe&apos;s most
            beautiful amphibians — a fairly large newt patterned in bright green marbled with
            black, often with an orange stripe down the back (especially in females and
            juveniles). Native to western Europe, it is a close relative of the crested newts,
            and breeding males develop a (smooth, not jagged) crest along the back during the
            aquatic phase.
          </p>
          <p>
            Like other newts, the marbled newt leads a double life: it returns to ponds to
            breed in spring, then spends much of the rest of the year on land, hidden in damp,
            sheltered places.
          </p>
          <p>
            <strong>Note:</strong> details here cover the marbled newt as a species; treat
            general statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Marbled newts live in western Europe — across much of France and the Iberian
          Peninsula — in woodland, scrub, hedgerows, and farmland with ponds nearby. They
          breed in still or slow fresh water such as ponds and ditches, and spend their
          terrestrial phase in cool, moist hiding places on land: under logs and stones, in
          burrows, and in leaf litter.
        </p>
      }
      diet={
        <p>
          Marbled newts are carnivores. In the water they eat aquatic invertebrates, tadpoles,
          and tiny crustaceans (such as water fleas and copepods); on land they take insects,
          worms, slugs, and other small invertebrates. They forage mainly at night, snapping
          up small prey they encounter.
        </p>
      }
      behavior={
        <p>
          The marbled newt&apos;s year follows a clear rhythm. In the breeding season it
          becomes aquatic, and the male performs a courtship display in the water — fanning
          his tail to waft scents toward the female — before she takes up a sperm packet and
          lays eggs, carefully wrapping each one in a leaf of a water plant. The eggs hatch into
          aquatic larvae that develop and then leave the water. For the rest of the year the
          newts live on land, mostly nocturnal and secretive, and they hibernate through
          winter. Their bright marbling and skin secretions help warn off predators.
        </p>
      }
      humanInteraction={
        <p>
          Marbled newts are harmless and appealing amphibians, valued by naturalists and
          sometimes found in garden ponds within their range. Like all amphibians they are
          sensitive to the loss of breeding ponds, pollution, and disease, and some
          populations have declined, so they receive legal protection in places. Consult
          AmphibiaWeb and the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "What's the difference between a newt and a salamander?",
          answer:
            "Newts are a kind of salamander. The term 'newt' is generally used for salamanders that spend part of their life in water, especially during the breeding season, like the marbled newt. So all newts are salamanders, but not all salamanders are called newts — it's a matter of lifestyle and tradition rather than a strict biological line.",
        },
        {
          question: "Why is the marbled newt green and black?",
          answer:
            "Its green-and-black marbled pattern provides both camouflage among damp vegetation and, with the help of mild skin secretions, a degree of warning to predators. The bright colours and bold pattern are most striking in this species, making it one of the most beautiful European newts.",
        },
        {
          question: "How do marbled newts breed?",
          answer:
            "They return to ponds in spring. The male courts the female in the water by fanning his tail to send chemical signals her way, then deposits a sperm packet that she takes up. She lays her eggs one at a time, wrapping each in the leaf of a water plant for protection. The eggs hatch into aquatic larvae before the young eventually move onto land.",
        },
        {
          question: "Where do marbled newts spend most of their lives?",
          answer:
            "On land. Apart from the spring breeding season spent in ponds, marbled newts live a terrestrial life, hiding by day in cool, damp places — under logs and stones, in burrows, and in leaf litter — and coming out at night to feed. They also hibernate on land through the winter.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Triturus marmoratus" },
        { label: "Class", value: "Amphibia (newt / salamander)" },
        { label: "Relatives", value: "Crested newts" },
        { label: "Colour", value: "Green marbled with black; orange stripe" },
        { label: "Diet", value: "Carnivore (small invertebrates)" },
        { label: "Life cycle", value: "Breeds in ponds; lives mostly on land" },
        { label: "Range", value: "Western Europe (France, Iberia)" },
        { label: "Status", value: "Protected in places (verify)" },
      ]}
      relatedLinks={[
        { label: "Newt Profile", href: "/animals/newt", description: "Newts as a group" },
        { label: "Fire Salamander Profile", href: "/animals/fire-salamander", description: "A striking land salamander" },
        { label: "Midwife Toad Profile", href: "/animals/midwife-toad", description: "Another remarkable European amphibian" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "European fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
