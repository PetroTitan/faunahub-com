import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/hagfish";
const TITLE = "Hagfish — Profile, the Slime-Making Jawless Fish of the Deep";
const DESC =
  "Explore hagfish (class Myxini): ancient, jawless, eel-shaped deep-sea fish that defend themselves by instantly producing huge amounts of slime, and tie themselves in knots to feed.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("hagfish"),
});

export default function HagfishPage() {
  return (
    <AnimalProfileLayout
      commonName="Hagfish"
      scientificName="e.g. Eptatretus stoutii"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Jawless", "Deep sea"]}
      image={getAnimalImage("hagfish") ?? undefined}
      galleryImages={getAnimalGalleryImages("hagfish")}
      sources={ANIMAL_SOURCES.hagfish}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Hagfish (class Myxini) are ancient, eel-shaped marine animals that belong to one
            of the oldest surviving lineages of vertebrates. Like lampreys, they are jawless
            and have a skeleton of cartilage, with no true jaws, no scales, and no paired
            fins; instead of biting jaws they have a tongue-like structure armed with rasping
            tooth-plates. The Pacific hagfish (<em>Eptatretus stoutii</em>) is shown here.
            Hagfish live on and near the seafloor, often in deep water, and are famous for one
            spectacularly effective defence.
          </p>
          <p>
            When attacked or stressed, a hagfish can release a tiny amount of material that
            expands almost instantly into a huge volume of thick, fibrous slime — clogging the
            mouth and gills of a would-be predator and letting the hagfish escape.
          </p>
          <p>
            <strong>Note:</strong> there are many hagfish species; details here use the Pacific
            hagfish as a reference. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Hagfish live in cold marine waters worldwide, mostly on muddy or soft seabeds from
          shallow depths down into the deep sea. They burrow in soft sediment and shelter in
          burrows or crevices, coming out to scavenge. Their preference for the dark seafloor
          is part of why they are seldom seen except by deep-sea cameras or in fishing nets.
        </p>
      }
      diet={
        <p>
          Hagfish are scavengers and predators of the seafloor. They are famous for feeding on
          dead and dying animals — including large carcasses such as dead whales and fish that
          sink to the bottom — burrowing into the body and feeding from the inside. They also
          take small live invertebrates. Remarkably, hagfish can absorb some nutrients
          directly through their skin and gills, and they can survive long periods between
          meals.
        </p>
      }
      behavior={
        <p>
          Two behaviours make hagfish extraordinary. First, the slime: specialised glands
          release threads and mucus that, on contact with seawater, expand into liters of
          gelatinous slime in a fraction of a second — one of the fastest and most effective
          defences in nature. Second, knot-tying: a hagfish can tie its flexible body into a
          knot and slide the knot along itself, which helps it wrench off chunks of food
          (since it has no jaws), clean slime off its own body, and escape a predator&apos;s
          grip. Hagfish sense their world mainly by smell and touch, as their eyesight is very
          poor.
        </p>
      }
      humanInteraction={
        <p>
          Hagfish are ecologically important recyclers of the deep, clearing carcasses from
          the seafloor, and they are fished in some regions — sold as food and for their skin,
          marketed as &ldquo;eel skin&rdquo; leather. Their remarkable slime is studied for
          possible uses in strong, sustainable fibres and materials. They are harmless to
          people. Status varies by species and fishery. Consult authoritative sources for
          details.
        </p>
      }
      faqs={[
        {
          question: "Why do hagfish make slime?",
          answer:
            "As a defence. When threatened, a hagfish releases a small amount of special thread-and-mucus material that, on contact with seawater, expands almost instantly into a huge volume of thick, fibrous slime. This clogs the mouth and gills of an attacking fish, often making it gag and release the hagfish, which then escapes. It's one of the fastest, most effective defences known.",
        },
        {
          question: "Are hagfish really fish?",
          answer:
            "They are often grouped with 'fish,' but hagfish are jawless vertebrates belonging to a very ancient lineage, quite distinct from the true bony and cartilaginous fish. They have no jaws, scales, or paired fins and a cartilage skeleton. Along with lampreys, hagfish are studied as living relatives of the earliest backboned animals.",
        },
        {
          question: "How do hagfish eat without jaws?",
          answer:
            "Instead of jaws, a hagfish has a tongue-like structure with rasping tooth-plates that it uses to grip and tear food. It often burrows into a carcass to feed from the inside, and it can tie its body into a knot and brace against itself to wrench off chunks of flesh. It can even absorb some nutrients through its skin.",
        },
        {
          question: "Why do hagfish tie themselves in knots?",
          answer:
            "Knot-tying is a versatile trick. By forming a knot and sliding it along its body, a hagfish can gain leverage to tear off food, scrape excess slime off itself, and pull free from a predator's grip. This flexibility, combined with their slime, makes hagfish surprisingly hard to catch or hold.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Class Myxini (jawless)" },
        { label: "Reference species", value: "Eptatretus stoutii (Pacific hagfish)" },
        { label: "Body", value: "Eel-shaped; cartilage; no jaws/scales/paired fins" },
        { label: "Signature defence", value: "Instant slime in huge amounts" },
        { label: "Feeding", value: "Scavenger; ties knots to tear food" },
        { label: "Senses", value: "Poor eyesight; relies on smell & touch" },
        { label: "Habitat", value: "Cold seafloors, shallow to deep" },
        { label: "To humans", value: "Harmless; fished in places" },
      ]}
      relatedLinks={[
        { label: "Lamprey Profile", href: "/animals/lamprey", description: "The other living jawless lineage" },
        { label: "Eel Profile", href: "/animals/eel", description: "A true (bony) eel of similar shape" },
        { label: "Giant Isopod Profile", href: "/animals/giant-isopod", description: "Another deep-sea scavenger" },
        { label: "Ocean fauna by depth", href: "/fauna/ocean", description: "Deep-sea habitats in context" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
      ]}
    />
  );
}
