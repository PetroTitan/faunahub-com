import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/spadefoot-toad";
const TITLE = "Spadefoot Toad — Profile, Burrowing Toads & Drought Survival";
const DESC =
  "Explore spadefoot toads (families Pelobatidae and Scaphiopodidae): burrowing toads that dig backwards with spade-like feet and wait out dry spells underground, breeding in fast bursts.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("spadefoot-toad"),
});

export default function SpadefootToadPage() {
  return (
    <AnimalProfileLayout
      commonName="Spadefoot Toad"
      scientificName="Pelobates fuscus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Toad", "Burrower"]}
      image={getAnimalImage("spadefoot-toad") ?? undefined}
      galleryImages={getAnimalGalleryImages("spadefoot-toad")}
      sources={ANIMAL_SOURCES["spadefoot-toad"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Spadefoot toads are plump, burrowing amphibians named for the hard, sharp-edged
            &ldquo;spade&rdquo; on each hind foot, which they use to dig themselves backwards
            into the ground. The common spadefoot (<em>Pelobates fuscus</em>), shown here, is
            a European example, while other spadefoots live in North America, North Africa,
            and Asia. Many have striking vertical (cat-like) pupils, smoother skin than
            typical toads, and a habit of spending most of their lives hidden underground.
          </p>
          <p>
            Spadefoots are masters of waiting: they burrow down and stay dormant through dry
            or cold periods, emerging to feed and breed in sudden bursts when rain arrives.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;spadefoot toad&rdquo; covers several species in two
            families; details here use the common spadefoot as a reference. Treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Spadefoot toads favour areas with soft, sandy, or loose soils that they can dig
          into — sandy heaths, farmland, dunes, grassland, and dry or semi-arid country —
          across Europe, North America, North Africa, and parts of Asia depending on the
          species. They need temporary or permanent pools for breeding but otherwise stay
          buried in the soil much of the year.
        </p>
      }
      diet={
        <p>
          Spadefoot toads are carnivores that eat insects, worms, spiders, and other small
          invertebrates, hunting at night when they come to the surface. Because they may be
          active for only short periods between long spells underground, they often feed
          heavily when conditions are good to build up reserves.
        </p>
      }
      behavior={
        <p>
          Using the keratinous spade on each hind foot, a spadefoot can shuffle backwards and
          sink straight down into loose soil, disappearing in moments. There it can wait out
          drought or winter in a dormant state for long periods. In arid regions, spadefoots
          are famous &ldquo;explosive breeders&rdquo;: after heavy rain fills temporary pools,
          large numbers emerge at once, breed rapidly, and their tadpoles develop with
          unusual speed to beat the pools drying up — in some species, tadpoles can even shift
          to a carnivorous form to grow faster. Spadefoots are mostly nocturnal and rely on
          burrowing rather than speed to avoid danger.
        </p>
      }
      humanInteraction={
        <p>
          Spadefoot toads are harmless and help control insects, but their reliance on soft
          soils and temporary pools makes them sensitive to farming changes, drainage, and
          habitat loss, and several are of conservation concern. Their secretive, buried
          lifestyle means they are easily overlooked. Consult AmphibiaWeb and the IUCN Red
          List for current status.
        </p>
      }
      faqs={[
        {
          question: "What is the 'spade' on a spadefoot toad?",
          answer:
            "It's a hard, sharp-edged, keratin-covered tubercle on each hind foot that works like a digging blade. Using these spades, the toad shuffles backwards and sinks straight down into loose soil, burying itself quickly. The spades are the toad's key tool for its underground lifestyle and give it its name.",
        },
        {
          question: "How do spadefoot toads survive droughts?",
          answer:
            "By going underground and waiting. Spadefoots dig down into the soil and enter a dormant state, sometimes for long stretches, riding out dry or cold periods. When rain finally comes, they emerge to feed and breed in a quick burst, taking advantage of the temporary water before it disappears.",
        },
        {
          question: "What are 'explosive breeders'?",
          answer:
            "It's a term for animals that breed in sudden, brief, intense bursts. Many spadefoot toads do this: after heavy rain fills temporary pools, large numbers surface and breed almost at once, and their tadpoles develop very fast to transform before the pools dry out. Some spadefoot tadpoles can even become carnivorous to grow more quickly.",
        },
        {
          question: "Are spadefoot toads dangerous?",
          answer:
            "No — spadefoot toads are harmless to people. They are small, secretive, mostly nocturnal amphibians that eat insects and spend much of their lives buried. Some can produce a mild skin secretion (occasionally with a garlic-like smell) as a defence, but they pose no threat to humans.",
        },
      ]}
      quickFacts={[
        { label: "Reference species", value: "Pelobates fuscus (common spadefoot)" },
        { label: "Class", value: "Amphibia (toad)" },
        { label: "Signature trait", value: "Hind-foot 'spade' for backward digging" },
        { label: "Diet", value: "Carnivore (insects & invertebrates)" },
        { label: "Survival", value: "Burrows; dormant through dry/cold spells" },
        { label: "Breeding", value: "Often 'explosive' after rain" },
        { label: "Range", value: "Europe, N. America, N. Africa, Asia" },
        { label: "Status", value: "Some of concern (verify)" },
      ]}
      relatedLinks={[
        { label: "Toad Profile", href: "/animals/toad", description: "Toads as a group" },
        { label: "Midwife Toad Profile", href: "/animals/midwife-toad", description: "Another remarkable European toad" },
        { label: "Bullfrog Profile", href: "/animals/bullfrog", description: "A large, very different frog" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "European fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
