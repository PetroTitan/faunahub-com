import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/surinam-toad";
const TITLE = "Surinam Toad — Profile, the Flat Frog That Births Through Its Back";
const DESC =
  "Explore the Surinam toad (Pipa pipa): an extraordinarily flat, fully aquatic South American frog whose young develop in pockets on the mother's back and pop out as tiny froglets.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("surinam-toad"),
});

export default function SurinamToadPage() {
  return (
    <AnimalProfileLayout
      commonName="Surinam Toad"
      scientificName="Pipa pipa"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Reptiles & Amphibians"
      parentCategoryHref="/animal-encyclopedia/reptiles"
      tags={["Amphibian", "Frog", "South America"]}
      image={getAnimalImage("surinam-toad") ?? undefined}
      galleryImages={getAnimalGalleryImages("surinam-toad")}
      sources={ANIMAL_SOURCES["surinam-toad"]}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The Surinam toad (<em>Pipa pipa</em>) is one of the strangest amphibians in the
            world — a large, fully aquatic frog of northern South America that looks like a
            flattened, mottled brown leaf or a piece of waterlogged debris. Its body is
            remarkably flat and angular, with tiny lidless eyes, no tongue, and star-tipped
            fingers used to feel for food in murky water. (Despite the name &ldquo;toad,&rdquo;
            it is a frog, in the tongueless family Pipidae.)
          </p>
          <p>
            But the Surinam toad is most famous for its astonishing way of reproducing: the
            eggs become embedded in the skin of the mother&apos;s back, where the young
            develop in individual pockets and eventually emerge as fully formed little
            froglets.
          </p>
          <p>
            <strong>Note:</strong> details here cover Pipa pipa specifically; related Pipa
            species differ. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Surinam toads live in slow-moving and still fresh waters — swamps, ponds, slow
          streams, and flooded forest — across the Amazon basin and other parts of northern
          South America. They are almost entirely aquatic, rarely leaving the water, and they
          rely on their camouflage to lie unnoticed among leaf litter and mud on the bottom.
        </p>
      }
      diet={
        <p>
          Surinam toads are carnivores that feed on worms, insects, small fish, and other
          small aquatic animals. Having no tongue, they cannot flick out prey like many frogs;
          instead they detect food with their sensitive, star-tipped fingers and then suck it
          in with a sudden expansion of the mouth and throat, a vacuum-like gulp.
        </p>
      }
      behavior={
        <p>
          The Surinam toad&apos;s reproduction is its most extraordinary trait. During an
          elaborate underwater courtship, the pair turns and tumbles together, and the
          released eggs are pressed onto the female&apos;s back, where the skin grows over
          them to form individual pockets. The young develop inside these pockets — skipping
          a free-swimming tadpole stage in this species — and weeks later push out of the
          mother&apos;s back as miniature adults. Otherwise the Surinam toad is a slow,
          well-camouflaged ambush feeder that stays still and inconspicuous.
        </p>
      }
      humanInteraction={
        <p>
          The Surinam toad is a famous curiosity, often featured for its bizarre appearance
          and remarkable back-brooding reproduction, and it is sometimes kept by specialist
          aquarists. In the wild it depends on healthy freshwater habitats; the species is
          generally widespread. Consult authoritative sources for current status.
        </p>
      }
      faqs={[
        {
          question: "Does the Surinam toad really give birth through its back?",
          answer:
            "In effect, yes. After courtship, the eggs are pressed onto the female's back, and her skin grows over them to enclose each one in a small pocket. The young develop inside these pockets — in Pipa pipa, right through to fully formed froglets, skipping a free tadpole stage — and then emerge by pushing out through the skin of her back. It's one of the most unusual reproductive methods of any animal.",
        },
        {
          question: "Is the Surinam toad a toad or a frog?",
          answer:
            "It's a frog, despite the common name. The Surinam toad belongs to the tongueless frog family Pipidae (the same family as the African clawed frog). The 'toad' in its name is just a traditional label; biologically it is a fully aquatic frog with no tongue.",
        },
        {
          question: "How does a tongueless frog catch food?",
          answer:
            "The Surinam toad has no tongue, so it can't flick prey into its mouth like many frogs. Instead, it uses its sensitive, star-tipped fingers to feel for prey in murky water, then catches it by suddenly opening its mouth and throat to create a vacuum that sucks the food in.",
        },
        {
          question: "Why is the Surinam toad so flat?",
          answer:
            "Its flattened, angular, mottled body is superb camouflage for life on the bottom of murky waters, where it lies still among leaf litter and mud looking like a dead leaf or debris. This helps it ambush prey and avoid predators in its slow-water habitat.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Pipa pipa" },
        { label: "Class", value: "Amphibia (a frog, family Pipidae)" },
        { label: "Signature trait", value: "Young develop in pockets on the mother's back" },
        { label: "Body", value: "Extremely flat; tongueless; star-tipped fingers" },
        { label: "Diet", value: "Carnivore (suction feeder)" },
        { label: "Lifestyle", value: "Fully aquatic; camouflaged" },
        { label: "Range", value: "Northern South America" },
        { label: "Status", value: "Widespread (verify)" },
      ]}
      relatedLinks={[
        { label: "Clawed Frog Profile", href: "/animals/clawed-frog", description: "A relative in the same tongueless family" },
        { label: "Glass Frog Profile", href: "/animals/glass-frog", description: "Another remarkable Neotropical frog" },
        { label: "Goliath Frog Profile", href: "/animals/goliath-frog", description: "The world's largest frog" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "South American fauna in context" },
        { label: "Reptiles & Amphibians", href: "/animal-encyclopedia/reptiles" },
      ]}
    />
  );
}
