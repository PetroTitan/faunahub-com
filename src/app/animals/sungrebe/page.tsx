import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/sungrebe";
const TITLE = "Sungrebe — Profile, the Bird That Carries Chicks in Flight";
const DESC =
  "Explore the sungrebe (Heliornis fulica): a small, secretive American waterbird — a finfoot — extraordinary for the male's ability to carry tiny chicks in skin pouches under his wings.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-21",
  modifiedTime: "2026-06-21",
  ogImage: getAnimalOgImage("sungrebe"),
});

export default function SungrebePage() {
  return (
    <AnimalProfileLayout
      commonName="Sungrebe"
      scientificName="Heliornis fulica"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Wetland", "Americas"]}
      image={getAnimalImage("sungrebe") ?? undefined}
      galleryImages={getAnimalGalleryImages("sungrebe")}
      sources={ANIMAL_SOURCES.sungrebe}
      publishedDate="2026-06-21"
      modifiedDate="2026-06-21"
      overview={
        <>
          <p>
            The sungrebe (<em>Heliornis fulica</em>) is a small, slender, secretive waterbird
            of the American tropics and a member of the finfoot family (Heliornithidae),
            named for the lobed, brightly banded toes that propel it through the water.
            Olive-brown above and pale below, with a boldly striped head and neck, the
            sungrebe slips quietly along shaded, overhung waterways, swimming low with a
            distinctive bobbing motion and rarely straying far from cover.
          </p>
          <p>
            It is one of the most remarkable birds in the world for a single astonishing
            reason: the male can carry his tiny chicks tucked into pouches of skin under his
            wings — and can even fly while doing so.
          </p>
          <p>
            <strong>Note:</strong> the sungrebe is the only American finfoot; details here
            focus on it. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Sungrebes live along quiet, vegetated freshwater — slow rivers, streams, lagoons,
          oxbow lakes, and swamps with overhanging trees and dense waterside cover — from
          Mexico through Central America and across much of tropical South America. They keep
          to shaded, sheltered water and are easily overlooked, which is part of why they are
          so seldom seen.
        </p>
      }
      diet={
        <p>
          Sungrebes are carnivores that forage along the water&apos;s edge and over the
          surface, taking insects and other invertebrates, plus small aquatic animals such as
          spiders, snails, and tiny vertebrates. They glean prey from overhanging vegetation
          and the waterline as they swim quietly beneath the cover of the bank.
        </p>
      }
      behavior={
        <p>
          The sungrebe&apos;s most extraordinary feature is its parenting. In a way unique
          among birds, the male has shallow pockets of skin under each wing, held closed by a
          fold, into which he can tuck his very small, still-helpless chicks. He can then
          swim — and even take flight — carrying the young hidden beneath his wings, a
          behaviour almost unbelievable for a bird. Otherwise sungrebes are shy and solitary
          or in pairs, swimming low with a bobbing head and quickly disappearing into cover
          when disturbed.
        </p>
      }
      humanInteraction={
        <p>
          Sungrebes are rarely seen because of their secretive habits, but they are a
          much-wanted sighting for birdwatchers exploring tropical American waterways. They
          depend on quiet, well-vegetated freshwater, so loss or disturbance of those
          habitats is the main concern; the species remains fairly widespread. Consult
          authoritative sources for current status.
        </p>
      }
      faqs={[
        {
          question: "Can a sungrebe really carry its chicks while flying?",
          answer:
            "Remarkably, yes. The male sungrebe has shallow pouches of skin beneath each wing, held shut by a fold, into which he can tuck his tiny chicks. He can then swim and even fly while carrying them hidden under his wings — a parental adaptation found in no other bird, and one of the most extraordinary in the bird world.",
        },
        {
          question: "What is a finfoot?",
          answer:
            "A finfoot is a member of the small family Heliornithidae — secretive tropical waterbirds with brightly coloured, lobed toes (rather than fully webbed feet) that help them swim. The sungrebe is the American finfoot; its relatives live in Africa and Asia. They are not closely related to grebes despite the name.",
        },
        {
          question: "What do sungrebes eat?",
          answer:
            "Sungrebes are carnivores, taking insects and other invertebrates along with small aquatic animals such as spiders, snails, and tiny vertebrates. They glean prey from overhanging plants and the waterline as they swim quietly under the cover of shaded banks.",
        },
        {
          question: "Why are sungrebes so hard to see?",
          answer:
            "They are shy, quiet, and stick to shaded, well-vegetated waterways, swimming low along overhung banks and slipping into cover at the first disturbance. Their cryptic colours and retiring habits mean they are often overlooked, making a sungrebe sighting a prized moment for birdwatchers.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Heliornis fulica" },
        { label: "Class", value: "Aves (a finfoot, Heliornithidae)" },
        { label: "Diet", value: "Carnivore (insects & small aquatic prey)" },
        { label: "Unique trait", value: "Male carries chicks in under-wing pouches" },
        { label: "Feet", value: "Lobed, brightly banded toes" },
        { label: "Behaviour", value: "Shy, secretive; swims under cover" },
        { label: "Range", value: "Tropical Americas" },
        { label: "Status", value: "Widespread but seldom seen (verify)" },
      ]}
      relatedLinks={[
        { label: "Jacana Profile", href: "/animals/jacana", description: "Another tropical waterbird with unusual parenting" },
        { label: "Limpkin Profile", href: "/animals/limpkin", description: "Another American wetland bird" },
        { label: "Sunbittern Profile", href: "/animals/sunbittern", description: "Another secretive riverside bird" },
        { label: "Birdwatching", href: "/birdwatching", description: "Tips for observing birds" },
        { label: "Bird Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
