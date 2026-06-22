import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/red-backed-salamander";
const TITLE = "Red-backed Salamander — Profile, the Lungless Salamander of the Forest Floor";
const DESC =
  "Explore the red-backed salamander (Plethodon cinereus): a tiny, abundant, lungless woodland salamander that breathes through its skin and lays eggs on land — no water stage needed.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("red-backed-salamander"),
});

export default function RedBackedSalamanderPage() {
  return (
    <AnimalProfileLayout
      commonName="Red-backed Salamander"
      scientificName="Plethodon cinereus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Salamander", "North America"]}
      image={getAnimalImage("red-backed-salamander") ?? undefined}
      galleryImages={getAnimalGalleryImages("red-backed-salamander")}
      sources={ANIMAL_SOURCES["red-backed-salamander"]}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            The red-backed salamander (<em>Plethodon cinereus</em>) is a small, slender salamander of
            the woodlands of eastern North America — and, despite its modest size, one of the most
            abundant vertebrates in many of those forests. It is typically dark with a straight reddish
            or orange stripe down the back, though a plainer grey &ldquo;lead-backed&rdquo; form is
            common too. Most remarkably, this salamander has no lungs at all: it breathes entirely
            through its moist skin and the lining of its mouth.
          </p>
          <p>
            Being lungless ties it to cool, damp places, but it has freed itself from water in another
            way: the red-backed salamander lays its eggs on land and the young hatch as miniature
            adults, skipping the aquatic, gilled larval stage that most amphibians go through.
          </p>
          <p>
            <strong>Note:</strong> details here cover the red-backed salamander as a species; treat
            general statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Red-backed salamanders live in moist forests across eastern North America, on and just under
          the forest floor — beneath logs, bark, rocks, and leaf litter. They need cool, damp
          conditions to keep their skin moist for breathing, so they retreat deeper or become inactive
          in dry or freezing weather. In suitable woodland they can occur in astonishing numbers.
        </p>
      }
      diet={
        <p>
          Red-backed salamanders are carnivores that eat tiny invertebrates — mites, springtails,
          insects, spiders, worms, and other small soil and litter creatures. By consuming vast numbers
          of these invertebrates, the enormous combined population of red-backed salamanders plays a
          significant role in forest-floor food webs and even in how leaf litter and carbon are cycled.
        </p>
      }
      behavior={
        <p>
          Because it is lungless, the red-backed salamander&apos;s whole life revolves around staying
          moist: it breathes through its skin, so it must avoid drying out and stays hidden in damp
          microhabitats, emerging to forage on humid nights. It is territorial, defending a patch of
          prime cover and foraging ground. Reproduction is fully terrestrial — the female lays a small
          cluster of eggs in a moist, hidden spot (such as inside a rotting log) and often guards them
          until they hatch directly into tiny salamanders, with no free-swimming larval stage. Like
          many salamanders it can shed its tail to escape a predator and later regrow it.
        </p>
      }
      humanInteraction={
        <p>
          Red-backed salamanders are harmless and ecologically important, and because they are so
          numerous and sensitive to conditions, they are widely used as indicators of forest health and
          in ecological research. They remain common across much of their range, but they depend on
          moist, undisturbed woodland with plenty of logs and leaf litter, so deforestation, drying, and
          ground disturbance can hurt local populations. Leaving logs and litter in place helps them.
          Consult AmphibiaWeb and the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "How does a salamander breathe without lungs?",
          answer:
            "Through its skin (and the lining of its mouth). The red-backed salamander belongs to the lungless salamander family, and it takes in oxygen directly across its moist skin rather than with lungs. This works only as long as the skin stays damp, which is why these salamanders live in cool, moist places and avoid drying out.",
        },
        {
          question: "Do red-backed salamanders need water to breed?",
          answer:
            "No — and that's unusual for an amphibian. Instead of laying eggs in water, the female lays a small cluster of eggs in a moist, hidden spot on land, such as inside a rotting log, and often guards them. The young hatch directly as miniature salamanders, skipping the free-swimming, gilled larval stage that most frogs and many salamanders go through.",
        },
        {
          question: "Are red-backed salamanders really that common?",
          answer:
            "Yes — in many eastern North American forests they're among the most abundant vertebrates of all, sometimes outweighing the birds or small mammals in total. Their sheer numbers mean that, despite being tiny and hidden, they play a big role in forest-floor food webs and nutrient cycling.",
        },
        {
          question: "What do red-backed salamanders eat?",
          answer:
            "Tiny invertebrates — mites, springtails, insects, spiders, worms, and other small creatures of the soil and leaf litter. Because there are so many red-backed salamanders eating so many small invertebrates, they help shape the ecology of the forest floor, influencing how litter breaks down and nutrients are cycled.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Plethodon cinereus" },
        { label: "Class", value: "Amphibia (lungless salamander)" },
        { label: "Breathing", value: "Through the skin (no lungs)" },
        { label: "Reproduction", value: "Eggs laid on land; no aquatic larva" },
        { label: "Abundance", value: "Among the most numerous forest vertebrates" },
        { label: "Diet", value: "Tiny soil & litter invertebrates" },
        { label: "Role", value: "Forest-health indicator; food-web key player" },
        { label: "Range", value: "Eastern North America" },
      ]}
      relatedLinks={[
        { label: "Salamander Profile", href: "/animals/salamander", description: "Salamanders as a group" },
        { label: "Hellbender Profile", href: "/animals/hellbender", description: "A giant aquatic salamander" },
        { label: "Fire Salamander Profile", href: "/animals/fire-salamander", description: "A striking European salamander" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "North American forest fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
