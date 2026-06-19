import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/poison-dart-frog";
const TITLE = "Poison Dart Frog — Profile, Habitat, Diet & Toxicity";
const DESC =
  "Explore poison dart frogs (family Dendrobatidae): tiny, brilliantly coloured rainforest frogs of Central and South America whose skin toxins come from their wild diet.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-19",
  modifiedTime: "2026-06-19",
  ogImage: getAnimalOgImage("poison-dart-frog"),
});

export default function PoisonDartFrogPage() {
  return (
    <AnimalProfileLayout
      commonName="Poison Dart Frog"
      scientificName="family Dendrobatidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Frog", "Toxic skin"]}
      image={getAnimalImage("poison-dart-frog") ?? undefined}
      galleryImages={getAnimalGalleryImages("poison-dart-frog")}
      sources={ANIMAL_SOURCES["poison-dart-frog"]}
      publishedDate="2026-06-19"
      modifiedDate="2026-06-19"
      overview={
        <>
          <p>
            Poison dart frogs are small, often brilliantly coloured frogs of the
            family Dendrobatidae, native to the rainforests of Central and South
            America. Their bright patterns are a warning (aposematic) signal that
            advertises toxic skin secretions to potential predators. The animal
            shown here is the dyeing poison dart frog
            (<em>Dendrobates tinctorius</em>).
          </p>
          <p>
            Remarkably, much of their toxicity is acquired from their wild diet of
            certain small invertebrates; frogs raised in captivity on other foods
            are generally not toxic. Not all species in the family are dangerously
            toxic, and toxicity varies widely.
          </p>
          <p>
            <strong>Conservation note:</strong> many poison dart frogs have small
            ranges and are affected by habitat loss; some are threatened. Verify a
            particular species&apos; status at iucnredlist.org.
          </p>
        </>
      }
      habitat={
        <p>
          Poison dart frogs live in humid tropical rainforest in Central and South
          America, on the forest floor and in low vegetation near water. Many are
          tied to specific microhabitats, and some breed in tiny pools of water that
          collect in plants such as bromeliads.
        </p>
      }
      diet={
        <p>
          Poison dart frogs are carnivores that feed on tiny invertebrates such as
          ants, mites, and other small arthropods. This specialised wild diet is the
          source of the chemicals the frogs concentrate in their skin — which is why
          captive-raised frogs on different diets typically lack the strong toxins of
          wild ones.
        </p>
      }
      behavior={
        <p>
          Many poison dart frogs are active by day, relying on their warning colours
          rather than hiding. They are known for complex parental care: in a number
          of species, adults guard eggs and then carry hatched tadpoles on their
          backs to small pools of water. Males of many species are vocal and
          territorial.
        </p>
      }
      humanInteraction={
        <p>
          The name refers to the historical use of skin secretions from a few
          species by some Indigenous peoples to coat blow-darts. Today the main
          conservation concerns are habitat loss and, for some species, collection.
          Wild poison dart frogs should never be handled. For current,
          species-specific status, consult AmphibiaWeb and the IUCN Red List.
        </p>
      }
      faqs={[
        {
          question: "Where does a poison dart frog's poison come from?",
          answer:
            "For toxic species, the poison is largely acquired from the frog's wild diet of certain small invertebrates; the frog concentrates dietary chemicals in its skin. Frogs raised in captivity without those prey items generally do not develop the strong toxins seen in the wild.",
        },
        {
          question: "Are all poison dart frogs deadly?",
          answer:
            "No. Toxicity varies enormously across the family — some species are highly toxic while many are only mildly so or essentially harmless. The bright colours are a general warning signal, but the level of toxicity differs greatly by species and population.",
        },
        {
          question: "Why are poison dart frogs so brightly coloured?",
          answer:
            "The vivid colours are aposematic — a warning to predators that the frog may be toxic or distasteful. Being conspicuous, rather than camouflaged, helps predators learn to avoid them.",
        },
        {
          question: "How did poison dart frogs get their name?",
          answer:
            "The name comes from the historical practice by some Indigenous peoples of Central and South America of using the skin secretions of a few highly toxic species to coat the tips of blow-darts used in hunting.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Dendrobatidae" },
        { label: "Reference species", value: "Dendrobates tinctorius" },
        { label: "Class", value: "Amphibia" },
        { label: "Order", value: "Anura (frogs)" },
        { label: "Diet", value: "Tiny invertebrates (e.g. ants, mites)" },
        { label: "Toxicity", value: "Diet-derived; varies by species" },
        { label: "Colours", value: "Aposematic (warning) signalling" },
        { label: "Range", value: "Central & South American rainforest" },
        { label: "IUCN Status", value: "Varies by species (verify)" },
      ]}
      relatedLinks={[
        { label: "Tree Frog Profile", href: "/animals/tree-frog", description: "Climbing rainforest frogs" },
        { label: "Frog Profile", href: "/animals/frog", description: "Frogs as a whole (order Anura)" },
        { label: "Fire Salamander Profile", href: "/animals/fire-salamander", description: "Another toxic-skinned amphibian" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
      ]}
    />
  );
}
