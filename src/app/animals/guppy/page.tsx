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

const title = "Guppy — Profile, Habitat, Diet & Behavior";
const description =
  "The guppy (Poecilia reticulata): an educational profile of this small, colourful livebearing fish — appearance, native range, behaviour, and responsible aquarium context.";

export const metadata: Metadata = buildArticleMetadata({
  title,
  description,
  path: "/animals/guppy",
  publishedTime: PUBLISHED,
  modifiedTime: MODIFIED,
  ogImage: getAnimalOgImage("guppy"),
});

export default function GuppyPage() {
  return (
    <AnimalProfileLayout
      commonName="Guppy"
      scientificName="Poecilia reticulata"
      pageTitle={title}
      description={description}
      path="/animals/guppy"
      parentCategory="Fish"
      parentCategoryHref="/animal-encyclopedia/fish"
      tags={["Fish", "Freshwater", "Aquarium"]}
      image={getAnimalImage("guppy") ?? undefined}
      galleryImages={getAnimalGalleryImages("guppy")}
      factsHeaderNote="Guppies are small, popular aquarium fish, but they still need a properly maintained, filtered tank and breed rapidly. This page is educational, not aquarium-care or veterinary advice."
      overview={
        <>
          <p>
            The guppy (<em>Poecilia reticulata</em>) is a small, colourful
            freshwater fish native to northeastern South America and widely kept
            in home aquariums. Guppies are &quot;livebearers&quot;, giving birth
            to free-swimming young rather than laying eggs, and they are known
            for the bright, varied colours and patterns of males. They are
            hardy and popular, but they are still living animals with real care
            needs.
          </p>
        </>
      }
      habitat={
        <>
          <p>
            Wild guppies live in warm fresh and brackish waters of South America
            and nearby islands, including streams, ponds, and ditches. They have
            also been widely introduced around the world, sometimes
            deliberately, which can affect native species. In captivity they are
            kept in heated, filtered aquariums. Aquarium guppies should never be
            released into local waterways.
          </p>
        </>
      }
      diet={
        <>
          <p>
            Guppies are omnivores that feed on small invertebrates, algae, and
            organic matter in the wild, and on prepared foods in aquariums. This
            page does not give feeding quantities; appropriate diet and amounts
            depend on the individual fish and tank, and should follow qualified
            aquarium guidance.
          </p>
        </>
      }
      behavior={
        <>
          <p>
            Guppies are active, generally peaceful, social fish often kept in
            groups. Males court females with displays of their colourful fins.
            They breed readily and frequently in aquariums, so populations can
            grow quickly, which is something to plan for. As with all fish,
            behaviour and health depend strongly on water quality and a
            well-maintained environment.
          </p>
        </>
      }
      humanInteraction={
        <>
          <p>
            Guppies have been selectively bred into a huge range of colours and
            tail shapes and are among the most common beginner aquarium fish.
            They are aquarium animals, not wildlife; introduced populations can
            harm native ecosystems, so they should not be released. Responsible
            keeping means a maintained, filtered tank, attention to water
            quality, and qualified help if a fish appears unwell. This profile is
            educational and not a substitute for aquarium-care or veterinary
            advice.
          </p>
        </>
      }
      extraSections={[
        {
          heading: "Appearance & Recognition",
          body: (
            <>
              <p>
                Guppies show striking differences between the sexes. Males are
                small and slender with bright colours and often large, patterned
                tails, while females are larger, fuller-bodied, and more plainly
                coloured. Selective breeding has produced many fancy strains with
                different colours and fin shapes. Their small size and upturned
                mouth suit feeding near the surface.
              </p>
            </>
          ),
        },
      ]}
      similarAnimals={
        <p>
          Guppies belong to the livebearer family Poeciliidae, alongside mollies,
          platies, and swordtails. Among FaunaHub&apos;s aquarium profiles, the
          betta is another popular small freshwater fish, though it is a
          carnivorous labyrinth fish with very different temperament and care.
        </p>
      }
      comparisonCallouts={[
        { href: "/aquarium-care/guppy-care-basics", label: "Guppy care basics" },
        { href: "/aquarium-care", label: "Aquarium care hub" },
      ]}
      faqs={[
        {
          question: "Why do my guppies keep having babies?",
          answer:
            "Guppies are livebearers that breed readily in aquariums, and females can produce broods regularly. This means populations can grow quickly. Planning for this — through tank size, housing, or guidance from a knowledgeable aquarium source — is part of responsible keeping.",
        },
        {
          question: "Are guppies good beginner fish?",
          answer:
            "Guppies are popular with beginners because they are small and adaptable, but \"beginner-friendly\" does not mean effortless. They still need a properly cycled, filtered, heated tank and good water quality. Treat them as real animals with real needs, not decorations.",
        },
        {
          question: "Why are male and female guppies so different?",
          answer:
            "Guppies show strong sexual dimorphism. Males are smaller and brightly coloured with ornate tails used in courtship, while females are larger and more plainly coloured. Selective breeding has further exaggerated male colour and fin variety.",
        },
      ]}
      quickFacts={[
        { label: "Scientific name", value: "Poecilia reticulata" },
        { label: "Family", value: "Poeciliidae (livebearers)" },
        { label: "Type", value: "Freshwater fish" },
        { label: "Native range", value: "Northeastern South America" },
        { label: "Reproduction", value: "Livebearer (bears live young)" },
        { label: "Diet", value: "Omnivore" },
        { label: "Context", value: "Popular aquarium fish — needs maintained, filtered water" },
      ]}
      relatedLinks={[
        { label: "Betta Fish Profile", href: "/animals/betta-fish", description: "Another popular small aquarium fish" },
        { label: "Angelfish Profile", href: "/animals/angelfish" },
        { label: "Aquarium Care Hub", href: "/aquarium-care", description: "Responsible fishkeeping basics" },
        { label: "Fish Encyclopedia", href: "/animal-encyclopedia/fish" },
        { label: "Animal Encyclopedia", href: "/animal-encyclopedia" },
      ]}
      sources={ANIMAL_SOURCES.guppy}
      publishedDate={PUBLISHED}
      modifiedDate={MODIFIED}
    />
  );
}
