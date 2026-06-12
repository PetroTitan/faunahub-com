import type { Metadata } from "next";
import AnimalProfileLayout from "@/components/AnimalProfileLayout";
import { ANIMAL_SOURCES } from "@/lib/educational/animal-sources";
import {
  getAnimalGalleryImages,
  getAnimalImage,
  getAnimalOgImage,
} from "@/lib/images/animal-images";
import { buildArticleMetadata } from "@/lib/metadata";

const PUBLISHED = "2026-06-12";
const MODIFIED = "2026-06-12";

const title = "Praying Mantis — Profile, Habitat, Diet & Behavior";
const description =
  "Praying mantises are predatory insects with grasping forelegs. A group-level overview of Mantodea using the European mantis as a reference: ambush hunting and camouflage.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/praying-mantis",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("praying-mantis"),
});

export default function PrayingMantisPage() {
  return (
    <AnimalProfileLayout
      commonName="Praying Mantis"
      pageTitle={title}
      description={description}
      path="/animals/praying-mantis"
      parentCategory="Insects & Invertebrates"
      parentCategoryHref="/animal-encyclopedia/insects"
      tags={["Insect", "Predator", "Invertebrate"]}
      image={getAnimalImage("praying-mantis") ?? undefined}
      galleryImages={getAnimalGalleryImages("praying-mantis")}
      factsHeaderNote="“Praying mantis” covers the order Mantodea, with around 2,000 species. The reference shown is the European mantis (Mantis religiosa). Appearance and habitat vary; many species are superb camouflage specialists."
      overview={
        <>
          <p>
            Praying mantises (or mantids) are predatory insects in the order
            Mantodea, named for the way they hold their spined front legs folded
            as if in prayer. There are roughly two thousand species worldwide,
            mostly in warm regions. This page is a group-level overview; the
            European mantis (<em>Mantis religiosa</em>) is shown as a familiar
            reference. Mantises are ambush hunters famous for their swivelling,
            triangular heads and excellent eyesight.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Mantises live mainly in temperate and tropical habitats including
            grasslands, shrublands, forests, and gardens, where vegetation
            provides cover for ambushing prey. Many species are highly
            camouflaged to match leaves, bark, grass, or flowers. They are most
            diverse in warm regions, and habitat and appearance vary
            considerably across the order.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Mantises are carnivorous ambush predators. They wait motionless and
            strike with their spined forelegs to seize prey, mainly insects and
            other invertebrates, and larger species occasionally take small
            vertebrates. They generally hunt by sight, helped by their mobile
            head and large eyes. Because they prey on many insects, mantises are
            sometimes considered helpful in gardens, though they are not
            selective and eat beneficial insects too.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            A mantis typically sits still and well camouflaged, then strikes
            very rapidly when prey comes within reach. Mantises can turn their
            heads to follow movement, an unusual ability among insects. Females
            lay eggs in a protective foam case called an ootheca that hardens
            around the eggs. Sexual cannibalism, in which the female sometimes
            eats the male, is documented in some species but is not universal.
            Behaviour varies between species.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Praying mantises are popular and harmless to people, and they
            feature in folklore and as subjects of fascination for their hunting
            behaviour and camouflage. Some are kept as exotic pets, which has
            specific care requirements; FaunaHub does not provide care advice.
            Introduced mantis species can affect local insect communities in
            some areas. Most species are common, and conservation concern
            applies mainly to specialised species.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Mantises have an elongated body, a distinctive triangular head
                that can rotate widely, large compound eyes, and a pair of
                spined, grasping forelegs held in the characteristic
                &quot;praying&quot; posture. Many have well-developed wings,
                though flight ability varies, especially between males and
                females. Colour and shape are often beautifully matched to the
                plants they live on — green, brown, or even flower-like — for
                camouflage.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Mantises are most closely related to cockroaches and termites, not to
          the bees, butterflies, or beetles covered elsewhere on FaunaHub.
          Unrelated insects such as mantisflies mimic the mantis&apos;s grasping
          forelegs but belong to a different order, and some stick and leaf
          insects share the mantis&apos;s talent for camouflage.
        </p>
      }
      faqs={[
        {
          question: "Why is it called a praying mantis?",
          answer:
            "The name comes from the way mantises hold their spined front legs folded together in front of the body, a posture that looks like praying. Those same forelegs are actually used to grab and grip prey.",
        },
        {
          question: "Can a praying mantis really turn its head?",
          answer:
            "Yes. Mantises have an unusually flexible neck and can rotate their triangular heads to follow movement, which is rare among insects and helps them track prey with their large, forward-facing eyes.",
        },
        {
          question: "Do female mantises always eat the male?",
          answer:
            "No. Sexual cannibalism is documented in some mantis species and circumstances, but it is not universal and does not happen in every mating. Its frequency varies by species and conditions.",
        },
      ]}
      quickFacts={[
        { label: "Group", value: "Mantises (order Mantodea)" },
        { label: "Reference species", value: "European mantis (Mantis religiosa)" },
        { label: "Type", value: "Insect (invertebrate)" },
        { label: "Diet", value: "Carnivore (ambush predator)" },
        { label: "Hunting", value: "Grasping spined forelegs; keen eyesight" },
        { label: "Eggs", value: "Laid in a foam case (ootheca)" },
        { label: "Conservation", value: "Most common — verify for specialised species" },
      ]}
      relatedLinks={[
        { label: "Spider Profile", href: "/animals/spider", description: "Another ambush invertebrate predator" },
        { label: "Dragonfly Profile", href: "/animals/dragonfly" },
        { label: "Ant Profile", href: "/animals/ant" },
        { label: "Animal Encyclopedia — Insects & Invertebrates", href: "/animal-encyclopedia/insects" },
        { label: "Wildlife Hub", href: "/wildlife" },
      ]}
      sources={ANIMAL_SOURCES["praying-mantis"]}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
