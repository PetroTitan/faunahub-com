import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/painted-frog";
const TITLE = "Painted Frog — Profile, a Mediterranean Frog and 'Living Fossil' Lineage";
const DESC =
  "Explore painted frogs (genus Discoglossus): mottled Mediterranean frogs of an ancient lineage, with a round tongue they can't flick out — using the Mediterranean painted frog.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("painted-frog"),
});

export default function PaintedFrogPage() {
  return (
    <AnimalProfileLayout
      commonName="Painted Frog"
      scientificName="genus Discoglossus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Frog", "Mediterranean"]}
      image={getAnimalImage("painted-frog") ?? undefined}
      galleryImages={getAnimalGalleryImages("painted-frog")}
      sources={ANIMAL_SOURCES["painted-frog"]}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Painted frogs (genus <em>Discoglossus</em>) are smooth-skinned frogs of the
            Mediterranean region, named for the handsome &ldquo;painted&rdquo; look of their
            mottled coats, which can be plain, blotched, or boldly striped in browns, greys, reds,
            and greens. The Mediterranean painted frog (<em>Discoglossus pictus</em>), shown here,
            is a typical example, found around the western Mediterranean.
          </p>
          <p>
            Behind their ordinary frog appearance, painted frogs belong to a very old lineage of
            amphibians and share a curious feature with their relatives the fire-bellied toads and
            midwife toads: a rounded, disc-like tongue fixed to the floor of the mouth that they
            cannot flick out the way most frogs do.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;painted frog&rdquo; covers several Discoglossus species;
            details here use the Mediterranean painted frog as a reference. Treat general statements
            as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Painted frogs live around the Mediterranean — the Mediterranean painted frog occurs in
          parts of North Africa and the Iberian region (and has been introduced elsewhere), while
          other species live on Mediterranean islands and nearby mainlands. They favour damp places
          near still or slow fresh water, such as ponds, ditches, streams, and pools, including
          temporary waters, and often live in disturbed and human-altered habitats.
        </p>
      }
      diet={
        <p>
          Painted frogs are carnivores, eating insects, worms, and other small invertebrates. Since
          they cannot shoot out their tongue to catch prey at a distance, they rely on lunging at
          and grabbing food with their mouths, often near the water&apos;s edge where they hunt the
          small animals that share their damp habitat.
        </p>
      }
      behavior={
        <p>
          Painted frogs are largely tied to water and active in the cooler, wetter parts of the day
          and at night. The genus name <em>Discoglossus</em> means &ldquo;disc-tongue,&rdquo;
          referring to the rounded tongue attached across the floor of the mouth — unlike typical
          frogs, painted frogs cannot flick this tongue out to snatch prey, an ancient trait shared
          with their close relatives. They breed in water, where males call to attract females and
          eggs are laid that hatch into aquatic tadpoles. Members of this old lineage retain several
          primitive features, making them of particular interest to biologists studying amphibian
          evolution.
        </p>
      }
      humanInteraction={
        <p>
          Painted frogs are harmless and adaptable, and several species cope reasonably well in
          human-altered habitats; the Mediterranean painted frog has even established introduced
          populations outside its native range. Like all amphibians they depend on clean breeding
          waters and can be affected by habitat loss, pollution, and disease, and some
          restricted-range island species are of greater conservation concern. Consult AmphibiaWeb
          and the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Why is it called a painted frog?",
          answer:
            "Because of its attractively patterned skin. Painted frogs have smooth coats mottled, blotched, or striped in browns, greys, reds, and greens, giving them a 'painted' look that varies a lot between individuals and species. The colourful, variable markings are the source of the name.",
        },
        {
          question: "What's unusual about a painted frog's tongue?",
          answer:
            "It can't be flicked out. The genus name Discoglossus means 'disc-tongue': painted frogs have a rounded tongue attached across the floor of the mouth, so unlike most frogs they can't shoot it out to catch prey at a distance. Instead they lunge at and grab food with their mouths. This is an ancient trait shared with relatives like fire-bellied and midwife toads.",
        },
        {
          question: "Are painted frogs a 'living fossil'?",
          answer:
            "They belong to a very old amphibian lineage and keep several primitive features, which is why they're sometimes described in those terms and are of special interest for studying frog evolution. They share this ancient heritage with their close relatives, the fire-bellied toads and midwife toads.",
        },
        {
          question: "Where do painted frogs live?",
          answer:
            "Around the Mediterranean. The Mediterranean painted frog occurs in parts of North Africa and the Iberian region (and has been introduced elsewhere), while other species live on Mediterranean islands and adjacent mainlands. They like damp spots near still or slow fresh water, including ponds, ditches, and temporary pools, and often do well in human-modified areas.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Genus Discoglossus (painted frogs)" },
        { label: "Reference species", value: "Discoglossus pictus (Mediterranean painted frog)" },
        { label: "Class", value: "Amphibia (frog)" },
        { label: "Name from", value: "Mottled, 'painted' coat" },
        { label: "Quirk", value: "Disc-like tongue can't be flicked out" },
        { label: "Relatives", value: "Fire-bellied & midwife toads (ancient lineage)" },
        { label: "Diet", value: "Carnivore (insects, worms)" },
        { label: "Range", value: "Mediterranean region" },
      ]}
      relatedLinks={[
        { label: "Fire-Bellied Toad Profile", href: "/animals/fire-bellied-toad", description: "Close relative in the same ancient lineage" },
        { label: "Midwife Toad Profile", href: "/animals/midwife-toad", description: "Another disc-tongued relative" },
        { label: "Frog Profile", href: "/animals/frog", description: "Frogs as a group" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Mediterranean fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
