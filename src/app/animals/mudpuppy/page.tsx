import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/mudpuppy";
const TITLE = "Mudpuppy — Profile, the Gilled Aquatic Salamander";
const DESC =
  "Explore the mudpuppy (Necturus maculosus): a fully aquatic North American salamander that keeps bushy external gills for life — harmless, despite myths, and an indicator of clean water.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("mudpuppy"),
});

export default function MudpuppyPage() {
  return (
    <AnimalProfileLayout
      commonName="Mudpuppy"
      scientificName="Necturus maculosus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Salamander", "North America"]}
      image={getAnimalImage("mudpuppy") ?? undefined}
      galleryImages={getAnimalGalleryImages("mudpuppy")}
      sources={ANIMAL_SOURCES.mudpuppy}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The mudpuppy (<em>Necturus maculosus</em>) is a large, fully aquatic salamander
            of eastern North America, easily recognised by the bushy, blood-red external
            gills that fan out on either side of its head. Unlike most salamanders, the
            mudpuppy never fully transforms: it keeps these larval gills and its aquatic
            lifestyle throughout life (a condition called neoteny), breathing the dissolved
            oxygen in water rather than living on land.
          </p>
          <p>
            Mudpuppies have a stout, flattened body, four short legs, a paddle-like tail, and
            mottled brownish skin. Despite local myths, they are completely harmless to
            people and are not venomous or poisonous.
          </p>
          <p>
            <strong>Note:</strong> several related Necturus species exist; details here use
            the common mudpuppy as a reference. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Mudpuppies live in lakes, rivers, streams, and ponds across much of the
          northeastern and central United States and parts of Canada. They stay in the water
          year-round — even active under ice in winter — sheltering under rocks, logs, and
          debris on the bottom, and they do best in clean, well-oxygenated water.
        </p>
      }
      diet={
        <p>
          Mudpuppies are carnivores that hunt along the bottom for crayfish, aquatic insects,
          worms, snails, small fish, and fish eggs. They are mostly nocturnal foragers,
          using smell and touch to find prey in murky water, and they seize it with a quick
          gulp.
        </p>
      }
      behavior={
        <p>
          The size and colour of a mudpuppy&apos;s external gills change with conditions: in
          warm, low-oxygen, or stagnant water the gills grow larger and redder to absorb more
          oxygen, while in cold, fast, oxygen-rich water they are smaller. Mudpuppies are
          mostly nocturnal and secretive, hiding by day and foraging at night. They can be
          long-lived for an amphibian, and males guard nest sites where females attach eggs
          to the underside of rocks.
        </p>
      }
      humanInteraction={
        <p>
          Mudpuppies are harmless and are sometimes caught accidentally by anglers, who may
          wrongly believe them to be venomous or harmful to fish — neither is true, and they
          should simply be released unharmed. Like other amphibians they are sensitive to
          pollution, so their presence is a sign of a healthy waterway, and declines can
          signal water-quality problems. Consult AmphibiaWeb and the IUCN Red List for
          current status.
        </p>
      }
      faqs={[
        {
          question: "Why does a mudpuppy have those red feathery gills?",
          answer:
            "The bushy red structures are external gills, which the mudpuppy keeps for its whole life. Because it stays aquatic and never fully transforms (a state called neoteny), it uses these gills to absorb oxygen directly from the water. The gills get larger and redder in warm or low-oxygen water and smaller in cold, oxygen-rich water.",
        },
        {
          question: "Are mudpuppies dangerous or poisonous?",
          answer:
            "No. Despite folk myths, mudpuppies are completely harmless to people — they are not venomous, not poisonous, and their bite is no real threat. Anglers who catch one accidentally sometimes fear it harms fish stocks, but that's also a myth; the best thing is simply to release it unharmed.",
        },
        {
          question: "What do mudpuppies eat?",
          answer:
            "Mudpuppies are carnivores that forage along the bottom mainly at night, eating crayfish, aquatic insects, worms, snails, small fish, and fish eggs. They locate prey by smell and touch in murky water and grab it with a quick gulp.",
        },
        {
          question: "Are mudpuppies the same as axolotls?",
          answer:
            "They're both neotenic, fully aquatic salamanders that keep their gills for life, but they are different animals. Axolotls are mole salamanders (genus Ambystoma) from Mexico, while mudpuppies (genus Necturus) are a separate North American group. They share the gilled, water-dwelling lifestyle through convergent biology rather than close kinship.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Necturus maculosus" },
        { label: "Class", value: "Amphibia (salamander)" },
        { label: "Signature trait", value: "Bushy red external gills (kept for life)" },
        { label: "Life cycle", value: "Neotenic (fully aquatic)" },
        { label: "Diet", value: "Carnivore (crayfish, insects, small prey)" },
        { label: "Harmless", value: "Yes (not venomous/poisonous)" },
        { label: "Habitat", value: "Clean North American lakes & streams" },
        { label: "Status", value: "Verify (water-quality indicator)" },
      ]}
      relatedLinks={[
        { label: "Axolotl Profile", href: "/animals/axolotl", description: "Another permanently gilled salamander" },
        { label: "Olm Profile", href: "/animals/olm", description: "A blind, gilled cave salamander" },
        { label: "Hellbender Profile", href: "/animals/hellbender", description: "A giant aquatic salamander" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "North American fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
