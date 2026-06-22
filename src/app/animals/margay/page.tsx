import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/margay";
const TITLE = "Margay — Profile, the Small Cat That Climbs Like a Monkey";
const DESC =
  "Explore the margay (Leopardus wiedii): a small, large-eyed spotted cat of the American tropics — an exceptional climber with ankles that rotate, letting it descend trees head-first.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-06-22",
  modifiedTime: "2026-06-22",
  ogImage: getAnimalOgImage("margay"),
});

export default function MargayPage() {
  return (
    <AnimalProfileLayout
      commonName="Margay"
      scientificName="Leopardus wiedii"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Mammals"
      parentCategoryHref="/animal-encyclopedia/mammals"
      tags={["Mammal", "Wild cat", "Rainforest"]}
      image={getAnimalImage("margay") ?? undefined}
      galleryImages={getAnimalGalleryImages("margay")}
      sources={ANIMAL_SOURCES.margay}
      publishedDate="2026-06-22"
      modifiedDate="2026-06-22"
      overview={
        <>
          <p>
            The margay (<em>Leopardus wiedii</em>) is a small, beautiful spotted cat of the
            forests of Central and South America, often described as a smaller, more arboreal
            cousin of the ocelot. With its large, soft eyes, big paws, and a very long tail for
            balance, the margay is supremely adapted to life in the trees — among the most
            accomplished climbers of all cats.
          </p>
          <p>
            Its climbing skills are remarkable: the margay has unusually flexible ankle joints
            that can rotate, letting it run down tree trunks head-first, hang from branches by a
            single hind foot, and move through the canopy almost like a monkey.
          </p>
          <p>
            <strong>Note:</strong> details here cover the margay as a species; treat general
            statements as approximate and verify against authoritative sources.
          </p>
        </>
      }
      habitat={
        <p>
          Margays live in forests from Mexico through Central America and into much of South
          America, strongly tied to wooded habitat — especially tropical and subtropical
          rainforest, but also other dense forests. More than most cats, the margay depends on
          intact forest with a good canopy, where it spends much of its life in the trees, which
          makes it sensitive to deforestation.
        </p>
      }
      diet={
        <p>
          The margay is a carnivore that hunts small prey such as rodents, birds, small monkeys,
          tree frogs, lizards, and insects, often up in the trees, and it also takes some fruit.
          Its agility lets it pursue prey through the branches where heavier cats cannot follow.
          Margays are reported to sometimes use clever tactics, and they are versatile,
          opportunistic hunters of the forest.
        </p>
      }
      behavior={
        <p>
          The margay is mostly nocturnal and solitary, and above all it is a climber. Its
          rotating ankle joints — flexible enough to turn the hind feet around — allow it to
          descend trunks head-first (a trick few cats can manage), cling to branches, and even
          dangle by one foot to reach prey or fruit, while its long tail provides balance for
          leaps through the canopy. It rests and hunts in the trees and moves with great agility
          high above the ground. Females typically raise just one kitten at a time, which
          contributes to the species&apos; slow reproduction.
        </p>
      }
      humanInteraction={
        <p>
          The margay was historically hunted heavily for its attractive fur, and although that
          trade is now largely banned, the species remains of conservation concern, threatened
          mainly by deforestation and habitat fragmentation, plus its naturally low reproductive
          rate. It depends on protecting large tracts of forest. As a wild forest cat, it is not
          suited to captivity as a pet. Consult the IUCN Red List for current status.
        </p>
      }
      faqs={[
        {
          question: "What makes the margay such a good climber?",
          answer:
            "Its anatomy is built for the trees. The margay has unusually flexible ankle joints that can rotate, letting it run down tree trunks head-first — something very few cats can do — and cling to or hang from branches, even by a single hind foot. Combined with a very long tail for balance and large paws, this lets it move through the canopy almost like a monkey.",
        },
        {
          question: "Is a margay the same as an ocelot?",
          answer:
            "No, but they're close relatives and look similar. The margay is smaller and far more arboreal than the ocelot, with proportionally larger eyes, a longer tail, and superior climbing ability. The two often share the same forests, but the margay spends much more of its life up in the trees.",
        },
        {
          question: "What does a margay eat?",
          answer:
            "It's a carnivore that hunts small prey — rodents, birds, small monkeys, tree frogs, lizards, and insects — frequently in the trees, and it also eats some fruit. Its remarkable agility lets it chase prey through the branches where bulkier cats can't go, making it a versatile forest hunter.",
        },
        {
          question: "Why is the margay threatened?",
          answer:
            "Mainly because of deforestation and habitat fragmentation — it depends on intact, connected forest. It was also hunted heavily for its fur in the past. On top of that, margays usually raise only one kitten at a time, so populations recover slowly. These factors together make it a species of conservation concern; check the IUCN Red List for its current status.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Leopardus wiedii" },
        { label: "Class", value: "Mammalia (wild cat)" },
        { label: "Relatives", value: "Ocelot (close kin)" },
        { label: "Signature trait", value: "Rotating ankles; descends trees head-first" },
        { label: "Diet", value: "Carnivore (small prey, often arboreal); some fruit" },
        { label: "Activity", value: "Nocturnal, solitary, arboreal" },
        { label: "Range", value: "Mexico through South America" },
        { label: "Status", value: "Of conservation concern (verify)" },
      ]}
      relatedLinks={[
        { label: "Serval Profile", href: "/animals/serval", description: "Another small-prey wild cat" },
        { label: "Jaguar Profile", href: "/animals/jaguar", description: "The big cat of the same forests" },
        { label: "Kinkajou Profile", href: "/animals/kinkajou", description: "Another tree-climbing forest mammal" },
        { label: "Endangered Animals", href: "/endangered-animals", description: "IUCN Red List categories" },
        { label: "Mammals Encyclopedia", href: "/animal-encyclopedia/mammals" },
      ]}
    />
  );
}
