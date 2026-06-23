import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/coucal";
const TITLE = "Coucal — Profile of the Cuckoo That Raises Its Own Young";
const DESC =
  "Meet the coucal (Centropus): a large, skulking ground cuckoo of the Old World that — unlike many cuckoos — builds its own nest and raises its own chicks rather than parasitising other birds.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-23",
  modifiedTime: "2026-06-23",
  ogImage: getAnimalOgImage("coucal"),
});

export default function CoucalPage() {
  return (
    <AnimalProfileLayout
      commonName="Coucal"
      scientificName="Centropus spp."
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Cuckoo", "Old World"]}
      image={getAnimalImage("coucal") ?? undefined}
      galleryImages={getAnimalGalleryImages("coucal")}
      sources={ANIMAL_SOURCES.coucal}
      publishedDate="2026-06-23"
      modifiedDate="2026-06-23"
      overview={
        <>
          <p>
            Coucals (genus <em>Centropus</em>) are large, heavy-bodied members of the cuckoo order, found
            across Africa, southern Asia, and Australasia. Many are dark birds with rich chestnut wings and
            striking red eyes, and they spend much of their time clambering through dense vegetation or
            walking on the ground rather than flying.
          </p>
          <p>
            Unlike the many cuckoos famous for laying their eggs in other birds&apos; nests, coucals are not
            brood parasites. They build their own bulky, domed nests and raise their own young — a key point
            that sets them apart from the cuckoo stereotype.
          </p>
          <p>
            <strong>Note:</strong> there are many coucal species; details here describe the group broadly,
            with familiar examples such as the greater and Senegal coucals.
          </p>
        </>
      }
      habitat={
        <p>
          Coucals favour dense, low cover — rank grassland, reedbeds, scrub, thickets, marsh edges, and the
          undergrowth of woodland and gardens. This thick vegetation suits their skulking, ground-loving
          habits, and many species are tied to damp or waterside areas.
        </p>
      }
      diet={
        <p>
          Coucals are mainly carnivorous, hunting large insects (such as grasshoppers and caterpillars) and
          small vertebrates including frogs, lizards, snakes, rodents, and the eggs and nestlings of other
          birds. They forage by clambering and walking through cover, seizing prey with a stout bill.
        </p>
      }
      behavior={
        <p>
          Coucals are usually seen singly or in pairs, moving heavily through vegetation and often sunning
          themselves with spread wings in the early morning. Their long, straight hind claw — reflected in
          the name <em>Centropus</em> (&ldquo;spur foot&rdquo;) — helps them grip as they clamber. The
          voice is a deep, resonant series of hooting &ldquo;whoop&rdquo; notes. In a number of coucal
          species the usual roles are reversed, with the male doing much of the incubating and chick-rearing.
        </p>
      }
      humanInteraction={
        <p>
          Coucals are widespread and many species are common, often living close to people in farmland,
          gardens, and overgrown ground. Most are not considered threatened, though some island species are
          of conservation concern. Consult the IUCN Red List for the status of a particular coucal.
        </p>
      }
      faqs={[
        {
          question: "Is a coucal a cuckoo?",
          answer:
            "Yes — coucals belong to the cuckoo order (Cuculiformes), in the genus Centropus. But they are atypical cuckoos: large, ground-loving, and not brood parasites.",
        },
        {
          question: "Do coucals lay their eggs in other birds' nests?",
          answer:
            "No. Unlike the well-known parasitic cuckoos, coucals build their own bulky, often domed nests and raise their own chicks. This is one of the main ways they differ from the classic cuckoo image.",
        },
        {
          question: "What does a coucal eat?",
          answer:
            "Coucals are largely carnivorous, taking big insects and small vertebrates such as frogs, lizards, snakes, and rodents, as well as eggs and nestlings. They hunt by clambering and walking through dense cover.",
        },
        {
          question: "Why is its call so deep?",
          answer:
            "Coucals give a low, resonant series of hooting 'whoop' notes that carries through thick vegetation. The deep, far-reaching call helps these skulking birds keep in contact within dense habitat where they are hard to see.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Centropus (many species)" },
        { label: "Class", value: "Aves" },
        { label: "Order", value: "Cuculiformes (cuckoos)" },
        { label: "Range", value: "Africa, southern Asia, Australasia" },
        { label: "Nesting", value: "Builds own nest; not a brood parasite" },
        { label: "Diet", value: "Insects, small vertebrates, eggs" },
        { label: "Name", value: "Centropus = 'spur foot' (long hind claw)" },
        { label: "Voice", value: "Deep hooting 'whoop' series" },
      ]}
      relatedLinks={[
        { label: "Roadrunner Profile", href: "/animals/roadrunner", description: "Another ground-dwelling cuckoo" },
        { label: "Drongo Profile", href: "/animals/drongo", description: "A bold, vocal bird of open country" },
        { label: "Go-away-bird Profile", href: "/animals/go-away-bird", description: "A noisy African bird of the bush" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Old World birds in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
