import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import { getAnimalGalleryImages, getAnimalImage, getAnimalOgImage } from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PATH = "/animals/harvestman";
const TITLE = "Harvestman — Profile, Why It Is Not a Spider & Daddy Longlegs Myth";
const DESC =
  "Explore harvestmen (Opiliones): arachnids with one fused body section, no silk and no venom glands — not spiders, and not the world's most venomous animal.";

export const metadata: Metadata = buildArticleMetadata({
  title: TITLE,
  description: DESC,
  path: PATH,
  publishedTime: "2026-09-06",
  modifiedTime: "2026-09-06",
  ogImage: getAnimalOgImage("harvestman"),
});

export default function HarvestmanPage() {
  return (
    <AnimalProfileLayout
      commonName="Harvestman"
      scientificName="order Opiliones"
      pageTitle={TITLE}
      description={DESC}
      path={PATH}
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Arachnid","Opiliones","Myth-Busting"]}
      image={getAnimalImage("harvestman") ?? undefined}
      galleryImages={getAnimalGalleryImages("harvestman")}
      sources={ANIMAL_SOURCES.harvestman}
      factsHeaderNote="“Harvestman” covers over six thousand species in the order Opiliones. The name “daddy longlegs” is also applied to cellar spiders and to crane flies, which are different animals entirely."
      publishedDate="2026-09-06"
      modifiedDate="2026-09-06"
      overview={
        <>
        <p>
          Harvestmen are arachnids of the order Opiliones — and one of the most persistently misunderstood animals there is. They are <strong>not spiders</strong>. They belong to a separate order, and the differences are fundamental rather than cosmetic.
        </p>
        <p>
          A spider has two clearly separated body sections joined by a narrow waist, silk glands, and venom glands with fangs. A harvestman has a body that appears as a <strong>single fused oval</strong>, <strong>no silk glands</strong> at all, and <strong>no venom glands</strong>. It also has just one pair of eyes, usually mounted on a small turret, where most spiders have eight.
        </p>
        <p>
          This matters because of a widespread myth: that the daddy longlegs is the most venomous animal in the world but has fangs too short to bite. Harvestmen have <strong>no venom glands whatsoever</strong>, so the claim cannot be true of them.
        </p>
        </>
      }
      habitat={
        <>
        <p>
          Harvestmen occur on every continent except Antarctica, in habitats from tropical rainforest to temperate woodland, grassland, caves, deserts and gardens. They favour humid, sheltered places — leaf litter, under logs and stones, in vegetation, on tree trunks and walls — because they lose water easily. Many are most visible in late summer and autumn, which is where the name &apos;harvestman&apos; comes from.
        </p>
        </>
      }
      diet={
        <>
        <p>
          Unlike spiders, which liquefy their food, harvestmen can <strong>eat solid particles</strong>. Most are omnivores and scavengers, taking small invertebrates, dead animals, fungi, decaying plant material, bird droppings and other organic matter. Some are active predators of small soft-bodied invertebrates.
        </p>
        </>
      }
      behavior={
        <>
        <p>
          Harvestmen have no web and hunt or scavenge on foot. Defence relies on several tactics: many species can shed a leg, which continues twitching to distract a predator, though unlike a lizard&apos;s tail the leg does not regrow. Many also have scent glands that release defensive chemicals. Some tropical species aggregate in dense clusters of thousands of individuals, which is thought to combine defensive chemistry and moisture retention.
        </p>
        </>
      }
      humanInteraction={
        <>
        <p>
          Harvestmen are entirely harmless to people — no venom, no silk, no bite of concern — and they are useful scavengers and predators in gardens and leaf litter. Their main significance to people is as the subject of a durable myth about venom, which persists partly because the name &apos;daddy longlegs&apos; is applied inconsistently to harvestmen, cellar spiders and crane flies. This profile offers no pest-control guidance; harvestmen are best left alone.
        </p>
        </>
      }
      faqs={[
        {
          question: "Is a harvestman a spider?",
          answer:
            "No. Harvestmen belong to the order Opiliones, a separate order of arachnids. A spider has two body sections joined by a narrow waist, silk glands and venom glands; a harvestman has a single fused-looking body, no silk glands and no venom glands, plus one pair of eyes rather than eight.",
        },
        {
          question: "Are daddy longlegs the most venomous animal in the world?",
          answer:
            "No — and for harvestmen the claim is impossible, because they have no venom glands at all. The myth is also confused by the name: 'daddy longlegs' is applied to harvestmen, to cellar spiders and to crane flies. None of them is the most venomous animal in the world.",
        },
        {
          question: "Can harvestmen regrow a lost leg?",
          answer:
            "No. A harvestman can shed a leg to escape a predator, and the detached leg keeps twitching to distract the attacker — but unlike a lizard's tail, the leg does not grow back. The animal lives out its life with the remaining legs.",
        },
        {
          question: "What do harvestmen eat?",
          answer:
            "A wide range of things, and unlike spiders they can eat solid food rather than only liquefied prey. Most are omnivores and scavengers taking small invertebrates, dead animals, fungi, decaying plant matter and other organic material; some hunt small soft-bodied invertebrates actively.",
        },
      ]}
      quickFacts={[
        { label: "Order", value: "Opiliones — 6,000+ species" },
        { label: "Class", value: "Arachnida" },
        { label: "Not", value: "A spider" },
        { label: "Body", value: "Appears as a single fused oval" },
        { label: "Silk glands", value: "None" },
        { label: "Venom glands", value: "None" },
        { label: "Eyes", value: "One pair, usually on a turret" },
        { label: "Feeding", value: "Can eat solid food particles" },
      ]}
      relatedLinks={[
        { label: "Spider Profile", href: "/animals/spider", description: "The group it is confused with" },
        { label: "Scorpion Profile", href: "/animals/scorpion", description: "Another arachnid order" },
        { label: "Tick Profile", href: "/animals/tick" },
        { label: "Jumping Spider Profile", href: "/animals/jumping-spider" },
        { label: "Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
      ]}
    />
  );
}
