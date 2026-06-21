import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/snakehead";
const TITLE = "Snakehead — Profile, Air-Breathing Predator & Invasive Fish";
const DESC =
  "Explore snakeheads (family Channidae): air-breathing freshwater predators that can survive out of water and even wriggle overland — prized food in Asia, but damaging invaders elsewhere.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("snakehead"),
});

export default function SnakeheadPage() {
  return (
    <AnimalProfileLayout
      commonName="Snakehead"
      scientificName="e.g. Channa argus"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Freshwater", "Air-breather"]}
      image={getAnimalImage("snakehead") ?? undefined}
      galleryImages={getAnimalGalleryImages("snakehead")}
      sources={ANIMAL_SOURCES.snakehead}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            Snakeheads (family Channidae) are elongated, predatory freshwater fish of Africa
            and Asia, named for the flattened, snake-like shape of the head and the large
            scales on it. With long dorsal and anal fins, a big toothy mouth, and a robust
            body, they are formidable hunters. The northern snakehead
            (<em>Channa argus</em>), shown here, is one of the better-known species. Most
            striking is their ability to breathe air: snakeheads have a special chambered
            organ that lets them take oxygen from the air and survive where many fish cannot.
          </p>
          <p>
            That toughness — air-breathing, surviving out of water for a time, and even
            wriggling short distances over land — makes snakeheads remarkable survivors at home,
            but serious invaders where they don&apos;t belong.
          </p>
          <p>
            <strong>Note:</strong> there are many snakehead species; details here use the
            northern snakehead as a reference. Treat general statements as approximate and
            verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Snakeheads are native to fresh waters of Asia and parts of Africa — ponds, lakes,
          slow rivers, swamps, ditches, and rice paddies — often in warm, weedy, low-oxygen
          water that suits their air-breathing. Some species tolerate cooler climates, which
          is part of why a few have established damaging invasive populations after being
          introduced elsewhere, such as in North America.
        </p>
      }
      diet={
        <p>
          Snakeheads are voracious carnivores. Young ones eat insects, larvae, and tiny
          crustaceans, while adults prey heavily on other fish and also take frogs, crayfish,
          and other small animals. They are aggressive ambush predators, and their broad,
          unpicky appetite is part of why introduced snakeheads can hit native wildlife so
          hard.
        </p>
      }
      behavior={
        <p>
          The snakehead&apos;s air-breathing organ (a suprabranchial chamber) lets it gulp air
          at the surface, so it can live in stagnant, oxygen-poor water and survive out of
          water for a period if kept moist; some can even squirm overland between water bodies.
          Snakeheads are also notable parents: they build nests and guard their eggs and young
          fiercely, sometimes herding schools of fry. These traits — hardiness, big appetite,
          and protective parenting — make them very successful, for better or worse.
        </p>
      }
      humanInteraction={
        <p>
          Snakeheads have a dual reputation. In much of their native Asia they are important,
          prized food fish, farmed and eaten widely. Elsewhere, certain species introduced
          outside their range (the northern snakehead in the United States being the famous
          example, sensationalised as a &ldquo;Frankenfish&rdquo;) have become serious invasive
          predators that threaten native fish, and their import and release are tightly
          controlled. They should never be released into the wild. Consult authoritative
          sources for status.
        </p>
      }
      faqs={[
        {
          question: "Can snakeheads breathe air and survive out of water?",
          answer:
            "Yes. Snakeheads have a special air-breathing chamber above the gills that lets them gulp oxygen from the air, so they can live in stagnant, low-oxygen water and survive out of water for a time if they stay moist. Some can even wriggle short distances overland between water bodies — abilities that make them remarkably hardy.",
        },
        {
          question: "Why are snakeheads called 'Frankenfish'?",
          answer:
            "It's a sensational nickname given to the northern snakehead after it turned up as an invasive species in the United States. Its air-breathing, out-of-water survival, overland movement, and voracious appetite made for alarming headlines. The reality is less monstrous, but as an invader it genuinely threatens native fish, which is why it's taken seriously.",
        },
        {
          question: "What do snakeheads eat?",
          answer:
            "They are aggressive carnivores. Young snakeheads eat insects, larvae, and tiny crustaceans, while adults prey mainly on other fish, plus frogs, crayfish, and other small animals. This broad, voracious appetite is a big reason introduced snakeheads can damage native ecosystems.",
        },
        {
          question: "Are snakeheads good or bad?",
          answer:
            "It depends where they are. In their native Asia, snakeheads are valued, widely farmed and eaten food fish and a natural part of the ecosystem. But where introduced outside their range, certain species become damaging invasive predators of native wildlife, so their movement is strictly controlled and they must never be released into the wild.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Channidae" },
        { label: "Reference species", value: "Channa argus (northern snakehead)" },
        { label: "Class", value: "Actinopterygii (ray-finned fish)" },
        { label: "Signature trait", value: "Breathes air; survives out of water" },
        { label: "Diet", value: "Voracious carnivore (mainly fish)" },
        { label: "Parenting", value: "Builds nests; fiercely guards young" },
        { label: "Native range", value: "Asia & parts of Africa" },
        { label: "Note", value: "Damaging invader where introduced" },
      ]}
      relatedLinks={[
        { label: "Lungfish Profile", href: "/animals/lungfish", description: "Another air-breathing fish" },
        { label: "Gar Profile", href: "/animals/gar", description: "Another air-gulping predator" },
        { label: "Catfish Profile", href: "/animals/catfish", description: "Another hardy freshwater fish" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Asian freshwater fauna in context" },
      ]}
    />
  );
}
