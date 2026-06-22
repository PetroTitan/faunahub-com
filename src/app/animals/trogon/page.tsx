import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/trogon";
const TITLE = "Trogon — Profile, the Jewel-Toned Forest Birds (and Quetzal Kin)";
const DESC =
  "Explore trogons (family Trogonidae): brilliantly coloured tropical forest birds — including the famous quetzals — that sit motionless, swivel their toes oddly, and nest in tree holes.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("trogon"),
});

export default function TrogonPage() {
  return (
    <AnimalProfileLayout
      commonName="Trogon"
      scientificName="family Trogonidae"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Birds"
      parentCategoryHref="/animal-encyclopedia/birds"
      tags={["Bird", "Tropical", "Forest"]}
      image={getAnimalImage("trogon") ?? undefined}
      galleryImages={getAnimalGalleryImages("trogon")}
      sources={ANIMAL_SOURCES.trogon}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            Trogons (family Trogonidae) are among the most beautiful birds of the world&apos;s
            tropical forests — compact, upright birds with soft, often iridescent plumage in
            brilliant greens, blues, reds, oranges, and yellows. They are found in the American
            tropics, Africa, and Asia, and the family includes the legendary quetzals of Central
            America, whose males trail spectacularly long tail plumes. With their stout bodies,
            short necks, and broad tails, trogons have a distinctive, almost ornamental look.
          </p>
          <p>
            Despite their dazzling colours, trogons are surprisingly easy to overlook: they often
            perch quietly and motionless for long periods, and they have a curious foot in which the
            toe arrangement differs from nearly all other birds.
          </p>
          <p>
            <strong>Note:</strong> &ldquo;trogon&rdquo; covers a family of species; details here
            describe the group broadly. Treat general statements as approximate and verify against
            authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Trogons live in forests across the tropics — the greatest variety in the American tropics,
          with others in sub-Saharan Africa and in South and Southeast Asia. Most inhabit humid
          lowland and montane forest, perching in the mid- and upper levels among the foliage, though
          some occur in drier woodland. They are strongly tied to forest cover.
        </p>
      }
      diet={
        <p>
          Trogons feed mainly on fruit and insects, with the balance varying by species — some take
          more fruit, others more insects and small invertebrates, and a few will take small lizards.
          They are known for plucking food on the wing: a trogon often sits still, then sallies out to
          snatch a fruit or an insect in mid-air or from foliage before returning to its perch.
        </p>
      }
      behavior={
        <p>
          Trogons are generally quiet, still birds that perch upright and motionless, scanning their
          surroundings, which — together with their habit of sitting with their backs to an observer —
          makes the brilliant colours surprisingly easy to miss. They have a unique foot structure
          called heterodactyly, in which the first and second toes point backward (unlike any other
          birds), an arrangement suited to clinging to perches. Trogons nest in cavities, excavating or
          enlarging holes in rotten wood, tree trunks, or even termite and wasp nests, where they raise
          their young. Males are usually the more vividly coloured sex, and many trogons give simple,
          repeated hooting or churring calls.
        </p>
      }
      humanInteraction={
        <p>
          Trogons are treasured by birdwatchers for their beauty, and the resplendent quetzal in
          particular holds deep cultural significance in Central America and is a major draw for
          ecotourism. Because they depend on forest — and often on dead trees for nest holes — habitat
          loss is the main threat, and some species, including certain quetzals, are of conservation
          concern, while many trogons remain reasonably common. Conserving forest with old and dead
          trees helps them. Consult the IUCN Red List for species-specific status.
        </p>
      }
      faqs={[
        {
          question: "Are quetzals trogons?",
          answer:
            "Yes. The famous quetzals of Central America — including the resplendent quetzal, with the male's extraordinarily long tail plumes — belong to the trogon family, Trogonidae. They're essentially the most spectacular members of the group, sharing the trogons' brilliant colours, upright posture, cavity nesting, and unusual feet.",
        },
        {
          question: "Why are trogons hard to spot despite their bright colours?",
          answer:
            "Because they sit so still. Trogons often perch quietly and motionless for long stretches, frequently with their duller-coloured backs facing outward, so their vivid fronts are hidden. Their stillness, combined with the dappled light of the forest, lets these dazzling birds blend in and go unnoticed surprisingly often.",
        },
        {
          question: "What is unusual about a trogon's feet?",
          answer:
            "Trogons have a unique toe arrangement called heterodactyly: the first and second toes point backward and the third and fourth point forward — a configuration found in no other birds. This distinctive foot helps them cling to their perches, though it makes them rather weak-footed and reluctant to walk.",
        },
        {
          question: "What do trogons eat?",
          answer:
            "Mainly fruit and insects, with the mix varying by species; some also take small invertebrates or the occasional small lizard. Trogons typically perch quietly and then dart out to pluck a fruit or snatch an insect in flight or from foliage, returning to a perch to eat — a sit-and-sally feeding style.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Family Trogonidae (trogons)" },
        { label: "Includes", value: "Quetzals" },
        { label: "Class", value: "Aves" },
        { label: "Look", value: "Compact, upright, iridescent colours" },
        { label: "Feet", value: "Heterodactyl (unique toe arrangement)" },
        { label: "Diet", value: "Fruit & insects (sally-feeds)" },
        { label: "Nests", value: "In cavities (wood, termite/wasp nests)" },
        { label: "Range", value: "Tropical Americas, Africa & Asia" },
      ]}
      relatedLinks={[
        { label: "Quetzal Profile", href: "/animals/quetzal", description: "The most famous trogon" },
        { label: "Jacamar Profile", href: "/animals/jacamar", description: "Another glittering tropical bird" },
        { label: "Toucan Profile", href: "/animals/toucan", description: "Another colourful forest bird" },
        { label: "Fauna by Continent", href: "/fauna/continents", description: "Tropical-forest fauna in context" },
        { label: "Birds Encyclopedia", href: "/animal-encyclopedia/birds" },
      ]}
    />
  );
}
